import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name - {props.name}</h2>
      <h3>Location - Mumbai</h3>
      <h4>Contact - Mahesh Pat</h4>
    </div>
  );
};

export default User;
