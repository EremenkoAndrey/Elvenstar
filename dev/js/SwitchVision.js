//Переключает видимость компонента при изменении паметра this.options.prop
//this.options.showClass - класс, показывающий блок
//публичный метод close закрывает окно
// Можно передать объект с настройками анимации:
// animate.attr - анимируемый атрибут
// animate.showSeed - скорость анимации показа элемента (по умолчания 1000)
// animate.hideSeed - скорость анимации сокрытия элемента (по умолчания х3 скорости анимации)

Component.create('SwitchVision', {
    events: ['click'],
    init: function () {
        var prop = this.options.prop,
            showClass = this.options.showClass,
            animate = this.options.animate || {},
            showSpeed = animate.showSeed || 1000;

        this.on('change', prop, function (show) {
            if(show) {
                showElement.apply(this);
            } else {
                hideElement.apply(this);
            }
        });

        function showElement() {
            if(showClass) {
                this.$el.addClass(showClass);
            } else if (animate) {
                var attr = {};
                attr[animate.attr] = 'show';
                this.$el.animate(attr,showSpeed);
            }
        }

        function hideElement() {
            if(showClass) {
                this.$el.removeClass(showClass);
            } else if (animate) {
                var attr = {};
                attr[animate.attr] = 'hide';
                this.$el.animate(attr, animate.hideSpeed || (showSpeed / 3));
            }
        }
    },
    close: function () {
        var obj = {};
        obj[this.options.prop] = false;
        this.controller.set(obj);
    }
});
