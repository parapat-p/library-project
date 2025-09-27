"use strict";
// Type declaration END
// const declaration START
var myLibrary = [];
var dialog = document.getElementById("dialog") || null;
var addButton = document.getElementById("show-dialog");
var closeButton = dialog === null || dialog === void 0 ? void 0 : dialog.querySelector("#novalidate-close");
var container = document.querySelector(".container");
var form = document.querySelector("form");
// const declaration END
// Function declaration START
function BookInstanceConstructor(bookName, author, page, id) {
    var _newTarget = this && this instanceof BookInstanceConstructor ? this.constructor : void 0;
    if (!_newTarget) {
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = id;
    this.bookTitle = bookName;
    this.bookAuthor = author;
    this.bookPage = page;
    this.isRead = false;
}
function addBookToLibrary(book) {
    createCard(book);
    myLibrary.push(book);
}
function activateDialogEvent() {
    // if (!addButton || !dialog || !closeButton) {
    if (!addButton || !dialog) {
        throw new TypeError("Not found activateDialogEvent");
    }
    addButton.addEventListener("click", function () {
        dialog.showModal();
    });
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", submitCloseButton);
    function submitCloseButton(event) {
        event.preventDefault();
        dialog.close();
    }
}
function activateForm() {
    if (!form) {
        throw new TypeError("Not found activateForm");
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var dataForm = new FormData(form);
        var id = crypto.randomUUID();
        var newBook = new BookInstanceConstructor(dataForm.get("bookTitle"), dataForm.get("bookAuthor"), dataForm.get("bookPage"), id);
        addBookToLibrary(newBook);
        form.reset();
        dialog.close();
    });
}
function createCard(bookObject) {
    var card = document.createElement("div");
    card.className = "card";
    var ATTR_ORDER = [
        "bookTitle",
        "bookAuthor",
        "bookPage",
        "uid"
    ];
    ATTR_ORDER.forEach(function (key) {
        var p = document.createElement("p");
        var topic = "";
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
        p.textContent = "".concat(topic, ": ").concat(bookObject[key]);
        card.appendChild(p);
    });
    var isReadButton = document.createElement("button");
    isReadButton.textContent = "Try read me!";
    isReadButton.addEventListener("click", function () {
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
    card.appendChild(isReadButton);
    if (container) {
        console.log("Add card!");
        container.appendChild(card);
    }
    bookObject.setCardDiv(card);
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
