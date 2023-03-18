import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface IServeLocStorageResults {
  getDate: (options: DateTimeFormatOptions) => string;
  getDateNow: () => number;
}

export const serveDate = (): IServeLocStorageResults => {
  const getDate = (options: DateTimeFormatOptions) => {
    const date = new Date;
    return date.toLocaleString("en-US", options);
  };

  const getDateNow = () => Date.now();

  return {
    getDate,
    getDateNow,
  };
};
