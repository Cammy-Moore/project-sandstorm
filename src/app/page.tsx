export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold text-amber-400">
          Project Sandstorm
        </h1>

        <p className="mt-2 text-neutral-400">
          Empire Management Suite
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <DashboardCard title="Empire Wealth" value="0 Solari" />

          <DashboardCard title="Industrial Readiness" value="0%" />

          <DashboardCard title="Fuel Reserve" value="0 Days" />

          <DashboardCard title="AI Foreman" value="Awaiting Data" />
        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg">
      <p className="text-sm text-neutral-400">{title}</p>

      <h2 className="mt-3 text-3xl font-bold text-amber-300">
        {value}
      </h2>
    </div>
  );
}