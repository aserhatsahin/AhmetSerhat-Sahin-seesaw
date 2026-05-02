function calculateTorque(objects){
   
let totalTorque=0;

    objects.forEach( (object) => {
       
            totalTorque += object.distance * object.weight;
        
    });

    return totalTorque;

}

function calculateAngle(leftTorque, rightTorque){

    const angle = Math.max(-30, Math.min(30, (rightTorque - leftTorque) / 10));

    return angle;
}

export{calculateTorque,calculateAngle};