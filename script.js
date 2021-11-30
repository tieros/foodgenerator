  
 var generator = document.querySelector('#image-data');
 var vegan = document.getElementById('vegan');
 var vegan1 = document.querySelector('#vegandrop1');
 
 var vegan2 = document.querySelector('#vegandrop2');
 
 var vegapp = document.querySelector('#vegapp');
 var veghun = document.querySelector('#veghun');
 var vegfood = document.querySelector('#veganfood');
 
 
 
 
 /*
  document.addEventListener('click', function clicking(event) {
         
         if(event.target.closest('#vegan')){
             vegan1.style.display = 'block';
         } else {
             vegan1.style.display = 'none';
         }
     })
    
     document.addEventListener('click', function clicksecond(event) {
         if(event.target.closest('#vegapp')){
             vegan2.style.display = 'block';
             vegan1.style.display = 'none';
             vegfood.innerHTML = randomvegapp;
 
         } else {
             vegan2.style.display = 'none';
         }
     })
 */
 var secondform = document.getElementById('secondform');
 secondform.style.display = 'none';
 
 
 
 var firstradio = document.querySelector('#vegandiet');
 var app = document.querySelector('#appetizer');
 var hungry = document.querySelector('#hungry');
 var final = document.querySelector('#outcome');
 var finaltext = document.querySelector('#finaltext');
 
 final.style.display = 'none';
 
 
 var secondradio = document.querySelector('#vegetariandiet');
 
 var thirdradio = document.querySelector ('#herbivorediet');
 
 var bye = document.querySelector('#goodbye');
 bye.style.display='none';
 
 let vegapparray = ['Hummus', 'Baba Gannush', 'French Onion Dip', 'White Bean Dip'];
 let randomvegapp = vegapparray[Math.floor(Math.random() * vegapparray.length)];
 
 let veghungryarray = ['Vegetable Paella', 'Spaghetti Squash Burrito Bowls', 'Pinto Posole'];
 let randomveghungry = veghungryarray[Math.floor(Math.random()* veghungryarray.length)];
 
 let veggyapparray = ['Baked Potato Wedges','Garlic Bread','Mediterranean Nachos'];
 let randomveggyapp = veggyapparray[Math.floor(Math.random() * veggyapparray.length)];
 
 let veggyhungryarray = ['Pumpkin Curry', 'Spanish Patties', 'Vegetarian Burger'];
 let randomveggyhungry = veggyhungryarray[Math.floor(Math.random() * veggyhungryarray.length)];
 
 let herbapparray = ['Fried Bacon', 'Meetballs', 'Sweet Potato Bites'];
 let randomherbapp = herbapparray[Math.floor(Math.random()* herbapparray.length)];
 
 let herbhungryarray = ['Curry Chicken', 'Ravioli', 'Roasted Veal'];
 let randomherbhungry = herbhungryarray[Math.floor(Math.random()* herbhungryarray.length)];
 
 
 
 
 
 var start =1;
 var timesRun = 0;
 
 /*function myInterval (){setInterval(function (){
     timesRun += 1;
     if(timesRun === 10){
         clearInterval(interval);
     } else{
        image_show(); 
     }
     
 }, 100); } */
 
 function set_time(){
    setInterval(image_show, 100);
 }
 
 
 function image_show(){
     var image_data;
     if(start ==1){
         image_data ="/vegan-food.png";
     } else if(start==2){
         image_data ="/vegetarian.png";
     } else if(start ==3){
         image_data = "/vegan-burger.png";
     } else if (start == 4) {
         image_data ="/appetizer.png";
     } else if (start === 5) {
         image_data = "/meal.png";
     } else if (start == 6){
         image_data ="/vegan-food.png";
     } else if(start==7){
         image_data ="/vegetarian.png";
     } else if(start ==8){
         image_data = "/vegan-burger.png";
     } else if (start == 9) {
         image_data ="/appetizer.png";
     } else if (start === 10) {
         image_data = "/meal.png";
     } else if (start =11){
         return}
 
     document.querySelector('#i1').src="" + image_data;
     start++; 
     
     };
     
 
     
   
 
 firstradio.addEventListener('click', function(){
    if(firstradio.checked) {
        secondform.style.display = (secondform.style.display == 'none') ? 'flex' : 'none';
        secondform.classList.add('fadein');
           secondform.scrollIntoView({behavior:"smooth", flex:"end"}); 
           if(app.addEventListener('click', function(){
                final.style.display = (final.style.display == 'none')? 'flex' : 'none';
                final.classList.add('fadeinLate');
                image_show();
                set_time();
                finaltext.innerHTML = randomvegapp;
                bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
                bye.scrollIntoView({behavior:"smooth", flex:"end"});
           }));
    } if(hungry.addEventListener('click', function(){
        final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
             image_show(); 
             set_time();
             
             finaltext.innerHTML = randomveghungry;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
    }));
            final.style.display = 'none';
            bye.style.display = 'none';
 });

 
/*  firstradio.onclick = function () {
     if(firstradio.checked) {
     secondform.style.display = (secondform.style.display == 'none') ? 'flex' : 'none';
     secondform.classList.add('fadein');
        secondform.scrollIntoView({behavior:"smooth", flex:"end"}); 
        if(app.onclick = function () {
             final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
             image_show();
             set_time();
             finaltext.innerHTML = randomvegapp;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
             
                 });
 
         }if (hungry.onclick = function () {
             final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
             image_show(); 
             set_time();
             
             finaltext.innerHTML = randomveghungry;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
             
         });
         final.style.display = 'none';
         bye.style.display = 'none';
         
         }; */
     
 secondradio.onclick = function () {
     if(secondradio.checked) {
         secondform.style.display = (secondform.style.display == 'none') ? 'flex' : 'none';
         secondform.classList.add('fadein');
         secondform.scrollIntoView({behavior:"smooth", flex:"end"});
         if(app.onclick = function () {
             final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
             
             set_time();
             image_show(); 
             finaltext.innerHTML = randomveggyapp;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
         });
     }   if (hungry.onclick = function () {
             final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
             
             set_time();
             image_show(); 
             finaltext.innerHTML = randomveggyhungry;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
             
     });
     final.style.display = 'none';
     bye.style.display = 'none';
     
 }
 
 thirdradio.onclick = function () {
     if(thirdradio.checked) {
         secondform.style.display = (secondform.style.display == 'none') ? 'flex' : 'none';
         secondform.classList.add('fadein');
         secondform.scrollIntoView({behavior:"smooth", flex:"end"});
         if(app.onclick = function () {
             final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
             
             set_time();
             image_show(); 
             finaltext.innerHTML = randomherbapp;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
             
         });
     }   if (hungry.onclick = function () {
             final.style.display = (final.style.display == 'none')? 'flex' : 'none';
             final.classList.add('fadeinLate');
           
             set_time();
             image_show(); 
             finaltext.innerHTML = randomherbhungry;
             bye.style.display = (bye.style.display == 'none')? 'flex' : 'none';
             bye.scrollIntoView({behavior:"smooth", flex:"end"});
             
             
     });
     final.style.display = 'none';
     bye.style.display = 'none';
    
 }
 
 
 document.querySelector('#refresh').onclick = function() {
     document.location.reload();
 }
 
    
 
 
 
 
 
