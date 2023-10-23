import React from 'react';
import './ReactionButton.scss';

const likeIcon = '../../images/like.png';
const dislikeIcon = '../../images/dislike.png';

const ReactionButton = ({ reaction, hasVoted }) => {
  const { up, down } = reaction;
  const userToken = localStorage.getItem('userToken');

  const handleLikeClick = () => {
    if (!userToken) {
      alert('로그인이 필요합니다.');

      return;
    }

    if (hasVoted) {
      alert('이미 참여하셨습니다.');

      return;
    }
  };

  const handleDislikeClick = () => {
    if (!userToken) {
      alert('로그인이 필요합니다.');

      return;
    }

    if (hasVoted) {
      alert('이미 참여하셨습니다.');

      return;
    }
  };

  return (
    <div className="reactionButton">
      <div className="reactionButtonContainer"></div>
      <div className="btn" onClick={handleLikeClick}>
        <img src={likeIcon} alt="Like" />
      </div>
      <div className="count">{up}</div>
      <div className="btn" onClick={handleDislikeClick}>
        <img src={dislikeIcon} alt="dislike" />
      </div>
      <div className="count">{down}</div>
    </div>
  );
};

export default ReactionButton;
