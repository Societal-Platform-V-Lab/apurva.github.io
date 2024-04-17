const section_footer = ` 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<footer class="footer with-background desktop-footer">
  <div class="container-footer">
    <div class="row">
      <!-- Address (Left-aligned) -->
      <div class="col-sm-4 mb-20 address-container">
        <p class="alt-color">
          <strong class="white">C4EC Foundation</strong><br>
        </p>
        <p class="alt-back">
        # 86 Kumar's 7th Cross Road,<br> 
        4th ‘B’ Block, Koramangala,<br> 
        Bengaluru 560034
        </p>
      </div>
      <!-- Address -->
      <!-- Follow Us On (Centered) -->
      <div class="col-sm-4 mb-20 center" style="margin-top: -0.1rem;">
        <strong><p class="greenfollows">Follow us on</p></strong>
        <ul class="footer-icons">
          <li>
            <a href="https://www.linkedin.com/company/apurva-ai/" target="_blank"
              class="social-icon-container linkedin-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
          <a href="https://twitter.com/apurva_ai" target="_blank" class="social-icon-container twitter-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </a>
          </li>
          <li>
          <a href="https://www.youtube.com/@apurvadotai" target="_blank" class="social-icon-container youtube-icon" >
                <i class="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- Copyright (Right-aligned) -->
      
      <div class="col-sm-4 mb-19 app-promotion">
        <ul>
          <span>
           <li class="alt-back"> Write to us at</li>
            <li><p class="alt-color">
            <strong class="white">Email:<a class="white underline" href="mailto:contact@apurva.ai" target="_blank">contact@apurva.ai</a>
        
            </strong>
          </p></li>
         </span>
        </ul>

      </div>
      </div>
    <div class="row">
      <!-- Copyright -->
      <div class="col-lg-12 col-md-12 text-center">
        <!-- Copyrights -->
        <br>
        <br>
        <div class="white underline">
        <a href="Apurva_Terms.html" target="_blank" style="font-size: 20px;">Terms of Use</a>
        </div>
        <p class="greencopy">&copy; 2024 C4EC Foundation</p>

        <!-- Copyrights -->
        <div class="licensed">
      <p>All content here is licensed under a 
      <a class="white underline" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 <br>International License</a> 
      unless otherwise noted.</p>
      </div>
      </div>
    </div>
  </div>
</footer>



<footer class="footer with-background mobile-footer">
  <div class="container-footer">
    <div class="row">
      <!-- Address (Left-aligned) -->
      <div class="col-sm-6 mb-20 address-container">
        <p class="alt-color">
          <strong class="white">C4EC Foundationn</strong><br>
        </p>
        <p class="alt-back">
        # 86 Kumar's 7th Cross Road,<br> 
        4th ‘B’ Block, Koramangala,<br> 
        Bengaluru 560034<br>
          <br>
          Write to us at<br>
        </p>
        <p class="alt-color">
          <strong class="white">Email: <a class="white underline" href="mailto:contact@apurva.ai" target="_blank">contact@apurva.ai</a></strong>
        </p>
      </div>
      <!-- Address -->
  
      <div class="col-lg-12 col-md-12 text-center">
        <ul class="footer-icons" style="margin-top: 10px;">
            <strong class="green">Follow us on</strong>

            <a  style="margin-left:1rem; ;" href="https://www.linkedin.com/company/apurva-ai/" target="_blank"
            class="social-icon-container linkedin-icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/apurva_ai" target="_blank" class="social-icon-container twitter-icon">
          <!-- Replace the existing <i> tag with the SVG code -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@apurvadotai" target="_blank" class="social-icon-container youtube-icon" >
                <i class="fa fa-youtube"></i>
            </a>
        </ul>
        <br>
        <br>
      </div>
      <!-- Copyright -->
      <div class="col-lg-12 col-md-12 text-center copy">
        <!-- Copyrights -->
        <span class="white underline">
      <a href="Apurva_Terms.html" target="_blank">Terms of Use </a>
      <br>
      <br>
      <br>
      </span>
      <p class="green" style="line-height: 29px;">&copy; 2024 C4EC Foundation</p>
      </div>
      <!-- Copyright -->
      <div class="licensed">
      <br>
      <p>All content here is licensed under a 
      <a class="white underline" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a> 
      unless otherwise noted.</p>
      </div>
      <div>
      <br>
      </div>
   
  </div>
</footer>

`;

document.getElementById("footer").innerHTML = section_footer;
