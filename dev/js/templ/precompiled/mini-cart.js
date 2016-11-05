(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["mini-cart.nunj"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "arResult")),"CATEGORIES")),"READY")) > 0) {
output += "\r\n\r\n    ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "arResult")),"CATEGORIES")),"READY");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("arItem", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n        <div class=\"mini-cart__block\">\r\n\r\n            <div class=\"mini-cart__product\">\r\n                <a href=\"#\" class=\"mini-cart__photo photo photo_border_3\"\r\n                   style=\"background-image: url(";
output += runtime.suppressValue(runtime.memberLookup((t_4),"PICTURE_SRC"), env.opts.autoescape);
output += ")\">\r\n                </a>\r\n                <div class=\"mini-cart__product-info\">\r\n                    <span class=\"mini-cart__count\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"QUANTITY"), env.opts.autoescape);
output += "x</span>\r\n                    <a class=\"mini-cart__product-link link link_decoration_none\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"DETAIL_PAGE_URL"), env.opts.autoescape);
output += "\">\r\n                        ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"NAME"), env.opts.autoescape);
output += "\r\n                    </a>\r\n                    <div class=\"mini-cart__price\">\r\n                        <span class=\"price\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"PRICE"), env.opts.autoescape);
output += "</span>\r\n                        <a href=\"#\" class=\"mini-cart__delete\" title=\"Удалить\" data-productId=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"ID"), env.opts.autoescape);
output += "\" data-click=\"deleteItem\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    ";
;
}
}
frame = frame.pop();
output += "\r\n\r\n    <div class=\"mini-cart__block mini-cart__total\">\r\n                    <span class=\"mini-cart__total-txt\">\r\n                        Итого:\r\n                    </span>\r\n        <div class=\"mini-cart__total-price\">\r\n            <span class=\"price\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "arResult")),"TOTAL_PRICE"), env.opts.autoescape);
output += "</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mini-cart__block mini-cart__block_no_border\">\r\n        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "arParams")),"PATH_TO_BASKET"), env.opts.autoescape);
output += "\" class=\"btn-default btn-default_black btn-default_box-shadow_none\">\r\n            Перейти в корзину\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"mini-cart__block mini-cart__block_no_border\">\r\n        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "arParams")),"PATH_TO_ORDER"), env.opts.autoescape);
output += "\" class=\"btn-default btn-default_black btn-default_box-shadow_none\">\r\n            Оформить заказ\r\n        </a>\r\n    </div>\r\n\r\n";
;
}
else {
output += "\r\n    Ваша корзина пока пуста\r\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
