document.addEventListener("DOMContentLoaded", function() {
    // Scroll to Top Button functionality
    const scrollTopButton = document.querySelector('.top-scroll-btn');
    window.onscroll = function() {
        if (window.scrollY > 100) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    };
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    

    // Dynamic Typing Effect for the Role
    const typingText = document.querySelector('.dynamic-typing');
    const phrases = ["Front-End Developer", "HTML&CSS lover", "JavaScript Programmer"];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let typingDelay = 200;

    function type() {
        if (isDeleting) {
            if (currentPhrase.length > 0) {
                currentPhrase.pop();
                letterIndex--;
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingDelay = 500; // Pause before start typing new phrase
            }
        } else {
            if (letterIndex < phrases[phraseIndex].length) {
                currentPhrase.push(phrases[phraseIndex][letterIndex]);
                letterIndex++;
                typingDelay = 200;
            } else {
                isDeleting = true;
                typingDelay = 1000; // Pause before start deleting
            }
        }

        typingText.textContent = currentPhrase.join('');
        setTimeout(type, typingDelay);
    }

    type(); // Initialize typing effect

    var progressBars = document.querySelectorAll('progress');

    progressBars.forEach(function(progressBar) {
        // Get the value of the progress bar
        var value = parseInt(progressBar.value);

        // Determine the skill level based on the value
        var skillLevel;
        if (value >= 80 && value <= 100) {
            skillLevel = "GOOD";
        } else if (value >= 60 && value < 80) {
            skillLevel = "INTERMEDIATE";
        } else if (value >= 40 && value < 60) {
            skillLevel = "ADVANCED BEGINNER";
        } else {
            skillLevel = "BEGINNER";
        }

        // Create a label element to display the skill level
        var label = document.createElement('span');
        label.textContent = " - " + skillLevel;
        label.style.marginLeft = "10px";
        label.style.fontWeight = "bold";

        // Append the label to the parent of the progress bar
        progressBar.parentElement.appendChild(label);
    });
});