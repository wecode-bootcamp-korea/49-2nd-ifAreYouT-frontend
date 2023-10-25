import React, { useState } from 'react';
import axios from 'axios';
import './ReactionButton.scss';

const likeIcon = '../../images/like.png';
const dislikeIcon = '../../images/dislike.png';

const ReactionButton = ({ reaction, hasVoted, fetchProductDetailData, id }) => {
  const { up, down } = reaction;
  const userToken = localStorage.getItem('userToken');
  const [voted, setVoted] = useState(hasVoted);
  const [likeCount, setLikeCount] = useState(up);
  const [unlikeCount, setUnlikeCount] = useState(down);

  const handleLikeClick = () => {
    // if (!userToken) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    if (voted) {
      alert('이미 참여하셨습니다.');
      return;
    }

    // 증가된 likeCount를 상태로 업데이트
    setLikeCount(prevLikeCount => prevLikeCount + 1);

    axios
      .put(`http://10.58.52.181:8000/events/${id}`, { reactions: 'like' })
      .then(response => {
        // POST 요청이 성공하면, 데이터를 다시 불러옴
        fetchProductDetailData();
        setVoted(true); // 클릭 상태 업데이트
      })
      .catch(error => {
        console.error('POST 요청 중 오류 발생:', error);
      });
  };

  console.log(id);

  const handleDislikeClick = () => {
    // if (!userToken) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    if (voted) {
      alert('이미 참여하셨습니다.');
      return;
    }

    setUnlikeCount(prevUnlikeCount => prevUnlikeCount + 1);

    axios
      .put(`http://10.58.52.181:8000/events/${id}`, { reactions: 'dislike' })
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
      <div className="count">{likeCount}</div>
      <div className="btn" onClick={handleDislikeClick}>
        <img src={dislikeIcon} alt="dislike" />
      </div>
      <div className="count">{unlikeCount}</div>
    </div>
  );
};

export default ReactionButton;
