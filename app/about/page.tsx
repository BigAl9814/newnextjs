import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Award, Heart, MapPin, ShieldCheck, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JOBBER_BOOK_URL, JOBBER_CLIENT_HUB_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ottr Plumr | Red Seal Plumber Welland & Niagara",
  description: "Ottr Plumr is owned by Alex Malkaya — a Red Seal Interprovincial Journeyman Plumber with 7+ years experience. Based in Welland, serving the entire Niagara Region. Call 289-488-1007.",
  alternates: { canonical: "/about" },
};

const ld = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.plumr.ca/about#webpage",
  url: "https://www.plumr.ca/about",
  name: "About Ottr Plumr | Red Seal Plumber Welland & Niagara",
  about: { "@id": "https://www.plumr.ca/#business" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumr.ca/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.plumr.ca/about" },
    ],
  },
};

const values = [
  { icon: Heart, title: "Otterly Reliable", desc: "We show up on time, every time. If we say 2 PM, we're there at 2 PM — not a four-hour window. Your time matters." },
  { icon: ShieldCheck, title: "Red Seal Certified", desc: "Alex holds his Interprovincial Red Seal — the highest journeyman standard in Canada. Every job is done to code, every time." },
  { icon: Award, title: "Warrantied Work", desc: "Every install and repair comes with a written workmanship warranty. If something we touched causes a problem, we come back and fix it." },
  { icon: MapPin, title: "Local to Niagara", desc: "Based in Welland, we live and work in this community. We treat your home like it's in our neighbourhood — because it is." },
];

const stats = [
  { n: "7+", l: "Years in the trade" },
  { n: "Red Seal", l: "Interprovincial certified" },
  { n: "24/7", l: "Emergency dispatch" },
  { n: "12+", l: "Niagara cities served" },
];

