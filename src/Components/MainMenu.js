import { useContext } from "react";
import "../App.css";
import { QuizContext } from "../Helper/Context";
function MainMenu() {
  const {gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
      

    </div>
  );
}

export default MainMenu;
 