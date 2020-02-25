$(document).ready(function() {
  $("#01").click( function() {
    $("#imgBig").attr("src", "FChouse.jpg");
  });
  $("#02").click( function() {
    $("#imgBig").attr("src", "FCmailbox.jpg");
  });
  $("#03").click( function() {
    $("#imgBig").attr("src", "guild.png");
  });
  $("#04").click( function() {
    $("#imgBig").attr("src", "NellFlex.jpg");
  });
  $("#05").click( function() {
    $("#imgBig").attr("src", "Practice.jpg");
  });
  $("#01").hover( function() {
    $("#description").text("Our Free Company Mansion located in Shirogane.");
  }, function() {$("#description").text("")});
  $("#02").hover( function() {
    $("#description").text("Moogle mailbox.")
  }, function() {$("#description").text("")});
  $("#03").hover( function() {
    $("#description").text("Old school picture of guild members from years ago.");
  }, function() {$("#description").text("")});
  $("#04").hover( function() {
    $("#description").text("Our very own Lala, Nell showing off their guns for the fans.");
  }, function() {$("#description").text("")});
  $("#05").hover( function(){
    $("#description").text("Cheering on one of our members while they show off some dragoon skills.");
  }, function() {$("#description").text("")});
});