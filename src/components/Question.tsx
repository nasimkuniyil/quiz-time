interface IQuestion{
    text:string;
}

export default function Question({ text }:IQuestion) {
  return <h2 className="text-xl font-bold my-10">{text}</h2>;
}
