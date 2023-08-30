import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`countera update - count:${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counterb update - count:${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>a button</button>
      </div>

      <div>
        <h2>counter B</h2>
        <CounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>b button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
