const dnd = document.getElementById("dnd");

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
  e.preventDefault();

  dnd.innerHTML = "";

  /**
   *
   * @param {DataTransferItem} file
   */
  function each(file) {
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
