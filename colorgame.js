/**var colors = [
              "rgb(255, 2, 148)",
              "rgb(255, 255, 0)",
              "rgb(0, 212, 0)",
              "rgb(0, 0, 100)",
              "rgb(100, 0, 200)",
              "rgb(240, 100, 100)" 
              ];*/
var numberofSquares = 6;
var colors = generateRandomColors(numberofSquares);              
var squares=document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");       //for changing the displyay the color in  bracket RGB(, ,)
colorDisplay.textContent = pickcolor();
var messagedisplay = document.querySelector("#message");          //for displaying message Try Again or Correct
var pickedcolor = pickcolor();                                    //for picking a random color
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) 
{
//adding colors to squares
	squares[i].style.background = colors[i];
	// add click listeners
squares[i].addEventListener("click",function()
 {
	
	if(this.style.background === pickedcolor)
		{
	       messagedisplay.textContent = "Correct";
	       newcolors.textContent = "PLAY AGAIN";
	       //changing colors of all to correct
	       changecolor(pickedcolor);  
	       h1.style.background = pickedcolor;                             
        }
	else
	{
		this.style.backgroundColor = "#232323";
	    messagedisplay.textContent = "Try Again";
    }
 });

}

function changecolor(color){
	//loop through all square
	//change color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	} 
}
//picking a random color but from the array
function pickcolor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
//now we will randomize the array with six different colors
function generateRandomColors(num)
{
	var arr = [];                                       //generate an array
for (var i = 0; i < num; i++)                           //add num random colors to array
{ 
     arr.push(randomcolor())
}
return arr;
}                                             //return array
//function for random color
function randomcolor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
    return	"rgb(" + r + ", " + g + ", " + b + ")";
}
//now designing the stripe click of NEW COLORS and Easy HArd buttons
var newcolors = document.querySelector("#reset");
newcolors.addEventListener("click",function(){
	//generate colors 
	colors = generateRandomColors(numberofSquares);
	//pick a color from that
	pickedcolor = pickcolor(); 
	//chamge colordisplay to match pickedcolor
	colorDisplay.textContent = pickedcolor;
	this.textContent = "NEW COLORS"
	messagedisplay.textContent= "";
	for (var i = 0; i < squares.length; i++)
	 {
		squares[i].style.background = colors[i]
			}
h1.style.backgroundColor = "steelblue";
	
});
//now Easy and HArd modes and make look nice
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberofSquares = 3
	colors=generateRandomColors(numberofSquares);
	pickedcolor=pickcolor();
	colorDisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
	if (colors[i])
	squares[i].style.backgroundColor = colors[i];
else
	squares[i].style.display = "none";
}
})

hardbtn.addEventListener("click",function(){
	
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberofSquares = 6
colors=generateRandomColors(numberofSquares);
	pickedcolor=pickcolor();
	colorDisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
}
})
 //now problem is when we click easy we get 3 colors but on clicking new colors it shows 3 colors on screen but its 6 generated to tackle that
 //var numberofSquares = 6
//we pu numberofsquares =6 in hardbtn =3 in easybtn and the variableitself in reset
//after this the styling effects  h1 span rounded corners and fading animation coloring spacing and all.
//header modified now styling the buttons removing border of buttons fitting to stripe  spacing for message etc
//now hover effect mouseover//using css
var button = document.querySelectorAll(".btnhover");
button.addEventListener("mouseover",function()
{                                                   //i have a problem cant use style(it is for individual items) but how do i use cassList here
	button.style.backgroundColor = "steelblue";
})
//after this fading effect of hovering out //that too using transition prop. in css
//now move onto rounded corners border-radius