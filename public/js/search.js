// Script de busca de produtos em tempo real
// Filtra os itens da tabela conforme o usuário digita
const search = document.getElementById("search");
const productRows = document.querySelectorAll("#productList tr");

search.addEventListener("keyup", function () {
    const value = search.value.toLowerCase();

    productRows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(value) ? "" : "none";
    });
});
