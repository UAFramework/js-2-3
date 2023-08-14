function readingList(books) {
  const contentDiv = document.getElementById('content');
  const ul = document.getElementById('reading-list');

  books.forEach(book => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');

    p.textContent = `${book.title} by ${book.author}`;
    img.src = book.bookCoverImage;
    img.alt = `${book.title} Cover Image`;

    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);

    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
  });

  contentDiv.appendChild(ul);
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
