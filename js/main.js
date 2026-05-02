
import  {calculateTorque,calculateAngle} from "./seesaw.js";
import  {addObjectToSeesaw,rotatePlank,updateInfoPanel} from "./ui.js";

let leftObjects = [];
let rightObjects = [];


document.getElementById("completeSeesaw").addEventListener("click", (event)=> {

   
    const clickX = event.offsetX;

    const side = clickX < 250 ? "left" : "right";


    const distance = Math.abs(clickX - 250);


    const weight = Math.floor(Math.random()*10) + 1;

   
    const color =`hsl(${Math.random() * 360}, 60%, 50%)`;

    const size = 20 + (weight * 5) + "px"; 

    const object = {
    weight:weight,
    distance:distance,
    side:side,
    color:color,
    size:size
    }



    if (side === "left"){

        leftObjects.push(object);

    }else{

        rightObjects.push(object);

    }

    const leftTorque = calculateTorque(leftObjects);

    const rightTorque = calculateTorque(rightObjects);

    const angle = calculateAngle(leftTorque,rightTorque);

    addObjectToSeesaw(object);

    rotatePlank(angle);

    let totalLeftWeight=0;
    let totalRightWeight=0;

    leftObjects.forEach((object)=> {
        totalLeftWeight += object.weight;
    });

    rightObjects.forEach((object)=> {
        totalRightWeight += object.weight;
    });


    updateInfoPanel(totalLeftWeight,totalRightWeight,weight,angle)
});







