const modalContainer = document.querySelector('.modal-container');
const x = window.matchMedia('(min-width: 768px)');
const projectList = [{
  id: 1,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featured_image: new Image(),
  technologies: ['Ruby on rails', 'css', 'Javascript'],
  technologiesDesktop: [
    'Codekit',
    'GitHub',
    'Javascript',
    'Bootstrap',
    'Terminal',
    'Codepen',
    ],
  liveBtnImge: new Image(),
  SourceBtn: new Image(),
  },
  {
  id:2,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featured_image: new Image(),
  technologies: ['Ruby on rails', 'css', 'Javascript'],
  technologiesDesktop: [
    'Codekit',
    'GitHub',
    'Javascript',
    'Bootstrap',
    'Terminal',
    'Codepen',
    ],
  liveBtnImge: new Image(),
  SourceBtn: new Image(),
  },
  {
  id:3,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featured_image: new Image(),
  technologies: ['Ruby on rails', 'css', 'Javascript'],
  technologiesDesktop: [
    'Codekit',
    'GitHub',
    'Javascript',
    'Bootstrap',
    'Terminal',
    'Codepen',
      ],
  liveBtnImge: new Image(),
  SourceBtn: new Image(), Image(),
  },
  {
  id:4,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featured_image: new Image(),
  technologies: ['Ruby on rails', 'css', 'Javascript'],
  technologiesDesktop: [
    'Codekit',
    'GitHub',
    'Javascript',
    'Bootstrap',
    'Terminal',
    'Codepen',
    ],
  liveBtnImge: new Image(),
  SourceBtn: new Image(),
  },
  {
  id:5,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featured_image: new Image(),
  technologies: ['Ruby on rails', 'css', 'Javascript'],
  technologiesDesktop: [
    'Codekit',
    'GitHub',
    'Javascript',
    'Bootstrap',
    'Terminal',
    'Codepen',
    ],
  liveBtnImge: new Image(),
  SourceBtn: new Image(),
  },
  {
  id:6,
  title: 'Keeping track of hundreds of components',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featured_image: new Image(),
  technologies: ['Ruby on rails', 'css', 'Javascript'],
  technologiesDesktop: [
    'Codekit',
    'GitHub',
    'Javascript',
    'Bootstrap',
    'Terminal',
    'Codepen',
    ],
  liveBtnImge: new Image(),
  SourceBtn: new Image(),
  },
];

