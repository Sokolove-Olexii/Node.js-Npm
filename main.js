const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("hello");
});

document.getElementById("dataForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").textContent = `Ваше ім'я: ${name}`;
});

const extraInfo = document.createElement("p");
extraInfo.textContent = "Це додаткова інформація!";
document.body.appendChild(extraInfo);
