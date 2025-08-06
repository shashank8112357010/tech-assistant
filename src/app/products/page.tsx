import ProductsPage from "@/components/Home/Products";

export const metadata = {
  title: "Products | Tech Assistant - Powerful Digital Tools",
  description:
    "Explore Tech Assistant's innovative digital products including web-based tools, mobile apps, automation systems, and SaaS solutions designed to boost business efficiency.",
  keywords:
    "Tech Assistant products, digital products, SaaS tools, business automation, tech tools, mobile apps, web tools, software products",
  authors: [{ name: "Tech Assistant" }],
  alternates: {
    canonical: "https://www.techassistant.co.in/products",
  },
  openGraph: {
    title: "Products | Tech Assistant",
    description:
      "Discover powerful digital products by Tech Assistant built to streamline and scale your business.",
    url: "https://www.techassistant.co.in/products",
    type: "website",
    siteName: "Tech Assistant",
    images: [
      {
        url: "https://www.techassistant.co.in/og-products.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Tech Assistant Products Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Tech Products | Tech Assistant",
    description:
      "Browse Tech Assistant’s product line built for business automation and digital growth.",
    site: "@techassistant", // Optional
    creator: "@techassistant",
    images: ["https://www.techassistant.co.in/og-products.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0F172A", // Replace with your brand color if different
};

export default function Products() {
  return <ProductsPage />;
}
