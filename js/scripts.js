function check(){
    var question1 = document.Quiz.question1.value;
    var question2 = document.Quiz.question2.value;
    var question3 = document.Quiz.question2.value;
    var question4 = document.Quiz.question2.value;
    var question5 = document.Quiz.question2.value;
    var right =0;


    if(question1="correct"){
        right=right  +20; 
    };
    if (question2="correct"){
        right= right+20;
    };
    if (question3="correct"){
        right= right+20;
    };
    if (question4="correct"){
        right= right+20;
    };
    if (question5="correct"){
        right= right+20;
    };
    
 
    document.getElementById("fifth-p").style.visibility="visible";
    document.getElementById("correctNumber").innerHTML="you've scored" + right+ "%";
};

$(document).ready(function() {
    $("Submit").click(function() {
      $("container").show();
    });
  })


