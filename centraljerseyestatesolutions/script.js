document.addEventListener('DOMContentLoaded', function () {
    
    // --- SLIDER LOGIC ---
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (slides.length > 0) {
        let currentIndex = 0;
        let slideInterval;

        // Create dots
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.dot');

        function goToSlide(index) {
            if (slides[currentIndex]) {
                 slides[currentIndex].classList.remove('active');
            }
            if (dots[currentIndex]) {
                dots[currentIndex].classList.remove('active');
            }
            
            currentIndex = index;
            
            if (slides[currentIndex]) {
                slides[currentIndex].classList.add('active');
            }
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % slides.length;
            goToSlide(nextIndex);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 8000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        goToSlide(0);
        startInterval();
    }

    // --- FAQ ACCORDION LOGIC ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const wasActive = question.classList.contains('active');
            
            faqQuestions.forEach(otherQuestion => {
                otherQuestion.classList.remove('active');
                otherQuestion.nextElementSibling.classList.remove('active');
            });
            
            if (!wasActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});