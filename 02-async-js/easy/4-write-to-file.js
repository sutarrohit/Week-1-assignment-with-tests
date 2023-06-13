const fs = require("fs");

const filePath = "./path/to/file.txt";
const content = "This is the new content to be written.";

fs.writeFile(filePath, content, (error) => {
  if (error) {
    console.error("Error writing to file:", error);
  } else {
    console.log("File write opration completed successfully.");
  }
});
