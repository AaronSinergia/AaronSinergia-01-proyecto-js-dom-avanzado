import './style.css';
import './experience_style.css';
import { renderNavbar } from './navbar.js';

// BODY HOME DATA BOX 1
const bodyHomeData = () => {
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  divDataBox.className = 'data_box_1';
  h3.className = 'datos_personales';
  h3.innerText =
    './RESIDENCIA/BCN.html ./EDAD/32_AÑOS.css ./ACTUALMENTE/DXC/HelpDeskIt.js';
  divDataBox.appendChild(h3);
  const h3Word = document.createElement('h3');
  h3Word.className = 'frase';
  h3Word.textContent =
    '"Los peces muertos son los únicos que siguen la corriente"';
  divDataBox.appendChild(h3Word);
  document.body.appendChild(divDataBox);
};
// BODY HOME CURLY BRACKETS AND PRINCIPAL PHOTO
const bodyHomeCurly = () => {
  const divCurly = document.createElement('div');
  const h2CurlyLeft = document.createElement('h2');
  divCurly.className = 'curly_and_aaronphoto';
  h2CurlyLeft.className = 'curlybracket';
  h2CurlyLeft.textContent = '{';
  divCurly.appendChild(h2CurlyLeft);
  const aaronImg = document.createElement('img');
  aaronImg.className = 'aaron_photo';
  aaronImg.src = './img/aaron.png';
  aaronImg.alt = 'aaron_photo';
  divCurly.appendChild(aaronImg);
  const h2CurlyRigth = document.createElement('h2');
  h2CurlyRigth.className = 'curlybracket';
  h2CurlyRigth.textContent = '}';
  divCurly.appendChild(h2CurlyRigth);
  document.body.appendChild(divCurly);
};
// BODY HOME DATA BOX 2
const bodyHomeData2 = () => {
  const divDataBox = document.createElement('div');
  const h3 = document.createElement('h3');
  const h3Two = document.createElement('h3');
  divDataBox.className = 'data_box_2';
  h3.className = 'my_aspirations';
  h3.innerText =
    'Mis aspiraciones son entrar en el mundo de la programación como web developer y mejorar día a día como frontend dónde creo que tengo mucho que decir y aportar.';
  h3Two.className = 'my_work_valors';
  h3Two.textContent =
    'Actualmente trabajo para una empresa IT la cual ofrece servicios a un importante banco a nivel mundial. A demás, soy músico y trabajo en ocasiones como músico de sesión, y grabando música para otros artistas.';
  divDataBox.appendChild(h3);
  divDataBox.appendChild(h3Two);
  document.body.appendChild(divDataBox);
};
// EMAIL
const mailContact = () => {
  const h3Mail = document.createElement('h3');
  const linkMail = document.createElement('a');
  h3Mail.className = 'mail_contact';
  linkMail.className = 'mail_link';
  linkMail.href = 'mailto:a.carrasco9@me.com';
  linkMail.textContent = 'Abierto a nuevos proyectos';
  h3Mail.appendChild(linkMail);
  document.body.appendChild(h3Mail);
};

// RRSS ICONS
const renderRRSSIcons = () => {
  const articleRRSS = document.createElement('article');
  const githubLink = document.createElement('a');
  const githubIMG = document.createElement('img');
  articleRRSS.className = 'rrss';
  githubLink.className = 'github_link';
  githubLink.href = 'https://github.com/AaronSinergia?tab=repositories';
  githubIMG.className = 'github';
  githubIMG.src = './img/GitHubLogo.png';
  githubIMG.alt = 'github_logo';
  githubLink.appendChild(githubIMG);
  articleRRSS.appendChild(githubLink);
  const linkedinLink = document.createElement('a');
  const linkedinIMG = document.createElement('img');
  linkedinLink.className = 'linkedin_link';
  linkedinLink.href = 'https://www.linkedin.com/in/aaron-carrasco-romero/';
  linkedinIMG.className = 'linkedin';
  linkedinIMG.src = './img/1384014.png';
  linkedinIMG.alt = 'linkedin_logo';
  linkedinLink.appendChild(linkedinIMG);
  articleRRSS.appendChild(linkedinLink);
  const netlifyLink = document.createElement('a');
  const netlifyIMG = document.createElement('img');
  netlifyLink.className = 'netlify_link';
  netlifyLink.href = 'https://app.netlify.com/teams/aaronsinergia/sites';
  netlifyIMG.className = 'netlify';
  netlifyIMG.src = './img/netlify_logo_icon_169924.png';
  netlifyIMG.alt = 'netlify_logo';
  netlifyLink.appendChild(netlifyIMG);
  articleRRSS.appendChild(netlifyLink);
  document.body.appendChild(articleRRSS);
};

// FOOTER
const renderFooter = () => {
  const createFooter = document.createElement('footer');
  createFooter.className = 'footer';
  createFooter.textContent = `© Todos los derechos reservados - 2023`;
  document.body.appendChild(createFooter);
};

