const createNewCard = (cardName) => {
    /* Get Value from Input Form */
    const value = document.getElementById(cardName).value;


    /* Create HTML Structure named with the cardName */
    const newCard = document.createElement("div");
    newCard.id = value;
    
    const listTitle = document.createElement("h2");
    listTitle.innerText = value;
    newCard.appendChild(listTitle);


    const newList = document.createElement("ul");
    newList.id = value + "-list";
    newCard.appendChild(newList);
    newCard.className = 'cardPage';

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
        const newDiv = document.createElement("div");
        newDiv.id = value + '-task';
        const newTask = document.createElement("li");
        const newRange = document.createElement("input");
        newRange.type = "range";
        newRange.id = value + "-priority";
        newRange.min = 1;
        newRange.max = 5;

        const newDelete = document.createElement("button");
        newDelete.innerText = 'kkk'
        console.log(newDelete);
        newDelete.onclick = () => document.getElementById(newDiv.id).remove();;

        newDiv.appendChild(newDelete);
        newDiv.appendChild(newTask);
        newDiv.appendChild(newRange);

        List.appendChild(newDiv);
        newTask.appendChild(document.createTextNode(value));
    }
}
