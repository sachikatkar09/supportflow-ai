import Sidebar from "../components/Sidebar";

const teamMembers = [
  {
    id: "TM-101",
    name: "Ananya Deshmukh",
    email: "ananya@supportflow.ai",
    role: "Admin",
    tickets: 24,
    status: "Online",
  },
  {
    id: "TM-102",
    name: "Rahul Mehta",
    email: "rahul@supportflow.ai",
    role: "Support Agent",
    tickets: 18,
    status: "Online",
  },
  {
    id: "TM-103",
    name: "Neha Joshi",
    email: "neha@supportflow.ai",
    role: "Support Agent",
    tickets: 12,
    status: "Offline",
  },
];

export default function TeamPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="min-w-0 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Team</h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage your support team and monitor agent activity.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total Team Members</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">12</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Online Agents</p>
            <h2 className="mt-2 text-2xl font-bold text-green-600">8</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Tickets Assigned</p>
            <h2 className="mt-2 text-2xl font-bold text-blue-600">54</h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-5">
            <h2 className="font-semibold text-slate-800">Team Members</h2>
            <p className="mt-1 text-sm text-slate-500">
              View agent roles, assigned tickets, and availability.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-medium">Member</th>
                  <th className="px-5 py-4 font-medium">Role</th>
                  <th className="px-5 py-4 font-medium">Assigned Tickets</th>
                  <th className="px-5 py-4 font-medium">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teamMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <p className="font-medium text-slate-800">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {member.email}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{member.role}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {member.tickets}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          member.status === "Online"
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {member.status}
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
