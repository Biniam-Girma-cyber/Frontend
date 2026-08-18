// Student Informations
const fullName = "Biniam Girma";
const age = 21;
const course = "JavaScript";
const score = 92;
const attendance = 90;
//Display function
function displayStudentInfo(name, studentAge, studentCourse, studentScore, studentAttendance) {
    return `
Student Information
-------------------
Name: ${name}
Age: ${studentAge}
Course: ${studentCourse}
Score: ${studentScore}
Attendance: ${studentAttendance}%`;
}


 //Grade calculator
const calculateGrade = (studentScore) => {
    if (studentScore >= 90) {
        return "A";
    } else if (studentScore >= 80) {
        return "B";
    } else if (studentScore >= 70) {
        return "C";
    } else if (studentScore >= 60) {
        return "D";
    } else {
        return "F";
    }
};

//Performance Checker 
const getStudentStatus = (studentScore) => {
    if (studentScore >= 90) {
        return "Excellent Performance";
    } else if (studentScore >= 60) {
        return "Passed";
    } else {
        return "Failed";
    }
};

 
const checkEligibility = (studentScore, studentAttendance) => {
    return studentScore >= 50 && studentAttendance >= 75
        ? "Eligible"
        : "Not Eligible";
};



const rawName = fullName;
const cleanedName = rawName.trim().toUpperCase();

const isJavascriptStudent =
    course.toUpperCase().includes("JAVASCRIPT");

const resultMessage = score >= 60 ? "Pass" : "Fail";



const grade = calculateGrade(score);
const performanceStatus = getStudentStatus(score);
const eligibility = checkEligibility(score, attendance);

 
console.log(`Student Name: ${cleanedName}`);
console.log(`JavaScript Student: ${isJavascriptStudent}`);
console.log(`Student Status: ${resultMessage}`);


 
const academyName = "Nexus Academy";

function demonstrateScope() {
 
    const studentMessage = "Student evaluation is in progress.";

    console.log(`${academyName}: ${studentMessage}`);

    
    for (let i = 1; i <= 3; i++) {

     
        const stepMessage = `Processing evaluation step ${i}...`;

        console.log(stepMessage);
    }
}

demonstrateScope();

const studentInformation = displayStudentInfo(
    cleanedName,
    age,
    course,
    score,
    attendance
);

const finalReport = `
 
FINAL STUDENT PERFORMANCE REPORT
----------------------------------------

${studentInformation}

Grade: ${grade}
Performance Status: ${performanceStatus}
Exam Eligibility: ${eligibility}
Result: ${resultMessage}
JavaScript Student: ${isJavascriptStudent}

---------------------------------------
`;

console.log(finalReport);
