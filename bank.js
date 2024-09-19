let balance = 0
let amount = 0

function deposit(amount){
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount.toFixed(2)}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

function withdraw(amount){
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount.toFixed(2)}`);
    }

} if (amount > balance) {
    console.log("Insufficient Balance.");

} else {
    console.log("Withdrawal amount must be positive.");
}

function checkBalance() {
    console.log(`Current balance: $${balance.toFixed(2)}`);
}

deposit(500);
withdraw(250);
withdraw(500); // Attempt to withdraw more than balance
checkBalance();