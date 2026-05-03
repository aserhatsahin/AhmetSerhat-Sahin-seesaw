
import  {calculateTorque,calculateAngle} from "./seesaw.js";
import  {addObjectToSeesaw,rotatePlank,updateInfoPanel} from "./ui.js";

let leftObjects = [];
let rightObjects = [];
let nextWeight = Math.floor(Math.random()*10) + 1;


function createObject(clickX){
  
    const side = clickX < 250 ? "left" : "right";


    const distance = Math.abs(clickX - 250);

 
    const weight = nextWeight;
    nextWeight = Math.floor(Math.random()*10 ) + 1 ;

   
    const color =`hsl(${Math.random() * 360}, 60%, 50%)`;

    const size = 20 + (weight * 5); 
        
    const object = {
    weight:weight,
    distance:distance,
    side:side,
    color:color,
    size:size
    }

    return object;
}

function updateState(object){

        // console.log(object.size);  

    if (object.side === "left"){

        leftObjects.push(object);

    }else{

        rightObjects.push(object);
    }
    let totalLeftWeight=0;
    let totalRightWeight=0;

    leftObjects.forEach((object)=> {
        totalLeftWeight += object.weight;
    });

    rightObjects.forEach((object)=> {
        totalRightWeight += object.weight;
    });

    const leftTorque = calculateTorque(leftObjects);

    const rightTorque = calculateTorque(rightObjects);

    const angle = calculateAngle(leftTorque,rightTorque);

    return { angle, totalLeftWeight, totalRightWeight };
}


function updateUI(object, angle, totalLeft, totalRight  ){

    addObjectToSeesaw(object);

    rotatePlank(angle);

    updateInfoPanel(totalLeft,totalRight,nextWeight,angle)

}

document.getElementById("completeSeesaw").addEventListener("click", (event)=> {

    
      const object = createObject(event.offsetX);                                                                            
      const { angle, totalLeftWeight, totalRightWeight } = updateState(object);
      updateUI(object, angle, totalLeftWeight, totalRightWeight);      
    
});







