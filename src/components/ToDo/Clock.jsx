import { useState, useEffect } from "react";
import styled from "styled-components";

const ClockDiv = styled.div`
  font-size: 100px;
`;

const Clock = () => {
  const getTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const [time, setTime] = useState(getTime());

  const updateTime = () => {
    setTime(getTime());
  };

  useEffect(() => {
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <ClockDiv>{time}</ClockDiv>
  );
}

export default Clock;