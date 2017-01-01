/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/*! Browser bundle of nunjucks 2.5.2 (slim, only works with precompiled templates) */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.nunjucks=e():t.nunjucks=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1),i=n(2),o=n(11),s=n(3),u=n(3);t.exports={},t.exports.Environment=i.Environment,t.exports.Template=i.Template,t.exports.Loader=o,t.exports.FileSystemLoader=s.FileSystemLoader,t.exports.PrecompiledLoader=s.PrecompiledLoader,t.exports.WebLoader=s.WebLoader,t.exports.compiler=n(3),t.exports.parser=n(3),t.exports.lexer=n(3),t.exports.runtime=n(8),t.exports.lib=r,t.exports.nodes=n(3),t.exports.installJinjaCompat=n(12);var a;t.exports.configure=function(t,e){e=e||{},r.isObject(t)&&(e=t,t=null);var n;return s.FileSystemLoader?n=new s.FileSystemLoader(t,{watch:e.watch,noCache:e.noCache}):s.WebLoader&&(n=new s.WebLoader(t,{useCache:e.web&&e.web.useCache,async:e.web&&e.web.async})),a=new i.Environment(n,e),e&&e.express&&a.express(e.express),a},t.exports.compile=function(e,n,r,i){return a||t.exports.configure(),new t.exports.Template(e,n,r,i)},t.exports.render=function(e,n,r){return a||t.exports.configure(),a.render(e,n,r)},t.exports.renderString=function(e,n,r){return a||t.exports.configure(),a.renderString(e,n,r)},u&&(t.exports.precompile=u.precompile,t.exports.precompileString=u.precompileString)},function(t,e){"use strict";var n=Array.prototype,r=Object.prototype,i={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},o=/[&"'<>]/g,s=function(t){return i[t]},e=t.exports={};e.prettifyError=function(t,n,r){if(r.Update||(r=new e.TemplateError(r)),r.Update(t),!n){var i=r;r=new Error(i.message),r.name=i.name}return r},e.TemplateError=function(t,e,n){var r=this;if(t instanceof Error){r=t,t=t.name+": "+t.message;try{r.name=""}catch(i){r=this}}else Error.captureStackTrace&&Error.captureStackTrace(r);return r.name="Template render error",r.message=t,r.lineno=e,r.colno=n,r.firstUpdate=!0,r.Update=function(t){var e="("+(t||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?e+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(e+=" [Line "+this.lineno+"]")),e+="\n ",this.firstUpdate&&(e+=" "),this.message=e+(this.message||""),this.firstUpdate=!1,this},r},e.TemplateError.prototype=Error.prototype,e.escape=function(t){return t.replace(o,s)},e.isFunction=function(t){return"[object Function]"===r.toString.call(t)},e.isArray=Array.isArray||function(t){return"[object Array]"===r.toString.call(t)},e.isString=function(t){return"[object String]"===r.toString.call(t)},e.isObject=function(t){return"[object Object]"===r.toString.call(t)},e.groupBy=function(t,n){for(var r={},i=e.isFunction(n)?n:function(t){return t[n]},o=0;o<t.length;o++){var s=t[o],u=i(s,o);(r[u]||(r[u]=[])).push(s)}return r},e.toArray=function(t){return Array.prototype.slice.call(t)},e.without=function(t){var n=[];if(!t)return n;for(var r=-1,i=t.length,o=e.toArray(arguments).slice(1);++r<i;)-1===e.indexOf(o,t[r])&&n.push(t[r]);return n},e.extend=function(t,e){for(var n in e)t[n]=e[n];return t},e.repeat=function(t,e){for(var n="",r=0;e>r;r++)n+=t;return n},e.each=function(t,e,r){if(null!=t)if(n.each&&t.each===n.each)t.forEach(e,r);else if(t.length===+t.length)for(var i=0,o=t.length;o>i;i++)e.call(r,t[i],i,t)},e.map=function(t,e){var r=[];if(null==t)return r;if(n.map&&t.map===n.map)return t.map(e);for(var i=0;i<t.length;i++)r[r.length]=e(t[i],i);return t.length===+t.length&&(r.length=t.length),r},e.asyncIter=function(t,e,n){function r(){i++,i<t.length?e(t[i],i,r,n):n()}var i=-1;r()},e.asyncFor=function(t,n,r){function i(){u++;var e=o[u];s>u?n(e,t[e],u,s,i):r()}var o=e.keys(t),s=o.length,u=-1;i()},e.indexOf=Array.prototype.indexOf?function(t,e,n){return Array.prototype.indexOf.call(t,e,n)}:function(t,e,n){var r=this.length>>>0;for(n=+n||0,Math.abs(n)===1/0&&(n=0),0>n&&(n+=r,0>n&&(n=0));r>n;n++)if(t[n]===e)return n;return-1},Array.prototype.map||(Array.prototype.map=function(){throw new Error("map is unimplemented for this js engine")}),e.keys=function(t){if(Object.prototype.keys)return t.keys();var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e},e.inOperator=function(t,n){if(e.isArray(n))return-1!==e.indexOf(n,t);if(e.isObject(n))return t in n;if(e.isString(n))return-1!==n.indexOf(t);throw new Error('Cannot use "in" operator to search for "'+t+'" in unexpected types.')}},function(t,e,n){"use strict";function r(t,e,n){s(function(){t(e,n)})}var i,o=n(3),s=n(4),u=n(1),a=n(6),c=n(3),l=n(7),f=n(3),p=n(8),h=n(9),v=p.Frame;f.PrecompiledLoader=n(10);var d=a.extend({init:function(t,e){e=this.opts=e||{},this.opts.dev=!!e.dev,this.opts.autoescape=null!=e.autoescape?e.autoescape:!0,this.opts.throwOnUndefined=!!e.throwOnUndefined,this.opts.trimBlocks=!!e.trimBlocks,this.opts.lstripBlocks=!!e.lstripBlocks,this.loaders=[],t?this.loaders=u.isArray(t)?t:[t]:f.FileSystemLoader?this.loaders=[new f.FileSystemLoader("views")]:f.WebLoader&&(this.loaders=[new f.WebLoader("/views")]),window.nunjucksPrecompiled&&this.loaders.unshift(new f.PrecompiledLoader(window.nunjucksPrecompiled)),this.initCache(),this.globals=h(),this.filters={},this.asyncFilters=[],this.extensions={},this.extensionsList=[];for(var n in l)this.addFilter(n,l[n])},initCache:function(){u.each(this.loaders,function(t){t.cache={},"function"==typeof t.on&&t.on("update",function(e){t.cache[e]=null})})},addExtension:function(t,e){return e._name=t,this.extensions[t]=e,this.extensionsList.push(e),this},removeExtension:function(t){var e=this.getExtension(t);e&&(this.extensionsList=u.without(this.extensionsList,e),delete this.extensions[t])},getExtension:function(t){return this.extensions[t]},hasExtension:function(t){return!!this.extensions[t]},addGlobal:function(t,e){return this.globals[t]=e,this},getGlobal:function(t){if("undefined"==typeof this.globals[t])throw new Error("global not found: "+t);return this.globals[t]},addFilter:function(t,e,n){var r=e;return n&&this.asyncFilters.push(t),this.filters[t]=r,this},getFilter:function(t){if(!this.filters[t])throw new Error("filter not found: "+t);return this.filters[t]},resolveTemplate:function(t,e,n){var r=t.isRelative&&e?t.isRelative(n):!1;return r&&t.resolve?t.resolve(e,n):n},getTemplate:function(t,e,n,r,o){var s=this,a=null;if(t&&t.raw&&(t=t.raw),u.isFunction(n)&&(o=n,n=null,e=e||!1),u.isFunction(e)&&(o=e,e=!1),t instanceof i)a=t;else{if("string"!=typeof t)throw new Error("template names must be a string: "+t);for(var c=0;c<this.loaders.length;c++){var l=this.resolveTemplate(this.loaders[c],n,t);if(a=this.loaders[c].cache[l])break}}if(!a){var f,p=this,h=function(n,s){if(s||n||r||(n=new Error("template not found: "+t)),n){if(!o)throw n;o(n)}else{var u;s?(u=new i(s.src,p,s.path,e),s.noCache||(s.loader.cache[t]=u)):u=new i("",p,"",e),o?o(null,u):f=u}};return u.asyncIter(this.loaders,function(e,r,i,o){function u(t,n){t?o(t):n?(n.loader=e,o(null,n)):i()}t=s.resolveTemplate(e,n,t),e.async?e.getSource(t,u):u(null,e.getSource(t))},h),f}return e&&a.compile(),o?void o(null,a):a},express:function(t){function e(t,e){if(this.name=t,this.path=t,this.defaultEngine=e.defaultEngine,this.ext=o.extname(t),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=("."!==this.defaultEngine[0]?".":"")+this.defaultEngine)}var n=this;return e.prototype.render=function(t,e){n.render(this.name,t,e)},t.set("view",e),t.set("nunjucksEnv",this),this},render:function(t,e,n){u.isFunction(e)&&(n=e,e=null);var i=null;return this.getTemplate(t,function(t,o){if(t&&n)r(n,t);else{if(t)throw t;i=o.render(e,n)}}),i},renderString:function(t,e,n,r){u.isFunction(n)&&(r=n,n={}),n=n||{};var o=new i(t,this,n.path);return o.render(e,r)}}),g=a.extend({init:function(t,e,n){this.env=n||new d,this.ctx={};for(var r in t)t.hasOwnProperty(r)&&(this.ctx[r]=t[r]);this.blocks={},this.exported=[];for(var i in e)this.addBlock(i,e[i])},lookup:function(t){return t in this.env.globals&&!(t in this.ctx)?this.env.globals[t]:this.ctx[t]},setVariable:function(t,e){this.ctx[t]=e},getVariables:function(){return this.ctx},addBlock:function(t,e){return this.blocks[t]=this.blocks[t]||[],this.blocks[t].push(e),this},getBlock:function(t){if(!this.blocks[t])throw new Error('unknown block "'+t+'"');return this.blocks[t][0]},getSuper:function(t,e,n,r,i,o){var s=u.indexOf(this.blocks[e]||[],n),a=this.blocks[e][s+1],c=this;if(-1===s||!a)throw new Error('no super block available for "'+e+'"');a(t,c,r,i,o)},addExport:function(t){this.exported.push(t)},getExported:function(){for(var t={},e=0;e<this.exported.length;e++){var n=this.exported[e];t[n]=this.ctx[n]}return t}});i=a.extend({init:function(t,e,n,r){if(this.env=e||new d,u.isObject(t))switch(t.type){case"code":this.tmplProps=t.obj;break;case"string":this.tmplStr=t.obj}else{if(!u.isString(t))throw new Error("src must be a string or an object describing the source");this.tmplStr=t}if(this.path=n,r){var i=this;try{i._compile()}catch(o){throw u.prettifyError(this.path,this.env.opts.dev,o)}}else this.compiled=!1},render:function(t,e,n){"function"==typeof t?(n=t,t={}):"function"==typeof e&&(n=e,e=null);var i=!0;e&&(i=!1);var o=this;try{o.compile()}catch(s){var a=u.prettifyError(this.path,this.env.opts.dev,s);if(n)return r(n,a);throw a}var c=new g(t||{},o.blocks,o.env),l=e?e.push(!0):new v;l.topLevel=!0;var f=null;return o.rootRenderFunc(o.env,c,l||new v,p,function(t,e){if(t&&(t=u.prettifyError(o.path,o.env.opts.dev,t)),n)i?r(n,t,e):n(t,e);else{if(t)throw t;f=e}}),f},getExported:function(t,e,n){"function"==typeof t&&(n=t,t={}),"function"==typeof e&&(n=e,e=null);try{this.compile()}catch(r){if(n)return n(r);throw r}var i=e?e.push():new v;i.topLevel=!0;var o=new g(t||{},this.blocks,this.env);this.rootRenderFunc(this.env,o,i,p,function(t){t?n(t,null):n(null,o.getExported())})},compile:function(){this.compiled||this._compile()},_compile:function(){var t;if(this.tmplProps)t=this.tmplProps;else{var e=c.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts),n=new Function(e);t=n()}this.blocks=this._getBlocks(t),this.rootRenderFunc=t.root,this.compiled=!0},_getBlocks:function(t){var e={};for(var n in t)"b_"===n.slice(0,2)&&(e[n.slice(2)]=t[n]);return e}}),t.exports={Environment:d,Template:i}},function(t,e){},function(t,e,n){"use strict";function r(){if(a.length)throw a.shift()}function i(t){var e;e=u.length?u.pop():new o,e.task=t,s(e)}function o(){this.task=null}var s=n(5),u=[],a=[],c=s.makeRequestCallFromTimer(r);t.exports=i,o.prototype.call=function(){try{this.task.call()}catch(t){i.onerror?i.onerror(t):(a.push(t),c())}finally{this.task=null,u[u.length]=this}}},function(t,e){(function(e){"use strict";function n(t){u.length||(s(),a=!0),u[u.length]=t}function r(){for(;c<u.length;){var t=c;if(c+=1,u[t].call(),c>l){for(var e=0,n=u.length-c;n>e;e++)u[e]=u[e+c];u.length-=c,c=0}}u.length=0,c=0,a=!1}function i(t){var e=1,n=new f(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}function o(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var s,u=[],a=!1,c=0,l=1024,f=e.MutationObserver||e.WebKitMutationObserver;s="function"==typeof f?i(r):o(r),n.requestFlush=s,n.makeRequestCallFromTimer=o}).call(e,function(){return this}())},function(t,e){"use strict";function n(t,e,r){var i=function(){};i.prototype=t.prototype;var o=new i,s=/xyz/.test(function(){xyz})?/\bparent\b/:/.*/;r=r||{};for(var u in r){var a=r[u],c=o[u];"function"==typeof c&&"function"==typeof a&&s.test(a)?o[u]=function(t,e){return function(){var n=this.parent;this.parent=e;var r=t.apply(this,arguments);return this.parent=n,r}}(a,c):o[u]=a}o.typename=e;var l=function(){o.init&&o.init.apply(this,arguments)};return l.prototype=o,l.prototype.constructor=l,l.extend=function(t,e){return"object"==typeof t&&(e=t,t="anonymous"),n(l,t,e)},l}t.exports=n(Object,"Object",{})},function(t,e,n){"use strict";function r(t,e){return null===t||void 0===t||t===!1?e:t}var i=n(1),o=n(8),s={abs:function(t){return Math.abs(t)},batch:function(t,e,n){var r,i=[],o=[];for(r=0;r<t.length;r++)r%e===0&&o.length&&(i.push(o),o=[]),o.push(t[r]);if(o.length){if(n)for(r=o.length;e>r;r++)o.push(n);i.push(o)}return i},capitalize:function(t){t=r(t,"");var e=t.toLowerCase();return o.copySafeness(t,e.charAt(0).toUpperCase()+e.slice(1))},center:function(t,e){if(t=r(t,""),e=e||80,t.length>=e)return t;var n=e-t.length,s=i.repeat(" ",n/2-n%2),u=i.repeat(" ",n/2);return o.copySafeness(t,s+t+u)},"default":function(t,e,n){return n?t?t:e:void 0!==t?t:e},dictsort:function(t,e,n){if(!i.isObject(t))throw new i.TemplateError("dictsort filter: val must be an object");var r=[];for(var o in t)r.push([o,t[o]]);var s;if(void 0===n||"key"===n)s=0;else{if("value"!==n)throw new i.TemplateError("dictsort filter: You can only sort by either key or value");s=1}return r.sort(function(t,n){var r=t[s],o=n[s];return e||(i.isString(r)&&(r=r.toUpperCase()),i.isString(o)&&(o=o.toUpperCase())),r>o?1:r===o?0:-1}),r},dump:function(t){return JSON.stringify(t)},escape:function(t){return t instanceof o.SafeString?t:(t=null===t||void 0===t?"":t,o.markSafe(i.escape(t.toString())))},safe:function(t){return t instanceof o.SafeString?t:(t=null===t||void 0===t?"":t,o.markSafe(t.toString()))},first:function(t){return t[0]},groupby:function(t,e){return i.groupBy(t,e)},indent:function(t,e,n){if(t=r(t,""),""===t)return"";e=e||4;for(var s="",u=t.split("\n"),a=i.repeat(" ",e),c=0;c<u.length;c++)s+=0!==c||n?a+u[c]+"\n":u[c]+"\n";return o.copySafeness(t,s)},join:function(t,e,n){return e=e||"",n&&(t=i.map(t,function(t){return t[n]})),t.join(e)},last:function(t){return t[t.length-1]},length:function(t){var e=r(t,"");return void 0!==e?"function"==typeof Map&&e instanceof Map||"function"==typeof Set&&e instanceof Set?e.size:!i.isObject(e)||e instanceof o.SafeString?e.length:Object.keys(e).length:0},list:function(t){if(i.isString(t))return t.split("");if(i.isObject(t)){var e=[];if(Object.keys)e=Object.keys(t);else for(var n in t)e.push(n);return i.map(e,function(e){return{key:e,value:t[e]}})}if(i.isArray(t))return t;throw new i.TemplateError("list filter: type not iterable")},lower:function(t){return t=r(t,""),t.toLowerCase()},random:function(t){return t[Math.floor(Math.random()*t.length)]},rejectattr:function(t,e){return t.filter(function(t){return!t[e]})},selectattr:function(t,e){return t.filter(function(t){return!!t[e]})},replace:function(t,e,n,r){var i=t;if(e instanceof RegExp)return t.replace(e,n);"undefined"==typeof r&&(r=-1);var s="";if("number"==typeof e)e+="";else if("string"!=typeof e)return t;if("number"==typeof t&&(t+=""),"string"!=typeof t&&!(t instanceof o.SafeString))return t;if(""===e)return s=n+t.split("").join(n)+n,o.copySafeness(t,s);var u=t.indexOf(e);if(0===r||-1===u)return t;for(var a=0,c=0;u>-1&&(-1===r||r>c);)s+=t.substring(a,u)+n,a=u+e.length,c++,u=t.indexOf(e,a);return a<t.length&&(s+=t.substring(a)),o.copySafeness(i,s)},reverse:function(t){var e;return e=i.isString(t)?s.list(t):i.map(t,function(t){return t}),e.reverse(),i.isString(t)?o.copySafeness(t,e.join("")):e},round:function(t,e,n){e=e||0;var r,i=Math.pow(10,e);return r="ceil"===n?Math.ceil:"floor"===n?Math.floor:Math.round,r(t*i)/i},slice:function(t,e,n){for(var r=Math.floor(t.length/e),i=t.length%e,o=0,s=[],u=0;e>u;u++){var a=o+u*r;i>u&&o++;var c=o+(u+1)*r,l=t.slice(a,c);n&&u>=i&&l.push(n),s.push(l)}return s},sum:function(t,e,n){var r=0;"number"==typeof n&&(r+=n),e&&(t=i.map(t,function(t){return t[e]}));for(var o=0;o<t.length;o++)r+=t[o];return r},sort:o.makeMacro(["value","reverse","case_sensitive","attribute"],[],function(t,e,n,r){return t=i.map(t,function(t){return t}),t.sort(function(t,o){var s,u;return r?(s=t[r],u=o[r]):(s=t,u=o),!n&&i.isString(s)&&i.isString(u)&&(s=s.toLowerCase(),u=u.toLowerCase()),u>s?e?1:-1:s>u?e?-1:1:0}),t}),string:function(t){return o.copySafeness(t,t)},striptags:function(t,e){t=r(t,""),e=e||!1;var n=/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,i=s.trim(t.replace(n,"")),u="";return u=e?i.replace(/^ +| +$/gm,"").replace(/ +/g," ").replace(/(\r\n)/g,"\n").replace(/\n\n\n+/g,"\n\n"):i.replace(/\s+/gi," "),o.copySafeness(t,u)},title:function(t){t=r(t,"");for(var e=t.split(" "),n=0;n<e.length;n++)e[n]=s.capitalize(e[n]);return o.copySafeness(t,e.join(" "))},trim:function(t){return o.copySafeness(t,t.replace(/^\s*|\s*$/g,""))},truncate:function(t,e,n,i){var s=t;if(t=r(t,""),e=e||255,t.length<=e)return t;if(n)t=t.substring(0,e);else{var u=t.lastIndexOf(" ",e);-1===u&&(u=e),t=t.substring(0,u)}return t+=void 0!==i&&null!==i?i:"...",o.copySafeness(s,t)},upper:function(t){return t=r(t,""),t.toUpperCase()},urlencode:function(t){var e=encodeURIComponent;if(i.isString(t))return e(t);var n;if(i.isArray(t))n=t.map(function(t){return e(t[0])+"="+e(t[1])});else{n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(e(r)+"="+e(t[r]))}return n.join("&")},urlize:function(t,e,n){isNaN(e)&&(e=1/0);var r=n===!0?' rel="nofollow"':"",i=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,o=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,s=/^https?:\/\/.*$/,u=/^www\./,a=/\.(?:org|net|com)(?:\:|\/|$)/,c=t.split(/(\s+)/).filter(function(t){return t&&t.length}).map(function(t){var n=t.match(i),c=n&&n[1]||t;return s.test(c)?'<a href="'+c+'"'+r+">"+c.substr(0,e)+"</a>":u.test(c)?'<a href="http://'+c+'"'+r+">"+c.substr(0,e)+"</a>":o.test(c)?'<a href="mailto:'+c+'">'+c+"</a>":a.test(c)?'<a href="http://'+c+'"'+r+">"+c.substr(0,e)+"</a>":t});return c.join("")},wordcount:function(t){t=r(t,"");var e=t?t.match(/\w+/g):null;return e?e.length:null},"float":function(t,e){var n=parseFloat(t);return isNaN(n)?e:n},"int":function(t,e){var n=parseInt(t,10);return isNaN(n)?e:n}};s.d=s["default"],s.e=s.escape,t.exports=s},function(t,e,n){"use strict";function r(t,e,n){return function(){var r,i,u=s(arguments),a=o(arguments);if(u>t.length){r=Array.prototype.slice.call(arguments,0,t.length);var c=Array.prototype.slice.call(arguments,r.length,u);for(i=0;i<c.length;i++)i<e.length&&(a[e[i]]=c[i]);r.push(a)}else if(u<t.length){for(r=Array.prototype.slice.call(arguments,0,u),i=u;i<t.length;i++){var l=t[i];r.push(a[l]),delete a[l]}r.push(a)}else r=arguments;return n.apply(this,r)}}function i(t){return t.__keywords=!0,t}function o(t){var e=t.length;if(e){var n=t[e-1];if(n&&n.hasOwnProperty("__keywords"))return n}return{}}function s(t){var e=t.length;if(0===e)return 0;var n=t[e-1];return n&&n.hasOwnProperty("__keywords")?e-1:e}function u(t){return"string"!=typeof t?t:(this.val=t,void(this.length=t.length))}function a(t,e){return t instanceof u?new u(e):e.toString()}function c(t){var e=typeof t;return"string"===e?new u(t):"function"!==e?t:function(){var e=t.apply(this,arguments);return"string"==typeof e?new u(e):e}}function l(t,e){return t=void 0!==t&&null!==t?t:"",!e||t instanceof u||(t=m.escape(t.toString())),t}function f(t,e,n){if(null===t||void 0===t)throw new m.TemplateError("attempted to output null or undefined value",e+1,n+1);return t}function p(t,e){return t=t||{},"function"==typeof t[e]?function(){return t[e].apply(t,arguments)}:t[e]}function h(t,e,n,r){if(!t)throw new Error("Unable to call `"+e+"`, which is undefined or falsey");if("function"!=typeof t)throw new Error("Unable to call `"+e+"`, which is not a function");return t.apply(n,r)}function v(t,e,n){var r=e.lookup(n);return void 0!==r&&null!==r?r:t.lookup(n)}function d(t,e,n){return t.lineno?t:new m.TemplateError(t,e,n)}function g(t,e,n,r){if(m.isArray(t)){var i=t.length;m.asyncIter(t,function(t,r,o){switch(e){case 1:n(t,r,i,o);break;case 2:n(t[0],t[1],r,i,o);break;case 3:n(t[0],t[1],t[2],r,i,o);break;default:t.push(r,o),n.apply(this,t)}},r)}else m.asyncFor(t,function(t,e,r,i,o){n(t,e,r,i,o)},r)}function y(t,e,n,r){function i(t,e){a++,u[t]=e,a===o&&r(null,u.join(""))}var o,s,u,a=0;if(m.isArray(t))if(o=t.length,u=new Array(o),0===o)r(null,"");else for(s=0;s<t.length;s++){var c=t[s];switch(e){case 1:n(c,s,o,i);break;case 2:n(c[0],c[1],s,o,i);break;case 3:n(c[0],c[1],c[2],s,o,i);break;default:c.push(s,i),n.apply(this,c)}}else{var l=m.keys(t);if(o=l.length,u=new Array(o),0===o)r(null,"");else for(s=0;s<l.length;s++){var f=l[s];n(f,t[f],s,o,i)}}}var m=n(1),w=n(6),b=w.extend({init:function(t,e){this.variables={},this.parent=t,this.topLevel=!1,this.isolateWrites=e},set:function(t,e,n){var r=t.split("."),i=this.variables,o=this;if(n&&(o=this.resolve(r[0],!0)))return void o.set(t,e);for(var s=0;s<r.length-1;s++){var u=r[s];i[u]||(i[u]={}),i=i[u]}i[r[r.length-1]]=e},get:function(t){var e=this.variables[t];return void 0!==e&&null!==e?e:null},lookup:function(t){var e=this.parent,n=this.variables[t];return void 0!==n&&null!==n?n:e&&e.lookup(t)},resolve:function(t,e){var n=e&&this.isolateWrites?void 0:this.parent,r=this.variables[t];return void 0!==r&&null!==r?this:n&&n.resolve(t)},push:function(t){return new b(this,t)},pop:function(){return this.parent}});u.prototype=Object.create(String.prototype,{length:{writable:!0,configurable:!0,value:0}}),u.prototype.valueOf=function(){return this.val},u.prototype.toString=function(){return this.val},t.exports={Frame:b,makeMacro:r,makeKeywordArgs:i,numArgs:s,suppressValue:l,ensureDefined:f,memberLookup:p,contextOrFrameLookup:v,callWrap:h,handleError:d,isArray:m.isArray,keys:m.keys,SafeString:u,copySafeness:a,markSafe:c,asyncEach:g,asyncAll:y,inOperator:m.inOperator}},function(t,e){"use strict";function n(t){var e=-1;return{current:null,reset:function(){e=-1,this.current=null},next:function(){return e++,e>=t.length&&(e=0),this.current=t[e],this.current}}}function r(t){t=t||",";var e=!0;return function(){var n=e?"":t;return e=!1,n}}function i(){return{range:function(t,e,n){"undefined"==typeof e?(e=t,t=0,n=1):n||(n=1);var r,i=[];if(n>0)for(r=t;e>r;r+=n)i.push(r);else for(r=t;r>e;r+=n)i.push(r);return i},cycler:function(){return n(Array.prototype.slice.call(arguments))},joiner:function(t){return r(t)}}}t.exports=i},function(t,e,n){"use strict";var r=n(11),i=r.extend({init:function(t){this.precompiled=t||{}},getSource:function(t){return this.precompiled[t]?{src:{type:"code",obj:this.precompiled[t]},path:t}:null}});t.exports=i},function(t,e,n){"use strict";var r=n(3),i=n(6),o=n(1),s=i.extend({on:function(t,e){this.listeners=this.listeners||{},this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e)},emit:function(t){var e=Array.prototype.slice.call(arguments,1);this.listeners&&this.listeners[t]&&o.each(this.listeners[t],function(t){t.apply(null,e)})},resolve:function(t,e){return r.resolve(r.dirname(t),e)},isRelative:function(t){return 0===t.indexOf("./")||0===t.indexOf("../")}});t.exports=s},function(t,e){function n(){"use strict";var t=this.runtime,e=this.lib,n=t.contextOrFrameLookup;t.contextOrFrameLookup=function(t,e,r){var i=n.apply(this,arguments);if(void 0===i)switch(r){case"True":return!0;case"False":return!1;case"None":return null}return i};var r=t.memberLookup,i={pop:function(t){if(void 0===t)return this.pop();if(t>=this.length||0>t)throw new Error("KeyError");return this.splice(t,1)},remove:function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return this.splice(e,1);throw new Error("ValueError")},count:function(t){for(var e=0,n=0;n<this.length;n++)this[n]===t&&e++;return e},index:function(t){var e;if(-1===(e=this.indexOf(t)))throw new Error("ValueError");return e},find:function(t){return this.indexOf(t)},insert:function(t,e){return this.splice(t,0,e)}},o={items:function(){var t=[];for(var e in this)t.push([e,this[e]]);return t},values:function(){var t=[];for(var e in this)t.push(this[e]);return t},keys:function(){var t=[];for(var e in this)t.push(e);return t},get:function(t,e){var n=this[t];return void 0===n&&(n=e),n},has_key:function(t){return this.hasOwnProperty(t)},pop:function(t,e){var n=this[t];if(void 0===n&&void 0!==e)n=e;else{if(void 0===n)throw new Error("KeyError");delete this[t]}return n},popitem:function(){for(var t in this){var e=this[t];return delete this[t],[t,e]}throw new Error("KeyError")},setdefault:function(t,e){return t in this?this[t]:(void 0===e&&(e=null),this[t]=e)},update:function(t){for(var e in t)this[e]=t[e];return null}};o.iteritems=o.items,o.itervalues=o.values,o.iterkeys=o.keys,t.memberLookup=function(t,n,s){return t=t||{},e.isArray(t)&&i.hasOwnProperty(n)?function(){return i[n].apply(t,arguments)}:e.isObject(t)&&o.hasOwnProperty(n)?function(){return o[n].apply(t,arguments)}:r.apply(this,arguments)}}t.exports=n}])});
/* VERSION 1.0.0
 *
 * Экземпляр этого объекта - контроллер, умеющий слушать события компонентов
 *
 * Пример создания экземпляра:
 * new Component.Controller({
 *      init: function(){
 *          console.log('Controller created!');
 *      }
 * })
 *
 * Определяемая при создании объекта функция init() будет вызвана при создании экземпляра
 *
 * Зависимости:
 * - jQuery
 *
 */

(function (factory) {

    window.Component = factory($);

})(function () {

    var Component = {};

    var Events = {};


// Слушает событие, при срабатывании события вызывает переданную функцию.
// Первый аргумент - название события, строка
// Можно уточнить тип события, указав его через двоеточие: "event:type"
// в этом случае переданная функция будет вызвана только в случае совпадения типа
// Вторым аргументом передается функция,
// которая будет вызвана при срабатывании события
// Последний аргумент - контекст, в котором будет вызвана переданная функция
// Пример использования в компоненте:
// this.listen('change:test', function(){
//  console.log('changed!')
// }, this)
    Events.listen = function (name, method, context) {
        var type = null,
            context = context || null;

        this.listenetrs = this.listenetrs || {};

        if(~name.indexOf(':')) {
            var separatedName = name.split(':', 2);
            name = separatedName[0];
            type = separatedName[1];
        }

        this.listenetrs[name] = this.listenetrs[name] || [];

        var currentLength = this.listenetrs[name].push({
            type: type,
            method: method,
            context: context
        });

        return {
            cleared: false,
            context: this,
            name: name,
            index: currentLength - 1,
            stopListening: function () {
                if(!this.cleared) {
                    this.context.listenetrs[this.name][this.index] = null;
                    this.context = null;
                    this.cleared = true;
                }
            }
        };
    };

// Вызывает событие: пробегает по списку подписчиков и инициирует соответствующие
// методы. Помимо назывнаия события может сообщать его тип через двоеточие.
// Пример:
// this.emit('change:test');
// Аргументы:
// name (строка) - название события
// data - произвольные данные, которые будут переданы в качестве аргумента вызываемому
// методу
    Events.emit = function (name, data) {
        var type = null;
        this.listenetrs = this.listenetrs || {};

        if(~name.indexOf(':')) {
            var separatedName = name.split(':', 2);
            name = separatedName[0];
            type = separatedName[1];
        }

        if (!this.listenetrs[name])
            return;

        var listeners = this.listenetrs[name];

        for (var i = 0, max = listeners.length; i < max; i++) {
            if (!listeners[i] ||
                (listeners[i].type !== null && listeners[i].type !== type)
            ) continue;

            // Если контекст не передан, выполнить функцию в глобальном объекте
            var context = listeners[i].context || window;

            if (data !== undefined) {
                listeners[i].method.call(context, data);
            } else {
                listeners[i].method.call(context);
            }
        }
    };

// DEPRECATED!
// Следует использовать вместо .on метод .listen в связке с .emit
    Events.on = function (name) {

        if (typeof (name) !== 'string')
            throw new Error('Incorrect listener arguments');

        var newListener = {};

        if (arguments.length < 4) {
            // Если второй аргумент строка - значит передан тип, в противном случае тип не указан
            newListener.type = (typeof (arguments[1]) === 'string') ? arguments[1] : null;
            // Если второй аргумент функция - значит тип не указан
            newListener.method = (typeof (arguments[1]) === 'function') ? arguments[1] : arguments[2];
            // Если последний аргумент - это не калбэк, значит это контекст
            newListener.context = (arguments[arguments.length - 1] !== newListener.method) ? arguments[arguments.length - 1] : null;

        } else if (arguments.length === 4) {
            newListener.type = arguments[1];
            newListener.method = arguments[2];
            newListener.context = arguments[3];

        } else {
            throw new Error('Incorrect listener arguments');
        }

        if (typeof (newListener.method) !== 'function') {
            throw new Error('Callback ' + name + ' is not a function');
        }

        this.listenetrs = this.listenetrs || {};

        this.listenetrs[name] = this.listenetrs[name] || [];

        this.listenetrs[name].push(newListener);

    };

// DEPRECATED!
// Следует использовать вместо .trigger метод .emit в связке с .listen
    Events.trigger = function (name, type, data) {
        this.listenetrs = this.listenetrs || {};

        if (!this.listenetrs[name])
            return;
        var listeners = this.listenetrs[name];

        for (var i = 0, max = listeners.length; i < max; i++) {
            if (listeners[i].type !== null && listeners[i].type !== type) {
                continue;
            }
            // Если контекст не передан, выполнить функцию в глобальном объекте
            var context = listeners[i].context || window;

            if (data !== undefined) {
                listeners[i].method.call(context, data);
            } else {
                listeners[i].method.call(context);
            }
        }
    };

    var Controller = Component.Controller = function () {
        var func;

        if (arguments.length > 1) {
            this.$el = arguments[0];
            func = arguments[1];
        } else {
            this.$el = $(document);
            func = arguments[0];
        }
        this.dependencies = {};

        this.findBlocks(this.$el);

        this.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

        func.apply(this);

    };

    Controller.blocks = {};
    Controller.components = {};

// Если для компонента есть ожидающий его блок, то блок активируется с этим
// компонентом и удяляется из очереди
    Controller.createClassInstanses = function (componentName) {

        if (Controller.blocks[componentName] &&
            Controller.components[componentName]) {

            var blocks = Controller.blocks[componentName],
                componentClass = Controller.components[componentName];

            for (var i = 0, max = blocks.length; i < max; i++) {
                componentClass.instancesCount = componentClass.instancesCount + 1;
                var clearedEl = blocks[i].$el.get(0),
                    options = clearedEl.onclick ? clearedEl.onclick() : {},
                    instId = componentName + componentClass.instancesCount;
                new componentClass(blocks[i].$el, blocks[i].controller, options, instId);
                // Очистить переданные параметры
                if (clearedEl.onclick) {
                    clearedEl.onclick = null;
                    clearedEl.removeAttribute('onclick');
                }
            }
            Controller.blocks[componentName] = [];

        }

    };
// Регистрирует компонент в общем массиве всей компонентов
    Controller.registerComponent = function (name, Component) {

        if (!Controller.components[name]) {
            Controller.components[name] = Component;
        }

        Controller.createClassInstanses(name);
    };

// Сообщает всем подписчикам об инициализации компонента
    Controller.prototype.reportComponentInited = function (instanceId) {
        var dependencies = this.dependencies[instanceId];

        if (!dependencies) {
            dependencies = 'inited';
        } else if (Array.isArray(dependencies)) {
            dependencies.forEach(function (instanceFunction) {
                instanceFunction(instanceId);
            });
            dependencies = 'inited';
        }
    };

// Ищет на страницах блоки, связанные с определенными компонентами
// и сохраняет их и ссылку на свой экземпляр
// в ассоциативном массиве Controller.blocks
    Controller.prototype.findBlocks = function ($object) {
        var __self = this,
            name,
            loadUrl,
            $item,
            $elements;

        $elements = ($object.get(0) === document) ? $('[data-component]') : $object.find('[data-component]');

        for (var i = 0, max = $elements.length; i < max; i++) {

            $item = $elements.eq(i);

            if ($item.data('inited')) {
                continue;
            }

            name = $item.data('component');
            loadUrl = $item.data('component-load');

            if (!Controller.blocks[name]) {
                Controller.blocks[name] = [];
            }

            Controller.blocks[name].push({
                $el: $item,
                controller: __self
            });

            // Если трубется загрузка скрипта
            if (loadUrl) {
                this.loadScript(loadUrl, name);
                continue;
            }

            Controller.createClassInstanses(name);
        }
    };

    Controller.prototype.loadScript = function (url, name) {
        // Если компонент уже загружен - создать экземпляр и выйти
        if (typeof (Controller.components[name]) === 'function') {
            Controller.createClassInstanses(name);
            return;
        }

        // иначе загрузить
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src = url;
        head.appendChild(script);
        script.onerror = function (error) {
            console.error('Component ' + name + ' is not found in ' + url);
        };
    };


// Изменяет собственное свойство объекта, при его наличии.
// При изменении срабатывает событие 'change' с типом соответствующим
// имени изменяемого свойства
// Аргументы:
// propObj - объект, в котором перечислены свойства и их устанавливаемые значения
// silence - булево значение, не обязательно, если передать true, событие не сработает
// Пример:
// this.set({'proper': 6});
// Установит в свойство this.proper значение 6
// сгенерирует событие 'change' с типом 'proper'

    Controller.prototype.set = function (propObj, silence) {

        if (typeof (propObj) !== 'object')
            throw Error('Incorrect set argument');

        for (var prop in propObj) {
            if (!propObj.hasOwnProperty(prop))
                continue;

            if (this[prop] !== propObj[prop]) {
                this[prop] = propObj[prop];
            } else {
                silence = true;
            }

            if (!silence) {
                this.emit('change:' + prop, propObj[prop]);
                this.trigger('change', prop, propObj[prop]);
            }
        }
    };

    /*
     * Объект, предназначенный для передачи наследованием его свойств создаваемым
     * компонентам.
     *
     * Пример вызова:
     * Component.create('MainMenu', {
     *  init: function(){
     *      console.log('Компонент MainMenu инициирован!');
     *  }
     * });
     *
     * Зависимости:
     * - Overlay.js
     * - Controller.js
     * - jQuery
     */


// Функция создает новый компонент.
// первый аргумент - строка с названием компонента,
// второй аргумент - объект с методами нового объекта
    Component.create = function (name, methods) {

        var NewClass = function (block, controller, options, instId) {
            this.controller = controller;
            this.instId = options.instId || instId;
            this.$el = block.jquery ? block : $(block);
            this.el = this.$el.get(0);
            if (this.$el.length > 1) {
                this.$el = $(this.el);
            }
            this.$el.data('inited', true);

            this.options = options || {};
            if (this.events.length > 0) {
                this.bindingEvent(this.events);
            }

            if (this.options.dependence) {
                // Если передана строка, то преобразовать к массиву
                if (typeof (this.options.dependence) === 'string') {
                    var depString = this.options.dependence;
                    this.options.dependence = [];
                    this.options.dependence.push(depString);
                }
                // Собираем массив компонентов-зависимостей, которые еще не инициализированы
                var arrNoInitedDeps = this.options.dependence.filter(function (instId) {
                    return this.controller[instId] !== 'inited';
                }.bind(this));


                if (arrNoInitedDeps.length === 0) {
                    initComponent.apply(this);
                } else {
                    dependenceManager(this, controller).init();

                }

            } else {
                initComponent.apply(this);
            }

            function initComponent() {
                this.init();
                this.controller.reportComponentInited(this.instId);
            }

            // Функция возвращает объект, управляющий зависимостями
            function dependenceManager(context, controller) {

                var manager = {};

                // Записывает метод dependenceManager.checkWithout в контроллер
                manager.init = function () {
                    arrNoInitedDeps.forEach(function (instId) {

                        if (!controller.dependencies[instId]) {
                            controller.dependencies[instId] = [];
                        }
                        controller.dependencies[instId].push(manager.checkWithout);

                    });
                };

                // Получает instId компонента и удаляет его из списка зависимостей
                // Если после этого список зависимостей становится пустым - инициализирует
                // компонент
                manager.checkWithout = function (instId) {
                    var index = arrNoInitedDeps.findIndex(function (item) {
                        return item === instId;
                    });

                    if (index !== -1) {
                        arrNoInitedDeps.splice(index, 1);
                    }

                    if (arrNoInitedDeps.length === 0) {
                        initComponent.apply(context);
                    }

                };

                return manager;
            }

        };

        var protoProp = $.extend(NewClass.prototype, Component, methods, {componentName: name});
        NewClass.prototype = protoProp;
        NewClass.prototype.constructor = Component;
        NewClass.instancesCount = 0;
        Controller.registerComponent(name, NewClass);

        return NewClass;
    };


// Пустая функция, которая будет вызвана в случае, если ее не переопределить
    Component.init = function () {};
    Component.events = [];
// Вешает на корневой элемент событие, имя которого передается в аргументе
// в дальнейшем обработка этого собятия делегируется с вложенных элементов, у которых декларативно
// определен обработчик в свойстве data-имяСобытия
// Обязательный аргумент events - строка с именем события или объект с именами событий
// Например, строка 'click' сообщит о наличии в компоненте элемента с data-click
    Component.bindingEvent = function (events) {
        for (var i = 0, max = events.length; i < max; i++) {
            this.$el.on(events[i], function (e) {
                this.dataEvent(e, this);
            }.bind(this));
        }
    };

// Обрабатывает декларативно заданные в шаблоне события
// Аргументы: event - объект события, context - объект, в контексте которого
// должен вызываться метод, который получит в аргументах jquery-объект события и
// ссылку на элемент, вызвавший срабатывание события
    Component.dataEvent = function ($event, context) {
        var target = $event.target,
            bindObj = context || this,
            events = [];

        while (target !== this.el) {
            if ($(target).data()[$event.type]) {
                events.push({
                    method: $(target).data()[$event.type],
                    target: target
                });
            }
            target = $(target).parent().get(0);
        }
        if (!events.length)
            return;

        for (var i = 0, max = events.length; i < max; i++) {
            tryOnMethods(events[i], bindObj);
        }

        // Пробует вызвать переданные в строке методы
        // Получает в 1 аргументе объект с названиями методов и ссылками на элемент,
        // вызвавший срабатывание события
        // во втором аргументе - объект, в контексте которого попробовать вызвать метод
        function tryOnMethods(dataFromEventElem, context) {
            var methods = dataFromEventElem.method.split(/\s+/);

            for (var i = 0, max = methods.length; i < max; i++) {
                if (context[methods[i]]) {
                    context[methods[i]]($event, dataFromEventElem.target);
                }
            }
        }
    };

    $.extend(Component, Events);
    $.extend(Controller.prototype, Events);

    return Component;
});


// Полифиллы

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}
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

        this.controller.on('change', prop, function (show) {
            if(show) {
                showElement.apply(this);
            } else {
                hideElement.apply(this);
            }
        }, this);

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
// On 'change' get attribute value from select,
// parse string and call event. Sent new array with get-params to controller
Component.create('Sort', {
    init: function () {
        var self = this;
        this.$el.on('change', function () {
            var elValue = self.$el.val();
                self.controller.trigger('addGetParams', null, elValue);
        });

    }
});
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
Component.create('ProductCount', {
    events: ['click', 'change', 'keyup'],
    init: function () {
        this.$input = $('input', this.$el).eq(0);
        this.currentValue = parseInt(this.$input.val(), 10);
        this.maxValue = parseInt(this.options.max, 10);
        this.minValue = parseInt(this.options.min, 10) || 0;
        this.delay = null;

        if(isNaN(this.maxValue)) {
            this.maxValue = 100;
        }
    },
    setNewValue: function (event) {
        var newValue = event.target.value;
        if (!this.validate(newValue)) {
            this.reset();
        } else {
            this.currentValue = parseInt(newValue);
        }
    },
    changedKey: function (event) {
        var self = this;

        if(this.delay) return;
        this.delay = setTimeout(function () {
            if( parseInt(event.target.value) !== self.currentValue) {
                self.setNewValue(event);
            }
            self.delay = null;
        }, 700)
    },
    validate: function (newValue) {
        newValue = parseInt(newValue, 10);

        if( isNaN(newValue) ||
            newValue > this.maxValue ||
            newValue < this.minValue ) {

            return false;
        }
        return true;
    },
    reset: function () {
        this.$input.val(this.currentValue);
    },
    add: function () {
        var newValue = this.currentValue + 1;
        if(this.validate(newValue)) {
            this.$input.val(++this.currentValue);
            this.$input.trigger('change');
        }
    },
    reduce: function () {
        var newValue = this.currentValue - 1;

        if(this.validate(newValue)) {
            this.$input.val(--this.currentValue);
            this.$input.trigger('change');
        }
    }

});
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

Component.create('BuyWindow', {
    events: ['click'],
    init: function () {
        this.open = false;
        this.controller.on('cartContentChanged', function (data) {
            data.name = this.options.name;
            data.imgSrc = this.options.img;
            data.price = this.options.price;
            this.show(data);
        }, this);
    },
    show: function (data) {
        if(this.open) {
            this.close();
        }
        this.render(data);
        this.open = true;
        this.$el.show();
    },
    close: function () {
        if(this.open) {
            this.open = false;
            this.$el.hide();
        }
    },
    render: function (data) {
        this.$el.html( nunjucks.render('product-modal.nunj', data) );
    }
});
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
Component.create('OwlCarousel', {
	init: function () {

		// Чтобы не перезаписывать постоянно карусель в Jquery
		// после инициализации сохраняю информацию об этом в контроллере
		if(!this.controller.initedCarusel) {
			this.carousel();
			this.controller.initedCarusel = true;
		}

		this.$el.owlCarousel(this.options);
	},
	carousel: function () {

		/**
		 * Owl Carousel v2.1.6
		 * Copyright 2013-2016 David Deutsch
		 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
		 */
		/**
		 * Owl carousel
		 * @version 2.1.6
		 * @author Bartosz Wojciechowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 * @todo Lazy Load Icon
		 * @todo prevent animationend bubling
		 * @todo itemsScaleUp
		 * @todo Test Zepto
		 * @todo stagePadding calculate wrong active classes
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates a carousel.
			 * @class The Owl Carousel.
			 * @public
			 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
			 * @param {Object} [options] - The options
			 */
			function Owl(element, options) {

				/**
				 * Current settings for the carousel.
				 * @public
				 */
				this.settings = null;

				/**
				 * Current options set by the caller including defaults.
				 * @public
				 */
				this.options = $.extend({}, Owl.Defaults, options);

				/**
				 * Plugin element.
				 * @public
				 */
				this.$element = $(element);

				/**
				 * Proxied event handlers.
				 * @protected
				 */
				this._handlers = {};

				/**
				 * References to the running plugins of this carousel.
				 * @protected
				 */
				this._plugins = {};

				/**
				 * Currently suppressed events to prevent them from beeing retriggered.
				 * @protected
				 */
				this._supress = {};

				/**
				 * Absolute current position.
				 * @protected
				 */
				this._current = null;

				/**
				 * Animation speed in milliseconds.
				 * @protected
				 */
				this._speed = null;

				/**
				 * Coordinates of all items in pixel.
				 * @todo The name of this member is missleading.
				 * @protected
				 */
				this._coordinates = [];

				/**
				 * Current breakpoint.
				 * @todo Real media queries would be nice.
				 * @protected
				 */
				this._breakpoint = null;

				/**
				 * Current width of the plugin element.
				 */
				this._width = null;

				/**
				 * All real items.
				 * @protected
				 */
				this._items = [];

				/**
				 * All cloned items.
				 * @protected
				 */
				this._clones = [];

				/**
				 * Merge values of all items.
				 * @todo Maybe this could be part of a plugin.
				 * @protected
				 */
				this._mergers = [];

				/**
				 * Widths of all items.
				 */
				this._widths = [];

				/**
				 * Invalidated parts within the update process.
				 * @protected
				 */
				this._invalidated = {};

				/**
				 * Ordered list of workers for the update process.
				 * @protected
				 */
				this._pipe = [];

				/**
				 * Current state information for the drag operation.
				 * @todo #261
				 * @protected
				 */
				this._drag = {
					time: null,
					target: null,
					pointer: null,
					stage: {
						start: null,
						current: null
					},
					direction: null
				};

				/**
				 * Current state information and their tags.
				 * @type {Object}
				 * @protected
				 */
				this._states = {
					current: {},
					tags: {
						'initializing': [ 'busy' ],
						'animating': [ 'busy' ],
						'dragging': [ 'interacting' ]
					}
				};

				$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
					this._handlers[handler] = $.proxy(this[handler], this);
				}, this));

				$.each(Owl.Plugins, $.proxy(function(key, plugin) {
					this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
						= new plugin(this);
				}, this));

				$.each(Owl.Workers, $.proxy(function(priority, worker) {
					this._pipe.push({
						'filter': worker.filter,
						'run': $.proxy(worker.run, this)
					});
				}, this));

				this.setup();
				this.initialize();
			}

			/**
			 * Default options for the carousel.
			 * @public
			 */
			Owl.Defaults = {
				items: 3,
				loop: false,
				center: false,
				rewind: false,

				mouseDrag: true,
				touchDrag: true,
				pullDrag: true,
				freeDrag: false,

				margin: 0,
				stagePadding: 0,

				merge: false,
				mergeFit: true,
				autoWidth: false,

				startPosition: 0,
				rtl: false,

				smartSpeed: 250,
				fluidSpeed: false,
				dragEndSpeed: false,

				responsive: {},
				responsiveRefreshRate: 200,
				responsiveBaseElement: window,

				fallbackEasing: 'swing',

				info: false,

				nestedItemSelector: false,
				itemElement: 'div',
				stageElement: 'div',

				refreshClass: 'owl-refresh',
				loadedClass: 'owl-loaded',
				loadingClass: 'owl-loading',
				rtlClass: 'owl-rtl',
				responsiveClass: 'owl-responsive',
				dragClass: 'owl-drag',
				itemClass: 'owl-item',
				stageClass: 'owl-stage',
				stageOuterClass: 'owl-stage-outer',
				grabClass: 'owl-grab'
			};

			/**
			 * Enumeration for width.
			 * @public
			 * @readonly
			 * @enum {String}
			 */
			Owl.Width = {
				Default: 'default',
				Inner: 'inner',
				Outer: 'outer'
			};

			/**
			 * Enumeration for types.
			 * @public
			 * @readonly
			 * @enum {String}
			 */
			Owl.Type = {
				Event: 'event',
				State: 'state'
			};

			/**
			 * Contains all registered plugins.
			 * @public
			 */
			Owl.Plugins = {};

			/**
			 * List of workers involved in the update process.
			 */
			Owl.Workers = [ {
				filter: [ 'width', 'settings' ],
				run: function() {
					this._width = this.$element.width();
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function(cache) {
					cache.current = this._items && this._items[this.relative(this._current)];
				}
			}, {
				filter: [ 'items', 'settings' ],
				run: function() {
					this.$stage.children('.cloned').remove();
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function(cache) {
					var margin = this.settings.margin || '',
						grid = !this.settings.autoWidth,
						rtl = this.settings.rtl,
						css = {
							'width': 'auto',
							'margin-left': rtl ? margin : '',
							'margin-right': rtl ? '' : margin
						};

					!grid && this.$stage.children().css(css);

					cache.css = css;
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function(cache) {
					var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
						merge = null,
						iterator = this._items.length,
						grid = !this.settings.autoWidth,
						widths = [];

					cache.items = {
						merge: false,
						width: width
					};

					while (iterator--) {
						merge = this._mergers[iterator];
						merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

						cache.items.merge = merge > 1 || cache.items.merge;

						widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
					}

					this._widths = widths;
				}
			}, {
				filter: [ 'items', 'settings' ],
				run: function() {
					var clones = [],
						items = this._items,
						settings = this.settings,
						view = Math.max(settings.items * 2, 4),
						size = Math.ceil(items.length / 2) * 2,
						repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
						append = '',
						prepend = '';

					repeat /= 2;

					while (repeat--) {
						clones.push(this.normalize(clones.length / 2, true));
						append = append + items[clones[clones.length - 1]][0].outerHTML;
						clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
						prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
					}

					this._clones = clones;

					$(append).addClass('cloned').appendTo(this.$stage);
					$(prepend).addClass('cloned').prependTo(this.$stage);
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function() {
					var rtl = this.settings.rtl ? 1 : -1,
						size = this._clones.length + this._items.length,
						iterator = -1,
						previous = 0,
						current = 0,
						coordinates = [];

					while (++iterator < size) {
						previous = coordinates[iterator - 1] || 0;
						current = this._widths[this.relative(iterator)] + this.settings.margin;
						coordinates.push(previous + current * rtl);
					}

					this._coordinates = coordinates;
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function() {
					var padding = this.settings.stagePadding,
						coordinates = this._coordinates,
						css = {
							'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
							'padding-left': padding || '',
							'padding-right': padding || ''
						};

					this.$stage.css(css);
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function(cache) {
					var iterator = this._coordinates.length,
						grid = !this.settings.autoWidth,
						items = this.$stage.children();

					if (grid && cache.items.merge) {
						while (iterator--) {
							cache.css.width = this._widths[this.relative(iterator)];
							items.eq(iterator).css(cache.css);
						}
					} else if (grid) {
						cache.css.width = cache.items.width;
						items.css(cache.css);
					}
				}
			}, {
				filter: [ 'items' ],
				run: function() {
					this._coordinates.length < 1 && this.$stage.removeAttr('style');
				}
			}, {
				filter: [ 'width', 'items', 'settings' ],
				run: function(cache) {
					cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
					cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
					this.reset(cache.current);
				}
			}, {
				filter: [ 'position' ],
				run: function() {
					this.animate(this.coordinates(this._current));
				}
			}, {
				filter: [ 'width', 'position', 'items', 'settings' ],
				run: function() {
					var rtl = this.settings.rtl ? 1 : -1,
						padding = this.settings.stagePadding * 2,
						begin = this.coordinates(this.current()) + padding,
						end = begin + this.width() * rtl,
						inner, outer, matches = [], i, n;

					for (i = 0, n = this._coordinates.length; i < n; i++) {
						inner = this._coordinates[i - 1] || 0;
						outer = Math.abs(this._coordinates[i]) + padding * rtl;

						if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
							|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
							matches.push(i);
						}
					}

					this.$stage.children('.active').removeClass('active');
					this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

					if (this.settings.center) {
						this.$stage.children('.center').removeClass('center');
						this.$stage.children().eq(this.current()).addClass('center');
					}
				}
			} ];

			/**
			 * Initializes the carousel.
			 * @protected
			 */
			Owl.prototype.initialize = function() {
				this.enter('initializing');
				this.trigger('initialize');

				this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

				if (this.settings.autoWidth && !this.is('pre-loading')) {
					var imgs, nestedSelector, width;
					imgs = this.$element.find('img');
					nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
					width = this.$element.children(nestedSelector).width();

					if (imgs.length && width <= 0) {
						this.preloadAutoWidthImages(imgs);
					}
				}

				this.$element.addClass(this.options.loadingClass);

				// create stage
				this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
					.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

				// append stage
				this.$element.append(this.$stage.parent());

				// append content
				this.replace(this.$element.children().not(this.$stage.parent()));

				// check visibility
				if (this.$element.is(':visible')) {
					// update view
					this.refresh();
				} else {
					// invalidate width
					this.invalidate('width');
				}

				this.$element
					.removeClass(this.options.loadingClass)
					.addClass(this.options.loadedClass);

				// register event handlers
				this.registerEventHandlers();

				this.leave('initializing');
				this.trigger('initialized');
			};

			/**
			 * Setups the current settings.
			 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
			 * @todo Support for media queries by using `matchMedia` would be nice.
			 * @public
			 */
			Owl.prototype.setup = function() {
				var viewport = this.viewport(),
					overwrites = this.options.responsive,
					match = -1,
					settings = null;

				if (!overwrites) {
					settings = $.extend({}, this.options);
				} else {
					$.each(overwrites, function(breakpoint) {
						if (breakpoint <= viewport && breakpoint > match) {
							match = Number(breakpoint);
						}
					});

					settings = $.extend({}, this.options, overwrites[match]);
					if (typeof settings.stagePadding === 'function') {
						settings.stagePadding = settings.stagePadding();
					}
					delete settings.responsive;

					// responsive class
					if (settings.responsiveClass) {
						this.$element.attr('class',
							this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
						);
					}
				}

				this.trigger('change', { property: { name: 'settings', value: settings } });
				this._breakpoint = match;
				this.settings = settings;
				this.invalidate('settings');
				this.trigger('changed', { property: { name: 'settings', value: this.settings } });
			};

			/**
			 * Updates option logic if necessery.
			 * @protected
			 */
			Owl.prototype.optionsLogic = function() {
				if (this.settings.autoWidth) {
					this.settings.stagePadding = false;
					this.settings.merge = false;
				}
			};

			/**
			 * Prepares an item before add.
			 * @todo Rename event parameter `content` to `item`.
			 * @protected
			 * @returns {jQuery|HTMLElement} - The item container.
			 */
			Owl.prototype.prepare = function(item) {
				var event = this.trigger('prepare', { content: item });

				if (!event.data) {
					event.data = $('<' + this.settings.itemElement + '/>')
						.addClass(this.options.itemClass).append(item)
				}

				this.trigger('prepared', { content: event.data });

				return event.data;
			};

			/**
			 * Updates the view.
			 * @public
			 */
			Owl.prototype.update = function() {
				var i = 0,
					n = this._pipe.length,
					filter = $.proxy(function(p) { return this[p] }, this._invalidated),
					cache = {};

				while (i < n) {
					if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
						this._pipe[i].run(cache);
					}
					i++;
				}

				this._invalidated = {};

				!this.is('valid') && this.enter('valid');
			};

			/**
			 * Gets the width of the view.
			 * @public
			 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
			 * @returns {Number} - The width of the view in pixel.
			 */
			Owl.prototype.width = function(dimension) {
				dimension = dimension || Owl.Width.Default;
				switch (dimension) {
					case Owl.Width.Inner:
					case Owl.Width.Outer:
						return this._width;
					default:
						return this._width - this.settings.stagePadding * 2 + this.settings.margin;
				}
			};

			/**
			 * Refreshes the carousel primarily for adaptive purposes.
			 * @public
			 */
			Owl.prototype.refresh = function() {
				this.enter('refreshing');
				this.trigger('refresh');

				this.setup();

				this.optionsLogic();

				this.$element.addClass(this.options.refreshClass);

				this.update();

				this.$element.removeClass(this.options.refreshClass);

				this.leave('refreshing');
				this.trigger('refreshed');
			};

			/**
			 * Checks window `resize` event.
			 * @protected
			 */
			Owl.prototype.onThrottledResize = function() {
				window.clearTimeout(this.resizeTimer);
				this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
			};

			/**
			 * Checks window `resize` event.
			 * @protected
			 */
			Owl.prototype.onResize = function() {
				if (!this._items.length) {
					return false;
				}

				if (this._width === this.$element.width()) {
					return false;
				}

				if (!this.$element.is(':visible')) {
					return false;
				}

				this.enter('resizing');

				if (this.trigger('resize').isDefaultPrevented()) {
					this.leave('resizing');
					return false;
				}

				this.invalidate('width');

				this.refresh();

				this.leave('resizing');
				this.trigger('resized');
			};

			/**
			 * Registers event handlers.
			 * @todo Check `msPointerEnabled`
			 * @todo #261
			 * @protected
			 */
			Owl.prototype.registerEventHandlers = function() {
				if ($.support.transition) {
					this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
				}

				if (this.settings.responsive !== false) {
					this.on(window, 'resize', this._handlers.onThrottledResize);
				}

				if (this.settings.mouseDrag) {
					this.$element.addClass(this.options.dragClass);
					this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
					this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
				}

				if (this.settings.touchDrag){
					this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
					this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
				}
			};

			/**
			 * Handles `touchstart` and `mousedown` events.
			 * @todo Horizontal swipe threshold as option
			 * @todo #261
			 * @protected
			 * @param {Event} event - The event arguments.
			 */
			Owl.prototype.onDragStart = function(event) {
				var stage = null;

				if (event.which === 3) {
					return;
				}

				if ($.support.transform) {
					stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
					stage = {
						x: stage[stage.length === 16 ? 12 : 4],
						y: stage[stage.length === 16 ? 13 : 5]
					};
				} else {
					stage = this.$stage.position();
					stage = {
						x: this.settings.rtl ?
						stage.left + this.$stage.width() - this.width() + this.settings.margin :
							stage.left,
						y: stage.top
					};
				}

				if (this.is('animating')) {
					$.support.transform ? this.animate(stage.x) : this.$stage.stop()
					this.invalidate('position');
				}

				this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

				this.speed(0);

				this._drag.time = new Date().getTime();
				this._drag.target = $(event.target);
				this._drag.stage.start = stage;
				this._drag.stage.current = stage;
				this._drag.pointer = this.pointer(event);

				$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

				$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
					var delta = this.difference(this._drag.pointer, this.pointer(event));

					$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

					if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
						return;
					}

					event.preventDefault();

					this.enter('dragging');
					this.trigger('drag');
				}, this));
			};

			/**
			 * Handles the `touchmove` and `mousemove` events.
			 * @todo #261
			 * @protected
			 * @param {Event} event - The event arguments.
			 */
			Owl.prototype.onDragMove = function(event) {
				var minimum = null,
					maximum = null,
					pull = null,
					delta = this.difference(this._drag.pointer, this.pointer(event)),
					stage = this.difference(this._drag.stage.start, delta);

				if (!this.is('dragging')) {
					return;
				}

				event.preventDefault();

				if (this.settings.loop) {
					minimum = this.coordinates(this.minimum());
					maximum = this.coordinates(this.maximum() + 1) - minimum;
					stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
				} else {
					minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
					maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
					pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
					stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
				}

				this._drag.stage.current = stage;

				this.animate(stage.x);
			};

			/**
			 * Handles the `touchend` and `mouseup` events.
			 * @todo #261
			 * @todo Threshold for click event
			 * @protected
			 * @param {Event} event - The event arguments.
			 */
			Owl.prototype.onDragEnd = function(event) {
				var delta = this.difference(this._drag.pointer, this.pointer(event)),
					stage = this._drag.stage.current,
					direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

				$(document).off('.owl.core');

				this.$element.removeClass(this.options.grabClass);

				if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
					this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
					this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
					this.invalidate('position');
					this.update();

					this._drag.direction = direction;

					if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
						this._drag.target.one('click.owl.core', function() { return false; });
					}
				}

				if (!this.is('dragging')) {
					return;
				}

				this.leave('dragging');
				this.trigger('dragged');
			};

			/**
			 * Gets absolute position of the closest item for a coordinate.
			 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
			 * @protected
			 * @param {Number} coordinate - The coordinate in pixel.
			 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
			 * @return {Number} - The absolute position of the closest item.
			 */
			Owl.prototype.closest = function(coordinate, direction) {
				var position = -1,
					pull = 30,
					width = this.width(),
					coordinates = this.coordinates();

				if (!this.settings.freeDrag) {
					// check closest item
					$.each(coordinates, $.proxy(function(index, value) {
						// on a left pull, check on current index
						if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
							position = index;
							// on a right pull, check on previous index
							// to do so, subtract width from value and set position = index + 1
						} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
							position = index + 1;
						} else if (this.op(coordinate, '<', value)
							&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
							position = direction === 'left' ? index + 1 : index;
						}
						return position === -1;
					}, this));
				}

				if (!this.settings.loop) {
					// non loop boundries
					if (this.op(coordinate, '>', coordinates[this.minimum()])) {
						position = coordinate = this.minimum();
					} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
						position = coordinate = this.maximum();
					}
				}

				return position;
			};

			/**
			 * Animates the stage.
			 * @todo #270
			 * @public
			 * @param {Number} coordinate - The coordinate in pixels.
			 */
			Owl.prototype.animate = function(coordinate) {
				var animate = this.speed() > 0;

				this.is('animating') && this.onTransitionEnd();

				if (animate) {
					this.enter('animating');
					this.trigger('translate');
				}

				if ($.support.transform3d && $.support.transition) {
					this.$stage.css({
						transform: 'translate3d(' + coordinate + 'px,0px,0px)',
						transition: (this.speed() / 1000) + 's'
					});
				} else if (animate) {
					this.$stage.animate({
						left: coordinate + 'px'
					}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
				} else {
					this.$stage.css({
						left: coordinate + 'px'
					});
				}
			};

			/**
			 * Checks whether the carousel is in a specific state or not.
			 * @param {String} state - The state to check.
			 * @returns {Boolean} - The flag which indicates if the carousel is busy.
			 */
			Owl.prototype.is = function(state) {
				return this._states.current[state] && this._states.current[state] > 0;
			};

			/**
			 * Sets the absolute position of the current item.
			 * @public
			 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
			 * @returns {Number} - The absolute position of the current item.
			 */
			Owl.prototype.current = function(position) {
				if (position === undefined) {
					return this._current;
				}

				if (this._items.length === 0) {
					return undefined;
				}

				position = this.normalize(position);

				if (this._current !== position) {
					var event = this.trigger('change', { property: { name: 'position', value: position } });

					if (event.data !== undefined) {
						position = this.normalize(event.data);
					}

					this._current = position;

					this.invalidate('position');

					this.trigger('changed', { property: { name: 'position', value: this._current } });
				}

				return this._current;
			};

			/**
			 * Invalidates the given part of the update routine.
			 * @param {String} [part] - The part to invalidate.
			 * @returns {Array.<String>} - The invalidated parts.
			 */
			Owl.prototype.invalidate = function(part) {
				if ($.type(part) === 'string') {
					this._invalidated[part] = true;
					this.is('valid') && this.leave('valid');
				}
				return $.map(this._invalidated, function(v, i) { return i });
			};

			/**
			 * Resets the absolute position of the current item.
			 * @public
			 * @param {Number} position - The absolute position of the new item.
			 */
			Owl.prototype.reset = function(position) {
				position = this.normalize(position);

				if (position === undefined) {
					return;
				}

				this._speed = 0;
				this._current = position;

				this.suppress([ 'translate', 'translated' ]);

				this.animate(this.coordinates(position));

				this.release([ 'translate', 'translated' ]);
			};

			/**
			 * Normalizes an absolute or a relative position of an item.
			 * @public
			 * @param {Number} position - The absolute or relative position to normalize.
			 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
			 * @returns {Number} - The normalized position.
			 */
			Owl.prototype.normalize = function(position, relative) {
				var n = this._items.length,
					m = relative ? 0 : this._clones.length;

				if (!this.isNumeric(position) || n < 1) {
					position = undefined;
				} else if (position < 0 || position >= n + m) {
					position = ((position - m / 2) % n + n) % n + m / 2;
				}

				return position;
			};

			/**
			 * Converts an absolute position of an item into a relative one.
			 * @public
			 * @param {Number} position - The absolute position to convert.
			 * @returns {Number} - The converted position.
			 */
			Owl.prototype.relative = function(position) {
				position -= this._clones.length / 2;
				return this.normalize(position, true);
			};

			/**
			 * Gets the maximum position for the current item.
			 * @public
			 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
			 * @returns {Number}
			 */
			Owl.prototype.maximum = function(relative) {
				var settings = this.settings,
					maximum = this._coordinates.length,
					iterator,
					reciprocalItemsWidth,
					elementWidth;

				if (settings.loop) {
					maximum = this._clones.length / 2 + this._items.length - 1;
				} else if (settings.autoWidth || settings.merge) {
					iterator = this._items.length;
					reciprocalItemsWidth = this._items[--iterator].width();
					elementWidth = this.$element.width();
					while (iterator--) {
						reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
						if (reciprocalItemsWidth > elementWidth) {
							break;
						}
					}
					maximum = iterator + 1;
				} else if (settings.center) {
					maximum = this._items.length - 1;
				} else {
					maximum = this._items.length - settings.items;
				}

				if (relative) {
					maximum -= this._clones.length / 2;
				}

				return Math.max(maximum, 0);
			};

			/**
			 * Gets the minimum position for the current item.
			 * @public
			 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
			 * @returns {Number}
			 */
			Owl.prototype.minimum = function(relative) {
				return relative ? 0 : this._clones.length / 2;
			};

			/**
			 * Gets an item at the specified relative position.
			 * @public
			 * @param {Number} [position] - The relative position of the item.
			 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
			 */
			Owl.prototype.items = function(position) {
				if (position === undefined) {
					return this._items.slice();
				}

				position = this.normalize(position, true);
				return this._items[position];
			};

			/**
			 * Gets an item at the specified relative position.
			 * @public
			 * @param {Number} [position] - The relative position of the item.
			 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
			 */
			Owl.prototype.mergers = function(position) {
				if (position === undefined) {
					return this._mergers.slice();
				}

				position = this.normalize(position, true);
				return this._mergers[position];
			};

			/**
			 * Gets the absolute positions of clones for an item.
			 * @public
			 * @param {Number} [position] - The relative position of the item.
			 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
			 */
			Owl.prototype.clones = function(position) {
				var odd = this._clones.length / 2,
					even = odd + this._items.length,
					map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

				if (position === undefined) {
					return $.map(this._clones, function(v, i) { return map(i) });
				}

				return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
			};

			/**
			 * Sets the current animation speed.
			 * @public
			 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
			 * @returns {Number} - The current animation speed in milliseconds.
			 */
			Owl.prototype.speed = function(speed) {
				if (speed !== undefined) {
					this._speed = speed;
				}

				return this._speed;
			};

			/**
			 * Gets the coordinate of an item.
			 * @todo The name of this method is missleanding.
			 * @public
			 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
			 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
			 */
			Owl.prototype.coordinates = function(position) {
				var multiplier = 1,
					newPosition = position - 1,
					coordinate;

				if (position === undefined) {
					return $.map(this._coordinates, $.proxy(function(coordinate, index) {
						return this.coordinates(index);
					}, this));
				}

				if (this.settings.center) {
					if (this.settings.rtl) {
						multiplier = -1;
						newPosition = position + 1;
					}

					coordinate = this._coordinates[position];
					coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
				} else {
					coordinate = this._coordinates[newPosition] || 0;
				}

				coordinate = Math.ceil(coordinate);

				return coordinate;
			};

			/**
			 * Calculates the speed for a translation.
			 * @protected
			 * @param {Number} from - The absolute position of the start item.
			 * @param {Number} to - The absolute position of the target item.
			 * @param {Number} [factor=undefined] - The time factor in milliseconds.
			 * @returns {Number} - The time in milliseconds for the translation.
			 */
			Owl.prototype.duration = function(from, to, factor) {
				if (factor === 0) {
					return 0;
				}

				return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
			};

			/**
			 * Slides to the specified item.
			 * @public
			 * @param {Number} position - The position of the item.
			 * @param {Number} [speed] - The time in milliseconds for the transition.
			 */
			Owl.prototype.to = function(position, speed) {
				var current = this.current(),
					revert = null,
					distance = position - this.relative(current),
					direction = (distance > 0) - (distance < 0),
					items = this._items.length,
					minimum = this.minimum(),
					maximum = this.maximum();

				if (this.settings.loop) {
					if (!this.settings.rewind && Math.abs(distance) > items / 2) {
						distance += direction * -1 * items;
					}

					position = current + distance;
					revert = ((position - minimum) % items + items) % items + minimum;

					if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
						current = revert - distance;
						position = revert;
						this.reset(current);
					}
				} else if (this.settings.rewind) {
					maximum += 1;
					position = (position % maximum + maximum) % maximum;
				} else {
					position = Math.max(minimum, Math.min(maximum, position));
				}

				this.speed(this.duration(current, position, speed));
				this.current(position);

				if (this.$element.is(':visible')) {
					this.update();
				}
			};

			/**
			 * Slides to the next item.
			 * @public
			 * @param {Number} [speed] - The time in milliseconds for the transition.
			 */
			Owl.prototype.next = function(speed) {
				speed = speed || false;
				this.to(this.relative(this.current()) + 1, speed);
			};

			/**
			 * Slides to the previous item.
			 * @public
			 * @param {Number} [speed] - The time in milliseconds for the transition.
			 */
			Owl.prototype.prev = function(speed) {
				speed = speed || false;
				this.to(this.relative(this.current()) - 1, speed);
			};

			/**
			 * Handles the end of an animation.
			 * @protected
			 * @param {Event} event - The event arguments.
			 */
			Owl.prototype.onTransitionEnd = function(event) {

				// if css2 animation then event object is undefined
				if (event !== undefined) {
					event.stopPropagation();

					// Catch only owl-stage transitionEnd event
					if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
						return false;
					}
				}

				this.leave('animating');
				this.trigger('translated');
			};

			/**
			 * Gets viewport width.
			 * @protected
			 * @return {Number} - The width in pixel.
			 */
			Owl.prototype.viewport = function() {
				var width;
				if (this.options.responsiveBaseElement !== window) {
					width = $(this.options.responsiveBaseElement).width();
				} else if (window.innerWidth) {
					width = window.innerWidth;
				} else if (document.documentElement && document.documentElement.clientWidth) {
					width = document.documentElement.clientWidth;
				} else {
					throw 'Can not detect viewport width.';
				}
				return width;
			};

			/**
			 * Replaces the current content.
			 * @public
			 * @param {HTMLElement|jQuery|String} content - The new content.
			 */
			Owl.prototype.replace = function(content) {
				this.$stage.empty();
				this._items = [];

				if (content) {
					content = (content instanceof jQuery) ? content : $(content);
				}

				if (this.settings.nestedItemSelector) {
					content = content.find('.' + this.settings.nestedItemSelector);
				}

				content.filter(function() {
					return this.nodeType === 1;
				}).each($.proxy(function(index, item) {
					item = this.prepare(item);
					this.$stage.append(item);
					this._items.push(item);
					this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
				}, this));

				this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

				this.invalidate('items');
			};

			/**
			 * Adds an item.
			 * @todo Use `item` instead of `content` for the event arguments.
			 * @public
			 * @param {HTMLElement|jQuery|String} content - The item content to add.
			 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
			 */
			Owl.prototype.add = function(content, position) {
				var current = this.relative(this._current);

				position = position === undefined ? this._items.length : this.normalize(position, true);
				content = content instanceof jQuery ? content : $(content);

				this.trigger('add', { content: content, position: position });

				content = this.prepare(content);

				if (this._items.length === 0 || position === this._items.length) {
					this._items.length === 0 && this.$stage.append(content);
					this._items.length !== 0 && this._items[position - 1].after(content);
					this._items.push(content);
					this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
				} else {
					this._items[position].before(content);
					this._items.splice(position, 0, content);
					this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
				}

				this._items[current] && this.reset(this._items[current].index());

				this.invalidate('items');

				this.trigger('added', { content: content, position: position });
			};

			/**
			 * Removes an item by its position.
			 * @todo Use `item` instead of `content` for the event arguments.
			 * @public
			 * @param {Number} position - The relative position of the item to remove.
			 */
			Owl.prototype.remove = function(position) {
				position = this.normalize(position, true);

				if (position === undefined) {
					return;
				}

				this.trigger('remove', { content: this._items[position], position: position });

				this._items[position].remove();
				this._items.splice(position, 1);
				this._mergers.splice(position, 1);

				this.invalidate('items');

				this.trigger('removed', { content: null, position: position });
			};

			/**
			 * Preloads images with auto width.
			 * @todo Replace by a more generic approach
			 * @protected
			 */
			Owl.prototype.preloadAutoWidthImages = function(images) {
				images.each($.proxy(function(i, element) {
					this.enter('pre-loading');
					element = $(element);
					$(new Image()).one('load', $.proxy(function(e) {
						element.attr('src', e.target.src);
						element.css('opacity', 1);
						this.leave('pre-loading');
						!this.is('pre-loading') && !this.is('initializing') && this.refresh();
					}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
				}, this));
			};

			/**
			 * Destroys the carousel.
			 * @public
			 */
			Owl.prototype.destroy = function() {

				this.$element.off('.owl.core');
				this.$stage.off('.owl.core');
				$(document).off('.owl.core');

				if (this.settings.responsive !== false) {
					window.clearTimeout(this.resizeTimer);
					this.off(window, 'resize', this._handlers.onThrottledResize);
				}

				for (var i in this._plugins) {
					this._plugins[i].destroy();
				}

				this.$stage.children('.cloned').remove();

				this.$stage.unwrap();
				this.$stage.children().contents().unwrap();
				this.$stage.children().unwrap();

				this.$element
					.removeClass(this.options.refreshClass)
					.removeClass(this.options.loadingClass)
					.removeClass(this.options.loadedClass)
					.removeClass(this.options.rtlClass)
					.removeClass(this.options.dragClass)
					.removeClass(this.options.grabClass)
					.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
					.removeData('owl.carousel');
			};

			/**
			 * Operators to calculate right-to-left and left-to-right.
			 * @protected
			 * @param {Number} [a] - The left side operand.
			 * @param {String} [o] - The operator.
			 * @param {Number} [b] - The right side operand.
			 */
			Owl.prototype.op = function(a, o, b) {
				var rtl = this.settings.rtl;
				switch (o) {
					case '<':
						return rtl ? a > b : a < b;
					case '>':
						return rtl ? a < b : a > b;
					case '>=':
						return rtl ? a <= b : a >= b;
					case '<=':
						return rtl ? a >= b : a <= b;
					default:
						break;
				}
			};

			/**
			 * Attaches to an internal event.
			 * @protected
			 * @param {HTMLElement} element - The event source.
			 * @param {String} event - The event name.
			 * @param {Function} listener - The event handler to attach.
			 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
			 */
			Owl.prototype.on = function(element, event, listener, capture) {
				if (element.addEventListener) {
					element.addEventListener(event, listener, capture);
				} else if (element.attachEvent) {
					element.attachEvent('on' + event, listener);
				}
			};

			/**
			 * Detaches from an internal event.
			 * @protected
			 * @param {HTMLElement} element - The event source.
			 * @param {String} event - The event name.
			 * @param {Function} listener - The attached event handler to detach.
			 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
			 */
			Owl.prototype.off = function(element, event, listener, capture) {
				if (element.removeEventListener) {
					element.removeEventListener(event, listener, capture);
				} else if (element.detachEvent) {
					element.detachEvent('on' + event, listener);
				}
			};

			/**
			 * Triggers a public event.
			 * @todo Remove `status`, `relatedTarget` should be used instead.
			 * @protected
			 * @param {String} name - The event name.
			 * @param {*} [data=null] - The event data.
			 * @param {String} [namespace=carousel] - The event namespace.
			 * @param {String} [state] - The state which is associated with the event.
			 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
			 * @returns {Event} - The event arguments.
			 */
			Owl.prototype.trigger = function(name, data, namespace, state, enter) {
				var status = {
					item: { count: this._items.length, index: this.current() }
				}, handler = $.camelCase(
					$.grep([ 'on', name, namespace ], function(v) { return v })
						.join('-').toLowerCase()
				), event = $.Event(
					[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
					$.extend({ relatedTarget: this }, status, data)
				);

				if (!this._supress[name]) {
					$.each(this._plugins, function(name, plugin) {
						if (plugin.onTrigger) {
							plugin.onTrigger(event);
						}
					});

					this.register({ type: Owl.Type.Event, name: name });
					this.$element.trigger(event);

					if (this.settings && typeof this.settings[handler] === 'function') {
						this.settings[handler].call(this, event);
					}
				}

				return event;
			};

			/**
			 * Enters a state.
			 * @param name - The state name.
			 */
			Owl.prototype.enter = function(name) {
				$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
					if (this._states.current[name] === undefined) {
						this._states.current[name] = 0;
					}

					this._states.current[name]++;
				}, this));
			};

			/**
			 * Leaves a state.
			 * @param name - The state name.
			 */
			Owl.prototype.leave = function(name) {
				$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
					this._states.current[name]--;
				}, this));
			};

			/**
			 * Registers an event or state.
			 * @public
			 * @param {Object} object - The event or state to register.
			 */
			Owl.prototype.register = function(object) {
				if (object.type === Owl.Type.Event) {
					if (!$.event.special[object.name]) {
						$.event.special[object.name] = {};
					}

					if (!$.event.special[object.name].owl) {
						var _default = $.event.special[object.name]._default;
						$.event.special[object.name]._default = function(e) {
							if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
								return _default.apply(this, arguments);
							}
							return e.namespace && e.namespace.indexOf('owl') > -1;
						};
						$.event.special[object.name].owl = true;
					}
				} else if (object.type === Owl.Type.State) {
					if (!this._states.tags[object.name]) {
						this._states.tags[object.name] = object.tags;
					} else {
						this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
					}

					this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
						return $.inArray(tag, this._states.tags[object.name]) === i;
					}, this));
				}
			};

			/**
			 * Suppresses events.
			 * @protected
			 * @param {Array.<String>} events - The events to suppress.
			 */
			Owl.prototype.suppress = function(events) {
				$.each(events, $.proxy(function(index, event) {
					this._supress[event] = true;
				}, this));
			};

			/**
			 * Releases suppressed events.
			 * @protected
			 * @param {Array.<String>} events - The events to release.
			 */
			Owl.prototype.release = function(events) {
				$.each(events, $.proxy(function(index, event) {
					delete this._supress[event];
				}, this));
			};

			/**
			 * Gets unified pointer coordinates from event.
			 * @todo #261
			 * @protected
			 * @param {Event} - The `mousedown` or `touchstart` event.
			 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
			 */
			Owl.prototype.pointer = function(event) {
				var result = { x: null, y: null };

				event = event.originalEvent || event || window.event;

				event = event.touches && event.touches.length ?
					event.touches[0] : event.changedTouches && event.changedTouches.length ?
					event.changedTouches[0] : event;

				if (event.pageX) {
					result.x = event.pageX;
					result.y = event.pageY;
				} else {
					result.x = event.clientX;
					result.y = event.clientY;
				}

				return result;
			};

			/**
			 * Determines if the input is a Number or something that can be coerced to a Number
			 * @protected
			 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
			 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
			 */
			Owl.prototype.isNumeric = function(number) {
				return !isNaN(parseFloat(number));
			};

			/**
			 * Gets the difference of two vectors.
			 * @todo #261
			 * @protected
			 * @param {Object} - The first vector.
			 * @param {Object} - The second vector.
			 * @returns {Object} - The difference.
			 */
			Owl.prototype.difference = function(first, second) {
				return {
					x: first.x - second.x,
					y: first.y - second.y
				};
			};

			/**
			 * The jQuery Plugin for the Owl Carousel
			 * @todo Navigation plugin `next` and `prev`
			 * @public
			 */
			$.fn.owlCarousel = function(option) {
				var args = Array.prototype.slice.call(arguments, 1);

				return this.each(function() {
					var $this = $(this),
						data = $this.data('owl.carousel');

					if (!data) {
						data = new Owl(this, typeof option == 'object' && option);
						$this.data('owl.carousel', data);

						$.each([
							'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
						], function(i, event) {
							data.register({ type: Owl.Type.Event, name: event });
							data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
								if (e.namespace && e.relatedTarget !== this) {
									this.suppress([ event ]);
									data[event].apply(this, [].slice.call(arguments, 1));
									this.release([ event ]);
								}
							}, data));
						});
					}

					if (typeof option == 'string' && option.charAt(0) !== '_') {
						data[option].apply(data, args);
					}
				});
			};

			/**
			 * The constructor for the jQuery Plugin
			 * @public
			 */
			$.fn.owlCarousel.Constructor = Owl;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * AutoRefresh Plugin
		 * @version 2.1.0
		 * @author Artus Kolanowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates the auto refresh plugin.
			 * @class The Auto Refresh Plugin
			 * @param {Owl} carousel - The Owl Carousel
			 */
			var AutoRefresh = function(carousel) {
				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * Refresh interval.
				 * @protected
				 * @type {number}
				 */
				this._interval = null;

				/**
				 * Whether the element is currently visible or not.
				 * @protected
				 * @type {Boolean}
				 */
				this._visible = null;

				/**
				 * All event handlers.
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'initialized.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.autoRefresh) {
							this.watch();
						}
					}, this)
				};

				// set default options
				this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

				// register event handlers
				this._core.$element.on(this._handlers);
			};

			/**
			 * Default options.
			 * @public
			 */
			AutoRefresh.Defaults = {
				autoRefresh: true,
				autoRefreshInterval: 500
			};

			/**
			 * Watches the element.
			 */
			AutoRefresh.prototype.watch = function() {
				if (this._interval) {
					return;
				}

				this._visible = this._core.$element.is(':visible');
				this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
			};

			/**
			 * Refreshes the element.
			 */
			AutoRefresh.prototype.refresh = function() {
				if (this._core.$element.is(':visible') === this._visible) {
					return;
				}

				this._visible = !this._visible;

				this._core.$element.toggleClass('owl-hidden', !this._visible);

				this._visible && (this._core.invalidate('width') && this._core.refresh());
			};

			/**
			 * Destroys the plugin.
			 */
			AutoRefresh.prototype.destroy = function() {
				var handler, property;

				window.clearInterval(this._interval);

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Lazy Plugin
		 * @version 2.1.0
		 * @author Bartosz Wojciechowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates the lazy plugin.
			 * @class The Lazy Plugin
			 * @param {Owl} carousel - The Owl Carousel
			 */
			var Lazy = function(carousel) {

				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * Already loaded items.
				 * @protected
				 * @type {Array.<jQuery>}
				 */
				this._loaded = [];

				/**
				 * Event handlers.
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
						if (!e.namespace) {
							return;
						}

						if (!this._core.settings || !this._core.settings.lazyLoad) {
							return;
						}

						if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
							var settings = this._core.settings,
								n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
								i = ((settings.center && n * -1) || 0),
								position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
								clones = this._core.clones().length,
								load = $.proxy(function(i, v) { this.load(v) }, this);

							while (i++ < n) {
								this.load(clones / 2 + this._core.relative(position));
								clones && $.each(this._core.clones(this._core.relative(position)), load);
								position++;
							}
						}
					}, this)
				};

				// set the default options
				this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

				// register event handler
				this._core.$element.on(this._handlers);
			};

			/**
			 * Default options.
			 * @public
			 */
			Lazy.Defaults = {
				lazyLoad: false
			};

			/**
			 * Loads all resources of an item at the specified position.
			 * @param {Number} position - The absolute position of the item.
			 * @protected
			 */
			Lazy.prototype.load = function(position) {
				var $item = this._core.$stage.children().eq(position),
					$elements = $item && $item.find('.owl-lazy');

				if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
					return;
				}

				$elements.each($.proxy(function(index, element) {
					var $element = $(element), image,
						url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

					this._core.trigger('load', { element: $element, url: url }, 'lazy');

					if ($element.is('img')) {
						$element.one('load.owl.lazy', $.proxy(function() {
							$element.css('opacity', 1);
							this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
						}, this)).attr('src', url);
					} else {
						image = new Image();
						image.onload = $.proxy(function() {
							$element.css({
								'background-image': 'url(' + url + ')',
								'opacity': '1'
							});
							this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
						}, this);
						image.src = url;
					}
				}, this));

				this._loaded.push($item.get(0));
			};

			/**
			 * Destroys the plugin.
			 * @public
			 */
			Lazy.prototype.destroy = function() {
				var handler, property;

				for (handler in this.handlers) {
					this._core.$element.off(handler, this.handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * AutoHeight Plugin
		 * @version 2.1.0
		 * @author Bartosz Wojciechowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates the auto height plugin.
			 * @class The Auto Height Plugin
			 * @param {Owl} carousel - The Owl Carousel
			 */
			var AutoHeight = function(carousel) {
				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * All event handlers.
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.autoHeight) {
							this.update();
						}
					}, this),
					'changed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
							this.update();
						}
					}, this),
					'loaded.owl.lazy': $.proxy(function(e) {
						if (e.namespace && this._core.settings.autoHeight
							&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
							this.update();
						}
					}, this)
				};

				// set default options
				this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

				// register event handlers
				this._core.$element.on(this._handlers);
			};

			/**
			 * Default options.
			 * @public
			 */
			AutoHeight.Defaults = {
				autoHeight: false,
				autoHeightClass: 'owl-height'
			};

			/**
			 * Updates the view.
			 */
			AutoHeight.prototype.update = function() {
				var start = this._core._current,
					end = start + this._core.settings.items,
					visible = this._core.$stage.children().toArray().slice(start, end),
					heights = [],
					maxheight = 0;

				$.each(visible, function(index, item) {
					heights.push($(item).height());
				});

				maxheight = Math.max.apply(null, heights);

				this._core.$stage.parent()
					.height(maxheight)
					.addClass(this._core.settings.autoHeightClass);
			};

			AutoHeight.prototype.destroy = function() {
				var handler, property;

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Video Plugin
		 * @version 2.1.0
		 * @author Bartosz Wojciechowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates the video plugin.
			 * @class The Video Plugin
			 * @param {Owl} carousel - The Owl Carousel
			 */
			var Video = function(carousel) {
				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * Cache all video URLs.
				 * @protected
				 * @type {Object}
				 */
				this._videos = {};

				/**
				 * Current playing item.
				 * @protected
				 * @type {jQuery}
				 */
				this._playing = null;

				/**
				 * All event handlers.
				 * @todo The cloned content removale is too late
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'initialized.owl.carousel': $.proxy(function(e) {
						if (e.namespace) {
							this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
						}
					}, this),
					'resize.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
							e.preventDefault();
						}
					}, this),
					'refreshed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.is('resizing')) {
							this._core.$stage.find('.cloned .owl-video-frame').remove();
						}
					}, this),
					'changed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && e.property.name === 'position' && this._playing) {
							this.stop();
						}
					}, this),
					'prepared.owl.carousel': $.proxy(function(e) {
						if (!e.namespace) {
							return;
						}

						var $element = $(e.content).find('.owl-video');

						if ($element.length) {
							$element.css('display', 'none');
							this.fetch($element, $(e.content));
						}
					}, this)
				};

				// set default options
				this._core.options = $.extend({}, Video.Defaults, this._core.options);

				// register event handlers
				this._core.$element.on(this._handlers);

				this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
					this.play(e);
				}, this));
			};

			/**
			 * Default options.
			 * @public
			 */
			Video.Defaults = {
				video: false,
				videoHeight: false,
				videoWidth: false
			};

			/**
			 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
			 * @protected
			 * @param {jQuery} target - The target containing the video data.
			 * @param {jQuery} item - The item containing the video.
			 */
			Video.prototype.fetch = function(target, item) {
				var type = (function() {
						if (target.attr('data-vimeo-id')) {
							return 'vimeo';
						} else if (target.attr('data-vzaar-id')) {
							return 'vzaar'
						} else {
							return 'youtube';
						}
					})(),
					id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
					width = target.attr('data-width') || this._core.settings.videoWidth,
					height = target.attr('data-height') || this._core.settings.videoHeight,
					url = target.attr('href');

				if (url) {

					/*
					 Parses the id's out of the following urls (and probably more):
					 https://www.youtube.com/watch?v=:id
					 https://youtu.be/:id
					 https://vimeo.com/:id
					 https://vimeo.com/channels/:channel/:id
					 https://vimeo.com/groups/:group/videos/:id
					 https://app.vzaar.com/videos/:id

					 Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
					 */

					id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

					if (id[3].indexOf('youtu') > -1) {
						type = 'youtube';
					} else if (id[3].indexOf('vimeo') > -1) {
						type = 'vimeo';
					} else if (id[3].indexOf('vzaar') > -1) {
						type = 'vzaar';
					} else {
						throw new Error('Video URL not supported.');
					}
					id = id[6];
				} else {
					throw new Error('Missing video URL.');
				}

				this._videos[url] = {
					type: type,
					id: id,
					width: width,
					height: height
				};

				item.attr('data-video', url);

				this.thumbnail(target, this._videos[url]);
			};

			/**
			 * Creates video thumbnail.
			 * @protected
			 * @param {jQuery} target - The target containing the video data.
			 * @param {Object} info - The video info object.
			 * @see `fetch`
			 */
			Video.prototype.thumbnail = function(target, video) {
				var tnLink,
					icon,
					path,
					dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
					customTn = target.find('img'),
					srcType = 'src',
					lazyClass = '',
					settings = this._core.settings,
					create = function(path) {
						icon = '<div class="owl-video-play-icon"></div>';

						if (settings.lazyLoad) {
							tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
						} else {
							tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
						}
						target.after(tnLink);
						target.after(icon);
					};

				// wrap video content into owl-video-wrapper div
				target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

				if (this._core.settings.lazyLoad) {
					srcType = 'data-src';
					lazyClass = 'owl-lazy';
				}

				// custom thumbnail
				if (customTn.length) {
					create(customTn.attr(srcType));
					customTn.remove();
					return false;
				}

				if (video.type === 'youtube') {
					path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
					create(path);
				} else if (video.type === 'vimeo') {
					$.ajax({
						type: 'GET',
						url: '//vimeo.com/api/v2/video/' + video.id + '.json',
						jsonp: 'callback',
						dataType: 'jsonp',
						success: function(data) {
							path = data[0].thumbnail_large;
							create(path);
						}
					});
				} else if (video.type === 'vzaar') {
					$.ajax({
						type: 'GET',
						url: '//vzaar.com/api/videos/' + video.id + '.json',
						jsonp: 'callback',
						dataType: 'jsonp',
						success: function(data) {
							path = data.framegrab_url;
							create(path);
						}
					});
				}
			};

			/**
			 * Stops the current video.
			 * @public
			 */
			Video.prototype.stop = function() {
				this._core.trigger('stop', null, 'video');
				this._playing.find('.owl-video-frame').remove();
				this._playing.removeClass('owl-video-playing');
				this._playing = null;
				this._core.leave('playing');
				this._core.trigger('stopped', null, 'video');
			};

			/**
			 * Starts the current video.
			 * @public
			 * @param {Event} event - The event arguments.
			 */
			Video.prototype.play = function(event) {
				var target = $(event.target),
					item = target.closest('.' + this._core.settings.itemClass),
					video = this._videos[item.attr('data-video')],
					width = video.width || '100%',
					height = video.height || this._core.$stage.height(),
					html;

				if (this._playing) {
					return;
				}

				this._core.enter('playing');
				this._core.trigger('play', null, 'video');

				item = this._core.items(this._core.relative(item.index()));

				this._core.reset(item.index());

				if (video.type === 'youtube') {
					html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
						video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
				} else if (video.type === 'vimeo') {
					html = '<iframe src="//player.vimeo.com/video/' + video.id +
						'?autoplay=1" width="' + width + '" height="' + height +
						'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
				} else if (video.type === 'vzaar') {
					html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
						'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
						'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
				}

				$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

				this._playing = item.addClass('owl-video-playing');
			};

			/**
			 * Checks whether an video is currently in full screen mode or not.
			 * @todo Bad style because looks like a readonly method but changes members.
			 * @protected
			 * @returns {Boolean}
			 */
			Video.prototype.isInFullScreen = function() {
				var element = document.fullscreenElement || document.mozFullScreenElement ||
					document.webkitFullscreenElement;

				return element && $(element).parent().hasClass('owl-video-frame');
			};

			/**
			 * Destroys the plugin.
			 */
			Video.prototype.destroy = function() {
				var handler, property;

				this._core.$element.off('click.owl.video');

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.Video = Video;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Animate Plugin
		 * @version 2.1.0
		 * @author Bartosz Wojciechowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates the animate plugin.
			 * @class The Navigation Plugin
			 * @param {Owl} scope - The Owl Carousel
			 */
			var Animate = function(scope) {
				this.core = scope;
				this.core.options = $.extend({}, Animate.Defaults, this.core.options);
				this.swapping = true;
				this.previous = undefined;
				this.next = undefined;

				this.handlers = {
					'change.owl.carousel': $.proxy(function(e) {
						if (e.namespace && e.property.name == 'position') {
							this.previous = this.core.current();
							this.next = e.property.value;
						}
					}, this),
					'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
						if (e.namespace) {
							this.swapping = e.type == 'translated';
						}
					}, this),
					'translate.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
							this.swap();
						}
					}, this)
				};

				this.core.$element.on(this.handlers);
			};

			/**
			 * Default options.
			 * @public
			 */
			Animate.Defaults = {
				animateOut: false,
				animateIn: false
			};

			/**
			 * Toggles the animation classes whenever an translations starts.
			 * @protected
			 * @returns {Boolean|undefined}
			 */
			Animate.prototype.swap = function() {

				if (this.core.settings.items !== 1) {
					return;
				}

				if (!$.support.animation || !$.support.transition) {
					return;
				}

				this.core.speed(0);

				var left,
					clear = $.proxy(this.clear, this),
					previous = this.core.$stage.children().eq(this.previous),
					next = this.core.$stage.children().eq(this.next),
					incoming = this.core.settings.animateIn,
					outgoing = this.core.settings.animateOut;

				if (this.core.current() === this.previous) {
					return;
				}

				if (outgoing) {
					left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
					previous.one($.support.animation.end, clear)
						.css( { 'left': left + 'px' } )
						.addClass('animated owl-animated-out')
						.addClass(outgoing);
				}

				if (incoming) {
					next.one($.support.animation.end, clear)
						.addClass('animated owl-animated-in')
						.addClass(incoming);
				}
			};

			Animate.prototype.clear = function(e) {
				$(e.target).css( { 'left': '' } )
					.removeClass('animated owl-animated-out owl-animated-in')
					.removeClass(this.core.settings.animateIn)
					.removeClass(this.core.settings.animateOut);
				this.core.onTransitionEnd();
			};

			/**
			 * Destroys the plugin.
			 * @public
			 */
			Animate.prototype.destroy = function() {
				var handler, property;

				for (handler in this.handlers) {
					this.core.$element.off(handler, this.handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Autoplay Plugin
		 * @version 2.1.0
		 * @author Bartosz Wojciechowski
		 * @author Artus Kolanowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			/**
			 * Creates the autoplay plugin.
			 * @class The Autoplay Plugin
			 * @param {Owl} scope - The Owl Carousel
			 */
			var Autoplay = function(carousel) {
				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * The autoplay timeout.
				 * @type {Timeout}
				 */
				this._timeout = null;

				/**
				 * Indicates whenever the autoplay is paused.
				 * @type {Boolean}
				 */
				this._paused = false;

				/**
				 * All event handlers.
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'changed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && e.property.name === 'settings') {
							if (this._core.settings.autoplay) {
								this.play();
							} else {
								this.stop();
							}
						} else if (e.namespace && e.property.name === 'position') {
							//console.log('play?', e);
							if (this._core.settings.autoplay) {
								this._setAutoPlayInterval();
							}
						}
					}, this),
					'initialized.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.autoplay) {
							this.play();
						}
					}, this),
					'play.owl.autoplay': $.proxy(function(e, t, s) {
						if (e.namespace) {
							this.play(t, s);
						}
					}, this),
					'stop.owl.autoplay': $.proxy(function(e) {
						if (e.namespace) {
							this.stop();
						}
					}, this),
					'mouseover.owl.autoplay': $.proxy(function() {
						if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
							this.pause();
						}
					}, this),
					'mouseleave.owl.autoplay': $.proxy(function() {
						if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
							this.play();
						}
					}, this),
					'touchstart.owl.core': $.proxy(function() {
						if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
							this.pause();
						}
					}, this),
					'touchend.owl.core': $.proxy(function() {
						if (this._core.settings.autoplayHoverPause) {
							this.play();
						}
					}, this)
				};

				// register event handlers
				this._core.$element.on(this._handlers);

				// set default options
				this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
			};

			/**
			 * Default options.
			 * @public
			 */
			Autoplay.Defaults = {
				autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: false,
				autoplaySpeed: false
			};

			/**
			 * Starts the autoplay.
			 * @public
			 * @param {Number} [timeout] - The interval before the next animation starts.
			 * @param {Number} [speed] - The animation speed for the animations.
			 */
			Autoplay.prototype.play = function(timeout, speed) {
				this._paused = false;

				if (this._core.is('rotating')) {
					return;
				}

				this._core.enter('rotating');

				this._setAutoPlayInterval();
			};

			/**
			 * Gets a new timeout
			 * @private
			 * @param {Number} [timeout] - The interval before the next animation starts.
			 * @param {Number} [speed] - The animation speed for the animations.
			 * @return {Timeout}
			 */
			Autoplay.prototype._getNextTimeout = function(timeout, speed) {
				if ( this._timeout ) {
					window.clearTimeout(this._timeout);
				}
				return window.setTimeout($.proxy(function() {
					if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
						return;
					}
					this._core.next(speed || this._core.settings.autoplaySpeed);
				}, this), timeout || this._core.settings.autoplayTimeout);
			};

			/**
			 * Sets autoplay in motion.
			 * @private
			 */
			Autoplay.prototype._setAutoPlayInterval = function() {
				this._timeout = this._getNextTimeout();
			};

			/**
			 * Stops the autoplay.
			 * @public
			 */
			Autoplay.prototype.stop = function() {
				if (!this._core.is('rotating')) {
					return;
				}

				window.clearTimeout(this._timeout);
				this._core.leave('rotating');
			};

			/**
			 * Stops the autoplay.
			 * @public
			 */
			Autoplay.prototype.pause = function() {
				if (!this._core.is('rotating')) {
					return;
				}

				this._paused = true;
			};

			/**
			 * Destroys the plugin.
			 */
			Autoplay.prototype.destroy = function() {
				var handler, property;

				this.stop();

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Navigation Plugin
		 * @version 2.1.0
		 * @author Artus Kolanowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {
			'use strict';

			/**
			 * Creates the navigation plugin.
			 * @class The Navigation Plugin
			 * @param {Owl} carousel - The Owl Carousel.
			 */
			var Navigation = function(carousel) {
				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * Indicates whether the plugin is initialized or not.
				 * @protected
				 * @type {Boolean}
				 */
				this._initialized = false;

				/**
				 * The current paging indexes.
				 * @protected
				 * @type {Array}
				 */
				this._pages = [];

				/**
				 * All DOM elements of the user interface.
				 * @protected
				 * @type {Object}
				 */
				this._controls = {};

				/**
				 * Markup for an indicator.
				 * @protected
				 * @type {Array.<String>}
				 */
				this._templates = [];

				/**
				 * The carousel element.
				 * @type {jQuery}
				 */
				this.$element = this._core.$element;

				/**
				 * Overridden methods of the carousel.
				 * @protected
				 * @type {Object}
				 */
				this._overrides = {
					next: this._core.next,
					prev: this._core.prev,
					to: this._core.to
				};

				/**
				 * All event handlers.
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'prepared.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.dotsData) {
							this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
								$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
						}
					}, this),
					'added.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.dotsData) {
							this._templates.splice(e.position, 0, this._templates.pop());
						}
					}, this),
					'remove.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.dotsData) {
							this._templates.splice(e.position, 1);
						}
					}, this),
					'changed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && e.property.name == 'position') {
							this.draw();
						}
					}, this),
					'initialized.owl.carousel': $.proxy(function(e) {
						if (e.namespace && !this._initialized) {
							this._core.trigger('initialize', null, 'navigation');
							this.initialize();
							this.update();
							this.draw();
							this._initialized = true;
							this._core.trigger('initialized', null, 'navigation');
						}
					}, this),
					'refreshed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._initialized) {
							this._core.trigger('refresh', null, 'navigation');
							this.update();
							this.draw();
							this._core.trigger('refreshed', null, 'navigation');
						}
					}, this)
				};

				// set default options
				this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

				// register event handlers
				this.$element.on(this._handlers);
			};

			/**
			 * Default options.
			 * @public
			 * @todo Rename `slideBy` to `navBy`
			 */
			Navigation.Defaults = {
				nav: false,
				navText: [ 'prev', 'next' ],
				navSpeed: false,
				navElement: 'div',
				navContainer: false,
				navContainerClass: 'owl-nav',
				navClass: [ 'owl-prev', 'owl-next' ],
				slideBy: 1,
				dotClass: 'owl-dot',
				dotsClass: 'owl-dots',
				dots: true,
				dotsEach: false,
				dotsData: false,
				dotsSpeed: false,
				dotsContainer: false
			};

			/**
			 * Initializes the layout of the plugin and extends the carousel.
			 * @protected
			 */
			Navigation.prototype.initialize = function() {
				var override,
					settings = this._core.settings;

				// create DOM structure for relative navigation
				this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
					: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

				this._controls.$previous = $('<' + settings.navElement + '>')
					.addClass(settings.navClass[0])
					.html(settings.navText[0])
					.prependTo(this._controls.$relative)
					.on('click', $.proxy(function(e) {
						this.prev(settings.navSpeed);
					}, this));
				this._controls.$next = $('<' + settings.navElement + '>')
					.addClass(settings.navClass[1])
					.html(settings.navText[1])
					.appendTo(this._controls.$relative)
					.on('click', $.proxy(function(e) {
						this.next(settings.navSpeed);
					}, this));

				// create DOM structure for absolute navigation
				if (!settings.dotsData) {
					this._templates = [ $('<div>')
						.addClass(settings.dotClass)
						.append($('<span>'))
						.prop('outerHTML') ];
				}

				this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
					: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

				this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
					var index = $(e.target).parent().is(this._controls.$absolute)
						? $(e.target).index() : $(e.target).parent().index();

					e.preventDefault();

					this.to(index, settings.dotsSpeed);
				}, this));

				// override public methods of the carousel
				for (override in this._overrides) {
					this._core[override] = $.proxy(this[override], this);
				}
			};

			/**
			 * Destroys the plugin.
			 * @protected
			 */
			Navigation.prototype.destroy = function() {
				var handler, control, property, override;

				for (handler in this._handlers) {
					this.$element.off(handler, this._handlers[handler]);
				}
				for (control in this._controls) {
					this._controls[control].remove();
				}
				for (override in this.overides) {
					this._core[override] = this._overrides[override];
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			/**
			 * Updates the internal state.
			 * @protected
			 */
			Navigation.prototype.update = function() {
				var i, j, k,
					lower = this._core.clones().length / 2,
					upper = lower + this._core.items().length,
					maximum = this._core.maximum(true),
					settings = this._core.settings,
					size = settings.center || settings.autoWidth || settings.dotsData
						? 1 : settings.dotsEach || settings.items;

				if (settings.slideBy !== 'page') {
					settings.slideBy = Math.min(settings.slideBy, settings.items);
				}

				if (settings.dots || settings.slideBy == 'page') {
					this._pages = [];

					for (i = lower, j = 0, k = 0; i < upper; i++) {
						if (j >= size || j === 0) {
							this._pages.push({
								start: Math.min(maximum, i - lower),
								end: i - lower + size - 1
							});
							if (Math.min(maximum, i - lower) === maximum) {
								break;
							}
							j = 0, ++k;
						}
						j += this._core.mergers(this._core.relative(i));
					}
				}
			};

			/**
			 * Draws the user interface.
			 * @todo The option `dotsData` wont work.
			 * @protected
			 */
			Navigation.prototype.draw = function() {
				var difference,
					settings = this._core.settings,
					disabled = this._core.items().length <= settings.items,
					index = this._core.relative(this._core.current()),
					loop = settings.loop || settings.rewind;

				this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

				if (settings.nav) {
					this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
					this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
				}

				this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

				if (settings.dots) {
					difference = this._pages.length - this._controls.$absolute.children().length;

					if (settings.dotsData && difference !== 0) {
						this._controls.$absolute.html(this._templates.join(''));
					} else if (difference > 0) {
						this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
					} else if (difference < 0) {
						this._controls.$absolute.children().slice(difference).remove();
					}

					this._controls.$absolute.find('.active').removeClass('active');
					this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
				}
			};

			/**
			 * Extends event data.
			 * @protected
			 * @param {Event} event - The event object which gets thrown.
			 */
			Navigation.prototype.onTrigger = function(event) {
				var settings = this._core.settings;

				event.page = {
					index: $.inArray(this.current(), this._pages),
					count: this._pages.length,
					size: settings && (settings.center || settings.autoWidth || settings.dotsData
						? 1 : settings.dotsEach || settings.items)
				};
			};

			/**
			 * Gets the current page position of the carousel.
			 * @protected
			 * @returns {Number}
			 */
			Navigation.prototype.current = function() {
				var current = this._core.relative(this._core.current());
				return $.grep(this._pages, $.proxy(function(page, index) {
					return page.start <= current && page.end >= current;
				}, this)).pop();
			};

			/**
			 * Gets the current succesor/predecessor position.
			 * @protected
			 * @returns {Number}
			 */
			Navigation.prototype.getPosition = function(successor) {
				var position, length,
					settings = this._core.settings;

				if (settings.slideBy == 'page') {
					position = $.inArray(this.current(), this._pages);
					length = this._pages.length;
					successor ? ++position : --position;
					position = this._pages[((position % length) + length) % length].start;
				} else {
					position = this._core.relative(this._core.current());
					length = this._core.items().length;
					successor ? position += settings.slideBy : position -= settings.slideBy;
				}

				return position;
			};

			/**
			 * Slides to the next item or page.
			 * @public
			 * @param {Number} [speed=false] - The time in milliseconds for the transition.
			 */
			Navigation.prototype.next = function(speed) {
				$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
			};

			/**
			 * Slides to the previous item or page.
			 * @public
			 * @param {Number} [speed=false] - The time in milliseconds for the transition.
			 */
			Navigation.prototype.prev = function(speed) {
				$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
			};

			/**
			 * Slides to the specified item or page.
			 * @public
			 * @param {Number} position - The position of the item or page.
			 * @param {Number} [speed] - The time in milliseconds for the transition.
			 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
			 */
			Navigation.prototype.to = function(position, speed, standard) {
				var length;

				if (!standard && this._pages.length) {
					length = this._pages.length;
					$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
				} else {
					$.proxy(this._overrides.to, this._core)(position, speed);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Hash Plugin
		 * @version 2.1.0
		 * @author Artus Kolanowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {
			'use strict';

			/**
			 * Creates the hash plugin.
			 * @class The Hash Plugin
			 * @param {Owl} carousel - The Owl Carousel
			 */
			var Hash = function(carousel) {
				/**
				 * Reference to the core.
				 * @protected
				 * @type {Owl}
				 */
				this._core = carousel;

				/**
				 * Hash index for the items.
				 * @protected
				 * @type {Object}
				 */
				this._hashes = {};

				/**
				 * The carousel element.
				 * @type {jQuery}
				 */
				this.$element = this._core.$element;

				/**
				 * All event handlers.
				 * @protected
				 * @type {Object}
				 */
				this._handlers = {
					'initialized.owl.carousel': $.proxy(function(e) {
						if (e.namespace && this._core.settings.startPosition === 'URLHash') {
							$(window).trigger('hashchange.owl.navigation');
						}
					}, this),
					'prepared.owl.carousel': $.proxy(function(e) {
						if (e.namespace) {
							var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

							if (!hash) {
								return;
							}

							this._hashes[hash] = e.content;
						}
					}, this),
					'changed.owl.carousel': $.proxy(function(e) {
						if (e.namespace && e.property.name === 'position') {
							var current = this._core.items(this._core.relative(this._core.current())),
								hash = $.map(this._hashes, function(item, hash) {
									return item === current ? hash : null;
								}).join();

							if (!hash || window.location.hash.slice(1) === hash) {
								return;
							}

							window.location.hash = hash;
						}
					}, this)
				};

				// set default options
				this._core.options = $.extend({}, Hash.Defaults, this._core.options);

				// register the event handlers
				this.$element.on(this._handlers);

				// register event listener for hash navigation
				$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
					var hash = window.location.hash.substring(1),
						items = this._core.$stage.children(),
						position = this._hashes[hash] && items.index(this._hashes[hash]);

					if (position === undefined || position === this._core.current()) {
						return;
					}

					this._core.to(this._core.relative(position), false, true);
				}, this));
			};

			/**
			 * Default options.
			 * @public
			 */
			Hash.Defaults = {
				URLhashListener: false
			};

			/**
			 * Destroys the plugin.
			 * @public
			 */
			Hash.prototype.destroy = function() {
				var handler, property;

				$(window).off('hashchange.owl.navigation');

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

		})(window.Zepto || window.jQuery, window, document);

		/**
		 * Support Plugin
		 *
		 * @version 2.1.0
		 * @author Vivid Planet Software GmbH
		 * @author Artus Kolanowski
		 * @author David Deutsch
		 * @license The MIT License (MIT)
		 */
		;(function($, window, document, undefined) {

			var style = $('<support>').get(0).style,
				prefixes = 'Webkit Moz O ms'.split(' '),
				events = {
					transition: {
						end: {
							WebkitTransition: 'webkitTransitionEnd',
							MozTransition: 'transitionend',
							OTransition: 'oTransitionEnd',
							transition: 'transitionend'
						}
					},
					animation: {
						end: {
							WebkitAnimation: 'webkitAnimationEnd',
							MozAnimation: 'animationend',
							OAnimation: 'oAnimationEnd',
							animation: 'animationend'
						}
					}
				},
				tests = {
					csstransforms: function() {
						return !!test('transform');
					},
					csstransforms3d: function() {
						return !!test('perspective');
					},
					csstransitions: function() {
						return !!test('transition');
					},
					cssanimations: function() {
						return !!test('animation');
					}
				};

			function test(property, prefixed) {
				var result = false,
					upper = property.charAt(0).toUpperCase() + property.slice(1);

				$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
					if (style[property] !== undefined) {
						result = prefixed ? property : true;
						return false;
					}
				});

				return result;
			}

			function prefixed(property) {
				return test(property, true);
			}

			if (tests.csstransitions()) {
				/* jshint -W053 */
				$.support.transition = new String(prefixed('transition'))
				$.support.transition.end = events.transition.end[ $.support.transition ];
			}

			if (tests.cssanimations()) {
				/* jshint -W053 */
				$.support.animation = new String(prefixed('animation'))
				$.support.animation.end = events.animation.end[ $.support.animation ];
			}

			if (tests.csstransforms()) {
				/* jshint -W053 */
				$.support.transform = new String(prefixed('transform'));
				$.support.transform3d = tests.csstransforms3d();
			}

		})(window.Zepto || window.jQuery, window, document);

	}
});
new Component.Controller(function () {

    //waiting array with new get params
    this.on('addGetParams', function (newGetParams) {
        var paramsString = '';

        if(newGetParams) {
            paramsString = '?' + newGetParams
        }
        window.location = '//' + window.location.host + window.location.pathname + paramsString;

    });

});