// Define the calculate function
function calculate(num1, num2) {
    // Define the operation callback function
    function operation(num1, num2, callback) {
        return callback(num1, num2); // Call the callback function with num1 and num2
    }

    // Addition operation callback function
    function addition(num1, num2) {
        return num1 + num2;
    }

    // Multiplication operation callback function
    function multiplication(num1, num2) {
        return num1 * num2;
    }

    // Call the operation function with addition callback
    const additionResult = operation(num1, num2, addition);
    console.log(`Addition result: ${additionResult}`);

    // Call the operation function with multiplication callback
    const multiplicationResult = operation(num1, num2, multiplication);
    console.log(`Multiplication result: ${multiplicationResult}`);
}

// Test the calculate function with different numbers
calculate(5, 3); // Output: Addition result: 8, Multiplication result: 15
calculate(10, 2); // Output: Addition result: 12, Multiplication result: 20
