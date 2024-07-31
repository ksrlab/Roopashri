// Sample data
const skills = ["JAVA","Python","Spring","WebServices","GIT","Maven","DynamoDb","AWS","Kofax","Tableau","JavaScript", "HTML", "CSS", "React", "Node.js"];
const certifications = ["Certified RPA Developer"];
const employmentTimeline = [
    { year: "December 19 – December 21", position: "Senior Software Engineer", details: "Full Stack Developer" },
    { year: "Dec 2017 – Dec 2019", position: "Senior Software Engineer", details: "Full Stack Developer" }
];

// Insert skills into the list
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Insert certifications into the list
const certificationsList = document.getElementById('certifications-list');
certifications.forEach(certification => {
    const li = document.createElement('li');
    li.textContent = certification;
    certificationsList.appendChild(li);
});

// Insert employment timeline into the timeline section
const timeline = document.getElementById('timeline');
employmentTimeline.forEach(job => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${job.year}</strong>: ${job.position}<br>${job.details}`;
    timeline.appendChild(div);
});
