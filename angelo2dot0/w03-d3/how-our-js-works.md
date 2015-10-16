

What is JavaScript work? ^o^ It is the flow of processes demonstrated in the call stack.
What is the call stack? Why is it there? It’s a data structure which records where in the program we are.
What is the event loop? Why do we have it? Is it a part of the JavaScript language? The event loops job is to look at the stack and look at the task queue. If the stack is empty it takes the first thing on the queue and pushes it on to the stack which effectively runs it.
What is blocking? How can it slow down your code? How can avoiding it speed it up? The slow synchronous loop ends up blocking the browser. Using the asynchronous option helps speed it up.