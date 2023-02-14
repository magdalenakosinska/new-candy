import { useEffect, useState } from "react";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }

    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);
  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index: number) => (
          <img key={index} style={{ backgroundColor: candyColor }} />
        ))}
      </div>
    </div>
  );
}

export default App;
