import "./globals.css";

export const metadata = {
  title: "Samarth Goel | Strategic AI & Fintech Leader",
  description: "AVP @ Clix Capital | Building Agentic Workflows, Voice Assistants & Intelligent Credit Systems.",
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
