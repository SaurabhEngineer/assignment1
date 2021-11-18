let cylinder = {
    "height": 28, "radious":7 
}

// function to find volume of cylinder

function volumeOfCylinder(height, radious) {
    
    return (22 / 7) * radious * radious * height;      //formula to find volume of Cylinder 2*(radious)*(radious)*(height)
}

// function to find volume of cylinder

function surfaceAreaOfCylinder(height, radious) {
   return (2 * (22 / 7) * radious * height) + (2 * (22 / 7) * radious * radious); //formula to find surface area of cylinder 2*(22/7)*(radious)*(height) + 2*(22/7)*(radious)*(radious);
}

var volume = volumeOfCylinder(cylinder.height, cylinder.radious);    // function call volumeOfCylinder and store it in a variable volume
var surfaceArea = surfaceAreaOfCylinder(cylinder.height, cylinder.radious);   // function call surfaceAreaOfCylinder and store it in a variable surfaceArea
console.log(volume,surfaceArea);  // displaying the values 