document.querySelectorAll('#seeProjectPopup').forEach((n) => n.addEventListener('click', () => {
  // check if screen is for desktop
  if (x.matches) {
    modalContainer.style.display = 'block';
    modalContainer.classList.add('multi-stories');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modalContainer.appendChild(modal);
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    const div = document.createElement('div');
    div.classList.add('card');
    const image = document.createElement('img');
    image.innerHTML = projectList[0].featured_image;
    image.src = '/assets/images/popupDesktop.png';
    const cardConatiner = document.createElement('div');
    cardConatiner.classList.add('cardContainer');
    const div2 = document.createElement('div');
    div2.classList.add('div2');
    const heder = document.createElement('h2');
    heder.classList.add('titleHeader');
    heder.innerHTML = projectList[0].title;
    // add live and source btns
    const listOfBtns2 = document.createElement('ul');
    listOfBtns2.classList.add('projectBTNs');
    // live btn
    const listItem1 = document.createElement('li');
    const liveBtn = document.createElement('button');
    liveBtn.classList.add('livebtns');
    liveBtn.innerHTML = 'See Live';
    listItem1.append(liveBtn);
    listOfBtns2.appendChild(listItem1);
    // source btn
    const listItem2 = document.createElement('li');
    const sourceBtn = document.createElement('button');
    sourceBtn.classList.add('sourcebtns');
    sourceBtn.innerHTML = 'See Source';
    listItem2.append(sourceBtn);
    listOfBtns2.appendChild(listItem2);
    const listOfBtns = document.createElement('ul');
    listOfBtns.classList.add('projectBTNs');
    listOfBtns.style.justifyItems = 'flex-start';
    listOfBtns.style.justifyContent = 'left';
    const listItem = document.createElement('li');
    for (let i = 0; i < projectList[0].technologiesDesktop.length; i += 1) {
      const btns = document.createElement('button');
      btns.className = '.projectBTNs li button';
      btns.innerHTML = projectList[0].technologies[i];
      listItem.append(btns);
      listOfBtns.appendChild(listItem);
    }
    // description
    const text = document.createElement('p');
    text.classList.add('textModal');
    text.innerHTML = projectList[0].description;
    // When the user clicks on close x, close the modal
    closeBtn.addEventListener('click', () => {
      modalContainer.removeChild(modal);
      modalContainer.style.display = 'none';
    });
    div.appendChild(closeBtn);
    div.appendChild(image);
    modal.appendChild(div);
    div2.appendChild(heder);
    div2.appendChild(listOfBtns2);
    cardConatiner.appendChild(div2);
    //
    cardConatiner.appendChild(listOfBtns);
    cardConatiner.appendChild(text);
    modal.appendChild(cardConatiner);
    modalContainer.appendChild(modal);
    document.body.appendChild(modalContainer);
    closeBtn.addEventListener('click', () => {
      modalContainer.removeChild(modal);
      modalContainer.style.display = 'none';
    });
  } else {
    modalContainer.style.display = 'block';
    modalContainer.classList.add('multi-stories');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modalContainer.appendChild(modal);
    const div = document.createElement('div');
    div.classList.add('card');
    const image = document.createElement('img');
    image.innerHTML = projectList[0].featured_image;
    image.src = '/assets/images/bg1.png';
    const cardConatiner = document.createElement('div');
    cardConatiner.classList.add('cardContainer');
    const heder = document.createElement('h2');
    heder.classList.add('titleHeader');
    heder.innerHTML = projectList[0].title;
    const listOfBtns = document.createElement('ul');
    listOfBtns.classList.add('projectBTNs');

    const listItem = document.createElement('li');

    for (let i = 0; i < projectList[0].technologies.length; i += 1) {
      const btns = document.createElement('button');
      btns.className = '.projectBTNs li button';
      btns.innerHTML = projectList[0].technologies[i];
      listItem.append(btns);
      listOfBtns.appendChild(listItem);
    }
    const text = document.createElement('p');
    text.classList.add('textModal');
    text.innerHTML = projectList[0].description;
    // btn source and live btns
    const listOfBtns2 = document.createElement('ul');
    listOfBtns2.classList.add('projectBTNs');
    // live btn
    const listItem1 = document.createElement('li');
    const liveBtn = document.createElement('button');
    liveBtn.classList.add('livebtns');
    liveBtn.innerHTML = 'See Live';
    listItem1.append(liveBtn);
    listOfBtns2.appendChild(listItem1);
    // source btn
    const listItem2 = document.createElement('li');
    const sourceBtn = document.createElement('button');
    sourceBtn.classList.add('sourcebtns');
    sourceBtn.innerHTML = 'See Source';
    listItem2.append(sourceBtn);
    listOfBtns2.appendChild(listItem2);

    // When the user clicks on image x, close the modal
    image.addEventListener('click', () => {
      modalContainer.removeChild(modal);
      modalContainer.style.display = 'none';
    });

    // div.appendChild(closeBtn);
    div.appendChild(image);
    modal.appendChild(div);
    cardConatiner.appendChild(heder);
    cardConatiner.appendChild(listOfBtns);
    cardConatiner.appendChild(text);
    cardConatiner.appendChild(listOfBtns2);
    modal.appendChild(cardConatiner);
    modalContainer.appendChild(modal);
    document.body.appendChild(modalContainer);
  }
}));