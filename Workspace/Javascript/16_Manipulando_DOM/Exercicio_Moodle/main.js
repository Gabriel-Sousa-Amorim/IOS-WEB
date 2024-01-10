      let img = document.querySelector(".Image");
      function LeftArrow() {
        if (img.previousElementSibling) {
          img.classList.remove("Atual");
          img.previousElementSibling.classList.add("Atual");

          return (img = img.previousElementSibling);
        } else {
          img.classList.remove("Atual");
          let lastChild = document.querySelector(
            "section.Img-container"
          ).lastElementChild;
          console.log(lastChild);

          lastChild.classList.add("Atual");
          return (img = lastChild);
        }
      }
      function RightArrow() {
        if (img.nextElementSibling) {
          img.classList.remove("Atual");
          img.nextElementSibling.classList.add("Atual");
          return (img = img.nextElementSibling);
        } else {
          img.classList.remove("Atual");
          document.querySelector(".Image").classList.add("Atual");
          return (img = document.querySelector(".Image"));
        }
      }
      document
        .getElementById("button-1")
        .addEventListener("click", LeftArrow, true);
      document
        .getElementById("button-2")
        .addEventListener("click", RightArrow, true);
