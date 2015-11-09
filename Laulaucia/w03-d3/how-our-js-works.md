What is JavaScript work? ^o^
	a single threaded program language that does one code at a time and runs on v8.


What is the call stack? Why is it there?
	the call stack is data structure that records where we are in the process of the code running in the browser. 

What is the event loop? Why do we have it? Is it a part of the JavaScript language?
	the event loop is an extra of the browers and its job is so look at the tasks and the stack and decides when its clear and when it can run things.


What is blocking? How can it slow down your code? How can avoiding it speed it up?
	blocking is code that is slow, images, huge amounts of data etc. and since things happen one at a time the next thing can't happen until the blocked item is done  - you can use asynchronous callbacks to offload blocks into the browser and then the eventloop will kick them back in when the stack is clear. 