import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Arjun Pawar - FullStack AI Engineer | SDE @Fynd | Professional Portfolio",
    template: "%s | Arjun Pawar Portfolio"
  },
  description: "Professional portfolio of Arjun Pawar - FullStack AI Engineer at Fynd. Building autonomous AI agents and scalable systems. Winner of Codejam 2025, Runner-up Hacktimus 2025.",
  keywords: [
    "Arjun Pawar",
    "Full-stack Developer",
    "Python Developer",
    "AI Engineer",
    "Portfolio",
    "Software Developer",
    "Machine Learning",
    "IoT Developer",
    "Web Development",
    "Next.js",
    "React",
    "FastAPI",
    "Django",
    "Automation",
    "LangChain",
    "Smart India Hackathon",
    "Freelancer",
    "AI Chatbot",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "Internship",
    "Python Automation",
    "Web Scraping",
    "API Development"
  ],
  authors: [
    {
      name: "Arjun Pawar",
      url: "https://arjunpawar.tech/",
    },
  ],
  creator: "Arjun Pawar",
  publisher: "Arjun Pawar",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjunpawar.tech/",
    title: "Arjun Pawar - FullStack AI Engineer | SDE @Fynd | Professional Portfolio",
    description: "Professional portfolio showcasing AI-powered projects, autonomous agents, and full-stack development. Winner of Codejam 2025, Runner-up Hacktimus 2025.",
    siteName: "Arjun Pawar Portfolio",
    images: [
      {
        url: "https://portfolio.anujjainbatu.tech/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Anuj Jain - Professional Portfolio with AI Chatbot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Pawar - FullStack AI Engineer | SDE @Fynd",
    description: "Professional portfolio showcasing AI projects, autonomous agents, and scalable systems. Codejam Winner, Hacktimus Runner-up.",
    creator: "@arjun0023",
    site: "@arjun0023",
    images: [{
      url: "https://portfolio.anujjainbatu.tech/portfolio.png",
      alt: "Anuj Jain Professional Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://arjunpawar.tech/",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://arjunpawar.tech/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arjun Pawar",
              "jobTitle": "FullStack AI Engineer | SDE @Fynd",
              "url": "https://arjunpawar.tech/",
              "image": "https://arjunpawar.tech/profile.jpeg",
              "sameAs": [
                "https://github.com/Arjun0023",
                "https://linkedin.com/in/arjun0023",
                "https://x.com/arjun0023"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "SATI"
              },
              "knowsAbout": [
                "Python Development",
                "AI Engineering",
                "Machine Learning",
                "IoT Systems",
                "Web Development",
                "Automation",
                "Full Stack Development"
              ],
              "description": "Full-stack Python Developer & AI Engineer with expertise in building AI-powered solutions, IoT systems, and automation tools. SIH 2025 Finalist with 25+ delivered projects."
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <ThemeToggle />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}