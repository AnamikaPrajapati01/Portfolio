import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const siteUrl = "https://anamikaprajapati.com.np"
const siteDescription =
  "Anamika Prajapati — Full Stack Developer in Kathmandu, Nepal building MERN stack web apps, React Native mobile apps, and AI-powered tools with the Gemini API."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anamika Prajapati | Full Stack Developer",
  description: siteDescription,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "Anamika Prajapati | Full Stack Developer",
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName: "Anamika Prajapati Portfolio",
    images: ["/anamika.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anamika Prajapati | Full Stack Developer",
    description: siteDescription,
    images: ["/anamika.jpeg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anamika Prajapati",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  image: `${siteUrl}/anamika.jpeg`,
  email: "subiprajapati5@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  sameAs: [
    "https://github.com/AnamikaPrajapati01",
    "https://www.linkedin.com/in/anamika-prajapati-989007321/",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}