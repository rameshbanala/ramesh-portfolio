import { Reveal } from "./ui/Section";
import { snapshotStats } from "../data/snapshot";

const Snapshot = () => (
  <section className="border-y border-line bg-ink-900/60">
    <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
      {snapshotStats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.06} className="text-center lg:text-left">
          <div className="text-2xl font-bold text-paper sm:text-3xl">{stat.value}</div>
          <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Snapshot;
