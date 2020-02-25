$(document).ready(function(){
  $("#nameID").submit(function(event){
    var discordId = $("#discord").val();
    var emailId= $("#emailAddress").val();
    Cookie.set('name1',discordId);
    
    Cookie.set('name2',emailId);
    
    if(discordId === "" && emailId === ""){
      alert("Please input an ID or email address.");
    }
  });
  var disc = Cookie.get("name1");
  var ema = Cookie.get("name2");
  if(disc){
    $("#greeting").text("Can't wait to speak to you " + disc + "!");
  }else if(ema){
    $("#greeting").text("Can't wait to speak to you " + ema + "!");
  }
  
  $("#activity").submit(function(event){
    var choiceId = $("#selection").val();
    Cookie.set('act', choiceId);
    
    if(choiceId == "choice1"){
      alert("You're already my favorite for choosing roleplaying.");
    }else if(choiceId == "choice2"){
      alert("At least you'll always have tomes.");
    }else if(choiceId == "choice3"){
      alert("May mount drops forever be in your favor.");
    }else if(choiceId == "choice4"){
      alert("Let the suffering begin.");
    }else if(choiceId == "choice5"){
      alert("Aurora is gonna love you.");
    }else if(choiceId == "choice6"){
      alert("Make sure to tell us what you like!");
    }
  });
  var choi = Cookie.get("act");
  if(choi){
    $("#response").text("Can't wait to experience " + choi + " with you ^^.");
  }else{
    $("#response").text("");
  }
});