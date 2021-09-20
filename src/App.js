import React, { useState } from "react";

const PAGE_SIZE = 2;
const INIT_STATE = [
  {
    id: "q1",
    question: "Whats your name?",
    answer: "",
  },
  {
    id: "q2",
    question: "Where are you from?",
    answer: "",
  },
  {
    id: "q3",
    question: "How old are you?",
    answer: "",
  },
  {
    id: "q4",
    question: "What is your first org?",
    answer: "",
  },
];
function App() {
  const [allQuestions, setAllQuestions] = useState(INIT_STATE);
  const [pageNO, setPageNo] = useState(1);
  const currentPageIdentifier = PAGE_SIZE * (pageNO - 1);

  const goPrev = () => setPageNo((prev) => (prev > 1 ? prev - 1 : prev));
  const goNext = () =>
    setPageNo((prev) => (prev < allQuestions.length - 1 ? prev + 1 : prev));

  const isPrevAvailable = () => pageNO <= 1;
  const isNexAvailable = () => pageNO === allQuestions.length / PAGE_SIZE;
  const isValidForm = () =>
    !(
      allQuestions[currentPageIdentifier].answer.trim().length &&
      allQuestions[currentPageIdentifier + 1].answer.trim().length
    );

  const handleChange = (e, questionId) => {
    setAllQuestions((prevState) =>
      prevState.map((item) =>
        item.id === questionId
          ? {
              ...item,
              answer: e.target.value,
            }
          : item
      )
    );
  };

  return (
    <div>
      <label htmlFor="box1">
        {allQuestions[currentPageIdentifier].question}
      </label>
      <input
        type="text"
        value={allQuestions[currentPageIdentifier].answer}
        onChange={(e) =>
          handleChange(e, allQuestions[currentPageIdentifier].id)
        }
        id="box1"
      />
      <label htmlFor="box2">
        {allQuestions[currentPageIdentifier + 1].question}
      </label>
      <input
        type="text"
        value={allQuestions[currentPageIdentifier + 1].answer}
        onChange={(e) =>
          handleChange(e, allQuestions[currentPageIdentifier + 1].id)
        }
        id="box2"
      />
      <button onClick={goPrev} disabled={isPrevAvailable()}>
        Prev
      </button>
      <button onClick={goNext} disabled={isNexAvailable() || isValidForm()}>
        Next
      </button>
    </div>
  );
}

export default App;
