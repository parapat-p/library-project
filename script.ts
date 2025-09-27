// Type declaration START
type BookInstance = {
    uid: string;
    bookTitle: string;
    bookAuthor: string;
    bookPage:number;
    isRead:boolean;
};
// Type declaration END


// const declaration START
const myLibrary:BookInstance[] = [];
const dialog = document.getElementById("dialog") as HTMLDialogElement || null;
const addButton = document.getElementById("show-dialog");
const closeButton = dialog?.querySelector("#novalidate-close");
const container = document.querySelector(".container");
const form = document.querySelector("form");
// const declaration END

// Function declaration START

function BookInstanceConstructor(this: BookInstance,bookName:string,author:string,page:number,isRead:boolean ,id:string){
    if(!new.target){
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = id;
    this.bookTitle = bookName;
    this.bookAuthor = author;
    this.bookPage = page;
    this.isRead = isRead;
    
}

function addBookToLibrary(){
    
}

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
    console.log(dataForm.get("bookPage"));
    });
}

function createCard(bookObject:BookInstance){
    const card = document.createElement("div");
    card.className = "card";

    const ATTR_ORDER: (keyof BookInstance)[] = [
        "bookTitle",
        "bookAuthor",
        "bookPage",
        "isRead",
        "uid"
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
                topic = "Already read";
                break;
            case "uid":
                topic = "Book ID";
                break;
        }
        p.textContent = `${topic}: ${bookObject[key]}`;
        card.appendChild(p);
    });

    if(container){
        console.log("Add card!")
        container.appendChild(card);
    }

}


// Function declaration END

// Initialize function event Start
activateForm()
activateDialogEvent();
// Initialize function event END