const sentence = "hello there from lighthouse labs";


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

