<h1>RoombaJS</h1>

<u>Usage:</u>
<br>
<br>
    <b>node roomba.js input.txt</b><br>
    <b>node roomba.js input.txt</b> -v

<u>Instructions:</u><br>
To run the application simply use the command inside /javascript-test directory:
this will compile and print the result.
Running the command with -v will run in verbose mode which will print a visual
testing format to view.

<u>Task list:</u>
<ul>
<li>Create a grid 5 * 5 with 25 tiles</li>
<li>Generate random pieces of dirt</li>
<li>Traverse system with instructions</li>
<li>Mark dirt clean if you come across and increment counter</li>
<li>Print final position and pieces of dirt clean
</ul>

<u>Description/Interpretation</u><br>
Bottom left corner is the point of origin for our coordinate system which is 0,0.
Locations of patches of dirt are relative.
The hoover position which is relative.

<h2>Input</h2>
<u>Rules: </u>
<ul>
<li>First line is 5,5 build</li>
<li>Second line is hoover position</li>
<li>All lines after are dirt until characters</li>
<li>Characters are instructions</li>
</ul>

<h2>Plan</h2>
<u>Grid</u>
Invert the y value so that we start at the lower constructs

<u>Positioning:</u>

N = [y+1][x]
E = [y][x+1]
S = [y-1][x]
W = [y][x-1]

<u>Driving into a wall effect:</u>

switch case
    return position or max grid size<br>
EDIT I apply a change to the directions to ensure contraints are met.

<h2>Key</h2>
1 Equals Dirty<br>
0 Equals Clean<br>
X Equals Hoover<br>

<h2>Initialise values</h2>
Starting location [0,nmax]

<h2>Output</h2>
<u>Testing format:</u>

[ [ 0, 0, 0, 0, 0 ],<br>
  [ 0, 0, 0, 0, 0 ],<br>
  [ 0, 0, 1, 1, 0 ],<br>
  [ 1, 0, 'X', 0, 0 ],<br>
  [ 0, 0, 0, 0, 0 ] ]

print final x, y position
print how many pieces of dirt the robot cleaned up i.e. ++1 if value == 1

<h2>Queries/Questions</h2>
If you have any questions or queries please do not hesitate to get in contact.
The only query which I have is with the test input. The first dirt patch is set at 1,0.
which is quite confusing if the grid is 5,5 and test values are 0-5 which is an index of
6. However if you change the input file i'm sure the program will accomadate.
