//------------- variables --------------------//
var screen = document.getElementById("screen");
var currentValue, preVal; //les valeurs actuelle et l'avant actuelle//
var taille; //taille des valeurs insérer// 
var operations = ["+","-","*","/"];
//------------- functions --------------------//


function clearScreen()
{
    screen.value='';
}

function display(c)
{
    screen.value +=c;
    currentValue = c;
    taille = screen.value.length;
    prevCurVal();
    compare();
}

function calculate()
{
    screen.value=eval(screen.value);
}

function prevCurVal()
{
    preVal=screen.value.substring(taille-2,taille-1);
}

function compare()
{   if(operations.includes(currentValue)&&taille==1){removeNext()}
    if((operations.includes(preVal)) &&
    (operations.includes(currentValue))){
        if(preVal==currentValue)
            {removeNext()}
        else
            {removeBouth()}
    } 
}

function removeNext()
{
    screen.value=screen.value.substring(0,taille-1);

}

function removeBouth()
{
    screen.value=screen.value.substring(0,taille-2)+screen.value.substring(taille-1,taille);

}