// "src/app/page.tsx"

import Sidebar from "@/components/Sidebar";
import TodoSection from "@/components/TodoSection";

export default function Home() {
  return (
    <main className="flex p-6 m-4 gap-6 items-start">
      <aside className="w-1/5 border border-green-300 p-4 rounded-2xl">
        <Sidebar />
      </aside>
      <section className="w-4/5 p-6 border border-green-100">
        <TodoSection />
      </section>
    </main>
  );
}
