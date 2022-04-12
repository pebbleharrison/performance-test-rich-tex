const editors = document.getElementsByClassName('editor');

console.log("editors count", editors.length)

let callCount = 0;

function editorLoaded(a, b, c) {
    callCount = callCount + 1;
    if (callCount === editors.length){
        performance.measure("measure to last instance loaded", "loading of N instances");
        console.log(performance.getEntriesByType("measure"));
    }
}

performance.mark("loading of N instances");

Array.from(editors).forEach((editor) => {
    InlineEditor
        .create(editor)
        .then(() => {
            editorLoaded()
        })
        .catch(error => {
            console.error(error);
        });
});