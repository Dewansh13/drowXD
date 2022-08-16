var mousevent="empty";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="aqua";
width_line=9;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mousevent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    if(mousevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log("last position of X and Y")
    console.log("x=" +last_position_x+"y=" +last_position_y );
    ctx.moveTo(last_position_x,last_position_y);
    console.log("current position of X and Y")
    console.log("x=" +current_mouse_x+"y"+current_mouse_y);
    ctx.lineTo(current_mouse_x,current_mouse_y)
    ctx.stroke();
    }
    last_position_x=current_mouse_x;
    last_position_y=current_mouse_y;
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mousevent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mousevent="mouseup";
}