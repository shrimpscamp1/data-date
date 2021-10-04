window.addEventListener('load', function () {
    console.log('page is loaded');
});
let timeArray = [];
let placeArray = [];
let compArray = [];
let adjArray = [];
let temp = [];

//call datasheets
(async () => {
	await fetch('time.json')
  .then(response => response.json())
  .then(data => {
          timeArray = data.time;
          console.log(timeArray);
  });

await fetch('place.json')
.then(response => response.json())
.then(data => {
        placeArray = data.rooms;
        console.log(placeArray);
});
await fetch('comp.json')
.then(response => response.json())
.then(data => {
        compArray = data.encouraging_words;
        console.log(compArray);
});
await fetch('adj.json')
.then(response => response.json())
.then(data => {
        adjArray = data.adjs;
        console.log(adjArray);
});
  //user presses SEEK button
  let button = document.getElementById('generate-date-button');
  button.addEventListener('click', function () {
      let dateType = document.getElementById('date-type');
      let selection = dateType.value;
      console.log(selection);
      
      //Set outcomes according to date type in dropdown
      //Option 1: "Go to..."
      if (selection == "1") {
        //get a place
        let randomNumber = Math.floor(Math.random() * placeArray.length);
        let nameElement = document.getElementById('my-place');
        nameElement.innerHTML = placeArray[randomNumber];
        let showplace = document.getElementById('1');
        showplace.style.visibility = "visible";

      }
      //Option 2: "Do it in..."
      if (selection == "2") {
        //get a time
        let randomNumber = Math.floor(Math.random() * timeArray.length);
        let nameElement = document.getElementById('my-time');
        nameElement.innerHTML = timeArray[randomNumber];
  //       temp = timeArray[randomNumber];
  //       console.log(temp);
  //         let oops = document.getElementById('back-button');
  //         oops.addEventListener('click', function () {
          
  // });
        let showtime = document.getElementById('2');
        showtime.style.visibility = "visible";
              
      }
      //Option 3: "Tell them they are..."
      //get a compliment
      if (selection == "3") {
        
        let randomNumber = Math.floor(Math.random() * compArray.length);
        let nameElement = document.getElementById('my-compliment');
        nameElement.innerHTML = compArray[randomNumber];
        let showcomp = document.getElementById('3');
        showcomp.style.visibility = "visible";

      }
        //Option 4: "Do something..."
        //get an adjective
        if (selection == "4") { // if statement not working but this was
          //console.log(data.adjs)
          let randomNumber = Math.floor(Math.random() * adjArray.length);
          let nameElement = document.getElementById('my-adjective');
          nameElement.innerHTML = adjArray[randomNumber];
          let showadj = document.getElementById('4');
          showadj.style.visibility = "visible";
        
        }
          
  });
})();

//user presses SEE WHATS OTHERS THINK button
let ratings = document.getElementById('ratings');
  ratings.addEventListener('click', function () {
    let x = document.getElementById('popularity-option');
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});
