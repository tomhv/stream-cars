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
        <span className={`p-4 block bg-purple ${getWidth(progress)}`}>&nbsp;</span>
      </td>
    </tr>
  );
};

function getWidth(progress: number) {
  switch (progress) {
    case 1: return "w-[1%]"
    case 2: return "w-[2%]"
    case 3: return "w-[3%]"
    case 4: return "w-[4%]"
    case 5: return "w-[5%]"
    case 6: return "w-[6%]"
    case 7: return "w-[7%]"
    case 8: return "w-[8%]"
    case 9: return "w-[9%]"
    case 10: return "w-[10%]"
    case 11: return "w-[11%]"
    case 12: return "w-[12%]"
    case 13: return "w-[13%]"
    case 14: return "w-[14%]"
    case 15: return "w-[15%]"
    case 16: return "w-[16%]"
    case 17: return "w-[17%]"
    case 18: return "w-[18%]"
    case 19: return "w-[19%]"
    case 20: return "w-[20%]"
    case 21: return "w-[21%]"
    case 22: return "w-[22%]"
    case 23: return "w-[23%]"
    case 24: return "w-[24%]"
    case 25: return "w-[25%]"
    case 26: return "w-[26%]"
    case 27: return "w-[27%]"
    case 28: return "w-[28%]"
    case 29: return "w-[29%]"
    case 30: return "w-[30%]"
    case 31: return "w-[31%]"
    case 32: return "w-[32%]"
    case 33: return "w-[33%]"
    case 34: return "w-[34%]"
    case 35: return "w-[35%]"
    case 36: return "w-[36%]"
    case 37: return "w-[37%]"
    case 38: return "w-[38%]"
    case 39: return "w-[39%]"
    case 40: return "w-[40%]"
    case 41: return "w-[41%]"
    case 42: return "w-[42%]"
    case 43: return "w-[43%]"
    case 44: return "w-[44%]"
    case 45: return "w-[45%]"
    case 46: return "w-[46%]"
    case 47: return "w-[47%]"
    case 48: return "w-[48%]"
    case 49: return "w-[49%]"
    case 50: return "w-[50%]"
    case 51: return "w-[51%]"
    case 52: return "w-[52%]"
    case 53: return "w-[53%]"
    case 54: return "w-[54%]"
    case 55: return "w-[55%]"
    case 56: return "w-[56%]"
    case 57: return "w-[57%]"
    case 58: return "w-[58%]"
    case 59: return "w-[59%]"
    case 60: return "w-[60%]"
    case 61: return "w-[61%]"
    case 62: return "w-[62%]"
    case 63: return "w-[63%]"
    case 64: return "w-[64%]"
    case 65: return "w-[65%]"
    case 66: return "w-[66%]"
    case 67: return "w-[67%]"
    case 68: return "w-[68%]"
    case 69: return "w-[69%]"
    case 70: return "w-[70%]"
    case 71: return "w-[71%]"
    case 72: return "w-[72%]"
    case 73: return "w-[73%]"
    case 74: return "w-[74%]"
    case 75: return "w-[75%]"
    case 76: return "w-[76%]"
    case 77: return "w-[77%]"
    case 78: return "w-[78%]"
    case 79: return "w-[79%]"
    case 80: return "w-[80%]"
    case 81: return "w-[81%]"
    case 82: return "w-[82%]"
    case 83: return "w-[83%]"
    case 84: return "w-[84%]"
    case 85: return "w-[85%]"
    case 86: return "w-[86%]"
    case 87: return "w-[87%]"
    case 88: return "w-[88%]"
    case 89: return "w-[89%]"
    case 90: return "w-[90%]"
    case 91: return "w-[91%]"
    case 92: return "w-[92%]"
    case 93: return "w-[93%]"
    case 94: return "w-[94%]"
    case 95: return "w-[95%]"
    case 96: return "w-[96%]"
    case 97: return "w-[97%]"
    case 98: return "w-[98%]"
    case 99: return "w-[99%]"
    default: return "w-[55%]"
  }
}

export default Racer;
