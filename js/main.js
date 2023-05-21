//library Array 

const DEFAULT_DATA = [
    { title: "The Lord of the Rings", author: "Tolkien", pages: 900, status: "READ" },
    {
        title: "Alice in Wonderland",
        author: "Lewis Caroll",
        pages: 750,
        status: "NOT READ",
    },
    { title: "Naruto", author: "Masashi Kishimoto", pages: 1500, status: "READ" },
];

let myLibrary = [];

myLibrary = DEFAULT_DATA;

//the constructor object

function Books(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary() {

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const statusCheckbox = document.querySelector('#status');

    let status = statusCheckbox.checked ? 'READ' : 'NOT READ';
    let book = new Books(title, author, pages, status);
    myLibrary.push(book);
}

const tableBody = document.querySelector('#bookTable');

function displayBooks() {


    tableBody.innerHTML = '';
    let count = 1;

    myLibrary.forEach(book => {
        const htmlBook = `<tr>
        <td>${count++}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
         <td>${book.pages}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class=" d-none d-sm-block delete">DELETE</button></td>
        </tr>`;
        tableBody.insertAdjacentHTML("beforeend", htmlBook);
    });
}


//-----------------------------------------------------------------------------------------

displayBooks();

const form = document.querySelector('form');
const modal = document.querySelector(".modal");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    modal.style.display = "none";
    form.reset();
})

tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('status-button')) {
        const index = e.target.parentNode.parentNode.rowIndex - 1;
        if (myLibrary[index].status === 'read') {
            myLibrary[index].status = 'not read';
        } else {
            myLibrary[index].status = 'read';
        }
        displayBooks();
    }
});


tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const index = e.target.parentNode.parentNode.rowIndex - 1;
        myLibrary.splice(index, 1);
        displayBooks();
    }
});