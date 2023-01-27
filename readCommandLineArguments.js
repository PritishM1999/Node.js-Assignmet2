const args = process.argv;
  
console.log(args);

args.forEach((argv) => {
    console.log(`Hello ${argv}`);
});