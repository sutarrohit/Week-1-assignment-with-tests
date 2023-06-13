const fs = require("fs");

const path = "path/to/file.txt";

fs.readFile(path, "utf8", (error, data) => {
  if (error) {
    console.error("Error while reading file:", error);
  } else {
    console.log("File Content : ", data);
  }
});

function expensiveOperation() {
  let sum = 0;
  console.log("Start Expensice operation.........");
  for (let i = 0; i < 9000000000; i++) {
    sum += i;
  }
  console.log("Expensive operation completed.");
}

expensiveOperation();
