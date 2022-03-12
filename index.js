$(function(){
  let  firstPlace = $("#countA").text(); 
  let countupA =() =>{
    firstPlace++;
  }

  $("#start").onclick(function() {
    setInterval(countupA,100);
    $("#countA").text(firstPlace); 
    
    if(firstPlace >= 10){
      let firstPlace = 0
    }
  });
});

$("#stop").onclick(function() {
  clearInterval(firstPlace)
  clearInterval(secondPlace)
  clearInterval(thirdPlace)
  clearInterval(fourthPlace)
});

$("#reset").onclick(function() {
  let firstPlace = 0
  $("#countA").text(firstPlace); 
  let secondPlace = 0
  let thirdPlace = 0
  let fourthPlace = 0
});