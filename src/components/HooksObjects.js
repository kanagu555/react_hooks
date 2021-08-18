import React, { useState } from "react";

const HooksObjects = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setName({...name, firstName: e.target.value })}
        />
        <input type="text" 
        onChange={(e) => setName({...name, lastName: e.target.value })}/>
        <h2>First name is: {name.firstName}</h2>
        <h2>Last name is: {name.lastName}</h2>
      </form>
    </div>
  );
};

export default HooksObjects;
