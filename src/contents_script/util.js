const util = {
    CopyClipBoard: function(value) {
        if (!navigator.clipboard) {
            console.log('Clipboard API not available')
            return
        }
        navigator.clipboard.writeText(value).then(
            () => {
                console.log('Copy Done!');
            },
            () => {
                console.log('Copy False!');
            }
        );

    }
}