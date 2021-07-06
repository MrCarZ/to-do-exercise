const createNewCard = () => {
    const newCard = document.createElement("div");
    newCard.id = "1";
    const newList = document.createElement("ul");
    newList.id = "1";
    newCard.appendChild(newList);

    const currentCard = document.getElementsByTagName("section");
    currentCard[0].appendChild(newCard);
}

const createNewTask = (id) => {
    const List = document.getElementById(id);
    const newTask = document.createElement("li");
    newTask.id = "2";
    List.appendChild(newTask);
    newTask.appendChild(document.createTextNode("kkkk eae men"));
}
