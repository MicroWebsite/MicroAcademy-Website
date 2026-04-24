export const linkify = (text: string) => {
  if (!text) return "";
  let processed = text.replace(/\n/g, "<br/>");
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  processed = processed.replace(markdownLinkRegex, (_, label, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-secondary-dark underline underline-offset-4 decoration-secondary/50 transition-all font-bold">${label}</a>`;
  });
  const urlRegex = /((?:https?:\/\/|www\.)[^\s<\]\)]+)/g;

  const parts = processed.split(/(<[^>]+>)/g);

  return parts
    .map((part) => {
      if (part.startsWith("<") && part.endsWith(">")) {
        return part;
      }
      return part.replace(urlRegex, (url) => {
        const href = url.startsWith("www.") ? `https://${url}` : url;
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-secondary-dark underline underline-offset-4 decoration-secondary/50 transition-all font-bold">${url}</a>`;
      });
    })
    .join("");
};
