const createNewCard = (cardName) => {
    /* Get Value from Input Form */
    const value = document.getElementById(cardName).value;


    /* Create HTML Structure named with the cardName */
    const newCard = document.createElement("ul");
    newCard.id = value;
    newCard.style.display = "flex";
    
    const listTitle = document.createElement("h2");
    listTitle.innerText = value;
    newCard.appendChild(listTitle);

    newCard.className = 'cardPage';

    const currentCard = document.getElementsByTagName("section");
    currentCard[0].appendChild(newCard);

    /* Add created Card in Selector */
    const cardSelector = document.getElementById("cardSelector"); 
    const newSelector = document.createElement("option");
    newSelector.value = value;
    newSelector.innerText = value;
    cardSelector.appendChild(newSelector);

    const str = JSON.stringify(currentCard[0].childNodes);
    console.log(str);
    console.log(JSON.parse(str));
}

const createNewTask = (task, cardId) => {
    /* Get new task name and selected cardName */  
    const value = document.getElementById(task).value;
    const cardName = document.getElementById(cardId).value;
    
    /* Add List Item -> Checks for cardName existence */
    const List = document.getElementById(cardName);

    console.log(List.childElementCount);
    
    if(List === null){
        alert("This Card Name Don't Exist.")
    }
    else{
        const newDiv = document.createElement("div");
        newDiv.id = value + '-task';
        newDiv.style.order = List.childElementCount; 
        const newTask = document.createElement("li");
        const newRange = document.createElement("input");
        newRange.type = "range";
        newRange.id = value + "-priority";
        newRange.min = 1;
        newRange.max = 5;

        const newDelete = document.createElement("button");
        newDelete.innerText = 'trash'
        newDelete.onclick = () => document.getElementById(newDiv.id).remove();;

        const newUp = document.createElement("button");
        newUp.innerText = 'Up'
        /*
        newUp.onclick = () => {
            if(newDiv.previousElementSibling !== null){
                [newDiv.previousElementSibling.style.order, newDiv.style.order] =  [newDiv.style.order, newDiv.previousElementSibling.style.order];
            }
            console.log(newDiv.previousElementSibling.style);
        }*/

        const newBottom = document.createElement("button");
        newBottom.innerText = 'Bottom'
        /*
        newBottom.onclick = () => {
            if(newDiv.nextElementSibling !== null){
                [newDiv.nextElementSibling.style.order, newDiv.style.order] =  [newDiv.style.order, newDiv.nextElementSibling.style.order];
            }
        }*/

        newDiv.appendChild(newUp);
        newDiv.appendChild(newBottom);
        newDiv.appendChild(newDelete);
        newDiv.appendChild(newTask);
        newDiv.appendChild(newRange);

        List.appendChild(newDiv);
        newTask.appendChild(document.createTextNode(value));
    }
}
