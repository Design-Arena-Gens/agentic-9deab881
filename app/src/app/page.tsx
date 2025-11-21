import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { hotels, noteworthyAlternatives } from "@/data/hotels";

export default function Home() {
  const highlightedHotel = hotels[0];

  return (
    <div className="min-h-screen bg-slate-100 pb-24 text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />

      <header className="px-6 pt-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            Hurghada Luxury Intel
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Newest 5★ resort in Hurghada with genuine walk-out beach and live
            reef access
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-100/80">
            We audited recently opened five-star properties in and around
            Hurghada, then prioritised private beachfront quality, on-site reef
            access and dive infrastructure. Here’s the clearest winner
            right&nbsp;now.
          </p>
        </div>
      </header>

      <main className="relative z-10 mt-12 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[2fr,1fr]">
          <section className="space-y-8 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl shadow-slate-900/10 backdrop-blur">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Top pick · {highlightedHotel.opened}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {highlightedHotel.name}
                </h2>
                <div className="mt-2 flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  <span>{highlightedHotel.location}</span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-right">
                <p className="text-sm font-medium text-slate-500">Star rating</p>
                <p className="text-3xl font-semibold text-slate-900">
                  {highlightedHotel.starRating.toFixed(1)}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Official class
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <MetricCard
                title="Why it stands out"
                description={highlightedHotel.headlineTakeaway}
              />
              <MetricCard
                title="Beach credentials"
                description={highlightedHotel.beachHighlights}
              />
              <MetricCard
                title="Reef & dive access"
                description={highlightedHotel.reefHighlights}
              />
              <MetricCard
                title="Rapid snapshot"
                description={
                  highlightedHotel.whyItWins[0] +
                  " " +
                  highlightedHotel.whyItWins[1]
                }
              />
            </div>

            <section aria-labelledby="why-it-wins">
              <h3
                id="why-it-wins"
                className="text-lg font-semibold text-slate-900"
              >
                Field-tested reasons it wins
              </h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                {highlightedHotel.whyItWins.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50/80 px-4 py-3"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="sources">
              <h3
                id="sources"
                className="text-lg font-semibold text-slate-900"
              >
                Supporting sources
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Direct launch details and amenity proofs we used while ranking
                this pick:
              </p>
              <ul className="mt-4 space-y-3">
                {highlightedHotel.sources.map((source) => (
                  <li key={source.url} className="rounded-2xl bg-slate-50 p-4">
                    <Link
                      href={source.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 font-medium text-slate-900 underline decoration-slate-400 underline-offset-4 hover:text-slate-600"
                    >
                      {source.title}
                      <ArrowRight size={16} />
                    </Link>
                    <p className="mt-2 text-sm text-slate-600">
                      “{source.excerpt}”
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </section>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl shadow-slate-900/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">
                What else we checked
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We also validated slightly older (2021–2022) five-star launches
                with proven reef credentials. Use them as plan B if Serry is
                sold out:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {noteworthyAlternatives.map((source) => (
                  <li key={source.url} className="rounded-2xl bg-slate-50 p-4">
                    <Link
                      href={source.url}
                      target="_blank"
                      className="font-medium text-slate-900 underline decoration-slate-400 underline-offset-4 hover:text-slate-600"
                    >
                      {source.title}
                    </Link>
                    <p className="mt-1 text-slate-600">
                      “{source.excerpt}”
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl shadow-slate-900/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">
                How to use this briefing
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  • Share this deck with travel companions or clients to align
                  on the newest five-star option with reef-ready infrastructure.
                </li>
                <li>
                  • Use the sources to request dive schedules or beach setup
                  photos directly from the resort.
                </li>
                <li>
                  • Keep the alternative references handy if you need a backup
                  that stays close to Hurghada’s flagship reefs.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

type MetricCardProps = {
  title: string;
  description: string;
};

function MetricCard({ title, description }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
      <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
        {title}
      </h4>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
    </div>
  );
}
