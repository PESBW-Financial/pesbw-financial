import React from "react";

const features = [
  {
    icon: "📊",
    title: "Credit Overview",
    description: "View and monitor your credit progress."
  },
  {
    icon: "💳",
    title: "Credit Accounts",
    description: "Organize balances, limits, and account details."
  },
  {
    icon: "📁",
    title: "Collections",
    description: "Track collection accounts and important dates."
  },
  {
    icon: "⚖️",
    title: "Dispute Center",
    description: "Manage disputes and follow their progress."
  },
  {
    icon: "📈",
    title: "Credit Scores",
    description: "Keep track of your credit scores over time."
  },
  {
    icon: "🔒",
    title: "Secure Documents",
    description: "Keep important financial documents organized."
  }
];

export default function App() {
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
              monitor progress, and manage your financial documents.
            </p>
          </div>
          <div className="welcome-crown">♛</div>
        </section>

        <section className="section-heading">
          <div>
            <h2>Your Financial Tools</h2>
            <p>Everything you need, organized in one place.</p>
          </div>
        </section>

        <section className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="view-link">Explore →</span>
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
