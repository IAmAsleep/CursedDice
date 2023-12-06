const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7a4ddd4616mshde883cc4e7eb2bdp1348a8jsn076aef120390',
        'X-RapidAPI-Host': 'dice-roll3.p.rapidapi.com'
    }
};

const resultElement = document.getElementById('result');

const FRollButton = document.getElementById('FrollButton').addEventListener('click', async () => {
    // const randomNumber = Math.floor(Math.random() * 4) + 1;
    const url = 'https://dice-roll3.p.rapidapi.com/api/roll/single/4';
    try {
        const response = await fetch(url, options);
        const num = await response.json();
        console.log(num.result);
        resultElement.innerText = `You rolled: ${num.result}`;
    } catch (error) {
        console.error(error);
    }

    resultElement.classList.add('show');

    setTimeout(() => {
        resultElement.classList.remove('show');
    }, 3000);
})

const SRollButton = document.getElementById('SrollButton').addEventListener('click', async () => {
    // const randomNumber = Math.floor(Math.random() * 6) + 1;
    const url = 'https://dice-roll3.p.rapidapi.com/api/roll/single/6';
    try {
        const response = await fetch(url, options);
        const num = await response.json();
        console.log(num.result);
        resultElement.innerText = `You rolled: ${num.result}`;
    } catch (error) {
        console.error(error);
    }

    resultElement.classList.add('show');

    setTimeout(() => {
        resultElement.classList.remove('show');
    }, 3000);
})

const TRollButton = document.getElementById('TrollButton').addEventListener('click', async () => {
    // const randomNumber = Math.floor(Math.random() * 20) + 1;
    const url = 'https://dice-roll3.p.rapidapi.com/api/roll/single/20';
    try {
        const response = await fetch(url, options);
        const num = await response.json();
        console.log(num.result);
        resultElement.innerText = `You rolled: ${num.result}`;
    } catch (error) {
        console.error(error);
    }

    resultElement.classList.add('show');

    setTimeout(() => {
        resultElement.classList.remove('show');
    }, 3000);
})

const HRollButton = document.getElementById('HrollButton').addEventListener('click', async () => {
    // const randomNumber = Math.floor(Math.random() * 100) + 1;
    const url = 'https://dice-roll3.p.rapidapi.com/api/roll/single/100';
    try {
        const response = await fetch(url, options);
        const num = await response.json();
        console.log(num.result);
        resultElement.innerText = `You rolled: ${num.result}`;
    } catch (error) {
        console.error(error);
    }

    resultElement.classList.add('show');

    setTimeout(() => {
        resultElement.classList.remove('show');
    }, 3000);
})

function showResult() {

}