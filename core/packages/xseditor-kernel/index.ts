export default (Config?: Target) => {
    return {
        children: [],
        _data: {
            contenteditable: "true",
            allowdrop: "true",
            class: `xs-editor-container`
        },
        _tag: "article",
        _type: 1,
        _value: undefined
    }
}