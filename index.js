const dnd = document.getElementById("dnd");
// const button = document.getElementById("send");
// let files = [];

// select a big file :) (eg. 5,5 or 6MB)
// button.addEventListener("click", function () {
//   let formData = new FormData();

//   formData.append("file", files[0]);

//   axios
//     .post("http://localhost:4040/", formData, {
//       headers: {
//         "Content-Type": `multipart/form-data;`,
//       },
//       onUploadProgress: function (p) {
//         const progress = Math.round((p.loaded * 100) / p.total);
//         console.log(progress);
//         button.textContent = progress + "%";
//       },
//     })
//     .then((response) => console.log(response));
// });

/**
 * @returns {HTMLImageElement}
 */
function createImg() {
  const img = document.createElement("img");
  img.className = "img-dropped";
  return img;
}
/**
 *
 * @param {Event} e
 */
function _onDrop(e) {
  // files = [];
  e.preventDefault();
  dnd.textContent = "";

  /**
   *
   * @param {DataTransferItem} file
   */
  function each(file) {
    // files.push(file);
    console.log(file);
    const img = createImg();
    img.src = URL.createObjectURL(file);
    dnd.appendChild(img);
  }

  if (e.dataTransfer.files[0].type.indexOf("image") != -1) {
    [...e.dataTransfer.files].forEach(each);
  } else {
    alert("Must be image");
  }
}

/**
 *
 * @param {Event} e
 * @param {HTMLElement} elem
 */
function _onDragLeave(e, elem) {
  elem.classList.remove("drag-hover");

  console.log("dragleave", e);
}

/**
 *
 * @param {Event} e
 * @param {HTMLElement} elem
 */
function _onDragOver(e, elem) {
  e.preventDefault();

  elem.classList.add("drag-hover");
}
