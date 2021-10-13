const prevbtn = document.querySelector(".left");
const nextbtn = document.querySelector(".right");
const btn = document.querySelector(".btn");
const empName = document.querySelector(".name");
const photo = document.querySelector(".image");
const profession = document.querySelector(".profession");
const empAbout = document.querySelector(".about");

const reviews = [
  {
    name: "susan smith",
    img: "./images/person-1.jpg",
    prof: "web developer",
    about: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
  },

  {
    name: "anna jones",
    img: "./images/person-2.jpg",
    prof: "web designer",
    about: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`,
  },

  {
    name: "Peter jones",
    img: "./images/person-3.jpg",
    prof: "intern",
    about: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`,
  },

  {
    name: "bill anderson",
    img: "./images/person-4.jpg",
    prof: "the boss",
    about: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`,
  },
];

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function (e) {
  const item = reviews[currentItem];
  empName.textContent = item.name;
  photo.src = item.img;
  profession.textContent = item.prof;
  empAbout.textContent = item.about;
});

function showPerson(currItem) {
  const item = reviews[currItem];
  empName.textContent = item.name;
  photo.src = item.img;
  profession.textContent = item.prof;
  empAbout.textContent = item.about;
}

let count = 0;

nextbtn.addEventListener("click", function (e) {
  if (count >= reviews.length - 1) {
    count = -1;
  }
  count += 1;
  showPerson(count);
});

prevbtn.addEventListener("click", function (e) {
  if (count <= 0) {
    count = reviews.length;
  }
  count -= 1;
  showPerson(count);
});

btn.addEventListener("click", function (e) {
  let randomNum = Math.floor(Math.random() * 4);
  showPerson(randomNum);
});
