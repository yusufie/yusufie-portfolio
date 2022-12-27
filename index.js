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