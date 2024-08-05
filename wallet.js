let currentBalance = parseFloat(localStorage.getItem("walletBalance")) || 10;
console.log("Initial balance from localStorage:", currentBalance);

// Update balance display
function updateBalanceDisplay() {
    const balanceElement = document.getElementById("currentBalance");
    balanceElement.textContent = currentBalance.toFixed(2); 
}
function validateCode() {
    const code = document.getElementById("codeInput").value;

    // Check if the code has exactly 16 characters
    if (code.length !== 16) {
        alert("Code must be 16 characters long.");
        return;
    }

    // Check the first character
    if (code[0] !== "C") {
        alert("First character must be 'C'.");
        return;
    }

    // Check the next 3 characters
    const validPrefixes = ["005", "020", "050", "099"];
    const prefix = code.substring(1, 4);
    if (!validPrefixes.includes(prefix)) {
        alert("Invalid Code.");
        return;
    }

    // Update wallet balance based on prefix
    switch (prefix) {
        case "005":
            addToBalance(5);
            break;
        case "020":
            addToBalance(20);
            break;
        case "050":
            addToBalance(50);
            break;
        case "099":
            addToBalance(99);
            break;
    }

    // Update balance display
    updateBalanceDisplay();
    alert(`Wallet topped up! Current balance: $${currentBalance.toFixed(2)}`);
}

function updateBalanceDisplay() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
}

function addToBalance(amount) {
    currentBalance += amount;
    updateBalanceDisplay();
}

function subtractFromBalance(amount) {
    if (currentBalance >= amount) {
        currentBalance -= amount;
        updateBalanceDisplay();
    } else {
        alert("Insufficient funds!");
    }
}

    // Initialize wallet balance from local storage (if available)

    // Rest of your existing code (validateCode, addToBalance, etc.)

    // Update balance display
    function updateBalanceDisplay() {
        const balanceElement = document.getElementById("balance");
        balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
    }
  // Initialize the balance
  // Function to add funds
  function addToBalance(amount) {
    currentBalance += amount;
    updateBalanceDisplay();
  }

  // Function to subtract funds
  function subtractFromBalance(amount) {
    if (currentBalance >= amount) {
        currentBalance -= amount;
        updateBalanceDisplay();
        saveBalanceToLocalStorage(); 
    } else {
        alert("Insufficient funds!");
    }
}

  // Function to update the balance display
  function updateBalanceDisplay() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = `$${currentBalance}`;
  }

  function promptForPassword() {
    const enteredPassword = prompt("Enter one-time password:");
    const validPassword = "123456";

    if (enteredPassword === validPassword) {
        // Password is correct, proceed with the top-up
        subtractFromBalance(5);
    } else {
        alert("Incorrect password. Top-up canceled.");
    }
}