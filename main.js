var y=prompt("choose a color : 1- black , 2- white");
if(y == 1)
{
    document.write('<h1 style="color:black;">'+localStorage.getItem('x var')+'</h1>');
}
else if (y == 2)
{
    document.write('<h1 style="color:white;">'+localStorage.getItem('x var')+'</h1>');
}