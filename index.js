// particles script starts //

window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  
  var particles = Particles.init({
    selector: ".background",
    color: ["#FF0099", "#00ffff"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 765,
        options: {
          color: ["#fFF", "#FF0099", "#00ffff"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });

// particles script ends //


// Parallax Depth Cards Script Starts //

  VanillaTilt.init(document.querySelectorAll(".project"), {
    max: 25,
    speed: 400,
    easing: "cubic-bezier(.02,.77,.43,.87)",
    perspective: 730,
    transition: true,
    gyroscope: true
  });

// Parallax Depth Cards Script Ends //



// dom manipulation script starts //


// don't display the hero div element on page load //
document.querySelector(".hero").style.display = "block";
  // add event listener to btn div element to show and hide the section element with id name "btnHome" //
/*   
  document.querySelector("#btnHome").addEventListener("click", function () {
    var heroDiv = document.querySelector(".hero");
    if (heroDiv.style.display === "none") {
      heroDiv.style.display = "block";
    } else {
      heroDiv.style.display = "none";
    }
  }); 
*/

// don't display the skills div element on page load //
  document.querySelector(".skills").style.display = "none";
// add event listener to btn div element to show and hide the section element with id name "btnSkills" //
  document.querySelector("#btnSkills").addEventListener("click", function () {
    var skills = document.querySelector(".skills");

    if (skills.style.display === "none") {
      skills.style.display = "block";
    } else {
      skills.style.display = "none";
    }
  });

// don't display the projects div element on page load //
  document.querySelector(".projects").style.display = "none";
// add event listener to btn div element to show and hide the section element with id name "btnProjects" //
  document.querySelector("#btnProjects").addEventListener("click", function () {
    var projects = document.querySelector(".projects");

    if (projects.style.display === "none") {
      projects.style.display = "block";
    } else {
      projects.style.display = "none";
    }
  });

// don't display the about div element on page load //
  document.querySelector(".about").style.display = "none";
// add event listener to btn div element to show and hide the section element with id name "btnAbout" //
  document.querySelector("#btnAbout").addEventListener("click", function () {
    var about = document.querySelector(".about");

    if (about.style.display === "none") {
      about.style.display = "block";
    } else {
      about.style.display = "none";
    }
  });

  
  // if the #btnSkills div element is clicked, the section element with id name "btnSkills" will be shown and the other section elements will be hidden //
  document.querySelector("#btnSkills").addEventListener("click", function () {
    var skills = document.querySelector(".skills");
    var projects = document.querySelector(".projects");
    var about = document.querySelector(".about");
    var heroDiv = document.querySelector(".hero");
    
    if (skills.style.display === "none") {
      skills.style.display = "block";
    }
    if (projects.style.display === "block") {
      projects.style.display = "none";
    }
    if (heroDiv.style.display === "block") {
      heroDiv.style.display = "none";
    } 
    if (about.style.display === "block") {
      about.style.display = "none";
    }
  });

  // if the #btnProjects div element is clicked, the section element with id name "btnProjects" will be shown and the other section elements will be hidden //
  document.querySelector("#btnProjects").addEventListener("click", function () {
    var skills = document.querySelector(".skills");
    var projects = document.querySelector(".projects");
    var about = document.querySelector(".about");
    var heroDiv = document.querySelector(".hero");
    
    if (skills.style.display === "block") {
      skills.style.display = "none";
    }
    if (projects.style.display === "none") {
      projects.style.display = "block";
    }  
    if (heroDiv.style.display === "block") {
      heroDiv.style.display = "none";
    }
    if (about.style.display === "block") {
      about.style.display = "none";
    }
  });
  
  // if the #btnAbout div element is clicked, the section element with id name "btnAbout" will be shown and the other section elements will be hidden //
  document.querySelector("#btnAbout").addEventListener("click", function () {
    var about = document.querySelector(".about");
    var skills = document.querySelector(".skills");
    var projects = document.querySelector(".projects");
    var heroDiv = document.querySelector(".hero");
    
    if (about.style.display === "none") {
      about.style.display = "block";
    }
    if (skills.style.display === "block") {
      skills.style.display = "none";
    }
    if (projects.style.display === "block") {
      projects.style.display = "none";
    }  
    if (heroDiv.style.display === "block") {
      heroDiv.style.display = "none";
    }
  });
  
  
  // if the #btnHome div element is clicked, the section element with id name "btnHome" will be shown and the other section elements will be hidden //
    // document.querySelector("#btnHome").addEventListener("click", function () {
    //   var skills = document.querySelector(".skills");
    //   var projects = document.querySelector(".projects");
    //   var heroDiv = document.querySelector(".hero");
    //   var about = document.querySelector(".about");
    //   if (about.style.display === "block") {
    //     about.style.display = "none";
    //   }
    //   if (skills.style.display === "block") {
    //     skills.style.display = "none";
    //   }
    //   if (projects.style.display === "block") {
    //     projects.style.display = "none";
    //   }
    //   if (heroDiv.style.display === "none") {
    //     heroDiv.style.display = "block";
    //   }
    // });