
import  {calculateTorque,calculateAngle} from "./seesaw.js";
import  {saveState,loadState} from "./storage.js";
import  {addObjectToSeesaw,rotatePlank,updateInfoPanel,createPreviewObject,movePreview,updatePreview} from "./ui.js";

let leftObjects = [];
let rightObjects = [];
let nextWeight = Math.floor(Math.random()*10) + 1;


let nextSize = 20 + (nextWeight * 5);
let nextColor = `hsl(${Math.random() * 360}, 60%, 50%)`;                                             
let previewDiv = createPreviewObject({ weight: nextWeight, size: nextSize, color: nextColor });

initState();

function initState() {                                                                                               
    const saved = loadState();
    leftObjects = saved.leftObjects;
    rightObjects = saved.rightObjects;

    leftObjects.forEach(obj => addObjectToSeesaw(obj));
    rightObjects.forEach(obj => addObjectToSeesaw(obj));

    const leftTorque = calculateTorque(leftObjects);
    const rightTorque = calculateTorque(rightObjects);
    const angle = calculateAngle(leftTorque, rightTorque);

    rotatePlank(angle);

    const totalLeftWeight = leftObjects.reduce((sum, o) => sum + o.weight, 0);
    const totalRightWeight = rightObjects.reduce((sum, o) => sum + o.weight, 0);

    updateInfoPanel(totalLeftWeight, totalRightWeight, nextWeight, angle);

  }               
function createObject(clickX){
  
    const side = clickX < 250 ? "left" : "right";


    const distance = Math.abs(clickX - 250);

 
    const weight = nextWeight;
    nextWeight = Math.floor(Math.random()*10 ) + 1 ;
                                                                           
                                      
  
    const color = nextColor;
    nextColor = `hsl(${Math.random() * 360}, 60%, 50%)`;
    nextSize = 20 + (nextWeight * 5);            
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

    saveState(leftObjects, rightObjects);
    return { angle, totalLeftWeight, totalRightWeight };
}



function updateUI(object, angle, totalLeft, totalRight  ){

    addObjectToSeesaw(object);

    setTimeout( () => { 

        rotatePlank(angle);

        updateInfoPanel(totalLeft,totalRight,nextWeight,angle)

    
    },600);

  
    updatePreview(previewDiv, nextWeight, nextSize, nextColor);  
}

document.getElementById("completeSeesaw").addEventListener("click", (event)=> {

    const object = createObject(event.offsetX);                                                                       
    const { angle, totalLeftWeight, totalRightWeight } = updateState(object);
    updateUI(object, angle, totalLeftWeight, totalRightWeight);      
    
});


document.getElementById("completeSeesaw").addEventListener("mousemove", (event) => {


        movePreview(previewDiv, event.offsetX, nextSize);    



});




