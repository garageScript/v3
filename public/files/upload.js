(function () {
  const container = document.querySelector(".upload-container");
  const makeGreen = (e) => {
    container.classList.add("dropping");
    container.innerHTML =
      "<h1>Will upload " + e.dataTransfer.items.length + " Files</h1>";
    e.preventDefault();
  };
  const clearScreen = (e) => {
    container.classList.remove("dropping");
    container.innerHTML = "<h1>Drag Files Here</h1>";
    e.preventDefault();
    return false;
  };
  document.body.addEventListener("dragover", makeGreen);
  document.body.addEventListener("dragleave", clearScreen);

  document.body.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files || e.dataTransfer.files);
    // No files
    if (!files.length) {
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("assets[]", file, file.name);
    });
    fetch("/api/files/uploads", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then((arr) => {
        alert(`${files.length} Files uploaded!`);
        window.location.reload();
      });
    return clearScreen(e);
  });
})();