const faqs = [
  {
    q: "Is Alex a licensed plumber in Ontario?",
    a: "Yes. Alex holds his Interprovincial Red Seal certification — the gold standard for journeyman tradespeople in Canada — as well as his Ontario Certificate of Qualification. He is fully licensed to perform plumbing work anywhere in Ontario and across Canada.",
  },
  {
    q: "What is a Red Seal plumber?",
    a: "The Red Seal (Interprovincial Standards Program) is the highest level of journeyman certification in Canada. It means the tradesperson has passed a rigorous national exam on top of their provincial apprenticeship, demonstrating competency to work in any province or territory. It is widely considered the gold standard for plumbing tradespeople.",
  },
  {
    q: "Does Alex personally show up to jobs?",
    a: "For most jobs, yes. Alex is a hands-on owner who is on-site for the majority of service calls. When he brings additional help on larger jobs, every technician works under his direct supervision and to his standards.",
  },
  {
    q: "Do you serve all of the Niagara Region?",
    a: "Yes. We cover the entire Niagara Region including Welland, St. Catharines, Niagara Falls, Thorold, Fort Erie, Port Colborne, Grimsby, Lincoln, Pelham, Niagara-on-the-Lake, West Lincoln, and Wainfleet.",
  },
  {
    q: "What makes Ottr Plumr different from other Niagara plumbers?",
    a: "You get a Red Seal journeyman — not an apprentice or a technician working outside their scope. Alex quotes before he works, every time. Flat-rate pricing in writing, no hourly clock running. And he backs every job with a written warranty.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* HERO */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-foreground/60 mb-4">
              <Link href="/" className="hover:underline">Home</Link><span className="mx-2">/</span>
              <span className="text-foreground/80">About</span>
            </nav>
            <p className="font-script text-2xl text-accent">About Ottr Plumr</p>
            <h1 className="font-display text-5xl md:text-6xl text-primary mt-1 leading-[0.95]">
              Red Seal plumber.<br />Welland born &amp; back.
            </h1>
            <p className="text-foreground/80 mt-5 text-lg max-w-xl">
              Ottr Plumr is owned and operated by <strong>Alex Malkaya</strong> — a fully licensed Interprovincial Journeyman Plumber with his Red Seal certification and over 7 years of hands-on experience. Based in Welland, serving every corner of the Niagara Region.
            </p>
            <p className="text-foreground/80 mt-4 max-w-xl">
              When you call Ottr Plumr, you're getting Alex — on-site, in person, doing the work himself. Not a dispatcher, not an apprentice, not a sub. A Red Seal journeyman who treats your home like his own.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Button asChild variant="hero" size="lg"><a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a></Button>
              <Button asChild variant="deep" size="lg"><a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer"><CalendarCheck /> Book Online</a></Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/pipes-pattern.webp" alt="Ottr Plumr plumbing and heating — serving Niagara Region from Welland, Ontario" loading="lazy" decoding="async" width={1024} height={1024} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-stamp font-display text-xl rotate-[-4deg]">Red Seal certified</div>
          </div>
        </div>
        <div className="water-band h-10 mt-16" aria-hidden="true" />
      </section>

      {/* STATS */}
      <section className="bg-gradient-deep text-primary-foreground py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ n, l }) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-primary-glow">{n}</div>
              <div className="opacity-85 mt-1 text-sm">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ALEX'S STORY */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
            <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/alex-malkaya.webp"
                alt="Alex Malkaya — Red Seal Interprovincial Journeyman Plumber and owner of Ottr Plumr in Welland, Ontario"
                width={800}
                height={1165}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-stamp font-display rotate-[6deg]">Owner &amp; Red Seal</div>
          </div>

          <div className="space-y-5">
            <p className="font-script text-2xl text-accent">Alex's story</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">Hi, I'm Alex.</h2>

            <p className="text-foreground/80 text-lg leading-relaxed">
              I started my plumbing apprenticeship right here in Hamilton, Ontario — learning the trade from the ground up in my own backyard. I've always believed there's no substitute for doing the work yourself, getting your hands dirty, and figuring things out on real job sites.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              When the pandemic hit and construction slowed across Ontario, I made a tough call: I headed west to Victoria, BC, where the building industry was still going strong. I spent three years out there working full-time while finishing my schooling — long days on site, then evenings in class. It was a grind, but that's what the trade asks of you.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              That hard work paid off with my <strong>Red Seal certification</strong> — the Interprovincial Journeyman standard that lets me work anywhere in Canada and demonstrates I've met the highest national benchmark for the trade. Then I came home to Niagara, where I belong, and built Ottr Plumr.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Today you'll still find me on-site for most jobs. I'm not a guy who sits in an office while apprentices do the work — I show up, I do the job, and I stand behind it. Every customer gets straight answers, honest pricing, and work that's warrantied in writing.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={JOBBER_CLIENT_HUB_URL} target="_blank" rel="noopener noreferrer">
                  <UserCircle2 /> Existing Customer Login
                </a>
              </Button>
              <Button asChild variant="hero">
                <Link href="/contact">Book a job with Alex</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container pb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-accent">What we stand for</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Our promise to every Niagara customer</h2>
          <p className="text-foreground/75 mt-4">These aren't marketing slogans. They're the standards Alex holds himself to on every single job, from a $90 faucet swap to a full heating system replacement.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <article key={v.title} className="stamp-card p-6 text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft mb-4">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg text-primary">{v.title}</h3>
              <p className="text-sm text-foreground/75 mt-2">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY LOCAL MATTERS */}
      <section className="bg-secondary/40 py-16">
        <div className="container max-w-4xl">
          <p className="font-script text-2xl text-accent">Why local matters</p>
          <h2 className="font-display text-4xl text-primary mt-1 mb-6">We know Niagara plumbing inside and out</h2>
          <div className="grid md:grid-cols-2 gap-6 text-foreground/80">
            <div>
              <h3 className="font-display text-xl text-primary mb-2">Older housing stock</h3>
              <p>A large portion of Niagara's homes were built before 1970 — galvanized steel pipes, clay sewer laterals, and aging water lines are common. Alex has worked on all of it and knows when to repair vs. when to replace.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary mb-2">Niagara's hard water</h3>
              <p>The region's limestone bedrock means hard water that scales up water heaters and clogs fixtures faster than most of Ontario. Alex factors this into every install and recommends filtration when it makes sense for your home.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary mb-2">Canal-area water tables</h3>
              <p>Properties near the Welland Canal and Lake Ontario shoreline can see high water table pressure that stresses sump pump systems year-round. Alex specs every sump pump install to your actual site conditions.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary mb-2">Niagara winters</h3>
              <p>Temperatures regularly drop below -15°C here. Alex knows which pipe runs freeze first in Niagara homes and how to insulate them properly — saving you a burst pipe call at 2 AM in January.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-2xl text-accent">Questions</p>
          <h2 className="font-display text-4xl text-primary mt-1">About Alex &amp; Ottr Plumr</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="stamp-card p-6">
              <h3 className="font-display text-lg text-primary mb-2">{faq.q}</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <p className="font-script text-3xl text-primary-glow">Ready to book?</p>
          <h2 className="font-display text-4xl mt-1">Work with a Red Seal plumber in Niagara</h2>
          <p className="opacity-85 mt-4">Free quotes. Flat-rate pricing. Alex on-site. Licensed, insured, and warrantied — across the entire Niagara Region.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-7">
            <Button asChild variant="hero" size="lg"><a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a></Button>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90"><a href={JOBBER_BOOK_URL} target="_blank" rel="noopener noreferrer"><CalendarCheck /> Book Online</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
