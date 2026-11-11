import { Suspense } from "react";
import Sidebar from "../../components/Sidebar";
import Link from "next/link";

const tickets = [
  {
    id: "SF-101",
    customer: "Aarav Sharma",
    email: "aarav@example.com",
    subject: "Unable to log in",
    description: "Customer is unable to access their account.",
    priority: "High",
    status: "Open",
  },
  {
    id: "SF-102",
    customer: "Priya Patel",
    email: "priya@example.com",
    subject: "Payment issue",
    description: "Customer is facing an issue while making payment.",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: "SF-103",
    customer: "Rohan Verma",
    email: "rohan@example.com",
    subject: "Order status request",
    description: "Customer wants an update about their order.",
    priority: "Low",
    status: "Resolved",
  },
];

async function TicketDetailsContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const ticket = tickets.find((item) => item.id === id);

  if (!ticket) {
    return (
      <main className="flex-1 p-8">
        <Link
          href="/tickets"
          className="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Tickets
        </Link>

        <h1 className="text-2xl font-bold text-slate-900">Ticket Not Found</h1>

        <p className="mt-2 text-slate-500">No ticket found with ID: {id}</p>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8">
      <Link
        href="/tickets"
        className="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Tickets
      </Link>

      <h1 className="text-3xl font-bold text-slate-900">Ticket Details</h1>

      <p className="mt-2 text-sm text-slate-500">Ticket ID: {ticket.id}</p>

      <div className="mt-8 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          {ticket.subject}
        </h2>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-sm text-slate-500">Customer Name</p>
            <p className="mt-1 font-medium text-slate-900">{ticket.customer}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Customer Email</p>
            <p className="mt-1 font-medium text-slate-900">{ticket.email}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Description</p>
            <p className="mt-1 text-slate-700">{ticket.description}</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-sm text-slate-500">Priority</p>
              <p className="mt-1 font-semibold text-slate-900">
                {ticket.priority}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-1 font-semibold text-slate-900">
                {ticket.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function TicketDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Suspense fallback={<div className="w-64 bg-white" />}>
        <Sidebar />
      </Suspense>

      <Suspense
        fallback={<main className="flex-1 p-8">Loading ticket details...</main>}
      >
        <TicketDetailsContent params={params} />
      </Suspense>
    </div>
  );
}
