export default function LandingPage() {

  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  }

  return (
    <main>
      <h1>landing page</h1>
      <div>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </main>
  );
}
