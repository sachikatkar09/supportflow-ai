import { Suspense } from "react";
import Sidebar from "../../components/Sidebar";

async function TicketDetailsContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Ticket Details - {id}
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        View and manage individual ticket information.
      </p>
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
