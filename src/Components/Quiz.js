import { useRef, useState } from "react";
import "../App.css";
import { Questions } from "./QuestionBank";
import { QuizContext } from "../Helper/Context";
import { useContext } from "react";

function Quiz() {
  const btnRef1 = useRef();
  const btnRef2 = useRef();
  const btnRef3 = useRef();
  const btnRef4 = useRef();
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState();

  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].ans === optionChosen) {
      setScore(score + 1);
    }
    btnRef1.current.style.backgroundColor = "#fff";
    btnRef2.current.style.backgroundColor = "#fff";
    btnRef3.current.style.backgroundColor = "#fff";
    btnRef4.current.style.backgroundColor = "#fff";
    setCurrQuestion(currQuestion + 1);
  };
  const finishQuiz = () => {
    if (Questions[currQuestion].ans === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  const clickedA = (e) => {
    setOptionChosen("A");

    if (Questions[currQuestion].ans === "A") {
      btnRef1.current.style.backgroundColor = "#aaff80";
    } else {
      btnRef1.current.style.backgroundColor = "#ff4d4d";
    }

    btnRef2.current.style.backgroundColor = "#fff";
    btnRef3.current.style.backgroundColor = "#fff";
    btnRef4.current.style.backgroundColor = "#fff";
  };
  const clickedB = (e) => {
    setOptionChosen("B");
    if (Questions[currQuestion].ans === "B") {
      btnRef2.current.style.backgroundColor = "#aaff80";
    } else {
      btnRef2.current.style.backgroundColor = "#ff4d4d";
    }

    btnRef1.current.style.backgroundColor = "#fff";
    // btnRef2.current.style.backgroundColor = "#aaff80"
    btnRef3.current.style.backgroundColor = "#fff";
    btnRef4.current.style.backgroundColor = "#fff";
  };
  const clickedC = (e) => {
    setOptionChosen("C");
    if (Questions[currQuestion].ans === "C") {
      btnRef3.current.style.backgroundColor = "#aaff80";
    } else {
      btnRef3.current.style.backgroundColor = "#ff4d4d";
    }

    btnRef1.current.style.backgroundColor = "#fff";
    btnRef2.current.style.backgroundColor = "#fff";
    // btnRef3.current.style.backgroundColor = "#aaff80"
    btnRef4.current.style.backgroundColor = "#fff";
  };
  const clickedD = (e) => {
    setOptionChosen("D");
    if (Questions[currQuestion].ans === "D") {
      btnRef4.current.style.backgroundColor = "#aaff80";
    } else {
      btnRef4.current.style.backgroundColor = "#ff4d4d";
    }

    btnRef1.current.style.backgroundColor = "#fff";
    btnRef2.current.style.backgroundColor = "#fff";
    btnRef3.current.style.backgroundColor = "#fff";
    // // btnRef4.current.style.backgroundColor = "#aaff80"
  };
  return (
    <div className="wrapper">
      <div className="container">
        <p>
          {" "}
          <b>{currQuestion + 1}</b> of <b>{Questions.length}</b>
        </p>
        <h2>Question :</h2>
        <h1>{Questions[currQuestion].prompt}</h1>

        <div className="options">
          <button ref={btnRef1} onClick={(e) => clickedA(e)}>
            {Questions[currQuestion].option1}
          </button>

          <button ref={btnRef2} onClick={(e) => clickedB(e)}>
            {Questions[currQuestion].option2}
          </button>

          <button ref={btnRef3} onClick={(e) => clickedC(e)}>
            {Questions[currQuestion].option3}
          </button>

          <button ref={btnRef4} onClick={(e) => clickedD(e)}>
            {Questions[currQuestion].option4}
          </button>
        </div>

        {currQuestion === Questions.length - 1 ? (
          <button
            className="next"
            onClick={() => {
              finishQuiz();
            }}
          >
            Finish Quiz
          </button>
        ) : (
          <button
            className="next"
            onClick={() => {
              nextQuestion();
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
