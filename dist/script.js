"use strict";
// const declaration START
var myLibrary = [];
var dialog = document.getElementById("dialog") || null;
var addButton = document.getElementById("show-dialog");
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
    // if (!addButton || !dialog || !closeButton) {
    if (!addButton || !dialog) {
        throw new TypeError("Not found");
    }
    addButton.addEventListener("click", function () {
        dialog.showModal();
    });
    // closeButton.addEventListener("click", () => {
    //     dialog.close();
    // });
}
// Function declaration END
activateDialogEvent();
