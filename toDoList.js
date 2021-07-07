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

const createNewCard = (cardName) => {
    /* Get Value from Input Form */
    
    const value = document.getElementById(cardName).value;
    const cardSelector = document.getElementById("cardSelector");
    const section = document.getElementById("sectionPage");

    /* Create HTML Structure named with the cardName */
    
    const newCard = generateHTMLElement("ul", {"id": value, "style.display": "flex", "className": 'cardPage'});
    const listTitle = generateHTMLElement("h2", {"innerText": value});

    section.appendChild(newCard);
    newCard.appendChild(listTitle);

    /* Add created Card in Selector */
    const newSelector = generateHTMLElement("option", {"value": value, "innerText": value});
    
    cardSelector.appendChild(newSelector);
/*
    const cardsData = JSON.stringify(cardSelector.outerHTML);
    const sectionData= JSON.stringify(section.outerHTML);

    localStorage.setItem("sectionInfo", sectionData);
    localStorage.setItem("cardSelectorInfo", cardsData);
*/  
}

const createNewTask = (task, cardId) => {
    /* Get new task name and selected cardName */  
    const value = document.getElementById(task).value;
    const cardName = document.getElementById(cardId).value;
    const List = document.getElementById(cardName);
   
    /* Add List Item -> Checks for cardName existence */    
    if(List === null){
        alert("This Card Name Don't Exist.")
    }
    else{
        const newTask = generateHTMLElement("li", {"id": List.childElementCount+'-task', "style.order": List.childElementCount, "innerText": value});
        const newDiv = generateHTMLElement("div", {});
        const newRange = generateHTMLElement("input", {"type": "range", "id": value+'-priority', "min":1, "max": 5});
        const newDelete = generateHTMLElement("button", {"className": "trash-button", "innerText": "trash"});
        newDelete.addEventListener('click',() => console.log(newDelete.parentElement.remove()), false)

        const newUp = generateHTMLElement("button", {"innerText": "Up"});
        const newBottom = generateHTMLElement("button", {"innerText": "Bottom"});
        
        List.appendChild(newTask);

        newTask.appendChild(newDiv);
        
        newDiv.appendChild(newBottom);
        newDiv.appendChild(newDelete);
        newDiv.appendChild(newRange);
        
    /*  
        const currentCard = document.getElementsByTagName("section");
        const sectionData= JSON.stringify(currentCard[0].outerHTML);
        localStorage.setItem("sectionInfo", sectionData);
    */
    }
}
