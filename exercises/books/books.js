/**
 * Write an API UI
 *
 * Tasks:
 * 1. Download data from an API (details below)
 * 2. Output the data in a human-readable format
 *
 * API documentation:
 *
 * GET https://books.com/api/books
 * Response: array of Book objects
 *
 * Book:
 * title (string)
 * author (string)
 * length (int - seconds) # only if audiobook is available
 * cover (string - image url)
 */

class Book {
  async fetchBooks () {
    const response = await fetch('https://books.com/api/books');
    const books = response.json().book?.result;

    if (!books || !books.length) {
      return;
    }

    let bookDescription = '';
    const promises = [];

    // loop over book objects and add to string
    books.forEach((book) => {
        const { id } = book;
        const bookDetails = this.fetchBookDetails(id);
        promises.push(bookDetails)
    });

    const allBookDetails = await Promise.all(promises);

    // TODO: Use the data

    const bookInfo = `
      This book is called ${title}.
      It was written by ${author}.
      The cover can be found at ${cover}.
    `;

    if (length) {
      bookInfo += `The audiobook is ${length} in duration`;
    }

    bookDescription += bookInfo;

    return bookDescription;
  }

  async fetchBookDetails(id) {
    const response = await fetch(`https://books.com/api/books/${id}`)
    const bookDetails = response.json().book?.details;
    return bookDetails; // { publisher: 'xyz' }
  }
}

class BookController {
  constructor() {
    this.bookData = '';
  }

  async loadBooks() {
    this.bookData = await Book.fetchBooks();
  }
}
