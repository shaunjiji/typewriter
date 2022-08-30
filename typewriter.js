const sentence = "hello there from lighthouse labs";

// for (const char of sentence){
//   setTimeout(() => {
//     process.stdout.write(char);
//   },10000);
// }

// const typeAnimation = (string) => {
//   for (let i = 50; i < string.length; i += 50){
//       setTimeout(() => {
//         process.stdout.write(char);
//       },i);
//     }
//   }

const typeAnimation = (string) => {
  let time = 50;
  for (let char of string) {
      setTimeout(() => {
        process.stdout.write(char);
      },time);
      time += 50;
    }
  }



  typeAnimation(sentence);

