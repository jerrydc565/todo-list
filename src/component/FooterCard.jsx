import React from 'react'

function FooterCard({mode,tasks,setTasks}) {
  return (
    <section
      className="footer-container"
      style={{
        color: mode === "light" ? "hsl(235, 24%, 19%)" : "",
      }}
    >
      <p> {tasks.length} item left </p>
      <div className="all-container">
        <p className="all"> All</p>
        <p> Active </p>
        <p>Completed</p>
      </div>
      <div>
        <p onClick={() => setTasks([])}>Clear</p>
        <p>Completed</p>
      </div>
    </section>
  );
}

export default FooterCard
