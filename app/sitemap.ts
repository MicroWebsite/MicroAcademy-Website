import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.microacademy.net";

  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/services/recruitment",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/contract-hiring",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/train-and-hire",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/corporate-training",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/freshers-drive",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/job-openings",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    { path: "/careers", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
