document.addEventListener('DOMContentLoaded', () => {
    const funFacts = [
        "I love exploring parks.",
        "Snowy landscapes are my favorite.",
        "I enjoy relaxing at the beach.",
        "I appreciate the beauty of mountains from afar."
    ];

    const funFactsList = document.getElementById('fun-facts-list');
    const addFactBtn = document.getElementById('add-fact-btn');

    function displayFunFacts() {
        funFactsList.innerHTML = '';
        funFacts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            funFactsList.appendChild(li);
        });
    }

    addFactBtn.addEventListener('click', () => {
        const newFact = prompt("Enter a new fun fact:");
        if (newFact) {
            funFacts.push(newFact);
            displayFunFacts();
        }
    });

    displayFunFacts();
});
