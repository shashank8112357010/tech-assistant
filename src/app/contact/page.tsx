import ContactPage from "@/components/Home/Contact";

export const metadata = {
  title: "Contact Us | Tech Assistant - Let's Connect",
  description:
    "Get in touch with Tech Assistant for custom tech solutions, support, and inquiries related to web development, mobile apps, or digital marketing services.",
  keywords:
    "Tech Assistant contact, get in touch, contact web agency, tech support, web development help, app development inquiry, marketing support",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.co.in/contact",
  },
  openGraph: {
    title: "Contact Tech Assistant",
    description:
      "Reach out to Tech Assistant — your digital partner for web, app, and marketing services. Let's build something great together.",
    url: "https://www.techassistant.co.in/contact",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.co.in/og-contact.jpg", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Contact Tech Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tech Assistant",
    description:
      "Need a digital solution? Contact Tech Assistant today for personalized help and quotes.",
    site: "@techassistant", // Optional
    creator: "@techassistant",
    images: ["https://www.techassistant.co.in/og-contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0F172A", // Adjust to your brand color
};

export default function Contact() {
  return <ContactPage />;
}
