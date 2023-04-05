// alert(Date())
// alert("Hello World")
// var myname = "John"
// alert(myname)
// var yourname = prompt("What is your name?")
// alert("my name is " + myname + " and your name is " + yourname)
// var a = "8"
// var b = "2"
// alert(a + " " + b)
// var x = a
// a = b
// b = x
// alert(a)
// alert(b)
//string concatenation
// alert("Hello " + "World")
// string length
// var text = prompt("Put your text here")
// alert(text.length)
// slicing
// var txt = prompt("put your text")
// alert(txt.slice(0,141))
//toUpperCase
// var txt = prompt("put your text")
// alert(txt.toUpperCase())
// function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
    //    var days = age * 365;
    //    var week = age * 52;
    //    var month = age * 12;
    //    console.log("You have " + days + " days, " + week +" weeks, " + month + " months left.")
    //    console.log("You have " + (90 * 365 - days) + " days, " + (90 * 52 - week) +" weeks, " + (90 * 12 - month) + " months left.")
        
        
        
    /*************Don't change the code below**********/
    // }
// lifeInWeeks(56)    

// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert(loveScore);

// if(loveScore > 70){
//     alert("You love each other like Kanye loveS Kanye")
// }
// if(loveScore > 30 && loveScore <= 70){
//     alert("You go together like coke and mentos")
// }
// if(loveScore <= 30){
//     alert("You go together like oil and water")
// }
// else{
//     alert("Error")
// }   



// var output = []
// var val = 1
// function value_adder(){
//     if(val % 3 == 0 && val % 5 == 0){
//         output.push("FizzBuzz")
//     }
//     else if(val % 3 == 0){
//         output.push("Fizz")
//     }
//     else if(val % 5 == 0){
//         output.push("Buzz")
//     }
//     else{
//         output.push(val)
//     }
//     val++
//     console.log(output)
//     // value_adder()
// }

// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// function whosPaying(names) {
    
//     /******Don't change the code above*******/
        
//         //Write your code here.
//         var val = Math.floor(Math.random() * names.length)
//         var res = names[val]
//         return res + " is going to buy lunch today!"
        
        
    
    
//     /******Don't change the code below*******/    
//     }

// alert(whosPaying(names))


// while (true) {
    // kjfosj
// }
// onload = function(){
//     alert("Hello World")
// }
// function changetxt(){
//     // document.getElementById("btn").innerHTML = "Hello World"
//     document.querySelector("body").innerHTML = " <h1 style='text-align: center; margin-top: 20%;'>Teri Job Cancel</h1>"
//     // await(20)
//      document.querySelector("h1").classList.toggle("big");
//     }
function roll(){
    document.querySelectorAll("h1")[1].innerHTML = "Rolling..."
    setTimeout(myFunction, 1000);
}
function myFunction() {
    var val = Math.floor(Math.random() * 6) + 1
    var val2 = Math.floor(Math.random() * 6) + 1
    if(val > val2){
        document.querySelectorAll("h1")[1].innerHTML = "Player 1 Wins"
    }
    else if(val < val2){
        document.querySelectorAll("h1")[1].innerHTML = "Player 2 Wins"
    }
    else{
        document.querySelectorAll("h1")[1].innerHTML = "Draw"
    }
}