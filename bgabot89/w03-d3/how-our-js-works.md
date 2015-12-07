//What is JavaScript work? ^o^
Javascript is a single threaded program language, it can process only a single call stack meaning it can only run one piece of code at a time. 

//What is the call stack? Why is it there?
The call stack is a data structure that records where in the program we are. It used to call one function at a time and send a request to the server, the client than waits for a response back.

//What is the event loop? Why do we have it? Is it a part of the JavaScript language?

The event loop is a model displaying how your computer waits synchronously for a message to arrive. We use it to gain an understanding about how data is processed from the client  to the server: the client sends a message from their callback functions; those messages are then queued up and we wait for the server to respond/dequeue the request. It is a part of the Javascript language. 


//What is blocking? How can it slow down your code? How can avoiding it speed it up?

Blocking is a synchronous call to the console to do a certain command. Because blocking is synchronous, the user needs to wait for a reply for the computer to move forward with it's next command. Running individual commands to the console can take a long time, so in order to speed up the process, we use asynchronous callbacks, which will allow you to run more callbacks while the browser is processing any callbacks that you've just entered. 