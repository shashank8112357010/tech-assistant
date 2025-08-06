import BlogsPage from "@/components/Home/Blog"; 

export const metadata = {
  title: "Blog | Tech Assistant - Insights & Updates",
  description:
    "Stay updated with the latest insights, tips, and trends in technology, web development, digital marketing, and business automation from Tech Assistant experts.",
  keywords:
    "Tech Assistant blog, tech news, web development tips, digital marketing articles, business automation blogs, industry trends",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.com/blogs",
  },
  openGraph: {
    title: "Tech Assistant Blog - Latest Tech & Business Insights",
    description:
      "Explore Tech Assistant's blog for expert articles on technology, digital solutions, marketing strategies, and product updates.",
    url: "https://www.techassistant.com/blogs",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.com/og-blogs.jpg", 
        width: 1200,
        height: 630,
        alt: "Tech Assistant Blog Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Assistant Blog - Expert Tech Articles",
    description:
      "Read the latest articles and updates from the Tech Assistant team — covering web, mobile, marketing, and automation.",
    site: "@techassistant",
    creator: "@techassistant",
    images: ["https://www.techassistant.com/og-blogs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0F172A", 
};

export default function Blogs() {
  return <BlogsPage />; 
}
