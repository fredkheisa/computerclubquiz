function check(){
    var question1 = document.Quiz.question1.value;
    var question2 = document.Quiz.question2.value;
    var right =0;


    if(question1="correct"){
        right=right  +20; 
    };
    if (question2="correct"){
        right= right+20;
    };
 
    document.getElementById("fifth-p").style.visibility="visible";
    document.getElementById("correctNumber").innerHTML="you've scored" + right+ "%";
};




