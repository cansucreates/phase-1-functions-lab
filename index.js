function distanceFromHqInBlocks(pickupLoc) {
const scuberHq = 42;
  
if (pickupLoc <= scuberHq) {
return scuberHq - pickupLoc;
}
else {
return pickupLoc - scuberHq;
}
}
  
function distanceFromHqInFeet(pickupLoc) {
const blockLength = 264;
const distanceInBlocks = distanceFromHqInBlocks(pickupLoc);
return distanceInBlocks * blockLength;
}
  
function distanceTravelledInFeet(start, destination) {
const blockLength = 264;
const distanceInBlocks = Math.abs(start - destination);
return distanceInBlocks * blockLength;
}
  
function calculatesFarePrice(start, destination) {
const distance = distanceTravelledInFeet(start, destination);
let fare;
  
if (distance <= 400) {
    fare = 0;
} 
else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
} 
else if (distance <= 2500) {
    fare = 25;
} 
else {
return "cannot travel that far";
}
  
return fare;
}