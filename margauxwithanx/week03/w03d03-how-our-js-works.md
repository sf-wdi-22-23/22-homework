What is the call stack? Why is it there? 
A way of recording where in the program we are makes sure that only one thing runs at a time.

What is the event loop? Why do we have it? Is it a part of the JavaScript language? 
Part of the web browser. It looks at the stack and the task line, and when the stack is empty it pushes the next things in the tast line into the stack.

What is blocking? How can it slow down your code? How can avoiding it speed it up? 
Code that is slow. For example, doing a for loop for 10,000 things. We have to wait until the slow code has run before we can move on. Bad because we are running codes in browsers so the UX fails. Avoid it by using asynchronous callbacks. For example, don't run a function on a long array and console.log through it. Instead, do an asynch callback so it lines the callbacks and runs them when the stack is empty.