const projects = [
    { title: "Website Landing Page", img: "images/project1.png", description: "Responsive landing page design." },
    { title: "Portfolio Website Setup", img: "images/project2.png", description: "Full portfolio site setup." },
    { title: "JavaScript Animation", img: "images/project3.png", description: "Interactive JS animations." },
    { title: "Image Slider", img: "images/project4.png", description: "Custom image slider project." },
    { title: "Countdown Timer", img: "images/project5.png", description: "Real-time countdown timer." },
    { title: "Weather App", img: "images/project6.png", description: "API-based weather app." },
    { title: "Memory Game", img: "images/project7.png", description: "Fun memory matching game." },
    { title: "Expense Tracker", img: "images/project8.png", description: "Track expenses with JS." },
    { title: "Typing Speed Test", img: "images/project9.png", description: "Test your typing speed." },
    { title: "Portfolio Preview", img: "images/project10.png", description: "Preview multiple projects." },
];

const gallery = document.getElementById('projectGallery');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <img src="${project.img}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    gallery.appendChild(card);
});
