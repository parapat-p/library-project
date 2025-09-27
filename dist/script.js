"use strict";
// const declaration START
var myLibrary = [];
var dialog = document.querySelector("dialog");
var addButton = document.querySelector("dialog + button");
var closeButton = document.querySelector("dialog button");
// Type declaration END
// Function declaration START
function Book(bookName, author) {
    var _newTarget = this && this instanceof Book ? this.constructor : void 0;
    if (!_newTarget) {
        throw new TypeError("Please use constructor new to create an Object!");
    }
    this.uid = crypto.randomUUID();
    this.bookTitle = bookName;
    this.bookAuthor = author;
}
function addBookToLibrary() {
}
function activateDialogEvent() {
    if ((addButton === null) || (dialog === null) || (closeButton === null)) {
        throw new TypeError("Please check if dialog modal is correctly decalre in DOM");
    }
    addButton.addEventListener("click", function () {
        dialog.showModal();
    });
    closeButton.addEventListener("click", function () {
        dialog.close();
    });
}
// Function declaration END
activateDialogEvent();
