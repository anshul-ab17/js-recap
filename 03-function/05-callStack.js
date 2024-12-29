/*
Javascript Execution Content:



When we give any code to js,

-Global execution/ environment context ,GEC is created!
   -and 'this' variable is refer to and keeps GEC inside it.
   --execution context of node and browser are diffrent, in browser 'this' is window object/

   -it is executed in thread(js is single threaded)

-Function Execution Context, FEC
-Eval Execution Context(in mongoose)
     --it is property of GEC


*/

/**

How js code excuted:

  [{js code}] 
  -GEC is created.
  -1st Phase: Memory Creation Phase -Allocation. 
  -2nd Phase :Executiton Phase.

  FEC - creates a new Execution context for each function ,which contains a (new variable environment + execution thread). 
  so both phase again be repeated for each func.


 */

/**

Call Stack:

      |       |
      |       |
      |func2()|
      |func1()|
      |__GEC__|
    
   --executed in Lifo order   
 */


