/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you! */

function validParentheses(parenStr) {
  // Your code here
  if (parenStr.length % 2 == 1){
    return false
  }
  let open_counter = 0;
  let close_counter = 0;
  for (let i = 0; i < parenStr.length ; i++){
    if (parenStr[i] == "("){
        open_counter++;
        }
    if (parenStr[i] == ")"){
        close_counter++;
        }
    
    if ( close_counter > open_counter){
      return false;
      }
    }
    if ( close_counter != open_counter){
      return false;
      }
  return true;
    }
  
  
  
