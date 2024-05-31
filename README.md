# odin-calculator
## Process
This is the final project of the Foundations course for the Odin Project. After writing the basic math functions like adding, subtracting, multiplying, and dividing two numbers, I was puzzled on what to do next. 

My approach was to create the necessary buttons first, which are digits, operations, equal, and all-clear button. Then, I tried to break down the problem into small pieces by asking the question, "What should happen when a user presses this button?", which encouraged me to group buttons that should have the same reaction together. From there, I created functions one by one to deal with each situation. Once I had the basic buttons working properly, I added on more buttons like percentage, +/-, and dot for decimal. Most of the time these newly added functions did not work properly the first time and created weird outputs, which led to careful revision of the existing code and revelation of bugs I had not noticed before. 

Initially, all of the `EventTarget.addEventListener()` were imbedded in functions that each contained only the event listener and all the code that describes what to do were in the event listener's function. Then, I called the function on the bottom of the file to activate the event listeners. As I moved on to adding keyboard support, I realized I need to reuse the exact same code in the event listener's action code and the defined functions were redundant as wrappers. This prompted me to refactor the code where the functions contain the action code and all the event listeners need to do is call the corresponding function. This was a pivotal change that made my code cleaner and logical.

## Improvements
(1) +/- and . buttons are not supported by keyboard

(2) "Enter" on keyboard is not accepted as an equivalent for the equal button

(3) The display window expands horizontally and digits overflow outside of the display when the user presses more digits than the display can show. The entire user input, including overflown digits, are all considered during the calculation.

(4) Similar to (3), when the user presses too many digits and the view width is small, there is empty space on the left side of the display while the right side overflows.