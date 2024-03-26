import React from "react";

type RacerProps = {
  driver: string;
  progress: number;
};

const Racer: React.FC<RacerProps> = ({ driver, progress }) => {
  return (
    <tr>
      <td className="p-4 bg-light-aqua">{driver}</td>
      <td className="bg-light-aqua">
        <span className="p-4 block bg-purple" style={{ width: `${progress}%` }}>
          &nbsp;
        </span>
      </td>
    </tr>
  );
};

export default Racer;
