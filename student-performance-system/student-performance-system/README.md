# Student Performance Evaluation System

## Student Name

 Biniam Girma Tirkaso

## Project Description

This project is a Student Performance Evaluation System built with JavaScript. It evaluates student scores, calculates grades, checks exam eligibility based on attendance, processes student text, demonstrates variable scope and loops, and generates a detailed performance report.

## Project Structure

```text
student-performance-system/
├── index.html
├── script.js
└── README.md
```

## Features

- Stores student information.
- Displays student information using a function.
- Calculates the student's grade.
- Determines the student's performance status.
- Checks exam eligibility.
- Processes the student's name using string methods.
- Checks whether the student is taking JavaScript.
- Uses a ternary operator to determine Pass or Fail.
- Demonstrates global, function, and block scope.
- Uses a `for` loop to simulate evaluation steps.
- Generates a final performance report using a template literal.

## JavaScript Concepts Used

- Variables and Primitive Data Types
- `const` and `let`
- Comparison Operators
- Logical AND (`&&`)
- Conditional Statements (`if`, `else if`, `else`)
- `for` Loop
- Ternary Operator
- Functions
- Parameters and Arguments
- Return Values
- Arrow Functions
- Global Scope
- Function Scope
- Block Scope
- String Methods
  - `trim()`
  - `toUpperCase()`
  - `includes()`
- Template Literals

## Grade System

| Score | Grade |
|---|---|
| 90–100 | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| Below 60 | F |

## Performance Status

- Score 90 or above → Excellent Performance
- Score 60–89 → Passed
- Score below 60 → Failed

## Exam Eligibility

A student is eligible for the exam when:

- Score is at least 50
- Attendance is at least 75%

Both conditions are checked using the logical AND (`&&`) operator.

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a web browser.
3. Open the browser Developer Tools.
4. Select the **Console** tab.
5. Read the evaluation steps and final performance report.

## Important Assignment Rule

This project intentionally does not use arrays, objects, array methods, object methods, or other advanced JavaScript concepts. It stays within the concepts required for the Week 4 Sessions 1 and 2 assignment.

## Expected Result for the Included Student

The included sample student has:

- Name: ABEBE KEBEDE after text cleaning
- Age: 22
- Course: JavaScript
- Score: 85
- Attendance: 90%
- Grade: B
- Performance Status: Passed
- Exam Eligibility: Eligible
- Result: Pass
- JavaScript Student: true

## Submission

Before submitting:

- Replace the student name in `README.md` with your full name.
- Make sure the JavaScript runs without errors.
- Confirm that the project contains `index.html`, `script.js`, and `README.md`.
- Upload the project to a public GitHub repository.
