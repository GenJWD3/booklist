class BookManager {
// Create a constructor with a parameter currentid set to 0
  constructor(currentId = 0) {
    // Initialize an empty array to save the books added 
    this.books = []; 
    // Set the currentId value to currentId
    this.currentId = currentId;
  }
  /*Add new books */
  // Create a method with an object to add a book
  addBook(title, author, language, date) {
    const newBook = {
      id: this.currentId++,
      title: title,
      author: author,
      language: language,
      date: date,
    }
    // push the new book into the array 
    this.books.push(newBook);

    /*Display cards of books*/
    
    // Get the Javascript object new Date, give it the argument newBook.date, and assign it to a variable
    const publishedDate = new Date(newBook.date);
    // Format date to be dd/mm/yyyy
    const formattedDate = publishedDate.getDate() + '/' + (publishedDate.getMonth() + 1) + '/' + publishedDate.getFullYear();

    // Select the empty div from the HTML and assign it to a variable
    const card = document.querySelector('#book-card');
    // Create a new element <ul> in the html file and give it a class
    const list = document.createElement('ul');
    list.className ='list-group';
    // Create an HTML card to display the new book added
    list.innerHTML = `
            <li class="list-group-item mt-2">
              <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                <h5>${newBook.author}</h5>
              </div>
              <div class="d-flex w-100 mb-3 justify-content-between">
                <small>Author: ${newBook.language}</small>
                <small>Language: ${newBook.language}</small>
              </div>
              <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
              <small>Published: ${formattedDate}</small>
              </div>
            </li>
                  `; 
    // Append the new HTML card to the empty div
    card.appendChild(list);
  }
}

