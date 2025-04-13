# **String Calculator**

A simple **String Calculator** that performs addition on comma-separated numbers. It supports custom delimiters, multiple delimiters, and handles edge cases like negative numbers. The calculator is implemented using **Test-Driven Development (TDD)** principles.

---

## **Features**
- Handles a string of comma-separated numbers and returns their sum.
- Supports **custom delimiters**, e.g., `"//;\n1;2"` returns `3`.
- Supports **multiple custom delimiters**, e.g., `"//[*][%]\n1*2%3"` returns `6`.
- Throws an exception for **negative numbers**, e.g., `"1,-2,-3"` throws:  
  `"Negative numbers not allowed: -2, -3"`.
- Supports newlines (`\n`) as delimiters.

---

## **Prerequisites**
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org) (v12 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/sam83045/string-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd string-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Usage**
1. Run the tests to ensure everything works as expected:
   ```bash
   npm test
   ```
2. Use the `add` function by importing it in your Node.js application:
   ```javascript
   const { add } = require("./StringCalculator");

   console.log(add("1,2,3")); // Outputs: 6
   console.log(add("//;\n1;2")); // Outputs: 3
   console.log(add("//[*][%]\n1*2%3")); // Outputs: 6
   ```

---

## **Project Structure**
```
string-calculator/
├── string-calculator.js       # Implementation of the String Calculator
├── string-calculator.test.js  # Unit tests for the String Calculator
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

---

## **Testing**
This project uses **Jest** for unit testing. Run the following command to execute tests:
```bash
npx jest
```

---

## **Contributing**
Contributions are welcome! Feel free to submit a pull request to improve the code, add features, or enhance the documentation.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to customize the above as needed, such as adding your name or GitHub repository details. Let me know if you'd like any assistance! 🚀