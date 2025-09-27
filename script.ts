// const declaration START
const myLibrary:BookInstance[] = [];
const dialog = document.getElementById("dialog") as HTMLDialogElement || null;
const addButton = document.getElementById("show-dialog");
const closeButton = dialog?.querySelector("#novalidate-close");

// const declaration END

// Type declaration START
type BookInstance = {
    uid: string;
    bookTitle: string;
    bookAuthor: string;
    bookPage:number
};

// Type declaration END

// Function declaration START

function Book(this: BookInstance,bookName:string,author:string,page:number){
    if(!new.target){
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = crypto.randomUUID();
    this.bookTitle = bookName;
    this.bookAuthor = author;
    this.bookPage = page;
}

function addBookToLibrary(){
    
}

function activateDialogEvent() {
    // if (!addButton || !dialog || !closeButton) {
    if (!addButton || !dialog ){
        throw new TypeError("Not found");
    }

    addButton.addEventListener("click", () => {
        dialog.showModal();
    });

    closeButton?.addEventListener("click",submitCloseButton)
    function submitCloseButton(event:Event){
        event.preventDefault();
    }
}


// Function declaration END

// Initialize function event Start

activateDialogEvent();

// Initialize function event END