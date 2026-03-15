import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import Analytics from "./pages/Analytics";

import Layout from "./components/Layout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <Layout>
                  <List />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <Details />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Layout>
                  <Analytics />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
