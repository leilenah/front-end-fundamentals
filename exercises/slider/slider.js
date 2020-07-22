// TODO: css animation transitions
// TODO: logic to hide prev and next buttons when approproate


async function render() {
  const response = await fetch('https://swapi.dev/api/films/');
  const data = await response.json();
  const films = data.results;

  const swContainer = document.querySelector('#sw-container');
  const buttons = document.querySelectorAll('#pagination-buttons button');

  films.forEach(film => {
  	const { title, director, release_date } = film;
  	const div = document.createElement("div");

    div.classList.add('sw-container__film');

    div.innerHTML = `
    	<h2>${title}<h2>
      <div>
      	Directed by ${director}
      </div>
      <div>
      	Released on ${release_date}
      </div>
    `;

    swContainer.append(div);
  });




  for (const button of buttons) {
    button.addEventListener('click', (e) => {
      const id = event.target.getAttribute('id');
      const style = window.getComputedStyle(swContainer);
      const rightPx = style.getPropertyValue('right');
      const right = parseInt(rightPx, 10);


      switch (id) {
        case "next":
        	swContainer.style.right = `${right + 522}px`;
          break;

         case "prev":
        	swContainer.style.right = `${right - 522}px`;
          break;
      }
    });
  }




  return films;
};

render()
	.catch(err => console.error(err));
