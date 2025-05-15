import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BrowseTasks from "./BrowseTasks";
import CreateTask from "./CreateTask";
import SignUp from "./Signup";
import Profile from "./Profile";
import LandingPage from "./LandingPage";
import GeminiSearch from "./Help";
import "./Style.css";

export default function App() {
  const [myTasks, setMyTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
  }, [myTasks]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const handleTakeTask = (task) => {
    setMyTasks((prev) => [...prev, task]);
  };

  const handleLogout = () => {
    setUserName("");
  };

  return (
    <Router>
      <header className="custom-header glass">
        <div className="logo">
          <Link to="/" className="logo-text">⚡ QuickWork</Link>
        </div>
        <nav className="nav-links">
          <Link to="/tasks">Задачи</Link>
          <Link to="/create-task">Создать</Link>
          <Link to="/profile">Профиль</Link>
          <Link to="/help">Подержка</Link>
          {!userName ? (
            <Link to="/signup" className="btn-glow">Регистрация</Link>
          ) : (
            <button onClick={handleLogout} className="btn-logout">Выйти</button>
          )}
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tasks" element={<BrowseTasks onTakeTask={handleTakeTask} takenTasks={myTasks} />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/signup" element={<SignUp onRegister={(name) => setUserName(name)} />} />
          <Route path="/profile" element={<Profile name={userName} tasks={myTasks} />} />
          <Route path="/help" element={<GeminiSearch />} />
        </Routes>
      </main>

      <footer className="glass-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-logo">⚡ QuickWork</h2>
            <p className="footer-tagline">Жұмыс пен фриланс – бір қадам жақын!</p>
          </div>
          <div className="footer-section">
            <h4>Сілтемелер</h4>
            <Link to="/tasks">Барлық тапсырмалар</Link>
            <Link to="/create-task">Жаңа тапсырма</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/help">Көмек</Link>
          </div>
          <div className="footer-section">
            <h4>Байланыс</h4>
            <p>📞 <a href="tel:700009090">700-000-90-90</a></p>
            <p>📧 <a href="mailto:Quick_Work@gmail.com">Quick_Work@gmail.com</a></p>
          </div>
          <div className="footer-section">
            <h4>Желіде</h4>
            <a href="https://t.me/quickwork" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://instagram.com/quickwork" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 QuickWork. Барлық құқықтар қорғалған.</p>
        </div>
      </footer>
    </Router>
  );
}
