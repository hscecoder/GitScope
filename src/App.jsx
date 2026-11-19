import { useState } from "react";
import Header from "./components/Header";
import DashboardPage from "./components/DashboardPage";
import ComparePage from "./components/ComparePage";
import Footer from "./components/Footer";

function App() {
  const [tab, setTab] = useState("Dashboard");
  return (
    <div className="min-h-screen">
      <Header tab={tab} setTab={setTab} />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className={tab === "Dashboard" ? "" : "hidden"}><DashboardPage /></div>
        <div className={tab === "Compare" ? "" : "hidden"}><ComparePage /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
