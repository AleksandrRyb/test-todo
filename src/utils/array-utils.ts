export const sortByDate = (a: string, b: string) => {
  const aDate = new Date(a).getTime();
  const bDate = new Date(b).getTime();

  return aDate - bDate;
};
