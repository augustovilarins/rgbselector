

var input = document.getElementsByClassName("test");
var numberElement = document.getElementsByClassName('textColor')

console.log(numberElement)

function editNumber(index){

    function changeNumber(event){

        if(event.key == 'Enter'){
            console.log('aeeee  ')
            input[index].value = numberElement[index].value
            setColor();
        }
    }

    numberElement[index].addEventListener('keyup',changeNumber);

}



function setColor(){
    var red = input[0].value;
    
    var green = input[1].value;
 
    var blue = input[2].value;

    var display = document.getElementById('display');

    display.style.background = "rgb("+red+","+green+","+blue+")"

}

function setText(){

    var redText = input[0].value;
    
    var greenText = input[1].value;
 
    var blueText = input[2].value;


    numberElement[0].value = redText;
    numberElement[1].value = greenText;
    numberElement[2].value = blueText;

}



for (var i = 0; i < input.length; i++){

    input[i].addEventListener('input',setText);
    
    input[i].addEventListener('input',setColor);

    numberElement[i].addEventListener('click',editNumber(i));

    numberElement[0].value = 128;
    numberElement[1].value = 128;
    numberElement[2].value = 128;

    numberElement[i].disabled = false;

}