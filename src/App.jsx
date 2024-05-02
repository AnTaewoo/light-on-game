import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const buttonArr = [0, 1, 2, 3, 4];
  const [valueArr, setValueArr] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);

  const [count, setCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);

  useEffect(() => {
    setBestCount(localStorage.getItem("best-count"));
  }, []);

  const checkTrue = (arr) => {
    setValueArr(arr);
    let check = false;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (valueArr[i][j] == false) {
          check = true;
          break;
        }
      }
    }
    if (check == false) {
      let best = bestCount == 0 ? count : count > bestCount ? bestCount : count;
      alert("Clear!");
      setBestCount(best);
      setCount(0);
      setValueArr([
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ]);
      localStorage.setItem("best-count", best);
    }
  };

  const onClick = (e, [x, y]) => {
    console.log(valueArr);
    setCount((pre) => pre + 1);
    if (x == 0 && y == 0) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x + 1][y] = !newValueArr[x + 1][y];
      newValueArr[x][y + 1] = !newValueArr[x][y + 1];
      checkTrue(newValueArr);
    } else if (x == 4 && y == 4) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x - 1][y] = !newValueArr[x - 1][y];
      newValueArr[x][y - 1] = !newValueArr[x][y - 1];
      checkTrue(newValueArr);
    } else if (x == 4 && y == 0) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x - 1][y] = !newValueArr[x - 1][y];
      newValueArr[x][y + 1] = !newValueArr[x][y + 1];
      checkTrue(newValueArr);
    } else if (x == 0 && y == 4) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x + 1][y] = !newValueArr[x + 1][y];
      newValueArr[x][y - 1] = !newValueArr[x][y - 1];
      checkTrue(newValueArr);
    } else if (x == 0) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x + 1][y] = !newValueArr[x + 1][y];
      newValueArr[x][y + 1] = !newValueArr[x][y + 1];
      newValueArr[x][y - 1] = !newValueArr[x][y - 1];
      checkTrue(newValueArr);
    } else if (x == 4) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x - 1][y] = !newValueArr[x - 1][y];
      newValueArr[x][y + 1] = !newValueArr[x][y + 1];
      newValueArr[x][y - 1] = !newValueArr[x][y - 1];
      checkTrue(newValueArr);
    } else if (y == 0) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x][y + 1] = !newValueArr[x][y + 1];
      newValueArr[x + 1][y] = !newValueArr[x + 1][y];
      newValueArr[x - 1][y] = !newValueArr[x - 1][y];
      checkTrue(newValueArr);
    } else if (y == 4) {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x][y - 1] = !newValueArr[x][y - 1];
      newValueArr[x + 1][y] = !newValueArr[x + 1][y];
      newValueArr[x - 1][y] = !newValueArr[x - 1][y];
      checkTrue(newValueArr);
    } else {
      let newValueArr = valueArr;
      newValueArr[x][y] = !newValueArr[x][y];
      newValueArr[x + 1][y] = !newValueArr[x + 1][y];
      newValueArr[x - 1][y] = !newValueArr[x - 1][y];
      newValueArr[x][y + 1] = !newValueArr[x][y + 1];
      newValueArr[x][y - 1] = !newValueArr[x][y - 1];
      checkTrue(newValueArr);
    }
  };

  return (
    <div id="container">
      <div id="head">
        <p className="current-count">Count: {count}</p>
        <p className="best-count">Best: {bestCount}</p>
      </div>
      <div id="body">
        <ul>
          {buttonArr.map((value, index) => (
            <li key={index}>
              <button
                className={valueArr[value][0] ? "active" : ""}
                onClick={(e) => onClick(e, [value, 0])}
              ></button>
              <button
                className={valueArr[value][1] ? "active" : ""}
                onClick={(e) => onClick(e, [value, 1])}
              ></button>
              <button
                className={valueArr[value][2] ? "active" : ""}
                onClick={(e) => onClick(e, [value, 2])}
              ></button>
              <button
                className={valueArr[value][3] ? "active" : ""}
                onClick={(e) => onClick(e, [value, 3])}
              ></button>
              <button
                className={valueArr[value][4] ? "active" : ""}
                onClick={(e) => onClick(e, [value, 4])}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
