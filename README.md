#JS Test

<u>Usage:</u>
    node roomba.js input.txt
    node roomba.js input.txt -v

<u>Instructionse:</u>
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

<u>Description/Interpretation</u>
Bottom left corner is the point of origin for our coordinate system which is 0,0.
Locations of patches of dirt are relative.
The hoover position which is relative.

##Input
<u>Rules: </u>
<ul>
<li>First line is 5,5 build</li>
<li>Second line is hoover position</li>
<li>All lines after are dirt until characters</li>
<li>Characters are instructions</li>
</ul>

##Plan
<u>Grid</u>
Invert the y value so that we start at the lower constructs

<u>Positioning:</u>

N = [y+1][x]
E = [y][x+1]
S = [y-1][x]
W = [y][x-1]

<u>Driving into a wall effect:</u>

switch case
    return position or max grid size
EDIT I apply a change to the directions to ensure contraints are met.

##Key
1 Equals Dirty
0 Equals Clean
X Equals Hoover

##Initialise values
Starting location [0,nmax]

##Output
<u>Testing format:</u>

[ [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0 ],
  [ 1, 0, 'X', 0, 0 ],
  [ 0, 0, 0, 0, 0 ] ]

print final x, y position
print how many pieces of dirt the robot cleaned up i.e. ++1 if value == 1

##Queries/Questions
If you have any questions or queries please do not hesitate to get in contact.
The only query which I have is with the test input. The first dirt patch is set at 1,0.
which is quite confusing if the grid is 5,5 and test values are 0-5 which is an index of
6. However if you change the input file i'm sure the program will accomadate.
