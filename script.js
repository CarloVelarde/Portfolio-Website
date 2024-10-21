let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');

document.onmousemove = function(e){
   // Moves the cursor
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';

   // Animates background
   body.style.backgroundPositionX = e.pageX/-4 + 'px';
   body.style.backgroundPositionY = e.pageY/-4 + 'px';

   // Add elements/effects to body
   let element = document.createElement('div');
   element.className = 'element';
   body.appendChild(element);

   // Move elements randomly across x and y axis 
   element.style.left = cursor.getBoundingClientRect().x + 'px';
   element.style.top = cursor.getBoundingClientRect().y + 'px';

  // Remove the element after a delay, ensuring they fade out
  setTimeout(function() {
   element.style.opacity = 0;
   element.style.transform = 'scale(0.25)';
   element.addEventListener('transitionend', function() {
      element.remove(); // This ensures the element is removed after it fades out
      });
   }, 100); // Start the removal process shortly after creation
};




// Responsive nav list for smaller devices
menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');

}


