
import HomeClient from "@/components/client-wrapper";

export const metadata = {
  title: "Home | Tech Assistant - Smart Digital Solutions",
  description:
    "Tech Assistant provides smart, scalable digital solutions including web development, mobile app development, digital marketing, and automation services for businesses of all sizes.",
  keywords:
    "Tech Assistant, web development, app development, digital marketing, automation services, smart solutions, business tech, software development",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.co.in",
  },
  openGraph: {
    title: "Tech Assistant - Smart Digital Solutions",
    description:
      "Grow your business with Tech Assistant’s modern web, mobile, and marketing solutions tailored to your needs.",
    url: "https://www.techassistant.co.in/",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.co.in/logo.png", // Replace with your real OG image
        width: 1200,
        height: 630,
        alt: "Tech Assistant - Smart Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Assistant - Smart Digital Solutions",
    description:
      "Discover innovative web and marketing solutions with Tech Assistant.",
    site: "@techassistant", // Replace with your handle if available
    creator: "@techassistant",
    images: ["https://www.techassistant.co.in/logo.png"], // Replace with actual
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export const viewport = {
  themeColor: "#0F172A", // Replace with your brand color
};


export default function Home() { 
  return <HomeClient />
}; 