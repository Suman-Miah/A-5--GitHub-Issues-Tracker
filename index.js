// Login button functionality
const loginBtn = document.getElementById("login-button");

loginBtn.addEventListener("click", function () {

    const username = document.getElementById("input-username").value;
    const password = document.getElementById("input-password").value;

    const demoUsername = "admin";
    const demoPassword = "admin123";

    if (username === demoUsername && password === demoPassword) {
        alert("Login Successful!");

        window.location.href = "dashboard.html";
    } 


    else {
        alert("Invalid Username or Password");
    }

});

// search-bar functionality
 const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const issues = document.querySelectorAll(".issue-item");

    issues.forEach(function(issue){

        const issueText = issue.innerText.toLowerCase();

        if(issueText.includes(searchText)){
            issue.style.display = "block";
        } else {
            issue.style.display = "none";
        }

    });

});


// New-issue button functionality
const newIssueBtn = document.getElementById("new-issue-btn");

newIssueBtn.addEventListener("click", function(){

    window.location.href = "new-issue.html";
});

async function loadIssues() {

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");

const data = await res.json();

const issues = data.data;

displayIssues(issues);

}

// Issue Card Component
function displayIssues(issues){

const container = document.getElementById("issues-container");

container.innerHTML = "";

issues.forEach(issue => {

const card = document.createElement("div");

card.className = "issue-card border p-4 rounded-lg";

card.innerHTML = `
<h3 class="issue-title cursor-pointer" data-id="${issue.id}">
${issue.title}
</h3>

<p>${issue.description}</p>

<div class="flex justify-between mt-2">

<span class="badge">
${issue.status}
</span>

<span>${issue.priority}</span>

</div>

<p class="text-sm">Author: ${issue.author}</p>
<p class="text-sm">Category: ${issue.category}</p>
<p class="text-sm">Label: ${issue.label}</p>

<p class="text-xs">${issue.createdAt}</p>
`;

container.appendChild(card);

});

}

// Modal functionality for issue details
document.addEventListener("click", async function(e){

if(e.target.classList.contains("issue-title")){

const id = e.target.dataset.id;

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);

const data = await res.json();

const issue = data.data;

showModal(issue);

}

});

function showModal(issue){

document.getElementById("modal-title").innerText = issue.title;

document.getElementById("modal-description").innerText = issue.description;

document.getElementById("modal-author").innerText = issue.author;

document.getElementById("issue-modal").classList.remove("hidden");

}

function closeModal(){
document.getElementById("issue-modal").classList.add("hidden");
}


function filterIssues(status){

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

.then(res => res.json())

.then(data => {

let issues = data.data;

if(status !== "All"){

issues = issues.filter(issue => issue.status === status);

}

displayIssues(issues);

});

}

loadIssues();

