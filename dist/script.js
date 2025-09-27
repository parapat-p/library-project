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
function BookInstanceConstructor(bookName, author, page, isRead, id) {
    var _newTarget = this && this instanceof BookInstanceConstructor ? this.constructor : void 0;
    if (!_newTarget) {
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = id;
    this.bookTitle = bookName;
    this.bookAuthor = author;
    this.bookPage = page;
    this.isRead = isRead;
}
function addBookToLibrary() {
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
        console.log(dataForm.get("bookPage"));
    });
}
function createCard(bookObject) {
    var card = document.createElement("div");
    card.className = "card";
    var ATTR_ORDER = [
        "bookTitle",
        "bookAuthor",
        "bookPage",
        "isRead",
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
            case "isRead":
                topic = "Already read";
                break;
            case "uid":
                topic = "Book ID";
                break;
        }
        p.textContent = "".concat(topic, ": ").concat(bookObject[key]);
        card.appendChild(p);
    });
    if (container) {
        console.log("Add card!");
        container.appendChild(card);
    }
}
// Function declaration END
// Initialize function event Start
activateForm();
activateDialogEvent();
// Initialize function event END
