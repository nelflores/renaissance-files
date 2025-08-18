document.addEventListener('DOMContentLoaded', () => {
    // Add footer to all pages
    addFooterToAllPage();
    
    // Add carousel to home page only
    // addGoogleReviewToHomePage();
});

function addFooterToAllPage() {
    const mainDiv = document.getElementById('tile-footer-MNure7');
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
    mainDiv.insertAdjacentHTML('beforebegin', footerHtml);
}

function addGoogleReviewToHomePage() {
    // var targetDiv = document.getElementById("unknown-footer-links");
    var targetDiv = document.getElementById("tile-image-text-xTecMv");
    if (targetDiv) {
        const googleReviewHtml = `
            <div class="unknown-carousel-wrapper">
                <div>
                    <h2>GOOD</h2>
                    <div>
                        <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="30" height="30" loading="lazy">
                        <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="30" height="30" loading="lazy">
                        <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="30" height="30" loading="lazy">
                        <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="30" height="30" loading="lazy">
                        <img src="https://cdn.trustindex.io/assets/platform/Google/star/h.svg" alt="Google" width="30" height="30" loading="lazy">
                    </div>
                    <h4>Based on <strong>69 reviews</strong></h4>
                    <img src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" width="110" height="35" loading="lazy" alt="Google">
                </div>
                <div>
                    <button class="unknown-nav unknown-left">&#10094;</button>
                    
                    <div class="unknown-carousel-container">
                        <div class="unknown-carousel" id="unknown-carousel">

                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjWTjSdlV16UU3VC4XoDy6OXDk9-Eqc6Slsp4NEzEjlAtG3Ziuhx=w36-h36-p-rp-mo-ba4-br100" 
                                    alt="Carl"/>
                                    <div>
                                        <h4>Carl</h4>
                                        <span class="unknown-date">5 months ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    I don't pretend to know much about ladies wear, Ted, but my wife and her friends are big fans of the colourful, 
                                    chic confections on sale here
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJfYFvWYI8a22x951CXb8dTWR7INVVgkk39mV1PVyisR_zsfQ=w36-h36-p-rp-mo-br100" 
                                    alt="Dolores Moriarty"/>
                                    <div>
                                        <h4>Dolores Moriarty</h4>
                                        <span class="unknown-date">3 weeks ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Lovely ladies
                                    <br>
                                    Very welcoming
                                    <br>
                                    Will be my go to place
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocIoWV2v1CLst71DusFldCldEpXSVByPHLYU-lNuN7HIF6v4vA=w36-h36-p-rp-mo-ba3-br100" 
                                    alt="Helen Parsons"/>
                                    <div>
                                        <h4>Helen Parsons</h4>
                                        <span class="unknown-date">4 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Ordered on line on Sunday received this morning Thank you so much delighted with my purchases. 
                                    I ordered 2 separate items I was sent 2 masks because i paid postage twice what a lovely thought thank you so much .Helen
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjWIt86YbUAqQnyKfM4Jh5lu8tcLiBoQkNJsFHPmXKNWcV399ek=w36-h36-p-rp-mo-ba3-br100" 
                                    alt="Noreen Connolly O'Prey"/>
                                    <div>
                                        <h4>Noreen Connolly O'Prey</h4>
                                        <span class="unknown-date">2 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Very helpful staff. Great choice of outfits for all occasions that are different and very good quality. 
                                    Of course location in Clontarf looking across to the sea fabulous.
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocKpKNQ4zclhhDcL7hTIqGD0WWfxtBpuIUvRiCMZ7rWpxPxD-A=w36-h36-p-rp-mo-ba2-br100" 
                                    alt="Deirdre McDonnell"/>
                                    <div>
                                        <h4>Deirdre McDonnell</h4>
                                        <span class="unknown-date">7 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    I'm not a fan of shopping but love this shop. Great selection of clothes and they always have new pieces coming in. 
                                    Staff are super helpful and very good at working out what you like, what might suit you and putting pieces together.
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocIFW2qQ21Pgl_B-tCn9lt7ZuMU8h6Fg76Fi57IdEW8SsvRAXA=w36-h36-p-rp-mo-ba5-br100" 
                                    alt="una murphy"/>
                                    <div>
                                        <h4>una murphy</h4>
                                        <span class="unknown-date">2 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Lovely assistant and clothes but beyond my reach but good quality for those who can afford.
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjXGq-kAVO5h5bqEtkeQ5QDXQKj0Ag3P1mHVCjx9MXrRWRHiPc6O7Q=w36-h36-p-rp-mo-ba6-br100" 
                                    alt="kerstin abele"/>
                                    <div>
                                        <h4>kerstin abele</h4>
                                        <span class="unknown-date">3 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/e.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>1
                                    Boutique style clothing store. Welcoming staff, providing guidance on sizes, always happy to help. 
                                    Interesting mixture of brands and styles - from modern to elegant to old fashioned. Selling shoes, handbags and some jewelry too.
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocKKwD7Nm3BeBynHFoyGwmwQHysqBUmwt-9_Ad5Qf5kbw3EETA=w36-h36-p-rp-mo-br100" 
                                    alt="Phil Irving"/>
                                    <div>
                                        <h4>Phil Irving</h4>
                                        <span class="unknown-date">2 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Excellent fantastic sales assistant and assistance lovely new stock in Will b back
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjWxqvrqqi4gx9wT0k0HRTHIYjcbvNklmBGxxlXFzcwMA4mBx5I5hw=w36-h36-p-rp-mo-ba5-br100" 
                                    alt="Heather Scott"/>
                                    <div>
                                        <h4>Heather Scott</h4>
                                        <span class="unknown-date">a year ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Cute stuff! Good prices. Nice staff.
                                </p>
                            </div>
                            
                            <div class="unknown-review-card">
                                <div class="unknown-profile">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJdbANW38fL8bE7F0mobx0osdvhMYA1A6_NZqpeTXmZLlmywg=w36-h36-p-rp-mo-ba4-br100" 
                                    alt="Ita Cregan"/>
                                    <div>
                                        <h4>Ita Cregan</h4>
                                        <span class="unknown-date">6 years ago</span>
                                    </div>
                                </div>
                                <div class="unknown-stars">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                    <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy">
                                </div>
                                <p>
                                    Great choice of fashion and style. Good selection of sizes. Shoes, handbags and accessories to finish the look.
                                </p>
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
}