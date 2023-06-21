import './src/style.css';
// import { linkPage } from './src/utils/linkPage';
import { renderNavbar } from './src/components/navbar';
// import { hamburgerResponsive } from './src/components/navbar';
import { renderHome } from './src/pages/home';
// import { Experience } from './src/pages/experience';
// import { Projects } from './src/pages/projects';
// import {getTitle} from ????
// import {Footer} from ???

// getTitle();

const header = document.querySelector('header');
header.innerHTML = renderNavbar();

// hamburgerResponsive();

// linkPage('#homelink', Home);

// linkPage('#experiencelink', Experience);

// linkPage('#projectslink', Projects);

// renderHome();

// const footer = document.querySelector('footer');
// footer.innerHTML = Footer();
