function readingList(books) {
  const content = document.querySelector("#content");
  const list = document.createElement("ul");
  content.appendChild(list);

  for (let i = 0; i < books.length; i++) {
    const li = document.createElement("li");
    if (books[i]["alreadyRead"]) {
      li.className = "greenLi";
    } else {
      li.className = "redLi";
    }

    const p = document.createElement("p");
    p.textContent = `${books[i]["title"]} by ${books[i]["author"]}`;

    const img = document.createElement("img");
    img.src = books[i]["bookCoverImage"];

    li.append(p, img);
    list.appendChild(li);
  }

  return content;
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
