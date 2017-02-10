// Name Property
// Age Property
// Hunger Value Property
// Happiness Property
// Sleeping Property (boolean)
// Eat Method
// Morph Method
// Go To Sleep Method

var tomagotchi = {
  name: "Tom",
  age: 0,
  hunger: 10, // 1 to 10 scale 10 being hungriest
  happiness: 0, //0 to 10 scale 0 being the least happy
  isSleeping: false,
  currentForm: "Baby",
  life: true,
  
  eat: function(){
    this.hunger -= 3;
    this.happiness += 1;
    hungerMeter.innerHTML = 'Hunger Meter:' + tomagotchi.hunger;
    happinessMeter.innerHTML = 'Happiness Meter:' + tomagotchi.happiness;
  },
  checkMorph: function(){
    if(this.age === 0){
      this.currentForm = "Baby";
    }else if(this.age <= 5){
      this.currentForm = "Kiddo";
    }
  },
  gainAge: function(){
    this.age += 5;
    this.checkDeathByAging();
    this.checkMorph();
    age.innerHTML = 'Age:' + tomagotchi.age
  },
  checkDeathByAging: function(){
    if(this.age > 10){
      this.die();
    }
  },
  die: function(){
    this.life = false;
    console.log("RIP " + this.name + " is Dead");
  }
}

var feed = document.getElementById('feedBtn')
var sleep = document.getElementById('sleepBtn')
var hungerMeter = document.getElementsByTagName('h2')[0]
var happinessMeter = document.getElementsByTagName('h2')[1]
var age = document.getElementsByTagName('h2')[2]
var backgroundNight = document.getElementById('background');


//Aging Interval
setInterval(function(){ tomagotchi.gainAge() }, 20000);

//Eat Button
feed.addEventListener('click', function(e){
    tomagotchi.eat();
})

//Sleep Button
var counter = 0;
sleep.addEventListener('click', function(e){
    counter++
    if(counter % 3 ===0){
    tomagotchi.isSleeping = true;
    tomagotchi.background 
    }
      
})


//Animation
var i = 1
setInterval(function(){
  var divOneHide = document.getElementById(i);
  if(i % 3 === 0){
    i = 1
  }
  else{
    i+=1
  }
  var divTwo = document.getElementById(i);
  divOneHide.classList.add('hidden');
  divTwo.classList.remove('hidden');
 
}, 1000)












