import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import LandingPage from './pages/landing-page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/*   <Route path="/" element={<PublicPage />} /> */}
      {/*   <Route path="/login" element={<LoginPage />} /> */}
      {/*   <Route */}
      {/*     path="/protected" */}
      {/*     element={ */}
      {/*       <RequireAuth> */}
      {/*         <ProtectedPage /> */}
      {/*       </RequireAuth> */}
      {/*     } */}
      {/*   /> */}
      {/* </Route> */}
    </Routes >
  );
}

export default App
