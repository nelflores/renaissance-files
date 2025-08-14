  document.addEventListener('DOMContentLoaded', () => {
    // Change this to your preferred target container
    const target = document.getElementsByClassName('ins-tiles--main')[0];
    // Prevent duplicate injection
    if (document.getElementById('footer-links')) return;

    const html = `
    <div class="footer-test">
        <div id="footer-links" class="footer-links" aria-label="Footer links">
            <div class="column">
            <h3>Shop</h3>
            <ul>
                <li><a href="#">All Clothing</a></li>
                <li><a href="#">Clothing Types</a></li>
                <li><a href="#">Browse Brands</a></li>
                <li><a href="#">Size Guide</a></li>
            </ul>
            </div>

            <div class="column">
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

            <div class="column">
            <h3>Locations</h3>
            <ul class="locations">
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

    target.insertAdjacentHTML('beforeend', html);
  });