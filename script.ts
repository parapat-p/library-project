// const declaration START
const myLibrary:BookInstance[] = [];
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// const declaration END

// Type declaration START
type BookInstance = {
    uid: string;
    bookTitle: string;
    bookAuthor: string;
};

// Type declaration END

// Function declaration START

function Book(this: BookInstance,bookName:string,author:string){
    if(!new.target){
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = crypto.randomUUID();
    this.bookTitle = bookName;
    this.bookAuthor = author;
}

function addBookToLibrary(){
    
}

function activateDialogEvent(){
    if((addButton===null) || (dialog===null) || (closeButton===null)){
        throw new TypeError("Please check if dialog modal is correctly decalre in DOM");
    }
    addButton.addEventListener("click", () => {
        dialog.showModal();
    });
    closeButton.addEventListener("click", () => {
        dialog.close();
    });
}

// Function declaration END




activateDialogEvent();
