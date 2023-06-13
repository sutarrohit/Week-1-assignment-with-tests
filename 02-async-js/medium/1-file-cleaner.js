const fs = require("fs");

const filePath = "./file.txt";

const cleaner = () => {
  // Read data from file
  const fileData = fs.readFileSync(filePath, "utf8");
  const cleanData = fileData.replace(/\s+/g, " ").trim();

  // Write clean data back to file.
  fs.writeFileSync(filePath, cleanData);
};

cleaner();
