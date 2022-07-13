const DEFAULT_PATH = ".";
const IMAGE_EXTENSIONS = [".gif", ".png", ".jpg"];
function FileCard(parent, file, pathPrefix) {
  console.log(pathPrefix);
  const container = document.createElement("div");
  container.classList.add("card");
  const getImgPath = () => {
    return `/uploads/${file.base}`;
  };
  const img = IMAGE_EXTENSIONS.includes(file.ext)
    ? `<img src="${getImgPath()}" />`
    : "";
  container.innerHTML = `
    <div class="deleteButton">X</div>
    <div class="imageContainer"> ${img} </div>
    <div class="inputContainer">
      <input class="fileNameInput" type="text" value="${file.name}">
      <button class="renameButton">Rename</button>
    </div>
    <p>Please do not put extension. It is automatically inserted</p>
  `;
  parent.append(container);

  const img$ = container.querySelector("img");
  if (img$) {
    img$.addEventListener("click", () => {
      window.modal.showImage(getImgPath());
    });
  }

  const delete$ = container.querySelector(".deleteButton");
  delete$.addEventListener("click", () => {
    fetch(`/api/files?path=${pathPrefix}&name=${file.base}`, {
      method: "DELETE",
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data.error) {
          return alert("error deleting file, please check server logs");
        }
        alert("change successful");
      })
      .catch((err) => {
        alert("There was an error");
      })
      .finally(() => {
        container.remove();
      });
  });

  const fileNameInput = container.querySelector(".fileNameInput");
  const renameButton = container.querySelector(".renameButton");
  renameButton.addEventListener("click", () => {
    const newName = fileNameInput.value;
    renameButton.innerText = "...";
    fetch(`/api/files/rename`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        original: file.base,
        newName: `${newName}${file.ext}`,
        path: pathPrefix,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data.error) {
          return alert("error renaming file, please check server logs");
        }
        // Update file object with new properties
        file.base = `${newName}${file.ext}`;
        file.name = newName;
        if (img$) {
          img$.src = getImgPath();
        }
        alert("change successful");
      })
      .catch((err) => {
        alert("There was an error");
      })
      .finally(() => {
        renameButton.innerText = "Rename";
      });
    console.log("newName", newName);
  });
}

(function () {
  const fetchFiles = (pathValue) => {
    const path = pathValue || DEFAULT_PATH;
    fetch(`/api/files?path=${path}`)
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
