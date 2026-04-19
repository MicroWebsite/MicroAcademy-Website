export const cn = (...classes: (string | false | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const stripHtml = (html: string): string => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
};
