// Принимаемые параметры (все обязательные):
// modal: селектор блока, который будет открываться и закрываться - окна
// openModalClass: класс, который будет добавляться окну чтобы оно открылось
// modalContainer: селетор элемента, в который вставить загруженный аяксом контент
// url: ссылка на детальную страницу товара
// blockId: ID (селектор) блока на странице товара, который будет вырезаться и вставляться в модальное окно

Component.create('QuickView', {
    events: ['click'],
    init: function () {
        var self = this;

        this.status = false;

        this.controller.on('closeQuickViewWindows', function () {
            self.closeQuickViewWindow();
        });
    },
    openQuickViewWindow: function (e) {
        if(e) e.preventDefault();

        this.getContent();
        this.findModal();
        this.controller.trigger('closeQuickViewWindows');
        this.modal.addClass(this.options.openModalClass);
        this.status = true;
    },
    closeQuickViewWindow: function (e) {
        if(e) e.preventDefault();

        this.findModal();
        this.modal.removeClass(this.options.openModalClass);
        this.status = false;
    },
    findModal: function () {
        this.modal = this.modal || $(this.options.modal, this.$el).eq(0);
    },
    getContent: function () {
        if(this.loaded || this.process) return;
        var self = this;

        this.process = true;

        var res = $.ajax({
            url: this.options.url,
            dataType: 'html'
        });

        res.fail(function (err) {
            self.process = false;
            console.log(err);
        });

        res.done(function (data) {
            var html = $(self.options.blockId, data);
            self.process = false;
            self.loaded = true;

            $(self.options.modalContainer, self.$el).eq(0).html(html);
            self.controller.findBlocks($(self.options.modalContainer));
        })
    }
});
