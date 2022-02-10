# Intro To Front End

## 2022 02 10 | Assessment Morning
Starting the day with assessment prep and test. Completed test (all green!) and performed a walk through.  Some lessons learned.  



---

## 2022 02 09 | Review Arrays
Agenda set.  See Notion notes.  No warmups.  Continued onto walk through of the array Ls and Ex. Deciding to backtrack on the Sandbox 3 practice.  Will remove current text box and create a dropdown input filter to remove some monster types from the list.  After that is complete, I will continue with the auto filter as you type in a type name.  

## 1100 | Zantanna Speech
While learning about arrays, we had a challenge to create a function that reproduces the speech of Zantanna.  This was a lot of fun.  It also caused me to use different built-in JS functions.  I needed to cut up a string, putting words into an array.  Then, each item in the array could be reversed letter-by-letter.  That result needed to be pushed into a new array.  Afterwards, the new array was combined into a new string.  Additional peaces to this challenge included removing commas and uppercase letters.  Lastly, I needed to force the first letter of the first word in the sentence to be uppercase.  There might be some more things I could do this function later.  However, I copied the function into the interview problems director.  The HTML talks about how this should be done.  Finally, I want to continue working on the page, so we could put in a new string and have that pushed back to the browser.  

### 1700 | Practices
Most of the afternoon work is found in the additional repos provided to us.  They were meant to prepare us for tomorrow's assessment.  The were very helpful in seeing things in an assessment point of view.  I also completed the ZS interview project.  Finally, I made some amazing advancements with the Creature Feature project.  

### 2200 | Late Night Practice
Just reviewing code.  Refactor some parts.  Noticed that single if/else blocks might be able to simply be converted into a return true/false conclusion.  Otherwise, each if statement will require an else to get the converse bool.  Other than that, most of the code remained the same.  I did notice that someone used a ```toString``` method that I'm not familiar with in JS.  It cut their code down by several lines.  Also, one test provided instructions that an argument should be treated in a specific manner if it was of a certain data-type.  However, by using the ```Number``` type-set, it made the concern moot.  These assessments really test how well you can beat the test and not how well you can write code to meet the instructional expectations.

---

## 2022 02 08 | Warmups
Warmups focussed on functions and math.  Completed the Loops Ls and Ex.  I worked on Sandbox 3 JS exercise while we worked through the Ex.  All the steps are instructed in the HTML (and comments) portion of the files.  The purpose for the sandbox is to help me figure out how to do the Coffee and Creature Feature project.  I had success in updating the HTML doc with an array of data from the JS file. I am now trying to figure out how to filter some of those items from being displayed on the web page.  Again, this process is found in the page.  

### 1315 | Sandbox 3
I figured out how to hide an element from the web page.  That might not sound crazy hard, but it was making my brain whirl.  The first problem came when I was trying to grab an array from the JS document and set a CSS style attribute to it (after pushing it to the page).  The problem was that it had nothing to do with the web page until I pushed it to the browser.  Instead, I needed to create another array from web page (now holding the li item elements).  So, this array held element tags that could be given CSS style attributes.  Once this was done, I stumbled on two lines of code that should work... yet only one actually did.  
Here is the bad code:
```javascirpt
    monsterTypeHTMLArray[i].setAttribute('class', 'hide');    
```
The following code actually worked:
```javascirpt
    monsterTypeHTMLArray[i].style.display = 'none';
```

### 1330 | Arrays
Working through the lesson and preparing to do the Ex.  Array Ex continues.

### 1530 | Sandbox 3
Still trying to figure out how to auto search array while you're typing 




---

