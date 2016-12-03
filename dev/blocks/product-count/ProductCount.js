Component.create('ProductCount', {
    events: ['click', 'change', 'keyup'],
    init: function () {
        this.$input = $('input', this.$el).eq(0);
        this.currentValue = parseInt(this.$input.val(), 10);
        this.maxValue = parseInt(this.options.max, 10);
        this.minValue = parseInt(this.options.min, 10) || 0;
        this.delay = null;

        if(isNaN(this.maxValue)) {
            this.maxValue = 100;
        }
    },
    setNewValue: function (event) {
        var newValue = event.target.value;
        if (!this.validate(newValue)) {
            this.reset();
        } else {
            this.currentValue = parseInt(newValue);
        }
    },
    changedKey: function (event) {
        var self = this;

        if(this.delay) return;
        this.delay = setTimeout(function () {
            if( parseInt(event.target.value) !== self.currentValue) {
                self.setNewValue(event);
            }
            self.delay = null;
        }, 700)
    },
    validate: function (newValue) {
        newValue = parseInt(newValue, 10);

        if( isNaN(newValue) ||
            newValue > this.maxValue ||
            newValue < this.minValue ) {

            return false;
        }
        return true;
    },
    reset: function () {
        this.$input.val(this.currentValue);
    },
    add: function () {
        var newValue = this.currentValue + 1;
        if(this.validate(newValue)) {
            this.$input.val(++this.currentValue);
            this.$input.trigger('change');
        }
    },
    reduce: function () {
        var newValue = this.currentValue - 1;

        if(this.validate(newValue)) {
            this.$input.val(--this.currentValue);
            this.$input.trigger('change');
        }
    }

});