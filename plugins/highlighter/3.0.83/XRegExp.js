/* XRegExp 1.5.0, (c) 2007-2010 Steven Levithan, http://xregexp.com */
var XRegExp;if(XRegExp)throw Error("can't load XRegExp twice in the same frame");(function(){function l(a,b){if(!XRegExp.isRegExp(a))throw TypeError("type RegExp expected");var c=a._xregexp;return a=XRegExp(a.source,m(a)+(b||"")),c&&(a._xregexp={source:c.source,captureNames:c.captureNames?c.captureNames.slice(0):null}),a}function m(a){return(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":"")}function n(a,b,c,f){var g=e.length,h,i,j;d=!0;try{while(g--){j=e[g];if(c&j.scope&&(!j.trigger||j.trigger.call(f))){j.pattern.lastIndex=b,i=j.pattern.exec(a);if(i&&i.index===b){h={output:j.handler.call(f,i,c),match:i};break}}}}catch(k){throw k}finally{d=!1}return h}function o(a,b,c){if(Array.prototype.indexOf)return a.indexOf(b,c);for(var d=c||0;d<a.length;d++)if(a[d]===b)return d;return-1}XRegExp=function(a,c){var e=[],g=XRegExp.OUTSIDE_CLASS,h=0,i,j,m,o,p;if(XRegExp.isRegExp(a)){if(c!==undefined)throw TypeError("can't supply flags when constructing one RegExp from another");return l(a)}if(d)throw Error("can't call the XRegExp constructor within token definition functions");c=c||"",i={hasNamedCapture:!1,captureNames:[],hasFlag:function(a){return c.indexOf(a)>-1},setFlag:function(a){c+=a}};while(h<a.length)j=n(a,h,g,i),j?(e.push(j.output),h+=j.match[0].length||1):(m=f.exec.call(k[g],a.slice(h)))?(e.push(m[0]),h+=m[0].length):(o=a.charAt(h),o==="["?g=XRegExp.INSIDE_CLASS:o==="]"&&(g=XRegExp.OUTSIDE_CLASS),e.push(o),h++);return p=RegExp(e.join(""),f.replace.call(c,b,"")),p._xregexp={source:a,captureNames:i.hasNamedCapture?i.captureNames:null},p},XRegExp.version="1.5.0",XRegExp.INSIDE_CLASS=1,XRegExp.OUTSIDE_CLASS=2;var a=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,b=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,c=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,d=!1,e=[],f={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},g=f.exec.call(/()??/,"")[1]===undefined,h=function(){var a=/^/g;return f.test.call(a,""),!a.lastIndex}(),i=function(){var a=/x/g;return f.replace.call("x",a,""),!a.lastIndex}(),j=RegExp.prototype.sticky!==undefined,k={};k[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/,k[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,XRegExp.addToken=function(a,b,c,d){e.push({pattern:l(a,"g"+(j?"y":"")),handler:b,scope:c||XRegExp.OUTSIDE_CLASS,trigger:d||null})},XRegExp.cache=function(a,b){var c=a+"/"+(b||"");return XRegExp.cache[c]||(XRegExp.cache[c]=XRegExp(a,b))},XRegExp.copyAsGlobal=function(a){return l(a,"g")},XRegExp.escape=function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},XRegExp.execAt=function(a,b,c,d){b=l(b,"g"+(d&&j?"y":"")),b.lastIndex=c=c||0;var e=b.exec(a);return d?e&&e.index===c?e:null:e},XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}},XRegExp.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"},XRegExp.iterate=function(a,b,c,d){var e=l(b,"g"),f=-1,g;while(g=e.exec(a))c.call(d,g,++f,a,e),e.lastIndex===g.index&&e.lastIndex++;b.global&&(b.lastIndex=0)},XRegExp.matchChain=function(a,b){return function c(a,d){var e=b[d].regex?b[d]:{regex:b[d]},f=l(e.regex,"g"),g=[],h;for(h=0;h<a.length;h++)XRegExp.iterate(a[h],f,function(a){g.push(e.backref?a[e.backref]||"":a[0])});return d===b.length-1||!g.length?g:c(g,d+1)}([a],0)},RegExp.prototype.apply=function(a,b){return this.exec(b[0])},RegExp.prototype.call=function(a,b){return this.exec(b)},RegExp.prototype.exec=function(a){var b=f.exec.apply(this,arguments),c,d;if(b){!g&&b.length>1&&o(b,"")>-1&&(d=RegExp(this.source,f.replace.call(m(this),"g","")),f.replace.call(a.slice(b.index),d,function(){for(var a=1;a<arguments.length-2;a++)arguments[a]===undefined&&(b[a]=undefined)}));if(this._xregexp&&this._xregexp.captureNames)for(var e=1;e<b.length;e++)c=this._xregexp.captureNames[e-1],c&&(b[c]=b[e]);!h&&this.global&&!b[0].length&&this.lastIndex>b.index&&this.lastIndex--}return b},h||(RegExp.prototype.test=function(a){var b=f.exec.call(this,a);return b&&this.global&&!b[0].length&&this.lastIndex>b.index&&this.lastIndex--,!!b}),String.prototype.match=function(a){XRegExp.isRegExp(a)||(a=RegExp(a));if(a.global){var b=f.match.apply(this,arguments);return a.lastIndex=0,b}return a.exec(this)},String.prototype.replace=function(b,c){var d=XRegExp.isRegExp(b),e,g,h;return d&&typeof c.valueOf()=="string"&&c.indexOf("${")===-1&&i?f.replace.apply(this,arguments):(d?b._xregexp&&(e=b._xregexp.captureNames):b+="",typeof c=="function"?g=f.replace.call(this,b,function(){if(e){arguments[0]=new String(arguments[0]);for(var a=0;a<e.length;a++)e[a]&&(arguments[0][e[a]]=arguments[a+1])}return d&&b.global&&(b.lastIndex=arguments[arguments.length-2]+arguments[0].length),c.apply(null,arguments)}):(h=this+"",g=f.replace.call(h,b,function(){var b=arguments;return f.replace.call(c,a,function(a,c,d){if(!c){var g=+d;return g<=b.length-3?b[g]:(g=e?o(e,d):-1,g>-1?b[g+1]:a)}switch(c){case"$":return"$";case"&":return b[0];case"`":return b[b.length-1].slice(0,b[b.length-2]);case"'":return b[b.length-1].slice(b[b.length-2]+b[0].length);default:var f="";c=+c;if(!c)return a;while(c>b.length-3)f=String.prototype.slice.call(c,-1)+f,c=Math.floor(c/10);return(c?b[c]||"":"$")+f}})})),d&&b.global&&(b.lastIndex=0),g)},String.prototype.split=function(a,b){if(!XRegExp.isRegExp(a))return f.split.apply(this,arguments);var c=this+"",d=[],e=0,g,h;if(b===undefined||+b<0)b=Infinity;else{b=Math.floor(+b);if(!b)return[]}a=XRegExp.copyAsGlobal(a);while(g=a.exec(c)){if(a.lastIndex>e){d.push(c.slice(e,g.index)),g.length>1&&g.index<c.length&&Array.prototype.push.apply(d,g.slice(1)),h=g[0].length,e=a.lastIndex;if(d.length>=b)break}a.lastIndex===g.index&&a.lastIndex++}return e===c.length?(!f.test.call(a,"")||h)&&d.push(""):d.push(c.slice(e)),d.length>b?d.slice(0,b):d},XRegExp.addToken(/\(\?#[^)]*\)/,function(a){return f.test.call(c,a.input.slice(a.index+a[0].length))?"":"(?:)"}),XRegExp.addToken(/\((?!\?)/,function(){return this.captureNames.push(null),"("}),XRegExp.addToken(/\(\?<([$\w]+)>/,function(a){return this.captureNames.push(a[1]),this.hasNamedCapture=!0,"("}),XRegExp.addToken(/\\k<([\w$]+)>/,function(a){var b=o(this.captureNames,a[1]);return b>-1?"\\"+(b+1)+(isNaN(a.input.charAt(a.index+a[0].length))?"":"(?:)"):a[0]}),XRegExp.addToken(/\[\^?]/,function(a){return a[0]==="[]"?"\\b\\B":"[\\s\\S]"}),XRegExp.addToken(/^\(\?([imsx]+)\)/,function(a){return this.setFlag(a[1]),""}),XRegExp.addToken(/(?:\s+|#.*)+/,function(a){return f.test.call(c,a.input.slice(a.index+a[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")}),XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})})();