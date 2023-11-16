function readingList(books) {
  let content = document.getElementById('content');
  
            
  for(let i=0; i<books.length; i++){
  let paragraph = document.createElement("p");
  let text = document.createTextNode(books[i].title + " by " + books[i].author);
  paragraph.appendChild(text);
  let li = document.createElement('li');
  li.appendChild(paragraph);
  
  let picture = document.createElement("img");
  picture.setAttribute("src", books[i].bookCoverImage);
  li.appendChild(picture);        
    
       
  if (books[i].alreadyRead === true){
    li.setAttribute('style', 'background-color: green;');
  } else {
    li.setAttribute('style', 'background-color: red;');
  }
  
  document.getElementById("reading-list").appendChild(li);
}
}
  // Write your code here...


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
