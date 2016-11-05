// On 'change' get attribute value from select,
// parse string and call event. Sent new array with get-params to controller
Component.create('Sort', {
    init: function () {
        var self = this;
        this.$el.on('change', function () {
            var elValue = self.$el.val();
                self.controller.trigger('addGetParams', null, elValue);
        });

    }
});