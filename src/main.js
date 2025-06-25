"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("items");
    const displayImage = document.getElementById("displayImage");
    const photographerInput = document.getElementById("photographer");
    const descriptionInput = document.getElementById("description");
    const scoreInput = document.getElementById("score");
    const btnIncrease = document.getElementById("increaseScore");
    const btnDecrease = document.getElementById("decreaseScore");

    // 1. Llenar el <select> con los nombres de los ítems
    Object.entries(itemData).forEach(([key, item], index) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // 2. Mostrar datos al seleccionar un ítem
    select.addEventListener("change", () => {
        const selectedKey = select.value;
        if (selectedKey in itemData) {
            const item = itemData[selectedKey];
            displayImage.src = item.image;
            photographerInput.value = item.photographer;
            descriptionInput.value = item.description;
            scoreInput.value = item.score;
        }
    });

    // 3. Aumentar puntaje
    btnIncrease.addEventListener("click", () => {
        const selectedKey = select.value;
        if (selectedKey in itemData) {
            itemData[selectedKey].score++;
            scoreInput.value = itemData[selectedKey].score;
        }
    });

    // 4. Disminuir puntaje
    btnDecrease.addEventListener("click", () => {
        const selectedKey = select.value;
        if (selectedKey in itemData) {
            itemData[selectedKey].score--;
            scoreInput.value = itemData[selectedKey].score;
        }
    });
});
