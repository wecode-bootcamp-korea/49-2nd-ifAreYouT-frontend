export const seatMockData = (() => {
  const details = [
    {
      grade: 'SR',
      price: 180000,
    },
    {
      grade: 'R',
      price: 160000,
    },
    {
      grade: 'S',
      price: 140000,
    },
    {
      grade: 'A',
      price: 120000,
    },
  ];
  const seats = (() => {
    const seat = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 1; j <= 30; j++) {
        seat.push({
          seatId: j + i * 30,
          name: `${String.fromCharCode(i + 65)}-${j}`,
          status: true,
          seatGrade: details[Math.ceil((i * 30 + j) / 150) - 1],
        });
      }
    }
    return seat;
  })();
  return { details, seats };
})();
