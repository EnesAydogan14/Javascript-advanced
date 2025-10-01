fetch('birthday.json')
  .then(response => response.json())
  .then(data => {
    const title = document.getElementById('title');
    const list = document.getElementById('birthday-list');
    const clearBtn = document.getElementById('clear-btn');

    title.textContent = `${data.length} birthdays today`;

    data.forEach(person => {
      const personDiv = document.createElement('div');
      personDiv.classList.add('person');

      personDiv.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div>
          <h4>${person.name}</h4>
          <p>${person.age} years</p>
        </div>
      `;
      list.appendChild(personDiv);
    });

    clearBtn.addEventListener('click', () => {
      list.innerHTML = '';
      title.textContent = '0 birthdays today';
    });
  })
  .catch(err => console.error("Kon JSON niet laden:", err));