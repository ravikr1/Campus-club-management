const clubs = [
    {
        name: "Coding Club",
        members: 45,
        activities: "Coding contests, workshops and project building",
        achievements: "1st place in Inter-College Hackathon"
    },
    {
        name: "Robotics Club",
        members: 30,
        activities: "Robot building and technical competitions",
        achievements: "Best Robotics Project 2025"
    },
    {
        name: "Cultural Club",
        members: 60,
        activities: "Dance, music, drama and cultural programs",
        achievements: "Winner of Annual Cultural Fest"
    },
    {
        name: "Photography Club",
        members: 25,
        activities: "Photography walks and photo exhibitions",
        achievements: "Best Campus Photography Exhibition"
    }
];

const events = [
    "Coding Contest - 20 September",
    "Robotics Workshop - 25 September",
    "Cultural Night - 2 October",
    "Photography Exhibition - 10 October"
];

const clubList = document.getElementById("clubList");

clubs.forEach(function(club) {
    const div = document.createElement("div");
    div.className = "club";

    div.innerHTML =
        "<h3>" + club.name + "</h3>" +
        "<p><b>Members:</b> " + club.members + "</p>" +
        "<p><b>Activities:</b> " + club.activities + "</p>" +
        "<p><b>Achievement:</b> " + club.achievements + "</p>";

    clubList.appendChild(div);
});

const eventList = document.getElementById("eventList");

events.forEach(function(event) {
    const p = document.createElement("p");
    p.className = "event";
    p.textContent = event;
    eventList.appendChild(p);
});
