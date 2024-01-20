// import Navbar from "../components/dashboard/navbar";
// import Sidebar from "../components/dashboard/sidebar"

export default function Dashboard() {
  return (
    <div className="flex">

      {/* <Sidebar /> */}
      <nav className="flex flex-col border-r border-r-gray-700 h-screen">
        {/* TODO: make this a logo */}
        <h1 className="text-xl">Tarkinge sidebar</h1>
        <a href="/dashboard">Dashboard</a>
        <a href="/controlroom">Control Room</a>
        <a href="/notifications">Notifications</a>
        <a href="/archives">Archives</a>
        <a href="/notes">Notes</a>
        <a href="/flashcards">Flashcards Maker AI</a>
        <a href="/ghorserace">Ghorse Race</a>
        <a href="/settings">Settings</a>
      </nav>

      <div className="flex flex-col ">
        {/* <Navbar /> */}
        <nav className="block w-screen border-b border-b-gray-700 ">
          {/* TODO: fix this, such that justify-between works */}
          <div className="flex items-center justify-around">
            <section>
              <h1>test</h1>
            </section>
            {/* <div className="flex"> */}
            <section>
              <h1>test</h1>
            </section>
            {/* </div> */}
            {/* <div className="flex"> */}
            {/* <img src="" alt="prof" /> */}
            {/* </div> */}
          </div>
        </nav>
        <main className="grid grid-cols-3">
          <section>daily todos</section>
          <section >
            <h1>Levers</h1>
          </section>
          <section>notifications</section>
        </main>
      </div>
    </div>
  );
}
