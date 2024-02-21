import { useParams } from "@reach/router";
import React, { useEffect, useState } from "react";
import Category from "../data/Categories.json";
import QuizList from "../data/Quiz.json";

const Quiz = (props) => {
  const [activeQuiz, setActiveQuiz] = useState(0);
  const { categoryId } = useParams();

  let filterQuiz = QuizList.filter((filter) => filter.category == categoryId);
  
  let getCategory = Category.filter((filter) => filter.id == categoryId)[0];

  useEffect(() => {
    if (getCategory == undefined) {
      props.navigate("/");
    }
  }, []);

  useEffect(() => {
    if (activeQuiz >= filterQuiz.length) {
      alert("Sınav bitti hadi siktir git ! ");
      props.navigate("/");
    }
  }, [activeQuiz]);

  const handleQuizCheck = (select) => {
    if (filterQuiz[activeQuiz]?.answer == select) {
      setActiveQuiz(activeQuiz + 1);
    } else {
      alert("senin kafanı sikeyim !, Tekrar dene");
    }
  };

  return (
    <div>
      Soru {activeQuiz}: {filterQuiz[activeQuiz]?.label}
      <ul>
        {filterQuiz[activeQuiz]?.choise?.map((choise, index) => (
          <li>
            <button onClick={() => handleQuizCheck(choise)}>{choise}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
