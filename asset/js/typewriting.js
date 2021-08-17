// set some variables
var i = 0;

// H1.innerHTML = "Hi👋,";
var Text = "Hi👋, I'm Ariyibi Baseet";
var speed = 200;

window.onload = function typeWriter()
{
    if(i < Text.length)
    {
        document.querySelector('.text-name').innerHTML += Text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}








