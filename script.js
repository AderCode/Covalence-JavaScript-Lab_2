
// META DATA

let interests = ["Coding", "Videography", "Photography", "Virtual Reality"];
let prevComp = ["Automation Personel Services", "Grede II", "AGC: Alabaster" ];
let prevTitle = ["Machine Operator", "Chemistry Quality Lab Technician", "Machine Technician"];
let prevDesc = ["Operate an automated robotic bottle filling line.", "Perform metalurgical test to determine quality and strength of final product.", "Operate and maintain robotic automated plastic injection molding machine and finished product line."];
let mySkills = [{skillName: "Video Editing", isCool: true}, {skillName: "JavaScript", isCool: true},{skillName: "Tennis", isCool: false}, {skillName: "Electrical Engineering", isCool: true,}, {skillName: "Practical Photo Effects", isCool: true}, {skillName: "Graphical Design", isCool: false}, {skillName: "Woodworking", isCool: false}, {skillName: "Landscaping", isCool: false}, {skillName: "Sleeping WAY too much!", isCool: true}];

// META FUNCTIONS

function displayInterest(interest) {
    console.log("* " + interest);
};

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
};

function displaySkill(skillName, isCool) {
    if (isCool === true) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
};

function logInterests() {
    for (i = 0; i < interests.length; i++) {
        displayInterest(interests[i]);
    }
};

function logWork() {
    for (c = 0; c < prevComp.length; c++);
    for (t = 0; t < prevTitle.length; t++);
    for (d = 0; d < prevDesc.length; d++) {
        displayPosition(prevComp[c], prevTitle[t], prevDesc[d]);
    }
};

function logSkills() {
    for (s = 0; s < mySkills.length; s++) {
        displaySkill(mySkills[s].skillName, mySkills[s].isCool);
    }
};

function br() {
    console.log(" ");
};


// OUTPUT

console.log("Name:" + " matthew aderhold".toUpperCase());
console.log("Career: Full Stack Engineer / Digital Director");
console.log("The Big Guy");
br();
console.log("My Interests:");
logInterests();
br();
console.log("My Previous Experience:");
logWork();
br();
console.log("My Skills:");
logSkills();