// NAVBAR
export const renderNavbar = () => {
  // Create nav elements in html
  const divNavBar = document.createElement('div');
  const navHome = document.createElement('a');
  const navExperience = document.createElement('a');
  const navProjects = document.createElement('a');

  // Asign nav classes to elements in html
  divNavBar.className = 'navbar';
  navHome.className = 'principal_links_bar';
  navHome.href = '/home';
  navHome.textContent = './Página_Principal';
  navExperience.className = 'principal_links_bar';
  navExperience.href = '/experience';
  navExperience.textContent = './Experiencia';
  navProjects.className = 'principal_links_bar';
  navProjects.href = '/projects';
  navProjects.textContent = './Proyectos_en_Producción';

  // Elements visibles in html
  divNavBar.appendChild(navHome);
  divNavBar.appendChild(navExperience);
  divNavBar.appendChild(navProjects);
  document.body.appendChild(divNavBar);
};

// // Click listener event in navbar
// const clickListener = (ev) => {
//   ev.preventDefault();

//   const hrefSelect = ev.target.getAttribute('href');
//   if (hrefSelect === navProjects) {
//     renderProjects();
//   } else if (hrefSelect === navExperience) {
//     renderExperience();
//   } else if (hrefSelect === navHome) {
//     renderHome();
//   }
// };

// // Agrega el evento de clic a los enlaces de la navbar
// navHome.addEventListener('click', clickListener);
// navExperience.addEventListener('click', clickListener);
// navProjects.addEventListener('click', clickListener);

const printProjects = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;

  main.innerHTML = ' ';
  renderProjects();
};

const projectsFinal = document.querySelector('.finalProjects');
projectsFinal.addEventListener('click', printProjects);
