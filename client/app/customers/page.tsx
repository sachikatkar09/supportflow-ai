import Sidebar from "../components/Sidebar";

const customers = [
  {
    id: "CUS-101",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    tickets: 5,
    status: "Active",
  },
  {
    id: "CUS-102",
    name: "Priya Patel",
    email: "priya@example.com",
    tickets: 3,
    status: "Active",
  },
  {
    id: "CUS-103",
    name: "Rohan Verma",
    email: "rohan@example.com",
    tickets: 2,
    status: "Inactive",
  },
];

export default function CustomersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Customers</h1>
          <p className="mt-2 text-sm text-slate-500">
            View and manage your customer information.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total Customers</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">128</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Active Customers</p>
            <h2 className="mt-2 text-2xl font-bold text-green-600">112</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total Support Tickets</p>
            <h2 className="mt-2 text-2xl font-bold text-blue-600">346</h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-5">
            <h2 className="font-semibold text-slate-800">All Customers</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-medium">Customer ID</th>
                  <th className="px-5 py-4 font-medium">Name</th>
                  <th className="px-5 py-4 font-medium">Email</th>
                  <th className="px-5 py-4 font-medium">Tickets</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-medium text-blue-600">
                      {customer.id}
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {customer.name}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {customer.email}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {customer.tickets}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
