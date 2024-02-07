import { Cursor, useTypewriter } from "react-simple-typewriter";

const MyTypewriter = () => {
  const [text] = useTypewriter({
    /* Hook Config */
    words: ["Software Engineer.", "Data Analyst.", "Algorithmic Trader."],
    cursor: true,
    delaySpeed: 1000,
    deleteSpeed: 25,
    loop: 0,
  });

  return (
    <div className="App">
      <span>{text}</span>
      <Cursor />
    </div>
  );
};

export default MyTypewriter;
