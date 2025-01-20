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

    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });

    document.querySelectorAll("a, button").forEach((elem) => {
      elem.addEventListener("mouseenter", () =>
        cursor.classList.add("cursor-hover")
      );
      elem.addEventListener("mouseleave", () =>
        cursor.classList.remove("cursor-hover")
      );
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
    

