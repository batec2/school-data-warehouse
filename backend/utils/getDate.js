const getDate = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return today.toISOString().replace(":", "-");
};

export default getDate;
