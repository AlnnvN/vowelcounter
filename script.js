const input = document.getElementById("text-area");

input.addEventListener('keyup',autoResize);
input.addEventListener('keydown',autoResize);

function autoResize()
{
    input.style.height = "0px";
    let scheight = input.scrollHeight;
    input.style.height = scheight+"px";
    console.log(scheight);
    console.log(input.style.height);
}