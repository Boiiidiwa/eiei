let account = 0
let cash = 0
const logs = document.getElementById("area")

function setbalance() {
    account = Number(document.getElementById("account").value) || 0
    cash = Number(document.getElementById("cash").value) || 0

    area.value += `Current account balance: ${account}, Current cash balance: ${cash}\n`
}

function balance() {
    const amount = Number(document.getElementById("operation").value) || 0
    const type = document.getElementById("bank")
    const selected = type.options[type.selectedIndex].text.toLowerCase()

    if (amount >= 1) {
        if (selected == "deposit" && amount <= cash) {
            cash -= amount
            account += amount
            area.value += `Current account balance: ${account}, Current cash balance: ${cash}\n`
        }
        else if (selected == "withdraw" && amount <= account) {
            cash += amount
            account -= amount
            area.value += `Current account balance: ${account}, Current cash balance: ${cash}\n`
        }
        else {
            area.value += `failed\n`
        }
    }
}
