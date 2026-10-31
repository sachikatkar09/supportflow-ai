import Sidebar from "../components/Sidebar";

export default function TicketsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Tickets</h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage and track all customer support tickets.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">All Tickets</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Ticket ID</th>
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Subject</th>
                  <th className="px-4 py-3 font-medium">Priority</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-4 font-medium text-blue-600">
                    SF-101
                  </td>
                  <td className="px-4 py-4">Aarav Sharma</td>
                  <td className="px-4 py-4">Unable to log in</td>
                  <td className="px-4 py-4 text-red-600">High</td>
                  <td className="px-4 py-4">Open</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-blue-600">
                    SF-102
                  </td>
                  <td className="px-4 py-4">Priya Patel</td>
                  <td className="px-4 py-4">Payment issue</td>
                  <td className="px-4 py-4 text-amber-600">Medium</td>
                  <td className="px-4 py-4">In Progress</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-blue-600">
                    SF-103
                  </td>
                  <td className="px-4 py-4">Rohan Verma</td>
                  <td className="px-4 py-4">Order status request</td>
                  <td className="px-4 py-4 text-green-600">Low</td>
                  <td className="px-4 py-4">Resolved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
