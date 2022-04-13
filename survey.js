const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name/ nickname? ', (answer1) => {

  rl.question('What is an activity you like doing? ', (answer2) => {

    rl.question('What do you listen to while doing that? ', (answer3) => {

      rl.question('Which meal is your favourite? ', (answer4) => {

        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {

          rl.question('Which sport is your absolute favourite? ', (answer6) => {

            rl.question('What is your superpower? ', (answer7) => {

              console.log(`${answer1} loves to ${answer2} and is always listening to ${answer3}. Theyre fav meal is ${answer4} and theyre fav meal item is ${answer5}. ${answer1} loves to play ${answer6} also he has a secret superpower! ... ${answer7}`);


              rl.close();
            })
          })
        })
      })
    })
  })
});