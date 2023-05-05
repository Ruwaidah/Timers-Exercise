function countdown(num) {
  num--;
  const id = setInterval(() => {
    if (num === 0) {
      console.log("DONE!");
      clearInterval(id);
    } else console.log(num--);
  }, 1000);
}

countdown(4);
