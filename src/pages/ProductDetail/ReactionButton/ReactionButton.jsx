import { useState } from 'react';
import axios from 'axios';
import { HOST } from '../../../utils/variable';
import './ReactionButton.scss';

const likeIcon = '../../images/like.png';
const dislikeIcon = '../../images/dislike.png';

const ReactionButton = ({
  reaction,
  hasVoted,
  fetchProductDetailData,
  num,
}) => {
  const { up, down } = reaction;
  const userToken = localStorage.getItem('token');
  const [voted, setVoted] = useState(hasVoted);
  const [likeCount, setLikeCount] = useState(up);
  const [unlikeCount, setUnlikeCount] = useState(down);
  const [event, setEvent] = useState(num);

  const handleLikeClick = () => {
    if (!userToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (voted) {
      alert('이미 참여하셨습니다.');
      return;
    }

    // 좋아요 버튼을 클릭했을 때
    const reactionData = {
      userId: userToken, // 토큰을 사용자 ID로 대체 //로컬스토리지에 있는 토큰 헤더에 담아서 보냄
      eventId: event,
      reaction: 'exited',
    };
    setLikeCount(prevLikeCount => prevLikeCount + 1);

    axios
      .put(`${HOST}/events/reaction`, reactionData)
      .then(response => {
        fetchProductDetailData();
        setVoted(true);
      })
      .catch(error => {
        console.error('PUT 요청 중 오류 발생:', error);
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

    // 싫어요 버튼을 클릭했을 때
    const reactionData = {
      userId: userToken, // 토큰을 사용자 ID로 대체
      eventId: event,
      reaction: 'unexited',
    };

    console.log('싫어요 버튼 클릭:', reactionData);

    setUnlikeCount(prevUnlikeCount => prevUnlikeCount + 1);

    axios
      .put(`${HOST}/events/reaction`, reactionData)
      .then(response => {
        fetchProductDetailData();
        setVoted(true);
      })
      .catch(error => {
        console.error('PUT 요청 중 오류 발생:', error);
      });
  };

  return (
    <div className="reactionButton">
      <div className="reactionButtonContainer" />
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
