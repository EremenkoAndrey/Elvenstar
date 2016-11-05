(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["product-modal.nunj"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"modal__title modal__block\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "message"), env.opts.autoescape);
output += "</div>\r\n\r\n<section class=\"product-modal modal__block\">\r\n    <div class=\"product-modal__img-section\">\r\n        <img class=\"product-modal__img photo\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "imgSrc"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "\">\r\n    </div>\r\n\r\n    <div class=\"product-modal__info-section\">\r\n        <h4 class=\"block-title product-modal__name\">\r\n            ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "\r\n        </h4>\r\n        <ul class=\"product-modal__props\">\r\n            <li class=\"product-modal__prop\">\r\n                <b>Количество: </b> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "quantity"), env.opts.autoescape);
output += "\r\n            </li>\r\n            ";
if(runtime.contextOrFrameLookup(context, frame, "decodedProps")) {
output += "\r\n                ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "decodedProps");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("prop", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n                    ";
frame = frame.push();
var t_7 = t_4;
if(t_7) {var t_5;
if(runtime.isArray(t_7)) {
var t_6 = t_7.length;
for(t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5][0]
frame.set("name", t_7[t_5][0]);
var t_9 = t_7[t_5][1]
frame.set("value", t_7[t_5][1]);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\r\n                        <li  class=\"product-modal__prop\"><b>";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += ": </b> ";
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += "</li>\r\n                    ";
;
}
} else {
t_5 = -1;
var t_6 = runtime.keys(t_7).length;
for(var t_10 in t_7) {
t_5++;
var t_11 = t_7[t_10];
frame.set("name", t_10);
frame.set("value", t_11);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\r\n                        <li  class=\"product-modal__prop\"><b>";
output += runtime.suppressValue(t_10, env.opts.autoescape);
output += ": </b> ";
output += runtime.suppressValue(t_11, env.opts.autoescape);
output += "</li>\r\n                    ";
;
}
}
}
frame = frame.pop();
output += "\r\n                ";
;
}
}
frame = frame.pop();
output += "\r\n            ";
;
}
output += "\r\n        </ul>\r\n\r\n        <div class=\"product-modal__summ\">\r\n            На сумму:  <span class=\"price price_bold price_sale product-modal__price\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "price") * runtime.contextOrFrameLookup(context, frame, "quantity"), env.opts.autoescape);
output += "</span>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"product-modal__footer\">\r\n    <button class=\"product-modal__close btn-default btn-default_hover_not\" data-click=\"close\">Закрыть окно</button>\r\n    <a href=\"/personal/order/make/\" class=\"product-modal__cart-link btn-default btn-default_black\">Оформить заказ</a>\r\n</div>";
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
