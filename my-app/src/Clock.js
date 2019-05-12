import React, { useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
    clearInterval(interval);
  };

  const interval = setInterval(() => tick(), 1000);

  return <p>{date.toLocaleTimeString()}</p>;
};

export default Clock;
