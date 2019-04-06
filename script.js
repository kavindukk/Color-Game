function rgbgen(){
    return Math.round(Math.random()*255);
}

var arr = [];
var colors = [];
for (i=0; i<9; i++){
    arr[i]=[];
    for (j=0; j<3; j++){
        arr[i][j]=rgbgen();
    };

    colors[i]='RGB('+arr[i][0]+','+arr[i][1]+','+arr[i][2]+')';
    
};

document.querySelectorAll(".row .box")[0].style.backgroundColor="blue";





