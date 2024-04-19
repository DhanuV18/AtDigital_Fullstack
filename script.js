let collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
  })
);



function toggleMenu(){
  const menuToggle = document.querySelectorAll('.nav__toggler');
  // const navigation = document.querySelector('.navigation');s
  
  menuToggle.forEach(item =>
    item.addEventListener("click", function () {
      item.classList.toggle("active");
      })
    );
}


// let menuToggle = document.querySelector('.menu');

// menuToggle.addEventListener('click', function() {
//     if (menuToggle.classList.contains('active')) {
//         menuToggle.classList.remove('active');
//     } else {
//         menuToggle.classList.add('active');
//     }
// });