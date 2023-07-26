Meta
Programming with JavaScript: Documentation


Course Syllabus


Module 1: Introduction to JavaScript
In this module, you are introduced to JavaScript. You'll learn why JavaScript is so integral to software development. And you'll get an overview of how to write JavaScript code inside the browser. Furthermore, you will learn about the most common operators as well as conditional statements and loops.
After completing this module, you will be able to:
* Explain the importance of JavaScript in software development
* Demonstrate how to write JavaScript code inside the browser
* Demonstrate how to write basic JavaScript code
* List common operators, conditional statements, and loops
* Demonstrate how to use variables and output their value in the console
Module 2: The building blocks of a program
Here you'll learn how to use objects, arrays, and functions. In addition, you will learn about the most common built-in methods, and the difference between undefined, null, and empty strings. And you'll explore both error handling and defensive programming.
After completing this module, you will be able to:
* Build and use objects, arrays, and functions
* List some common built-in methods on built-in objects
* Describe handling bugs and errors using try, catch, throw, and defensive programming
* Explain the difference between undefined, null, and empty strings
* Demonstrate how to write basic code using arrays, objects, and functions
Module 3: Programming Paradigms
This module is about functional programming and the object-oriented programming paradigm. You will learn what scope is in JavaScript. You'll explore the differences between var, let, and const. And you'll learn how to use classes and inheritance in object-oriented programming. Additionally, you'll explore how to use write JavaScript using modern features like spread and rest. You will build code that can manipulate the DOM and handle events. And you will use JSON in JavaScript.
After completing this module, you will be able to:
* Outline the tenets of the functional programming and object-oriented programming paradigm
* Describe how scope works in JavaScript
* List the differences between var, let, and const
* Use classes and inheritance in OOP in JavaScript
* Write JavaScript code using more modern features like spread, rest, template strings, and modules
* Build code that manipulates the DOM and handles events
* Use JSON in JavaScript
Module 4: Testing and compatibility
Here you will learn about Node.js and npm. And you will explore how to install npm packages and how to work with package.json. Furthermore, you will learn about testing in JavaScript and you'll code a simple unit test in Jest.
After completing this module, you will be able to:
* Describe Node.js and npm
* Explain how to install npm packages
* Describe how to work with package.json
* Explain the process of testing in JavaScript
* List the three most prevalent kinds of testing
* Demonstrate how to code a simple unit test in Jest


Introduction to JavaScript  (JavaScript is everywhere)


It was built in only 10 days in 1995 by a single person, Brendan Eich, who was tasked with building a simple scripting language to be used in version 2 of the Netscape browser.
In 1996 Netscape made a deal with the organization known as ECMA (European Computer Manufacturers Association) to draft the specification of the JavaScript language, and in 1997 the first edition of the ECMAScript specification was published. 
ECMA publishes this specification as the ECMA-262 standard.
You can think of a standard as an agreed-upon way of how things should work. Thus, ECMA-262 is a standard that specifies how the JavaScript language should work.


A programming language is sort of like a bridge that we use to facilitate communication between computers and people. For a computer to understand a programming language, it needs to save it somewhere in its random access memory. RAM or on a disk in binary code, which is represented by a series of zeros and ones. The binary code is a representation of machine language. That a computer can understand all of the zeros and ones in binary language represent electrical switches. Finally, a computer's central processing unit, or CPU can comprehend these binary electrical signals and update itself accordingly. This machine language, with its series of zeros and ones, is known as a low-level language because it's closer to being understood by a computer's CPU.


Webpage Interactivity (1995)


JavaScript is currently the only computer language that allows us to directly interact with our web pages dynamically on the client.
Its enduring popularity is down to the rules of backward compatibility, which states that all websites that were built in the past still need to work today.
It's used on the client side of sites as plain JavaScript also known as vanilla JavaScript. It fuels a myriad of JavaScript frameworks such as React, Vue, and D3 and it's also used on the server as Node.js and more recently Deno.
It's the foundation of technology of everything you do online with a huge variety of uses.


Jquery History:  
In the early 2000s, different companies built Internet browsers and were referred to as browser vendors. However, with different browsers came different behaviors with various discrepancies between other browsers. This resulted in developers sometimes having to write separate JavaScript code for different browsers. This wasn't the best use of developer time and could lead to a frustrating experience for end-users. Out of this frustration, several projects appeared trying to solve this compatibility problem. One such project managed to solve these issues and it was a library named jQuery. Using this library, all a developer needed was to import jQuery and write code using its features. This code would then work across all browsers. 


One such solution was React, which came out in 2011 and it had a considerable effect on the way we think about websites and how we build them. React, solved many of the issues associated with creating, updating, and maintaining complex websites. 


Variables: Declaration and Assignments
Data Types: string, number, Boolean, null, undefined, BigInt, and symbol
Null: absence of value
Undefined: A variable not yet assigned a value.
Operators
1. Logical AND operator: && 
2. Logical OR operator: || 
3. Logical NOT operator: ! 
4. The modulus operator: % 
5. The equality operator: ==
6. The strict equality operator: ===
7. The inequality operator: !=
8. The strict inequality operator: !==
9. The addition assignment operator: += 
10. The concatenation assignment operator: +=


Conditional Statements: 
When to use if else and Switch?
The counter has three conditions:
For loop:   for (let i=0; i > 3, i++) set value, condition, incrementer/decrementer
JavaScript Nested Loops:
for (let i=0; i > 3, i++)  {    — Outer Loop
        for(let j = 0; i >7, j++) {          — Inner Loop

        }
}