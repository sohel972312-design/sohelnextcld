import { Inter, Syne } from "next/font/google";
import "./globals.css";
import TiltInit from "@/components/ui/TiltInit";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressBar from "@/components/ui/ProgressBar";
const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sohelmalek.com";

export const metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Sohel Malek | Professional Web Designer & WordPress Developer in Gujarat",
  description:
    "Expert web designer & WordPress developer crafting modern, responsive websites to grow your business online. View portfolio & services.",

  keywords:
    "web design, wordpress development, UI/UX design, responsive websites, Sohel Malek, website designer, web developer",

  authors: [{ name: "Sohel Malek" }],

  // ✅ GLOBAL CANONICAL (auto applies to all pages)
  alternates: {
    canonical: "/", 
  },

  openGraph: {
    title:
      "Sohel Malek | Professional Web Designer & WordPress Developer in Gujarat",
    description:
      "Expert web designer & WordPress developer crafting modern, responsive websites to grow your business online.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/assets/img/Frame-48095890.webp`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sohel Malek | Professional Web Designer & WordPress Developer",
    description:
      "Expert web designer & WordPress developer crafting modern, responsive websites.",
    images: [`${baseUrl}/assets/img/Frame-48095890.webp`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-20">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sohel Malek",
              jobTitle: "Web Designer & WordPress Developer",
              url: "https://sohelmalek.com",
              email: "mailto:sohel@sohelmalek.com",
              telephone: "+91-97231-21537",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Borsad",
                addressRegion: "Gujarat",
                postalCode: "388540",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/sohelmalek",
                "https://www.linkedin.com/in/sohel-malek-b4b846196",
                "https://www.instagram.com/sohel_malek03",
                "https://www.facebook.com/sohelmalek03",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <TiltInit />
      </body>
    </html>
  );
}