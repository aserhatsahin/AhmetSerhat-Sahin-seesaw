

function saveState(leftObjects, rightObjects){
    localStorage.setItem("leftObjects", JSON.stringify(leftObjects));
    localStorage.setItem("rightObjects", JSON.stringify(rightObjects));
}

 function loadState() {                                                                                               
      const left = localStorage.getItem("leftObjects");     
      const right = localStorage.getItem("rightObjects");
      return {                                                                                                         
          leftObjects: left ? JSON.parse(left) : [],
          rightObjects: right ? JSON.parse(right) : []                                                                 
      };                                                    
  }                                                                                                            
   export{ saveState, loadState };
