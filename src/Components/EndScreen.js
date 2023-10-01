
import '../App.css';
import { QuizContext } from "../Helper/Context";
import { Questions } from "./QuestionBank";

import { useContext } from "react";


function EndScreen() {

  const { score, setScore , setGameState } = useContext(QuizContext);
  const reStart=()=>{
    setGameState("quiz");
    setScore(0);

  }
  return (
    <div className="wrapper">
      <div className="container center">
      <h1><b>Result</b></h1>
      <h1>Your Score : {score} / {Questions.length}</h1>
      <button className="reStart" onClick={reStart}>Retry</button>

      </div>
     
    </div>
  );
}

export default EndScreen;
