const myLib = [
  new books(
    "Greenlights",
    "Life notes on Mathew Mcchongehey",
    "Mathew Mcchonhey",
    "322",
    true
  ),
  new books(
    "1984",
    "The story follows Winston Smith, who secretly rebels against the oppressive system, ultimately facing dire consequences for his quest for truth and personal autonomy.",
    "George Orwell",
    "32",
    true
  ),
  new books(
    "1984",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero ante, facilisis at dapibus a, blandit ac ante. Morbi consectetur nisi et augue mollis, in lobortis orci lobortis. Vestibulum faucibus dui erat, at accumsan quam volutpat quis. Aliquam erat volutpat. Nunc sit amet ornare erat. Cras at nulla laoreet, bibendum quam sit amet, dapibus sapien. Mauris nulla risus, eleifend at feugiat vel, congue ac nisi. Aliquam erat volutpat. Nullam a ipsum id nunc dignissim vehicula. Maecenas a rutrum neque. Nullam efficitur interdum turpis eget varius. Etiam ut ligula urna. Ut accumsan augue vel ex ultric",
    "George Orwell",
    "32",
    true
  ),
];


function books(name, description, author, pages, readStatus) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function bookStatus(status) {
    return status ? "Read" : "Not Read";
}
  
function changebookStatus(bookStatus) {
return !bookStatus;
}

function addBookToLibrary(book) {
  myLib.push(book);
}


function displayBooksInLib() {
  let libraryContainer = document.querySelector(".library-container");
  libraryContainer.textContent = "";
  myLib.forEach((book) => {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("card");

    const bookInnerContainer = document.createElement("div");
    bookContainer.classList.add("card-body");
    bookContainer.appendChild(bookInnerContainer);

    const readStatus = document.createElement("h6");
    readStatus.textContent = bookStatus(book.read);
    readStatus.classList.add("float-end");
    bookInnerContainer.appendChild(readStatus);

    const bookName = document.createElement("h5");
    bookName.textContent = book.name;
    bookName.classList.add("card-title");
    bookInnerContainer.appendChild(bookName);

    const bookDescription = document.createElement("p");
    bookDescription.textContent = book.description;
    bookDescription.classList.add("card-text");
    bookDescription.classList.add("description-body");
    bookInnerContainer.appendChild(bookDescription);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add("card-text");
    bookInnerContainer.appendChild(bookAuthor);

    const noOfPages = document.createElement("p");
    noOfPages.textContent = `${book.pages} pages `;
    bookName.classList.add("card-text");
    bookInnerContainer.appendChild(noOfPages);

    const readBtn = document.createElement("a");
    readBtn.textContent = book.read ? "Not Read" : "Read";
    readBtn.classList.add("btn");
    readBtn.classList.add("btn-success");
    readBtn.addEventListener("click", function () {
      book.read = !book.read;
      displayBooksInLib();
    });
    bookInnerContainer.appendChild(readBtn);

    libraryContainer.appendChild(bookContainer);
  });
}

displayBooksInLib();

const submit = document.getElementById('addNewBookBtn');

submit.addEventListener('click', function(){
    const form = document.getElementById('form');
    const readStatus = document.getElementById('bookReadStatus').value;
    const name = document.getElementById('book_name').value;
    const description = document.getElementById('book_description').value;
    const author = document.getElementById('author').value;
    const noOfPages = document.getElementById('no_of_pages').value;

   const payload = new books(name,description,author,noOfPages,readStatus);

    addBookToLibrary(payload);
    displayBooksInLib();
})
