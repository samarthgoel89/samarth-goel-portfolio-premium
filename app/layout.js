import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "Samarth Goel | AI Strategy & Product Leader | ₹4300Cr+ Portfolio Impact",
  description:
    "Samarth Goel — AI Architect and Strategic Product Leader who built ₹400Cr in AUM, achieved 4800X operational efficiency, and saved $2M in regulatory fines. Available for advisory, AI transformation, and senior leadership roles.",
  keywords: [
    "Samarth Goel",
    "AI Strategy Leader",
    "Product Head India",
    "Clix Capital AVP",
    "Fintech AI Architect",
    "LLM Orchestration",
    "Agentic AI",
    "RAG Bot",
    "Voice AI Agent",
    "Digital Lending",
    "NBFC Product Strategy",
    "AI Business Transformation",
    "ISB PGP",
    "Senior Product Manager",
    "Gurugram",
  ],
  authors: [{ name: "Samarth Goel", url: "https://samarthgoel.com" }],
  creator: "Samarth Goel",
  metadataBase: new URL("https://samarth-goel-portfolio-premium-9y45.vercel.app"),
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://samarth-goel-portfolio-premium-9y45.vercel.app",
    siteName: "Samarth Goel — AI Strategy & Product",
    title: "Samarth Goel | AI Strategy Leader | ₹4300Cr+ Portfolio Impact",
    description:
      "I architect AI solutions that solve ₹400Cr+ business problems. Strategic Product Leader with expertise in agentic AI, digital lending, and enterprise transformation.",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Samarth Goel — AI Strategy & Product Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarth Goel | AI Architect | ₹4300Cr Impact",
    description:
      "Built ₹400Cr AUM from zero. 4800X efficiency gains. $2M risk mitigation. Available for AI transformation roles & advisory.",
    images: ["/images/og-preview.png"],
    creator: "@samarthgoel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://samarth-goel-portfolio-premium-9y45.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        <div className="aurora-bg" />
        {children}
      </body>
    </html>
  );
}
