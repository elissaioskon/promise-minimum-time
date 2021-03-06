# Promise minimum time

> Set a minimum time for your promise. 

**This library could be useful if we want a promise to complete after at least some minimum time.**
**It does not delay the request, it just defines a minimum time in order to be completed**


For example if a modal with a loading indicator opens when we export some data, we want to be sure 
that the modal with the loading indicator will be shown for at least some time(2 second for example
before it closes) in order to have good user experience. So with this library we can make the export 
request to be completed after at least some minimum time.
  

#### Please check codesandbox example
- Example [Codesandbox](https://codesandbox.io/s/silent-cherry-f9i07?fontsize=14)

## Installation

```sh
// With yarn
yarn add @elissaios/promise-minimum-time

// With npm
npm install @elissaios/promise-minimum-time
```

## Usage example 😀 
```javascript
 import promiseWithMinimumTime, {promiseMinimumTime} from '@elissaios/promise-minimum-time'
 
 const threeSecInMs = 3 * 1000;
 
 const exportData = () => Promise.resolve()
 
 // Use either promiseWithMinimumTime or promiseMinimumTime
 const exportDataMinimumTime2minutes = promiseWithMinimumTime(exportData, threeSecInMs)
  
  exportDataMinimumTime2minutes().then(()=>{
    console.log('This log will be logged after 3 seconds')
  })
  
  promiseMinimumTime(exportData(), threeSecInMs).then(()=>{
       console.log('This log will be logged after 3 seconds')
    })
```

## Contributing

Coming soon
