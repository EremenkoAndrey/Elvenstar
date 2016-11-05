//= ./templ/precompiled/mini-cart.js

Component.create('MiniCart', {
    events: ['click'],
    init: function () {
        this.$countInfoContainer = $(this.options.countInfoContainer, this.$el).eq(0);
        this.$miniCartContainer = $(this.options.miniCartContainer, this.$el).eq(0);
        this.controller.on('cartContentChanged', function () {
            this.updateCart();
        }, this);

    },
    updateCart: function () {
        var self = this,
            data = {},
            url = this.options.ajaxPath;

        data.siteId = this.options.siteId;
        data.sessid = this.options.sessid;

        var res = $.ajax({
            method: 'POST',
            data: data,
            url: url
        });
        res.done(function (data) {
            self.render(data);
            self.controller.trigger('miniCartUpdated');
        });
        res.fail(function (err) {
            self.$miniCartContainer.prepend($('<div class="error">Ошибка обновления корзины. Попробуйте перезагрузить страницу</div>'));
            console.log(err);
        });
    },
    render: function (data) {
        if(data.arResult['NUM_PRODUCTS'] > 0){
            this.$countInfoContainer.html(data.arResult['PRODUCTS']);
        } else {
            this.$countInfoContainer.html($('<span class="cart__text">' + data.arResult['ERROR_MESSAGE'] +
            '</span><span class="cart__null">0</span>'));
        }

        this.$miniCartContainer.html(nunjucks.render('mini-cart.nunj', data));
    },
    deleteItem: function (event) {
        event.preventDefault();

        var self = this,
            url = this.options.pathToCart,
            productid = $(event.target).data('productid');

        var res = $.ajax({
            method: 'GET',
            data: {
                action: 'delete',
                id: productid
            },
            url: url
        });
        res.done(function () {
            self.updateCart();
        });
        res.fail(function (err) {
            self.$miniCartContainer.prepend($('<div class="error">Ошибка удаления товара. Попробуйте обновить страницу</div>'));
            console.log(err);
        });
    }
});