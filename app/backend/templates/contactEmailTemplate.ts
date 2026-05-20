export function buildContactEmailHtml(data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #F5F4EE; font-family: 'Manrope', 'Segoe UI', Tahoma, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F5F4EE; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(106, 95, 0, 0.08);">
                
                <!-- Header Section -->
                <tr>
                  <td style="background-color: #6A5F00; padding: 48px 40px; text-align: left;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="color: #FBE426; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 2.4px; margin-bottom: 12px;">NEW MESSAGE</div>
                          <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.2;">Contact Enquiry</h1>
                        </td>
                        <td align="right" valign="top">
                          <div style="background-color: #FBE426; color: #6A5F00; padding: 8px 16px; border-radius: 100px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">
                            ENQUIRY
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content Section -->
                <tr>
                  <td style="padding: 48px 40px;">
                    <!-- Details Grid -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #EEEEEE;">
                          <div style="color: #888; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">FULL NAME</div>
                          <div style="color: #1B1C19; font-size: 15px; font-weight: 600;">${data.fullName}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 0; border-bottom: 1px solid #EEEEEE;">
                          <div style="color: #888; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">EMAIL ADDRESS</div>
                          <div style="color: #1B1C19; font-size: 15px; font-weight: 600;"><a href="mailto:${data.email}" style="color: #6A5F00; text-decoration: none;">${data.email}</a></div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 0; border-bottom: 1px solid #EEEEEE;">
                          <div style="color: #888; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">PHONE NUMBER</div>
                          <div style="color: #1B1C19; font-size: 15px; font-weight: 600;">${data.phone}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px 0;">
                          <div style="color: #888; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">MESSAGE CONTENT</div>
                          <div style="color: #1B1C19; font-size: 15px; font-weight: 600; line-height: 1.6;">${data.message || "No message provided."}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Footer Info -->
                    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #EEEEEE; font-size: 12px; color: #888; line-height: 1.8;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <strong>Date & Time:</strong> ${data.timestamp}
                          </td>
                          <td align="right" valign="bottom">
                            <span style="color: #6A5F00; font-weight: 700;">MicroAcademy Portal</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>

                <!-- Footer Section -->
                <tr>
                  <td style="background-color: #1B1C19; padding: 24px 40px; text-align: center;">
                    <p style="color: #ffffff; margin: 0; font-size: 12px; opacity: 0.6;">&copy; ${new Date().getFullYear()} MicroAcademy. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
  `;
}
