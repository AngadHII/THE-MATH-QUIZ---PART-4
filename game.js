question_turn = "player1";
answer_turn = "player2";
player1_name = localStorage.getItem("Math1");
player2_name = localStorage.getItem("Math2");
player1_score = 0;
player2_score = 0;

function send(){
number_1 = document. getElementById("number_1").value;
number_2 = document .getElementById("number_2"). value;
actual_answer = parseInt (number_1) * parseInt (number_2);
question_number = "<h4>"+ number_1 + " X "+ number_2 +"</h4>";
text_input = "<input type='number' id='input_check_box' class='form-control' placeholder='Enter the answer here'></input>";
check_button = "<button id='check_button' class='btn btn-info' onclick='check()'>CHECK</button>";
row = question_number + text_input + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}

document.getElementById("player1_name").innerHTML = "Player 1: "+player1_name;
document.getElementById("player2_name").innerHTML = "Player 2: "+player2_name;
document.getElementById("question_turn").innerHTML = "Question Turn: " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player2_name;

function check(){
    get_answer = document.getElementById("input_check_box").value;
    console.log("Typed answer: "+get_answer);
    console.log("Actual answer: "+actual_answer);
    if(get_answer == actual_answer){
        console.log("Answer is correct");
    if(answer_turn == "player1"){
    player1_score = player1_score + 1;
    console.log(player1_score);
    document.getElementById("player1_score").innerHTML = "Score for "+player1_name+": "+player1_score;
    answer_turn = "player2";
    document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player2_name;
        console.log(answer_turn);
    }
    else{
    player2_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML = "Score for "+player2_name+": "+player2_score;
    document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player1_name; 
    answer_turn = "player1";
    }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question Turn: " + player2_name;
     } else{
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question Turn: " + player1_name; 
     }
    }
    