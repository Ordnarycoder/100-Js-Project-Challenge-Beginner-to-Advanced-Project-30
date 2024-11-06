const add_button = document.getElementById("add-button");
const delete_button = document.getElementById("delete-button");
const note = document.getElementById("note");

add_button.addEventListener("click", () => {
    const table = document.getElementById("note_table");

    const row = document.createElement("tr");

    const th = document.createElement("th");
    th.setAttribute("scope", "row");

    const c1 = document.createElement("td");

    const notee = note.value;
    c1.innerText = notee;

    row.appendChild(th);
    row.appendChild(c1);

    table.appendChild(row);

    note.value = "";
});

delete_button.addEventListener("click", () => {
    const table = document.getElementById("note_table");
    const last_row = table.lastElementChild;

    if (last_row) {
        table.removeChild(last_row);
    }
});
