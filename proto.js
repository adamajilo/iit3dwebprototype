

function switchTeam(teamName) {
    console.log("Switching view to: " + teamName);

    // grab elements from the DOM
    const title = document.getElementById("team-title");
    const desc = document.getElementById("team-desc");
    
    // simple conditional text updates for the prototype
    if (teamName === 'chassis') {
        title.innerText = "Chassis";
        desc.innerText = "Responsible for the design and fabrication of the main structural component of the vehicle. Engineers must prove their design meets strict safety and performance metrics, while minimizing the weight.";
    } 
    else if (teamName === 'electronics') {
        title.innerText = "Electronics";
        desc.innerText = "Responsible for high and low voltage components, battery pack design (300V), custom PCBs, sensor telemetry, and autonomous vehicle integration.";
    } 
    else if (teamName === 'suspension') {
        title.innerText = "Suspension";
        desc.innerText = "Optimizes vehicle handling characteristics and braking subsystems. Involves vehicle dynamics, CAD work, and proprietary simulation software.";
    } 
    else if (teamName === 'powertrain') {
        title.innerText = "Powertrain";
        desc.innerText = "Responsible for designing a system that gets power from the motor to the wheels efficiently using finite element analysis and Simulink models.";
    } 
    else if (teamName === 'business') {
        title.innerText = "Business";
        desc.innerText = "Acquiring funding, professional networking, marketing, and managing public relations to support the team during design and production.";
    }

    // toggle active button styles
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // find the button that was clicked and light it up
    event.target.classList.add('active');
}
