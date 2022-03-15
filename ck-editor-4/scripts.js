const editors = document.getElementsByClassName('editor');
CKEDITOR.disableAutoInline = true;

Array.from(editors).forEach((editor) => {
    CKEDITOR.replace(editor, {
        ckEditorAttributes: "style,href,title,target,face,size,color,align,start,reversed,type,data-selection-bookmark,data-selection-bookmark-end",
        removeButtons: "Format,Subscript,Superscript,Table,Image,Maximize,Source,About,Blockquote,Anchor,SpecialChar,HorizontalRule,PasteFromWord,PasteText,Paste,NumberedList,Outdent,Language,Indent,BulletedList,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,paragraphIndent",
        ckEditorStyles: "font,font-size,font-style,font-variant,font-weight,font-stretch,font-family,color",
        ckEditorTags: "a strong b i em font u span sub sup small mark cite abbr s strike selection-bookmark",
        tags: ['a', 'strong', 'b', 'i', 'em', 'font', 'u', 'span', 'sub', 'sup', 'small', 'mark', 'cite', 'abbr', 's', 'strike']
    });
});
