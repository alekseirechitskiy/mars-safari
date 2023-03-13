export default function () {
  const html = document.querySelector(".html");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".modal__close");
  const btnsOpenModal = document.querySelectorAll(".gui-show-modal");

  const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    html.classList.add("overflow-hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    html.classList.remove("overflow-hidden");
  };

  btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
  // for (let i = 0; i < btnsOpenModal.length; i++)
  //   btnsOpenModal[i].addEventListener("click", openModal);

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
