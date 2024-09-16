import React from "react";
import Odometer from "react-odometerjs";
import "./styles.css";

function OdoCounter({
  lastValue,
  initialValue = 0,
  time = 2000,
}: {
  lastValue: number;
  initialValue?: number;
  time?: number;
}) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setValue(lastValue), time);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!document) return null;

  return <Odometer value={value} />;
}

export { OdoCounter };
