console.log("Hello Austine, javaScript is working");

let name = "Austine";
let yearslearning = 0;

function greet() {
    alert("welcome to your portfolio," + name + "!");
}
//conditionals
let hourslearningtoday = 5;
if (hourslearningtoday >= 5) {
    console.log("Great consistency today");
} else {
    console.log("Try to hit 5 hours tomorrow");
}

//loop
for (let day = 1; day <= 9; day++) {
    console.log("day" + day + " completed");
}
let skillsLearned =["HTML", "CSS", "Flexbox","Grid","Responsive Design", "Git", "Github", "javaScript"];

console.log("Total skills learned:" + skillsLearned.length);

skillsLearned.forEach(function(skill) {
    console.log("-" + skill);
});
//DOM Manipulation
document.addEventListener("DOMContentLoaded", function() {
    let aboutText = document.querySelector("#about p");
    console.log("Found the about paragraph:", aboutText);
});
function changeSkillsHeading() {
    document.querySelector("#skills h2").textContent = "Skills I'm Building";
}
function validateForm() {
    let visitorNameValue = document.getElementById("visitorName").value;
    let visitorEmailValue = document.getElementById("visitorEmail").value;

    if (visitorNameValue === "" || visitorEmailValue === "") {
        alert("Please fill in both your name and email.");
        return false; // stops the form
    }

    alert("Thanks" + visitorNameValue + "! Your message would be sent (this is a demo form).");
    return false; // stops the form from actually submitting and adding ? to URL
}
function saveVisitorName() {
    let visitorNameValue = document.getElementById("visitorName").value;
    localStorage.setItem("lastVisitorName", visitorNameValue);
    console.log("Saved to localStorage:", visitorNameValue);
}

function loadVisitorName() {
    let savedName = localStorage.getItem("lastVisitorName");
    if (savedName) {
        console.log("Welcome back," + savedName + "!");
    }
}
let portfolioOwner = {
    name: "Austine Samuel Ugbede",
    role: "Aspiring Web Developer",
    skillsCount: 8,
    isAvailableForWork: true
};

console.log(portfolioOwner.name);
console.log(portfolioOwner.role);

function showOwnerInfo() {
    alert(portfolioOwner.name + "-" + portfolioOwner.role);
}
let projects = [
    { title: "portfolio Website", tech: "HTML/CSS/JS", status: "Complete" },
    { title: "Weather App", tech: "JavaScript API", status: "Planned" },
    { title: "Todo List", tech: "React", status: "Planned" }
];

projects.forEach(function(project) {
    console.log(project.title + "-" + project.status);
});