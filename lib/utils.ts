export const getCurrentMonth = () => {
  const date = new Date();
  const month = date.getMonth();
  return month;
};

export const getCurrentMonthName = (month: number) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  return `${monthNames[month]}`;
};

export const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};
