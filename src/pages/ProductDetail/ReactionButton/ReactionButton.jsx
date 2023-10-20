import React, { useState, useEffect } from 'react';
import './ReactionButton.scss';

const likeIcon = '../../images/like.png';
const dislikeIcon = '../../images/dislike.png';

const ReactionButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  // 사용자의 토큰을 로컬 스토리지에서 꺼내옴
  // const getUserToken = () => {
  //   return localStorage.getItem('userToken');
  // };

  // 사용자의 투표 여부를 확인
  const hasUserVoted = () => {
    return localStorage.getItem('hasUserVoted') === 'true';
  };

  // 초기 로딩 시 사용자의 투표 여부를 확인
  useEffect(() => {
    const userVoted = hasUserVoted();
    if (userVoted) {
      setHasLiked(true);
      setHasDisliked(true);
    }
  }, []);

  const handleLikeClick = () => {
    // const userToken = getUserToken();

    // if (!userToken) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    if (!hasLiked && !hasDisliked) {
      setLikeCount(likeCount + 1);
      setHasLiked(true);
      localStorage.setItem('hasUserVoted', 'true');
    } else {
      alert('이미 참여하셨습니다.');
    }
  };

  const handleDislikeClick = () => {
    // const userToken = getUserToken();

    // if (!userToken) {
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    if (!hasLiked && !hasDisliked) {
      setDislikeCount(dislikeCount + 1);
      setHasDisliked(true);
      localStorage.setItem('hasUserVoted', 'true');
    } else {
      alert('이미 참여하셨습니다.');
    }
  };

  return (
    <div className="reactionButton">
      <div className="reactionButtonContainer"></div>
      <div className="likeBtn" onClick={handleLikeClick}>
        <img src={likeIcon} alt="Like" />
      </div>
      <span>{likeCount}</span>
      <div className="dislikeBtn" onClick={handleDislikeClick}>
        <img src={dislikeIcon} alt="dislike" />
      </div>
      <span>{dislikeCount}</span>
    </div>
  );
};

export default ReactionButton;
