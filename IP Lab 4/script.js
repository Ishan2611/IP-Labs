// Person Class
class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    printDetails() {
        return `Name: ${this.name}\nAddress: ${this.address}\nEmail: ${this.email}\nPhone: ${this.phone}`;
    }
}

// Student Class inheriting Person
class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo <= 0) {
            throw new Error("Invalid roll number. It should be greater than zero.");
        }
        this.rollNo = rollNo;
    }

    printDetails() {
        return super.printDetails() + `\nRoll No: ${this.rollNo}`;
    }
}

// Arrow function to show receipt
const showReceipt = (person) => {
    let receipt = `Order Receipt\n----------------\n${person.printDetails()}\nDate: ${new Date().toLocaleDateString()}`;
    alert(receipt);
};

// Form Validation
function validateForm() {
    const tagline = document.getElementById("tagline").value;
    const phone = document.getElementById("phone").value;
    const rollNo = document.getElementById("rollNo").value;

    if (tagline.length > 50) {
        alert("Tagline should not exceed 50 characters.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    try {
        let person = new Student(
            document.getElementById("name").value,
            document.getElementById("address").value,
            document.getElementById("email").value,
            phone,
            parseInt(rollNo)
        );
        showReceipt(person);
    } catch (error) {
        alert(error.message);
        return false;
    }

    return true;
}
