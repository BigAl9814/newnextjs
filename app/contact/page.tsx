"use client";
import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, CalendarCheck, UserCircle2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JOBBER_BOOK_URL, JOBBER_CLIENT_HUB_URL, PHONE_TEL, PHONE_DISPLAY, EMAIL, ADDRESS_LINE, GOOGLE_MAPS_URL } from "@/lib/site";

const JOBBER_FORM_STYLESHEET = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const JOBBER_FORM_SCRIPT = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
const JOBBER_CLIENTHUB_ID = "e4833ce1-922c-4bca-b73d-06aca55b449b-1453871";
const JOBBER_FORM_URL = "https://clienthub.getjobber.com/client_hubs/e4833ce1-922c-4bca-b73d-06aca55b449b/public/work_request/embedded_work_request_form?form_id=1453871";

const whyContact = [
  "Free, no-obligation quotes on every job",
  "Flat-rate pricing — no hourly surprises",
  "Same-day and next-day availability",
  "24/7 emergency dispatch — real person answers",
  "Licensed, insured, and warrantied work",
  "Serving all 12 cities in the Niagara Region",
];

export default function ContactPage() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${JOBBER_FORM_STYLESHEET}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet"; link.href = JOBBER_FORM_STYLESHEET; link.media = "screen";
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = JOBBER_FORM_SCRIPT;
    script.setAttribute("clienthub_id", JOBBER_CLIENTHUB_ID);
    script.setAttribute("form_url", JOBBER_FORM_URL);
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <p className="font-script text-2xl text-accent">Get in touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1">Let's get it fixed.</h1>
          <p className="text-foreground/80 mt-5 text-lg">
            Call, email, or send us a message — a real Niagara technician responds, not a call centre. We move fast because plumbing problems don't wait.
          </p>
          <p className="text-foreground/75 mt-4 text-base">
            Most non-emergency calls are scheduled same-day or next-day across Welland, St. Catharines, Niagara Falls, and surrounding cities. Emergency calls get priority dispatch 24 hours a day, 7 days a week. Quotes are always free, always in writing, always before any work begins.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg"><a href={`tel:${PHONE_TEL}`}><Phone /> Call {PHONE_DISPLAY}</a></Button>
            <Button asChild variant="deep" size="lg"><a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer"><CalendarCheck /> Book Online</a></Button>
          </div>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>

      {/* FORM + SIDEBAR */}
      <section className="container py-16 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div className="stamp-card p-7 md:p-10">
          <h2 className="font-display text-3xl text-primary mb-2">Request a quote</h2>
          <p className="text-foreground/70 mb-6">Tell us a bit about the job and we'll get right back to you — usually within a couple of hours during business hours.</p>
          <div id={JOBBER_CLIENTHUB_ID} />
          <noscript><p className="text-sm text-foreground/70">Please enable JavaScript to load our request form, or email <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.</p></noscript>
        </div>

        <aside className="space-y-5">
          <div className="bg-gradient-deep text-primary-foreground rounded-[var(--radius)] p-7 shadow-pop">
            <p className="font-script text-2xl text-primary-glow">Need help now?</p>
            <h2 className="font-display text-3xl mt-1">Call 289-488-1007</h2>
            <p className="opacity-85 mt-2 text-sm">24/7 emergency plumbing service across the Niagara Region. Real person. Real fast.</p>
            <div className="grid sm:grid-cols-2 gap-2 mt-5">
              <Button asChild variant="hero" size="lg"><a href={`tel:${PHONE_TEL}`}><Phone /> Call now</a></Button>
              <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90"><a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer"><CalendarCheck /> Book Online</a></Button>
            </div>
            <a href={JOBBER_CLIENT_HUB_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 hover:underline"><UserCircle2 className="h-4 w-4" /> Existing customer? Open Client Hub →</a>
          </div>

          <ul className="stamp-card p-6 space-y-4 text-sm">
            {[
              { icon: Phone, label: "Phone", val: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
              { icon: Mail, label: "Email", val: EMAIL, href: `mailto:${EMAIL}` },
            ].map(({ icon: Icon, label, val, href }) => (
              <li key={label} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0"><Icon className="h-5 w-5" /></div>
                <div><div className="font-display text-primary">{label}</div><a href={href} className="text-foreground/80 hover:underline">{val}</a></div>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="font-display text-primary">Office</div>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:underline block">{ADDRESS_LINE}</a>
                <div className="text-foreground/60 text-xs mt-1">Serving all cities in the Niagara Region</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0"><Clock className="h-5 w-5" /></div>
              <div>
                <div className="font-display text-primary">Hours</div>
                <div className="text-foreground/80">
                  <div className="font-semibold text-foreground">24/7 Emergency Service</div>
                  Regular hours: Mon–Fri, 8 AM – 5 PM
                  <div className="text-foreground/60 text-xs mt-1">After-hours rates apply on evenings &amp; weekends</div>
                </div>
              </div>
            </li>
          </ul>

          <div className="stamp-card p-6">
            <h3 className="font-display text-lg text-primary mb-4">Why homeowners choose Ottr Plumr</h3>
            <ul className="space-y-2">
              {whyContact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-secondary/40 py-12">
        <div className="container text-center max-w-3xl">
          <p className="font-script text-2xl text-accent">Where we work</p>
          <h2 className="font-display text-3xl text-primary mt-1 mb-4">Serving the entire Niagara Region</h2>
          <p className="text-foreground/75 mb-6">
            Based in Welland, we dispatch to every corner of Niagara — typically within 60 minutes for emergencies. No travel fees within our service area.
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-sm">
            {["Welland","St. Catharines","Niagara Falls","Thorold","Fort Erie","Port Colborne","Grimsby","Lincoln","Pelham","Niagara-on-the-Lake","West Lincoln","Wainfleet"].map((city) => (
              <span key={city} className="bg-card border-2 border-foreground/10 rounded-full px-3 py-1 font-semibold text-primary">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container pb-16 md:pb-20 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="font-script text-2xl text-accent">Find us</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary mt-1">Our Welland office</h2>
          <p className="text-foreground/75 mt-3"><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">{ADDRESS_LINE}</a></p>
        </div>
        <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
          <iframe
            title="Map showing Ottr Plumr at 187 King St, Welland, ON L3B 3J4"
            src="https://www.google.com/maps?q=187+King+St,+Welland,+ON+L3B+3J4&output=embed"
            width="100%" height="450" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[360px] md:h-[450px] block"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
