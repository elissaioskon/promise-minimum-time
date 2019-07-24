import delay from '../delay';

export default (fn, minTimeInMillisec) => async (...args) => {
  const [response] = await Promise.all([fn(...args), delay(minTimeInMillisec)]);

  return response;
};

export const promiseMinimumTime = async (promise, minTimeInMillisec) => {
  const [response] = await Promise.all([promise, delay(minTimeInMillisec)]);

  return response;
};
