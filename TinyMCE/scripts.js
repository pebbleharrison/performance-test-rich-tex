const editors = document.getElementsByClassName('editor');

let callCount = 0;

function editorLoaded() {
    callCount = callCount + 1;
    if (callCount === editors.length){
        performance.measure("measure to last instance loaded", "loading of N instances");
        console.log(performance.getEntriesByType("measure"));
    }
}

console.log("editors count", editors.length)

performance.mark("loading of N instances");

Array.from(editors).forEach((editor) => {
    tinymce.init({
        plugins: 'lists',
        menubar: false,
        toolbar: "cut copy | undo redo | bold italic underline strikethrough | removeformat | bullist numlist | outdent | indent",
        target: editor,
        setup: function (editor) {
            editor.on('init', editorLoaded);
        }
    })
});