(() => {
  const modal = document.querySelector("#modal");
  const modalImage = modal.querySelector("img");

  modalImage.onclick = (e) => {
    e.stopPropagation();
  };

  modal.onclick = () => {
    modal.classList.remove("appear");
  };

  window.modal = {
    showImage: (src) => {
      modalImage.src = src;
      modal.classList.add("appear");
    },
  };
})();
