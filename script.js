let currentRowIndex = -1;
let invoiceData = [];

async function fetchData() {
    try {
        var data = localStorage.getItem('invoiceData');
        if(data){
            invoiceData = JSON.parse(data)
        }else{
            invoiceData = [
                {
                    "id": 1,
                    "chemical_name": "Acetic Acid",
                    "vendor": "ChemCorp",
                    "density": "1.05 g/cm³",
                    "viscosity": "0.9 cP",
                    "packaging": "Plastic Bottle",
                    "pack_size": "500 mL",
                    "unit": "mL",
                    "quantity": 10
                },
                {
                    "id": 2,
                    "chemical_name": "Benzene",
                    "vendor": "SolvChem",
                    "density": "0.87 g/cm³",
                    "viscosity": "0.65 cP",
                    "packaging": "Glass Bottle",
                    "pack_size": "1 L",
                    "unit": "L",
                    "quantity": 5
                },
                {
                    "id": 3,
                    "chemical_name": "Ethanol",
                    "vendor": "PureChem",
                    "density": "0.789 g/cm³",
                    "viscosity": "1.2 cP",
                    "packaging": "Plastic Canister",
                    "pack_size": "2 L",
                    "unit": "L",
                    "quantity": 7
                },
                {
                    "id": 4,
                    "chemical_name": "Methanol",
                    "vendor": "Chemicals Inc.",
                    "density": "0.791 g/cm³",
                    "viscosity": "0.59 cP",
                    "packaging": "Metal Drum",
                    "pack_size": "20 L",
                    "unit": "L",
                    "quantity": 3
                },
                {
                    "id": 5,
                    "chemical_name": "Hexane",
                    "vendor": "Solvent World",
                    "density": "0.655 g/cm³",
                    "viscosity": "0.36 cP",
                    "packaging": "Plastic Container",
                    "pack_size": "1.5 L",
                    "unit": "L",
                    "quantity": 12
                },
                {
                    "id": 6,
                    "chemical_name": "Toluene",
                    "vendor": "AromaChem",
                    "density": "0.866 g/cm³",
                    "viscosity": "0.59 cP",
                    "packaging": "Glass Jar",
                    "pack_size": "1 L",
                    "unit": "L",
                    "quantity": 6
                },
                {
                    "id": 7,
                    "chemical_name": "Acetone",
                    "vendor": "CleanSolv",
                    "density": "0.784 g/cm³",
                    "viscosity": "0.32 cP",
                    "packaging": "Plastic Bottle",
                    "pack_size": "500 mL",
                    "unit": "mL",
                    "quantity": 15
                },
                {
                    "id": 8,
                    "chemical_name": "Chloroform",
                    "vendor": "ChloroTech",
                    "density": "1.49 g/cm³",
                    "viscosity": "0.56 cP",
                    "packaging": "Glass Bottle",
                    "pack_size": "250 mL",
                    "unit": "mL",
                    "quantity": 8
                },
                {
                    "id": 9,
                    "chemical_name": "Glycerol",
                    "vendor": "BioChem",
                    "density": "1.26 g/cm³",
                    "viscosity": "1.5 cP",
                    "packaging": "Plastic Bottle",
                    "pack_size": "1 L",
                    "unit": "L",
                    "quantity": 4
                },
                {
                    "id": 10,
                    "chemical_name": "Sodium Chloride",
                    "vendor": "Salt Co.",
                    "density": "2.16 g/cm³",
                    "viscosity": "N/A",
                    "packaging": "Bag",
                    "pack_size": "1 kg",
                    "unit": "kg",
                    "quantity": 20
                },
                {
                    "id": 11,
                    "chemical_name": "Potassium Hydroxide",
                    "vendor": "KOH Supplies",
                    "density": "2.04 g/cm³",
                    "viscosity": "N/A",
                    "packaging": "Plastic Drum",
                    "pack_size": "5 kg",
                    "unit": "kg",
                    "quantity": 5
                },
                {
                    "id": 12,
                    "chemical_name": "Sulfuric Acid",
                    "vendor": "Acid Solutions",
                    "density": "1.84 g/cm³",
                    "viscosity": "18.0 cP",
                    "packaging": "Glass Bottle",
                    "pack_size": "500 mL",
                    "unit": "mL",
                    "quantity": 10
                },
                {
                    "id": 13,
                    "chemical_name": "Nitric Acid",
                    "vendor": "NitroChem",
                    "density": "1.51 g/cm³",
                    "viscosity": "1.3 cP",
                    "packaging": "Plastic Canister",
                    "pack_size": "1 L",
                    "unit": "L",
                    "quantity": 4
                },
                {
                    "id": 14,
                    "chemical_name": "Calcium Carbonate",
                    "vendor": "Minerals Inc.",
                    "density": "2.71 g/cm³",
                    "viscosity": "N/A",
                    "packaging": "Sack",
                    "pack_size": "25 kg",
                    "unit": "kg",
                    "quantity": 3
                },
                {
                    "id": 15,
                    "chemical_name": "Ammonium Hydroxide",
                    "vendor": "NH4 Supplies",
                    "density": "0.91 g/cm³",
                    "viscosity": "0.4 cP",
                    "packaging": "Plastic Bottle",
                    "pack_size": "1 L",
                    "unit": "L",
                    "quantity": 6
                }
            ]
            let data = JSON.stringify(invoiceData);
            localStorage.setItem('invoiceData', data)
        }
        populateTable()
        
    } catch (error) {
        console.error("Error fetching the JSON data: ", error);
    }
}

