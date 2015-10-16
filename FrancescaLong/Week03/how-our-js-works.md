1. What is JavaScript work? ^o^
	It is the process that JavaScript runs through to process the code that you have written. It executes step one, then step 2, etc.

2. What is the call stack? Why is it there? - 
	It is the list of instructions that the computer is asked to execute. Each item is entered into the call stack and as the computer runs through each one, it then removes that particular instruction (or function) from the stack and moves on to the next one. This happens until it reaches the end and produces a result. 

3. What is the event loop? Why do we have it? Is it a part of the JavaScript language?
	The event loop is used by web APIs rather than the actual JavaScript language. It helps set the order of execution for the code.

4. What is blocking? How can it slow down your code? How can avoiding it speed it up? - 
	Blocking is the process where one set of code has to finish before any other piece of code can run. It forces all of the subsequent bits to wait until the current part completes which can slow down the code.

	If we avoid blocking by using timeouts which utilize web APIs, an event queue is created which is able to wait until the call stack is empty to run the slower parts of the code (those tied to the timeout) and run them when there is nothing else waiting to be run.  


