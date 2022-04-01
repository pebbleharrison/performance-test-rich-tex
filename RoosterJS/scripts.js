const editors = document.getElementsByClassName('editor');

console.log("editors count", editors.length)
performance.mark("loading of N instances");

const EDITOR_READY_EVENT = 11; // https://microsoft.github.io/roosterjs/docs/enums/roosterjs_editor_types.plugineventtype.html#editorready

let callCount = 0;

function editorLoaded() {
    callCount = callCount + 1;
    console.log("editorLoaded", callCount)
    if (callCount === editors.length) {
        performance.measure("measure to last instance loaded", "loading of N instances");
        console.log(performance.getEntriesByType("measure"));
    }
}

class MyPlugin {
    getName() {
        return 'MyPlugin';
    }

    initialize(editor) {
        this.editor = editor;
    }

    dispose() {
        this.editor = null;
    }

    onPluginEvent(event) {
        if (event.eventType === EDITOR_READY_EVENT){
            editorLoaded()
        }
    }
}

Array.from(editors).forEach((editorEl) => {
    const editor = roosterjs.createEditor(editorEl, [new MyPlugin()]);
});