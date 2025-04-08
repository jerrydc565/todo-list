import React from 'react'

function FooterCard({mode}) {
  return (
    <section
      className="footer-container"
      style={{
        color: mode === "light" ? "hsl(235, 24%, 19%)" : "",
      }}
    >
      <p> 5 item left </p>
      <div className="all-container">
        <p className="all"> All</p>
        <p> Active </p>
        <p>Completed</p>
      </div>
      <div>
        <p>Clear</p>
        <p>Completed</p>
      </div>
    </section>
  );
}

export default FooterCard
