import AboutPage from "@/components/Home/About";

export const metadata = {
  title: "About Us | Tech Assistant - Your Digital Growth Partner",
  description:
    "Learn about Tech Assistant, our mission, team, and how we help businesses grow through web development, mobile apps, digital marketing, and smart automation.",
  keywords:
    "about Tech Assistant, tech company, digital partner, web agency, mobile development team, marketing experts, automation services",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.co.in/about",
  },
  openGraph: {
    title: "About Tech Assistant",
    description:
      "Meet the team behind Tech Assistant. Learn about our vision, values, and expertise in delivering scalable digital solutions.",
    url: "https://www.techassistant.co.in/about",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.co.in/og-about.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "About Tech Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tech Assistant",
    description:
      "Discover who we are, what we do, and why Tech Assistant is trusted by businesses for tech innovation.",
    site: "@techassistant",
    creator: "@techassistant",
    images: ["https://www.techassistant.co.in/og-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0F172A", // Your brand color
};

export default function About() {
  return <AboutPage />;
}
