export default function Sidebar() {
  return (
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
    </nav>
  );
}
