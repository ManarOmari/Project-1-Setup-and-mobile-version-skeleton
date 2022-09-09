const modal_container = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
// var to match if the screen is for mobile or for desktop
var x = window.matchMedia("(min-width: 768px)"); // desktop
//var span = document.getElementsByClassName("close")[0];
var multi_stories = document.querySelector(".multi-stories");
// array to store element
const projectList = {
  project1: {
    title: "Keeping track of hundreds of components",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: new Image(),
    technologies: ["Ruby on rails", "css", "Javascript"],
    technologiesDesktop: [
      "Codekit",
      "GitHub",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    liveBtnImge: new Image(),
    SourceBtn: new Image(),
  },
};

document.querySelectorAll("#seeProjectPopup").forEach((n) =>
  n.addEventListener("click", () => {
    // check if screen is for desktop
<<<<<<< HEAD
    if (x.matches) {
=======
    if(x.matches){
      modal_container.style.display = "block";
      modal_container.classList.add("multi-stories");
      let div = document.createElement("div");
      div.classList.add("card");
      // ADd close btn **
      let image = document.createElement("img");
      image.innerHTML = projectList.project1.featured_image;
      image.src = "/assets/images/popupDesktop.png";
      let cardConatiner = document.createElement("div");
      cardConatiner.classList.add("cardContainer");
      let div2 = document.createElement("div");
      div2.classList.add("div2");
      let heder = document.createElement("h2");
      heder.classList.add("titleHeader");
      heder.innerHTML = projectList.project1.title;
      // add live and source btns
      let listOfBtns2 = document.createElement("ul");
      listOfBtns2.classList.add("projectBTNs");
      // live btn
      let listItem1 = document.createElement("li");
      let liveBtn = document.createElement("button");
      liveBtn.classList.add("livebtns");
      liveBtn.innerHTML = "See Live";
      listItem1.append(liveBtn);
      listOfBtns2.appendChild(listItem1);
      // source btn
      let listItem2 = document.createElement("li");
      let sourceBtn = document.createElement("button");
      sourceBtn.classList.add("sourcebtns");
      sourceBtn.innerHTML = "See Source";
      listItem2.append(sourceBtn);
      listOfBtns2.appendChild(listItem2);
      let listOfBtns = document.createElement("ul");
      listOfBtns.classList.add("projectBTNs");
      let listItem = document.createElement("li");
      for (let i = 0; i < projectList.project1.technologiesDesktop.length; i += 1) {
        let btns = document.createElement("button");
        btns.className = ".projectBTNs li button";
        btns.innerHTML = projectList.project1.technologies[i];
        listItem.append(btns);
        listOfBtns.appendChild(listItem);
      }
      // description
      let text = document.createElement("p");
      text.classList.add("textModal");
      text.innerHTML = projectList.project1.description;
      // When the user clicks on image x, close the modal
      image.addEventListener("click", () => {
        modal_container.style.display = "none";
      });
      //div.appendChild(closeBtn);
      div.appendChild(image);
      modal.appendChild(div);
      div2.appendChild(heder);
      div2.appendChild(listOfBtns2);
      cardConatiner.appendChild(div2);
      //
      cardConatiner.appendChild(listOfBtns);
      cardConatiner.appendChild(text);
      modal.appendChild(cardConatiner);
      modal_container.appendChild(modal);
      document.body.appendChild(modal_container);
      // desktop 
       
      }
       else {
     
    modal_container.style.display = "block";
    modal_container.classList.add("multi-stories");
    let div = document.createElement("div");
    div.classList.add("card");
    //let closeBtn = document.createElement("span");
    //closeBtn.classList.add("close");
    // closeBtn.innerHTML = "&times;";
    let image = document.createElement("img");
    image.innerHTML = projectList.project1.featured_image;
    image.src = "/assets/images/bg1.png";
    let cardConatiner = document.createElement("div");
    cardConatiner.classList.add("cardContainer");
    let heder = document.createElement("h2");
    heder.classList.add("titleHeader");
    heder.innerHTML = projectList.project1.title;
    let listOfBtns = document.createElement("ul");
    listOfBtns.classList.add("projectBTNs");
    let listItem = document.createElement("li");

    for (let i = 0; i < projectList.project1.technologies.length; i += 1) {
      let btns = document.createElement("button");
      btns.className = ".projectBTNs li button";
      btns.innerHTML = projectList.project1.technologies[i];
      listItem.append(btns);
      listOfBtns.appendChild(listItem);
    }
    let text = document.createElement("p");
    text.classList.add("textModal");
    text.innerHTML = projectList.project1.description;
    // btn source and live btns
    let listOfBtns2 = document.createElement("ul");
    listOfBtns2.classList.add("projectBTNs");
    // live btn
    let listItem1 = document.createElement("li");
    let liveBtn = document.createElement("button");
    liveBtn.classList.add('livebtns');
    liveBtn.innerHTML = "See Live";
    listItem1.append(liveBtn);
    listOfBtns2.appendChild(listItem1);
     // source btn
     let listItem2 = document.createElement("li");
     let sourceBtn = document.createElement("button");
     sourceBtn.classList.add('sourcebtns');
     sourceBtn.innerHTML = "See Source";
     listItem2.append(sourceBtn);
     listOfBtns2.appendChild(listItem2);

    // When the user clicks on image x, close the modal
    image.addEventListener('click', () => {
      modal_container.style.display = "none";
    });
>>>>>>> 39260e4fe803a3bb3a4b6ef6b7fa21ef5e090a83
    
    } else {
      modal_container.style.display = "block";
      modal_container.classList.add("multi-stories");
      let div = document.createElement("div");
      div.classList.add("card");
      //let closeBtn = document.createElement("span");
      //closeBtn.classList.add("close");
      // closeBtn.innerHTML = "&times;";
      let image = document.createElement("img");
      image.innerHTML = projectList.project1.featured_image;
      image.src = "/assets/images/bg1.png";
      let cardConatiner = document.createElement("div");
      cardConatiner.classList.add("cardContainer");
      let heder = document.createElement("h2");
      heder.classList.add("titleHeader");
      heder.innerHTML = projectList.project1.title;
      let listOfBtns = document.createElement("ul");
      listOfBtns.classList.add("projectBTNs");
      let listItem = document.createElement("li");

      for (let i = 0; i < projectList.project1.technologies.length; i += 1) {
        let btns = document.createElement("button");
        btns.className = ".projectBTNs li button";
        btns.innerHTML = projectList.project1.technologies[i];
        listItem.append(btns);
        listOfBtns.appendChild(listItem);
      }
      let text = document.createElement("p");
      text.classList.add("textModal");
      text.innerHTML = projectList.project1.description;
      // btn source and live btns
      let listOfBtns2 = document.createElement("ul");
      listOfBtns2.classList.add("projectBTNs");
      // live btn
      let listItem1 = document.createElement("li");
      let liveBtn = document.createElement("button");
      liveBtn.classList.add("livebtns");
      liveBtn.innerHTML = "See Live";
      listItem1.append(liveBtn);
      listOfBtns2.appendChild(listItem1);
      // source btn
      let listItem2 = document.createElement("li");
      let sourceBtn = document.createElement("button");
      sourceBtn.classList.add("sourcebtns");
      sourceBtn.innerHTML = "See Source";
      listItem2.append(sourceBtn);
      listOfBtns2.appendChild(listItem2);

      // When the user clicks on image x, close the modal
      image.addEventListener("click", () => {
        modal_container.style.display = "none";
      });

      //div.appendChild(closeBtn);
      div.appendChild(image);
      modal.appendChild(div);
      cardConatiner.appendChild(heder);
      cardConatiner.appendChild(listOfBtns);
      cardConatiner.appendChild(text);
      cardConatiner.appendChild(listOfBtns2);
      modal.appendChild(cardConatiner);
      modal_container.appendChild(modal);
      document.body.appendChild(modal_container);
    }
  })
);
