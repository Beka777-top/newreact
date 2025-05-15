import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// ---- Аутентификация контексті ----
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "user" && password === "1234") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// ---- Логин беті ----
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/services");
    } else {
      alert("Қате логин немесе құпиясөз");
    }
  };

  return (
    <div style={{ margin: "100px auto", maxWidth: "400px", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Жүйеге кіру</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Құпиясөз"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Кіру</button>
      </form>
    </div>
  );
};

// ---- Қызметтер беті ----
const ServicesPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const services = [
    { id: 1, name: "Азаматтарға анықтама беру" },
    { id: 2, name: "Жеке кәсіпкерлік тіркеу" },
    { id: 3, name: "Зейнетақы жайлы мәлімет" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Қызметтер тізімі</h2>
      <button onClick={logout} style={{ marginBottom: "20px", padding: "8px 16px" }}>
        Шығу
      </button>
      <ul>
        {services.map((service) => (
          <li key={service.id} style={{ marginBottom: "10px" }}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

// ---- App компоненті ----
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;