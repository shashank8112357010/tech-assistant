import QuotePage from "@/components/Home/Quote";

export const metadata = {
  title: "Get a Quote | Tech Assistant - Let's Build Together",
  description:
    "Request a free quote from Tech Assistant. Get accurate pricing for web development, app development, digital marketing, or custom tech solutions tailored to your needs.",
  keywords:
    "get a quote, tech assistant quote, web development pricing, app development cost, digital marketing quote, tech solutions pricing, request estimate",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.co.in/quote",
  },
  openGraph: {
    title: "Get a Quote | Tech Assistant",
    description:
      "Share your requirements and get a custom quote from Tech Assistant — your partner in smart digital solutions.",
    url: "https://www.techassistant.co.in/quote",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.co.in/og-quote.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Tech Assistant Quote Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Custom Quote | Tech Assistant",
    description:
      "Looking for digital services? Get your custom project quote from Tech Assistant today.",
    site: "@techassistant", // Optional
    creator: "@techassistant",
    images: ["https://www.techassistant.co.in/og-quote.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0F172A",
};

export default function Quote() {
  return <QuotePage />;
}
