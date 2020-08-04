function submitForm () {
  // get form inputs
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const number = document.querySelector("#number").value;
  const table = document.querySelector(".table-body");

  // once you create the parent element, the innerHTML can be a string
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${number}</td>
  `;

  // add the new row to table body
  table.append(tableRow);
}
