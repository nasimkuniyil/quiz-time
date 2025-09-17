import { useState, useEffect } from "react";
import Timer from "../components/Timer";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Options from "../components/Options";
import Result from "../components/Result";
import Button from "../components/Button";

const quizData = [
  { question: "What is the capital of France?", options: ["Berlin", "Paris", "Rome", "Madrid"], answer: "Paris" },
  { question: "Which language runs in a web browser?", options: ["Python", "C++", "JavaScript", "Java"], answer: "JavaScript" },
  { question: "Which company created React?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selected, setSelected] = useState<string|null>(null);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const currentQuestion = quizData[currentIndex];


  const handleConfirm = () => {
    if (selected) {
      setConfirmed(true);
      if (selected === currentQuestion.answer) {
        setScore((prev) => prev + 1);
      }
    }
  };
  
  const handleNext = () => {
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setConfirmed(false);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      {!finished ? (
        <>
          <div className="flex justify-between w-full">
            <Timer />
            <Progress current={currentIndex + 1} total={quizData.length} />
          </div>

          <Question text={currentQuestion.question} />

          <Options
            options={currentQuestion.options}
            selected={selected}
            confirmed={confirmed}
            answer={currentQuestion.answer}
            onSelect={(opt)=>setSelected(opt)}
          />

          {!confirmed ? (
            <Button
              onClick={handleConfirm}
              disabled={!selected}
              className={"bg-blue-600 text-white rounded-lg"}
            >
              Confirm
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className={"bg-green-600 text-white rounded-lg"}
            >
              Next
            </Button>
          )}
        </>
      ) : (
        <Result score={score} total={quizData.length} />
      )}
    </div>
  );
}
