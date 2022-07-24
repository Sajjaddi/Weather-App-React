const getDate = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  const [, month, daysOfMonth, year] = d.toDateString().split(" ");
  const daysNumber = d.getDay();
  const day = days[daysNumber];
  const newDate = `${day}, ${daysOfMonth} ${month} '${year.slice(-2)}`;
  return newDate;
};

export default getDate;
