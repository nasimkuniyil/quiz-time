interface IResult{
    score:number;
    total:number;
}

export default function Result({ score, total }:IResult) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
      <p className="text-lg">
        Your Score: <span className="font-semibold">{score}</span> / {total}
      </p>
    </div>
  );
}
