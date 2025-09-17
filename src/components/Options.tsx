interface IOptions{
    options:string[];
    selected:string | null;
    confirmed:boolean;
    answer:string;
    onSelect:(opt:string | null)=>void;
}

export default function Options({ options, selected, confirmed, answer, onSelect }:IOptions) {
  return (
    <div className="w-full grid  md:grid-cols-2 gap-5 mb-8">
      {options.map((opt) => {
        const isCorrect = opt === answer;
        const isSelected = opt === selected;

        return (
          <button
            key={opt}
            onClick={() => !confirmed && onSelect(opt)}
            className={`w-full flex items-center justify-between border rounded-xl p-3 text-left 
              ${isSelected && !confirmed ? "border-blue-500" : ""}
              ${confirmed && isSelected && isCorrect ? "border-green-500" : ""}
              ${confirmed && isSelected && !isCorrect ? "border-red-500" : ""}`}
          >
            <span>{opt}</span>
            {confirmed && isSelected && isCorrect && "✓"}
            {confirmed && isSelected && !isCorrect && "✗"}
          </button>
        );
      })}
    </div>
  );
}
