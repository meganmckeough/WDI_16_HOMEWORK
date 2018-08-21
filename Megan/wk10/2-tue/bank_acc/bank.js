class BankAccount {

	constructor(type, balance = 0) {
		this.type = type, 
		this.balance = balance
		this.transactions = []
	}

	withdraw(withdrawAmt) {
		this.transactions.push(`Withdrawal -$${withdrawAmt}`)
		return this.balance -= withdrawAmt
	}

	deposit(depositAmt) {
		this.transactions.push(`Deposit +$${depositAmt}`)
		return this.balance += depositAmt
	}

	showBalance() {
		console.log(`Total: $${this.balance}`)
	}

	transactionHistory() {
		console.log(`Transaction History: ${this.transactions}`)
	}

}

module.exports = BankAccount
