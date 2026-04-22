import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

export const metadata: Metadata = {
  title: { default: "Niagara Plumber & Heating | 24/7 Service | Ottr Plumr", template: "%s | Ottr Plumr" },
  description: "Licensed Niagara plumbers & HVAC techs — 24/7 emergency plumbing, drain cleaning, water heater repair, sump pumps, furnaces & boilers. Same-day service in St. Catharines, Niagara Falls & Welland. Call 289-488-1007.",
  metadataBase: new URL("https://www.plumr.ca"),
};

// Global LocalBusiness schema — appears on every page
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "LocalBusiness"],
  "@id": "https://www.plumr.ca/#business",
  name: "Ottr Plumr Plumbing & Heating",
  alternateName: "Canalside Mechanical LTD",
  url: "https://www.plumr.ca",
  logo: "https://www.plumr.ca/assets/ottr-plumr-logo.webp",
  image: "https://www.plumr.ca/assets/hero-otter-plumber.webp",
  description: "Licensed plumbers and HVAC technicians serving the Niagara Region 24/7. Emergency plumbing, drain cleaning, water heaters, sump pumps, furnaces, and boilers across St. Catharines, Niagara Falls, Welland, and surrounding cities.",
  telephone: "+12894881007",
  email: "info@plumr.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "187 King St",
    addressLocality: "Welland",
    addressRegion: "ON",
    postalCode: "L3B 3J4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.9924,
    longitude: -79.2489,
  },
  areaServed: [
    "Welland", "St. Catharines", "Niagara Falls", "Thorold", "Lincoln",
    "Grimsby", "Pelham", "Fort Erie", "Port Colborne", "Niagara-on-the-Lake",
    "West Lincoln", "Wainfleet",
  ].map((name) => ({ "@type": "City", name, containedInPlace: "Niagara Region, Ontario, Canada" })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "00:00", closes: "23:59", description: "Emergency service only" },
  ],
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Debit",
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=187+King+St+Welland+ON+L3B+3J4",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Caveat:wght@600&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <QueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1 pb-20">{children}</main>
              <Footer />
              <EmergencyCTA />
            </div>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
