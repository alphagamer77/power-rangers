var canvas = new fabric.Canvas("myCanvas");

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image("spritesheet.png");
		console.log("r Key Pressed");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("rg-removebg-preview.png");
		console.log("g Key Pressed");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("ivan.png");
		console.log("y Key Pressed");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("shelby.png");
		console.log("p Key Pressed");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("koda-removebg-preview.png");
		console.log("b Key Pressed");
	}
    if(keyPressed == '74')
	{
		block_x = 700;
		new_image("chase-removebg-preview.png");
		console.log("j Key Pressed");
	}
	if(keyPressed == '68')
	{
		block_x = 700;
		new_image("heckyl.png");
		console.log("d Key Pressed");
	}
}
