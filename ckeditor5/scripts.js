const editors = document.getElementsByClassName('editor');

console.log("editors count", editors.length)

performance.mark("loading of N instances");

Array.from(editors).forEach((editor) => {
  ClassicEditor
    .create(editor)
    .catch(error => {
      console.error(error);
    });
});