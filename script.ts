// Type declaration START




// Type declaration END


// const declaration START
let myLibrary = new Map<string,BookInstanceConstructor>();
const dialog = document.getElementById("dialog") as HTMLDialogElement || null;
const addButton = document.getElementById("show-dialog");
const closeButton = dialog?.querySelector("#novalidate-close");
const container = document.querySelector(".container");
const form = document.querySelector("form");
// const declaration END

// Function declaration START



class BookInstanceConstructor {
    uid: string;
    bookTitle: string;
    bookAuthor: string;
    bookPage: number;
    isRead: boolean;
    card:any;


    constructor(bookName: string, author: string, page: number, id: string) {
        this.uid = id;
        this.bookTitle = bookName;
        this.bookAuthor = author;
        this.bookPage = page;
        this.isRead = false;
    }

    set setCardDiv(card:HTMLDivElement){
        this.card = card;
    }

    set setIsRead(isRead:boolean){
        if(!this.card){
            throw new TypeError("No card assigned");
        }
        const isReadText = (this.card).querySelector("p:nth-child(4)");
        if(isReadText){
            isReadText.textContent = `Already read?: ${isRead}`;
    }
    }
}


function addBookToLibrary(bookObject:BookInstanceConstructor){
    createCard(bookObject);
    myLibrary.set(bookObject.uid,bookObject);
};

function activateDialogEvent() {
    // if (!addButton || !dialog || !closeButton) {
    if (!addButton || !dialog ){
        throw new TypeError("Not found activateDialogEvent");
    }

    addButton.addEventListener("click", () => {
        dialog.showModal();
    });

    closeButton?.addEventListener("click",submitCloseButton)
    function submitCloseButton(event:Event){
        event.preventDefault();
        dialog.close();
    }
}

function activateForm(){
    if(!form){
        throw new TypeError("Not found activateForm");
    }
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataForm = new FormData(form);
    let id = crypto.randomUUID();
    let newBook = new (BookInstanceConstructor as any)(dataForm.get("bookTitle"),
                                                    dataForm.get("bookAuthor"),
                                                    dataForm.get("bookPage"),
                                                    id
    );
    addBookToLibrary(newBook);
    form.reset();
    dialog.close();
    });
}

function createCard(bookObject:BookInstanceConstructor){
    const card = document.createElement("div");
    card.className = "card";

    const ATTR_ORDER: (keyof BookInstanceConstructor)[] = [
        "bookTitle",
        "bookAuthor",
        "bookPage",
        "isRead"
    ];
    ATTR_ORDER.forEach((key) => {
        const p = document.createElement("p");
        let topic:string = "";
        switch(key){
            case "bookTitle":
                topic = "Book Title";
                break;
            case "bookAuthor":
                topic = "Book Author";
                break;
            case "bookPage":
                topic = "Total pages";
                break;
            case "isRead":
                topic = "Already read?:";
                break;
        }
        p.textContent = `${topic}: ${bookObject[key]}`;
        card.appendChild(p);
    });
    bookObject.setCardDiv = card;
    card.appendChild(createIsReadButton(bookObject));
    card.appendChild(createRemoveCardButton(bookObject));
    if(container){
        container.appendChild(card);
    }


}

function createIsReadButton(bookObject:BookInstanceConstructor):HTMLButtonElement{
    const isReadButton = document.createElement("button");
    isReadButton.textContent = "Try read me!"
    isReadButton.addEventListener("click",() => {
        bookObject.setIsRead = !bookObject.isRead;
        switch(bookObject.isRead){
            case true:
                isReadButton.className = "activateRead";
                isReadButton.textContent = "You already read this!"
                break;
            case false:
                isReadButton.className = "dectivateRead";
                isReadButton.textContent = "Try read me!";
                break;
        }
    })
    return isReadButton
}

function createRemoveCardButton(bookObject:BookInstanceConstructor):HTMLButtonElement{
    const removeCardButton = document.createElement("button");
    removeCardButton.className = "removeCard";
    removeCardButton.textContent = "Remove Book";
    removeCardButton.addEventListener("click",() =>
        removeBook(bookObject)
    )
    return removeCardButton;
}

function removeBook(bookObject:BookInstanceConstructor){
    if(container && bookObject.card){
        container.removeChild(bookObject.card);
        myLibrary.delete(bookObject.uid);
    }
}

// Declare function prototype Start


// Declare function prototype End


// Function declaration END

// Initialize function event Start
activateForm()
activateDialogEvent();
// Initialize function event END