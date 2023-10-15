import './GradeInfo.scss';

const GradeInfo = ({ value }) => {
  const { grade, price } = value;
  return (
    <div className="gradeInfo">
      <div className={`gradeBox grade${grade}`} />
      {grade}석 {price.toLocaleString()}원
    </div>
  );
};

export default GradeInfo;
