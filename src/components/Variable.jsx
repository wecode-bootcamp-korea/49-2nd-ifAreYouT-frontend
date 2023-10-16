export const seatMockData = (() => {
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
          status: true,
          seatGrade: details[Math.ceil(seatId / 150) - 1],
        });
      }
    }
    return seat;
  })();
  return { details, seats };
})();
