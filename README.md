HNGi8 Stage 2 task
==================================================================================
link to the live preview 👇👇👇👇👇👇👇👇👇👇
https://ariybi-resume-hngi8-stage-two-task.netlify.app/

link to the git repository 👇👇👇👇👇👇👇👇👇👇
https://github.com/Ariyibi-Baseet/ariybi.resume

Program to print my name on the landing page can be found inside asset folder. check this path 👇👇👇👇👇
asset/js/typewriting.js

code snippet: 👇👇👇👇👇👇👇👇👇👇
--------------------------------------------------------------------------------------------
var i = 0;

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
--------------------------------------------------------------------------------------------------
