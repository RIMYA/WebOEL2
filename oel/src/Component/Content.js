import React from 'react';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="2.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>      
         <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h2 class="text-center mt-4 text-secondary">Know about us</h2>
               </div>
              </div>
             <div class="row">
                <h3 class="text-center mt-4 text-secondary">We believe provide you with best automobile solutions and your dream vehicle.</h3> </div>   
          </div>   
        </section>   

	
    <br>
    </br>
   </div>
    );
  }
  
  export default Content;