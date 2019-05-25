import delay from 'delay';

export default (fn, minTimeInMillisec) => async (...args) => {
  const [response] = await Promise.all([fn(...args), delay(minTimeInMillisec)]);

  return response;
};
