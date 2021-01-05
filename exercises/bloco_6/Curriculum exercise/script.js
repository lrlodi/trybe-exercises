function generateStatesSelectElement() {
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 
        'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 
        'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Sul', 'Rio Grande do Norte', 'Rondônia', 
        'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    for (let i = 0; i < 27; i += 1) {
        let stateOption = document.createElement('option');
        stateOption.setAttribute("value", states[i]);
        let stateName = document.createTextNode(states[i]);
        stateOption.appendChild(stateName);
        document.getElementById('state').appendChild(stateOption);
    }
}

function consolidateCV(event) {
    event.preventDefault();
    const formData = document.querySelectorAll('input');
    for(let i = 0; i < formData.length; i += 1) {
        const userInput = formData[i].value;
        const consolidatedDiv = document.querySelector('.form-data');
        const div = document.createElement('div');
        div.className = 'div-cv';
        div.innerHTML = userInput;
        consolidatedDiv.appendChild(div);
    }
}

function clearData() {

}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', consolidateCV);
const clearDataButton = document.querySelector('.clear-data-button');
clearDataButton.addEventListener('click', clearData);
window.onload = function() {
    generateStatesSelectElement();
}