## 2022 02 07 | Warmups
First we started the day completing the TDD.  Learned that things get very odd when we use isNaN.  to complete number 13, I needed to include ```isNaN`` in the logic of the test.  Here are two ways we got the code to work:
```javascript
    it('should return NaN when passed 2 and "apples"', function(){
        expect(add("banana", "split")).toBeNaN();
});
```
It also worked with the following code (however, I'm not sure if this is truely a fix)
```javascript
    it('should return NaN if num1 input is "banana" and num2 input is "split"', function () {
        expect(isNaN(add('banana', 'split')));
});
```
NOTE: I added this to the Journal MD in the actual repo...

### 1100 | Loops
Working on the Class notes and conditional loops.  Completed the While and Do-while.  It is a lot of fun.  Had a small error in the "Ice cream cone" problem.  I added an extra console.log that showed the final total after the loop was a negative number (at times).  

### 1500 | Creature Feature
In preparation to the Coffee project we have coming up, I decided to create a similar project that provides cards of monster information based on the same filtering attributes.  Today, I built the HTML and CSS scaffolding to the project.  This will be used to "pin" JS code.  

### 1700 | Class Conclusions
Continued to work with Creature Feature work.  Built an array of objects.  Trying to figure out how to break each object out into a div tag with a h3 and p tag.  This will be used to build more monster cards within its card container. 

### 2130 | Creature Feature 
I feel so close to the answer on how to add cards to the monster card table.  However, it eludes me.  I will probably need to spend some time in some Udemy courses to complete this.  That and lessons found in YouTube will probably help.  Still, one victory is getting the entire string to show HTML tags with the monster obj information.  This has NOT been a waste.  It only means that (although I made what feels a major achievement) I still must take my time in progressing through these things.

### 2230 | FizzBuzz
I asked during class if the instructors had exercises that we could practice on that would prepare us for technical interviews.  I admit that I was surprised that I was told that I should do a FizzBuzz exercise.  I remember doing something like this in an online Udemy Python course.  I decided to do the project to see how things might be different in JS.  I found that the exercise only took a few minutest.  The reason for this isn't because I am great at coding... rather I have seen the trick behind how this problem needs to be solved.  JS is very much like Python in its "simplicity" or "flexibility" (to a point).  I was surprised to read that this really is an interview question.  I think it would be a great opportunity to break this problem down in a blog at some point.  The purpose is to identify why it actually continues to be a classical interview problem that still trips-up job-seeking programmers.  


---

## 2022 02 04 | JS Assessment 
Completed first JS assessment.  Completed seven out of ten.  Most relied on using the ```typeOf``` function.  Things to remember:  1) green often matters more than the test being correct, 2) go for the web as soon as you can't remmeber something specific (practice this by asking yourself questions and looking for the answers), 3) plug in those answers to see if they even work, 4) try using ternary statements if it is one or another answer, 5) don't overcomplicate the problem, 6) the provided test code does NOT match with what the test code is checking (don't waist time console.log those examples), 7) after completing the first question, set up the git add and commit commands.  Every five questions should be committed with a comment explaining where you are in the test.  If there are any other thoughts I will write them down in this readme uncer the title "Assessment Thoughts."

### 2230 | TDD
When I think I understand JS keeps pulling some really weird behaviors.  I think I get TDD.  It might be important.  However, right now it seems really tedious.  It would be nice to have some high level view of how this process can really save your code production time.  At the moment, it looks like it's only good if you want to make a coding school that auto grades students on their progress of coding.  The most glaring part about this process is that a flawed test can be devastating to both checking code and teaching code.  During our assessment, I found several problems.  In some scenarios, I could build code that "greened" the test questions while completely failing to meet the assigned objectives.  There has to be a better way.  


---

## 2022 02 03 | Conditionals JS
Reviewing Conditionals Ex within the class.  I'm working with the DOM Ls2 and Ex2. || Completed 2nd DOM Ls and Ex.  Adding more buttons to practice removing changes from the change buttons.  Not completed yet.

### 1330 | Conditional Walk-through
Some research showed me that the ```.removeEventListener()``` is not good for removing the changes we performed during our Ex.  It does work for something that is ongoing, like an alert.  If I want to make toggling changes, I would need to use conditional statements (such as if/else).

### 1700 | 
THIS is why I wanted to go through the coding boot camp!  Best practices like wrapping your JS code with an anonymous function.  By using ```(function(){ // Code here })();``` we can ensure that other browser based variables are not overwritten by our code within.  We concluded with the subject of variable scopes within JS.  I am making mistakes based on what we (college) taught us during Python and Java courses.  I need to remember that there are significant differences between the languages.  Concepts remain the same, but syntax and program interactions do tend to be a lot different.  

---

## 2022 02 02 | Review
Review JS Functions Ex.  Worked on a peer review of function questions.  Refactored the functions Ex files.  Learning more about DOM access through online research.  Made progress.  However, completing one line of code in one file doesn't seem to reproduce the same results in the Ex file.  For one thing, I was able to grab list item tags (using a class) and change their text color using a ForI loop.  In the ex file, I am supposed to grab the li tag and do the same.  It will not work.  I also tried giving them each a class tag and select them with that.  Nothing!  It is a little frustrating not knowing why.  

### 1400 | Conditionals JS
Rereading the Conditionals Ls.  Checking the Ex files as well... 

### 1700 | DOM JS
Completed the first DOM Ex.  During class, we completed the Conditionals Ex along with some extra Ex.  Found out that you must realize that a string length will return 0 which is different from ```""```.  Now that I say this, I realize that it is obvious.  Still, being tired I easily missed this.  I could have simply wrote ```string === ""```. 



---


## 2022 02 01 | Functions JS
We have notes!  These are now in my Notion DB along with the Titan Slack channel.  First, intro to the day had us listing instructions to create a PBJ. Our team's instructions are placed in the notion notes.  I am still trying to figure out how to grab DOM stuff.  Finally, we completed a mini ex with functions.  I placed this in sandbox_02 for now.  The code is also in the notion notes

### 1500 | File Restructure
We are working through a lot of extra Ex on functions.  This code was moved from the sandbox files.  I am noticing that I have a lot of mistakes in my code when I run through it the first time.  When I come back to it later, it is a lot fresher to my eyes.  That is when I can refactor the code, making a better quality product.  Need to do this often.


---

## 2022 01 31 | In Class
First day to work in class physically.  As such, we are review the "Working with Data Types, Operators and Variables." Found out a better way of completing the fourth Ex.  Specifically, to check for empty spaces at the beginning and end of a variable could be ``` variable.includes(" ");```.  Also, it is a good practice to trim a user's input so there aren't any spaces at in their inputs.

### 1100 | JS Object 2
Hurray!  Figured out what the instructions were tyring to ask us to do.  At the beginning I wasn't able to think correctly.  After some time, I figured out the structure of the JS file.  It was an object with one parameter and two functions.  One of the functions needed to call the other, so it could manipulate the results if the user highlighted that it should.  

### 1500 | Review
Lesson learned: JS inputs are always taken in as a string.  We can force the input into a string by using ```Number(prompt("give me a number);``` or ```parseInt(prompt("give me a number);```.  I don't really know the difference.  

### 1700 | Update Work
I didn't know what the final assignment (#3) was asking for.  It was a review of what we were doing so far.


---

## 2022 01 30 | JS Objects 1
Completed the Ls and Ex in Objects.  This section focused on how JS doesn't use "classes."  Rather, it uses objects which pretty much do the same thing.  I also remember reading that JS actually does use classes (even if that might be recently added).  None-the-less, this was a very interesting topic.  The Ex instructions were a little confusing.  I did the bonus, but I think I would like to practice more with creating, manipulating and reporting objects.  I created a sandbox folder just so I can do just that. 

### 2020 | Not as Far
I'm going to say it... I didn't get as far as I wanted this weekend.  I absolutely didn't understand the Obj2 Ex instructions.  I understood the Ls, but the Ex didn't make much since to me.  I'll need to listen to the instructor when he explains it later.  Therefore, I have the files in this repo while also marking the area in my notes for clarification.  I also started the BOM Ls and Ex.  The Ls examples are confusing.  It looks like the act of creating variables is forcing the functions to work... but that really doesn't make sense to me.  I need to listen to the instructor during this portion of the class as well. 


----

## 2022 01 29 | JS Loops
Completed the Ex in Loops.  This included While, Do While, For i, Breaks and Continue.  The final Ex was a fun Do While loop to conclude if all the ice cream cones were sold (or if you could sell them based on the order number).  Each Ex required their own JS file.  These are in the js folder.  I tied them all into the loops.html and commented-out the link so there weren't a mess of console logs.  
Possible Issue:  I kept going past the zero trigger used to stop the do while loop in the last Ex.  This could cause some problems in other projects.  I need to figure out how to stop the loop prior to it actually going past zero.    

### 2100 | JS Arrays
Completed the first Ls and Ex on arrays.  This required adding another HTML and JS file to the repo.  The For Each loop is a new tool that I wasn't completely aware of.  I need to practice with it.  It would be good to ask the instructor when we have some time on the subject. 

### 2330 | JS Arrays 2nd
Completed the second Ls and Ex on arrays (need to go to bed!).  This ended with a nice bonus problem where we needed to run the ".map" method on each item within the array.  This gave me the ability to add an open and closing list item HTML tags on each item within the array.  At first, I thought I could do this with a For Each loop.  While this didn't work, I did notice that the For Each and .Map syntax is nearly the same.  Finally, I was able to unshift and push the final unordered list tags to the front and end of the array.  Afterwards, I converted the array into a string using the .join method (with empty string as the argument).  
 

---

## 2022 01 28 | JS Conditionals
Today, our classroom has a "day off." This was good since I needed to do some "family-life-maintenance."  Still, I was able to complete the JS conditionals lesson and exercise.  There is an "Introduction to Unit Tests" lesson and exercise that I will be starting as well.  However, this will probably take a couple of days to complete since I've not done anything in this subject (unlike most of the intro JS stuff).

---

## 2022 01 27 | JS Intro
Today we studied the basics of JS.  Although the class wasn't able to get to function, I worked a little ahead and completed the reading and ex. We have a three-day weekend so my plan is to mover through a few more lessons.  However, I will also be working on a couple of udemy courses that will limit my progress in the curriculum.  Lessons are recorded in my Notion notes.  Terms are recorded in a quizlet DB for future study.  

---

## 2022 01 26 | Learning Git 
Notes on today's lessons can be found at: https://onemorejason.notion.site/CodeUp-Intro-To-Front-End-754e210510454cd1b858bf5f535a3752  ... We reviewed some things on .ssh keys, git commands, and how to access GH.  Note, we should have ED25519 ssh keys.  If you want to see what keys you have, you need to type: ls -a ~/.ssh  ... We are also going over a few HTML things.  