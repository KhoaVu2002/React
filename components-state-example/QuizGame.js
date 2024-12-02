import React, { useState } from "react";
import './QuizGame.css';
import Questions from './Questions';


const QuizGame = () =>{
    const[score, setScore] = useState(0);
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        {
          question: 'Đâu là thủ đô của pháp',
          options: ['London', 'Berlin', 'Madrid', 'Paris'],
          correctAnswer: 'Paris',
        },
        {
          question: 'Động vật có vú lớn nhất là gì?',
          options: ['Voi', 'Cá voi xanh', 'Hươu cao cổ', 'Hổ'],
          correctAnswer: 'Cá voi xanh',
        },
        {
          question: 'Đồng tiền của Nhật Bản là gì?',
          options: ['Won', 'Yuan', 'Ringgit', 'Yen'],
          correctAnswer: 'Yen',
        },
        {
          question: 'Hành tinh nào được gọi là Hành tinh Đỏ?',
          options: ['Sao Kim', 'Sao Hỏa', 'Sao Mộc', 'Sao Thổ'],
          correctAnswer: 'Sao Hỏa',
        },
        {
          question: 'Đại dương lớn nhất trên Trái đất là gì?',
          options: ['Đại Tây Dương', 'Bắc Băng Dương', 'Ấn Độ Dương', 'Thái Bình Dương'],
          correctAnswer: 'Thái Bình Dương',
        },
        {
          question: 'Thủ đô của Nhật Bản là gì?',
          options: ['Tokyo', 'Kyoto', 'Osaca', 'Không có'],
          correctAnswer: 'Không có',
        },
      ];

      const handleAnswer = (isCorrect) =>{
        if(isCorrect){
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      };
      const currentQuestion = questions[currentQuestionIndex];

      return(
        <div className="quiz-game">
            {currentQuestion ? 
            (<Questions question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswer={handleAnswer}
            />) : 
            (<p>Game over. Your score is {score}</p>)}
        </div>
      )
    
}

export default QuizGame;