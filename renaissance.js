document.addEventListener('DOMContentLoaded', () => {
    // Add footer to all pages
    const mainDiv = document.getElementsByClassName('ins-tiles--main')[0];
    if (document.getElementById('unknown-footer-links')) return;
    const footerHtml = `
        <div id="unknown-footer-links-wrapper" class="unknown-footer-links-wrapper">
            <div id="unknown-footer-links" class="unknown-footer-links" aria-label="Footer links">
                <div class="unknown-column">
                    <h3>Shop</h3>
                    <ul>
                    <li><a href="#">All Clothing</a></li>
                    <li><a href="#">Clothing Types</a></li>
                    <li><a href="#">Browse Brands</a></li>
                    <li><a href="#">Size Guide</a></li>
                    </ul>
                </div>
    
                <div class="unknown-column">
                    <h3>Info</h3>
                    <ul>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Delivery Info</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Returns Policy</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
    
                <div class="unknown-column">
                    <h3>Locations</h3>
                    <ul class="unknown-locations">
                    <li>
                        <strong>Clontarf:</strong> 59-60 Clontarf Road, Clontarf, Dublin 3.<br>
                        Tel: <a href="tel:018530409">01-853 0409</a>
                    </li>
                    <li>
                        <strong>Monkstown:</strong> 9 Monkstown Crescent, Monkstown, Co. Dublin.<br>
                        Tel: <a href="tel:012844957">01-284 4957</a>
                    </li>
                    <li>
                        <strong>Howth:</strong> 3 Boyd House, Howth, Co. Dublin.<br>
                        Tel: <a href="tel:018394882">01-839 4882</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    mainDiv.insertAdjacentHTML('beforeend', footerHtml);
    
    // Add carousel to home page only
    var targetDiv = document.getElementById("tile-image-text-xTecMv");
    if (targetDiv) {
        const googleReviewHtml = `
            <div class="unknown-carousel-wrapper">
                <h1>Google Reviews</h1>
                <div>
                    <button class="unknown-nav unknown-left">&#10094;</button>
                    
                    <div class="unknown-carousel-container">
                        <div class="unknown-carousel" id="unknown-carousel">
                            <!-- Review 1 -->
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://i.pravatar.cc/50?img=10" alt="Carl"/>
                                    <div>
                                        <h4>Carl</h4>
                                        <span class="unknown-date">2025-03-11</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/h.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>I don't pretend to know much about ladies wear, Ted, but my wife and her friends are big fans of the colourful, chic confections on sale...</p>
                            </div>
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://i.pravatar.cc/50?img=10" alt="Carl"/>
                                    <div>
                                        <h4>Carl</h4>
                                        <span class="unknown-date">2025-03-11</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/h.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>I don't pretend to know much about ladies wear, Ted, but my wife and her friends are big fans of the colourful, chic confections on sale...</p>
                            </div>
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://i.pravatar.cc/50?img=10" alt="Carl"/>
                                    <div>
                                        <h4>Carl</h4>
                                        <span class="unknown-date">2025-03-11</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/h.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>I don't pretend to know much about ladies wear, Ted, but my wife and her friends are big fans of the colourful, chic confections on sale...</p>
                            </div>
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://i.pravatar.cc/50?img=10" alt="Carl"/>
                                    <div>
                                        <h4>Carl</h4>
                                        <span class="unknown-date">2025-03-11</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/h.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>I don't pretend to know much about ladies wear, Ted, but my wife and her friends are big fans of the colourful, chic confections on sale...</p>
                            </div>
                        </div>
                    </div>
                    
                    <button class="unknown-nav unknown-right">&#10095;</button>
                </div>
            </div>
        `;
        targetDiv.insertAdjacentHTML('afterend', googleReviewHtml);

        let currentIndex = 0;
        const carousel = document.getElementById('unknown-carousel');
        const cards = document.querySelectorAll('.unknown-review-card');
        const container = document.querySelector('.unknown-carousel-container');
        
        function getCardWidth() {
            const card = cards[0];
            const cardStyle = window.getComputedStyle(card);
            const width = card.offsetWidth;
            const marginRight = parseFloat(cardStyle.marginRight) || 0;
            return width + marginRight;
        }
        
        function updateCarousel() {
            const cardWidth = getCardWidth();
            const containerWidth = container.offsetWidth;
            const visibleCards = Math.floor(containerWidth / cardWidth);
            const maxIndex = Math.max(0, cards.length - visibleCards); // important
            
            // Prevent overscrolling
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;
            
            const offset = -(currentIndex * cardWidth);
            carousel.style.transform = `translateX(${offset}px)`;
        }
        
        function nextSlide() {
            currentIndex++;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex--;
            updateCarousel();
        }
        
        window.addEventListener('resize', updateCarousel);
        window.addEventListener('load', updateCarousel);
        document.getElementsByClassName('unknown-left')[0].addEventListener('click', prevSlide);    
        document.getElementsByClassName('unknown-right')[0].addEventListener('click', nextSlide);
    }
});