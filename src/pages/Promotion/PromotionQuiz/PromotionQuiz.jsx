import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SubmitButton from '../SubmitButton/SubmitButton';
import './PromotionQuiz.scss';

const PromotionQuiz = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState([]); // 백엔드에서 가져온 퀴즈 데이터를 저장
  const [ans, setAns] = useState([]); // 사용자 응답을 저장

  // 백엔드에서 퀴즈 데이터를 가져오는 useEffect
  useEffect(() => {
    axios
      .get('/data/promotionData.json')
      // .get(`http://10.58.52.157:8000/promotion/${id}`)
      .then(response => {
        setQuizData(response.data.data);
        // 사용자 응답을 초기화
        setAns(new Array(response.data.data.length).fill('')); // 빈 문자열로 초기화
      })
      .catch(error => {
        console.error('퀴즈 데이터를 가져오는 중 오류 발생:', error);
      });
  }, []);

  // 사용자 응답이 변경될 때 실행되는 함수
  const handleResponseChange = (index, response) => {
    // 기존 응답 배열 복사
    const updatedResponses = [...ans];
    // 해당 퀴즈의 응답을 업데이트
    updatedResponses[index] = response;
    console.log(updatedResponses); //테스트 콘솔. 테스트 후 삭제
    // 업데이트된 응답 배열을 저장
    setAns(updatedResponses);
  };

  return (
    <div className="promotionQuiz">
      {quizData.map((quizItem, index) => (
        <div className="quiz" key={index}>
          <div className="question">{quizItem.performerQuestion}</div>
          <div className="response">
            <label>
              <input
                type="radio"
                name={`response-${index}`}
                value="true"
                checked={ans[index] === 1}
                onChange={() => handleResponseChange(index, 1)}
              />
              진실
            </label>
            <label>
              <input
                type="radio"
                name={`response-${index}`}
                value="false"
                checked={ans[index] === 0}
                onChange={() => handleResponseChange(index, 0)}
              />
              거짓
            </label>
          </div>
        </div>
      ))}
      <SubmitButton userResponse={ans} num={id} />
    </div>
  );
};

export default PromotionQuiz;
