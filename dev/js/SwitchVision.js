Component.create('SwitchVision', {
    init: function () {
        var prop = this.options.prop,
            showClass = this.options.showClass;

        this.controller.on('change', prop, function (show) {
            if(show) {
                this.$el.addClass(showClass);
            } else {
                this.$el.removeClass(showClass);
            }
        }, this);
    }
});
