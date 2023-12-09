
// PROJECT Section
console.log("PROJECT:\n==========\n");

console.log("Create Class Book:\n==========\n");
class Book{
    constructor(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
 }
}

const bookArray = [];
const theHobbit = new Book("Hobbit", "J.R. Token", false);
const atomicHabbits = new Book("Atomic Habbits", "James Clear", true);
const eloquentJavascript = new Book("Eloquent Javascript", "James Clear", false);
bookArray[0] = theHobbit;
bookArray[1] = atomicHabbits;
bookArray[2] = eloquentJavascript;

const addBookBtn = document.getElementById('addBookBtn');

/* Test
let myBook = new book("atomic Habbits", "James Clear", true)

console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.read);
*/
console.log("Create Class Library:\n==========\n");
class Library{
    constructor(){
        this.books =[
          new Book("Name of the Wind", "Patrick Rothfuss", true),
        ];
    }
    renderLibrary(){
      const tableBody = document.querySelector("#bookTable > tbody");
      tableBody.textContent = '';

      this.books.forEach(book => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const readCell =document.createElement('td');
      
        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        readCell.innerHTML = `<input type= "checkbox" name="read" ${book.read ? 'checked' : ''} disabled/>`;
        row.append(titleCell);
        row.append(authorCell);
        row.append(readCell);
        tableBody.append(row);
    });
   }
   addBook(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const read = document.getElementById('read').value;
    const newBook = new Book(title, author, read);
    console.log(newBook);
    this.books.push(newBook);
    this.renderLibrary();
   }


 
    markRead(checkbox, id){
    for (let i = 0; i < this.book.length; i++){
        if (this.book[i].id == id) {
            this.book[i].read = true;
            checkbox.checked = true;
            checkbox.disabled = true;
        }
    }
  }
  
}

const library = new Library();

    //console.log("addBook section:\n==========\n");
 addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('i added the book');
  library.addBook();
 })


//console.log("addBook section:\n==========\n");



