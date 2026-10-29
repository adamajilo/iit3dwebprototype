function switchTeam(teamName) {
    console.log("Switching view to: " + teamName);

    // grab elements from the DOM
    const title = document.getElementById("team-title");
    const desc = document.getElementById("team-desc");
    
    // simple conditional text updates for the prototype
    if (teamName === 'chassis') {
        title.innerText = "Chassis";
        desc.innerText = "Responsible for the design and fabrication of the main structural component of the vehicle. Engineers must prove their design meets strict safety and performance metrics, while minimizing the weight of their design. Involves extensive finite-element analysis as well as hands on work with welding and carbon fiber composites.";
    } 
    else if (teamName === 'electronics') {
        title.innerText = "Electronics";
        desc.innerText = "Responsible for the design and fabrication of the vehicle's high and low voltage components, as well as the programming of control and sensor systems. Engineers have the opportunity to design a high energy density 300V battery pack and custom PCBs. Students work on data and signal processing related problems with the various sensors used in our vehicle, and we are also looking to start a project related to autonomous vehicles. ";
    } 
    else if (teamName === 'suspension') {
        title.innerText = "Suspension";
        desc.innerText = "Responsible for the design of a system that optimizes vehicle handling characteristics. Engineers are also responsible for the design of the braking subsystem. This involves problems in vehicle dynamics, and design involves work in CAD and proprietary simulation software. ";
    } 
    else if (teamName === 'powertrain') {
        title.innerText = "Powertrain";
        desc.innerText = "Responsible for designing a system that gets power from the motor to the wheels as efficiently as possible. Works closely with the electrical team in design choices, and work involves extensive finite element analysis and Simulink models.";
    } 
    else if (teamName === 'business') {
        title.innerText = "Business";
        desc.innerText = "Responsible for acquiring funding, professional networking, marketing and managing public relations in order to support the team during the research, design, and production of the car. The team combines the world of engineering and business to represent both the team and the car at the highest level.";
    }

    // toggle active button styles
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // find the button that was clicked and light it up
    event.target.classList.add('active');
}