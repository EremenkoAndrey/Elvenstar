Component.create('UserMenu', {
    init: function () {
        this.controller.on('userAuthorised', function () {
            this.renderUserMenu();
        }, this);
    },
    renderUserMenu: function () {
        var $template = $(this.template());
        this.$el.html($template);
    },
    template: function () {
        return  '<li class="horizontal-list__item">' +
                '<a class="link link_decoration_none header__link header__link_user-icon" href="/personal/">Личный кабинет</a>' +
                '</li>' + '<li class="horizontal-list__item">' +
                '<form>' + '<input type="hidden" name="logout" value="yes" />' +
                '<input type="submit" class="btn-default" value="Выйти" />' +
                '</form></li>';
    }
});

