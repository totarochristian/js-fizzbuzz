/*
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Main Goal   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Delivery:
Write a program that prints the numbers from 1 to 100 in the console,
but that for multiples of 3, "Fizz" stamps instead of the number and for multiples of 5, "Buzz".
For numbers that are both multiples of 3 and 5, print “FizzBuzz”.
*Before we start coding let's ask ourselves a few questions:*
How do I know if one number is divisible by another?
Have we seen anything special that we can use?

Tips of the day:
1. We always write before comments in Italian to understand what we want to do
2. Let's try to imagine the operations we want our program to carry out as we would do it "by hand"
---------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------   Bonus   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- Create a container in the DOM , by adding (through the append() or innerHTML function) an html element with the correct 
  number or string to display.
- Apply different styles to the elements added to the DOM in BONUS 1, depending on whether the value entered is a number,
  a fizz, a buzz or a fizzbuzz.
  If you're out of style ideas, you might want to take a cue from the screenshot provided in the delivery.
---------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   Program steps   ----------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- Write a for to print in the console the numbers from 1 to 100
- Update the code to print "Fizz" instead of number multiples of 3
- Update the code to print "Buzz" instead of number multiples of 5
- Update the code to print "FizzBuzz" instead of number multiples both for 3 and 5
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/

const squareCont = document.getElementById("squaresCont");

for(let i=1; i<=100; i++){
    let textToAppend;
    let fizz = (i%3 == 0 ? "Fizz" : "");
    let buzz = (i%5 == 0 ? "Buzz" : "");
    if(!fizz && !buzz)
        textToAppend = i;
    else
        textToAppend = fizz + buzz;
    
    squareCont.innerHTML += '<div id="sq_' + i + '" class="square ' + textToAppend + '">' + textToAppend + '</div>';
}