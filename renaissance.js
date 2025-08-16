document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementsByClassName('ins-tiles--main')[0];
    if (document.getElementById('unknown-footer-links')) return;
    
    const html = `
          <iframe 
            id="reviewsFrame"
            src="https://nel.allfashiongloves.tech/reviews/"
            style="border:none; outline:none; width:100%; background:transparent;" 
            scrolling="no" 
            loading="lazy">
        </iframe>
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
    
        <div id="unknown-payment-section-wrapper" class="unknown-payment-section-wrapper">
            <div id="unknown-payment-section" class="unknown-payment-section">
                <div>
                    <div class="unknown-payment-icons">
                        <img src="https://renaissance-files.pages.dev/Images/american express.png" />
                        <img src="https://renaissance-files.pages.dev/Images/apple-pay.jpg" />
                        <img src="https://renaissance-files.pages.dev/Images/google pay.jpg" />
                        <img src="https://renaissance-files.pages.dev/Images/maestro.png" />
                        <img src="https://renaissance-files.pages.dev/Images/mastercard.jpg" />
                        <img src="https://renaissance-files.pages.dev/Images/paypal.jpg" /> 
                        <img src="https://renaissance-files.pages.dev/Images/unionpay.jpg" />
                        <img src="https://renaissance-files.pages.dev/Images/visa.jpg" />
                    </div>
                    
                    <div class="unknown-ratings">
                        <div class="unknown-rating">
                            <a href="https://www.google.com/maps/place/Renaissance+Boutique+Clontarf/@53.3626349,-6.2201716,17z/data=!3m1!4b1!4m10!1m2!2m1!1sWomen's+clothing+store!3m6!1s0x48670e548c2b2a71:0x5237d3799c9eb5a0!8m2!3d53.3626317!4d-6.2179829!9m1!1b1" target="_blank" rel="noopener noreferrer">
                                <img src="data:image/png;base64,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" />
                            </a>
                        </div>
                        <div class="unknown-rating">
                            <a href="https://www.facebook.com/pg/renaissanceboutique/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">
                                <img src="data:image/png;base64,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" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="unknown-social-icons">
                    <a href="https://facebook.com/renaissanceboutique" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="unknown-icon">
                    </a>
                    <a href="http://instagram.com/renaissanceboutiques" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="unknown-icon">
                    </a>
                </div>
            </div>
            <div class="unknown-copyright">
                © 2025, Renaissance Boutiques Ireland
            </div>
        </div>
    `;
    
    target.insertAdjacentHTML('beforeend', html);

    
    // Listen for messages from iframe
    window.addEventListener("message", function(event) {
      if (event.data.iframeHeight) {
        var iframe = document.getElementById("reviewsFrame");
        if (iframe) {
          iframe.style.height = event.data.iframeHeight + "px";
        }
      }
    });
});