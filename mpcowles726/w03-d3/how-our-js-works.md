HOW OUR JS WORKS!


1.)  its a single threaded run time language (c an only do one thing at a time)

2.) call stack is the data structure which records where in the program we are. 
	(the order your program decides to do its functions in - a stack of functionsk)

3.) the event loop is when your program is listening for a callback function, and when its
called is put back at the top of hte call stack

4.) blocking is when things are slow on the call stack (for example the get sync vars
in the video take forever to sync so it blocks the call stack from finishing)