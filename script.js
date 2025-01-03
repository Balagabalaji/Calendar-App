// Sample data for companies and communications
const companies = [
    {
        name: "Company A",
        communications: [
            { type: "LinkedIn Post", date: "2025-01-01" },
            { type: "Email", date: "2025-01-05" }
        ]
    },
    {
        name: "Company B",
        communications: [
            { type: "Phone Call", date: "2025-01-02" }
        ]
    }
];

function displayCompanies() {
    const companyListDiv = document.getElementById("company-list");
    companyListDiv.innerHTML = ''; // Clear previous content

    companies.forEach(company => {
        const companyDiv = document.createElement('div');
        companyDiv.classList.add('company');
        companyDiv.innerHTML = `
            <h3>${company.name}</h3>
            <ul>
                ${company.communications.map(c => `<li>${c.type}: ${c.date}</li>`).join('')}
            </ul>
            <button onclick="logCommunication('${company.name}')">Log Communication</button>
        `;
        companyListDiv.appendChild(companyDiv);
    });
}

function logCommunication(companyName) {
    const date = prompt("Enter the date of communication (YYYY-MM-DD):");
    const type = prompt("Enter the type of communication (LinkedIn Post, Email, etc.):");

    const company = companies.find(c => c.name === companyName);
    if (company) {
        company.communications.push({ type, date });
        displayCompanies(); // Refresh the company list
    }
}

// Initialize the application
displayCompanies();
