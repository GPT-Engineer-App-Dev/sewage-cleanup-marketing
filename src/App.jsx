import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
