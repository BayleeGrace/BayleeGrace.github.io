//use this to comment on js

//Website Made by:
//Baylee Balsimo Ketelhut
//14June2023

//write a function to play CRAPS in index.html
function playCraps() {//the bracket 
    console.log("playCraps() started");//console.log tells the console that we are trying to do something, end wih terminator (;)
    //step 1: roll 2 6-sided dice
    //how to create a variable: use command "var" and = it to what you want it to be
    //ex. var x = "Porsche";
    //a string is x + x = PorschePorsche
    //Math.random()
    var die1;
    var die2;
    die1 = Math.ceil(Math.random() * 6)//I put Math.floor and Math.ceil on both dice so that I remember both functions
        ; //inclusive: includes 0; exclusive: excludes 0
    die2 = Math.floor(6 * Math.random()) + 1; //you can type it either way, 6 in front or behind
    //step 1b print result on screen 
    document.getElementById("die1res").innerHTML = die1;
    document.getElementById("die2res").innerHTML = die2;
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);


    //step 2: calculate the sum of die1 and die2
    var dicesum = die1 + die2;
    console.log("The sum of the dice is:" + dicesum);
    document.getElementById("dicesum").innerHTML = dicesum;


    //step 3: does sum = 7 or 11 (are you a loser?)
    //how to do an if/then statement
    /*if(true){
        do this if conditions are true
    }else if(another true){
    }else if(another true), and so on*/
    if (dicesum == 7 || dicesum == 11) {

        (document.getElementById("gameres").innerHTML =
            "You lose! Play again?");

        //step 4: aid the dice come up doubles? are they evens? if so, you win
    } else if (die1 = die2 && die1 % 2 == 0) {
        (document.getElementById("gameres").innerHTML =
            "You win! Play again?");

        //step 5: otherwise, push
    } else {
        (document.getElementById("gameres").innerHTML =
            "You did not lose or win, so you should try again.");
    }
}


//check creds for strings.html, this will check if the user has an account and if the credentials are correct!
function checkCreds() {
    console.log("checkCreds() started...");
    var firstName;
    var lastName;
    var zipCode;
    var zipCodeNumb;
    var fullName;
    var fullNameLength;
    //this will place the characters under the fName id in the first name variable
    firstName = document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);//this reads the first name box

    lastName = document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);//this reads the last name box

    zipCode = document.getElementById("zCode").value;
    console.log("The zip code is inputted as " + zipCode);//this reads the zip code box

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code is " + zipCodeNumb);

    zipCodeLength = zipCode.length;
    console.log("The zip code has " + zipCodeLength + " characters");

    fullName = firstName + " " + lastName;
    console.log("The full name is inputted as " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + (fullNameLength - 1) + " characters");

    if (fullName.length > 20 && fullName.length < 2) {

        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again.";
        alert("Invalid name, please try again.");

    } else if (zipCode.length !== 5 && zipCodeNumb > 99999 && zipCodeNumb < 0) {//this says that the zip code MUST equal 5

        document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again.";
        alert("Invalid name, please try again.");

    } else {

        alert("User credentials passed, welcome to the site " + fullName + "!");

    }
}

function startFun() {
    console.log("startFun() started...");
    document.getElementById("startButton").disabled = true;//this makes the start button "clickable"
    document.getElementById("stopButton").disabled = false;//this makes the stop button "clickable"
    onClick = document.getElementById("myMarquee").start();//this makes the image start moving

}

function stopFun() {
    console.log("stopFun() started...");
    document.getElementById("startButton").disabled = false;//this makes the stop button "clickable"
    document.getElementById("stopButton").disabled = true;//this makes the start button "clickable"
    onClick = document.getElementById("myMarquee").stop();//this makes the image stop!
}

function checkPalin(){
    //check to see if a sentence is a palindrome
    console.log("checkPalin() started");

    //Step 1: extract the entered text to a string variable called entStr
    var entrStr;
    entStr = document.getElementById("palinInput").value;
    console.log("The text entered is: " + entStr);
    
    //Step 2: remove the spaces from the text
    var entStrNoSpace=entStr.split(" ").join("");
    console.log("Entry without spaces: " + entStrNoSpace);

    //Step 3: create a new variable called "revStr" amd store the entered string reversed here
    var revStr;
    const revArray = [];
    const length=entStrNoSpace.length - 1;
    console.log("String length = " +length);
    for(let i =length; i>= 0; i--){//this subtracts one letter until it hits 0
        revArray.push(entStrNoSpace[i]);

    }

    revStr=revArray.join("");
    console.log("The reversed entry is: " + revStr)

    //Step 4: compare entStr and revStr
    var equal=0;
    equal = (entStrNoSpace==revStr);
    console.log(equal);

    //Step 5give notice ofequality status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " is a palindrome!";
    } else{
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome.";

    }
}

function playSound(){
    console.log("playSound started...");
    mySound=new sound("us-lab-background.mp3");
    mySound.play();

}

function sound(srcFile){
    this.sound=document.createElement("audio");
    this.sound.src=srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play=function(){
        this.sound.play();

    }

    this.stop=function(){
        this.sound.pause();

    }
}




// function test(){
//     console.log("Test conplete");
// }