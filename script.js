console.log("Hello Austine, Nexa Digitals JS is working 🚀");

let ownerName = "Austine";

// Show welcome alert on load
function greet() {
    alert("Welcome to Nexa Digitals, " + ownerName + "!");
}

// Track consistency
let hoursLearningToday = 5;
if (hoursLearningToday >= 5) {
    console.log("Great consistency today 💪");
} else {
    console.log("Try to hit 5 hours tomorrow");
}

// Skills counter for the site
let skillsLearned = ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design", "Git", "Github", "JavaScript"];
console.log("Total skills learned: " + skillsLearned.length);

// Update the "What We Bring" section with real skills count
document.addEventListener("DOMContentLoaded", function() {
    // Update skills count in About section
    let skillsCountEl = document.getElementById("skillsCount");
    if(skillsCountEl) {
        skillsCountEl.textContent = skillsLearned.length;
    }

    // Load visitor name from localStorage
    loadVisitorName();
});

// Change heading dynamically
function changeSkillsHeading() {
    document.querySelector("#services h2").textContent = "Services We're Mastering";
}

// Form validation for contact
function validateForm() {
    let visitorNameValue = document.getElementById("visitorName").value;
    let visitorEmailValue = document.getElementById("visitorEmail").value;

    if (visitorNameValue === "" || visitorEmailValue === "") {
        alert("Please fill in both your name and email.");
        return false;
    }

    saveVisitorName(); // save to localStorage
    alert("Thanks " + visitorNameValue + "! We'll reach you at " + visitorEmailValue + ". (Demo form)");
    return false; // stops actual submit
}

function saveVisitorName() {
    let visitorNameValue = document.getElementById("visitorName").value;
    localStorage.setItem("lastVisitorName", visitorNameValue);
    console.log("Saved to localStorage:", visitorNameValue);
}

function loadVisitorName() {
    let savedName = localStorage.getItem("lastVisitorName");
    if (savedName) {
        console.log("Welcome back, " + savedName + "!");
        // You can also show this in the hero later
    }
}

// Owner info object
let portfolioOwner = {
    name: "Austine Samuel Ugbede",
    role: "Founder & Lead Strategist",
    skillsCount: skillsLearned.length,
    isAvailableForWork: true
};

function showOwnerInfo() {
    alert(portfolioOwner.name + " - " + portfolioOwner.role);
}

// Projects array - matches our "Our Work" section
let projects = [
  { title: "Queenie Enterprises", tech: "HTML/CSS/WhatsApp API", status: "Completed", category: "Web & Tech" },
  { title: "Fashion Brand Launch", tech: "Instagram Ads + Content", status: "Completed", category: "Brand & Marketing" },
  { title: "Analytics Dashboard", tech: "Google Analytics + Data Studio", status: "Completed", category: "Growth & Data" },
  { title: "NFT Mint Site", tech: "Solidity + Web3.js", status: "Completed", category: "Web3" },
  { title: "WhatsApp CRM Bot", tech: "Node.js + WhatsApp API", status: "Completed", category: "Automation" }
];

projects.forEach(function(project) {
    console.log(project.title + " - " + project.category + " - " + project.status);
});

// ========== NEW: SMOOTH SCROLL FOR CASE STUDY BUTTONS - ADDED ONLY ==========
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});