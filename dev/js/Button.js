// Компонент при клике на эдемент переключает значение
// переданного в свойстве prop параметра
// Передав свойство activeClass можно добавлять/удалять класс самой кнопки в зависимости от ее состояния

Component.create('Button', {
    init: function () {
        this.status = false;

        var propsObject = {},
            prop = this.options.prop,
            activeClass = this.options.activeClass;
        propsObject[prop] = this.status;

        this.$el.on('click', function (event) {
            event.preventDefault();
            propsObject[prop] = !this.status;
            this.controller.set(propsObject);
        }.bind(this));

        this.controller.on('change', prop, function (status) {
            this.status = status;
            if(!activeClass) return;

            if(this.status) {
                this.$el.addClass(activeClass);
            } else {
                this.$el.removeClass(activeClass);
            }
        }, this);
    }
});
