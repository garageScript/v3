const DEFAULT_PATH = "public/photos/uploads"; // TODO: Change to .
const IMAGE_EXTENSIONS = [".gif", ".png", ".jpg"];
function FileCard(parent, file, pathPrefix) {
  console.log(pathPrefix);
  const container = document.createElement("div");
  container.classList.add("card");
  const img = IMAGE_EXTENSIONS.includes(file.ext)
    ? `<img src="/${pathPrefix}/${file.name}"`
    : "";
  container.innerHTML = `
    <p>${file.name}</p>
    <div class="imageContainer">
    ${img}
    </div>
  `;

  parent.append(container);
}

(function () {
  const fetchFiles = (pathValue) => {
    const path = pathValue || DEFAULT_PATH;
    fetch(`/files?path=${path}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        const { files } = data;
        if (!files.length) {
          return alert(
            "no files/folders, check console for error. Command was ignored"
          );
        }

        container.innerHTML = "";
        const imageFiles = files.filter((file) =>
          IMAGE_EXTENSIONS.includes(file.ext)
        );

        if (imageFiles.length) {
          imageFiles.forEach((file) => {
            new FileCard(container, file, path);
          });
          const divider = document.createElement("hr");
          container.append(divider);
        }

        const regularFiles = files.filter(
          (file) => !IMAGE_EXTENSIONS.includes(file.ext)
        );
        regularFiles.forEach((file) => {
          new FileCard(container, file, path);
        });
      });
  };
  const container = document.querySelector(".fileListContainer");
  const pathInput = document.querySelector("#pathInput");
  pathInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      fetchFiles(pathInput.value);
    }
  });
  fetchFiles(pathInput.value);
})();
