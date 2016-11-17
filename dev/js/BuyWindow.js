//= ./templ/precompiled/product-modal.js

Component.create('BuyWindow', {
    events: ['click'],
    init: function () {
        this.open = false;
        this.controller.on('cartContentChanged', function (data) {
            data.name = this.options.name;
            data.imgSrc = this.options.img;
            data.price = this.options.price;
            this.show(data);
        }, this);
    },
    show: function (data) {
        if(this.open) {
            this.close();
        }
        this.render(data);
        this.open = true;
        this.$el.show();
    },
    close: function () {
        if(this.open) {
            this.open = false;
            this.$el.hide();
        }
    },
    render: function (data) {
        this.$el.html( nunjucks.render('product-modal.nunj', data) );
    }
});