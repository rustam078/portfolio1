/***************************nav bar ************** */

$(document).ready(function() {
	$(".nav_ico").click(function(){
		$(".main_nav").toggleClass("active");
	});
	$(".main_nav").click(function(){
		$(this).removeClass("active");
	});
	$( ".main_nav ul" ).click(function( event ) {
		event.stopImmediatePropagation();
	});	
});




/************************************home js */

function clock(){

    var mid;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    mid=(hour>=12)?"PM":"AM";
   
    if (hour < 12) {  
      document.getElementById("greeting").innerHTML= "GOOD MORNING";  
    } else if (hour < 17) {  
      document.getElementById("greeting").innerHTML= "GOOD AFTERNOON";   
    } else if(hour<20){  
      document.getElementById("greeting").innerHTML= "GOOD EVENING"; 
      
    }
    else{  
        document.getElementById("greeting").innerHTML= "GOOD NIGHT"; 
        
    }

   if(hour==0){
    hour=12;
   }
   if(hour>12){
    hour=hour-12;
   }

   if (minute < 10) {  
    minute = "0" + minute;  
  }  
  if (second < 10) {  
    second = "0" + second;  
  }
  
    document.getElementById("clock").innerHTML=hour+":"+minute+":"+second+" "+mid; 
    var time=setTimeout(function(){
      clock();
    },1000);
 
}
clock();

/************typewriter*********** */

var typed=new Typed(".type",{
    strings:["RUSTAM ALI "," A FULL STACK DEVELOPER"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})




/******************************************************** */

// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 10000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { // Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();



