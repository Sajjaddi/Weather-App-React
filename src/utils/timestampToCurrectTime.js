const timestampToCurrectTime = (timestamp) => {
    const unix_timestamp = timestamp;

    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    const formattedTime = hours + ":" + minutes.substr(-2);

    return formattedTime;
  };

export default timestampToCurrectTime