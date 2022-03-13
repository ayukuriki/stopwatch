

$(function(){
  
  let milsec = 0
  let sec = 0
  let minute = 0
  let hour = 0
  
  function timepassing(){
    milsec++;
    $("#countA").text(milsec);
    if (milsec >= 10) {
      sec++;
      milsec = 0
      $("#countA").text(milsec);
      $("#countB").text(sec);
       if ( sec >= 60) {
         minute++;
          sec = 0;
        $("#countB").text(sec);
        $("#countC").text(minute);
        if ( minute >= 60) {
          hour++;
          minute = 0;
          $("#countC").text(minute);
          $("#countD").text(hour);
        }
      }
    }
  }
  function time(){
    countTime=setInterval(function(){
    timepassing()
    } , 100);
  }
  function stopTimer(){
    clearInterval(countTime);
    }
    

  
  $("#start").click(function() {
    if($('#start').prop('disabled',false)){
    time();
    $('#start').prop('disabled',true)
    }

  });

    $("#stop").click(function() {
      stopTimer();
      $('#start').prop('disabled',false)
   });

  $("#reset").click(function() {
    stopTimer();
    let milsec = 0
    let sec = 0
    let minute = 0
    let hour = 0
    $("#countA").text(milsec); 
    $("#countB").text(sec); 
    $("#countC").text(minute); 
    $("#countD").text(hour);
    $('#start').prop('disabled',false)
    });

  });