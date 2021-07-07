/*const load = () =>{
    const sectionInfo = localStorage.getItem("sectionInfo");
    const cardsSelectorInfo = localStorage.getItem("cardSelectorInfo");
    const menuBar = document.getElementById("menubar");
    const selectCard = document.getElementById("cardSelector");

    console.log(sectionInfo);

    if(sectionInfo !== null && cardsSelectorInfo !== null){
        menuBar.insertAdjacentHTML('afterend', JSON.parse(sectionInfo));
        selectCard.insertAdjacentHTML('afterbegin', JSON.parse(cardsSelectorInfo));    
    }

    const deleteButtons = document.getElementsByClassName('trash-button');
    
    for(let i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', () => {deleteButtons[i].parentElement.remove()});
    }
}*/

const generateHTMLElement = (tag, atributes) => {
    const newElement = document.createElement(tag);
    const properties = Object.getOwnPropertyNames(atributes);
    properties.map((value) => {newElement[`${value}`] = atributes[`${value}`]});
    return newElement;
};

const sortByPriority = (cardName) => {
    const cardsInfo = JSON.parse(localStorage.getItem("cardsInfo"));
    cardsInfo[`${cardName}`].sort((a, b) => b.priority - a.priority);

    const card = document.getElementById(cardName);
    const tasks = Array.from(card.childNodes);

    tasks.map((value) => {
        value.remove()
    });

    console.log(cardsInfo[`${cardName}`]);
    cardsInfo[`${cardName}`].map((value) => {createNewTask(value.task, cardName, value.priority)});

    localStorage.setItem("cardsInfo", JSON.stringify(cardsInfo));

}

const createNewCard = (cardName) => {
    
    const value = document.getElementById(cardName).value;
    const cardSelector = document.getElementById("cardSelector");
    const section = document.getElementById("sectionPage");

    /* Create HTML Structure named with the cardName */
    const newCard = generateHTMLElement("div", {"id": value, "style.display": "flex", "className": 'cardPage'});
    const newList = generateHTMLElement("ul", {"id": value+"-list", "className": "cardList"});
    const listTitle = generateHTMLElement("h2", {"innerText": value});
    const sortButton = generateHTMLElement("button", {"innerText": "Sort", "onclick": () => sortByPriority(value)});
    
    section.appendChild(newCard);
    section.appendChild(listTitle);
    section.appendChild(sortButton);
    section.appendChild(newList);

    /* Add created Card in Selector */
    const newSelector = generateHTMLElement("option", {"value": value, "innerText": value});
    
    cardSelector.appendChild(newSelector);

    const oldCardInformation = JSON.parse(localStorage.getItem("cardsInfo")); 

    const updatedCardInformation = {...oldCardInformation, [`${value}`]:[]};
    localStorage.setItem("cardsInfo", JSON.stringify(updatedCardInformation));



/*
    const cardsData = JSON.stringify(cardSelector.outerHTML);
    const sectionData= JSON.stringify(section.outerHTML);

    localStorage.setItem("sectionInfo", sectionData);
    localStorage.setItem("cardSelectorInfo", cardsData);
*/  
}

const createNewTask = (task, cardId, priority) => {
    /* Get new task name and selected cardName */  
    const value = task;
    const cardName = cardId;
    const List = document.getElementById(cardName);

    
    /* Add List Item -> Checks for cardName existence */    
    if(List === null){
        alert("This Card Name Doesn't Exist.")
    }
    else{
        const newTask = generateHTMLElement("li", {"id": List.childElementCount+'-task', "style.order": List.childElementCount});
        const newDescription = generateHTMLElement("p", {"innerText": value}); 
        const newRange = generateHTMLElement("input", {"type": "range", "id": value+'-priority', "value": priority ,"min":0, "max": 5, "onchange": () => updatePriority(value+'-priority', cardName)});
        const newDelete = generateHTMLElement("button", {"className": "trash-button", "innerText": "trash"});
        console.log(newRange.id);
        
        List.appendChild(newTask);
        newTask.appendChild(newDescription);
        newTask.appendChild(newRange);
        newTask.appendChild(newDelete);


        newDelete.addEventListener('click',() => console.log(newDelete.parentElement.remove()), false)
        
        let cardsInfo = JSON.parse(localStorage.getItem('cardsInfo'));

        cardsInfo[`${cardName}`].push({"task": value, "priority": newRange.value});
        
        localStorage.setItem('cardsInfo', JSON.stringify(cardsInfo));
    /*  
        const currentCard = document.getElementsByTagName("section");
        const sectionData= JSON.stringify(currentCard[0].outerHTML);
        localStorage.setItem("sectionInfo", sectionData);
    */
    }
}

const updatePriority = (id, cardName) => {
    let cardsInfo = JSON.parse(localStorage.getItem('cardsInfo'));
    const task = document.getElementById(id).previousElementSibling.innerText;
    const priority = document.getElementById(id).value;
    cardsInfo[`${cardName}`].find((value) => checkTask(value, task, priority));
    
    localStorage.setItem('cardsInfo', JSON.stringify(cardsInfo));
}

const checkTask = (value, task, priority) => {
    if (value.task === task) {
        value.priority = priority;
        return true;
    }
    return false;
}