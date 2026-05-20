let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) {
    return cachedToken;
  }

  const tenantId = process.env.MS_GRAPH_TENANT_ID;
  const clientId = process.env.MS_GRAPH_CLIENT_ID;
  const clientSecret = process.env.MS_GRAPH_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error(
      "Microsoft Graph credentials (MS_GRAPH_TENANT_ID, MS_GRAPH_CLIENT_ID, MS_GRAPH_CLIENT_SECRET) are not configured",
    );
  }

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
    scope: "https://graph.microsoft.com/.default",
  });

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Failed to acquire Microsoft Graph token: ${res.status} ${text}`,
    );
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000;

  return cachedToken as string;
}

export async function appendSheetValues(tableName: string, values: string[][]) {
  const token = await getAccessToken();

  const driveId = process.env.MS_GRAPH_DRIVE_ID;
  const itemId = process.env.MS_GRAPH_WORKBOOK_ITEM_ID;

  if (!driveId || !itemId) {
    throw new Error(
      "MS_GRAPH_DRIVE_ID and MS_GRAPH_WORKBOOK_ITEM_ID must be set in .env",
    );
  }

  const url =
    `https://graph.microsoft.com/v1.0/drives/${driveId}` +
    `/items/${itemId}/workbook/tables/${tableName}/rows/add`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ index: null, values }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Microsoft Graph Excel API error (${tableName}): ${res.status} ${text}`,
    );
  }

  return res;
}
