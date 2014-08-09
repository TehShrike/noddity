!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require
if(!a&&u)return u(s,!0)
if(o)return o(s,!0)
throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}}
e[s][0].call(c.exports,function(t){var n=e[s][1][t]
return i(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s])
return i}({1:[function(t,e){var n=t("levelup"),r=t("localstorage-down"),i=function(t){return new r(t)}
e.exports={clearCache:function(){var t=n("noddity-content",{db:i})
t.createKeyStream().on("data",function(e){t.del(e)})}}},{levelup:20,"localstorage-down":44}],2:[function(t){var e=t("noddity-butler"),n=t("levelup"),r=t("noddity-linkifier"),i=t("localstorage-down"),o=t("./routing"),s=t("./mainViewModel"),a=t("level-sublevel"),u=noddityConfig,c=function(t){return new i(t)},h=a(n("noddity-content",{db:c})),f=u.title.replace(/[^\w]+/g,""),l=u.debug?{refreshEvery:3e4}:void 0,p=new e(u.noddityRoot,h.sublevel(f),l),d=new r(u.pathPrefix+u.pagePathPrefix),g=new s(p,d),v=o()
v.on("current",g.setCurrent),u.debug&&(window.debug=t("./debug"))},{"./debug":1,"./mainViewModel":3,"./routing":4,"level-sublevel":6,levelup:20,"localstorage-down":44,"noddity-butler":55,"noddity-linkifier":81}],3:[function(t,e){function n(){}var r=t("ractive"),i=noddityConfig,o=t("noddity-renderer")
e.exports=function(t,e){function s(t){console.log(t)}function a(){t.getPosts(function(t,e){t?s(t):g.set("postList",e.reverse().filter(function(t){return"string"==typeof t.metadata.title}).map(function(t){return{title:t.metadata.title,filename:t.filename}}))})}function u(e){t.getPost(e,function(t,n){t?(p.set("html",t.message),l.set("page",null),e!==i.errorPage&&(window.location=window.location.origin+window.location.pathname+i.pathPrefix+i.pagePathPrefix+i.errorPage)):(l.set("page",n.metadata.title),f?f(n):f=h.populateRootRactive(n,p),g.get("postList")||a())})}function c(t,e){function n(n){return n.filename===t&&n.title!==e.metadata.title}var r=g.get("postList")
r&&r.some(n)&&a()}var h=new o(t,e.linkify),f=null,l=new r({el:"title",template:"{{title}}{{#page}} | {{page}}{{/page}}",data:{title:i.title}}),p=new r({el:"main",template:"#template-main",data:Object.create(i)}),d=i.sidebar?"{{{html}}}":"#template-menu",g=new r({el:"sidebar",template:d,data:Object.create(i)})
return i.sidebar&&t.getPost(i.sidebar,function(t,e){t?g.set("html",t.message):h.populateRootRactive(e,g)}),e.on("link",function(e){t.getPost(e,n)}),t.on("post changed",c),t.on("index changed",a),{setCurrent:u}}},{"noddity-renderer":82,ractive:92}],4:[function(t,e){var n=noddityConfig,r=t("events").EventEmitter
e.exports=function(){var t=new r,e=Satnav({}).navigate({path:"!/"+n.pagePathPrefix+"{name}",directions:function(e){t.emit("current",e.name)}}).navigate({path:"!/",directions:function(){t.emit("current","index.md")}}).navigate({path:"",directions:function(){document.location=document.location+"#!/"}}).change(function(){window.scrollTo(0,0)}).otherwise("!/"+n.pagePathPrefix+"404.md")
return setTimeout(e.go.bind(e),0),t}},{events:97}],5:[function(t,e){function n(t,e,n,r){var i={type:t,key:e,value:n,options:r}
return r&&r.prefix&&(i.prefix=r.prefix,delete r.prefix),this._operations.push(i),this}function r(t){this._operations=[],this._sdb=t,this.put=n.bind(this,"put"),this.del=n.bind(this,"del")}var i=r.prototype
i.clear=function(){this._operations=[]},i.write=function(t){this._sdb.batch(this._operations,t)},e.exports=r},{}],6:[function(t,e){(function(n){var r=(t("events").EventEmitter,n.nextTick,t("./sub")),i=t("./batch"),o=t("level-fix-range"),s=t("level-hooks")
e.exports=function(t,e){function n(){}function a(t){return function(e){return e=e||{},e=o(e),e.reverse?e.start=e.start||c:e.end=e.end||c,t.call(u,e)}}n.prototype=t
var u=new n
if(u.sublevel)return u
e=e||{}
var c=e.sep=e.sep||"ÿ"
u._options=e,s(u),u.sublevels={},u.sublevel=function(t,e){return u.sublevels[t]?u.sublevels[t]:new r(u,t,e||this._options)},u.methods={},u.prefix=function(t){return""+(t||"")},u.pre=function(t,e){return e||(e=t,t={max:c}),u.hooks.pre(t,e)},u.post=function(t,e){return e||(e=t,t={max:c}),u.hooks.post(t,e)},u.readStream=u.createReadStream=a(u.createReadStream),u.keyStream=u.createKeyStream=a(u.createKeyStream),u.valuesStream=u.createValueStream=a(u.createValueStream)
var h=u.batch
return u.batch=function(t,e,n){return Array.isArray(t)?(t.forEach(function(t){t.prefix&&("function"==typeof t.prefix.prefix?t.key=t.prefix.prefix(t.key):"string"==typeof t.prefix&&(t.key=t.prefix+t.key))}),void h.call(u,t,e,n)):new i(u)},u}}).call(this,t("Zh58VX"))},{"./batch":5,"./sub":17,Zh58VX:103,events:97,"level-fix-range":7,"level-hooks":9}],7:[function(t,e){var n=t("clone")
e.exports=function(t){t=n(t)
var e=t.reverse,r=t.max||t.end,i=t.min||t.start,o=[i,r]
return null!=i&&null!=r&&o.sort(),e&&(o=o.reverse()),t.start=o[0],t.end=o[1],delete t.min,delete t.max,t}},{clone:8}],8:[function(t,e){(function(t){"use strict"
function n(t){return Object.prototype.toString.call(t)}function r(e,n,r,o){function s(e,r){if(null===e)return null
if(0==r)return e
var h
if("object"!=typeof e)return e
if(i.isArray(e))h=[]
else if(i.isRegExp(e))h=new RegExp(e.source,i.getRegExpFlags(e)),e.lastIndex&&(h.lastIndex=e.lastIndex)
else if(i.isDate(e))h=new Date(e.getTime())
else{if(c&&t.isBuffer(e))return h=new t(e.length),e.copy(h),h
h=Object.create("undefined"==typeof o?Object.getPrototypeOf(e):o)}if(n){var f=a.indexOf(e)
if(-1!=f)return u[f]
a.push(e),u.push(h)}for(var l in e)h[l]=s(e[l],r-1)
return h}var a=[],u=[],c="undefined"!=typeof t
return"undefined"==typeof n&&(n=!0),"undefined"==typeof r&&(r=1/0),s(e,r)}var i={isArray:function(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===n(t)},isDate:function(t){return"object"==typeof t&&"[object Date]"===n(t)},isRegExp:function(t){return"object"==typeof t&&"[object RegExp]"===n(t)},getRegExpFlags:function(t){var e=""
return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}}
"object"==typeof e&&(e.exports=r),r.clonePrototype=function(t){if(null===t)return null
var e=function(){}
return e.prototype=t,new e}}).call(this,t("buffer").Buffer)},{buffer:94}],9:[function(t,e){var n=t("string-range")
e.exports=function(t){function e(t){return t&&("string"==typeof t?t:"string"==typeof t.prefix?t.prefix:"function"==typeof t.prefix?t.prefix():"")}function r(t){return t&&t._getKeyEncoding?t._getKeyEncoding(t):void 0}function i(t){return t&&t._getValueEncoding?t._getValueEncoding(t):void 0}function o(t,e){return function(){var n=t.indexOf(e)
return~n?(t.splice(n,1),!0):!1}}function s(t){t&&t.type&&u.forEach(function(e){e.test(t.key)&&e.hook(t)})}function a(n,o,s,a){try{o.forEach(function d(t,n){c.forEach(function(s){if(s.test(String(t.key))){var a={add:function(t,a){if("undefined"==typeof t)return this
if(t===!1)return delete o[n]
var u=e(t.prefix)||e(a)||s.prefix||""
if(u&&(t.prefix=u),t.key=u+t.key,s.safe&&s.test(String(t.key)))throw new Error("prehook cannot insert into own range")
var c=t.keyEncoding||r(t.prefix),h=t.valueEncoding||i(t.prefix)
return c&&(t.keyEncoding=c),h&&(t.valueEncoding=h),o.push(t),d(t,o.length-1),this},put:function(t,e){return"object"==typeof t&&(t.type="put"),this.add(t,e)},del:function(t,e){return"object"==typeof t&&(t.type="del"),this.add(t,e)},veto:function(){return this.add(!1)}}
s.hook.call(a,t,a.add,o)}})})}catch(u){return(a||s)(u)}if(o=o.filter(function(t){return t&&t.type}),1==o.length&&!n){var p=o[0]
return"put"==p.type?h.call(t,p.key,p.value,s,a):f.call(t,p.key,s,a)}return l.call(t,o,s,a)}if(!t.hooks){var u=[],c=[]
t.hooks={post:function(t,e){e||(e=t,t="")
var r={test:n.checker(t),hook:e}
return u.push(r),o(u,r)},pre:function(t,e){e||(e=t,t="")
var r={test:n.checker(t),hook:e,safe:!1!==t.safe}
return c.push(r),o(c,r)},posthooks:u,prehooks:c},t.on("put",function(t,e){s({type:"put",key:t,value:e})}),t.on("del",function(t,e){s({type:"del",key:t,value:e})}),t.on("batch",function(t){t.forEach(s)})
var h=t.put,f=t.del,l=t.batch
t.put=function(t,e,n,r){var i=[{key:t,value:e,type:"put"}]
return a(!1,i,n,r)},t.del=function(t,e,n){var r=[{key:t,type:"del"}]
return a(!1,r,e,n)},t.batch=function(t,e,n){return a(!0,t,e,n)}}}},{"string-range":10}],10:[function(t,e,n){{var r=n.range=function(t){return null==t?{}:"string"==typeof r?{min:r,max:r+"ÿ"}:t},i=(n.prefix=function(t,e,r){t=n.range(t)
var i={}
return r=r||"ÿ",t instanceof RegExp||"function"==typeof t?(i.min=e,i.max=e+r,i.inner=function(n){var r=n.substring(e.length)
return t.test?t.test(r):t(r)}):"object"==typeof t&&(i.min=e+(t.min||t.start||""),i.max=e+(t.max||t.end||r||"~"),i.reverse=!!t.reverse),i},n.checker=function(t){return t||(t={}),"string"==typeof t?function(e){return 0==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:"object"==typeof t?function(e){var n=t.min||t.start,r=t.max||t.end
return e=String(e),(!n||e>=n)&&(!r||r>=e)&&(!t.inner||(t.inner.test?t.inner.test(e):t.inner(e)))}:"function"==typeof t?t:void 0})
n.satisfies=function(t,e){return i(e)(t)}}},{}],11:[function(t,e){function n(t){return null!==t&&("object"==typeof t||"function"==typeof t)}e.exports=n},{}],12:[function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e]
if(i(n))for(var o=r(n),s=0;s<o.length;s++){var a=o[s]
t[a]=n[a]}}return t}var r=t("object-keys"),i=t("./has-keys")
e.exports=n},{"./has-keys":11,"object-keys":13}],13:[function(t,e){e.exports=Object.keys||t("./shim")},{"./shim":16}],14:[function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString
e.exports=function(t,e,i){if("[object Function]"!==r.call(e))throw new TypeError("iterator must be a function")
var o=t.length
if(o===+o)for(var s=0;o>s;s++)e.call(i,t[s],s,t)
else for(var a in t)n.call(t,a)&&e.call(i,t[a],a,t)}},{}],15:[function(t,e){var n=Object.prototype,r=n.hasOwnProperty,i=n.toString,o=function(t){return t!==t},s={"boolean":1,number:1,string:1,undefined:1},a=e.exports={}
a.a=a.type=function(t,e){return typeof t===e},a.defined=function(t){return void 0!==t},a.empty=function(t){var e,n=i.call(t)
if("[object Array]"===n||"[object Arguments]"===n)return 0===t.length
if("[object Object]"===n){for(e in t)if(r.call(t,e))return!1
return!0}return"[object String]"===n?""===t:!1},a.equal=function(t,e){var n,r=i.call(t)
if(r!==i.call(e))return!1
if("[object Object]"===r){for(n in t)if(!a.equal(t[n],e[n]))return!1
return!0}if("[object Array]"===r){if(n=t.length,n!==e.length)return!1
for(;--n;)if(!a.equal(t[n],e[n]))return!1
return!0}return"[object Function]"===r?t.prototype===e.prototype:"[object Date]"===r?t.getTime()===e.getTime():t===e},a.hosted=function(t,e){var n=typeof e[t]
return"object"===n?!!e[t]:!s[n]},a.instance=a["instanceof"]=function(t,e){return t instanceof e},a["null"]=function(t){return null===t},a.undefined=function(t){return void 0===t},a.arguments=function(t){var e="[object Arguments]"===i.call(t),n=!a.array(t)&&a.arraylike(t)&&a.object(t)&&a.fn(t.callee)
return e||n},a.array=function(t){return"[object Array]"===i.call(t)},a.arguments.empty=function(t){return a.arguments(t)&&0===t.length},a.array.empty=function(t){return a.array(t)&&0===t.length},a.arraylike=function(t){return!!t&&!a.boolean(t)&&r.call(t,"length")&&isFinite(t.length)&&a.number(t.length)&&t.length>=0},a.boolean=function(t){return"[object Boolean]"===i.call(t)},a["false"]=function(t){return a.boolean(t)&&(t===!1||t.valueOf()===!1)},a["true"]=function(t){return a.boolean(t)&&(t===!0||t.valueOf()===!0)},a.date=function(t){return"[object Date]"===i.call(t)},a.element=function(t){return void 0!==t&&"undefined"!=typeof HTMLElement&&t instanceof HTMLElement&&1===t.nodeType},a.error=function(t){return"[object Error]"===i.call(t)},a.fn=a["function"]=function(t){var e="undefined"!=typeof window&&t===window.alert
return e||"[object Function]"===i.call(t)},a.number=function(t){return"[object Number]"===i.call(t)},a.infinite=function(t){return 1/0===t||t===-1/0},a.decimal=function(t){return a.number(t)&&!o(t)&&!a.infinite(t)&&t%1!==0},a.divisibleBy=function(t,e){var n=a.infinite(t),r=a.infinite(e),i=a.number(t)&&!o(t)&&a.number(e)&&!o(e)&&0!==e
return n||r||i&&t%e===0},a.int=function(t){return a.number(t)&&!o(t)&&t%1===0},a.maximum=function(t,e){if(o(t))throw new TypeError("NaN is not a valid value")
if(!a.arraylike(e))throw new TypeError("second argument must be array-like")
for(var n=e.length;--n>=0;)if(t<e[n])return!1
return!0},a.minimum=function(t,e){if(o(t))throw new TypeError("NaN is not a valid value")
if(!a.arraylike(e))throw new TypeError("second argument must be array-like")
for(var n=e.length;--n>=0;)if(t>e[n])return!1
return!0},a.nan=function(t){return!a.number(t)||t!==t},a.even=function(t){return a.infinite(t)||a.number(t)&&t===t&&t%2===0},a.odd=function(t){return a.infinite(t)||a.number(t)&&t===t&&t%2!==0},a.ge=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!a.infinite(t)&&!a.infinite(e)&&t>=e},a.gt=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!a.infinite(t)&&!a.infinite(e)&&t>e},a.le=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!a.infinite(t)&&!a.infinite(e)&&e>=t},a.lt=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!a.infinite(t)&&!a.infinite(e)&&e>t},a.within=function(t,e,n){if(o(t)||o(e)||o(n))throw new TypeError("NaN is not a valid value")
if(!a.number(t)||!a.number(e)||!a.number(n))throw new TypeError("all arguments must be numbers")
var r=a.infinite(t)||a.infinite(e)||a.infinite(n)
return r||t>=e&&n>=t},a.object=function(t){return t&&"[object Object]"===i.call(t)},a.hash=function(t){return a.object(t)&&t.constructor===Object&&!t.nodeType&&!t.setInterval},a.regexp=function(t){return"[object RegExp]"===i.call(t)},a.string=function(t){return"[object String]"===i.call(t)}},{}],16:[function(t,e){!function(){"use strict"
var n,r=Object.prototype.hasOwnProperty,i=t("is"),o=t("foreach"),s=!{toString:null}.propertyIsEnumerable("toString"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
n=function(t){if(!i.object(t)&&!i.array(t))throw new TypeError("Object.keys called on a non-object")
var e,n=[]
for(e in t)r.call(t,e)&&n.push(e)
return s&&o(a,function(e){r.call(t,e)&&n.push(e)}),n},e.exports=n}()},{foreach:14,is:15}],17:[function(t,e){function n(t,e,r){if("string"==typeof r&&(console.error("db.sublevel(name, seperator<string>) is depreciated"),console.error("use db.sublevel(name, {sep: separator})) if you must"),r={sep:r}),!(this instanceof n))return new n(t,e,r)
if(!t)throw new Error("must provide db")
if(!e)throw new Error("must provide prefix")
r=r||{},r.sep=r.sep||"ÿ",this._parent=t,this._options=r,this.options=r,this._prefix=e,this._root=i(this),t.sublevels[e]=this,this.sublevels={},this.methods={}
var o=this
this.hooks={pre:function(){return o.pre.apply(o,arguments)},post:function(){return o.post.apply(o,arguments)}}}function r(t,e){["valueEncoding","encoding","keyEncoding","reverse","values","keys","limit","fillCache"].forEach(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})}function i(t){return t._parent?i(t._parent):t}var o=t("events").EventEmitter,s=t("util").inherits,a=t("string-range"),u=t("level-fix-range"),c=t("xtend"),h=t("./batch")
s(n,o)
var f=n.prototype
f._key=function(t){var e=this._options.sep
return e+this._prefix+e+t},f._getOptsAndCb=function(t,e){return"function"==typeof t&&(e=t,t={}),{opts:c(t,this._options),cb:e}},f.sublevel=function(t,e){return this.sublevels[t]?this.sublevels[t]:new n(this,t,e||this._options)},f.put=function(t,e,n,r){var i=this._getOptsAndCb(n,r)
this._root.put(this.prefix(t),e,i.opts,i.cb)},f.get=function(t,e,n){var r=this._getOptsAndCb(e,n)
this._root.get(this.prefix(t),r.opts,r.cb)},f.del=function(t,e,n){var r=this._getOptsAndCb(e,n)
this._root.del(this.prefix(t),r.opts,r.cb)},f.batch=function(t,e,n){if(!Array.isArray(t))return new h(this)
var r=this,i=this._getOptsAndCb(e,n)
t.forEach(function(t){t.key="string"==typeof t.prefix?t.prefix+t.key:(t.prefix||r).prefix(t.key),t.prefix&&(t.prefix=null)}),this._root.batch(t,i.opts,i.cb)},f._getKeyEncoding=function(){return this.options.keyEncoding?this.options.keyEncoding:this._parent&&this._parent._getKeyEncoding?this._parent._getKeyEncoding():void 0},f._getValueEncoding=function(){return this.options.valueEncoding?this.options.valueEncoding:this._parent&&this._parent._getValueEncoding?this._parent._getValueEncoding():void 0},f.prefix=function(t){var e=this._options.sep
return this._parent.prefix()+e+this._prefix+e+(t||"")},f.keyStream=f.createKeyStream=function(t){return t=t||{},t.keys=!0,t.values=!1,this.createReadStream(t)},f.valueStream=f.createValueStream=function(t){return t=t||{},t.keys=!1,t.values=!0,t.keys=!1,this.createReadStream(t)},f.readStream=f.createReadStream=function(t){t=t||{}
var e=i(this),n=this.prefix(),o=a.prefix(t,n)
r(o,c(t,this._options))
var s=e.createReadStream(o)
if(o.values===!1){var u=s.read
if(u)s.read=function(t){var e=u.call(this,t)
return e&&(e=e.substring(n.length)),e}
else{var h=s.emit
s.emit=function(t,e){"data"===t?h.call(this,"data",e.substring(n.length)):h.call(this,t,e)}}return s}if(o.keys===!1)return s
var u=s.read
return u?s.read=function(t){var e=u.call(this,t)
return e&&(e.key=e.key.substring(n.length)),e}:s.on("data",function(t){t.key=t.key.substring(n.length)}),s},f.writeStream=f.createWriteStream=function(){var t=i(this),e=this.prefix(),n=t.createWriteStream.apply(t,arguments),r=n.write,o=this._options.encoding,s=this._options.valueEncoding,a=this._options.keyEncoding,u=!o&&!s&&!a
return n.write=u?function(t){return t.key=e+t.key,r.call(n,t)}:function(t){return t.key=e+t.key,o&&"undefined"==typeof t.encoding&&(t.encoding=o),s&&"undefined"==typeof t.valueEncoding&&(t.valueEncoding=s),a&&"undefined"==typeof t.keyEncoding&&(t.keyEncoding=a),r.call(n,t)},n},f.approximateSize=function(){var t=i(db)
return t.approximateSize.apply(t,arguments)},f.pre=function(t,e){e||(e=t,t=null),t=a.prefix(t,this.prefix(),this._options.sep)
var n=i(this._parent),r=this.prefix()
return n.hooks.pre(u(t),function(t,n,i){e({key:t.key.substring(r.length),value:t.value,type:t.type},function(t,e){n(t,t.prefix?e:e||r)},i)})},f.post=function(t,e){e||(e=t,t=null)
var n=i(this._parent),r=this.prefix()
return t=a.prefix(t,r,this._options.sep),n.hooks.post(u(t),function(t){e({key:t.key.substring(r.length),value:t.value,type:t.type})})}
e.exports=n},{"./batch":5,events:97,"level-fix-range":7,"string-range":10,util:124,xtend:12}],18:[function(t,e){function n(t){this._levelup=t,this.batch=t.db.batch(),this.ops=[]}var r=t("./util"),i=t("./errors").WriteError,o=r.getOptions,s=r.dispatchError
n.prototype.put=function(t,e,n){n=o(this._levelup,n)
var s=r.encodeKey(t,n),a=r.encodeValue(e,n)
try{this.batch.put(s,a)}catch(u){throw new i(u)}return this.ops.push({type:"put",key:s,value:a}),this},n.prototype.del=function(t,e){e=o(this._levelup,e)
var n=r.encodeKey(t,e)
try{this.batch.del(n)}catch(s){throw new i(s)}return this.ops.push({type:"del",key:n}),this},n.prototype.clear=function(){try{this.batch.clear()}catch(t){throw new i(t)}return this.ops=[],this},n.prototype.write=function(t){var e=this._levelup,n=this.ops
try{this.batch.write(function(r){return r?s(e,new i(r),t):(e.emit("batch",n),void(t&&t()))})}catch(r){throw new i(r)}},e.exports=n},{"./errors":19,"./util":22}],19:[function(t,e){var n=t("errno").create,r=n("LevelUPError"),i=n("NotFoundError",r)
i.prototype.notFound=!0,i.prototype.status=404,e.exports={LevelUPError:r,InitializationError:n("InitializationError",r),OpenError:n("OpenError",r),ReadError:n("ReadError",r),WriteError:n("WriteError",r),NotFoundError:i,EncodingError:n("EncodingError",r)}},{errno:30}],20:[function(t,e){(function(n){function r(t,e){return"function"==typeof t?t:e}function i(t,e,r){if(!(this instanceof i))return new i(t,e,r)
var o
if(s.call(this),this.setMaxListeners(1/0),"function"==typeof t?(e="object"==typeof e?e:{},e.db=t,t=null):"object"==typeof t&&"function"==typeof t.db&&(e=t,t=null),"function"==typeof e&&(r=e,e={}),(!e||"function"!=typeof e.db)&&"string"!=typeof t){if(o=new v("Must provide a location for the database"),r)return n.nextTick(function(){r(o)})
throw o}e=E(this,e),this.options=u(_,e),this._status="new",c(this,"location",t,"e"),this.open(r)}function o(t){return function(e,n){x()[t](e,n||function(){})}}var s=t("events").EventEmitter,a=t("util").inherits,u=t("xtend"),c=t("prr"),h=t("deferred-leveldown"),f=t("./errors").WriteError,l=t("./errors").ReadError,p=t("./errors").NotFoundError,d=t("./errors").OpenError,g=t("./errors").EncodingError,v=t("./errors").InitializationError,m=t("./read-stream"),y=t("./write-stream"),b=t("./util"),w=t("./batch"),E=b.getOptions,_=b.defaultOptions,x=b.getLevelDOWN,k=b.dispatchError
a(i,s),i.prototype.open=function(t){var e,r,i=this
return this.isOpen()?(t&&n.nextTick(function(){t(null,i)}),this):this._isOpening()?t&&this.once("open",function(){t(null,i)}):(this.emit("opening"),this._status="opening",this.db=new h(this.location),e=this.options.db||x(),r=e(this.location),void r.open(this.options,function(e){return e?k(i,new d(e),t):(i.db.setDb(r),i.db=r,i._status="open",t&&t(null,i),i.emit("open"),i.emit("ready"),void 0)}))},i.prototype.close=function(t){var e=this
if(this.isOpen())this._status="closing",this.db.close(function(){e._status="closed",e.emit("closed"),t&&t.apply(null,arguments)}),this.emit("closing"),this.db=null
else{if("closed"==this._status&&t)return n.nextTick(t)
"closing"==this._status&&t?this.once("closed",t):this._isOpening()&&this.once("open",function(){e.close(t)})}},i.prototype.isOpen=function(){return"open"==this._status},i.prototype._isOpening=function(){return"opening"==this._status},i.prototype.isClosed=function(){return/^clos/.test(this._status)},i.prototype.get=function(t,e,n){var i,o=this
return n=r(e,n),"function"!=typeof n?k(this,new l("get() requires key and callback arguments")):this._isOpening()||this.isOpen()?(e=b.getOptions(this,e),i=b.encodeKey(t,e),e.asBuffer=b.isValueAsBuffer(e),void this.db.get(i,e,function(r,i){if(r)return r=/notfound/i.test(r)?new p("Key not found in database ["+t+"]",r):new l(r),k(o,r,n)
if(n){try{i=b.decodeValue(i,e)}catch(s){return n(new g(s))}n(null,i)}})):k(this,new l("Database is not open"),n)},i.prototype.put=function(t,e,n,i){var o,s,a=this
return i=r(n,i),null===t||void 0===t||null===e||void 0===e?k(this,new f("put() requires key and value arguments"),i):this._isOpening()||this.isOpen()?(n=E(this,n),o=b.encodeKey(t,n),s=b.encodeValue(e,n),void this.db.put(o,s,n,function(n){return n?k(a,new f(n),i):(a.emit("put",t,e),void(i&&i()))})):k(this,new f("Database is not open"),i)},i.prototype.del=function(t,e,n){var i,o=this
return n=r(e,n),null===t||void 0===t?k(this,new f("del() requires a key argument"),n):this._isOpening()||this.isOpen()?(e=E(this,e),i=b.encodeKey(t,e),void this.db.del(i,e,function(e){return e?k(o,new f(e),n):(o.emit("del",t),void(n&&n()))})):k(this,new f("Database is not open"),n)},i.prototype.batch=function(t,e,n){var i,o,s,a=this
return arguments.length?(n=r(e,n),Array.isArray(t)?this._isOpening()||this.isOpen()?(e=E(this,e),i=e.keyEncoding,o=e.valueEncoding,s=t.map(function(t){if(void 0===t.type||void 0===t.key)return{}
var n,r=t.keyEncoding||i,s=t.valueEncoding||t.encoding||o
return"utf8"!=r&&"binary"!=r||"utf8"!=s&&"binary"!=s?(n={type:t.type,key:b.encodeKey(t.key,e,t)},void 0!==t.value&&(n.value=b.encodeValue(t.value,e,t)),n):t}),void this.db.batch(s,e,function(e){return e?k(a,new f(e),n):(a.emit("batch",t),void(n&&n()))})):k(this,new f("Database is not open"),n):k(this,new f("batch() requires an array argument"),n)):new w(this)},i.prototype.approximateSize=function(t,e,n){var r,i,o=this
return null===t||void 0===t||null===e||void 0===e||"function"!=typeof n?k(this,new l("approximateSize() requires start, end and callback arguments"),n):(r=b.encodeKey(t,this.options),i=b.encodeKey(e,this.options),this._isOpening()||this.isOpen()?void this.db.approximateSize(r,i,function(t,e){return t?k(o,new d(t),n):void(n&&n(null,e))}):k(this,new f("Database is not open"),n))},i.prototype.readStream=i.prototype.createReadStream=function(t){var e=this
return t=u(this.options,t),new m(t,this,function(t){return e.db.iterator(t)})},i.prototype.keyStream=i.prototype.createKeyStream=function(t){return this.createReadStream(u(t,{keys:!0,values:!1}))},i.prototype.valueStream=i.prototype.createValueStream=function(t){return this.createReadStream(u(t,{keys:!1,values:!0}))},i.prototype.writeStream=i.prototype.createWriteStream=function(t){return new y(u(t),this)},i.prototype.toString=function(){return"LevelUP"},e.exports=i,e.exports.copy=b.copy,e.exports.destroy=o("destroy"),e.exports.repair=o("repair")}).call(this,t("Zh58VX"))},{"./batch":18,"./errors":19,"./read-stream":21,"./util":22,"./write-stream":23,Zh58VX:103,"deferred-leveldown":25,events:97,prr:31,util:124,xtend:42}],21:[function(t,e){function n(t,e,i){if(!(this instanceof n))return new n(t,e,i)
r.call(this,{objectMode:!0,highWaterMark:t.highWaterMark}),this._db=e,t=this._options=o(u,t),this._keyEncoding=t.keyEncoding||t.encoding,this._valueEncoding=t.valueEncoding||t.encoding,"undefined"!=typeof this._options.start&&(this._options.start=a.encodeKey(this._options.start,this._options)),"undefined"!=typeof this._options.end&&(this._options.end=a.encodeKey(this._options.end,this._options)),"number"!=typeof this._options.limit&&(this._options.limit=-1),this._options.keyAsBuffer=a.isKeyAsBuffer(this._options),this._options.valueAsBuffer=a.isValueAsBuffer(this._options),this._makeData=this._options.keys&&this._options.values?c:this._options.keys?h:this._options.values?f:l
var s=this
this._db.isOpen()?this._iterator=i(this._options):this._db.once("ready",function(){s._destroyed||(s._iterator=i(s._options))})}var r=t("readable-stream").Readable,i=t("util").inherits,o=t("xtend"),s=t("./errors").EncodingError,a=t("./util"),u={keys:!0,values:!0},c=function(t,e){return{key:a.decodeKey(t,this._options),value:a.decodeValue(e,this._options)}},h=function(t){return a.decodeKey(t,this._options)},f=function(t,e){return a.decodeValue(e,this._options)},l=function(){return null}
i(n,r),n.prototype._read=function p(){var t=this
return t._db.isOpen()?void(t._destroyed||t._iterator.next(function(e,n,r){if(e||void 0===n&&void 0===r)return e||t._destroyed||t.push(null),t._cleanup(e)
try{r=t._makeData(n,r)}catch(i){return t._cleanup(new s(i))}t._destroyed||t.push(r)})):t._db.once("ready",function(){p.call(t)})},n.prototype._cleanup=function(t){if(!this._destroyed){this._destroyed=!0
var e=this
t&&e.emit("error",t),e._iterator?e._iterator.end(function(){e._iterator=null,e.emit("close")}):e.emit("close")}},n.prototype.destroy=function(){this._cleanup()},n.prototype.toString=function(){return"LevelUP.ReadStream"},e.exports=n},{"./errors":19,"./util":22,"readable-stream":41,util:124,xtend:42}],22:[function(t,e){(function(n,r){function i(t,e,n){t.readStream().pipe(e.writeStream()).on("close",n?n:function(){}).on("error",n?n:function(t){throw t})}function o(t,e){var n="string"==typeof e
return!n&&e&&e.encoding&&!e.valueEncoding&&(e.valueEncoding=e.encoding),m(t&&t.options||{},n?_[e]||_[w.valueEncoding]:e)}function s(){if(v)return v
var e,n=t("../package.json").devDependencies.leveldown,r="Could not locate LevelDOWN, try `npm install leveldown`"
try{e=t("leveldown/package").version}catch(i){throw new y(r)}if(!t("semver").satisfies(e,n))throw new y("Installed version of LevelDOWN ("+e+") does not match required version ("+n+")")
try{return v=t("leveldown")}catch(i){throw new y(r)}}function a(t,e,n){return"function"==typeof n?n(e):t.emit("error",e)}function u(t,e){var n=e&&e.keyEncoding||t.keyEncoding||"utf8"
return E[n]||n}function c(t,e){var n=e&&(e.valueEncoding||e.encoding)||t.valueEncoding||t.encoding||"utf8"
return E[n]||n}function h(t,e,n){return u(e,n).encode(t)}function f(t,e,n){return c(e,n).encode(t)}function l(t,e){return u(e).decode(t)}function p(t,e){return c(e).decode(t)}function d(t,e){return c(t,e).buffer}function g(t,e){return u(t,e).buffer}var v,m=t("xtend"),y=t("./errors").LevelUPError,b=["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le"],w={createIfMissing:!0,errorIfExists:!1,keyEncoding:"utf8",valueEncoding:"utf8",compression:!0},E=function(){function t(t){return void 0===t||null===t||r.isBuffer(t)}var e={}
return e.utf8=e["utf-8"]={encode:function(e){return t(e)?e:String(e)},decode:function(t){return t},buffer:!1,type:"utf8"},e.json={encode:JSON.stringify,decode:JSON.parse,buffer:!1,type:"json"},b.forEach(function(i){e[i]||(e[i]={encode:function(e){return t(e)?e:new r(e,i)},decode:function(t){return n.browser?t.toString(i):t},buffer:!0,type:i})}),e}(),_=function(){var t={}
return b.forEach(function(e){t[e]={valueEncoding:e}}),t}()
e.exports={defaultOptions:w,copy:i,getOptions:o,getLevelDOWN:s,dispatchError:a,encodeKey:h,encodeValue:f,isValueAsBuffer:d,isKeyAsBuffer:g,decodeValue:p,decodeKey:l}}).call(this,t("Zh58VX"),t("buffer").Buffer)},{"../package.json":43,"./errors":19,Zh58VX:103,buffer:94,leveldown:93,"leveldown/package":93,semver:93,xtend:42}],23:[function(t,e){(function(n,r){function i(t,e){if(!(this instanceof i))return new i(t,e)
o.call(this),this._options=a(f,h(e,t)),this._db=e,this._buffer=[],this._status="init",this._end=!1,this.writable=!0,this.readable=!1
var n=this,r=function(){n.writable&&(n._status="ready",n.emit("ready"),n._process())}
e.isOpen()?c(r):e.once("ready",r)}var o=t("stream").Stream,s=t("util").inherits,a=t("xtend"),u=t("bl"),c=r.setImmediate||n.nextTick,h=t("./util").getOptions,f={type:"put"}
s(i,o),i.prototype.write=function(t){return this.writable?(this._buffer.push(t),"init"!=this._status&&this._processDelayed(),this._options.maxBufferLength&&this._buffer.length>this._options.maxBufferLength?(this._writeBlock=!0,!1):!0):!1},i.prototype.end=function(t){var e=this
t&&this.write(t),c(function(){e._end=!0,e._process()})},i.prototype.destroy=function(){this.writable=!1,this.end()},i.prototype.destroySoon=function(){this.end()},i.prototype.add=function(t){return t.props?(t.props.Directory?t.pipe(this._db.writeStream(this._options)):(t.props.File||t.File||"File"==t.type)&&this._write(t),!0):void 0},i.prototype._processDelayed=function(){var t=this
c(function(){t._process()})},i.prototype._process=function(){var t,e=this,n=function(t){return e.writable?("closed"!=e._status&&(e._status="ready"),t?(e.writable=!1,e.emit("error",t)):void e._process()):void 0}
return"ready"!=e._status&&e.writable?void(e._buffer.length&&"closed"!=e._status&&e._processDelayed()):e._buffer.length&&e.writable?(e._status="writing",t=e._buffer,e._buffer=[],e._db.batch(t.map(function(t){return{type:t.type||e._options.type,key:t.key,value:t.value,keyEncoding:t.keyEncoding||e._options.keyEncoding,valueEncoding:t.valueEncoding||t.encoding||e._options.valueEncoding}}),n),void(e._writeBlock&&(e._writeBlock=!1,e.emit("drain")))):void(e._end&&"closed"!=e._status&&(e._status="closed",e.writable=!1,e.emit("close")))},i.prototype._write=function(t){var e=t.path||t.props.path,n=this
e&&t.pipe(u(function(t,r){return t?(n.writable=!1,n.emit("error",t)):(n._options.fstreamRoot&&e.indexOf(n._options.fstreamRoot)>-1&&(e=e.substr(n._options.fstreamRoot.length+1)),void n.write({key:e,value:r.slice(0)}))}))},i.prototype.toString=function(){return"LevelUP.WriteStream"},e.exports=i}).call(this,t("Zh58VX"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./util":22,Zh58VX:103,bl:24,stream:121,util:124,xtend:42}],24:[function(t,e){(function(n){function r(t){if(!(this instanceof r))return new r(t)
if(this._bufs=[],this.length=0,"function"==typeof t){this._callback=t
var e=function(t){this._callback&&(this._callback(t),this._callback=null)}.bind(this)
this.on("pipe",function(t){t.on("error",e)}),this.on("unpipe",function(t){t.removeListener("error",e)})}else n.isBuffer(t)?this.append(t):Array.isArray(t)&&t.forEach(function(t){n.isBuffer(t)&&this.append(t)}.bind(this))
i.call(this)}var i=t("readable-stream").Duplex,o=t("util")
o.inherits(r,i),r.prototype._offset=function(t){for(var e,n=0,r=0;r<this._bufs.length;r++){if(e=n+this._bufs[r].length,e>t)return[r,t-n]
n=e}},r.prototype.append=function(t){return this._bufs.push(n.isBuffer(t)?t:new n(t)),this.length+=t.length,this},r.prototype._write=function(t,e,n){this.append(t),n&&n()},r.prototype._read=function(t){return this.length?(t=Math.min(t,this.length),this.push(this.slice(0,t)),void this.consume(t)):this.push(null)},r.prototype.end=function(t){i.prototype.end.call(this,t),this._callback&&(this._callback(null,this.slice()),this._callback=null)},r.prototype.get=function(t){return this.slice(t,t+1)[0]},r.prototype.slice=function(t,e){return this.copy(null,0,t,e)},r.prototype.copy=function(t,e,r,i){if(("number"!=typeof r||0>r)&&(r=0),("number"!=typeof i||i>this.length)&&(i=this.length),r>=this.length)return t||new n(0)
if(0>=i)return t||new n(0)
var o,s,a=!!t,u=this._offset(r),c=i-r,h=c,f=a&&e||0,l=u[1]
if(0===r&&i==this.length){if(!a)return n.concat(this._bufs)
for(s=0;s<this._bufs.length;s++)this._bufs[s].copy(t,f),f+=this._bufs[s].length
return t}if(h<=this._bufs[u[0]].length-l)return a?this._bufs[u[0]].copy(t,e,l,l+h):this._bufs[u[0]].slice(l,l+h)
for(a||(t=new n(c)),s=u[0];s<this._bufs.length;s++){if(o=this._bufs[s].length-l,!(h>o)){this._bufs[s].copy(t,f,l,l+h)
break}this._bufs[s].copy(t,f,l),f+=o,h-=o,l&&(l=0)}return t},r.prototype.toString=function(t,e,n){return this.slice(e,n).toString(t)},r.prototype.consume=function(t){for(;this._bufs.length;){if(!(t>this._bufs[0].length)){this._bufs[0]=this._bufs[0].slice(t),this.length-=t
break}t-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift()}return this},r.prototype.duplicate=function(){for(var t=0,e=new r;t<this._bufs.length;t++)e.append(this._bufs[t])
return e},r.prototype.destroy=function(){this._bufs.length=0,this.length=0,this.push(null)},function(){var t={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1}
for(var e in t)!function(e){r.prototype[e]=function(n){return this.slice(n,n+t[e])[e](0)}}(e)}(),e.exports=r}).call(this,t("buffer").Buffer)},{buffer:94,"readable-stream":41,util:124}],25:[function(t,e){(function(n,r){function i(t){s.call(this,"string"==typeof t?t:""),this._db=void 0,this._operations=[]}var o=t("util"),s=t("abstract-leveldown").AbstractLevelDOWN
o.inherits(i,s),i.prototype.setDb=function(t){this._db=t,this._operations.forEach(function(e){t[e.method].apply(t,e.args)})},i.prototype._open=function(t,e){return n.nextTick(e)},i.prototype._operation=function(t,e){return this._db?this._db[t].apply(this._db,e):void this._operations.push({method:t,args:e})},"put get del batch approximateSize".split(" ").forEach(function(t){i.prototype["_"+t]=function(){this._operation(t,arguments)}}),i.prototype._isBuffer=function(t){return r.isBuffer(t)},i.prototype._iterator=function(){throw new TypeError("not implemented")},e.exports=i}).call(this,t("Zh58VX"),t("buffer").Buffer)},{Zh58VX:103,"abstract-leveldown":28,buffer:94,util:124}],26:[function(t,e){(function(t){function n(t){this._db=t,this._operations=[],this._written=!1}n.prototype._checkWritten=function(){if(this._written)throw new Error("write() already called on this batch")},n.prototype.put=function(t,e){this._checkWritten()
var n=this._db._checkKeyValue(t,"key",this._db._isBuffer)
if(n)throw n
if(n=this._db._checkKeyValue(e,"value",this._db._isBuffer))throw n
return this._db._isBuffer(t)||(t=String(t)),this._db._isBuffer(e)||(e=String(e)),"function"==typeof this._put?this._put(t,e):this._operations.push({type:"put",key:t,value:e}),this},n.prototype.del=function(t){this._checkWritten()
var e=this._db._checkKeyValue(t,"key",this._db._isBuffer)
if(e)throw e
return this._db._isBuffer(t)||(t=String(t)),"function"==typeof this._del?this._del(t):this._operations.push({type:"del",key:t}),this},n.prototype.clear=function(){return this._checkWritten(),this._operations=[],"function"==typeof this._clear&&this._clear(),this},n.prototype.write=function(e,n){if(this._checkWritten(),"function"==typeof e&&(n=e),"function"!=typeof n)throw new Error("write() requires a callback argument")
return"object"!=typeof e&&(e={}),this._written=!0,"function"==typeof this._write?this._write(n):"function"==typeof this._db._batch?this._db._batch(this._operations,e,n):void t.nextTick(n)},e.exports=n}).call(this,t("Zh58VX"))},{Zh58VX:103}],27:[function(t,e){(function(t){function n(t){this.db=t,this._ended=!1,this._nexting=!1}n.prototype.next=function(e){var n=this
if("function"!=typeof e)throw new Error("next() requires a callback argument")
return n._ended?e(new Error("cannot call next() after end()")):n._nexting?e(new Error("cannot call next() before previous next() has completed")):(n._nexting=!0,"function"==typeof n._next?n._next(function(){n._nexting=!1,e.apply(null,arguments)}):void t.nextTick(function(){n._nexting=!1,e()}))},n.prototype.end=function(e){if("function"!=typeof e)throw new Error("end() requires a callback argument")
return this._ended?e(new Error("end() already called on iterator")):(this._ended=!0,"function"==typeof this._end?this._end(e):void t.nextTick(e))},e.exports=n}).call(this,t("Zh58VX"))},{Zh58VX:103}],28:[function(t,e){(function(n,r){function i(t){if(!arguments.length||void 0===t)throw new Error("constructor requires at least a location argument")
if("string"!=typeof t)throw new Error("constructor requires a location string argument")
this.location=t}var o=t("xtend"),s=t("./abstract-iterator"),a=t("./abstract-chained-batch")
i.prototype.open=function(t,e){if("function"==typeof t&&(e=t),"function"!=typeof e)throw new Error("open() requires a callback argument")
return"object"!=typeof t&&(t={}),"function"==typeof this._open?this._open(t,e):void n.nextTick(e)},i.prototype.close=function(t){if("function"!=typeof t)throw new Error("close() requires a callback argument")
return"function"==typeof this._close?this._close(t):void n.nextTick(t)},i.prototype.get=function(t,e,r){var i
if("function"==typeof e&&(r=e),"function"!=typeof r)throw new Error("get() requires a callback argument")
return(i=this._checkKeyValue(t,"key",this._isBuffer))?r(i):(this._isBuffer(t)||(t=String(t)),"object"!=typeof e&&(e={}),"function"==typeof this._get?this._get(t,e,r):void n.nextTick(function(){r(new Error("NotFound"))}))},i.prototype.put=function(t,e,r,i){var o
if("function"==typeof r&&(i=r),"function"!=typeof i)throw new Error("put() requires a callback argument")
return(o=this._checkKeyValue(t,"key",this._isBuffer))?i(o):(o=this._checkKeyValue(e,"value",this._isBuffer))?i(o):(this._isBuffer(t)||(t=String(t)),this._isBuffer(e)||n.browser||(e=String(e)),"object"!=typeof r&&(r={}),"function"==typeof this._put?this._put(t,e,r,i):void n.nextTick(i))},i.prototype.del=function(t,e,r){var i
if("function"==typeof e&&(r=e),"function"!=typeof r)throw new Error("del() requires a callback argument")
return(i=this._checkKeyValue(t,"key",this._isBuffer))?r(i):(this._isBuffer(t)||(t=String(t)),"object"!=typeof e&&(e={}),"function"==typeof this._del?this._del(t,e,r):void n.nextTick(r))},i.prototype.batch=function(t,e,r){if(!arguments.length)return this._chainedBatch()
if("function"==typeof e&&(r=e),"function"!=typeof r)throw new Error("batch(array) requires a callback argument")
if(!Array.isArray(t))return r(new Error("batch(array) requires an array argument"))
"object"!=typeof e&&(e={})
for(var i,o,s=0,a=t.length;a>s;s++)if(i=t[s],"object"==typeof i){if(o=this._checkKeyValue(i.type,"type",this._isBuffer))return r(o)
if(o=this._checkKeyValue(i.key,"key",this._isBuffer))return r(o)
if("put"==i.type&&(o=this._checkKeyValue(i.value,"value",this._isBuffer)))return r(o)}return"function"==typeof this._batch?this._batch(t,e,r):void n.nextTick(r)},i.prototype.approximateSize=function(t,e,r){if(null==t||null==e||"function"==typeof t||"function"==typeof e)throw new Error("approximateSize() requires valid `start`, `end` and `callback` arguments")
if("function"!=typeof r)throw new Error("approximateSize() requires a callback argument")
return this._isBuffer(t)||(t=String(t)),this._isBuffer(e)||(e=String(e)),"function"==typeof this._approximateSize?this._approximateSize(t,e,r):void n.nextTick(function(){r(null,0)})},i.prototype._setupIteratorOptions=function(t){var e=this
return t=o(t),["start","end","gt","gte","lt","lte"].forEach(function(n){t[n]&&e._isBuffer(t[n])&&0===t[n].length&&delete t[n]}),t.reverse=!!t.reverse,t.reverse&&t.lt&&(t.start=t.lt),t.reverse&&t.lte&&(t.start=t.lte),!t.reverse&&t.gt&&(t.start=t.gt),!t.reverse&&t.gte&&(t.start=t.gte),(t.reverse&&t.lt&&!t.lte||!t.reverse&&t.gt&&!t.gte)&&(t.exclusiveStart=!0),t},i.prototype.iterator=function(t){return"object"!=typeof t&&(t={}),t=this._setupIteratorOptions(t),"function"==typeof this._iterator?this._iterator(t):new s(this)},i.prototype._chainedBatch=function(){return new a(this)},i.prototype._isBuffer=function(t){return r.isBuffer(t)},i.prototype._checkKeyValue=function(t,e){if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(this._isBuffer(t)){if(0===t.length)return new Error(e+" cannot be an empty Buffer")}else if(""===String(t))return new Error(e+" cannot be an empty String")},e.exports.AbstractLevelDOWN=i,e.exports.AbstractIterator=s,e.exports.AbstractChainedBatch=a}).call(this,t("Zh58VX"),t("buffer").Buffer)},{"./abstract-chained-batch":26,"./abstract-iterator":27,Zh58VX:103,buffer:94,xtend:42}],29:[function(t,e){function n(t,e,n){o(this,{type:t,name:t,cause:"string"!=typeof e?e:n,message:e&&"string"!=typeof e?e.message:e},"ewr")}function r(t,e){Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee),n.call(this,"CustomError",t,e)}function i(t,e,i){var o=function(r,i){n.call(this,e,r,i),"FilesystemError"==e&&(this.code=this.cause.code,this.path=this.cause.path,this.errno=this.cause.errno,this.message=(t.errno[this.cause.errno]?t.errno[this.cause.errno].description:this.cause.message)+(this.cause.path?" ["+this.cause.path+"]":"")),Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee)}
return o.prototype=i?new i:new r,o}var o=t("prr")
r.prototype=new Error,e.exports=function(t){var e=function(e,n){return i(t,e,n)}
return{CustomError:r,FilesystemError:e("FilesystemError"),createError:e}}},{prr:31}],30:[function(t,e){var n=e.exports.all=[{errno:-1,code:"UNKNOWN",description:"unknown error"},{errno:0,code:"OK",description:"success"},{errno:1,code:"EOF",description:"end of file"},{errno:2,code:"EADDRINFO",description:"getaddrinfo error"},{errno:3,code:"EACCES",description:"permission denied"},{errno:4,code:"EAGAIN",description:"resource temporarily unavailable"},{errno:5,code:"EADDRINUSE",description:"address already in use"},{errno:6,code:"EADDRNOTAVAIL",description:"address not available"},{errno:7,code:"EAFNOSUPPORT",description:"address family not supported"},{errno:8,code:"EALREADY",description:"connection already in progress"},{errno:9,code:"EBADF",description:"bad file descriptor"},{errno:10,code:"EBUSY",description:"resource busy or locked"},{errno:11,code:"ECONNABORTED",description:"software caused connection abort"},{errno:12,code:"ECONNREFUSED",description:"connection refused"},{errno:13,code:"ECONNRESET",description:"connection reset by peer"},{errno:14,code:"EDESTADDRREQ",description:"destination address required"},{errno:15,code:"EFAULT",description:"bad address in system call argument"},{errno:16,code:"EHOSTUNREACH",description:"host is unreachable"},{errno:17,code:"EINTR",description:"interrupted system call"},{errno:18,code:"EINVAL",description:"invalid argument"},{errno:19,code:"EISCONN",description:"socket is already connected"},{errno:20,code:"EMFILE",description:"too many open files"},{errno:21,code:"EMSGSIZE",description:"message too long"},{errno:22,code:"ENETDOWN",description:"network is down"},{errno:23,code:"ENETUNREACH",description:"network is unreachable"},{errno:24,code:"ENFILE",description:"file table overflow"},{errno:25,code:"ENOBUFS",description:"no buffer space available"},{errno:26,code:"ENOMEM",description:"not enough memory"},{errno:27,code:"ENOTDIR",description:"not a directory"},{errno:28,code:"EISDIR",description:"illegal operation on a directory"},{errno:29,code:"ENONET",description:"machine is not on the network"},{errno:31,code:"ENOTCONN",description:"socket is not connected"},{errno:32,code:"ENOTSOCK",description:"socket operation on non-socket"},{errno:33,code:"ENOTSUP",description:"operation not supported on socket"},{errno:34,code:"ENOENT",description:"no such file or directory"},{errno:35,code:"ENOSYS",description:"function not implemented"},{errno:36,code:"EPIPE",description:"broken pipe"},{errno:37,code:"EPROTO",description:"protocol error"},{errno:38,code:"EPROTONOSUPPORT",description:"protocol not supported"},{errno:39,code:"EPROTOTYPE",description:"protocol wrong type for socket"},{errno:40,code:"ETIMEDOUT",description:"connection timed out"},{errno:41,code:"ECHARSET",description:"invalid Unicode character"},{errno:42,code:"EAIFAMNOSUPPORT",description:"address family for hostname not supported"},{errno:44,code:"EAISERVICE",description:"servname not supported for ai_socktype"},{errno:45,code:"EAISOCKTYPE",description:"ai_socktype not supported"},{errno:46,code:"ESHUTDOWN",description:"cannot send after transport endpoint shutdown"},{errno:47,code:"EEXIST",description:"file already exists"},{errno:48,code:"ESRCH",description:"no such process"},{errno:49,code:"ENAMETOOLONG",description:"name too long"},{errno:50,code:"EPERM",description:"operation not permitted"},{errno:51,code:"ELOOP",description:"too many symbolic links encountered"},{errno:52,code:"EXDEV",description:"cross-device link not permitted"},{errno:53,code:"ENOTEMPTY",description:"directory not empty"},{errno:54,code:"ENOSPC",description:"no space left on device"},{errno:55,code:"EIO",description:"i/o error"},{errno:56,code:"EROFS",description:"read-only file system"},{errno:57,code:"ENODEV",description:"no such device"},{errno:58,code:"ESPIPE",description:"invalid seek"},{errno:59,code:"ECANCELED",description:"operation canceled"}]
e.exports.errno={"-1":n[0],0:n[1],1:n[2],2:n[3],3:n[4],4:n[5],5:n[6],6:n[7],7:n[8],8:n[9],9:n[10],10:n[11],11:n[12],12:n[13],13:n[14],14:n[15],15:n[16],16:n[17],17:n[18],18:n[19],19:n[20],20:n[21],21:n[22],22:n[23],23:n[24],24:n[25],25:n[26],26:n[27],27:n[28],28:n[29],29:n[30],31:n[31],32:n[32],33:n[33],34:n[34],35:n[35],36:n[36],37:n[37],38:n[38],39:n[39],40:n[40],41:n[41],42:n[42],44:n[43],45:n[44],46:n[45],47:n[46],48:n[47],49:n[48],50:n[49],51:n[50],52:n[51],53:n[52],54:n[53],55:n[54],56:n[55],57:n[56],58:n[57],59:n[58]},e.exports.code={UNKNOWN:n[0],OK:n[1],EOF:n[2],EADDRINFO:n[3],EACCES:n[4],EAGAIN:n[5],EADDRINUSE:n[6],EADDRNOTAVAIL:n[7],EAFNOSUPPORT:n[8],EALREADY:n[9],EBADF:n[10],EBUSY:n[11],ECONNABORTED:n[12],ECONNREFUSED:n[13],ECONNRESET:n[14],EDESTADDRREQ:n[15],EFAULT:n[16],EHOSTUNREACH:n[17],EINTR:n[18],EINVAL:n[19],EISCONN:n[20],EMFILE:n[21],EMSGSIZE:n[22],ENETDOWN:n[23],ENETUNREACH:n[24],ENFILE:n[25],ENOBUFS:n[26],ENOMEM:n[27],ENOTDIR:n[28],EISDIR:n[29],ENONET:n[30],ENOTCONN:n[31],ENOTSOCK:n[32],ENOTSUP:n[33],ENOENT:n[34],ENOSYS:n[35],EPIPE:n[36],EPROTO:n[37],EPROTONOSUPPORT:n[38],EPROTOTYPE:n[39],ETIMEDOUT:n[40],ECHARSET:n[41],EAIFAMNOSUPPORT:n[42],EAISERVICE:n[43],EAISOCKTYPE:n[44],ESHUTDOWN:n[45],EEXIST:n[46],ESRCH:n[47],ENAMETOOLONG:n[48],EPERM:n[49],ELOOP:n[50],EXDEV:n[51],ENOTEMPTY:n[52],ENOSPC:n[53],EIO:n[54],EROFS:n[55],ENODEV:n[56],ESPIPE:n[57],ECANCELED:n[58]},e.exports.custom=t("./custom")(e.exports),e.exports.create=e.exports.custom.createError},{"./custom":29}],31:[function(t,e){!function(t,n,r){"undefined"!=typeof e&&e.exports?e.exports=r():n[t]=r()}("prr",this,function(){var t="function"==typeof Object.defineProperty?function(t,e,n){return Object.defineProperty(t,e,n),t}:function(t,e,n){return t[e]=n.value,t},e=function(t,e){var n="object"==typeof e,r=!n&&"string"==typeof e,i=function(t){return n?!!e[t]:r?e.indexOf(t[0])>-1:!1}
return{enumerable:i("enumerable"),configurable:i("configurable"),writable:i("writable"),value:t}},n=function(n,r,i,o){var s
if(o=e(i,o),"object"==typeof r){for(s in r)Object.hasOwnProperty.call(r,s)&&(o.value=r[s],t(n,s,o))
return n}return t(n,r,o)}
return n})},{}],32:[function(t,e){(function(n){function r(t){return this instanceof r?(u.call(this,t),c.call(this,t),t&&t.readable===!1&&(this.readable=!1),t&&t.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,t&&t.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new r(t)}function i(){this.allowHalfOpen||this._writableState.ended||n.nextTick(this.end.bind(this))}function o(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}e.exports=r
var s=Object.keys||function(t){var e=[]
for(var n in t)e.push(n)
return e},a=t("core-util-is")
a.inherits=t("inherits")
var u=t("./_stream_readable"),c=t("./_stream_writable")
a.inherits(r,u),o(s(c.prototype),function(t){r.prototype[t]||(r.prototype[t]=c.prototype[t])})}).call(this,t("Zh58VX"))},{"./_stream_readable":34,"./_stream_writable":36,Zh58VX:103,"core-util-is":37,inherits:38}],33:[function(t,e){function n(t){return this instanceof n?void r.call(this,t):new n(t)}e.exports=n
var r=t("./_stream_transform"),i=t("core-util-is")
i.inherits=t("inherits"),i.inherits(n,r),n.prototype._transform=function(t,e,n){n(null,t)}},{"./_stream_transform":35,"core-util-is":37,inherits:38}],34:[function(t,e){(function(n){function r(e){e=e||{}
var n=e.highWaterMark
this.highWaterMark=n||0===n?n:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!e.objectMode,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(A||(A=t("string_decoder/").StringDecoder),this.decoder=new A(e.encoding),this.encoding=e.encoding)}function i(t){return this instanceof i?(this._readableState=new r(t,this),this.readable=!0,void S.call(this)):new i(t)}function o(t,e,n,r,i){var o=c(e,n)
if(o)t.emit("error",o)
else if(null===n||void 0===n)e.reading=!1,e.ended||h(t,e)
else if(e.objectMode||n&&n.length>0)if(e.ended&&!i){var a=new Error("stream.push() after EOF")
t.emit("error",a)}else if(e.endEmitted&&i){var a=new Error("stream.unshift() after end event")
t.emit("error",a)}else!e.decoder||i||r||(n=e.decoder.write(n)),e.length+=e.objectMode?1:n.length,i?e.buffer.unshift(n):(e.reading=!1,e.buffer.push(n)),e.needReadable&&f(t),p(t,e)
else i||(e.reading=!1)
return s(e)}function s(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function a(t){if(t>=N)t=N
else{t--
for(var e=1;32>e;e<<=1)t|=t>>e
t++}return t}function u(t,e){return 0===e.length&&e.ended?0:e.objectMode?0===t?0:1:isNaN(t)||null===t?e.flowing&&e.buffer.length?e.buffer[0].length:e.length:0>=t?0:(t>e.highWaterMark&&(e.highWaterMark=a(t)),t>e.length?e.ended?e.length:(e.needReadable=!0,0):t)}function c(t,e){var n=null
return k.isBuffer(e)||"string"==typeof e||null===e||void 0===e||t.objectMode||n||(n=new TypeError("Invalid non-string/buffer chunk")),n}function h(t,e){if(e.decoder&&!e.ended){var n=e.decoder.end()
n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,e.length>0?f(t):w(t)}function f(t){var e=t._readableState
e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,e.sync?n.nextTick(function(){l(t)}):l(t))}function l(t){t.emit("readable")}function p(t,e){e.readingMore||(e.readingMore=!0,n.nextTick(function(){d(t,e)}))}function d(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(t.read(0),n!==e.length);)n=e.length
e.readingMore=!1}function g(t){return function(){var e=t._readableState
e.awaitDrain--,0===e.awaitDrain&&v(t)}}function v(t){function e(t){var e=t.write(n)
!1===e&&r.awaitDrain++}var n,r=t._readableState
for(r.awaitDrain=0;r.pipesCount&&null!==(n=t.read());)if(1===r.pipesCount?e(r.pipes,0,null):E(r.pipes,e),t.emit("data",n),r.awaitDrain>0)return
return 0===r.pipesCount?(r.flowing=!1,void(O.listenerCount(t,"data")>0&&y(t))):void(r.ranOut=!0)}function m(){this._readableState.ranOut&&(this._readableState.ranOut=!1,v(this))}function y(t,e){var r=t._readableState
if(r.flowing)throw new Error("Cannot switch to old mode now.")
var i=e||!1,o=!1
t.readable=!0,t.pipe=S.prototype.pipe,t.on=t.addListener=S.prototype.on,t.on("readable",function(){o=!0
for(var e;!i&&null!==(e=t.read());)t.emit("data",e)
null===e&&(o=!1,t._readableState.needReadable=!0)}),t.pause=function(){i=!0,this.emit("pause")},t.resume=function(){i=!1,o?n.nextTick(function(){t.emit("readable")}):this.read(0),this.emit("resume")},t.emit("readable")}function b(t,e){var n,r=e.buffer,i=e.length,o=!!e.decoder,s=!!e.objectMode
if(0===r.length)return null
if(0===i)n=null
else if(s)n=r.shift()
else if(!t||t>=i)n=o?r.join(""):k.concat(r,i),r.length=0
else if(t<r[0].length){var a=r[0]
n=a.slice(0,t),r[0]=a.slice(t)}else if(t===r[0].length)n=r.shift()
else{n=o?"":new k(t)
for(var u=0,c=0,h=r.length;h>c&&t>u;c++){var a=r[0],f=Math.min(t-u,a.length)
o?n+=a.slice(0,f):a.copy(n,u,0,f),f<a.length?r[0]=a.slice(f):r.shift(),u+=f}}return n}function w(t){var e=t._readableState
if(e.length>0)throw new Error("endReadable called on non-empty stream")
!e.endEmitted&&e.calledRead&&(e.ended=!0,n.nextTick(function(){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}))}function E(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}function _(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n
return-1}e.exports=i
var x=t("isarray"),k=t("buffer").Buffer
i.ReadableState=r
var O=t("events").EventEmitter
O.listenerCount||(O.listenerCount=function(t,e){return t.listeners(e).length})
var S=t("stream"),T=t("core-util-is")
T.inherits=t("inherits")
var A
T.inherits(i,S),i.prototype.push=function(t,e){var n=this._readableState
return"string"!=typeof t||n.objectMode||(e=e||n.defaultEncoding,e!==n.encoding&&(t=new k(t,e),e="")),o(this,n,t,e,!1)},i.prototype.unshift=function(t){var e=this._readableState
return o(this,e,t,"",!0)},i.prototype.setEncoding=function(e){A||(A=t("string_decoder/").StringDecoder),this._readableState.decoder=new A(e),this._readableState.encoding=e}
var N=8388608
i.prototype.read=function(t){var e=this._readableState
e.calledRead=!0
var n=t
if(("number"!=typeof t||t>0)&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return f(this),null
if(t=u(t,e),0===t&&e.ended)return 0===e.length&&w(this),null
var r=e.needReadable
e.length-t<=e.highWaterMark&&(r=!0),(e.ended||e.reading)&&(r=!1),r&&(e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1),r&&!e.reading&&(t=u(n,e))
var i
return i=t>0?b(t,e):null,null===i&&(e.needReadable=!0,t=0),e.length-=t,0!==e.length||e.ended||(e.needReadable=!0),e.ended&&!e.endEmitted&&0===e.length&&w(this),i},i.prototype._read=function(){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(t,e){function r(t){t===h&&o()}function i(){t.end()}function o(){t.removeListener("close",a),t.removeListener("finish",u),t.removeListener("drain",d),t.removeListener("error",s),t.removeListener("unpipe",r),h.removeListener("end",i),h.removeListener("end",o),(!t._writableState||t._writableState.needDrain)&&d()}function s(e){c(),t.removeListener("error",s),0===O.listenerCount(t,"error")&&t.emit("error",e)}function a(){t.removeListener("finish",u),c()}function u(){t.removeListener("close",a),c()}function c(){h.unpipe(t)}var h=this,f=this._readableState
switch(f.pipesCount){case 0:f.pipes=t
break
case 1:f.pipes=[f.pipes,t]
break
default:f.pipes.push(t)}f.pipesCount+=1
var l=(!e||e.end!==!1)&&t!==n.stdout&&t!==n.stderr,p=l?i:o
f.endEmitted?n.nextTick(p):h.once("end",p),t.on("unpipe",r)
var d=g(h)
return t.on("drain",d),t._events&&t._events.error?x(t._events.error)?t._events.error.unshift(s):t._events.error=[s,t._events.error]:t.on("error",s),t.once("close",a),t.once("finish",u),t.emit("pipe",h),f.flowing||(this.on("readable",m),f.flowing=!0,n.nextTick(function(){v(h)})),t},i.prototype.unpipe=function(t){var e=this._readableState
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1,t&&t.emit("unpipe",this),this)
if(!t){var n=e.pipes,r=e.pipesCount
e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1
for(var i=0;r>i;i++)n[i].emit("unpipe",this)
return this}var i=_(e.pipes,t)
return-1===i?this:(e.pipes.splice(i,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,e){var n=S.prototype.on.call(this,t,e)
if("data"!==t||this._readableState.flowing||y(this),"readable"===t&&this.readable){var r=this._readableState
r.readableListening||(r.readableListening=!0,r.emittedReadable=!1,r.needReadable=!0,r.reading?r.length&&f(this,r):this.read(0))}return n},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){y(this),this.read(0),this.emit("resume")},i.prototype.pause=function(){y(this,!0),this.emit("pause")},i.prototype.wrap=function(t){var e=this._readableState,n=!1,r=this
t.on("end",function(){if(e.decoder&&!e.ended){var t=e.decoder.end()
t&&t.length&&r.push(t)}r.push(null)}),t.on("data",function(i){if(e.decoder&&(i=e.decoder.write(i)),i&&(e.objectMode||i.length)){var o=r.push(i)
o||(n=!0,t.pause())}})
for(var i in t)"function"==typeof t[i]&&"undefined"==typeof this[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i))
var o=["error","close","destroy","pause","resume"]
return E(o,function(e){t.on(e,r.emit.bind(r,e))}),r._read=function(){n&&(n=!1,t.resume())},r},i._fromList=b}).call(this,t("Zh58VX"))},{Zh58VX:103,buffer:94,"core-util-is":37,events:97,inherits:38,isarray:39,stream:121,"string_decoder/":40}],35:[function(t,e){function n(t,e){this.afterTransform=function(t,n){return r(e,t,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function r(t,e,n){var r=t._transformState
r.transforming=!1
var i=r.writecb
if(!i)return t.emit("error",new Error("no writecb in Transform class"))
r.writechunk=null,r.writecb=null,null!==n&&void 0!==n&&t.push(n),i&&i(e)
var o=t._readableState
o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}function i(t){if(!(this instanceof i))return new i(t)
s.call(this,t)
var e=(this._transformState=new n(t,this),this)
this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(t){o(e,t)}):o(e)})}function o(t,e){if(e)return t.emit("error",e)
var n=t._writableState,r=(t._readableState,t._transformState)
if(n.length)throw new Error("calling transform done when ws.length != 0")
if(r.transforming)throw new Error("calling transform done when still transforming")
return t.push(null)}e.exports=i
var s=t("./_stream_duplex"),a=t("core-util-is")
a.inherits=t("inherits"),a.inherits(i,s),i.prototype.push=function(t,e){return this._transformState.needTransform=!1,s.prototype.push.call(this,t,e)},i.prototype._transform=function(){throw new Error("not implemented")},i.prototype._write=function(t,e,n){var r=this._transformState
if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},i.prototype._read=function(){var t=this._transformState
null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}},{"./_stream_duplex":32,"core-util-is":37,inherits:38}],36:[function(t,e){(function(n){function r(t,e,n){this.chunk=t,this.encoding=e,this.callback=n}function i(t,e){t=t||{}
var n=t.highWaterMark
this.highWaterMark=n||0===n?n:16384,this.objectMode=!!t.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var r=t.decodeStrings===!1
this.decodeStrings=!r,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){p(e,t)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function o(e){var n=t("./_stream_duplex")
return this instanceof o||this instanceof n?(this._writableState=new i(e,this),this.writable=!0,void _.call(this)):new o(e)}function s(t,e,r){var i=new Error("write after end")
t.emit("error",i),n.nextTick(function(){r(i)})}function a(t,e,r,i){var o=!0
if(!w.isBuffer(r)&&"string"!=typeof r&&null!==r&&void 0!==r&&!e.objectMode){var s=new TypeError("Invalid non-string/buffer chunk")
t.emit("error",s),n.nextTick(function(){i(s)}),o=!1}return o}function u(t,e,n){return t.objectMode||t.decodeStrings===!1||"string"!=typeof e||(e=new w(e,n)),e}function c(t,e,n,i,o){n=u(e,n,i),w.isBuffer(n)&&(i="buffer")
var s=e.objectMode?1:n.length
e.length+=s
var a=e.length<e.highWaterMark
return a||(e.needDrain=!0),e.writing?e.buffer.push(new r(n,i,o)):h(t,e,s,n,i,o),a}function h(t,e,n,r,i,o){e.writelen=n,e.writecb=o,e.writing=!0,e.sync=!0,t._write(r,i,e.onwrite),e.sync=!1}function f(t,e,r,i,o){r?n.nextTick(function(){o(i)}):o(i),t._writableState.errorEmitted=!0,t.emit("error",i)}function l(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function p(t,e){var r=t._writableState,i=r.sync,o=r.writecb
if(l(r),e)f(t,r,i,e,o)
else{var s=m(t,r)
s||r.bufferProcessing||!r.buffer.length||v(t,r),i?n.nextTick(function(){d(t,r,s,o)}):d(t,r,s,o)}}function d(t,e,n,r){n||g(t,e),r(),n&&y(t,e)}function g(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function v(t,e){e.bufferProcessing=!0
for(var n=0;n<e.buffer.length;n++){var r=e.buffer[n],i=r.chunk,o=r.encoding,s=r.callback,a=e.objectMode?1:i.length
if(h(t,e,a,i,o,s),e.writing){n++
break}}e.bufferProcessing=!1,n<e.buffer.length?e.buffer=e.buffer.slice(n):e.buffer.length=0}function m(t,e){return e.ending&&0===e.length&&!e.finished&&!e.writing}function y(t,e){var n=m(t,e)
return n&&(e.finished=!0,t.emit("finish")),n}function b(t,e,r){e.ending=!0,y(t,e),r&&(e.finished?n.nextTick(r):t.once("finish",r)),e.ended=!0}e.exports=o
var w=t("buffer").Buffer
o.WritableState=i
var E=t("core-util-is")
E.inherits=t("inherits")
var _=t("stream")
E.inherits(o,_),o.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},o.prototype.write=function(t,e,n){var r=this._writableState,i=!1
return"function"==typeof e&&(n=e,e=null),w.isBuffer(t)?e="buffer":e||(e=r.defaultEncoding),"function"!=typeof n&&(n=function(){}),r.ended?s(this,r,n):a(this,r,t,n)&&(i=c(this,r,t,e,n)),i},o.prototype._write=function(t,e,n){n(new Error("not implemented"))},o.prototype.end=function(t,e,n){var r=this._writableState
"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),"undefined"!=typeof t&&null!==t&&this.write(t,e),r.ending||r.finished||b(this,r,n)}}).call(this,t("Zh58VX"))},{"./_stream_duplex":32,Zh58VX:103,buffer:94,"core-util-is":37,inherits:38,stream:121}],37:[function(t,e,n){(function(t){function e(t){return Array.isArray(t)}function r(t){return"boolean"==typeof t}function i(t){return null===t}function o(t){return null==t}function s(t){return"number"==typeof t}function a(t){return"string"==typeof t}function u(t){return"symbol"==typeof t}function c(t){return void 0===t}function h(t){return f(t)&&"[object RegExp]"===m(t)}function f(t){return"object"==typeof t&&null!==t}function l(t){return f(t)&&"[object Date]"===m(t)}function p(t){return f(t)&&("[object Error]"===m(t)||t instanceof Error)}function d(t){return"function"==typeof t}function g(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function v(e){return t.isBuffer(e)}function m(t){return Object.prototype.toString.call(t)}n.isArray=e,n.isBoolean=r,n.isNull=i,n.isNullOrUndefined=o,n.isNumber=s,n.isString=a,n.isSymbol=u,n.isUndefined=c,n.isRegExp=h,n.isObject=f,n.isDate=l,n.isError=p,n.isFunction=d,n.isPrimitive=g,n.isBuffer=v}).call(this,t("buffer").Buffer)},{buffer:94}],38:[function(t,e){e.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],39:[function(t,e){e.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},{}],40:[function(t,e,n){function r(t){if(t&&!u(t))throw new Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){var e=this.charReceived=t.length%2
return this.charLength=e?2:0,e}function s(t){var e=this.charReceived=t.length%3
return this.charLength=e?3:0,e}var a=t("buffer").Buffer,u=a.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}},c=n.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),r(t),this.encoding){case"utf8":this.surrogateSize=3
break
case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o
break
case"base64":this.surrogateSize=3,this.detectIncompleteChar=s
break
default:return void(this.write=i)}this.charBuffer=new a(6),this.charReceived=0,this.charLength=0}
c.prototype.write=function(t){for(var e="",n=0;this.charLength;){var r=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length
if(t.copy(this.charBuffer,this.charReceived,n,r),this.charReceived+=r-n,n=r,this.charReceived<this.charLength)return""
e=this.charBuffer.slice(0,this.charLength).toString(this.encoding)
var i=e.charCodeAt(e.length-1)
if(!(i>=55296&&56319>=i)){if(this.charReceived=this.charLength=0,r==t.length)return e
t=t.slice(r,t.length)
break}this.charLength+=this.surrogateSize,e=""}var o=this.detectIncompleteChar(t),s=t.length
this.charLength&&(t.copy(this.charBuffer,0,t.length-o,s),this.charReceived=o,s-=o),e+=t.toString(this.encoding,0,s)
var s=e.length-1,i=e.charCodeAt(s)
if(i>=55296&&56319>=i){var a=this.surrogateSize
return this.charLength+=a,this.charReceived+=a,this.charBuffer.copy(this.charBuffer,a,0,a),this.charBuffer.write(e.charAt(e.length-1),this.encoding),e.substring(0,s)}return e},c.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var n=t[t.length-e]
if(1==e&&n>>5==6){this.charLength=2
break}if(2>=e&&n>>4==14){this.charLength=3
break}if(3>=e&&n>>3==30){this.charLength=4
break}}return e},c.prototype.end=function(t){var e=""
if(t&&t.length&&(e=this.write(t)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding
e+=r.slice(0,n).toString(i)}return e}},{buffer:94}],41:[function(t,e,n){n=e.exports=t("./lib/_stream_readable.js"),n.Readable=n,n.Writable=t("./lib/_stream_writable.js"),n.Duplex=t("./lib/_stream_duplex.js"),n.Transform=t("./lib/_stream_transform.js"),n.PassThrough=t("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":32,"./lib/_stream_passthrough.js":33,"./lib/_stream_readable.js":34,"./lib/_stream_transform.js":35,"./lib/_stream_writable.js":36}],42:[function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e]
for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}e.exports=n},{}],43:[function(t,e){e.exports={name:"levelup",description:"Fast & simple storage - a Node.js-style LevelDB wrapper",version:"0.18.6",contributors:[{name:"Rod Vagg",email:"r@va.gg",url:"https://github.com/rvagg"},{name:"John Chesley",email:"john@chesl.es",url:"https://github.com/chesles/"},{name:"Jake Verbaten",email:"raynos2@gmail.com",url:"https://github.com/raynos"},{name:"Dominic Tarr",email:"dominic.tarr@gmail.com",url:"https://github.com/dominictarr"},{name:"Max Ogden",email:"max@maxogden.com",url:"https://github.com/maxogden"},{name:"Lars-Magnus Skog",email:"lars.magnus.skog@gmail.com",url:"https://github.com/ralphtheninja"},{name:"David Björklund",email:"david.bjorklund@gmail.com",url:"https://github.com/kesla"},{name:"Julian Gruber",email:"julian@juliangruber.com",url:"https://github.com/juliangruber"},{name:"Paolo Fragomeni",email:"paolo@async.ly",url:"https://github.com/hij1nx"},{name:"Anton Whalley",email:"anton.whalley@nearform.com",url:"https://github.com/No9"},{name:"Matteo Collina",email:"matteo.collina@gmail.com",url:"https://github.com/mcollina"},{name:"Pedro Teixeira",email:"pedro.teixeira@gmail.com",url:"https://github.com/pgte"},{name:"James Halliday",email:"mail@substack.net",url:"https://github.com/substack"}],repository:{type:"git",url:"https://github.com/rvagg/node-levelup.git"},homepage:"https://github.com/rvagg/node-levelup",keywords:["leveldb","stream","database","db","store","storage","json"],main:"lib/levelup.js",dependencies:{bl:"~0.8.1","deferred-leveldown":"~0.2.0",errno:"~0.1.1",prr:"~0.0.0","readable-stream":"~1.0.26",semver:"~2.3.1",xtend:"~3.0.0"},devDependencies:{leveldown:"~0.10.0",bustermove:"*",tap:"*",referee:"*",rimraf:"*",async:"*",fstream:"*",tar:"*",mkfiletree:"*",readfiletree:"*","slow-stream":">=0.0.4",delayed:"*",boganipsum:"*",du:"*",memdown:"*","msgpack-js":"*"},browser:{leveldown:!1,"leveldown/package":!1,semver:!1},scripts:{test:"tap test/*-test.js --stderr",functionaltests:"node ./test/functional/fstream-test.js && node ./test/functional/binary-data-test.js && node ./test/functional/compat-test.js",alltests:"npm test && npm run-script functionaltests"},license:"MIT",gitHead:"213e989e2b75273e2b44c23f84f95e35bff7ea11",bugs:{url:"https://github.com/rvagg/node-levelup/issues"},_id:"levelup@0.18.6",_shasum:"e6a01cb089616c8ecc0291c2a9bd3f0c44e3e5eb",_from:"levelup@~0.18.2",_npmVersion:"1.4.14",_npmUser:{name:"rvagg",email:"rod@vagg.org"},maintainers:[{name:"rvagg",email:"rod@vagg.org"}],dist:{shasum:"e6a01cb089616c8ecc0291c2a9bd3f0c44e3e5eb",tarball:"http://registry.npmjs.org/levelup/-/levelup-0.18.6.tgz"},directories:{},_resolved:"https://registry.npmjs.org/levelup/-/levelup-0.18.6.tgz",readme:"ERROR: No README data found!"}},{}],44:[function(t,e){(function(n,r,i){function o(t,e){f.call(this,t)
new i(0)
if(this._dbsize=this.db.container.length(),this._reverse=!!e.reverse,e.end instanceof i?(e.end.length=0)&&(this._end=this.db.container.key(this._dbsize-1)):this._end=e.end,this._limit=e.limit,this._count=0,e.start){for(var n=!1,r=0;r<this._dbsize;r++)if(this.db.container.key(r)>=e.start){this._pos=r,this._reverse&&(this._pos=this.db.container.key(r)>e.start?r-1:r),n=!0
break}n||(this._pos=this._reverse?this._dbsize-1:-1)}else this._pos=this._reverse?this._dbsize-1:0}function s(e){if(!(this instanceof s))return new s(e)
h.call(this,e)
var n=t("./localstorage").localStorage
this.container=new n(e)}function a(t){return t instanceof ArrayBuffer}function u(t,e){if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if("key"===e){if(t instanceof Boolean)return new Error(e+" cannot be `null` or `undefined`")
if(""===t)return new Error(e+" cannot be empty")}if(0==t.toString().indexOf("[object ArrayBuffer]")&&(0==t.byteLength||void 0==t.byteLength))return new Error(e+" cannot be an empty Buffer")
if(a(t)){if(0===t.length)return new Error(e+" cannot be an empty Buffer")}else if(""===String(t))return new Error(e+" cannot be an empty String")}var c=t("util"),h=t("abstract-leveldown").AbstractLevelDOWN,f=t("abstract-leveldown").AbstractIterator,l=function(){},p=r.setImmediate||n.nextTick
c.inherits(o,f),o.prototype._next=function(t){if(this._pos>=this.db.container.length()||this._pos<0)return p(t)
var e,n=this.db.container.key(this._pos)
return this._end&&(this._reverse?n<this._end:n>this._end)?p(t):this._limit&&this._limit>0&&this._count++>=this._limit?p(t):(e=this.db.container.getItem(n),this._pos+=this._reverse?-1:1,void p(t.bind(null,void 0,n,e)))},c.inherits(s,h),s.prototype._open=function(t,e){p(function(){e(null,this)}.bind(this))},s.prototype._put=function(t,e,n,r){var o=u(t,"key")
if(o)return r(o)
if(o=u(e,"value"))return r(o)
if("object"==typeof e&&!i.isBuffer(e)&&void 0==e.buffer){var s={}
s.storetype="json",s.data=e,e=JSON.stringify(s)}this.container.setItem(t,e),p(r)},s.prototype._get=function(t,e,n){var r=u(t,"key")
if(r)return n(r)
a(t)||(t=String(t))
var o=this.container.getItem(t)
if(void 0===o)return p(function(){n(new Error("NotFound: "))})
if(e.asBuffer===!1||i.isBuffer(o)||(o=new i(String(o))),e.asBuffer===!1&&o.indexOf('{"storetype":"json","data"')>-1){var s=JSON.parse(o)
o=s.data}p(function(){n(null,o)})},s.prototype._del=function(t,e,n){var r=u(t,"key")
return r?n(r):(a(t)||(t=String(t)),this.container.removeItem(t),void p(n))},s.prototype._batch=function(t,e,n){var r,o,s,a=0
if(Array.isArray(t))for(;a<t.length;a++)if(t[a]){if(o=i.isBuffer(t[a].key)?t[a].key:String(t[a].key),r=u(o,"key"))return p(n.bind(null,r))
if("del"===t[a].type)this._del(t[a].key,e,l)
else if("put"===t[a].type){if(s=i.isBuffer(t[a].value)?t[a].value:String(t[a].value),r=u(s,"value"))return p(n.bind(null,r))
this._put(o,s,e,l)}}p(n)},s.prototype._iterator=function(t){return new o(this,t)},s.destroy=function(t,e){try{Object.keys(localStorage).forEach(function(e){e.substring(0,t.length+1)==t+"!"&&localStorage.removeItem(e)}),e()}catch(n){}},e.exports=s}).call(this,t("Zh58VX"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer)},{"./localstorage":45,Zh58VX:103,"abstract-leveldown":48,buffer:94,util:124}],45:[function(t,e,n){function r(t){this._partition=t,this._keys=[]
for(var e=0;e<window.localStorage.length;e++)0==window.localStorage.key(e).indexOf(t+"!")&&this._keys.push(window.localStorage.key(e))
this._keys.sort()}r.prototype.key=function(t){var e=this._keys[t]
return"undefined"!=typeof e?this._keys[t].replace(this._partition+"!","").replace("!bin"):e},r.prototype.setItem=function(t,e){if(t=this._partition+"!"+t,e instanceof ArrayBuffer){var n="ArrayBuffer:"
e=n+btoa(String.fromCharCode.apply(null,e))}if(e instanceof Uint8Array){var n="Uint8Array:"
e=n+btoa(String.fromCharCode.apply(null,e))}for(var r=0;r<this._keys.length;r++)if(this._keys[r]===t)return void window.localStorage.setItem(t,e)
this._keys.push(t),this._keys.sort(),window.localStorage.setItem(t,e)},r.prototype.getItem=function(t){t=this._partition+"!"+t
var e=window.localStorage.getItem(t)
if(null==e)return void 0
if(0==e.indexOf("ArrayBuffer:")){var n=e.replace("ArrayBuffer:","")
return e=new ArrayBuffer(atob(n).split("").map(function(t){return t.charCodeAt(0)}))}if(0==e.indexOf("Uint8Array:")){var n=e.replace("Uint8Array:","")
return atob(n)}return e},r.prototype.removeItem=function(t){t=this._partition+"!"+t
for(var e=this._keys.length;e>=0;e--)this._keys[e]===t&&(this._keys.splice(e,1),window.localStorage.removeItem(t))},r.prototype.clear=function(){window.localStorage.clear()},r.prototype.length=function(){return this._keys.length},n.localStorage=r},{}],46:[function(t,e){e.exports=t(26)},{Zh58VX:103}],47:[function(t,e){e.exports=t(27)},{Zh58VX:103}],48:[function(t,e,n){arguments[4][28][0].apply(n,arguments)},{"./abstract-chained-batch":46,"./abstract-iterator":47,Zh58VX:103,buffer:94,xtend:50}],49:[function(t,e){e.exports=t(11)},{}],50:[function(t,e,n){arguments[4][12][0].apply(n,arguments)},{"./has-keys":49,"object-keys":52}],51:[function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=function(t){var e="function"==typeof t&&!(t instanceof RegExp)||"[object Function]"===r.call(t)
return e||"undefined"==typeof window||(e=t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt),e}
e.exports=function(t,e){if(!i(e))throw new TypeError("iterator must be a function")
var r,o,s="string"==typeof t,a=t.length,u=arguments.length>2?arguments[2]:null
if(a===+a)for(r=0;a>r;r++)null===u?e(s?t.charAt(r):t[r],r,t):e.call(u,s?t.charAt(r):t[r],r,t)
else for(o in t)n.call(t,o)&&(null===u?e(t[o],o,t):e.call(u,t[o],o,t))}},{}],52:[function(t,e,n){arguments[4][13][0].apply(n,arguments)},{"./shim":54}],53:[function(t,e){var n=Object.prototype.toString
e.exports=function r(t){var e=n.call(t),r="[object Arguments]"===e
return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},{}],54:[function(t,e){!function(){"use strict"
var n,r=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=t("./foreach"),s=t("./isArguments"),a=!{toString:null}.propertyIsEnumerable("toString"),u=function(){}.propertyIsEnumerable("prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
n=function(t){var e=null!==t&&"object"==typeof t,n="[object Function]"===i.call(t),h=s(t),f=[]
if(!e&&!n&&!h)throw new TypeError("Object.keys called on a non-object")
if(h)o(t,function(t){f.push(t)})
else{var l,p=u&&n
for(l in t)p&&"prototype"===l||!r.call(t,l)||f.push(l)}if(a){var d=t.constructor,g=d&&d.prototype===t
o(c,function(e){g&&"constructor"===e||!r.call(t,e)||f.push(e)})}return f},e.exports=n}()},{"./foreach":51,"./isArguments":53}],55:[function(t,e){var n=t("events").EventEmitter,r=t("level-sublevel"),i=t("weak-type-wizard"),o=t("noddity-retrieval"),s=t("extend"),a=t("./lib/reflect.js"),u=t("./lib/index_manager.js"),c=t("./lib/post_manager.js"),h=new i({postMetadata:"metadata",string:["content","filename"],"default":{content:"",filename:""},cast:{postMetadata:new i({date:"date",markdown:"boolean"})}})
e.exports=function(t,e,i){function f(t,e){"function"==typeof t&&(e=t),"object"!=typeof t&&(t={})
var n=t.local||!1,r="number"==typeof t.mostRecent?-t.mostRecent:void 0,i=n?y.getLocalPosts:y.getPosts
i(r,void 0,e)}function l(){m.stop(),y.stop()}var p="string"==typeof t?new o(t):t,d=r(e),g=new n
i=s({},i)
var v=Object.create(g),m=new c(p,d.sublevel("posts",{valueEncoding:h.getLevelUpEncoding()}),{refreshEvery:i.refreshEvery}),y=new u(p,m,d.sublevel("index",{valueEncoding:"json"}),{refreshEvery:i.refreshEvery})
return a("change",m,g,"post changed"),a("post added",m,g),a("change",y,g,"index changed"),y.on("change",y.getPosts),v.getPost=m.getPost,v.getPosts=f,v.allPostsAreLoaded=y.allPostsAreLoaded,v.stop=l,v}},{"./lib/index_manager.js":56,"./lib/post_manager.js":57,"./lib/reflect.js":58,events:97,extend:60,"level-sublevel":6,"noddity-retrieval":64,"weak-type-wizard":80}],56:[function(t,e){function n(t,e){var n=t&&e&&t.metadata&&e.metadata&&t.metadata.date&&e.metadata.date
return n&&t.metadata.date!=e.metadata.date?t.metadata.date<e.metadata.date?-1:1:0}function r(t,e){return t.length===e.length&&t.every(function(t,n){return e[n]===t})}function i(t,e,i,c){function h(t,e,r,i){"function"==typeof e&&(i=e),p(function(o,s){o?i(o):t(s,function(t,o){t||(o=o.sort(n),"number"==typeof e&&(o=o.slice(e,r))),i(t,o)})})}c=s({refreshEvery:6e5,comparison:r},c)
var f=Object.create(new a),l=o(i,function(e,n){t.getIndex(n)},c)
l.on("change",function(t,e){f.emit("change",e)})
var p=l.get.bind(l,u)
p()
var d=h.bind(null,e.getPosts),g=h.bind(null,e.getLocalPosts)
return f.getPosts=d,f.getLocalPosts=g,f.allPostsAreLoaded=function(t){p(function(e,n){e?t(!1,!1):g(function(e,r){t(e,e||r.length===n.length)})})},f.stop=l.stop,f}var o=t("levelup-cache"),s=t("extend"),a=t("events").EventEmitter,u=(t("./reflect.js"),"index")
e.exports=i},{"./reflect.js":58,events:97,extend:60,"levelup-cache":61}],57:[function(t,e){function n(t,e){return"undefined"!=typeof e&&c(t)?t.toString()===e.toString():t===e}function r(t,e){return t.content===e.content&&t.metadata.length===e.metadata.length&&t.filename===e.filename&&Object.keys(t.metadata).every(function(r){return n(t.metadata[r],e.metadata[r])})}function i(t,e,n){function i(t,e){d.get(t,e)}function c(t,e){var n=[],r=!1,s=o(),a=t.map(function(t,e){return function(o){i(t,function(t,i){!r&&t?r=t:r||(n[e]=i),o()})}})
s.gate.apply(s,a).then(function(){e(r,n)})}function f(t,e){var n=[],r=!1,i=o(),s=t.map(function(t){return function(e){d.getLocal(t,function(t,o){r||(t?t.notFound||(r=t,i.abort()):n.push(o)),e()})}})
i.gate.apply(i,s).then(function(t){e(r,n),t()})}n=n||{}
var l=Object.create(new a),p=u({refreshEvery:432e5},n,{comparison:r}),d=new s(e,t.getPost,p)
return h("change",d,l),l.getPost=i,l.getPosts=c,l.getLocalPosts=f,l.stop=d.stop,l}var o=t("asynquence"),s=t("levelup-cache"),a=t("events").EventEmitter,u=t("extend"),c=t("util").isDate,h=t("./reflect.js")
e.exports=i},{"./reflect.js":58,asynquence:59,events:97,extend:60,"levelup-cache":61,util:124}],58:[function(t,e){e.exports=function(t,e,n,r){"string"==typeof t&&(t=[t]),t.forEach(function(t){e.on(t,n.emit.bind(n,r||t))})}},{}],59:[function(t,e){!function(t,n,r){"undefined"!=typeof e&&e.exports?e.exports=r():"function"==typeof define&&define.amd?define(r):n[t]=r(t,n)}("ASQ",this,function(t,e){function n(t){return"undefined"!=typeof setImmediate?setImmediate(t):setTimeout(t,0)}function r(){function t(){function t(){clearTimeout(d),d=null,y.length=0,b.length=0,w.length=0,E.length=0}function e(){return v?r():void(d||(d=n(r)))}function r(){var n,r
if(d=null,v)t()
else if(g)for(;b.length;){n=b.shift()
try{n.apply(n,E)}catch(o){E.push(o),o.stack&&E.push(o.stack),0===b.length&&console.error.apply(console,E)}}else if(m&&y.length>0){m=!1,n=y.shift(),r=w.slice(),w.length=0,r.unshift(i())
try{n.apply(n,r)}catch(o){E.push(o),g=!0,e()}}}function i(){function t(){g||v||m||(m=!0,w.push.apply(w,arguments),E.length=0,e())}return t.fail=function(){g||v||m||(g=!0,w.length=0,E.push.apply(E,arguments),e())},t.abort=function(){g||v||(m=!1,v=!0,w.length=0,E.length=0,e())},t}function o(t,e,r){function i(){clearTimeout(d),d=w=E=p=null}function o(){return y?a():void(d||(d=n(a)))}function a(){if(!(g||v||b)){var e,n=[]
if(d=null,m)t.fail.apply(t,p),i()
else if(y)t.abort(),i()
else if(u()){for(b=!0,e=0;e<w.length;e++)n.push(E["m"+e])
t.apply(t,n),i()}}}function u(){if(!(g||v||m||y||b||0===w.length)){var t,e=!0
for(t=0;t<w.length;t++)if(null===w[t]){e=!1
break}return e}}function c(){function t(){if(!(g||v||m||y||b||w[e])){var t=s.call(arguments)
E["m"+e]=t.length>1?t:t[0],w[e]=!0,o()}}var e=w.length
return t.fail=function(){g||v||m||y||b||w[e]||(m=!0,p=s.call(arguments),o())},t.abort=function(){g||v||m||y||b||(y=!0,a())},w[e]=null,t}var h,f,l,p,d,m=!1,y=!1,b=!1,w=[],E={}
for(h=0;h<e.length&&!m&&!y;h++){f=r.slice(),f.unshift(c())
try{e[h].apply(e[h],f)}catch(_){l=_,m=!0
break}}l&&t.fail(l)}function a(){return g||v?_:(arguments.length>0&&y.push.apply(y,arguments),e(),_)}function u(){return v?_:(b.push.apply(b,arguments),e(),_)}function c(){if(g||v||0===arguments.length)return _
var t=s.apply(arguments)
return a(function(e){var n=s.call(arguments)
n.shift(),o(e,t,n)}),_}function h(){if(g||v||0===arguments.length)return _
var t,e=s.call(arguments)
for(t=0;t<e.length;t++)!function(t){a(function(e){var n=s.call(arguments,1)
t.apply(t,n),e()}).or(t.fail)}(e[t])
return _}function f(){if(g||v||0===arguments.length)return _
var t,e=s.call(arguments)
for(t=0;t<e.length;t++)!function(t){a(function(e){var n=s.call(arguments,1)
t.apply(t,n).pipe(e)})}(e[t])
return _}function l(){if(g||v||0===arguments.length)return _
var t,e=s.call(arguments)
for(t=0;t<e.length;t++)!function(t){a(function(e){var n=s.call(arguments,1)
e(t.apply(t,n))})}(e[t])
return _}function p(){return g?_:(v=!0,r(),_)}var d,g=!1,v=!1,m=!0,y=[],b=[],w=[],E=[],_={then:a,or:u,gate:c,pipe:h,seq:f,val:l,abort:p}
return arguments.length>0&&_.then.apply(_,arguments),_}return t}var i,o=(e||{})[t],s=Array.prototype.slice
return i=r(),i.noConflict=function(){return e&&(e[t]=o),i},i})},{}],60:[function(t,e){function n(t){if(!t||"[object Object]"!==i.call(t)||t.nodeType||t.setInterval)return!1
var e=r.call(t,"constructor"),n=r.call(t.constructor.prototype,"isPrototypeOf")
if(t.constructor&&!e&&!n)return!1
var o
for(o in t);return void 0===o||r.call(t,o)}var r=Object.prototype.hasOwnProperty,i=Object.prototype.toString
e.exports=function o(){var t,e,r,i,s,a,u=arguments[0]||{},c=1,h=arguments.length,f=!1
for("boolean"==typeof u&&(f=u,u=arguments[1]||{},c=2),"object"!=typeof u&&"function"!=typeof u&&(u={});h>c;c++)if(null!=(t=arguments[c]))for(e in t)r=u[e],i=t[e],u!==i&&(f&&i&&(n(i)||(s=Array.isArray(i)))?(s?(s=!1,a=r&&Array.isArray(r)?r:[]):a=r&&n(r)?r:{},u[e]=o(f,a,i)):void 0!==i&&(u[e]=i))
return u}},{}],61:[function(t,e){var n=t("stringmap"),r=t("level-sublevel"),i=t("asynquence"),o=t("events").EventEmitter,s=t("expire-unused-keys"),a=t("extend")
e.exports=function(t,e,u){function c(){v.stop(),g.stop()}function h(t){d.del(t),v.forget(t)
var e=m.get(t)
e&&(e.abort(),m.remove(t))}function f(t,n){var r=m.get(t)
r||(r=i(function(n){e(t,function(e,r){d.get(t,function(i,o){!e&&m.has(t)&&(d.put(t,r,function(){y.emit("load",t,r),(i&&i.notFound||!u.comparison(o,r))&&y.emit("change",t,r,o)}),v.touch(t)),n(e,r)})})}),m.set(t,r),r.then(function(e,n,r){m.remove(t),e(n,r)})),"function"==typeof n&&r.then(function(t,e,r){n(e,r),t(e,r)})}function l(t,e){return function(n,r){g.touch(t),"function"==typeof e&&e(n,r)}}u=u||{},u=a({refreshEvery:432e5,checkToSeeIfItemsNeedToBeRefreshedEvery:1e3,ttl:6048e5,comparison:function(t,e){return t===e}},u)
var p=r(t),d=p.sublevel("items"),g=new s(u.ttl,p.sublevel("item-expirations",{valueEncoding:"utf8"}),u.checkToSeeIfItemsNeedToBeRefreshedEvery),v=new s(u.refreshEvery,p.sublevel("refresh",{valueEncoding:"utf8"}),u.checkToSeeIfItemsNeedToBeRefreshedEvery),m=new n,y=Object.create(new o)
return v.on("expire",f),g.on("expire",h),y.stop=c,y.get=function(t,e){d.get(t,function(n,r){n&&n.notFound?f(t,l(t,e)):e&&l(t,e)(n,r)})},y.getLocal=function(t,e){d.get(t,l(t,e))},y.refresh=function(t,e){f(t,l(t,e))},y}},{asynquence:59,events:97,"expire-unused-keys":62,extend:60,"level-sublevel":6,stringmap:63}],62:[function(t,e){function n(t){function e(){n=!1}var n=!1
return function(){if(!n){n=!0
var r=Array.prototype.slice.call(arguments,0)
r.push(e),t.apply(null,r)}}}var r=t("events").EventEmitter
e.exports=function(t,e,i){var o=new r,s=[],a=n(function(n){var r=(new Date).getTime(),i=[]
e.createReadStream().on("data",function(e){parseInt(e.value)+t<r&&i.push(e.key)}).on("end",function(){var t=e.batch()
i.filter(function(t){return-1===s.indexOf(t)}).forEach(function(e){o.emit("expire",e),t.del(e)}),s=[],t.write(n)})})
o.on("touch",function(t){e.put(t,(new Date).getTime())}),o.on("forget",function(t){s.push(t),e.del(t)})
var u=setInterval(a,i||1e3)
return o.touch=o.emit.bind(o,"touch"),o.forget=o.emit.bind(o,"forget"),o.stop=function(){clearInterval(u)},o}},{events:97}],63:[function(t,e){var n=function(){"use strict"
function t(e){return this instanceof t?(this.obj=n(),this.hasProto=!1,this.proto=void 0,void(e&&this.setMany(e))):new t(e)}var e=Object.prototype.hasOwnProperty,n=function(){function t(t){for(var n in t)if(e.call(t,n))return!0
return!1}function n(t){return e.call(t,"__count__")||e.call(t,"__parent__")}var r=!1
if("function"==typeof Object.create&&(t(Object.create(null))||(r=!0)),r===!1&&t({}))throw new Error("StringMap environment error 0, please file a bug at https://github.com/olov/stringmap/issues")
var i=r?Object.create(null):{},o=!1
if(n(i)){if(i.__proto__=null,t(i)||n(i))throw new Error("StringMap environment error 1, please file a bug at https://github.com/olov/stringmap/issues")
o=!0}return function(){var t=r?Object.create(null):{}
return o&&(t.__proto__=null),t}}()
return t.prototype.has=function(t){if("string"!=typeof t)throw new Error("StringMap expected string key")
return"__proto__"===t?this.hasProto:e.call(this.obj,t)},t.prototype.get=function(t){if("string"!=typeof t)throw new Error("StringMap expected string key")
return"__proto__"===t?this.proto:e.call(this.obj,t)?this.obj[t]:void 0},t.prototype.set=function(t,e){if("string"!=typeof t)throw new Error("StringMap expected string key")
"__proto__"===t?(this.hasProto=!0,this.proto=e):this.obj[t]=e},t.prototype.remove=function(t){if("string"!=typeof t)throw new Error("StringMap expected string key")
var e=this.has(t)
return"__proto__"===t?(this.hasProto=!1,this.proto=void 0):delete this.obj[t],e},t.prototype["delete"]=t.prototype.remove,t.prototype.isEmpty=function(){for(var t in this.obj)if(e.call(this.obj,t))return!1
return!this.hasProto},t.prototype.size=function(){var t=0
for(var n in this.obj)e.call(this.obj,n)&&++t
return this.hasProto?t+1:t},t.prototype.keys=function(){var t=[]
for(var n in this.obj)e.call(this.obj,n)&&t.push(n)
return this.hasProto&&t.push("__proto__"),t},t.prototype.values=function(){var t=[]
for(var n in this.obj)e.call(this.obj,n)&&t.push(this.obj[n])
return this.hasProto&&t.push(this.proto),t},t.prototype.items=function(){var t=[]
for(var n in this.obj)e.call(this.obj,n)&&t.push([n,this.obj[n]])
return this.hasProto&&t.push(["__proto__",this.proto]),t},t.prototype.setMany=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new Error("StringMap expected Object")
for(var n in t)e.call(t,n)&&this.set(n,t[n])
return this},t.prototype.merge=function(t){for(var e=t.keys(),n=0;n<e.length;n++){var r=e[n]
this.set(r,t.get(r))}return this},t.prototype.map=function(t){for(var e=this.keys(),n=0;n<e.length;n++){var r=e[n]
e[n]=t(this.get(r),r)}return e},t.prototype.forEach=function(t){for(var e=this.keys(),n=0;n<e.length;n++){var r=e[n]
t(this.get(r),r)}},t.prototype.clone=function(){var e=t()
return e.merge(this)},t.prototype.toString=function(){var t=this
return"{"+this.keys().map(function(e){return JSON.stringify(e)+":"+JSON.stringify(t.get(e))}).join(",")+"}"},t}()
"undefined"!=typeof e&&"undefined"!=typeof e.exports&&(e.exports=n)},{}],64:[function(t,e){var n=t("http"),r=t("url"),i=(t("concat-stream"),t("text-metadata-parser"))
e.exports=function(t){var e=function(e,i,o){var s="",a=r.resolve(t,e)
n.get(r.parse(a),function(t){t.setEncoding&&t.setEncoding("utf8"),t.on("data",function(t){null!==s&&(s+=t)}),t.on("error",function(t){s=null,i(t)}),t.on("end",function(e){if(null!==s)if("undefined"!=typeof e&&(s+=e),200!==t.statusCode)i(new Error("Lookup of "+a+" returned status "+t.statusCode+"\n========\n"+s))
else{var n=null
try{n=o(s)}catch(r){i(new Error("Error parsing file with contents:\n"+s+"\n==========\n"+r.message))}null!==n&&i(!1,n)}})}).on("error",function(t){i(new Error("Lookup of "+a+" failed\n========\n"+t.message))})}
return{getIndex:function(t){e("index.json",t,JSON.parse)},getPost:function(t,n){e(t,n,function(e){var n=i(e,{date:"date","boolean":"markdown"})
return n.filename=t,n})}}}},{"concat-stream":65,http:98,"text-metadata-parser":79,url:122}],65:[function(t,e){function n(t){r.Stream.call(this),this.writable=!0,t&&(this.cb=t),this.body=[],this.on("error",function(){})}var r=t("stream"),i=t("bops"),o=t("util")
o.inherits(n,r.Stream),n.prototype.write=function(t){this.emit("data",t),this.body.push(t)},n.prototype.destroy=function(){},n.prototype.arrayConcat=function(t){return 0===t.length?[]:1===t.length?t[0]:t.reduce(function(t,e){return t.concat(e)})},n.prototype.isArray=function(t){return Array.isArray(t)},n.prototype.getBody=function(){return 0!==this.body.length?"string"==typeof this.body[0]?this.body.join(""):this.isArray(this.body[0])?this.arrayConcat(this.body):i.is(this.body[0])?i.join(this.body):this.body:void 0},n.prototype.end=function(){this.emit("end"),this.cb&&this.cb(this.getBody())},e.exports=function(t){return new n(t)},e.exports.ConcatStream=n},{bops:66,stream:121,util:124}],66:[function(t,e){function n(t,e){for(var n in t)e[n]=t[n]}var r={}
e.exports=r,r.from=t("./from.js"),r.to=t("./to.js"),r.is=t("./is.js"),r.subarray=t("./subarray.js"),r.join=t("./join.js"),r.copy=t("./copy.js"),r.create=t("./create.js"),n(t("./read.js"),r),n(t("./write.js"),r)},{"./copy.js":69,"./create.js":70,"./from.js":71,"./is.js":72,"./join.js":73,"./read.js":75,"./subarray.js":76,"./to.js":77,"./write.js":78}],67:[function(t,e){!function(){"use strict"
function t(t){var e,n,i,o,s,a
if(t.length%4>0)throw"Invalid string. Length must be a multiple of 4"
for(s=t.indexOf("="),s=s>0?t.length-s:0,a=[],i=s>0?t.length-4:t.length,e=0,n=0;i>e;e+=4,n+=3)o=r.indexOf(t[e])<<18|r.indexOf(t[e+1])<<12|r.indexOf(t[e+2])<<6|r.indexOf(t[e+3]),a.push((16711680&o)>>16),a.push((65280&o)>>8),a.push(255&o)
return 2===s?(o=r.indexOf(t[e])<<2|r.indexOf(t[e+1])>>4,a.push(255&o)):1===s&&(o=r.indexOf(t[e])<<10|r.indexOf(t[e+1])<<4|r.indexOf(t[e+2])>>2,a.push(o>>8&255),a.push(255&o)),a}function n(t){function e(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}var n,i,o,s=t.length%3,a=""
for(n=0,o=t.length-s;o>n;n+=3)i=(t[n]<<16)+(t[n+1]<<8)+t[n+2],a+=e(i)
switch(s){case 1:i=t[t.length-1],a+=r[i>>2],a+=r[i<<4&63],a+="=="
break
case 2:i=(t[t.length-2]<<8)+t[t.length-1],a+=r[i>>10],a+=r[i>>4&63],a+=r[i<<2&63],a+="="}return a}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
e.exports.toByteArray=t,e.exports.fromByteArray=n}()},{}],68:[function(t,e){function n(t,e,n){e=void 0===e?0:e,n=void 0===n?t.length:n
var u,h,f=0,l=128,p=0
for(s.length=o.length=0;f<t.length;)h=t[f],!p&&h&l?(u=r(h),p+=u,8>u&&(s[s.length]=h&c[6-u])):p?(s[s.length]=h&c[6],--p,!p&&s.length&&(o[o.length]=a(i(s,u)),s.length=0)):o[o.length]=a(h),++f
return s.length&&!p&&(o[o.length]=a(i(s,u)),s.length=0),o.join("")}function r(t){for(var e=0;7>e&&t&u[e];++e);return e}function i(t){for(var e=0,n=0,r=t.length;r>n;++n)e|=t[n]<<6*(r-n-1)
return e}e.exports=n
var o=[],s=[],a=String.fromCharCode,u=[64,32,16,8,4,2,1],c=[0,1,3,7,15,31,63,127]},{}],69:[function(t,e){function n(t,e,n,o,s){return n=arguments.length<3?0:n,o=arguments.length<4?0:o,s=arguments.length<5?t.length:s,s!==o&&0!==e.length&&0!==t.length?(s>t.length&&(s=t.length),e.length-n<s-o&&(s=e.length-n+start),t.buffer!==e.buffer?r(t,e,n,o,s):i(t,e,n,o,s)):void 0}function r(t,e,n,r,i){for(var o=i-r+n,s=n,a=r;o>s;++s,++a)e[s]=t[a]}function i(t,e,n,r,i){for(var s=i+r,a=new Uint8Array(o.call(t,r,s)),u=0;s>r;++r,++u)e[n++]=a[u]}e.exports=n
var o=[].slice},{}],70:[function(t,e){e.exports=function(t){return new Uint8Array(t)}},{}],71:[function(t,e){function n(t,e){return Array.isArray(t)?new Uint8Array(t):a[e||"utf8"](t)}function r(t){for(var e=t.length/2,n=new Uint8Array(e),r="",i=0,o=t.length;o>i;++i)r+=t.charAt(i),i>0&&i%2===1&&(n[i>>>1]=parseInt(r,16),r="")
return n}function i(t){for(var e,n,r=[],i=0,o=t.length;o>i;++i)if(n=t.charCodeAt(i),128&n){e=encodeURIComponent(t.charAt(i)).substr(1).split("%")
for(var s=0,a=e.length;a>s;++s)r[r.length]=parseInt(e[s],16)}else r[r.length]=n
return new Uint8Array(r)}function o(t){return new Uint8Array(s.toByteArray(t))}e.exports=n
var s=t("base64-js"),a={hex:r,utf8:i,base64:o}},{"base64-js":67}],72:[function(t,e){e.exports=function(t){return t instanceof Uint8Array}},{}],73:[function(t,e){function n(t,e){if(!t.length)return new Uint8Array(0)
for(var n=void 0!==e?e:r(t),i=new Uint8Array(n),o=t[0],s=o.length,a=0,u=0,c=0;n>c;)u!==s?i[c++]=o[u++]:(u=0,++a,o=t[a],s=o&&o.length)
return i}function r(t){for(var e=0,n=0,r=t.length;r>n;++n)e+=t[n].byteLength
return e}e.exports=n},{}],74:[function(t,e){function n(t){return new DataView(t.buffer,0)}function r(t){var e=o.get(t.buffer)
return e||o.set(t.buffer,e=new DataView(t.buffer,0)),e}var i,o
e.exports=i={},o="undefined"==typeof WeakMap?null:new WeakMap,i.get=o?r:n},{}],75:[function(t,e){function n(t,e){return t[e]}function r(t,e){var n=t[e]
return 128>n?n:n-256}function i(t,e){var n=v.get(t)
return n.getUint16(e+t.byteOffset,!0)}function o(t,e){var n=v.get(t)
return n.getUint32(e+t.byteOffset,!0)}function s(t,e){var n=v.get(t)
return n.getInt16(e+t.byteOffset,!0)}function a(t,e){var n=v.get(t)
return n.getInt32(e+t.byteOffset,!0)}function u(t,e){var n=v.get(t)
return n.getFloat32(e+t.byteOffset,!0)}function c(t,e){var n=v.get(t)
return n.getFloat64(e+t.byteOffset,!0)}function h(t,e){var n=v.get(t)
return n.getUint16(e+t.byteOffset,!1)}function f(t,e){var n=v.get(t)
return n.getUint32(e+t.byteOffset,!1)}function l(t,e){var n=v.get(t)
return n.getInt16(e+t.byteOffset,!1)}function p(t,e){var n=v.get(t)
return n.getInt32(e+t.byteOffset,!1)}function d(t,e){var n=v.get(t)
return n.getFloat32(e+t.byteOffset,!1)}function g(t,e){var n=v.get(t)
return n.getFloat64(e+t.byteOffset,!1)}e.exports={readUInt8:n,readInt8:r,readUInt16LE:i,readUInt32LE:o,readInt16LE:s,readInt32LE:a,readFloatLE:u,readDoubleLE:c,readUInt16BE:h,readUInt32BE:f,readInt16BE:l,readInt32BE:p,readFloatBE:d,readDoubleBE:g}
var v=t("./mapped.js")},{"./mapped.js":74}],76:[function(t,e){function n(t,e,n){return t.subarray(e||0,n||t.length)}e.exports=n},{}],77:[function(t,e){function n(t,e){return u[e||"utf8"](t)}function r(t){for(var e,n="",r=0,i=t.length;i>r;++r)e=t[r],n+=((240&e)>>>4).toString(16),n+=(15&e).toString(16)
return n}function i(t){return a(t)}function o(t){return s.fromByteArray(t)}e.exports=n
var s=t("base64-js"),a=t("to-utf8"),u={hex:r,utf8:i,base64:o}},{"base64-js":67,"to-utf8":68}],78:[function(t,e){function n(t,e,n){return t[n]=e}function r(t,e,n){return t[n]=0>e?e+256:e}function i(t,e,n){var r=v.get(t)
return r.setUint16(n+t.byteOffset,e,!0)}function o(t,e,n){var r=v.get(t)
return r.setUint32(n+t.byteOffset,e,!0)}function s(t,e,n){var r=v.get(t)
return r.setInt16(n+t.byteOffset,e,!0)}function a(t,e,n){var r=v.get(t)
return r.setInt32(n+t.byteOffset,e,!0)}function u(t,e,n){var r=v.get(t)
return r.setFloat32(n+t.byteOffset,e,!0)}function c(t,e,n){var r=v.get(t)
return r.setFloat64(n+t.byteOffset,e,!0)}function h(t,e,n){var r=v.get(t)
return r.setUint16(n+t.byteOffset,e,!1)}function f(t,e,n){var r=v.get(t)
return r.setUint32(n+t.byteOffset,e,!1)}function l(t,e,n){var r=v.get(t)
return r.setInt16(n+t.byteOffset,e,!1)}function p(t,e,n){var r=v.get(t)
return r.setInt32(n+t.byteOffset,e,!1)}function d(t,e,n){var r=v.get(t)
return r.setFloat32(n+t.byteOffset,e,!1)}function g(t,e,n){var r=v.get(t)
return r.setFloat64(n+t.byteOffset,e,!1)}e.exports={writeUInt8:n,writeInt8:r,writeUInt16LE:i,writeUInt32LE:o,writeInt16LE:s,writeInt32LE:a,writeFloatLE:u,writeDoubleLE:c,writeUInt16BE:h,writeUInt32BE:f,writeInt16BE:l,writeInt32BE:p,writeFloatBE:d,writeDoubleBE:g}
var v=t("./mapped.js")},{"./mapped.js":74}],79:[function(t,e){function n(t){for(var e=t.split("\n"),n=!1,r=!1,i={content:"",metadata:{}},o=0;o<e.length&&!r;o++)if(n)r||(r=!/^\s*$/.test(e[o]))
else{var s=/^([^:]+):\s*([^\r\n]+)\s*$/.exec(e[o])
if(s&&3===s.length){var a=s[1].trim()
i.metadata[a]=s[2]}else{if(0===o)return{content:t,metadata:{}}
n=!0}}return i.content=e.slice(o-1).join("\n"),i}function r(t,e){var r=n(e)
return r.metadata=t(r.metadata),r}function i(t,e,n){var o="string"!=typeof e
"undefined"==typeof n&&"string"!=typeof e&&(n=e)
var s="object"==typeof n?t.extend(n):t
return o?i.bind(null,s):r(s,e)}var o=t("weak-type-wizard")
e.exports=i.bind(null,new o({}))},{"weak-type-wizard":80}],80:[function(t,e){function n(t){return Object.keys(t).reduce(function(e,n){return s(!0,e,r(t[n],n))},{})}function r(t,e){return"string"==typeof t?r([t],e):Array.isArray(t)?t.reduce(function(t,n){return t[n]=e,t},{}):{}}function i(t,e,n){return Object.keys(e).filter(function(e){return"undefined"!=typeof t[e]}).forEach(function(r){var i=n[t[r]]
"function"==typeof i&&(e[r]=i(e[r]))}),e}function o(t,e,r){var u=function(n){var o=s(!0,{},e,n)
return i(t,o,r)}
return u.extend=function(i){var u=i.default
delete i.default
var c=i.cast
delete i.cast
var h=n(i)
return new o(s(!0,{},t,h),s(!0,{},e,u),s(!0,{},a,r,c))},u.getLevelUpEncoding=function(){return{buffer:!1,type:"weak-type-wizard",encode:JSON.stringify,decode:function(t){return u(JSON.parse(t))}}},u}var s=t("extend"),a={"boolean":function(t){return"false"!==t.toString().toLowerCase()&&!(/^\d+$/.test(t)&&0!==parseInt(t))},number:function(t){return parseFloat(t)},string:function(t){return t.toString()},date:function(t){return new Date(t)}},u=new o({},{})
e.exports=function(t){return u.extend(t)}},{extend:60}],81:[function(t,e){function n(t,e){for(var n=0,r=e.indexOf(t);-1!==r;)n++,r=e.indexOf(t,r+1)
return n}function r(t,e,r){return r.replace(/\[\[([\w.-]+)(?:\|([^\]>\n]+))?\]\]/gm,function(r,i,o,s,a){var u=n("<code",a.substr(0,s)),c=n("</code",a.substr(0,s))
return u!==c?r:(o=o||i,t.emit("link",i),'<a href="'+e+i+'">'+o+"</a>")})}var i=t("events").EventEmitter
e.exports=function(t){var e=Object.create(new i)
return e.linkify=r.bind(null,e,t),e}},{events:97}],82:[function(t,e){function n(t,e){function n(t){u.mixinHtml(t),u.parseTemplate(t),u.mixinChildPosts(t),u.mixinRenderedHtmlEmitter(t),t.on("all child posts fetched",function(t){t.templateElements.forEach(n)})}function i(t,e){var r=u.makeNewMixinObject(t)
n(r),r.on("final html rendered",function(t){e(null,t.renderedHtml)})}function o(t){u.mixinHtml(t),u.parseTemplate(t),u.mixinTemplateRactive(t),u.updateEmitterMixin(t),u.mixinTeardownChildren(t),u.mixinChildPosts(t),t.on("child post fetched",function(e){t.torndown||(o(e),t.children.push(e))}),t.on("post changed",function(e){var n=u.makeNewMixinObject(e)
n.elementId=t.elementId,n.data=t.data,t.ractive.teardown(),t.removeAllListeners(),o(n)}),t.ractive.on("teardown",function(){t.torndown=!0,t.teardownChildren(),t.removeAllListeners()})}function s(t){function e(e){t.teardownChildren(),a(e,t.ractive)}t.on("post changed",e),t.change=function(n){t.removeListener("post changed",e),e(n)},t.ractive.on("teardown",function(){t.teardownChildren(),t.torndown=!0})}function a(t,e){var n=u.makeNewMixinObject(t)
return n.ractive=e,u.mixinHtml(n),u.parseTemplate(n),u.updateEmitterMixin(n),u.mixinTeardownChildren(n),u.mixinChildPosts(n),s(n),n.on("child post fetched",function(t){n.torndown||(o(t),n.children.push(t))}),e.set("html",n.html),e.set("metadata",t.metadata),e.set("current",t.filename),n.change}var u=r(t,e)
return{populateRootRactive:a,renderPost:i}}var r=t("./mixins")
e.exports=n},{"./mixins":83}],83:[function(t,e){(function(n){function r(t){try{return new d({el:null,data:t.data,template:t.renderedHtml||t.html,preserveWhitespace:!0}).toHTML()}catch(e){return t.emit("error",e),e.message}}function i(t){var e=Object.create(new p)
return t&&(e.post=t,e.postName=t.filename),e}function o(t,e){var n=f.generatePostDiv(e.elementId),r=t.renderedHtml||t.html
return t.renderedHtml=r.replace(n,e.renderedHtml),t}function s(t,e){function r(){e.emit("all child posts fetched",e)}var i=0
return e.templateElements.forEach(function(n){t(n.postName,function(t,o){i+=1,t?n.err=t:(n.post=o,e.emit("child post fetched",n)),i===e.templateElements.length&&r()})}),0===e.templateElements.length&&n.nextTick(r),e}function a(t,e){return e.html=t(l(e.post)),e}function u(t){return t.on("all child posts fetched",function(t){if(0===t.templateElements.length)t.renderedHtml=r(t),n.nextTick(function(){t.emit("final html rendered",t)})
else{var e=0,i=function(n){o(t,n),e+=1,e>=t.templateElements.length&&(t.renderedHtml=r(t),t.emit("final html rendered",t))}
t.templateElements.forEach(function(t){t.once("final html rendered",i)})}}),t}function c(t){try{t.ractive=new d({el:t.elementId,data:t.data,template:t.html,preserveWhitespace:!0})}catch(e){t.ractive=new d({el:t.elementId,data:{error:e.message},template:v}),t.emit("error",e)}t.emit("ractive created",t)}function h(t){t.children=[],t.teardownChildren=function(){t.children.forEach(function(t){t.ractive&&t.ractive.teardown(),t.torndown=!0})}}var f=t("./templateToolbox.js"),l=f.htmlify,p=t("events").EventEmitter,d=t("ractive"),g=t("./updateEmitterMixin.js"),v=d.parse("{{error}}")
e.exports=function(e,n){return{mixinHtml:a.bind(null,n),makeNewMixinObject:i,mixinRenderedHtmlEmitter:u,parseTemplate:t("./parseTemplate"),mixinChildPosts:s.bind(null,e.getPost),updateEmitterMixin:g(e),mixinTemplateRactive:c,mixinTeardownChildren:h}}}).call(this,t("Zh58VX"))},{"./parseTemplate":86,"./templateToolbox.js":87,"./updateEmitterMixin.js":88,Zh58VX:103,events:97,ractive:84}],84:[function(t,e){!function(t){"use strict"
var n=t.Ractive,r=void 0,i=function(){var t,e
return t={el:null,template:"",complete:null,preserveWhitespace:!1,append:!1,twoway:!0,modifyArrays:!0,lazy:!1,debug:!1,noIntro:!1,transitionsEnabled:!0,magic:!1,noCssTransform:!1,adapt:[],sanitize:!1,stripComments:!0,isolated:!1,delimiters:["{{","}}"],tripleDelimiters:["{{{","}}}"],computed:null},e={keys:Object.keys(t),defaults:t}}(r),o=function(){return"undefined"!=typeof document?document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"):void 0}(),s={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},a=function(t,e){return t?function(t,n){return n&&n!==e.html?document.createElementNS(n,t):document.createElement(t)}:function(t,n){if(n&&n!==e.html)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information"
return document.createElement(t)}}(o,s),u="object"==typeof document,c=function(t){try{return Object.defineProperty({},"test",{value:0}),t&&Object.defineProperty(document.createElement("div"),"test",{value:0}),Object.defineProperty}catch(e){return function(t,e,n){t[e]=n.value}}}(u),h=function(t,e,n){try{try{Object.defineProperties({},{test:{value:0}})}catch(r){throw r}return n&&Object.defineProperties(t("div"),{test:{value:0}}),Object.defineProperties}catch(r){return function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t,r,n[r])}}}(a,c,u),f=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},l=function(t){return function(e,n,r){var i
if("string"!=typeof n||!t(r))throw new Error("Bad arguments")
if(i=+e.get(n)||0,!t(i))throw new Error("Cannot add to a non-numeric value")
return e.set(n,i+r)}}(f),p=function(t){return function(e,n){return t(this,e,void 0===n?1:+n)}}(l),d=function(t,e){return null===t&&null===e?!0:"object"==typeof t||"object"==typeof e?!1:t===e},g=function(){function t(t){setTimeout(t,0)}function e(t,e){return function(){for(var n;n=t.shift();)n(e)}}function n(t,e,i,o){var s
if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise")
if(e instanceof r)e.then(i,o)
else if(!e||"object"!=typeof e&&"function"!=typeof e)i(e)
else{try{s=e.then}catch(a){return void o(a)}if("function"==typeof s){var u,c,h
c=function(e){u||(u=!0,n(t,e,i,o))},h=function(t){u||(u=!0,o(t))}
try{s.call(e,c,h)}catch(a){if(!u)return o(a),void(u=!0)}}else i(e)}}var r,i={},o={},s={}
return r=function(a){var u,c,h,f,l,p,d=[],g=[],v=i
return h=function(n){return function(r){v===i&&(u=r,v=n,c=e(v===o?d:g,u),t(c))}},f=h(o),l=h(s),a(f,l),p={then:function(e,o){var s=new r(function(r,a){var u=function(t,e,i){e.push("function"==typeof t?function(e){var i
try{i=t(e),n(s,i,r,a)}catch(o){a(o)}}:i)}
u(e,d,r),u(o,g,a),v!==i&&t(c)})
return s}},p["catch"]=function(t){return this.then(null,t)},p},r.all=function(t){return new r(function(e,n){var r,i,o,s=[]
if(!t.length)return void e(s)
for(o=function(i){t[i].then(function(t){s[i]=t,--r||e(s)},n)},r=i=t.length;i--;)o(i)})},r.resolve=function(t){return new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})},r}(),v=function(){var t=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g
return function(e){return(e||"").replace(t,".$1")}}(),m=["o","ms","moz","webkit"],y=function(t){return"undefined"!=typeof window?(function(t,e,n){var r,i
if(!n.requestAnimationFrame){for(r=0;r<t.length&&!n.requestAnimationFrame;++r)n.requestAnimationFrame=n[t[r]+"RequestAnimationFrame"]
n.requestAnimationFrame||(i=n.setTimeout,n.requestAnimationFrame=function(t){var n,r,o
return n=Date.now(),r=Math.max(0,16-(n-e)),o=i(function(){t(n+r)},r),e=n+r,o})}}(t,0,window),window.requestAnimationFrame):void 0}(m),b=function(){return"undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()}}(),w=[],E=function(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)},_=function(t,e,n){var r,i,o,s,a,u="/* Ractive.js component styles */\n",c={},h=[]
if(e)return t.push(function(){r=t.runloop}),i=document.createElement("style"),i.type="text/css",o=document.getElementsByTagName("head")[0],a=!1,s=i.styleSheet,{add:function(t){t.css&&(c[t._guid]||(c[t._guid]=0,h.push(t.css),r.scheduleCssUpdate()),c[t._guid]+=1)},remove:function(t){t.css&&(c[t._guid]-=1,c[t._guid]||(n(h,t.css),r.scheduleCssUpdate()))},update:function(){var t
h.length?(t=u+h.join(" "),s?s.cssText=t:i.innerHTML=t,a||o.appendChild(i)):a&&o.removeChild(i)}}}(w,u,E),x=function(t,e){var n,r,i,o,s,a
for(n=[],a=t._rendering?t.fragment.docFrag:t.el,r=a.querySelectorAll('input[type="checkbox"][name="{{'+e+'}}"]'),o=r.length,s=0;o>s;s+=1)i=r[s],(i.hasAttribute("checked")||i.checked)&&n.push(i._ractive.value)
return n},k=Object.prototype.hasOwnProperty,O=function(t){do if(t.context)return t.context
while(t=t.parent)
return""},S=function(t,e,n,r){var i,o='Could not resolve reference - too many "../" prefixes'
return t.push(function(){i=t.get}),function(t,s,a){var u,c,h,f,l,p,d,g,v
if(s=e(s),"."===s)return r(a)
if("."===s.charAt(0)){if(u=r(a),c=u?u.split("."):[],"../"===s.substr(0,3)){for(;"../"===s.substr(0,3);){if(!c.length)throw new Error(o)
c.pop(),s=s.substring(3)}return c.push(s),c.join(".")}return u?u+s:s.substring(1)}h=s.split("."),f=h.pop(),l=h.length?"."+h.join("."):""
do if(u=a.context,u&&(v=!0,p=u+l,d=i(t,p),(g=t._wrapped[p])&&(d=g.get()),d&&("object"==typeof d||"function"==typeof d)&&f in d))return u+"."+s
while(a=a.parent)
return v||t._parent&&!t.isolated?n.call(t.data,s)?s:void 0!==i(t,s)?s:void 0:s}}(w,v,k,O),T=function(t){var e,n,r,i,o=[""]
for(e=t.length;e--;)for(n=t[e],r=n.split(".");r.length>1;)r.pop(),i=r.join("."),o[i]!==!0&&(o.push(i),o[i]=!0)
return o},A=function(){function t(t,n,r){var o
for(t._patternObservers.length&&i(t,n,n,r,!0),o=0;o<t._deps.length;o+=1)e(t,n,o,r)}function e(t,e,i,o){var s=t._deps[i]
s&&(n(s[e]),o||r(t._depsMap[e],t,i))}function n(t){var e,n
if(t)for(n=t.length,e=0;n>e;e+=1)t[e].update()}function r(t,n,r,i){var o
if(t)for(o=t.length;o--;)e(n,t[o],r,i)}function i(t,e,n,r,s){var u,c,h,f,l,p,d,g
for(u=t._patternObservers.length;u--;)c=t._patternObservers[u],c.regex.test(n)&&c.update(n)
r||(g=function(e){if(h=t._depsMap[e])for(u=h.length;u--;)f=h[u],l=a.exec(f)[0],p=n?n+"."+l:l,i(t,f,p)},s?(d=o(n),d.forEach(g)):g(e))}function o(t){var e,n,r,i,o,a
for(e=t.split("."),n=s(e.length),o=[],r=function(t,n){return t?"*":e[n]},i=n.length;i--;)a=n[i].map(r).join("."),o[a]||(o.push(a),o[a]=!0)
return o}function s(t){var e,n,r,i,o,s=""
if(!u[t]){for(r=[];s.length<t;)s+=1
for(e=parseInt(s,2),i=function(t){return"1"===t},o=0;e>=o;o+=1){for(n=o.toString(2);n.length<t;)n="0"+n
r[o]=Array.prototype.map.call(n,i)}u[t]=r}return u[t]}var a,u={}
return a=/[^\.]+$/,t.multiple=function(t,n,r){var o,s,a
if(a=n.length,t._patternObservers.length)for(o=a;o--;)i(t,n[o],n[o],r,!0)
for(o=0;o<t._deps.length;o+=1)if(t._deps[o])for(s=a;s--;)e(t,n[s],o,r)},t}(),N=function(t){var e,n,r,i
return e=function(t,e){var o=[]
return o.detachQueue=[],o.remove=r,o.init=i,o._check=n,o._callback=t,o._previous=e,e&&e.push(o),o},n=function(){var t
if(this._ready&&!this.length){for(;t=this.detachQueue.pop();)t.detach()
"function"==typeof this._callback&&this._callback(),this._previous&&this._previous.remove(this)}},r=function(e){t(this,e),this._check()},i=function(){this._ready=!0,this._check()},e}(E),C=function(t,e,n,r,i,o,s,a){function u(){var t,n,r
for(b&&(b.focus(),b=null);t=k.pop();)t.update().deferred=!1
for(;t=w.pop();)t._sort()
for(;t=E.pop();)t.init()
for(;t=_.pop();)t.init()
for(;t=x.pop();)t.update()
for(;t=O.pop();)t.active=!1
for(;t=L.pop();)if(L[t._guid]=!1,t._changes.length){for(r={};n=t._changes.pop();)r[n]=l(t,n)
t.fire("change",r)}d&&(e.update(),d=!1)}function c(){var t,e,n
for(n=L.length;n--;)t=L[n],t._changes.length&&(e=o(t._changes),s.multiple(t,e,!0))
for(h();v;){for(v=!1;t=T.pop();)t.update()
for(;t=S.pop();)t.update().deferred=!1
for(;t=A.pop();)t.deferredUpdate()
for(;t=C.pop();)p(t.root,t.keypath,r(t.root,t.keypath))
for(;t=R.pop();)t.update()}}function h(){var t,e,n
if(I.length)for(t=I.splice(0,I.length);e=t.pop();)e.keypath||(n=i(e.root,e.ref,e.parentFragment),void 0!==n?e.resolve(n):I.push(e))}t.push(function(){l=t.get,p=t.set})
var f,l,p,d,g,v=!1,m=!1,y=0,b=null,w=[],E=[],_=[],x=[],k=[],O=[],S=[],T=[],A=[],N={},C=[],R=[],I=[],L=[]
return f={start:function(t,e){this.addInstance(t),m||(y+=1,g=a(e,g))},end:function(){return m?void h():(--y||(m=!0,c(),m=!1,u()),g.init(),void(g=g._previous))},trigger:function(){return y||m?void h():(m=!0,c(),m=!1,void u())},focus:function(t){b=t},addInstance:function(t){t&&!L[t._guid]&&(L.push(t),L[L._guid]=!0)},addLiveQuery:function(t){w.push(t)},addDecorator:function(t){E.push(t)},addTransition:function(t){t._manager=g,g.push(t),_.push(t)},addObserver:function(t){x.push(t)},addAttribute:function(t){k.push(t)},addBinding:function(t){t.active=!0,O.push(t)},scheduleCssUpdate:function(){y||m?d=!0:e.update()},addEvaluator:function(t){v=!0,S.push(t)},addComputation:function(t){v=!0,T.push(t)},addSelectValue:function(t){v=!0,A.push(t)},addCheckbox:function(t){N[t.keypath]||(v=!0,C.push(t))},addRadio:function(t){v=!0,R.push(t)},addUnresolved:function(t){v=!0,I.push(t)},removeUnresolved:function(t){n(I,t)},detachWhenReady:function(t){g.detachQueue.push(t)}},t.runloop=f,f}(w,_,E,x,S,T,A,N),R=function(t,e,n){var r=[],i={tick:function(){var o,s,a
for(a=e(),n.start(),o=0;o<r.length;o+=1)s=r[o],s.tick(a)||r.splice(o--,1)
n.end(),r.length?t(i.tick):i.running=!1},add:function(e){r.push(e),i.running||(i.running=!0,t(i.tick))},abort:function(t,e){for(var n,i=r.length;i--;)n=r[i],n.root===e&&n.keypath===t&&n.stop()}}
return i}(y,b,C),I=function(){var t=Object.prototype.toString
return function(e){return"[object Array]"===t.call(e)}}(),L=function(t){return function(e){var n,r
if(!e||"object"!=typeof e)return e
if(t(e))return e.slice()
n={}
for(r in e)e.hasOwnProperty(r)&&(n[r]=e[r])
return n}}(I),j={},M=function(t,e,n){switch(e){case"splice":return n
case"sort":case"reverse":return null
case"pop":return t.length?[-1]:null
case"push":return[t.length,0].concat(n)
case"shift":return[0,1]
case"unshift":return[0,0].concat(n)}},P=function(t,e){var n,r,i,o
return e?(n=+(e[0]<0?t.length+e[0]:e[0]),r=Math.max(0,e.length-2),i=void 0!==e[1]?e[1]:t.length-n,i=Math.min(i,t.length-n),o=r-i,{start:n,balance:o,added:r,removed:i}):null},F={TEXT:1,INTERPOLATOR:2,TRIPLE:3,SECTION:4,INVERTED:5,CLOSING:6,ELEMENT:7,PARTIAL:8,COMMENT:9,DELIMCHANGE:10,MUSTACHE:11,TAG:12,ATTRIBUTE:13,COMPONENT:15,NUMBER_LITERAL:20,STRING_LITERAL:21,ARRAY_LITERAL:22,OBJECT_LITERAL:23,BOOLEAN_LITERAL:24,GLOBAL:26,KEY_VALUE_PAIR:27,REFERENCE:30,REFINEMENT:31,MEMBER:32,PREFIX_OPERATOR:33,BRACKETED:34,CONDITIONAL:35,INFIX_OPERATOR:36,INVOCATION:40},B=function po(t,e,n){var r,i
if(n||(i=t._wrapped[e])&&i.teardown()!==!1&&(t._wrapped[e]=null),t._cache[e]=void 0,r=t._cacheMap[e])for(;r.length;)po(t,r.pop())},D=function(){var t=/^\s*[0-9]+\s*$/
return function(e){return t.test(e)?[]:{}}}(),U=function(t,e,n,r,i){function o(t,a,u,c){var h,f,l,p,d,g,v,m
e(t._cache[a],u)||(d=t._computations[a],g=t._wrapped[a],v=t._evaluators[a],d&&!d.setting&&d.set(u),g&&g.reset&&(m=g.reset(u)!==!1,m&&(u=g.get())),v&&(v.value=u),d||v||m||(h=a.split("."),f=h.pop(),l=h.join("."),g=t._wrapped[l],g&&g.set?g.set(f,u):(p=g?g.get():s(t,l),p||(p=n(f),o(t,l,p,!0)),p[f]=u)),r(t,a,m),c||(t._changes.push(a),i(t,a)))}var s
return t.push(function(){s=t.get}),t.set=o,o}(w,d,D,B,A),V=function(t,e,n,r){return function(i,o,s,a){var u,c,h,f,l,p,d,g,v,m
if(u=i.root,c=i.keypath,u._changes.push(c),"sort"===s||"reverse"===s)return void r(u,c,o)
if(a){for(h=a.balance?o.length-Math.min(a.balance,0):a.added,l=a.start;h>l;l+=1)e(u,c+"."+l)
if(f=function(e){e.keypath===c&&e.type===t.SECTION&&!e.inverted&&e.docFrag?e.splice(a):e.update()},u._deps.forEach(function(t){var e=t[c]
e&&e.forEach(f)}),a.added&&a.removed)for(p=Math.max(a.added,a.removed),d=a.start,g=d+p,m=a.added===a.removed,l=d;g>l;l+=1)v=c+"."+l,n(u,v)
m||(e(u,c+".length"),n(u,c+".length",!0))}}}(F,B,A,U),W=function(t,e,n,r,i){var o,s,a,u=[],c=["pop","push","reverse","shift","sort","splice","unshift"]
return c.forEach(function(o){var s=function(){var e,s,a,u,c
for(e=n(this,o,Array.prototype.slice.call(arguments)),s=r(this,e),a=Array.prototype[o].apply(this,arguments),this._ractive.setting=!0,c=this._ractive.wrappers.length;c--;)u=this._ractive.wrappers[c],t.start(u.root),i(u,this,o,s),t.end()
return this._ractive.setting=!1,a}
e(u,o,{value:s})}),o={},o.__proto__?(s=function(t){t.__proto__=u},a=function(t){t.__proto__=Array.prototype}):(s=function(t){var n,r
for(n=c.length;n--;)r=c[n],e(t,r,{value:u[r],configurable:!0})},a=function(t){var e
for(e=c.length;e--;)delete t[c[e]]}),s.unpatch=a,s}(C,c,M,P,V),q=function(t,e,n){var r,i,o
return r={filter:function(t){return e(t)&&(!t._ractive||!t._ractive.setting)},wrap:function(t,e,n){return new i(t,e,n)}},i=function(e,r,i){this.root=e,this.value=r,this.keypath=i,r._ractive||(t(r,"_ractive",{value:{wrappers:[],instances:[],setting:!1},configurable:!0}),n(r)),r._ractive.instances[e._guid]||(r._ractive.instances[e._guid]=0,r._ractive.instances.push(e)),r._ractive.instances[e._guid]+=1,r._ractive.wrappers.push(this)},i.prototype={get:function(){return this.value},teardown:function(){var t,e,r,i,s
if(t=this.value,e=t._ractive,r=e.wrappers,i=e.instances,e.setting)return!1
if(s=r.indexOf(this),-1===s)throw new Error(o)
if(r.splice(s,1),r.length){if(i[this.root._guid]-=1,!i[this.root._guid]){if(s=i.indexOf(this.root),-1===s)throw new Error(o)
i.splice(s,1)}}else delete t._ractive,n.unpatch(this.value)}},o="Something went wrong in a rather interesting way",r}(c,I,W),z=function(t,e,n,r,i){function o(e,n,o){function s(e){var o,s
e.value=n,e.updating||(s=e.ractive,o=e.keypath,e.updating=!0,t.start(s),s._changes.push(o),r(s,o),i(s,o),t.end(),e.updating=!1)}var a,u,c,h,f,l
if(a=e.obj,u=e.prop,o&&!o.configurable){if("length"===u)return
throw new Error('Cannot use magic mode with property "'+u+'" - object is not configurable')}o&&(c=o.get,h=o.set),f=c||function(){return n},l=function(t){h&&h(t),n=c?c():t,l._ractiveWrappers.forEach(s)},l._ractiveWrappers=[e],Object.defineProperty(a,u,{get:f,set:l,enumerable:!0,configurable:!0})}var s,a
try{Object.defineProperty({},"test",{value:0})}catch(u){return!1}return s={filter:function(t,e,r){var i,o,s,a,u
return e?(i=e.split("."),o=i.pop(),s=i.join("."),(a=r._wrapped[s])&&!a.magic?!1:(u=r.get(s),n(u)&&/^[0-9]+$/.test(o)?!1:u&&("object"==typeof u||"function"==typeof u))):!1},wrap:function(t,e,n){return new a(t,e,n)}},a=function(t,e,n){var r,i,s,a
return this.magic=!0,this.ractive=t,this.keypath=n,this.value=e,r=n.split("."),this.prop=r.pop(),i=r.join("."),this.obj=i?t.get(i):t.data,s=this.originalDescriptor=Object.getOwnPropertyDescriptor(this.obj,this.prop),s&&s.set&&(a=s.set._ractiveWrappers)?void(-1===a.indexOf(this)&&a.push(this)):void o(this,e,s)},a.prototype={get:function(){return this.value},reset:function(t){this.updating||(this.updating=!0,this.obj[this.prop]=t,r(this.ractive,this.keypath),this.updating=!1)},set:function(t,n){this.updating||(this.obj[this.prop]||(this.updating=!0,this.obj[this.prop]=e(t),this.updating=!1),this.obj[this.prop][t]=n)},teardown:function(){var t,e,n,r,i
return this.updating?!1:(t=Object.getOwnPropertyDescriptor(this.obj,this.prop),e=t&&t.set,void(e&&(r=e._ractiveWrappers,i=r.indexOf(this),-1!==i&&r.splice(i,1),r.length||(n=this.obj[this.prop],Object.defineProperty(this.obj,this.prop,this.originalDescriptor||{writable:!0,enumerable:!0,configurable:!0}),this.obj[this.prop]=n))))}},s}(C,D,I,B,A),H=function(t,e){if(!t)return!1
var n,r
return n={filter:function(n,r,i){return t.filter(n,r,i)&&e.filter(n)},wrap:function(t,e,n){return new r(t,e,n)}},r=function(n,r,i){this.value=r,this.magic=!0,this.magicWrapper=t.wrap(n,r,i),this.arrayWrapper=e.wrap(n,r,i)},r.prototype={get:function(){return this.value},teardown:function(){this.arrayWrapper.teardown(),this.magicWrapper.teardown()},reset:function(t){return this.magicWrapper.reset(t)}},n}(z,q),$=function(t,e,n,r){function i(t,e){var n,r={}
if(!e)return t
e+="."
for(n in t)t.hasOwnProperty(n)&&(r[e+n]=t[n])
return r}function o(t){var e
return s[t]||(e=t?t+".":"",s[t]=function(n,r){var o
return"string"==typeof n?(o={},o[e+n]=r,o):"object"==typeof n?e?i(n,t):n:void 0}),s[t]}var s={}
return function(i,s,a,u){var c,h,f,l
for(c=i.adapt.length,h=0;c>h;h+=1){if(f=i.adapt[h],"string"==typeof f){if(!t[f])throw new Error('Missing adaptor "'+f+'"')
f=i.adapt[h]=t[f]}if(f.filter(a,s,i))return l=i._wrapped[s]=f.wrap(i,a,s,o(s)),l.value=a,a}return u||(i.magic?r.filter(a,s,i)?i._wrapped[s]=r.wrap(i,a,s):n.filter(a,s,i)&&(i._wrapped[s]=n.wrap(i,a,s)):i.modifyArrays&&e.filter(a,s,i)&&(i._wrapped[s]=e.wrap(i,a,s))),a}}(j,q,z,H),K=function(){function t(t,e){var n,r,i
for(n=e.split(".");n.length;)n.pop(),r=n.join("."),i=t._depsMap[r]||(t._depsMap[r]=[]),void 0===i[e]&&(i[e]=0,i[i.length]=e),i[e]+=1,e=r}return function(e){var n,r,i,o,s
i=e.root,o=e.keypath,s=e.priority,n=i._deps[s]||(i._deps[s]={}),r=n[o]||(n[o]=[]),r.push(e),e.registered=!0,o&&t(i,o)}}(),X=function(){function t(t,e){var n,r,i
for(n=e.split(".");n.length;)n.pop(),r=n.join("."),i=t._depsMap[r],i[e]-=1,i[e]||(i.splice(i.indexOf(e),1),i[e]=void 0),e=r}return function(e){var n,r,i,o,s
if(i=e.root,o=e.keypath,s=e.priority,n=i._deps[s][o],r=n.indexOf(e),-1===r||!e.registered)throw new Error("Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks")
n.splice(r,1),e.registered=!1,o&&t(i,o)}}(),G=function(t,e,n,r,i,o){var s,a
t.push(function(){s=t.get,a=t.set})
var u=function(t,e,n,r,o){this.root=t,this.keypath=e,this.priority=o,this.otherInstance=n,this.otherKeypath=r,i(this),this.value=s(this.root,this.keypath)}
return u.prototype={update:function(){var t
this.updating||this.counterpart&&this.counterpart.updating||(t=s(this.root,this.keypath),n(t)&&t._ractive&&t._ractive.setting||r(t,this.value)||(this.updating=!0,e.addInstance(this.otherInstance),a(this.otherInstance,this.otherKeypath,t),this.value=t,this.updating=!1))},reassign:function(t){o(this),o(this.counterpart),this.keypath=t,this.counterpart.otherKeypath=t,i(this),i(this.counterpart)},teardown:function(){o(this)}},function(t,e,n,r){var i,o,s,a,c,h
i=n+"="+r,s=t.bindings,s[i]||(s[i]=!0,o=t.instance,a=t.parentFragment.priority,c=new u(e,n,o,r,a),s.push(c),o.twoway&&(h=new u(o,r,e,n,1),s.push(h),c.counterpart=h,h.counterpart=c))}}(w,C,I,d,K,X),Z=function(t,e,n){function r(t,r,i,o,s){n(r,o,s,!0),e(r.component,t,i,o)}var i
return t.push(function(){i=t.get}),function(t,e){var n,o,s,a,u
if(n=t._parent,o=t.component.parentFragment,o.indexRefs&&void 0!==(u=o.indexRefs[e]))return t.component.indexRefBindings[e]=e,u
do if(o.context&&(s=o.context+"."+e,a=i(n,s),void 0!==a))return r(n,t,s,e,a),a
while(o=o.parent)
return a=i(n,e),void 0!==a?(r(n,t,e,e,a),a):void 0}}(w,G,U),J={FAILED_LOOKUP:!0},Q=function(t,e,n,r,i,o){function s(t,e,n){var s,u,c,h,f=t._cache
return void 0===f[e]?((u=t._computations[e])?s=u.value:(c=t._wrapped[e])?s=c.value:e?s=(h=t._evaluators[e])?h.value:a(t,e):(r(t,"",t.data),s=t.data),f[e]=s):s=f[e],s===o&&(s=t._parent&&!t.isolated?i(t,e,n):void 0),n&&n.evaluateWrapped&&(c=t._wrapped[e])&&(s=c.get()),s}function a(t,i){var a,u,c,h,f,l,p,d
return a=i.split("."),u=a.pop(),c=a.join("."),h=s(t,c),(p=t._wrapped[c])&&(h=p.get()),null!==h&&void 0!==h?((f=t._cacheMap[c])?-1===f.indexOf(i)&&f.push(i):t._cacheMap[c]=[i],"object"!=typeof h||u in h?(d=!e.call(h,u),l=d?n(h[u]):h[u],l=r(t,i,l,!1),t._cache[i]=l,l):t._cache[i]=o):void 0}return t.get=s,s}(w,k,L,$,Z,J),Y=function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&"function"==typeof console.warn.apply?function(){console.warn.apply(console,arguments)}:function(){}}(),te=function(){var t=Object.prototype.toString
return function(e){return"object"==typeof e&&"[object Object]"===t.call(e)}}(),ee=function(t,e,n,r,i){var o,s,a
return t.push(function(){s=t.interpolate}),a=/^([+-]?[0-9]+\.?(?:[0-9]+)?)(px|em|ex|%|in|cm|mm|pt|pc)$/,o={number:function(t,e){var n
return i(t)&&i(e)?(t=+t,e=+e,n=e-t,n?function(e){return t+e*n}:function(){return t}):null},array:function(t,e){var r,i,o,a
if(!n(t)||!n(e))return null
for(r=[],i=[],a=o=Math.min(t.length,e.length);a--;)i[a]=s(t[a],e[a])
for(a=o;a<t.length;a+=1)r[a]=t[a]
for(a=o;a<e.length;a+=1)r[a]=e[a]
return function(t){for(var e=o;e--;)r[e]=i[e](t)
return r}},object:function(t,n){var i,o,a,u,c
if(!r(t)||!r(n))return null
i=[],u={},a={}
for(c in t)e.call(t,c)&&(e.call(n,c)?(i.push(c),a[c]=s(t[c],n[c])):u[c]=t[c])
for(c in n)e.call(n,c)&&!e.call(t,c)&&(u[c]=n[c])
return o=i.length,function(t){for(var e,n=o;n--;)e=i[n],u[e]=a[e](t)
return u}},cssLength:function(t,e){var n,r,i,o,s,u,c,h
return 0!==t&&"string"!=typeof t||0!==e&&"string"!=typeof e?null:(n=a.exec(t),r=a.exec(e),i=n?n[2]:"",o=r?r[2]:"",i&&o&&i!==o?null:(c=i||o,s=n?+n[1]:0,u=r?+r[1]:0,h=u-s,h?function(t){return s+t*h+c}:function(){return s+c}))}}}(w,k,I,te,f),ne=function(t,e,n){function r(t){return function(){return t}}var i=function(t,i,o,s){if(t===i)return r(i)
if(s){if(o.interpolators[s])return o.interpolators[s](t,i)||r(i)
e('Missing "'+s+'" interpolator. You may need to download a plugin from [TODO]')}return n.number(t,i)||n.array(t,i)||n.object(t,i)||n.cssLength(t,i)||r(i)}
return t.interpolate=i,i}(w,Y,ee),re=function(t,e,n,r){var i=function(t){var e
this.startTime=Date.now()
for(e in t)t.hasOwnProperty(e)&&(this[e]=t[e])
this.interpolator=n(this.from,this.to,this.root,this.interpolator),this.running=!0}
return i.prototype={tick:function(){var n,i,o,s,a,u
return u=this.keypath,this.running?(s=Date.now(),n=s-this.startTime,n>=this.duration?(null!==u&&(e.start(this.root),r(this.root,u,this.to),e.end()),this.step&&this.step(1,this.to),this.complete(this.to),a=this.root._animations.indexOf(this),-1===a&&t("Animation was not found"),this.root._animations.splice(a,1),this.running=!1,!1):(i=this.easing?this.easing(n/this.duration):n/this.duration,null!==u&&(o=this.interpolator(i),e.start(this.root),r(this.root,u,o),e.end()),this.step&&this.step(i,o),!0)):!1},stop:function(){var e
this.running=!1,e=this.root._animations.indexOf(this),-1===e&&t("Animation was not found"),this.root._animations.splice(e,1)}},i}(Y,C,ne,U),ie=function(t,e,n,r,i,o){function s(e,s,a,c){var h,f,l,p
return s&&(s=n(s)),null!==s&&(p=i(e,s)),r.abort(s,e),t(p,a)?(c.complete&&c.complete(c.to),u):(c.easing&&(h="function"==typeof c.easing?c.easing:e.easing[c.easing],"function"!=typeof h&&(h=null)),f=void 0===c.duration?400:c.duration,l=new o({keypath:s,from:p,to:a,root:e,duration:f,easing:h,interpolator:c.interpolator,step:c.step,complete:c.complete}),r.add(l),e._animations.push(l),l)}var a=function(){},u={stop:a}
return function(t,n,r){var i,o,u,c,h,f,l,p,d,g,v,m,y,b
if(i=new e(function(t){o=t}),"object"==typeof t){r=n||{},f=r.easing,l=r.duration,h=[],p=r.step,d=r.complete,(p||d)&&(v={},r.step=null,r.complete=null,g=function(t){return function(e,n){v[t]=n}})
for(u in t)t.hasOwnProperty(u)&&((p||d)&&(m=g(u),r={easing:f,duration:l},p&&(r.step=m)),r.complete=d?m:a,h.push(s(this,u,t[u],r)))
return(p||d)&&(b={easing:f,duration:l},p&&(b.step=function(t){p(t,v)}),d&&i.then(function(t){d(t,v)}),b.complete=o,y=s(this,null,null,b),h.push(y)),{stop:function(){for(var t;t=h.pop();)t.stop()
y&&y.stop()}}}return r=r||{},r.complete&&i.then(r.complete),r.complete=o,c=s(this,t,n,r),i.stop=function(){c.stop()},i}}(d,g,v,R,Q,re),oe=function(){return this.fragment.detach()},se=function(t){return this.el?this.fragment.find(t):null},ae=function(t,e,n){var r,i,o,s,a,u,c
if(t){for(r=n("div"),i=["matches","matchesSelector"],c=function(t){return function(e,n){return e[t](n)}},a=i.length;a--;){if(o=i[a],r[o])return c(o)
for(u=e.length;u--;)if(s=e[a]+o.substr(0,1).toUpperCase()+o.substring(1),r[s])return c(s)}return function(t,e){var n,r
for(n=(t.parentNode||t.document).querySelectorAll(e),r=n.length;r--;)if(n[r]===t)return!0
return!1}}}(u,m,a),ue=function(t){return function(e,n){var r=this._isComponentQuery?!this.selector||e.name===this.selector:t(e.node,this.selector)
return r?(this.push(e.node||e.instance),n||this._makeDirty(),!0):void 0}}(ae),ce=function(){var t,e,n
t=this._root[this._isComponentQuery?"liveComponentQueries":"liveQueries"],e=this.selector,n=t.indexOf(e),-1!==n&&(t.splice(n,1),t[e]=null)},he=function(){function t(t){var e
return(e=t.parentFragment)?e.owner:t.component&&(e=t.component.parentFragment)?e.owner:void 0}function e(e){var n,r
for(n=[e],r=t(e);r;)n.push(r),r=t(r)
return n}return function(t,n){var r,i,o,s,a,u,c,h,f,l
for(r=e(t.component||t._ractive.proxy),i=e(n.component||n._ractive.proxy),o=r[r.length-1],s=i[i.length-1];o&&o===s;)r.pop(),i.pop(),a=o,o=r[r.length-1],s=i[i.length-1]
if(o=o.component||o,s=s.component||s,f=o.parentFragment,l=s.parentFragment,f===l)return u=f.items.indexOf(o),c=l.items.indexOf(s),u-c||r.length-i.length
if(h=a.fragments)return u=h.indexOf(f),c=h.indexOf(l),u-c||r.length-i.length
throw new Error("An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!")}}(),fe=function(t){return function(e,n){var r
return e.compareDocumentPosition?(r=e.compareDocumentPosition(n),2&r?1:-1):t(e,n)}}(he),le=function(t,e){return function(){this.sort(this._isComponentQuery?e:t),this._dirty=!1}}(fe,he),pe=function(t){return function(){this._dirty||(t.addLiveQuery(this),this._dirty=!0)}}(C),de=function(t){var e=this.indexOf(this._isComponentQuery?t.instance:t);-1!==e&&this.splice(e,1)},ge=function(t,e,n,r,i,o){return function(s,a,u,c){var h=[]
return t(h,{selector:{value:a},live:{value:u},_isComponentQuery:{value:c},_test:{value:e}}),u?(t(h,{cancel:{value:n},_root:{value:s},_sort:{value:r},_makeDirty:{value:i},_remove:{value:o},_dirty:{value:!1,writable:!0}}),h):h}}(h,ue,ce,le,pe,de),ve=function(t){return function(e,n){var r,i
return this.el?(n=n||{},r=this._liveQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!1),i.live&&(r.push(e),r[e]=i),this.fragment.findAll(e,i),i)):[]}}(ge),me=function(t){return function(e,n){var r,i
return n=n||{},r=this._liveComponentQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!0),i.live&&(r.push(e),r[e]=i),this.fragment.findAllComponents(e,i),i)}}(ge),ye=function(t){return this.fragment.findComponent(t)},be=function(t){var e,n,r,i=this._subs[t]
if(i)for(e=Array.prototype.slice.call(arguments,1),n=0,r=i.length;r>n;n+=1)i[n].apply(this,e)},we=function(t,e,n,r){var i,o={}
t.push(function(){i=t.get})
var s=function(t,e){this.root=t,this.ref=e,this.parentFragment=o,t._unresolvedImplicitDependencies[e]=!0,t._unresolvedImplicitDependencies.push(this),n.addUnresolved(this)}
return s.prototype={resolve:function(){var t=this.root
r(t,this.ref),t._unresolvedImplicitDependencies[this.ref]=!1,e(t._unresolvedImplicitDependencies,this)},teardown:function(){n.removeUnresolved(this)}},s}(w,E,C,A),Ee=function(t,e,n){var r={isTopLevel:!0}
return function(i){var o
return i=t(i),o=e(this,i,r),this._captured&&this._captured[i]!==!0&&(this._captured.push(i),this._captured[i]=!0,void 0===o&&this._unresolvedImplicitDependencies[i]!==!0&&new n(this,i)),o}}(v,Q,we),_e=function(t){var e
return"undefined"!=typeof window&&document&&t?t.nodeType?t:"string"==typeof t&&(e=document.getElementById(t),!e&&document.querySelector&&(e=document.querySelector(t)),e&&e.nodeType)?e:t[0]&&t[0].nodeType?t[0]:null:null},xe=function(t){return function(e,n){if(e=t(e),n=t(n)||null,!e)throw new Error("You must specify a valid target to insert into")
e.insertBefore(this.detach(),n),this.fragment.pNode=this.el=e}}(_e),ke=function(t,e){var n,r,i,o
return n={},r=0,i=t.map(function(t,i){var s,a,u
a=r,u=e.length
do{if(s=e.indexOf(t,a),-1===s)return o=!0,-1
a=s+1}while(n[s]&&u>a)
return s===r&&(r+=1),s!==i&&(o=!0),n[s]=!0,s}),i.unchanged=!o,i},Oe=function(t,e){return function(n,r,i,o){var s
n._changes.push(r),s=function(e){e.type===t.REFERENCE?e.update():e.keypath===r&&e.type===t.SECTION&&!e.inverted&&e.docFrag?e.merge(i):e.update()},n._deps.forEach(function(t){var e=t[r]
e&&e.forEach(s)}),o||e(n,r+".length",!0)}}(F,A),Se=function(t,e,n,r,i,o,s){function a(t){return JSON.stringify(t)}function u(t){if(t===!0)return a
if("string"==typeof t)return c[t]||(c[t]=function(e){return e[t]}),c[t]
if("function"==typeof t)return t
throw new Error("The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)")}var c={}
return function(a,c,h){var f,l,p,d,g,v,m,y
if(f=this.get(a),!n(f)||!n(c))return this.set(a,c,h&&h.complete)
if(g=f.length===c.length,h&&h.compare){d=u(h.compare)
try{l=f.map(d),p=c.map(d)}catch(b){if(this.debug)throw b
e("Merge operation: comparison failed. Falling back to identity checking"),l=f,p=c}}else l=f,p=c
return v=o(l,p),m=new r(function(t){y=t}),t.start(this,y),i(this,a,c,!0),s(this,a,v,g),t.end(),h&&h.complete&&m.then(h.complete),m}}(C,Y,I,g,U,ke,Oe),Te=function(t,e,n){var r=function(t,e,n,r){var i=this
this.root=t,this.keypath=e,this.callback=n,this.defer=r.defer,this.debug=r.debug,this.proxy={update:function(){i.reallyUpdate()}},this.priority=0,this.context=r&&r.context?r.context:t}
return r.prototype={init:function(t){t!==!1?this.update():this.value=n(this.root,this.keypath)},update:function(){return this.defer&&this.ready?void t.addObserver(this.proxy):void this.reallyUpdate()},reallyUpdate:function(){var t,r
if(t=this.value,r=n(this.root,this.keypath),this.value=r,!this.updating){if(this.updating=!0,!e(r,t)||!this.ready)try{this.callback.call(this.context,r,t,this.keypath)}catch(i){if(this.debug||this.root.debug)throw i}this.updating=!1}}},r}(C,d,Q),Ae=function(t){return function(e,n){var r,i,o,s,a,u,c
for(r=n.split("."),s=[],u=function(n){var r,i
r=e._wrapped[n]?e._wrapped[n].get():e.get(n)
for(i in r)!r.hasOwnProperty(i)||"_ractive"===i&&t(r)||a.push(n+"."+i)},c=function(t){return t+"."+i};i=r.shift();)"*"===i?(a=[],s.forEach(u),s=a):s[0]?s=s.map(c):s[0]=i
return o={},s.forEach(function(t){o[t]=e.get(t)}),o}}(I),Ne=function(t,e,n,r){var i,o=/\*/
return i=function(t,e,n,r){this.root=t,this.callback=n,this.defer=r.defer,this.debug=r.debug,this.keypath=e,this.regex=new RegExp("^"+e.replace(/\./g,"\\.").replace(/\*/g,"[^\\.]+")+"$"),this.values={},this.defer&&(this.proxies=[]),this.priority="pattern",this.context=r&&r.context?r.context:t},i.prototype={init:function(t){var e,n
if(e=r(this.root,this.keypath),t!==!1)for(n in e)e.hasOwnProperty(n)&&this.update(n)
else this.values=e},update:function(e){var n
{if(!o.test(e))return this.defer&&this.ready?void t.addObserver(this.getProxy(e)):void this.reallyUpdate(e)
n=r(this.root,e)
for(e in n)n.hasOwnProperty(e)&&this.update(e)}},reallyUpdate:function(t){var r=n(this.root,t)
if(this.updating)return void(this.values[t]=r)
if(this.updating=!0,!e(r,this.values[t])||!this.ready){try{this.callback.call(this.context,r,this.values[t],t)}catch(i){if(this.debug||this.root.debug)throw i}this.values[t]=r}this.updating=!1},getProxy:function(t){var e=this
return this.proxies[t]||(this.proxies[t]={update:function(){e.reallyUpdate(t)}}),this.proxies[t]}},i}(C,d,Q,Ae),Ce=function(t,e,n,r,i){var o=/\*/,s={}
return function(a,u,c,h){var f,l
return u=t(u),h=h||s,o.test(u)?(f=new i(a,u,c,h),a._patternObservers.push(f),l=!0):f=new r(a,u,c,h),e(f),f.init(h.init),f.ready=!0,{cancel:function(){var t
l&&(t=a._patternObservers.indexOf(f),-1!==t&&a._patternObservers.splice(t,1)),n(f)}}}}(v,K,X,Te,Ne),Re=function(t,e){return function(n,r,i){var o,s,a,u
if(t(n)){i=r,s=n,o=[]
for(n in s)s.hasOwnProperty(n)&&(r=s[n],o.push(this.observe(n,r,i)))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}if("function"==typeof n)return i=r,r=n,n="",e(this,n,r,i)
if(a=n.split(" "),1===a.length)return e(this,n,r,i)
for(o=[],u=a.length;u--;)n=a[u],n&&o.push(e(this,n,r,i))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}}(te,Ce),Ie=function(t,e){var n,r
if(!e)if(t)this._subs[t]=[]
else for(t in this._subs)delete this._subs[t]
n=this._subs[t],n&&(r=n.indexOf(e),-1!==r&&n.splice(r,1))},Le=function(t,e){var n,r,i=this
if("object"==typeof t){n=[]
for(r in t)t.hasOwnProperty(r)&&n.push(this.on(r,t[r]))
return{cancel:function(){for(var t;t=n.pop();)t.cancel()}}}return this._subs[t]?this._subs[t].push(e):this._subs[t]=[e],{cancel:function(){i.off(t,e)}}},je=function(){var t
try{Object.create(null),t=Object.create}catch(e){t=function(){var t=function(){}
return function(e,n){var r
return null===e?{}:(t.prototype=e,r=new t,n&&Object.defineProperties(r,n),r)}}()}return t}(),Me=function(t,e){return function(n,r){var i,o,s,a,u
if(n.owner=r.owner,s=n.parent=n.owner.parentFragment,n.root=r.root,n.pNode=r.pNode,n.pElement=r.pElement,n.context=r.context,n.owner.type===t.SECTION&&(n.index=r.index),s&&(a=s.indexRefs)){n.indexRefs=e(null)
for(u in a)n.indexRefs[u]=a[u]}for(n.priority=s?s.priority+1:1,r.indexRef&&(n.indexRefs||(n.indexRefs={}),n.indexRefs[r.indexRef]=r.index),n.items=[],i=r.descriptor?r.descriptor.length:0,o=0;i>o;o+=1)n.items[n.items.length]=n.createItem({parentFragment:n,pElement:r.pElement,descriptor:r.descriptor[o],index:o})}}(F,je),Pe=function(t,e){return t.substr(0,e.length+1)===e+"."},Fe=function(t){return function(e,n){return e===n||t(e,n)}}(Pe),Be=function(t){return function(e,n,r){return e===n?r:t(e,n)?e.replace(n+".",r+"."):void 0}}(Pe),De=function(t,e){return function(n,r,i,o){n[r]&&!t(n[r],o)&&(n[r]=e(n[r],i,o))}}(Fe,Be),Ue=function(t){return function(e,n,r,i){void 0===this.html&&(t(this,"context",r,i),this.indexRefs&&void 0!==this.indexRefs[e]&&this.indexRefs[e]!==n&&(this.indexRefs[e]=n),this.items.forEach(function(t){t.reassign(e,n,r,i)}))}}(De),Ve=function(t,e){return{init:t,reassign:e}}(Me,Ue),We=function(t,e){function n(t){return o[t]||(o[t]=e(t))}var r,i,o={}
try{e("table").innerHTML="foo"}catch(s){r=!0,i={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}return function(e,o,s,a){var u,c,h=[]
if(e)for(r&&(c=i[o])?(u=n("DIV"),u.innerHTML=c[0]+e+c[1],u=u.querySelector(".x")):s===t.svg?(u=n("DIV"),u.innerHTML='<svg class="x">'+e+"</svg>",u=u.querySelector(".x")):(u=n(o),u.innerHTML=e);u.firstChild;)h.push(u.firstChild),a.appendChild(u.firstChild)
return h}}(s,a),qe=function(){var t,e=this.node
return e&&(t=e.parentNode)?(t.removeChild(e),e):void 0},ze=function(t,e){var n,r,i
return r=/</g,i=/>/g,n=function(e,n){this.type=t.TEXT,this.descriptor=e.descriptor,n&&(this.node=document.createTextNode(e.descriptor),n.appendChild(this.node))},n.prototype={detach:e,reassign:function(){},teardown:function(t){t&&this.detach()},firstNode:function(){return this.node},toString:function(){return(""+this.descriptor).replace(r,"&lt;").replace(i,"&gt;")}},n}(F,qe),He=function(t,e){return function(n){n.keypath?e(n):t.removeUnresolved(n)}}(C,X),$e=function(t){var e=function(e,n,r,i){this.root=e,this.ref=n,this.parentFragment=r,this.resolve=i,t.addUnresolved(this)}
return e.prototype={teardown:function(){t.removeUnresolved(this)}},e}(C),Ke=function(t,e,n,r,i){function o(t,e,r){var i,o,s
if(!a.test(t.toString()))return n(t,"_nowrap",{value:!0}),t
if(!t["_"+e._guid]){n(t,"_"+e._guid,{value:function(){var n,r,i,s
if(n=e._captured,n||(e._captured=[]),r=t.apply(e,arguments),e._captured.length)for(i=o.length;i--;)s=o[i],s.updateSoftDependencies(e._captured)
return e._captured=n,r},writable:!0})
for(i in t)t.hasOwnProperty(i)&&(t["_"+e._guid][i]=t[i])
t["_"+e._guid+"_evaluators"]=[]}return o=t["_"+e._guid+"_evaluators"],s=o.indexOf(r),-1===s&&o.push(r),t["_"+e._guid]}var s,a
return a=/this/,s=function(e,n,i,s,a){var u
this.evaluator=i,this.keypath=n,this.root=e,this.argNum=s,this.type=t.REFERENCE,this.priority=a,u=e.get(n),"function"==typeof u&&(u=o(u,e,i)),this.value=i.values[s]=u,r(this)},s.prototype={update:function(){var t=this.root.get(this.keypath)
"function"!=typeof t||t._nowrap||(t=o(t,this.root,this.evaluator)),e(t,this.value)||(this.evaluator.values[this.argNum]=t,this.evaluator.bubble(),this.value=t)},teardown:function(){i(this)}},s}(F,d,c,K,X),Xe=function(t,e,n){var r=function(t,n,r){this.root=t,this.keypath=n,this.priority=r.priority,this.evaluator=r,e(this)}
return r.prototype={update:function(){var e=this.root.get(this.keypath)
t(e,this.value)||(this.evaluator.bubble(),this.value=e)},teardown:function(){n(this)}},r}(d,K,X),Ge=function(t,e,n,r,i,o,s,a){function u(t,e){var n,r
if(t=t.replace(/\$\{([0-9]+)\}/g,"_$1"),h[t])return h[t]
for(r=[];e--;)r[e]="_"+e
return n=new Function(r.join(","),"return("+t+")"),h[t]=n,n}var c,h={}
return c=function(t,e,n,r,i,o){var a=this
a.root=t,a.uniqueString=n,a.keypath=e,a.priority=o,a.fn=u(r,i.length),a.values=[],a.refs=[],i.forEach(function(e,n){e&&(e.indexRef?a.values[n]=e.value:a.refs.push(new s(t,e.keypath,a,n,o)))}),a.selfUpdating=a.refs.length<=1},c.prototype={bubble:function(){this.selfUpdating?this.update():this.deferred||(t.addEvaluator(this),this.deferred=!0)},update:function(){var t
if(this.evaluating)return this
this.evaluating=!0
try{t=this.fn.apply(null,this.values)}catch(s){this.root.debug&&e('Error evaluating "'+this.uniqueString+'": '+s.message||s),t=void 0}return n(t,this.value)||(this.value=t,r(this.root,this.keypath),o(this.root,this.keypath,t,!0),i(this.root,this.keypath)),this.evaluating=!1,this},teardown:function(){for(;this.refs.length;)this.refs.pop().teardown()
r(this.root,this.keypath),this.root._evaluators[this.keypath]=null},refresh:function(){this.selfUpdating||(this.deferred=!0)
for(var t=this.refs.length;t--;)this.refs[t].update()
this.deferred&&(this.update(),this.deferred=!1)},updateSoftDependencies:function(t){var e,n,r
for(this.softRefs||(this.softRefs=[]),e=this.softRefs.length;e--;)r=this.softRefs[e],t[r.keypath]||(this.softRefs.splice(e,1),this.softRefs[r.keypath]=!1,r.teardown())
for(e=t.length;e--;)n=t[e],this.softRefs[n]||(r=new a(this.root,n,this),this.softRefs.push(r),this.softRefs[n]=!0)
this.selfUpdating=this.refs.length+this.softRefs.length<=1}},c}(C,Y,d,B,A,$,Ke,Xe),Ze=function(t,e,n,r,i){function o(t,e){return t.replace(/\$\{([0-9]+)\}/g,function(t,n){return e[n]?e[n].value||e[n].keypath:"undefined"})}function s(t){return"${"+t.replace(/[\.\[\]]/g,"-")+"}"}var a=function(r,i,o,s){var a,u,c,h=this
return a=r.root,this.root=a,this.callback=s,this.owner=r,this.str=o.s,this.args=c=[],this.unresolved=[],this.pending=0,u=i.indexRefs,o.r&&o.r.length?(o.r.forEach(function(r,o){var s,f,l
return u&&void 0!==(s=u[r])?void(c[o]={indexRef:r,value:s}):(f=e(a,r,i))?void(c[o]={keypath:f}):(c[o]=void 0,h.pending+=1,l=new n(a,r,i,function(e){h.resolve(o,e),t(h.unresolved,l)}),void h.unresolved.push(l))}),this.ready=!0,void this.bubble()):(this.resolved=this.ready=!0,void this.bubble())}
return a.prototype={bubble:function(){this.ready&&(this.uniqueString=o(this.str,this.args),this.keypath=s(this.uniqueString),this.createEvaluator(),this.callback(this.keypath))},teardown:function(){for(var t;t=this.unresolved.pop();)t.teardown()},resolve:function(t,e){this.args[t]={keypath:e},this.bubble(),this.resolved=!--this.pending},createEvaluator:function(){var t
this.root._evaluators[this.keypath]?this.root._evaluators[this.keypath].refresh():(t=new r(this.root,this.keypath,this.uniqueString,this.str,this.args,this.owner.priority),this.root._evaluators[this.keypath]=t,t.update())},reassign:function(t,e,n,r){var o
this.args.forEach(function(s){var a
s.keypath&&(a=i(s.keypath,n,r))?(s.keypath=a,o=!0):s.indexRef===t&&(s.value=e,o=!0)}),o&&this.bubble()}},a}(E,S,$e,Ge,Be),Je=function(t,e,n,r,i,o,s){var a=function(i,o,a){var c,h,f,l,p,d=this
return c=i.root,h=i.parentFragment,this.ref=o.r,this.root=i.root,this.mustache=i,this.callback=a,this.pending=0,this.unresolved=[],p=this.members=[],this.indexRefMembers=[],this.keypathObservers=[],this.expressionResolvers=[],o.m.forEach(function(o,a){var g,v,m,y,b,w
return"string"==typeof o?void(d.members[a]=o):o.t===t.REFERENCE?(g=o.n,v=h.indexRefs,v&&void 0!==(m=v[g])?(p[a]=m,void d.indexRefMembers.push({ref:g,index:a})):(l=!0,y=function(t){var e=new u(c,t,i.priority,d,a)
d.keypathObservers.push(e)},(f=n(c,g,h))?void y(f):(p[a]=void 0,d.pending+=1,b=new r(c,g,h,function(t){d.resolve(a,t),e(d.unresolved,b)}),d.unresolved.push(b),null))):(l=!0,d.pending+=1,w=new s(d,h,o,function(t){d.resolve(a,t),e(d.unresolved,w)}),void d.unresolved.push(w))}),l?(this.ready=!0,void this.bubble()):(f=this.getKeypath(),void a(f))}
a.prototype={getKeypath:function(){return this.ref+"."+this.members.join(".")},bubble:function(){this.ready&&!this.pending&&this.callback(this.getKeypath())},resolve:function(t,e){var n=new u(this.root,e,this.mustache.priority,this,t)
n.update(),this.keypathObservers.push(n),this.resolved=!--this.pending,this.bubble()},teardown:function(){for(var t;t=this.unresolved.pop();)t.teardown()},reassign:function(t,e){var n,r,i
for(r=this.indexRefMembers.length;r--;)i=this.indexRefMembers[r],i.ref===t&&(n=!0,this.members[i.index]=e)
n&&this.bubble()}}
var u=function(t,e,n,r,o){this.root=t,this.keypath=e,this.priority=n,this.resolver=r,this.index=o,i(this),this.update()}
return u.prototype={update:function(){var t=this.resolver
t.members[this.index]=this.root.get(this.keypath),t.bubble()},teardown:function(){o(this)}},a}(F,E,S,$e,K,X,Ze),Qe=function(t,e,n,r){return function(i,o){var s,a,u,c,h,f,l
h=o.parentFragment,f=o.descriptor,i.root=h.root,i.parentFragment=h,i.descriptor=o.descriptor,i.index=o.index||0,i.priority=h.priority,i.type=o.descriptor.t,l=function(t){i.resolve(t)},(s=f.r)&&(u=h.indexRefs,u&&void 0!==(c=u[s])?(i.indexRef=s,i.value=c,i.render(i.value)):(a=e(i.root,s,i.parentFragment),void 0!==a?l(a):(i.ref=s,t.addUnresolved(i)))),o.descriptor.x&&(i.resolver=new r(i,h,o.descriptor.x,l)),o.descriptor.kx&&(i.resolver=new n(i,o.descriptor.kx,l)),i.descriptor.n&&!i.hasOwnProperty("value")&&i.render(void 0)}}(C,S,Je,Ze),Ye=function(t,e){var n={evaluateWrapped:!0}
return function(){var r=e(this.root,this.keypath,n)
t(r,this.value)||(this.render(r),this.value=r)}}(d,Q),tn=function(t,e,n){return function(r){var i
if(r!==this.keypath){if(this.registered&&(n(this),this.type===t.SECTION))for(i=this.fragments.length;i--;)this.fragments[i].reassign(null,null,this.keypath,r)
this.keypath=r,e(this),this.update()}}}(F,K,X),en=function(t){return function(e,n,r,i){var o,s
if(this.resolver?this.resolver.reassign(e,n,r,i):this.keypath?(o=t(this.keypath,r,i),o&&this.resolve(o)):void 0!==e&&this.indexRef===e&&(this.value=n,this.render(n)),this.fragments)for(s=this.fragments.length;s--;)this.fragments[s].reassign(e,n,r,i)}}(Be),nn=function(t,e,n,r){return{init:t,update:e,resolve:n,reassign:r}}(Qe,Ye,tn,en),rn=function(t,e,n,r){var i,o,s
return o=/</g,s=/>/g,i=function(e,r){this.type=t.INTERPOLATOR,r&&(this.node=document.createTextNode(""),r.appendChild(this.node)),n.init(this,e)},i.prototype={update:n.update,resolve:n.resolve,reassign:n.reassign,detach:r,teardown:function(t){t&&this.detach(),e(this)},render:function(t){this.node&&(this.node.data=void 0==t?"":t)},firstNode:function(){return this.node},toString:function(){var t=void 0!=this.value?""+this.value:""
return t.replace(o,"&lt;").replace(s,"&gt;")}},i}(F,He,nn,qe),on=function(){var t=[]
return function(e){var n,r,i,o,s,a,u,c,h=this
for(n=this.parentFragment,s=[],e.forEach(function(e,n){var i,o,a,u
return e===n?void(s[e]=h.fragments[n]):(void 0===r&&(r=n),-1===e?void t.push(h.fragments[n]):(i=h.fragments[n],o=e-n,a=h.keypath+"."+n,u=h.keypath+"."+e,i.reassign(h.descriptor.i,n,e,o,a,u),void(s[e]=i)))});u=t.pop();)u.teardown(!0)
if(void 0===r&&(r=this.length),this.length=o=this.root.get(this.keypath).length,o!==r){for(a={descriptor:this.descriptor.f,root:this.root,pNode:n.pNode,owner:this},this.descriptor.i&&(a.indexRef=this.descriptor.i),i=r;o>i;i+=1)(u=s[i])?this.docFrag.appendChild(u.detach(!1)):(a.context=this.keypath+"."+i,a.index=i,u=this.createFragment(a)),this.fragments[i]=u
c=n.findNextNode(this),n.pNode.insertBefore(this.docFrag,c)}}}(),sn=function(t,e){function n(t,e,n){var r,i,o
if(i=e.length,i<t.length)for(o=t.fragments.splice(i,t.length-i);o.length;)o.pop().teardown(!0)
else if(i>t.length)for(r=t.length;i>r;r+=1)n.context=t.keypath+"."+r,n.index=r,t.descriptor.i&&(n.indexRef=t.descriptor.i),t.fragments[r]=t.createFragment(n)
t.length=i}function r(t,e,n){var r,i,o,s
for(o=t.hasKey||(t.hasKey={}),i=t.fragments.length;i--;)s=t.fragments[i],s.index in e||(t.fragments[i].teardown(!0),t.fragments.splice(i,1),o[s.index]=!1)
for(r in e)o[r]||(n.context=t.keypath+"."+r,n.index=r,t.descriptor.i&&(n.indexRef=t.descriptor.i),t.fragments.push(t.createFragment(n)),o[r]=!0)
t.length=t.fragments.length}function i(t,e){t.length||(e.context=t.keypath,e.index=0,t.fragments[0]=t.createFragment(e),t.length=1)}function o(e,n,r,i){var o,s,a,u
if(s=t(n)&&0===n.length,o=r?s||!n:n&&!s){if(e.length||(i.index=0,e.fragments[0]=e.createFragment(i),e.length=1),e.length>1)for(a=e.fragments.splice(1);u=a.pop();)u.teardown(!0)}else e.length&&(e.teardownFragments(!0),e.length=0)}return function(s,a){var u={descriptor:s.descriptor.f,root:s.root,pNode:s.parentFragment.pNode,pElement:s.parentFragment.pElement,owner:s}
return s.descriptor.n?void o(s,a,!0,u):void(t(a)?n(s,a,u):e(a)||"function"==typeof a?s.descriptor.i?r(s,a,u):i(s,u):o(s,a,!1,u))}}(I,te),an=function(t,e){return function(n){var r,i;(i=this.root._wrapped[this.keypath])&&(n=i.get()),this.rendering||(this.rendering=!0,e(this,n),this.rendering=!1,(!this.docFrag||this.docFrag.childNodes.length)&&!this.initialising&&t&&(r=this.parentFragment.findNextNode(this),r&&r.parentNode===this.parentFragment.pNode?this.parentFragment.pNode.insertBefore(this.docFrag,r):this.parentFragment.pNode.appendChild(this.docFrag)))}}(u,sn),un=function(t,e,n,r){var i,o,s,a,u
for(s=t.descriptor.i,i=e;n>i;i+=1)o=t.fragments[i],a=t.keypath+"."+(i-r),u=t.keypath+"."+i,o.index=i,o.reassign(s,i,a,u)},cn=function(t){function e(t){t.teardown(!0)}function n(t,e,n){var r,i,o
for(t.rendering=!0,r={descriptor:t.descriptor.f,root:t.root,pNode:t.parentFragment.pNode,owner:t,indexRef:t.descriptor.i},i=e;n>i;i+=1)r.context=t.keypath+"."+i,r.index=i,t.fragments[i]=t.createFragment(r)
o=t.fragments[n]?t.fragments[n].firstNode():t.parentFragment.findNextNode(t),t.parentFragment.pNode.insertBefore(t.docFrag,o),t.rendering=!1}return function(r){var i,o,s,a,u,c=this
if(i=r.balance){if(o=r.start,c.length+=i,0>i)return c.fragments.splice(o,-i).forEach(e),void t(c,o,c.length,i)
s=o+r.removed,a=o+r.added,u=[s,0],u.length+=i,c.fragments.splice.apply(c.fragments,u),t(c,a,c.length,i),n(c,s,a)}}}(un),hn=function(t,e,n,r,i,o,s){var a,u
return s.push(function(){u=s.DomFragment}),a=function(n,r){this.type=t.SECTION,this.inverted=!!n.descriptor.n,this.fragments=[],this.length=0,r&&(this.docFrag=document.createDocumentFragment()),this.initialising=!0,e.init(this,n),r&&r.appendChild(this.docFrag),this.initialising=!1},a.prototype={update:e.update,resolve:e.resolve,reassign:e.reassign,splice:i,merge:n,detach:function(){var t,e
if(this.docFrag){for(e=this.fragments.length,t=0;e>t;t+=1)this.docFrag.appendChild(this.fragments[t].detach())
return this.docFrag}},teardown:function(t){this.teardownFragments(t),o(this)},firstNode:function(){return this.fragments[0]?this.fragments[0].firstNode():this.parentFragment.findNextNode(this)},findNextNode:function(t){return this.fragments[t.index+1]?this.fragments[t.index+1].firstNode():this.parentFragment.findNextNode(this)},teardownFragments:function(t){for(var e;e=this.fragments.shift();)e.teardown(t)},render:r,createFragment:function(t){var e=new u(t)
return this.docFrag&&this.docFrag.appendChild(e.docFrag),e},toString:function(){var t,e,n
for(t="",e=0,n=this.length,e=0;n>e;e+=1)t+=this.fragments[e].toString()
return t},find:function(t){var e,n,r
for(n=this.fragments.length,e=0;n>e;e+=1)if(r=this.fragments[e].find(t))return r
return null},findAll:function(t,e){var n,r
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAll(t,e)},findComponent:function(t){var e,n,r
for(n=this.fragments.length,e=0;n>e;e+=1)if(r=this.fragments[e].findComponent(t))return r
return null},findAllComponents:function(t,e){var n,r
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAllComponents(t,e)}},a}(F,nn,on,an,cn,He,w),fn=function(t,e,n,r,i){var o=function(e,r){this.type=t.TRIPLE,r&&(this.nodes=[],this.docFrag=document.createDocumentFragment()),this.initialising=!0,n.init(this,e),r&&r.appendChild(this.docFrag),this.initialising=!1}
return o.prototype={update:n.update,resolve:n.resolve,reassign:n.reassign,detach:function(){var t,e
if(this.docFrag){for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e])
return this.docFrag}},teardown:function(t){t&&(this.detach(),this.docFrag=this.nodes=null),i(this)},firstNode:function(){return this.nodes[0]?this.nodes[0]:this.parentFragment.findNextNode(this)},render:function(t){var e,n
if(this.nodes){for(;this.nodes.length;)e=this.nodes.pop(),e.parentNode.removeChild(e)
if(!t)return void(this.nodes=[])
n=this.parentFragment.pNode,this.nodes=r(t,n.tagName,n.namespaceURI,this.docFrag),this.initialising||n.insertBefore(this.docFrag,this.parentFragment.findNextNode(this)),"SELECT"===n.tagName&&n._ractive&&n._ractive.binding&&n._ractive.binding.update()}},toString:function(){return void 0!=this.value?this.value:""},find:function(t){var n,r,i,o
for(r=this.nodes.length,n=0;r>n;n+=1)if(i=this.nodes[n],1===i.nodeType){if(e(i,t))return i
if(o=i.querySelector(t))return o}return null},findAll:function(t,n){var r,i,o,s,a,u
for(i=this.nodes.length,r=0;i>r;r+=1)if(o=this.nodes[r],1===o.nodeType&&(e(o,t)&&n.push(o),s=o.querySelectorAll(t)))for(a=s.length,u=0;a>u;u+=1)n.push(s[u])}},o}(F,ae,nn,We,He),ln=function(t){return function(e,n){return e.a&&e.a.xmlns?e.a.xmlns:"svg"===e.e?t.svg:n.namespaceURI||t.html}}(s),pn=function(){var t,e,n,r
return t="altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath vkern".split(" "),e="attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" "),n=function(t){for(var e={},n=t.length;n--;)e[t[n].toLowerCase()]=t[n]
return e},r=n(t.concat(e)),function(t){var e=t.toLowerCase()
return r[e]||e}}(),dn=function(t,e){return function(n,r){var i,o
if(i=r.indexOf(":"),-1===i||(o=r.substr(0,i),"xmlns"===o))n.name=n.element.namespace!==t.html?e(r):r,n.lcName=n.name.toLowerCase()
else if(r=r.substring(i+1),n.name=e(r),n.lcName=n.name.toLowerCase(),n.namespace=t[o.toLowerCase()],!n.namespace)throw'Unknown namespace ("'+o+'")'}}(s,pn),gn=function(t){return function(e,n){var r,i=null===n.value?"":n.value;(r=n.pNode)&&(e.namespace?r.setAttributeNS(e.namespace,n.name,i):"style"===n.name&&r.style.setAttribute?r.style.setAttribute("cssText",i):"class"!==n.name||r.namespaceURI&&r.namespaceURI!==t.html?r.setAttribute(n.name,i):r.className=i,"id"===e.name&&(n.root.nodes[n.value]=r),"value"===e.name&&(r._ractive.value=n.value)),e.value=n.value}}(s),vn=function(t){var e={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"}
return function(n,r){var i
!n.pNode||n.namespace||r.pNode.namespaceURI&&r.pNode.namespaceURI!==t.html||(i=e[n.name]||n.name,void 0!==r.pNode[i]&&(n.propertyName=i),("boolean"==typeof r.pNode[i]||"value"===i)&&(n.useProperty=!0))}}(s),mn=function(t){return function(e){var n,r
return n=e.fragment.items,1===n.length&&(r=n[0],r.type===t.INTERPOLATOR&&(r.keypath||r.ref))?r:void 0}}(F),yn=function(t){return function(e,n){var r
if(!t(e)||!t(n))return!1
if(e.length!==n.length)return!1
for(r=e.length;r--;)if(e[r]!==n[r])return!1
return!0}}(I),bn=function(t,e,n,r,i,o){var s,a,u,c,h,f,l,p,d,g,v,m,y,b,w='For two-way binding to work, attribute value must be a single interpolator (e.g. value="{{foo}}")',E="You cannot set up two-way binding against an expression "
return s=function(){var t,n,r,i=this.pNode
return(t=this.interpolator)?t.keypath&&"${"===t.keypath.substr?(e(E+t.keypath),!1):(t.keypath||t.resolve(t.descriptor.r),this.keypath=t.keypath,(n=h(this))?(i._ractive.binding=this.element.binding=n,this.twoway=!0,r=this.root._twowayBindings[this.keypath]||(this.root._twowayBindings[this.keypath]=[]),r.push(n),!0):!1):(e(w),!1)},a=function(){t.start(this._ractive.root),this._ractive.binding.update(),t.end()},u={evaluateWrapped:!0},c=function(){var t=i(this._ractive.root,this._ractive.binding.keypath,u)
this.value=void 0==t?"":t},h=function(t){var e=t.pNode
if("SELECT"===e.tagName)return e.multiple?new l(t,e):new p(t,e)
if("checkbox"===e.type||"radio"===e.type){if("name"===t.propertyName){if("checkbox"===e.type)return new g(t,e)
if("radio"===e.type)return new d(t,e)}return"checked"===t.propertyName?new v(t,e):null}if("value"!==t.lcName)throw new Error("Attempted to set up an illegal two-way binding. This error is unexpected - if you can, please file an issue at https://github.com/RactiveJS/Ractive, or contact @RactiveJS on Twitter. Thanks!")
return"file"===e.type?new m(t,e):e.getAttribute("contenteditable")?new y(t,e):new b(t,e)},l=function(t,e){var n
f(this,t,e),e.addEventListener("change",a,!1),n=i(this.root,this.keypath),void 0===n&&this.update()},l.prototype={value:function(){var t,e,n,r,i,o
for(t=[],e=this.node.options,r=e.length,n=0;r>n;n+=1)i=e[n],i.selected&&(o=i._ractive?i._ractive.value:i.value,t.push(o))
return t},update:function(){var e,r,i
return e=this.attr,r=e.value,i=this.value(),void 0!==r&&n(i,r)||(t.addBinding(e),e.value=i,o(this.root,this.keypath,i),t.trigger()),this},deferUpdate:function(){this.deferred!==!0&&(t.addAttribute(this),this.deferred=!0)},teardown:function(){this.node.removeEventListener("change",a,!1)}},p=function(t,e){var n
f(this,t,e),e.addEventListener("change",a,!1),n=i(this.root,this.keypath),void 0===n&&this.update()},p.prototype={value:function(){var t,e,n,r,i
for(t=this.node.options,n=t.length,e=0;n>e;e+=1)if(r=t[e],t[e].selected)return i=r._ractive?r._ractive.value:r.value},update:function(){var e=this.value()
return t.addBinding(this.attr),this.attr.value=e,o(this.root,this.keypath,e),t.trigger(),this},deferUpdate:function(){this.deferred!==!0&&(t.addAttribute(this),this.deferred=!0)},teardown:function(){this.node.removeEventListener("change",a,!1)}},d=function(e,n){var r
this.radioName=!0,f(this,e,n),n.name="{{"+e.keypath+"}}",n.addEventListener("change",a,!1),n.attachEvent&&n.addEventListener("click",a,!1),r=i(this.root,this.keypath),void 0!==r?n.checked=r==n._ractive.value:t.addRadio(this)},d.prototype={value:function(){return this.node._ractive?this.node._ractive.value:this.node.value},update:function(){var e=this.node
e.checked&&(t.addBinding(this.attr),o(this.root,this.keypath,this.value()),t.trigger())},teardown:function(){this.node.removeEventListener("change",a,!1),this.node.removeEventListener("click",a,!1)}},g=function(e,n){var r,o
this.checkboxName=!0,f(this,e,n),n.name="{{"+this.keypath+"}}",n.addEventListener("change",a,!1),n.attachEvent&&n.addEventListener("click",a,!1),r=i(this.root,this.keypath),void 0!==r?(o=-1!==r.indexOf(n._ractive.value),n.checked=o):t.addCheckbox(this)},g.prototype={changed:function(){return this.node.checked!==!!this.checked},update:function(){this.checked=this.node.checked,t.addBinding(this.attr),o(this.root,this.keypath,r(this.root,this.keypath)),t.trigger()},teardown:function(){this.node.removeEventListener("change",a,!1),this.node.removeEventListener("click",a,!1)}},v=function(t,e){f(this,t,e),e.addEventListener("change",a,!1),e.attachEvent&&e.addEventListener("click",a,!1)},v.prototype={value:function(){return this.node.checked},update:function(){t.addBinding(this.attr),o(this.root,this.keypath,this.value()),t.trigger()},teardown:function(){this.node.removeEventListener("change",a,!1),this.node.removeEventListener("click",a,!1)}},m=function(t,e){f(this,t,e),e.addEventListener("change",a,!1)},m.prototype={value:function(){return this.attr.pNode.files},update:function(){o(this.attr.root,this.attr.keypath,this.value()),t.trigger()},teardown:function(){this.node.removeEventListener("change",a,!1)}},y=function(t,e){f(this,t,e),e.addEventListener("change",a,!1),this.root.lazy||(e.addEventListener("input",a,!1),e.attachEvent&&e.addEventListener("keyup",a,!1))},y.prototype={update:function(){t.addBinding(this.attr),o(this.root,this.keypath,this.node.innerHTML),t.trigger()},teardown:function(){this.node.removeEventListener("change",a,!1),this.node.removeEventListener("input",a,!1),this.node.removeEventListener("keyup",a,!1)}},b=function(t,e){f(this,t,e),e.addEventListener("change",a,!1),this.root.lazy||(e.addEventListener("input",a,!1),e.attachEvent&&e.addEventListener("keyup",a,!1)),this.node.addEventListener("blur",c,!1)},b.prototype={value:function(){var t=this.attr.pNode.value
return+t+""===t&&-1===t.indexOf("e")&&(t=+t),t},update:function(){var e=this.attr,n=this.value()
t.addBinding(e),o(e.root,e.keypath,n),t.trigger()},teardown:function(){this.node.removeEventListener("change",a,!1),this.node.removeEventListener("input",a,!1),this.node.removeEventListener("keyup",a,!1),this.node.removeEventListener("blur",c,!1)}},f=function(t,e,n){t.attr=e,t.node=n,t.root=e.root,t.keypath=e.keypath},s}(C,Y,yn,x,Q,U),wn=function(t,e,n){var r,i,o,s,a,u,c,h,f,l,p,d
return r=function(){var t
if(!this.ready)return this
if(t=this.pNode,"SELECT"===t.tagName&&"value"===this.lcName)return this.update=o,this.deferredUpdate=s,this.update()
if(this.isFileInputValue)return this.update=i,this
if(this.twoway&&"name"===this.lcName){if("radio"===t.type)return this.update=c,this.update()
if("checkbox"===t.type)return this.update=h,this.update()}return"style"===this.lcName&&t.style.setAttribute?(this.update=f,this.update()):"class"!==this.lcName||t.namespaceURI&&t.namespaceURI!==e.html?t.getAttribute("contenteditable")&&"value"===this.lcName?(this.update=p,this.update()):(this.update=d,this.update()):(this.update=l,this.update())},i=function(){return this},s=function(){this.deferredUpdate=this.pNode.multiple?u:a,this.deferredUpdate()},o=function(){return t.addSelectValue(this),this},a=function(){var t,e,n,r,i=this.fragment.getValue()
for(this.value=this.pNode._ractive.value=i,t=this.pNode.options,r=t.length;r--;)if(e=t[r],n=e._ractive?e._ractive.value:e.value,n==i)return e.selected=!0,this
return this},u=function(){var t,e,r,i,o=this.fragment.getValue()
for(n(o)||(o=[o]),t=this.pNode.options,e=t.length;e--;)r=t[e],i=r._ractive?r._ractive.value:r.value,r.selected=-1!==o.indexOf(i)
return this.value=o,this},c=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),t.checked=e==t._ractive.value,this},h=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),n(e)?(t.checked=-1!==e.indexOf(t._ractive.value),this):(t.checked=e==t._ractive.value,this)},f=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),void 0===e&&(e=""),e!==this.value&&(t.style.setAttribute("cssText",e),this.value=e),this},l=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),void 0===e&&(e=""),e!==this.value&&(t.className=e,this.value=e),this},p=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),void 0===e&&(e=""),e!==this.value&&(this.active||(t.innerHTML=e),this.value=e),this},d=function(){var t,e,n
if(t=this.pNode,e=this.fragment.getValue(),this.isValueAttribute&&(t._ractive.value=e),void 0==e&&(e=""),e!==this.value){if(this.useProperty)return this.active||(t[this.propertyName]=e),"OPTION"===t.tagName&&t.selected&&(n=this.element.select.binding)&&n.update(),this.value=e,this
if(this.namespace)return t.setAttributeNS(this.namespace,this.name,e),this.value=e,this
"id"===this.lcName&&(void 0!==this.value&&(this.root.nodes[this.value]=void 0),this.root.nodes[e]=t),t.setAttribute(this.name,e),this.value=e}return this},r}(C,s,I),En=function(t){var e
return e=this.str.substr(this.pos,t.length),e===t?(this.pos+=t.length,t):null},_n=function(){var t=/^\s+/
return function(){var e=t.exec(this.remaining())
return e?(this.pos+=e[0].length,e[0]):null}}(),xn=function(t){return function(e){var n=t.exec(e.str.substring(e.pos))
return n?(e.pos+=n[0].length,n[1]||n[0]):null}},kn=function(t){var e,n,r
return e=t(/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/),n=t(/^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/),r=t(/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/),function(t){return function(i){var o,s,a,u
for(o=i.pos,s='"',a=!1;!a;)u=e(i)||n(i)||i.getStringMatch(t),u?s+='"'===u?'\\"':"\\'"===u?"'":u:(u=r(i),u?s+="\\u"+("000"+u.charCodeAt(1).toString(16)).slice(-4):a=!0)
return s+='"',JSON.parse(s)}}}(xn),On=function(t){return t('"')}(kn),Sn=function(t){return t("'")}(kn),Tn=function(t,e,n){return function(r){var i,o
return i=r.pos,r.getStringMatch('"')?(o=n(r),r.getStringMatch('"')?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):r.getStringMatch("'")?(o=e(r),r.getStringMatch("'")?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):null}}(F,On,Sn),An=function(t,e){var n=e(/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/)
return function(e){var r
return(r=n(e))?{t:t.NUMBER_LITERAL,v:r}:null}}(F,xn),Nn=function(t){return t(/^[a-zA-Z_$][a-zA-Z_$0-9]*/)}(xn),Cn=function(t,e,n){var r=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/
return function(i){var o
return(o=t(i))?r.test(o.v)?o.v:'"'+o.v.replace(/"/g,'\\"')+'"':(o=e(i))?o.v:(o=n(i))?o:void 0}}(Tn,An,Nn),Rn=function(t,e,n,r){function i(t){var e,n,i
return t.allowWhitespace(),(e=r(t))?(i={key:e},t.allowWhitespace(),t.getStringMatch(":")?(t.allowWhitespace(),(n=t.getToken())?(i.value=n.v,i):null):null):null}var o,s,a,u,c,h
return s={"true":!0,"false":!1,undefined:void 0,"null":null},a=new RegExp("^(?:"+Object.keys(s).join("|")+")"),u=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,c=/\$\{([^\}]+)\}/g,h=/^\$\{([^\}]+)\}/,o=function(t,e){this.str=t,this.values=e,this.pos=0,this.result=this.getToken()},o.prototype={remaining:function(){return this.str.substring(this.pos)},getStringMatch:t,getToken:function(){return this.allowWhitespace(),this.getPlaceholder()||this.getSpecial()||this.getNumber()||this.getString()||this.getObject()||this.getArray()},getPlaceholder:function(){var t
return this.values?(t=h.exec(this.remaining()))&&this.values.hasOwnProperty(t[1])?(this.pos+=t[0].length,{v:this.values[t[1]]}):void 0:null},getSpecial:function(){var t
return(t=a.exec(this.remaining()))?(this.pos+=t[0].length,{v:s[t[0]]}):void 0},getNumber:function(){var t
return(t=u.exec(this.remaining()))?(this.pos+=t[0].length,{v:+t[0]}):void 0},getString:function(){var t,e=n(this)
return e&&(t=this.values)?{v:e.v.replace(c,function(e,n){return t[n]||n})}:e},getObject:function(){var t,e
if(!this.getStringMatch("{"))return null
for(t={};e=i(this);){if(t[e.key]=e.value,this.allowWhitespace(),this.getStringMatch("}"))return{v:t}
if(!this.getStringMatch(","))return null}return null},getArray:function(){var t,e
if(!this.getStringMatch("["))return null
for(t=[];e=this.getToken();){if(t.push(e.v),this.getStringMatch("]"))return{v:t}
if(!this.getStringMatch(","))return null}return null},allowWhitespace:e},function(t,e){var n=new o(t,e)
return n.result?{value:n.result.v,remaining:n.remaining()}:null}}(En,_n,Tn,Cn),In=function(t,e,n){function r(t){return"string"==typeof t?t:JSON.stringify(t)}var i=function(e){this.type=t.INTERPOLATOR,n.init(this,e)}
return i.prototype={update:n.update,resolve:n.resolve,reassign:n.reassign,render:function(t){this.value=t,this.parentFragment.bubble()},teardown:function(){e(this)},toString:function(){return void 0==this.value?"":r(this.value)}},i}(F,He,nn),Ln=function(t,e,n,r,i){var o,s
return i.push(function(){s=i.StringFragment}),o=function(n){this.type=t.SECTION,this.fragments=[],this.length=0,e.init(this,n)},o.prototype={update:e.update,resolve:e.resolve,reassign:e.reassign,teardown:function(){this.teardownFragments(),r(this)},teardownFragments:function(){for(;this.fragments.length;)this.fragments.shift().teardown()
this.length=0},bubble:function(){this.value=this.fragments.join(""),this.parentFragment.bubble()},render:function(t){var e;(e=this.root._wrapped[this.keypath])&&(t=e.get()),n(this,t),this.parentFragment.bubble()},createFragment:function(t){return new s(t)},toString:function(){return this.fragments.join("")}},o}(F,nn,sn,He,w),jn=function(t){var e=function(e){this.type=t.TEXT,this.text=e}
return e.prototype={toString:function(){return this.text},reassign:function(){},teardown:function(){}},e}(F),Mn=function(t,e){return function(){var n,r,i,o,s,a,u
if(!this.argsList||this.dirty){if(n={},r=0,o=this.root._guid,u=function(t){return t.map(function(t){var e,i,s
return t.text?t.text:t.fragments?t.fragments.map(function(t){return u(t.items)}).join(""):(e=o+"-"+r++,s=(i=t.root._wrapped[t.keypath])?i.value:t.value,n[e]=s,"${"+e+"}")}).join("")},i=u(this.items),a=e("["+i+"]",n))this.argsList=a.value
else{if(s="Could not parse directive arguments ("+this.toString()+"). If you think this is a bug, please file an issue at http://github.com/RactiveJS/Ractive/issues",this.root.debug)throw new Error(s)
t(s),this.argsList=[i]}this.dirty=!1}return this.argsList}}(Y,Rn),Pn=function(t,e,n,r,i,o,s,a){var u=function(t){n.init(this,t)}
return u.prototype={reassign:n.reassign,createItem:function(e){if("string"==typeof e.descriptor)return new o(e.descriptor)
switch(e.descriptor.t){case t.INTERPOLATOR:return new r(e)
case t.TRIPLE:return new r(e)
case t.SECTION:return new i(e)
default:throw"Something went wrong in a rather interesting way"}},bubble:function(){this.dirty=!0,this.owner.bubble()},teardown:function(){var t,e
for(t=this.items.length,e=0;t>e;e+=1)this.items[e].teardown()},getValue:function(){var e
return 1===this.items.length&&this.items[0].type===t.INTERPOLATOR&&(e=this.items[0].value,void 0!==e)?e:this.toString()},isSimple:function(){var e,n,r
if(void 0!==this.simple)return this.simple
for(e=this.items.length;e--;)if(n=this.items[e],n.type!==t.TEXT){if(n.type!==t.INTERPOLATOR)return this.simple=!1
if(r)return!1
r=!0}return this.simple=!0},toString:function(){return this.items.join("")},toJSON:function(){var t,n=this.getValue()
return"string"==typeof n&&(t=e(n),n=t?t.value:n),n},toArgsList:s},a.StringFragment=u,u}(F,Rn,Ve,In,Ln,jn,Mn,w),Fn=function(t,e,n,r,i,o,s,a,u){var c=function(t){return this.type=e.ATTRIBUTE,this.element=t.element,n(this,t.name),null===t.value||"string"==typeof t.value?void r(this,t):(this.root=t.root,this.pNode=t.pNode,this.parentFragment=this.element.parentFragment,this.fragment=new u({descriptor:t.value,root:this.root,owner:this}),this.interpolator=o(this),void(this.pNode&&("value"===this.name&&(this.isValueAttribute=!0,"INPUT"===this.pNode.tagName&&"file"===this.pNode.type&&(this.isFileInputValue=!0)),i(this,t),this.selfUpdating=this.fragment.isSimple(),this.ready=!0)))}
return c.prototype={bind:s,update:a,updateBindings:function(){this.keypath=this.interpolator.keypath||this.interpolator.ref,"name"===this.propertyName&&(this.pNode.name="{{"+this.keypath+"}}")},reassign:function(t,e,n,r){this.fragment&&(this.fragment.reassign(t,e,n,r),this.twoway&&this.updateBindings())},teardown:function(){var t
if(this.boundEvents)for(t=this.boundEvents.length;t--;)this.pNode.removeEventListener(this.boundEvents[t],this.updateModel,!1)
this.fragment&&this.fragment.teardown()},bubble:function(){this.selfUpdating?this.update():!this.deferred&&this.ready&&(t.addAttribute(this),this.deferred=!0)},toString:function(){var t,e
if(null===this.value)return this.name
if("value"!==this.name||"select"!==this.element.lcName)return"name"===this.name&&"input"===this.element.lcName&&(e=this.interpolator)?"name={{"+(e.keypath||e.ref)+"}}":this.fragment?(t=this.fragment.toString(),this.name+"="+JSON.stringify(t)):this.name+"="+JSON.stringify(this.value)}},c}(C,F,dn,gn,vn,mn,bn,wn,Pn),Bn=function(t){return function(e,n,r){var i=new t({element:e,name:n,value:r,root:e.root,pNode:e.node})
e.attributes.push(e.attributes[n]=i),"name"!==n&&i.update()}}(Fn),Dn=function(t){return function(e,n){var r
e.attributes=[]
for(r in n)n.hasOwnProperty(r)&&t(e,r,n[r])
return e.attributes}}(Bn),Un=function(t){for(var e=[],n=t.length;n--;)e[n]=t[n]
return e},Vn=function(t){return function(e,n){return e.matchingStaticNodes[n]||(e.matchingStaticNodes[n]=t(e.node.querySelectorAll(n))),e.matchingStaticNodes[n]}}(Un),Wn=function(t,e,n,r,i){function o(t){var e,n,i,o,s,a,u
i=t.node,e=t.root
do for(n=e._liveQueries,u=n.length;u--;)o=n[u],s=n[o],a=r(t,o),s.push.apply(s,a)
while(e=e._parent)}var s,a,u
return i.push(function(){s=i.DomFragment}),a=function(){var t=this.node,e=this.fragment.toString()
t.styleSheet?t.styleSheet.cssText=e:t.innerHTML=e},u=function(){this.node.type&&"text/javascript"!==this.node.type||t("Script tag was updated. This does not cause the code to be re-evaluated!"),this.node.text=this.fragment.toString()},function(t,r,i,c){return"script"===t.lcName||"style"===t.lcName?(t.fragment=new n({descriptor:i.f,root:t.root,owner:t}),void(c&&("script"===t.lcName?(t.bubble=u,t.node.text=t.fragment.toString()):(t.bubble=a,t.bubble())))):void("string"!=typeof i.f||r&&r.namespaceURI&&r.namespaceURI!==e.html?(t.fragment=new s({descriptor:i.f,root:t.root,pNode:r,owner:t,pElement:t}),c&&r.appendChild(t.fragment.docFrag)):(t.html=i.f,c&&(r.innerHTML=t.html,t.matchingStaticNodes={},o(t))))}}(Y,s,Pn,Vn,w),qn=function(t,e){var n=function(n,r,i){var o,s,a,u=this
if(u.root=r,u.node=i.node,o=n.n||n,"string"!=typeof o&&(s=new e({descriptor:o,root:r,owner:i}),o=s.toString(),s.teardown()),n.a?u.params=n.a:n.d&&(u.fragment=new e({descriptor:n.d,root:r,owner:i}),u.params=u.fragment.toArgsList(),u.fragment.bubble=function(){this.dirty=!0,u.params=this.toArgsList(),u.ready&&u.update()}),u.fn=r.decorators[o],!u.fn){if(a='Missing "'+o+'" decorator. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#decorators',r.debug)throw new Error(a)
t(a)}}
return n.prototype={init:function(){var t,e
if(this.params?(e=[this.node].concat(this.params),t=this.fn.apply(this.root,e)):t=this.fn.call(this.root,this.node),!t||!t.teardown)throw new Error("Decorator definition must return an object with a teardown method")
this.actual=t,this.ready=!0},update:function(){this.actual.update?this.actual.update.apply(this.root,this.params):(this.actual.teardown(!0),this.init())},teardown:function(t){this.actual.teardown(),!t&&this.fragment&&this.fragment.teardown()}},n}(Y,Pn),zn=function(t,e){return function(n,r,i){var o=new e(n,r,i)
o.fn&&(i.decorator=o,t.addDecorator(i.decorator))}}(C,qn),Hn=function(t,e){var n,r,i,o,s,a,u,c,h
return n=function(t,e,n,i){var o,s
o=t.node._ractive.events,s=o[e]||(o[e]=new r(t,e,i)),s.add(n)},r=function(e,n){var r
this.element=e,this.root=e.root,this.node=e.node,this.name=n,this.proxies=[],(r=this.root.events[n])?this.custom=r(this.node,h(n)):("on"+n in this.node||t('Missing "'+this.name+'" event. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#events'),this.node.addEventListener(n,c,!1))},r.prototype={add:function(t){this.proxies.push(new i(this.element,this.root,t))},teardown:function(){var t
for(this.custom?this.custom.teardown():this.node.removeEventListener(this.name,c,!1),t=this.proxies.length;t--;)this.proxies[t].teardown()},fire:function(t){for(var e=this.proxies.length;e--;)this.proxies[e].fire(t)}},i=function(t,n,r){var i
return this.root=n,i=r.n||r,this.n="string"==typeof i?i:new e({descriptor:r.n,root:this.root,owner:t}),r.a?(this.a=r.a,void(this.fire=s)):r.d?(this.d=new e({descriptor:r.d,root:this.root,owner:t}),void(this.fire=a)):void(this.fire=o)},i.prototype={teardown:function(){this.n.teardown&&this.n.teardown(),this.d&&this.d.teardown()},bubble:function(){}},o=function(t){this.root.fire(this.n.toString(),t)},s=function(t){this.root.fire.apply(this.root,[this.n.toString(),t].concat(this.a))},a=function(t){var e=this.d.toArgsList()
"string"==typeof e&&(e=e.substr(1,e.length-2)),this.root.fire.apply(this.root,[this.n.toString(),t].concat(e))},c=function(t){var e=this._ractive
e.events[t.type].fire({node:this,original:t,index:e.index,keypath:e.keypath,context:e.root.get(e.keypath)})},u={},h=function(t){return u[t]?u[t]:u[t]=function(e){var n=e.node._ractive
e.index=n.index,e.keypath=n.keypath,e.context=n.root.get(n.keypath),n.events[t].fire(e)}},n}(Y,Pn),$n=function(t){return function(e,n){var r,i,o
for(i in n)if(n.hasOwnProperty(i))for(o=i.split("-"),r=o.length;r--;)t(e,o[r],n[i])}}(Hn),Kn=function(t){var e,n,r,i,o
e=t.root
do for(n=e._liveQueries,r=n.length;r--;)i=n[r],o=n[i],o._test(t)&&(t.liveQueries||(t.liveQueries=[])).push(o)
while(e=e._parent)},Xn=function(){if(this._inited)throw new Error("Cannot initialize a transition more than once")
this._inited=!0,this._fn.apply(this.root,[this].concat(this.params))},Gn=function(t,e,n){var r,i
if(t)return r={},i=n("div").style,function(t){var n,o,s
if(!r[t])if(void 0!==i[t])r[t]=t
else for(s=t.charAt(0).toUpperCase()+t.substring(1),n=e.length;n--;)if(o=e[n],void 0!==i[o+s]){r[t]=o+s
break}return r[t]}}(u,m,a),Zn=function(t,e,n,r){var i
if(e)return i=window.getComputedStyle||t.getComputedStyle,function(t){var e,i,o,s,a
if(e=window.getComputedStyle(this.node),"string"==typeof t)return a=e[r(t)],"0px"===a&&(a=0),a
if(!n(t))throw new Error("Transition#getStyle must be passed a string, or an array of strings representing CSS properties")
for(i={},o=t.length;o--;)s=t[o],a=e[r(s)],"0px"===a&&(a=0),i[s]=a
return i}}(r,u,I,Gn),Jn=function(t){return function(e,n){var r
if("string"==typeof e)this.node.style[t(e)]=n
else for(r in e)e.hasOwnProperty(r)&&(this.node.style[t(r)]=e[r])
return this}}(Gn),Qn=function(t){return t.replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()})},Yn=function(t,e,n){function r(t){return t}var i=function(i){var o
this.duration=i.duration,this.step=i.step,this.complete=i.complete,"string"==typeof i.easing?(o=i.root.easing[i.easing],o||(t('Missing easing function ("'+i.easing+'"). You may need to download a plugin from [TODO]'),o=r)):o="function"==typeof i.easing?i.easing:r,this.easing=o,this.start=e(),this.end=this.start+this.duration,this.running=!0,n.add(this)}
return i.prototype={tick:function(t){var e,n
return this.running?t>this.end?(this.step&&this.step(1),this.complete&&this.complete(1),!1):(e=t-this.start,n=this.easing(e/this.duration),this.step&&this.step(n),!0):!1},stop:function(){this.abort&&this.abort(),this.running=!1}},i}(Y,b,R),tr=function(t){var e=new RegExp("^-(?:"+t.join("|")+")-")
return function(t){return t.replace(e,"")}}(m),er=function(t){var e=new RegExp("^(?:"+t.join("|")+")([A-Z])")
return function(t){var n
return t?(e.test(t)&&(t="-"+t),n=t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})):""}}(m),nr=function(t,e,n,r,i,o,s,a,u){var c,h,f,l,p,d,g,v={},m={}
if(t)return c=n("div").style,function(){void 0!==c.transition?(h="transition",f="transitionend",l=!0):void 0!==c.webkitTransition?(h="webkitTransition",f="webkitTransitionEnd",l=!0):l=!1}(),h&&(p=h+"Duration",d=h+"Property",g=h+"TimingFunction"),function(t,n,c,h,l,y){setTimeout(function(){var b,w,E,_
_=function(){w&&E&&y()},b=t.node.namespaceURI+t.node.tagName,t.node.style[d]=h.map(s).map(u).join(","),t.node.style[g]=u(c.easing||"linear"),t.node.style[p]=c.duration/1e3+"s",l=function(e){var n
n=h.indexOf(r(a(e.propertyName))),-1!==n&&h.splice(n,1),h.length||(t.root.fire(t.name+":end"),t.node.removeEventListener(f,l,!1),E=!0,_())},t.node.addEventListener(f,l,!1),setTimeout(function(){for(var a,u,p,d,g=h.length,y=[];g--;)d=h[g],a=b+d,v[a]?t.node.style[s(d)]=n[d]:u=t.getStyle(d),void 0===v[a]&&(t.node.style[s(d)]=n[d],v[a]=t.getStyle(d)!=n[d],m[a]=!v[a]),m[a]&&(p=h.indexOf(d),-1===p?e("Something very strange happened with transitions. If you see this message, please let @RactiveJS know. Thanks!"):h.splice(p,1),t.node.style[s(d)]=u,y.push({name:s(d),interpolator:i(u,n[d])}))
y.length?new o({root:t.root,duration:c.duration,easing:r(c.easing),step:function(e){var n,r
for(r=y.length;r--;)n=y[r],t.node.style[n.name]=n.interpolator(e)},complete:function(){w=!0,_()}}):w=!0,h.length||(t.node.removeEventListener(f,l,!1),E=!0,_())},0)},c.delay||0)}}(u,Y,a,Qn,ne,Yn,Gn,tr,er),rr=function(t,e,n,r,i,o){var s
if(e)return s=window.getComputedStyle||t.getComputedStyle,function(t,e,s,a){var u,c=this
"string"==typeof t?(u={},u[t]=e):(u=t,a=s,s=e),s||(n('The "'+c.name+'" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340'),s=c,a=c.complete)
var h=new r(function(t){var e,n,r,a,h,f,l,p
if(!s.duration)return c.setStyle(u),void t()
for(e=Object.keys(u),n=[],r=window.getComputedStyle(c.node),h={},l=e.length;l--;)p=e[l],a=r[i(p)],"0px"===a&&(a=0),a!=u[p]&&(n.push(p),c.node.style[i(p)]=a)
return n.length?void o(c,u,s,n,f,t):void t()})
return a&&(n("t.animateStyle returns a Promise as of 0.4.0. Transition authors should do t.animateStyle(...).then(callback)"),h.then(a)),h}}(r,u,Y,g,Gn,nr),ir=function(t,e){var n
for(n in e)!e.hasOwnProperty(n)||n in t||(t[n]=e[n])
return t},or=function(t){return function(e,n){return"number"==typeof e?e={duration:e}:"string"==typeof e?e="slow"===e?{duration:600}:"fast"===e?{duration:200}:{duration:400}:e||(e={}),t(e,n)}}(ir),sr=function(){this.originalStyle?this.node.setAttribute("style",this.originalStyle):(this.node.getAttribute("style"),this.node.removeAttribute("style"))},ar=function(t,e,n,r,i,o,s,a){var u
return u=function(n,r,i,o){var s,a,u,c=this
if(this.root=r,this.node=i.node,this.isIntro=o,this.originalStyle=this.node.getAttribute("style"),c.complete=function(t){!t&&c.isIntro&&c.resetStyle(),c.node._ractive.transition=null,c._manager.remove(c)},s=n.n||n,"string"!=typeof s&&(a=new e({descriptor:s,root:this.root,owner:i}),s=a.toString(),a.teardown()),this.name=s,n.a?this.params=n.a:n.d&&(a=new e({descriptor:n.d,root:this.root,owner:i}),this.params=a.toArgsList(),a.teardown()),this._fn=r.transitions[s],!this._fn){if(u='Missing "'+s+'" transition. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#transitions',r.debug)throw new Error(u)
return void t(u)}},u.prototype={init:n,getStyle:r,setStyle:i,animateStyle:o,processParams:s,resetStyle:a},u}(Y,Pn,Xn,Zn,Jn,rr,or,sr),ur=function(t,e){return function(n,r,i,o){var s,a,u
!r.transitionsEnabled||r._parent&&!r._parent.transitionsEnabled||(s=new e(n,r,i,o),s._fn&&(a=s.node,(u=a._ractive.transition)&&u.complete(),a._ractive.transition=s,t.addTransition(s)))}}(C,ar),cr=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g,v){function m(t){do if("select"===t.lcName)return t
while(t=t.parent)}return function(y,b,w){var E,_,x,k,O,S,T,A,N,C,R,I
if(y.type=e.ELEMENT,E=y.parentFragment=b.parentFragment,_=E.pNode,x=y.descriptor=b.descriptor,y.parent=b.pElement,y.root=C=E.root,y.index=b.index,y.lcName=x.e.toLowerCase(),y.eventListeners=[],y.customEventListeners=[],y.cssDetachQueue=[],_&&(k=y.namespace=u(x,_),O=k!==n.html?v(x.e):x.e,y.node=s(O,k),C.css&&_===C.el&&y.node.setAttribute("data-rvcguid",C.constructor._guid||C._guid),i(y.node,"_ractive",{value:{proxy:y,keypath:a(E),index:E.indexRefs,events:r(null),root:C}})),S=h(y,x.a),x.f){if(y.node&&y.node.getAttribute("contenteditable")&&y.node.innerHTML){if(I="A pre-populated contenteditable element should not have children",C.debug)throw new Error(I)
o(I)}f(y,y.node,x,w)}w&&x.v&&p(y,x.v),w&&(C.twoway&&(y.bind(),y.node.getAttribute("contenteditable")&&y.node._ractive.binding&&y.node._ractive.binding.update()),S.name&&!S.name.twoway&&S.name.update(),"IMG"===y.node.tagName&&((T=y.attributes.width)||(A=y.attributes.height))&&y.node.addEventListener("load",N=function(){T&&(y.node.width=T.value),A&&(y.node.height=A.value),y.node.removeEventListener("load",N,!1)},!1),w.appendChild(y.node),x.o&&l(x.o,C,y),x.t1&&g(x.t1,C,y,!0),"OPTION"===y.node.tagName&&("SELECT"===_.tagName&&(R=_._ractive.binding)&&R.deferUpdate(),S.value||c(y,"value",x.f),y.node._ractive.value==_._ractive.value&&(y.node.selected=!0)),y.node.autofocus&&t.focus(y.node)),"option"===y.lcName&&(y.select=m(y.parent)),d(y)}}(C,F,s,je,c,Y,a,O,ln,Bn,Dn,Wn,zn,$n,Kn,ur,pn),hr=function(t,e){function n(t){var e,n,r,i,o
for(i=t.liveQueries.length;i--;)if(e=t.liveQueries[i],n=e.selector,e._remove(t.node),t.matchingStaticNodes&&(r=t.matchingStaticNodes[n]))for(o=r.length;o--;)e.remove(r[o])}return function(r){var i,o,s
for(r&&(this.willDetach=!0,t.detachWhenReady(this)),this.fragment&&this.fragment.teardown(!1);this.attributes.length;)this.attributes.pop().teardown()
if(this.node){for(i in this.node._ractive.events)this.node._ractive.events[i].teardown();(o=this.node._ractive.binding)&&(o.teardown(),s=this.root._twowayBindings[o.attr.keypath],s.splice(s.indexOf(o),1))}this.decorator&&this.decorator.teardown(),this.descriptor.t2&&e(this.descriptor.t2,this.root,this,!1),this.liveQueries&&n(this)}}(C,ur),fr=function(t){return function(e,n,r,i){var o,s,a,u,c,h,f,l,p
for(o=this.attributes.length;o--;)this.attributes[o].reassign(e,n,r,i)
if(s=this.node._ractive){t(s,"keypath",r,i),void 0!=e&&(s.index[e]=n)
for(a in s.events)for(u=s.events[a].proxies,o=u.length;o--;)c=u[o],"object"==typeof c.n&&c.a.reassign(e,n,r,i),c.d&&c.d.reassign(e,n,r,i);(h=s.binding)&&h.keypath.substr(0,r.length)===r&&(f=s.root._twowayBindings[h.keypath],f.splice(f.indexOf(h),1),h.keypath=h.keypath.replace(r,i),f=s.root._twowayBindings[h.keypath]||(s.root._twowayBindings[h.keypath]=[]),f.push(h))}if(this.fragment&&this.fragment.reassign(e,n,r,i),l=this.liveQueries)for(p=this.root,o=l.length;o--;)l[o]._makeDirty()}}(De),lr="area base br col command doctype embed hr img input keygen link meta param source track wbr".split(" "),pr=function(t,e){function n(t){var n,r,i,o,s
if(n=t.attributes.value.value,r=t.select.attributes.value,i=r.interpolator){if(o=t.root.get(i.keypath||i.ref),o==n)return!0
if(t.select.attributes.multiple&&e(o))for(s=o.length;s--;)if(o[s]==n)return!0}}function r(t){var e,n,r,i
return e=t.attributes,n=e.type,r=e.value,i=e.name,n&&"radio"===n.value&&r&&i.interpolator&&r.value===i.interpolator.value?!0:void 0}return function(){var e,i,o,s
for(e="<"+(this.descriptor.y?"!doctype":this.descriptor.e),o=this.attributes.length,i=0;o>i;i+=1)(s=this.attributes[i].toString())&&(e+=" "+s)
return"option"===this.lcName&&n(this)&&(e+=" selected"),"input"===this.lcName&&r(this)&&(e+=" checked"),e+=">",this.html?e+=this.html:this.fragment&&(e+=this.fragment.toString()),-1===t.indexOf(this.descriptor.e)&&(e+="</"+this.descriptor.e+">"),this.stringifying=!1,e}}(lr,I),dr=function(t){return function(e){var n
return t(this.node,e)?this.node:this.html&&(n=this.node.querySelector(e))?n:this.fragment&&this.fragment.find?this.fragment.find(e):void 0}}(ae),gr=function(t){return function(e,n){var r,i
n._test(this,!0)&&n.live&&(this.liveQueries||(this.liveQueries=[])).push(n),this.html&&(r=t(this,e),n.push.apply(n,r),n.live&&!i&&(this.liveQueries||(this.liveQueries=[])).push(n)),this.fragment&&this.fragment.findAll(e,n)}}(Vn),vr=function(t){return this.fragment?this.fragment.findComponent(t):void 0},mr=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e)},yr=function(){var t=this.attributes
if(this.node&&(this.binding&&(this.binding.teardown(),this.binding=null),!(this.node.getAttribute("contenteditable")&&t.value&&t.value.bind())))switch(this.descriptor.e){case"select":case"textarea":return void(t.value&&t.value.bind())
case"input":if("radio"===this.node.type||"checkbox"===this.node.type){if(t.name&&t.name.bind())return
if(t.checked&&t.checked.bind())return}if(t.value&&t.value.bind())return}},br=function(t,e,n,r,i,o,s,a,u,c,h){var f=function(t,e){n(this,t,e)}
return f.prototype={detach:function(){var n
if(this.node)return this.node.parentNode&&this.node.parentNode.removeChild(this.node),this.node
if(this.cssDetachQueue.length){for(t.start();n===this.cssDetachQueue.pop();)e.remove(n)
t.end()}},teardown:r,reassign:i,firstNode:function(){return this.node},findNextNode:function(){return null},bubble:function(){},toString:o,find:s,findAll:a,findComponent:u,findAllComponents:c,bind:h},f}(C,_,cr,hr,fr,pr,dr,gr,vr,mr,yr),wr={missingParser:"Missing Ractive.parse - cannot parse template. Either preparse or use the version that includes the parser"},Er={},_r=function(t){var e,n,r
for(r="";t.length;){if(e=t.indexOf("<!--"),n=t.indexOf("-->"),-1===e&&-1===n){r+=t
break}if(-1!==e&&-1===n)throw"Illegal HTML - expected closing comment sequence ('-->')"
if(-1!==n&&-1===e||e>n)throw"Illegal HTML - unexpected closing comment sequence ('-->')"
r+=t.substr(0,e),t=t.substring(n+3)}return r},xr=function(t){return function(e){var n,r,i,o,s,a
for(s=/^\s*\r?\n/,a=/\r?\n\s*$/,n=2;n<e.length;n+=1)r=e[n],i=e[n-1],o=e[n-2],r.type===t.TEXT&&i.type===t.MUSTACHE&&i.mustacheType!==t.PARTIAL&&o.type===t.TEXT&&a.test(o.value)&&s.test(r.value)&&(i.mustacheType!==t.INTERPOLATOR&&i.mustacheType!==t.TRIPLE&&(o.value=o.value.replace(a,"\n")),r.value=r.value.replace(s,""),""===r.value&&e.splice(n--,1))
return e}}(F),kr=function(t){return function(e){var n,r,i,o
for(n=0;n<e.length;n+=1)r=e[n],i=e[n-1],o=e[n+1],(r.mustacheType===t.COMMENT||r.mustacheType===t.DELIMCHANGE)&&(e.splice(n,1),i&&o&&i.type===t.TEXT&&o.type===t.TEXT&&(i.value+=o.value,e.splice(n,1)),n-=1)
return e}}(F),Or=function(t){var e=t(/^[^\s=]+/)
return function(t){var n,r,i
return t.getStringMatch("=")?(n=t.pos,t.allowWhitespace(),(r=e(t))?(t.allowWhitespace(),(i=e(t))?(t.allowWhitespace(),t.getStringMatch("=")?[r,i]:(t.pos=n,null)):(t.pos=n,null)):(t.pos=n,null)):null}}(xn),Sr=function(t){var e={"#":t.SECTION,"^":t.INVERTED,"/":t.CLOSING,">":t.PARTIAL,"!":t.COMMENT,"&":t.TRIPLE}
return function(t){var n=e[t.str.charAt(t.pos)]
return n?(t.pos+=1,n):null}}(F),Tr=function(t,e,n){function r(e){for(var n=[];e.t===t.MEMBER&&e.r.t===t.REFINEMENT;)n.unshift(e.r),e=e.x
return e.t!==t.REFERENCE?null:{r:e.n,m:n}}var i=e(/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/),o=/^[0-9][1-9]*$/
return function(e,s){var a,u,c,h,f,l,p,d,g
if(a=e.pos,u={type:s?t.TRIPLE:t.MUSTACHE},!(s||((h=e.getExpression())&&(u.mustacheType=t.INTERPOLATOR,e.allowWhitespace(),e.getStringMatch(e.delimiters[1])?e.pos-=e.delimiters[1].length:(e.pos=a,h=null)),h||(c=n(e),c===t.TRIPLE?u={type:t.TRIPLE}:u.mustacheType=c||t.INTERPOLATOR,c!==t.COMMENT&&c!==t.CLOSING||(l=e.remaining(),p=l.indexOf(e.delimiters[1]),-1===p)))))return u.ref=l.substr(0,p),e.pos+=p,u
if(!h&&(e.allowWhitespace(),h=e.getExpression(),l=e.remaining(),d=s?e.tripleDelimiters[1]:e.delimiters[1],l.substr(0,d.length)!==d&&":"!==l.charAt(0)&&(e.pos=a,l=e.remaining(),p=l.indexOf(e.delimiters[1]),-1!==p)))return u.ref=l.substr(0,p).trim(),e.pos+=p,u
for(;h.t===t.BRACKETED&&h.x;)h=h.x
return h.t===t.REFERENCE?u.ref=h.n:h.t===t.NUMBER_LITERAL&&o.test(h.v)?u.ref=h.v:(g=r(h))?u.keypathExpression=g:u.expression=h,f=i(e),null!==f&&(u.indexRef=f),u}}(F,xn,Sr),Ar=function(t,e,n){function r(r,i){var o,s,a=r.pos
return s=i?r.tripleDelimiters:r.delimiters,r.getStringMatch(s[0])?(o=e(r))?r.getStringMatch(s[1])?(r[i?"tripleDelimiters":"delimiters"]=o,{type:t.MUSTACHE,mustacheType:t.DELIMCHANGE}):(r.pos=a,null):(r.allowWhitespace(),o=n(r,i),null===o?(r.pos=a,null):(r.allowWhitespace(),r.getStringMatch(s[1])?o:(r.pos=a,null))):null}return function(){var t=this.tripleDelimiters[0].length>this.delimiters[0].length
return r(this,t)||r(this,!t)}}(F,Or,Tr),Nr=function(t){return function(){var e,n,r
if(!this.getStringMatch("<!--"))return null
if(n=this.remaining(),r=n.indexOf("-->"),-1===r)throw new Error('Unexpected end of input (expected "-->" to close comment)')
return e=n.substr(0,r),this.pos+=r+3,{type:t.COMMENT,content:e}}}(F),Cr=function(t,e){var n,r,i
for(n=e.length;n--;){if(r=t.indexOf(e[n]),!r)return 0;-1!==r&&(!i||i>r)&&(i=r)}return i||-1},Rr=function(t,e,n){var r,i,o,s,a,u,c,h,f,l,p,d,g
return r=function(){return i(this)||o(this)},i=function(e){var n,r,i,o
return n=e.pos,e.inside?null:e.getStringMatch("<")?(r={type:t.TAG},e.getStringMatch("!")&&(r.doctype=!0),r.name=s(e),r.name?(i=a(e),i&&(r.attrs=i),e.allowWhitespace(),e.getStringMatch("/")&&(r.selfClosing=!0),e.getStringMatch(">")?(o=r.name.toLowerCase(),("script"===o||"style"===o)&&(e.inside=o),r):(e.pos=n,null)):(e.pos=n,null)):null},o=function(e){var n,r,i
if(n=e.pos,i=function(t){throw new Error("Unexpected character "+e.remaining().charAt(0)+" (expected "+t+")")},!e.getStringMatch("<"))return null
if(r={type:t.TAG,closing:!0},e.getStringMatch("/")||i('"/"'),r.name=s(e),r.name||i("tag name"),e.getStringMatch(">")||i('">"'),e.inside){if(r.name.toLowerCase()!==e.inside)return e.pos=n,null
e.inside=null}return r},s=e(/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/),a=function(t){var e,n,r
if(e=t.pos,!t.getStringMatch(" ")&&!t.getStringMatch("\n"))return null
if(t.allowWhitespace(),r=u(t),!r)return t.pos=e,null
for(n=[];null!==r;)n.push(r),t.allowWhitespace(),r=u(t)
return n},u=function(t){var e,n,r
return(n=c(t))?(e={name:n},r=h(t),r&&(e.value=r),e):null},c=e(/^[^\s"'>\/=]+/),h=function(t){var e,n
return e=t.pos,t.allowWhitespace(),t.getStringMatch("=")?(t.allowWhitespace(),n=g(t,"'")||g(t,'"')||f(t),null===n?(t.pos=e,null):n):(t.pos=e,null)},p=e(/^[^\s"'=<>`]+/),l=function(e){var n,r,i
return n=e.pos,(r=p(e))?(-1!==(i=r.indexOf(e.delimiters[0]))&&(r=r.substr(0,i),e.pos=n+r.length),{type:t.TEXT,value:r}):null},f=function(t){var e,n
for(e=[],n=t.getMustache()||l(t);null!==n;)e.push(n),n=t.getMustache()||l(t)
return e.length?e:null},g=function(t,e){var n,r,i
if(n=t.pos,!t.getStringMatch(e))return null
for(r=[],i=t.getMustache()||d(t,e);null!==i;)r.push(i),i=t.getMustache()||d(t,e)
return t.getStringMatch(e)?r:(t.pos=n,null)},d=function(e,r){var i,o,s
if(i=e.pos,s=e.remaining(),o=n(s,[r,e.delimiters[0],e.delimiters[1]]),-1===o)throw new Error("Quoted attribute value must have a closing quote")
return o?(e.pos+=o,{type:t.TEXT,value:s.substr(0,o)}):null},r}(F,xn,Cr),Ir=function(t,e){return function(){var n,r,i
return r=this.remaining(),i=this.inside?"</"+this.inside:"<",(n=this.inside&&!this.interpolate[this.inside]?r.indexOf(i):e(r,[i,this.delimiters[0],this.tripleDelimiters[0]]))?(-1===n&&(n=r.length),this.pos+=n,{type:t.TEXT,value:r.substr(0,n)}):null}}(F,Cr),Lr=function(t){return function(e){var n=e.remaining()
return"true"===n.substr(0,4)?(e.pos+=4,{t:t.BOOLEAN_LITERAL,v:"true"}):"false"===n.substr(0,5)?(e.pos+=5,{t:t.BOOLEAN_LITERAL,v:"false"}):null}}(F),jr=function(t,e){return function(n){var r,i,o
return r=n.pos,n.allowWhitespace(),i=e(n),null===i?(n.pos=r,null):(n.allowWhitespace(),n.getStringMatch(":")?(n.allowWhitespace(),o=n.getExpression(),null===o?(n.pos=r,null):{t:t.KEY_VALUE_PAIR,k:i,v:o}):(n.pos=r,null))}}(F,Cn),Mr=function(t){return function e(n){var r,i,o,s
return r=n.pos,o=t(n),null===o?null:(i=[o],n.getStringMatch(",")?(s=e(n),s?i.concat(s):(n.pos=r,null)):i)}}(jr),Pr=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.getStringMatch("{")?(i=e(n),n.allowWhitespace(),n.getStringMatch("}")?{t:t.OBJECT_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(F,Mr),Fr=function go(t){var e,n,r,i
if(e=t.pos,t.allowWhitespace(),r=t.getExpression(),null===r)return null
if(n=[r],t.allowWhitespace(),t.getStringMatch(",")){if(i=go(t),null===i)return t.pos=e,null
n=n.concat(i)}return n},Br=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.getStringMatch("[")?(i=e(n),n.getStringMatch("]")?{t:t.ARRAY_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(F,Fr),Dr=function(t,e,n,r,i){return function(o){var s=t(o)||e(o)||n(o)||r(o)||i(o)
return s}}(An,Lr,Tn,Pr,Br),Ur=function(t,e,n){var r,i,o,s
return r=e(/^\.[a-zA-Z_$0-9]+/),i=function(t){var e=o(t)
return e?"."+e:null},o=e(/^\[(0|[1-9][0-9]*)\]/),s=/^(?:Array|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null)$/,function(e){var o,a,u,c,h,f,l
for(o=e.pos,a="";e.getStringMatch("../");)a+="../"
if(a||(c=e.getStringMatch(".")||""),u=n(e)||"",!a&&!c&&s.test(u))return{t:t.GLOBAL,v:u}
if("this"!==u||a||c||(u=".",o+=3),h=(a||c)+u,!h)return null
for(;f=r(e)||i(e);)h+=f
return e.getStringMatch("(")&&(l=h.lastIndexOf("."),-1!==l?(h=h.substr(0,l),e.pos=o+h.length):e.pos-=1),{t:t.REFERENCE,n:h}}}(F,xn,Nn),Vr=function(t){return function(e){var n,r
return n=e.pos,e.getStringMatch("(")?(e.allowWhitespace(),(r=e.getExpression())?(e.allowWhitespace(),e.getStringMatch(")")?{t:t.BRACKETED,x:r}:(e.pos=n,null)):(e.pos=n,null)):null}}(F),Wr=function(t,e,n){return function(r){return t(r)||e(r)||n(r)}}(Dr,Ur,Vr),qr=function(t,e){return function(n){var r,i,o
if(r=n.pos,n.allowWhitespace(),n.getStringMatch(".")){if(n.allowWhitespace(),i=e(n))return{t:t.REFINEMENT,n:i}
n.expected("a property name")}return n.getStringMatch("[")?(n.allowWhitespace(),o=n.getExpression(),o||n.expected("an expression"),n.allowWhitespace(),n.getStringMatch("]")||n.expected('"]"'),{t:t.REFINEMENT,x:o}):null}}(F,Nn),zr=function(t,e,n,r){return function(i){var o,s,a,u
if(s=e(i),!s)return null
for(;s;)if(o=i.pos,a=r(i))s={t:t.MEMBER,x:s,r:a}
else{if(!i.getStringMatch("("))break
if(i.allowWhitespace(),u=n(i),i.allowWhitespace(),!i.getStringMatch(")")){i.pos=o
break}s={t:t.INVOCATION,x:s},u&&(s.o=u)}return s}}(F,Wr,Fr,qr),Hr=function(t,e){var n,r
return r=function(e,n){return function(r){var i,o
return r.getStringMatch(e)?(i=r.pos,r.allowWhitespace(),o=r.getExpression(),o||r.expected("an expression"),{s:e,o:o,t:t.PREFIX_OPERATOR}):n(r)}},function(){var t,i,o,s,a
for(s="! ~ + - typeof".split(" "),a=e,t=0,i=s.length;i>t;t+=1)o=r(s[t],a),a=o
n=a}(),n}(F,zr),$r=function(t,e){var n,r
return r=function(e,n){return function(r){var i,o,s
if(o=n(r),!o)return null
for(;;){if(i=r.pos,r.allowWhitespace(),!r.getStringMatch(e))return r.pos=i,o
if("in"===e&&/[a-zA-Z_$0-9]/.test(r.remaining().charAt(0)))return r.pos=i,o
if(r.allowWhitespace(),s=n(r),!s)return r.pos=i,o
o={t:t.INFIX_OPERATOR,s:e,o:[o,s]}}}},function(){var t,i,o,s,a
for(s="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" "),a=e,t=0,i=s.length;i>t;t+=1)o=r(s[t],a),a=o
n=a}(),n}(F,Hr),Kr=function(t,e){return function(n){var r,i,o,s
return(i=e(n))?(r=n.pos,n.allowWhitespace(),n.getStringMatch("?")?(n.allowWhitespace(),(o=n.getExpression())?(n.allowWhitespace(),n.getStringMatch(":")?(n.allowWhitespace(),s=n.getExpression(),s?{t:t.CONDITIONAL,o:[i,o,s]}:(n.pos=r,i)):(n.pos=r,i)):(n.pos=r,i)):(n.pos=r,i)):null}}(F,$r),Xr=function(t){return function(){return t(this)}}(Kr),Gr=function(t,e,n,r,i,o,s){var a
return a=function(t,e){var n
for(this.str=t,this.pos=0,this.delimiters=e.delimiters,this.tripleDelimiters=e.tripleDelimiters,this.interpolate=e.interpolate,this.tokens=[];this.pos<this.str.length;)n=this.getToken(),null===n&&this.remaining()&&this.fail(),this.tokens.push(n)},a.prototype={getToken:function(){var t=this.getMustache()||this.getComment()||this.getTag()||this.getText()
return t},getMustache:t,getComment:e,getTag:n,getText:r,getExpression:i,allowWhitespace:o,getStringMatch:s,remaining:function(){return this.str.substring(this.pos)},fail:function(){var t,e
throw t=this.str.substr(0,this.pos).substr(-20),20===t.length&&(t="..."+t),e=this.remaining().substr(0,20),20===e.length&&(e+="..."),new Error("Could not parse template: "+(t?t+"<- ":"")+"failed at character "+this.pos+" ->"+e)},expected:function(t){var e=this.remaining().substr(0,40)
throw 40===e.length&&(e+="..."),new Error('Tokenizer failed: unexpected string "'+e+'" (expected '+t+")")}},a}(Ar,Nr,Rr,Ir,Xr,_n,En),Zr=function(t,e,n,r,i){return function(o,s){var a,u
return s=s||{},s.stripComments!==!1&&(o=e(o)),a=new i(o,{delimiters:s.delimiters||t.defaults.delimiters,tripleDelimiters:s.tripleDelimiters||t.defaults.tripleDelimiters,interpolate:{script:s.interpolateScripts!==!1?!0:!1,style:s.interpolateStyles!==!1?!0:!1}}),u=a.tokens,n(u),r(u),u}}(i,_r,xr,kr,Gr),Jr=function(t){var e,n,r,i,o,s,a,u,c
return e=function(t,e){this.text=e?t.value:t.value.replace(c," ")},e.prototype={type:t.TEXT,toJSON:function(){return this.decoded||(this.decoded=u(this.text))},toString:function(){return this.text}},n={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},r=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],i=new RegExp("&("+Object.keys(n).join("|")+");?","g"),o=/&#x([0-9]+);?/g,s=/&#([0-9]+);?/g,a=function(t){return t?10===t?32:128>t?t:159>=t?r[t-128]:55296>t?t:57343>=t?65533:65535>=t?t:65533:65533},u=function(t){var e
return e=t.replace(i,function(t,e){return n[e]?String.fromCharCode(n[e]):t}),e=e.replace(o,function(t,e){return String.fromCharCode(a(parseInt(e,16)))}),e=e.replace(s,function(t,e){return String.fromCharCode(a(e))})},c=/\s+/g,e}(F),Qr=function(t,e){return function(n,r){return n.type===t.TEXT?(this.pos+=1,new e(n,r)):null}}(F,Jr),Yr=function(t){var e
return e=function(t){this.content=t.content},e.prototype={toJSON:function(){return{t:t.COMMENT,f:this.content}},toString:function(){return"<!--"+this.content+"-->"}},e}(F),ti=function(t,e){return function(n){return n.type===t.COMMENT?(this.pos+=1,new e(n,this.preserveWhitespace)):null}}(F,Yr),ei=function(t,e){function n(t){return JSON.stringify(String(t))}function r(n,i){var o,s
if(n.t===t.REFERENCE&&-1===i.indexOf(n.n)&&i.unshift(n.n),s=n.o||n.m)if(e(s))r(s,i)
else for(o=s.length;o--;)r(s[o],i)
n.x&&r(n.x,i),n.r&&r(n.r,i),n.v&&r(n.v,i)}function i(e,r){var o=function(t){return i(t,r)}
switch(e.t){case t.BOOLEAN_LITERAL:case t.GLOBAL:case t.NUMBER_LITERAL:return e.v
case t.STRING_LITERAL:return n(e.v)
case t.ARRAY_LITERAL:return"["+(e.m?e.m.map(o).join(","):"")+"]"
case t.OBJECT_LITERAL:return"{"+(e.m?e.m.map(o).join(","):"")+"}"
case t.KEY_VALUE_PAIR:return e.k+":"+i(e.v,r)
case t.PREFIX_OPERATOR:return("typeof"===e.s?"typeof ":e.s)+i(e.o,r)
case t.INFIX_OPERATOR:return i(e.o[0],r)+("in"===e.s.substr(0,2)?" "+e.s+" ":e.s)+i(e.o[1],r)
case t.INVOCATION:return i(e.x,r)+"("+(e.o?e.o.map(o).join(","):"")+")"
case t.BRACKETED:return"("+i(e.x,r)+")"
case t.MEMBER:return i(e.x,r)+i(e.r,r)
case t.REFINEMENT:return e.n?"."+e.n:"["+i(e.x,r)+"]"
case t.CONDITIONAL:return i(e.o[0],r)+"?"+i(e.o[1],r)+":"+i(e.o[2],r)
case t.REFERENCE:return"${"+r.indexOf(e.n)+"}"
default:throw new Error("Could not stringify expression token. This error is unexpected")}}var o=function(t){this.refs=[],r(t,this.refs),this.str=i(t,this.refs)}
return o.prototype={toJSON:function(){return this.json||(this.json={r:this.refs,s:this.str}),this.json}},o}(F,te),ni=function(t,e){function n(n){return n.n?n.n:n.x.t===t.STRING_LITERAL||n.x.t===t.NUMBER_LITERAL?n.x.v:n.x.t===t.REFERENCE?n.x:new e(n.x).toJSON()}var r
return r=function(t){this.json={r:t.r,m:t.m.map(n)}},r.prototype={toJSON:function(){return this.json}},r}(F,ei),ri=function(t,e,n){var r=function(r,i){this.type=r.type===t.TRIPLE?t.TRIPLE:r.mustacheType,r.ref&&(this.ref=r.ref),r.keypathExpression&&(this.keypathExpr=new e(r.keypathExpression)),r.expression&&(this.expr=new n(r.expression)),i.pos+=1}
return r.prototype={toJSON:function(){var t
return this.json?this.json:(t={t:this.type},this.ref&&(t.r=this.ref),this.keypathExpr&&(t.kx=this.keypathExpr.toJSON()),this.expr&&(t.x=this.expr.toJSON()),this.json=t,t)},toString:function(){return!1}},r}(F,ni,ei),ii=function(t){var e,n,r,i=""
if(!t)return""
for(n=0,r=t.length;r>n;n+=1){if(e=t[n].toString(),e===!1)return!1
i+=e}return i},oi=function(t){return function(e,n,r){var i,o
return r||n||(i=t(e),i===!1)?o=e.map(function(t){return t.toJSON(n)}):i}}(ii),si=function(t,e,n,r,i){function o(t,n){var r=t.ref,i=e(n.ref.trim())
if(r&&i&&(t.indexRef&&(r+=":"+t.indexRef),r.substr(0,i.length)!==i))throw new Error("Could not parse template: Illegal closing section {{/"+i+"}}. Expected {{/"+t.ref+"}}.")}var s=function(e,n){var s
for(this.ref=e.ref,this.indexRef=e.indexRef,this.inverted=e.mustacheType===t.INVERTED,e.keypathExpression&&(this.keypathExpr=new r(e.keypathExpression)),e.expression&&(this.expr=new i(e.expression)),n.pos+=1,this.items=[],s=n.next();s;){if(s.mustacheType===t.CLOSING){o(this,s),n.pos+=1
break}this.items.push(n.getStub()),s=n.next()}}
return s.prototype={toJSON:function(e){var r
return this.json?this.json:(r={t:t.SECTION},this.ref&&(r.r=this.ref),this.indexRef&&(r.i=this.indexRef),this.inverted&&(r.n=!0),this.expr&&(r.x=this.expr.toJSON()),this.keypathExpr&&(r.kx=this.keypathExpr.toJSON()),this.items.length&&(r.f=n(this.items,e)),this.json=r,r)},toString:function(){return!1}},s}(F,v,oi,ni,ei),ai=function(t,e,n){return function(r){return r.type===t.MUSTACHE||r.type===t.TRIPLE?r.mustacheType===t.SECTION||r.mustacheType===t.INVERTED?new n(r,this):new e(r,this):void 0}}(F,ri,si),ui={li:["li"],dt:["dt","dd"],dd:["dt","dd"],p:"address article aside blockquote dir div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr menu nav ol p pre section table ul".split(" "),rt:["rt","rp"],rp:["rp","rt"],optgroup:["optgroup"],option:["option","optgroup"],thead:["tbody","tfoot"],tbody:["tbody","tfoot"],tr:["tr"],td:["td","th"],th:["td","th"]},ci=function(t){function e(n){var r,i
if("object"!=typeof n)return n
if(t(n))return n.map(e)
r={}
for(i in n)n.hasOwnProperty(i)&&(r[i]=e(n[i]))
return r}return function(t){var n,r,i,o,s,a
for(i={},n=[],r=[],s=t.length,o=0;s>o;o+=1)if(a=t[o],"intro"===a.name){if(i.intro)throw new Error("An element can only have one intro transition")
i.intro=a}else if("outro"===a.name){if(i.outro)throw new Error("An element can only have one outro transition")
i.outro=a}else if("intro-outro"===a.name){if(i.intro||i.outro)throw new Error("An element can only have one intro and one outro transition")
i.intro=a,i.outro=e(a)}else"proxy-"===a.name.substr(0,6)?(a.name=a.name.substring(6),r.push(a)):"on-"===a.name.substr(0,3)?(a.name=a.name.substring(3),r.push(a)):"decorator"===a.name?i.decorator=a:n.push(a)
return i.attrs=n,i.proxies=r,i}}(I),hi=function(t,e){return function(n){var r,i,o,s,a,u,c,h
for(a=function(){throw new Error("Illegal directive")},n.name&&n.value||a(),r={directiveType:n.name},i=n.value,u=[],c=[];i.length;)if(o=i.shift(),o.type===t.TEXT){if(s=o.value.indexOf(":"),-1!==s){s&&u.push({type:t.TEXT,value:o.value.substr(0,s)}),o.value.length>s+1&&(c[0]={type:t.TEXT,value:o.value.substring(s+1)})
break}u.push(o)}else u.push(o)
return c=c.concat(i),r.name=1===u.length&&u[0].type===t.TEXT?u[0].value:u,c.length&&(1===c.length&&c[0].type===t.TEXT?(h=e("["+c[0].value+"]"),r.args=h?h.value:c[0].value):r.dynamicArgs=c),r}}(F,Rn),fi=function(t,e){var n
return n=function(t,e){var n
for(this.tokens=t||[],this.pos=0,this.options=e,this.result=[];n=this.getStub();)this.result.push(n)},n.prototype={getStub:function(){var t=this.next()
return t?this.getText(t)||this.getMustache(t):null},getText:t,getMustache:e,next:function(){return this.tokens[this.pos]}},n}(Qr,ai),li=function(t,e,n){var r
return r=function(e){var n=new t(e)
this.stubs=n.result},r.prototype={toJSON:function(t){var e
return this["json_"+t]?this["json_"+t]:e=this["json_"+t]=n(this.stubs,t)},toString:function(){return void 0!==this.str?this.str:(this.str=e(this.stubs),this.str)}},r}(fi,ii,oi),pi=function(t){return function(e){var n,r
if("string"==typeof e.name){if(!e.args&&!e.dynamicArgs)return e.name
r=e.name}else r=new t(e.name).toJSON()
return n={n:r},e.args?(n.a=e.args,n):(e.dynamicArgs&&(n.d=new t(e.dynamicArgs).toJSON()),n)}}(li),di=function(t,e,n){return function(r){var i,o,s,a,u,c,h
if(this["json_"+r])return this["json_"+r]
if(i={t:t.ELEMENT,e:this.tag},this.doctype&&(i.y=1),this.attributes&&this.attributes.length)for(i.a={},c=this.attributes.length,u=0;c>u;u+=1){if(h=this.attributes[u],o=h.name,i.a[o])throw new Error("You cannot have multiple attributes with the same name")
s=null===h.value?null:h.value.toJSON(r),i.a[o]=s}if(this.items&&this.items.length&&(i.f=e(this.items,r)),this.proxies&&this.proxies.length)for(i.v={},c=this.proxies.length,u=0;c>u;u+=1)a=this.proxies[u],i.v[a.directiveType]=n(a)
return this.intro&&(i.t1=n(this.intro)),this.outro&&(i.t2=n(this.outro)),this.decorator&&(i.o=n(this.decorator)),this["json_"+r]=i,i}}(F,oi,pi),gi=function(t,e){var n
return n="a abbr acronym address applet area b base basefont bdo big blockquote body br button caption center cite code col colgroup dd del dfn dir div dl dt em fieldset font form frame frameset h1 h2 h3 h4 h5 h6 head hr html i iframe img input ins isindex kbd label legend li link map menu meta noframes noscript object ol p param pre q s samp script select small span strike strong style sub sup textarea title tt u ul var article aside audio bdi canvas command data datagrid datalist details embed eventsource figcaption figure footer header hgroup keygen mark meter nav output progress ruby rp rt section source summary time track video wbr".split(" "),function(){var r,i,o,s,a,u,c,h
if(void 0!==this.str)return this.str
if(-1===n.indexOf(this.tag.toLowerCase()))return this.str=!1
if(this.proxies||this.intro||this.outro||this.decorator)return this.str=!1
if(c=t(this.items),c===!1)return this.str=!1
if(h=-1!==e.indexOf(this.tag.toLowerCase()),r="<"+this.tag,this.attributes)for(i=0,o=this.attributes.length;o>i;i+=1){if(a=this.attributes[i].name,-1!==a.indexOf(":"))return this.str=!1
if("id"===a||"intro"===a||"outro"===a)return this.str=!1
if(s=" "+a,null!==this.attributes[i].value){if(u=this.attributes[i].value.toString(),u===!1)return this.str=!1
""!==u&&(s+="=",s+=/[\s"'=<>`]/.test(u)?'"'+u.replace(/"/g,"&quot;")+'"':u)}r+=s}return this.selfClosing&&!h?(r+="/>",this.str=r):(r+=">",h?this.str=r:(r+=c,r+="</"+this.tag+">",this.str=r))}}(ii,lr),vi=function(t,e,n,r,i,o,s,a,u){var c,h,f,l,p,d=/^\s+/,g=/\s+$/
return c=function(s,a,c){var h,f,l,v,m,y,b
if(a.pos+=1,y=function(t){return{name:t.name,value:t.value?new u(t.value):null}},this.tag=s.name,b=s.name.toLowerCase(),"rv-"===b.substr(0,3)&&(n('The "rv-" prefix for components has been deprecated. Support will be removed in a future version'),this.tag=this.tag.substring(3)),c=c||"pre"===b||"style"===b||"script"===b,s.attrs&&(l=i(s.attrs),f=l.attrs,v=l.proxies,a.options.sanitize&&a.options.sanitize.eventAttributes&&(f=f.filter(p)),f.length&&(this.attributes=f.map(y)),v.length&&(this.proxies=v.map(o)),l.intro&&(this.intro=o(l.intro)),l.outro&&(this.outro=o(l.outro)),l.decorator&&(this.decorator=o(l.decorator))),s.doctype&&(this.doctype=!0),s.selfClosing&&(this.selfClosing=!0),-1!==e.indexOf(b)&&(this.isVoid=!0),!this.selfClosing&&!this.isVoid){for(this.siblings=r[b],this.items=[],h=a.next();h&&h.mustacheType!==t.CLOSING;){if(h.type===t.TAG){if(h.closing){h.name.toLowerCase()===b&&(a.pos+=1)
break}if(this.siblings&&-1!==this.siblings.indexOf(h.name.toLowerCase()))break}this.items.push(a.getStub(c)),h=a.next()}c||(m=this.items[0],m&&m.type===t.TEXT&&(m.text=m.text.replace(d,""),m.text||this.items.shift()),m=this.items[this.items.length-1],m&&m.type===t.TEXT&&(m.text=m.text.replace(g,""),m.text||this.items.pop()))}},c.prototype={toJSON:s,toString:a},h="a abbr acronym address applet area b base basefont bdo big blockquote body br button caption center cite code col colgroup dd del dfn dir div dl dt em fieldset font form frame frameset h1 h2 h3 h4 h5 h6 head hr html i iframe img input ins isindex kbd label legend li link map menu meta noframes noscript object ol p param pre q s samp script select small span strike strong style sub sup textarea title tt u ul var article aside audio bdi canvas command data datagrid datalist details embed eventsource figcaption figure footer header hgroup keygen mark meter nav output progress ruby rp rt section source summary time track video wbr".split(" "),f="li dd rt rp optgroup option tbody tfoot tr td th".split(" "),l=/^on[a-zA-Z]/,p=function(t){var e=!l.test(t.name)
return e},c}(F,lr,Y,ui,ci,hi,di,gi,li),mi=function(t){return function(e){return this.options.sanitize&&this.options.sanitize.elements&&-1!==this.options.sanitize.elements.indexOf(e.name.toLowerCase())?null:new t(e,this,this.preserveWhitespace)}}(vi),yi=function(t,e,n,r,i){var o
return o=function(t,e){var n,r
for(this.tokens=t||[],this.pos=0,this.options=e,this.preserveWhitespace=e.preserveWhitespace,r=[];n=this.getStub();)r.push(n)
this.result=i(r,e.noStringify,!0)},o.prototype={getStub:function(t){var e=this.next()
return e?this.getText(e,this.preserveWhitespace||t)||this.getComment(e)||this.getMustache(e)||this.getElement(e):null},getText:t,getComment:e,getMustache:n,getElement:r,next:function(){return this.tokens[this.pos]}},o}(Qr,ti,ai,mi,oi),bi=function(t,e,n){var r,i,o,s,a
return i=/^\s*$/,o=/<!--\s*\{\{\s*>\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}\}\s*-->/,s=/<!--\s*\{\{\s*\/\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}\}\s*-->/,r=function(r,s){var u,c,h
return s=s||{},o.test(r)?a(r,s):(s.sanitize===!0&&(s.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),u=t(r,s),s.preserveWhitespace||(h=u[0],h&&h.type===e.TEXT&&i.test(h.value)&&u.shift(),h=u[u.length-1],h&&h.type===e.TEXT&&i.test(h.value)&&u.pop()),c=new n(u,s).result,"string"==typeof c?[c]:c)},a=function(t,e){var n,i,a,u,c,h
for(a={},n="",i=t;c=o.exec(i);){if(u=c[1],n+=i.substr(0,c.index),i=i.substring(c.index+c[0].length),h=s.exec(i),!h||h[1]!==u)throw new Error("Inline partials must have a closing delimiter, and cannot be nested")
a[u]=r(i.substr(0,h.index),e),i=i.substring(h.index+h[0].length)}return{main:r(n,e),partials:a}},r}(Zr,F,yi),wi=function(){function t(t,e){var r=n.exec(e)[0]
return null===t||r.length<t.length?r:t}var e=/^\s*$/,n=/^\s*/
return function(n){var r,i,o,s
return r=n.split("\n"),i=r[0],void 0!==i&&e.test(i)&&r.shift(),o=r[r.length-1],void 0!==o&&e.test(o)&&r.pop(),s=r.reduce(t,null),s&&(n=r.map(function(t){return t.replace(s,"")}).join("\n")),n}}(),Ei=function(t,e,n,r,i,o,s){var a,u,c,h
return a=function(r,a){var f,l,p
if(l=c(r,a))return l
if(e&&(f=document.getElementById(a),f&&"SCRIPT"===f.tagName)){if(!o)throw new Error(t.missingParser)
u(o(s(f.text),r.parseOptions),a,i)}if(l=i[a],!l){if(p='Could not find descriptor for partial "'+a+'"',r.debug)throw new Error(p)
return n(p),[]}return h(l)},c=function(e,n){var r
if(e.partials[n]){if("string"==typeof e.partials[n]){if(!o)throw new Error(t.missingParser)
r=o(e.partials[n],e.parseOptions),u(r,n,e.partials)}return h(e.partials[n])}},u=function(t,e,n){var i
if(r(t)){n[e]=t.main
for(i in t.partials)t.partials.hasOwnProperty(i)&&(n[i]=t.partials[i])}else n[e]=t},h=function(t){return 1===t.length&&"string"==typeof t[0]?t[0]:t},a}(wr,u,Y,te,Er,bi,wi),_i=function(t,e){var n
return e?n=t.split("\n").map(function(t,n){return n?e+t:t}).join("\n"):t},xi=function(t,e,n,r){var i,o
return r.push(function(){o=r.DomFragment}),i=function(n,r){var i,s=this.parentFragment=n.parentFragment
if(this.type=t.PARTIAL,this.name=n.descriptor.r,this.index=n.index,!n.descriptor.r)throw new Error("Partials must have a static reference (no expressions). This may change in a future version of Ractive.")
i=e(s.root,n.descriptor.r),this.fragment=new o({descriptor:i,root:s.root,pNode:s.pNode,owner:this}),r&&r.appendChild(this.fragment.docFrag)},i.prototype={firstNode:function(){return this.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},detach:function(){return this.fragment.detach()},reassign:function(t,e,n,r){return this.fragment.reassign(t,e,n,r)},teardown:function(t){this.fragment.teardown(t)},toString:function(){var e,r,i,o
return e=this.fragment.toString(),r=this.parentFragment.items[this.index-1],r&&r.type===t.TEXT?(i=r.descriptor.split("\n").pop(),(o=/^\s+$/.exec(i))?n(e,o[0]):e):e},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)}},i}(F,Ei,_i,w),ki=function(t,e){var n=function(t,n,r){this.parentFragment=t.parentFragment,this.component=t,this.key=n,this.fragment=new e({descriptor:r,root:t.root,owner:this}),this.selfUpdating=this.fragment.isSimple(),this.value=this.fragment.getValue()}
return n.prototype={bubble:function(){this.selfUpdating?this.update():!this.deferred&&this.ready&&(t.addAttribute(this),this.deferred=!0)},update:function(){var t=this.fragment.getValue()
this.component.instance.set(this.key,t),this.value=t},teardown:function(){this.fragment.teardown()}},n}(C,Pn),Oi=function(t,e,n,r,i){function o(o,s,a,u){var c,h,f,l,p,d
return f=o.root,l=o.parentFragment,"string"==typeof a?(h=e(a),h?h.value:a):null===a?!0:1===a.length&&a[0].t===t.INTERPOLATOR&&a[0].r?l.indexRefs&&void 0!==l.indexRefs[d=a[0].r]?(o.indexRefBindings[d]=s,l.indexRefs[d]):(p=n(f,a[0].r,l)||a[0].r,u.push({childKeypath:s,parentKeypath:p}),r(f,p)):(c=new i(o,s,a),o.complexParameters.push(c),c.value)}return function(t,e,n,r){var i,s,a
i={},t.complexParameters=[]
for(s in n)n.hasOwnProperty(s)&&(a=o(t,s,n[s],r),(void 0!==a||void 0===e[s])&&(i[s]=a))
return i}}(F,Rn,S,Q,ki),Si=function(){function t(t,e){var n,r,i
if(n=t.adapt.length?t.adapt.map(function(e){return"object"==typeof e?e:t.adaptors[e]||e}):[],r=e.length)for(i=0;r>i;i+=1)-1===n.indexOf(e[i])&&n.push(e[i])
return n}return function(e,n,r,i,o){var s,a,u,c,h
return a=e.parentFragment,c=e.root,u={content:o||[]},h=t(c,n.defaults.adapt,n.adaptors),s=new n({el:a.pNode,append:!0,data:r,partials:u,magic:c.magic||n.defaults.magic,modifyArrays:c.modifyArrays,_parent:c,_component:e,adapt:h}),i&&(s.insert(i),s.fragment.pNode=s.el=a.pNode),s}}(),Ti=function(t,e,n){return function(r,i){i.forEach(function(i){var o,s
t(r,r.root,i.parentKeypath,i.childKeypath),o=e(r.instance,i.childKeypath),s=e(r.root,i.parentKeypath),void 0!==o&&void 0===s&&n(r.root,i.parentKeypath,o)})}}(G,Q,U),Ai=function(t){function e(e,r,i,o){if("string"!=typeof o){if(r.debug)throw new Error(n)
return void t(n)}e.on(i,function(){var t=Array.prototype.slice.call(arguments)
t.unshift(o),r.fire.apply(r,t)})}var n="Components currently only support simple events - you cannot include arguments. Sorry!"
return function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t.instance,t.root,r,n[r])}}(Y),Ni=function(t){var e,n
for(e=t.root;e;)(n=e._liveComponentQueries[t.name])&&n.push(t.instance),e=e._parent},Ci=function(t,e,n,r,i,o,s){return function(a,u,c){var h,f,l,p,d
if(h=a.parentFragment=u.parentFragment,f=h.root,a.root=f,a.type=t.COMPONENT,a.name=u.descriptor.e,a.index=u.index,a.indexRefBindings={},a.bindings=[],l=f.components[u.descriptor.e],!l)throw new Error('Component "'+u.descriptor.e+'" not found')
d=[],p=n(a,l.data||{},u.descriptor.a,d),r(a,l,p,c,u.descriptor.f),i(a,d),o(a,u.descriptor.v),(u.descriptor.t1||u.descriptor.t2||u.descriptor.o)&&e('The "intro", "outro" and "decorator" directives have no effect on components'),s(a)}}(F,Y,Oi,Si,Ti,Ai,Ni),Ri=function(t,e){function n(t){var e,n
e=t.root
do(n=e._liveComponentQueries[t.name])&&n._remove(t)
while(e=e._parent)}var r=function(e,n){t(this,e,n)}
return r.prototype={firstNode:function(){return this.instance.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},detach:function(){return this.instance.fragment.detach()},teardown:function(t){for(;this.complexParameters.length;)this.complexParameters.pop().teardown()
for(;this.bindings.length;)this.bindings.pop().teardown()
n(this),this.shouldDestroy=t,this.instance.teardown()},reassign:function(t,n,r,i){var o,s,a=this.instance,u=a._parent
this.bindings.forEach(function(o){var s
o.root===u&&(o.keypath===t&&a.set(o.otherKeypath,n),(s=e(o.keypath,r,i))&&o.reassign(s))}),(o=this.indexRefBindings[t])&&a.set(o,n),(s=this.root._liveComponentQueries[this.name])&&s._makeDirty()},toString:function(){return this.instance.fragment.toString()},find:function(t){return this.instance.fragment.find(t)},findAll:function(t,e){return this.instance.fragment.findAll(t,e)},findComponent:function(t){return t&&t!==this.name?this.instance.fragment?this.instance.fragment.findComponent(t):null:this.instance},findAllComponents:function(t,e){e._test(this,!0),this.instance.fragment&&this.instance.fragment.findAllComponents(t,e)}},r}(Ci,Be),Ii=function(t,e){var n=function(e,n){this.type=t.COMMENT,this.descriptor=e.descriptor,n&&(this.node=document.createComment(e.descriptor.f),n.appendChild(this.node))}
return n.prototype={detach:e,teardown:function(t){t&&this.detach()},firstNode:function(){return this.node},toString:function(){return"<!--"+this.descriptor.f+"-->"}},n}(F,qe),Li=function(t,e,n,r,i,o,s,a,u,c,h,f,l){var p=function(t){t.pNode&&(this.docFrag=document.createDocumentFragment()),"string"==typeof t.descriptor?(this.html=t.descriptor,this.docFrag&&(this.nodes=r(this.html,t.pNode.tagName,t.pNode.namespaceURI,this.docFrag))):n.init(this,t)}
return p.prototype={reassign:n.reassign,detach:function(){var t,e
if(this.docFrag){if(this.nodes)for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e])
else if(this.items)for(t=this.items.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.items[e].detach())
return this.docFrag}},createItem:function(e){if("string"==typeof e.descriptor)return new i(e,this.docFrag)
switch(e.descriptor.t){case t.INTERPOLATOR:return new o(e,this.docFrag)
case t.SECTION:return new s(e,this.docFrag)
case t.TRIPLE:return new a(e,this.docFrag)
case t.ELEMENT:return this.root.components[e.descriptor.e]?new h(e,this.docFrag):new u(e,this.docFrag)
case t.PARTIAL:return new c(e,this.docFrag)
case t.COMMENT:return new f(e,this.docFrag)
default:throw new Error("Something very strange happened. Please file an issue at https://github.com/RactiveJS/Ractive/issues. Thanks!")}},teardown:function(t){var e
if(this.nodes&&t)for(;e=this.nodes.pop();)e.parentNode.removeChild(e)
else if(this.items)for(;this.items.length;)this.items.pop().teardown(t)
this.nodes=this.items=this.docFrag=null},firstNode:function(){return this.items&&this.items[0]?this.items[0].firstNode():this.nodes?this.nodes[0]||null:null},findNextNode:function(t){var e=t.index
return this.items[e+1]?this.items[e+1].firstNode():this.owner===this.root?this.owner.component?this.owner.component.findNextNode():null:this.owner.findNextNode(this)},toString:function(){var t,e,n,r
if(this.html)return this.html
if(t="",!this.items)return t
for(n=this.items.length,e=0;n>e;e+=1)r=this.items[e],t+=r.toString()
return t},find:function(t){var n,r,i,o,s
if(this.nodes){for(r=this.nodes.length,n=0;r>n;n+=1)if(o=this.nodes[n],1===o.nodeType){if(e(o,t))return o
if(s=o.querySelector(t))return s}return null}if(this.items){for(r=this.items.length,n=0;r>n;n+=1)if(i=this.items[n],i.find&&(s=i.find(t)))return s
return null}},findAll:function(t,n){var r,i,o,s,a,u,c
if(this.nodes){for(i=this.nodes.length,r=0;i>r;r+=1)if(s=this.nodes[r],1===s.nodeType&&(e(s,t)&&n.push(s),a=s.querySelectorAll(t)))for(u=a.length,c=0;u>c;c+=1)n.push(a[c])}else if(this.items)for(i=this.items.length,r=0;i>r;r+=1)o=this.items[r],o.findAll&&o.findAll(t,n)
return n},findComponent:function(t){var e,n,r,i
if(this.items){for(e=this.items.length,n=0;e>n;n+=1)if(r=this.items[n],r.findComponent&&(i=r.findComponent(t)))return i
return null}},findAllComponents:function(t,e){var n,r,i
if(this.items)for(r=this.items.length,n=0;r>n;n+=1)i=this.items[n],i.findAllComponents&&i.findAllComponents(t,e)
return e}},l.DomFragment=p,p}(F,ae,Ve,We,ze,rn,hn,fn,br,xi,Ri,Ii,w),ji=function(t,e,n){function r(t){for(var e;e=t._childInitQueue.pop();)e.instance.init&&e.instance.init(e.options),r(e.instance)}return function(i,o){if(this._rendering=!0,t.start(this,o),!this._initing)throw new Error("You cannot call ractive.render() directly!")
this.constructor.css&&e.add(this.constructor),this.fragment=new n({descriptor:this.template,root:this,owner:this,pNode:i}),i&&i.appendChild(this.fragment.docFrag),this._parent&&this._parent._rendering||r(this),delete this._rendering,t.end()}}(C,_,Li),Mi=function(t){return function(){return t("renderHTML() has been deprecated and will be removed in a future version. Please use toHTML() instead"),this.toHTML()}}(Y),Pi=function(t,e,n,r){return function(i,o){var s,a,u
if("function"==typeof i?(o=i,i={}):i=i||{},"object"!=typeof i)throw new Error("The reset method takes either no arguments, or an object containing new data")
return s=new t(function(t){a=t}),o&&s.then(o),e.start(this,a),(u=this._wrapped[""])&&u.reset?u.reset(i)===!1&&(this.data=i):this.data=i,n(this,""),r(this,""),e.end(),this.fire("reset",i),s}}(g,C,B,A),Fi=function(t,e,n,r,i){return function(o,s,a){var u,c,h
if(c=new r(function(t){h=t}),t.start(this,h),e(o)){u=o,a=s
for(o in u)u.hasOwnProperty(o)&&(s=u[o],o=n(o),i(this,o,s))}else o=n(o),i(this,o,s)
return t.end(),a&&c.then(a.bind(this)),c}}(C,te,v,g,U),Bi=function(t){return function(e,n){return t(this,e,void 0===n?-1:-n)}}(l),Di=function(t,e,n,r,i){return function(o){var s,a,u,c,h,f,l,p
if(this.fire("teardown"),c=!this.component||this.component.shouldDestroy,this.constructor.css)if(c)h=o,o=function(){h&&h.call(this),e.remove(this.constructor)}
else{f=this.component.parentFragment
do f.owner.type===t.ELEMENT&&f.owner.willDetach&&(l=f.owner)
while(!l&&(f=f.parent))
if(!l)throw new Error("A component is being torn down but doesn't have a nearest detaching element... this shouldn't happen!")
l.cssDetachQueue.push(this.constructor)}for(a=new r(function(t){u=t}),n.start(this,u),this.fragment.teardown(c);this._animations[0];)this._animations[0].stop()
for(s in this._cache)i(this,s)
for(;p=this._unresolvedImplicitDependencies.pop();)p.teardown()
return n.end(),o&&a.then(o.bind(this)),a}}(F,_,C,g,B),Ui=function(){return this.fragment.toString()},Vi=function(t,e){var n
{if("string"==typeof t)return n=this.get(t),this.set(t,!n,e)
if(this.debug)throw new Error("Bad arguments")}},Wi=function(t,e,n,r){return function(i,o){var s,a
return"function"==typeof i?(o=i,i=""):i=i||"",s=new e(function(t){a=t}),t.start(this,a),n(this,i),r(this,i),t.end(),this.fire("update",i),o&&s.then(o.bind(this)),s}}(C,g,B,A),qi=function(t,e,n){function r(t,i,o,s,a){var u,c,h,f,l,p
if(u=t._twowayBindings[i])for(h=u.length;h--;)f=u[h],(!f.radioName||f.node.checked)&&(f.checkboxName?f.changed()&&s[i]!==!0&&(s[i]=!0,s.push(i)):(l=f.attr.value,p=f.value(),e(l,p)||n(l,p)||(o[i]=p)))
if(a&&(c=t._depsMap[i]))for(h=c.length;h--;)r(t,c[h],o,s,a)}return function(e,n){var i,o,s
if("string"!=typeof e&&(e="",n=!0),r(this,e,i={},o=[],n),s=o.length)for(;s--;)e=o[s],i[e]=t(this,e)
this.set(i)}}(x,yn,d),zi=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g,v,m,y,b,w,E,_,x){return{add:t,animate:e,detach:n,find:r,findAll:i,findAllComponents:o,findComponent:s,fire:a,get:u,insert:c,merge:h,observe:f,off:l,on:p,render:d,renderHTML:g,reset:v,set:m,subtract:y,teardown:b,toHTML:w,toggle:E,update:_,updateModel:x}}(p,ie,oe,se,ve,me,ye,be,Ee,xe,Se,Re,Ie,Le,ji,Mi,Pi,Fi,Bi,Di,Ui,Vi,Wi,qi),Hi={},$i={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},Ki=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e,n
return e=16*Math.random()|0,n="x"==t?e:3&e|8,n.toString(16)})},Xi=function(t){for(var e,n,r=Array.prototype.slice.call(arguments,1);n=r.shift();)for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e])
return t},Gi=["adaptors","components","decorators","easing","events","interpolators","partials","transitions","data"],Zi=function(){function t(t){return t.trim?t.trim():t.replace(/^\s+/,"").replace(/\s+$/,"")}function e(t){return t.str}var n=/(?:^|\})?\s*([^\{\}]+)\s*\{/g,r=/\/\*.*?\*\//g,i=/((?:(?:\[[^\]+]\])|(?:[^\s\+\>\~:]))+)((?::[^\s\+\>\~]+)?\s*[\s\+\>\~]?)\s*/g
return function(o,s){var a,u
return u=function(t){var n,r,o,a,u,c,h,f,l=[]
for(n=[];r=i.exec(t);)n.push({str:r[0],base:r[1],modifiers:r[2]})
for(a='[data-rvcguid="'+s+'"]',u=n.map(e),f=n.length;f--;)h=u.slice(),o=n[f],h[f]=o.base+a+o.modifiers||"",c=u.slice(),c[f]=a+" "+c[f],l.push(h.join(" "),c.join(" "))
return l.join(", ")},a=o.replace(r,"").replace(n,function(e,n){var r,i
return r=n.split(",").map(t),i=r.map(u).join(", ")+" ",e.replace(n,i)})}}(),Ji=function(t,e,n,r){return function(i,o){t.forEach(function(t){o[t]&&(i[t]=e(o[t]))}),n(i,"defaults",{value:e(o.defaults)}),o.css&&n(i,"css",{value:o.defaults.noCssTransform?o.css:r(o.css,i._guid)})}}(Gi,je,c,Zi),Qi=function(t,e){return/_super/.test(t)?function(){var n,r=this._super
return this._super=e,n=t.apply(this,arguments),this._super=r,n}:t},Yi=function(t,e){var n
for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t},to=function(t,e,n,r,i,o){var s={}
return e.concat(t.keys).forEach(function(t){s[t]=!0}),function(a,u){var c,h
e.forEach(function(t){var e=u[t]
e&&(a[t]?i(a[t],e):a[t]=e)}),t.keys.forEach(function(t){var e=u[t]
void 0!==e&&(a.defaults[t]="function"==typeof e&&"function"==typeof a[t]?r(e,a[t]):u[t])})
for(c in u)!s[c]&&u.hasOwnProperty(c)&&(h=u[c],a.prototype[c]="function"==typeof h&&"function"==typeof a.prototype[c]?r(h,a.prototype[c]):h)
u.css&&n(a,"css",{value:a.defaults.noCssTransform?u.css:o(u.css,a._guid)})}}(i,Gi,c,Qi,Yi,Zi),eo=function(t,e){return function(n,r){t(n.defaults.template)&&(n.partials||(n.partials={}),e(n.partials,n.defaults.template.partials),r.partials&&e(n.partials,r.partials),n.defaults.template=n.defaults.template.main)}}(te,Yi),no=function(t,e,n){return function(r){var i
if("string"==typeof r.defaults.template){if(!n)throw new Error(t.missingParser)
if("#"===r.defaults.template.charAt(0)&&e){if(i=document.getElementById(r.defaults.template.substring(1)),!i||"SCRIPT"!==i.tagName)throw new Error("Could not find template element ("+r.defaults.template+")")
r.defaults.template=n(i.innerHTML,r)}else r.defaults.template=n(r.defaults.template,r.defaults)}}}(wr,u,bi),ro=function(t,e){return function(n){var r
if(n.partials)for(r in n.partials)if(n.partials.hasOwnProperty(r)&&"string"==typeof n.partials[r]){if(!e)throw new Error(t.missingParser)
n.partials[r]=e(n.partials[r],n)}}}(wr,bi),io=function(){function t(t){var n="var __ractive=this;return("+t.replace(e,function(t,e){return'__ractive.get("'+e+'")'})+")"
return new Function(n)}var e=/\$\{([^\}]+)\}/g
return function(e){return"function"==typeof e?{get:e}:"string"==typeof e?{get:t(e)}:("object"==typeof e&&"string"==typeof e.get&&(e={get:t(e.get),set:e.set}),e)}}(),oo=function(t,e,n){var r=function(t,n){this.root=t.ractive,this.keypath=n,this.priority=0,this.computation=t,e(this)}
return r.prototype={update:function(){var e
e=this.root.get(this.keypath),t(e,this.value)||this.computation.bubble()},teardown:function(){n(this)}},r}(d,K,X),so=function(t,e,n,r){function i(t,e,n){var i,o,s
for(i=e.length;i--;)o=e[i],n[o.keypath]||(e.splice(i,1),e[o.keypath]=null,o.teardown())
for(i=n.length;i--;)s=n[i],e[s]||(o=new r(t,s),e.push(e[s]=o))}var o=function(t,e,n){this.ractive=t,this.key=e,this.getter=n.get,this.setter=n.set,this.watchers=[],this.update()}
return o.prototype={set:function(t){if(this.setting)return void(this.value=t)
if(!this.setter)throw new Error("Computed properties without setters are read-only in the current version")
this.setter.call(this.ractive,t)},update:function(){var e,r,o,s
e=this.ractive,r=e._captured,r||(e._captured=[])
try{o=this.getter.call(e)}catch(a){e.debug&&t('Failed to compute "'+this.key+'": '+a.message||a),s=!0}i(this,this.watchers,e._captured),e._captured=r,s||(this.setting=!0,this.value=o,n(e,this.key,o),this.setting=!1),this.deferred=!1},bubble:function(){this.watchers.length<=1?this.update():this.deferred||(e.addComputation(this),this.deferred=!0)}},o}(Y,C,U,oo),ao=function(t,e){return function(n,r){var i,o
for(i in r)o=t(r[i]),n._computations[i]=new e(n,i,o)}}(io,so),uo=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g,v){var m=["adapt","modifyArrays","magic","twoway","lazy","debug","isolated"]
return function(y,b){var w,E,_,x,k,O,S
if(f(b.adaptors)&&(i("The `adaptors` option, to indicate which adaptors should be used with a given Ractive instance, has been deprecated in favour of `adapt`. See [TODO] for more information"),b.adapt=b.adaptors,delete b.adaptors),w=y.constructor.defaults,n.keys.forEach(function(t){void 0===b[t]&&(b[t]=w[t])}),m.forEach(function(t){y[t]=b[t]}),"string"==typeof y.adapt&&(y.adapt=[y.adapt]),y.magic&&!d)throw new Error("Getters and setters (magic mode) are not supported in this browser")
if(u(y,{_initing:{value:!0,writable:!0},_guid:{value:l()},_subs:{value:o(null),configurable:!0},_cache:{value:{}},_cacheMap:{value:o(null)},_deps:{value:[]},_depsMap:{value:o(null)},_patternObservers:{value:[]},_evaluators:{value:o(null)},_computations:{value:o(null)},_twowayBindings:{value:{}},_animations:{value:[]},nodes:{value:{}},_wrapped:{value:o(null)},_liveQueries:{value:[]},_liveComponentQueries:{value:[]},_childInitQueue:{value:[]},_changes:{value:[]},_unresolvedImplicitDependencies:{value:[]}}),b._parent&&b._component&&(u(y,{_parent:{value:b._parent},component:{value:b._component}}),b._component.instance=y),b.el&&(y.el=c(b.el),!y.el&&y.debug))throw new Error("Could not find container element")
if(b.eventDefinitions&&(i("ractive.eventDefinitions has been deprecated in favour of ractive.events. Support will be removed in future versions"),b.events=b.eventDefinitions),r.forEach(function(t){y.constructor[t]?y[t]=s(o(y.constructor[t]),b[t]):b[t]&&(y[t]=b[t])}),y.data||(y.data={}),S=w.computed?s(o(w.computed),b.computed):b.computed,S&&v(y,S),E=b.template,"string"==typeof E){if(!g)throw new Error(e.missingParser)
if("#"===E.charAt(0)&&t){if(_=document.getElementById(E.substring(1)),!_)throw new Error("Could not find template element ("+E+")")
x=g(_.innerHTML,b)}else x=g(E,b)}else x=E
h(x)&&(a(y.partials,x.partials),x=x.main),x&&1===x.length&&"string"==typeof x[0]&&(x=x[0]),y.template=x,s(y.partials,b.partials),y.parseOptions={preserveWhitespace:b.preserveWhitespace,sanitize:b.sanitize,stripComments:b.stripComments},y.transitionsEnabled=b.noIntro?!1:b.transitionsEnabled,t&&!y.el&&(y.el=document.createDocumentFragment()),y.el&&!b.append&&(y.el.innerHTML=""),k=new p(function(t){O=t}),y.render(y.el,O),b.complete&&k.then(b.complete.bind(y)),y.transitionsEnabled=b.transitionsEnabled,y._initing=!1}}(u,wr,i,Gi,Y,je,Xi,ir,h,_e,te,I,Ki,g,z,bi,ao),co=function(t,e,n){return function(r,i,o){t.keys.forEach(function(t){var n=o[t],r=i.defaults[t]
"function"==typeof n&&"function"==typeof r&&(o[t]=e(n,r))}),r.beforeInit&&r.beforeInit(o),n(r,o),o._parent&&o._parent._rendering?o._parent._childInitQueue.push({instance:r,options:o}):r.init&&r.init(o)}}(i,Qi,uo),ho=function(t,e,n,r,i,o,s,a,u,c,h){var f
return h.push(function(){f=h.Ractive}),function(h){var l,p,d,g=this
if(h.prototype instanceof f&&(h=r({},h,h.prototype,h.defaults)),l=function(t){c(this,l,t||{})},l.prototype=t(g.prototype),l.prototype.constructor=l,e(l,{extend:{value:g.extend},_guid:{value:n()}}),i(l,g),o(l,h),l.adaptors&&(d=l.defaults.adapt.length))for(;d--;)p=l.defaults.adapt[d],"string"==typeof p&&(l.defaults.adapt[d]=l.adaptors[p]||p)
return h.template&&(a(l),s(l,h),u(l)),l}}(je,h,Ki,Xi,Ji,to,eo,no,ro,co,w),fo=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p){var d=function(t){l(this,t)}
return d.prototype=r,n(d,{partials:{value:i},adaptors:{value:o},easing:{value:a},transitions:{value:{}},events:{value:{}},components:{value:s},decorators:{value:{}},interpolators:{value:u},defaults:{value:t.defaults},svg:{value:e},VERSION:{value:"0.4.0"}}),d.eventDefinitions=d.events,d.prototype.constructor=d,d.Promise=c,d.extend=h,d.parse=f,p.Ractive=d,d}(i,o,h,zi,Er,j,Hi,$i,ee,g,ho,bi,uo,w),lo=function(t,e){for(var n="function";e.length;)e.pop()()
if(typeof Date.now!==n||typeof String.prototype.trim!==n||typeof Object.keys!==n||typeof Array.prototype.indexOf!==n||typeof Array.prototype.forEach!==n||typeof Array.prototype.map!==n||typeof Array.prototype.filter!==n||"undefined"!=typeof window&&typeof window.addEventListener!==n)throw new Error("It looks like you're attempting to use Ractive.js in an older browser. You'll need to use one of the 'legacy builds' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.")
return"undefined"!=typeof window&&window.Node&&!window.Node.prototype.contains&&window.HTMLElement&&window.HTMLElement.prototype.contains&&(window.Node.prototype.contains=window.HTMLElement.prototype.contains),t}(fo,w,r)
"undefined"!=typeof e&&e.exports?e.exports=lo:"function"==typeof define&&define.amd&&define(function(){return lo}),t.Ractive=lo,lo.noConflict=function(){return t.Ractive=n,lo}}("undefined"!=typeof window?window:this)},{}],85:[function(t,e){e.exports=function(t,e){for(var n=0,r=e.indexOf(t);-1!==r;)n++,r=e.indexOf(t,r+1)
return n}},{}],86:[function(t,e){function n(){return Object.create(new a)}function r(t,e){var n=Object.create(t),r=0
return e.forEach(function(t){var e,i,o=t.split("=")
o.length>1?(e=o[0],i=o[1]):(r++,e=r,i=o[0]),n[e]=i}),n}function i(t){var e=t.data
return e||(e=t.ractive?t.ractive.get():{}),t.templateElements=[],t.html=t.html.replace(/::([^:]+)::/gm,function(i,a,u,c){var h=s("<code",c.substr(0,u)),f=s("</code",c.substr(0,u))
if(h!==f)return i
var l=n(),p=a.split("|")
return l.postName=p.shift(0),l.elementId=o.generateId(l.postName),l.data=r(e,p),t.templateElements.push(l),o.generatePostDiv(l.elementId)}),t}var o=t("./templateToolbox"),s=t("./numberOfOccurrances"),a=t("events").EventEmitter
e.exports=i},{"./numberOfOccurrances":85,"./templateToolbox":87,events:97}],87:[function(t,e){function n(t){return t.metadata.markdown!==!1?h.makeHtml(t.content):t.content}function r(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8
return n.toString(16)})}function i(t){return"noddity_post_"+t+"_"+r()}function o(t){var e=f.exec(t)
return null!==e?e[1]:void 0}function s(t){return f.test(t)}function a(t){return'<span class="noddity-template" id="'+t+'"></span>'}function u(t,e){var n=Object.create(e),r=0
return t.forEach(function(t){var e,i,o=t.split("=")
o.length>1?(e=o[0],i=o[1]):(r++,e=r,i=o[0]),n[e]=i}),n}var c=t("pagedown").Converter,h=new c,f=/noddity_post_(.+)_[\da-z]{12}4[\da-z]{19}/
e.exports={generateId:i,getPostName:o,generatePostDiv:a,isAPostDiv:s,getTemplateDataObject:u,htmlify:n}},{pagedown:91}],88:[function(t,e){e.exports=function(t){var e={}
return t.on("post changed",function(t,n){e[t]&&e[t].forEach(function(t){t.emit("post changed",n)})}),function(t){"undefined"==typeof e[t.postName]&&(e[t.postName]=[]),e[t.postName].push(t),t.ractive.on("teardown",function(){e[t.postName]=e[t.postName].filter(function(e){return e!==t})})}}},{}],89:[function(t,e,n){var r
r="object"==typeof n&&"function"==typeof t?n:{},function(){function t(t){return t}function e(){return!1}function n(){}function i(){}n.prototype={chain:function(e,n){var r=this[e]
if(!r)throw new Error("unknown hook "+e)
this[e]=r===t?n:function(){var t=Array.prototype.slice.call(arguments,0)
return t[0]=r.apply(null,t),n.apply(null,t)}},set:function(t,e){if(!this[t])throw new Error("unknown hook "+t)
this[t]=e},addNoop:function(e){this[e]=t},addFalse:function(t){this[t]=e}},r.HookCollection=n,i.prototype={set:function(t,e){this["s_"+t]=e},get:function(t){return this["s_"+t]}},r.Converter=function(){function t(t){return t=t.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(t,e,n,r,i,o){return e=e.toLowerCase(),j.set(e,x(n)),i?r:(o&&M.set(e,o.replace(/"/g,"&quot;")),"")})}function e(t){return t=t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,r),t=t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,r),t=t.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r),t=t.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,r),t=t.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r)}function r(t,e){var n=e
return n=n.replace(/^\n+/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(P.push(n)-1)+"K\n\n"}function o(t,n){t=L.preBlockGamut(t,B),t=p(t)
var r="<hr />\n"
return t=t.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,r),t=t.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,r),t=t.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,r),t=d(t),t=v(t),t=E(t),t=L.postBlockGamut(t,B),t=e(t),t=_(t,n)}function s(t){return t=L.preSpanGamut(t),t=y(t),t=a(t),t=k(t),t=h(t),t=u(t),t=S(t),t=t.replace(/~P/g,"://"),t=x(t),t=w(t),t=t.replace(/  +\n/g," <br>\n"),t=L.postSpanGamut(t)}function a(t){var e=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi
return t=t.replace(e,function(t){var e=t.replace(/(.)<\/?code>(?=.)/g,"$1`")
return e=R(e,"!"==t.charAt(1)?"\\`*_/":"\\`*_")})}function u(t){return t=t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,c),t=t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,c),t=t.replace(/(\[([^\[\]]+)\])()()()()()/g,c)}function c(t,e,n,r,i,o,s,a){void 0==a&&(a="")
var u=e,c=n.replace(/:\/\//g,"~P"),h=r.toLowerCase(),l=i,p=a
if(""==l)if(""==h&&(h=c.toLowerCase().replace(/ ?\n/g," ")),l="#"+h,void 0!=j.get(h))l=j.get(h),void 0!=M.get(h)&&(p=M.get(h))
else{if(!(u.search(/\(\s*\)$/m)>-1))return u
l=""}l=C(l),l=R(l,"*_")
var d='<a href="'+l+'"'
return""!=p&&(p=f(p),p=R(p,"*_"),d+=' title="'+p+'"'),d+=">"+c+"</a>"}function h(t){return t=t.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,l),t=t.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,l)}function f(t){return t.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function l(t,e,n,r,i,o,s,a){var u=e,c=n,h=r.toLowerCase(),l=i,p=a
if(p||(p=""),""==l){if(""==h&&(h=c.toLowerCase().replace(/ ?\n/g," ")),l="#"+h,void 0==j.get(h))return u
l=j.get(h),void 0!=M.get(h)&&(p=M.get(h))}c=R(f(c),"*_[]()"),l=R(l,"*_")
var d='<img src="'+l+'" alt="'+c+'"'
return p=f(p),p=R(p,"*_"),d+=' title="'+p+'"',d+=" />"}function p(t){return t=t.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(t,e){return"<h1>"+s(e)+"</h1>\n\n"}),t=t.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(t,e){return"<h2>"+s(e)+"</h2>\n\n"}),t=t.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(t,e,n){var r=e.length
return"<h"+r+">"+s(n)+"</h"+r+">\n\n"})}function d(t){t+="~0"
var e=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm
return F?t=t.replace(e,function(t,e,n){var r=e,i=n.search(/[*+-]/g)>-1?"ul":"ol",o=g(r,i)
return o=o.replace(/\s+$/,""),o="<"+i+">"+o+"</"+i+">\n"}):(e=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,t=t.replace(e,function(t,e,n,r){var i=e,o=n,s=r.search(/[*+-]/g)>-1?"ul":"ol",a=g(o,s)
return a=i+"<"+s+">\n"+a+"</"+s+">\n"})),t=t.replace(/~0/,"")}function g(t,e){F++,t=t.replace(/\n{2,}$/,"\n"),t+="~0"
var n=D[e],r=new RegExp("(^[ \\t]*)("+n+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+n+")[ \\t]+))","gm"),i=!1
return t=t.replace(r,function(t,e,n,r){var a=r,u=/\n\n$/.test(a),c=u||a.search(/\n{2,}/)>-1
return c||i?a=o(A(a),!0):(a=d(A(a)),a=a.replace(/\n$/,""),a=s(a)),i=u,"<li>"+a+"</li>\n"}),t=t.replace(/~0/g,""),F--,t}function v(t){return t+="~0",t=t.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(t,e,n){var r=e,i=n
return r=b(A(r)),r=N(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),r="<pre><code>"+r+"\n</code></pre>","\n\n"+r+"\n\n"+i}),t=t.replace(/~0/,"")}function m(t){return t=t.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(P.push(t)-1)+"K\n\n"}function y(t){return t=t.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(t,e,n,r){var i=r
return i=i.replace(/^([ \t]*)/g,""),i=i.replace(/[ \t]*$/g,""),i=b(i),i=i.replace(/:\/\//g,"~P"),e+"<code>"+i+"</code>"})}function b(t){return t=t.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=R(t,"*_{}[]\\",!1)}function w(t){return t=t.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),t=t.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")}function E(t){return t=t.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(t,e){var n=e
return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=o(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(t,e){var n=e
return n=n.replace(/^  /gm,"~0"),n=n.replace(/~0/g,"")}),m("<blockquote>\n"+n+"\n</blockquote>")})}function _(t,e){t=t.replace(/^\n+/g,""),t=t.replace(/\n+$/g,"")
for(var n=t.split(/\n{2,}/g),r=[],i=/~K(\d+)K/,o=n.length,a=0;o>a;a++){var u=n[a]
i.test(u)?r.push(u):/\S/.test(u)&&(u=s(u),u=u.replace(/^([ \t]*)/g,"<p>"),u+="</p>",r.push(u))}if(!e){o=r.length
for(var a=0;o>a;a++)for(var c=!0;c;)c=!1,r[a]=r[a].replace(/~K(\d+)K/g,function(t,e){return c=!0,P[e]})}return r.join("\n\n")}function x(t){return t=t.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),t=t.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;")}function k(t){return t=t.replace(/\\(\\)/g,I),t=t.replace(/\\([`*_{}\[\]()>#+-.!])/g,I)}function O(t,e,n,r){if(e)return t
if(")"!==r.charAt(r.length-1))return"<"+n+r+">"
for(var i=r.match(/[()]/g),o=0,s=0;s<i.length;s++)"("===i[s]?0>=o?o=1:o++:o--
var a=""
if(0>o){var u=new RegExp("\\){1,"+-o+"}$")
r=r.replace(u,function(t){return a=t,""})}return"<"+n+r+">"+a}function S(t){t=t.replace(/(="|<)?\b(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\])])(?=$|\W)/gi,O)
var e=function(t,e){return'<a href="'+e+'">'+L.plainLinkText(e)+"</a>"}
return t=t.replace(/<((https?|ftp):[^'">\s]+)>/gi,e)}function T(t){return t=t.replace(/~E(\d+)E/g,function(t,e){var n=parseInt(e)
return String.fromCharCode(n)})}function A(t){return t=t.replace(/^(\t|[ ]{1,4})/gm,"~0"),t=t.replace(/~0/g,"")}function N(t){if(!/\t/.test(t))return t
var e,n=["    ","   ","  "," "],r=0
return t.replace(/[\n\t]/g,function(t,i){return"\n"===t?(r=i+1,t):(e=(i-r)%4,r=i+1,n[e])})}function C(t){if(!t)return""
var e=t.length
return t.replace(U,function(n,r){return"~D"==n?"%24":":"!=n||r!=e-1&&!/[0-9\/]/.test(t.charAt(r+1))?"%"+n.charCodeAt(0).toString(16):":"})}function R(t,e,n){var r="(["+e.replace(/([\[\]\\])/g,"\\$1")+"])"
n&&(r="\\\\"+r)
var i=new RegExp(r,"g")
return t=t.replace(i,I)}function I(t,e){var n=e.charCodeAt(0)
return"~E"+n+"E"}var L=this.hooks=new n
L.addNoop("plainLinkText"),L.addNoop("preConversion"),L.addNoop("postNormalization"),L.addNoop("preBlockGamut"),L.addNoop("postBlockGamut"),L.addNoop("preSpanGamut"),L.addNoop("postSpanGamut"),L.addNoop("postConversion")
var j,M,P,F
this.makeHtml=function(n){if(j)throw new Error("Recursive call to converter.makeHtml")
return j=new i,M=new i,P=[],F=0,n=L.preConversion(n),n=n.replace(/~/g,"~T"),n=n.replace(/\$/g,"~D"),n=n.replace(/\r\n/g,"\n"),n=n.replace(/\r/g,"\n"),n="\n\n"+n+"\n\n",n=N(n),n=n.replace(/^[ \t]+$/gm,""),n=L.postNormalization(n),n=e(n),n=t(n),n=o(n),n=T(n),n=n.replace(/~D/g,"$$"),n=n.replace(/~T/g,"~"),n=L.postConversion(n),P=M=j=null,n}
var B=function(t){return o(t)},D={ol:"\\d+[.]",ul:"[*+-]"},U=/(?:["'*()[\]:]|~D)/g}}()},{}],90:[function(t,e,n){!function(){function e(t){return t.replace(/<[^>]*>?/gi,r)}function r(t){return t.match(a)||t.match(u)||t.match(c)?t:""}function i(t){if(""==t)return""
var e=/<\/?\w+[^>]*(\s|$|>)/g,n=t.toLowerCase().match(e),r=(n||[]).length
if(0==r)return t
for(var i,o,s,a="<p><img><br><li><hr>",u=[],c=[],h=!1,f=0;r>f;f++)if(i=n[f].replace(/<\/?(\w+).*/,"$1"),!(u[f]||a.search("<"+i+">")>-1)){if(o=n[f],s=-1,!/^<\//.test(o))for(var l=f+1;r>l;l++)if(!u[l]&&n[l]=="</"+i+">"){s=l
break}-1==s?h=c[f]=!0:u[s]=!0}if(!h)return t
var f=0
return t=t.replace(e,function(t){var e=c[f]?"":t
return f++,e})}var o,s
"object"==typeof n&&"function"==typeof t?(o=n,s=t("./Markdown.Converter").Converter):(o=window.Markdown,s=o.Converter),o.getSanitizingConverter=function(){var t=new s
return t.hooks.chain("postConversion",e),t.hooks.chain("postConversion",i),t}
var a=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,u=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,c=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i}()},{"./Markdown.Converter":89}],91:[function(t,e,n){n.Converter=t("./Markdown.Converter").Converter,n.getSanitizingConverter=t("./Markdown.Sanitizer").getSanitizingConverter},{"./Markdown.Converter":89,"./Markdown.Sanitizer":90}],92:[function(t,e){!function(t){"use strict"
var n=t.Ractive,r=function(){var t={el:void 0,append:!1,template:{v:1,t:[]},preserveWhitespace:!1,sanitize:!1,stripComments:!0,data:{},computed:{},magic:!1,modifyArrays:!0,adapt:[],isolated:!1,twoway:!0,lazy:!1,noIntro:!1,transitionsEnabled:!0,complete:void 0,noCssTransform:!1,debug:!1}
return t}(),i={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},o=[],s=Object.prototype.hasOwnProperty,a=function(){var t=Object.prototype.toString
return function(e){return"[object Array]"===t.call(e)}}(),u=function(){var t=Object.prototype.toString
return function(e){return e&&"[object Object]"===t.call(e)}}(),c=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},h=function(t,e,n,r,i){var o,s,a
return t.push(function(){s=t.interpolate}),a=/^([+-]?[0-9]+\.?(?:[0-9]+)?)(px|em|ex|%|in|cm|mm|pt|pc)$/,o={number:function(t,e){var n
return i(t)&&i(e)?(t=+t,e=+e,n=e-t,n?function(e){return t+e*n}:function(){return t}):null},array:function(t,e){var r,i,o,a
if(!n(t)||!n(e))return null
for(r=[],i=[],a=o=Math.min(t.length,e.length);a--;)i[a]=s(t[a],e[a])
for(a=o;a<t.length;a+=1)r[a]=t[a]
for(a=o;a<e.length;a+=1)r[a]=e[a]
return function(t){for(var e=o;e--;)r[e]=i[e](t)
return r}},object:function(t,n){var i,o,a,u,c
if(!r(t)||!r(n))return null
i=[],u={},a={}
for(c in t)e.call(t,c)&&(e.call(n,c)?(i.push(c),a[c]=s(t[c],n[c])):u[c]=t[c])
for(c in n)e.call(n,c)&&!e.call(t,c)&&(u[c]=n[c])
return o=i.length,function(t){for(var e,n=o;n--;)e=i[n],u[e]=a[e](t)
return u}},cssLength:function(t,e){var n,r,i,o,s,u,c,h
return 0!==t&&"string"!=typeof t||0!==e&&"string"!=typeof e?null:(n=a.exec(t),r=a.exec(e),i=n?n[2]:"",o=r?r[2]:"",i&&o&&i!==o?null:(c=i||o,s=n?+n[1]:0,u=r?+r[1]:0,h=u-s,h?function(t){return s+t*h+c}:function(){return s+c}))}}}(o,s,a,u,c),f=function(){var t
return t="undefined"==typeof document?!1:document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}(),l=function(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)},p=function(){function t(t){setTimeout(t,0)}function e(t,e){return function(){for(var n;n=t.shift();)n(e)}}function n(t,e,i,o){var s
if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise")
if(e instanceof r)e.then(i,o)
else if(!e||"object"!=typeof e&&"function"!=typeof e)i(e)
else{try{s=e.then}catch(a){return void o(a)}if("function"==typeof s){var u,c,h
c=function(e){u||(u=!0,n(t,e,i,o))},h=function(t){u||(u=!0,o(t))}
try{s.call(e,c,h)}catch(a){if(!u)return o(a),void(u=!0)}}else i(e)}}var r,i={},o={},s={}
return"function"==typeof p?r=p:(r=function(a){var u,c,h,f,l,p,d=[],g=[],v=i
h=function(n){return function(r){v===i&&(u=r,v=n,c=e(v===o?d:g,u),t(c))}},f=h(o),l=h(s)
try{a(f,l)}catch(m){l(m)}return p={then:function(e,o){var s=new r(function(r,a){var u=function(t,e,i){e.push("function"==typeof t?function(e){var i
try{i=t(e),n(s,i,r,a)}catch(o){a(o)}}:i)}
u(e,d,r),u(o,g,a),v!==i&&t(c)})
return s}},p["catch"]=function(t){return this.then(null,t)},p},r.all=function(t){return new r(function(e,n){var r,i,o,s=[]
if(!t.length)return void e(s)
for(o=function(i){t[i].then(function(t){s[i]=t,--r||e(s)},n)},r=i=t.length;i--;)o(i)})},r.resolve=function(t){return new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})}),r}(),d=function(){var t=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g
return function(e){return(e||"").replace(t,".$1")}}(),g=function(t){do if(t.context)return t.context
while(t=t.parent)
return""},v=function(t,e){return null===t&&null===e?!0:"object"==typeof t||"object"==typeof e?!1:t===e},m=function(t,e,n){var r
t.push(function(){return r=t.runloop})
var i=function(t,e,n,r,i){this.root=t,this.keypath=e,this.priority=i,this.otherInstance=n,this.otherKeypath=r,this.bind(),this.value=this.root.viewmodel.get(this.keypath)}
return i.prototype={setValue:function(t){var i=this
return this.updating||this.counterpart&&this.counterpart.updating?void(this.value=t):void(e(t)&&t._ractive&&t._ractive.setting||n(t,this.value)||(this.updating=!0,r.addViewmodel(this.otherInstance.viewmodel),this.otherInstance.viewmodel.set(this.otherKeypath,t),this.value=t,r.scheduleTask(function(){return i.updating=!1})))},bind:function(){this.root.viewmodel.register(this.keypath,this)},rebind:function(t){this.unbind(),this.keypath=t,this.counterpart.otherKeypath=t,this.bind()},unbind:function(){this.root.viewmodel.unregister(this.keypath,this)}},function(t,e,n,r){var o,s,a,u,c,h
o=n+"="+r,a=t.bindings,a[o]||(a[o]=!0,s=t.instance,u=t.parentFragment.priority,c=new i(e,n,s,r,u),a.push(c),s.twoway&&(h=new i(s,r,e,n,1),a.push(h),c.counterpart=h,h.counterpart=c))}}(o,a,v),y=function(t,e,n){function r(t,e){var n
if("."===e)return t
if(n=t?t.split("."):[],"../"===e.substr(0,3)){for(;"../"===e.substr(0,3);){if(!n.length)throw new Error(i)
n.pop(),e=e.substring(3)}return n.push(e),n.join(".")}return t?t+e.replace(/^\.\//,"."):e.replace(/^\.\/?/,"")}var i,o
return i='Could not resolve reference - too many "../" prefixes',o={evaluateWrapped:!0},function s(i,a,u){var c,h,f,l,p,d,g,v,m,y
if(a=t(a),"~/"===a.substr(0,2))return a.substring(2)
if("."===a.charAt(0))return r(e(u),a)
h=a.split(".")[0]
do if(c=u.context,c&&(d=!0,p=i.viewmodel.get(c,o),p&&("object"==typeof p||"function"==typeof p)&&h in p))return c+"."+a
while(u=u.parent)
if(h in i.data||h in i.viewmodel.computations)return a
if(i._parent&&!i.isolated){if(u=i.component.parentFragment,u.indexRefs&&void 0!==(f=u.indexRefs[a]))return i.component.indexRefBindings[a]=a,void i.viewmodel.set(a,f,!0)
if(l=s(i._parent,a,u)){for(g=l.split("."),v=a.split(".");g.length>1&&v.length>1&&g[g.length-1]===v[v.length-1];)g.pop(),v.pop()
return m=g.join("."),y=v.join("."),i.viewmodel.set(y,i._parent.viewmodel.get(m),!0),n(i.component,i._parent,m,y),a}}return d?void 0!==i.viewmodel.get(a)?a:void 0:a}}(d,g,m),b=function(t){function e(t){t.detach()}function n(t){t.detachNodes()}function r(t){!t.ready||t.outros.length||t.outroChildren||(t.outrosComplete||(t.parent?t.parent.decrementOutros(t):t.detachNodes(),t.outrosComplete=!0),t.intros.length||t.totalChildren||("function"==typeof t.callback&&t.callback(),t.parent&&t.parent.decrementTotal()))}var i=function(t,e){this.callback=t,this.parent=e,this.intros=[],this.outros=[],this.children=[],this.totalChildren=this.outroChildren=0,this.detachQueue=[],this.outrosComplete=!1,e&&e.addChild(this)}
return i.prototype={addChild:function(t){this.children.push(t),this.totalChildren+=1,this.outroChildren+=1},decrementOutros:function(){this.outroChildren-=1,r(this)},decrementTotal:function(){this.totalChildren-=1,r(this)},add:function(t){var e=t.isIntro?this.intros:this.outros
e.push(t)},remove:function(e){var n=e.isIntro?this.intros:this.outros
t(n,e),r(this)},init:function(){this.ready=!0,r(this)},detachNodes:function(){this.detachQueue.forEach(e),this.children.forEach(n)}},i}(l),w=function(t,e,n,r,i){function o(){var t,e,n
for(t=0;t<a.viewmodels.length;t+=1)e=a.viewmodels[t],n=e.applyChanges(),n&&e.ractive.fire("change",n)
for(a.viewmodels.length=0,s(),t=0;t<a.views.length;t+=1)a.views[t].update()
for(a.views.length=0,t=0;t<a.tasks.length;t+=1)a.tasks[t]()
return a.tasks.length=0,a.viewmodels.length?o():void 0}function s(){var t,e,n
if(c.length)for(t=c.splice(0,c.length);e=t.pop();)e.keypath||(n=r(e.root,e.ref,e.parentFragment),void 0!==n?e.resolve(n):c.push(e))}var a,u,c=[]
return u={start:function(t,e){var r,o
return e&&(r=new n(function(t){return o=t})),a={previousBatch:a,transitionManager:new i(o,a&&a.transitionManager),views:[],tasks:[],viewmodels:[]},t&&a.viewmodels.push(t.viewmodel),r},end:function(){o(),a.transitionManager.init(),a=a.previousBatch},addViewmodel:function(t){a?-1===a.viewmodels.indexOf(t)&&a.viewmodels.push(t):t.applyChanges()},registerTransition:function(t){t._manager=a.transitionManager,a.transitionManager.add(t)},addView:function(t){a.views.push(t)},addUnresolved:function(t){c.push(t)},removeUnresolved:function(t){e(c,t)},detachWhenReady:function(t){a.transitionManager.detachQueue.push(t)},scheduleTask:function(t){a?a.tasks.push(t):t()}},t.runloop=u,u}(o,l,p,y,b),E=function(){var t=/^\s*[0-9]+\s*$/
return function(e){return t.test(e)?[]:{}}}(),_=function(t,e,n){function r(e,n,r){function i(e){var r,i
e.value=n,e.updating||(i=e.ractive,r=e.keypath,e.updating=!0,t.start(i),i.viewmodel.mark(r),t.end(),e.updating=!1)}var o,s,a,u,c,h
if(o=e.obj,s=e.prop,r&&!r.configurable){if("length"===s)return
throw new Error('Cannot use magic mode with property "'+s+'" - object is not configurable')}r&&(a=r.get,u=r.set),c=a||function(){return n},h=function(t){u&&u(t),n=a?a():t,h._ractiveWrappers.forEach(i)},h._ractiveWrappers=[e],Object.defineProperty(o,s,{get:c,set:h,enumerable:!0,configurable:!0})}var i,o
try{Object.defineProperty({},"test",{value:0}),i={filter:function(t,e,r){var i,o,s,a,u
return e?(i=e.split("."),o=i.pop(),s=i.join("."),(a=r.viewmodel.wrapped[s])&&!a.magic?!1:(u=r.get(s),n(u)&&/^[0-9]+$/.test(o)?!1:u&&("object"==typeof u||"function"==typeof u))):!1},wrap:function(t,e,n){return new o(t,e,n)}},o=function(t,e,n){var i,o,s,a
return this.magic=!0,this.ractive=t,this.keypath=n,this.value=e,i=n.split("."),this.prop=i.pop(),o=i.join("."),this.obj=o?t.get(o):t.data,s=this.originalDescriptor=Object.getOwnPropertyDescriptor(this.obj,this.prop),s&&s.set&&(a=s.set._ractiveWrappers)?void(-1===a.indexOf(this)&&a.push(this)):void r(this,e,s)},o.prototype={get:function(){return this.value},reset:function(e){this.updating||(this.updating=!0,this.obj[this.prop]=e,t.addViewmodel(this.ractive.viewmodel),this.ractive.viewmodel.mark(this.keypath),this.updating=!1)},set:function(t,n){this.updating||(this.obj[this.prop]||(this.updating=!0,this.obj[this.prop]=e(t),this.updating=!1),this.obj[this.prop][t]=n)},teardown:function(){var t,e,n,r,i
return this.updating?!1:(t=Object.getOwnPropertyDescriptor(this.obj,this.prop),e=t&&t.set,void(e&&(r=e._ractiveWrappers,i=r.indexOf(this),-1!==i&&r.splice(i,1),r.length||(n=this.obj[this.prop],Object.defineProperty(this.obj,this.prop,this.originalDescriptor||{writable:!0,enumerable:!0,configurable:!0}),this.obj[this.prop]=n))))}}}catch(s){i=!1}return i}(w,E,a),x=function(t){return!!t}(_),k={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},O=function(t,e){var n
return n=t?function(t,n){return n&&n!==e.html?document.createElementNS(n,t):document.createElement(t)}:function(t,n){if(n&&n!==e.html)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information"
return document.createElement(t)}}(f,k),S=function(){var t="object"==typeof document
return t}(),T=function(t){var e
try{Object.defineProperty({},"test",{value:0}),t&&Object.defineProperty(document.createElement("div"),"test",{value:0}),e=Object.defineProperty}catch(n){e=function(t,e,n){t[e]=n.value}}return e}(S),A=function(t,e,n){var r
try{try{Object.defineProperties({},{test:{value:0}})}catch(i){throw i}n&&Object.defineProperties(t("div"),{test:{value:0}}),r=Object.defineProperties}catch(i){r=function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t,r,n[r])}}return r}(O,T,S),N=function(t){return function(e,n,r){var i
if("string"!=typeof n||!t(r))throw new Error("Bad arguments")
if(i=+e.get(n)||0,!t(i))throw new Error("Cannot add to a non-numeric value")
return e.set(n,i+r)}}(c),C=function(t){return function(e,n){return t(this,e,void 0===n?1:+n)}}(N),R=function(t){var e=/^\.+/
return function(n){return t(n).replace(e,"")}}(d),I=["o","ms","moz","webkit"],L=function(t){var e
return"undefined"==typeof window?e=null:(!function(t,e,n){var r,i
if(!n.requestAnimationFrame){for(r=0;r<t.length&&!n.requestAnimationFrame;++r)n.requestAnimationFrame=n[t[r]+"RequestAnimationFrame"]
n.requestAnimationFrame||(i=n.setTimeout,n.requestAnimationFrame=function(t){var n,r,o
return n=Date.now(),r=Math.max(0,16-(n-e)),o=i(function(){t(n+r)},r),e=n+r,o})}}(t,0,window),e=window.requestAnimationFrame),e}(I),j=function(){var t
return t="undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()}}(),M=function(t,e,n){var r=[],i={tick:function(){var o,s,a
for(a=e(),n.start(),o=0;o<r.length;o+=1)s=r[o],s.tick(a)||r.splice(o--,1)
n.end(),r.length?t(i.tick):i.running=!1},add:function(e){r.push(e),i.running||(i.running=!0,t(i.tick))},abort:function(t,e){for(var n,i=r.length;i--;)n=r[i],n.root===e&&n.keypath===t&&n.stop()}}
return i}(L,j,w),P=function(){var t,e={}
return t="undefined"!=typeof console&&"function"==typeof console.warn&&"function"==typeof console.warn.apply?function(t,n){if(!n){if(e[t])return
e[t]=!0}console.warn(t)}:function(){}}(),F=function(){function t(t){return t.trim?t.trim():t.replace(/^\s+/,"").replace(/\s+$/,"")}function e(t){return t.str}var n=/(?:^|\})?\s*([^\{\}]+)\s*\{/g,r=/\/\*.*?\*\//g,i=/((?:(?:\[[^\]+]\])|(?:[^\s\+\>\~:]))+)((?::[^\s\+\>\~]+)?\s*[\s\+\>\~]?)\s*/g,o=/^@media/,s=/\[data-rvcguid="[a-z0-9-]+"]/g
return function(a,u){var c,h
return h=function(t){var n,r,o,s,a,c,h,f,l=[]
for(n=[];r=i.exec(t);)n.push({str:r[0],base:r[1],modifiers:r[2]})
for(s='[data-rvcguid="'+u+'"]',a=n.map(e),f=n.length;f--;)h=a.slice(),o=n[f],h[f]=o.base+s+o.modifiers||"",c=a.slice(),c[f]=s+" "+c[f],l.push(h.join(" "),c.join(" "))
return l.join(", ")},c=s.test(a)?a.replace(s,'[data-rvcguid="'+u+'"]'):a.replace(r,"").replace(n,function(e,n){var r,i
return o.test(n)?e:(r=n.split(",").map(t),i=r.map(h).join(", ")+" ",e.replace(n,i))})}}(),B=function(t){function e(t,e,r){var i,o=e.constructor._guid;(i=n(r.css,r,o)||n(t.css,t,o))&&(e.constructor.css=i)}function n(e,n,r){return e?n.noCssTransform?e:t(e,r):void 0}var r={name:"css",extend:e,init:function(){}}
return r}(F),D=function(){function t(t,e){return"function"==typeof e&&/_super/.test(t)}return function(e,n,r){return r||t(e,n)?function(){var t,r="_super"in this,i=this._super
return this._super=n,t=e.apply(this,arguments),r&&(this._super=i),t}:e}}(),U=function(t){function e(t,e,n){var r=n.data||{},i=o(t.prototype.data)
return s(i,r)}function n(t,n,r){n.data=e(t,n,r)}function r(t,n,r){var i=r.data,o=e(t,n,r)
return"function"==typeof o&&(o=o.call(n,i)||i),n.data=o||{}}function i(t){var e=this.init(t.constructor,t,t)
return e?(t.data=e,!0):void 0}function o(t){if("function"!=typeof t||!Object.keys(t).length)return t
var e={}
return a(t,e),s(t,e)}function s(t,e){return"function"==typeof e?h(e,t):"function"==typeof t?c(e,t):u(e,t)}function a(t,e,n){for(var r in t)n&&r in e||(e[r]=t[r])}function u(t,e){return t=t||{},e?(a(e,t,!0),t):t}function c(t,e){return function(n){var r
if(t){r=[]
for(var i in t)n&&i in n||r.push(i)}return n=e.call(this,n)||n,r&&r.length&&(n=n||{},r.forEach(function(e){n[e]=t[e]})),n}}function h(e,n){var r
return r="function"!=typeof n?function(t){u(t,n)}:function(e){return n=t(n,function(){},!0),n.call(this,e)||e},t(e,r)}var f={name:"data",extend:n,init:r,reset:i}
return f}(D),V={missingParser:"Missing Ractive.parse - cannot parse template. Either preparse or use the version that includes the parser",mergeComparisonFail:"Merge operation: comparison failed. Falling back to identity checking",noComponentEventArguments:"Components currently only support simple events - you cannot include arguments. Sorry!",noTemplateForPartial:'Could not find template for partial "{name}"',noNestedPartials:"Partials ({{>{name}}}) cannot contain nested inline partials",evaluationError:'Error evaluating "{uniqueString}": {err}',badArguments:"Bad arguments \"{arguments}\". I'm not allowed to argue unless you've paid.",failedComputation:'Failed to compute "{key}": {err}',missingPlugin:'Missing "{name}" {plugin} plugin. You may need to download a {plugin} via http://docs.ractivejs.org/latest/plugins#{plugin}s',badRadioInputBinding:"A radio input can have two-way binding on its name attribute, or its checked attribute - not both",noRegistryFunctionReturn:'A function was specified for "{name}" {registry}, but no {registry} was returned'},W={TEXT:1,INTERPOLATOR:2,TRIPLE:3,SECTION:4,INVERTED:5,CLOSING:6,ELEMENT:7,PARTIAL:8,COMMENT:9,DELIMCHANGE:10,MUSTACHE:11,TAG:12,ATTRIBUTE:13,CLOSING_TAG:14,COMPONENT:15,NUMBER_LITERAL:20,STRING_LITERAL:21,ARRAY_LITERAL:22,OBJECT_LITERAL:23,BOOLEAN_LITERAL:24,GLOBAL:26,KEY_VALUE_PAIR:27,REFERENCE:30,REFINEMENT:31,MEMBER:32,PREFIX_OPERATOR:33,BRACKETED:34,CONDITIONAL:35,INFIX_OPERATOR:36,INVOCATION:40,SECTION_IF:50,SECTION_UNLESS:51,SECTION_EACH:52,SECTION_WITH:53},q=function(){var t
try{Object.create(null),t=Object.create}catch(e){t=function(){var t=function(){}
return function(e,n){var r
return null===e?{}:(t.prototype=e,r=new t,n&&Object.defineProperties(r,n),r)}}()}return t}(),z={expectedExpression:"Expected a JavaScript expression",expectedParen:"Expected closing paren"},H=function(t){var e=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/
return function(n){var r
return(r=n.matchPattern(e))?{t:t.NUMBER_LITERAL,v:r}:null}}(W),$=function(t){return function(e){var n=e.remaining()
return"true"===n.substr(0,4)?(e.pos+=4,{t:t.BOOLEAN_LITERAL,v:"true"}):"false"===n.substr(0,5)?(e.pos+=5,{t:t.BOOLEAN_LITERAL,v:"false"}):null}}(W),K=function(){var t,e,n
return t=/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/,e=/^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/,n=/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/,function(r){return function(i){var o,s,a,u
for(o=i.pos,s='"',a=!1;!a;)u=i.matchPattern(t)||i.matchPattern(e)||i.matchString(r),u?s+='"'===u?'\\"':"\\'"===u?"'":u:(u=i.matchPattern(n),u?s+="\\u"+("000"+u.charCodeAt(1).toString(16)).slice(-4):a=!0)
return s+='"',JSON.parse(s)}}}(),X=function(t){return t('"')}(K),G=function(t){return t("'")}(K),Z=function(t,e,n){return function(r){var i,o
return i=r.pos,r.matchString('"')?(o=n(r),r.matchString('"')?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):r.matchString("'")?(o=e(r),r.matchString("'")?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):null}}(W,X,G),J={name:/^[a-zA-Z_$][a-zA-Z_$0-9]*/},Q=function(t,e,n){var r=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/
return function(i){var o
return(o=t(i))?r.test(o.v)?o.v:'"'+o.v.replace(/"/g,'\\"')+'"':(o=e(i))?o.v:(o=i.matchPattern(n.name))?o:void 0}}(Z,H,J),Y=function(t,e){return function(n){var r,i,o
return r=n.pos,n.allowWhitespace(),i=e(n),null===i?(n.pos=r,null):(n.allowWhitespace(),n.matchString(":")?(n.allowWhitespace(),o=n.readExpression(),null===o?(n.pos=r,null):{t:t.KEY_VALUE_PAIR,k:i,v:o}):(n.pos=r,null))}}(W,Q),te=function(t){return function e(n){var r,i,o,s
return r=n.pos,o=t(n),null===o?null:(i=[o],n.matchString(",")?(s=e(n),s?i.concat(s):(n.pos=r,null)):i)}}(Y),ee=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.matchString("{")?(i=e(n),n.allowWhitespace(),n.matchString("}")?{t:t.OBJECT_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(W,te),ne=function(t){return function e(n){function r(t){o.push(t)}var i,o,s,a
return i=n.pos,n.allowWhitespace(),s=n.readExpression(),null===s?null:(o=[s],n.allowWhitespace(),n.matchString(",")&&(a=e(n),null===a&&n.error(t.expectedExpression),a.forEach(r)),o)}}(z),re=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.matchString("[")?(i=e(n),n.matchString("]")?{t:t.ARRAY_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(W,ne),ie=function(t,e,n,r,i){return function(o){var s=t(o)||e(o)||n(o)||r(o)||i(o)
return s}}(H,$,Z,ee,re),oe=function(t,e){var n,r,i,o,s
return n=/^\.[a-zA-Z_$0-9]+/,i=function(t){var e=t.matchPattern(r)
return e?"."+e:null},r=/^\[(0|[1-9][0-9]*)\]/,o=/^(?:Array|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null)$/,s=/^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/,function(r){var a,u,c,h,f,l,p
if(a=r.pos,r.matchString("~/"))u="~/"
else for(u="";r.matchString("../");)u+="../"
if(u||(h=r.matchString(".")||""),c=r.matchPattern(/^@(?:index|key)/)||r.matchPattern(e.name)||"",s.test(c))return r.pos=a,null
if(!u&&!h&&o.test(c))return{t:t.GLOBAL,v:c}
if(f=(u||h)+c,!f)return null
for(;l=r.matchPattern(n)||i(r);)f+=l
return r.matchString("(")&&(p=f.lastIndexOf("."),-1!==p?(f=f.substr(0,p),r.pos=a+f.length):r.pos-=1),{t:t.REFERENCE,n:f.replace(/^this\./,"./").replace(/^this$/,".")}}}(W,J),se=function(t,e){return function(n){var r,i
return r=n.pos,n.matchString("(")?(n.allowWhitespace(),i=n.readExpression(),i||n.error(e.expectedExpression),n.allowWhitespace(),n.matchString(")")||n.error(e.expectedParen),{t:t.BRACKETED,x:i}):null}}(W,z),ae=function(t,e,n){return function(r){return t(r)||e(r)||n(r)}}(ie,oe,se),ue=function(t,e,n){return function(r){var i,o,s
if(i=r.pos,r.allowWhitespace(),r.matchString(".")){if(r.allowWhitespace(),o=r.matchPattern(n.name))return{t:t.REFINEMENT,n:o}
r.error("Expected a property name")}return r.matchString("[")?(r.allowWhitespace(),s=r.readExpression(),s||r.error(e.expectedExpression),r.allowWhitespace(),r.matchString("]")||r.error("Expected ']'"),{t:t.REFINEMENT,x:s}):null}}(W,z,J),ce=function(t,e,n,r,i){return function(o){var s,a,u,c
if(a=e(o),!a)return null
for(;a;)if(s=o.pos,u=r(o))a={t:t.MEMBER,x:a,r:u}
else{if(!o.matchString("("))break
o.allowWhitespace(),c=n(o),o.allowWhitespace(),o.matchString(")")||o.error(i.expectedParen),a={t:t.INVOCATION,x:a},c&&(a.o=c)}return a}}(W,ae,ne,ue,z),he=function(t,e,n){var r,i
return i=function(n,r){return function(i){var o
return(o=r(i))?o:i.matchString(n)?(i.allowWhitespace(),o=i.readExpression(),o||i.error(e.expectedExpression),{s:n,o:o,t:t.PREFIX_OPERATOR}):null}},function(){var t,e,o,s,a
for(s="! ~ + - typeof".split(" "),a=n,t=0,e=s.length;e>t;t+=1)o=i(s[t],a),a=o
r=a}(),r}(W,z,ce),fe=function(t,e){var n,r
return r=function(e,n){return function(r){var i,o,s
if(o=n(r),!o)return null
for(;;){if(i=r.pos,r.allowWhitespace(),!r.matchString(e))return r.pos=i,o
if("in"===e&&/[a-zA-Z_$0-9]/.test(r.remaining().charAt(0)))return r.pos=i,o
if(r.allowWhitespace(),s=n(r),!s)return r.pos=i,o
o={t:t.INFIX_OPERATOR,s:e,o:[o,s]}}}},function(){var t,i,o,s,a
for(s="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" "),a=e,t=0,i=s.length;i>t;t+=1)o=r(s[t],a),a=o
n=a}(),n}(W,he),le=function(t,e,n){return function(r){var i,o,s,a
return(o=e(r))?(i=r.pos,r.allowWhitespace(),r.matchString("?")?(r.allowWhitespace(),s=r.readExpression(),s||r.error(n.expectedExpression),r.allowWhitespace(),r.matchString(":")||r.error('Expected ":"'),r.allowWhitespace(),a=r.readExpression(),a||r.error(n.expectedExpression),{t:t.CONDITIONAL,o:[o,s,a]}):(r.pos=i,o)):null}}(W,fe,z),pe=function(t,e){function n(t){return JSON.stringify(String(t))}function r(n,i){var o,s
if(n.t===t.REFERENCE&&-1===i.indexOf(n.n)&&i.unshift(n.n),s=n.o||n.m)if(e(s))r(s,i)
else for(o=s.length;o--;)r(s[o],i)
n.x&&r(n.x,i),n.r&&r(n.r,i),n.v&&r(n.v,i)}function i(e,r,o){var s=function(t){return i(e,t,o)}
switch(r.t){case t.BOOLEAN_LITERAL:case t.GLOBAL:case t.NUMBER_LITERAL:return r.v
case t.STRING_LITERAL:return n(r.v)
case t.ARRAY_LITERAL:return"["+(r.m?r.m.map(s).join(","):"")+"]"
case t.OBJECT_LITERAL:return"{"+(r.m?r.m.map(s).join(","):"")+"}"
case t.KEY_VALUE_PAIR:return r.k+":"+i(e,r.v,o)
case t.PREFIX_OPERATOR:return("typeof"===r.s?"typeof ":r.s)+i(e,r.o,o)
case t.INFIX_OPERATOR:return i(e,r.o[0],o)+("in"===r.s.substr(0,2)?" "+r.s+" ":r.s)+i(e,r.o[1],o)
case t.INVOCATION:return i(e,r.x,o)+"("+(r.o?r.o.map(s).join(","):"")+")"
case t.BRACKETED:return"("+i(e,r.x,o)+")"
case t.MEMBER:return i(e,r.x,o)+i(e,r.r,o)
case t.REFINEMENT:return r.n?"."+r.n:"["+i(e,r.x,o)+"]"
case t.CONDITIONAL:return i(e,r.o[0],o)+"?"+i(e,r.o[1],o)+":"+i(e,r.o[2],o)
case t.REFERENCE:return"${"+o.indexOf(r.n)+"}"
default:e.error("Expected legal JavaScript")}}return function(t){var e,n=[]
return r(t,n),e={r:n,s:i(this,t,n)}}}(W,u),de=function(t,e,n,r,i){var o,s,a=/^\s+/
return s=function(t){this.name="ParseError",this.message=t
try{throw new Error(t)}catch(e){this.stack=e.stack}},s.prototype=Error.prototype,o=function(t,e){var n,r
for(this.str=t,this.options=e||{},this.pos=0,this.init&&this.init(t,e),n=[];this.pos<this.str.length&&(r=this.read());)n.push(r)
this.leftover=this.remaining(),this.result=this.postProcess?this.postProcess(n,e):n},o.prototype={read:function(t){var e,n,r,i
for(t||(t=this.converters),e=this.pos,r=t.length,n=0;r>n;n+=1)if(this.pos=e,i=t[n](this))return i
return null},readExpression:function(){return r(this)},flattenExpression:i,getLinePos:function(){var t,e,n,r,i,o
t=this.str.split("\n"),i=-1,r=0
do n=r,i++,e=t[i],r+=e.length+1
while(r<=this.pos)
return o=this.pos-n,{line:i+1,ch:o+1,text:e,toJSON:function(){return[this.line,this.ch]},toString:function(){return"line "+this.line+" character "+this.ch+":\n"+this.text+"\n"+this.text.substr(0,this.ch-1).replace(/[\S]/g," ")+"^----"}}},error:function(t){var e,n
throw e=this.getLinePos(),n=t+" at "+e,new s(n)},matchString:function(t){return this.str.substr(this.pos,t.length)===t?(this.pos+=t.length,t):void 0},matchPattern:function(t){var e
return(e=t.exec(this.remaining()))?(this.pos+=e[0].length,e[1]||e[0]):void 0},allowWhitespace:function(){this.matchPattern(a)},remaining:function(){return this.str.substring(this.pos)},nextChar:function(){return this.str.charAt(this.pos)}},o.extend=function(t){var r,i,s=this
r=function(t,e){o.call(this,t,e)},r.prototype=e(s.prototype)
for(i in t)n.call(t,i)&&(r.prototype[i]=t[i])
return r.extend=o.extend,r},t.Parser=o,o}(o,q,s,le,pe),ge=function(){var t=/^[^\s=]+/,e=/^\s+/
return function(n){var r,i,o
return n.matchString("=")?(r=n.pos,n.allowWhitespace(),(i=n.matchPattern(t))?n.matchPattern(e)?(o=n.matchPattern(t))?(n.allowWhitespace(),n.matchString("=")?[i,o]:(n.pos=r,null)):(n.pos=r,null):null:(n.pos=r,null)):null}}(),ve=[{delimiters:"delimiters",isTriple:!1,isStatic:!1},{delimiters:"tripleDelimiters",isTriple:!0,isStatic:!1},{delimiters:"staticDelimiters",isTriple:!1,isStatic:!0},{delimiters:"staticTripleDelimiters",isTriple:!0,isStatic:!0}],me=function(t){var e={"#":t.SECTION,"^":t.INVERTED,"/":t.CLOSING,">":t.PARTIAL,"!":t.COMMENT,"&":t.TRIPLE}
return function(t){var n=e[t.str.charAt(t.pos)]
return n?(t.pos+=1,n):null}}(W),ye=function(t){return{"if":t.SECTION_IF,unless:t.SECTION_UNLESS,"with":t.SECTION_WITH,each:t.SECTION_EACH}}(W),be=null,we=function(t,e,n){function r(e,n){for(var r,i=[];n.t===t.MEMBER&&n.r.t===t.REFINEMENT;)r=n.r,i.unshift(r.x?r.x.t===t.REFERENCE?r.x:e.flattenExpression(r.x):r.n),n=n.x
return n.t!==t.REFERENCE?null:{r:n.n,m:i}}var i,o=/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,s=/^[0-9][1-9]*$/,a=new RegExp("^("+Object.keys(n).join("|")+")\\b")
return i=/^[a-zA-Z$_0-9]+(?:(\.[a-zA-Z$_0-9]+)|(\[[a-zA-Z$_0-9]+\]))*$/,function(n,u){var c,h,f,l,p,d,g,v,m,y,b
if(c=n.pos,f={},y=n[u.delimiters],u.isStatic&&(f.s=!0),u.isTriple)f.t=t.TRIPLE
else if("!"===n.remaining()[0]&&(d=n.readExpression())&&(f.t=t.INTERPOLATOR,n.allowWhitespace(),n.matchString(y[1])?n.pos-=y[1].length:(n.pos=c,d=null)),!d)if(l=e(n),f.t=l||t.INTERPOLATOR,l===t.SECTION)(p=n.matchPattern(a))&&(f.n=p),n.allowWhitespace()
else if((l===t.COMMENT||l===t.CLOSING)&&(v=n.remaining(),m=v.indexOf(y[1]),-1!==m))return f.r=v.substr(0,m),n.pos+=m,f
if(!d&&(n.allowWhitespace(),d=n.readExpression(),v=n.remaining(),v.substr(0,y[1].length)!==y[1]&&":"!==v.charAt(0))){if(h=n.pos,n.pos=c,v=n.remaining(),m=v.indexOf(y[1]),-1!==m)return f.r=v.substr(0,m).trim(),i.test(f.r)||n.error("Expected a legal Mustache reference"),n.pos+=m,f
n.pos=h}if(d){for(;d.t===t.BRACKETED&&d.x;)d=d.x
d.t===t.REFERENCE?f.r=d.n:d.t===t.NUMBER_LITERAL&&s.test(d.v)?f.r=d.v:(b=r(n,d))?f.rx=b:f.x=n.flattenExpression(d)}return(g=n.matchPattern(o))&&(f.i=g),f}}(W,me,ye,be),Ee=function(t,e,n,r,i){function o(t){var e
return e=n.slice().sort(function(e,n){return t[n.delimiters][0].length-t[e.delimiters][0].length}),function r(n){return n?s(t,n)||r(e.shift()):null}(e.shift())}function s(n,o){var s,u,c,l,p,d,g,v,m,y
if(s=n.pos,u=n.getLinePos(),l=n[o.delimiters],!n.matchString(l[0]))return null
if(c=e(n))return n.matchString(l[1])?(n[o.delimiters]=c,f):null
if(n.allowWhitespace(),c=r(n,o),null===c)return n.pos=s,null
if(n.allowWhitespace(),n.matchString(l[1])||n.error("Expected closing delimiter '"+l[1]+"' after reference"),c.t===t.COMMENT&&(c.exclude=!0),c.t===t.CLOSING&&(n.sectionDepth-=1,n.sectionDepth<0&&(n.pos=s,n.error("Attempted to close a section that wasn't open"))),h(c)){for(n.sectionDepth+=1,p=[],v=p,d=c.n;m=n.read();){if(m.t===t.CLOSING){d&&m.r!==d&&n.error("Expected {{/"+d+"}}")
break}if(m.t===t.INTERPOLATOR&&"else"===m.r)switch(c.n){case"unless":n.error("{{else}} not allowed in {{#unless}}")
break
case"with":n.error("{{else}} not allowed in {{#with}}")
break
default:v=g=[]
continue}v.push(m)}p.length&&(c.f=p,!c.i&&"each"===c.n&&(y=a(c.f))&&(c.i=y)),g&&g.length&&(c.l=g)}return n.includeLinePositions&&(c.p=u.toJSON()),c.n?c.n=i[c.n]:c.t===t.INVERTED&&(c.t=t.SECTION,c.n=t.SECTION_UNLESS),c}function a(e){var n,r,i
for(n=e.length;n--;){if(r=e[n],r.t===t.ELEMENT&&r.f&&(i=a(r.f)))return i
if(r.t===t.INTERPOLATOR||r.t===t.TRIPLE||r.t===t.SECTION){if(r.r&&l.test(r.r))return r.r
if(r.x&&(i=u(r.x)))return i
if(r.rx&&(i=c(r.rx)))return i}}}function u(t){var e
for(e=t.r.length;e--;)if(l.test(t.r[e]))return t.r[e]}function c(e){var n,r,i
for(n=e.m.length;n--;){if(i=e.m[n],i.r&&(r=u(i)))return r
if(i.t===t.REFERENCE&&l.test(i.n))return i.n}}function h(e){return e.t===t.SECTION||e.t===t.INVERTED}var f={t:t.DELIMCHANGE,exclude:!0},l=/^@(?:index|key)$/
return o}(W,ge,ve,we,ye),_e=function(t){var e="<!--",n="-->"
return function(r){var i,o,s,a,u
return i=r.getLinePos(),r.matchString(e)?(s=r.remaining(),a=s.indexOf(n),-1===a&&r.error("Illegal HTML - expected closing comment sequence ('-->')"),o=s.substr(0,a),r.pos+=a+3,u={t:t.COMMENT,c:o},r.includeLinePositions&&(u.p=i.toJSON()),u):null}}(W),xe=function(){var t=/^(?:area|base|br|col|command|doctype|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i
return t}(),ke=function(t,e){var n,r,i
for(n=e.length;n--;){if(r=t.indexOf(e[n]),!r)return 0;-1!==r&&(!i||i>r)&&(i=r)}return i||-1},Oe=function(){function t(t){return t?10===t?32:128>t?t:159>=t?n[t-128]:55296>t?t:57343>=t?65533:65535>=t?t:65533:65533}var e,n,r,i,o
return e={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},n=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],r=new RegExp("&("+Object.keys(e).join("|")+");?","g"),i=/&#x([0-9]+);?/g,o=/&#([0-9]+);?/g,function(n){var s
return s=n.replace(r,function(t,n){return e[n]?String.fromCharCode(e[n]):t}),s=s.replace(i,function(e,n){return String.fromCharCode(t(parseInt(n,16)))}),s=s.replace(o,function(e,n){return String.fromCharCode(t(n))})}}(be),Se=function(t,e){return function(n){var r,i,o,s
return i=n.remaining(),s=n.inside?"</"+n.inside:"<",n.inside&&!n.interpolate[n.inside]?r=i.indexOf(s):(o=[s,n.delimiters[0],n.tripleDelimiters[0],n.staticDelimiters[0],n.staticTripleDelimiters[0]],n.inAttribute===!0?o.push('"',"'","=",">","`"):n.inAttribute&&o.push(n.inAttribute),r=t(i,o)),r?(-1===r&&(r=i.length),n.pos+=r,e(i.substr(0,r))):null}}(ke,Oe),Te=function(t){var e=/^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/
return function(n){var r
return n.matchString("</")?(r=n.matchPattern(e))?{t:t.CLOSING_TAG,e:r}:(n.pos-=2,void n.error("Illegal closing tag")):null}}(W),Ae=function(t,e){function n(t){var e,n,i
return t.allowWhitespace(),(n=t.matchPattern(u))?(e={name:n},i=r(t),i&&(e.value=i),e):null}function r(t){var e,n,r,i
return e=t.pos,t.allowWhitespace(),t.matchString("=")?(t.allowWhitespace(),n=t.pos,r=t.sectionDepth,i=s(t,"'")||s(t,'"')||o(t),t.sectionDepth!==r&&(t.pos=n,t.error("An attribute value must contain as many opening section tags as closing section tags")),null===i?(t.pos=e,null):1===i.length&&"string"==typeof i[0]?i[0]:i):(t.pos=e,null)}function i(t){var e,n,r
return e=t.pos,(n=t.matchPattern(c))?(-1!==(r=n.indexOf(t.delimiters[0]))&&(n=n.substr(0,r),t.pos=e+n.length),n):null}function o(t){var n,r
for(t.inAttribute=!0,n=[],r=e(t)||i(t);null!==r;)n.push(r),r=e(t)||i(t)
return n.length?(t.inAttribute=!1,n):null}function s(t,n){var r,i,o
if(r=t.pos,!t.matchString(n))return null
for(t.inAttribute=n,i=[],o=e(t)||a(t,n);null!==o;)i.push(o),o=e(t)||a(t,n)
return t.matchString(n)?(t.inAttribute=!1,i):(t.pos=r,null)}function a(e,n){var r,i,o
return r=e.pos,o=e.remaining(),i=t(o,[n,e.delimiters[0],e.delimiters[1]]),-1===i&&e.error("Quoted attribute value must have a closing quote"),i?(e.pos+=i,o.substr(0,i)):null}var u=/^[^\s"'>\/=]+/,c=/^[^\s"'=<>`]+/
return n}(ke,Ee),Ne=function(t,e,n){function r(t){var e,r,i
return t.allowWhitespace(),(e=n(t))?(i={key:e},t.allowWhitespace(),t.matchString(":")?(t.allowWhitespace(),(r=t.read())?(i.value=r.v,i):null):null):null}var i,o,s,a,u,c,h
return o={"true":!0,"false":!1,undefined:void 0,"null":null},s=new RegExp("^(?:"+Object.keys(o).join("|")+")"),a=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,u=/\$\{([^\}]+)\}/g,c=/^\$\{([^\}]+)\}/,h=/^\s*$/,i=t.extend({init:function(t,e){this.values=e.values},postProcess:function(t){return 1===t.length&&h.test(this.leftover)?{value:t[0].v}:null},converters:[function(t){var e
return t.values?(e=t.matchPattern(c),e&&t.values.hasOwnProperty(e)?{v:t.values[e]}:void 0):null},function(t){var e
return(e=t.matchPattern(s))?{v:o[e]}:void 0},function(t){var e
return(e=t.matchPattern(a))?{v:+e}:void 0},function(t){var n,r=e(t)
return r&&(n=t.values)?{v:r.v.replace(u,function(t,e){return e in n?n[e]:e})}:r},function(t){var e,n
if(!t.matchString("{"))return null
if(e={},t.allowWhitespace(),t.matchString("}"))return{v:e}
for(;n=r(t);){if(e[n.key]=n.value,t.allowWhitespace(),t.matchString("}"))return{v:e}
if(!t.matchString(","))return null}return null},function(t){var e,n
if(!t.matchString("["))return null
if(e=[],t.allowWhitespace(),t.matchString("]"))return{v:e}
for(;n=t.read();){if(e.push(n.v),t.allowWhitespace(),t.matchString("]"))return{v:e}
if(!t.matchString(","))return null
t.allowWhitespace()}return null}]}),function(t,e){var n=new i(t,{values:e})
return n.result}}(de,Z,Q),Ce=function(t){return function(e){var n,r,i,o,s,a
if("string"==typeof e){if(-1===e.indexOf(":"))return e.trim()
e=[e]}for(n={},o=[],s=[];e.length;)if(r=e.shift(),"string"==typeof r){if(i=r.indexOf(":"),-1!==i){i&&o.push(r.substr(0,i)),r.length>i+1&&(s[0]=r.substring(i+1))
break}o.push(r)}else o.push(r)
return s=s.concat(e),s.length||"string"!=typeof o?(n={n:1===o.length&&"string"==typeof o[0]?o[0]:o},1===s.length&&"string"==typeof s[0]?(a=t("["+s[0]+"]"),n.a=a?a.value:s[0].trim()):n.d=s):n=o,n}}(Ne),Re=function(t,e,n,r,i,o,s,a){function u(n){var r,i,o,u,m,y,b,w,E,_,x,k
if(r=n.pos,i=n.getLinePos(),n.inside)return null
if(!n.matchString("<"))return null
if("/"===n.nextChar())return null
if(o={t:t.ELEMENT},n.includeLinePositions&&(o.p=i.toJSON()),n.matchString("!")&&(o.y=1),o.e=n.matchPattern(h),!o.e)return null
for(f.test(n.nextChar())||n.error("Illegal tag name"),b=function(t,e){var r=e.n||e
d.test(r)&&(n.pos-=r.length,n.error("Cannot use reserved event names (change, reset, teardown, update)")),o.v[t]=e};w=s(n);)(m=g[w.name])?o[m]=a(w.value):(y=p.exec(w.name))?(o.v||(o.v={}),E=a(w.value),b(y[1],E)):n.sanitizeEventAttributes&&l.test(w.name)||(o.a||(o.a={}),o.a[w.name]=w.value||0)
if(n.allowWhitespace(),n.matchString("/")&&(_=!0),!n.matchString(">"))return null
if(u=o.e.toLowerCase(),!_&&!e.test(o.e)){for(("script"===u||"style"===u)&&(n.inside=u),x=[];(k=n.read(c))&&k.t!==t.CLOSING&&k.t!==t.CLOSING_TAG;)x.push(k)
x.length&&(o.f=x)}return n.inside=null,n.sanitizeElements&&-1!==n.sanitizeElements.indexOf(u)?v:o}var c,h=/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/,f=/^[\s\n\/>]/,l=/^on/,p=/^on-([a-zA-Z$_][a-zA-Z$_0-9\-]+)$/,d=/^(?:change|reset|teardown|update)$/,g={"intro-outro":"t0",intro:"t1",outro:"t2",decorator:"o"},v={exclude:!0}
return c=[n,r,u,i,o],u}(W,xe,Ee,_e,Se,Te,Ae,Ce),Ie=function(){var t=/^[ \t\f\r\n]+/,e=/[ \t\f\r\n]+$/
return function(n,r,i){var o
r&&(o=n[0],"string"==typeof o&&(o=o.replace(t,""),o?n[0]=o:n.shift())),i&&(o=n[n.length-1],"string"==typeof o&&(o=o.replace(e,""),o?n[n.length-1]=o:n.pop()))}}(),Le=function(t){function e(t){return"string"==typeof t}function n(e){return e.t===t.COMMENT||e.t===t.DELIMCHANGE}function r(e){return(e.t===t.SECTION||e.t===t.INVERTED)&&e.f}var i=/^\s*\r?\n/,o=/\r?\n\s*$/
return function(t){var s,a,u,c,h
for(s=1;s<t.length;s+=1)a=t[s],u=t[s-1],c=t[s-2],e(a)&&n(u)&&e(c)&&o.test(c)&&i.test(a)&&(t[s-2]=c.replace(o,"\n"),t[s]=a.replace(i,"")),r(a)&&e(u)&&o.test(u)&&e(a.f[0])&&i.test(a.f[0])&&(t[s-1]=u.replace(o,"\n"),a.f[0]=a.f[0].replace(i,"")),e(a)&&r(u)&&(h=u.f[u.f.length-1],e(h)&&o.test(h)&&i.test(a)&&(u.f[u.f.length-1]=h.replace(o,"\n"),t[s]=a.replace(i,"")))
return t}}(W),je=function(t,e,n,r,i,o,s,a){function u(e,n,r,i,o,c){var h,l,p,m,y,b,w,E,_
for(a(e),h=e.length;h--;)l=e[h],l.exclude?e.splice(h,1):n&&l.t===t.COMMENT&&e.splice(h,1)
for(s(e,i,o),h=e.length;h--;)if(l=e[h],l.f&&(y=r||l.t===t.ELEMENT&&d.test(l.e),y||(p=e[h-1],m=e[h+1],(!p||"string"==typeof p&&v.test(p))&&(b=!0),(!m||"string"==typeof m&&g.test(m))&&(w=!0)),u(l.f,n,y,b,w,c),l.l&&(u(l.l,n,r,b,w,c),c&&(E={t:4,n:t.SECTION_UNLESS,f:l.l},l.r&&(E.r=l.r),l.x&&(E.x=l.x),l.rx&&(E.rx=l.rx),e.splice(h+1,0,E),delete l.l))),l.a)for(_ in l.a)l.a.hasOwnProperty(_)&&"string"!=typeof l.a[_]&&u(l.a[_],n,r,c)
for(h=e.length;h--;)"string"==typeof e[h]&&("string"==typeof e[h+1]&&(e[h]=e[h]+e[h+1],e.splice(h+1,1)),r||(e[h]=e[h].replace(f," ")),""===e[h]&&e.splice(h,1))}var c,h,f=/[ \t\f\r\n]+/g,l=/<!--\s*\{\{\s*>\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}\}\s*-->/,p=/<!--\s*\{\{\s*\/\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}\}\s*-->/,d=/^(?:pre|script|style|textarea)$/i,g=/^\s+/,v=/\s+$/
return c=e.extend({init:function(t,e){this.delimiters=e.delimiters||["{{","}}"],this.tripleDelimiters=e.tripleDelimiters||["{{{","}}}"],this.staticDelimiters=e.staticDelimiters||["[[","]]"],this.staticTripleDelimiters=e.staticTripleDelimiters||["[[[","]]]"],this.sectionDepth=0,this.interpolate={script:!e.interpolate||e.interpolate.script!==!1,style:!e.interpolate||e.interpolate.style!==!1},e.sanitize===!0&&(e.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),this.sanitizeElements=e.sanitize&&e.sanitize.elements,this.sanitizeEventAttributes=e.sanitize&&e.sanitize.eventAttributes,this.includeLinePositions=e.includeLinePositions},postProcess:function(t,e){return this.sectionDepth>0&&this.error("A section was left open"),u(t,e.stripComments!==!1,e.preserveWhitespace,!e.preserveWhitespace,!e.preserveWhitespace,e.rewriteElse!==!1),t},converters:[n,r,i,o]}),h=function(t){var e=arguments[1]
void 0===e&&(e={})
var n,r,i,o,s,a
if(n={v:1},l.test(t)){for(r=t,t="";s=l.exec(r);){if(o=s[1],t+=r.substr(0,s.index),r=r.substring(s.index+s[0].length),a=p.exec(r),!a||a[1]!==o)throw new Error("Inline partials must have a closing delimiter, and cannot be nested");(i||(i={}))[o]=new c(r.substr(0,a.index),e).result,r=r.substring(a.index+a[0].length)}n.p=i}return n.t=new c(t,e).result,n}}(W,de,Ee,_e,Re,Se,Ie,Le),Me=function(){return function(t,e){var n=t.map(e)
return t.forEach(function(t,e){n[t]=n[e]}),n}}(be),Pe=function(t){var e,n
return e=["preserveWhitespace","sanitize","stripComments","delimiters","tripleDelimiters"],n=t(e,function(t){return t})}(Me),Fe=function(t,e,n,r,i){function o(t){var e=r(f)
return e.parse=function(e,n){return s(e,n||t)},e}function s(e,r){if(!n)throw new Error(t.missingParser)
return n(e,r||this.options)}function a(t,n){var r
if(!e){if(n&&n.noThrow)return
throw new Error("Cannot retrieve template #"+t+" as Ractive is not running in a browser.")}if(u(t)&&(t=t.substring(1)),!(r=document.getElementById(t))){if(n&&n.noThrow)return
throw new Error("Could not find template element with id #"+t)}return r.innerHTML}function u(t){return"#"===t.charAt(0)}function c(t){return!("string"==typeof t)}function h(t){return t.defaults&&(t=t.defaults),i.reduce(function(e,n){return e[n]=t[n],e},{})}var f={parse:s,fromId:a,isHashedId:u,isParsed:c,getParseOptions:h,createHelper:o}
return f}(V,S,je,q,Pe),Be=function(t,e){function n(t){var e,n=t._config.template
if(n&&n.fn)return e=r(t,n.fn),e!==n.result?(n.result=e,e=i(e,t)):void 0}function r(e,n){var r=t.createHelper(t.getParseOptions(e))
return n.call(e,e.data,r)}function i(n,r){if("string"==typeof n)"#"===n[0]&&(n=t.fromId(n)),n=e(n,t.getParseOptions(r))
else if(1!==n.v)throw new Error("Mismatched template version! Please ensure you are using the latest version of Ractive.js in your build process as well as in your app")
return n}function o(t,e,n){if(e)for(var r in e)(n||!t.hasOwnProperty(r))&&(t[r]=e[r])}var s={name:"template",extend:function(t,e,n){var r
"template"in n&&(r=n.template,e.template="function"==typeof r?r:i(r,e))},init:function(t,e,n){var s,a
s="template"in n?n.template:t.prototype.template,"function"==typeof s&&(a=s,s=r(e,a),e._config.template={fn:a,result:s}),s=i(s,e),e.template=s.t,s.p&&o(e.partials,s.p)},reset:function(t){var e,r=n(t)
return r?(e=i(r,t),t.template=e.t,o(t.partials,e.p,!0),!0):void 0}}
return s}(Fe,je),De=function(t){function e(t,e){this.name=t,this.useDefaults=e}function n(t,e){var r,i
return(r=e(t))?r:!t.isolated&&(i=t._parent)?n(i,e):void 0}return e.prototype={constructor:e,extend:function(t,e,n){this.configure(this.useDefaults?t.defaults:t,this.useDefaults?e:e.constructor,n)},init:function(t,e,n){this.configure(this.useDefaults?t.defaults:t,e,n)},configure:function(e,n,r){var i,o=this.name,s=r[o]
i=t(e[o])
for(var a in s)i[a]=s[a]
n[o]=i},reset:function(t){var e=t[this.name],n=!1
return Object.keys(e).forEach(function(t){var r=e[t]
r._fn&&(r._fn.isOwner?e[t]=r._fn:delete e[t],n=!0)}),n},findOwner:function(t,e){return t[this.name].hasOwnProperty(e)?t:this.findConstructor(t.constructor,e)},findConstructor:function(t,e){return t?t[this.name].hasOwnProperty(e)?t:this.findConstructor(t._parent,e):void 0},find:function(t,e){var r=this
return n(t,function(t){return t[r.name][e]})},findInstance:function(t,e){var r=this
return n(t,function(t){return t[r.name][e]?t:void 0})}},e}(q,be),Ue=function(t,e){var n=["adaptors","components","computed","decorators","easing","events","interpolators","partials","transitions"],r=t(n,function(t){return new e(t,"computed"===t)})
return r}(Me,De),Ve=function(){},We=function(t){function e(e,n){var r
if(n in e){var i=e[n]
r="function"==typeof i?i:function(){return i}}else r=t
return r}return function(t,n,r){if(!/_super/.test(r))return r
var i=function(){var t,o=e(i._parent,n),s="_super"in this,a=this._super
return this._super=o,t=r.apply(this,arguments),s?this._super=a:delete this._super,t}
return i._parent=t,i._method=r,i}}(Ve),qe=function(t,e){function n(e,n,i){if(n in e){if(i in e)throw new Error(r(n,i,!0))
t(r(n,i)),e[i]=e[n]}}function r(t,e,n){return"options."+t+" has been deprecated in favour of options."+e+"."+(n?" You cannot specify both options, please use options."+e+".":"")}function i(t){n(t,"eventDefinitions","events")}function o(t){e(t.adaptors)&&n(t,"adaptors","adapt")}return function(t){i(t),o(t)}}(P,a),ze=function(t,e,n,r,i,o,s,a){function u(t,e,n,r,i){h[e][t](n,r,i)}function c(t,e,r,i){a(i),u(t,"data",e,r,i),l.parseOptions.forEach(function(t){t in i&&(r[t]=i[t])})
for(var o in i)if(o in n&&!(o in l.parseOptions)&&!(o in h)){var c=i[o]
r[o]="function"==typeof c?s(e.prototype,o,c):c}l.registries.forEach(function(n){n[t](e,r,i)}),u(t,"template",e,r,i),u(t,"css",e,r,i)}var h,f,l
h={data:e,template:r,css:t},f=Object.keys(n).filter(function(t){return!o[t]&&!h[t]&&!i[t]}),l=[].concat(h.data,i,f,o,h.template,h.css)
for(var p in h)l[p]=h[p]
return l.keys=Object.keys(n).concat(o.map(function(t){return t.name})).concat(["css"]),l.parseOptions=i,l.registries=o,l.extend=function(t,e,n){c("extend",t,e,n)},l.init=function(t,e,n){c("init",t,e,n),e._config&&(e._config.options=n)},l.reset=function(t){return l.filter(function(e){return e.reset&&e.reset(t)}).map(function(t){return t.name})},l}(B,U,r,Be,Pe,Ue,We,qe),He=function(t,e,n,r){function i(t){return function(){return t}}var o=function(t,o,s,a){if(t===o)return i(o)
if(a){var u=r.registries.interpolators.find(s,a)
if(u)return u(t,o)||i(o)
e('Missing "'+a+'" interpolator. You may need to download a plugin from [TODO]')}return n.number(t,o)||n.array(t,o)||n.object(t,o)||n.cssLength(t,o)||i(o)}
return t.interpolate=o,o}(o,P,h,ze),$e=function(t,e,n){var r=function(t){var e
this.startTime=Date.now()
for(e in t)t.hasOwnProperty(e)&&(this[e]=t[e])
this.interpolator=n(this.from,this.to,this.root,this.interpolator),this.running=!0}
return r.prototype={tick:function(){var n,r,i,o,s,a
return a=this.keypath,this.running?(o=Date.now(),n=o-this.startTime,n>=this.duration?(null!==a&&(e.start(this.root),this.root.viewmodel.set(a,this.to),e.end()),this.step&&this.step(1,this.to),this.complete(this.to),s=this.root._animations.indexOf(this),-1===s&&t("Animation was not found"),this.root._animations.splice(s,1),this.running=!1,!1):(r=this.easing?this.easing(n/this.duration):n/this.duration,null!==a&&(i=this.interpolator(r),e.start(this.root),this.root.viewmodel.set(a,i),e.end()),this.step&&this.step(r,i),!0)):!1},stop:function(){var e
this.running=!1,e=this.root._animations.indexOf(this),-1===e&&t("Animation was not found"),this.root._animations.splice(e,1)}},r}(P,w,He),Ke=function(t,e,n,r,i){function o(e,o,s,u){var c,h,f,l
return o&&(o=n(o)),null!==o&&(l=e.viewmodel.get(o)),r.abort(o,e),t(l,s)?(u.complete&&u.complete(u.to),a):(u.easing&&(c="function"==typeof u.easing?u.easing:e.easing[u.easing],"function"!=typeof c&&(c=null)),h=void 0===u.duration?400:u.duration,f=new i({keypath:o,from:l,to:s,root:e,duration:h,easing:c,interpolator:u.interpolator,step:u.step,complete:u.complete}),r.add(f),e._animations.push(f),f)}var s=function(){},a={stop:s}
return function(t,n,r){var i,a,u,c,h,f,l,p,d,g,v,m,y,b
if(i=new e(function(t){a=t}),"object"==typeof t){r=n||{},f=r.easing,l=r.duration,h=[],p=r.step,d=r.complete,(p||d)&&(v={},r.step=null,r.complete=null,g=function(t){return function(e,n){v[t]=n}})
for(u in t)t.hasOwnProperty(u)&&((p||d)&&(m=g(u),r={easing:f,duration:l},p&&(r.step=m)),r.complete=d?m:s,h.push(o(this,u,t[u],r)))
return(p||d)&&(b={easing:f,duration:l},p&&(b.step=function(t){p(t,v)}),d&&i.then(function(t){d(t,v)}),b.complete=a,y=o(this,null,null,b),h.push(y)),{stop:function(){for(var t;t=h.pop();)t.stop()
y&&y.stop()}}}return r=r||{},r.complete&&i.then(r.complete),r.complete=a,c=o(this,t,n,r),i.stop=function(){c.stop()},i}}(v,p,R,M,$e),Xe=function(t){return function(){return this.el&&t(this.el.__ractive_instances__,this),this.fragment.detach()}}(l),Ge=function(t){return this.el?this.fragment.find(t):null},Ze=function(t,e,n){var r,i,o,s,a,u,c,h
if(t){for(i=n("div"),o=["matches","matchesSelector"],h=function(t){return function(e,n){return e[t](n)}},u=o.length;u--&&!r;)if(s=o[u],i[s])r=h(s)
else for(c=e.length;c--;)if(a=e[u]+s.substr(0,1).toUpperCase()+s.substring(1),i[a]){r=h(a)
break}r||(r=function(t,e){var n,r,o
for(r=t.parentNode,r||(i.innerHTML="",r=i,t=t.cloneNode(),i.appendChild(t)),n=r.querySelectorAll(e),o=n.length;o--;)if(n[o]===t)return!0
return!1})}else r=null
return r}(S,I,O),Je=function(t){return function(e,n){var r=this._isComponentQuery?!this.selector||e.name===this.selector:t(e.node,this.selector)
return r?(this.push(e.node||e.instance),n||this._makeDirty(),!0):void 0}}(Ze),Qe=function(){var t,e,n
t=this._root[this._isComponentQuery?"liveComponentQueries":"liveQueries"],e=this.selector,n=t.indexOf(e),-1!==n&&(t.splice(n,1),t[e]=null)},Ye=function(){function t(t){var e
return(e=t.parentFragment)?e.owner:t.component&&(e=t.component.parentFragment)?e.owner:void 0}function e(e){var n,r
for(n=[e],r=t(e);r;)n.push(r),r=t(r)
return n}return function(t,n){var r,i,o,s,a,u,c,h,f,l
for(r=e(t.component||t._ractive.proxy),i=e(n.component||n._ractive.proxy),o=r[r.length-1],s=i[i.length-1];o&&o===s;)r.pop(),i.pop(),a=o,o=r[r.length-1],s=i[i.length-1]
if(o=o.component||o,s=s.component||s,f=o.parentFragment,l=s.parentFragment,f===l)return u=f.items.indexOf(o),c=l.items.indexOf(s),u-c||r.length-i.length
if(h=a.fragments)return u=h.indexOf(f),c=h.indexOf(l),u-c||r.length-i.length
throw new Error("An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!")}}(),tn=function(t){return function(e,n){var r
return e.compareDocumentPosition?(r=e.compareDocumentPosition(n),2&r?1:-1):t(e,n)}}(Ye),en=function(t,e){return function(){this.sort(this._isComponentQuery?e:t),this._dirty=!1}}(tn,Ye),nn=function(t){return function(){var e=this
this._dirty||(this._dirty=!0,t.scheduleTask(function(){e._sort()}))}}(w),rn=function(t){var e=this.indexOf(this._isComponentQuery?t.instance:t);-1!==e&&this.splice(e,1)},on=function(t,e,n,r,i,o){return function(s,a,u,c){var h=[]
return t(h,{selector:{value:a},live:{value:u},_isComponentQuery:{value:c},_test:{value:e}}),u?(t(h,{cancel:{value:n},_root:{value:s},_sort:{value:r},_makeDirty:{value:i},_remove:{value:o},_dirty:{value:!1,writable:!0}}),h):h}}(A,Je,Qe,en,nn,rn),sn=function(t){return function(e,n){var r,i
return this.el?(n=n||{},r=this._liveQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!1),i.live&&(r.push(e),r["_"+e]=i),this.fragment.findAll(e,i),i)):[]}}(on),an=function(t){return function(e,n){var r,i
return n=n||{},r=this._liveComponentQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!0),i.live&&(r.push(e),r["_"+e]=i),this.fragment.findAllComponents(e,i),i)}}(on),un=function(t){return this.fragment.findComponent(t)},cn=function(t){var e,n,r,i=this._subs[t]
if(i)for(e=Array.prototype.slice.call(arguments,1),n=0,r=i.length;r>n;n+=1)i[n].apply(this,e)},hn=function(t){var e={capture:!0}
return function(n){return n=t(n),this.viewmodel.get(n,e)}}(R),fn=function(t){var e
if(t&&"boolean"!=typeof t)return"undefined"!=typeof window&&document&&t?t.nodeType?t:"string"==typeof t&&(e=document.getElementById(t),!e&&document.querySelector&&(e=document.querySelector(t)),e&&e.nodeType)?e:t[0]&&t[0].nodeType?t[0]:null:null},ln=function(t){return function(e,n){if(!this.rendered)throw new Error("The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.")
if(e=t(e),n=t(n)||null,!e)throw new Error("You must specify a valid target to insert into")
e.insertBefore(this.detach(),n),this.el=e,(e.__ractive_instances__||(e.__ractive_instances__=[])).push(this)}}(fn),pn=function(t,e,n){return function(r,i,o){var s,a
return r=n(r),s=this.viewmodel.get(r),e(s)&&e(i)?(a=t.start(this,!0),this.viewmodel.merge(r,s,i,o),t.end(),o&&o.complete&&a.then(o.complete),a):this.set(r,i,o&&o.complete)}}(w,a,R),dn=function(t,e){var n=function(t,e,n,r){this.root=t,this.keypath=e,this.callback=n,this.defer=r.defer,this.priority=0,this.context=r&&r.context?r.context:t}
return n.prototype={init:function(t){this.value=this.root.viewmodel.get(this.keypath),t!==!1&&this.update()},setValue:function(n){var r=this
e(n,this.value)||(this.value=n,this.defer&&this.ready?t.scheduleTask(function(){return r.update()}):this.update())},update:function(){this.updating||(this.updating=!0,this.callback.call(this.context,this.value,this.oldValue,this.keypath),this.oldValue=this.value,this.updating=!1)}},n}(w,v),gn=function(t){return function(e,n){function r(n,r){var i,o,s
i=e.viewmodel.wrapped[r]?e.viewmodel.wrapped[r].get():e.get(r)
for(o in i)!i.hasOwnProperty(o)||"_ractive"===o&&t(i)||(s=r?r+"."+o:o,n.push(s))
return n}function i(t){return function(e){return e?e+"."+t:t}}var o,s,a
for(o=n.split("."),a=[""];s=o.shift();)"*"===s?a=a.reduce(r,[]):""===a[0]?a[0]=s:a=a.map(i(s))
return a}}(a),vn=function(t){return function(e,n){var r,i
return r=t(e,n),i={},r.forEach(function(t){i[t]=e.get(t)}),i}}(gn),mn=function(t,e,n){var r,i=/\*/,o=Array.prototype.slice
return r=function(t,e,n,r){this.root=t,this.callback=n,this.defer=r.defer,this.keypath=e,this.regex=new RegExp("^"+e.replace(/\./g,"\\.").replace(/\*/g,"([^\\.]+)")+"$"),this.values={},this.defer&&(this.proxies=[]),this.priority="pattern",this.context=r&&r.context?r.context:t},r.prototype={init:function(t){var e,r
if(e=n(this.root,this.keypath),t!==!1)for(r in e)e.hasOwnProperty(r)&&this.update(r)
else this.values=e},update:function(e){var r
if(i.test(e)){r=n(this.root,e)
for(e in r)r.hasOwnProperty(e)&&this.update(e)}else if(!this.root.viewmodel.implicitChanges[e])return this.defer&&this.ready?void t.addObserver(this.getProxy(e)):void this.reallyUpdate(e)},reallyUpdate:function(t){var n,r,i
return n=this.root.viewmodel.get(t),this.updating?void(this.values[t]=n):(this.updating=!0,e(n,this.values[t])&&this.ready||(r=o.call(this.regex.exec(t),1),i=[n,this.values[t],t].concat(r),this.callback.apply(this.context,i),this.values[t]=n),void(this.updating=!1))},getProxy:function(t){var e=this
return this.proxies[t]||(this.proxies[t]={update:function(){e.reallyUpdate(t)}}),this.proxies[t]}},r}(w,v,vn),yn=function(t,e,n){var r=/\*/,i={}
return function(o,s,a,u){var c,h,f
return s=t(s),u=u||i,r.test(s)?(c=new n(o,s,a,u),o.viewmodel.patternObservers.push(c),h=!0):c=new e(o,s,a,u),o.viewmodel.register(s,c,h?"patternObservers":"observers"),c.init(u.init),c.ready=!0,{cancel:function(){var t
f||(h&&(t=o.viewmodel.patternObservers.indexOf(c),o.viewmodel.patternObservers.splice(t,1),o.viewmodel.unregister(s,c,"patternObservers")),o.viewmodel.unregister(s,c,"observers"),f=!0)}}}}(R,dn,mn),bn=function(t,e){return function(n,r,i){var o,s,a,u
if(t(n)){i=r,s=n,o=[]
for(n in s)s.hasOwnProperty(n)&&(r=s[n],o.push(this.observe(n,r,i)))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}if("function"==typeof n)return i=r,r=n,n="",e(this,n,r,i)
if(a=n.split(" "),1===a.length)return e(this,n,r,i)
for(o=[],u=a.length;u--;)n=a[u],n&&o.push(e(this,n,r,i))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}}(u,yn),wn=function(t){return t.trim()},En=function(t){return""!==t},_n=function(t,e){return function(n,r){var i,o=this
if(n)i=n.split(" ").map(t).filter(e),i.forEach(function(t){var e,n;(e=o._subs[t])&&(r?(n=e.indexOf(r),-1!==n&&e.splice(n,1)):o._subs[t]=[])})
else for(n in this._subs)delete this._subs[n]
return this}}(wn,En),xn=function(t,e){return function(n,r){var i,o,s,a=this,u=this
if("object"==typeof n){i=[]
for(o in n)n.hasOwnProperty(o)&&i.push(this.on(o,n[o]))
return{cancel:function(){for(var t;t=i.pop();)t.cancel()}}}return s=n.split(" ").map(t).filter(e),s.forEach(function(t){(a._subs[t]||(a._subs[t]=[])).push(r)}),{cancel:function(){u.off(n,r)}}}}(wn,En),kn=function(t,e,n){switch(e){case"splice":return n
case"sort":case"reverse":return null
case"pop":return t.length?[-1]:null
case"push":return[t.length,0].concat(n)
case"shift":return[0,1]
case"unshift":return[0,0].concat(n)}},On=function(t,e){var n,r,i,o,s,a
return e?(n=+(e[0]<0?t.length+e[0]:e[0]),o=Math.max(0,e.length-2),s=void 0!==e[1]?e[1]:t.length-n,s=Math.min(s,t.length-n),a=o-s,i=t.length+a,r=a?Math.max(t.length,i):n+o,{rangeStart:n,rangeEnd:r,balance:a,added:o,removed:s}):null},Sn=function(t,e,n,r){var i=Array.prototype
return function(o){return function(s){var a,u,c,h,f=Array.prototype.slice,l=f.call(arguments,1)
if(a=this.get(s),!t(a))throw new Error("Called ractive."+o+"('"+s+"'), but '"+s+"' does not refer to an array")
return u=n(a,o,l),c=r(a,u),i[o].apply(a,l),h=e.start(this,!0),c?this.viewmodel.splice(s,c):this.viewmodel.mark(s),e.end(),h}}}(a,w,kn,On),Tn=function(t){return t("pop")}(Sn),An=function(t){return t("push")}(Sn),Nn=function(t,e,n){var r,i,o,s,a,u,c,h="/* Ractive.js component styles */\n",f={},l=[]
return e?(t.push(function(){o=t.runloop}),s=document.createElement("style"),s.type="text/css",a=document.getElementsByTagName("head")[0],c=!1,u=s.styleSheet,i=function(){var t
l.length?(t=h+l.join(" "),u?u.cssText=t:s.innerHTML=t,c||(a.appendChild(s),c=!0)):c&&(a.removeChild(s),c=!1)},r={add:function(t){t.css&&(f[t._guid]||(f[t._guid]=0,l.push(t.css),o.scheduleTask(i)),f[t._guid]+=1)},remove:function(t){t.css&&(f[t._guid]-=1,f[t._guid]||(n(l,t.css),o.scheduleTask(i)))}}):r=null,r}(o,S,l),Cn=function(t,e,n){function r(t){t.init&&t.init(t._config.options),i(t).forEach(r),o[t._guid]=null}function i(t){return o[t._guid]||(o[t._guid]=[])}var o={},s={}
return function(o,a){var u,c,h=this
if(s[this._guid]=!0,u=t.start(this,!0),this.rendered)throw new Error("You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first")
return o=n(o)||this.el,a=n(a)||this.anchor,this.el=o,this.anchor=a,this.constructor.css&&e.add(this.constructor),o&&((c=o.__ractive_instances__)?c.push(this):o.__ractive_instances__=[this],a?o.insertBefore(this.fragment.render(),a):o.appendChild(this.fragment.render())),this._hasInited||(this._hasInited=!0,this._parent&&s[this._parent._guid]?i(this._parent).push(this):r(this)),s[this._guid]=!1,t.end(),this.rendered=!0,this.complete&&u.then(function(){return h.complete()}),u}}(w,Nn,fn),Rn=function(){this.dirtyValue=this.dirtyArgs=!0,this.inited&&this.owner.bubble&&this.owner.bubble()},In=function(){var t
return 1===this.items.length?this.items[0].detach():(t=document.createDocumentFragment(),this.items.forEach(function(e){t.appendChild(e.detach())}),t)},Ln=function(t){var e,n,r,i
if(this.items){for(n=this.items.length,e=0;n>e;e+=1)if(r=this.items[e],r.find&&(i=r.find(t)))return i
return null}},jn=function(t,e){var n,r,i
if(this.items)for(r=this.items.length,n=0;r>n;n+=1)i=this.items[n],i.findAll&&i.findAll(t,e)
return e},Mn=function(t,e){var n,r,i
if(this.items)for(r=this.items.length,n=0;r>n;n+=1)i=this.items[n],i.findAllComponents&&i.findAllComponents(t,e)
return e},Pn=function(t){var e,n,r,i
if(this.items){for(e=this.items.length,n=0;e>n;n+=1)if(r=this.items[n],r.findComponent&&(i=r.findComponent(t)))return i
return null}},Fn=function(t){var e,n=t.index
return e=this.items[n+1]?this.items[n+1].firstNode():this.owner===this.root?this.owner.component?this.owner.component.findNextNode():null:this.owner.findNextNode(this)},Bn=function(){return this.items&&this.items[0]?this.items[0].firstNode():null},Dn=function(){var t=this
do if(t.pElement)return t.pElement.node
while(t=t.parent)
return this.root.el},Un=function(t){function e(t,n,r,i){return i=i||0,t.map(function(t){var o,s,a
return t.text?t.text:t.fragments?t.fragments.map(function(t){return e(t.items,n,r,i)}).join(""):(o=r+"-"+i++,a=(s=t.root.viewmodel.wrapped[t.keypath])?s.value:t.getValue(),n[o]=a,"${"+o+"}")}).join("")}var n={}
return function(){var r=arguments[0]
void 0===r&&(r=n)
var i,o,s,a,u,c,h
return i=r.args,u=i?"argsList":"value",c=i?"dirtyArgs":"dirtyValue",this[c]&&(s=e(this.items,o={},this.root._guid),a=t(i?"["+s+"]":s,o),h=a?a.value:i?[this.toString()]:this.toString(),this[u]=h,this[c]=!1),this[u]}}(Ne),Vn=function(){var t=/</g,e=/>/g
return function(n){return n.replace(t,"&lt;").replace(e,"&gt;")}}(),Wn=function(t){return t&&t.parentNode&&t.parentNode.removeChild(t),t},qn=function(t){return function(){return t(this.node)}}(Wn),zn=function(t,e,n){var r=function(e){this.type=t.TEXT,this.text=e.template}
return r.prototype={detach:n,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createTextNode(this.text)),this.node},toString:function(t){return t?e(this.text):this.text},unrender:function(t){return t?this.detach():void 0}},r}(W,Vn,qn),Hn=function(t){return function(){this.keypath?this.root.viewmodel.unregister(this.keypath,this):t.removeUnresolved(this),this.resolver&&this.resolver.teardown()}}(w),$n=function(){return this.value},Kn=function(t){var e=function(e,n,r,i){this.root=e,this.ref=n,this.parentFragment=r,this.resolve=i,t.addUnresolved(this)}
return e.prototype={teardown:function(){t.removeUnresolved(this)}},e}(w),Xn=function(t,e){return t.substr(0,e.length+1)===e+"."},Gn=function(t){return function(e,n,r){return e===n?r:t(e,n)?e.replace(n+".",r+"."):void 0}}(Xn),Zn=function(t,e){function n(t){var n=e[t.message]||t.message||""
return r(n,t.args)}function r(t,e){return t.replace(/{([^{}]*)}/g,function(t,n){return e[n]})}var i={warn:function(t,e){(t.debug||e)&&this.logger(n(t),t.allowDuplicates)},error:function(t){this.errorOnly(t),t.debug||this.warn(t,!0)},errorOnly:function(t){t.debug&&this.critical(t)},critical:function(t){var e=t.err||new Error(n(t))
this.thrower(e)},logger:t,thrower:function(t){throw t}}
return i}(P,V),Jn=function(t,e,n){var r,i
for(r=e.length;r--;)i=e[r],-1===n.indexOf(i)&&t.viewmodel.unregister(i,t,"computed")
for(r=n.length;r--;)i=n[r],-1===e.indexOf(i)&&t.viewmodel.register(i,t,"computed")
t.dependencies=n.slice()},Qn=function(t,e,n,r){function i(t,e){var n,r
if(t=t.replace(/\$\{([0-9]+)\}/g,"_$1"),u[t])return u[t]
for(r=[];e--;)r[e]="_"+e
return n=new Function(r.join(","),"return("+t+")"),u[t]=n,n}function o(t,e){var r,i
return t._noWrap?t:(i="__ractive_"+e._guid,(r=t[i])?r:/this/.test(t.toString())?(n(t,i,{value:t.bind(e)}),t[i]):(n(t,"__ractive_nowrap",{value:t}),t.__ractive_nowrap))}function s(t){return"function"==typeof t?t():t}var a,u={}
return a=function(t,e,n,r,s,a){var u=this,c=t.viewmodel
u.root=t,u.viewmodel=c,u.uniqueString=n,u.keypath=e,u.priority=a,u.fn=i(r,s.length),u.explicitDependencies=[],u.dependencies=[],u.argumentGetters=s.map(function(e){var n,r
return e?e.indexRef?r=e.value:(n=e.keypath,u.explicitDependencies.push(n),c.register(n,u,"computed"),function(){var e=c.get(n)
return"function"==typeof e?o(e,t):e}):void 0})},a.prototype={wake:function(){this.awake=!0},sleep:function(){this.awake=!1},getValue:function(){var e,n,i
if(e=this.argumentGetters.map(s),!this.updating){this.updating=!0,this.viewmodel.capture()
try{n=this.fn.apply(null,e)}catch(o){this.root.debug&&t.warn({debug:this.root.debug,message:"evaluationError",args:{uniqueString:this.uniqueString,err:o.message||o}}),n=void 0}return i=this.viewmodel.release(),r(this,this.dependencies,i),this.updating=!1,n}},update:function(){var t=this.getValue()
return e(t,this.value)||(this.value=t,this.root.viewmodel.mark(this.keypath)),this},teardown:function(){var t=this
this.explicitDependencies.concat(this.dependencies).forEach(function(e){return t.viewmodel.unregister(e,t,"computed")}),this.root.viewmodel.evaluators[this.keypath]=null}},a}(Zn,v,T,Jn),Yn=function(t,e,n,r,i){function o(t,e){return t.replace(/\$\{([0-9]+)\}/g,function(t,n){var r=e[n]
return r?r.indexRef?r.value:r.keypath:"undefined"})}function s(t){return"${"+t.replace(/[\.\[\]]/g,"-")+"}"}var a=function(r,i,o,s){var a,u,c,h=this
return a=r.root,this.root=a,this.callback=s,this.owner=r,this.str=o.s,this.args=c=[],this.unresolved=[],this.pending=0,u=i.indexRefs,o.r&&o.r.length?(o.r.forEach(function(r,o){var s,f,l
return u&&void 0!==(s=u[r])?void(c[o]={indexRef:r,value:s}):(f=e(a,r,i))?void(c[o]={keypath:f}):(c[o]=null,h.pending+=1,l=new n(a,r,i,function(e){h.resolve(o,e),t(h.unresolved,l)}),void h.unresolved.push(l))}),this.ready=!0,void this.bubble()):(this.resolved=this.ready=!0,void this.bubble())}
return a.prototype={bubble:function(){this.ready&&(this.uniqueString=o(this.str,this.args),this.keypath=s(this.uniqueString),this.createEvaluator(),this.callback(this.keypath))},teardown:function(){for(var t;t=this.unresolved.pop();)t.teardown()},resolve:function(t,e){this.args[t]={keypath:e},this.bubble(),this.resolved=!--this.pending},createEvaluator:function(){var t=this.root.viewmodel.evaluators[this.keypath]
t||(t=new r(this.root,this.keypath,this.uniqueString,this.str,this.args,this.owner.priority),this.root.viewmodel.evaluators[this.keypath]=t),t.update()},rebind:function(t,e,n,r){var o
this.args.forEach(function(s){var a
s&&(s.keypath&&(a=i(s.keypath,n,r))?(s.keypath=a,o=!0):s.indexRef&&s.indexRef===t&&(s.value=e,o=!0))}),o&&this.bubble()}},a}(l,y,Kn,Qn,Gn),tr=function(t,e,n,r,i){var o=function(r,o,s){var a,u,c,h,f,l=this
l.resolver=o,l.root=o.root,l.viewmodel=o.root.viewmodel,"string"==typeof r?l.value=r:r.t===t.REFERENCE?(a=l.ref=r.n,(u=s.indexRefs)&&void 0!==(c=u[a])?(l.indexRef=a,l.value=c):(h=o.root,(f=e(h,a,s))?l.resolve(f):l.unresolved=new n(h,a,s,function(t){l.unresolved=null,l.resolve(t)}))):new i(o,s,r,function(t){l.resolve(t)})}
return o.prototype={resolve:function(t){this.keypath=t,this.value=this.viewmodel.get(t),this.bind(),this.resolver.bubble()},bind:function(){this.viewmodel.register(this.keypath,this)},rebind:function(t,e,n,i){var o
if(t&&this.indexRef===t){if(e!==this.value)return this.value=e,!0}else if(this.keypath&&(o=r(this.keypath,n,i)))return this.unbind(),this.keypath=o,this.value=this.root.viewmodel.get(o),this.bind(),!0},setValue:function(t){this.value=t,this.resolver.bubble()},unbind:function(){this.keypath&&this.root.viewmodel.unregister(this.keypath,this)},teardown:function(){this.unbind(),this.unresolved&&this.unresolved.teardown()},forceResolution:function(){this.unresolved&&(this.unresolved.teardown(),this.unresolved=null,this.keypath=this.ref,this.value=this.viewmodel.get(this.ref),this.bind())}},o}(W,y,Kn,Gn,Yn),er=function(t,e,n){function r(t){return t.value}function i(t){return void 0!=t}function o(t){t.unbind()}var s=function(r,i,o){var s,a,u,c,h=this,f=this
c=r.parentFragment,f.root=s=r.root,f.mustache=r,f.priority=r.priority,f.ref=a=i.r,f.callback=o,f.unresolved=[],(u=t(s,a,c))?f.base=u:f.baseResolver=new e(s,a,c,function(t){f.base=t,f.baseResolver=null,f.bubble()}),f.members=i.m.map(function(t){return new n(t,h,c)}),f.ready=!0,f.bubble()}
return s.prototype={getKeypath:function(){var t=this.members.map(r)
if(t.every(i)&&!this.baseResolver)return this.base+"."+t.join(".")},bubble:function(){this.ready&&!this.baseResolver&&this.callback(this.getKeypath())},teardown:function(){this.members.forEach(o)},rebind:function(t,e,n,r){var i
this.members.forEach(function(o){o.rebind(t,e,n,r)&&(i=!0)}),i&&this.bubble()},forceResolution:function(){this.baseResolver&&(this.base=this.ref,this.baseResolver.teardown(),this.baseResolver=null),this.members.forEach(function(t){return t.forceResolution()}),this.bubble()}},s}(y,Kn,tr),nr=function(t,e,n,r,i){return function(o,s){function a(t){var e=o.keypath
t!==e&&(o.resolve(t),void 0!==e&&o.fragments&&o.fragments.forEach(function(n){n.rebind(null,null,e,t)}))}var u,c,h,f,l,p
if(l=s.parentFragment,p=s.template,o.root=l.root,o.parentFragment=l,o.pElement=l.pElement,o.template=s.template,o.index=s.index||0,o.priority=l.priority,o.isStatic=s.template.s,o.type=s.template.t,u=p.r){if(h=l.indexRefs,h&&void 0!==(f=h[u]))return o.indexRef=u,void o.setValue(f)
c=n(o.root,u,o.parentFragment),void 0!==c?o.resolve(c):(o.ref=u,e.addUnresolved(o))}s.template.x&&(o.resolver=new i(o,l,s.template.x,a)),s.template.rx&&(o.resolver=new r(o,s.template.rx,a)),o.template.n!==t.SECTION_UNLESS||o.hasOwnProperty("value")||o.setValue(void 0)}}(W,w,y,er,Yn),rr=function(t){var e,n,r
void 0!==this.keypath&&(this.root.viewmodel.unregister(this.keypath,this),e=!0),this.keypath=t,void 0!==t&&(n=this.root.viewmodel.get(t),this.root.viewmodel.register(t,this)),this.setValue(n),e&&(r=this.twowayBinding)&&r.rebound()},ir=function(t){return function(e,n,r,i){var o
this.fragments&&this.fragments.forEach(function(t){return t.rebind(e,n,r,i)}),this.resolver&&this.resolver.rebind(e,n,r,i),this.keypath?(o=t(this.keypath,r,i))&&this.resolve(o):void 0!==e&&this.indexRef===e&&this.setValue(n)}}(Gn),or=function(t,e,n,r){return{getValue:t,init:e,resolve:n,rebind:r}}($n,nr,rr,ir),sr=function(t,e,n,r,i,o,s){var a=function(e){this.type=t.INTERPOLATOR,o.init(this,e)}
return a.prototype={update:function(){this.node.data=void 0==this.value?"":this.value},resolve:o.resolve,rebind:o.rebind,detach:s,unbind:i,render:function(){return this.node||(this.node=document.createTextNode(void 0!=this.value?this.value:"")),this.node},unrender:function(t){t&&r(this.node)},getValue:o.getValue,setValue:function(t){var n;(n=this.root.viewmodel.wrapped[this.keypath])&&(t=n.get()),t!==this.value&&(this.value=t,this.parentFragment.bubble(),this.node&&e.addView(this))},firstNode:function(){return this.node},toString:function(t){var e=void 0!=this.value?""+this.value:""
return t?n(e):e}},a}(W,w,Vn,Wn,Hn,or,qn),ar=function(){this.parentFragment.bubble()},ur=function(){var t
return 1===this.fragments.length?this.fragments[0].detach():(t=document.createDocumentFragment(),this.fragments.forEach(function(e){t.appendChild(e.detach())}),t)},cr=function(t){var e,n,r
for(n=this.fragments.length,e=0;n>e;e+=1)if(r=this.fragments[e].find(t))return r
return null},hr=function(t,e){var n,r
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAll(t,e)},fr=function(t,e){var n,r
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAllComponents(t,e)},lr=function(t){var e,n,r
for(n=this.fragments.length,e=0;n>e;e+=1)if(r=this.fragments[e].findComponent(t))return r
return null},pr=function(t){return this.fragments[t.index+1]?this.fragments[t.index+1].firstNode():this.parentFragment.findNextNode(this)},dr=function(){var t,e,n
if(t=this.fragments.length)for(e=0;t>e;e+=1)if(n=this.fragments[e].firstNode())return n
return this.parentFragment.findNextNode(this)},gr=function(t,e){var n
return e.push(function(){n=e.Fragment}),function(e){var n,r,i,o,s,a,u,c,h=this
if(!this.unbound){if(n=this.parentFragment,s=[],e.forEach(function(t,e){var n,i,o,a
return t===e?void(s[t]=h.fragments[e]):(n=h.fragments[e],void 0===r&&(r=e),-1===t?(h.fragmentsToUnrender.push(n),void n.unbind()):(i=t-e,o=h.keypath+"."+e,a=h.keypath+"."+t,n.rebind(h.template.i,t,o,a),void(s[t]=n)))}),o=this.root.get(this.keypath).length,void 0===r){if(this.length===o)return
r=this.length}for(this.length=this.fragments.length=o,t.addView(this),a={template:this.template.f,root:this.root,owner:this},this.template.i&&(a.indexRef=this.template.i),i=r;o>i;i+=1)(u=s[i])?this.docFrag.appendChild(u.detach(!1)):this.fragmentsToCreate.push(i),this.fragments[i]=u
c=n.findNextNode(this),this.parentFragment.getNode().insertBefore(this.docFrag,c)}}}(w,o),vr=function(){var t
return t=this.docFrag=document.createDocumentFragment(),this.update(),this.rendered=!0,t},mr=function(t,e,n,r,i){function o(r,i){var o={template:r.template.f,root:r.root,pElement:r.parentFragment.pElement,owner:r}
if(r.subtype)switch(r.subtype){case t.SECTION_IF:return c(r,i,!1,o)
case t.SECTION_UNLESS:return c(r,i,!0,o)
case t.SECTION_WITH:return u(r,o)
case t.SECTION_EACH:if(n(i))return a(r,i,o)}return r.ordered=!!e(i),r.ordered?s(r,i,o):n(i)||"function"==typeof i?r.template.i?a(r,i,o):u(r,o):c(r,i,!1,o)}function s(t,e,n){var r,i,o
if(i=e.length,i===t.length)return!1
if(i<t.length)t.fragmentsToUnrender=t.fragments.splice(i,t.length-i),t.fragmentsToUnrender.forEach(h)
else if(i>t.length)for(r=t.length;i>r;r+=1)n.context=t.keypath+"."+r,n.index=r,t.template.i&&(n.indexRef=t.template.i),o=new f(n),t.fragmentsToRender.push(t.fragments[r]=o)
return t.length=i,!0}function a(t,e,n){var r,i,o,s,a
for(o=t.hasKey||(t.hasKey={}),i=t.fragments.length;i--;)s=t.fragments[i],s.index in e||(a=!0,s.unbind(),t.fragmentsToUnrender.push(s),t.fragments.splice(i,1),o[s.index]=!1)
for(r in e)o[r]||(a=!0,n.context=t.keypath+"."+r,n.index=r,t.template.i&&(n.indexRef=t.template.i),s=new f(n),t.fragmentsToRender.push(s),t.fragments.push(s),o[r]=!0)
return t.length=t.fragments.length,a}function u(t,e){var n
return t.length?void 0:(e.context=t.keypath,e.index=0,n=new f(e),t.fragmentsToRender.push(t.fragments[0]=n),t.length=1,!0)}function c(t,n,r,i){var o,s,a
if(s=e(n)&&0===n.length,o=r?s||!n:n&&!s){if(!t.length)return i.index=0,a=new f(i),t.fragmentsToRender.push(t.fragments[0]=a),t.length=1,!0
if(t.length>1)return t.fragmentsToUnrender=t.fragments.splice(1),t.fragmentsToUnrender.forEach(h),!0}else if(t.length)return t.fragmentsToUnrender=t.fragments.splice(0,t.fragments.length),t.fragmentsToUnrender.forEach(h),t.length=0,!0}function h(t){t.unbind()}var f
return i.push(function(){f=i.Fragment}),function(t){var e,n,i=this
this.updating||(this.updating=!0,(e=this.root.viewmodel.wrapped[this.keypath])&&(t=e.get()),this.fragmentsToCreate.length?(n={template:this.template.f,root:this.root,pElement:this.pElement,owner:this,indexRef:this.template.i},this.fragmentsToCreate.forEach(function(t){var e
n.context=i.keypath+"."+t,n.index=t,e=new f(n),i.fragmentsToRender.push(i.fragments[t]=e)}),this.fragmentsToCreate.length=0):o(this,t)&&(this.bubble(),this.rendered&&r.addView(this)),this.value=t,this.updating=!1)}}(W,a,u,w,o),yr=function(t,e){function n(t){t.unbind()}function r(t,e){var n,r=[]
for(n=t;e>n;n+=1)r.push(n)
return r}function i(t,e,n,r){var i,o,s,a,u
for(s=t.template.i,i=e;n>i;i+=1)o=t.fragments[i],a=t.keypath+"."+(i-r),u=t.keypath+"."+i,o.index=i,o.rebind(s,i,a,u)}var o
return e.push(function(){o=e.Fragment}),function(e){var o,s,a,u,c,h=this
if(!this.unbound&&(o=e.balance)){if(t.addView(h),s=e.rangeStart,h.length+=o,0>o)return h.fragmentsToUnrender=h.fragments.splice(s,-o),h.fragmentsToUnrender.forEach(n),void i(h,s,h.length,o)
a=s+e.removed,u=s+e.added,c=[a,0],c.length+=o,h.fragments.splice.apply(h.fragments,c),i(h,u,h.length,o),h.fragmentsToCreate=r(a,u)}}}(w,o),br=function(t){var e,n,r
for(e="",n=0,r=this.length,n=0;r>n;n+=1)e+=this.fragments[n].toString(t)
return e},wr=function(t){function e(t){t.unbind()}return function(){this.fragments.forEach(e),t.call(this),this.length=0,this.unbound=!0}}(Hn),Er=function(){function t(t){t.unrender(!0)}function e(t){t.unrender(!1)}return function(n){this.fragments.forEach(n?t:e)}}(),_r=function(){for(var t,e,n,r,i;t=this.fragmentsToUnrender.pop();)t.unrender(!0)
if(this.fragmentsToRender.length){for(this.rendered&&(i=this.parentFragment.getNode());t=this.fragmentsToRender.shift();)e=t.render(),this.docFrag.appendChild(e),this.rendered&&this.ordered&&(n=this.fragments[t.index+1],n&&n.rendered&&i.insertBefore(this.docFrag,n.firstNode()||null))
this.rendered&&this.docFrag.childNodes.length&&(r=this.parentFragment.findNextNode(this),i.insertBefore(this.docFrag,r))}},xr=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g,v,m){var y=function(n){this.type=t.SECTION,this.subtype=n.template.n,this.inverted=this.subtype===t.SECTION_UNLESS,this.pElement=n.pElement,this.fragments=[],this.fragmentsToCreate=[],this.fragmentsToRender=[],this.fragmentsToUnrender=[],this.length=0,e.init(this,n)}
return y.prototype={bubble:n,detach:r,find:i,findAll:o,findAllComponents:s,findComponent:a,findNextNode:u,firstNode:c,getValue:e.getValue,merge:h,rebind:e.rebind,render:f,resolve:e.resolve,setValue:l,splice:p,toString:d,unbind:g,unrender:v,update:m},y}(W,or,ar,ur,cr,hr,fr,lr,pr,dr,gr,vr,mr,yr,br,wr,Er,_r),kr=function(){var t,e
if(this.docFrag){for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e])
return this.docFrag}},Or=function(t){return function(e){var n,r,i,o
for(r=this.nodes.length,n=0;r>n;n+=1)if(i=this.nodes[n],1===i.nodeType){if(t(i,e))return i
if(o=i.querySelector(e))return o}return null}}(Ze),Sr=function(t){return function(e,n){var r,i,o,s,a,u
for(i=this.nodes.length,r=0;i>r;r+=1)if(o=this.nodes[r],1===o.nodeType&&(t(o,e)&&n.push(o),s=o.querySelectorAll(e)))for(a=s.length,u=0;a>u;u+=1)n.push(s[u])}}(Ze),Tr=function(){return this.rendered&&this.nodes[0]?this.nodes[0]:this.parentFragment.findNextNode(this)},Ar=function(t,e){function n(t){return o[t]||(o[t]=e(t))}var r,i,o={}
try{e("table").innerHTML="foo"}catch(s){r=!0,i={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}return function(e,o,s){var a,u,c,h,f,l=[]
if(e){for(r&&(u=i[o.tagName])?(a=n("DIV"),a.innerHTML=u[0]+e+u[1],a=a.querySelector(".x"),"SELECT"===a.tagName&&(c=a.options[a.selectedIndex])):o.namespaceURI===t.svg?(a=n("DIV"),a.innerHTML='<svg class="x">'+e+"</svg>",a=a.querySelector(".x")):(a=n(o.tagName),a.innerHTML=e);h=a.firstChild;)l.push(h),s.appendChild(h)
if(r&&"SELECT"===o.tagName)for(f=l.length;f--;)l[f]!==c&&(l[f].selected=!1)}return l}}(k,O),Nr=function(t){for(var e=[],n=t.length;n--;)e[n]=t[n]
return e},Cr=function(t){function e(t){return t.selected}return function(n){var r,i,o
n&&"select"===n.name&&n.binding&&(r=t(n.node.options).filter(e),n.getAttribute("multiple")?o=r.map(function(t){return t.value}):(i=r[0])&&(o=i.value),void 0!==o&&n.binding.setValue(o),n.bubble())}}(Nr),Rr=function(t,e){return function(){if(this.rendered)throw new Error("Attempted to render an item that was already rendered")
return this.docFrag=document.createDocumentFragment(),this.nodes=t(this.value,this.parentFragment.getNode(),this.docFrag),e(this.pElement),this.rendered=!0,this.docFrag}}(Ar,Cr),Ir=function(t){return function(e){var n;(n=this.root.viewmodel.wrapped[this.keypath])&&(e=n.get()),e!==this.value&&(this.value=e,this.parentFragment.bubble(),this.rendered&&t.addView(this))}}(w),Lr=function(){return void 0!=this.value?this.value:""},jr=function(t){return function(e){this.rendered&&e&&(this.nodes.forEach(t),this.rendered=!1)}}(Wn),Mr=function(t,e){return function(){var n,r
if(this.rendered){for(;this.nodes&&this.nodes.length;)n=this.nodes.pop(),n.parentNode.removeChild(n)
r=this.parentFragment.getNode(),this.nodes=t(this.value,r,this.docFrag),r.insertBefore(this.docFrag,this.parentFragment.findNextNode(this)),e(this.pElement)}}}(Ar,Cr),Pr=function(t,e,n,r,i,o,s,a,u,c,h,f){var l=function(n){this.type=t.TRIPLE,e.init(this,n)}
return l.prototype={detach:n,find:r,findAll:i,firstNode:o,getValue:e.getValue,rebind:e.rebind,render:s,resolve:e.resolve,setValue:a,toString:u,unbind:f,unrender:c,update:h},l}(W,or,kr,Or,Sr,Tr,Rr,Ir,Lr,jr,Mr,Hn),Fr=function(){this.parentFragment.bubble()},Br=function(){var t,e=this.node
return e?((t=e.parentNode)&&t.removeChild(e),e):void 0},Dr=function(t){return function(e){return t(this.node,e)?this.node:this.fragment&&this.fragment.find?this.fragment.find(e):void 0}}(Ze),Ur=function(t,e){e._test(this,!0)&&e.live&&(this.liveQueries||(this.liveQueries=[])).push(e),this.fragment&&this.fragment.findAll(t,e)},Vr=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e)},Wr=function(t){return this.fragment?this.fragment.findComponent(t):void 0},qr=function(){return null},zr=function(){return this.node},Hr=function(t){return this.attributes&&this.attributes[t]?this.attributes[t].value:void 0},$r=function(){var t,e,n,r
return t="altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath vkern".split(" "),e="attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" "),n=function(t){for(var e={},n=t.length;n--;)e[t[n].toLowerCase()]=t[n]
return e},r=n(t.concat(e)),function(t){var e=t.toLowerCase()
return r[e]||e}}(),Kr=function(t){return function(){var e=this.fragment.getValue()
e!==this.value&&(this.value=e,"value"===this.name&&this.node&&(this.node._ractive.value=e),this.rendered&&t.addView(this))}}(w),Xr=function(t,e){return function(n,r){var i,o
if(i=r.indexOf(":"),-1===i||(o=r.substr(0,i),"xmlns"===o))n.name=n.element.namespace!==t.html?e(r):r
else if(r=r.substring(i+1),n.name=e(r),n.namespace=t[o.toLowerCase()],!n.namespace)throw'Unknown namespace ("'+o+'")'}}(k,$r),Gr=function(t){return function(e){var n=e.fragment.items
if(1===n.length)return n[0].type===t.INTERPOLATOR?n[0]:void 0}}(W),Zr=function(t){var e={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"}
return function(n,r){var i
!n.pNode||n.namespace||r.pNode.namespaceURI&&r.pNode.namespaceURI!==t.html||(i=e[n.name]||n.name,void 0!==r.pNode[i]&&(n.propertyName=i),("boolean"==typeof r.pNode[i]||"value"===i)&&(n.useProperty=!0))}}(k),Jr=function(t,e,n,r,i){var o
return i.push(function(){o=i.Fragment}),function(i){return this.type=t.ATTRIBUTE,this.element=i.element,this.root=i.root,e(this,i.name),i.value&&"string"!=typeof i.value?(this.parentFragment=this.element.parentFragment,this.fragment=new o({template:i.value,root:this.root,owner:this}),this.value=this.fragment.getValue(),this.interpolator=n(this),this.isBindable=!!this.interpolator,r(this,i),void(this.ready=!0)):void(this.value=i.value||!0)}}(W,Xr,Gr,Zr,o),Qr=function(t,e,n,r){this.fragment&&this.fragment.rebind(t,e,n,r)},Yr=function(t){var e={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"}
return function(n){var r
this.node=n,n.namespaceURI&&n.namespaceURI!==t.html||(r=e[this.name]||this.name,void 0!==n[r]&&(this.propertyName=r),("boolean"==typeof n[r]||"value"===r)&&(this.useProperty=!0),"value"===r&&(this.useProperty=!0,n._ractive.value=this.value)),this.rendered=!0,this.update()}}(k),ti=function(){function t(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}return function(){var e,n,r
return e=this.name,n=this.value,"value"!==e||"select"!==this.element.name?"name"===e&&"input"===this.element.name&&(r=this.interpolator)?"name={{"+(r.keypath||r.ref)+"}}":"number"==typeof n?e+'="'+n+'"':"string"==typeof n?e+'="'+t(n)+'"':n?e:"":void 0}}(),ei=function(){this.fragment&&this.fragment.unbind()},ni=function(){var t,e,n,r,i=this.value
if(!this.locked)for(this.node._ractive.value=i,t=this.node.options,r=t.length;r--;)if(e=t[r],n=e._ractive?e._ractive.value:e.value,n==i){e.selected=!0
break}},ri=function(t){return function(){var e,n,r,i,o=this.value
for(t(o)||(o=[o]),e=this.node.options,n=e.length;n--;)r=e[n],i=r._ractive?r._ractive.value:r.value,r.selected=-1!==o.indexOf(i)}}(a),ii=function(){var t=(e=this).node,e=e.value
t.checked=e==t._ractive.value},oi=function(t){return function(){var e,n,r,i,o=this.node
if(e=o.checked,o.value=this.element.getAttribute("value"),o.checked=this.element.getAttribute("value")===this.element.getAttribute("name"),e&&!o.checked&&this.element.binding&&(r=this.element.binding.siblings,i=r.length)){for(;i--;){if(n=r[i],!n.element.node)return
if(n.element.node.checked)return t.addViewmodel(n.root.viewmodel),n.handleChange()}t.addViewmodel(n.root.viewmodel),this.root.viewmodel.set(n.keypath,void 0)}}}(w),si=function(t){return function(){var e,n
e=this.node,n=this.value,e.checked=t(n)?-1!==n.indexOf(e._ractive.value):n==e._ractive.value}}(a),ai=function(){var t,e
t=this.node,e=this.value,void 0===e&&(e=""),t.className=e},ui=function(){var t,e
t=this.node,e=this.value,void 0!==e&&(this.root.nodes[e]=void 0),this.root.nodes[e]=t,t.id=e},ci=function(){var t,e
t=this.node,e=this.value,void 0===e&&(e=""),t.style.setAttribute("cssText",e)},hi=function(){var t,e
t=this.node,e=this.value,void 0===e&&(e=""),this.locked||(t.innerHTML=e)},fi=function(){var t,e
t=this.node,e=this.value,t._ractive.value=e,this.locked||(t.value=void 0==e?"":e)},li=function(){this.locked||(this.node[this.propertyName]=this.value)},pi=function(){var t,e,n
t=this.node,e=this.name,n=this.value,this.namespace?t.setAttributeNS(this.namespace,e,n):"string"==typeof n||"number"==typeof n?t.setAttribute(e,n):n?t.setAttribute(e,""):t.removeAttribute(e)},di=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p){return function(){var d,g,v,m,y
d=this.name,g=this.element,v=this.node,"id"===d?y=u:"value"===d?"select"===g.name&&"value"===d?y=v.multiple?r:n:"textarea"===g.name?y=f:v.getAttribute("contenteditable")?y=h:"input"===g.name&&(m=g.getAttribute("type"),y="file"===m?e:"radio"===m&&g.binding&&"name"===g.binding.name?o:f):this.twoway&&"name"===d?"radio"===v.type?y=i:"checkbox"===v.type&&(y=s):"style"===d&&v.style.setAttribute?y=c:"class"!==d||v.namespaceURI&&v.namespaceURI!==t.html?this.useProperty&&(y=l):y=a,y||(y=p),this.update=y,this.update()}}(k,Ve,ni,ri,ii,oi,si,ai,ui,ci,hi,fi,li,pi),gi=function(t,e,n,r,i,o,s){var a=function(t){this.init(t)}
return a.prototype={bubble:t,init:e,rebind:n,render:r,toString:i,unbind:o,update:s},a}(Kr,Jr,Qr,Yr,ti,ei,di),vi=function(t){return function(e,n){var r,i,o=[]
for(r in n)n.hasOwnProperty(r)&&(i=new t({element:e,name:r,value:n[r],root:e.root}),o.push(o[r]=i))
return o}}(gi),mi=function(t){for(var e,n,r=Array.prototype.slice,i=r.call(arguments,1);n=i.shift();)for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e])
return t},yi=function(t,e,n,r,i){var o=function(t){var n,r,i
return this.element=t,this.root=t.root,this.attribute=t.attributes[this.name||"value"],n=this.attribute.interpolator,n.twowayBinding=this,n.keypath&&"${"===n.keypath.substr?(e("Two-way binding does not work with expressions: "+n.keypath),!1):(n.keypath||(n.ref&&n.resolve(n.ref),n.resolver&&n.resolver.forceResolution()),this.keypath=r=n.keypath,void(void 0===this.root.viewmodel.get(r)&&this.getInitialValue&&(i=this.getInitialValue(),void 0!==i&&this.root.viewmodel.set(r,i))))}
return o.prototype={handleChange:function(){var e=this
t.start(this.root),this.attribute.locked=!0,this.root.viewmodel.set(this.keypath,this.getValue()),t.scheduleTask(function(){return e.attribute.locked=!1}),t.end()},rebound:function(){var t,e,n
e=this.keypath,n=this.attribute.interpolator.keypath,e!==n&&(i(this.root._twowayBindings[e],this),this.keypath=n,t=this.root._twowayBindings[n]||(this.root._twowayBindings[n]=[]),t.push(this))},unbind:function(){}},o.extend=function(t){var e,i=this
return e=function(t){o.call(this,t),this.init&&this.init()},e.prototype=n(i.prototype),r(e.prototype,t),e.extend=o.extend,e},o}(w,P,q,mi,l),bi=function(){this._ractive.binding.handleChange()},wi=function(t,e){var n=t.extend({getInitialValue:function(){return this.element.fragment?this.element.fragment.toString():""},render:function(){var t=this.element.node
t.addEventListener("change",e,!1),this.root.lazy||(t.addEventListener("input",e,!1),t.attachEvent&&t.addEventListener("keyup",e,!1))},unrender:function(){var t=this.element.node
t.removeEventListener("change",e,!1),t.removeEventListener("input",e,!1),t.removeEventListener("keyup",e,!1)},getValue:function(){return this.element.node.innerHTML}})
return n}(yi,bi),Ei=function(){var t={}
return function(e,n,r){var i=e+n+r
return t[i]||(t[i]=[])}}(),_i=function(t,e,n,r,i){var o=n.extend({name:"checked",init:function(){this.siblings=r(this.root._guid,"radio",this.element.getAttribute("name")),this.siblings.push(this)},render:function(){var t=this.element.node
t.addEventListener("change",i,!1),t.attachEvent&&t.addEventListener("click",i,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",i,!1),t.removeEventListener("click",i,!1)},handleChange:function(){t.start(this.root),this.siblings.forEach(function(t){t.root.viewmodel.set(t.keypath,t.getValue())}),t.end()},getValue:function(){return this.element.node.checked},unbind:function(){e(this.siblings,this)}})
return o}(w,l,yi,Ei,bi),xi=function(t,e,n,r){var i=e.extend({name:"name",init:function(){this.siblings=r(this.root._guid,"radioname",this.keypath),this.siblings.push(this),this.radioName=!0,this.attribute.twoway=!0},getInitialValue:function(){return this.element.getAttribute("checked")?this.element.getAttribute("value"):void 0},render:function(){var t=this.element.node
t.name="{{"+this.keypath+"}}",t.checked=this.root.viewmodel.get(this.keypath)==this.element.getAttribute("value"),t.addEventListener("change",n,!1),t.attachEvent&&t.addEventListener("click",n,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",n,!1),t.removeEventListener("click",n,!1)},getValue:function(){var t=this.element.node
return t._ractive?t._ractive.value:t.value},handleChange:function(){this.element.node.checked&&e.prototype.handleChange.call(this)},rebound:function(t,n,r,i){var o
e.prototype.rebound.call(this,t,n,r,i),(o=this.element.node)&&(o.name="{{"+this.keypath+"}}")},unbind:function(){t(this.siblings,this)}})
return i}(l,yi,bi,Ei),ki=function(t,e,n,r,i){function o(t){return t.isChecked}function s(t){return t.element.getAttribute("value")}var a=n.extend({name:"name",getInitialValue:function(){return this.noInitialValue=!0,[]},init:function(){var e,n,i
this.checkboxName=!0,this.siblings=r(this.root._guid,"checkboxes",this.keypath),this.siblings.push(this),this.noInitialValue&&(this.siblings.noInitialValue=!0),i=this.siblings.noInitialValue,e=this.root.viewmodel.get(this.keypath),n=this.element.getAttribute("value"),i?(this.isChecked=this.element.getAttribute("checked"),this.isChecked&&e.push(n)):this.isChecked=t(e)?-1!==e.indexOf(n):e===n},unbind:function(){e(this.siblings,this)},render:function(){var t=this.element.node
t.name="{{"+this.keypath+"}}",t.checked=this.isChecked,t.addEventListener("change",i,!1),t.attachEvent&&t.addEventListener("click",i,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",i,!1),t.removeEventListener("click",i,!1)},changed:function(){var t=!!this.isChecked
return this.isChecked=this.element.node.checked,this.isChecked===t},handleChange:function(){this.isChecked=this.element.node.checked,n.prototype.handleChange.call(this)},getValue:function(){return this.siblings.filter(o).map(s)}})
return a}(a,l,yi,Ei,bi),Oi=function(t,e){var n=t.extend({name:"checked",render:function(){var t=this.element.node
t.addEventListener("change",e,!1),t.attachEvent&&t.addEventListener("click",e,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",e,!1),t.removeEventListener("click",e,!1)},getValue:function(){return this.element.node.checked}})
return n}(yi,bi),Si=function(t,e,n){var r=e.extend({getInitialValue:function(){var t,e,n=this.element.options
if(e=t=n.length,t){for(;e--;)if(n[e].getAttribute("selected"))return n[e].getAttribute("value")
for(;++e<t;)if(!n[e].getAttribute("disabled"))return n[e].getAttribute("value")}},render:function(){this.element.node.addEventListener("change",n,!1)},unrender:function(){this.element.node.removeEventListener("change",n,!1)},setValue:function(e){t.addViewmodel(this.root.viewmodel),this.root.viewmodel.set(this.keypath,e)},getValue:function(){var t,e,n,r,i
for(t=this.element.node.options,n=t.length,e=0;n>e;e+=1)if(r=t[e],t[e].selected)return i=r._ractive?r._ractive.value:r.value},forceUpdate:function(){var e=this,n=this.getValue()
void 0!==n&&(this.attribute.locked=!0,t.addViewmodel(this.root.viewmodel),t.scheduleTask(function(){return e.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,n))}})
return r}(w,yi,bi),Ti=function(t){return function(e,n){var r
if(!t(e)||!t(n))return!1
if(e.length!==n.length)return!1
for(r=e.length;r--;)if(e[r]!==n[r])return!1
return!0}}(a),Ai=function(t,e,n,r){var i=n.extend({getInitialValue:function(){return this.element.options.filter(function(t){return t.getAttribute("selected")}).map(function(t){return t.getAttribute("value")})},render:function(){var t
this.element.node.addEventListener("change",r,!1),t=this.root.viewmodel.get(this.keypath),void 0===t&&this.handleChange()},unrender:function(){this.element.node.removeEventListener("change",r,!1)},setValue:function(){throw new Error("TODO not implemented yet")},getValue:function(){var t,e,n,r,i,o
for(t=[],e=this.element.node.options,r=e.length,n=0;r>n;n+=1)i=e[n],i.selected&&(o=i._ractive?i._ractive.value:i.value,t.push(o))
return t},handleChange:function(){var t,r,i
return t=this.attribute,r=t.value,i=this.getValue(),void 0!==r&&e(i,r)||n.prototype.handleChange.call(this),this},forceUpdate:function(){var e=this,n=this.getValue()
void 0!==n&&(this.attribute.locked=!0,t.addViewmodel(this.root.viewmodel),t.scheduleTask(function(){return e.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,n))},updateModel:function(){void 0!==this.attribute.value&&this.attribute.value.length||this.root.viewmodel.set(this.keypath,this.initialValue)}})
return i}(w,Ti,Si,bi),Ni=function(t,e){var n=t.extend({render:function(){this.element.node.addEventListener("change",e,!1)},unrender:function(){this.element.node.removeEventListener("change",e,!1)},getValue:function(){return this.element.node.files}})
return n}(yi,bi),Ci=function(t,e){function n(){var t
e.call(this),t=this._ractive.root.viewmodel.get(this._ractive.binding.keypath,i),this.value=void 0==t?"":t}var r,i
return i={evaluateWrapped:!0},r=t.extend({getInitialValue:function(){return""},getValue:function(){return this.element.node.value},render:function(){var t=this.element.node
t.addEventListener("change",e,!1),this.root.lazy||(t.addEventListener("input",e,!1),t.attachEvent&&t.addEventListener("keyup",e,!1)),t.addEventListener("blur",n,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",e,!1),t.removeEventListener("input",e,!1),t.removeEventListener("keyup",e,!1),t.removeEventListener("blur",n,!1)}})}(yi,bi),Ri=function(t){return t.extend({getInitialValue:function(){return void 0},getValue:function(){var t=parseFloat(this.element.node.value)
return isNaN(t)?void 0:t}})}(Ci),Ii=function(t,e,n,r,i,o,s,a,u,c,h){function f(t){return t&&t.isBindable}return function(l){var p,d,g,v,m=l.attributes
return l.binding&&(l.binding.teardown(),l.binding=null),l.getAttribute("contenteditable")&&f(m.value)?d=e:"input"===l.name?(p=l.getAttribute("type"),"radio"===p||"checkbox"===p?(g=f(m.name),v=f(m.checked),g&&v&&t.error({message:"badRadioInputBinding"}),g?d="radio"===p?r:i:v&&(d="radio"===p?n:o)):"file"===p&&f(m.value)?d=u:f(m.value)&&(d="number"===p||"range"===p?c:h)):"select"===l.name&&f(m.value)?d=l.getAttribute("multiple")?a:s:"textarea"===l.name&&f(m.value)&&(d=h),d?new d(l):void 0}}(Zn,wi,_i,xi,ki,Oi,Si,Ai,Ni,Ri,Ci),Li=function(t){this.root.fire(this.action.toString().trim(),t)},ji=function(t){function e(t){this.root.fire.apply(this.root,[this.action.toString().trim(),t].concat(this.params))}function n(t){var e=this.dynamicParams.getValue(i)
"string"==typeof e&&(e=e.substr(1,e.length-2)),this.root.fire.apply(this.root,[this.action.toString().trim(),t].concat(e))}var r,i={args:!0}
return t.push(function(){r=t.Fragment}),function(t,i,o){var s
this.element=t,this.root=t.root,this.name=i,this.proxies=[],s=o.n||o,"string"!=typeof s&&(s=new r({template:s,root:this.root,owner:this.element})),this.action=s,o.d?(this.dynamicParams=new r({template:o.d,root:this.root,owner:this.element}),this.fire=n):o.a&&(this.params=o.a,this.fire=e)}}(o),Mi=function(t,e,n,r){"string"!=typeof this.action&&this.action.rebind(t,e,n,r),this.dynamicParams&&this.dynamicParams.rebind(t,e,n,r)},Pi=function(t){var e,n
e=this._ractive,n=e.events[t.type],n.fire({node:this,original:t,index:e.index,keypath:e.keypath,context:e.root.get(e.keypath)})},Fi=function(t,e,n){function r(t){return i[t]||(i[t]=function(e){var n=e.node._ractive
e.index=n.index,e.keypath=n.keypath,e.context=n.root.get(n.keypath),n.events[t].fire(e)}),i[t]}var i={}
return function(){var i,o=this.name
this.node=this.element.node,(i=e.registries.events.find(this.root,o))?this.custom=i(this.node,r(o)):("on"+o in this.node||window&&"on"+o in window||t('Missing "'+this.name+'" event. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#events'),this.node.addEventListener(o,n,!1)),this.node._ractive.events[o]=this}}(P,ze,Pi),Bi=function(){"string"!=typeof this.action&&this.action.teardown(),this.dynamicParams&&this.dynamicParams.teardown()},Di=function(t){return function(){this.custom?this.custom.teardown():this.node.removeEventListener(this.name,t,!1)}}(Pi),Ui=function(t,e,n,r,i,o){var s=function(t,e,n){this.init(t,e,n)}
return s.prototype={fire:t,init:e,rebind:n,render:r,teardown:i,unrender:o},s}(Li,ji,Mi,Fi,Bi,Di),Vi=function(t){return function(e,n){var r,i,o,s,a=[]
for(i in n)if(n.hasOwnProperty(i))for(o=i.split("-"),r=o.length;r--;)s=new t(e,o[r],n[i]),a.push(s)
return a}}(Ui),Wi=function(t,e,n){var r,i,o
return e.push(function(){r=e.Fragment}),i={args:!0},o=function(e,o){var s,a,u,c=this
c.element=e,c.root=s=e.root,a=o.n||o,"string"!=typeof a&&(u=new r({template:a,root:s,owner:e}),a=u.toString(),u.unbind()),o.a?c.params=o.a:o.d&&(c.fragment=new r({template:o.d,root:s,owner:e}),c.params=c.fragment.getValue(i),c.fragment.bubble=function(){this.dirtyArgs=this.dirtyValue=!0,c.params=this.getValue(i),c.ready&&c.update()}),c.fn=n.registries.decorators.find(s,a),c.fn||t.error({debug:s.debug,message:"missingPlugin",args:{plugin:"decorator",name:a}})},o.prototype={init:function(){var t,e,n,r=this
if(t=r.element.node,r.params?(n=[t].concat(r.params),e=r.fn.apply(r.root,n)):e=r.fn.call(r.root,t),!e||!e.teardown)throw new Error("Decorator definition must return an object with a teardown method")
r.actual=e,r.ready=!0},update:function(){this.actual.update?this.actual.update.apply(this.root,this.params):(this.actual.teardown(!0),this.init())},teardown:function(t){this.actual.teardown(),!t&&this.fragment&&this.fragment.unbind()}},o}(Zn,o,ze),qi=function(t){function e(t,e){for(var n=t.length;n--;)if(t[n]==e)return!0}return function(n){var r,i,o,s,a
r=n.node,r&&(s=t(r.options),i=n.getAttribute("value"),o=n.getAttribute("multiple"),void 0!==i?(s.forEach(function(t){var n,r
n=t._ractive?t._ractive.value:t.value,r=o?e(i,n):i==n,r&&(a=!0),t.selected=r}),a||(s[0]&&(s[0].selected=!0),n.binding&&n.binding.forceUpdate())):n.binding&&n.binding.forceUpdate())}}(Nr),zi=function(t,e){return function(){var n=this
this.dirty||(this.dirty=!0,t.scheduleTask(function(){e(n),n.dirty=!1})),this.parentFragment.bubble()}}(w,qi),Hi=function(t){do if("select"===t.name)return t
while(t=t.parent)},$i=function(t){return function(e,n){e.select=t(e.parent),e.select.options.push(e),n.a||(n.a={}),n.a.value||n.a.hasOwnProperty("disabled")||(n.a.value=n.f),"selected"in n.a&&void 0!==e.select.getAttribute("value")&&delete n.a.selected}}(Hi),Ki=function(t,e,n,r,i,o,s,a,u){var c
return u.push(function(){c=u.Fragment}),function(u){var h,f,l,p,d
this.type=t.ELEMENT,h=this.parentFragment=u.parentFragment,f=this.template=u.template,this.parent=u.pElement||h.pElement,this.root=l=h.root,this.index=u.index,this.name=e(f.e),"option"===this.name&&a(this,f),"select"===this.name&&(this.options=[],this.bubble=s),this.attributes=n(this,f.a),f.f&&(this.fragment=new c({template:f.f,root:l,owner:this,pElement:this})),l.twoway&&(p=r(this,f.a))&&(this.binding=p,d=this.root._twowayBindings[p.keypath]||(this.root._twowayBindings[p.keypath]=[]),d.push(p)),f.v&&(this.eventHandlers=i(this,f.v)),f.o&&(this.decorator=new o(this,f.o)),this.intro=f.t0||f.t1,this.outro=f.t0||f.t2}}(W,$r,vi,Ii,Vi,Wi,zi,$i,o),Xi=function(t){return function(e,n){return e===n||t(e,n)}}(Xn),Gi=function(t,e){return function(n,r,i,o){var s=n[r]
s&&!t(s,o)&&t(s,i)&&(n[r]=e(s,i,o))}}(Xi,Gn),Zi=function(t){return function(e,n,r,i){function o(t){t.rebind(e,n,r,i)}var s,a,u,c
if(this.attributes&&this.attributes.forEach(o),this.eventHandlers&&this.eventHandlers.forEach(o),this.fragment&&o(this.fragment),u=this.liveQueries)for(c=this.root,s=u.length;s--;)u[s]._makeDirty()
this.node&&(a=this.node._ractive)&&(t(a,"keypath",r,i),void 0!=e&&(a.index[e]=n))}}(Gi),Ji=function(t){var e,n,r;((e=t.getAttribute("width"))||(n=t.getAttribute("height")))&&t.node.addEventListener("load",r=function(){e&&(t.node.width=e.value),n&&(t.node.height=n.value),t.node.removeEventListener("load",r,!1)},!1)},Qi=function(t,e,n){var r,i={}
return n.push(function(){r=n.Fragment}),function(n,o,s){var a,u,c,h=this
return h.element=n,h.root=a=n.root,h.isIntro=s,u=o.n||o,"string"!=typeof u&&(c=new r({template:u,root:a,owner:n}),u=c.toString(),c.unbind()),h.name=u,o.a?h.params=o.a:o.d&&(c=new r({template:o.d,root:a,owner:n}),h.params=c.getValue(i),c.unbind()),h._fn=e.registries.transitions.find(a,u),h._fn?void 0:void t.error({debug:a.debug,message:"missingPlugin",args:{plugin:"transition",name:u}})}}(Zn,ze,o),Yi=function(t){return t.replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()})},to=function(t,e,n,r){var i,o,s
return t?(o={},s=n("div").style,i=function(t){var n,i,a
if(t=r(t),!o[t])if(void 0!==s[t])o[t]=t
else for(a=t.charAt(0).toUpperCase()+t.substring(1),n=e.length;n--;)if(i=e[n],void 0!==s[i+a]){o[t]=i+a
break}return o[t]}):i=null,i}(S,I,O,Yi),eo=function(t,e,n,r){var i,o
return e?(o=window.getComputedStyle||t.getComputedStyle,i=function(t){var e,i,s,a,u
if(e=o(this.node),"string"==typeof t)return u=e[r(t)],"0px"===u&&(u=0),u
if(!n(t))throw new Error("Transition$getStyle must be passed a string, or an array of strings representing CSS properties")
for(i={},s=t.length;s--;)a=t[s],u=e[r(a)],"0px"===u&&(u=0),i[a]=u
return i}):i=null,i}(be,S,a,to),no=function(t){return function(e,n){var r
if("string"==typeof e)this.node.style[t(e)]=n
else for(r in e)e.hasOwnProperty(r)&&(this.node.style[t(r)]=e[r])
return this}}(to),ro=function(t,e,n){function r(t){return t}var i=function(i){var o
this.duration=i.duration,this.step=i.step,this.complete=i.complete,"string"==typeof i.easing?(o=i.root.easing[i.easing],o||(t('Missing easing function ("'+i.easing+'"). You may need to download a plugin from [TODO]'),o=r)):o="function"==typeof i.easing?i.easing:r,this.easing=o,this.start=e(),this.end=this.start+this.duration,this.running=!0,n.add(this)}
return i.prototype={tick:function(t){var e,n
return this.running?t>this.end?(this.step&&this.step(1),this.complete&&this.complete(1),!1):(e=t-this.start,n=this.easing(e/this.duration),this.step&&this.step(n),!0):!1},stop:function(){this.abort&&this.abort(),this.running=!1}},i}(P,j,M),io=function(t){var e=new RegExp("^-(?:"+t.join("|")+")-")
return function(t){return t.replace(e,"")}}(I),oo=function(t){var e=new RegExp("^(?:"+t.join("|")+")([A-Z])")
return function(t){var n
return t?(e.test(t)&&(t="-"+t),n=t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})):""}}(I),so=function(t,e,n,r,i,o,s,a,u){var c,h,f,l,p,d,g,v,m={},y={}
return t?(h=n("div").style,function(){void 0!==h.transition?(f="transition",l="transitionend",p=!0):void 0!==h.webkitTransition?(f="webkitTransition",l="webkitTransitionEnd",p=!0):p=!1}(),f&&(d=f+"Duration",g=f+"Property",v=f+"TimingFunction"),c=function(t,n,c,h,f){setTimeout(function(){var b,w,E,_,x
_=function(){w&&E&&(t.root.fire(t.name+":end",t.node,t.isIntro),f())},b=(t.node.namespaceURI||"")+t.node.tagName,t.node.style[g]=h.map(s).map(u).join(","),t.node.style[v]=u(c.easing||"linear"),t.node.style[d]=c.duration/1e3+"s",x=function(e){var n
n=h.indexOf(r(a(e.propertyName))),-1!==n&&h.splice(n,1),h.length||(t.node.removeEventListener(l,x,!1),E=!0,_())},t.node.addEventListener(l,x,!1),setTimeout(function(){for(var a,u,f,d,g,v=h.length,k=[];v--;)d=h[v],a=b+d,p&&!y[a]&&(t.node.style[s(d)]=n[d],m[a]||(u=t.getStyle(d),m[a]=t.getStyle(d)!=n[d],y[a]=!m[a],y[a]&&(t.node.style[s(d)]=u))),(!p||y[a])&&(void 0===u&&(u=t.getStyle(d)),f=h.indexOf(d),-1===f?e("Something very strange happened with transitions. If you see this message, please let @RactiveJS know. Thanks!"):h.splice(f,1),g=/[^\d]*$/.exec(n[d])[0],k.push({name:s(d),interpolator:i(parseFloat(u),parseFloat(n[d])),suffix:g}))
k.length?new o({root:t.root,duration:c.duration,easing:r(c.easing||""),step:function(e){var n,r
for(r=k.length;r--;)n=k[r],t.node.style[n.name]=n.interpolator(e)+n.suffix},complete:function(){w=!0,_()}}):w=!0,h.length||(t.node.removeEventListener(l,x,!1),E=!0,_())},0)},c.delay||0)}):c=null,c}(S,P,O,Yi,He,ro,to,io,oo),ao=function(t){function e(){u.hidden=document[i]}function n(){u.hidden=!0}function r(){u.hidden=!1}var i,o,s,a,u
if("undefined"!=typeof document){if(i="hidden",u={},i in document)s=""
else for(a=t.length;a--;)o=t[a],i=o+"Hidden",i in document&&(s=o)
void 0!==s?(document.addEventListener(s+"visibilitychange",e),e()):("onfocusout"in document?(document.addEventListener("focusout",n),document.addEventListener("focusin",r)):(window.addEventListener("pagehide",n),window.addEventListener("blur",n),window.addEventListener("pageshow",r),window.addEventListener("focus",r)),u.hidden=!1)}return u}(I),uo=function(t,e,n,r,i,o,s){var a,u,c
return e?(u=window.getComputedStyle||t.getComputedStyle,a=function(t,e,a,h){var f,l=this
if(s.hidden)return this.setStyle(t,e),c||(c=r.resolve())
"string"==typeof t?(f={},f[t]=e):(f=t,h=a,a=e),a||(n('The "'+l.name+'" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340'),a=l,h=l.complete)
var p=new r(function(t){var e,n,r,s,c,h,p
if(!a.duration)return l.setStyle(f),void t()
for(e=Object.keys(f),n=[],r=u(l.node),c={},h=e.length;h--;)p=e[h],s=r[i(p)],"0px"===s&&(s=0),s!=f[p]&&(n.push(p),l.node.style[i(p)]=s)
return n.length?void o(l,f,a,n,t):void t()})
return h&&(n("t.animateStyle returns a Promise as of 0.4.0. Transition authors should do t.animateStyle(...).then(callback)"),p.then(h)),p}):a=null,a}(be,S,P,p,to,so,ao),co=function(t,e){var n
for(n in e)!e.hasOwnProperty(n)||n in t||(t[n]=e[n])
return t},ho=function(t){return function(e,n){return"number"==typeof e?e={duration:e}:"string"==typeof e?e="slow"===e?{duration:600}:"fast"===e?{duration:200}:{duration:400}:e||(e={}),t(e,n)}}(co),fo=function(){function t(t,e){e?t.setAttribute("style",e):(t.getAttribute("style"),t.removeAttribute("style"))}return function(){var e,n,r=this
return e=r.node=r.element.node,n=e.getAttribute("style"),r.complete=function(i){!i&&r.isIntro&&t(e,n),e._ractive.transition=null,r._manager.remove(r)},r._fn?void r._fn.apply(r.root,[r].concat(r.params)):void r.complete()}}(),lo=function(t,e,n,r,i,o,s){var a,u
return s.push(function(){a=s.Fragment}),u=function(t,e,n){this.init(t,e,n)},u.prototype={init:t,start:o,getStyle:e,setStyle:n,animateStyle:r,processParams:i},u}(Qi,eo,no,uo,ho,fo,o),po=function(t,e,n,r,i,o,s,a,u,c,h){function f(e){var n,r,i
return n=(r=e.getAttribute("xmlns"))?r:"svg"===e.name?t.svg:(i=e.parent)?"foreignObject"===i.name?t.html:i.node.namespaceURI:e.root.el.namespaceURI}function l(t){var n,r,i
if(r=t.select.getAttribute("value"),void 0!==r)if(n=t.getAttribute("value"),t.select.node.multiple&&e(r)){for(i=r.length;i--;)if(n==r[i]){t.node.selected=!0
break}}else t.node.selected=n==r}function p(t){var e,n,r,i,o
e=t.root
do for(n=e._liveQueries,r=n.length;r--;)i=n[r],o=n["_"+i],o._test(t)&&(t.liveQueries||(t.liveQueries=[])).push(o)
while(e=e._parent)}var d,g
return d=function(){var t=this.node,e=this.fragment.toString(!1)
if(t.styleSheet)t.styleSheet.cssText=e
else{for(;t.hasChildNodes();)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(e))}},g=function(){this.node.type&&"text/javascript"!==this.node.type||n("Script tag was updated. This does not cause the code to be re-evaluated!"),this.node.text=this.fragment.toString(!1)},function(){var t,e,n=this,v=this.root
if(t=f(this),e=this.node=i(this.name,t),v.constructor.css&&this.parentFragment.getNode()===v.el&&this.node.setAttribute("data-rvcguid",v.constructor._guid),o(this.node,"_ractive",{value:{proxy:this,keypath:u(this.parentFragment),index:this.parentFragment.indexRefs,events:r(null),root:v}}),this.attributes.forEach(function(t){return t.render(e)}),this.fragment&&("script"===this.name?(this.bubble=g,this.node.text=this.fragment.toString(!1),this.fragment.unrender=s):"style"===this.name?(this.bubble=d,this.bubble(),this.fragment.unrender=s):this.binding&&this.getAttribute("contenteditable")?this.fragment.unrender=s:this.node.appendChild(this.fragment.render())),this.eventHandlers&&this.eventHandlers.forEach(function(t){return t.render()}),this.binding&&(this.binding.render(),this.node._ractive.binding=this.binding),"img"===this.name&&c(this),this.decorator&&this.decorator.fn&&a.scheduleTask(function(){n.decorator.init()}),v.transitionsEnabled&&this.intro){var m=new h(this,this.intro,!0)
a.registerTransition(m),a.scheduleTask(function(){return m.start()})}return"option"===this.name&&l(this),this.node.autofocus&&a.scheduleTask(function(){return n.node.focus()}),p(this),this.node}}(k,a,P,q,O,T,Ve,w,g,Ji,lo),go=function(t,e){function n(t){var n,r,i
if(n=t.getAttribute("value"),void 0===n)return!1
if(r=t.select.getAttribute("value"),r==n)return!0
if(t.select.getAttribute("multiple")&&e(r))for(i=r.length;i--;)if(r[i]==n)return!0}function r(t){var e,n,r,i
return e=t.attributes,n=e.type,r=e.value,i=e.name,n&&"radio"===n.value&&r&&i.interpolator&&r.value===i.interpolator.value?!0:void 0}function i(t){var e=t.toString()
return e?" "+e:""}return function(){var e,o
return e="<"+(this.template.y?"!DOCTYPE":this.template.e),e+=this.attributes.map(i).join(""),"option"===this.name&&n(this)&&(e+=" selected"),"input"===this.name&&r(this)&&(e+=" checked"),e+=">",this.fragment&&(o="script"!==this.name&&"style"!==this.name,e+=this.fragment.toString(o)),t.test(this.template.e)||(e+="</"+this.template.e+">"),e}}(xe,a),vo=function(t){return function(e){t(e.select.options,e)}}(l),mo=function(t){function e(t){t.unbind()}return function(){this.fragment&&this.fragment.unbind(),this.binding&&this.binding.unbind(),"option"===this.name&&t(this),this.attributes.forEach(e)}}(vo),yo=function(t,e){function n(t){var e,n,r
for(r=t.liveQueries.length;r--;)e=t.liveQueries[r],n=e.selector,e._remove(t.node)}return function(r){var i,o
if("option"===this.name?this.detach():r&&t.detachWhenReady(this),this.fragment&&this.fragment.unrender(!1),(i=this.binding)&&(this.binding.unrender(),this.node._ractive.binding=null,o=this.root._twowayBindings[i.keypath],o.splice(o.indexOf(i),1)),this.eventHandlers&&this.eventHandlers.forEach(function(t){return t.unrender()}),this.decorator&&this.decorator.teardown(),this.root.transitionsEnabled&&this.outro){var s=new e(this,this.outro,!1)
t.registerTransition(s),t.scheduleTask(function(){return s.start()})}this.liveQueries&&n(this)}}(w,lo),bo=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d){var g=function(t){this.init(t)}
return g.prototype={bubble:t,detach:e,find:n,findAll:r,findAllComponents:i,findComponent:o,findNextNode:s,firstNode:a,getAttribute:u,init:c,rebind:h,render:f,toString:l,unbind:p,unrender:d},g}(Fr,Br,Dr,Ur,Vr,Wr,qr,zr,Hr,Ki,Zi,po,go,mo,yo),wo=function(){function t(t,e){var r=n.exec(e)[0]
return null===t||r.length<t.length?r:t}var e=/^\s*$/,n=/^\s*/
return function(n){var r,i,o,s
return r=n.split("\n"),i=r[0],void 0!==i&&e.test(i)&&r.shift(),o=r[r.length-1],void 0!==o&&e.test(o)&&r.pop(),s=r.reduce(t,null),s&&(n=r.map(function(t){return t.replace(s,"")}).join("\n")),n}}(),Eo=function(t,e,n,r){function i(r,i){var o=e.registries.partials,s=o.findInstance(r,i)
if(s){var a,u=s.partials[i]
if("function"==typeof u&&(a=u.bind(s),a.isOwner=s.partials.hasOwnProperty(i),u=a(s.data,n)),!u)return void t.warn({debug:r.debug,message:"noRegistryFunctionReturn",args:{registry:"partial",name:i}})
if(!n.isParsed(u)){var c=n.parse(u,n.getParseOptions(s))
c.p&&t.warn({debug:r.debug,message:"noNestedPartials",args:{rname:i}})
var h=a?s:o.findOwner(s,i)
h.partials[i]=u=c.t}return a&&(u._fn=a),u.v?u.t:u}}return function(e,o){var s
if(s=i(e,o))return s
if(s=n.fromId(o,{noThrow:!0})){s=r(s)
var a=n.parse(s,n.getParseOptions(e))
return e.partials[o]=a.t}return t.error({debug:e.debug,message:"noTemplateForPartial",args:{name:o}}),[]}}(Zn,ze,Fe,wo),_o=function(t,e){var n
return e?n=t.split("\n").map(function(t,n){return n?e+t:t}).join("\n"):t},xo=function(t,e,n,r){var i,o
return r.push(function(){o=r.Fragment}),i=function(n){var r,i=this.parentFragment=n.parentFragment
if(this.type=t.PARTIAL,this.name=n.template.r,this.index=n.index,this.root=i.root,!n.template.r)throw new Error("Partials must have a static reference (no expressions). This may change in a future version of Ractive.")
r=e(i.root,n.template.r),this.fragment=new o({template:r,root:i.root,owner:this,pElement:i.pElement})},i.prototype={bubble:function(){this.parentFragment.bubble()},firstNode:function(){return this.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},detach:function(){return this.fragment.detach()},render:function(){return this.fragment.render()},unrender:function(t){this.fragment.unrender(t)},rebind:function(t,e,n,r){return this.fragment.rebind(t,e,n,r)},unbind:function(){this.fragment.unbind()},toString:function(e){var r,i,o,s
return r=this.fragment.toString(e),i=this.parentFragment.items[this.index-1],i&&i.type===t.TEXT?(o=i.template.split("\n").pop(),(s=/^\s+$/.exec(o))?n(r,s[0]):r):r},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)},getValue:function(){return this.fragment.getValue()}},i}(W,Eo,_o,o),ko=function(t,e,n){var r
return n.push(function(){r=n.Ractive}),function i(n,r){var o,s=t.registries.components.findInstance(n,r)
if(s&&(o=s.components[r],!o._parent)){var a=o.bind(s)
if(a.isOwner=s.components.hasOwnProperty(r),o=a(s.data),!o)return void e.warn({debug:n.debug,message:"noRegistryFunctionReturn",args:{registry:"component",name:r}})
"string"==typeof o&&(o=i(n,o)),o._fn=a,s.components[r]=o}return o}}(ze,Zn,o),Oo=function(){return this.instance.fragment.detach()},So=function(t){return this.instance.fragment.find(t)},To=function(t,e){return this.instance.fragment.findAll(t,e)},Ao=function(t,e){e._test(this,!0),this.instance.fragment&&this.instance.fragment.findAllComponents(t,e)},No=function(t){return t&&t!==this.name?this.instance.fragment?this.instance.fragment.findComponent(t):null:this.instance},Co=function(){return this.parentFragment.findNextNode(this)},Ro=function(){return this.rendered?this.instance.fragment.firstNode():null},Io=function(t,e){var n,r
return e.push(function(){n=e.Fragment}),r=function(t,e,r){this.parentFragment=t.parentFragment,this.component=t,this.key=e,this.fragment=new n({template:r,root:t.root,owner:this}),this.value=this.fragment.getValue()},r.prototype={bubble:function(){this.dirty||(this.dirty=!0,t.addView(this))},update:function(){var e=this.fragment.getValue()
this.component.instance.viewmodel.set(this.key,e),t.addViewmodel(this.component.instance.viewmodel),this.value=e,this.dirty=!1},rebind:function(t,e,n,r){this.fragment.rebind(t,e,n,r)},unbind:function(){this.fragment.unbind()}},r}(w,o),Lo=function(t,e,n,r){function i(i,o,s,a){var u,c,h,f,l,p
return h=i.root,f=i.parentFragment,"string"==typeof s?(c=e(s),c?c.value:s):null===s?!0:1===s.length&&s[0].t===t.INTERPOLATOR&&s[0].r?f.indexRefs&&void 0!==f.indexRefs[p=s[0].r]?(i.indexRefBindings[p]=o,f.indexRefs[p]):(l=n(h,s[0].r,f)||s[0].r,a.push({childKeypath:o,parentKeypath:l}),h.viewmodel.get(l)):(u=new r(i,o,s),i.complexParameters.push(u),u.value)}return function(t,e,n,r){var o,s,a={}
t.complexParameters=[]
for(o in n)n.hasOwnProperty(o)&&(s=i(t,o,n[o],r),(void 0!==s||void 0===e[o])&&(a[o]=s))
return a}}(W,Ne,y,Io),jo=function(t,e,n,r){var i,o,s,a
return o=t.parentFragment,a=t.root,s={content:r||[]},i=new e({append:!0,data:n,partials:s,magic:a.magic||e.defaults.magic,modifyArrays:a.modifyArrays,_parent:a,_component:t,adapt:a.adapt})},Mo=function(t){return function(e,n){n.forEach(function(n){var r,i
t(e,e.root,n.parentKeypath,n.childKeypath),r=e.instance.viewmodel.get(n.childKeypath),i=e.root.viewmodel.get(n.parentKeypath),void 0!==r&&void 0===i&&e.root.viewmodel.set(n.parentKeypath,r)})}}(m),Po=function(t){function e(e,n,r,i){"string"!=typeof i&&t.error({debug:n.debug,message:"noComponentEventArguments"}),e.on(r,function(){var t=Array.prototype.slice.call(arguments)
t.unshift(i),n.fire.apply(n,t)})}return function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t.instance,t.root,r,n[r])}}(Zn),Fo=function(t){var e,n
for(e=t.root;e;)(n=e._liveComponentQueries["_"+t.name])&&n.push(t.instance),e=e._parent},Bo=function(t,e,n,r,i,o,s){return function(a,u){var c,h,f,l
if(c=this.parentFragment=a.parentFragment,h=c.root,this.root=h,this.type=t.COMPONENT,this.name=a.template.e,this.index=a.index,this.indexRefBindings={},this.bindings=[],!u)throw new Error('Component "'+this.name+'" not found')
l=[],f=n(this,u.defaults.data||{},a.template.a,l),r(this,u,f,a.template.f),i(this,l),o(this,a.template.v),(a.template.t1||a.template.t2||a.template.o)&&e('The "intro", "outro" and "decorator" directives have no effect on components'),s(this)}}(W,P,Lo,jo,Mo,Po,Fo),Do=function(t,e){return function(n,r,i,o){var s,a,u=this.instance,c=u._parent
this.bindings.forEach(function(t){var n
t.root===c&&(n=e(t.keypath,i,o))&&t.rebind(n)}),this.complexParameters.forEach(function(t){t.rebind(n,r,i,o)}),(s=this.indexRefBindings[n])&&(t.addViewmodel(u.viewmodel),u.viewmodel.set(s,r)),(a=this.root._liveComponentQueries["_"+this.name])&&a._makeDirty()}}(w,Gn),Uo=function(){var t=this.instance
return t.render(this.parentFragment.getNode()),this.rendered=!0,t.detach()},Vo=function(){return this.instance.fragment.toString()},Wo=function(){function t(t){t.unbind()}function e(t){var e,n
e=t.root
do(n=e._liveComponentQueries["_"+t.name])&&n._remove(t)
while(e=e._parent)}return function(){this.complexParameters.forEach(t),this.bindings.forEach(t),e(this),this.instance.fragment.unbind()}}(),qo=function(t){this.instance.fire("teardown"),this.shouldDestroy=t,this.instance.unrender()},zo=function(t,e,n,r,i,o,s,a,u,c,h,f,l){var p=function(t,e){this.init(t,e)}
return p.prototype={detach:t,find:e,findAll:n,findAllComponents:r,findComponent:i,findNextNode:o,firstNode:s,init:a,rebind:u,render:c,toString:h,unbind:f,unrender:l},p}(Oo,So,To,Ao,No,Co,Ro,Bo,Do,Uo,Vo,Wo,qo),Ho=function(t,e){var n=function(e){this.type=t.COMMENT,this.value=e.template.c}
return n.prototype={detach:e,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createComment(this.value)),this.node},toString:function(){return"<!--"+this.value+"-->"},unrender:function(t){t&&this.node.parentNode.removeChild(this.node)}},n}(W,qn),$o=function(t,e,n,r,i,o,s,a,u,c){return function(h){if("string"==typeof h.template)return new e(h)
switch(h.template.t){case t.INTERPOLATOR:return new n(h)
case t.SECTION:return new r(h)
case t.TRIPLE:return new i(h)
case t.ELEMENT:var f
return(f=a(h.parentFragment.root,h.template.e))?new u(h,f):new o(h)
case t.PARTIAL:return new s(h)
case t.COMMENT:return new c(h)
default:throw new Error("Something very strange happened. Please file an issue at https://github.com/ractivejs/ractive/issues. Thanks!")}}}(W,zn,sr,xr,Pr,bo,xo,ko,zo,Ho),Ko=function(t,e,n){return function(r){var i,o,s,a=this
if(this.owner=r.owner,i=this.parent=this.owner.parentFragment,this.root=r.root,this.pElement=r.pElement,this.context=r.context,this.owner.type===t.SECTION&&(this.index=r.index),i&&(o=i.indexRefs)){this.indexRefs=e(null)
for(s in o)this.indexRefs[s]=o[s]}this.priority=i?i.priority+1:1,r.indexRef&&(this.indexRefs||(this.indexRefs={}),this.indexRefs[r.indexRef]=r.index),"string"==typeof r.template?r.template=[r.template]:r.template||(r.template=[]),this.items=r.template.map(function(t,e){return n({parentFragment:a,pElement:r.pElement,template:t,index:e})}),this.value=this.argsList=null,this.dirtyArgs=this.dirtyValue=!0,this.inited=!0}}(W,q,$o),Xo=function(t){return function(e,n,r,i){t(this,"context",r,i),this.indexRefs&&void 0!==this.indexRefs[e]&&(this.indexRefs[e]=n),this.items.forEach(function(t){t.rebind&&t.rebind(e,n,r,i)})}}(Gi),Go=function(){var t
return 1===this.items.length?t=this.items[0].render():(t=document.createDocumentFragment(),this.items.forEach(function(e){t.appendChild(e.render())})),this.rendered=!0,t},Zo=function(t){return this.items?this.items.map(function(e){return e.toString(t)}).join(""):""},Jo=function(){function t(t){t.unbind&&t.unbind()}return function(){this.items.forEach(t)}}(),Qo=function(t){if(!this.rendered)throw new Error("Attempted to unrender a fragment that was not rendered")
this.items.forEach(function(e){return e.unrender(t)})},Yo=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g,v){var m=function(t){this.init(t)}
return m.prototype={bubble:t,detach:e,find:n,findAll:r,findAllComponents:i,findComponent:o,findNextNode:s,firstNode:a,getNode:u,getValue:c,init:h,rebind:f,render:l,toString:p,unbind:d,unrender:g},v.Fragment=m,m}(Rn,In,Ln,jn,Mn,Pn,Fn,Bn,Dn,Un,Ko,Xo,Go,Zo,Jo,Qo,o),ts=function(t,e,n){var r=["template","partials","components","decorators","events"]
return function(i,o){var s,a,u,c,h
if("function"!=typeof i||o?i=i||{}:(o=i,i={}),"object"!=typeof i)throw new Error("The reset method takes either no arguments, or an object containing new data")
for((a=this.viewmodel.wrapped[""])&&a.reset?a.reset(i)===!1&&(this.data=i):this.data=i,u=n.reset(this),c=u.length;c--;)if(r.indexOf(u[c])>-1){h=!0
break}if(h){var f
this.viewmodel.mark(""),(f=this.component)&&(f.shouldDestroy=!0),this.unrender(),f&&(f.shouldDestroy=!1),this.fragment.template!==this.template&&(this.fragment.unbind(),this.fragment=new e({template:this.template,root:this,owner:this})),s=this.render(this.el,this.anchor)}else s=t.start(this,!0),this.viewmodel.mark(""),t.end()
return this.fire("reset",i),o&&s.then(o),s}}(w,Yo,ze),es=function(t,e){return function(n){var r,i
t.template.init(null,this,{template:n}),r=this.transitionsEnabled,this.transitionsEnabled=!1,(i=this.component)&&(i.shouldDestroy=!0),this.unrender(),i&&(i.shouldDestroy=!1),this.fragment.unbind(),this.fragment=new e({template:this.template,root:this,owner:this}),this.render(this.el,this.anchor),this.transitionsEnabled=r}}(ze,Yo),ns=function(t){return t("reverse")}(Sn),rs=function(t,e,n,r){var i=/\*/
return function(o,s,a){var u,c,h=this
if(c=t.start(this,!0),e(o)){u=o,a=s
for(o in u)u.hasOwnProperty(o)&&(s=u[o],o=n(o),this.viewmodel.set(o,s))}else o=n(o),i.test(o)?r(this,o).forEach(function(t){h.viewmodel.set(t,s)}):this.viewmodel.set(o,s)
return t.end(),a&&c.then(a.bind(this)),c}}(w,u,R,gn),is=function(t){return t("shift")}(Sn),os=function(t){return t("sort")}(Sn),ss=function(t){return t("splice")}(Sn),as=function(t){return function(e,n){return t(this,e,void 0===n?-1:-n)}}(N),us=function(t){return function(e){var n
return this.fire("teardown"),this.fragment.unbind(),this.viewmodel.teardown(),n=this.rendered?this.unrender():t.resolve(),e&&n.then(e.bind(this)),n}}(p),cs=function(t){return function(e,n){var r
return"string"!=typeof e&&t.errorOnly({debug:this.debug,messsage:"badArguments",arg:{arguments:e}}),r=this.get(e),this.set(e,!r,n)}}(Zn),hs=function(){return this.fragment.toString(!0)},fs=function(t,e,n){return function(){var r,i,o=this
if(!this.rendered)throw new Error("ractive.unrender() was called on a Ractive instance that was not rendered")
for(r=e.start(this,!0),i=!this.component||this.component.shouldDestroy,i=i||this.shouldDestroy,this.constructor.css&&r.then(function(){n.remove(o.constructor)});this._animations[0];)this._animations[0].stop()
return this.fragment.unrender(i),this.rendered=!1,t(this.el.__ractive_instances__,this),e.end(),r}}(l,w,Nn),ls=function(t){return t("unshift")}(Sn),ps=function(t){return function(e,n){var r
return"function"==typeof e?(n=e,e=""):e=e||"",r=t.start(this,!0),this.viewmodel.mark(e),t.end(),this.fire("update",e),n&&r.then(n.bind(this)),r}}(w),ds=function(t,e){function n(r,i,o,s){var a,u,c,h,f,l,p=[]
if(a=r._twowayBindings[i],a&&(c=a.length))for(;c--;)h=a[c],(!h.radioName||h.element.node.checked)&&(h.checkboxName?p[h.keypath]||h.changed()||(p.push(h.keypath),p[h.keypath]=h):(f=h.attribute.value,l=h.getValue(),t(f,l)||e(f,l)||(o[i]=l)))
if(p.length&&p.forEach(function(e){var n,r,i
n=p[e],r=n.attribute.value,i=n.getValue(),t(r,i)||(o[e]=i)}),s&&(u=r.viewmodel.depsMap["default"][i]))for(c=u.length;c--;)n(r,u[c],o,s)}return function(t,e){var r
return"string"!=typeof t&&(t="",e=!0),n(this,t,r={},e),this.set(r)}}(Ti,v),gs=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g,v,m,y,b,w,E,_,x,k,O,S,T,A,N,C,R){return{add:t,animate:e,detach:n,find:r,findAll:i,findAllComponents:o,findComponent:s,fire:a,get:u,insert:c,merge:h,observe:f,off:l,on:p,pop:d,push:g,render:v,reset:m,resetTemplate:y,reverse:b,set:w,shift:E,sort:_,splice:x,subtract:k,teardown:O,toggle:S,toHTML:T,unrender:A,unshift:N,update:C,updateModel:R}}(C,Ke,Xe,Ge,sn,an,un,cn,hn,ln,pn,bn,_n,xn,Tn,An,Cn,ts,es,ns,rs,is,os,ss,as,us,cs,hs,fs,ls,ps,ds),vs=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e,n
return e=16*Math.random()|0,n="x"==t?e:3&e|8,n.toString(16)})},ms=function(){var t=0
return function(){return"r-"+t++}}(),ys=function(t,e,n,r){var i=t.root,o=t.keypath
return"sort"===n||"reverse"===n?void i.viewmodel.set(o,e):void(r&&i.viewmodel.splice(o,r))},bs=function(t,e,n,r,i){var o,s,a,u=[],c=["pop","push","reverse","shift","sort","splice","unshift"]
return c.forEach(function(o){var s=function(){var e,s,a,u,c
for(e=n(this,o,Array.prototype.slice.call(arguments)),s=r(this,e),a=Array.prototype[o].apply(this,arguments),this._ractive.setting=!0,c=this._ractive.wrappers.length;c--;)u=this._ractive.wrappers[c],t.start(u.root),i(u,this,o,s),t.end()
return this._ractive.setting=!1,a}
e(u,o,{value:s})}),o={},o.__proto__?(s=function(t){t.__proto__=u},a=function(t){t.__proto__=Array.prototype}):(s=function(t){var n,r
for(n=c.length;n--;)r=c[n],e(t,r,{value:u[r],configurable:!0})},a=function(t){var e
for(e=c.length;e--;)delete t[c[e]]}),s.unpatch=a,s}(w,T,kn,On,ys),ws=function(t,e,n){var r,i,o
return r={filter:function(t){return e(t)&&(!t._ractive||!t._ractive.setting)},wrap:function(t,e,n){return new i(t,e,n)}},i=function(e,r,i){this.root=e,this.value=r,this.keypath=i,r._ractive||(t(r,"_ractive",{value:{wrappers:[],instances:[],setting:!1},configurable:!0}),n(r)),r._ractive.instances[e._guid]||(r._ractive.instances[e._guid]=0,r._ractive.instances.push(e)),r._ractive.instances[e._guid]+=1,r._ractive.wrappers.push(this)},i.prototype={get:function(){return this.value},teardown:function(){var t,e,r,i,s
if(t=this.value,e=t._ractive,r=e.wrappers,i=e.instances,e.setting)return!1
if(s=r.indexOf(this),-1===s)throw new Error(o)
if(r.splice(s,1),r.length){if(i[this.root._guid]-=1,!i[this.root._guid]){if(s=i.indexOf(this.root),-1===s)throw new Error(o)
i.splice(s,1)}}else delete t._ractive,n.unpatch(this.value)}},o="Something went wrong in a rather interesting way",r}(T,a,bs),Es=function(t,e){var n,r
return t&&(n={filter:function(n,r,i){return t.filter(n,r,i)&&e.filter(n)},wrap:function(t,e,n){return new r(t,e,n)}},r=function(n,r,i){this.value=r,this.magic=!0,this.magicWrapper=t.wrap(n,r,i),this.arrayWrapper=e.wrap(n,r,i)},r.prototype={get:function(){return this.value},teardown:function(){this.arrayWrapper.teardown(),this.magicWrapper.teardown()},reset:function(t){return this.magicWrapper.reset(t)}}),n}(_,ws),_s=function(t,e,n,r){function i(t,e){var n,r={}
if(!e)return t
e+="."
for(n in t)t.hasOwnProperty(n)&&(r[e+n]=t[n])
return r}function o(t){var e
return s[t]||(e=t?t+".":"",s[t]=function(n,r){var o
return"string"==typeof n?(o={},o[e+n]=r,o):"object"==typeof n?e?i(n,t):n:void 0}),s[t]}var s={}
return function(i,s){var a,u,c,h,f=this.ractive
for(a=f.adapt.length,u=0;a>u;u+=1){if(c=f.adapt[u],"string"==typeof c){var l=t.registries.adaptors.find(f,c)
if(!l)throw new Error('Missing adaptor "'+c+'"')
c=f.adapt[u]=l}if(c.filter(s,i,f))return h=this.wrapped[i]=c.wrap(f,s,i,o(i)),h.value=s,s}return f.magic?r.filter(s,i,f)?this.wrapped[i]=r.wrap(f,s,i):n.filter(s,i,f)&&(this.wrapped[i]=n.wrap(f,s,i)):f.modifyArrays&&e.filter(s,i,f)&&(this.wrapped[i]=e.wrap(f,s,i)),s}}(ze,ws,_,Es),xs=function(t){var e,n,r,i,o=[""]
for(e=t.length;e--;)for(n=t[e],r=n.split(".");r.length>1;)r.pop(),i=r.join("."),-1===o.indexOf(i)&&o.push(i)
return o},ks=function(){function t(t){var n,r,i,o,s,a=""
if(!e[t]){for(i=[];a.length<t;)a+=1
for(n=parseInt(a,2),o=function(t){return"1"===t},s=0;n>=s;s+=1){for(r=s.toString(2);r.length<t;)r="0"+r
i[s]=Array.prototype.map.call(r,o)}e[t]=i}return e[t]}var e={}
return function(e){var n,r,i,o
return n=e.split("."),r=t(n.length),i=function(t,e){return t?"*":n[e]},o=r.map(function(t){return t.map(i).join(".")})}}(),Os=function(t){function e(e,i,o){var s
r(e,i),o||(s=t(i),s.forEach(function(t){n(e,t,i)}))}function n(t,e,o){var s,a,u
s=t.depsMap.patternObservers,a=s[e],a&&a.forEach(function(e){var s=i.exec(e)[0]
u=o?o+"."+s:s,r(t,u),n(t,e,u)})}function r(t,e){t.patternObservers.forEach(function(t){t.regex.test(e)&&t.update(e)})}var i=/[^\.]+$/
return e}(ks),Ss=function(t,e){function n(t){t.update()}function r(t,e,n){var r,i;(r=o(t,e,n))&&(i=t.get(e),r.forEach(function(t){return t.setValue(i)}))}function i(t,e,n){function r(t){t.forEach(i),t.forEach(s)}function i(e){var r=o(t,e,n)
r&&u.push({keypath:e,deps:r})}function s(e){var i;(i=t.depsMap[n][e])&&r(i)}function a(e){var n=t.get(e.keypath)
e.deps.forEach(function(t){return t.setValue(n)})}var u=[]
r(e),u.forEach(a)}function o(t,e,n){var r=t.deps[n]
return r?r[e]:null}function s(t,e){e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)})}var a=["observers","default"]
return function(){var o,u,c,h,f,l=this,p=this,d=[],g={}
if(this.changes.length){h=function(t){var e;(e=p.deps.computed[t])&&s(c,e)},f=function(t){var e
h(t),(e=p.depsMap.computed[t])&&e.forEach(f)}
do o=this.changes,s(d,o),this.changes=[],c=[],u=t(o),u.forEach(h),o.forEach(f),c.forEach(n)
while(this.changes.length)
return u=t(d),this.patternObservers.length&&(u.forEach(function(t){return e(l,t,!0)}),d.forEach(function(t){return e(l,t)})),a.forEach(function(t){l.deps[t]&&(u.forEach(function(e){return r(l,e,t)}),i(l,d,t))}),d.forEach(function(t){g[t]=l.get(t)}),this.implicitChanges={},g}}}(xs,Os),Ts=function(){this.capturing=!0,this.captured=[]},As=function(t,e){var n,r,i
if(e||(r=this.wrapped[t])&&r.teardown()!==!1&&(this.wrapped[t]=null),(i=this.computations[t])&&i.compute(),this.cache[t]=void 0,n=this.cacheMap[t])for(;n.length;)this.clearCache(n.pop())},Ns={FAILED_LOOKUP:!0},Cs=function(t,e){var n={},r=function(t,r){this.viewmodel=t,this.root=t.ractive,this.ref=r,this.parentFragment=n,t.unresolvedImplicitDependencies[r]=!0,t.unresolvedImplicitDependencies.push(this),e.addUnresolved(this)}
return r.prototype={resolve:function(){this.viewmodel.mark(this.ref),this.viewmodel.unresolvedImplicitDependencies[this.ref]=!1,t(this.viewmodel.unresolvedImplicitDependencies,this)},teardown:function(){e.removeUnresolved(this)}},r}(l,w),Rs=function(t,e){function n(e,n){var r,i,o,s,a,u,c
return r=n.split("."),i=r.pop(),o=r.join("."),s=e.get(o),(c=e.wrapped[o])&&(s=c.get()),null!==s&&void 0!==s?((a=e.cacheMap[o])?-1===a.indexOf(n)&&a.push(n):e.cacheMap[o]=[n],"object"!=typeof s||i in s?(u=s[i],e.adapt(n,u,!1),e.cache[n]=u,u):e.cache[n]=t):void 0}var r={}
return function(i){var o=arguments[1]
void 0===o&&(o=r)
var s,a,u,c,h=this.ractive,f=this.cache
return void 0===f[i]?((a=this.computations[i])?s=a.value:(u=this.wrapped[i])?s=u.value:i?s=(c=this.evaluators[i])?c.value:n(this,i):(this.adapt("",h.data),s=h.data),f[i]=s):s=f[i],o.evaluateWrapped&&(u=this.wrapped[i])&&(s=u.get()),o.capture&&this.capturing&&-1===this.captured.indexOf(i)&&(this.captured.push(i),s===t&&this.unresolvedImplicitDependencies[i]!==!0&&new e(this,i)),s===t?void 0:s}}(Ns,Cs),Is=function(t,e){e&&(this.implicitChanges[t]=!0),-1===this.changes.indexOf(t)&&(this.changes.push(t),this.clearCache(t))},Ls=function(t,e){var n,r,i,o
return n={},r=0,i=t.map(function(t,i){var s,a,u
a=r,u=e.length
do{if(s=e.indexOf(t,a),-1===s)return o=!0,-1
a=s+1}while(n[s]&&u>a)
return s===r&&(r+=1),s!==i&&(o=!0),n[s]=!0,s}),i.unchanged=!o,i},js=function(t,e,n){function r(e){return"function"==typeof e.merge&&(!e.subtype||e.subtype===t.SECTION_EACH)}function i(t){return JSON.stringify(t)}function o(t){if(t===!0)return i
if("string"==typeof t)return s[t]||(s[t]=function(e){return e[t]}),s[t]
if("function"==typeof t)return t
throw new Error("The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)")}var s={}
return function(t,i,s,a){var u,c,h,f,l,p=this
if(this.mark(t),a&&a.compare){h=o(a.compare)
try{u=i.map(h),c=s.map(h)}catch(d){if(this.debug)throw d
e("Merge operation: comparison failed. Falling back to identity checking"),u=i,c=s}}else u=i,c=s
f=n(u,c),f.forEach(function(e,n){-1===e&&p.mark(t+"."+n)}),this.set(t,s,!0),(l=this.deps["default"][t])&&l.filter(r).forEach(function(t){return t.merge(f)}),i.length!==s.length&&this.mark(t+".length",!0)}}(W,P,Ls),Ms=function(){function t(t,e,n){var r,i,o,s
for(r=e.split(".");r.length;)r.pop(),i=r.join("."),o=t.depsMap[n]||(t.depsMap[n]={}),s=o[i]||(o[i]=[]),void 0===s[e]&&(s[e]=0,s.push(e)),s[e]+=1,e=i}return function(e,n){var r=arguments[2]
void 0===r&&(r="default")
var i,o,s
n.isStatic||(i=this.deps[r]||(this.deps[r]={}),o=i[e]||(i[e]=[]),o.push(n),e&&((s=this.evaluators[e])&&(s.dependants||s.wake(),s.dependants+=1),t(this,e,r)))}}(),Ps=function(){return this.capturing=!1,this.captured},Fs=function(t,e){return function(n,r,i){var o,s,a,u,c,h,f,l
t(this.cache[n],r)||(c=this.computations[n],h=this.wrapped[n],f=this.evaluators[n],c&&!c.setting&&c.set(r),h&&h.reset&&(l=h.reset(r)!==!1,l&&(r=h.get())),f&&(f.value=r),c||f||l||(o=n.split("."),s=o.pop(),a=o.join("."),h=this.wrapped[a],h&&h.set?h.set(s,r):(u=h?h.get():this.get(a),u||(u=e(s),this.set(a,u,!0)),u[s]=r)),i?this.clearCache(n):this.mark(n))}}(v,E),Bs=function(t){function e(e){return e.type===t.SECTION&&(!e.subtype||e.subtype===t.SECTION_EACH)&&e.rendered}return function(t,n){var r,i,o=this
for(r=n.rangeStart;r<n.rangeEnd;r+=1)o.mark(t+"."+r)
n.balance&&o.mark(t+".length",!0),(i=o.deps["default"][t])&&i.filter(e).forEach(function(t){return t.splice(n)})}}(W),Ds=function(){var t,e=this
for(Object.keys(this.cache).forEach(function(t){return e.clearCache(t)});t=this.unresolvedImplicitDependencies.pop();)t.teardown()},Us=function(){function t(t,e,n){var r,i,o,s
for(r=e.split(".");r.length;)r.pop(),i=r.join("."),o=t.depsMap[n],s=o[i],s[e]-=1,s[e]||(s.splice(s.indexOf(e),1),s[e]=void 0),e=i}return function(e,n){var r=arguments[2]
void 0===r&&(r="default")
var i,o,s
if(!n.isStatic){if(i=this.deps[r][e],o=i.indexOf(n),-1===o)throw new Error("Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks")
i.splice(o,1),e&&((s=this.evaluators[e])&&(s.dependants-=1,s.dependants||s.sleep()),t(this,e,r))}}}(),Vs=function(){function t(t){var n="var __ractive=this;return("+t.replace(e,function(t,e){return'__ractive.get("'+e+'")'})+")"
return new Function(n)}var e=/\$\{([^\}]+)\}/g
return function(e){return"function"==typeof e?{get:e}:"string"==typeof e?{get:t(e)}:("object"==typeof e&&"string"==typeof e.get&&(e={get:t(e.get),set:e.set}),e)}}(),Ws=function(t,e,n){var r=function(t,e,n){this.ractive=t,this.viewmodel=t.viewmodel,this.key=e,this.getter=n.get,this.setter=n.set,this.dependencies=[],this.update()}
return r.prototype={set:function(t){if(this.setting)return void(this.value=t)
if(!this.setter)throw new Error("Computed properties without setters are read-only. (This may change in a future version of Ractive!)")
this.setter.call(this.ractive,t)},compute:function(){var e,r,i
e=this.ractive,e.viewmodel.capture()
try{this.value=this.getter.call(e)}catch(o){t.warn({debug:e.debug,message:"failedComputation",args:{key:this.key,err:o.message||o}}),r=!0}return i=e.viewmodel.release(),n(this,this.dependencies,i),r?!1:!0},update:function(){var t=this.value
this.compute()&&!e(this.value,t)&&this.ractive.viewmodel.mark(this.key)}},r}(Zn,v,Jn),qs=function(t,e){return function(n,r){var i,o
for(i in r)o=t(r[i]),n.viewmodel.computations[i]=new e(n,i,o)}}(Vs,Ws),zs=function(){function t(t){return"string"==typeof t&&(t=[t]),t}var e={lookup:function(t,e){var n,r=t.adapt
if(!r||!r.length)return r
if(e&&Object.keys(e).length&&(n=r.length))for(;n--;){var i=r[n]
"string"==typeof i&&(r[n]=e[i]||i)}return r},combine:function(e,n){return e=t(e),n=t(n),e&&e.length?n&&n.length?(e.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),n):e.slice():n}}
return e}(),Hs=function(t,e,n,r,i,o,s,a,u,c,h,f,l,p,d,g){var v
try{Object.defineProperty({},"test",{value:0})}catch(m){v=!0}var y=function(e){this.ractive=e,y.extend(e.constructor,e),this.cache={},this.cacheMap=t(null),this.deps={computed:{},"default":{}},this.depsMap={computed:{},"default":{}},this.patternObservers=[],this.wrapped=t(null),this.evaluators=t(null),this.computations=t(null),this.captured=null,this.unresolvedImplicitDependencies=[],this.changes=[],this.implicitChanges={}}
return y.extend=function(t,e){if(e.magic&&v)throw new Error("Getters and setters (magic mode) are not supported in this browser")
e.adapt=g.combine(t.prototype.adapt,e.adapt)||[],e.adapt=g.lookup(e,e.adaptors)},y.prototype={adapt:e,applyChanges:n,capture:r,clearCache:i,get:o,mark:s,merge:a,register:u,release:c,set:h,splice:f,teardown:l,unregister:p,compute:function(){d(this.ractive,this.ractive.computed)}},y}(q,_s,Ss,Ts,As,Rs,Is,js,Ms,Ps,Fs,Bs,Ds,Us,qs,zs),$s=function(t,e,n,r,i,o){function s(t){var e
if(e=n(t.el)){var r=t.transitionsEnabled
if(t.noIntro&&(t.transitionsEnabled=!1),e&&!t.append){if(e.__ractive_instances__)try{e.__ractive_instances__.splice(0,e.__ractive_instances__.length).forEach(function(t){return t.teardown()})}catch(i){}e.innerHTML=""}t.render(e,t.append),t.transitionsEnabled=r}}function a(t,n){t._guid=r(),t._subs=e(null),t._config={},t._twowayBindings=e(null),t._animations=[],t.nodes={},t._liveQueries=[],t._liveComponentQueries=[],n._parent&&n._component&&(t._parent=n._parent,t.component=n._component,n._component.instance=t)}return function(e){var n=arguments[1]
void 0===n&&(n={}),a(e,n),t.init(e.constructor,e,n),e.viewmodel=new i(e),e.viewmodel.compute(),e.template&&(e.fragment=new o({template:e.template,root:e,owner:e})),e.viewmodel.applyChanges(),s(e)}}(ze,q,fn,ms,Hs,Yo),Ks=function(t){return function(e,n,r){e.beforeInit&&e.beforeInit(r),t(e,r)}}($s),Xs=function(t,e,n,r){function i(e,n,r){for(var i in r)if(!(i in u)&&r.hasOwnProperty(i)){var o=r[i]
"function"==typeof o&&(o=t(e,i,o)),n[i]=o}}function o(t){if(!(t.prototype instanceof a))return t
for(var n={};t;)h.forEach(function(e){s(e.useDefaults?t.prototype:t,n,e.name)}),Object.keys(t.prototype).forEach(function(r){if("computed"!==r){var i=t.prototype[r]
if(r in n){if("function"==typeof n[r]&&"function"==typeof i&&n[r]._method){var o,s=i._method
s&&(i=i._method),o=e(n[r]._method,i),s&&(o._method=o),n[r]=o}}else n[r]=i._method?i._method:i}}),t=t._parent!==a?t._parent:!1
return n}function s(t,e,n){var r,i=Object.keys(t[n])
i.length&&((r=e[n])||(r=e[n]={}),i.filter(function(t){return!(t in r)}).forEach(function(e){return r[e]=t[n][e]}))}var a,u={_parent:!0,_component:!0},c={toPrototype:i,toOptions:o},h=n.registries
return n.keys.forEach(function(t){return u[t]=!0}),r.push(function(){a=r.Ractive}),c}(We,D,ze,o),Gs=function(t,e,n,r,i,o,s){return function a(){var u=arguments[0]
void 0===u&&(u={})
var c,h,f,l=this
return u=s.toOptions(u),c=function(t){i(this,c,t)},h=t(l.prototype),h.constructor=c,f={_guid:{value:n()},defaults:{value:h},extend:{value:a,writable:!0,configurable:!0},_parent:{value:l}},e(c,f),r.extend(l,h,u),o.extend(l,h),s.toPrototype(l.prototype,h,u),c.prototype=h,c}}(q,A,vs,ze,Ks,Hs,Xs),Zs=function(t,e,n,r,i,o,s,a,u,c,h,f,l){var p,d
for(p=function(t){f(this,t)},d={extend:{value:c},parse:{value:h},Promise:{value:a},svg:{value:r},magic:{value:i},VERSION:{value:"0.5.5"},adaptors:{writable:!0,value:{}},components:{writable:!0,value:{}},decorators:{writable:!0,value:{}},easing:{writable:!0,value:e},events:{writable:!0,value:{}},interpolators:{writable:!0,value:n},partials:{writable:!0,value:{}},transitions:{writable:!0,value:{}}},o(p,d),p.prototype=u(s,t),p.prototype.constructor=p,p.defaults=p.prototype,l.Ractive=p;l.length;)l.pop()()
var g="function"
if(typeof Date.now!==g||typeof String.prototype.trim!==g||typeof Object.keys!==g||typeof Array.prototype.indexOf!==g||typeof Array.prototype.forEach!==g||typeof Array.prototype.map!==g||typeof Array.prototype.filter!==g||"undefined"!=typeof window&&typeof window.addEventListener!==g)throw new Error("It looks like you're attempting to use Ractive.js in an older browser. You'll need to use one of the 'legacy builds' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.")
return p}(r,i,h,f,x,A,gs,p,mi,Gs,je,$s,o)
"undefined"!=typeof e&&e.exports?e.exports=Zs:"function"==typeof define&&define.amd&&define(function(){return Zs}),t.Ractive=Zs,Zs.noConflict=function(){return t.Ractive=n,Zs}}("undefined"!=typeof window?window:this)},{}],93:[function(){},{}],94:[function(t,e,n){function r(t,e,n){if(!(this instanceof r))return new r(t,e,n)
var i,o=typeof t
if("number"===o)i=t>0?t>>>0:0
else if("string"===o)"base64"===e&&(t=A(t)),i=r.byteLength(t,e)
else{if("object"!==o||null===t)throw new Error("First argument needs to be a number, array or string.")
"Buffer"===t.type&&Array.isArray(t.data)&&(t=t.data),i=+t.length>0?Math.floor(+t.length):0}var s
r._useTypedArrays?s=r._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0)
var a
if(r._useTypedArrays&&"number"==typeof t.byteLength)s._set(t)
else if(R(t))if(r.isBuffer(t))for(a=0;i>a;a++)s[a]=t.readUInt8(a)
else for(a=0;i>a;a++)s[a]=(t[a]%256+256)%256
else if("string"===o)s.write(t,0,e)
else if("number"===o&&!r._useTypedArrays&&!n)for(a=0;i>a;a++)s[a]=0
return s}function i(t,e,n,r){n=Number(n)||0
var i=t.length-n
r?(r=Number(r),r>i&&(r=i)):r=i
var o=e.length
W(o%2===0,"Invalid hex string"),r>o/2&&(r=o/2)
for(var s=0;r>s;s++){var a=parseInt(e.substr(2*s,2),16)
W(!isNaN(a),"Invalid hex string"),t[n+s]=a}return s}function o(t,e,n,r){var i=F(L(e),t,n,r)
return i}function s(t,e,n,r){var i=F(j(e),t,n,r)
return i}function a(t,e,n,r){return s(t,e,n,r)}function u(t,e,n,r){var i=F(P(e),t,n,r)
return i}function c(t,e,n,r){var i=F(M(e),t,n,r)
return i}function h(t,e,n){return q.fromByteArray(0===e&&n===t.length?t:t.slice(e,n))}function f(t,e,n){var r="",i=""
n=Math.min(t.length,n)
for(var o=e;n>o;o++)t[o]<=127?(r+=B(i)+String.fromCharCode(t[o]),i=""):i+="%"+t[o].toString(16)
return r+B(i)}function l(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;n>i;i++)r+=String.fromCharCode(t[i])
return r}function p(t,e,n){return l(t,e,n)}function d(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r)
for(var i="",o=e;n>o;o++)i+=I(t[o])
return i}function g(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function v(t,e,n,r){r||(W("boolean"==typeof n,"missing or invalid endian"),W(void 0!==e&&null!==e,"missing offset"),W(e+1<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o
return n?(o=t[e],i>e+1&&(o|=t[e+1]<<8)):(o=t[e]<<8,i>e+1&&(o|=t[e+1])),o}}function m(t,e,n,r){r||(W("boolean"==typeof n,"missing or invalid endian"),W(void 0!==e&&null!==e,"missing offset"),W(e+3<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o
return n?(i>e+2&&(o=t[e+2]<<16),i>e+1&&(o|=t[e+1]<<8),o|=t[e],i>e+3&&(o+=t[e+3]<<24>>>0)):(i>e+1&&(o=t[e+1]<<16),i>e+2&&(o|=t[e+2]<<8),i>e+3&&(o|=t[e+3]),o+=t[e]<<24>>>0),o}}function y(t,e,n,r){r||(W("boolean"==typeof n,"missing or invalid endian"),W(void 0!==e&&null!==e,"missing offset"),W(e+1<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o=v(t,e,n,!0),s=32768&o
return s?-1*(65535-o+1):o}}function b(t,e,n,r){r||(W("boolean"==typeof n,"missing or invalid endian"),W(void 0!==e&&null!==e,"missing offset"),W(e+3<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o=m(t,e,n,!0),s=2147483648&o
return s?-1*(4294967295-o+1):o}}function w(t,e,n,r){return r||(W("boolean"==typeof n,"missing or invalid endian"),W(e+3<t.length,"Trying to read beyond buffer length")),z.read(t,e,n,23,4)}function E(t,e,n,r){return r||(W("boolean"==typeof n,"missing or invalid endian"),W(e+7<t.length,"Trying to read beyond buffer length")),z.read(t,e,n,52,8)}function _(t,e,n,r,i){i||(W(void 0!==e&&null!==e,"missing value"),W("boolean"==typeof r,"missing or invalid endian"),W(void 0!==n&&null!==n,"missing offset"),W(n+1<t.length,"trying to write beyond buffer length"),D(e,65535))
var o=t.length
if(!(n>=o)){for(var s=0,a=Math.min(o-n,2);a>s;s++)t[n+s]=(e&255<<8*(r?s:1-s))>>>8*(r?s:1-s)
return n+2}}function x(t,e,n,r,i){i||(W(void 0!==e&&null!==e,"missing value"),W("boolean"==typeof r,"missing or invalid endian"),W(void 0!==n&&null!==n,"missing offset"),W(n+3<t.length,"trying to write beyond buffer length"),D(e,4294967295))
var o=t.length
if(!(n>=o)){for(var s=0,a=Math.min(o-n,4);a>s;s++)t[n+s]=e>>>8*(r?s:3-s)&255
return n+4}}function k(t,e,n,r,i){i||(W(void 0!==e&&null!==e,"missing value"),W("boolean"==typeof r,"missing or invalid endian"),W(void 0!==n&&null!==n,"missing offset"),W(n+1<t.length,"Trying to write beyond buffer length"),U(e,32767,-32768))
var o=t.length
if(!(n>=o))return e>=0?_(t,e,n,r,i):_(t,65535+e+1,n,r,i),n+2}function O(t,e,n,r,i){i||(W(void 0!==e&&null!==e,"missing value"),W("boolean"==typeof r,"missing or invalid endian"),W(void 0!==n&&null!==n,"missing offset"),W(n+3<t.length,"Trying to write beyond buffer length"),U(e,2147483647,-2147483648))
var o=t.length
if(!(n>=o))return e>=0?x(t,e,n,r,i):x(t,4294967295+e+1,n,r,i),n+4}function S(t,e,n,r,i){i||(W(void 0!==e&&null!==e,"missing value"),W("boolean"==typeof r,"missing or invalid endian"),W(void 0!==n&&null!==n,"missing offset"),W(n+3<t.length,"Trying to write beyond buffer length"),V(e,3.4028234663852886e38,-3.4028234663852886e38))
var o=t.length
if(!(n>=o))return z.write(t,e,n,r,23,4),n+4}function T(t,e,n,r,i){i||(W(void 0!==e&&null!==e,"missing value"),W("boolean"==typeof r,"missing or invalid endian"),W(void 0!==n&&null!==n,"missing offset"),W(n+7<t.length,"Trying to write beyond buffer length"),V(e,1.7976931348623157e308,-1.7976931348623157e308))
var o=t.length
if(!(n>=o))return z.write(t,e,n,r,52,8),n+8}function A(t){for(t=N(t).replace($,"");t.length%4!==0;)t+="="
return t}function N(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function C(t){return(Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)}function R(t){return C(t)||r.isBuffer(t)||t&&"object"==typeof t&&"number"==typeof t.length}function I(t){return 16>t?"0"+t.toString(16):t.toString(16)}function L(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n)
if(127>=r)e.push(r)
else{var i=n
r>=55296&&57343>=r&&n++
for(var o=encodeURIComponent(t.slice(i,n+1)).substr(1).split("%"),s=0;s<o.length;s++)e.push(parseInt(o[s],16))}}return e}function j(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n))
return e}function M(t){for(var e,n,r,i=[],o=0;o<t.length;o++)e=t.charCodeAt(o),n=e>>8,r=e%256,i.push(r),i.push(n)
return i}function P(t){return q.toByteArray(t)}function F(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);i++)e[i+n]=t[i]
return i}function B(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}function D(t,e){W("number"==typeof t,"cannot write a non-number as a number"),W(t>=0,"specified a negative value for writing an unsigned value"),W(e>=t,"value is larger than maximum value for type"),W(Math.floor(t)===t,"value has a fractional component")}function U(t,e,n){W("number"==typeof t,"cannot write a non-number as a number"),W(e>=t,"value larger than maximum allowed value"),W(t>=n,"value smaller than minimum allowed value"),W(Math.floor(t)===t,"value has a fractional component")}function V(t,e,n){W("number"==typeof t,"cannot write a non-number as a number"),W(e>=t,"value larger than maximum allowed value"),W(t>=n,"value smaller than minimum allowed value")}function W(t,e){if(!t)throw new Error(e||"Failed assertion")}var q=t("base64-js"),z=t("ieee754")
n.Buffer=r,n.SlowBuffer=r,n.INSPECT_MAX_BYTES=50,r.poolSize=8192,r._useTypedArrays=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t)
return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(n){return!1}}(),r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},r.isBuffer=function(t){return!(null==t||!t._isBuffer)},r.byteLength=function(t,e){var n
switch(t=t.toString(),e||"utf8"){case"hex":n=t.length/2
break
case"utf8":case"utf-8":n=L(t).length
break
case"ascii":case"binary":case"raw":n=t.length
break
case"base64":n=P(t).length
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*t.length
break
default:throw new Error("Unknown encoding")}return n},r.concat=function(t,e){if(W(C(t),"Usage: Buffer.concat(list[, length])"),0===t.length)return new r(0)
if(1===t.length)return t[0]
var n
if(void 0===e)for(e=0,n=0;n<t.length;n++)e+=t[n].length
var i=new r(e),o=0
for(n=0;n<t.length;n++){var s=t[n]
s.copy(i,o),o+=s.length}return i},r.compare=function(t,e){W(r.isBuffer(t)&&r.isBuffer(e),"Arguments must be Buffers")
for(var n=t.length,i=e.length,o=0,s=Math.min(n,i);s>o&&t[o]===e[o];o++);return o!==s&&(n=t[o],i=e[o]),i>n?-1:n>i?1:0},r.prototype.write=function(t,e,n,r){if(isFinite(e))isFinite(n)||(r=n,n=void 0)
else{var h=r
r=e,e=n,n=h}e=Number(e)||0
var f=this.length-e
n?(n=Number(n),n>f&&(n=f)):n=f,r=String(r||"utf8").toLowerCase()
var l
switch(r){case"hex":l=i(this,t,e,n)
break
case"utf8":case"utf-8":l=o(this,t,e,n)
break
case"ascii":l=s(this,t,e,n)
break
case"binary":l=a(this,t,e,n)
break
case"base64":l=u(this,t,e,n)
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":l=c(this,t,e,n)
break
default:throw new Error("Unknown encoding")}return l},r.prototype.toString=function(t,e,n){var r=this
if(t=String(t||"utf8").toLowerCase(),e=Number(e)||0,n=void 0===n?r.length:Number(n),n===e)return""
var i
switch(t){case"hex":i=d(r,e,n)
break
case"utf8":case"utf-8":i=f(r,e,n)
break
case"ascii":i=l(r,e,n)
break
case"binary":i=p(r,e,n)
break
case"base64":i=h(r,e,n)
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=g(r,e,n)
break
default:throw new Error("Unknown encoding")}return i},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},r.prototype.equals=function(t){return W(r.isBuffer(t),"Argument must be a Buffer"),0===r.compare(this,t)},r.prototype.compare=function(t){return W(r.isBuffer(t),"Argument must be a Buffer"),r.compare(this,t)},r.prototype.copy=function(t,e,n,i){var o=this
if(n||(n=0),i||0===i||(i=this.length),e||(e=0),i!==n&&0!==t.length&&0!==o.length){W(i>=n,"sourceEnd < sourceStart"),W(e>=0&&e<t.length,"targetStart out of bounds"),W(n>=0&&n<o.length,"sourceStart out of bounds"),W(i>=0&&i<=o.length,"sourceEnd out of bounds"),i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n)
var s=i-n
if(100>s||!r._useTypedArrays)for(var a=0;s>a;a++)t[a+e]=this[a+n]
else t._set(this.subarray(n,n+s),e)}},r.prototype.slice=function(t,e){var n=this.length
if(t=~~t,e=void 0===e?n:~~e,0>t?(t+=n,0>t&&(t=0)):t>n&&(t=n),0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),t>e&&(e=t),r._useTypedArrays)return r._augment(this.subarray(t,e))
for(var i=e-t,o=new r(i,void 0,!0),s=0;i>s;s++)o[s]=this[s+t]
return o},r.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},r.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},r.prototype.readUInt8=function(t,e){return e||(W(void 0!==t&&null!==t,"missing offset"),W(t<this.length,"Trying to read beyond buffer length")),t>=this.length?void 0:this[t]},r.prototype.readUInt16LE=function(t,e){return v(this,t,!0,e)},r.prototype.readUInt16BE=function(t,e){return v(this,t,!1,e)},r.prototype.readUInt32LE=function(t,e){return m(this,t,!0,e)},r.prototype.readUInt32BE=function(t,e){return m(this,t,!1,e)},r.prototype.readInt8=function(t,e){if(e||(W(void 0!==t&&null!==t,"missing offset"),W(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length)){var n=128&this[t]
return n?-1*(255-this[t]+1):this[t]}},r.prototype.readInt16LE=function(t,e){return y(this,t,!0,e)},r.prototype.readInt16BE=function(t,e){return y(this,t,!1,e)},r.prototype.readInt32LE=function(t,e){return b(this,t,!0,e)},r.prototype.readInt32BE=function(t,e){return b(this,t,!1,e)},r.prototype.readFloatLE=function(t,e){return w(this,t,!0,e)},r.prototype.readFloatBE=function(t,e){return w(this,t,!1,e)},r.prototype.readDoubleLE=function(t,e){return E(this,t,!0,e)},r.prototype.readDoubleBE=function(t,e){return E(this,t,!1,e)},r.prototype.writeUInt8=function(t,e,n){return n||(W(void 0!==t&&null!==t,"missing value"),W(void 0!==e&&null!==e,"missing offset"),W(e<this.length,"trying to write beyond buffer length"),D(t,255)),e>=this.length?void 0:(this[e]=t,e+1)},r.prototype.writeUInt16LE=function(t,e,n){return _(this,t,e,!0,n)},r.prototype.writeUInt16BE=function(t,e,n){return _(this,t,e,!1,n)},r.prototype.writeUInt32LE=function(t,e,n){return x(this,t,e,!0,n)},r.prototype.writeUInt32BE=function(t,e,n){return x(this,t,e,!1,n)},r.prototype.writeInt8=function(t,e,n){return n||(W(void 0!==t&&null!==t,"missing value"),W(void 0!==e&&null!==e,"missing offset"),W(e<this.length,"Trying to write beyond buffer length"),U(t,127,-128)),e>=this.length?void 0:(t>=0?this.writeUInt8(t,e,n):this.writeUInt8(255+t+1,e,n),e+1)},r.prototype.writeInt16LE=function(t,e,n){return k(this,t,e,!0,n)},r.prototype.writeInt16BE=function(t,e,n){return k(this,t,e,!1,n)},r.prototype.writeInt32LE=function(t,e,n){return O(this,t,e,!0,n)},r.prototype.writeInt32BE=function(t,e,n){return O(this,t,e,!1,n)},r.prototype.writeFloatLE=function(t,e,n){return S(this,t,e,!0,n)},r.prototype.writeFloatBE=function(t,e,n){return S(this,t,e,!1,n)},r.prototype.writeDoubleLE=function(t,e,n){return T(this,t,e,!0,n)},r.prototype.writeDoubleBE=function(t,e,n){return T(this,t,e,!1,n)},r.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),W(n>=e,"end < start"),n!==e&&0!==this.length){W(e>=0&&e<this.length,"start out of bounds"),W(n>=0&&n<=this.length,"end out of bounds")
var r
if("number"==typeof t)for(r=e;n>r;r++)this[r]=t
else{var i=L(t.toString()),o=i.length
for(r=e;n>r;r++)this[r]=i[r%o]}return this}},r.prototype.inspect=function(){for(var t=[],e=this.length,r=0;e>r;r++)if(t[r]=I(this[r]),r===n.INSPECT_MAX_BYTES){t[r+1]="..."
break}return"<Buffer "+t.join(" ")+">"},r.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(r._useTypedArrays)return new r(this).buffer
for(var t=new Uint8Array(this.length),e=0,n=t.length;n>e;e+=1)t[e]=this[e]
return t.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")}
var H=r.prototype
r._augment=function(t){return t._isBuffer=!0,t._get=t.get,t._set=t.set,t.get=H.get,t.set=H.set,t.write=H.write,t.toString=H.toString,t.toLocaleString=H.toString,t.toJSON=H.toJSON,t.equals=H.equals,t.compare=H.compare,t.copy=H.copy,t.slice=H.slice,t.readUInt8=H.readUInt8,t.readUInt16LE=H.readUInt16LE,t.readUInt16BE=H.readUInt16BE,t.readUInt32LE=H.readUInt32LE,t.readUInt32BE=H.readUInt32BE,t.readInt8=H.readInt8,t.readInt16LE=H.readInt16LE,t.readInt16BE=H.readInt16BE,t.readInt32LE=H.readInt32LE,t.readInt32BE=H.readInt32BE,t.readFloatLE=H.readFloatLE,t.readFloatBE=H.readFloatBE,t.readDoubleLE=H.readDoubleLE,t.readDoubleBE=H.readDoubleBE,t.writeUInt8=H.writeUInt8,t.writeUInt16LE=H.writeUInt16LE,t.writeUInt16BE=H.writeUInt16BE,t.writeUInt32LE=H.writeUInt32LE,t.writeUInt32BE=H.writeUInt32BE,t.writeInt8=H.writeInt8,t.writeInt16LE=H.writeInt16LE,t.writeInt16BE=H.writeInt16BE,t.writeInt32LE=H.writeInt32LE,t.writeInt32BE=H.writeInt32BE,t.writeFloatLE=H.writeFloatLE,t.writeFloatBE=H.writeFloatBE,t.writeDoubleLE=H.writeDoubleLE,t.writeDoubleBE=H.writeDoubleBE,t.fill=H.fill,t.inspect=H.inspect,t.toArrayBuffer=H.toArrayBuffer,t}
var $=/[^+\/0-9A-z]/g},{"base64-js":95,ieee754:96}],95:[function(t,e,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
!function(t){"use strict"
function e(t){var e=t.charCodeAt(0)
return e===s?62:e===a?63:u>e?-1:u+10>e?e-u+26+26:h+26>e?e-h:c+26>e?e-c+26:void 0}function n(t){function n(t){c[f++]=t}var r,i,s,a,u,c
if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var h=t.length
u="="===t.charAt(h-2)?2:"="===t.charAt(h-1)?1:0,c=new o(3*t.length/4-u),s=u>0?t.length-4:t.length
var f=0
for(r=0,i=0;s>r;r+=4,i+=3)a=e(t.charAt(r))<<18|e(t.charAt(r+1))<<12|e(t.charAt(r+2))<<6|e(t.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a)
return 2===u?(a=e(t.charAt(r))<<2|e(t.charAt(r+1))>>4,n(255&a)):1===u&&(a=e(t.charAt(r))<<10|e(t.charAt(r+1))<<4|e(t.charAt(r+2))>>2,n(a>>8&255),n(255&a)),c}function i(t){function e(t){return r.charAt(t)}function n(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,s,a=t.length%3,u=""
for(i=0,s=t.length-a;s>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=n(o)
switch(a){case 1:o=t[t.length-1],u+=e(o>>2),u+=e(o<<4&63),u+="=="
break
case 2:o=(t[t.length-2]<<8)+t[t.length-1],u+=e(o>>10),u+=e(o>>4&63),u+=e(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),c="a".charCodeAt(0),h="A".charCodeAt(0)
t.toByteArray=n,t.fromByteArray=i}("undefined"==typeof n?this.base64js={}:n)},{}],96:[function(t,e,n){n.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,h=-7,f=n?i-1:0,l=n?-1:1,p=t[e+f]
for(f+=l,o=p&(1<<-h)-1,p>>=-h,h+=a;h>0;o=256*o+t[e+f],f+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=r;h>0;s=256*s+t[e+f],f+=l,h-=8);if(0===o)o=1-c
else{if(o===u)return s?0/0:1/0*(p?-1:1)
s+=Math.pow(2,r),o-=c}return(p?-1:1)*s*Math.pow(2,o-r)},n.write=function(t,e,n,r,i,o){var s,a,u,c=8*o-i-1,h=(1<<c)-1,f=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,g=0>e||0===e&&0>1/e?1:0
for(e=Math.abs(e),isNaN(e)||1/0===e?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+f>=1?l/u:l*Math.pow(2,1-f),e*u>=2&&(s++,u/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*u-1)*Math.pow(2,i),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[n+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+p]=255&s,p+=d,s/=256,c-=8);t[n+p-d]|=128*g}},{}],97:[function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!i(t)||0>t||isNaN(t))throw TypeError("n must be a positive number")
return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,i,a,u,c
if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length))throw e=arguments[1],e instanceof Error?e:TypeError('Uncaught, unspecified "error" event.')
if(n=this._events[t],s(n))return!1
if(r(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:for(i=arguments.length,a=new Array(i-1),u=1;i>u;u++)a[u-1]=arguments[u]
n.apply(this,a)}else if(o(n)){for(i=arguments.length,a=new Array(i-1),u=1;i>u;u++)a[u-1]=arguments[u]
for(c=n.slice(),i=c.length,u=0;i>u;u++)c[u].apply(this,a)}return!0},n.prototype.addListener=function(t,e){var i
if(!r(e))throw TypeError("listener must be a function")
if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned){var i
i=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function")
var i=!1
return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,i,s,a
if(!r(e))throw TypeError("listener must be a function")
if(!this._events||!this._events[t])return this
if(n=this._events[t],s=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e)
else if(o(n)){for(a=s;a-->0;)if(n[a]===e||n[a].listener&&n[a].listener===e){i=a
break}if(0>i)return this
1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this
if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e)
return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n)
else for(;n.length;)this.removeListener(t,n[n.length-1])
return delete this._events[t],this},n.prototype.listeners=function(t){var e
return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.listenerCount=function(t,e){var n
return n=t._events&&t._events[e]?r(t._events[e])?1:t._events[e].length:0}},{}],98:[function(t,e){var n=e.exports,r=(t("events").EventEmitter,t("./lib/request")),i=t("url")
n.request=function(t,e){"string"==typeof t&&(t=i.parse(t)),t||(t={}),t.host||t.port||(t.port=parseInt(window.location.port,10)),!t.host&&t.hostname&&(t.host=t.hostname),t.scheme||(t.scheme=window.location.protocol.split(":")[0]),t.host||(t.host=window.location.hostname||window.location.host),/:/.test(t.host)&&(t.port||(t.port=t.host.split(":")[1]),t.host=t.host.split(":")[0]),t.port||(t.port="https"==t.scheme?443:80)
var n=new r(new o,t)
return e&&n.on("response",e),n},n.get=function(t,e){t.method="GET"
var r=n.request(t,e)
return r.end(),r},n.Agent=function(){},n.Agent.defaultMaxSockets=4
var o=function(){if("undefined"==typeof window)throw new Error("no window object present")
if(window.XMLHttpRequest)return window.XMLHttpRequest
if(window.ActiveXObject){for(var t=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"],e=0;e<t.length;e++)try{var n=new window.ActiveXObject(t[e])
return function(){if(n){var r=n
return n=null,r}return new window.ActiveXObject(t[e])}}catch(r){}throw new Error("ajax not supported in this browser")}throw new Error("ajax not supported in this browser")}()
n.STATUS_CODES={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},{"./lib/request":99,events:97,url:122}],99:[function(t,e){var n=t("stream"),r=t("./response"),i=t("Base64"),o=t("inherits"),s=e.exports=function(t,e){var n=this
n.writable=!0,n.xhr=t,n.body=[],n.uri=(e.scheme||"http")+"://"+e.host+(e.port?":"+e.port:"")+(e.path||"/"),"undefined"==typeof e.withCredentials&&(e.withCredentials=!0)
try{t.withCredentials=e.withCredentials}catch(o){}if(e.responseType)try{t.responseType=e.responseType}catch(o){}if(t.open(e.method||"GET",n.uri,!0),n._headers={},e.headers)for(var s=a(e.headers),u=0;u<s.length;u++){var c=s[u]
if(n.isSafeRequestHeader(c)){var h=e.headers[c]
n.setHeader(c,h)}}e.auth&&this.setHeader("Authorization","Basic "+i.btoa(e.auth))
var f=new r
f.on("close",function(){n.emit("close")}),f.on("ready",function(){n.emit("response",f)}),t.onreadystatechange=function(){t.__aborted||f.handle(t)}}
o(s,n),s.prototype.setHeader=function(t,e){this._headers[t.toLowerCase()]=e},s.prototype.getHeader=function(t){return this._headers[t.toLowerCase()]},s.prototype.removeHeader=function(t){delete this._headers[t.toLowerCase()]},s.prototype.write=function(t){this.body.push(t)},s.prototype.destroy=function(){this.xhr.__aborted=!0,this.xhr.abort(),this.emit("close")},s.prototype.end=function(t){void 0!==t&&this.body.push(t)
for(var e=a(this._headers),n=0;n<e.length;n++){var r=e[n],i=this._headers[r]
if(u(i))for(var o=0;o<i.length;o++)this.xhr.setRequestHeader(r,i[o])
else this.xhr.setRequestHeader(r,i)}if(0===this.body.length)this.xhr.send("")
else if("string"==typeof this.body[0])this.xhr.send(this.body.join(""))
else if(u(this.body[0])){for(var s=[],n=0;n<this.body.length;n++)s.push.apply(s,this.body[n])
this.xhr.send(s)}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){for(var c=0,n=0;n<this.body.length;n++)c+=this.body[n].length
for(var s=new this.body[0].constructor(c),h=0,n=0;n<this.body.length;n++)for(var f=this.body[n],o=0;o<f.length;o++)s[h++]=f[o]
this.xhr.send(s)}else{for(var s="",n=0;n<this.body.length;n++)s+=this.body[n].toString()
this.xhr.send(s)}},s.unsafeHeaders=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"],s.prototype.isSafeRequestHeader=function(t){return t?-1===c(s.unsafeHeaders,t.toLowerCase()):!1}
var a=Object.keys||function(t){var e=[]
for(var n in t)e.push(n)
return e},u=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},c=function(t,e){if(t.indexOf)return t.indexOf(e)
for(var n=0;n<t.length;n++)if(t[n]===e)return n
return-1}},{"./response":100,Base64:101,inherits:102,stream:121}],100:[function(t,e){function n(t){for(var e=t.getAllResponseHeaders().split(/\r?\n/),n={},r=0;r<e.length;r++){var i=e[r]
if(""!==i){var o=i.match(/^([^:]+):\s*(.*)/)
if(o){var s=o[1].toLowerCase(),u=o[2]
void 0!==n[s]?a(n[s])?n[s].push(u):n[s]=[n[s],u]:n[s]=u}else n[i]=!0}}return n}var r=t("stream"),i=t("util"),o=e.exports=function(){this.offset=0,this.readable=!0}
i.inherits(o,r)
var s={streaming:!0,status2:!0}
o.prototype.getResponse=function(t){var e=String(t.responseType).toLowerCase()
return"blob"===e?t.responseBlob||t.response:"arraybuffer"===e?t.response:t.responseText},o.prototype.getHeader=function(t){return this.headers[t.toLowerCase()]},o.prototype.handle=function(t){if(2===t.readyState&&s.status2){try{this.statusCode=t.status,this.headers=n(t)}catch(e){s.status2=!1}s.status2&&this.emit("ready")}else if(s.streaming&&3===t.readyState){try{this.statusCode||(this.statusCode=t.status,this.headers=n(t),this.emit("ready"))}catch(e){}try{this._emitData(t)}catch(e){s.streaming=!1}}else 4===t.readyState&&(this.statusCode||(this.statusCode=t.status,this.emit("ready")),this._emitData(t),t.error?this.emit("error",this.getResponse(t)):this.emit("end"),this.emit("close"))},o.prototype._emitData=function(t){var e=this.getResponse(t)
return e.toString().match(/ArrayBuffer/)?(this.emit("data",new Uint8Array(e,this.offset)),void(this.offset=e.byteLength)):void(e.length>this.offset&&(this.emit("data",e.slice(this.offset)),this.offset=e.length))}
var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{stream:121,util:124}],101:[function(t,e,n){!function(){function t(t){this.message=t}var e="undefined"!=typeof n?n:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
t.prototype=new Error,t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var n,i,o=0,s=r,a="";e.charAt(0|o)||(s="=",o%1);a+=s.charAt(63&n>>8-o%1*8)){if(i=e.charCodeAt(o+=.75),i>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
n=n<<8|i}return a}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.")
for(var n,i,o=0,s=0,a="";i=e.charAt(s++);~i&&(n=o%4?64*n+i:i,o++%4)?a+=String.fromCharCode(255&n>>(-2*o&6)):0)i=r.indexOf(i)
return a})}()},{}],102:[function(t,e){e.exports=t(38)},{}],103:[function(t,e){function n(){}var r=e.exports={}
r.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener
if(t)return function(t){return window.setImmediate(t)}
if(e){var n=[]
return window.addEventListener("message",function(t){var e=t.source
if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift()
r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=n,r.addListener=n,r.once=n,r.off=n,r.removeListener=n,r.removeAllListeners=n,r.emit=n,r.binding=function(){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(){throw new Error("process.chdir is not supported")}},{}],104:[function(t,e,n){(function(t){!function(r){function i(t){throw RangeError(L[t])}function o(t,e){for(var n=t.length;n--;)t[n]=e(t[n])
return t}function s(t,e){return o(t.split(I),e).join(".")}function a(t){for(var e,n,r=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e)
return r}function u(t){return o(t,function(t){var e=""
return t>65535&&(t-=65536,e+=P(t>>>10&1023|55296),t=56320|1023&t),e+=P(t)}).join("")}function c(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:_}function h(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function f(t,e,n){var r=0
for(t=n?M(t/S):t>>1,t+=M(t/e);t>j*k>>1;r+=_)t=M(t/j)
return M(r+(j+1)*t/(t+O))}function l(t){var e,n,r,o,s,a,h,l,p,d,g=[],v=t.length,m=0,y=A,b=T
for(n=t.lastIndexOf(N),0>n&&(n=0),r=0;n>r;++r)t.charCodeAt(r)>=128&&i("not-basic"),g.push(t.charCodeAt(r))
for(o=n>0?n+1:0;v>o;){for(s=m,a=1,h=_;o>=v&&i("invalid-input"),l=c(t.charCodeAt(o++)),(l>=_||l>M((E-m)/a))&&i("overflow"),m+=l*a,p=b>=h?x:h>=b+k?k:h-b,!(p>l);h+=_)d=_-p,a>M(E/d)&&i("overflow"),a*=d
e=g.length+1,b=f(m-s,e,0==s),M(m/e)>E-y&&i("overflow"),y+=M(m/e),m%=e,g.splice(m++,0,y)}return u(g)}function p(t){var e,n,r,o,s,u,c,l,p,d,g,v,m,y,b,w=[]
for(t=a(t),v=t.length,e=A,n=0,s=T,u=0;v>u;++u)g=t[u],128>g&&w.push(P(g))
for(r=o=w.length,o&&w.push(N);v>r;){for(c=E,u=0;v>u;++u)g=t[u],g>=e&&c>g&&(c=g)
for(m=r+1,c-e>M((E-n)/m)&&i("overflow"),n+=(c-e)*m,e=c,u=0;v>u;++u)if(g=t[u],e>g&&++n>E&&i("overflow"),g==e){for(l=n,p=_;d=s>=p?x:p>=s+k?k:p-s,!(d>l);p+=_)b=l-d,y=_-d,w.push(P(h(d+b%y,0))),l=M(b/y)
w.push(P(h(l,0))),s=f(n,m,r==o),n=0,++r}++n,++e}return w.join("")}function d(t){return s(t,function(t){return C.test(t)?l(t.slice(4).toLowerCase()):t})}function g(t){return s(t,function(t){return R.test(t)?"xn--"+p(t):t})}var v="object"==typeof n&&n,m="object"==typeof e&&e&&e.exports==v&&e,y="object"==typeof t&&t;(y.global===y||y.window===y)&&(r=y)
var b,w,E=2147483647,_=36,x=1,k=26,O=38,S=700,T=72,A=128,N="-",C=/^xn--/,R=/[^ -~]/,I=/\x2E|\u3002|\uFF0E|\uFF61/g,L={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=_-x,M=Math.floor,P=String.fromCharCode
if(b={version:"1.2.4",ucs2:{decode:a,encode:u},decode:l,encode:p,toASCII:g,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return b})
else if(v&&!v.nodeType)if(m)m.exports=b
else for(w in b)b.hasOwnProperty(w)&&(v[w]=b[w])
else r.punycode=b}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],105:[function(t,e){"use strict"
function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,i,o){e=e||"&",i=i||"="
var s={}
if("string"!=typeof t||0===t.length)return s
var a=/\+/g
t=t.split(e)
var u=1e3
o&&"number"==typeof o.maxKeys&&(u=o.maxKeys)
var c=t.length
u>0&&c>u&&(c=u)
for(var h=0;c>h;++h){var f,l,p,d,g=t[h].replace(a,"%20"),v=g.indexOf(i)
v>=0?(f=g.substr(0,v),l=g.substr(v+1)):(f=g,l=""),p=decodeURIComponent(f),d=decodeURIComponent(l),n(s,p)?r(s[p])?s[p].push(d):s[p]=[s[p],d]:s[p]=d}return s}
var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],106:[function(t,e){"use strict"
function n(t,e){if(t.map)return t.map(e)
for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r))
return n}var r=function(t){switch(typeof t){case"string":return t
case"boolean":return t?"true":"false"
case"number":return isFinite(t)?t:""
default:return""}}
e.exports=function(t,e,s,a){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?n(o(t),function(o){var a=encodeURIComponent(r(o))+s
return i(t[o])?n(t[o],function(t){return a+encodeURIComponent(r(t))}).join(e):a+encodeURIComponent(r(t[o]))}).join(e):a?encodeURIComponent(r(a))+s+encodeURIComponent(r(t)):""}
var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[]
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n)
return e}},{}],107:[function(t,e,n){"use strict"
n.decode=n.parse=t("./decode"),n.encode=n.stringify=t("./encode")},{"./decode":105,"./encode":106}],108:[function(t,e){e.exports=t("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":109}],109:[function(t,e){e.exports=t(32)},{"./_stream_readable":111,"./_stream_writable":113,Zh58VX:103,"core-util-is":114,inherits:102}],110:[function(t,e){e.exports=t(33)},{"./_stream_transform":112,"core-util-is":114,inherits:102}],111:[function(t,e){e.exports=t(34)},{Zh58VX:103,buffer:94,"core-util-is":114,events:97,inherits:102,isarray:115,stream:121,"string_decoder/":116}],112:[function(t,e){e.exports=t(35)},{"./_stream_duplex":109,"core-util-is":114,inherits:102}],113:[function(t,e){e.exports=t(36)},{"./_stream_duplex":109,Zh58VX:103,buffer:94,"core-util-is":114,inherits:102,stream:121}],114:[function(t,e){e.exports=t(37)},{buffer:94}],115:[function(t,e){e.exports=t(39)},{}],116:[function(t,e){e.exports=t(40)},{buffer:94}],117:[function(t,e){e.exports=t("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":110}],118:[function(t,e){e.exports=t(41)},{"./lib/_stream_duplex.js":109,"./lib/_stream_passthrough.js":110,"./lib/_stream_readable.js":111,"./lib/_stream_transform.js":112,"./lib/_stream_writable.js":113}],119:[function(t,e){e.exports=t("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":112}],120:[function(t,e){e.exports=t("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":113}],121:[function(t,e){function n(){r.call(this)}e.exports=n
var r=t("events").EventEmitter,i=t("inherits")
i(n,r),n.Readable=t("readable-stream/readable.js"),n.Writable=t("readable-stream/writable.js"),n.Duplex=t("readable-stream/duplex.js"),n.Transform=t("readable-stream/transform.js"),n.PassThrough=t("readable-stream/passthrough.js"),n.Stream=n,n.prototype.pipe=function(t,e){function n(e){t.writable&&!1===t.write(e)&&c.pause&&c.pause()}function i(){c.readable&&c.resume&&c.resume()}function o(){h||(h=!0,t.end())}function s(){h||(h=!0,"function"==typeof t.destroy&&t.destroy())}function a(t){if(u(),0===r.listenerCount(this,"error"))throw t}function u(){c.removeListener("data",n),t.removeListener("drain",i),c.removeListener("end",o),c.removeListener("close",s),c.removeListener("error",a),t.removeListener("error",a),c.removeListener("end",u),c.removeListener("close",u),t.removeListener("close",u)}var c=this
c.on("data",n),t.on("drain",i),t._isStdio||e&&e.end===!1||(c.on("end",o),c.on("close",s))
var h=!1
return c.on("error",a),t.on("error",a),c.on("end",u),c.on("close",u),t.on("close",u),t.emit("pipe",c),t}},{events:97,inherits:102,"readable-stream/duplex.js":108,"readable-stream/passthrough.js":117,"readable-stream/readable.js":118,"readable-stream/transform.js":119,"readable-stream/writable.js":120}],122:[function(t,e,n){function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,n){if(t&&c(t)&&t instanceof r)return t
var i=new r
return i.parse(t,e,n),i}function o(t){return u(t)&&(t=i(t)),t instanceof r?t.format():r.prototype.format.call(t)}function s(t,e){return i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}function u(t){return"string"==typeof t}function c(t){return"object"==typeof t&&null!==t}function h(t){return null===t}function f(t){return null==t}var l=t("punycode")
n.parse=i,n.resolve=s,n.resolveObject=a,n.format=o,n.Url=r
var p=/^([a-z0-9.+-]+:)/i,d=/:[0-9]*$/,g=["<",">",'"',"`"," ","\r","\n","	"],v=["{","}","|","\\","^","`"].concat(g),m=["'"].concat(v),y=["%","/","?",";","#"].concat(m),b=["/","?","#"],w=255,E=/^[a-z0-9A-Z_-]{0,63}$/,_=/^([a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},k={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},S=t("querystring")
r.prototype.parse=function(t,e,n){if(!u(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t)
var r=t
r=r.trim()
var i=p.exec(r)
if(i){i=i[0]
var o=i.toLowerCase()
this.protocol=o,r=r.substr(i.length)}if(n||i||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var s="//"===r.substr(0,2)
!s||i&&k[i]||(r=r.substr(2),this.slashes=!0)}if(!k[i]&&(s||i&&!O[i])){for(var a=-1,c=0;c<b.length;c++){var h=r.indexOf(b[c]);-1!==h&&(-1===a||a>h)&&(a=h)}var f,d
d=-1===a?r.lastIndexOf("@"):r.lastIndexOf("@",a),-1!==d&&(f=r.slice(0,d),r=r.slice(d+1),this.auth=decodeURIComponent(f)),a=-1
for(var c=0;c<y.length;c++){var h=r.indexOf(y[c]);-1!==h&&(-1===a||a>h)&&(a=h)}-1===a&&(a=r.length),this.host=r.slice(0,a),r=r.slice(a),this.parseHost(),this.hostname=this.hostname||""
var g="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]
if(!g)for(var v=this.hostname.split(/\./),c=0,T=v.length;T>c;c++){var A=v[c]
if(A&&!A.match(E)){for(var N="",C=0,R=A.length;R>C;C++)N+=A.charCodeAt(C)>127?"x":A[C]
if(!N.match(E)){var I=v.slice(0,c),L=v.slice(c+1),j=A.match(_)
j&&(I.push(j[1]),L.unshift(j[2])),L.length&&(r="/"+L.join(".")+r),this.hostname=I.join(".")
break}}}if(this.hostname=this.hostname.length>w?"":this.hostname.toLowerCase(),!g){for(var M=this.hostname.split("."),P=[],c=0;c<M.length;++c){var F=M[c]
P.push(F.match(/[^A-Za-z0-9_-]/)?"xn--"+l.encode(F):F)}this.hostname=P.join(".")}var B=this.port?":"+this.port:"",D=this.hostname||""
this.host=D+B,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==r[0]&&(r="/"+r))}if(!x[o])for(var c=0,T=m.length;T>c;c++){var U=m[c],V=encodeURIComponent(U)
V===U&&(V=escape(U)),r=r.split(U).join(V)}var W=r.indexOf("#");-1!==W&&(this.hash=r.substr(W),r=r.slice(0,W))
var q=r.indexOf("?")
if(-1!==q?(this.search=r.substr(q),this.query=r.substr(q+1),e&&(this.query=S.parse(this.query)),r=r.slice(0,q)):e&&(this.search="",this.query={}),r&&(this.pathname=r),O[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var B=this.pathname||"",F=this.search||""
this.path=B+F}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||""
t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@")
var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o=""
this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&c(this.query)&&Object.keys(this.query).length&&(o=S.stringify(this.query))
var s=this.search||o&&"?"+o||""
return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||O[e])&&i!==!1?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+i+n+s+r},r.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(u(t)){var e=new r
e.parse(t,!1,!0),t=e}var n=new r
if(Object.keys(this).forEach(function(t){n[t]=this[t]},this),n.hash=t.hash,""===t.href)return n.href=n.format(),n
if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(n[e]=t[e])}),O[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n
if(t.protocol&&t.protocol!==n.protocol){if(!O[t.protocol])return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.href=n.format(),n
if(n.protocol=t.protocol,t.host||k[t.protocol])n.pathname=t.pathname
else{for(var i=(t.pathname||"").split("/");i.length&&!(t.host=i.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),n.pathname=i.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var o=n.pathname||"",s=n.search||""
n.path=o+s}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var a=n.pathname&&"/"===n.pathname.charAt(0),c=t.host||t.pathname&&"/"===t.pathname.charAt(0),l=c||a||n.host&&t.pathname,p=l,d=n.pathname&&n.pathname.split("/")||[],i=t.pathname&&t.pathname.split("/")||[],g=n.protocol&&!O[n.protocol]
if(g&&(n.hostname="",n.port=null,n.host&&(""===d[0]?d[0]=n.host:d.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===i[0]?i[0]=t.host:i.unshift(t.host)),t.host=null),l=l&&(""===i[0]||""===d[0])),c)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,d=i
else if(i.length)d||(d=[]),d.pop(),d=d.concat(i),n.search=t.search,n.query=t.query
else if(!f(t.search)){if(g){n.hostname=n.host=d.shift()
var v=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1
v&&(n.auth=v.shift(),n.host=n.hostname=v.shift())}return n.search=t.search,n.query=t.query,h(n.pathname)&&h(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!d.length)return n.pathname=null,n.path=n.search?"/"+n.search:null,n.href=n.format(),n
for(var m=d.slice(-1)[0],y=(n.host||t.host)&&("."===m||".."===m)||""===m,b=0,w=d.length;w>=0;w--)m=d[w],"."==m?d.splice(w,1):".."===m?(d.splice(w,1),b++):b&&(d.splice(w,1),b--)
if(!l&&!p)for(;b--;b)d.unshift("..")
!l||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),y&&"/"!==d.join("/").substr(-1)&&d.push("")
var E=""===d[0]||d[0]&&"/"===d[0].charAt(0)
if(g){n.hostname=n.host=E?"":d.length?d.shift():""
var v=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1
v&&(n.auth=v.shift(),n.host=n.hostname=v.shift())}return l=l||n.host&&d.length,l&&!E&&d.unshift(""),d.length?n.pathname=d.join("/"):(n.pathname=null,n.path=null),h(n.pathname)&&h(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var t=this.host,e=d.exec(t)
e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{punycode:104,querystring:107}],123:[function(t,e){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],124:[function(t,e,n){(function(e,r){function i(t,e){var r={seen:[],stylize:s}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(e)?r.showHidden=e:e&&n._extend(r,e),E(r.showHidden)&&(r.showHidden=!1),E(r.depth)&&(r.depth=2),E(r.colors)&&(r.colors=!1),E(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),u(r,t,r.depth)}function o(t,e){var n=i.styles[e]
return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function s(t){return t}function a(t){var e={}
return t.forEach(function(t){e[t]=!0}),e}function u(t,e,r){if(t.customInspect&&e&&S(e.inspect)&&e.inspect!==n.inspect&&(!e.constructor||e.constructor.prototype!==e)){var i=e.inspect(r,t)
return b(i)||(i=u(t,i,r)),i}var o=c(t,e)
if(o)return o
var s=Object.keys(e),g=a(s)
if(t.showHidden&&(s=Object.getOwnPropertyNames(e)),O(e)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return h(e)
if(0===s.length){if(S(e)){var v=e.name?": "+e.name:""
return t.stylize("[Function"+v+"]","special")}if(_(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp")
if(k(e))return t.stylize(Date.prototype.toString.call(e),"date")
if(O(e))return h(e)}var m="",y=!1,w=["{","}"]
if(d(e)&&(y=!0,w=["[","]"]),S(e)){var E=e.name?": "+e.name:""
m=" [Function"+E+"]"}if(_(e)&&(m=" "+RegExp.prototype.toString.call(e)),k(e)&&(m=" "+Date.prototype.toUTCString.call(e)),O(e)&&(m=" "+h(e)),0===s.length&&(!y||0==e.length))return w[0]+m+w[1]
if(0>r)return _(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special")
t.seen.push(e)
var x
return x=y?f(t,e,r,g,s):s.map(function(n){return l(t,e,r,g,n,y)}),t.seen.pop(),p(x,m,w)}function c(t,e){if(E(e))return t.stylize("undefined","undefined")
if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(n,"string")}return y(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,r,i){for(var o=[],s=0,a=e.length;a>s;++s)o.push(R(e,String(s))?l(t,e,n,r,String(s),!0):"")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(l(t,e,n,r,i,!0))}),o}function l(t,e,n,r,i,o){var s,a,c
if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),R(r,i)||(s="["+i+"]"),a||(t.seen.indexOf(c.value)<0?(a=v(n)?u(t,c.value,null):u(t,c.value,n-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n"))):a=t.stylize("[Circular]","special")),E(s)){if(o&&i.match(/^\d+$/))return a
s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function p(t,e,n){var r=0,i=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)
return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function d(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function v(t){return null===t}function m(t){return null==t}function y(t){return"number"==typeof t}function b(t){return"string"==typeof t}function w(t){return"symbol"==typeof t}function E(t){return void 0===t}function _(t){return x(t)&&"[object RegExp]"===A(t)}function x(t){return"object"==typeof t&&null!==t}function k(t){return x(t)&&"[object Date]"===A(t)}function O(t){return x(t)&&("[object Error]"===A(t)||t instanceof Error)}function S(t){return"function"==typeof t}function T(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function A(t){return Object.prototype.toString.call(t)}function N(t){return 10>t?"0"+t.toString(10):t.toString(10)}function C(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":")
return[t.getDate(),M[t.getMonth()],e].join(" ")}function R(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var I=/%[sdj%]/g
n.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]))
return e.join(" ")}for(var n=1,r=arguments,o=r.length,s=String(t).replace(I,function(t){if("%%"===t)return"%"
if(n>=o)return t
switch(t){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),a=r[n];o>n;a=r[++n])s+=v(a)||!x(a)?" "+a:" "+i(a)
return s},n.deprecate=function(t,i){function o(){if(!s){if(e.throwDeprecation)throw new Error(i)
e.traceDeprecation?console.trace(i):console.error(i),s=!0}return t.apply(this,arguments)}if(E(r.process))return function(){return n.deprecate(t,i).apply(this,arguments)}
if(e.noDeprecation===!0)return t
var s=!1
return o}
var L,j={}
n.debuglog=function(t){if(E(L)&&(L=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!j[t])if(new RegExp("\\b"+t+"\\b","i").test(L)){var r=e.pid
j[t]=function(){var e=n.format.apply(n,arguments)
console.error("%s %d: %s",t,r,e)}}else j[t]=function(){}
return j[t]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=g,n.isNull=v,n.isNullOrUndefined=m,n.isNumber=y,n.isString=b,n.isSymbol=w,n.isUndefined=E,n.isRegExp=_,n.isObject=x,n.isDate=k,n.isError=O,n.isFunction=S,n.isPrimitive=T,n.isBuffer=t("./support/isBuffer")
var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
n.log=function(){console.log("%s - %s",C(),n.format.apply(n,arguments))},n.inherits=t("inherits"),n._extend=function(t,e){if(!e||!x(e))return t
for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]]
return t}}).call(this,t("Zh58VX"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":123,Zh58VX:103,inherits:102}]},{},[2])
