background(128, 123, 128);

//how big can the ellipse get (percent of canvas size)
var ellipseSizeFactor = 0.22;

//how small can the ellipse get (pixels)
var ellipseMin = 5;

//how big can the stroke get (pixels)
var maxStroke = 10;

//how small can the stroke get (pixels)
var minStroke = -10;

var strokeThickness = minStroke;
var thicknessModifier = 0.08;


draw = function() {

    
    strokeThickness=strokeThickness+thicknessModifier;
    strokeWeight(strokeThickness);

    if(strokeThickness >= maxStroke || strokeThickness <= minStroke){
        thicknessModifier = thicknessModifier*-1;
    }

    
    //ellipse 1
    stroke(mouseX-mouseY, 200-mouseX, 0);

    fill(0, mouseX-mouseY, 400-mouseY);
    ellipse(400-mouseX, 400-mouseY, mouseX*ellipseSizeFactor+ellipseMin, mouseX*ellipseSizeFactor+ellipseMin);
    
    //ellipse 2
    stroke(400-mouseX, mouseY-mouseX, mouseX-mouseY);

    fill(mouseX, mouseX-mouseY, 400-mouseY);
    ellipse(400-mouseY, 400-mouseX, mouseY*ellipseSizeFactor+ellipseMin, mouseY*ellipseSizeFactor+ellipseMin);
    

};
