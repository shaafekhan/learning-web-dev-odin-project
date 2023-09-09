// const inventory = {
//     sunglasses: 1900,
//     pants: 1088,
//     bags: 1344
//   };
  
//   // Write your code below:
//   const myExecutor = (resolve, reject) => {
//     if (inventory.sunglasses >= 0) {
//       resolve('Sunglasses order Processed')
//     } else {
//       reject('That item is sold out.')
//     }
//   }


fetch('https://4risaajfpj.execute-api.eu-west-1.amazonaws.com/default/counter-service')
  .then((response) => response.json())
  .then((json) => console.log(json));

  