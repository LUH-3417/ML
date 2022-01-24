let model;
let outcome;


function setup() {
  //createCanvas(600, 600);
  noCanvas();

  let options = {
    dataUrl: 'Titanic-Dataset_CY2.csv',
    inputs: ["division", "fare", "age", "gender"],
    outputs: ["prediction"],
    task: "classification",
    debug: true,
  }

  model = ml5.neuralNetwork(options, modelReady)

  trainButton = select("#train");
  trainButton.mousePressed(function(){
    let trainingOptions = {
      epochs: 100
    };

    model.train(trainingOptions, whileTraining, doneTraining);
  })

  predictButton = select("#predict");
  predictButton.mousePressed(classify);
  predictButton.hide();
}



function whileTraining(epochs, loss){
  console.log(`Epoch: ${epochs} - loss: ${loss.loss.toFixed(2)}`)
}



function doneTraining(){
  predictButton.show();
  trainButton.hide();
  console.log("Training Done");
}


function classify(){
  let division = parseInt(select("#division").elt.value);
  let age = parseInt(select("#age").value())
  let gender = parseInt(select("#gender").elt.value);

  let userInputs = {
    division: division,
    age: age,
    gender: gender,
  };

  model.classify(userInputs, gotResults);
}


function gotResults(error, result){
  if(error){
    console.error(error);
  } else {
    console.log(result);
    if (result[0].label == "No"){
      outcome = "perish";
    } else { 
      outcome = "survive";
    }

    select("#result").html(
      "The passenger will most likely " + outcome
    );
  }
}



function modelReady() {
  console.log("model ready");
  model.normalizeData();
}

/*for (i=0; i<table.getRowCount(); i++){

}
*/
