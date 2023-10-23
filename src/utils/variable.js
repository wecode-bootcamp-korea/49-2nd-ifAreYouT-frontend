const details = [
  {
    grade: 'R',
    price: 180000,
  },
  {
    grade: 'S',
    price: 160000,
  },
  {
    grade: 'A',
    price: 140000,
  },
  {
    grade: 'C',
    price: 120000,
  },
];
const seats = (() => {
  const seat = [];
  for (let i = 0; i < 20; i++) {
    for (let j = 1; j <= 30; j++) {
      const seatId = i * 30 + j;
      seat.push({
        seatId,
        name: `${String.fromCharCode(i + 65)}-${j}`,
        status: 'available',
        seatGrade: details[Math.ceil(seatId / 150) - 1],
      });
    }
  }
  return seat;
})();
export const seatMockData = { details, seats };

export const AVAILABLE = 'available';
export const RESERVED = 'reserved';
export const DISABLED = 'disabled';
export const SELECTED = 'selected';

export const productInfo = {
  productId: 1,
  productName: '영화 속의 모차르트',
  productImg: 'https://i.postimg.cc/0jYkJNB6/2023-10-17-12-57-26.png',
  location: '서울시 강남구 테헤란로 427, 10층',
  date: '2023-10-28-19:00',
};

export const HOST = 'http://10.58.52.151:8000';
