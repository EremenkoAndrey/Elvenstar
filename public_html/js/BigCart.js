// Работа компонента завязана на собитии change, поэтому важно, чтобы компонент был привязан к элементу form.
Component.create('BigCart', {
    events: ['click'],
    init: function () {
        this.ajaxData = {
            action_var: 'action',
            BasketOrder: 'BasketOrder',
            action: 'recalculate'
        };
        $.extend(this.ajaxData, this.options.serverSettings);
        this.$itogEl = $(this.options.itogElement, this.$el).eq(0);

        this.$el.on('change', function (event) {
            var $el = $(event.target);
            var dataForAjax = {};
            dataForAjax[$el.attr('name')] = $el.val();
           this.send(dataForAjax);
        }.bind(this));

        this.controller.on('miniCartUpdated', function () {
            window.location.reload();
        })
    },
    send: function (dataForAjax) {
        $.extend(this.ajaxData, dataForAjax);

        var res = $.ajax({
            method: 'POST',
            url: '/bitrix/components/elvenstar/sale.basket.basket/ajax.php',
            data: this.ajaxData,
            dataType: 'json'
        });
        res.done(function (data) {
            this.$itogEl.html(data.BASKET_DATA.allSum);
        }.bind(this));
        res.fail(function (err) {
            console.log('fail', arguments);
        })
    }
});