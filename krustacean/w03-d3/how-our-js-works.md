How Our JS Works
---------
1. What is JavaScript work? ^o^

2. What is the call stack? Why is it there?

 * A data structure which records where in a program we are. It can only run one thing at a time. If we step into a function, we push something on the stack, if we return from a function we pop something off.

1. What is the event loop? Why do we have it? Is it a part of the JavaScript language?
 * "**One thing at a time but not really**". One very simple job, look at stack and look at task queue. If the stack is empty the event loop will take the first thing out of the task queue and pop it onto the stack. It is not a part of language it lives in the browser as a way to interact JS with webapis.

1. What is blocking? How can it slow down your code? How can avoiding it speed it up?

 * There is no strict definition of blocking but it slows your code down. Things that are slow on your stack block your other code from running on the stack because JavaScript is single threaded.
