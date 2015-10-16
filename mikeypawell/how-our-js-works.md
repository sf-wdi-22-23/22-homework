1)What is JavaScript work? ^o^


2)What is the call stack? Why is it there?

The callstack is a datastrucure that records where in the function we are.  When we return, or a function ends, the item in popped off the callstack.  Javascript can only do one thing at time.  Thus, the call stack can only process one function, or action at a time. 

3)What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop looks at the task queue, and look at the stack….if the stack is empty….push the event on the task queue on to the stack, which runs it.  It helps "push" actions from the callback queue to the callstack.  Yes, it is a part of the Javascript language 


4)What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is when you the callstack has something on it and is "blocking" code that is on the callback que and can't be processed by the event loop and put on the callstack.  This can slow down your code alot.  Avoiding blocking keeps the callstack clean and able to process items on the callback que.  Image proceessing and animation creates blocking and can make a sluggish experience.  