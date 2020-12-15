class BookManager {
  constructor(currentId = 0) {
    this.books = [];
    this.currentId = currentId;
  }

  addBook(title, author, language) {
    const newBook = {
      id: this.currentId++,
      title: title,
      author: author,
      language: language,
    }

    this.books.push(newBook);

    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${newBook.title}</td>
                    <td>${newBook.author}</td>
                    <td>${newBook.language}</td>
                    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                  `; 
    list.appendChild(row);
  }
}

