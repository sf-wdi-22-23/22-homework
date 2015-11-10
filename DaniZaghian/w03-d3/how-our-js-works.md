What is JavaScript work? ^o^
What is the call stack? Why is it there?
What is the event loop? Why do we have it? Is it a part of the JavaScript language?
What is blocking? How can it slow down your code? How can avoiding it speed it up?

1) I have no idea what this question is asking! 
2) A data structure that records where in the program we are. It exists to keep track/order of what is happening (it allows 1 thing to be done at a time).
3) It looks at the stack and the queue, and if the stack is clear it looks at the first thing in the queue and pushes it on the stack. It lets you hold an event in the queue until the stack is clear. I'm not sure if it's part of the JS language but I think it is. 
4) When the call stack is full (in browsers) and you can't continue your code fluidly. It slows down your code by filling the call stack so code can't continue to run. You can avoid it by not filling up your render queue and call stack. Using asynchronous functions also helps allow renders to occur!