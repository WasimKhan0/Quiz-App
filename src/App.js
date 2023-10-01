import { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import EndScreen from "./Components/EndScreen";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helper/Context";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
