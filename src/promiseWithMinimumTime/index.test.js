import promiseWithMinimumTime from './';

jest.useFakeTimers();

describe('promiseWithMinimumTime function', () => {
  it('should return a function which can be resolved/rejected at least on a minimum amount of time', async () => {
    const resolvedValue = 'a-resolved-value';
    const minTime = 2000;
    const myFunction = jest.fn().mockResolvedValue(resolvedValue);

    const myFunctionWithMinimumTime = promiseWithMinimumTime(
      myFunction,
      minTime
    );

    // Jest fake timers with promises
    // are not working yet https://stackoverflow.com/a/51132058
    const myFunctionWithMinimumTimeResult = await myFunctionWithMinimumTime();

    expect(myFunctionWithMinimumTimeResult).toEqual(resolvedValue);
    expect(myFunction).toHaveBeenCalledTimes(1);
  });
});
