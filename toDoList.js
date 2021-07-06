const createNewCard = (cardName) => {
    /* Get Value from Input Form */
    const value = document.getElementById(cardName).value;


    /* Create HTML Structure named with the cardName */
    const newCard = document.createElement("div");
    newCard.id = value;
    
    const newList = document.createElement("ul");
    newList.id = value + "-list";
    newCard.appendChild(newList);

    const currentCard = document.getElementsByTagName("section");
    currentCard[0].appendChild(newCard);

    /* Add created Card in Selector */
    const cardSelector = document.getElementById("cardSelector"); 
    const newSelector = document.createElement("option");
    newSelector.value = value;
    newSelector.innerText = value;
    cardSelector.appendChild(newSelector);

    
}

const createNewTask = (task, cardId) => {
    /* Get new task name and selected cardName */  
    const value = document.getElementById(task).value;
    const cardName = document.getElementById(cardId).value;
    
    /* Add List Item -> Checks for cardName existence */
    const List = document.getElementById(cardName);
    
    if(List === null){
        alert("This Card Name Don't Exist.")
    }
    else{
        const newTask = document.createElement("li");
        List.appendChild(newTask);
        newTask.appendChild(document.createTextNode(value));
    }
}
