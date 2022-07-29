import { useState, useEffect } from 'react';

const Loading = () => {
  const [duts, setDuts] = useState([]);
  const increase = () => {
    setDuts((dut) => [...dut, '.']);
  };

  const reset = () => {
    setDuts([]);
  };

  useEffect(() => {
    const using = duts.length <= 3 ? setInterval(() => increase(), 800) : reset();
    return () => clearInterval(using);
  });

  return (
    <div className="Loading">
      Loading
      {duts}
      <hr />
      Please Wait
    </div>
  );
};

export default Loading;
