var playing = false;
var score;
var answer;
var action;
var clock;
var startReset = document.getElementById("startReset");
var scoreValue = document.getElementById("scoreValue");
var timeRemainingValue = document.getElementById("timeRemainingValue");
var question = document.getElementById("question");

startReset.onclick = function() {
    if(playing == true) {
        location.reload();
    } else {
        playing = true;
        score = 0;
        scoreValue.innerHTML = "score: " + score;
        show("timeRemaining");
        hide("gameOver");
        clock = 60;
        timeRemainingValue.innerHTML = clock;
        startReset.innerHTML = "Reset";
        startCountDown();
        math();
        
        for(i = 1; i < 5; i++) {
            document.getElementById("box" + i).onclick = function() { if(playing == true) {
            if(this.innerHTML == answer) {
                score++; scoreValue.innerHTML = "score: " + score; hide("wrong"); show("correct"); setTimeout(function(){hide("correct");}, 2000); math();
            }
            else {
                show("wrong"); setTimeout(function() {hide("wrong");}, 2000); math();
                }
            }
        }
        
        }
    }
}

//Functions
function startCountDown() {
    action = setInterval(function(){clock -= 1; timeRemainingValue.innerHTML = clock; if(clock == 0){stopCountDown(); show("gameOver"); gameOver.innerHTML = "<p>Game over</p><p>Youre score is "+ score +"</p>"; hide("timeRemaining"); hide("correct"); hide("wrong"); playing = false; startReset.innerHTML = "Start";}}, 1000);
}
function stopCountDown() {
    clearInterval(action);
}
function hide(Id) {
    document.getElementById(Id).style.display = 'none';
}
function show(Id) {
    document.getElementById(Id).style.display = 'block';
}
function math() {
    var sign = 1 + Math.round(2*Math.random());
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    var notAnswer;
    switch(sign) {
        case 1:  question.innerHTML = x + "x" + y; answer = x * y;
            var correctPosition = 1 + Math.round(3*Math.random());
            document.getElementById("box" + correctPosition).innerHTML = answer;
            var answers = [answer];
            
            for(i = 1; i < 5; i++) {
                if(i != correctPosition){
                    do {
                        notAnswer = (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()));
                        } while (answers.indexOf(notAnswer) >- 1)
                            document.getElementById("box" + i).innerHTML = notAnswer;
                    answers.push(notAnswer);            
        }
    }
            break;
            
        case 2: question.innerHTML = x + "+" + y; answer = x + y;
            var correctPosition = 1 + Math.round(3*Math.random());
            document.getElementById("box" + correctPosition).innerHTML = answer;
            var answers = [answer];
    
            for(i = 1; i < 5; i++) {
                if(i != correctPosition){
                    do {
                        notAnswer = (1 + Math.round(9*Math.random())) + (1 + Math.round(9*Math.random()));
                        } while (answers.indexOf(notAnswer) >- 1)
                            document.getElementById("box" + i).innerHTML = notAnswer;
                    answers.push(notAnswer);
        }
    }
            break;
            
        case 3: question.innerHTML = x + "-" + y; answer = x - y;
            var correctPosition = 1 + Math.round(3*Math.random());
            document.getElementById("box" + correctPosition).innerHTML = answer;
            var answers = [answer];
    
            for(i = 1; i < 5; i++) {
                if(i != correctPosition){
                    do {
                        notAnswer = (1 + Math.round(9*Math.random())) - (1 + Math.round(9*Math.random()));
                        } while (answers.indexOf(notAnswer) >- 1)
                            document.getElementById("box" + i).innerHTML = notAnswer;
                    answers.push(notAnswer);
        }
    }
            break;
        default:
            break;
}
}
