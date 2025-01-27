# workshop-task-5
representing my happiness levels of the past 3 weeks :')

the url for my task is: https://ellap4n.github.io/workshop-task-5/

## Data visualisation
I created a simple mood rrating of my mood everyday for the past 3 weeks in a google sheet with the resulting .csv data;
```
one,two,three
5,3,6
4,7,8
9,10,6
7,10,9
6,8,4
7,9,10
2,9,8
```
each data visualisation type would be created in individual functions and called if selected from a selector. 

### 1. Graphing
I guess as a engineering conjoint... of course I'm gonna do a graph (but at least it doesn't have to be as technical in art) so I started off with a line graph. 
Following the workshop to get a base code to work with, I wanted to do a line graph as this would be more challenging than a bar graph. 

I figured out to use the previous iterations end points as the starting point for the next iteration by storing it in an alternate variable - which the following code is the result:

```
  for(i=0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let weekOne = row.get("one");

    line(i*100, 200 - weekOnePast, (i+1)*100, 200 - weekOne*20);
    circle((i+1)*100, 200 - weekOne*20, 5);
    weekOnePast = weekOne*20;
  }
```
I wanted to display the graphs at three different obvious heights which is the extra y values added to the line coordinates. 
It was looking a bit boring, so I decided to add some extra visual aide - by making the 'bad days' (6 and under) an alternate color. I chose red as this is normally associated with negativity, and blue for the better days. 
```
    if (weekOne <= 6) {
      stroke(235, 70, 52);
    } else if (weekOne <=10) {
      stroke(80, 175, 199);
    }
```
### Colour Board
This one was a bit harder - my idea was to use a loop to iterate each column to find the total 'count' of the week. A higher mood count would return a brighter colour, and a lower would return a slightly duller hue. 
However, this was the result despite the differents of mood totals. 
At first I thought it was because there was not enough disparancy between the values, but even after multiplying the result by 10 to introduce 10 fold difference, there was no change in colour. This was quite frustrating as logically it all worked out yet the test was not working how I wanted it to go.
![Screenshot 2025-01-23 220744](https://github.com/user-attachments/assets/16a8fd69-bee9-4efb-96e7-381d6f923075)

#### Debugging
I used a debugging technique we learnt in Engineering last year if working with variable numbers that convert into other values (in this case numbers reprersenting colour properties) which is printing out the value at the point where the bug might have occured to check that the expected numbers are being stored in the variables, which is what the 'text' line in the previous screenshot was. Here is a close up:
![Screenshot 2025-01-23 220800](https://github.com/user-attachments/assets/4eb91411-43c2-483d-bea9-8f3b3fa31de6)
the returned number was totally unexpected and wrong, but it told me immediately what the issue was. 
1. The numbers processed were all above 255, so because the maximum rgb value is 255, they all automatically processed as the highest value. this is why all 3 displayed the same colour.
2. The numbers were being processed as **strings** data not number valyes, hence instead of

_3 + 4 = 7_
what the computer was processing was _'3' + '4' = '34'_ as adding strings simply adds one to the end of another.

After discovering this, it was a easy fix - I simply had to retrieve the csv data as a number value rather than string value. I wasn't sure of the javascript annotation for this so I searched it up in p5 reference using this page: https://p5js.org/reference/p5.Table/getNum/
and hence changed the code to 

```
    let row = table.getRow(i);
    let weekOne = row.getNum("one");
    let weekTwo = row.getNum("two");
    let weekThree = row.getNum("three");
    colorOne += weekOne;
    colorTwo += weekTwo;
    colorThree += weekThree;
  }
```
and voila it worked !!!!!!!
![Screenshot 2025-01-23 221156](https://github.com/user-attachments/assets/5454a1b0-fc07-46a3-8262-4835a5524f09)

### Images
This is just a fun little extra add on haha, it didn't use the table data but a fun bit of code after the horrors of trying to work out why the color board wasn't working

### Finishing Touches
I played around with the selection tab and colours displayed by the colour board just to wrap things up and make the whole thing a bit more cohesive!

### Next Steps 
I think because I spent a big chunk of time on getting the line graph and color code to work, I didn't get to put as much detail into this one as some of my other workshop tasks. 
I would possibly look to isolate different groups together (average mood mondays) or like which days was I most happy etc. and use a moe complicated data set to convey more information. 
