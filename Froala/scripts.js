const editors = document.getElementsByClassName('editor');

console.log("editors count", editors.length)
performance.mark("loading of N instances");

let callCount = 0;

function editorLoaded() {
    callCount = callCount + 1;
    if (callCount === editors.length) {
        performance.measure("measure to last instance loaded", "loading of N instances");
        console.log(performance.getEntriesByType("measure"));
    }
}

Array.from(editors).forEach((editorEl, index) => {
    editorEl.id = `editor-${index}`
    var editor = new FroalaEditor(`#editor-${index}`, {
        toolbarButtons: [
            ['undo', 'redo'],
            ['bold', 'italic', 'underline', 'strikeThrough'],
            ['clearFormatting'],
            ['formatOL', 'formatUL'],
            ['indent', 'outdent'],
        ],
        events: {
            'initialized': editorLoaded
        }
    });
});