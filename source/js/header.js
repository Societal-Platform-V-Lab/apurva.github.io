const section_header = `
  <header class="cursor-light">
    <nav class="navbar navbar-top-default navbar-expand-lg black bottom-nav nav-box-shadow no-animation">
      <div class="container-fluid">
        <a class="logo nav-link" href="index.html">
          <img src="source/img/Apurva-logo-final.png" alt="apurva.ai" title="apurva.ai" class="logo-img" />
        </a>
        <div class="collapse navbar-collapse d-none d-lg-block">
       <ul class="nav navbar-nav">
  <li class="nav-item">
    <a href="Apurva-Experience.html" class="scroll nav-link apurva-experience">Experience Apurva</a>
  </li>
  <li class="nav-item dropdown">
    <a href="about-us.html" class="scroll nav-link apurva-about">About</a>
    <ul class="dropdown-menu">
      <li><a href="Join-us.html" class="scroll nav-link join-us">Join Us</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a href="Blog.html" class="scroll nav-link apurva-library">Blogs</a>
  </li>
</ul>

        </div>
        <div class="menu_bars d-inline-block menu-bars-setting animated-wrap sidemenu_toggle d-block d-lg-none">
          <div class="menu-lines animated-element">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
    <div class="side-menu">
      <div class="quarter-circle">
        <div class="menu_bars2 active" id="btn_sideNavClose">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="inner-wrapper">
        <nav class="side-nav m-0">
          <ul class="navbar-nav flex-lg-row">
            <li class="nav-item">
              <a href="Apurva-Experience.html" class="scroll nav-link apurva-experience-mobile">Experience Apurva</a>
            </li>
            <li class="nav-item">
              <a href="about-us.html" class="scroll nav-link apurva-about-mobile">About</a>
            </li>
            <li class="nav-item">
              <a href="Blog.html" class="scroll nav-link apurva-library-mobile">Blogs</a>
            </li>
            <li class="nav-item">
              <a href="Join-us.html" class="scroll nav-link join-us-mobile">Join Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
`;

document.getElementById("headers").innerHTML = section_header;
