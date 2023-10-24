import React, { useState } from 'react';
import axios from 'axios';
import './ReactionButton.scss';

const likeIcon = '../../images/like.png';
const dislikeIcon = '../../images/dislike.png';

const ReactionButton = ({ reaction, hasVoted, fetchProductDetailData }) => {
  const { up, down } = reaction;
  const userToken = localStorage.getItem('userToken');
  // hasVoted를 useState를 사용해 관리
  const [voted, setVoted] = useState(hasVoted);

  const handleLikeClick = () => {
    if (!userToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (voted) {
      alert('이미 참여하셨습니다.');
      return;
    }

    axios
      .post('/api주소', { reaction: 'like' })
      .then(response => {
        // POST 요청이 성공하면, 데이터를 다시 불러옴
        fetchProductDetailData();
        setVoted(true); // 클릭 상태 업데이트
      })
      .catch(error => {
        console.error('POST 요청 중 오류 발생:', error);
      });
  };

  const handleDislikeClick = () => {
    if (!userToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (voted) {
      alert('이미 참여하셨습니다.');
      return;
    }

    axios
      .post('/api주소', { reaction: 'dislike' })
      .then(response => {
        // POST 요청이 성공하면, 데이터를 다시 불러옴
        fetchProductDetailData();
        setVoted(true); // 클릭 상태 업데이트
      })
      .catch(error => {
        console.error('POST 요청 중 오류 발생:', error);
      });
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
