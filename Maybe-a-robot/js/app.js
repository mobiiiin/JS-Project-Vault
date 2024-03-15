// Project Name: Maybe a robot?

// Project description: A pre-synchronized robot

// Start date: Wednesday , December 27

// End date: monday , january 1

// Email: robotgoodrobot@gmail.com

// Names of front end developers: 
// mobin

// Github developer :
// @mobiiiin


// vorodi haye karbar + ye seri information
function userInput(userNAme,) {
    // moarefi khode bot
    alert("hi i am a chat bot. -plaze enter => ok-")
    // grftn esm karbar
    userNAme = prompt("well, what is your name? ")
    // khoshamd goee be karbar
    alert("welcom to my website " +userNAme)
  // seda zdn function questions ke bad az function userInput ejra shavad
    questions(userNAme);
  }
  
  // =============================================
  
  function questions(userNAme,) {
  
  let need = alert(userNAme+" karhaee ke mitonam anjam bdm ro behet migam. enter => -ok-")
  let performances = alert("vijegiha: downlodImage , dars , marizi ,desom darde")
  
   answer(answersChatBot)
  }
  
  // ==============================================
  
  function answer(performance,) {
    console.log(performance);
    const chosenPerformances = prompt("yeki az vijegihaee ke bram tarif shode ro entkhab kon")
    
    if(chosenPerformances.includes("downlodImage dars marizi desomDarde")){
      
      answersChatBot.forEach((performances) => {
        for (const chosenPerformances in answersChatBot) {
            console.log(chosenPerformances [answersChatBot]);
        }
    })
      }
    
  
  }
  
  let answersChatBot = {
    downlodImage:"mitoni be google morajee koni azizam",
    dars:"khot bayad mikhondi jaavdvavd",
    marizi:"mitoni beri doktor",
    desomDarde:"az bas saret to gooshie",
  }
  
  userInput();
  questions();