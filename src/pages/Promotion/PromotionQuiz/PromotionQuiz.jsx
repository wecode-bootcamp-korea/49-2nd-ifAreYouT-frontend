import './PromotionQuiz.scss';

const PromotionQuiz = () => {
  const { id } = useParams();
  const [promotionItem, setPromotionItem] = useState({});

  useEffect(() => {
    fetch('/data/promotionData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('데이터를 가져오는 중 오류 발생');
        }
        return response.json();
      })
      .then(data => {
        const item = data.find(item => item.id === parseInt(id));
        setPromotionItem(item);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, [id]);
  return (
    <div className="promotion">
      {promotionItem ? (
        <div className="promotionContainer" key={promotionItem.id}>
          <div className="productTitle">{promotionItem.quiz}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default PromotionQuiz;
