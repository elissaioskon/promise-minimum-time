export default milliSec =>
  new Promise(resolve => setTimeout(resolve, milliSec));
