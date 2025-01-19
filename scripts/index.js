// **Work in Progress**


    // document.addEventListener("DOMContentLoaded", () => {
    //     console.log("Portfolio page loaded!");
    
    //     // Trigger popup after 5 seconds
    //     setTimeout(() => {
    //         createPopup();
    //     }, 5000); // 5000ms = 5 seconds
    // });
    
    // // Function to create and show the popup
    // function createPopup() {
    //     console.log("Creating popup...");
    
    //     // Get the container for the popup
    //     const popupContainer = document.getElementById("portfolioBody");
    
    //     // Add popup HTML content
    //     popupContainer.innerHTML = `
    //         <div class="popup-container">
    //             <div class="popup-content">
    //                 <h2>Welcome to My Portfolio!</h2>
    //                 <p>Explore my projects and see how I bring value to the table.</p>
    //                 <button class="close-popup">Close</button>
    //             </div>
    //         </div>
    //     `;
    
    //     // Add close button functionality
    //     const closeButton = document.querySelector(".close-popup");
    //     closeButton.addEventListener("click", () => {
    //         console.log("Closing popup...");
    //         popupContainer.innerHTML = ""; // Remove popup content
    //     });
    
    //     console.log("Popup created successfully!");
    // }
    
    particlesJS("interactive-background", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#6c0000" },
          shape: { type: "circle", stroke: { width: 0, color: "#000" } },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#6c0000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });


    document.getElementById("preferred").addEventListener('change', function () {
        const selected = this.value;
        const responseDiv = document.getElementById('response');

        // Clear any Previous Message
        responseDiv.innerText = "";

        if (selected = "phone") {
            responseDiv.innerText = "Thank you! I''ll get in touch with you via Phone";
        } else if (selected = "email") {
            responseDiv.innerText = "Great! I'll send an email to you shortly"
        } else if (selected = "social") {
            responseDiv.innerText = "I'll reach out through social media. Thank you for your time!"
        }
    
    });

    document.querySelector("form[action='#']").addEventListener("submit", function () {
        e.preventDefault();

        alert("Thank you for subscribing to the newsletter!");

        this.reset();
    });

    document.querySelector("form[action='#']").addEventListener("submit", function () {
        e.preventDefault();

        alert("Thank you for your feedback! I'll get in touch soon.");

        this.reset();
    });
    

