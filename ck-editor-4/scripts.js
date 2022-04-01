const editors = document.getElementsByClassName('editor');
CKEDITOR.disableAutoInline = true;

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

Array.from(editors).forEach((editor, i) => {
    const ckEditor = CKEDITOR.replace(editor, {
        removeButtons: "Format,Subscript,Superscript,Table,Image,Maximize,Source,About,Blockquote,Anchor,SpecialChar,HorizontalRule,PasteFromWord,PasteText,Paste",
        removePlugins: "colordialog,floatingspace,link,unlink,linker,colorbutton,formatting,stylescombo,format,font,size,justify"
    });
});

CKEDITOR.on("instanceReady", editorLoaded)