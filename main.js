var last_pos_x, last_pos_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var color = "blue";
var width_of_line ="1";
var width=screen.width;
var new_width = width - 70 ;
var new_height = screen.height - 300 ;


if (width<992){
    canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);
canvas.addEventListener("touchstart", my_touchstart);
canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {
         console.log("my_touchmove");
         current_pos_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_pos_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        color = document.getElementById("color").value ;
        width_of_line = document.getElementById("width_of_line").value ;
        ctx.moveTo(last_pos_touch_x, last_pos_touch_y);
        ctx.lineTo(current_pos_touch_x, current_pos_touch_y);
        ctx.stroke();

        console.log("Last position of x and y coordinates = ");
        console.log("x = " +  last_pos_touch_x + "y = " +  last_pos_touch_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_pos_touch_x + "y = " + current_pos_touch_y);


        last_pos_touch_x = current_pos_touch_x; 
        last_pos_touch_y = current_pos_touch_y;
    }


function my_touchstart(e)
    {
        console.log("my_touchstart");
        last_pos_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        last_pos_touch_y=e.touches[0].clientY-canvas.offsetTop;
    }

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    if (width>992){
        mouseEvent="mouseDown";
    }
}
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}
function my_mousemove(e){
    current_pos_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.log("my_mousemove");

         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;
         ctx.moveTo(last_pos_x,last_pos_y);
         ctx.lineTo(current_pos_mouse_x,current_pos_mouse_y);
         ctx.stroke();

         console.log("Last position of x and y coordinates = ");
         console.log("x = " +  last_pos_x + "y = " +  last_pos_y);
         console.log("Current position of x and y coordinates = ");
         console.log("x  = " + current_pos_mouse_x + "y = " + current_pos_mouse_y);
        
    } 
    last_pos_x=current_pos_mouse_x;
    last_pos_y=current_pos_mouse_y;
}
