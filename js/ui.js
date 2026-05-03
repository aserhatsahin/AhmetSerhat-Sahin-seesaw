

function addObjectToSeesaw(object){


    const div = document.createElement("div");

    div.className = "seesawObject";
    div.textContent = object.weight + "kg";
    div.style.position = "absolute";

    div.style.backgroundColor = object.color;
    div.style.width = object.size + "px";
    div.style.height = object.size + "px";
    div.style.top = -object.size + "px"; 
                                              


    if(object.side === "left"){

        div.style.left = (250 - object.distance) - (object.size/2) + "px";
    }
    else{

        div.style.left = (250 + object.distance) - (object.size/2) + "px";

    }
   
  
    document.getElementById("seesawPlank").appendChild(div);
}

function rotatePlank(angle){

    document.getElementById("seesawPlank").style.transform = `rotate(${angle}deg)`;

}

function updateInfoPanel(totalLeftWeight, totalRightWeight, nextWeight, angle){

    document.getElementById("leftWeight").querySelector(".infoValue").textContent = `${totalLeftWeight} kg`;

    document.getElementById("rightWeight").querySelector(".infoValue").textContent = `${totalRightWeight} kg`;

    document.getElementById("nextWeight").querySelector(".infoValue").textContent = `${nextWeight}  kg`;

    document.getElementById("tiltAngle").querySelector(".infoValue").textContent = `${angle}` + `°`;

}


export { addObjectToSeesaw, rotatePlank ,updateInfoPanel};