import React from 'react';



function Header() {
  return (
    <section class="navbar-dark bg-danger header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">AutoShop</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                
                  <li class="nav-item">
                    <a class="nav-link " href="#about">Home<span class="sr-only">(current)</span></a>
                  </li>
                </ul>
                
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header;
