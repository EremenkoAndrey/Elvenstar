Component.create('AddToCart', {
    events: ['click'],
    add2cart: function () {
        var self = this;
        var productInfo = this.productAttrs();

        var res = $.ajax({
            type: 'POST',
            dataType: 'json',
            data: productInfo
        });
        res.done(function (response) {
            productInfo.status = response.STATUS;
            productInfo.message = response.MESSAGE;
            self.controller.trigger('cartContentChanged', null, productInfo);
        });
        res.fail(function (err) {
            console.log('Error on AddToCart', err);
        })
    },
    productAttrs: function () {
        var self = this;
        var object = {
            'ajax_basket': 'Y',
            'action': 'ADD2BASKET',
            'id': parseInt(self.options.id)
        };

        var $selectedOptions = $(this.options.props, this.$el);

        if($selectedOptions.length > 0) {
            object.decodedProps = [];
            $selectedOptions.each(function (index, item) {
                var $item = $(item),
                    nameAndCurrentValue = {};
                nameAndCurrentValue[$item.attr('data-name')] = $item.find('option:selected').text();
                object.decodedProps.push(nameAndCurrentValue);

                object[$item.attr('name')] = parseInt( $item.val() );
            });
        } else {
            object['prop[0]'] = 0;
        }

        var $quantityInput = $(this.options.count, this.$el),
            quantity = $quantityInput.eq(0).val();

        if(quantity) {
            object.quantity = parseInt(quantity);
        } else {
            console.error('Problem with the quantity');
            object.quantity = 1;
        }

         return object;
    }
});