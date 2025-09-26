const SELECT_DIA = document.getElementById("dia");
const SELECT_MES = document.getElementById("mes");
const SELECT_ANO = document.getElementById("ano");

for (let dia = 1; dia <= 31; dia++) {
    SELECT_DIA.innerHTML += `
        <option>${dia}</option>
    `;
}

for (let mes = 1; mes <= 12; mes++) {
    SELECT_MES.innerHTML += `
        <option>${mes}</option>
    `;
}

for (let ano = 2025; ano >= 1900; ano--) {
    SELECT_ANO.innerHTML += `
        <option>${ano}</option>
    `;
}

// mes 1 a 12
// ano 2025 a 1900
























