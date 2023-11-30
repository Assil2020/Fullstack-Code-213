const fs = require("fs").promises;
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");

const getUsers = async () => {
  try {
    const usersData = await fs.readFile(usersFilePath);
    return JSON.parse(usersData);
  } catch (error) {
    console.error("Error reading users data:", error);
    return [];
  }
};

const saveUsers = async (users) => {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error writing users data:", error);
  }
};

module.exports = { getUsers, saveUsers };
