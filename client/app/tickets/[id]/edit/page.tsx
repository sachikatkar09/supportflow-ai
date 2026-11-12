import { Suspense } from "react";
import Sidebar from "../../../components/Sidebar";

export default async function EditTicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Suspense fallback={<div className="w-64 bg-white" />}>
        <Sidebar />
      </Suspense>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900">Edit Ticket</h1>

        <p className="mt-2 text-sm text-slate-500">
          Update ticket information for {id}.
        </p>
      </main>
    </div>
  );
}
