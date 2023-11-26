const name = document.querySelector(".customer-name");
const text = document.querySelector(".text");
const btn = document.querySelectorAll(".btn");

const customers = [
  {
    0: "Bill Gates",
    1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam.",
  },
  {
    0: "Jeff Bezos",
    1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam.",
  },
  {
    0: "Elon Musk",
    1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam.",
  },
  {
    0: "Steve Jobs",
    1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam.",
  },
  {
    0: "Mark Zuckerberg",
    1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias at omnis expedita molestiae? Molestiae dicta hic labore perferendis exercitationem et ad. A, neque aut saepe voluptate quos corporis laboriosam.",
  },
];

let index = 0;

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("prev")) {
      if (index === 0) {
        return;
      } else {
        index--;
        name.textContent = customers[index][0];
      }
    }

    if (e.target.classList.contains("next")) {
      if (index === customers.length - 1) {
        return;
      } else {
        index++;
        name.textContent = customers[index][0];
      }
    }
  });
});
