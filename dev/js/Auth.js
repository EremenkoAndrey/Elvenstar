Component.create('Auth', {
    events: ['click'],
    init: function () {
        var self = this;

        this.$el.keydown(function(event){
            if(event.keyCode === 13) {
                self.login(event);
            }
        });
    },
    login: function (e) {
        e.preventDefault();
        var data = this.getData();
        var res = $.ajax({
            type: "POST",
            url: "/",
            dataType: 'json',
            data: data
        });

        res.done(function (data) {
             if(typeof (data) !== 'object' ) return;

            if (data.result === 'ok') {
                this.controller.trigger('userAuthorised');
                var userName = (data.user_name)? ' как <b>' + data.user_name: '</b>';
                this.resRender('ok', 'Здравствуйте! <br /> Вы успешно авторизовались' + userName);
            } else {
                this.resRender('error', 'Не правильный логин или пароль. <br /> Проверьте, не включен ли CAPS LOCK');
            }
        }.bind(this));

        res.fail(function (err) {
            this.resRender('error', 'Произошла ошибка. Попробуйте перезагрузить страницу');
        }.bind(this));
    },
    getData: function () {
        var data = {};
        data['ajax_auth_key'] = this.options.key;
        $('input', this.$el).each(function () {
            if ($(this).attr('name').length) {
                data[$(this).attr('name')] = $(this).val();
            }
        });
        return data;
    },
    resRender: function (type, text) {
        var $container = $(this.options.resultContainer, this.$el).eq(0);
        if ($container.length === 0) {
            $container = this.$el;
        }

        if(type === 'error') {
            $container.html('<div class="error">' + text + '</div>');
        }
        if(type === 'ok') {
            this.$el.html('<div class="form__result"><div class="success">' + text + '</div></div>' +
             '<div class="form__reload"><a class="btn-default btn-default_black btn-default_box-shadow_none" data-click="reload" href="#">Обновить страницу</a></div>');
        }
    },
    reload: function (e) {
        e.preventDefault();
        window.location = window.location;
    }
});