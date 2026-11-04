import Sidebar from "../components/Sidebar";

const monthlyData = [
  { month: "Jan", tickets: 35 },
  { month: "Feb", tickets: 48 },
  { month: "Mar", tickets: 42 },
  { month: "Apr", tickets: 65 },
  { month: "May", tickets: 55 },
  { month: "Jun", tickets: 78 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
          <p className="mt-2 text-sm text-slate-500">
            Track support performance and analyze ticket activity.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total Tickets</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">346</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Resolved Tickets</p>
            <h2 className="mt-2 text-2xl font-bold text-green-600">276</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Resolution Rate</p>
            <h2 className="mt-2 text-2xl font-bold text-blue-600">79.8%</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Average Response Time</p>
            <h2 className="mt-2 text-2xl font-bold text-purple-600">2.4 hrs</h2>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-800">
            Monthly Ticket Activity
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Ticket volume over the last six months.
          </p>

          <div className="mt-8 flex h-64 items-end justify-around gap-4 border-b border-slate-200 px-2">
            {monthlyData.map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-xs font-medium text-slate-600">
                  {item.tickets}
                </span>
                <div
                  className="w-full max-w-12 rounded-t-md bg-blue-500 transition-all hover:bg-blue-600"
                  style={{ height: `${(item.tickets / 100) * 85}%` }}
                />
                <span className="text-xs text-slate-500">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
