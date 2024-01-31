// import Navbar from "../components/dashboard/navbar";
// import Sidebar from "../components/dashboard/sidebar"

import Levers from "../components/dashboard/levers";
import LeverTest from "../components/dashboard/levertest";

export default function Dashboard() {
  return (
    <div className="flex w-screen h-screen ">

      {/* <Sidebar /> */}
      <nav className="flex flex-col gap-3 border-r border-r-gray-700 h-screen p-5">
        {/* TODO: make this a logo */}
        <h1 className="text-xl">tarkinge</h1>
        <a href="/dashboard">Dashboard</a>
        <a href="/controlroom">Control Room</a>
        <a href="/notifications">Notifications</a>
        <a href="/archives">Archives</a>
        <a href="/notes">Notes</a>
        <a href="/flashcards">Flashcards Maker AI</a>
        <a href="/ghorserace">Ghorse Race</a>
        <a href="/settings">Settings</a>
      </nav>

      <div className="flex flex-col w-screen h-screen ">

        {/* <Navbar /> */}
        <nav className="flex items-center justify-between border-b border-gray-700">
          <section>
            <h1>test</h1>
          </section>
          <section>
            <h1>test</h1>
          </section>
        </nav>

        <main className="flex justify-between w-full h-full">
          {/* dailies view */}
          <section className="bg-purple-800 w-[20%]">
            <h1>daily levers</h1>
            <h1>daily todos</h1>
          </section>

          {/* this is the kanban with filters (or sorters) */}
          {/* <Levers /> */}
          <LeverTest />

          <section className="bg-green-500 w-[20%]">
            <h1>notifications</h1>
          </section>
        </main>
      </div>
    </div>
  );
}
