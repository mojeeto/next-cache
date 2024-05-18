import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Next.js Caching",
  description: "Learn how Next.js caching works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
