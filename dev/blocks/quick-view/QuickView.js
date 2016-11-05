Component.create('QuickView', {
    events: ['click'],
    init: function () {
        this.status = false;
    },
    toggleQuickViewWindow: function (e) {
        e.preventDefault();

        if(!this.status) {
            this.openWindow();
        } else {
            this.closeWindow();
        }
    },
    openWindow: function () {
        console.log('open');
    },
    closeWindow: function () {
        console.log('close');
    }
});
