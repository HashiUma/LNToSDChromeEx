const util = {
    CopyClipBoard: function(value) {
        if (!navigator.clipboard) {
            Toastify({
                text: "コピー機能(navigator.clipboard)を利用できません。",
                duration: 2000
            }).showToast();
            return
        }
        navigator.clipboard.writeText(value).then(
            () => {
                Toastify({
                    text: "コピーしました。",
                    duration: 2000
                }).showToast();
            },
            () => {
                console.log('Copy False!');
            }
        );

    }
}