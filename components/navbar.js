class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="">
      <div class="navbar navbar-default visible-xs">
        <button type="button" class="navbar-toggle collapsed">
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        


        <a href="#" style="align-items: center; position: absolute; left: 50%; transform: translateX(-50%);"><img style="height: 50px" class="img-responsive site-logo" alt="" src="./assets/logo-blorki.svg"></a>
        <p style="width: calc(100vw - 80px);" class="navbar-brand"> Kunststudent | UI-Designer | Hobby-coder | Stripfanaat </p>
    
      </div>
    
      <nav class="sidebar">
        <div class="navbar-collapse" id="navbar-collapse">
          <div class="site-header hidden-xs">
              <a class="site-brand" href="#" title="">
                <img class="img-responsive site-logo" alt="" src="./assets/logo-blorki.svg">
              </a>
            <p>Kunststudent <br> UI-Designer <br> Hobby-coder <br> Stripfanaat</p>
            
          </div>
          <ul class="nav">
    <li><a href="index.html">Kunstportfolio</a></li>
    <li><a href="sites.html">Siteportfolio</a></li>
    <li><a href="https://www.youtube.com/watch?v=Xc7IlJvHIcQ&list=PLY3A6SqGwlMOCAhy7Ru8FAqnpr130mf8P">Lucien Fenaux - Filmpjes</a></li>    
    <li><a href="https://pclover2.github.io/Clock">Klok</a></li>
    <li><a href="https://pclover2.github.io/Flipper">Flipper - V2 Match</a></li>
    <li><a href="https://pclover2.github.io/Familie.html">Stamboom</a></li>

    
          </ul>
    
          <nav class="nav-footer">
<p class="nav-footer-social-buttons">
    <a class="fa-icon" href="https://www.instagram.com/design_sander/" title="Instagram">
        <i class="fa-brands fa-instagram"></i>
    </a>
    <a class="fa-icon" href="https://github.com/PcLover2" title="GitHub">
        <i class="fa-brands fa-github"></i>
    </a>
    <a class="fa-icon" href="https://www.figma.com/@pclover2" title="Figma">
        <i class="fa-brands fa-figma"></i>
    </a>
    <a class="fa-icon" href="https://www.youtube.com/@blorki/videos" title="YouTube">
        <i class="fa-brands fa-youtube"></i>
    </a>
    <a class="fa-icon" href="https://www.getekendereep.com/profile/9328-blorki/" title="Getekende Reep">
<i class="fa-solid fa-pen-nib"></i>    </a>
    <a class="fa-icon" href="https://www.reddit.com/user/PcLover2/" title="Reddit">
<i class="fa-brands fa-reddit-alien"></i>    </a>
</p>

            <p>© Blorki</p>
          </nav>  
        </div> 
      </nav>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  