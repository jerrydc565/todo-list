import React from 'react'

function FormCard({mode, newTasks, handleInputChange, handleInputSumit}) {
  return (
    <form
      className="searching-container"
      style={{
        backgroundColor: mode === "light" ? "hsl(0, 0%, 98%)" : "",
      }}
          onSubmit={handleInputSumit}
          
    >
          <button className="checkbox"
          
          ></button>
          <input
            //   minLength={"10"}
            //   maxLength={"45"}
        type="text"
        placeholder="type your task..."
        style={{
          color: mode === "light" ? "hsl(236, 9%, 61%)" : "",
        }}
        value={newTasks}
        onChange={handleInputChange}
      />
      {/* <button className="add"> ADD</button> */}
    </form>
  );
}

export default FormCard