function populateTable() {
    const tbody = document.getElementById("invoiceBody");
    tbody.innerHTML = ""; // Clear existing rows
    invoiceData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="checkbox" class="itemCheckbox" value="${index}" /></td>
            <td>${item.id}</td>
            <td>${item.chemical_name}</td>
            <td>${item.vendor}</td>
            <td>${item.density}</td>
            <td>${item.viscosity}</td>
            <td>${item.packaging}</td>
            <td>${item.pack_size}</td>
            <td>${item.unit}</td>
            <td>${item.quantity}</td>
            <td><button class="btn btn-primary" onclick="openModal(${item.id})">Edit</button></td>
        `;
        tbody.appendChild(row);
    });
}

function addRow() {
    const newId = invoiceData.length ? invoiceData[invoiceData.length - 1].id + 1 : 1; // Generate new ID
    const newRow = {
        id: newId,
        chemical_name: "New Chemical",
        vendor: "New Vendor",
        density: "N/A",
        viscosity: "N/A",
        packaging: "N/A",
        pack_size: "N/A",
        unit: "N/A",
        quantity: 0
    };
    invoiceData.push(newRow);
    populateTable();
}

function sortTable(columnIndex) {
    const table = document.getElementById("invoiceTable");
    const rows = Array.from(table.rows).slice(1); // Exclude header row
    const direction = table.getAttribute("data-order") === "asc" ? "desc" : "asc";

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].innerText;
        const cellB = b.cells[columnIndex].innerText;
        return direction === "asc"
            ? cellA.localeCompare(cellB, undefined, { numeric: true })
            : cellB.localeCompare(cellA, undefined, { numeric: true });
    });

    rows.forEach(row => table.appendChild(row)); // Re-append rows in sorted order
    table.setAttribute("data-order", direction); // Update sort direction
}

function openModal(id) {
    currentRowIndex = id - 1; // Adjust index for 0-based array
    const item = invoiceData[currentRowIndex];
    document.getElementById("chemicalName").value = item.chemical_name;
    document.getElementById("vendor").value = item.vendor;
    document.getElementById("density").value = item.density;
    document.getElementById("viscosity").value = item.viscosity;
    document.getElementById("packaging").value = item.packaging;
    document.getElementById("packSize").value = item.pack_size;
    document.getElementById("unit").value = item.unit;
    document.getElementById("quantity").value = item.quantity;
    document.getElementById("editModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveData(){
    let data = JSON.stringify(invoiceData);
    localStorage.setItem('invoiceData', data);
    alert('Data saved successfully.')
}

function saveChanges() {
    const item = invoiceData[currentRowIndex];
    item.chemical_name = document.getElementById("chemicalName").value;
    item.vendor = document.getElementById("vendor").value;
    item.density = document.getElementById("density").value;
    item.viscosity = document.getElementById("viscosity").value;
    item.packaging = document.getElementById("packaging").value;
    item.pack_size = document.getElementById("packSize").value;
    item.unit = document.getElementById("unit").value;
    item.quantity = document.getElementById("quantity").value;

    let data = JSON.stringify(invoiceData);
    localStorage.setItem('invoiceData', data)

    // Re-populate the table
    populateTable();
    closeModal();
}

async function deleteRow(){
    const checkboxes = document.querySelectorAll('.itemCheckbox');
    const itemsToDelete = [];
    const idDelete = []
    await checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            itemsToDelete.push(index);
            idDelete.push(parseInt(checkbox.value))
        }
    });
    if (itemsToDelete.length > 0) {
        if (confirm(`Are you sure you want to delete ${itemsToDelete.length} item(s)?`)) {
            itemsToDelete.forEach(index => {
                const row = checkboxes[index].closest('tr');
                row.parentNode.removeChild(row);
            });
            let arr = await invoiceData.filter((val, index)=> {
                return idDelete.includes(index) === false
            })
            let data = JSON.stringify(arr);
            localStorage.setItem('invoiceData', data);
            alert('Data deleted successfully.')
        }
    } else {
        alert('No items selected for deletion.');
    }
}

function moveRow(direction) {
    const checkboxes = document.querySelectorAll('.itemCheckbox');
    const rows = document.querySelectorAll('#invoiceTable tbody tr');

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const currentRow = rows[index];
            const targetIndex = index + direction;

            if (targetIndex >= 0 && targetIndex < rows.length) {
                const targetRow = rows[targetIndex];

                // Swap rows
                if (direction === -1) { // Moving up
                    rows[index].parentNode.insertBefore(currentRow, targetRow);
                } else if (direction === 1) { // Moving down
                    rows[index].parentNode.insertBefore(targetRow.nextSibling, currentRow);
                }

                // Update checkbox states
                checkbox.checked = false; // Deselect the moved checkbox
                targetRow.querySelector('.itemCheckbox').checked = true; // Select the new position
            }
        }
    });
}

window.onload = fetchData;