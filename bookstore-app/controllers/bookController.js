const { getBooks, saveBooks, getBookById } = require("../models/Book");

exports.getShop = async (req, res) => {
  const books = await getBooks();
  res.render("shop", { books });
};

exports.addToCart = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await getBookById(bookId);

    req.session.cart = req.session.cart || [];

    const existingItemIndex = req.session.cart.findIndex(
      (item) => item.bookId === book.id
    );

    if (existingItemIndex !== -1) {
      req.session.cart[existingItemIndex].quantity += 1;
    } else {
      req.session.cart.push({
        bookId: book.id,
        title: book.title,
        author: book.author,
        quantity: 1,
        price: book.price,
      });
    }

    console.log(`Book added to cart: ${bookId}`);
    res.redirect("/buy");
  } catch (error) {
    console.error(`Error adding book to cart: ${error.message}`);
    res.redirect("/error");
  }
};

exports.viewCart = async (req, res) => {
  try {
    const cart = req.session.cart || [];

    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    res.render("cart", { cart, totalPrice });
  } catch (error) {
    console.error(`Error viewing cart: ${error.message}`);
    res.redirect("/error");
  }
};

exports.deleteFromCart = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    if (req.session.cart) {
      req.session.cart = req.session.cart.filter(
        (item) => item.bookId !== bookId
      );
    }

    res.redirect("/buy");
  } catch (error) {
    console.error(`Error deleting book from cart: ${error.message}`);
    res.redirect("/error");
  }
};

exports.confirmPurchase = async (req, res) => {
  try {
    req.session.cart = null;

    res.render("confirmation");
  } catch (error) {
    console.error(`Error confirming purchase: ${error.message}`);
    res.redirect("/error");
  }
};

const { v4: uuidv4 } = require("uuid");

exports.addBook = async (req, res) => {
  console.log("Received POST request to /users/add-book");
  const { title, author, published, genre, description, price } = req.body;

  const bookId = uuidv4();

  const newBook = {
    id: bookId,
    title,
    author,
    published,
    genre,
    description,
    price,
  };

  const books = await getBooks();

  books.push(newBook);

  await saveBooks(books);

  res.redirect("/users/dashboard");
  console.log("Redirecting to /users/dashboard");
};

exports.getEditBookForm = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await getBookById(bookId);
  res.render("edit-book", { book });
};

exports.editBook = async (req, res) => {
  const bookId = req.params.bookId;
  const { title, author, published, genre, description, price } = req.body;

  const books = await getBooks();

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).send("Book not found");
  }

  books[bookIndex] = {
    ...books[bookIndex],
    title,
    author,
    published,
    genre,
    description,
    price,
  };

  await saveBooks(books);

  res.redirect("/users/dashboard");
};

exports.deleteBook = async (req, res) => {
  const bookId = req.params.bookId;

  const books = await getBooks();

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).send("Book not found");
  }

  books.splice(bookIndex, 1);

  await saveBooks(books);

  res.redirect("/users/dashboard");
};

exports.getAddBookForm = (req, res) => {
  res.render("add-book");
};
