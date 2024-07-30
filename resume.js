// Sample data
const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
const certifications = ["Certified JavaScript Developer", "Certified React Developer"];
const employmentTimeline = [
    { year: "2022", position: "Software Engineer at Company A", details: "Developed web applications." },
    { year: "2021", position: "Frontend Developer at Company B", details: "Worked on UI/UX design." }
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
