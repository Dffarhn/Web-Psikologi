import Image from "next/image";
import UDashboard from "./User/pages/U-Dashboard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Add U-Dashboard component here */}
        <UDashboard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* You can add footer content here */}
      </footer>
    </div>
  );
}