export const weekAgo = () => {
  const currentDate = new Date();
  const before7Daysdate = new Date(
    currentDate.setDate(currentDate.getDate() - 7)
  );

  return before7Daysdate.toISOString();
};
