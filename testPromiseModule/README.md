# Promise minimum time

> Set a minimum time for your promise. 

**This library could be useful if we want a promise to complete after at least some minimum time.**
**It does not delay the request, it just defines a minimum time in order to be completed**


For example if a modal with a loading bar opens when we export some data, we want to be sure 
that modal with the loading indicator will be shown for at least some time(2 second for example)
before it closes. So with this library we could make export request to be completed after at least some
minimum time so we can be sure that the modal stays open for some time and it
closes when the request is completed.
  

#### Please check codesandbox examples
- Example using `promiseWithMinimumTime` : [Link](https://pages.github.com/)
- Example using `promiseMinimumTime` : [Link](https://pages.github.com/).


## Installation

```sh
// With yarn
yarn add @elissaios/promise-minimum-time

// With npm
npm install @elissaios/promise-minimum-time
```

## Usage example using `promiseWithMinimumTime` 😀 


```javascript
 import promiseWithMinimumTime from '@elissaios/promise-minimum-time'
 
 const exportData = () => new Promise(resolve => setTimeout(resolve, 1000))
 
 const exportDataMinimumTime2minutes = promiseWithMinimumTime(exportData, 2000)
  
  exportDataMinimumTime2minutes().then(()=>{
    console.log('This log will be logged after 2 minutes')
  })
  
```

## Usage example using `promiseMinimumTime` 😀 
This example is using axios in order to make http requests.

```javascript
 import {promiseMinimumTime} from '@elissaios/promise-minimum-time'
 
 const exportData = () => new Promise(resolve => setTimeout(resolve, 1000))
 
  promiseMinimumTime(exportData(), 2000).then(()=>{
     console.log('This log will be logged after 2 minutes')
  })
```

## Contributing

Coming soon
