

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

function createPreviewObject(object){
    const div = document.createElement("div");

    div.className = "previewObject";

    div.style.borderRadius = "50%";

    div.textContent = object.weight + "kg";
    div.style.position = "absolute";

    div.style.backgroundColor = object.color;
    div.style.width = object.size + "px";
    div.style.height = object.size + "px";
    div.style.top = -object.size + "px"; 

    div.style.opacity = "0.4";


    document.getElementById("completeSeesaw").appendChild(div);
    return div;
}


function movePreview(previewDiv, clickX, size){

    previewDiv.style.left = clickX - (size/2) + "px";
    previewDiv.style.top = (90 - size) + "px";
}

 function updatePreview(previewDiv, weight, size, color) {                                                            
      previewDiv.textContent = weight + "kg";               
      previewDiv.style.width = size + "px";                                                                            
      previewDiv.style.height = size + "px";
      previewDiv.style.backgroundColor = color;                                                                        
      previewDiv.style.top = (90 - size) + "px";            
  }         

export { addObjectToSeesaw, rotatePlank ,updateInfoPanel,createPreviewObject,movePreview,updatePreview};