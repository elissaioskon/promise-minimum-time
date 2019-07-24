import promiseWithMinimumTime, { promiseMinimumTime } from './';

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

describe('promiseMinimumTime function', () => {
  it('should return the value of the resolved promise that user passed as first argument', async () => {
    const promiseResolveValue = 'test';
    const aRandomPromise = Promise.resolve(promiseResolveValue);

    const promiseResult = await promiseMinimumTime(aRandomPromise, 2000);

    expect(promiseResult).toEqual(promiseResolveValue);
  });
});
