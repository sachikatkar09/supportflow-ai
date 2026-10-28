import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="min-h-screen p-8">
        <header className="mb-10">
          <p className="text-sm font-semibold text-blue-600">SUPPORTFLOW AI</p>
          <h1 className="mt-2 text-3xl font-bold">
            Customer Support Dashboard
          </h1>
          <p className="mt-2 text-gray-500">
            Manage tickets and deliver better customer support.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Total Tickets</p>
            <h2 className="mt-3 text-3xl font-bold">128</h2>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Open Tickets</p>
            <h2 className="mt-3 text-3xl font-bold">42</h2>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Resolved Tickets</p>
            <h2 className="mt-3 text-3xl font-bold">76</h2>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Pending Tickets</p>
            <h2 className="mt-3 text-3xl font-bold">10</h2>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-xl font-bold">Recent Tickets</h2>
            <p className="mt-1 text-sm text-gray-500">
              Track the latest customer support requests.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-200 bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Ticket</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Priority</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium">#SF-101</td>
                  <td className="px-6 py-4">Aarav Sharma</td>
                  <td className="px-6 py-4 text-red-600">High</td>
                  <td className="px-6 py-4">Open</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">#SF-102</td>
                  <td className="px-6 py-4">Priya Patel</td>
                  <td className="px-6 py-4 text-amber-600">Medium</td>
                  <td className="px-6 py-4">In Progress</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">#SF-103</td>
                  <td className="px-6 py-4">Rohan Verma</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                  <td className="px-6 py-4">Resolved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
