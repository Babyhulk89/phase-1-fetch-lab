// index.js

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      throw error; // Re-throw the error to propagate it to the caller or test
    });
}

function renderBooks(books) {
  const bookListElement = document.getElementById('bookList');

  // Check if the target element exists before manipulating it
  if (bookListElement) {
    bookListElement.innerHTML = '';

    books.forEach(book => {
      const titleElement = document.createElement('li');
      titleElement.textContent = book.title;
      bookListElement.appendChild(titleElement);
    });
  } else {
    console.error("Element with id 'bookList' not found in the DOM");
  }
}

// Call the fetchBooks function when the script is executed
fetchBooks();
