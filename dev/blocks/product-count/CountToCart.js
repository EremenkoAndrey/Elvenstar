Component.create('CountToCart', {
    events: ['click'],
    init: function () {
        this.$input = $('input', this.$el).eq(0);
        this.currentValue = parseInt(this.$input.val(), 10);
        this.maxValue = 1000;
        this.minValue = 1;

        this.$input.on('change', function () {
            var newValue = this.$input.val();

            if(!this.validate(newValue)) {
                this.reset();
            } else {
                this.currentValue =  parseInt(newValue);
            };
        }.bind(this));
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
        }
    },
    reduce: function () {
        var newValue = this.currentValue - 1;

        if(this.validate(newValue)) {
            this.$input.val(--this.currentValue);
        }
    }

});