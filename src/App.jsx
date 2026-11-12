import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Auth from "./Auth";

const features = [
  ["📊", "Credit Overview", "View and monitor your credit progress."],
  ["💳", "Credit Accounts", "Organize balances, limits, and account details."],
  ["📁", "Collections", "Track collection accounts and important dates."],
  ["⚖️", "Dispute Center", "Manage disputes and follow their progress."],
  ["📈", "Credit Scores", "Keep track of your credit scores over time."],
  ["🔒", "Secure Documents", "Keep important financial documents organized."]
];

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
  }

  if (loading) return <p>Loading PESBW Financial...</p>;

  if (!session) return <Auth />;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="crown">♛</div>
          <h2>PESBW</h2>
          <span>FINANCIAL</span>
        </div>

        <nav>
          <a className="active" href="#dashboard">⌂ Dashboard</a>
          <a href="#credit">▤ Credit Overview</a>
          <a href="#accounts">▣ Credit Accounts</a>
          <a href="#collections">◈ Collections</a>
          <a href="#disputes">⚖ Disputes</a>
          <a href="#scores">↗ Credit Scores</a>
          <a href="#documents">▧ Documents</a>
          <a href="#profile">⚙ My Profile</a>
        </nav>

        <button className="logout-button" onClick={signOut}>
          Sign Out
        </button>

        <div className="sidebar-footer">
          <span>YOUR CREDIT.</span>
          <span>YOUR MONEY.</span>
          <span>YOUR FUTURE.</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">WELCOME TO PESBW FINANCIAL</p>
            <h1>Your Financial Journey Starts Here.</h1>
          </div>
          <div className="profile-icon">P</div>
        </header>

        <section className="welcome">
          <div>
            <p className="gold-label">FINANCIAL EMPOWERMENT</p>
            <h2>Take control of your financial future.</h2>
            <p>
              Your personal space to organize credit information,
              monitor progress, and manage financial documents.
            </p>
          </div>
          <div className="welcome-crown">♛</div>
        </section>

        <section className="section-heading">
          <h2>Your Financial Tools</h2>
          <p>Everything you need, organized in one place.</p>
        </section>

        <section className="feature-grid">
          {features.map(([icon, title, description]) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="view-link">Coming Soon</span>
            </article>
          ))}
        </section>

        <footer>
          <strong>PESBW FINANCIAL</strong>
          <p>Your Credit. Your Money. Your Future.</p>
          <small>© {new Date().getFullYear()} PESBW LLC. All rights reserved.</small>
        </footer>
      </main>
    </div>
  );
}
