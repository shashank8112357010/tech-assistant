import ServicesPage from "@/components/Home/Services";

export const metadata = {
  title: "Services | Tech Assistant - Web, App & Marketing Solutions",
  description:
    "Explore Tech Assistant's wide range of services including web development, mobile app development, digital marketing, SEO, branding, and automation tailored for businesses.",
  keywords:
    "Tech Assistant services, web development, app development, SEO, digital marketing, automation, business solutions, branding, UI/UX design",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.com/services",
  },
  openGraph: {
    title: "Services | Tech Assistant",
    description:
      "Tech Assistant offers scalable tech services — websites, mobile apps, marketing, automation & more — crafted for business growth.",
    url: "https://www.techassistant.com/services",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.com/og-services.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Tech Assistant Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Assistant Services",
    description:
      "Explore our tech services — web development, mobile apps, SEO, and marketing.",
    site: "@techassistant", // Optional: your Twitter handle
    creator: "@techassistant",
    images: ["https://www.techassistant.com/og-services.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0F172A", // Replace with your actual brand color
};

export default function Services() {
  return (
    <>
      <ServicesPage />
    </>
  );
}
