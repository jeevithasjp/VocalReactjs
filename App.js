import React from "react";
import Crossword from "@jaredreisinger/react-crossword";


export default function App() {
  const data = {
    across: {
      1: {
        clue: "Toy on a string (2-2)",
        answer: "YOYO",
        row: 0,
        col: 0,
      },
      2: {
        clue: "Have a rest (3,4)",
        answer: "LIEDOWN",
        row: 2,
        col: 0,
      },
    },
    down: {
      1: {
        clue: "Colour (6)",
        answer: "YELLOW",
        row: 0,
        col: 0,
      },
      3: {
        clue: "Bits and bobs (4,3,4)",
        answer: "ODDSAND",
        row: 0,
        col: 3,
      },
      4: {
        clue: "See 3 down",
        answer: "ENDS",
        row: 1,
        col: 6,
      },
    },
  };

  return (
    <div className="App">
      <h1>Custom Crossword Puzzle</h1>
      <Crossword data={data} />
    </div>
  );
}
