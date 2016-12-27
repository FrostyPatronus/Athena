import React from "react"

const NavbarComponent = props => {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        {/* Brand and toggle get grouped for better mobile display */}
        <div class="navbar-header">
          
          <button type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
            
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          
          <a class="navbar-brand" href="#">Athena</a>
          
        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            
            <li><a href="#">Add Assignment</a></li>
            <li><a href="#">Add Classes</a></li>
            <li><a href="#">Add Rubrics</a></li>
            <li><a href="#">Add Students</a></li>

            {/* Dropdown */}
            <li class="dropdown">
              <a href="#"
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                Dropdown
                <span class="caret"></span>
              </a>
              
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                
                <li role="separator" class="divider"></li>
                
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
            
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default NavbarComponent
