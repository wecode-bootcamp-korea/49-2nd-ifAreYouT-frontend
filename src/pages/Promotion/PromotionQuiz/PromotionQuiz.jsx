import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SubmitButton from '../SubmitButton/SubmitButton';
import { HOST } from '../../../utils/variable';
import './PromotionQuiz.scss';

const PromotionQuiz = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState([]); // 백엔드에서 가져온 퀴즈 데이터를 저장
  const [ans, setAns] = useState([]); // 사용자 응답을 저장

  // 백엔드에서 퀴즈 데이터를 가져오는 useEffect
  useEffect(() => {
    axios
      .get(`${HOST}/promotion/${id}`)
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
    const updatedResponses = [...ans];
    updatedResponses[index] = response;
    setAns(updatedResponses);
  };

  return (
    <div className="promotionQuiz">
      <div className="promotionQuizContainer">
        <div className="promotionQuizTitle">Pre-Order Pass를 잡아라!</div>
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
                TRUE
              </label>
              <label>
                <input
                  type="radio"
                  name={`response-${index}`}
                  value="false"
                  checked={ans[index] === 0}
                  onChange={() => handleResponseChange(index, 0)}
                />
                FALSE
              </label>
            </div>
          </div>
        ))}
        <SubmitButton userResponse={ans} num={id} />
      </div>
    </div>
  );
};

export default PromotionQuiz;
