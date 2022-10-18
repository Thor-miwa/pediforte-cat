import React from "react";
import Cat from "./components/Cat";
import data from "./data";
function App() {
    const contact = data.map(function(cat, index)
    {
      return <Cat key={index} item={cat}/>
    })
    return (
      <div className="contacts">
      {contact}
    </div>
  )
}

export default App;
