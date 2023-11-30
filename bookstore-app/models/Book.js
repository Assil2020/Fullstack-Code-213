const fs = require("fs").promises;
const path = require("path");

const booksFilePath = path.join(__dirname, "../data/Books.json");

const getBooks = async () => {
  try {
    const booksData = await fs.readFile(booksFilePath, "utf-8");
    if (!booksData.trim()) {
      console.error("Books data is empty.");
      return [];
    }
    return JSON.parse(booksData);
  } catch (error) {
    console.error("Error reading books data:", error);
    return [];
  }
};

const saveBooks = async (books) => {
  try {
    await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2));
  } catch (error) {
    console.error("Error writing books data:", error);
  }
};

const getBooksForUser = async (userId) => {
  try {
    const allBooks = await getBooks();
    const userBooks = allBooks.filter((book) => book.userId === userId);
    return userBooks;
  } catch (error) {
    console.error("Error getting user books:", error);
    return [];
  }
};

const getBookById = async (bookId) => {
  try {
    const allBooks = await getBooks();
    return allBooks.find((book) => book.id === bookId);
  } catch (error) {
    console.error("Error getting book by ID:", error);
    return null;
  }
};

module.exports = { getBooks, saveBooks, getBooksForUser, getBookById };
