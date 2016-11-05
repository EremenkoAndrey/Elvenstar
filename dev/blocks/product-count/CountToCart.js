Component.create('CountToCart', {
    events: ['click'],
    init: function () {
        this.$input = $('input', this.$el).eq(0);
        this.currentValue = parseInt(this.$input.val(), 10);
        this.maxValue = parseInt(this.options.max, 10);
        this.minValue = parseInt(this.options.min, 10) || 0;

        var self = this,
            delay = null;

        if(isNaN(this.maxValue)) {
            this.maxValue = 100;
        }

        this.$input.on('change', function () {
            var newValue = self.$input.val();

            if(!self.validate(newValue)) {
                self.reset();
            } else {
                self.currentValue =  parseInt(newValue);
            }
        });

        this.$input.on('keyup', function (event) {
            if(delay) return;
            delay = setTimeout(function () {
                if( parseInt($(event.target).val()) !== self.currentValue) {
                    self.$input.trigger('change');
                }
                delay = null;
            }, 700)
        });

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