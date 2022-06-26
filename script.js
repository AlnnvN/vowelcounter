const input = document.getElementById("text-area");
const button = document.getElementById("btn");

input.addEventListener('keyup',autoResize);
input.addEventListener('keydown',autoResize);
button.addEventListener('click',guess)

var vowels = ['a', 'e', 'i', 'o', 'u'];


function guess(){
    let counter = 0;
    for (let i = 0; i < input.value.length; i++) {
        for (let n = 0; n < vowels.length; n++) {
            if(input.value[i]===vowels[n]){
                counter +=1;
            }        
        }
    }

    alert("The amount of vowels is: " + counter);
}

function autoResize()
{
    input.style.height = "0px";
    let scheight = input.scrollHeight;
    input.style.height = scheight+"px";
}