//promise using catch and finally
const promise = new Promise(function(resolve, reject) {
    const x = "ABC";
    const y = "BC"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('x and y are equal');
      }).
      catch(function () {
          console.log('x and y are not equal');
      }).
      finally(function () {
          console.log('Completed'); 
      });

// promise chain

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

promise1.then((result) => {
    console.log(result); 
    return result * 2;
}).then((result) => {
    console.log(result); 
    return result * 3;
}).then((result) => {
    console.log(result);  
});