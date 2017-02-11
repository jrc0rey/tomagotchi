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
    this.hunger -= 2;
    if(this.hunger <= 0){
        this.hunger = 0
      }
    this.happiness += 1;
    if(this.happiness >= 11){
      this.happiness = 10
    }
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
    if(this.age >= 20){
      this.die();
      this.age = 20;
    }
  },
  die: function(){
    function myStopFunction() {
    clearInterval(animate);
    var divThree = document.getElementById('3')
    divThree.classList.add('hidden')
    var died = document.getElementById('over')
    died.classList.remove('death')
    feed.disabled = true;
    sleep.disabled = true;
}
myStopFunction();
    
    this.life = false;
    console.log("RIP " + this.name + " is Dead");
  }
}

var feed = document.getElementById('feedBtn')
var sleep = document.getElementById('sleepBtn')
var hungerMeter = document.getElementsByTagName('h2')[0]
var happinessMeter = document.getElementsByTagName('h2')[1]
var age = document.getElementsByTagName('h2')[2]
var counter = 0


//Aging Interval
setInterval(function(){ tomagotchi.gainAge() }, 3000);

//Eat Button
feed.addEventListener('click', function(e){
    tomagotchi.eat();
})

//Sleep Button
sleep.addEventListener('click', function(e){
    counter++
    var body = document.getElementsByTagName('body')[0];    
    if(counter % 2 === 1){
    body.classList.add('body2')
    }
    else {
      body.classList.remove('body2')
    }
      
})


//Animation
var i = 1
var animate = setInterval(function(){
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












