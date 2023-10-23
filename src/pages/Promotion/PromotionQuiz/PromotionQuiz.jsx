import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import QuizButton from '../QuizButton/QuizButton';
import QuizSubmitButton from '../QuizSubmitButton/QuizSubmitButton';
import './PromotionQuiz.scss';

const PromotionQuiz = () => {
  const { id } = useParams();
  const [promotionData, setPromotionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/data/promotionData.json')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('데이터를 가져오는 중 오류 발생');
        }
        return response.data;
      })
      .then(data => {
        setPromotionData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div className="promotionQuiz">
      {loading ? (
        <p>Loading...</p>
      ) : (
        promotionData
          .filter(promotionItem => promotionItem.id === parseInt(id))
          .map(selectedPromotion => (
            <div className="promotionQuizContainer" key={selectedPromotion.id}>
              {selectedPromotion.quiz.map((quizItem, index) => (
                <div className="quiz" key={index}>
                  {Object.values(quizItem)[0]}{' '}
                  {/* quiz1, quiz2, quiz3 중 첫 번째 값을 렌더링 */}
                  <QuizButton />
                </div>
              ))}
              <QuizSubmitButton />
            </div>
          ))
      )}
    </div>
  );
};

export default PromotionQuiz;
