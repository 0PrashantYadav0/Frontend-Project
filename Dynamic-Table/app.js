const addRowButton = document.getElementById("addRow");
const showDataButton = document.getElementById("showData");
const tableBody = document.querySelector("table tbody");

let rowCount = 1;

addRowButton.addEventListener("click", () => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" class="student-name"></td>
        <td><input type="text" class="roll-no"></td>
        <td><input type="text" class="month"></td>
        <td><input type="number" class="mess-charges"></td>
        <td><input type="number" class="room-charges"></td>
        <td><button class="delete-row">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    rowCount++;
});

tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-row")) {
        const rowToDelete = event.target.parentNode.parentNode;
        tableBody.removeChild(rowToDelete);
    }
});

showDataButton.addEventListener("click", () => {
    const data = [];
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach((row) => {
        const columns = row.querySelectorAll("td");
        const rowData = Array.from(columns).map((column) => {
            if (column.querySelector("input")) {
                return column.querySelector("input").value;
            }
            return column.textContent;
        });
        data.push(rowData);
    });

    document.querySelector('.data').innerHTML = `
    <p>${data}</p>
    <br>`
    ;
});

addRowButton.addEventListener("click", () => {
    if (rowCount > 1) {
        showDataButton.style.display = "inline-block";
    }
});
