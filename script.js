var colors=[];
var colorboxes = document.querySelectorAll(".colorbox");
var DisplayColor = document.querySelector("#displaycolor");
var h1=document.querySelector("h1");

// var h1= document.getElementsByTagName("h1");
ColorArryGenerator(6);
var RandomColor = RandomColorPicker();

//Assign Colors Array to Box Background Collor
for (var i=0; i<colorboxes.length; i++){
    colorboxes[i].style.background=colors[i];
}

for(var i=0; i<colorboxes.length; i++){
    colorboxes[i].addEventListener("click",function(){
        if(this.style.background===RandomColor){
            for(var j=0; j<colorboxes.length; j++){
                colorboxes[j].style.background=RandomColor;
            }
            h1.style.background=RandomColor;            
        }
        else{
            this.style.background="black";
        }
        
    });
}

//Assign Random Color to Colors Array
function ColorArryGenerator(num){
    for(var i=0; i<num; i++){
        colors.push(RandomColorGenerator());
    }
}

//Generate Random Color
function RandomColorGenerator(){
    //Random r picker
    var r = Math.floor(Math.random()*256);
    //Random g picker
    var g = Math.floor(Math.random()*256);
    //Random b picker
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")"    
}

//Random Color Picker From Colors Array
function RandomColorPicker(){
    var i =Math.floor(Math.random()*6);
    DisplayColor.textContent=colors[i];
    return colors[i];
}
