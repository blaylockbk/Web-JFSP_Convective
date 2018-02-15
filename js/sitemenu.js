document.write('\
<nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">\
  <!-- Brand/logo -->\
  <a class="navbar-brand" href="http://www.atmos.utah.edu/">\
    <img src="./images/BlockU.png" alt="logo" style="width:40px;">\
  </a>\
  <a class="navbar-brand" href="https://www.firescience.gov/">\
    <img src="./images/jfsp.png" alt="logo" style="width:40px;">\
  </a>\
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\
    <span class="navbar-toggler-icon"></span>\
  </button>\
  \
  <!-- Links -->\
  <div class="collapse navbar-collapse" id="collapsibleNavbar">\
  <ul class="navbar-nav">\
    <li class="nav-item">\
      <a class="nav-link" href="http://meso1.chpc.utah.edu/jfsp_convective/">Home</a>\
    </li>\
    <li class="nav-item">\
      <a class="nav-link" href="./people.html">Investigators</a>\
    </li>\
    <li class="nav-item dropdown">\
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          External Links\
        </a>\
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
          <a class="dropdown-item" href="http://home.chpc.utah.edu/~u0553130/Brian_Blaylock/hrrr_fires.html"><i class="fas fa-fire-extinguisher"></i> HRRR Fires</a>\
          <a class="dropdown-item" href="https://glff.mesowest.org/"><i class="fas fa-fire"></i> GLFF</a>\
          <a class="dropdown-item" href="https://akff.mesowest.org/"><i class="fas fa-fire"></i> AKFF</a>\
          <div class="dropdown-divider"></div>\
          <a class="dropdown-item" href="#">Something else here</a>\
        </div>\
      </li>\
  </ul>\
  </div>\
</nav>\
')