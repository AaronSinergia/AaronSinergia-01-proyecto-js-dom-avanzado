// import { renderHome } from './home.js';
// import { renderProjects } from './projects.js';
// import { renderExperience } from './experience.js';

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

  // Click listener event in navbar
  const clickListener = (ev) => {
    // ev.preventDefault();
    const hrefSelect = ev.target.getAttribute('href');
    if (hrefSelect === '/projects') {
      renderProjects();
    } else if (hrefSelect === '/experience') {
      renderExperience();
    } else if (hrefSelect === '/home') {
      renderHome();
    }
  };

  const bodySelector = document.querySelector('body');
  bodySelector.addEventListener('click', clickListener);
};
