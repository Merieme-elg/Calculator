//------------- variables --------------------//
screen = document.getElementById("screen");



//------------- functions --------------------//


function clearScreen()
{
    screen.value='';
}
function display(c)
{
    screen.value +=c;
}
function calculate()
{
    screen.value=eval(screen.value)
}