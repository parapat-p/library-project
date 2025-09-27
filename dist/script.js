"use strict";
// Type declaration END
// const declaration START
let myLibrary = new Map();
const dialog = document.getElementById("dialog") || null;
const addButton = document.getElementById("show-dialog");
const closeButton = dialog?.querySelector("#novalidate-close");
const container = document.querySelector(".container");
const form = document.querySelector("form");
// const declaration END
// Function declaration START
function BookInstanceConstructor(bookName, author, page, id) {
    if (!new.target) {
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = id;
    this.bookTitle = bookName;
    this.bookAuthor = author;
    this.bookPage = page;
    this.isRead = false;
}
function addBookToLibrary(bookObject) {
    createCard(bookObject);
    myLibrary.set(bookObject.uid, bookObject);
}
;
function activateDialogEvent() {
    // if (!addButton || !dialog || !closeButton) {
    if (!addButton || !dialog) {
        throw new TypeError("Not found activateDialogEvent");
    }
    addButton.addEventListener("click", () => {
        dialog.showModal();
    });
    closeButton?.addEventListener("click", submitCloseButton);
    function submitCloseButton(event) {
        event.preventDefault();
        dialog.close();
    }
}
function activateForm() {
    if (!form) {
        throw new TypeError("Not found activateForm");
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dataForm = new FormData(form);
        let id = crypto.randomUUID();
        let newBook = new BookInstanceConstructor(dataForm.get("bookTitle"), dataForm.get("bookAuthor"), dataForm.get("bookPage"), id);
        addBookToLibrary(newBook);
        form.reset();
        dialog.close();
    });
}
function createCard(bookObject) {
    const card = document.createElement("div");
    card.className = "card";
    const ATTR_ORDER = [
        "bookTitle",
        "bookAuthor",
        "bookPage"
    ];
    ATTR_ORDER.forEach((key) => {
        const p = document.createElement("p");
        let topic = "";
        switch (key) {
            case "bookTitle":
                topic = "Book Title";
                break;
            case "bookAuthor":
                topic = "Book Author";
                break;
            case "bookPage":
                topic = "Total pages";
                break;
            case "uid":
                topic = "Book ID";
                break;
        }
        p.textContent = `${topic}: ${bookObject[key]}`;
        card.appendChild(p);
    });
    bookObject.setCardDiv(card);
    card.appendChild(createIsReadButton(bookObject));
    card.appendChild(createRemoveCardButton(bookObject));
    if (container) {
        container.appendChild(card);
    }
}
function createIsReadButton(bookObject) {
    const isReadButton = document.createElement("button");
    isReadButton.textContent = "Try read me!";
    isReadButton.addEventListener("click", () => {
        bookObject.setIsRead(!bookObject.isRead);
        switch (bookObject.isRead) {
            case true:
                isReadButton.className = "activateRead";
                isReadButton.textContent = "You already read this!";
                break;
            case false:
                isReadButton.className = "dectivateRead";
                isReadButton.textContent = "Try read me!";
                break;
        }
    });
    return isReadButton;
}
function createRemoveCardButton(bookObject) {
    const removeCardButton = document.createElement("button");
    removeCardButton.className = "removeCard";
    removeCardButton.textContent = "Remove Book";
    removeCardButton.addEventListener("click", () => removeBook(bookObject));
    return removeCardButton;
}
function removeBook(bookObject) {
    if (container && bookObject.card) {
        container.removeChild(bookObject.card);
        myLibrary.delete(bookObject.uid);
    }
}
// Declare function prototype Start
BookInstanceConstructor.prototype.setCardDiv = function (card) {
    this.card = card;
};
BookInstanceConstructor.prototype.setIsRead = function (isRead) {
    this.isRead = isRead;
};
// Declare function prototype End
// Function declaration END
// Initialize function event Start
activateForm();
activateDialogEvent();
// Initialize function event END