// // RENDER HOME
// const renderHome = () => {
//   const bodyOfHtml = document.querySelector('body');
//   const h1 = document.createElement('h1');
//   h1.className = 'title_name';
//   h1.textContent = '.../AARON_CARRASCO';
//   bodyOfHtml.appendChild(h1);
//   renderNavbar();
//   bodyHomeData();
//   bodyHomeCurly();
//   bodyHomeData2();
//   mailContact();
//   renderRRSSIcons();
//   renderFooter();
//   document.body.appendChild(bodyOfHtml);
// };
// renderHome();

// OVERLAY EFFECT
const overlayPhoto = () => {
  const createOverlay = document.createElement('div');
  createOverlay.className = 'overlay hidden';
  const createSlideshow = document.createElement('div');
  createSlideshow.className = 'slideshow';
  const createCloseButton = document.createElement('span');
  createCloseButton.className = 'btn_close';
  createCloseButton.textContent = 'X';
  const prevButton = document.createElement('div');
  const createLeftButton = document.createElement('button');
  prevButton.className = 'button prev';
  createLeftButton.textContent = '{';
  const nextButton = document.createElement('div');
  const createRigthButton = document.createElement('button');
  nextButton.className = 'button next';
  createRigthButton.textContent = '}';
  const imgSlideShow = document.createElement('img');
  imgSlideShow.src = '';
  imgSlideShow.alt = '';
  imgSlideShow.id = 'img_slideshow';
  createSlideshow.appendChild(imgSlideShow);
  nextButton.appendChild(createRigthButton);
  createSlideshow.appendChild(nextButton);
  prevButton.appendChild(createLeftButton);
  createSlideshow.appendChild(prevButton);
  createSlideshow.appendChild(createCloseButton);
  createOverlay.appendChild(createSlideshow);
  document.body.appendChild(createOverlay);
};

// GALLERY EXPERIENCE IMAGES
const workGallery = () => {
  const sectionGallery = document.createElement('section');
  sectionGallery.className = 'gallery';
  const divGalleryColumn = document.createElement('div');
  divGalleryColumn.className = 'column';
  const rnovaImg = document.createElement('img');
  rnovaImg.className = 'rnovaimg';
  rnovaImg.src = './img/rnova-sll_li1.png';
  rnovaImg.alt = 'rnova_logo';
  rnovaImg.dataset.imgShow = '0';
  const emergiaImg = document.createElement('img');
  emergiaImg.src = './img/emergia.jpg';
  emergiaImg.alt = 'emergia_logo';
  emergiaImg.dataset.imgShow = '1';
  const vodafoneImg = document.createElement('img');
  vodafoneImg.src = './img/vodafone.png';
  vodafoneImg.alt = 'vodafone_logo';
  vodafoneImg.dataset.imgShow = '2';
  const argomImg = document.createElement('img');
  argomImg.src = './img/argom.jpeg';
  argomImg.alt = 'argom_logo';
  argomImg.dataset.imgShow = '3';
  const dxcImg = document.createElement('img');
  dxcImg.src = './img/dxc.png';
  dxcImg.alt = 'dxc_logo';
  dxcImg.dataset.imgShow = '4';
  divGalleryColumn.appendChild(rnovaImg);
  divGalleryColumn.appendChild(emergiaImg);
  divGalleryColumn.appendChild(vodafoneImg);
  divGalleryColumn.appendChild(argomImg);
  divGalleryColumn.appendChild(dxcImg);
  sectionGallery.appendChild(divGalleryColumn);
  document.body.appendChild(sectionGallery);
};

// RENDER EXPERIENCE
const renderExperience = () => {
  const bodyOfHtml = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.className = 'title_name';
  h1.textContent = '.../Experiencia';
  bodyOfHtml.appendChild(h1);
  renderNavbar();
  overlayPhoto();
  workGallery();
  mailContact();
  renderRRSSIcons();
  renderFooter();
  document.body.appendChild(bodyOfHtml);
};
renderExperience();

// Abrir imagen clicada con overlay
const clickImageListener = (ev) => {
  const overlay = document.querySelector('.overlay');
  const createImgInfo = document.createElement('h2');
  createImgInfo.className = 'img_exp_text';
  createImgInfo.textContent = 'Hola'; /// añadir texto
  document.body.appendChild(createImgInfo);
  const imgSlideshow = document.querySelector('#img_slideshow');
  const clickedImage = ev.target;
  const imageSource = clickedImage.getAttribute('src');
  imgSlideshow.setAttribute('src', imageSource);
  overlay.classList.remove('hidden');
};

// Evento de click para cada imagen, y cargo el evento de que hacer arriba
const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', clickImageListener);
});

// Cerrar ventana overlay e imagen
const clickCloseListener = () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('hidden');
};

const closeButton = document.querySelector('.btn_close');
closeButton.addEventListener('click', clickCloseListener);
