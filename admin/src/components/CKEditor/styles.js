const styles = `
.ck-editor__main {
    --ck-font-face:"Source Sans Pro",system-ui,Roboto,"Helvetica Neue","Helvetica",Arial,sans-serif;
    min-height: ${200 / 16}em;
    color:var(--ck-color-editor-base-text);
    font-family:var(--ck-font-face);
	> div {
	    min-height: ${200 / 16}em;
	}
	.ck-editor__editable {
	    line-height: initial;
	}
	
	div, applet, object, iframe, 
	h1, h2,h3, h4, h5,h6, p, span,
	pre, a, abbr, acronym,
	address, big, cite, code, del, dfn, 
	em, img, ins, kbd, q, s, samp, small, 
	strike, strong, sub, sup, tt, var, 
	b, u, i, center, dl, dt, dd, ol, 
	ul, li, fieldset, form, label, legend, 
	table, caption, tbody, tfoot, thead, 
	tr, th, td, article, aside, canvas, 
	details, embed, figure, figcaption,
	footer, header, hgroup, menu, nav, output,
	ruby, section, summary, time, mark, audio, video {
        font: revert;
        margin:revert;
        font-family:revert;
	}
	h1 {
        font-size: 2em;
        line-height: 2em;
        padding-top: 1em;
        margin-bottom: 0.6em;
        font-weight: 400;
        border-bottom: 1px solid #e9e9e9;
	}
	h2 {
        font-size: 1.68em;
        line-height: 1.68em;
        padding-top: 0.8em;
        margin-bottom: 0.4em;
        font-weight: 400;
        border-bottom: 1px solid #e9e9e9;
	}
	h3 {
        font-size: 1.36em;
        line-height: 1.5em;
        padding-top: 0.8em;
        margin-bottom: 0.2em;
        font-weight: 400;
	}
	h4 {
        font-size: 1.15em;
        line-height: 1.4em;
        padding-top: 0.7em;
        margin-bottom: 0.1em;
        font-weight: 400;
	}
	p{
        font-size: 1em;
        line-height: 1.6em;
        padding-top: 0.2em;
        margin-bottom: 0.8em;
	}
    figcaption{
        background-color: var(--ck-color-image-caption-background);
        caption-side: bottom;
        color: var(--ck-color-image-caption-text);
        display: table-caption;
        font-size: .75em;
        outline-offset: -1px;
        padding: 0.6em;
        word-break: break-word;
    }
        blockquote {}
    .table {
        margin: 0;
    }
    ul.todo-list {
        list-style: none;
        margin:revert;
        color:revert;
        font-family:revert;
        margin-left: 32px;
    }
    ul, ol {
        list-style: initial;
        margin-left: 32px;
    }
    ol {
        list-style: decimal !important;
    }
    sub{
        vertical-align: sub
    }
    sup{
        vertical-align: super
    }
}

/*
 * CKEditor 5 (v34.0.0) content styles.
 * Generated on Wed, 27 Apr 2022 06:51:54 GMT.
 * For more information, check out https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/content-styles.html
 */
:root {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
}
/* ckeditor5-block-quote/theme/blockquote.css */
.ck-content blockquote {
    overflow: hidden;
    padding-right: 1.5em;
    padding-left: 1.5em;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    border-left: solid 5px hsl(0, 0%, 80%);
}
/* ckeditor5-block-quote/theme/blockquote.css */
.ck-content[dir="rtl"] blockquote {
    border-left: 0;
    border-right: solid 5px hsl(0, 0%, 80%);
}
/* ckeditor5-basic-styles/theme/code.css */
.ck-content code {
    background-color: hsla(0, 0%, 78%, 0.3);
    padding: .15em;
    border-radius: 2px;
}
/* ckeditor5-font/theme/fontsize.css */
.ck-content .text-tiny {
    font-size: .7em;
}
/* ckeditor5-font/theme/fontsize.css */
.ck-content .text-small {
    font-size: .85em;
}
/* ckeditor5-font/theme/fontsize.css */
.ck-content .text-big {
    font-size: 1.4em;
}
/* ckeditor5-font/theme/fontsize.css */
.ck-content .text-huge {
    font-size: 1.8em;
}
/* ckeditor5-highlight/theme/highlight.css */
.ck-content .marker-yellow {
    background-color: var(--ck-highlight-marker-yellow);
}
/* ckeditor5-highlight/theme/highlight.css */
.ck-content .marker-green {
    background-color: var(--ck-highlight-marker-green);
}
/* ckeditor5-highlight/theme/highlight.css */
.ck-content .marker-pink {
    background-color: var(--ck-highlight-marker-pink);
}
/* ckeditor5-highlight/theme/highlight.css */
.ck-content .marker-blue {
    background-color: var(--ck-highlight-marker-blue);
}
/* ckeditor5-highlight/theme/highlight.css */
.ck-content .pen-red {
    color: var(--ck-highlight-pen-red);
    background-color: transparent;
}
/* ckeditor5-highlight/theme/highlight.css */
.ck-content .pen-green {
    color: var(--ck-highlight-pen-green);
    background-color: transparent;
}
/* ckeditor5-image/theme/image.css */
.ck-content .image {
    display: table;
    clear: both;
    text-align: center;
    margin: 0.9em auto;
    min-width: 50px;
}
/* ckeditor5-image/theme/image.css */
.ck-content .image img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    min-width: 100%;
}
/* ckeditor5-image/theme/image.css */
.ck-content .image-inline {
    /*
     * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).;
     * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
     * This strange behavior does not happen with inline-flex.
     */
    display: inline-flex;
    max-width: 100%;
    align-items: flex-start;
}
/* ckeditor5-image/theme/image.css */
.ck-content .image-inline picture {
    display: flex;
}
/* ckeditor5-image/theme/image.css */
.ck-content .image-inline picture,
.ck-content .image-inline img {
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 100%;
}
/* ckeditor5-image/theme/imageresize.css */
.ck-content .image.image_resized {
    max-width: 100%;
    display: block;
    box-sizing: border-box;
}
/* ckeditor5-image/theme/imageresize.css */
.ck-content .image.image_resized img {
    width: 100%;
}
/* ckeditor5-image/theme/imageresize.css */
.ck-content .image.image_resized > figcaption {
    display: block;
}
/* ckeditor5-image/theme/imagecaption.css */
.ck-content .image > figcaption {
    display: table-caption;
    caption-side: bottom;
    word-break: break-word;
    color: var(--ck-color-image-caption-text);
    background-color: var(--ck-color-image-caption-background);
    padding: .6em;
    font-size: .75em;
    outline-offset: -1px;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-block-align-left,
.ck-content .image-style-block-align-right {
    max-width: calc(100% - var(--ck-image-style-spacing));
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-align-left,
.ck-content .image-style-align-right {
    clear: none;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-side {
    float: right;
    margin-left: var(--ck-image-style-spacing);
    max-width: 50%;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-align-left {
    float: left;
    margin-right: var(--ck-image-style-spacing);
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-align-center {
    margin-left: auto;
    margin-right: auto;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-align-right {
    float: right;
    margin-left: var(--ck-image-style-spacing);
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-block-align-right {
    margin-right: 0;
    margin-left: auto;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-style-block-align-left {
    margin-left: 0;
    margin-right: auto;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content p + .image-style-align-left,
.ck-content p + .image-style-align-right,
.ck-content p + .image-style-side {
    margin-top: 0;
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-inline.image-style-align-left,
.ck-content .image-inline.image-style-align-right {
    margin-top: var(--ck-inline-image-style-spacing);
    margin-bottom: var(--ck-inline-image-style-spacing);
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-inline.image-style-align-left {
    margin-right: var(--ck-inline-image-style-spacing);
}
/* ckeditor5-image/theme/imagestyle.css */
.ck-content .image-inline.image-style-align-right {
    margin-left: var(--ck-inline-image-style-spacing);
}
/* ckeditor5-language/theme/language.css */
.ck-content span[lang] {
    font-style: italic;
}
/* ckeditor5-media-embed/theme/mediaembed.css */
.ck-content .media {
    clear: both;
    margin: 0.9em 0;
    display: block;
    min-width: 15em;
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list {
    list-style: none;
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list li {
    margin-bottom: 5px;
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list li .todo-list {
    margin-top: 5px;
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list .todo-list__label > input {
    -webkit-appearance: none;
    display: inline-block;
    position: relative;
    width: var(--ck-todo-list-checkmark-size);
    height: var(--ck-todo-list-checkmark-size);
    vertical-align: middle;
    border: 0;
    left: -25px;
    margin-right: -15px;
    right: 0;
    margin-left: 0;
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list .todo-list__label > input::before {
    display: block;
    position: absolute;
    box-sizing: border-box;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid hsl(0, 0%, 20%);
    border-radius: 2px;
    transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list .todo-list__label > input::after {
    display: block;
    position: absolute;
    box-sizing: content-box;
    pointer-events: none;
    content: '';
    left: calc( var(--ck-todo-list-checkmark-size) / 3 );
    top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
    width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
    height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
    border-style: solid;
    border-color: transparent;
    border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
    transform: rotate(45deg);
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list .todo-list__label > input[checked]::before {
    background: hsl(126, 64%, 41%);
    border-color: hsl(126, 64%, 41%);
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list .todo-list__label > input[checked]::after {
    border-color: hsl(0, 0%, 100%);
}
/* ckeditor5-list/theme/todolist.css */
.ck-content .todo-list .todo-list__label .todo-list__label__description {
    vertical-align: middle;
}
/* ckeditor5-page-break/theme/pagebreak.css */
.ck-content .page-break {
    position: relative;
    clear: both;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* ckeditor5-page-break/theme/pagebreak.css */
.ck-content .page-break::after {
    content: '';
    position: absolute;
    border-bottom: 2px dashed hsl(0, 0%, 77%);
    width: 100%;
}
/* ckeditor5-page-break/theme/pagebreak.css */
.ck-content .page-break__label {
    position: relative;
    z-index: 1;
    padding: .3em .6em;
    display: block;
    text-transform: uppercase;
    border: 1px solid hsl(0, 0%, 77%);
    border-radius: 2px;
    font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;
    font-size: 0.75em;
    font-weight: bold;
    color: hsl(0, 0%, 20%);
    background: hsl(0, 0%, 100%);
    box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/* ckeditor5-table/theme/tablecaption.css */
.ck-content .table > figcaption {
    display: table-caption;
    caption-side: top;
    word-break: break-word;
    text-align: center;
    color: var(--ck-color-table-caption-text);
    background-color: var(--ck-color-table-caption-background);
    padding: .6em;
    font-size: .75em;
    outline-offset: -1px;
}
/* ckeditor5-table/theme/table.css */
.ck-content .table {
    margin: 0.9em auto;
    display: table;
}
/* ckeditor5-table/theme/table.css */
.ck-content .table table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    height: 100%;
    border: 1px double hsl(0, 0%, 70%);
}
/* ckeditor5-table/theme/table.css */
.ck-content .table table td,
.ck-content .table table th {
    min-width: 2em;
    padding: .4em;
    border: 1px solid hsl(0, 0%, 75%);
}
/* ckeditor5-table/theme/table.css */
.ck-content .table table th {
    font-weight: bold;
    background: hsla(0, 0%, 0%, 5%);
}
/* ckeditor5-table/theme/table.css */
.ck-content[dir="rtl"] .table th {
    text-align: right;
}
/* ckeditor5-table/theme/table.css */
.ck-content[dir="ltr"] .table th {
    text-align: left;
}
/* ckeditor5-code-block/theme/codeblock.css */
.ck-content pre {
    padding: 1em;
    color: hsl(0, 0%, 20.8%);
    background: hsla(0, 0%, 78%, 0.3);
    border: 1px solid hsl(0, 0%, 77%);
    border-radius: 2px;
    text-align: left;
    direction: ltr;
    tab-size: 4;
    white-space: pre-wrap;
    font-style: normal;
    min-width: 200px;
}
/* ckeditor5-code-block/theme/codeblock.css */
.ck-content pre code {
    background: unset;
    padding: 0;
    border-radius: 0;
}
/* ckeditor5-horizontal-line/theme/horizontalline.css */
.ck-content hr {
    margin: 15px 0;
    height: 4px;
    background: hsl(0, 0%, 87%);
    border: 0;
}
/* ckeditor5-mention/theme/mention.css */
.ck-content .mention {
    background: var(--ck-color-mention-background);
    color: var(--ck-color-mention-text);
}
@media print {
    /* ckeditor5-page-break/theme/pagebreak.css */
    .ck-content .page-break {
        padding: 0;
    }
    /* ckeditor5-page-break/theme/pagebreak.css */
    .ck-content .page-break::after {
        display: none;
    }
}
`;

export default styles