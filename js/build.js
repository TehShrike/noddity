!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require
if(!s&&u)return u(a,!0)
if(o)return o(a,!0)
throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}}
e[a][0].call(c.exports,function(t){var n=e[a][1][t]
return i(n?n:t)},c,c.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a])
return i}({1:[function(){},{}],2:[function(t,e,n){function r(t,e,n){if(!(this instanceof r))return new r(t,e,n)
var i=typeof t
if("base64"===e&&"string"===i)for(t=A(t);t.length%4!==0;)t+="="
var o
if("number"===i)o=L(t)
else if("string"===i)o=r.byteLength(t,e)
else{if("object"!==i)throw new Error("First argument needs to be a number, array or string.")
o=L(t.length)}var a
r._useTypedArrays?a=r._augment(new Uint8Array(o)):(a=this,a.length=o,a._isBuffer=!0)
var s
if(r._useTypedArrays&&"number"==typeof t.byteLength)a._set(t)
else if(R(t))for(s=0;o>s;s++)a[s]=r.isBuffer(t)?t.readUInt8(s):t[s]
else if("string"===i)a.write(t,0,e)
else if("number"===i&&!r._useTypedArrays&&!n)for(s=0;o>s;s++)a[s]=0
return a}function i(t,e,n,r){n=Number(n)||0
var i=t.length-n
r?(r=Number(r),r>i&&(r=i)):r=i
var o=e.length
V(o%2===0,"Invalid hex string"),r>o/2&&(r=o/2)
for(var a=0;r>a;a++){var s=parseInt(e.substr(2*a,2),16)
V(!isNaN(s),"Invalid hex string"),t[n+a]=s}return a}function o(t,e,n,r){var i=B(I(e),t,n,r)
return i}function a(t,e,n,r){var i=B(P(e),t,n,r)
return i}function s(t,e,n,r){return a(t,e,n,r)}function u(t,e,n,r){var i=B(F(e),t,n,r)
return i}function c(t,e,n,r){var i=B(M(e),t,n,r)
return i}function h(t,e,n){return K.fromByteArray(0===e&&n===t.length?t:t.slice(e,n))}function l(t,e,n){var r="",i=""
n=Math.min(t.length,n)
for(var o=e;n>o;o++)t[o]<=127?(r+=D(i)+String.fromCharCode(t[o]),i=""):i+="%"+t[o].toString(16)
return r+D(i)}function f(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;n>i;i++)r+=String.fromCharCode(t[i])
return r}function d(t,e,n){return f(t,e,n)}function p(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r)
for(var i="",o=e;n>o;o++)i+=j(t[o])
return i}function g(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function v(t,e,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==e&&null!==e,"missing offset"),V(e+1<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o
return n?(o=t[e],i>e+1&&(o|=t[e+1]<<8)):(o=t[e]<<8,i>e+1&&(o|=t[e+1])),o}}function m(t,e,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==e&&null!==e,"missing offset"),V(e+3<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o
return n?(i>e+2&&(o=t[e+2]<<16),i>e+1&&(o|=t[e+1]<<8),o|=t[e],i>e+3&&(o+=t[e+3]<<24>>>0)):(i>e+1&&(o=t[e+1]<<16),i>e+2&&(o|=t[e+2]<<8),i>e+3&&(o|=t[e+3]),o+=t[e]<<24>>>0),o}}function y(t,e,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==e&&null!==e,"missing offset"),V(e+1<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o=v(t,e,n,!0),a=32768&o
return a?-1*(65535-o+1):o}}function b(t,e,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==e&&null!==e,"missing offset"),V(e+3<t.length,"Trying to read beyond buffer length"))
var i=t.length
if(!(e>=i)){var o=m(t,e,n,!0),a=2147483648&o
return a?-1*(4294967295-o+1):o}}function w(t,e,n,r){return r||(V("boolean"==typeof n,"missing or invalid endian"),V(e+3<t.length,"Trying to read beyond buffer length")),z.read(t,e,n,23,4)}function E(t,e,n,r){return r||(V("boolean"==typeof n,"missing or invalid endian"),V(e+7<t.length,"Trying to read beyond buffer length")),z.read(t,e,n,52,8)}function _(t,e,n,r,i){i||(V(void 0!==e&&null!==e,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+1<t.length,"trying to write beyond buffer length"),U(e,65535))
var o=t.length
if(!(n>=o)){for(var a=0,s=Math.min(o-n,2);s>a;a++)t[n+a]=(e&255<<8*(r?a:1-a))>>>8*(r?a:1-a)
return n+2}}function x(t,e,n,r,i){i||(V(void 0!==e&&null!==e,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<t.length,"trying to write beyond buffer length"),U(e,4294967295))
var o=t.length
if(!(n>=o)){for(var a=0,s=Math.min(o-n,4);s>a;a++)t[n+a]=e>>>8*(r?a:3-a)&255
return n+4}}function k(t,e,n,r,i){i||(V(void 0!==e&&null!==e,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+1<t.length,"Trying to write beyond buffer length"),W(e,32767,-32768))
var o=t.length
if(!(n>=o))return e>=0?_(t,e,n,r,i):_(t,65535+e+1,n,r,i),n+2}function S(t,e,n,r,i){i||(V(void 0!==e&&null!==e,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<t.length,"Trying to write beyond buffer length"),W(e,2147483647,-2147483648))
var o=t.length
if(!(n>=o))return e>=0?x(t,e,n,r,i):x(t,4294967295+e+1,n,r,i),n+4}function O(t,e,n,r,i){i||(V(void 0!==e&&null!==e,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<t.length,"Trying to write beyond buffer length"),q(e,3.4028234663852886e38,-3.4028234663852886e38))
var o=t.length
if(!(n>=o))return z.write(t,e,n,r,23,4),n+4}function T(t,e,n,r,i){i||(V(void 0!==e&&null!==e,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+7<t.length,"Trying to write beyond buffer length"),q(e,1.7976931348623157e308,-1.7976931348623157e308))
var o=t.length
if(!(n>=o))return z.write(t,e,n,r,52,8),n+8}function A(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function N(t,e,n){return"number"!=typeof t?n:(t=~~t,t>=e?e:t>=0?t:(t+=e,t>=0?t:0))}function L(t){return t=~~Math.ceil(+t),0>t?0:t}function C(t){return(Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)}function R(t){return C(t)||r.isBuffer(t)||t&&"object"==typeof t&&"number"==typeof t.length}function j(t){return 16>t?"0"+t.toString(16):t.toString(16)}function I(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n)
if(127>=r)e.push(r)
else{var i=n
r>=55296&&57343>=r&&n++
for(var o=encodeURIComponent(t.slice(i,n+1)).substr(1).split("%"),a=0;a<o.length;a++)e.push(parseInt(o[a],16))}}return e}function P(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n))
return e}function M(t){for(var e,n,r,i=[],o=0;o<t.length;o++)e=t.charCodeAt(o),n=e>>8,r=e%256,i.push(r),i.push(n)
return i}function F(t){return K.toByteArray(t)}function B(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);i++)e[i+n]=t[i]
return i}function D(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}function U(t,e){V("number"==typeof t,"cannot write a non-number as a number"),V(t>=0,"specified a negative value for writing an unsigned value"),V(e>=t,"value is larger than maximum value for type"),V(Math.floor(t)===t,"value has a fractional component")}function W(t,e,n){V("number"==typeof t,"cannot write a non-number as a number"),V(e>=t,"value larger than maximum allowed value"),V(t>=n,"value smaller than minimum allowed value"),V(Math.floor(t)===t,"value has a fractional component")}function q(t,e,n){V("number"==typeof t,"cannot write a non-number as a number"),V(e>=t,"value larger than maximum allowed value"),V(t>=n,"value smaller than minimum allowed value")}function V(t,e){if(!t)throw new Error(e||"Failed assertion")}var K=t("base64-js"),z=t("ieee754")
n.Buffer=r,n.SlowBuffer=r,n.INSPECT_MAX_BYTES=50,r.poolSize=8192,r._useTypedArrays=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t)
return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(n){return!1}}(),r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},r.isBuffer=function(t){return!(null===t||void 0===t||!t._isBuffer)},r.byteLength=function(t,e){var n
switch(t=t.toString(),e||"utf8"){case"hex":n=t.length/2
break
case"utf8":case"utf-8":n=I(t).length
break
case"ascii":case"binary":case"raw":n=t.length
break
case"base64":n=F(t).length
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*t.length
break
default:throw new Error("Unknown encoding")}return n},r.concat=function(t,e){if(V(C(t),"Usage: Buffer.concat(list[, length])"),0===t.length)return new r(0)
if(1===t.length)return t[0]
var n
if(void 0===e)for(e=0,n=0;n<t.length;n++)e+=t[n].length
var i=new r(e),o=0
for(n=0;n<t.length;n++){var a=t[n]
a.copy(i,o),o+=a.length}return i},r.compare=function(t,e){V(r.isBuffer(t)&&r.isBuffer(e),"Arguments must be Buffers")
for(var n=t.length,i=e.length,o=0,a=Math.min(n,i);a>o&&t[o]===e[o];o++);return o!==a&&(n=t[o],i=e[o]),i>n?-1:n>i?1:0},r.prototype.write=function(t,e,n,r){if(isFinite(e))isFinite(n)||(r=n,n=void 0)
else{var h=r
r=e,e=n,n=h}e=Number(e)||0
var l=this.length-e
n?(n=Number(n),n>l&&(n=l)):n=l,r=String(r||"utf8").toLowerCase()
var f
switch(r){case"hex":f=i(this,t,e,n)
break
case"utf8":case"utf-8":f=o(this,t,e,n)
break
case"ascii":f=a(this,t,e,n)
break
case"binary":f=s(this,t,e,n)
break
case"base64":f=u(this,t,e,n)
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":f=c(this,t,e,n)
break
default:throw new Error("Unknown encoding")}return f},r.prototype.toString=function(t,e,n){var r=this
if(t=String(t||"utf8").toLowerCase(),e=Number(e)||0,n=void 0===n?r.length:Number(n),n===e)return""
var i
switch(t){case"hex":i=p(r,e,n)
break
case"utf8":case"utf-8":i=l(r,e,n)
break
case"ascii":i=f(r,e,n)
break
case"binary":i=d(r,e,n)
break
case"base64":i=h(r,e,n)
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=g(r,e,n)
break
default:throw new Error("Unknown encoding")}return i},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},r.prototype.equals=function(t){return V(r.isBuffer(t),"Argument must be a Buffer"),0===r.compare(this,t)},r.prototype.compare=function(t){return V(r.isBuffer(t),"Argument must be a Buffer"),r.compare(this,t)},r.prototype.copy=function(t,e,n,i){var o=this
if(n||(n=0),i||0===i||(i=this.length),e||(e=0),i!==n&&0!==t.length&&0!==o.length){V(i>=n,"sourceEnd < sourceStart"),V(e>=0&&e<t.length,"targetStart out of bounds"),V(n>=0&&n<o.length,"sourceStart out of bounds"),V(i>=0&&i<=o.length,"sourceEnd out of bounds"),i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n)
var a=i-n
if(100>a||!r._useTypedArrays)for(var s=0;a>s;s++)t[s+e]=this[s+n]
else t._set(this.subarray(n,n+a),e)}},r.prototype.slice=function(t,e){var n=this.length
if(t=N(t,n,0),e=N(e,n,n),r._useTypedArrays)return r._augment(this.subarray(t,e))
for(var i=e-t,o=new r(i,void 0,!0),a=0;i>a;a++)o[a]=this[a+t]
return o},r.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},r.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},r.prototype.readUInt8=function(t,e){return e||(V(void 0!==t&&null!==t,"missing offset"),V(t<this.length,"Trying to read beyond buffer length")),t>=this.length?void 0:this[t]},r.prototype.readUInt16LE=function(t,e){return v(this,t,!0,e)},r.prototype.readUInt16BE=function(t,e){return v(this,t,!1,e)},r.prototype.readUInt32LE=function(t,e){return m(this,t,!0,e)},r.prototype.readUInt32BE=function(t,e){return m(this,t,!1,e)},r.prototype.readInt8=function(t,e){if(e||(V(void 0!==t&&null!==t,"missing offset"),V(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length)){var n=128&this[t]
return n?-1*(255-this[t]+1):this[t]}},r.prototype.readInt16LE=function(t,e){return y(this,t,!0,e)},r.prototype.readInt16BE=function(t,e){return y(this,t,!1,e)},r.prototype.readInt32LE=function(t,e){return b(this,t,!0,e)},r.prototype.readInt32BE=function(t,e){return b(this,t,!1,e)},r.prototype.readFloatLE=function(t,e){return w(this,t,!0,e)},r.prototype.readFloatBE=function(t,e){return w(this,t,!1,e)},r.prototype.readDoubleLE=function(t,e){return E(this,t,!0,e)},r.prototype.readDoubleBE=function(t,e){return E(this,t,!1,e)},r.prototype.writeUInt8=function(t,e,n){return n||(V(void 0!==t&&null!==t,"missing value"),V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"trying to write beyond buffer length"),U(t,255)),e>=this.length?void 0:(this[e]=t,e+1)},r.prototype.writeUInt16LE=function(t,e,n){return _(this,t,e,!0,n)},r.prototype.writeUInt16BE=function(t,e,n){return _(this,t,e,!1,n)},r.prototype.writeUInt32LE=function(t,e,n){return x(this,t,e,!0,n)},r.prototype.writeUInt32BE=function(t,e,n){return x(this,t,e,!1,n)},r.prototype.writeInt8=function(t,e,n){return n||(V(void 0!==t&&null!==t,"missing value"),V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to write beyond buffer length"),W(t,127,-128)),e>=this.length?void 0:(t>=0?this.writeUInt8(t,e,n):this.writeUInt8(255+t+1,e,n),e+1)},r.prototype.writeInt16LE=function(t,e,n){return k(this,t,e,!0,n)},r.prototype.writeInt16BE=function(t,e,n){return k(this,t,e,!1,n)},r.prototype.writeInt32LE=function(t,e,n){return S(this,t,e,!0,n)},r.prototype.writeInt32BE=function(t,e,n){return S(this,t,e,!1,n)},r.prototype.writeFloatLE=function(t,e,n){return O(this,t,e,!0,n)},r.prototype.writeFloatBE=function(t,e,n){return O(this,t,e,!1,n)},r.prototype.writeDoubleLE=function(t,e,n){return T(this,t,e,!0,n)},r.prototype.writeDoubleBE=function(t,e,n){return T(this,t,e,!1,n)},r.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),V(n>=e,"end < start"),n!==e&&0!==this.length){V(e>=0&&e<this.length,"start out of bounds"),V(n>=0&&n<=this.length,"end out of bounds")
var r
if("number"==typeof t)for(r=e;n>r;r++)this[r]=t
else{var i=I(t.toString()),o=i.length
for(r=e;n>r;r++)this[r]=i[r%o]}return this}},r.prototype.inspect=function(){for(var t=[],e=this.length,r=0;e>r;r++)if(t[r]=j(this[r]),r===n.INSPECT_MAX_BYTES){t[r+1]="..."
break}return"<Buffer "+t.join(" ")+">"},r.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(r._useTypedArrays)return new r(this).buffer
for(var t=new Uint8Array(this.length),e=0,n=t.length;n>e;e+=1)t[e]=this[e]
return t.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")}
var H=r.prototype
r._augment=function(t){return t._isBuffer=!0,t._get=t.get,t._set=t.set,t.get=H.get,t.set=H.set,t.write=H.write,t.toString=H.toString,t.toLocaleString=H.toString,t.toJSON=H.toJSON,t.equals=H.equals,t.compare=H.compare,t.copy=H.copy,t.slice=H.slice,t.readUInt8=H.readUInt8,t.readUInt16LE=H.readUInt16LE,t.readUInt16BE=H.readUInt16BE,t.readUInt32LE=H.readUInt32LE,t.readUInt32BE=H.readUInt32BE,t.readInt8=H.readInt8,t.readInt16LE=H.readInt16LE,t.readInt16BE=H.readInt16BE,t.readInt32LE=H.readInt32LE,t.readInt32BE=H.readInt32BE,t.readFloatLE=H.readFloatLE,t.readFloatBE=H.readFloatBE,t.readDoubleLE=H.readDoubleLE,t.readDoubleBE=H.readDoubleBE,t.writeUInt8=H.writeUInt8,t.writeUInt16LE=H.writeUInt16LE,t.writeUInt16BE=H.writeUInt16BE,t.writeUInt32LE=H.writeUInt32LE,t.writeUInt32BE=H.writeUInt32BE,t.writeInt8=H.writeInt8,t.writeInt16LE=H.writeInt16LE,t.writeInt16BE=H.writeInt16BE,t.writeInt32LE=H.writeInt32LE,t.writeInt32BE=H.writeInt32BE,t.writeFloatLE=H.writeFloatLE,t.writeFloatBE=H.writeFloatBE,t.writeDoubleLE=H.writeDoubleLE,t.writeDoubleBE=H.writeDoubleBE,t.fill=H.fill,t.inspect=H.inspect,t.toArrayBuffer=H.toArrayBuffer,t}},{"base64-js":3,ieee754:4}],3:[function(t,e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
!function(){"use strict"
function t(t){var e=t.charCodeAt(0)
return e===a?62:e===s?63:u>e?-1:u+10>e?e-u+26+26:h+26>e?e-h:c+26>e?e-c+26:void 0}function r(e){function n(t){c[l++]=t}var r,i,a,s,u,c
if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var h=e.length
u="="===e.charAt(h-2)?2:"="===e.charAt(h-1)?1:0,c=new o(3*e.length/4-u),a=u>0?e.length-4:e.length
var l=0
for(r=0,i=0;a>r;r+=4,i+=3)s=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&s)>>16),n((65280&s)>>8),n(255&s)
return 2===u?(s=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&s)):1===u&&(s=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(s>>8&255),n(255&s)),c}function i(t){function e(t){return n.charAt(t)}function r(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,a,s=t.length%3,u=""
for(i=0,a=t.length-s;a>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=r(o)
switch(s){case 1:o=t[t.length-1],u+=e(o>>2),u+=e(o<<4&63),u+="=="
break
case 2:o=(t[t.length-2]<<8)+t[t.length-1],u+=e(o>>10),u+=e(o>>4&63),u+=e(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a=("0".charCodeAt(0),"+".charCodeAt(0)),s="/".charCodeAt(0),u="0".charCodeAt(0),c="a".charCodeAt(0),h="A".charCodeAt(0)
e.exports.toByteArray=r,e.exports.fromByteArray=i}()},{}],4:[function(t,e,n){n.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,c=u>>1,h=-7,l=n?i-1:0,f=n?-1:1,d=t[e+l]
for(l+=f,o=d&(1<<-h)-1,d>>=-h,h+=s;h>0;o=256*o+t[e+l],l+=f,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=r;h>0;a=256*a+t[e+l],l+=f,h-=8);if(0===o)o=1-c
else{if(o===u)return a?0/0:1/0*(d?-1:1)
a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},n.write=function(t,e,n,r,i,o){var a,s,u,c=8*o-i-1,h=(1<<c)-1,l=h>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,g=0>e||0===e&&0>1/e?1:0
for(e=Math.abs(e),isNaN(e)||1/0===e?(s=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),e+=a+l>=1?f/u:f*Math.pow(2,1-l),e*u>=2&&(a++,u/=2),a+l>=h?(s=0,a=h):a+l>=1?(s=(e*u-1)*Math.pow(2,i),a+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;t[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;t[n+d]=255&a,d+=p,a/=256,c-=8);t[n+d-p]|=128*g}},{}],5:[function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!i(t)||0>t||isNaN(t))throw TypeError("n must be a positive number")
return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,i,s,u,c
if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length))throw e=arguments[1],e instanceof Error?e:TypeError('Uncaught, unspecified "error" event.')
if(n=this._events[t],a(n))return!1
if(r(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:for(i=arguments.length,s=new Array(i-1),u=1;i>u;u++)s[u-1]=arguments[u]
n.apply(this,s)}else if(o(n)){for(i=arguments.length,s=new Array(i-1),u=1;i>u;u++)s[u-1]=arguments[u]
for(c=n.slice(),i=c.length,u=0;i>u;u++)c[u].apply(this,s)}return!0},n.prototype.addListener=function(t,e){var i
if(!r(e))throw TypeError("listener must be a function")
if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned){var i
i=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function")
var i=!1
return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,i,a,s
if(!r(e))throw TypeError("listener must be a function")
if(!this._events||!this._events[t])return this
if(n=this._events[t],a=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e)
else if(o(n)){for(s=a;s-->0;)if(n[s]===e||n[s].listener&&n[s].listener===e){i=s
break}if(0>i)return this
1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this
if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e)
return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n)
else for(;n.length;)this.removeListener(t,n[n.length-1])
return delete this._events[t],this},n.prototype.listeners=function(t){var e
return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.listenerCount=function(t,e){var n
return n=t._events&&t._events[e]?r(t._events[e])?1:t._events[e].length:0}},{}],6:[function(t,e){var n=e.exports,r=(t("events").EventEmitter,t("./lib/request")),i=t("url")
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
n.STATUS_CODES={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},{"./lib/request":7,events:5,url:30}],7:[function(t,e){var n=t("stream"),r=t("./response"),i=t("Base64"),o=t("inherits"),a=e.exports=function(t,e){var n=this
n.writable=!0,n.xhr=t,n.body=[],n.uri=(e.scheme||"http")+"://"+e.host+(e.port?":"+e.port:"")+(e.path||"/"),"undefined"==typeof e.withCredentials&&(e.withCredentials=!0)
try{t.withCredentials=e.withCredentials}catch(o){}if(t.open(e.method||"GET",n.uri,!0),n._headers={},e.headers)for(var a=s(e.headers),u=0;u<a.length;u++){var c=a[u]
if(n.isSafeRequestHeader(c)){var h=e.headers[c]
n.setHeader(c,h)}}e.auth&&this.setHeader("Authorization","Basic "+i.btoa(e.auth))
var l=new r
l.on("close",function(){n.emit("close")}),l.on("ready",function(){n.emit("response",l)}),t.onreadystatechange=function(){t.__aborted||l.handle(t)}}
o(a,n),a.prototype.setHeader=function(t,e){this._headers[t.toLowerCase()]=e},a.prototype.getHeader=function(t){return this._headers[t.toLowerCase()]},a.prototype.removeHeader=function(t){delete this._headers[t.toLowerCase()]},a.prototype.write=function(t){this.body.push(t)},a.prototype.destroy=function(){this.xhr.__aborted=!0,this.xhr.abort(),this.emit("close")},a.prototype.end=function(t){void 0!==t&&this.body.push(t)
for(var e=s(this._headers),n=0;n<e.length;n++){var r=e[n],i=this._headers[r]
if(u(i))for(var o=0;o<i.length;o++)this.xhr.setRequestHeader(r,i[o])
else this.xhr.setRequestHeader(r,i)}if(0===this.body.length)this.xhr.send("")
else if("string"==typeof this.body[0])this.xhr.send(this.body.join(""))
else if(u(this.body[0])){for(var a=[],n=0;n<this.body.length;n++)a.push.apply(a,this.body[n])
this.xhr.send(a)}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){for(var c=0,n=0;n<this.body.length;n++)c+=this.body[n].length
for(var a=new this.body[0].constructor(c),h=0,n=0;n<this.body.length;n++)for(var l=this.body[n],o=0;o<l.length;o++)a[h++]=l[o]
this.xhr.send(a)}else{for(var a="",n=0;n<this.body.length;n++)a+=this.body[n].toString()
this.xhr.send(a)}},a.unsafeHeaders=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"],a.prototype.isSafeRequestHeader=function(t){return t?-1===c(a.unsafeHeaders,t.toLowerCase()):!1}
var s=Object.keys||function(t){var e=[]
for(var n in t)e.push(n)
return e},u=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},c=function(t,e){if(t.indexOf)return t.indexOf(e)
for(var n=0;n<t.length;n++)if(t[n]===e)return n
return-1}},{"./response":8,Base64:9,inherits:10,stream:29}],8:[function(t,e){function n(t){for(var e=t.getAllResponseHeaders().split(/\r?\n/),n={},r=0;r<e.length;r++){var i=e[r]
if(""!==i){var o=i.match(/^([^:]+):\s*(.*)/)
if(o){var a=o[1].toLowerCase(),u=o[2]
void 0!==n[a]?s(n[a])?n[a].push(u):n[a]=[n[a],u]:n[a]=u}else n[i]=!0}}return n}var r=t("stream"),i=t("util"),o=e.exports=function(){this.offset=0,this.readable=!0}
i.inherits(o,r)
var a={streaming:!0,status2:!0}
o.prototype.getResponse=function(t){var e=String(t.responseType).toLowerCase()
return"blob"===e?t.responseBlob||t.response:"arraybuffer"===e?t.response:t.responseText},o.prototype.getHeader=function(t){return this.headers[t.toLowerCase()]},o.prototype.handle=function(t){if(2===t.readyState&&a.status2){try{this.statusCode=t.status,this.headers=n(t)}catch(e){a.status2=!1}a.status2&&this.emit("ready")}else if(a.streaming&&3===t.readyState){try{this.statusCode||(this.statusCode=t.status,this.headers=n(t),this.emit("ready"))}catch(e){}try{this._emitData(t)}catch(e){a.streaming=!1}}else 4===t.readyState&&(this.statusCode||(this.statusCode=t.status,this.emit("ready")),this._emitData(t),t.error?this.emit("error",this.getResponse(t)):this.emit("end"),this.emit("close"))},o.prototype._emitData=function(t){var e=this.getResponse(t)
return e.toString().match(/ArrayBuffer/)?(this.emit("data",new Uint8Array(e,this.offset)),void(this.offset=e.byteLength)):void(e.length>this.offset&&(this.emit("data",e.slice(this.offset)),this.offset=e.length))}
var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{stream:29,util:32}],9:[function(t,e,n){!function(){function t(t){this.message=t}var e="undefined"!=typeof n?n:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
t.prototype=new Error,t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var n,i,o=0,a=r,s="";e.charAt(0|o)||(a="=",o%1);s+=a.charAt(63&n>>8-o%1*8)){if(i=e.charCodeAt(o+=.75),i>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
n=n<<8|i}return s}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.")
for(var n,i,o=0,a=0,s="";i=e.charAt(a++);~i&&(n=o%4?64*n+i:i,o++%4)?s+=String.fromCharCode(255&n>>(-2*o&6)):0)i=r.indexOf(i)
return s})}()},{}],10:[function(t,e){e.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],11:[function(t,e){function n(){}var r=e.exports={}
r.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener
if(t)return function(t){return window.setImmediate(t)}
if(e){var n=[]
return window.addEventListener("message",function(t){var e=t.source
if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift()
r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=n,r.addListener=n,r.once=n,r.off=n,r.removeListener=n,r.removeAllListeners=n,r.emit=n,r.binding=function(){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(){throw new Error("process.chdir is not supported")}},{}],12:[function(t,e,n){(function(t){!function(r){function i(t){throw RangeError(j[t])}function o(t,e){for(var n=t.length;n--;)t[n]=e(t[n])
return t}function a(t,e){return o(t.split(R),e).join(".")}function s(t){for(var e,n,r=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e)
return r}function u(t){return o(t,function(t){var e=""
return t>65535&&(t-=65536,e+=M(t>>>10&1023|55296),t=56320|1023&t),e+=M(t)}).join("")}function c(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:_}function h(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function l(t,e,n){var r=0
for(t=n?P(t/O):t>>1,t+=P(t/e);t>I*k>>1;r+=_)t=P(t/I)
return P(r+(I+1)*t/(t+S))}function f(t){var e,n,r,o,a,s,h,f,d,p,g=[],v=t.length,m=0,y=A,b=T
for(n=t.lastIndexOf(N),0>n&&(n=0),r=0;n>r;++r)t.charCodeAt(r)>=128&&i("not-basic"),g.push(t.charCodeAt(r))
for(o=n>0?n+1:0;v>o;){for(a=m,s=1,h=_;o>=v&&i("invalid-input"),f=c(t.charCodeAt(o++)),(f>=_||f>P((E-m)/s))&&i("overflow"),m+=f*s,d=b>=h?x:h>=b+k?k:h-b,!(d>f);h+=_)p=_-d,s>P(E/p)&&i("overflow"),s*=p
e=g.length+1,b=l(m-a,e,0==a),P(m/e)>E-y&&i("overflow"),y+=P(m/e),m%=e,g.splice(m++,0,y)}return u(g)}function d(t){var e,n,r,o,a,u,c,f,d,p,g,v,m,y,b,w=[]
for(t=s(t),v=t.length,e=A,n=0,a=T,u=0;v>u;++u)g=t[u],128>g&&w.push(M(g))
for(r=o=w.length,o&&w.push(N);v>r;){for(c=E,u=0;v>u;++u)g=t[u],g>=e&&c>g&&(c=g)
for(m=r+1,c-e>P((E-n)/m)&&i("overflow"),n+=(c-e)*m,e=c,u=0;v>u;++u)if(g=t[u],e>g&&++n>E&&i("overflow"),g==e){for(f=n,d=_;p=a>=d?x:d>=a+k?k:d-a,!(p>f);d+=_)b=f-p,y=_-p,w.push(M(h(p+b%y,0))),f=P(b/y)
w.push(M(h(f,0))),a=l(n,m,r==o),n=0,++r}++n,++e}return w.join("")}function p(t){return a(t,function(t){return L.test(t)?f(t.slice(4).toLowerCase()):t})}function g(t){return a(t,function(t){return C.test(t)?"xn--"+d(t):t})}var v="object"==typeof n&&n,m="object"==typeof e&&e&&e.exports==v&&e,y="object"==typeof t&&t;(y.global===y||y.window===y)&&(r=y)
var b,w,E=2147483647,_=36,x=1,k=26,S=38,O=700,T=72,A=128,N="-",L=/^xn--/,C=/[^ -~]/,R=/\x2E|\u3002|\uFF0E|\uFF61/g,j={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=_-x,P=Math.floor,M=String.fromCharCode
if(b={version:"1.2.4",ucs2:{decode:s,encode:u},decode:f,encode:d,toASCII:g,toUnicode:p},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return b})
else if(v&&!v.nodeType)if(m)m.exports=b
else for(w in b)b.hasOwnProperty(w)&&(v[w]=b[w])
else r.punycode=b}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(t,e){"use strict"
function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,i,o){e=e||"&",i=i||"="
var a={}
if("string"!=typeof t||0===t.length)return a
var s=/\+/g
t=t.split(e)
var u=1e3
o&&"number"==typeof o.maxKeys&&(u=o.maxKeys)
var c=t.length
u>0&&c>u&&(c=u)
for(var h=0;c>h;++h){var l,f,d,p,g=t[h].replace(s,"%20"),v=g.indexOf(i)
v>=0?(l=g.substr(0,v),f=g.substr(v+1)):(l=g,f=""),d=decodeURIComponent(l),p=decodeURIComponent(f),n(a,d)?r(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a}
var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],14:[function(t,e){"use strict"
function n(t,e){if(t.map)return t.map(e)
for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r))
return n}var r=function(t){switch(typeof t){case"string":return t
case"boolean":return t?"true":"false"
case"number":return isFinite(t)?t:""
default:return""}}
e.exports=function(t,e,a,s){return e=e||"&",a=a||"=",null===t&&(t=void 0),"object"==typeof t?n(o(t),function(o){var s=encodeURIComponent(r(o))+a
return i(t[o])?n(t[o],function(t){return s+encodeURIComponent(r(t))}).join(e):s+encodeURIComponent(r(t[o]))}).join(e):s?encodeURIComponent(r(s))+a+encodeURIComponent(r(t)):""}
var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[]
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n)
return e}},{}],15:[function(t,e,n){"use strict"
n.decode=n.parse=t("./decode"),n.encode=n.stringify=t("./encode")},{"./decode":13,"./encode":14}],16:[function(t,e){e.exports=t("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":17}],17:[function(t,e){(function(n){function r(t){return this instanceof r?(u.call(this,t),c.call(this,t),t&&t.readable===!1&&(this.readable=!1),t&&t.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,t&&t.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new r(t)}function i(){this.allowHalfOpen||this._writableState.ended||n.nextTick(this.end.bind(this))}function o(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}e.exports=r
var a=Object.keys||function(t){var e=[]
for(var n in t)e.push(n)
return e},s=t("core-util-is")
s.inherits=t("inherits")
var u=t("./_stream_readable"),c=t("./_stream_writable")
s.inherits(r,u),o(a(c.prototype),function(t){r.prototype[t]||(r.prototype[t]=c.prototype[t])})}).call(this,t("+0JsKK"))},{"+0JsKK":11,"./_stream_readable":19,"./_stream_writable":21,"core-util-is":22,inherits:10}],18:[function(t,e){function n(t){return this instanceof n?void r.call(this,t):new n(t)}e.exports=n
var r=t("./_stream_transform"),i=t("core-util-is")
i.inherits=t("inherits"),i.inherits(n,r),n.prototype._transform=function(t,e,n){n(null,t)}},{"./_stream_transform":20,"core-util-is":22,inherits:10}],19:[function(t,e){(function(n){function r(e){e=e||{}
var n=e.highWaterMark
this.highWaterMark=n||0===n?n:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!e.objectMode,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(A||(A=t("string_decoder/").StringDecoder),this.decoder=new A(e.encoding),this.encoding=e.encoding)}function i(t){return this instanceof i?(this._readableState=new r(t,this),this.readable=!0,void O.call(this)):new i(t)}function o(t,e,n,r,i){var o=c(e,n)
if(o)t.emit("error",o)
else if(null===n||void 0===n)e.reading=!1,e.ended||h(t,e)
else if(e.objectMode||n&&n.length>0)if(e.ended&&!i){var s=new Error("stream.push() after EOF")
t.emit("error",s)}else if(e.endEmitted&&i){var s=new Error("stream.unshift() after end event")
t.emit("error",s)}else!e.decoder||i||r||(n=e.decoder.write(n)),e.length+=e.objectMode?1:n.length,i?e.buffer.unshift(n):(e.reading=!1,e.buffer.push(n)),e.needReadable&&l(t),d(t,e)
else i||(e.reading=!1)
return a(e)}function a(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function s(t){if(t>=N)t=N
else{t--
for(var e=1;32>e;e<<=1)t|=t>>e
t++}return t}function u(t,e){return 0===e.length&&e.ended?0:e.objectMode?0===t?0:1:isNaN(t)||null===t?e.flowing&&e.buffer.length?e.buffer[0].length:e.length:0>=t?0:(t>e.highWaterMark&&(e.highWaterMark=s(t)),t>e.length?e.ended?e.length:(e.needReadable=!0,0):t)}function c(t,e){var n=null
return k.isBuffer(e)||"string"==typeof e||null===e||void 0===e||t.objectMode||n||(n=new TypeError("Invalid non-string/buffer chunk")),n}function h(t,e){if(e.decoder&&!e.ended){var n=e.decoder.end()
n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,e.length>0?l(t):w(t)}function l(t){var e=t._readableState
e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,e.sync?n.nextTick(function(){f(t)}):f(t))}function f(t){t.emit("readable")}function d(t,e){e.readingMore||(e.readingMore=!0,n.nextTick(function(){p(t,e)}))}function p(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(t.read(0),n!==e.length);)n=e.length
e.readingMore=!1}function g(t){return function(){var e=t._readableState
e.awaitDrain--,0===e.awaitDrain&&v(t)}}function v(t){function e(t){var e=t.write(n)
!1===e&&r.awaitDrain++}var n,r=t._readableState
for(r.awaitDrain=0;r.pipesCount&&null!==(n=t.read());)if(1===r.pipesCount?e(r.pipes,0,null):E(r.pipes,e),t.emit("data",n),r.awaitDrain>0)return
return 0===r.pipesCount?(r.flowing=!1,void(S.listenerCount(t,"data")>0&&y(t))):void(r.ranOut=!0)}function m(){this._readableState.ranOut&&(this._readableState.ranOut=!1,v(this))}function y(t,e){var r=t._readableState
if(r.flowing)throw new Error("Cannot switch to old mode now.")
var i=e||!1,o=!1
t.readable=!0,t.pipe=O.prototype.pipe,t.on=t.addListener=O.prototype.on,t.on("readable",function(){o=!0
for(var e;!i&&null!==(e=t.read());)t.emit("data",e)
null===e&&(o=!1,t._readableState.needReadable=!0)}),t.pause=function(){i=!0,this.emit("pause")},t.resume=function(){i=!1,o?n.nextTick(function(){t.emit("readable")}):this.read(0),this.emit("resume")},t.emit("readable")}function b(t,e){var n,r=e.buffer,i=e.length,o=!!e.decoder,a=!!e.objectMode
if(0===r.length)return null
if(0===i)n=null
else if(a)n=r.shift()
else if(!t||t>=i)n=o?r.join(""):k.concat(r,i),r.length=0
else if(t<r[0].length){var s=r[0]
n=s.slice(0,t),r[0]=s.slice(t)}else if(t===r[0].length)n=r.shift()
else{n=o?"":new k(t)
for(var u=0,c=0,h=r.length;h>c&&t>u;c++){var s=r[0],l=Math.min(t-u,s.length)
o?n+=s.slice(0,l):s.copy(n,u,0,l),l<s.length?r[0]=s.slice(l):r.shift(),u+=l}}return n}function w(t){var e=t._readableState
if(e.length>0)throw new Error("endReadable called on non-empty stream")
!e.endEmitted&&e.calledRead&&(e.ended=!0,n.nextTick(function(){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}))}function E(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}function _(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n
return-1}e.exports=i
var x=t("isarray"),k=t("buffer").Buffer
i.ReadableState=r
var S=t("events").EventEmitter
S.listenerCount||(S.listenerCount=function(t,e){return t.listeners(e).length})
var O=t("stream"),T=t("core-util-is")
T.inherits=t("inherits")
var A
T.inherits(i,O),i.prototype.push=function(t,e){var n=this._readableState
return"string"!=typeof t||n.objectMode||(e=e||n.defaultEncoding,e!==n.encoding&&(t=new k(t,e),e="")),o(this,n,t,e,!1)},i.prototype.unshift=function(t){var e=this._readableState
return o(this,e,t,"",!0)},i.prototype.setEncoding=function(e){A||(A=t("string_decoder/").StringDecoder),this._readableState.decoder=new A(e),this._readableState.encoding=e}
var N=8388608
i.prototype.read=function(t){var e=this._readableState
e.calledRead=!0
var n=t
if(("number"!=typeof t||t>0)&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return l(this),null
if(t=u(t,e),0===t&&e.ended)return 0===e.length&&w(this),null
var r=e.needReadable
e.length-t<=e.highWaterMark&&(r=!0),(e.ended||e.reading)&&(r=!1),r&&(e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1),r&&!e.reading&&(t=u(n,e))
var i
return i=t>0?b(t,e):null,null===i&&(e.needReadable=!0,t=0),e.length-=t,0!==e.length||e.ended||(e.needReadable=!0),e.ended&&!e.endEmitted&&0===e.length&&w(this),i},i.prototype._read=function(){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(t,e){function r(t){t===h&&o()}function i(){t.end()}function o(){t.removeListener("close",s),t.removeListener("finish",u),t.removeListener("drain",p),t.removeListener("error",a),t.removeListener("unpipe",r),h.removeListener("end",i),h.removeListener("end",o),(!t._writableState||t._writableState.needDrain)&&p()}function a(e){c(),t.removeListener("error",a),0===S.listenerCount(t,"error")&&t.emit("error",e)}function s(){t.removeListener("finish",u),c()}function u(){t.removeListener("close",s),c()}function c(){h.unpipe(t)}var h=this,l=this._readableState
switch(l.pipesCount){case 0:l.pipes=t
break
case 1:l.pipes=[l.pipes,t]
break
default:l.pipes.push(t)}l.pipesCount+=1
var f=(!e||e.end!==!1)&&t!==n.stdout&&t!==n.stderr,d=f?i:o
l.endEmitted?n.nextTick(d):h.once("end",d),t.on("unpipe",r)
var p=g(h)
return t.on("drain",p),t._events&&t._events.error?x(t._events.error)?t._events.error.unshift(a):t._events.error=[a,t._events.error]:t.on("error",a),t.once("close",s),t.once("finish",u),t.emit("pipe",h),l.flowing||(this.on("readable",m),l.flowing=!0,n.nextTick(function(){v(h)})),t},i.prototype.unpipe=function(t){var e=this._readableState
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1,t&&t.emit("unpipe",this),this)
if(!t){var n=e.pipes,r=e.pipesCount
e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1
for(var i=0;r>i;i++)n[i].emit("unpipe",this)
return this}var i=_(e.pipes,t)
return-1===i?this:(e.pipes.splice(i,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,e){var n=O.prototype.on.call(this,t,e)
if("data"!==t||this._readableState.flowing||y(this),"readable"===t&&this.readable){var r=this._readableState
r.readableListening||(r.readableListening=!0,r.emittedReadable=!1,r.needReadable=!0,r.reading?r.length&&l(this,r):this.read(0))}return n},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){y(this),this.read(0),this.emit("resume")},i.prototype.pause=function(){y(this,!0),this.emit("pause")},i.prototype.wrap=function(t){var e=this._readableState,n=!1,r=this
t.on("end",function(){if(e.decoder&&!e.ended){var t=e.decoder.end()
t&&t.length&&r.push(t)}r.push(null)}),t.on("data",function(i){if(e.decoder&&(i=e.decoder.write(i)),i&&(e.objectMode||i.length)){var o=r.push(i)
o||(n=!0,t.pause())}})
for(var i in t)"function"==typeof t[i]&&"undefined"==typeof this[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i))
var o=["error","close","destroy","pause","resume"]
return E(o,function(e){t.on(e,r.emit.bind(r,e))}),r._read=function(){n&&(n=!1,t.resume())},r},i._fromList=b}).call(this,t("+0JsKK"))},{"+0JsKK":11,buffer:2,"core-util-is":22,events:5,inherits:10,isarray:23,stream:29,"string_decoder/":24}],20:[function(t,e){function n(t,e){this.afterTransform=function(t,n){return r(e,t,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function r(t,e,n){var r=t._transformState
r.transforming=!1
var i=r.writecb
if(!i)return t.emit("error",new Error("no writecb in Transform class"))
r.writechunk=null,r.writecb=null,null!==n&&void 0!==n&&t.push(n),i&&i(e)
var o=t._readableState
o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}function i(t){if(!(this instanceof i))return new i(t)
a.call(this,t)
var e=(this._transformState=new n(t,this),this)
this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(t){o(e,t)}):o(e)})}function o(t,e){if(e)return t.emit("error",e)
var n=t._writableState,r=(t._readableState,t._transformState)
if(n.length)throw new Error("calling transform done when ws.length != 0")
if(r.transforming)throw new Error("calling transform done when still transforming")
return t.push(null)}e.exports=i
var a=t("./_stream_duplex"),s=t("core-util-is")
s.inherits=t("inherits"),s.inherits(i,a),i.prototype.push=function(t,e){return this._transformState.needTransform=!1,a.prototype.push.call(this,t,e)},i.prototype._transform=function(){throw new Error("not implemented")},i.prototype._write=function(t,e,n){var r=this._transformState
if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},i.prototype._read=function(){var t=this._transformState
null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}},{"./_stream_duplex":17,"core-util-is":22,inherits:10}],21:[function(t,e){(function(n){function r(t,e,n){this.chunk=t,this.encoding=e,this.callback=n}function i(t,e){t=t||{}
var n=t.highWaterMark
this.highWaterMark=n||0===n?n:16384,this.objectMode=!!t.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var r=t.decodeStrings===!1
this.decodeStrings=!r,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){d(e,t)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function o(e){var n=t("./_stream_duplex")
return this instanceof o||this instanceof n?(this._writableState=new i(e,this),this.writable=!0,void _.call(this)):new o(e)}function a(t,e,r){var i=new Error("write after end")
t.emit("error",i),n.nextTick(function(){r(i)})}function s(t,e,r,i){var o=!0
if(!w.isBuffer(r)&&"string"!=typeof r&&null!==r&&void 0!==r&&!e.objectMode){var a=new TypeError("Invalid non-string/buffer chunk")
t.emit("error",a),n.nextTick(function(){i(a)}),o=!1}return o}function u(t,e,n){return t.objectMode||t.decodeStrings===!1||"string"!=typeof e||(e=new w(e,n)),e}function c(t,e,n,i,o){n=u(e,n,i),w.isBuffer(n)&&(i="buffer")
var a=e.objectMode?1:n.length
e.length+=a
var s=e.length<e.highWaterMark
return s||(e.needDrain=!0),e.writing?e.buffer.push(new r(n,i,o)):h(t,e,a,n,i,o),s}function h(t,e,n,r,i,o){e.writelen=n,e.writecb=o,e.writing=!0,e.sync=!0,t._write(r,i,e.onwrite),e.sync=!1}function l(t,e,r,i,o){r?n.nextTick(function(){o(i)}):o(i),t._writableState.errorEmitted=!0,t.emit("error",i)}function f(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function d(t,e){var r=t._writableState,i=r.sync,o=r.writecb
if(f(r),e)l(t,r,i,e,o)
else{var a=m(t,r)
a||r.bufferProcessing||!r.buffer.length||v(t,r),i?n.nextTick(function(){p(t,r,a,o)}):p(t,r,a,o)}}function p(t,e,n,r){n||g(t,e),r(),n&&y(t,e)}function g(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function v(t,e){e.bufferProcessing=!0
for(var n=0;n<e.buffer.length;n++){var r=e.buffer[n],i=r.chunk,o=r.encoding,a=r.callback,s=e.objectMode?1:i.length
if(h(t,e,s,i,o,a),e.writing){n++
break}}e.bufferProcessing=!1,n<e.buffer.length?e.buffer=e.buffer.slice(n):e.buffer.length=0}function m(t,e){return e.ending&&0===e.length&&!e.finished&&!e.writing}function y(t,e){var n=m(t,e)
return n&&(e.finished=!0,t.emit("finish")),n}function b(t,e,r){e.ending=!0,y(t,e),r&&(e.finished?n.nextTick(r):t.once("finish",r)),e.ended=!0}e.exports=o
var w=t("buffer").Buffer
o.WritableState=i
var E=t("core-util-is")
E.inherits=t("inherits")
var _=t("stream")
E.inherits(o,_),o.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},o.prototype.write=function(t,e,n){var r=this._writableState,i=!1
return"function"==typeof e&&(n=e,e=null),w.isBuffer(t)?e="buffer":e||(e=r.defaultEncoding),"function"!=typeof n&&(n=function(){}),r.ended?a(this,r,n):s(this,r,t,n)&&(i=c(this,r,t,e,n)),i},o.prototype._write=function(t,e,n){n(new Error("not implemented"))},o.prototype.end=function(t,e,n){var r=this._writableState
"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),"undefined"!=typeof t&&null!==t&&this.write(t,e),r.ending||r.finished||b(this,r,n)}}).call(this,t("+0JsKK"))},{"+0JsKK":11,"./_stream_duplex":17,buffer:2,"core-util-is":22,inherits:10,stream:29}],22:[function(t,e,n){(function(t){function e(t){return Array.isArray(t)}function r(t){return"boolean"==typeof t}function i(t){return null===t}function o(t){return null==t}function a(t){return"number"==typeof t}function s(t){return"string"==typeof t}function u(t){return"symbol"==typeof t}function c(t){return void 0===t}function h(t){return l(t)&&"[object RegExp]"===m(t)}function l(t){return"object"==typeof t&&null!==t}function f(t){return l(t)&&"[object Date]"===m(t)}function d(t){return l(t)&&("[object Error]"===m(t)||t instanceof Error)}function p(t){return"function"==typeof t}function g(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function v(e){return t.isBuffer(e)}function m(t){return Object.prototype.toString.call(t)}n.isArray=e,n.isBoolean=r,n.isNull=i,n.isNullOrUndefined=o,n.isNumber=a,n.isString=s,n.isSymbol=u,n.isUndefined=c,n.isRegExp=h,n.isObject=l,n.isDate=f,n.isError=d,n.isFunction=p,n.isPrimitive=g,n.isBuffer=v}).call(this,t("buffer").Buffer)},{buffer:2}],23:[function(t,e){e.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},{}],24:[function(t,e,n){function r(t){if(t&&!u(t))throw new Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){var e=this.charReceived=t.length%2
return this.charLength=e?2:0,e}function a(t){var e=this.charReceived=t.length%3
return this.charLength=e?3:0,e}var s=t("buffer").Buffer,u=s.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}},c=n.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),r(t),this.encoding){case"utf8":this.surrogateSize=3
break
case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o
break
case"base64":this.surrogateSize=3,this.detectIncompleteChar=a
break
default:return void(this.write=i)}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0}
c.prototype.write=function(t){for(var e="",n=0;this.charLength;){var r=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length
if(t.copy(this.charBuffer,this.charReceived,n,r),this.charReceived+=r-n,n=r,this.charReceived<this.charLength)return""
e=this.charBuffer.slice(0,this.charLength).toString(this.encoding)
var i=e.charCodeAt(e.length-1)
if(!(i>=55296&&56319>=i)){if(this.charReceived=this.charLength=0,r==t.length)return e
t=t.slice(r,t.length)
break}this.charLength+=this.surrogateSize,e=""}var o=this.detectIncompleteChar(t),a=t.length
this.charLength&&(t.copy(this.charBuffer,0,t.length-o,a),this.charReceived=o,a-=o),e+=t.toString(this.encoding,0,a)
var a=e.length-1,i=e.charCodeAt(a)
if(i>=55296&&56319>=i){var s=this.surrogateSize
return this.charLength+=s,this.charReceived+=s,this.charBuffer.copy(this.charBuffer,s,0,s),this.charBuffer.write(e.charAt(e.length-1),this.encoding),e.substring(0,a)}return e},c.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var n=t[t.length-e]
if(1==e&&n>>5==6){this.charLength=2
break}if(2>=e&&n>>4==14){this.charLength=3
break}if(3>=e&&n>>3==30){this.charLength=4
break}}return e},c.prototype.end=function(t){var e=""
if(t&&t.length&&(e=this.write(t)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding
e+=r.slice(0,n).toString(i)}return e}},{buffer:2}],25:[function(t,e){e.exports=t("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":18}],26:[function(t,e,n){n=e.exports=t("./lib/_stream_readable.js"),n.Readable=n,n.Writable=t("./lib/_stream_writable.js"),n.Duplex=t("./lib/_stream_duplex.js"),n.Transform=t("./lib/_stream_transform.js"),n.PassThrough=t("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":17,"./lib/_stream_passthrough.js":18,"./lib/_stream_readable.js":19,"./lib/_stream_transform.js":20,"./lib/_stream_writable.js":21}],27:[function(t,e){e.exports=t("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":20}],28:[function(t,e){e.exports=t("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":21}],29:[function(t,e){function n(){r.call(this)}e.exports=n
var r=t("events").EventEmitter,i=t("inherits")
i(n,r),n.Readable=t("readable-stream/readable.js"),n.Writable=t("readable-stream/writable.js"),n.Duplex=t("readable-stream/duplex.js"),n.Transform=t("readable-stream/transform.js"),n.PassThrough=t("readable-stream/passthrough.js"),n.Stream=n,n.prototype.pipe=function(t,e){function n(e){t.writable&&!1===t.write(e)&&c.pause&&c.pause()}function i(){c.readable&&c.resume&&c.resume()}function o(){h||(h=!0,t.end())}function a(){h||(h=!0,"function"==typeof t.destroy&&t.destroy())}function s(t){if(u(),0===r.listenerCount(this,"error"))throw t}function u(){c.removeListener("data",n),t.removeListener("drain",i),c.removeListener("end",o),c.removeListener("close",a),c.removeListener("error",s),t.removeListener("error",s),c.removeListener("end",u),c.removeListener("close",u),t.removeListener("close",u)}var c=this
c.on("data",n),t.on("drain",i),t._isStdio||e&&e.end===!1||(c.on("end",o),c.on("close",a))
var h=!1
return c.on("error",s),t.on("error",s),c.on("end",u),c.on("close",u),t.on("close",u),t.emit("pipe",c),t}},{events:5,inherits:10,"readable-stream/duplex.js":16,"readable-stream/passthrough.js":25,"readable-stream/readable.js":26,"readable-stream/transform.js":27,"readable-stream/writable.js":28}],30:[function(t,e,n){function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,n){if(t&&c(t)&&t instanceof r)return t
var i=new r
return i.parse(t,e,n),i}function o(t){return u(t)&&(t=i(t)),t instanceof r?t.format():r.prototype.format.call(t)}function a(t,e){return i(t,!1,!0).resolve(e)}function s(t,e){return t?i(t,!1,!0).resolveObject(e):e}function u(t){return"string"==typeof t}function c(t){return"object"==typeof t&&null!==t}function h(t){return null===t}function l(t){return null==t}var f=t("punycode")
n.parse=i,n.resolve=a,n.resolveObject=s,n.format=o,n.Url=r
var d=/^([a-z0-9.+-]+:)/i,p=/:[0-9]*$/,g=["<",">",'"',"`"," ","\r","\n","	"],v=["{","}","|","\\","^","`"].concat(g),m=["'"].concat(v),y=["%","/","?",";","#"].concat(m),b=["/","?","#"],w=255,E=/^[a-z0-9A-Z_-]{0,63}$/,_=/^([a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},k={javascript:!0,"javascript:":!0},S={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},O=t("querystring")
r.prototype.parse=function(t,e,n){if(!u(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t)
var r=t
r=r.trim()
var i=d.exec(r)
if(i){i=i[0]
var o=i.toLowerCase()
this.protocol=o,r=r.substr(i.length)}if(n||i||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===r.substr(0,2)
!a||i&&k[i]||(r=r.substr(2),this.slashes=!0)}if(!k[i]&&(a||i&&!S[i])){for(var s=-1,c=0;c<b.length;c++){var h=r.indexOf(b[c]);-1!==h&&(-1===s||s>h)&&(s=h)}var l,p
p=-1===s?r.lastIndexOf("@"):r.lastIndexOf("@",s),-1!==p&&(l=r.slice(0,p),r=r.slice(p+1),this.auth=decodeURIComponent(l)),s=-1
for(var c=0;c<y.length;c++){var h=r.indexOf(y[c]);-1!==h&&(-1===s||s>h)&&(s=h)}-1===s&&(s=r.length),this.host=r.slice(0,s),r=r.slice(s),this.parseHost(),this.hostname=this.hostname||""
var g="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]
if(!g)for(var v=this.hostname.split(/\./),c=0,T=v.length;T>c;c++){var A=v[c]
if(A&&!A.match(E)){for(var N="",L=0,C=A.length;C>L;L++)N+=A.charCodeAt(L)>127?"x":A[L]
if(!N.match(E)){var R=v.slice(0,c),j=v.slice(c+1),I=A.match(_)
I&&(R.push(I[1]),j.unshift(I[2])),j.length&&(r="/"+j.join(".")+r),this.hostname=R.join(".")
break}}}if(this.hostname=this.hostname.length>w?"":this.hostname.toLowerCase(),!g){for(var P=this.hostname.split("."),M=[],c=0;c<P.length;++c){var F=P[c]
M.push(F.match(/[^A-Za-z0-9_-]/)?"xn--"+f.encode(F):F)}this.hostname=M.join(".")}var B=this.port?":"+this.port:"",D=this.hostname||""
this.host=D+B,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==r[0]&&(r="/"+r))}if(!x[o])for(var c=0,T=m.length;T>c;c++){var U=m[c],W=encodeURIComponent(U)
W===U&&(W=escape(U)),r=r.split(U).join(W)}var q=r.indexOf("#");-1!==q&&(this.hash=r.substr(q),r=r.slice(0,q))
var V=r.indexOf("?")
if(-1!==V?(this.search=r.substr(V),this.query=r.substr(V+1),e&&(this.query=O.parse(this.query)),r=r.slice(0,V)):e&&(this.search="",this.query={}),r&&(this.pathname=r),S[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var B=this.pathname||"",F=this.search||""
this.path=B+F}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||""
t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@")
var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o=""
this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&c(this.query)&&Object.keys(this.query).length&&(o=O.stringify(this.query))
var a=this.search||o&&"?"+o||""
return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||S[e])&&i!==!1?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),e+i+n+a+r},r.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(u(t)){var e=new r
e.parse(t,!1,!0),t=e}var n=new r
if(Object.keys(this).forEach(function(t){n[t]=this[t]},this),n.hash=t.hash,""===t.href)return n.href=n.format(),n
if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(n[e]=t[e])}),S[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n
if(t.protocol&&t.protocol!==n.protocol){if(!S[t.protocol])return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.href=n.format(),n
if(n.protocol=t.protocol,t.host||k[t.protocol])n.pathname=t.pathname
else{for(var i=(t.pathname||"").split("/");i.length&&!(t.host=i.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),n.pathname=i.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var o=n.pathname||"",a=n.search||""
n.path=o+a}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var s=n.pathname&&"/"===n.pathname.charAt(0),c=t.host||t.pathname&&"/"===t.pathname.charAt(0),f=c||s||n.host&&t.pathname,d=f,p=n.pathname&&n.pathname.split("/")||[],i=t.pathname&&t.pathname.split("/")||[],g=n.protocol&&!S[n.protocol]
if(g&&(n.hostname="",n.port=null,n.host&&(""===p[0]?p[0]=n.host:p.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===i[0]?i[0]=t.host:i.unshift(t.host)),t.host=null),f=f&&(""===i[0]||""===p[0])),c)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,p=i
else if(i.length)p||(p=[]),p.pop(),p=p.concat(i),n.search=t.search,n.query=t.query
else if(!l(t.search)){if(g){n.hostname=n.host=p.shift()
var v=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1
v&&(n.auth=v.shift(),n.host=n.hostname=v.shift())}return n.search=t.search,n.query=t.query,h(n.pathname)&&h(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!p.length)return n.pathname=null,n.path=n.search?"/"+n.search:null,n.href=n.format(),n
for(var m=p.slice(-1)[0],y=(n.host||t.host)&&("."===m||".."===m)||""===m,b=0,w=p.length;w>=0;w--)m=p[w],"."==m?p.splice(w,1):".."===m?(p.splice(w,1),b++):b&&(p.splice(w,1),b--)
if(!f&&!d)for(;b--;b)p.unshift("..")
!f||""===p[0]||p[0]&&"/"===p[0].charAt(0)||p.unshift(""),y&&"/"!==p.join("/").substr(-1)&&p.push("")
var E=""===p[0]||p[0]&&"/"===p[0].charAt(0)
if(g){n.hostname=n.host=E?"":p.length?p.shift():""
var v=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1
v&&(n.auth=v.shift(),n.host=n.hostname=v.shift())}return f=f||n.host&&p.length,f&&!E&&p.unshift(""),p.length?n.pathname=p.join("/"):(n.pathname=null,n.path=null),h(n.pathname)&&h(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var t=this.host,e=p.exec(t)
e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{punycode:12,querystring:15}],31:[function(t,e){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],32:[function(t,e,n){(function(e,r){function i(t,e){var r={seen:[],stylize:a}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(e)?r.showHidden=e:e&&n._extend(r,e),E(r.showHidden)&&(r.showHidden=!1),E(r.depth)&&(r.depth=2),E(r.colors)&&(r.colors=!1),E(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),u(r,t,r.depth)}function o(t,e){var n=i.styles[e]
return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function a(t){return t}function s(t){var e={}
return t.forEach(function(t){e[t]=!0}),e}function u(t,e,r){if(t.customInspect&&e&&O(e.inspect)&&e.inspect!==n.inspect&&(!e.constructor||e.constructor.prototype!==e)){var i=e.inspect(r,t)
return b(i)||(i=u(t,i,r)),i}var o=c(t,e)
if(o)return o
var a=Object.keys(e),g=s(a)
if(t.showHidden&&(a=Object.getOwnPropertyNames(e)),S(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return h(e)
if(0===a.length){if(O(e)){var v=e.name?": "+e.name:""
return t.stylize("[Function"+v+"]","special")}if(_(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp")
if(k(e))return t.stylize(Date.prototype.toString.call(e),"date")
if(S(e))return h(e)}var m="",y=!1,w=["{","}"]
if(p(e)&&(y=!0,w=["[","]"]),O(e)){var E=e.name?": "+e.name:""
m=" [Function"+E+"]"}if(_(e)&&(m=" "+RegExp.prototype.toString.call(e)),k(e)&&(m=" "+Date.prototype.toUTCString.call(e)),S(e)&&(m=" "+h(e)),0===a.length&&(!y||0==e.length))return w[0]+m+w[1]
if(0>r)return _(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special")
t.seen.push(e)
var x
return x=y?l(t,e,r,g,a):a.map(function(n){return f(t,e,r,g,n,y)}),t.seen.pop(),d(x,m,w)}function c(t,e){if(E(e))return t.stylize("undefined","undefined")
if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(n,"string")}return y(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,e,n,r,i){for(var o=[],a=0,s=e.length;s>a;++a)o.push(C(e,String(a))?f(t,e,n,r,String(a),!0):"")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(f(t,e,n,r,i,!0))}),o}function f(t,e,n,r,i,o){var a,s,c
if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?s=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(s=t.stylize("[Setter]","special")),C(r,i)||(a="["+i+"]"),s||(t.seen.indexOf(c.value)<0?(s=v(n)?u(t,c.value,null):u(t,c.value,n-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n"))):s=t.stylize("[Circular]","special")),E(a)){if(o&&i.match(/^\d+$/))return s
a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function d(t,e,n){var r=0,i=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)
return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function p(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function v(t){return null===t}function m(t){return null==t}function y(t){return"number"==typeof t}function b(t){return"string"==typeof t}function w(t){return"symbol"==typeof t}function E(t){return void 0===t}function _(t){return x(t)&&"[object RegExp]"===A(t)}function x(t){return"object"==typeof t&&null!==t}function k(t){return x(t)&&"[object Date]"===A(t)}function S(t){return x(t)&&("[object Error]"===A(t)||t instanceof Error)}function O(t){return"function"==typeof t}function T(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function A(t){return Object.prototype.toString.call(t)}function N(t){return 10>t?"0"+t.toString(10):t.toString(10)}function L(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":")
return[t.getDate(),P[t.getMonth()],e].join(" ")}function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var R=/%[sdj%]/g
n.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]))
return e.join(" ")}for(var n=1,r=arguments,o=r.length,a=String(t).replace(R,function(t){if("%%"===t)return"%"
if(n>=o)return t
switch(t){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),s=r[n];o>n;s=r[++n])a+=v(s)||!x(s)?" "+s:" "+i(s)
return a},n.deprecate=function(t,i){function o(){if(!a){if(e.throwDeprecation)throw new Error(i)
e.traceDeprecation?console.trace(i):console.error(i),a=!0}return t.apply(this,arguments)}if(E(r.process))return function(){return n.deprecate(t,i).apply(this,arguments)}
if(e.noDeprecation===!0)return t
var a=!1
return o}
var j,I={}
n.debuglog=function(t){if(E(j)&&(j=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!I[t])if(new RegExp("\\b"+t+"\\b","i").test(j)){var r=e.pid
I[t]=function(){var e=n.format.apply(n,arguments)
console.error("%s %d: %s",t,r,e)}}else I[t]=function(){}
return I[t]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=p,n.isBoolean=g,n.isNull=v,n.isNullOrUndefined=m,n.isNumber=y,n.isString=b,n.isSymbol=w,n.isUndefined=E,n.isRegExp=_,n.isObject=x,n.isDate=k,n.isError=S,n.isFunction=O,n.isPrimitive=T,n.isBuffer=t("./support/isBuffer")
var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
n.log=function(){console.log("%s - %s",L(),n.format.apply(n,arguments))},n.inherits=t("inherits"),n._extend=function(t,e){if(!e||!x(e))return t
for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]]
return t}}).call(this,t("+0JsKK"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"+0JsKK":11,"./support/isBuffer":31,inherits:10}],33:[function(t,e){function n(t,e,n,r){var i={type:t,key:e,value:n,options:r}
return r&&r.prefix&&(i.prefix=r.prefix,delete r.prefix),this._operations.push(i),this}function r(t){this._operations=[],this._sdb=t,this.put=n.bind(this,"put"),this.del=n.bind(this,"del")}var i=r.prototype
i.clear=function(){this._operations=[]},i.write=function(t){this._sdb.batch(this._operations,t)},e.exports=r},{}],34:[function(t,e){(function(n){var r=(t("events").EventEmitter,n.nextTick,t("./sub")),i=t("./batch"),o=t("level-fix-range"),a=t("level-hooks")
e.exports=function(t,e){function n(){}function s(t){return function(e){return e=e||{},e=o(e),e.reverse?e.start=e.start||c:e.end=e.end||c,t.call(u,e)}}n.prototype=t
var u=new n
if(u.sublevel)return u
e=e||{}
var c=e.sep=e.sep||"ÿ"
u._options=e,a(u),u.sublevels={},u.sublevel=function(t,e){return u.sublevels[t]?u.sublevels[t]:new r(u,t,e||this._options)},u.methods={},u.prefix=function(t){return""+(t||"")},u.pre=function(t,e){return e||(e=t,t={max:c}),u.hooks.pre(t,e)},u.post=function(t,e){return e||(e=t,t={max:c}),u.hooks.post(t,e)},u.readStream=u.createReadStream=s(u.createReadStream),u.keyStream=u.createKeyStream=s(u.createKeyStream),u.valuesStream=u.createValueStream=s(u.createValueStream)
var h=u.batch
return u.batch=function(t,e,n){return Array.isArray(t)?(t.forEach(function(t){t.prefix&&("function"==typeof t.prefix.prefix?t.key=t.prefix.prefix(t.key):"string"==typeof t.prefix&&(t.key=t.prefix+t.key))}),void h.call(u,t,e,n)):new i(u)},u}}).call(this,t("+0JsKK"))},{"+0JsKK":11,"./batch":33,"./sub":45,events:5,"level-fix-range":35,"level-hooks":37}],35:[function(t,e){var n=t("clone")
e.exports=function(t){t=n(t)
var e=t.reverse,r=t.max||t.end,i=t.min||t.start,o=[i,r]
return null!=i&&null!=r&&o.sort(),e&&(o=o.reverse()),t.start=o[0],t.end=o[1],delete t.min,delete t.max,t}},{clone:36}],36:[function(t,e){(function(t){"use strict"
function n(t){return Object.prototype.toString.call(t)}function r(e,n,r,o){function a(e,r){if(null===e)return null
if(0==r)return e
var h
if("object"!=typeof e)return e
if(i.isArray(e))h=[]
else if(i.isRegExp(e))h=new RegExp(e.source,i.getRegExpFlags(e)),e.lastIndex&&(h.lastIndex=e.lastIndex)
else if(i.isDate(e))h=new Date(e.getTime())
else{if(c&&t.isBuffer(e))return h=new t(e.length),e.copy(h),h
h=Object.create("undefined"==typeof o?Object.getPrototypeOf(e):o)}if(n){var l=s.indexOf(e)
if(-1!=l)return u[l]
s.push(e),u.push(h)}for(var f in e)h[f]=a(e[f],r-1)
return h}var s=[],u=[],c="undefined"!=typeof t
return"undefined"==typeof n&&(n=!0),"undefined"==typeof r&&(r=1/0),a(e,r)}var i={isArray:function(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===n(t)},isDate:function(t){return"object"==typeof t&&"[object Date]"===n(t)},isRegExp:function(t){return"object"==typeof t&&"[object RegExp]"===n(t)},getRegExpFlags:function(t){var e=""
return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}}
"object"==typeof e&&(e.exports=r),r.clonePrototype=function(t){if(null===t)return null
var e=function(){}
return e.prototype=t,new e}}).call(this,t("buffer").Buffer)},{buffer:2}],37:[function(t,e){var n=t("string-range")
e.exports=function(t){function e(t){return t&&("string"==typeof t?t:"string"==typeof t.prefix?t.prefix:"function"==typeof t.prefix?t.prefix():"")}function r(t){return t&&t._getKeyEncoding?t._getKeyEncoding(t):void 0}function i(t){return t&&t._getValueEncoding?t._getValueEncoding(t):void 0}function o(t,e){return function(){var n=t.indexOf(e)
return~n?(t.splice(n,1),!0):!1}}function a(t){t&&t.type&&u.forEach(function(e){e.test(t.key)&&e.hook(t)})}function s(n,o,a,s){try{o.forEach(function p(t,n){c.forEach(function(a){if(a.test(String(t.key))){var s={add:function(t,s){if("undefined"==typeof t)return this
if(t===!1)return delete o[n]
var u=e(t.prefix)||e(s)||a.prefix||""
if(u&&(t.prefix=u),t.key=u+t.key,a.safe&&a.test(String(t.key)))throw new Error("prehook cannot insert into own range")
var c=t.keyEncoding||r(t.prefix),h=t.valueEncoding||i(t.prefix)
return c&&(t.keyEncoding=c),h&&(t.valueEncoding=h),o.push(t),p(t,o.length-1),this},put:function(t,e){return"object"==typeof t&&(t.type="put"),this.add(t,e)},del:function(t,e){return"object"==typeof t&&(t.type="del"),this.add(t,e)},veto:function(){return this.add(!1)}}
a.hook.call(s,t,s.add,o)}})})}catch(u){return(s||a)(u)}if(o=o.filter(function(t){return t&&t.type}),1==o.length&&!n){var d=o[0]
return"put"==d.type?h.call(t,d.key,d.value,a,s):l.call(t,d.key,a,s)}return f.call(t,o,a,s)}if(!t.hooks){var u=[],c=[]
t.hooks={post:function(t,e){e||(e=t,t="")
var r={test:n.checker(t),hook:e}
return u.push(r),o(u,r)},pre:function(t,e){e||(e=t,t="")
var r={test:n.checker(t),hook:e,safe:!1!==t.safe}
return c.push(r),o(c,r)},posthooks:u,prehooks:c},t.on("put",function(t,e){a({type:"put",key:t,value:e})}),t.on("del",function(t,e){a({type:"del",key:t,value:e})}),t.on("batch",function(t){t.forEach(a)})
var h=t.put,l=t.del,f=t.batch
t.put=function(t,e,n,r){var i=[{key:t,value:e,type:"put"}]
return s(!1,i,n,r)},t.del=function(t,e,n){var r=[{key:t,type:"del"}]
return s(!1,r,e,n)},t.batch=function(t,e,n){return s(!0,t,e,n)}}}},{"string-range":38}],38:[function(t,e,n){{var r=n.range=function(t){return null==t?{}:"string"==typeof r?{min:r,max:r+"ÿ"}:t},i=(n.prefix=function(t,e,r){t=n.range(t)
var i={}
return r=r||"ÿ",t instanceof RegExp||"function"==typeof t?(i.min=e,i.max=e+r,i.inner=function(n){var r=n.substring(e.length)
return t.test?t.test(r):t(r)}):"object"==typeof t&&(i.min=e+(t.min||t.start||""),i.max=e+(t.max||t.end||r||"~"),i.reverse=!!t.reverse),i},n.checker=function(t){return t||(t={}),"string"==typeof t?function(e){return 0==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:"object"==typeof t?function(e){var n=t.min||t.start,r=t.max||t.end
return e=String(e),(!n||e>=n)&&(!r||r>=e)&&(!t.inner||(t.inner.test?t.inner.test(e):t.inner(e)))}:"function"==typeof t?t:void 0})
n.satisfies=function(t,e){return i(e)(t)}}},{}],39:[function(t,e){function n(t){return null!==t&&("object"==typeof t||"function"==typeof t)}e.exports=n},{}],40:[function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e]
if(i(n))for(var o=r(n),a=0;a<o.length;a++){var s=o[a]
t[s]=n[s]}}return t}var r=t("object-keys"),i=t("./has-keys")
e.exports=n},{"./has-keys":39,"object-keys":41}],41:[function(t,e){e.exports=Object.keys||t("./shim")},{"./shim":44}],42:[function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString
e.exports=function(t,e,i){if("[object Function]"!==r.call(e))throw new TypeError("iterator must be a function")
var o=t.length
if(o===+o)for(var a=0;o>a;a++)e.call(i,t[a],a,t)
else for(var s in t)n.call(t,s)&&e.call(i,t[s],s,t)}},{}],43:[function(t,e){var n=Object.prototype,r=n.hasOwnProperty,i=n.toString,o=function(t){return t!==t},a={"boolean":1,number:1,string:1,undefined:1},s=e.exports={}
s.a=s.type=function(t,e){return typeof t===e},s.defined=function(t){return void 0!==t},s.empty=function(t){var e,n=i.call(t)
if("[object Array]"===n||"[object Arguments]"===n)return 0===t.length
if("[object Object]"===n){for(e in t)if(r.call(t,e))return!1
return!0}return"[object String]"===n?""===t:!1},s.equal=function(t,e){var n,r=i.call(t)
if(r!==i.call(e))return!1
if("[object Object]"===r){for(n in t)if(!s.equal(t[n],e[n]))return!1
return!0}if("[object Array]"===r){if(n=t.length,n!==e.length)return!1
for(;--n;)if(!s.equal(t[n],e[n]))return!1
return!0}return"[object Function]"===r?t.prototype===e.prototype:"[object Date]"===r?t.getTime()===e.getTime():t===e},s.hosted=function(t,e){var n=typeof e[t]
return"object"===n?!!e[t]:!a[n]},s.instance=s["instanceof"]=function(t,e){return t instanceof e},s["null"]=function(t){return null===t},s.undefined=function(t){return void 0===t},s.arguments=function(t){var e="[object Arguments]"===i.call(t),n=!s.array(t)&&s.arraylike(t)&&s.object(t)&&s.fn(t.callee)
return e||n},s.array=function(t){return"[object Array]"===i.call(t)},s.arguments.empty=function(t){return s.arguments(t)&&0===t.length},s.array.empty=function(t){return s.array(t)&&0===t.length},s.arraylike=function(t){return!!t&&!s.boolean(t)&&r.call(t,"length")&&isFinite(t.length)&&s.number(t.length)&&t.length>=0},s.boolean=function(t){return"[object Boolean]"===i.call(t)},s["false"]=function(t){return s.boolean(t)&&(t===!1||t.valueOf()===!1)},s["true"]=function(t){return s.boolean(t)&&(t===!0||t.valueOf()===!0)},s.date=function(t){return"[object Date]"===i.call(t)},s.element=function(t){return void 0!==t&&"undefined"!=typeof HTMLElement&&t instanceof HTMLElement&&1===t.nodeType},s.error=function(t){return"[object Error]"===i.call(t)},s.fn=s["function"]=function(t){var e="undefined"!=typeof window&&t===window.alert
return e||"[object Function]"===i.call(t)},s.number=function(t){return"[object Number]"===i.call(t)},s.infinite=function(t){return 1/0===t||t===-1/0},s.decimal=function(t){return s.number(t)&&!o(t)&&!s.infinite(t)&&t%1!==0},s.divisibleBy=function(t,e){var n=s.infinite(t),r=s.infinite(e),i=s.number(t)&&!o(t)&&s.number(e)&&!o(e)&&0!==e
return n||r||i&&t%e===0},s.int=function(t){return s.number(t)&&!o(t)&&t%1===0},s.maximum=function(t,e){if(o(t))throw new TypeError("NaN is not a valid value")
if(!s.arraylike(e))throw new TypeError("second argument must be array-like")
for(var n=e.length;--n>=0;)if(t<e[n])return!1
return!0},s.minimum=function(t,e){if(o(t))throw new TypeError("NaN is not a valid value")
if(!s.arraylike(e))throw new TypeError("second argument must be array-like")
for(var n=e.length;--n>=0;)if(t>e[n])return!1
return!0},s.nan=function(t){return!s.number(t)||t!==t},s.even=function(t){return s.infinite(t)||s.number(t)&&t===t&&t%2===0},s.odd=function(t){return s.infinite(t)||s.number(t)&&t===t&&t%2!==0},s.ge=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!s.infinite(t)&&!s.infinite(e)&&t>=e},s.gt=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!s.infinite(t)&&!s.infinite(e)&&t>e},s.le=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!s.infinite(t)&&!s.infinite(e)&&e>=t},s.lt=function(t,e){if(o(t)||o(e))throw new TypeError("NaN is not a valid value")
return!s.infinite(t)&&!s.infinite(e)&&e>t},s.within=function(t,e,n){if(o(t)||o(e)||o(n))throw new TypeError("NaN is not a valid value")
if(!s.number(t)||!s.number(e)||!s.number(n))throw new TypeError("all arguments must be numbers")
var r=s.infinite(t)||s.infinite(e)||s.infinite(n)
return r||t>=e&&n>=t},s.object=function(t){return t&&"[object Object]"===i.call(t)},s.hash=function(t){return s.object(t)&&t.constructor===Object&&!t.nodeType&&!t.setInterval},s.regexp=function(t){return"[object RegExp]"===i.call(t)},s.string=function(t){return"[object String]"===i.call(t)}},{}],44:[function(t,e){!function(){"use strict"
var n,r=Object.prototype.hasOwnProperty,i=t("is"),o=t("foreach"),a=!{toString:null}.propertyIsEnumerable("toString"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
n=function(t){if(!i.object(t)&&!i.array(t))throw new TypeError("Object.keys called on a non-object")
var e,n=[]
for(e in t)r.call(t,e)&&n.push(e)
return a&&o(s,function(e){r.call(t,e)&&n.push(e)}),n},e.exports=n}()},{foreach:42,is:43}],45:[function(t,e){function n(t,e,r){if("string"==typeof r&&(console.error("db.sublevel(name, seperator<string>) is depreciated"),console.error("use db.sublevel(name, {sep: separator})) if you must"),r={sep:r}),!(this instanceof n))return new n(t,e,r)
if(!t)throw new Error("must provide db")
if(!e)throw new Error("must provide prefix")
r=r||{},r.sep=r.sep||"ÿ",this._parent=t,this._options=r,this.options=r,this._prefix=e,this._root=i(this),t.sublevels[e]=this,this.sublevels={},this.methods={}
var o=this
this.hooks={pre:function(){return o.pre.apply(o,arguments)},post:function(){return o.post.apply(o,arguments)}}}function r(t,e){["valueEncoding","encoding","keyEncoding","reverse","values","keys","limit","fillCache"].forEach(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})}function i(t){return t._parent?i(t._parent):t}var o=t("events").EventEmitter,a=t("util").inherits,s=t("string-range"),u=t("level-fix-range"),c=t("xtend"),h=t("./batch")
a(n,o)
var l=n.prototype
l._key=function(t){var e=this._options.sep
return e+this._prefix+e+t},l._getOptsAndCb=function(t,e){return"function"==typeof t&&(e=t,t={}),{opts:c(t,this._options),cb:e}},l.sublevel=function(t,e){return this.sublevels[t]?this.sublevels[t]:new n(this,t,e||this._options)},l.put=function(t,e,n,r){var i=this._getOptsAndCb(n,r)
this._root.put(this.prefix(t),e,i.opts,i.cb)},l.get=function(t,e,n){var r=this._getOptsAndCb(e,n)
this._root.get(this.prefix(t),r.opts,r.cb)},l.del=function(t,e,n){var r=this._getOptsAndCb(e,n)
this._root.del(this.prefix(t),r.opts,r.cb)},l.batch=function(t,e,n){if(!Array.isArray(t))return new h(this)
var r=this,i=this._getOptsAndCb(e,n)
t.forEach(function(t){t.key="string"==typeof t.prefix?t.prefix+t.key:(t.prefix||r).prefix(t.key),t.prefix&&(t.prefix=null)}),this._root.batch(t,i.opts,i.cb)},l._getKeyEncoding=function(){return this.options.keyEncoding?this.options.keyEncoding:this._parent&&this._parent._getKeyEncoding?this._parent._getKeyEncoding():void 0},l._getValueEncoding=function(){return this.options.valueEncoding?this.options.valueEncoding:this._parent&&this._parent._getValueEncoding?this._parent._getValueEncoding():void 0},l.prefix=function(t){var e=this._options.sep
return this._parent.prefix()+e+this._prefix+e+(t||"")},l.keyStream=l.createKeyStream=function(t){return t=t||{},t.keys=!0,t.values=!1,this.createReadStream(t)},l.valueStream=l.createValueStream=function(t){return t=t||{},t.keys=!1,t.values=!0,t.keys=!1,this.createReadStream(t)},l.readStream=l.createReadStream=function(t){t=t||{}
var e=i(this),n=this.prefix(),o=s.prefix(t,n)
r(o,c(t,this._options))
var a=e.createReadStream(o)
if(o.values===!1){var u=a.read
if(u)a.read=function(t){var e=u.call(this,t)
return e&&(e=e.substring(n.length)),e}
else{var h=a.emit
a.emit=function(t,e){"data"===t?h.call(this,"data",e.substring(n.length)):h.call(this,t,e)}}return a}if(o.keys===!1)return a
var u=a.read
return u?a.read=function(t){var e=u.call(this,t)
return e&&(e.key=e.key.substring(n.length)),e}:a.on("data",function(t){t.key=t.key.substring(n.length)}),a},l.writeStream=l.createWriteStream=function(){var t=i(this),e=this.prefix(),n=t.createWriteStream.apply(t,arguments),r=n.write,o=this._options.encoding,a=this._options.valueEncoding,s=this._options.keyEncoding,u=!o&&!a&&!s
return n.write=u?function(t){return t.key=e+t.key,r.call(n,t)}:function(t){return t.key=e+t.key,o&&"undefined"==typeof t.encoding&&(t.encoding=o),a&&"undefined"==typeof t.valueEncoding&&(t.valueEncoding=a),s&&"undefined"==typeof t.keyEncoding&&(t.keyEncoding=s),r.call(n,t)},n},l.approximateSize=function(){var t=i(db)
return t.approximateSize.apply(t,arguments)},l.pre=function(t,e){e||(e=t,t=null),t=s.prefix(t,this.prefix(),this._options.sep)
var n=i(this._parent),r=this.prefix()
return n.hooks.pre(u(t),function(t,n,i){e({key:t.key.substring(r.length),value:t.value,type:t.type},function(t,e){n(t,t.prefix?e:e||r)},i)})},l.post=function(t,e){e||(e=t,t=null)
var n=i(this._parent),r=this.prefix()
return t=s.prefix(t,r,this._options.sep),n.hooks.post(u(t),function(t){e({key:t.key.substring(r.length),value:t.value,type:t.type})})}
e.exports=n},{"./batch":33,events:5,"level-fix-range":35,"string-range":38,util:32,xtend:40}],46:[function(t,e){function n(t,e){this._levelup=t,this._codec=e,this.batch=t.db.batch(),this.ops=[]}var r=t("./util"),i=t("./errors").WriteError,o=r.getOptions,a=r.dispatchError
n.prototype.put=function(t,e,n){n=o(this._levelup,n)
var r=this._codec.encodeKey(t,n),a=this._codec.encodeValue(e,n)
try{this.batch.put(r,a)}catch(s){throw new i(s)}return this.ops.push({type:"put",key:r,value:a}),this},n.prototype.del=function(t,e){e=o(this._levelup,e)
var n=this._codec.encodeKey(t,e)
try{this.batch.del(n)}catch(r){throw new i(r)}return this.ops.push({type:"del",key:n}),this},n.prototype.clear=function(){try{this.batch.clear()}catch(t){throw new i(t)}return this.ops=[],this},n.prototype.write=function(t){var e=this._levelup,n=this.ops
try{this.batch.write(function(r){return r?a(e,new i(r),t):(e.emit("batch",n),void(t&&t()))})}catch(r){throw new i(r)}},e.exports=n},{"./errors":49,"./util":52}],47:[function(t,e){function n(t,e){var n=e&&e.keyEncoding||t.keyEncoding||"utf8"
return h[n]||n}function r(t,e){var n=e&&(e.valueEncoding||e.encoding)||t.valueEncoding||t.encoding||"utf8"
return h[n]||n}function i(t,e,r){return n(e,r).encode(t)}function o(t,e,n){return r(e,n).encode(t)}function a(t,e){return n(e).decode(t)}function s(t,e){return r(e).decode(t)}function u(t,e){return r(t,e).buffer}function c(t,e){return n(t,e).buffer}var h=t("./encodings")
e.exports={encodeKey:i,encodeValue:o,isValueAsBuffer:u,isKeyAsBuffer:c,decodeValue:s,decodeKey:a}},{"./encodings":48}],48:[function(t,e){(function(t){var n=["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le"]
e.exports=function(){function e(e){return void 0===e||null===e||t.isBuffer(e)}var r={}
return r.utf8=r["utf-8"]={encode:function(t){return e(t)?t:String(t)},decode:function(t){return t},buffer:!1,type:"utf8"},r.json={encode:JSON.stringify,decode:JSON.parse,buffer:!1,type:"json"},r.binary={encode:function(n){return e(n)?n:new t(n)},decode:function(t){return t},buffer:!0,type:"binary"},n.forEach(function(n){r[n]||(r[n]={encode:function(r){return e(r)?r:new t(r,n)},decode:function(t){return t.toString(n)},buffer:!0,type:n})}),r}()}).call(this,t("buffer").Buffer)},{buffer:2}],49:[function(t,e){var n=t("errno").create,r=n("LevelUPError"),i=n("NotFoundError",r)
i.prototype.notFound=!0,i.prototype.status=404,e.exports={LevelUPError:r,InitializationError:n("InitializationError",r),OpenError:n("OpenError",r),ReadError:n("ReadError",r),WriteError:n("WriteError",r),NotFoundError:i,EncodingError:n("EncodingError",r)}},{errno:60}],50:[function(t,e){(function(n){function r(t,e){return"function"==typeof t?t:e}function i(t,e,r){if(!(this instanceof i))return new i(t,e,r)
var o
if(c.call(this),this.setMaxListeners(1/0),"function"==typeof t?(e="object"==typeof e?e:{},e.db=t,t=null):"object"==typeof t&&"function"==typeof t.db&&(e=t,t=null),"function"==typeof e&&(r=e,e={}),(!e||"function"!=typeof e.db)&&"string"!=typeof t){if(o=new b("Must provide a location for the database"),r)return n.nextTick(function(){r(o)})
throw o}e=S(this,e),this.options=l(O,e),this._codec=e.codec||k,this._status="new",f(this,"location",t,"e"),this.open(r)}function o(t,e,n){return t._isOpening()||t.isOpen()?void 0:(A(t,new g("Database is not open"),n),!0)}function a(t,e,n){A(t,new p(e),n)}function s(t,e,n){return A(t,new g(e),n),!0}function u(t){return function(e,n){T()[t](e,n||function(){})}}var c=t("events").EventEmitter,h=t("util").inherits,l=t("xtend"),f=t("prr"),d=t("deferred-leveldown"),p=t("./errors").WriteError,g=t("./errors").ReadError,v=t("./errors").NotFoundError,m=t("./errors").OpenError,y=t("./errors").EncodingError,b=t("./errors").InitializationError,w=t("./read-stream"),E=t("./write-stream"),_=t("./util"),x=t("./batch"),k=t("./codec"),S=_.getOptions,O=_.defaultOptions,T=_.getLevelDOWN,A=_.dispatchError,N=_.isDefined
h(i,c),i.prototype.open=function(t){var e,r,i=this
return this.isOpen()?(t&&n.nextTick(function(){t(null,i)}),this):this._isOpening()?t&&this.once("open",function(){t(null,i)}):(this.emit("opening"),this._status="opening",this.db=new d(this.location),e=this.options.db||T(),r=e(this.location),void r.open(this.options,function(e){return e?A(i,new m(e),t):(i.db.setDb(r),i.db=r,i._status="open",t&&t(null,i),i.emit("open"),i.emit("ready"),void 0)}))},i.prototype.close=function(t){var e=this
if(this.isOpen())this._status="closing",this.db.close(function(){e._status="closed",e.emit("closed"),t&&t.apply(null,arguments)}),this.emit("closing"),this.db=null
else{if("closed"==this._status&&t)return n.nextTick(t)
"closing"==this._status&&t?this.once("closed",t):this._isOpening()&&this.once("open",function(){e.close(t)})}},i.prototype.isOpen=function(){return"open"==this._status},i.prototype._isOpening=function(){return"opening"==this._status},i.prototype.isClosed=function(){return/^clos/.test(this._status)},i.prototype.get=function(t,e,n){var i,a=this
if(n=r(e,n),!o(this,e,n)){if(null===t||void 0===t||"function"!=typeof n)return s(this,"get() requires key and callback arguments",n)
e=_.getOptions(this,e),i=this._codec.encodeKey(t,e),e.asBuffer=this._codec.isValueAsBuffer(e),this.db.get(i,e,function(r,i){if(r)return r=/notfound/i.test(r)?new v("Key not found in database ["+t+"]",r):new g(r),A(a,r,n)
if(n){try{i=a._codec.decodeValue(i,e)}catch(o){return n(new y(o))}n(null,i)}})}},i.prototype.put=function(t,e,n,i){var s,u,c=this
return i=r(n,i),null===t||void 0===t||null===e||void 0===e?a(this,"put() requires key and value arguments",i):void(o(this,n,i)||(n=S(this,n),s=this._codec.encodeKey(t,n),u=this._codec.encodeValue(e,n),this.db.put(s,u,n,function(n){return n?A(c,new p(n),i):(c.emit("put",t,e),void(i&&i()))})))},i.prototype.del=function(t,e,n){var i,s=this
return n=r(e,n),null===t||void 0===t?a(this,"del() requires a key argument",n):void(o(this,e,n)||(e=S(this,e),i=this._codec.encodeKey(t,e),this.db.del(i,e,function(e){return e?A(s,new p(e),n):(s.emit("del",t),void(n&&n()))})))},i.prototype.batch=function(t,e,n){var i,s,u,c=this
return arguments.length?(n=r(e,n),Array.isArray(t)?void(o(this,e,n)||(e=S(this,e),i=e.keyEncoding,s=e.valueEncoding,u=t.map(function(t){if(void 0===t.type||void 0===t.key)return{}
var n,r=t.keyEncoding||i,o=t.valueEncoding||t.encoding||s
return"utf8"!=r&&"binary"!=r||"utf8"!=o&&"binary"!=o?(n={type:t.type,key:c._codec.encodeKey(t.key,e,t)},void 0!==t.value&&(n.value=c._codec.encodeValue(t.value,e,t)),n):t}),this.db.batch(u,e,function(e){return e?A(c,new p(e),n):(c.emit("batch",t),void(n&&n()))}))):a(this,"batch() requires an array argument",n)):new x(this,k)},i.prototype.approximateSize=function(t,e,n,i){var o,a,u=this
return i=r(n,i),n=S(n,i),null===t||void 0===t||null===e||void 0===e||"function"!=typeof i?s(this,"approximateSize() requires start, end and callback arguments",i):(o=this._codec.encodeKey(t,this.options),a=this._codec.encodeKey(e,this.options),void this.db.approximateSize(o,a,function(t,e){return t?A(u,new m(t),i):void(i&&i(null,e))}))},i.prototype.readStream=i.prototype.createReadStream=function(t){var e=this
t=l({keys:!0,values:!0},this.options,t),t.keyEncoding=t.keyEncoding||t.encoding,t.valueEncoding=t.valueEncoding||t.encoding,N(t.start)&&(t.start=this._codec.encodeKey(t.start,t)),N(t.end)&&(t.end=this._codec.encodeKey(t.end,t)),N(t.gte)&&(t.gte=this._codec.encodeKey(t.gte,t)),N(t.gt)&&(t.gt=this._codec.encodeKey(t.gt,t)),N(t.lte)&&(t.lte=this._codec.encodeKey(t.lte,t)),N(t.lt)&&(t.lt=this._codec.encodeKey(t.lt,t)),"number"!=typeof t.limit&&(t.limit=-1),t.keyAsBuffer=this._codec.isKeyAsBuffer(t),t.valueAsBuffer=this._codec.isValueAsBuffer(t)
var n=t.keys&&t.values?function(n,r){return{key:e._codec.decodeKey(n,t),value:e._codec.decodeValue(r,t)}}:t.keys?function(n){return e._codec.decodeKey(n,t)}:t.values?function(n,r){return e._codec.decodeValue(r,t)}:function(){},r=new w(t,n)
return this.isOpen()?r.setIterator(e.db.iterator(t)):this.once("ready",function(){r.setIterator(e.db.iterator(t))}),r},i.prototype.keyStream=i.prototype.createKeyStream=function(t){return this.createReadStream(l(t,{keys:!0,values:!1}))},i.prototype.valueStream=i.prototype.createValueStream=function(t){return this.createReadStream(l(t,{keys:!1,values:!0}))},i.prototype.writeStream=i.prototype.createWriteStream=function(t){return new E(l(t),this)},i.prototype.toString=function(){return"LevelUP"},e.exports=i,e.exports.copy=_.copy,e.exports.destroy=u("destroy"),e.exports.repair=u("repair")}).call(this,t("+0JsKK"))},{"+0JsKK":11,"./batch":46,"./codec":47,"./errors":49,"./read-stream":51,"./util":52,"./write-stream":53,"deferred-leveldown":55,events:5,prr:61,util:32,xtend:72}],51:[function(t,e){function n(t,e){return this instanceof n?(r.call(this,{objectMode:!0,highWaterMark:t.highWaterMark}),this._waiting=!1,this._options=t,void(this._makeData=e)):new n(t,e)}{var r=t("readable-stream").Readable,i=t("util").inherits,o=(t("xtend"),t("./errors").EncodingError)
t("./util")}i(n,r),n.prototype.setIterator=function(t){return this._iterator=t,this._destroyed?t.end(function(){}):this._waiting?(this._waiting=!1,this._read()):this},n.prototype._read=function(){var t=this
if(!t._destroyed)return t._iterator?void t._iterator.next(function(e,n,r){if(e||void 0===n&&void 0===r)return e||t._destroyed||t.push(null),t._cleanup(e)
try{r=t._makeData(n,r)}catch(i){return t._cleanup(new o(i))}t._destroyed||t.push(r)}):this._waiting=!0},n.prototype._cleanup=function(t){if(!this._destroyed){this._destroyed=!0
var e=this
t&&e.emit("error",t),e._iterator?e._iterator.end(function(){e._iterator=null,e.emit("close")}):e.emit("close")}},n.prototype.destroy=function(){this._cleanup()},n.prototype.toString=function(){return"LevelUP.ReadStream"},e.exports=n},{"./errors":49,"./util":52,"readable-stream":71,util:32,xtend:72}],52:[function(t,e){function n(t,e,n){t.readStream().pipe(e.writeStream()).on("close",n?n:function(){}).on("error",n?n:function(t){throw t})}function r(t,e){var n="string"==typeof e
return!n&&e&&e.encoding&&!e.valueEncoding&&(e.valueEncoding=e.encoding),u(t&&t.options||{},n?f[e]||f[l.valueEncoding]:e)}function i(){if(s)return s
var e,n=t("../package.json").devDependencies.leveldown,r="Could not locate LevelDOWN, try `npm install leveldown`"
try{e=t("leveldown/package").version}catch(i){throw new c(r)}if(!t("semver").satisfies(e,n))throw new c("Installed version of LevelDOWN ("+e+") does not match required version ("+n+")")
try{return s=t("leveldown")}catch(i){throw new c(r)}}function o(t,e,n){return"function"==typeof n?n(e):t.emit("error",e)}function a(t){return"undefined"!=typeof t}var s,u=t("xtend"),c=t("./errors").LevelUPError,h=t("./encodings"),l={createIfMissing:!0,errorIfExists:!1,keyEncoding:"utf8",valueEncoding:"utf8",compression:!0},f=function(){var t={}
for(var e in h)t[e]={valueEncoding:h[e]}
return t}()
e.exports={defaultOptions:l,copy:n,getOptions:r,getLevelDOWN:i,dispatchError:o,isDefined:a}},{"../package.json":73,"./encodings":48,"./errors":49,leveldown:1,"leveldown/package":1,semver:1,xtend:72}],53:[function(t,e){(function(n,r){function i(t,e){if(!(this instanceof i))return new i(t,e)
o.call(this),this._options=s(l,h(e,t)),this._db=e,this._buffer=[],this._status="init",this._end=!1,this.writable=!0,this.readable=!1
var n=this,r=function(){n.writable&&(n._status="ready",n.emit("ready"),n._process())}
e.isOpen()?c(r):e.once("ready",r)}var o=t("stream").Stream,a=t("util").inherits,s=t("xtend"),u=t("bl"),c=r.setImmediate||n.nextTick,h=t("./util").getOptions,l={type:"put"}
a(i,o),i.prototype.write=function(t){return this.writable?(this._buffer.push(t),"init"!=this._status&&this._processDelayed(),this._options.maxBufferLength&&this._buffer.length>this._options.maxBufferLength?(this._writeBlock=!0,!1):!0):!1},i.prototype.end=function(t){var e=this
t&&this.write(t),c(function(){e._end=!0,e._process()})},i.prototype.destroy=function(){this.writable=!1,this.end()},i.prototype.destroySoon=function(){this.end()},i.prototype.add=function(t){return t.props?(t.props.Directory?t.pipe(this._db.writeStream(this._options)):(t.props.File||t.File||"File"==t.type)&&this._write(t),!0):void 0},i.prototype._processDelayed=function(){var t=this
c(function(){t._process()})},i.prototype._process=function(){var t,e=this,n=function(t){return e.writable?("closed"!=e._status&&(e._status="ready"),t?(e.writable=!1,e.emit("error",t)):void e._process()):void 0}
return"ready"!=e._status&&e.writable?void(e._buffer.length&&"closed"!=e._status&&e._processDelayed()):e._buffer.length&&e.writable?(e._status="writing",t=e._buffer,e._buffer=[],e._db.batch(t.map(function(t){return{type:t.type||e._options.type,key:t.key,value:t.value,keyEncoding:t.keyEncoding||e._options.keyEncoding,valueEncoding:t.valueEncoding||t.encoding||e._options.valueEncoding}}),n),void(e._writeBlock&&(e._writeBlock=!1,e.emit("drain")))):void(e._end&&"closed"!=e._status&&(e._status="closed",e.writable=!1,e.emit("close")))},i.prototype._write=function(t){var e=t.path||t.props.path,n=this
e&&t.pipe(u(function(t,r){return t?(n.writable=!1,n.emit("error",t)):(n._options.fstreamRoot&&e.indexOf(n._options.fstreamRoot)>-1&&(e=e.substr(n._options.fstreamRoot.length+1)),void n.write({key:e,value:r.slice(0)}))}))},i.prototype.toString=function(){return"LevelUP.WriteStream"},e.exports=i}).call(this,t("+0JsKK"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"+0JsKK":11,"./util":52,bl:54,stream:29,util:32,xtend:72}],54:[function(t,e){(function(n){function r(t){if(!(this instanceof r))return new r(t)
if(this._bufs=[],this.length=0,"function"==typeof t){this._callback=t
var e=function(t){this._callback&&(this._callback(t),this._callback=null)}.bind(this)
this.on("pipe",function(t){t.on("error",e)}),this.on("unpipe",function(t){t.removeListener("error",e)})}else n.isBuffer(t)?this.append(t):Array.isArray(t)&&t.forEach(function(t){n.isBuffer(t)&&this.append(t)}.bind(this))
i.call(this)}var i=t("readable-stream").Duplex,o=t("util")
o.inherits(r,i),r.prototype._offset=function(t){for(var e,n=0,r=0;r<this._bufs.length;r++){if(e=n+this._bufs[r].length,e>t)return[r,t-n]
n=e}},r.prototype.append=function(t){return this._bufs.push(n.isBuffer(t)?t:new n(t)),this.length+=t.length,this},r.prototype._write=function(t,e,n){this.append(t),n&&n()},r.prototype._read=function(t){return this.length?(t=Math.min(t,this.length),this.push(this.slice(0,t)),void this.consume(t)):this.push(null)},r.prototype.end=function(t){i.prototype.end.call(this,t),this._callback&&(this._callback(null,this.slice()),this._callback=null)},r.prototype.get=function(t){return this.slice(t,t+1)[0]},r.prototype.slice=function(t,e){return this.copy(null,0,t,e)},r.prototype.copy=function(t,e,r,i){if(("number"!=typeof r||0>r)&&(r=0),("number"!=typeof i||i>this.length)&&(i=this.length),r>=this.length)return t||new n(0)
if(0>=i)return t||new n(0)
var o,a,s=!!t,u=this._offset(r),c=i-r,h=c,l=s&&e||0,f=u[1]
if(0===r&&i==this.length){if(!s)return n.concat(this._bufs)
for(a=0;a<this._bufs.length;a++)this._bufs[a].copy(t,l),l+=this._bufs[a].length
return t}if(h<=this._bufs[u[0]].length-f)return s?this._bufs[u[0]].copy(t,e,f,f+h):this._bufs[u[0]].slice(f,f+h)
for(s||(t=new n(c)),a=u[0];a<this._bufs.length;a++){if(o=this._bufs[a].length-f,!(h>o)){this._bufs[a].copy(t,l,f,f+h)
break}this._bufs[a].copy(t,l,f),l+=o,h-=o,f&&(f=0)}return t},r.prototype.toString=function(t,e,n){return this.slice(e,n).toString(t)},r.prototype.consume=function(t){for(;this._bufs.length;){if(!(t>this._bufs[0].length)){this._bufs[0]=this._bufs[0].slice(t),this.length-=t
break}t-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift()}return this},r.prototype.duplicate=function(){for(var t=0,e=new r;t<this._bufs.length;t++)e.append(this._bufs[t])
return e},r.prototype.destroy=function(){this._bufs.length=0,this.length=0,this.push(null)},function(){var t={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1}
for(var e in t)!function(e){r.prototype[e]=function(n){return this.slice(n,n+t[e])[e](0)}}(e)}(),e.exports=r}).call(this,t("buffer").Buffer)},{buffer:2,"readable-stream":71,util:32}],55:[function(t,e){(function(n,r){function i(t){a.call(this,"string"==typeof t?t:""),this._db=void 0,this._operations=[]}var o=t("util"),a=t("abstract-leveldown").AbstractLevelDOWN
o.inherits(i,a),i.prototype.setDb=function(t){this._db=t,this._operations.forEach(function(e){t[e.method].apply(t,e.args)})},i.prototype._open=function(t,e){return n.nextTick(e)},i.prototype._operation=function(t,e){return this._db?this._db[t].apply(this._db,e):void this._operations.push({method:t,args:e})},"put get del batch approximateSize".split(" ").forEach(function(t){i.prototype["_"+t]=function(){this._operation(t,arguments)}}),i.prototype._isBuffer=function(t){return r.isBuffer(t)},i.prototype._iterator=function(){throw new TypeError("not implemented")},e.exports=i}).call(this,t("+0JsKK"),t("buffer").Buffer)},{"+0JsKK":11,"abstract-leveldown":58,buffer:2,util:32}],56:[function(t,e){(function(t){function n(t){this._db=t,this._operations=[],this._written=!1}n.prototype._checkWritten=function(){if(this._written)throw new Error("write() already called on this batch")},n.prototype.put=function(t,e){this._checkWritten()
var n=this._db._checkKeyValue(t,"key",this._db._isBuffer)
if(n)throw n
if(n=this._db._checkKeyValue(e,"value",this._db._isBuffer))throw n
return this._db._isBuffer(t)||(t=String(t)),this._db._isBuffer(e)||(e=String(e)),"function"==typeof this._put?this._put(t,e):this._operations.push({type:"put",key:t,value:e}),this},n.prototype.del=function(t){this._checkWritten()
var e=this._db._checkKeyValue(t,"key",this._db._isBuffer)
if(e)throw e
return this._db._isBuffer(t)||(t=String(t)),"function"==typeof this._del?this._del(t):this._operations.push({type:"del",key:t}),this},n.prototype.clear=function(){return this._checkWritten(),this._operations=[],"function"==typeof this._clear&&this._clear(),this},n.prototype.write=function(e,n){if(this._checkWritten(),"function"==typeof e&&(n=e),"function"!=typeof n)throw new Error("write() requires a callback argument")
return"object"!=typeof e&&(e={}),this._written=!0,"function"==typeof this._write?this._write(n):"function"==typeof this._db._batch?this._db._batch(this._operations,e,n):void t.nextTick(n)},e.exports=n}).call(this,t("+0JsKK"))},{"+0JsKK":11}],57:[function(t,e){(function(t){function n(t){this.db=t,this._ended=!1,this._nexting=!1}n.prototype.next=function(e){var n=this
if("function"!=typeof e)throw new Error("next() requires a callback argument")
return n._ended?e(new Error("cannot call next() after end()")):n._nexting?e(new Error("cannot call next() before previous next() has completed")):(n._nexting=!0,"function"==typeof n._next?n._next(function(){n._nexting=!1,e.apply(null,arguments)}):void t.nextTick(function(){n._nexting=!1,e()}))},n.prototype.end=function(e){if("function"!=typeof e)throw new Error("end() requires a callback argument")
return this._ended?e(new Error("end() already called on iterator")):(this._ended=!0,"function"==typeof this._end?this._end(e):void t.nextTick(e))},e.exports=n}).call(this,t("+0JsKK"))},{"+0JsKK":11}],58:[function(t,e){(function(n,r){function i(t){if(!arguments.length||void 0===t)throw new Error("constructor requires at least a location argument")
if("string"!=typeof t)throw new Error("constructor requires a location string argument")
this.location=t}var o=t("xtend"),a=t("./abstract-iterator"),s=t("./abstract-chained-batch")
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
for(var i,o,a=0,s=t.length;s>a;a++)if(i=t[a],"object"==typeof i){if(o=this._checkKeyValue(i.type,"type",this._isBuffer))return r(o)
if(o=this._checkKeyValue(i.key,"key",this._isBuffer))return r(o)
if("put"==i.type&&(o=this._checkKeyValue(i.value,"value",this._isBuffer)))return r(o)}return"function"==typeof this._batch?this._batch(t,e,r):void n.nextTick(r)},i.prototype.approximateSize=function(t,e,r){if(null==t||null==e||"function"==typeof t||"function"==typeof e)throw new Error("approximateSize() requires valid `start`, `end` and `callback` arguments")
if("function"!=typeof r)throw new Error("approximateSize() requires a callback argument")
return this._isBuffer(t)||(t=String(t)),this._isBuffer(e)||(e=String(e)),"function"==typeof this._approximateSize?this._approximateSize(t,e,r):void n.nextTick(function(){r(null,0)})},i.prototype._setupIteratorOptions=function(t){var e=this
return t=o(t),["start","end","gt","gte","lt","lte"].forEach(function(n){t[n]&&e._isBuffer(t[n])&&0===t[n].length&&delete t[n]}),t.reverse=!!t.reverse,t.reverse&&t.lt&&(t.start=t.lt),t.reverse&&t.lte&&(t.start=t.lte),!t.reverse&&t.gt&&(t.start=t.gt),!t.reverse&&t.gte&&(t.start=t.gte),(t.reverse&&t.lt&&!t.lte||!t.reverse&&t.gt&&!t.gte)&&(t.exclusiveStart=!0),t},i.prototype.iterator=function(t){return"object"!=typeof t&&(t={}),t=this._setupIteratorOptions(t),"function"==typeof this._iterator?this._iterator(t):new a(this)},i.prototype._chainedBatch=function(){return new s(this)},i.prototype._isBuffer=function(t){return r.isBuffer(t)},i.prototype._checkKeyValue=function(t,e){if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(this._isBuffer(t)){if(0===t.length)return new Error(e+" cannot be an empty Buffer")}else if(""===String(t))return new Error(e+" cannot be an empty String")},e.exports.AbstractLevelDOWN=i,e.exports.AbstractIterator=a,e.exports.AbstractChainedBatch=s}).call(this,t("+0JsKK"),t("buffer").Buffer)},{"+0JsKK":11,"./abstract-chained-batch":56,"./abstract-iterator":57,buffer:2,xtend:72}],59:[function(t,e){function n(t,e,n){o(this,{type:t,name:t,cause:"string"!=typeof e?e:n,message:e&&"string"!=typeof e?e.message:e},"ewr")}function r(t,e){Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee),n.call(this,"CustomError",t,e)}function i(t,e,i){var o=function(r,i){n.call(this,e,r,i),"FilesystemError"==e&&(this.code=this.cause.code,this.path=this.cause.path,this.errno=this.cause.errno,this.message=(t.errno[this.cause.errno]?t.errno[this.cause.errno].description:this.cause.message)+(this.cause.path?" ["+this.cause.path+"]":"")),Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee)}
return o.prototype=i?new i:new r,o}var o=t("prr")
r.prototype=new Error,e.exports=function(t){var e=function(e,n){return i(t,e,n)}
return{CustomError:r,FilesystemError:e("FilesystemError"),createError:e}}},{prr:61}],60:[function(t,e){var n=e.exports.all=[{errno:-1,code:"UNKNOWN",description:"unknown error"},{errno:0,code:"OK",description:"success"},{errno:1,code:"EOF",description:"end of file"},{errno:2,code:"EADDRINFO",description:"getaddrinfo error"},{errno:3,code:"EACCES",description:"permission denied"},{errno:4,code:"EAGAIN",description:"resource temporarily unavailable"},{errno:5,code:"EADDRINUSE",description:"address already in use"},{errno:6,code:"EADDRNOTAVAIL",description:"address not available"},{errno:7,code:"EAFNOSUPPORT",description:"address family not supported"},{errno:8,code:"EALREADY",description:"connection already in progress"},{errno:9,code:"EBADF",description:"bad file descriptor"},{errno:10,code:"EBUSY",description:"resource busy or locked"},{errno:11,code:"ECONNABORTED",description:"software caused connection abort"},{errno:12,code:"ECONNREFUSED",description:"connection refused"},{errno:13,code:"ECONNRESET",description:"connection reset by peer"},{errno:14,code:"EDESTADDRREQ",description:"destination address required"},{errno:15,code:"EFAULT",description:"bad address in system call argument"},{errno:16,code:"EHOSTUNREACH",description:"host is unreachable"},{errno:17,code:"EINTR",description:"interrupted system call"},{errno:18,code:"EINVAL",description:"invalid argument"},{errno:19,code:"EISCONN",description:"socket is already connected"},{errno:20,code:"EMFILE",description:"too many open files"},{errno:21,code:"EMSGSIZE",description:"message too long"},{errno:22,code:"ENETDOWN",description:"network is down"},{errno:23,code:"ENETUNREACH",description:"network is unreachable"},{errno:24,code:"ENFILE",description:"file table overflow"},{errno:25,code:"ENOBUFS",description:"no buffer space available"},{errno:26,code:"ENOMEM",description:"not enough memory"},{errno:27,code:"ENOTDIR",description:"not a directory"},{errno:28,code:"EISDIR",description:"illegal operation on a directory"},{errno:29,code:"ENONET",description:"machine is not on the network"},{errno:31,code:"ENOTCONN",description:"socket is not connected"},{errno:32,code:"ENOTSOCK",description:"socket operation on non-socket"},{errno:33,code:"ENOTSUP",description:"operation not supported on socket"},{errno:34,code:"ENOENT",description:"no such file or directory"},{errno:35,code:"ENOSYS",description:"function not implemented"},{errno:36,code:"EPIPE",description:"broken pipe"},{errno:37,code:"EPROTO",description:"protocol error"},{errno:38,code:"EPROTONOSUPPORT",description:"protocol not supported"},{errno:39,code:"EPROTOTYPE",description:"protocol wrong type for socket"},{errno:40,code:"ETIMEDOUT",description:"connection timed out"},{errno:41,code:"ECHARSET",description:"invalid Unicode character"},{errno:42,code:"EAIFAMNOSUPPORT",description:"address family for hostname not supported"},{errno:44,code:"EAISERVICE",description:"servname not supported for ai_socktype"},{errno:45,code:"EAISOCKTYPE",description:"ai_socktype not supported"},{errno:46,code:"ESHUTDOWN",description:"cannot send after transport endpoint shutdown"},{errno:47,code:"EEXIST",description:"file already exists"},{errno:48,code:"ESRCH",description:"no such process"},{errno:49,code:"ENAMETOOLONG",description:"name too long"},{errno:50,code:"EPERM",description:"operation not permitted"},{errno:51,code:"ELOOP",description:"too many symbolic links encountered"},{errno:52,code:"EXDEV",description:"cross-device link not permitted"},{errno:53,code:"ENOTEMPTY",description:"directory not empty"},{errno:54,code:"ENOSPC",description:"no space left on device"},{errno:55,code:"EIO",description:"i/o error"},{errno:56,code:"EROFS",description:"read-only file system"},{errno:57,code:"ENODEV",description:"no such device"},{errno:58,code:"ESPIPE",description:"invalid seek"},{errno:59,code:"ECANCELED",description:"operation canceled"}]
e.exports.errno={"-1":n[0],0:n[1],1:n[2],2:n[3],3:n[4],4:n[5],5:n[6],6:n[7],7:n[8],8:n[9],9:n[10],10:n[11],11:n[12],12:n[13],13:n[14],14:n[15],15:n[16],16:n[17],17:n[18],18:n[19],19:n[20],20:n[21],21:n[22],22:n[23],23:n[24],24:n[25],25:n[26],26:n[27],27:n[28],28:n[29],29:n[30],31:n[31],32:n[32],33:n[33],34:n[34],35:n[35],36:n[36],37:n[37],38:n[38],39:n[39],40:n[40],41:n[41],42:n[42],44:n[43],45:n[44],46:n[45],47:n[46],48:n[47],49:n[48],50:n[49],51:n[50],52:n[51],53:n[52],54:n[53],55:n[54],56:n[55],57:n[56],58:n[57],59:n[58]},e.exports.code={UNKNOWN:n[0],OK:n[1],EOF:n[2],EADDRINFO:n[3],EACCES:n[4],EAGAIN:n[5],EADDRINUSE:n[6],EADDRNOTAVAIL:n[7],EAFNOSUPPORT:n[8],EALREADY:n[9],EBADF:n[10],EBUSY:n[11],ECONNABORTED:n[12],ECONNREFUSED:n[13],ECONNRESET:n[14],EDESTADDRREQ:n[15],EFAULT:n[16],EHOSTUNREACH:n[17],EINTR:n[18],EINVAL:n[19],EISCONN:n[20],EMFILE:n[21],EMSGSIZE:n[22],ENETDOWN:n[23],ENETUNREACH:n[24],ENFILE:n[25],ENOBUFS:n[26],ENOMEM:n[27],ENOTDIR:n[28],EISDIR:n[29],ENONET:n[30],ENOTCONN:n[31],ENOTSOCK:n[32],ENOTSUP:n[33],ENOENT:n[34],ENOSYS:n[35],EPIPE:n[36],EPROTO:n[37],EPROTONOSUPPORT:n[38],EPROTOTYPE:n[39],ETIMEDOUT:n[40],ECHARSET:n[41],EAIFAMNOSUPPORT:n[42],EAISERVICE:n[43],EAISOCKTYPE:n[44],ESHUTDOWN:n[45],EEXIST:n[46],ESRCH:n[47],ENAMETOOLONG:n[48],EPERM:n[49],ELOOP:n[50],EXDEV:n[51],ENOTEMPTY:n[52],ENOSPC:n[53],EIO:n[54],EROFS:n[55],ENODEV:n[56],ESPIPE:n[57],ECANCELED:n[58]},e.exports.custom=t("./custom")(e.exports),e.exports.create=e.exports.custom.createError},{"./custom":59}],61:[function(t,e){!function(t,n,r){"undefined"!=typeof e&&e.exports?e.exports=r():n[t]=r()}("prr",this,function(){var t="function"==typeof Object.defineProperty?function(t,e,n){return Object.defineProperty(t,e,n),t}:function(t,e,n){return t[e]=n.value,t},e=function(t,e){var n="object"==typeof e,r=!n&&"string"==typeof e,i=function(t){return n?!!e[t]:r?e.indexOf(t[0])>-1:!1}
return{enumerable:i("enumerable"),configurable:i("configurable"),writable:i("writable"),value:t}},n=function(n,r,i,o){var a
if(o=e(i,o),"object"==typeof r){for(a in r)Object.hasOwnProperty.call(r,a)&&(o.value=r[a],t(n,a,o))
return n}return t(n,r,o)}
return n})},{}],62:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{"+0JsKK":11,"./_stream_readable":64,"./_stream_writable":66,"core-util-is":67,inherits:68}],63:[function(t,e){e.exports=t(18)},{"./_stream_transform":65,"core-util-is":67,inherits:68}],64:[function(t,e){(function(n){function r(e){e=e||{}
var n=e.highWaterMark
this.highWaterMark=n||0===n?n:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!e.objectMode,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(A||(A=t("string_decoder/").StringDecoder),this.decoder=new A(e.encoding),this.encoding=e.encoding)}function i(t){return this instanceof i?(this._readableState=new r(t,this),this.readable=!0,void O.call(this)):new i(t)}function o(t,e,n,r,i){var o=c(e,n)
if(o)t.emit("error",o)
else if(null===n||void 0===n)e.reading=!1,e.ended||h(t,e)
else if(e.objectMode||n&&n.length>0)if(e.ended&&!i){var s=new Error("stream.push() after EOF")
t.emit("error",s)}else if(e.endEmitted&&i){var s=new Error("stream.unshift() after end event")
t.emit("error",s)}else!e.decoder||i||r||(n=e.decoder.write(n)),e.length+=e.objectMode?1:n.length,i?e.buffer.unshift(n):(e.reading=!1,e.buffer.push(n)),e.needReadable&&l(t),d(t,e)
else i||(e.reading=!1)
return a(e)}function a(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function s(t){if(t>=N)t=N
else{t--
for(var e=1;32>e;e<<=1)t|=t>>e
t++}return t}function u(t,e){return 0===e.length&&e.ended?0:e.objectMode?0===t?0:1:null===t||isNaN(t)?e.flowing&&e.buffer.length?e.buffer[0].length:e.length:0>=t?0:(t>e.highWaterMark&&(e.highWaterMark=s(t)),t>e.length?e.ended?e.length:(e.needReadable=!0,0):t)}function c(t,e){var n=null
return k.isBuffer(e)||"string"==typeof e||null===e||void 0===e||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk")),n}function h(t,e){if(e.decoder&&!e.ended){var n=e.decoder.end()
n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,e.length>0?l(t):w(t)}function l(t){var e=t._readableState
e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,e.sync?n.nextTick(function(){f(t)}):f(t))}function f(t){t.emit("readable")}function d(t,e){e.readingMore||(e.readingMore=!0,n.nextTick(function(){p(t,e)}))}function p(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(t.read(0),n!==e.length);)n=e.length
e.readingMore=!1}function g(t){return function(){var e=t._readableState
e.awaitDrain--,0===e.awaitDrain&&v(t)}}function v(t){function e(t){var e=t.write(n)
!1===e&&r.awaitDrain++}var n,r=t._readableState
for(r.awaitDrain=0;r.pipesCount&&null!==(n=t.read());)if(1===r.pipesCount?e(r.pipes,0,null):E(r.pipes,e),t.emit("data",n),r.awaitDrain>0)return
return 0===r.pipesCount?(r.flowing=!1,void(S.listenerCount(t,"data")>0&&y(t))):void(r.ranOut=!0)}function m(){this._readableState.ranOut&&(this._readableState.ranOut=!1,v(this))}function y(t,e){var r=t._readableState
if(r.flowing)throw new Error("Cannot switch to old mode now.")
var i=e||!1,o=!1
t.readable=!0,t.pipe=O.prototype.pipe,t.on=t.addListener=O.prototype.on,t.on("readable",function(){o=!0
for(var e;!i&&null!==(e=t.read());)t.emit("data",e)
null===e&&(o=!1,t._readableState.needReadable=!0)}),t.pause=function(){i=!0,this.emit("pause")},t.resume=function(){i=!1,o?n.nextTick(function(){t.emit("readable")}):this.read(0),this.emit("resume")},t.emit("readable")}function b(t,e){var n,r=e.buffer,i=e.length,o=!!e.decoder,a=!!e.objectMode
if(0===r.length)return null
if(0===i)n=null
else if(a)n=r.shift()
else if(!t||t>=i)n=o?r.join(""):k.concat(r,i),r.length=0
else if(t<r[0].length){var s=r[0]
n=s.slice(0,t),r[0]=s.slice(t)}else if(t===r[0].length)n=r.shift()
else{n=o?"":new k(t)
for(var u=0,c=0,h=r.length;h>c&&t>u;c++){var s=r[0],l=Math.min(t-u,s.length)
o?n+=s.slice(0,l):s.copy(n,u,0,l),l<s.length?r[0]=s.slice(l):r.shift(),u+=l}}return n}function w(t){var e=t._readableState
if(e.length>0)throw new Error("endReadable called on non-empty stream")
!e.endEmitted&&e.calledRead&&(e.ended=!0,n.nextTick(function(){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}))}function E(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}function _(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n
return-1}e.exports=i
var x=t("isarray"),k=t("buffer").Buffer
i.ReadableState=r
var S=t("events").EventEmitter
S.listenerCount||(S.listenerCount=function(t,e){return t.listeners(e).length})
var O=t("stream"),T=t("core-util-is")
T.inherits=t("inherits")
var A
T.inherits(i,O),i.prototype.push=function(t,e){var n=this._readableState
return"string"!=typeof t||n.objectMode||(e=e||n.defaultEncoding,e!==n.encoding&&(t=new k(t,e),e="")),o(this,n,t,e,!1)},i.prototype.unshift=function(t){var e=this._readableState
return o(this,e,t,"",!0)},i.prototype.setEncoding=function(e){A||(A=t("string_decoder/").StringDecoder),this._readableState.decoder=new A(e),this._readableState.encoding=e}
var N=8388608
i.prototype.read=function(t){var e=this._readableState
e.calledRead=!0
var n,r=t
if(("number"!=typeof t||t>0)&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return l(this),null
if(t=u(t,e),0===t&&e.ended)return n=null,e.length>0&&e.decoder&&(n=b(t,e),e.length-=n.length),0===e.length&&w(this),n
var i=e.needReadable
return e.length-t<=e.highWaterMark&&(i=!0),(e.ended||e.reading)&&(i=!1),i&&(e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1),i&&!e.reading&&(t=u(r,e)),n=t>0?b(t,e):null,null===n&&(e.needReadable=!0,t=0),e.length-=t,0!==e.length||e.ended||(e.needReadable=!0),e.ended&&!e.endEmitted&&0===e.length&&w(this),n},i.prototype._read=function(){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(t,e){function r(t){t===h&&o()}function i(){t.end()}function o(){t.removeListener("close",s),t.removeListener("finish",u),t.removeListener("drain",p),t.removeListener("error",a),t.removeListener("unpipe",r),h.removeListener("end",i),h.removeListener("end",o),(!t._writableState||t._writableState.needDrain)&&p()}function a(e){c(),t.removeListener("error",a),0===S.listenerCount(t,"error")&&t.emit("error",e)}function s(){t.removeListener("finish",u),c()}function u(){t.removeListener("close",s),c()}function c(){h.unpipe(t)}var h=this,l=this._readableState
switch(l.pipesCount){case 0:l.pipes=t
break
case 1:l.pipes=[l.pipes,t]
break
default:l.pipes.push(t)}l.pipesCount+=1
var f=(!e||e.end!==!1)&&t!==n.stdout&&t!==n.stderr,d=f?i:o
l.endEmitted?n.nextTick(d):h.once("end",d),t.on("unpipe",r)
var p=g(h)
return t.on("drain",p),t._events&&t._events.error?x(t._events.error)?t._events.error.unshift(a):t._events.error=[a,t._events.error]:t.on("error",a),t.once("close",s),t.once("finish",u),t.emit("pipe",h),l.flowing||(this.on("readable",m),l.flowing=!0,n.nextTick(function(){v(h)})),t},i.prototype.unpipe=function(t){var e=this._readableState
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1,t&&t.emit("unpipe",this),this)
if(!t){var n=e.pipes,r=e.pipesCount
e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1
for(var i=0;r>i;i++)n[i].emit("unpipe",this)
return this}var i=_(e.pipes,t)
return-1===i?this:(e.pipes.splice(i,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,e){var n=O.prototype.on.call(this,t,e)
if("data"!==t||this._readableState.flowing||y(this),"readable"===t&&this.readable){var r=this._readableState
r.readableListening||(r.readableListening=!0,r.emittedReadable=!1,r.needReadable=!0,r.reading?r.length&&l(this,r):this.read(0))}return n},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){y(this),this.read(0),this.emit("resume")},i.prototype.pause=function(){y(this,!0),this.emit("pause")},i.prototype.wrap=function(t){var e=this._readableState,n=!1,r=this
t.on("end",function(){if(e.decoder&&!e.ended){var t=e.decoder.end()
t&&t.length&&r.push(t)}r.push(null)}),t.on("data",function(i){if(e.decoder&&(i=e.decoder.write(i)),(!e.objectMode||null!==i&&void 0!==i)&&(e.objectMode||i&&i.length)){var o=r.push(i)
o||(n=!0,t.pause())}})
for(var i in t)"function"==typeof t[i]&&"undefined"==typeof this[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i))
var o=["error","close","destroy","pause","resume"]
return E(o,function(e){t.on(e,r.emit.bind(r,e))}),r._read=function(){n&&(n=!1,t.resume())},r},i._fromList=b}).call(this,t("+0JsKK"))},{"+0JsKK":11,buffer:2,"core-util-is":67,events:5,inherits:68,isarray:69,stream:29,"string_decoder/":70}],65:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{"./_stream_duplex":62,"core-util-is":67,inherits:68}],66:[function(t,e){(function(n){function r(t,e,n){this.chunk=t,this.encoding=e,this.callback=n}function i(t,e){t=t||{}
var n=t.highWaterMark
this.highWaterMark=n||0===n?n:16384,this.objectMode=!!t.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var r=t.decodeStrings===!1
this.decodeStrings=!r,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){d(e,t)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function o(e){var n=t("./_stream_duplex")
return this instanceof o||this instanceof n?(this._writableState=new i(e,this),this.writable=!0,void _.call(this)):new o(e)}function a(t,e,r){var i=new Error("write after end")
t.emit("error",i),n.nextTick(function(){r(i)})}function s(t,e,r,i){var o=!0
if(!w.isBuffer(r)&&"string"!=typeof r&&null!==r&&void 0!==r&&!e.objectMode){var a=new TypeError("Invalid non-string/buffer chunk")
t.emit("error",a),n.nextTick(function(){i(a)}),o=!1}return o}function u(t,e,n){return t.objectMode||t.decodeStrings===!1||"string"!=typeof e||(e=new w(e,n)),e}function c(t,e,n,i,o){n=u(e,n,i),w.isBuffer(n)&&(i="buffer")
var a=e.objectMode?1:n.length
e.length+=a
var s=e.length<e.highWaterMark
return s||(e.needDrain=!0),e.writing?e.buffer.push(new r(n,i,o)):h(t,e,a,n,i,o),s}function h(t,e,n,r,i,o){e.writelen=n,e.writecb=o,e.writing=!0,e.sync=!0,t._write(r,i,e.onwrite),e.sync=!1}function l(t,e,r,i,o){r?n.nextTick(function(){o(i)}):o(i),t._writableState.errorEmitted=!0,t.emit("error",i)}function f(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function d(t,e){var r=t._writableState,i=r.sync,o=r.writecb
if(f(r),e)l(t,r,i,e,o)
else{var a=m(t,r)
a||r.bufferProcessing||!r.buffer.length||v(t,r),i?n.nextTick(function(){p(t,r,a,o)}):p(t,r,a,o)}}function p(t,e,n,r){n||g(t,e),r(),n&&y(t,e)}function g(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function v(t,e){e.bufferProcessing=!0
for(var n=0;n<e.buffer.length;n++){var r=e.buffer[n],i=r.chunk,o=r.encoding,a=r.callback,s=e.objectMode?1:i.length
if(h(t,e,s,i,o,a),e.writing){n++
break}}e.bufferProcessing=!1,n<e.buffer.length?e.buffer=e.buffer.slice(n):e.buffer.length=0}function m(t,e){return e.ending&&0===e.length&&!e.finished&&!e.writing}function y(t,e){var n=m(t,e)
return n&&(e.finished=!0,t.emit("finish")),n}function b(t,e,r){e.ending=!0,y(t,e),r&&(e.finished?n.nextTick(r):t.once("finish",r)),e.ended=!0}e.exports=o
var w=t("buffer").Buffer
o.WritableState=i
var E=t("core-util-is")
E.inherits=t("inherits")
var _=t("stream")
E.inherits(o,_),o.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},o.prototype.write=function(t,e,n){var r=this._writableState,i=!1
return"function"==typeof e&&(n=e,e=null),w.isBuffer(t)?e="buffer":e||(e=r.defaultEncoding),"function"!=typeof n&&(n=function(){}),r.ended?a(this,r,n):s(this,r,t,n)&&(i=c(this,r,t,e,n)),i},o.prototype._write=function(t,e,n){n(new Error("not implemented"))},o.prototype.end=function(t,e,n){var r=this._writableState
"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),"undefined"!=typeof t&&null!==t&&this.write(t,e),r.ending||r.finished||b(this,r,n)}}).call(this,t("+0JsKK"))},{"+0JsKK":11,"./_stream_duplex":62,buffer:2,"core-util-is":67,inherits:68,stream:29}],67:[function(t,e){e.exports=t(22)},{buffer:2}],68:[function(t,e){e.exports=t(10)},{}],69:[function(t,e){e.exports=t(23)},{}],70:[function(t,e,n){function r(t){if(t&&!u(t))throw new Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function a(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}var s=t("buffer").Buffer,u=s.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}},c=n.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),r(t),this.encoding){case"utf8":this.surrogateSize=3
break
case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o
break
case"base64":this.surrogateSize=3,this.detectIncompleteChar=a
break
default:return void(this.write=i)}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0}
c.prototype.write=function(t){for(var e="";this.charLength;){var n=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length
if(t.copy(this.charBuffer,this.charReceived,0,n),this.charReceived+=n,this.charReceived<this.charLength)return""
t=t.slice(n,t.length),e=this.charBuffer.slice(0,this.charLength).toString(this.encoding)
var r=e.charCodeAt(e.length-1)
if(!(r>=55296&&56319>=r)){if(this.charReceived=this.charLength=0,0===t.length)return e
break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t)
var i=t.length
this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,i),i-=this.charReceived),e+=t.toString(this.encoding,0,i)
var i=e.length-1,r=e.charCodeAt(i)
if(r>=55296&&56319>=r){var o=this.surrogateSize
return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),t.copy(this.charBuffer,0,0,o),e.substring(0,i)}return e},c.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var n=t[t.length-e]
if(1==e&&n>>5==6){this.charLength=2
break}if(2>=e&&n>>4==14){this.charLength=3
break}if(3>=e&&n>>3==30){this.charLength=4
break}}this.charReceived=e},c.prototype.end=function(t){var e=""
if(t&&t.length&&(e=this.write(t)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding
e+=r.slice(0,n).toString(i)}return e}},{buffer:2}],71:[function(t,e,n){arguments[4][26][0].apply(n,arguments)},{"./lib/_stream_duplex.js":62,"./lib/_stream_passthrough.js":63,"./lib/_stream_readable.js":64,"./lib/_stream_transform.js":65,"./lib/_stream_writable.js":66}],72:[function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e]
for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}e.exports=n},{}],73:[function(t,e){e.exports={name:"levelup",description:"Fast & simple storage - a Node.js-style LevelDB wrapper",version:"0.18.6",contributors:[{name:"Rod Vagg",email:"r@va.gg",url:"https://github.com/rvagg"},{name:"John Chesley",email:"john@chesl.es",url:"https://github.com/chesles/"},{name:"Jake Verbaten",email:"raynos2@gmail.com",url:"https://github.com/raynos"},{name:"Dominic Tarr",email:"dominic.tarr@gmail.com",url:"https://github.com/dominictarr"},{name:"Max Ogden",email:"max@maxogden.com",url:"https://github.com/maxogden"},{name:"Lars-Magnus Skog",email:"lars.magnus.skog@gmail.com",url:"https://github.com/ralphtheninja"},{name:"David Björklund",email:"david.bjorklund@gmail.com",url:"https://github.com/kesla"},{name:"Julian Gruber",email:"julian@juliangruber.com",url:"https://github.com/juliangruber"},{name:"Paolo Fragomeni",email:"paolo@async.ly",url:"https://github.com/hij1nx"},{name:"Anton Whalley",email:"anton.whalley@nearform.com",url:"https://github.com/No9"},{name:"Matteo Collina",email:"matteo.collina@gmail.com",url:"https://github.com/mcollina"},{name:"Pedro Teixeira",email:"pedro.teixeira@gmail.com",url:"https://github.com/pgte"},{name:"James Halliday",email:"mail@substack.net",url:"https://github.com/substack"}],repository:{type:"git",url:"https://github.com/rvagg/node-levelup.git"},homepage:"https://github.com/rvagg/node-levelup",keywords:["leveldb","stream","database","db","store","storage","json"],main:"lib/levelup.js",dependencies:{bl:"~0.8.1","deferred-leveldown":"~0.2.0",errno:"~0.1.1",prr:"~0.0.0","readable-stream":"~1.0.26",semver:"~2.3.1",xtend:"~3.0.0"},devDependencies:{leveldown:"~0.10.0",bustermove:"*",tap:"*",referee:"*",rimraf:"*",async:"*",fstream:"*",tar:"*",mkfiletree:"*",readfiletree:"*","slow-stream":">=0.0.4",delayed:"*",boganipsum:"*",du:"*",memdown:"*","msgpack-js":"*"},browser:{leveldown:!1,"leveldown/package":!1,semver:!1},scripts:{test:"tap test/*-test.js --stderr",functionaltests:"node ./test/functional/fstream-test.js && node ./test/functional/binary-data-test.js && node ./test/functional/compat-test.js",alltests:"npm test && npm run-script functionaltests"},license:"MIT",readme:"LevelUP\n=======\n\n![LevelDB Logo](https://0.gravatar.com/avatar/a498b122aecb7678490a38bb593cc12d)\n\n**Fast & simple storage - a Node.js-style LevelDB wrapper**\n\n[![Build Status](https://secure.travis-ci.org/rvagg/node-levelup.png)](http://travis-ci.org/rvagg/node-levelup)\n\n[![NPM](https://nodei.co/npm/levelup.png?stars&downloads)](https://nodei.co/npm/levelup/) [![NPM](https://nodei.co/npm-dl/levelup.png)](https://nodei.co/npm/levelup/)\n\n\n  * <a href=\"#intro\">Introduction</a>\n  * <a href=\"#leveldown\">Relationship to LevelDOWN</a>\n  * <a href=\"#platforms\">Tested &amp; supported platforms</a>\n  * <a href=\"#basic\">Basic usage</a>\n  * <a href=\"#api\">API</a>\n  * <a href=\"#events\">Events</a>\n  * <a href=\"#json\">JSON data</a>\n  * <a href=\"#custom_encodings\">Custom encodings</a>\n  * <a href=\"#extending\">Extending LevelUP</a>\n  * <a href=\"#multiproc\">Multi-process access</a>\n  * <a href=\"#support\">Getting support</a>\n  * <a href=\"#contributing\">Contributing</a>\n  * <a href=\"#licence\">Licence &amp; copyright</a>\n\n<a name=\"intro\"></a>\nIntroduction\n------------\n\n**[LevelDB](http://code.google.com/p/leveldb/)** is a simple key/value data store built by Google, inspired by BigTable. It's used in Google Chrome and many other products. LevelDB supports arbitrary byte arrays as both keys and values, singular *get*, *put* and *delete* operations, *batched put and delete*, bi-directional iterators and simple compression using the very fast [Snappy](http://code.google.com/p/snappy/) algorithm.\n\n**LevelUP** aims to expose the features of LevelDB in a **Node.js-friendly way**. All standard `Buffer` encoding types are supported, as is a special JSON encoding. LevelDB's iterators are exposed as a Node.js-style **readable stream** a matching **writeable stream** converts writes to *batch* operations.\n\nLevelDB stores entries **sorted lexicographically by keys**. This makes LevelUP's <a href=\"#createReadStream\"><code>ReadStream</code></a> interface a very powerful query mechanism.\n\n**LevelUP** is an **OPEN Open Source Project**, see the <a href=\"#contributing\">Contributing</a> section to find out what this means.\n\n<a name=\"leveldown\"></a>\nRelationship to LevelDOWN\n-------------------------\n\nLevelUP is designed to be backed by **[LevelDOWN](https://github.com/rvagg/node-leveldown/)** which provides a pure C++ binding to LevelDB and can be used as a stand-alone package if required.\n\n**As of version 0.9, LevelUP no longer requires LevelDOWN as a dependency so you must `npm install leveldown` when you install LevelUP.**\n\nLevelDOWN is now optional because LevelUP can be used with alternative backends, such as **[level.js](https://github.com/maxogden/level.js)** in the browser or [MemDOWN](https://github.com/rvagg/node-memdown) for a pure in-memory store.\n\nLevelUP will look for LevelDOWN and throw an error if it can't find it in its Node `require()` path. It will also tell you if the installed version of LevelDOWN is incompatible.\n\n**The [level](https://github.com/level/level) package is available as an alternative installation mechanism.** Install it instead to automatically get both LevelUP & LevelDOWN. It exposes LevelUP on its export (i.e. you can `var leveldb = require('level')`).\n\n\n<a name=\"platforms\"></a>\nTested & supported platforms\n----------------------------\n\n  * **Linux**: including ARM platforms such as Raspberry Pi *and Kindle!*\n  * **Mac OS**\n  * **Solaris**: including Joyent's SmartOS & Nodejitsu\n  * **Windows**: Node 0.10 and above only. See installation instructions for *node-gyp's* dependencies [here](https://github.com/TooTallNate/node-gyp#installation), you'll need these (free) components from Microsoft to compile and run any native Node add-on in Windows.\n\n<a name=\"basic\"></a>\nBasic usage\n-----------\n\nFirst you need to install LevelUP!\n\n```sh\n$ npm install levelup leveldown\n```\n\nOr\n\n```sh\n$ npm install level\n```\n\n*(this second option requires you to use LevelUP by calling `var levelup = require('level')`)*\n\n\nAll operations are asynchronous although they don't necessarily require a callback if you don't need to know when the operation was performed.\n\n```js\nvar levelup = require('levelup')\n\n// 1) Create our database, supply location and options.\n//    This will create or open the underlying LevelDB store.\nvar db = levelup('./mydb')\n\n// 2) put a key & value\ndb.put('name', 'LevelUP', function (err) {\n  if (err) return console.log('Ooops!', err) // some kind of I/O error\n\n  // 3) fetch by key\n  db.get('name', function (err, value) {\n    if (err) return console.log('Ooops!', err) // likely the key was not found\n\n    // ta da!\n    console.log('name=' + value)\n  })\n})\n```\n\n<a name=\"api\"></a>\n## API\n\n  * <a href=\"#ctor\"><code><b>levelup()</b></code></a>\n  * <a href=\"#open\"><code>db.<b>open()</b></code></a>\n  * <a href=\"#close\"><code>db.<b>close()</b></code></a>\n  * <a href=\"#put\"><code>db.<b>put()</b></code></a>\n  * <a href=\"#get\"><code>db.<b>get()</b></code></a>\n  * <a href=\"#del\"><code>db.<b>del()</b></code></a>\n  * <a href=\"#batch\"><code>db.<b>batch()</b></code> *(array form)*</a>\n  * <a href=\"#batch_chained\"><code>db.<b>batch()</b></code> *(chained form)*</a>\n  * <a href=\"#isOpen\"><code>db.<b>isOpen()</b></code></a>\n  * <a href=\"#isClosed\"><code>db.<b>isClosed()</b></code></a>\n  * <a href=\"#createReadStream\"><code>db.<b>createReadStream()</b></code></a>\n  * <a href=\"#createKeyStream\"><code>db.<b>createKeyStream()</b></code></a>\n  * <a href=\"#createValueStream\"><code>db.<b>createValueStream()</b></code></a>\n  * <a href=\"#createWriteStream\"><code>db.<b>createWriteStream()</b></code></a>\n\n### Special operations exposed by LevelDOWN\n\n  * <a href=\"#approximateSize\"><code>db.db.<b>approximateSize()</b></code></a>\n  * <a href=\"#getProperty\"><code>db.db.<b>getProperty()</b></code></a>\n  * <a href=\"#destroy\"><code><b>leveldown.destroy()</b></code></a>\n  * <a href=\"#repair\"><code><b>leveldown.repair()</b></code></a>\n\n\n--------------------------------------------------------\n<a name=\"ctor\"></a>\n### levelup(location[, options[, callback]])\n### levelup(options[, callback ])\n### levelup(db[, callback ])\n<code>levelup()</code> is the main entry point for creating a new LevelUP instance and opening the underlying store with LevelDB.\n\nThis function returns a new instance of LevelUP and will also initiate an <a href=\"#open\"><code>open()</code></a> operation. Opening the database is an asynchronous operation which will trigger your callback if you provide one. The callback should take the form: `function (err, db) {}` where the `db` is the LevelUP instance. If you don't provide a callback, any read & write operations are simply queued internally until the database is fully opened.\n\nThis leads to two alternative ways of managing a new LevelUP instance:\n\n```js\nlevelup(location, options, function (err, db) {\n  if (err) throw err\n  db.get('foo', function (err, value) {\n    if (err) return console.log('foo does not exist')\n    console.log('got foo =', value)\n  })\n})\n\n// vs the equivalent:\n\nvar db = levelup(location, options) // will throw if an error occurs\ndb.get('foo', function (err, value) {\n  if (err) return console.log('foo does not exist')\n  console.log('got foo =', value)\n})\n```\n\nThe `location` argument is available as a read-only property on the returned LevelUP instance.\n\nThe `levelup(options, callback)` form (with optional `callback`) is only available where you provide a valid `'db'` property on the options object (see below). Only for back-ends that don't require a `location` argument, such as [MemDOWN](https://github.com/rvagg/memdown).\n\nFor example:\n\n```js\nvar levelup = require('levelup')\nvar memdown = require('memdown')\nvar db = levelup({ db: memdown })\n```\n\nThe `levelup(db, callback)` form (with optional `callback`) is only available where `db` is a factory function, as would be provided as a `'db'` property on an `options` object (see below). Only for back-ends that don't require a `location` argument, such as [MemDOWN](https://github.com/rvagg/memdown).\n\nFor example:\n\n```js\nvar levelup = require('levelup')\nvar memdown = require('memdown')\nvar db = levelup(memdown)\n```\n\n#### `options`\n\n`levelup()` takes an optional options object as its second argument; the following properties are accepted:\n\n* `'createIfMissing'` *(boolean, default: `true`)*: If `true`, will initialise an empty database at the specified location if one doesn't already exist. If `false` and a database doesn't exist you will receive an error in your `open()` callback and your database won't open.\n\n* `'errorIfExists'` *(boolean, default: `false`)*: If `true`, you will receive an error in your `open()` callback if the database exists at the specified location.\n\n* `'compression'` *(boolean, default: `true`)*: If `true`, all *compressible* data will be run through the Snappy compression algorithm before being stored. Snappy is very fast and shouldn't gain much speed by disabling so leave this on unless you have good reason to turn it off.\n\n* `'cacheSize'` *(number, default: `8 * 1024 * 1024`)*: The size (in bytes) of the in-memory [LRU](http://en.wikipedia.org/wiki/Cache_algorithms#Least_Recently_Used) cache with frequently used uncompressed block contents. \n\n* `'keyEncoding'` and `'valueEncoding'` *(string, default: `'utf8'`)*: The encoding of the keys and values passed through Node.js' `Buffer` implementation (see [Buffer#toString()](http://nodejs.org/docs/latest/api/buffer.html#buffer_buf_tostring_encoding_start_end)).\n  <p><code>'utf8'</code> is the default encoding for both keys and values so you can simply pass in strings and expect strings from your <code>get()</code> operations. You can also pass <code>Buffer</code> objects as keys and/or values and conversion will be performed.</p>\n  <p>Supported encodings are: hex, utf8, ascii, binary, base64, ucs2, utf16le.</p>\n  <p><code>'json'</code> encoding is also supported, see below.</p>\n\n* `'db'` *(object, default: LevelDOWN)*: LevelUP is backed by [LevelDOWN](https://github.com/rvagg/node-leveldown/) to provide an interface to LevelDB. You can completely replace the use of LevelDOWN by providing a \"factory\" function that will return a LevelDOWN API compatible object given a `location` argument. For further information, see [MemDOWN](https://github.com/rvagg/node-memdown/), a fully LevelDOWN API compatible replacement that uses a memory store rather than LevelDB. Also see [Abstract LevelDOWN](http://github.com/rvagg/node-abstract-leveldown), a partial implementation of the LevelDOWN API that can be used as a base prototype for a LevelDOWN substitute.\n\nAdditionally, each of the main interface methods accept an optional options object that can be used to override `'keyEncoding'` and `'valueEncoding'`.\n\n--------------------------------------------------------\n<a name=\"open\"></a>\n### db.open([callback])\n<code>open()</code> opens the underlying LevelDB store. In general **you should never need to call this method directly** as it's automatically called by <a href=\"#ctor\"><code>levelup()</code></a>.\n\nHowever, it is possible to *reopen* a database after it has been closed with <a href=\"#close\"><code>close()</code></a>, although this is not generally advised.\n\n--------------------------------------------------------\n<a name=\"close\"></a>\n### db.close([callback])\n<code>close()</code> closes the underlying LevelDB store. The callback will receive any error encountered during closing as the first argument.\n\nYou should always clean up your LevelUP instance by calling `close()` when you no longer need it to free up resources. A LevelDB store cannot be opened by multiple instances of LevelDB/LevelUP simultaneously.\n\n--------------------------------------------------------\n<a name=\"put\"></a>\n### db.put(key, value[, options][, callback])\n<code>put()</code> is the primary method for inserting data into the store. Both the `key` and `value` can be arbitrary data objects.\n\nThe callback argument is optional but if you don't provide one and an error occurs then expect the error to be thrown.\n\n#### `options`\n\nEncoding of the `key` and `value` objects will adhere to `'keyEncoding'` and `'valueEncoding'` options provided to <a href=\"#ctor\"><code>levelup()</code></a>, although you can provide alternative encoding settings in the options for `put()` (it's recommended that you stay consistent in your encoding of keys and values in a single store).\n\nIf you provide a `'sync'` value of `true` in your `options` object, LevelDB will perform a synchronous write of the data; although the operation will be asynchronous as far as Node is concerned. Normally, LevelDB passes the data to the operating system for writing and returns immediately, however a synchronous write will use `fsync()` or equivalent so your callback won't be triggered until the data is actually on disk. Synchronous filesystem writes are **significantly** slower than asynchronous writes but if you want to be absolutely sure that the data is flushed then you can use `'sync': true`.\n\n--------------------------------------------------------\n<a name=\"get\"></a>\n### db.get(key[, options][, callback])\n<code>get()</code> is the primary method for fetching data from the store. The `key` can be an arbitrary data object. If it doesn't exist in the store then the callback will receive an error as its first argument. A not-found err object will be of type `'NotFoundError'` so you can `err.type == 'NotFoundError'` or you can perform a truthy test on the property `err.notFound`.\n\n```js\ndb.get('foo', function (err, value) {\n  if (err) {\n    if (err.notFound) {\n      // handle a 'NotFoundError' here\n      return\n    }\n    // I/O or other error, pass it up the callback chain\n    return callback(err)\n  }\n\n  // .. handle `value` here\n})\n```\n\n#### `options`\n\nEncoding of the `key` object will adhere to the `'keyEncoding'` option provided to <a href=\"#ctor\"><code>levelup()</code></a>, although you can provide alternative encoding settings in the options for `get()` (it's recommended that you stay consistent in your encoding of keys and values in a single store).\n\nLevelDB will by default fill the in-memory LRU Cache with data from a call to get. Disabling this is done by setting `fillCache` to `false`. \n\n--------------------------------------------------------\n<a name=\"del\"></a>\n### db.del(key[, options][, callback])\n<code>del()</code> is the primary method for removing data from the store.\n\n#### `options`\n\nEncoding of the `key` object will adhere to the `'keyEncoding'` option provided to <a href=\"#ctor\"><code>levelup()</code></a>, although you can provide alternative encoding settings in the options for `del()` (it's recommended that you stay consistent in your encoding of keys and values in a single store).\n\nA `'sync'` option can also be passed, see <a href=\"#put\"><code>put()</code></a> for details on how this works.\n\n--------------------------------------------------------\n<a name=\"batch\"></a>\n### db.batch(array[, options][, callback]) *(array form)*\n<code>batch()</code> can be used for very fast bulk-write operations (both *put* and *delete*). The `array` argument should contain a list of operations to be executed sequentially, although as a whole they are performed as an atomic operation inside LevelDB. Each operation is contained in an object having the following properties: `type`, `key`, `value`, where the *type* is either `'put'` or `'del'`. In the case of `'del'` the `'value'` property is ignored. Any entries with a `'key'` of `null` or `undefined` will cause an error to be returned on the `callback` and any `'type': 'put'` entry with a `'value'` of `null` or `undefined` will return an error.\n\n```js\nvar ops = [\n    { type: 'del', key: 'father' }\n  , { type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' }\n  , { type: 'put', key: 'dob', value: '16 February 1941' }\n  , { type: 'put', key: 'spouse', value: 'Kim Young-sook' }\n  , { type: 'put', key: 'occupation', value: 'Clown' }\n]\n\ndb.batch(ops, function (err) {\n  if (err) return console.log('Ooops!', err)\n  console.log('Great success dear leader!')\n})\n```\n\n#### `options`\n\nSee <a href=\"#put\"><code>put()</code></a> for a discussion on the `options` object. You can overwrite default `'keyEncoding'` and `'valueEncoding'` and also specify the use of `sync` filesystem operations.\n\nIn addition to encoding options for the whole batch you can also overwrite the encoding per operation, like:\n\n```js\nvar ops = [{\n    type          : 'put'\n  , key           : new Buffer([1, 2, 3])\n  , value         : { some: 'json' }\n  , keyEncoding   : 'binary'\n  , valueEncoding : 'json'\n}]\n```\n\n--------------------------------------------------------\n<a name=\"batch_chained\"></a>\n### db.batch() *(chained form)*\n<code>batch()</code>, when called with no arguments will return a `Batch` object which can be used to build, and eventually commit, an atomic LevelDB batch operation. Depending on how it's used, it is possible to obtain greater performance when using the chained form of `batch()` over the array form.\n\n```js\ndb.batch()\n  .del('father')\n  .put('name', 'Yuri Irsenovich Kim')\n  .put('dob', '16 February 1941')\n  .put('spouse', 'Kim Young-sook')\n  .put('occupation', 'Clown')\n  .write(function () { console.log('Done!') })\n```\n\n<b><code>batch.put(key, value[, options])</code></b>\n\nQueue a *put* operation on the current batch, not committed until a `write()` is called on the batch.\n\nThe optional `options` argument can be used to override the default `'keyEncoding'` and/or `'valueEncoding'`.\n\nThis method may `throw` a `WriteError` if there is a problem with your put (such as the `value` being `null` or `undefined`).\n\n<b><code>batch.del(key[, options])</code></b>\n\nQueue a *del* operation on the current batch, not committed until a `write()` is called on the batch.\n\nThe optional `options` argument can be used to override the default `'keyEncoding'`.\n\nThis method may `throw` a `WriteError` if there is a problem with your delete.\n\n<b><code>batch.clear()</code></b>\n\nClear all queued operations on the current batch, any previous operations will be discarded.\n\n<b><code>batch.write([callback])</code></b>\n\nCommit the queued operations for this batch. All operations not *cleared* will be written to the database atomically, that is, they will either all succeed or fail with no partial commits. The optional `callback` will be called when the operation has completed with an *error* argument if an error has occurred; if no `callback` is supplied and an error occurs then this method will `throw` a `WriteError`.\n\n\n--------------------------------------------------------\n<a name=\"isOpen\"></a>\n### db.isOpen()\n\nA LevelUP object can be in one of the following states:\n\n  * *\"new\"*     - newly created, not opened or closed\n  * *\"opening\"* - waiting for the database to be opened\n  * *\"open\"*    - successfully opened the database, available for use\n  * *\"closing\"* - waiting for the database to be closed\n  * *\"closed\"*  - database has been successfully closed, should not be used\n\n`isOpen()` will return `true` only when the state is \"open\".\n\n--------------------------------------------------------\n<a name=\"isClosed\"></a>\n### db.isClosed()\n\n*See <a href=\"#put\"><code>isOpen()</code></a>*\n\n`isClosed()` will return `true` only when the state is \"closing\" *or* \"closed\", it can be useful for determining if read and write operations are permissible.\n\n--------------------------------------------------------\n<a name=\"createReadStream\"></a>\n### db.createReadStream([options])\n\nYou can obtain a **ReadStream** of the full database by calling the `createReadStream()` method. The resulting stream is a complete Node.js-style [Readable Stream](http://nodejs.org/docs/latest/api/stream.html#stream_readable_stream) where `'data'` events emit objects with `'key'` and `'value'` pairs. You can also use the `start`, `end` and `limit` options to control the range of keys that are streamed.\n\n```js\ndb.createReadStream()\n  .on('data', function (data) {\n    console.log(data.key, '=', data.value)\n  })\n  .on('error', function (err) {\n    console.log('Oh my!', err)\n  })\n  .on('close', function () {\n    console.log('Stream closed')\n  })\n  .on('end', function () {\n    console.log('Stream closed')\n  })\n```\n\nThe standard `pause()`, `resume()` and `destroy()` methods are implemented on the ReadStream, as is `pipe()` (see below). `'data'`, '`error'`, `'end'` and `'close'` events are emitted.\n\nAdditionally, you can supply an options object as the first parameter to `createReadStream()` with the following options:\n\n* `'gt'` (greater than), `'gte'` (greater than or equal) define the lower bound of the range to be streamed. Only records where the key is greater than (or equal to) this option will be included in the range. When `reverse=true` the order will be reversed, but the records streamed will be the same.\n\n* `'lt'` (less than), `'lte'` (less than or equal) define the higher bound of the range to be streamed. Only key/value pairs where the key is less than (or equal to) this option will be included in the range. When `reverse=true` the order will be reversed, but the records streamed will be the same.\n\n* `'start', 'end'` legacy ranges - instead use `'gte', 'lte'`\n\n* `'reverse'` *(boolean, default: `false`)*: a boolean, set true and the stream output will be reversed. Beware that due to the way LevelDB works, a reverse seek will be slower than a forward seek.\n\n* `'keys'` *(boolean, default: `true`)*: whether the `'data'` event should contain keys. If set to `true` and `'values'` set to `false` then `'data'` events will simply be keys, rather than objects with a `'key'` property. Used internally by the `createKeyStream()` method.\n\n* `'values'` *(boolean, default: `true`)*: whether the `'data'` event should contain values. If set to `true` and `'keys'` set to `false` then `'data'` events will simply be values, rather than objects with a `'value'` property. Used internally by the `createValueStream()` method.\n\n* `'limit'` *(number, default: `-1`)*: limit the number of results collected by this stream. This number represents a *maximum* number of results and may not be reached if you get to the end of the store or your `'end'` value first. A value of `-1` means there is no limit.\n\n* `'fillCache'` *(boolean, default: `false`)*: wheather LevelDB's LRU-cache should be filled with data read.\n\n* `'keyEncoding'` / `'valueEncoding'` *(string)*: the encoding applied to each read piece of data.\n\n--------------------------------------------------------\n<a name=\"createKeyStream\"></a>\n### db.createKeyStream([options])\n\nA **KeyStream** is a **ReadStream** where the `'data'` events are simply the keys from the database so it can be used like a traditional stream rather than an object stream.\n\nYou can obtain a KeyStream either by calling the `createKeyStream()` method on a LevelUP object or by passing passing an options object to `createReadStream()` with `keys` set to `true` and `values` set to `false`.\n\n```js\ndb.createKeyStream()\n  .on('data', function (data) {\n    console.log('key=', data)\n  })\n\n// same as:\ndb.createReadStream({ keys: true, values: false })\n  .on('data', function (data) {\n    console.log('key=', data)\n  })\n```\n\n--------------------------------------------------------\n<a name=\"createValueStream\"></a>\n### db.createValueStream([options])\n\nA **ValueStream** is a **ReadStream** where the `'data'` events are simply the values from the database so it can be used like a traditional stream rather than an object stream.\n\nYou can obtain a ValueStream either by calling the `createValueStream()` method on a LevelUP object or by passing passing an options object to `createReadStream()` with `values` set to `true` and `keys` set to `false`.\n\n```js\ndb.createValueStream()\n  .on('data', function (data) {\n    console.log('value=', data)\n  })\n\n// same as:\ndb.createReadStream({ keys: false, values: true })\n  .on('data', function (data) {\n    console.log('value=', data)\n  })\n```\n\n--------------------------------------------------------\n<a name=\"createWriteStream\"></a>\n### db.createWriteStream([options])\n\nA **WriteStream** can be obtained by calling the `createWriteStream()` method. The resulting stream is a complete Node.js-style [Writable Stream](http://nodejs.org/docs/latest/api/stream.html#stream_writable_stream) which accepts objects with `'key'` and `'value'` pairs on its `write()` method.\n\nThe WriteStream will buffer writes and submit them as a `batch()` operations where writes occur *within the same tick*.\n\n```js\nvar ws = db.createWriteStream()\n\nws.on('error', function (err) {\n  console.log('Oh my!', err)\n})\nws.on('close', function () {\n  console.log('Stream closed')\n})\n\nws.write({ key: 'name', value: 'Yuri Irsenovich Kim' })\nws.write({ key: 'dob', value: '16 February 1941' })\nws.write({ key: 'spouse', value: 'Kim Young-sook' })\nws.write({ key: 'occupation', value: 'Clown' })\nws.end()\n```\n\nThe standard `write()`, `end()`, `destroy()` and `destroySoon()` methods are implemented on the WriteStream. `'drain'`, `'error'`, `'close'` and `'pipe'` events are emitted.\n\nYou can specify encodings both for the whole stream and individual entries:\n\nTo set the encoding for the whole stream, provide an options object as the first parameter to `createWriteStream()` with `'keyEncoding'` and/or `'valueEncoding'`.\n\nTo set the encoding for an individual entry:\n\n```js\nwriteStream.write({\n    key           : new Buffer([1, 2, 3])\n  , value         : { some: 'json' }\n  , keyEncoding   : 'binary'\n  , valueEncoding : 'json'\n})\n```\n\n#### write({ type: 'put' })\n\nIf individual `write()` operations are performed with a `'type'` property of `'del'`, they will be passed on as `'del'` operations to the batch.\n\n```js\nvar ws = db.createWriteStream()\n\nws.on('error', function (err) {\n  console.log('Oh my!', err)\n})\nws.on('close', function () {\n  console.log('Stream closed')\n})\n\nws.write({ type: 'del', key: 'name' })\nws.write({ type: 'del', key: 'dob' })\nws.write({ type: 'put', key: 'spouse' })\nws.write({ type: 'del', key: 'occupation' })\nws.end()\n```\n\n#### db.createWriteStream({ type: 'del' })\n\nIf the *WriteStream* is created with a `'type'` option of `'del'`, all `write()` operations will be interpreted as `'del'`, unless explicitly specified as `'put'`.\n\n```js\nvar ws = db.createWriteStream({ type: 'del' })\n\nws.on('error', function (err) {\n  console.log('Oh my!', err)\n})\nws.on('close', function () {\n  console.log('Stream closed')\n})\n\nws.write({ key: 'name' })\nws.write({ key: 'dob' })\n// but it can be overridden\nws.write({ type: 'put', key: 'spouse', value: 'Ri Sol-ju' })\nws.write({ key: 'occupation' })\nws.end()\n```\n\n#### Pipes and Node Stream compatibility\n\nA ReadStream can be piped directly to a WriteStream, allowing for easy copying of an entire database. A simple `copy()` operation is included in LevelUP that performs exactly this on two open databases:\n\n```js\nfunction copy (srcdb, dstdb, callback) {\n  srcdb.createReadStream().pipe(dstdb.createWriteStream()).on('close', callback)\n}\n```\n\nThe ReadStream is also [fstream](https://github.com/isaacs/fstream)-compatible which means you should be able to pipe to and from fstreams. So you can serialize and deserialize an entire database to a directory where keys are filenames and values are their contents, or even into a *tar* file using [node-tar](https://github.com/isaacs/node-tar). See the [fstream functional test](https://github.com/rvagg/node-levelup/blob/master/test/functional/fstream-test.js) for an example. *(Note: I'm not really sure there's a great use-case for this but it's a fun example and it helps to harden the stream implementations.)*\n\nKeyStreams and ValueStreams can be treated like standard streams of raw data. If `'keyEncoding'` or `'valueEncoding'` is set to `'binary'` the `'data'` events will simply be standard Node `Buffer` objects straight out of the data store.\n\n\n--------------------------------------------------------\n<a name='approximateSize'></a>\n### db.db.approximateSize(start, end, callback)\n<code>approximateSize()</code> can used to get the approximate number of bytes of file system space used by the range `[start..end)`. The result may not include recently written data.\n\n```js\nvar db = require('level')('./huge.db')\n\ndb.db.approximateSize('a', 'c', function (err, size) {\n  if (err) return console.error('Ooops!', err)\n  console.log('Approximate size of range is %d', size)\n})\n```\n\n**Note:** `approximateSize()` is available via [LevelDOWN](https://github.com/rvagg/node-leveldown/), which by default is accessible as the `db` property of your LevelUP instance. This is a specific LevelDB operation and is not likely to be available where you replace LevelDOWN with an alternative back-end via the `'db'` option.\n\n\n--------------------------------------------------------\n<a name='getProperty'></a>\n### db.db.getProperty(property)\n<code>getProperty</code> can be used to get internal details from LevelDB. When issued with a valid property string, a readable string will be returned (this method is synchronous).\n\nCurrently, the only valid properties are:\n\n* <b><code>'leveldb.num-files-at-levelN'</code></b>: returns the number of files at level *N*, where N is an integer representing a valid level (e.g. \"0\").\n\n* <b><code>'leveldb.stats'</code></b>: returns a multi-line string describing statistics about LevelDB's internal operation.\n\n* <b><code>'leveldb.sstables'</code></b>: returns a multi-line string describing all of the *sstables* that make up contents of the current database.\n\n\n```js\nvar db = require('level')('./huge.db')\nconsole.log(db.db.getProperty('leveldb.num-files-at-level3'))\n// → '243'\n```\n\n**Note:** `getProperty()` is available via [LevelDOWN](https://github.com/rvagg/node-leveldown/), which by default is accessible as the `db` property of your LevelUP instance. This is a specific LevelDB operation and is not likely to be available where you replace LevelDOWN with an alternative back-end via the `'db'` option.\n\n\n--------------------------------------------------------\n<a name=\"destroy\"></a>\n### leveldown.destroy(location, callback)\n<code>destroy()</code> is used to completely remove an existing LevelDB database directory. You can use this function in place of a full directory *rm* if you want to be sure to only remove LevelDB-related files. If the directory only contains LevelDB files, the directory itself will be removed as well. If there are additional, non-LevelDB files in the directory, those files, and the directory, will be left alone.\n\nThe callback will be called when the destroy operation is complete, with a possible `error` argument.\n\n**Note:** `destroy()` is available via [LevelDOWN](https://github.com/rvagg/node-leveldown/) which you will have to install seperately, e.g.:\n\n```js\nrequire('leveldown').destroy('./huge.db', function (err) { console.log('done!') })\n```\n\n--------------------------------------------------------\n<a name=\"repair\"></a>\n### leveldown.repair(location, callback)\n<code>repair()</code> can be used to attempt a restoration of a damaged LevelDB store. From the LevelDB documentation:\n\n> If a DB cannot be opened, you may attempt to call this method to resurrect as much of the contents of the database as possible. Some data may be lost, so be careful when calling this function on a database that contains important information.\n\nYou will find information on the *repair* operation in the *LOG* file inside the store directory. \n\nA `repair()` can also be used to perform a compaction of the LevelDB log into table files.\n\nThe callback will be called when the repair operation is complete, with a possible `error` argument.\n\n**Note:** `repair()` is available via [LevelDOWN](https://github.com/rvagg/node-leveldown/) which you will have to install seperately, e.g.:\n\n```js\nrequire('leveldown').repair('./huge.db', function (err) { console.log('done!') })\n```\n\n--------------------------------------------------------\n\n<a name=\"events\"></a>\nEvents\n------\n\nLevelUP emits events when the callbacks to the corresponding methods are called.\n\n* `db.emit('put', key, value)` emitted when a new value is `'put'`\n* `db.emit('del', key)` emitted when a value is deleted\n* `db.emit('batch', ary)` emitted when a batch operation has executed\n* `db.emit('ready')` emitted when the database has opened (`'open'` is synonym)\n* `db.emit('closed')` emitted when the database has closed\n* `db.emit('opening')` emitted when the database is opening\n* `db.emit('closing')` emitted when the database is closing\n\nIf you do not pass a callback to an async function, and there is an error, LevelUP will `emit('error', err)` instead.\n\n<a name=\"json\"></a>\nJSON data\n---------\n\nYou specify `'json'` encoding for both keys and/or values, you can then supply JavaScript objects to LevelUP and receive them from all fetch operations, including ReadStreams. LevelUP will automatically *stringify* your objects and store them as *utf8* and parse the strings back into objects before passing them back to you.\n\n<a name=\"custom_encodings\"></a>\nCustom encodings\n----------------\n\nA custom encoding may be provided by passing in an object as an value for `keyEncoding` or `valueEncoding` (wherever accepted), it must have the following properties:\n\n```js\n{\n    encode : function (val) { ... }\n  , decode : function (val) { ... }\n  , buffer : boolean // encode returns a buffer and decode accepts a buffer\n  , type   : String  // name of this encoding type.\n}\n```\n\n<a name=\"extending\"></a>\nExtending LevelUP\n-----------------\n\nA list of <a href=\"https://github.com/rvagg/node-levelup/wiki/Modules\"><b>Node.js LevelDB modules and projects</b></a> can be found in the wiki.\n\nWhen attempting to extend the functionality of LevelUP, it is recommended that you consider using [level-hooks](https://github.com/dominictarr/level-hooks) and/or [level-sublevel](https://github.com/dominictarr/level-sublevel). **level-sublevel** is particularly helpful for keeping additional, extension-specific, data in a LevelDB store. It allows you to partition a LevelUP instance into multiple sub-instances that each correspond to discrete namespaced key ranges.\n\n<a name=\"multiproc\"></a>\nMulti-process access\n--------------------\n\nLevelDB is thread-safe but is **not** suitable for accessing with multiple processes. You should only ever have a LevelDB database open from a single Node.js process. Node.js clusters are made up of multiple processes so a LevelUP instance cannot be shared between them either.\n\nSee the <a href=\"https://github.com/rvagg/node-levelup/wiki/Modules\"><b>wiki</b></a> for some LevelUP extensions, including [multilevel](https://github.com/juliangruber/multilevel), that may help if you require a single data store to be shared across processes.\n\n<a name=\"support\"></a>\nGetting support\n---------------\n\nThere are multiple ways you can find help in using LevelDB in Node.js:\n\n * **IRC:** you'll find an active group of LevelUP users in the **##leveldb** channel on Freenode, including most of the contributors to this project.\n * **Mailing list:** there is an active [Node.js LevelDB](https://groups.google.com/forum/#!forum/node-levelup) Google Group.\n * **GitHub:** you're welcome to open an issue here on this GitHub repository if you have a question.\n\n<a name=\"contributing\"></a>\nContributing\n------------\n\nLevelUP is an **OPEN Open Source Project**. This means that:\n\n> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.\n\nSee the [CONTRIBUTING.md](https://github.com/rvagg/node-levelup/blob/master/CONTRIBUTING.md) file for more details.\n\n### Contributors\n\nLevelUP is only possible due to the excellent work of the following contributors:\n\n<table><tbody>\n<tr><th align=\"left\">Rod Vagg</th><td><a href=\"https://github.com/rvagg\">GitHub/rvagg</a></td><td><a href=\"http://twitter.com/rvagg\">Twitter/@rvagg</a></td></tr>\n<tr><th align=\"left\">John Chesley</th><td><a href=\"https://github.com/chesles/\">GitHub/chesles</a></td><td><a href=\"http://twitter.com/chesles\">Twitter/@chesles</a></td></tr>\n<tr><th align=\"left\">Jake Verbaten</th><td><a href=\"https://github.com/raynos\">GitHub/raynos</a></td><td><a href=\"http://twitter.com/raynos2\">Twitter/@raynos2</a></td></tr>\n<tr><th align=\"left\">Dominic Tarr</th><td><a href=\"https://github.com/dominictarr\">GitHub/dominictarr</a></td><td><a href=\"http://twitter.com/dominictarr\">Twitter/@dominictarr</a></td></tr>\n<tr><th align=\"left\">Max Ogden</th><td><a href=\"https://github.com/maxogden\">GitHub/maxogden</a></td><td><a href=\"http://twitter.com/maxogden\">Twitter/@maxogden</a></td></tr>\n<tr><th align=\"left\">Lars-Magnus Skog</th><td><a href=\"https://github.com/ralphtheninja\">GitHub/ralphtheninja</a></td><td><a href=\"http://twitter.com/ralphtheninja\">Twitter/@ralphtheninja</a></td></tr>\n<tr><th align=\"left\">David Björklund</th><td><a href=\"https://github.com/kesla\">GitHub/kesla</a></td><td><a href=\"http://twitter.com/david_bjorklund\">Twitter/@david_bjorklund</a></td></tr>\n<tr><th align=\"left\">Julian Gruber</th><td><a href=\"https://github.com/juliangruber\">GitHub/juliangruber</a></td><td><a href=\"http://twitter.com/juliangruber\">Twitter/@juliangruber</a></td></tr>\n<tr><th align=\"left\">Paolo Fragomeni</th><td><a href=\"https://github.com/hij1nx\">GitHub/hij1nx</a></td><td><a href=\"http://twitter.com/hij1nx\">Twitter/@hij1nx</a></td></tr>\n<tr><th align=\"left\">Anton Whalley</th><td><a href=\"https://github.com/No9\">GitHub/No9</a></td><td><a href=\"https://twitter.com/antonwhalley\">Twitter/@antonwhalley</a></td></tr>\n<tr><th align=\"left\">Matteo Collina</th><td><a href=\"https://github.com/mcollina\">GitHub/mcollina</a></td><td><a href=\"https://twitter.com/matteocollina\">Twitter/@matteocollina</a></td></tr>\n<tr><th align=\"left\">Pedro Teixeira</th><td><a href=\"https://github.com/pgte\">GitHub/pgte</a></td><td><a href=\"https://twitter.com/pgte\">Twitter/@pgte</a></td></tr>\n<tr><th align=\"left\">James Halliday</th><td><a href=\"https://github.com/substack\">GitHub/substack</a></td><td><a href=\"https://twitter.com/substack\">Twitter/@substack</a></td></tr>\n</tbody></table>\n\n### Windows\n\nA large portion of the Windows support comes from code by [Krzysztof Kowalczyk](http://blog.kowalczyk.info/) [@kjk](https://twitter.com/kjk), see his Windows LevelDB port [here](http://code.google.com/r/kkowalczyk-leveldb/). If you're using LevelUP on Windows, you should give him your thanks!\n\n\n<a name=\"license\"></a>\nLicense &amp; copyright\n-------------------\n\nCopyright (c) 2012-2014 LevelUP contributors (listed above).\n\nLevelUP is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.\n\n=======\n*LevelUP builds on the excellent work of the LevelDB and Snappy teams from Google and additional contributors. LevelDB and Snappy are both issued under the [New BSD Licence](http://opensource.org/licenses/BSD-3-Clause).*\n",readmeFilename:"README.md",bugs:{url:"https://github.com/rvagg/node-levelup/issues"},_id:"levelup@0.18.6",_from:"levelup@~0.18.2"}
},{}],74:[function(t,e){(function(n,r,i){function o(t,e){l.call(this,t)
new i(0)
if(this._dbsize=this.db.container.length(),this._reverse=!!e.reverse,e.end instanceof i?(e.end.length=0)&&(this._end=this.db.container.key(this._dbsize-1)):this._end=e.end,this._limit=e.limit,this._count=0,e.start){for(var n=!1,r=0;r<this._dbsize;r++)if(this.db.container.key(r)>=e.start){this._pos=r,this._reverse&&(this._pos=this.db.container.key(r)>e.start?r-1:r),n=!0
break}n||(this._pos=this._reverse?this._dbsize-1:-1)}else this._pos=this._reverse?this._dbsize-1:0}function a(e){if(!(this instanceof a))return new a(e)
h.call(this,e)
var n=t("./localstorage").localStorage
this.container=new n(e)}function s(t){return t instanceof ArrayBuffer}function u(t,e){if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if("key"===e){if(t instanceof Boolean)return new Error(e+" cannot be `null` or `undefined`")
if(""===t)return new Error(e+" cannot be empty")}if(0==t.toString().indexOf("[object ArrayBuffer]")&&(0==t.byteLength||void 0==t.byteLength))return new Error(e+" cannot be an empty Buffer")
if(s(t)){if(0===t.length)return new Error(e+" cannot be an empty Buffer")}else if(""===String(t))return new Error(e+" cannot be an empty String")}var c=t("util"),h=t("abstract-leveldown").AbstractLevelDOWN,l=t("abstract-leveldown").AbstractIterator,f=function(){},d=r.setImmediate||n.nextTick
c.inherits(o,l),o.prototype._next=function(t){if(this._pos>=this.db.container.length()||this._pos<0)return d(t)
var e,n=this.db.container.key(this._pos)
return this._end&&(this._reverse?n<this._end:n>this._end)?d(t):this._limit&&this._limit>0&&this._count++>=this._limit?d(t):(e=this.db.container.getItem(n),this._pos+=this._reverse?-1:1,void d(t.bind(null,void 0,n,e)))},c.inherits(a,h),a.prototype._open=function(t,e){d(function(){e(null,this)}.bind(this))},a.prototype._put=function(t,e,n,r){var o=u(t,"key")
if(o)return r(o)
if(o=u(e,"value"))return r(o)
if("object"==typeof e&&!i.isBuffer(e)&&void 0==e.buffer){var a={}
a.storetype="json",a.data=e,e=JSON.stringify(a)}this.container.setItem(t,e),d(r)},a.prototype._get=function(t,e,n){var r=u(t,"key")
if(r)return n(r)
s(t)||(t=String(t))
var o=this.container.getItem(t)
if(void 0===o)return d(function(){n(new Error("NotFound: "))})
if(e.asBuffer===!1||i.isBuffer(o)||(o=new i(String(o))),e.asBuffer===!1&&o.indexOf('{"storetype":"json","data"')>-1){var a=JSON.parse(o)
o=a.data}d(function(){n(null,o)})},a.prototype._del=function(t,e,n){var r=u(t,"key")
return r?n(r):(s(t)||(t=String(t)),this.container.removeItem(t),void d(n))},a.prototype._batch=function(t,e,n){var r,o,a,s=0
if(Array.isArray(t))for(;s<t.length;s++)if(t[s]){if(o=i.isBuffer(t[s].key)?t[s].key:String(t[s].key),r=u(o,"key"))return d(n.bind(null,r))
if("del"===t[s].type)this._del(t[s].key,e,f)
else if("put"===t[s].type){if(a=i.isBuffer(t[s].value)?t[s].value:String(t[s].value),r=u(a,"value"))return d(n.bind(null,r))
this._put(o,a,e,f)}}d(n)},a.prototype._iterator=function(t){return new o(this,t)},a.destroy=function(t,e){try{Object.keys(localStorage).forEach(function(e){e.substring(0,t.length+1)==t+"!"&&localStorage.removeItem(e)}),e()}catch(n){}},e.exports=a}).call(this,t("+0JsKK"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer)},{"+0JsKK":11,"./localstorage":75,"abstract-leveldown":78,buffer:2,util:32}],75:[function(t,e,n){function r(t){this._partition=t,this._keys=[]
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
for(var e=this._keys.length;e>=0;e--)this._keys[e]===t&&(this._keys.splice(e,1),window.localStorage.removeItem(t))},r.prototype.clear=function(){window.localStorage.clear()},r.prototype.length=function(){return this._keys.length},n.localStorage=r},{}],76:[function(t,e){e.exports=t(56)},{"+0JsKK":11}],77:[function(t,e){e.exports=t(57)},{"+0JsKK":11}],78:[function(t,e){(function(n,r){function i(t){if(!arguments.length||void 0===t)throw new Error("constructor requires at least a location argument")
if("string"!=typeof t)throw new Error("constructor requires a location string argument")
this.location=t}var o=t("xtend"),a=t("./abstract-iterator"),s=t("./abstract-chained-batch")
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
for(var i,o,a=0,s=t.length;s>a;a++)if(i=t[a],"object"==typeof i){if(o=this._checkKeyValue(i.type,"type",this._isBuffer))return r(o)
if(o=this._checkKeyValue(i.key,"key",this._isBuffer))return r(o)
if("put"==i.type&&(o=this._checkKeyValue(i.value,"value",this._isBuffer)))return r(o)}return"function"==typeof this._batch?this._batch(t,e,r):void n.nextTick(r)},i.prototype.approximateSize=function(t,e,r){if(null==t||null==e||"function"==typeof t||"function"==typeof e)throw new Error("approximateSize() requires valid `start`, `end` and `callback` arguments")
if("function"!=typeof r)throw new Error("approximateSize() requires a callback argument")
return this._isBuffer(t)||(t=String(t)),this._isBuffer(e)||(e=String(e)),"function"==typeof this._approximateSize?this._approximateSize(t,e,r):void n.nextTick(function(){r(null,0)})},i.prototype._setupIteratorOptions=function(t){var e=this
return t=o(t),["start","end","gt","gte","lt","lte"].forEach(function(n){t[n]&&e._isBuffer(t[n])&&0===t[n].length&&delete t[n]}),t.reverse=!!t.reverse,t.reverse&&t.lt&&(t.start=t.lt),t.reverse&&t.lte&&(t.start=t.lte),!t.reverse&&t.gt&&(t.start=t.gt),!t.reverse&&t.gte&&(t.start=t.gte),(t.reverse&&t.lt&&!t.lte||!t.reverse&&t.gt&&!t.gte)&&(t.exclusiveStart=!0),t},i.prototype.iterator=function(t){return"object"!=typeof t&&(t={}),t=this._setupIteratorOptions(t),"function"==typeof this._iterator?this._iterator(t):new a(this)},i.prototype._chainedBatch=function(){return new s(this)},i.prototype._isBuffer=function(t){return r.isBuffer(t)},i.prototype._checkKeyValue=function(t,e){if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(null===t||void 0===t)return new Error(e+" cannot be `null` or `undefined`")
if(this._isBuffer(t)){if(0===t.length)return new Error(e+" cannot be an empty Buffer")}else if(""===String(t))return new Error(e+" cannot be an empty String")},e.exports.AbstractLevelDOWN=i,e.exports.AbstractIterator=a,e.exports.AbstractChainedBatch=s}).call(this,t("+0JsKK"),t("buffer").Buffer)},{"+0JsKK":11,"./abstract-chained-batch":76,"./abstract-iterator":77,buffer:2,xtend:80}],79:[function(t,e){e.exports=t(39)},{}],80:[function(t,e,n){arguments[4][40][0].apply(n,arguments)},{"./has-keys":79,"object-keys":82}],81:[function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=function(t){var e="function"==typeof t&&!(t instanceof RegExp)||"[object Function]"===r.call(t)
return e||"undefined"==typeof window||(e=t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt),e}
e.exports=function(t,e){if(!i(e))throw new TypeError("iterator must be a function")
var r,o,a="string"==typeof t,s=t.length,u=arguments.length>2?arguments[2]:null
if(s===+s)for(r=0;s>r;r++)null===u?e(a?t.charAt(r):t[r],r,t):e.call(u,a?t.charAt(r):t[r],r,t)
else for(o in t)n.call(t,o)&&(null===u?e(t[o],o,t):e.call(u,t[o],o,t))}},{}],82:[function(t,e,n){arguments[4][41][0].apply(n,arguments)},{"./shim":84}],83:[function(t,e){var n=Object.prototype.toString
e.exports=function r(t){var e=n.call(t),r="[object Arguments]"===e
return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},{}],84:[function(t,e){!function(){"use strict"
var n,r=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=t("./foreach"),a=t("./isArguments"),s=!{toString:null}.propertyIsEnumerable("toString"),u=function(){}.propertyIsEnumerable("prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]
n=function(t){var e=null!==t&&"object"==typeof t,n="[object Function]"===i.call(t),h=a(t),l=[]
if(!e&&!n&&!h)throw new TypeError("Object.keys called on a non-object")
if(h)o(t,function(t){l.push(t)})
else{var f,d=u&&n
for(f in t)d&&"prototype"===f||!r.call(t,f)||l.push(f)}if(s){var p=t.constructor,g=p&&p.prototype===t
o(c,function(e){g&&"constructor"===e||!r.call(t,e)||l.push(e)})}return l},e.exports=n}()},{"./foreach":81,"./isArguments":83}],85:[function(t,e){var n=t("events").EventEmitter,r=t("level-sublevel"),i=t("weak-type-wizard"),o=t("noddity-retrieval"),a=t("extend"),s=t("./lib/reflect.js"),u=t("./lib/index_manager.js"),c=t("./lib/post_manager.js"),h=new i({postMetadata:"metadata",string:["content","filename"],"default":{content:"",filename:""},cast:{postMetadata:new i({date:"date",markdown:"boolean"})}})
e.exports=function(t,e,i){function l(t,e){"function"==typeof t&&(e=t),"object"!=typeof t&&(t={})
var n=t.local||!1,r="number"==typeof t.mostRecent?-t.mostRecent:void 0,i=n?y.getLocalPosts:y.getPosts
i(r,void 0,e)}function f(){m.stop(),y.stop()}var d="string"==typeof t?new o(t):t,p=r(e),g=new n
i=a({},i)
var v=Object.create(g),m=new c(d,p.sublevel("posts",{valueEncoding:h.getLevelUpEncoding()}),{refreshEvery:i.refreshEvery}),y=new u(d,m,p.sublevel("index",{valueEncoding:"json"}),{refreshEvery:i.refreshEvery})
return s("change",m,g,"post changed"),s("post added",m,g),s("change",y,g,"index changed"),y.on("change",y.getPosts),v.getPost=m.getPost,v.getPosts=l,v.allPostsAreLoaded=y.allPostsAreLoaded,v.stop=f,v}},{"./lib/index_manager.js":86,"./lib/post_manager.js":87,"./lib/reflect.js":88,events:5,extend:90,"level-sublevel":34,"noddity-retrieval":94,"weak-type-wizard":110}],86:[function(t,e){function n(t,e){var n=t&&e&&t.metadata&&e.metadata&&t.metadata.date&&e.metadata.date
return n&&t.metadata.date!=e.metadata.date?t.metadata.date<e.metadata.date?-1:1:0}function r(t,e){return t.length===e.length&&t.every(function(t,n){return e[n]===t})}function i(t,e,i,c){function h(t,e,r,i){"function"==typeof e&&(i=e),d(function(o,a){o?i(o):t(a,function(t,o){t||(o=o.sort(n),"number"==typeof e&&(o=o.slice(e,r))),i(t,o)})})}c=a({refreshEvery:6e5,comparison:r},c)
var l=Object.create(new s),f=o(i,function(e,n){t.getIndex(n)},c)
f.on("change",function(t,e){l.emit("change",e)})
var d=f.get.bind(f,u)
d()
var p=h.bind(null,e.getPosts),g=h.bind(null,e.getLocalPosts)
return l.getPosts=p,l.getLocalPosts=g,l.allPostsAreLoaded=function(t){d(function(e,n){e?t(!1,!1):g(function(e,r){t(e,e||r.length===n.length)})})},l.stop=f.stop,l}var o=t("levelup-cache"),a=t("extend"),s=t("events").EventEmitter,u=(t("./reflect.js"),"index")
e.exports=i},{"./reflect.js":88,events:5,extend:90,"levelup-cache":91}],87:[function(t,e){function n(t,e){return"undefined"!=typeof e&&c(t)?t.toString()===e.toString():t===e}function r(t,e){return t.content===e.content&&t.metadata.length===e.metadata.length&&t.filename===e.filename&&Object.keys(t.metadata).every(function(r){return n(t.metadata[r],e.metadata[r])})}function i(t,e,n){function i(t,e){p.get(t,e)}function c(t,e){var n=[],r=!1,a=o(),s=t.map(function(t,e){return function(o){i(t,function(t,i){!r&&t?r=t:r||(n[e]=i),o()})}})
a.gate.apply(a,s).then(function(){e(r,n)})}function l(t,e){var n=[],r=!1,i=o(),a=t.map(function(t){return function(e){p.getLocal(t,function(t,o){r||(t?t.notFound||(r=t,i.abort()):n.push(o)),e()})}})
i.gate.apply(i,a).then(function(t){e(r,n),t()})}n=n||{}
var f=Object.create(new s),d=u({refreshEvery:432e5},n,{comparison:r}),p=new a(e,t.getPost,d)
return h("change",p,f),f.getPost=i,f.getPosts=c,f.getLocalPosts=l,f.stop=p.stop,f}var o=t("asynquence"),a=t("levelup-cache"),s=t("events").EventEmitter,u=t("extend"),c=t("util").isDate,h=t("./reflect.js")
e.exports=i},{"./reflect.js":88,asynquence:89,events:5,extend:90,"levelup-cache":91,util:32}],88:[function(t,e){e.exports=function(t,e,n,r){"string"==typeof t&&(t=[t]),t.forEach(function(t){e.on(t,n.emit.bind(n,r||t))})}},{}],89:[function(t,e){!function(t,n,r){"undefined"!=typeof e&&e.exports?e.exports=r():"function"==typeof define&&define.amd?define(r):n[t]=r(t,n)}("ASQ",this,function(t,e){function n(t){return"undefined"!=typeof setImmediate?setImmediate(t):setTimeout(t,0)}function r(){function t(){function t(){clearTimeout(p),p=null,y.length=0,b.length=0,w.length=0,E.length=0}function e(){return v?r():void(p||(p=n(r)))}function r(){var n,r
if(p=null,v)t()
else if(g)for(;b.length;){n=b.shift()
try{n.apply(n,E)}catch(o){E.push(o),o.stack&&E.push(o.stack),0===b.length&&console.error.apply(console,E)}}else if(m&&y.length>0){m=!1,n=y.shift(),r=w.slice(),w.length=0,r.unshift(i())
try{n.apply(n,r)}catch(o){E.push(o),g=!0,e()}}}function i(){function t(){g||v||m||(m=!0,w.push.apply(w,arguments),E.length=0,e())}return t.fail=function(){g||v||m||(g=!0,w.length=0,E.push.apply(E,arguments),e())},t.abort=function(){g||v||(m=!1,v=!0,w.length=0,E.length=0,e())},t}function o(t,e,r){function i(){clearTimeout(p),p=w=E=d=null}function o(){return y?s():void(p||(p=n(s)))}function s(){if(!(g||v||b)){var e,n=[]
if(p=null,m)t.fail.apply(t,d),i()
else if(y)t.abort(),i()
else if(u()){for(b=!0,e=0;e<w.length;e++)n.push(E["m"+e])
t.apply(t,n),i()}}}function u(){if(!(g||v||m||y||b||0===w.length)){var t,e=!0
for(t=0;t<w.length;t++)if(null===w[t]){e=!1
break}return e}}function c(){function t(){if(!(g||v||m||y||b||w[e])){var t=a.call(arguments)
E["m"+e]=t.length>1?t:t[0],w[e]=!0,o()}}var e=w.length
return t.fail=function(){g||v||m||y||b||w[e]||(m=!0,d=a.call(arguments),o())},t.abort=function(){g||v||m||y||b||(y=!0,s())},w[e]=null,t}var h,l,f,d,p,m=!1,y=!1,b=!1,w=[],E={}
for(h=0;h<e.length&&!m&&!y;h++){l=r.slice(),l.unshift(c())
try{e[h].apply(e[h],l)}catch(_){f=_,m=!0
break}}f&&t.fail(f)}function s(){return g||v?_:(arguments.length>0&&y.push.apply(y,arguments),e(),_)}function u(){return v?_:(b.push.apply(b,arguments),e(),_)}function c(){if(g||v||0===arguments.length)return _
var t=a.apply(arguments)
return s(function(e){var n=a.call(arguments)
n.shift(),o(e,t,n)}),_}function h(){if(g||v||0===arguments.length)return _
var t,e=a.call(arguments)
for(t=0;t<e.length;t++)!function(t){s(function(e){var n=a.call(arguments,1)
t.apply(t,n),e()}).or(t.fail)}(e[t])
return _}function l(){if(g||v||0===arguments.length)return _
var t,e=a.call(arguments)
for(t=0;t<e.length;t++)!function(t){s(function(e){var n=a.call(arguments,1)
t.apply(t,n).pipe(e)})}(e[t])
return _}function f(){if(g||v||0===arguments.length)return _
var t,e=a.call(arguments)
for(t=0;t<e.length;t++)!function(t){s(function(e){var n=a.call(arguments,1)
e(t.apply(t,n))})}(e[t])
return _}function d(){return g?_:(v=!0,r(),_)}var p,g=!1,v=!1,m=!0,y=[],b=[],w=[],E=[],_={then:s,or:u,gate:c,pipe:h,seq:l,val:f,abort:d}
return arguments.length>0&&_.then.apply(_,arguments),_}return t}var i,o=(e||{})[t],a=Array.prototype.slice
return i=r(),i.noConflict=function(){return e&&(e[t]=o),i},i})},{}],90:[function(t,e){function n(t){if(!t||"[object Object]"!==i.call(t)||t.nodeType||t.setInterval)return!1
var e=r.call(t,"constructor"),n=r.call(t.constructor.prototype,"isPrototypeOf")
if(t.constructor&&!e&&!n)return!1
var o
for(o in t);return void 0===o||r.call(t,o)}var r=Object.prototype.hasOwnProperty,i=Object.prototype.toString
e.exports=function o(){var t,e,r,i,a,s,u=arguments[0]||{},c=1,h=arguments.length,l=!1
for("boolean"==typeof u&&(l=u,u=arguments[1]||{},c=2),"object"!=typeof u&&"function"!=typeof u&&(u={});h>c;c++)if(null!=(t=arguments[c]))for(e in t)r=u[e],i=t[e],u!==i&&(l&&i&&(n(i)||(a=Array.isArray(i)))?(a?(a=!1,s=r&&Array.isArray(r)?r:[]):s=r&&n(r)?r:{},u[e]=o(l,s,i)):void 0!==i&&(u[e]=i))
return u}},{}],91:[function(t,e){var n=t("stringmap"),r=t("level-sublevel"),i=t("asynquence"),o=t("events").EventEmitter,a=t("expire-unused-keys"),s=t("extend")
e.exports=function(t,e,u){function c(){v.stop(),g.stop()}function h(t){p.del(t),v.forget(t)
var e=m.get(t)
e&&(e.abort(),m.remove(t))}function l(t,n){var r=m.get(t)
r||(r=i(function(n){e(t,function(e,r){p.get(t,function(i,o){!e&&m.has(t)&&(p.put(t,r,function(){y.emit("load",t,r),(i&&i.notFound||!u.comparison(o,r))&&y.emit("change",t,r,o)}),v.touch(t)),n(e,r)})})}),m.set(t,r),r.then(function(e,n,r){m.remove(t),e(n,r)})),"function"==typeof n&&r.then(function(t,e,r){n(e,r),t(e,r)})}function f(t,e){return function(n,r){g.touch(t),"function"==typeof e&&e(n,r)}}u=u||{},u=s({refreshEvery:432e5,checkToSeeIfItemsNeedToBeRefreshedEvery:1e3,ttl:6048e5,comparison:function(t,e){return t===e}},u)
var d=r(t),p=d.sublevel("items"),g=new a(u.ttl,d.sublevel("item-expirations",{valueEncoding:"utf8"}),u.checkToSeeIfItemsNeedToBeRefreshedEvery),v=new a(u.refreshEvery,d.sublevel("refresh",{valueEncoding:"utf8"}),u.checkToSeeIfItemsNeedToBeRefreshedEvery),m=new n,y=Object.create(new o)
return v.on("expire",l),g.on("expire",h),y.stop=c,y.get=function(t,e){p.get(t,function(n,r){n&&n.notFound?l(t,f(t,e)):e&&f(t,e)(n,r)})},y.getLocal=function(t,e){p.get(t,f(t,e))},y.refresh=function(t,e){l(t,f(t,e))},y}},{asynquence:89,events:5,"expire-unused-keys":92,extend:90,"level-sublevel":34,stringmap:93}],92:[function(t,e){function n(t){function e(){n=!1}var n=!1
return function(){if(!n){n=!0
var r=Array.prototype.slice.call(arguments,0)
r.push(e),t.apply(null,r)}}}var r=t("events").EventEmitter
e.exports=function(t,e,i){var o=new r,a=[],s=n(function(n){var r=(new Date).getTime(),i=[]
e.createReadStream().on("data",function(e){parseInt(e.value)+t<r&&i.push(e.key)}).on("end",function(){var t=e.batch()
i.filter(function(t){return-1===a.indexOf(t)}).forEach(function(e){o.emit("expire",e),t.del(e)}),a=[],t.write(n)})})
o.on("touch",function(t){e.put(t,(new Date).getTime())}),o.on("forget",function(t){a.push(t),e.del(t)})
var u=setInterval(s,i||1e3)
return o.touch=o.emit.bind(o,"touch"),o.forget=o.emit.bind(o,"forget"),o.stop=function(){clearInterval(u)},o}},{events:5}],93:[function(t,e){var n=function(){"use strict"
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
"undefined"!=typeof e&&"undefined"!=typeof e.exports&&(e.exports=n)},{}],94:[function(t,e){var n=t("http"),r=t("url"),i=(t("concat-stream"),t("text-metadata-parser"))
e.exports=function(t){var e=function(e,i,o){var a="",s=r.resolve(t,e)
n.get(r.parse(s),function(t){t.setEncoding&&t.setEncoding("utf8"),t.on("data",function(t){null!==a&&(a+=t)}),t.on("error",function(t){a=null,i(t)}),t.on("end",function(e){if(null!==a)if("undefined"!=typeof e&&(a+=e),200!==t.statusCode)i(new Error("Lookup of "+s+" returned status "+t.statusCode+"\n========\n"+a))
else{var n=null
try{n=o(a)}catch(r){i(new Error("Error parsing file with contents:\n"+a+"\n==========\n"+r.message))}null!==n&&i(!1,n)}})}).on("error",function(t){i(new Error("Lookup of "+s+" failed\n========\n"+t.message))})}
return{getIndex:function(t){e("index.json",t,JSON.parse)},getPost:function(t,n){e(t,n,function(e){var n=i(e,{date:"date","boolean":"markdown"})
return n.filename=t,n})}}}},{"concat-stream":95,http:6,"text-metadata-parser":109,url:30}],95:[function(t,e){function n(t){r.Stream.call(this),this.writable=!0,t&&(this.cb=t),this.body=[],this.on("error",function(){})}var r=t("stream"),i=t("bops"),o=t("util")
o.inherits(n,r.Stream),n.prototype.write=function(t){this.emit("data",t),this.body.push(t)},n.prototype.destroy=function(){},n.prototype.arrayConcat=function(t){return 0===t.length?[]:1===t.length?t[0]:t.reduce(function(t,e){return t.concat(e)})},n.prototype.isArray=function(t){return Array.isArray(t)},n.prototype.getBody=function(){return 0!==this.body.length?"string"==typeof this.body[0]?this.body.join(""):this.isArray(this.body[0])?this.arrayConcat(this.body):i.is(this.body[0])?i.join(this.body):this.body:void 0},n.prototype.end=function(){this.emit("end"),this.cb&&this.cb(this.getBody())},e.exports=function(t){return new n(t)},e.exports.ConcatStream=n},{bops:96,stream:29,util:32}],96:[function(t,e){function n(t,e){for(var n in t)e[n]=t[n]}var r={}
e.exports=r,r.from=t("./from.js"),r.to=t("./to.js"),r.is=t("./is.js"),r.subarray=t("./subarray.js"),r.join=t("./join.js"),r.copy=t("./copy.js"),r.create=t("./create.js"),n(t("./read.js"),r),n(t("./write.js"),r)},{"./copy.js":99,"./create.js":100,"./from.js":101,"./is.js":102,"./join.js":103,"./read.js":105,"./subarray.js":106,"./to.js":107,"./write.js":108}],97:[function(t,e){!function(){"use strict"
function t(t){var e,n,i,o,a,s
if(t.length%4>0)throw"Invalid string. Length must be a multiple of 4"
for(a=t.indexOf("="),a=a>0?t.length-a:0,s=[],i=a>0?t.length-4:t.length,e=0,n=0;i>e;e+=4,n+=3)o=r.indexOf(t[e])<<18|r.indexOf(t[e+1])<<12|r.indexOf(t[e+2])<<6|r.indexOf(t[e+3]),s.push((16711680&o)>>16),s.push((65280&o)>>8),s.push(255&o)
return 2===a?(o=r.indexOf(t[e])<<2|r.indexOf(t[e+1])>>4,s.push(255&o)):1===a&&(o=r.indexOf(t[e])<<10|r.indexOf(t[e+1])<<4|r.indexOf(t[e+2])>>2,s.push(o>>8&255),s.push(255&o)),s}function n(t){function e(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}var n,i,o,a=t.length%3,s=""
for(n=0,o=t.length-a;o>n;n+=3)i=(t[n]<<16)+(t[n+1]<<8)+t[n+2],s+=e(i)
switch(a){case 1:i=t[t.length-1],s+=r[i>>2],s+=r[i<<4&63],s+="=="
break
case 2:i=(t[t.length-2]<<8)+t[t.length-1],s+=r[i>>10],s+=r[i>>4&63],s+=r[i<<2&63],s+="="}return s}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
e.exports.toByteArray=t,e.exports.fromByteArray=n}()},{}],98:[function(t,e){function n(t,e,n){e=void 0===e?0:e,n=void 0===n?t.length:n
var u,h,l=0,f=128,d=0
for(a.length=o.length=0;l<t.length;)h=t[l],!d&&h&f?(u=r(h),d+=u,8>u&&(a[a.length]=h&c[6-u])):d?(a[a.length]=h&c[6],--d,!d&&a.length&&(o[o.length]=s(i(a,u)),a.length=0)):o[o.length]=s(h),++l
return a.length&&!d&&(o[o.length]=s(i(a,u)),a.length=0),o.join("")}function r(t){for(var e=0;7>e&&t&u[e];++e);return e}function i(t){for(var e=0,n=0,r=t.length;r>n;++n)e|=t[n]<<6*(r-n-1)
return e}e.exports=n
var o=[],a=[],s=String.fromCharCode,u=[64,32,16,8,4,2,1],c=[0,1,3,7,15,31,63,127]},{}],99:[function(t,e){function n(t,e,n,o,a){return n=arguments.length<3?0:n,o=arguments.length<4?0:o,a=arguments.length<5?t.length:a,a!==o&&0!==e.length&&0!==t.length?(a>t.length&&(a=t.length),e.length-n<a-o&&(a=e.length-n+start),t.buffer!==e.buffer?r(t,e,n,o,a):i(t,e,n,o,a)):void 0}function r(t,e,n,r,i){for(var o=i-r+n,a=n,s=r;o>a;++a,++s)e[a]=t[s]}function i(t,e,n,r,i){for(var a=i+r,s=new Uint8Array(o.call(t,r,a)),u=0;a>r;++r,++u)e[n++]=s[u]}e.exports=n
var o=[].slice},{}],100:[function(t,e){e.exports=function(t){return new Uint8Array(t)}},{}],101:[function(t,e){function n(t,e){return Array.isArray(t)?new Uint8Array(t):s[e||"utf8"](t)}function r(t){for(var e=t.length/2,n=new Uint8Array(e),r="",i=0,o=t.length;o>i;++i)r+=t.charAt(i),i>0&&i%2===1&&(n[i>>>1]=parseInt(r,16),r="")
return n}function i(t){for(var e,n,r=[],i=0,o=t.length;o>i;++i)if(n=t.charCodeAt(i),128&n){e=encodeURIComponent(t.charAt(i)).substr(1).split("%")
for(var a=0,s=e.length;s>a;++a)r[r.length]=parseInt(e[a],16)}else r[r.length]=n
return new Uint8Array(r)}function o(t){return new Uint8Array(a.toByteArray(t))}e.exports=n
var a=t("base64-js"),s={hex:r,utf8:i,base64:o}},{"base64-js":97}],102:[function(t,e){e.exports=function(t){return t instanceof Uint8Array}},{}],103:[function(t,e){function n(t,e){if(!t.length)return new Uint8Array(0)
for(var n=void 0!==e?e:r(t),i=new Uint8Array(n),o=t[0],a=o.length,s=0,u=0,c=0;n>c;)u!==a?i[c++]=o[u++]:(u=0,++s,o=t[s],a=o&&o.length)
return i}function r(t){for(var e=0,n=0,r=t.length;r>n;++n)e+=t[n].byteLength
return e}e.exports=n},{}],104:[function(t,e){function n(t){return new DataView(t.buffer,0)}function r(t){var e=o.get(t.buffer)
return e||o.set(t.buffer,e=new DataView(t.buffer,0)),e}var i,o
e.exports=i={},o="undefined"==typeof WeakMap?null:new WeakMap,i.get=o?r:n},{}],105:[function(t,e){function n(t,e){return t[e]}function r(t,e){var n=t[e]
return 128>n?n:n-256}function i(t,e){var n=v.get(t)
return n.getUint16(e+t.byteOffset,!0)}function o(t,e){var n=v.get(t)
return n.getUint32(e+t.byteOffset,!0)}function a(t,e){var n=v.get(t)
return n.getInt16(e+t.byteOffset,!0)}function s(t,e){var n=v.get(t)
return n.getInt32(e+t.byteOffset,!0)}function u(t,e){var n=v.get(t)
return n.getFloat32(e+t.byteOffset,!0)}function c(t,e){var n=v.get(t)
return n.getFloat64(e+t.byteOffset,!0)}function h(t,e){var n=v.get(t)
return n.getUint16(e+t.byteOffset,!1)}function l(t,e){var n=v.get(t)
return n.getUint32(e+t.byteOffset,!1)}function f(t,e){var n=v.get(t)
return n.getInt16(e+t.byteOffset,!1)}function d(t,e){var n=v.get(t)
return n.getInt32(e+t.byteOffset,!1)}function p(t,e){var n=v.get(t)
return n.getFloat32(e+t.byteOffset,!1)}function g(t,e){var n=v.get(t)
return n.getFloat64(e+t.byteOffset,!1)}e.exports={readUInt8:n,readInt8:r,readUInt16LE:i,readUInt32LE:o,readInt16LE:a,readInt32LE:s,readFloatLE:u,readDoubleLE:c,readUInt16BE:h,readUInt32BE:l,readInt16BE:f,readInt32BE:d,readFloatBE:p,readDoubleBE:g}
var v=t("./mapped.js")},{"./mapped.js":104}],106:[function(t,e){function n(t,e,n){return t.subarray(e||0,n||t.length)}e.exports=n},{}],107:[function(t,e){function n(t,e){return u[e||"utf8"](t)}function r(t){for(var e,n="",r=0,i=t.length;i>r;++r)e=t[r],n+=((240&e)>>>4).toString(16),n+=(15&e).toString(16)
return n}function i(t){return s(t)}function o(t){return a.fromByteArray(t)}e.exports=n
var a=t("base64-js"),s=t("to-utf8"),u={hex:r,utf8:i,base64:o}},{"base64-js":97,"to-utf8":98}],108:[function(t,e){function n(t,e,n){return t[n]=e}function r(t,e,n){return t[n]=0>e?e+256:e}function i(t,e,n){var r=v.get(t)
return r.setUint16(n+t.byteOffset,e,!0)}function o(t,e,n){var r=v.get(t)
return r.setUint32(n+t.byteOffset,e,!0)}function a(t,e,n){var r=v.get(t)
return r.setInt16(n+t.byteOffset,e,!0)}function s(t,e,n){var r=v.get(t)
return r.setInt32(n+t.byteOffset,e,!0)}function u(t,e,n){var r=v.get(t)
return r.setFloat32(n+t.byteOffset,e,!0)}function c(t,e,n){var r=v.get(t)
return r.setFloat64(n+t.byteOffset,e,!0)}function h(t,e,n){var r=v.get(t)
return r.setUint16(n+t.byteOffset,e,!1)}function l(t,e,n){var r=v.get(t)
return r.setUint32(n+t.byteOffset,e,!1)}function f(t,e,n){var r=v.get(t)
return r.setInt16(n+t.byteOffset,e,!1)}function d(t,e,n){var r=v.get(t)
return r.setInt32(n+t.byteOffset,e,!1)}function p(t,e,n){var r=v.get(t)
return r.setFloat32(n+t.byteOffset,e,!1)}function g(t,e,n){var r=v.get(t)
return r.setFloat64(n+t.byteOffset,e,!1)}e.exports={writeUInt8:n,writeInt8:r,writeUInt16LE:i,writeUInt32LE:o,writeInt16LE:a,writeInt32LE:s,writeFloatLE:u,writeDoubleLE:c,writeUInt16BE:h,writeUInt32BE:l,writeInt16BE:f,writeInt32BE:d,writeFloatBE:p,writeDoubleBE:g}
var v=t("./mapped.js")},{"./mapped.js":104}],109:[function(t,e){function n(t){for(var e=t.split("\n"),n=!1,r=!1,i={content:"",metadata:{}},o=0;o<e.length&&!r;o++)if(n)r||(r=!/^\s*$/.test(e[o]))
else{var a=/^([^:]+):\s*([^\r\n]+)\s*$/.exec(e[o])
if(a&&3===a.length){var s=a[1].trim()
i.metadata[s]=a[2]}else{if(0===o)return{content:t,metadata:{}}
n=!0}}return i.content=e.slice(o-1).join("\n"),i}function r(t,e){var r=n(e)
return r.metadata=t(r.metadata),r}function i(t,e,n){var o="string"!=typeof e
"undefined"==typeof n&&"string"!=typeof e&&(n=e)
var a="object"==typeof n?t.extend(n):t
return o?i.bind(null,a):r(a,e)}var o=t("weak-type-wizard")
e.exports=i.bind(null,new o({}))},{"weak-type-wizard":110}],110:[function(t,e){function n(t){return Object.keys(t).reduce(function(e,n){return a(!0,e,r(t[n],n))},{})}function r(t,e){return"string"==typeof t?r([t],e):Array.isArray(t)?t.reduce(function(t,n){return t[n]=e,t},{}):{}}function i(t,e,n){return Object.keys(e).filter(function(e){return"undefined"!=typeof t[e]}).forEach(function(r){var i=n[t[r]]
"function"==typeof i&&(e[r]=i(e[r]))}),e}function o(t,e,r){var u=function(n){var o=a(!0,{},e,n)
return i(t,o,r)}
return u.extend=function(i){var u=i.default
delete i.default
var c=i.cast
delete i.cast
var h=n(i)
return new o(a(!0,{},t,h),a(!0,{},e,u),a(!0,{},s,r,c))},u.getLevelUpEncoding=function(){return{buffer:!1,type:"weak-type-wizard",encode:JSON.stringify,decode:function(t){return u(JSON.parse(t))}}},u}var a=t("extend"),s={"boolean":function(t){return"false"!==t.toString().toLowerCase()&&!(/^\d+$/.test(t)&&0!==parseInt(t))},number:function(t){return parseFloat(t)},string:function(t){return t.toString()},date:function(t){return new Date(t)}},u=new o({},{})
e.exports=function(t){return u.extend(t)}},{extend:90}],111:[function(t,e){function n(t,e){for(var n=0,r=e.indexOf(t);-1!==r;)n++,r=e.indexOf(t,r+1)
return n}function r(t,e,r){return r.replace(/\[\[([\w.-]+)(?:\|([^\]>\n]+))?\]\]/gm,function(r,i,o,a,s){var u=n("<code",s.substr(0,a)),c=n("</code",s.substr(0,a))
return u!==c?r:(o=o||i,t.emit("link",i),'<a href="'+e+i+'">'+o+"</a>")})}var i=t("events").EventEmitter
e.exports=function(t){var e=Object.create(new i)
return e.linkify=r.bind(null,e,t),e}},{events:5}],112:[function(t,e){function n(t,e){function n(t){u.mixinHtml(t),u.parseTemplate(t),u.mixinChildPosts(t),u.mixinRenderedHtmlEmitter(t),t.on("all child posts fetched",function(t){t.templateElements.forEach(n)})}function i(t,e){var r=u.makeNewMixinObject(t)
n(r),r.on("final html rendered",function(t){e(null,t.renderedHtml)})}function o(t){u.mixinHtml(t),u.parseTemplate(t),u.mixinTemplateRactive(t),u.updateEmitterMixin(t),u.mixinTeardownChildren(t),u.mixinChildPosts(t),t.on("child post fetched",function(e){t.torndown||(o(e),t.children.push(e))}),t.on("post changed",function(e){var n=u.makeNewMixinObject(e)
n.elementId=t.elementId,n.data=t.data,t.ractive.teardown(),t.removeAllListeners(),o(n)}),t.ractive.on("teardown",function(){t.torndown=!0,t.teardownChildren(),t.removeAllListeners()})}function a(t){function e(e){t.teardownChildren(),s(e,t.ractive)}t.on("post changed",e),t.change=function(n){t.removeListener("post changed",e),e(n)},t.ractive.on("teardown",function(){t.teardownChildren(),t.torndown=!0})}function s(t,e){var n=u.makeNewMixinObject(t)
return n.ractive=e,u.mixinHtml(n),u.parseTemplate(n),u.updateEmitterMixin(n),u.mixinTeardownChildren(n),u.mixinChildPosts(n),a(n),n.on("child post fetched",function(t){n.torndown||(o(t),n.children.push(t))}),e.set("html",n.html),e.set("metadata",t.metadata),e.set("current",t.filename),n.change}var u=r(t,e)
return{populateRootRactive:s,renderPost:i}}var r=t("./mixins")
e.exports=n},{"./mixins":113}],113:[function(t,e){(function(n){function r(t){try{return new p({el:null,data:t.data,template:t.renderedHtml||t.html,preserveWhitespace:!0}).toHTML()}catch(e){return t.emit("error",e),e.message}}function i(t){var e=Object.create(new d)
return t&&(e.post=t,e.postName=t.filename),e}function o(t,e){var n=l.generatePostDiv(e.elementId),r=t.renderedHtml||t.html
return t.renderedHtml=r.replace(n,e.renderedHtml),t}function a(t,e){function r(){e.emit("all child posts fetched",e)}var i=0
return e.templateElements.forEach(function(n){t(n.postName,function(t,o){i+=1,t?n.err=t:(n.post=o,e.emit("child post fetched",n)),i===e.templateElements.length&&r()})}),0===e.templateElements.length&&n.nextTick(r),e}function s(t,e){return e.html=t(f(e.post)),e}function u(t){return t.on("all child posts fetched",function(t){if(0===t.templateElements.length)t.renderedHtml=r(t),n.nextTick(function(){t.emit("final html rendered",t)})
else{var e=0,i=function(n){o(t,n),e+=1,e>=t.templateElements.length&&(t.renderedHtml=r(t),t.emit("final html rendered",t))}
t.templateElements.forEach(function(t){t.once("final html rendered",i)})}}),t}function c(t){try{t.ractive=new p({el:t.elementId,data:t.data,template:t.html,preserveWhitespace:!0})}catch(e){t.ractive=new p({el:t.elementId,data:{error:e.message},template:v}),t.emit("error",e)}t.emit("ractive created",t)}function h(t){t.children=[],t.teardownChildren=function(){t.children.forEach(function(t){t.ractive&&t.ractive.teardown(),t.torndown=!0})}}var l=t("./templateToolbox.js"),f=l.htmlify,d=t("events").EventEmitter,p=t("ractive"),g=t("./updateEmitterMixin.js"),v=p.parse("{{error}}")
e.exports=function(e,n){return{mixinHtml:s.bind(null,n),makeNewMixinObject:i,mixinRenderedHtmlEmitter:u,parseTemplate:t("./parseTemplate"),mixinChildPosts:a.bind(null,e.getPost),updateEmitterMixin:g(e),mixinTemplateRactive:c,mixinTeardownChildren:h}}}).call(this,t("+0JsKK"))},{"+0JsKK":11,"./parseTemplate":116,"./templateToolbox.js":117,"./updateEmitterMixin.js":118,events:5,ractive:114}],114:[function(t,e){!function(t){"use strict"
var n=t.Ractive,r=void 0,i=function(){var t,e
return t={el:null,template:"",complete:null,preserveWhitespace:!1,append:!1,twoway:!0,modifyArrays:!0,lazy:!1,debug:!1,noIntro:!1,transitionsEnabled:!0,magic:!1,noCssTransform:!1,adapt:[],sanitize:!1,stripComments:!0,isolated:!1,delimiters:["{{","}}"],tripleDelimiters:["{{{","}}}"],computed:null},e={keys:Object.keys(t),defaults:t}}(r),o=function(){return"undefined"!=typeof document?document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"):void 0}(),a={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},s=function(t,e){return t?function(t,n){return n&&n!==e.html?document.createElementNS(n,t):document.createElement(t)}:function(t,n){if(n&&n!==e.html)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information"
return document.createElement(t)}}(o,a),u="object"==typeof document,c=function(t){try{return Object.defineProperty({},"test",{value:0}),t&&Object.defineProperty(document.createElement("div"),"test",{value:0}),Object.defineProperty}catch(e){return function(t,e,n){t[e]=n.value}}}(u),h=function(t,e,n){try{try{Object.defineProperties({},{test:{value:0}})}catch(r){throw r}return n&&Object.defineProperties(t("div"),{test:{value:0}}),Object.defineProperties}catch(r){return function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t,r,n[r])}}}(s,c,u),l=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},f=function(t){return function(e,n,r){var i
if("string"!=typeof n||!t(r))throw new Error("Bad arguments")
if(i=+e.get(n)||0,!t(i))throw new Error("Cannot add to a non-numeric value")
return e.set(n,i+r)}}(l),d=function(t){return function(e,n){return t(this,e,void 0===n?1:+n)}}(f),p=function(t,e){return null===t&&null===e?!0:"object"==typeof t||"object"==typeof e?!1:t===e},g=function(){function t(t){setTimeout(t,0)}function e(t,e){return function(){for(var n;n=t.shift();)n(e)}}function n(t,e,i,o){var a
if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise")
if(e instanceof r)e.then(i,o)
else if(!e||"object"!=typeof e&&"function"!=typeof e)i(e)
else{try{a=e.then}catch(s){return void o(s)}if("function"==typeof a){var u,c,h
c=function(e){u||(u=!0,n(t,e,i,o))},h=function(t){u||(u=!0,o(t))}
try{a.call(e,c,h)}catch(s){if(!u)return o(s),void(u=!0)}}else i(e)}}var r,i={},o={},a={}
return r=function(s){var u,c,h,l,f,d,p=[],g=[],v=i
return h=function(n){return function(r){v===i&&(u=r,v=n,c=e(v===o?p:g,u),t(c))}},l=h(o),f=h(a),s(l,f),d={then:function(e,o){var a=new r(function(r,s){var u=function(t,e,i){e.push("function"==typeof t?function(e){var i
try{i=t(e),n(a,i,r,s)}catch(o){s(o)}}:i)}
u(e,p,r),u(o,g,s),v!==i&&t(c)})
return a}},d["catch"]=function(t){return this.then(null,t)},d},r.all=function(t){return new r(function(e,n){var r,i,o,a=[]
if(!t.length)return void e(a)
for(o=function(i){t[i].then(function(t){a[i]=t,--r||e(a)},n)},r=i=t.length;i--;)o(i)})},r.resolve=function(t){return new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})},r}(),v=function(){var t=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g
return function(e){return(e||"").replace(t,".$1")}}(),m=["o","ms","moz","webkit"],y=function(t){return"undefined"!=typeof window?(function(t,e,n){var r,i
if(!n.requestAnimationFrame){for(r=0;r<t.length&&!n.requestAnimationFrame;++r)n.requestAnimationFrame=n[t[r]+"RequestAnimationFrame"]
n.requestAnimationFrame||(i=n.setTimeout,n.requestAnimationFrame=function(t){var n,r,o
return n=Date.now(),r=Math.max(0,16-(n-e)),o=i(function(){t(n+r)},r),e=n+r,o})}}(t,0,window),window.requestAnimationFrame):void 0}(m),b=function(){return"undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()}}(),w=[],E=function(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)},_=function(t,e,n){var r,i,o,a,s,u="/* Ractive.js component styles */\n",c={},h=[]
if(e)return t.push(function(){r=t.runloop}),i=document.createElement("style"),i.type="text/css",o=document.getElementsByTagName("head")[0],s=!1,a=i.styleSheet,{add:function(t){t.css&&(c[t._guid]||(c[t._guid]=0,h.push(t.css),r.scheduleCssUpdate()),c[t._guid]+=1)},remove:function(t){t.css&&(c[t._guid]-=1,c[t._guid]||(n(h,t.css),r.scheduleCssUpdate()))},update:function(){var t
h.length?(t=u+h.join(" "),a?a.cssText=t:i.innerHTML=t,s||o.appendChild(i)):s&&o.removeChild(i)}}}(w,u,E),x=function(t,e){var n,r,i,o,a,s
for(n=[],s=t._rendering?t.fragment.docFrag:t.el,r=s.querySelectorAll('input[type="checkbox"][name="{{'+e+'}}"]'),o=r.length,a=0;o>a;a+=1)i=r[a],(i.hasAttribute("checked")||i.checked)&&n.push(i._ractive.value)
return n},k=Object.prototype.hasOwnProperty,S=function(t){do if(t.context)return t.context
while(t=t.parent)
return""},O=function(t,e,n,r){var i,o='Could not resolve reference - too many "../" prefixes'
return t.push(function(){i=t.get}),function(t,a,s){var u,c,h,l,f,d,p,g,v
if(a=e(a),"."===a)return r(s)
if("."===a.charAt(0)){if(u=r(s),c=u?u.split("."):[],"../"===a.substr(0,3)){for(;"../"===a.substr(0,3);){if(!c.length)throw new Error(o)
c.pop(),a=a.substring(3)}return c.push(a),c.join(".")}return u?u+a:a.substring(1)}h=a.split("."),l=h.pop(),f=h.length?"."+h.join("."):""
do if(u=s.context,u&&(v=!0,d=u+f,p=i(t,d),(g=t._wrapped[d])&&(p=g.get()),p&&("object"==typeof p||"function"==typeof p)&&l in p))return u+"."+a
while(s=s.parent)
return v||t._parent&&!t.isolated?n.call(t.data,a)?a:void 0!==i(t,a)?a:void 0:a}}(w,v,k,S),T=function(t){var e,n,r,i,o=[""]
for(e=t.length;e--;)for(n=t[e],r=n.split(".");r.length>1;)r.pop(),i=r.join("."),o[i]!==!0&&(o.push(i),o[i]=!0)
return o},A=function(){function t(t,n,r){var o
for(t._patternObservers.length&&i(t,n,n,r,!0),o=0;o<t._deps.length;o+=1)e(t,n,o,r)}function e(t,e,i,o){var a=t._deps[i]
a&&(n(a[e]),o||r(t._depsMap[e],t,i))}function n(t){var e,n
if(t)for(n=t.length,e=0;n>e;e+=1)t[e].update()}function r(t,n,r,i){var o
if(t)for(o=t.length;o--;)e(n,t[o],r,i)}function i(t,e,n,r,a){var u,c,h,l,f,d,p,g
for(u=t._patternObservers.length;u--;)c=t._patternObservers[u],c.regex.test(n)&&c.update(n)
r||(g=function(e){if(h=t._depsMap[e])for(u=h.length;u--;)l=h[u],f=s.exec(l)[0],d=n?n+"."+f:f,i(t,l,d)},a?(p=o(n),p.forEach(g)):g(e))}function o(t){var e,n,r,i,o,s
for(e=t.split("."),n=a(e.length),o=[],r=function(t,n){return t?"*":e[n]},i=n.length;i--;)s=n[i].map(r).join("."),o[s]||(o.push(s),o[s]=!0)
return o}function a(t){var e,n,r,i,o,a=""
if(!u[t]){for(r=[];a.length<t;)a+=1
for(e=parseInt(a,2),i=function(t){return"1"===t},o=0;e>=o;o+=1){for(n=o.toString(2);n.length<t;)n="0"+n
r[o]=Array.prototype.map.call(n,i)}u[t]=r}return u[t]}var s,u={}
return s=/[^\.]+$/,t.multiple=function(t,n,r){var o,a,s
if(s=n.length,t._patternObservers.length)for(o=s;o--;)i(t,n[o],n[o],r,!0)
for(o=0;o<t._deps.length;o+=1)if(t._deps[o])for(a=s;a--;)e(t,n[a],o,r)},t}(),N=function(t){var e,n,r,i
return e=function(t,e){var o=[]
return o.detachQueue=[],o.remove=r,o.init=i,o._check=n,o._callback=t,o._previous=e,e&&e.push(o),o},n=function(){var t
if(this._ready&&!this.length){for(;t=this.detachQueue.pop();)t.detach()
"function"==typeof this._callback&&this._callback(),this._previous&&this._previous.remove(this)}},r=function(e){t(this,e),this._check()},i=function(){this._ready=!0,this._check()},e}(E),L=function(t,e,n,r,i,o,a,s){function u(){var t,n,r
for(b&&(b.focus(),b=null);t=k.pop();)t.update().deferred=!1
for(;t=w.pop();)t._sort()
for(;t=E.pop();)t.init()
for(;t=_.pop();)t.init()
for(;t=x.pop();)t.update()
for(;t=S.pop();)t.active=!1
for(;t=j.pop();)if(j[t._guid]=!1,t._changes.length){for(r={};n=t._changes.pop();)r[n]=f(t,n)
t.fire("change",r)}p&&(e.update(),p=!1)}function c(){var t,e,n
for(n=j.length;n--;)t=j[n],t._changes.length&&(e=o(t._changes),a.multiple(t,e,!0))
for(h();v;){for(v=!1;t=T.pop();)t.update()
for(;t=O.pop();)t.update().deferred=!1
for(;t=A.pop();)t.deferredUpdate()
for(;t=L.pop();)d(t.root,t.keypath,r(t.root,t.keypath))
for(;t=C.pop();)t.update()}}function h(){var t,e,n
if(R.length)for(t=R.splice(0,R.length);e=t.pop();)e.keypath||(n=i(e.root,e.ref,e.parentFragment),void 0!==n?e.resolve(n):R.push(e))}t.push(function(){f=t.get,d=t.set})
var l,f,d,p,g,v=!1,m=!1,y=0,b=null,w=[],E=[],_=[],x=[],k=[],S=[],O=[],T=[],A=[],N={},L=[],C=[],R=[],j=[]
return l={start:function(t,e){this.addInstance(t),m||(y+=1,g=s(e,g))},end:function(){return m?void h():(--y||(m=!0,c(),m=!1,u()),g.init(),void(g=g._previous))},trigger:function(){return y||m?void h():(m=!0,c(),m=!1,void u())},focus:function(t){b=t},addInstance:function(t){t&&!j[t._guid]&&(j.push(t),j[j._guid]=!0)},addLiveQuery:function(t){w.push(t)},addDecorator:function(t){E.push(t)},addTransition:function(t){t._manager=g,g.push(t),_.push(t)},addObserver:function(t){x.push(t)},addAttribute:function(t){k.push(t)},addBinding:function(t){t.active=!0,S.push(t)},scheduleCssUpdate:function(){y||m?p=!0:e.update()},addEvaluator:function(t){v=!0,O.push(t)},addComputation:function(t){v=!0,T.push(t)},addSelectValue:function(t){v=!0,A.push(t)},addCheckbox:function(t){N[t.keypath]||(v=!0,L.push(t))},addRadio:function(t){v=!0,C.push(t)},addUnresolved:function(t){v=!0,R.push(t)},removeUnresolved:function(t){n(R,t)},detachWhenReady:function(t){g.detachQueue.push(t)}},t.runloop=l,l}(w,_,E,x,O,T,A,N),C=function(t,e,n){var r=[],i={tick:function(){var o,a,s
for(s=e(),n.start(),o=0;o<r.length;o+=1)a=r[o],a.tick(s)||r.splice(o--,1)
n.end(),r.length?t(i.tick):i.running=!1},add:function(e){r.push(e),i.running||(i.running=!0,t(i.tick))},abort:function(t,e){for(var n,i=r.length;i--;)n=r[i],n.root===e&&n.keypath===t&&n.stop()}}
return i}(y,b,L),R=function(){var t=Object.prototype.toString
return function(e){return"[object Array]"===t.call(e)}}(),j=function(t){return function(e){var n,r
if(!e||"object"!=typeof e)return e
if(t(e))return e.slice()
n={}
for(r in e)e.hasOwnProperty(r)&&(n[r]=e[r])
return n}}(R),I={},P=function(t,e,n){switch(e){case"splice":return n
case"sort":case"reverse":return null
case"pop":return t.length?[-1]:null
case"push":return[t.length,0].concat(n)
case"shift":return[0,1]
case"unshift":return[0,0].concat(n)}},M=function(t,e){var n,r,i,o
return e?(n=+(e[0]<0?t.length+e[0]:e[0]),r=Math.max(0,e.length-2),i=void 0!==e[1]?e[1]:t.length-n,i=Math.min(i,t.length-n),o=r-i,{start:n,balance:o,added:r,removed:i}):null},F={TEXT:1,INTERPOLATOR:2,TRIPLE:3,SECTION:4,INVERTED:5,CLOSING:6,ELEMENT:7,PARTIAL:8,COMMENT:9,DELIMCHANGE:10,MUSTACHE:11,TAG:12,ATTRIBUTE:13,COMPONENT:15,NUMBER_LITERAL:20,STRING_LITERAL:21,ARRAY_LITERAL:22,OBJECT_LITERAL:23,BOOLEAN_LITERAL:24,GLOBAL:26,KEY_VALUE_PAIR:27,REFERENCE:30,REFINEMENT:31,MEMBER:32,PREFIX_OPERATOR:33,BRACKETED:34,CONDITIONAL:35,INFIX_OPERATOR:36,INVOCATION:40},B=function po(t,e,n){var r,i
if(n||(i=t._wrapped[e])&&i.teardown()!==!1&&(t._wrapped[e]=null),t._cache[e]=void 0,r=t._cacheMap[e])for(;r.length;)po(t,r.pop())},D=function(){var t=/^\s*[0-9]+\s*$/
return function(e){return t.test(e)?[]:{}}}(),U=function(t,e,n,r,i){function o(t,s,u,c){var h,l,f,d,p,g,v,m
e(t._cache[s],u)||(p=t._computations[s],g=t._wrapped[s],v=t._evaluators[s],p&&!p.setting&&p.set(u),g&&g.reset&&(m=g.reset(u)!==!1,m&&(u=g.get())),v&&(v.value=u),p||v||m||(h=s.split("."),l=h.pop(),f=h.join("."),g=t._wrapped[f],g&&g.set?g.set(l,u):(d=g?g.get():a(t,f),d||(d=n(l),o(t,f,d,!0)),d[l]=u)),r(t,s,m),c||(t._changes.push(s),i(t,s)))}var a
return t.push(function(){a=t.get}),t.set=o,o}(w,p,D,B,A),W=function(t,e,n,r){return function(i,o,a,s){var u,c,h,l,f,d,p,g,v,m
if(u=i.root,c=i.keypath,u._changes.push(c),"sort"===a||"reverse"===a)return void r(u,c,o)
if(s){for(h=s.balance?o.length-Math.min(s.balance,0):s.added,f=s.start;h>f;f+=1)e(u,c+"."+f)
if(l=function(e){e.keypath===c&&e.type===t.SECTION&&!e.inverted&&e.docFrag?e.splice(s):e.update()},u._deps.forEach(function(t){var e=t[c]
e&&e.forEach(l)}),s.added&&s.removed)for(d=Math.max(s.added,s.removed),p=s.start,g=p+d,m=s.added===s.removed,f=p;g>f;f+=1)v=c+"."+f,n(u,v)
m||(e(u,c+".length"),n(u,c+".length",!0))}}}(F,B,A,U),q=function(t,e,n,r,i){var o,a,s,u=[],c=["pop","push","reverse","shift","sort","splice","unshift"]
return c.forEach(function(o){var a=function(){var e,a,s,u,c
for(e=n(this,o,Array.prototype.slice.call(arguments)),a=r(this,e),s=Array.prototype[o].apply(this,arguments),this._ractive.setting=!0,c=this._ractive.wrappers.length;c--;)u=this._ractive.wrappers[c],t.start(u.root),i(u,this,o,a),t.end()
return this._ractive.setting=!1,s}
e(u,o,{value:a})}),o={},o.__proto__?(a=function(t){t.__proto__=u},s=function(t){t.__proto__=Array.prototype}):(a=function(t){var n,r
for(n=c.length;n--;)r=c[n],e(t,r,{value:u[r],configurable:!0})},s=function(t){var e
for(e=c.length;e--;)delete t[c[e]]}),a.unpatch=s,a}(L,c,P,M,W),V=function(t,e,n){var r,i,o
return r={filter:function(t){return e(t)&&(!t._ractive||!t._ractive.setting)},wrap:function(t,e,n){return new i(t,e,n)}},i=function(e,r,i){this.root=e,this.value=r,this.keypath=i,r._ractive||(t(r,"_ractive",{value:{wrappers:[],instances:[],setting:!1},configurable:!0}),n(r)),r._ractive.instances[e._guid]||(r._ractive.instances[e._guid]=0,r._ractive.instances.push(e)),r._ractive.instances[e._guid]+=1,r._ractive.wrappers.push(this)},i.prototype={get:function(){return this.value},teardown:function(){var t,e,r,i,a
if(t=this.value,e=t._ractive,r=e.wrappers,i=e.instances,e.setting)return!1
if(a=r.indexOf(this),-1===a)throw new Error(o)
if(r.splice(a,1),r.length){if(i[this.root._guid]-=1,!i[this.root._guid]){if(a=i.indexOf(this.root),-1===a)throw new Error(o)
i.splice(a,1)}}else delete t._ractive,n.unpatch(this.value)}},o="Something went wrong in a rather interesting way",r}(c,R,q),K=function(t,e,n,r,i){function o(e,n,o){function a(e){var o,a
e.value=n,e.updating||(a=e.ractive,o=e.keypath,e.updating=!0,t.start(a),a._changes.push(o),r(a,o),i(a,o),t.end(),e.updating=!1)}var s,u,c,h,l,f
if(s=e.obj,u=e.prop,o&&!o.configurable){if("length"===u)return
throw new Error('Cannot use magic mode with property "'+u+'" - object is not configurable')}o&&(c=o.get,h=o.set),l=c||function(){return n},f=function(t){h&&h(t),n=c?c():t,f._ractiveWrappers.forEach(a)},f._ractiveWrappers=[e],Object.defineProperty(s,u,{get:l,set:f,enumerable:!0,configurable:!0})}var a,s
try{Object.defineProperty({},"test",{value:0})}catch(u){return!1}return a={filter:function(t,e,r){var i,o,a,s,u
return e?(i=e.split("."),o=i.pop(),a=i.join("."),(s=r._wrapped[a])&&!s.magic?!1:(u=r.get(a),n(u)&&/^[0-9]+$/.test(o)?!1:u&&("object"==typeof u||"function"==typeof u))):!1},wrap:function(t,e,n){return new s(t,e,n)}},s=function(t,e,n){var r,i,a,s
return this.magic=!0,this.ractive=t,this.keypath=n,this.value=e,r=n.split("."),this.prop=r.pop(),i=r.join("."),this.obj=i?t.get(i):t.data,a=this.originalDescriptor=Object.getOwnPropertyDescriptor(this.obj,this.prop),a&&a.set&&(s=a.set._ractiveWrappers)?void(-1===s.indexOf(this)&&s.push(this)):void o(this,e,a)},s.prototype={get:function(){return this.value},reset:function(t){this.updating||(this.updating=!0,this.obj[this.prop]=t,r(this.ractive,this.keypath),this.updating=!1)},set:function(t,n){this.updating||(this.obj[this.prop]||(this.updating=!0,this.obj[this.prop]=e(t),this.updating=!1),this.obj[this.prop][t]=n)},teardown:function(){var t,e,n,r,i
return this.updating?!1:(t=Object.getOwnPropertyDescriptor(this.obj,this.prop),e=t&&t.set,void(e&&(r=e._ractiveWrappers,i=r.indexOf(this),-1!==i&&r.splice(i,1),r.length||(n=this.obj[this.prop],Object.defineProperty(this.obj,this.prop,this.originalDescriptor||{writable:!0,enumerable:!0,configurable:!0}),this.obj[this.prop]=n))))}},a}(L,D,R,B,A),z=function(t,e){if(!t)return!1
var n,r
return n={filter:function(n,r,i){return t.filter(n,r,i)&&e.filter(n)},wrap:function(t,e,n){return new r(t,e,n)}},r=function(n,r,i){this.value=r,this.magic=!0,this.magicWrapper=t.wrap(n,r,i),this.arrayWrapper=e.wrap(n,r,i)},r.prototype={get:function(){return this.value},teardown:function(){this.arrayWrapper.teardown(),this.magicWrapper.teardown()},reset:function(t){return this.magicWrapper.reset(t)}},n}(K,V),H=function(t,e,n,r){function i(t,e){var n,r={}
if(!e)return t
e+="."
for(n in t)t.hasOwnProperty(n)&&(r[e+n]=t[n])
return r}function o(t){var e
return a[t]||(e=t?t+".":"",a[t]=function(n,r){var o
return"string"==typeof n?(o={},o[e+n]=r,o):"object"==typeof n?e?i(n,t):n:void 0}),a[t]}var a={}
return function(i,a,s,u){var c,h,l,f
for(c=i.adapt.length,h=0;c>h;h+=1){if(l=i.adapt[h],"string"==typeof l){if(!t[l])throw new Error('Missing adaptor "'+l+'"')
l=i.adapt[h]=t[l]}if(l.filter(s,a,i))return f=i._wrapped[a]=l.wrap(i,s,a,o(a)),f.value=s,s}return u||(i.magic?r.filter(s,a,i)?i._wrapped[a]=r.wrap(i,s,a):n.filter(s,a,i)&&(i._wrapped[a]=n.wrap(i,s,a)):i.modifyArrays&&e.filter(s,a,i)&&(i._wrapped[a]=e.wrap(i,s,a))),s}}(I,V,K,z),$=function(){function t(t,e){var n,r,i
for(n=e.split(".");n.length;)n.pop(),r=n.join("."),i=t._depsMap[r]||(t._depsMap[r]=[]),void 0===i[e]&&(i[e]=0,i[i.length]=e),i[e]+=1,e=r}return function(e){var n,r,i,o,a
i=e.root,o=e.keypath,a=e.priority,n=i._deps[a]||(i._deps[a]={}),r=n[o]||(n[o]=[]),r.push(e),e.registered=!0,o&&t(i,o)}}(),G=function(){function t(t,e){var n,r,i
for(n=e.split(".");n.length;)n.pop(),r=n.join("."),i=t._depsMap[r],i[e]-=1,i[e]||(i.splice(i.indexOf(e),1),i[e]=void 0),e=r}return function(e){var n,r,i,o,a
if(i=e.root,o=e.keypath,a=e.priority,n=i._deps[a][o],r=n.indexOf(e),-1===r||!e.registered)throw new Error("Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks")
n.splice(r,1),e.registered=!1,o&&t(i,o)}}(),J=function(t,e,n,r,i,o){var a,s
t.push(function(){a=t.get,s=t.set})
var u=function(t,e,n,r,o){this.root=t,this.keypath=e,this.priority=o,this.otherInstance=n,this.otherKeypath=r,i(this),this.value=a(this.root,this.keypath)}
return u.prototype={update:function(){var t
this.updating||this.counterpart&&this.counterpart.updating||(t=a(this.root,this.keypath),n(t)&&t._ractive&&t._ractive.setting||r(t,this.value)||(this.updating=!0,e.addInstance(this.otherInstance),s(this.otherInstance,this.otherKeypath,t),this.value=t,this.updating=!1))},reassign:function(t){o(this),o(this.counterpart),this.keypath=t,this.counterpart.otherKeypath=t,i(this),i(this.counterpart)},teardown:function(){o(this)}},function(t,e,n,r){var i,o,a,s,c,h
i=n+"="+r,a=t.bindings,a[i]||(a[i]=!0,o=t.instance,s=t.parentFragment.priority,c=new u(e,n,o,r,s),a.push(c),o.twoway&&(h=new u(o,r,e,n,1),a.push(h),c.counterpart=h,h.counterpart=c))}}(w,L,R,p,$,G),Y=function(t,e,n){function r(t,r,i,o,a){n(r,o,a,!0),e(r.component,t,i,o)}var i
return t.push(function(){i=t.get}),function(t,e){var n,o,a,s,u
if(n=t._parent,o=t.component.parentFragment,o.indexRefs&&void 0!==(u=o.indexRefs[e]))return t.component.indexRefBindings[e]=e,u
do if(o.context&&(a=o.context+"."+e,s=i(n,a),void 0!==s))return r(n,t,a,e,s),s
while(o=o.parent)
return s=i(n,e),void 0!==s?(r(n,t,e,e,s),s):void 0}}(w,J,U),Q={FAILED_LOOKUP:!0},X=function(t,e,n,r,i,o){function a(t,e,n){var a,u,c,h,l=t._cache
return void 0===l[e]?((u=t._computations[e])?a=u.value:(c=t._wrapped[e])?a=c.value:e?a=(h=t._evaluators[e])?h.value:s(t,e):(r(t,"",t.data),a=t.data),l[e]=a):a=l[e],a===o&&(a=t._parent&&!t.isolated?i(t,e,n):void 0),n&&n.evaluateWrapped&&(c=t._wrapped[e])&&(a=c.get()),a}function s(t,i){var s,u,c,h,l,f,d,p
return s=i.split("."),u=s.pop(),c=s.join("."),h=a(t,c),(d=t._wrapped[c])&&(h=d.get()),null!==h&&void 0!==h?((l=t._cacheMap[c])?-1===l.indexOf(i)&&l.push(i):t._cacheMap[c]=[i],"object"!=typeof h||u in h?(p=!e.call(h,u),f=p?n(h[u]):h[u],f=r(t,i,f,!1),t._cache[i]=f,f):t._cache[i]=o):void 0}return t.get=a,a}(w,k,j,H,Y,Q),Z=function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&"function"==typeof console.warn.apply?function(){console.warn.apply(console,arguments)}:function(){}}(),te=function(){var t=Object.prototype.toString
return function(e){return"object"==typeof e&&"[object Object]"===t.call(e)}}(),ee=function(t,e,n,r,i){var o,a,s
return t.push(function(){a=t.interpolate}),s=/^([+-]?[0-9]+\.?(?:[0-9]+)?)(px|em|ex|%|in|cm|mm|pt|pc)$/,o={number:function(t,e){var n
return i(t)&&i(e)?(t=+t,e=+e,n=e-t,n?function(e){return t+e*n}:function(){return t}):null},array:function(t,e){var r,i,o,s
if(!n(t)||!n(e))return null
for(r=[],i=[],s=o=Math.min(t.length,e.length);s--;)i[s]=a(t[s],e[s])
for(s=o;s<t.length;s+=1)r[s]=t[s]
for(s=o;s<e.length;s+=1)r[s]=e[s]
return function(t){for(var e=o;e--;)r[e]=i[e](t)
return r}},object:function(t,n){var i,o,s,u,c
if(!r(t)||!r(n))return null
i=[],u={},s={}
for(c in t)e.call(t,c)&&(e.call(n,c)?(i.push(c),s[c]=a(t[c],n[c])):u[c]=t[c])
for(c in n)e.call(n,c)&&!e.call(t,c)&&(u[c]=n[c])
return o=i.length,function(t){for(var e,n=o;n--;)e=i[n],u[e]=s[e](t)
return u}},cssLength:function(t,e){var n,r,i,o,a,u,c,h
return 0!==t&&"string"!=typeof t||0!==e&&"string"!=typeof e?null:(n=s.exec(t),r=s.exec(e),i=n?n[2]:"",o=r?r[2]:"",i&&o&&i!==o?null:(c=i||o,a=n?+n[1]:0,u=r?+r[1]:0,h=u-a,h?function(t){return a+t*h+c}:function(){return a+c}))}}}(w,k,R,te,l),ne=function(t,e,n){function r(t){return function(){return t}}var i=function(t,i,o,a){if(t===i)return r(i)
if(a){if(o.interpolators[a])return o.interpolators[a](t,i)||r(i)
e('Missing "'+a+'" interpolator. You may need to download a plugin from [TODO]')}return n.number(t,i)||n.array(t,i)||n.object(t,i)||n.cssLength(t,i)||r(i)}
return t.interpolate=i,i}(w,Z,ee),re=function(t,e,n,r){var i=function(t){var e
this.startTime=Date.now()
for(e in t)t.hasOwnProperty(e)&&(this[e]=t[e])
this.interpolator=n(this.from,this.to,this.root,this.interpolator),this.running=!0}
return i.prototype={tick:function(){var n,i,o,a,s,u
return u=this.keypath,this.running?(a=Date.now(),n=a-this.startTime,n>=this.duration?(null!==u&&(e.start(this.root),r(this.root,u,this.to),e.end()),this.step&&this.step(1,this.to),this.complete(this.to),s=this.root._animations.indexOf(this),-1===s&&t("Animation was not found"),this.root._animations.splice(s,1),this.running=!1,!1):(i=this.easing?this.easing(n/this.duration):n/this.duration,null!==u&&(o=this.interpolator(i),e.start(this.root),r(this.root,u,o),e.end()),this.step&&this.step(i,o),!0)):!1},stop:function(){var e
this.running=!1,e=this.root._animations.indexOf(this),-1===e&&t("Animation was not found"),this.root._animations.splice(e,1)}},i}(Z,L,ne,U),ie=function(t,e,n,r,i,o){function a(e,a,s,c){var h,l,f,d
return a&&(a=n(a)),null!==a&&(d=i(e,a)),r.abort(a,e),t(d,s)?(c.complete&&c.complete(c.to),u):(c.easing&&(h="function"==typeof c.easing?c.easing:e.easing[c.easing],"function"!=typeof h&&(h=null)),l=void 0===c.duration?400:c.duration,f=new o({keypath:a,from:d,to:s,root:e,duration:l,easing:h,interpolator:c.interpolator,step:c.step,complete:c.complete}),r.add(f),e._animations.push(f),f)}var s=function(){},u={stop:s}
return function(t,n,r){var i,o,u,c,h,l,f,d,p,g,v,m,y,b
if(i=new e(function(t){o=t}),"object"==typeof t){r=n||{},l=r.easing,f=r.duration,h=[],d=r.step,p=r.complete,(d||p)&&(v={},r.step=null,r.complete=null,g=function(t){return function(e,n){v[t]=n}})
for(u in t)t.hasOwnProperty(u)&&((d||p)&&(m=g(u),r={easing:l,duration:f},d&&(r.step=m)),r.complete=p?m:s,h.push(a(this,u,t[u],r)))
return(d||p)&&(b={easing:l,duration:f},d&&(b.step=function(t){d(t,v)}),p&&i.then(function(t){p(t,v)}),b.complete=o,y=a(this,null,null,b),h.push(y)),{stop:function(){for(var t;t=h.pop();)t.stop()
y&&y.stop()}}}return r=r||{},r.complete&&i.then(r.complete),r.complete=o,c=a(this,t,n,r),i.stop=function(){c.stop()},i}}(p,g,v,C,X,re),oe=function(){return this.fragment.detach()},ae=function(t){return this.el?this.fragment.find(t):null},se=function(t,e,n){var r,i,o,a,s,u,c
if(t){for(r=n("div"),i=["matches","matchesSelector"],c=function(t){return function(e,n){return e[t](n)}},s=i.length;s--;){if(o=i[s],r[o])return c(o)
for(u=e.length;u--;)if(a=e[s]+o.substr(0,1).toUpperCase()+o.substring(1),r[a])return c(a)}return function(t,e){var n,r
for(n=(t.parentNode||t.document).querySelectorAll(e),r=n.length;r--;)if(n[r]===t)return!0
return!1}}}(u,m,s),ue=function(t){return function(e,n){var r=this._isComponentQuery?!this.selector||e.name===this.selector:t(e.node,this.selector)
return r?(this.push(e.node||e.instance),n||this._makeDirty(),!0):void 0}}(se),ce=function(){var t,e,n
t=this._root[this._isComponentQuery?"liveComponentQueries":"liveQueries"],e=this.selector,n=t.indexOf(e),-1!==n&&(t.splice(n,1),t[e]=null)},he=function(){function t(t){var e
return(e=t.parentFragment)?e.owner:t.component&&(e=t.component.parentFragment)?e.owner:void 0}function e(e){var n,r
for(n=[e],r=t(e);r;)n.push(r),r=t(r)
return n}return function(t,n){var r,i,o,a,s,u,c,h,l,f
for(r=e(t.component||t._ractive.proxy),i=e(n.component||n._ractive.proxy),o=r[r.length-1],a=i[i.length-1];o&&o===a;)r.pop(),i.pop(),s=o,o=r[r.length-1],a=i[i.length-1]
if(o=o.component||o,a=a.component||a,l=o.parentFragment,f=a.parentFragment,l===f)return u=l.items.indexOf(o),c=f.items.indexOf(a),u-c||r.length-i.length
if(h=s.fragments)return u=h.indexOf(l),c=h.indexOf(f),u-c||r.length-i.length
throw new Error("An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!")}}(),le=function(t){return function(e,n){var r
return e.compareDocumentPosition?(r=e.compareDocumentPosition(n),2&r?1:-1):t(e,n)}}(he),fe=function(t,e){return function(){this.sort(this._isComponentQuery?e:t),this._dirty=!1}}(le,he),de=function(t){return function(){this._dirty||(t.addLiveQuery(this),this._dirty=!0)}}(L),pe=function(t){var e=this.indexOf(this._isComponentQuery?t.instance:t);-1!==e&&this.splice(e,1)},ge=function(t,e,n,r,i,o){return function(a,s,u,c){var h=[]
return t(h,{selector:{value:s},live:{value:u},_isComponentQuery:{value:c},_test:{value:e}}),u?(t(h,{cancel:{value:n},_root:{value:a},_sort:{value:r},_makeDirty:{value:i},_remove:{value:o},_dirty:{value:!1,writable:!0}}),h):h}}(h,ue,ce,fe,de,pe),ve=function(t){return function(e,n){var r,i
return this.el?(n=n||{},r=this._liveQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!1),i.live&&(r.push(e),r[e]=i),this.fragment.findAll(e,i),i)):[]}}(ge),me=function(t){return function(e,n){var r,i
return n=n||{},r=this._liveComponentQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!0),i.live&&(r.push(e),r[e]=i),this.fragment.findAllComponents(e,i),i)}}(ge),ye=function(t){return this.fragment.findComponent(t)},be=function(t){var e,n,r,i=this._subs[t]
if(i)for(e=Array.prototype.slice.call(arguments,1),n=0,r=i.length;r>n;n+=1)i[n].apply(this,e)},we=function(t,e,n,r){var i,o={}
t.push(function(){i=t.get})
var a=function(t,e){this.root=t,this.ref=e,this.parentFragment=o,t._unresolvedImplicitDependencies[e]=!0,t._unresolvedImplicitDependencies.push(this),n.addUnresolved(this)}
return a.prototype={resolve:function(){var t=this.root
r(t,this.ref),t._unresolvedImplicitDependencies[this.ref]=!1,e(t._unresolvedImplicitDependencies,this)},teardown:function(){n.removeUnresolved(this)}},a}(w,E,L,A),Ee=function(t,e,n){var r={isTopLevel:!0}
return function(i){var o
return i=t(i),o=e(this,i,r),this._captured&&this._captured[i]!==!0&&(this._captured.push(i),this._captured[i]=!0,void 0===o&&this._unresolvedImplicitDependencies[i]!==!0&&new n(this,i)),o}}(v,X,we),_e=function(t){var e
return"undefined"!=typeof window&&document&&t?t.nodeType?t:"string"==typeof t&&(e=document.getElementById(t),!e&&document.querySelector&&(e=document.querySelector(t)),e&&e.nodeType)?e:t[0]&&t[0].nodeType?t[0]:null:null},xe=function(t){return function(e,n){if(e=t(e),n=t(n)||null,!e)throw new Error("You must specify a valid target to insert into")
e.insertBefore(this.detach(),n),this.fragment.pNode=this.el=e}}(_e),ke=function(t,e){var n,r,i,o
return n={},r=0,i=t.map(function(t,i){var a,s,u
s=r,u=e.length
do{if(a=e.indexOf(t,s),-1===a)return o=!0,-1
s=a+1}while(n[a]&&u>s)
return a===r&&(r+=1),a!==i&&(o=!0),n[a]=!0,a}),i.unchanged=!o,i},Se=function(t,e){return function(n,r,i,o){var a
n._changes.push(r),a=function(e){e.type===t.REFERENCE?e.update():e.keypath===r&&e.type===t.SECTION&&!e.inverted&&e.docFrag?e.merge(i):e.update()},n._deps.forEach(function(t){var e=t[r]
e&&e.forEach(a)}),o||e(n,r+".length",!0)}}(F,A),Oe=function(t,e,n,r,i,o,a){function s(t){return JSON.stringify(t)}function u(t){if(t===!0)return s
if("string"==typeof t)return c[t]||(c[t]=function(e){return e[t]}),c[t]
if("function"==typeof t)return t
throw new Error("The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)")}var c={}
return function(s,c,h){var l,f,d,p,g,v,m,y
if(l=this.get(s),!n(l)||!n(c))return this.set(s,c,h&&h.complete)
if(g=l.length===c.length,h&&h.compare){p=u(h.compare)
try{f=l.map(p),d=c.map(p)}catch(b){if(this.debug)throw b
e("Merge operation: comparison failed. Falling back to identity checking"),f=l,d=c}}else f=l,d=c
return v=o(f,d),m=new r(function(t){y=t}),t.start(this,y),i(this,s,c,!0),a(this,s,v,g),t.end(),h&&h.complete&&m.then(h.complete),m}}(L,Z,R,g,U,ke,Se),Te=function(t,e,n){var r=function(t,e,n,r){var i=this
this.root=t,this.keypath=e,this.callback=n,this.defer=r.defer,this.debug=r.debug,this.proxy={update:function(){i.reallyUpdate()}},this.priority=0,this.context=r&&r.context?r.context:t}
return r.prototype={init:function(t){t!==!1?this.update():this.value=n(this.root,this.keypath)},update:function(){return this.defer&&this.ready?void t.addObserver(this.proxy):void this.reallyUpdate()},reallyUpdate:function(){var t,r
if(t=this.value,r=n(this.root,this.keypath),this.value=r,!this.updating){if(this.updating=!0,!e(r,t)||!this.ready)try{this.callback.call(this.context,r,t,this.keypath)}catch(i){if(this.debug||this.root.debug)throw i}this.updating=!1}}},r}(L,p,X),Ae=function(t){return function(e,n){var r,i,o,a,s,u,c
for(r=n.split("."),a=[],u=function(n){var r,i
r=e._wrapped[n]?e._wrapped[n].get():e.get(n)
for(i in r)!r.hasOwnProperty(i)||"_ractive"===i&&t(r)||s.push(n+"."+i)},c=function(t){return t+"."+i};i=r.shift();)"*"===i?(s=[],a.forEach(u),a=s):a[0]?a=a.map(c):a[0]=i
return o={},a.forEach(function(t){o[t]=e.get(t)}),o}}(R),Ne=function(t,e,n,r){var i,o=/\*/
return i=function(t,e,n,r){this.root=t,this.callback=n,this.defer=r.defer,this.debug=r.debug,this.keypath=e,this.regex=new RegExp("^"+e.replace(/\./g,"\\.").replace(/\*/g,"[^\\.]+")+"$"),this.values={},this.defer&&(this.proxies=[]),this.priority="pattern",this.context=r&&r.context?r.context:t},i.prototype={init:function(t){var e,n
if(e=r(this.root,this.keypath),t!==!1)for(n in e)e.hasOwnProperty(n)&&this.update(n)
else this.values=e},update:function(e){var n
{if(!o.test(e))return this.defer&&this.ready?void t.addObserver(this.getProxy(e)):void this.reallyUpdate(e)
n=r(this.root,e)
for(e in n)n.hasOwnProperty(e)&&this.update(e)}},reallyUpdate:function(t){var r=n(this.root,t)
if(this.updating)return void(this.values[t]=r)
if(this.updating=!0,!e(r,this.values[t])||!this.ready){try{this.callback.call(this.context,r,this.values[t],t)}catch(i){if(this.debug||this.root.debug)throw i}this.values[t]=r}this.updating=!1},getProxy:function(t){var e=this
return this.proxies[t]||(this.proxies[t]={update:function(){e.reallyUpdate(t)}}),this.proxies[t]}},i}(L,p,X,Ae),Le=function(t,e,n,r,i){var o=/\*/,a={}
return function(s,u,c,h){var l,f
return u=t(u),h=h||a,o.test(u)?(l=new i(s,u,c,h),s._patternObservers.push(l),f=!0):l=new r(s,u,c,h),e(l),l.init(h.init),l.ready=!0,{cancel:function(){var t
f&&(t=s._patternObservers.indexOf(l),-1!==t&&s._patternObservers.splice(t,1)),n(l)}}}}(v,$,G,Te,Ne),Ce=function(t,e){return function(n,r,i){var o,a,s,u
if(t(n)){i=r,a=n,o=[]
for(n in a)a.hasOwnProperty(n)&&(r=a[n],o.push(this.observe(n,r,i)))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}if("function"==typeof n)return i=r,r=n,n="",e(this,n,r,i)
if(s=n.split(" "),1===s.length)return e(this,n,r,i)
for(o=[],u=s.length;u--;)n=s[u],n&&o.push(e(this,n,r,i))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}}(te,Le),Re=function(t,e){var n,r
if(!e)if(t)this._subs[t]=[]
else for(t in this._subs)delete this._subs[t]
n=this._subs[t],n&&(r=n.indexOf(e),-1!==r&&n.splice(r,1))},je=function(t,e){var n,r,i=this
if("object"==typeof t){n=[]
for(r in t)t.hasOwnProperty(r)&&n.push(this.on(r,t[r]))
return{cancel:function(){for(var t;t=n.pop();)t.cancel()}}}return this._subs[t]?this._subs[t].push(e):this._subs[t]=[e],{cancel:function(){i.off(t,e)}}},Ie=function(){var t
try{Object.create(null),t=Object.create}catch(e){t=function(){var t=function(){}
return function(e,n){var r
return null===e?{}:(t.prototype=e,r=new t,n&&Object.defineProperties(r,n),r)}}()}return t}(),Pe=function(t,e){return function(n,r){var i,o,a,s,u
if(n.owner=r.owner,a=n.parent=n.owner.parentFragment,n.root=r.root,n.pNode=r.pNode,n.pElement=r.pElement,n.context=r.context,n.owner.type===t.SECTION&&(n.index=r.index),a&&(s=a.indexRefs)){n.indexRefs=e(null)
for(u in s)n.indexRefs[u]=s[u]}for(n.priority=a?a.priority+1:1,r.indexRef&&(n.indexRefs||(n.indexRefs={}),n.indexRefs[r.indexRef]=r.index),n.items=[],i=r.descriptor?r.descriptor.length:0,o=0;i>o;o+=1)n.items[n.items.length]=n.createItem({parentFragment:n,pElement:r.pElement,descriptor:r.descriptor[o],index:o})}}(F,Ie),Me=function(t,e){return t.substr(0,e.length+1)===e+"."},Fe=function(t){return function(e,n){return e===n||t(e,n)}}(Me),Be=function(t){return function(e,n,r){return e===n?r:t(e,n)?e.replace(n+".",r+"."):void 0}}(Me),De=function(t,e){return function(n,r,i,o){n[r]&&!t(n[r],o)&&(n[r]=e(n[r],i,o))}}(Fe,Be),Ue=function(t){return function(e,n,r,i){void 0===this.html&&(t(this,"context",r,i),this.indexRefs&&void 0!==this.indexRefs[e]&&this.indexRefs[e]!==n&&(this.indexRefs[e]=n),this.items.forEach(function(t){t.reassign(e,n,r,i)}))}}(De),We=function(t,e){return{init:t,reassign:e}}(Pe,Ue),qe=function(t,e){function n(t){return o[t]||(o[t]=e(t))}var r,i,o={}
try{e("table").innerHTML="foo"}catch(a){r=!0,i={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}return function(e,o,a,s){var u,c,h=[]
if(e)for(r&&(c=i[o])?(u=n("DIV"),u.innerHTML=c[0]+e+c[1],u=u.querySelector(".x")):a===t.svg?(u=n("DIV"),u.innerHTML='<svg class="x">'+e+"</svg>",u=u.querySelector(".x")):(u=n(o),u.innerHTML=e);u.firstChild;)h.push(u.firstChild),s.appendChild(u.firstChild)
return h}}(a,s),Ve=function(){var t,e=this.node
return e&&(t=e.parentNode)?(t.removeChild(e),e):void 0},Ke=function(t,e){var n,r,i
return r=/</g,i=/>/g,n=function(e,n){this.type=t.TEXT,this.descriptor=e.descriptor,n&&(this.node=document.createTextNode(e.descriptor),n.appendChild(this.node))},n.prototype={detach:e,reassign:function(){},teardown:function(t){t&&this.detach()},firstNode:function(){return this.node},toString:function(){return(""+this.descriptor).replace(r,"&lt;").replace(i,"&gt;")}},n}(F,Ve),ze=function(t,e){return function(n){n.keypath?e(n):t.removeUnresolved(n)}}(L,G),He=function(t){var e=function(e,n,r,i){this.root=e,this.ref=n,this.parentFragment=r,this.resolve=i,t.addUnresolved(this)}
return e.prototype={teardown:function(){t.removeUnresolved(this)}},e}(L),$e=function(t,e,n,r,i){function o(t,e,r){var i,o,a
if(!s.test(t.toString()))return n(t,"_nowrap",{value:!0}),t
if(!t["_"+e._guid]){n(t,"_"+e._guid,{value:function(){var n,r,i,a
if(n=e._captured,n||(e._captured=[]),r=t.apply(e,arguments),e._captured.length)for(i=o.length;i--;)a=o[i],a.updateSoftDependencies(e._captured)
return e._captured=n,r},writable:!0})
for(i in t)t.hasOwnProperty(i)&&(t["_"+e._guid][i]=t[i])
t["_"+e._guid+"_evaluators"]=[]}return o=t["_"+e._guid+"_evaluators"],a=o.indexOf(r),-1===a&&o.push(r),t["_"+e._guid]}var a,s
return s=/this/,a=function(e,n,i,a,s){var u
this.evaluator=i,this.keypath=n,this.root=e,this.argNum=a,this.type=t.REFERENCE,this.priority=s,u=e.get(n),"function"==typeof u&&(u=o(u,e,i)),this.value=i.values[a]=u,r(this)},a.prototype={update:function(){var t=this.root.get(this.keypath)
"function"!=typeof t||t._nowrap||(t=o(t,this.root,this.evaluator)),e(t,this.value)||(this.evaluator.values[this.argNum]=t,this.evaluator.bubble(),this.value=t)},teardown:function(){i(this)}},a}(F,p,c,$,G),Ge=function(t,e,n){var r=function(t,n,r){this.root=t,this.keypath=n,this.priority=r.priority,this.evaluator=r,e(this)}
return r.prototype={update:function(){var e=this.root.get(this.keypath)
t(e,this.value)||(this.evaluator.bubble(),this.value=e)},teardown:function(){n(this)}},r}(p,$,G),Je=function(t,e,n,r,i,o,a,s){function u(t,e){var n,r
if(t=t.replace(/\$\{([0-9]+)\}/g,"_$1"),h[t])return h[t]
for(r=[];e--;)r[e]="_"+e
return n=new Function(r.join(","),"return("+t+")"),h[t]=n,n}var c,h={}
return c=function(t,e,n,r,i,o){var s=this
s.root=t,s.uniqueString=n,s.keypath=e,s.priority=o,s.fn=u(r,i.length),s.values=[],s.refs=[],i.forEach(function(e,n){e&&(e.indexRef?s.values[n]=e.value:s.refs.push(new a(t,e.keypath,s,n,o)))}),s.selfUpdating=s.refs.length<=1},c.prototype={bubble:function(){this.selfUpdating?this.update():this.deferred||(t.addEvaluator(this),this.deferred=!0)},update:function(){var t
if(this.evaluating)return this
this.evaluating=!0
try{t=this.fn.apply(null,this.values)}catch(a){this.root.debug&&e('Error evaluating "'+this.uniqueString+'": '+a.message||a),t=void 0}return n(t,this.value)||(this.value=t,r(this.root,this.keypath),o(this.root,this.keypath,t,!0),i(this.root,this.keypath)),this.evaluating=!1,this},teardown:function(){for(;this.refs.length;)this.refs.pop().teardown()
r(this.root,this.keypath),this.root._evaluators[this.keypath]=null},refresh:function(){this.selfUpdating||(this.deferred=!0)
for(var t=this.refs.length;t--;)this.refs[t].update()
this.deferred&&(this.update(),this.deferred=!1)},updateSoftDependencies:function(t){var e,n,r
for(this.softRefs||(this.softRefs=[]),e=this.softRefs.length;e--;)r=this.softRefs[e],t[r.keypath]||(this.softRefs.splice(e,1),this.softRefs[r.keypath]=!1,r.teardown())
for(e=t.length;e--;)n=t[e],this.softRefs[n]||(r=new s(this.root,n,this),this.softRefs.push(r),this.softRefs[n]=!0)
this.selfUpdating=this.refs.length+this.softRefs.length<=1}},c}(L,Z,p,B,A,H,$e,Ge),Ye=function(t,e,n,r,i){function o(t,e){return t.replace(/\$\{([0-9]+)\}/g,function(t,n){return e[n]?e[n].value||e[n].keypath:"undefined"})}function a(t){return"${"+t.replace(/[\.\[\]]/g,"-")+"}"}var s=function(r,i,o,a){var s,u,c,h=this
return s=r.root,this.root=s,this.callback=a,this.owner=r,this.str=o.s,this.args=c=[],this.unresolved=[],this.pending=0,u=i.indexRefs,o.r&&o.r.length?(o.r.forEach(function(r,o){var a,l,f
return u&&void 0!==(a=u[r])?void(c[o]={indexRef:r,value:a}):(l=e(s,r,i))?void(c[o]={keypath:l}):(c[o]=void 0,h.pending+=1,f=new n(s,r,i,function(e){h.resolve(o,e),t(h.unresolved,f)}),void h.unresolved.push(f))}),this.ready=!0,void this.bubble()):(this.resolved=this.ready=!0,void this.bubble())}
return s.prototype={bubble:function(){this.ready&&(this.uniqueString=o(this.str,this.args),this.keypath=a(this.uniqueString),this.createEvaluator(),this.callback(this.keypath))},teardown:function(){for(var t;t=this.unresolved.pop();)t.teardown()},resolve:function(t,e){this.args[t]={keypath:e},this.bubble(),this.resolved=!--this.pending},createEvaluator:function(){var t
this.root._evaluators[this.keypath]?this.root._evaluators[this.keypath].refresh():(t=new r(this.root,this.keypath,this.uniqueString,this.str,this.args,this.owner.priority),this.root._evaluators[this.keypath]=t,t.update())},reassign:function(t,e,n,r){var o
this.args.forEach(function(a){var s
a.keypath&&(s=i(a.keypath,n,r))?(a.keypath=s,o=!0):a.indexRef===t&&(a.value=e,o=!0)}),o&&this.bubble()}},s}(E,O,He,Je,Be),Qe=function(t,e,n,r,i,o,a){var s=function(i,o,s){var c,h,l,f,d,p=this
return c=i.root,h=i.parentFragment,this.ref=o.r,this.root=i.root,this.mustache=i,this.callback=s,this.pending=0,this.unresolved=[],d=this.members=[],this.indexRefMembers=[],this.keypathObservers=[],this.expressionResolvers=[],o.m.forEach(function(o,s){var g,v,m,y,b,w
return"string"==typeof o?void(p.members[s]=o):o.t===t.REFERENCE?(g=o.n,v=h.indexRefs,v&&void 0!==(m=v[g])?(d[s]=m,void p.indexRefMembers.push({ref:g,index:s})):(f=!0,y=function(t){var e=new u(c,t,i.priority,p,s)
p.keypathObservers.push(e)},(l=n(c,g,h))?void y(l):(d[s]=void 0,p.pending+=1,b=new r(c,g,h,function(t){p.resolve(s,t),e(p.unresolved,b)}),p.unresolved.push(b),null))):(f=!0,p.pending+=1,w=new a(p,h,o,function(t){p.resolve(s,t),e(p.unresolved,w)}),void p.unresolved.push(w))}),f?(this.ready=!0,void this.bubble()):(l=this.getKeypath(),void s(l))}
s.prototype={getKeypath:function(){return this.ref+"."+this.members.join(".")},bubble:function(){this.ready&&!this.pending&&this.callback(this.getKeypath())},resolve:function(t,e){var n=new u(this.root,e,this.mustache.priority,this,t)
n.update(),this.keypathObservers.push(n),this.resolved=!--this.pending,this.bubble()},teardown:function(){for(var t;t=this.unresolved.pop();)t.teardown()},reassign:function(t,e){var n,r,i
for(r=this.indexRefMembers.length;r--;)i=this.indexRefMembers[r],i.ref===t&&(n=!0,this.members[i.index]=e)
n&&this.bubble()}}
var u=function(t,e,n,r,o){this.root=t,this.keypath=e,this.priority=n,this.resolver=r,this.index=o,i(this),this.update()}
return u.prototype={update:function(){var t=this.resolver
t.members[this.index]=this.root.get(this.keypath),t.bubble()},teardown:function(){o(this)}},s}(F,E,O,He,$,G,Ye),Xe=function(t,e,n,r){return function(i,o){var a,s,u,c,h,l,f
h=o.parentFragment,l=o.descriptor,i.root=h.root,i.parentFragment=h,i.descriptor=o.descriptor,i.index=o.index||0,i.priority=h.priority,i.type=o.descriptor.t,f=function(t){i.resolve(t)},(a=l.r)&&(u=h.indexRefs,u&&void 0!==(c=u[a])?(i.indexRef=a,i.value=c,i.render(i.value)):(s=e(i.root,a,i.parentFragment),void 0!==s?f(s):(i.ref=a,t.addUnresolved(i)))),o.descriptor.x&&(i.resolver=new r(i,h,o.descriptor.x,f)),o.descriptor.kx&&(i.resolver=new n(i,o.descriptor.kx,f)),i.descriptor.n&&!i.hasOwnProperty("value")&&i.render(void 0)}}(L,O,Qe,Ye),Ze=function(t,e){var n={evaluateWrapped:!0}
return function(){var r=e(this.root,this.keypath,n)
t(r,this.value)||(this.render(r),this.value=r)}}(p,X),tn=function(t,e,n){return function(r){var i
if(r!==this.keypath){if(this.registered&&(n(this),this.type===t.SECTION))for(i=this.fragments.length;i--;)this.fragments[i].reassign(null,null,this.keypath,r)
this.keypath=r,e(this),this.update()}}}(F,$,G),en=function(t){return function(e,n,r,i){var o,a
if(this.resolver?this.resolver.reassign(e,n,r,i):this.keypath?(o=t(this.keypath,r,i),o&&this.resolve(o)):void 0!==e&&this.indexRef===e&&(this.value=n,this.render(n)),this.fragments)for(a=this.fragments.length;a--;)this.fragments[a].reassign(e,n,r,i)}}(Be),nn=function(t,e,n,r){return{init:t,update:e,resolve:n,reassign:r}}(Xe,Ze,tn,en),rn=function(t,e,n,r){var i,o,a
return o=/</g,a=/>/g,i=function(e,r){this.type=t.INTERPOLATOR,r&&(this.node=document.createTextNode(""),r.appendChild(this.node)),n.init(this,e)},i.prototype={update:n.update,resolve:n.resolve,reassign:n.reassign,detach:r,teardown:function(t){t&&this.detach(),e(this)},render:function(t){this.node&&(this.node.data=void 0==t?"":t)},firstNode:function(){return this.node},toString:function(){var t=void 0!=this.value?""+this.value:""
return t.replace(o,"&lt;").replace(a,"&gt;")}},i}(F,ze,nn,Ve),on=function(){var t=[]
return function(e){var n,r,i,o,a,s,u,c,h=this
for(n=this.parentFragment,a=[],e.forEach(function(e,n){var i,o,s,u
return e===n?void(a[e]=h.fragments[n]):(void 0===r&&(r=n),-1===e?void t.push(h.fragments[n]):(i=h.fragments[n],o=e-n,s=h.keypath+"."+n,u=h.keypath+"."+e,i.reassign(h.descriptor.i,n,e,o,s,u),void(a[e]=i)))});u=t.pop();)u.teardown(!0)
if(void 0===r&&(r=this.length),this.length=o=this.root.get(this.keypath).length,o!==r){for(s={descriptor:this.descriptor.f,root:this.root,pNode:n.pNode,owner:this},this.descriptor.i&&(s.indexRef=this.descriptor.i),i=r;o>i;i+=1)(u=a[i])?this.docFrag.appendChild(u.detach(!1)):(s.context=this.keypath+"."+i,s.index=i,u=this.createFragment(s)),this.fragments[i]=u
c=n.findNextNode(this),n.pNode.insertBefore(this.docFrag,c)}}}(),an=function(t,e){function n(t,e,n){var r,i,o
if(i=e.length,i<t.length)for(o=t.fragments.splice(i,t.length-i);o.length;)o.pop().teardown(!0)
else if(i>t.length)for(r=t.length;i>r;r+=1)n.context=t.keypath+"."+r,n.index=r,t.descriptor.i&&(n.indexRef=t.descriptor.i),t.fragments[r]=t.createFragment(n)
t.length=i}function r(t,e,n){var r,i,o,a
for(o=t.hasKey||(t.hasKey={}),i=t.fragments.length;i--;)a=t.fragments[i],a.index in e||(t.fragments[i].teardown(!0),t.fragments.splice(i,1),o[a.index]=!1)
for(r in e)o[r]||(n.context=t.keypath+"."+r,n.index=r,t.descriptor.i&&(n.indexRef=t.descriptor.i),t.fragments.push(t.createFragment(n)),o[r]=!0)
t.length=t.fragments.length}function i(t,e){t.length||(e.context=t.keypath,e.index=0,t.fragments[0]=t.createFragment(e),t.length=1)}function o(e,n,r,i){var o,a,s,u
if(a=t(n)&&0===n.length,o=r?a||!n:n&&!a){if(e.length||(i.index=0,e.fragments[0]=e.createFragment(i),e.length=1),e.length>1)for(s=e.fragments.splice(1);u=s.pop();)u.teardown(!0)}else e.length&&(e.teardownFragments(!0),e.length=0)}return function(a,s){var u={descriptor:a.descriptor.f,root:a.root,pNode:a.parentFragment.pNode,pElement:a.parentFragment.pElement,owner:a}
return a.descriptor.n?void o(a,s,!0,u):void(t(s)?n(a,s,u):e(s)||"function"==typeof s?a.descriptor.i?r(a,s,u):i(a,u):o(a,s,!1,u))}}(R,te),sn=function(t,e){return function(n){var r,i;(i=this.root._wrapped[this.keypath])&&(n=i.get()),this.rendering||(this.rendering=!0,e(this,n),this.rendering=!1,(!this.docFrag||this.docFrag.childNodes.length)&&!this.initialising&&t&&(r=this.parentFragment.findNextNode(this),r&&r.parentNode===this.parentFragment.pNode?this.parentFragment.pNode.insertBefore(this.docFrag,r):this.parentFragment.pNode.appendChild(this.docFrag)))}}(u,an),un=function(t,e,n,r){var i,o,a,s,u
for(a=t.descriptor.i,i=e;n>i;i+=1)o=t.fragments[i],s=t.keypath+"."+(i-r),u=t.keypath+"."+i,o.index=i,o.reassign(a,i,s,u)},cn=function(t){function e(t){t.teardown(!0)}function n(t,e,n){var r,i,o
for(t.rendering=!0,r={descriptor:t.descriptor.f,root:t.root,pNode:t.parentFragment.pNode,owner:t,indexRef:t.descriptor.i},i=e;n>i;i+=1)r.context=t.keypath+"."+i,r.index=i,t.fragments[i]=t.createFragment(r)
o=t.fragments[n]?t.fragments[n].firstNode():t.parentFragment.findNextNode(t),t.parentFragment.pNode.insertBefore(t.docFrag,o),t.rendering=!1}return function(r){var i,o,a,s,u,c=this
if(i=r.balance){if(o=r.start,c.length+=i,0>i)return c.fragments.splice(o,-i).forEach(e),void t(c,o,c.length,i)
a=o+r.removed,s=o+r.added,u=[a,0],u.length+=i,c.fragments.splice.apply(c.fragments,u),t(c,s,c.length,i),n(c,a,s)}}}(un),hn=function(t,e,n,r,i,o,a){var s,u
return a.push(function(){u=a.DomFragment}),s=function(n,r){this.type=t.SECTION,this.inverted=!!n.descriptor.n,this.fragments=[],this.length=0,r&&(this.docFrag=document.createDocumentFragment()),this.initialising=!0,e.init(this,n),r&&r.appendChild(this.docFrag),this.initialising=!1},s.prototype={update:e.update,resolve:e.resolve,reassign:e.reassign,splice:i,merge:n,detach:function(){var t,e
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
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAllComponents(t,e)}},s}(F,nn,on,sn,cn,ze,w),ln=function(t,e,n,r,i){var o=function(e,r){this.type=t.TRIPLE,r&&(this.nodes=[],this.docFrag=document.createDocumentFragment()),this.initialising=!0,n.init(this,e),r&&r.appendChild(this.docFrag),this.initialising=!1}
return o.prototype={update:n.update,resolve:n.resolve,reassign:n.reassign,detach:function(){var t,e
if(this.docFrag){for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e])
return this.docFrag}},teardown:function(t){t&&(this.detach(),this.docFrag=this.nodes=null),i(this)},firstNode:function(){return this.nodes[0]?this.nodes[0]:this.parentFragment.findNextNode(this)},render:function(t){var e,n
if(this.nodes){for(;this.nodes.length;)e=this.nodes.pop(),e.parentNode.removeChild(e)
if(!t)return void(this.nodes=[])
n=this.parentFragment.pNode,this.nodes=r(t,n.tagName,n.namespaceURI,this.docFrag),this.initialising||n.insertBefore(this.docFrag,this.parentFragment.findNextNode(this)),"SELECT"===n.tagName&&n._ractive&&n._ractive.binding&&n._ractive.binding.update()}},toString:function(){return void 0!=this.value?this.value:""},find:function(t){var n,r,i,o
for(r=this.nodes.length,n=0;r>n;n+=1)if(i=this.nodes[n],1===i.nodeType){if(e(i,t))return i
if(o=i.querySelector(t))return o}return null},findAll:function(t,n){var r,i,o,a,s,u
for(i=this.nodes.length,r=0;i>r;r+=1)if(o=this.nodes[r],1===o.nodeType&&(e(o,t)&&n.push(o),a=o.querySelectorAll(t)))for(s=a.length,u=0;s>u;u+=1)n.push(a[u])}},o}(F,se,nn,qe,ze),fn=function(t){return function(e,n){return e.a&&e.a.xmlns?e.a.xmlns:"svg"===e.e?t.svg:n.namespaceURI||t.html}}(a),dn=function(){var t,e,n,r
return t="altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath vkern".split(" "),e="attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" "),n=function(t){for(var e={},n=t.length;n--;)e[t[n].toLowerCase()]=t[n]
return e},r=n(t.concat(e)),function(t){var e=t.toLowerCase()
return r[e]||e}}(),pn=function(t,e){return function(n,r){var i,o
if(i=r.indexOf(":"),-1===i||(o=r.substr(0,i),"xmlns"===o))n.name=n.element.namespace!==t.html?e(r):r,n.lcName=n.name.toLowerCase()
else if(r=r.substring(i+1),n.name=e(r),n.lcName=n.name.toLowerCase(),n.namespace=t[o.toLowerCase()],!n.namespace)throw'Unknown namespace ("'+o+'")'}}(a,dn),gn=function(t){return function(e,n){var r,i=null===n.value?"":n.value;(r=n.pNode)&&(e.namespace?r.setAttributeNS(e.namespace,n.name,i):"style"===n.name&&r.style.setAttribute?r.style.setAttribute("cssText",i):"class"!==n.name||r.namespaceURI&&r.namespaceURI!==t.html?r.setAttribute(n.name,i):r.className=i,"id"===e.name&&(n.root.nodes[n.value]=r),"value"===e.name&&(r._ractive.value=n.value)),e.value=n.value}}(a),vn=function(t){var e={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"}
return function(n,r){var i
!n.pNode||n.namespace||r.pNode.namespaceURI&&r.pNode.namespaceURI!==t.html||(i=e[n.name]||n.name,void 0!==r.pNode[i]&&(n.propertyName=i),("boolean"==typeof r.pNode[i]||"value"===i)&&(n.useProperty=!0))}}(a),mn=function(t){return function(e){var n,r
return n=e.fragment.items,1===n.length&&(r=n[0],r.type===t.INTERPOLATOR&&(r.keypath||r.ref))?r:void 0}}(F),yn=function(t){return function(e,n){var r
if(!t(e)||!t(n))return!1
if(e.length!==n.length)return!1
for(r=e.length;r--;)if(e[r]!==n[r])return!1
return!0}}(R),bn=function(t,e,n,r,i,o){var a,s,u,c,h,l,f,d,p,g,v,m,y,b,w='For two-way binding to work, attribute value must be a single interpolator (e.g. value="{{foo}}")',E="You cannot set up two-way binding against an expression "
return a=function(){var t,n,r,i=this.pNode
return(t=this.interpolator)?t.keypath&&"${"===t.keypath.substr?(e(E+t.keypath),!1):(t.keypath||t.resolve(t.descriptor.r),this.keypath=t.keypath,(n=h(this))?(i._ractive.binding=this.element.binding=n,this.twoway=!0,r=this.root._twowayBindings[this.keypath]||(this.root._twowayBindings[this.keypath]=[]),r.push(n),!0):!1):(e(w),!1)},s=function(){t.start(this._ractive.root),this._ractive.binding.update(),t.end()},u={evaluateWrapped:!0},c=function(){var t=i(this._ractive.root,this._ractive.binding.keypath,u)
this.value=void 0==t?"":t},h=function(t){var e=t.pNode
if("SELECT"===e.tagName)return e.multiple?new f(t,e):new d(t,e)
if("checkbox"===e.type||"radio"===e.type){if("name"===t.propertyName){if("checkbox"===e.type)return new g(t,e)
if("radio"===e.type)return new p(t,e)}return"checked"===t.propertyName?new v(t,e):null}if("value"!==t.lcName)throw new Error("Attempted to set up an illegal two-way binding. This error is unexpected - if you can, please file an issue at https://github.com/RactiveJS/Ractive, or contact @RactiveJS on Twitter. Thanks!")
return"file"===e.type?new m(t,e):e.getAttribute("contenteditable")?new y(t,e):new b(t,e)},f=function(t,e){var n
l(this,t,e),e.addEventListener("change",s,!1),n=i(this.root,this.keypath),void 0===n&&this.update()},f.prototype={value:function(){var t,e,n,r,i,o
for(t=[],e=this.node.options,r=e.length,n=0;r>n;n+=1)i=e[n],i.selected&&(o=i._ractive?i._ractive.value:i.value,t.push(o))
return t},update:function(){var e,r,i
return e=this.attr,r=e.value,i=this.value(),void 0!==r&&n(i,r)||(t.addBinding(e),e.value=i,o(this.root,this.keypath,i),t.trigger()),this},deferUpdate:function(){this.deferred!==!0&&(t.addAttribute(this),this.deferred=!0)},teardown:function(){this.node.removeEventListener("change",s,!1)}},d=function(t,e){var n
l(this,t,e),e.addEventListener("change",s,!1),n=i(this.root,this.keypath),void 0===n&&this.update()},d.prototype={value:function(){var t,e,n,r,i
for(t=this.node.options,n=t.length,e=0;n>e;e+=1)if(r=t[e],t[e].selected)return i=r._ractive?r._ractive.value:r.value},update:function(){var e=this.value()
return t.addBinding(this.attr),this.attr.value=e,o(this.root,this.keypath,e),t.trigger(),this},deferUpdate:function(){this.deferred!==!0&&(t.addAttribute(this),this.deferred=!0)},teardown:function(){this.node.removeEventListener("change",s,!1)}},p=function(e,n){var r
this.radioName=!0,l(this,e,n),n.name="{{"+e.keypath+"}}",n.addEventListener("change",s,!1),n.attachEvent&&n.addEventListener("click",s,!1),r=i(this.root,this.keypath),void 0!==r?n.checked=r==n._ractive.value:t.addRadio(this)},p.prototype={value:function(){return this.node._ractive?this.node._ractive.value:this.node.value},update:function(){var e=this.node
e.checked&&(t.addBinding(this.attr),o(this.root,this.keypath,this.value()),t.trigger())},teardown:function(){this.node.removeEventListener("change",s,!1),this.node.removeEventListener("click",s,!1)}},g=function(e,n){var r,o
this.checkboxName=!0,l(this,e,n),n.name="{{"+this.keypath+"}}",n.addEventListener("change",s,!1),n.attachEvent&&n.addEventListener("click",s,!1),r=i(this.root,this.keypath),void 0!==r?(o=-1!==r.indexOf(n._ractive.value),n.checked=o):t.addCheckbox(this)},g.prototype={changed:function(){return this.node.checked!==!!this.checked},update:function(){this.checked=this.node.checked,t.addBinding(this.attr),o(this.root,this.keypath,r(this.root,this.keypath)),t.trigger()},teardown:function(){this.node.removeEventListener("change",s,!1),this.node.removeEventListener("click",s,!1)}},v=function(t,e){l(this,t,e),e.addEventListener("change",s,!1),e.attachEvent&&e.addEventListener("click",s,!1)},v.prototype={value:function(){return this.node.checked},update:function(){t.addBinding(this.attr),o(this.root,this.keypath,this.value()),t.trigger()},teardown:function(){this.node.removeEventListener("change",s,!1),this.node.removeEventListener("click",s,!1)}},m=function(t,e){l(this,t,e),e.addEventListener("change",s,!1)},m.prototype={value:function(){return this.attr.pNode.files},update:function(){o(this.attr.root,this.attr.keypath,this.value()),t.trigger()},teardown:function(){this.node.removeEventListener("change",s,!1)}},y=function(t,e){l(this,t,e),e.addEventListener("change",s,!1),this.root.lazy||(e.addEventListener("input",s,!1),e.attachEvent&&e.addEventListener("keyup",s,!1))},y.prototype={update:function(){t.addBinding(this.attr),o(this.root,this.keypath,this.node.innerHTML),t.trigger()},teardown:function(){this.node.removeEventListener("change",s,!1),this.node.removeEventListener("input",s,!1),this.node.removeEventListener("keyup",s,!1)}},b=function(t,e){l(this,t,e),e.addEventListener("change",s,!1),this.root.lazy||(e.addEventListener("input",s,!1),e.attachEvent&&e.addEventListener("keyup",s,!1)),this.node.addEventListener("blur",c,!1)},b.prototype={value:function(){var t=this.attr.pNode.value
return+t+""===t&&-1===t.indexOf("e")&&(t=+t),t},update:function(){var e=this.attr,n=this.value()
t.addBinding(e),o(e.root,e.keypath,n),t.trigger()},teardown:function(){this.node.removeEventListener("change",s,!1),this.node.removeEventListener("input",s,!1),this.node.removeEventListener("keyup",s,!1),this.node.removeEventListener("blur",c,!1)}},l=function(t,e,n){t.attr=e,t.node=n,t.root=e.root,t.keypath=e.keypath},a}(L,Z,yn,x,X,U),wn=function(t,e,n){var r,i,o,a,s,u,c,h,l,f,d,p
return r=function(){var t
if(!this.ready)return this
if(t=this.pNode,"SELECT"===t.tagName&&"value"===this.lcName)return this.update=o,this.deferredUpdate=a,this.update()
if(this.isFileInputValue)return this.update=i,this
if(this.twoway&&"name"===this.lcName){if("radio"===t.type)return this.update=c,this.update()
if("checkbox"===t.type)return this.update=h,this.update()}return"style"===this.lcName&&t.style.setAttribute?(this.update=l,this.update()):"class"!==this.lcName||t.namespaceURI&&t.namespaceURI!==e.html?t.getAttribute("contenteditable")&&"value"===this.lcName?(this.update=d,this.update()):(this.update=p,this.update()):(this.update=f,this.update())},i=function(){return this},a=function(){this.deferredUpdate=this.pNode.multiple?u:s,this.deferredUpdate()},o=function(){return t.addSelectValue(this),this},s=function(){var t,e,n,r,i=this.fragment.getValue()
for(this.value=this.pNode._ractive.value=i,t=this.pNode.options,r=t.length;r--;)if(e=t[r],n=e._ractive?e._ractive.value:e.value,n==i)return e.selected=!0,this
return this},u=function(){var t,e,r,i,o=this.fragment.getValue()
for(n(o)||(o=[o]),t=this.pNode.options,e=t.length;e--;)r=t[e],i=r._ractive?r._ractive.value:r.value,r.selected=-1!==o.indexOf(i)
return this.value=o,this},c=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),t.checked=e==t._ractive.value,this},h=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),n(e)?(t.checked=-1!==e.indexOf(t._ractive.value),this):(t.checked=e==t._ractive.value,this)},l=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),void 0===e&&(e=""),e!==this.value&&(t.style.setAttribute("cssText",e),this.value=e),this},f=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),void 0===e&&(e=""),e!==this.value&&(t.className=e,this.value=e),this},d=function(){var t,e
return t=this.pNode,e=this.fragment.getValue(),void 0===e&&(e=""),e!==this.value&&(this.active||(t.innerHTML=e),this.value=e),this},p=function(){var t,e,n
if(t=this.pNode,e=this.fragment.getValue(),this.isValueAttribute&&(t._ractive.value=e),void 0==e&&(e=""),e!==this.value){if(this.useProperty)return this.active||(t[this.propertyName]=e),"OPTION"===t.tagName&&t.selected&&(n=this.element.select.binding)&&n.update(),this.value=e,this
if(this.namespace)return t.setAttributeNS(this.namespace,this.name,e),this.value=e,this
"id"===this.lcName&&(void 0!==this.value&&(this.root.nodes[this.value]=void 0),this.root.nodes[e]=t),t.setAttribute(this.name,e),this.value=e}return this},r}(L,a,R),En=function(t){var e
return e=this.str.substr(this.pos,t.length),e===t?(this.pos+=t.length,t):null},_n=function(){var t=/^\s+/
return function(){var e=t.exec(this.remaining())
return e?(this.pos+=e[0].length,e[0]):null}}(),xn=function(t){return function(e){var n=t.exec(e.str.substring(e.pos))
return n?(e.pos+=n[0].length,n[1]||n[0]):null}},kn=function(t){var e,n,r
return e=t(/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/),n=t(/^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/),r=t(/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/),function(t){return function(i){var o,a,s,u
for(o=i.pos,a='"',s=!1;!s;)u=e(i)||n(i)||i.getStringMatch(t),u?a+='"'===u?'\\"':"\\'"===u?"'":u:(u=r(i),u?a+="\\u"+("000"+u.charCodeAt(1).toString(16)).slice(-4):s=!0)
return a+='"',JSON.parse(a)}}}(xn),Sn=function(t){return t('"')}(kn),On=function(t){return t("'")}(kn),Tn=function(t,e,n){return function(r){var i,o
return i=r.pos,r.getStringMatch('"')?(o=n(r),r.getStringMatch('"')?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):r.getStringMatch("'")?(o=e(r),r.getStringMatch("'")?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):null}}(F,Sn,On),An=function(t,e){var n=e(/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/)
return function(e){var r
return(r=n(e))?{t:t.NUMBER_LITERAL,v:r}:null}}(F,xn),Nn=function(t){return t(/^[a-zA-Z_$][a-zA-Z_$0-9]*/)}(xn),Ln=function(t,e,n){var r=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/
return function(i){var o
return(o=t(i))?r.test(o.v)?o.v:'"'+o.v.replace(/"/g,'\\"')+'"':(o=e(i))?o.v:(o=n(i))?o:void 0}}(Tn,An,Nn),Cn=function(t,e,n,r){function i(t){var e,n,i
return t.allowWhitespace(),(e=r(t))?(i={key:e},t.allowWhitespace(),t.getStringMatch(":")?(t.allowWhitespace(),(n=t.getToken())?(i.value=n.v,i):null):null):null}var o,a,s,u,c,h
return a={"true":!0,"false":!1,undefined:void 0,"null":null},s=new RegExp("^(?:"+Object.keys(a).join("|")+")"),u=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,c=/\$\{([^\}]+)\}/g,h=/^\$\{([^\}]+)\}/,o=function(t,e){this.str=t,this.values=e,this.pos=0,this.result=this.getToken()},o.prototype={remaining:function(){return this.str.substring(this.pos)},getStringMatch:t,getToken:function(){return this.allowWhitespace(),this.getPlaceholder()||this.getSpecial()||this.getNumber()||this.getString()||this.getObject()||this.getArray()},getPlaceholder:function(){var t
return this.values?(t=h.exec(this.remaining()))&&this.values.hasOwnProperty(t[1])?(this.pos+=t[0].length,{v:this.values[t[1]]}):void 0:null},getSpecial:function(){var t
return(t=s.exec(this.remaining()))?(this.pos+=t[0].length,{v:a[t[0]]}):void 0},getNumber:function(){var t
return(t=u.exec(this.remaining()))?(this.pos+=t[0].length,{v:+t[0]}):void 0},getString:function(){var t,e=n(this)
return e&&(t=this.values)?{v:e.v.replace(c,function(e,n){return t[n]||n})}:e},getObject:function(){var t,e
if(!this.getStringMatch("{"))return null
for(t={};e=i(this);){if(t[e.key]=e.value,this.allowWhitespace(),this.getStringMatch("}"))return{v:t}
if(!this.getStringMatch(","))return null}return null},getArray:function(){var t,e
if(!this.getStringMatch("["))return null
for(t=[];e=this.getToken();){if(t.push(e.v),this.getStringMatch("]"))return{v:t}
if(!this.getStringMatch(","))return null}return null},allowWhitespace:e},function(t,e){var n=new o(t,e)
return n.result?{value:n.result.v,remaining:n.remaining()}:null}}(En,_n,Tn,Ln),Rn=function(t,e,n){function r(t){return"string"==typeof t?t:JSON.stringify(t)}var i=function(e){this.type=t.INTERPOLATOR,n.init(this,e)}
return i.prototype={update:n.update,resolve:n.resolve,reassign:n.reassign,render:function(t){this.value=t,this.parentFragment.bubble()},teardown:function(){e(this)},toString:function(){return void 0==this.value?"":r(this.value)}},i}(F,ze,nn),jn=function(t,e,n,r,i){var o,a
return i.push(function(){a=i.StringFragment}),o=function(n){this.type=t.SECTION,this.fragments=[],this.length=0,e.init(this,n)},o.prototype={update:e.update,resolve:e.resolve,reassign:e.reassign,teardown:function(){this.teardownFragments(),r(this)},teardownFragments:function(){for(;this.fragments.length;)this.fragments.shift().teardown()
this.length=0},bubble:function(){this.value=this.fragments.join(""),this.parentFragment.bubble()},render:function(t){var e;(e=this.root._wrapped[this.keypath])&&(t=e.get()),n(this,t),this.parentFragment.bubble()},createFragment:function(t){return new a(t)},toString:function(){return this.fragments.join("")}},o}(F,nn,an,ze,w),In=function(t){var e=function(e){this.type=t.TEXT,this.text=e}
return e.prototype={toString:function(){return this.text},reassign:function(){},teardown:function(){}},e}(F),Pn=function(t,e){return function(){var n,r,i,o,a,s,u
if(!this.argsList||this.dirty){if(n={},r=0,o=this.root._guid,u=function(t){return t.map(function(t){var e,i,a
return t.text?t.text:t.fragments?t.fragments.map(function(t){return u(t.items)}).join(""):(e=o+"-"+r++,a=(i=t.root._wrapped[t.keypath])?i.value:t.value,n[e]=a,"${"+e+"}")}).join("")},i=u(this.items),s=e("["+i+"]",n))this.argsList=s.value
else{if(a="Could not parse directive arguments ("+this.toString()+"). If you think this is a bug, please file an issue at http://github.com/RactiveJS/Ractive/issues",this.root.debug)throw new Error(a)
t(a),this.argsList=[i]}this.dirty=!1}return this.argsList}}(Z,Cn),Mn=function(t,e,n,r,i,o,a,s){var u=function(t){n.init(this,t)}
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
return"string"==typeof n&&(t=e(n),n=t?t.value:n),n},toArgsList:a},s.StringFragment=u,u}(F,Cn,We,Rn,jn,In,Pn,w),Fn=function(t,e,n,r,i,o,a,s,u){var c=function(t){return this.type=e.ATTRIBUTE,this.element=t.element,n(this,t.name),null===t.value||"string"==typeof t.value?void r(this,t):(this.root=t.root,this.pNode=t.pNode,this.parentFragment=this.element.parentFragment,this.fragment=new u({descriptor:t.value,root:this.root,owner:this}),this.interpolator=o(this),void(this.pNode&&("value"===this.name&&(this.isValueAttribute=!0,"INPUT"===this.pNode.tagName&&"file"===this.pNode.type&&(this.isFileInputValue=!0)),i(this,t),this.selfUpdating=this.fragment.isSimple(),this.ready=!0)))}
return c.prototype={bind:a,update:s,updateBindings:function(){this.keypath=this.interpolator.keypath||this.interpolator.ref,"name"===this.propertyName&&(this.pNode.name="{{"+this.keypath+"}}")},reassign:function(t,e,n,r){this.fragment&&(this.fragment.reassign(t,e,n,r),this.twoway&&this.updateBindings())},teardown:function(){var t
if(this.boundEvents)for(t=this.boundEvents.length;t--;)this.pNode.removeEventListener(this.boundEvents[t],this.updateModel,!1)
this.fragment&&this.fragment.teardown()},bubble:function(){this.selfUpdating?this.update():!this.deferred&&this.ready&&(t.addAttribute(this),this.deferred=!0)},toString:function(){var t,e
if(null===this.value)return this.name
if("value"!==this.name||"select"!==this.element.lcName)return"name"===this.name&&"input"===this.element.lcName&&(e=this.interpolator)?"name={{"+(e.keypath||e.ref)+"}}":this.fragment?(t=this.fragment.toString(),this.name+"="+JSON.stringify(t)):this.name+"="+JSON.stringify(this.value)}},c}(L,F,pn,gn,vn,mn,bn,wn,Mn),Bn=function(t){return function(e,n,r){var i=new t({element:e,name:n,value:r,root:e.root,pNode:e.node})
e.attributes.push(e.attributes[n]=i),"name"!==n&&i.update()}}(Fn),Dn=function(t){return function(e,n){var r
e.attributes=[]
for(r in n)n.hasOwnProperty(r)&&t(e,r,n[r])
return e.attributes}}(Bn),Un=function(t){for(var e=[],n=t.length;n--;)e[n]=t[n]
return e},Wn=function(t){return function(e,n){return e.matchingStaticNodes[n]||(e.matchingStaticNodes[n]=t(e.node.querySelectorAll(n))),e.matchingStaticNodes[n]}}(Un),qn=function(t,e,n,r,i){function o(t){var e,n,i,o,a,s,u
i=t.node,e=t.root
do for(n=e._liveQueries,u=n.length;u--;)o=n[u],a=n[o],s=r(t,o),a.push.apply(a,s)
while(e=e._parent)}var a,s,u
return i.push(function(){a=i.DomFragment}),s=function(){var t=this.node,e=this.fragment.toString()
t.styleSheet?t.styleSheet.cssText=e:t.innerHTML=e},u=function(){this.node.type&&"text/javascript"!==this.node.type||t("Script tag was updated. This does not cause the code to be re-evaluated!"),this.node.text=this.fragment.toString()},function(t,r,i,c){return"script"===t.lcName||"style"===t.lcName?(t.fragment=new n({descriptor:i.f,root:t.root,owner:t}),void(c&&("script"===t.lcName?(t.bubble=u,t.node.text=t.fragment.toString()):(t.bubble=s,t.bubble())))):void("string"!=typeof i.f||r&&r.namespaceURI&&r.namespaceURI!==e.html?(t.fragment=new a({descriptor:i.f,root:t.root,pNode:r,owner:t,pElement:t}),c&&r.appendChild(t.fragment.docFrag)):(t.html=i.f,c&&(r.innerHTML=t.html,t.matchingStaticNodes={},o(t))))}}(Z,a,Mn,Wn,w),Vn=function(t,e){var n=function(n,r,i){var o,a,s,u=this
if(u.root=r,u.node=i.node,o=n.n||n,"string"!=typeof o&&(a=new e({descriptor:o,root:r,owner:i}),o=a.toString(),a.teardown()),n.a?u.params=n.a:n.d&&(u.fragment=new e({descriptor:n.d,root:r,owner:i}),u.params=u.fragment.toArgsList(),u.fragment.bubble=function(){this.dirty=!0,u.params=this.toArgsList(),u.ready&&u.update()}),u.fn=r.decorators[o],!u.fn){if(s='Missing "'+o+'" decorator. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#decorators',r.debug)throw new Error(s)
t(s)}}
return n.prototype={init:function(){var t,e
if(this.params?(e=[this.node].concat(this.params),t=this.fn.apply(this.root,e)):t=this.fn.call(this.root,this.node),!t||!t.teardown)throw new Error("Decorator definition must return an object with a teardown method")
this.actual=t,this.ready=!0},update:function(){this.actual.update?this.actual.update.apply(this.root,this.params):(this.actual.teardown(!0),this.init())},teardown:function(t){this.actual.teardown(),!t&&this.fragment&&this.fragment.teardown()}},n}(Z,Mn),Kn=function(t,e){return function(n,r,i){var o=new e(n,r,i)
o.fn&&(i.decorator=o,t.addDecorator(i.decorator))}}(L,Vn),zn=function(t,e){var n,r,i,o,a,s,u,c,h
return n=function(t,e,n,i){var o,a
o=t.node._ractive.events,a=o[e]||(o[e]=new r(t,e,i)),a.add(n)},r=function(e,n){var r
this.element=e,this.root=e.root,this.node=e.node,this.name=n,this.proxies=[],(r=this.root.events[n])?this.custom=r(this.node,h(n)):("on"+n in this.node||t('Missing "'+this.name+'" event. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#events'),this.node.addEventListener(n,c,!1))},r.prototype={add:function(t){this.proxies.push(new i(this.element,this.root,t))},teardown:function(){var t
for(this.custom?this.custom.teardown():this.node.removeEventListener(this.name,c,!1),t=this.proxies.length;t--;)this.proxies[t].teardown()},fire:function(t){for(var e=this.proxies.length;e--;)this.proxies[e].fire(t)}},i=function(t,n,r){var i
return this.root=n,i=r.n||r,this.n="string"==typeof i?i:new e({descriptor:r.n,root:this.root,owner:t}),r.a?(this.a=r.a,void(this.fire=a)):r.d?(this.d=new e({descriptor:r.d,root:this.root,owner:t}),void(this.fire=s)):void(this.fire=o)},i.prototype={teardown:function(){this.n.teardown&&this.n.teardown(),this.d&&this.d.teardown()},bubble:function(){}},o=function(t){this.root.fire(this.n.toString(),t)},a=function(t){this.root.fire.apply(this.root,[this.n.toString(),t].concat(this.a))},s=function(t){var e=this.d.toArgsList()
"string"==typeof e&&(e=e.substr(1,e.length-2)),this.root.fire.apply(this.root,[this.n.toString(),t].concat(e))},c=function(t){var e=this._ractive
e.events[t.type].fire({node:this,original:t,index:e.index,keypath:e.keypath,context:e.root.get(e.keypath)})},u={},h=function(t){return u[t]?u[t]:u[t]=function(e){var n=e.node._ractive
e.index=n.index,e.keypath=n.keypath,e.context=n.root.get(n.keypath),n.events[t].fire(e)}},n}(Z,Mn),Hn=function(t){return function(e,n){var r,i,o
for(i in n)if(n.hasOwnProperty(i))for(o=i.split("-"),r=o.length;r--;)t(e,o[r],n[i])}}(zn),$n=function(t){var e,n,r,i,o
e=t.root
do for(n=e._liveQueries,r=n.length;r--;)i=n[r],o=n[i],o._test(t)&&(t.liveQueries||(t.liveQueries=[])).push(o)
while(e=e._parent)},Gn=function(){if(this._inited)throw new Error("Cannot initialize a transition more than once")
this._inited=!0,this._fn.apply(this.root,[this].concat(this.params))},Jn=function(t,e,n){var r,i
if(t)return r={},i=n("div").style,function(t){var n,o,a
if(!r[t])if(void 0!==i[t])r[t]=t
else for(a=t.charAt(0).toUpperCase()+t.substring(1),n=e.length;n--;)if(o=e[n],void 0!==i[o+a]){r[t]=o+a
break}return r[t]}}(u,m,s),Yn=function(t,e,n,r){var i
if(e)return i=window.getComputedStyle||t.getComputedStyle,function(t){var e,i,o,a,s
if(e=window.getComputedStyle(this.node),"string"==typeof t)return s=e[r(t)],"0px"===s&&(s=0),s
if(!n(t))throw new Error("Transition#getStyle must be passed a string, or an array of strings representing CSS properties")
for(i={},o=t.length;o--;)a=t[o],s=e[r(a)],"0px"===s&&(s=0),i[a]=s
return i}}(r,u,R,Jn),Qn=function(t){return function(e,n){var r
if("string"==typeof e)this.node.style[t(e)]=n
else for(r in e)e.hasOwnProperty(r)&&(this.node.style[t(r)]=e[r])
return this}}(Jn),Xn=function(t){return t.replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()})},Zn=function(t,e,n){function r(t){return t}var i=function(i){var o
this.duration=i.duration,this.step=i.step,this.complete=i.complete,"string"==typeof i.easing?(o=i.root.easing[i.easing],o||(t('Missing easing function ("'+i.easing+'"). You may need to download a plugin from [TODO]'),o=r)):o="function"==typeof i.easing?i.easing:r,this.easing=o,this.start=e(),this.end=this.start+this.duration,this.running=!0,n.add(this)}
return i.prototype={tick:function(t){var e,n
return this.running?t>this.end?(this.step&&this.step(1),this.complete&&this.complete(1),!1):(e=t-this.start,n=this.easing(e/this.duration),this.step&&this.step(n),!0):!1},stop:function(){this.abort&&this.abort(),this.running=!1}},i}(Z,b,C),tr=function(t){var e=new RegExp("^-(?:"+t.join("|")+")-")
return function(t){return t.replace(e,"")}}(m),er=function(t){var e=new RegExp("^(?:"+t.join("|")+")([A-Z])")
return function(t){var n
return t?(e.test(t)&&(t="-"+t),n=t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})):""}}(m),nr=function(t,e,n,r,i,o,a,s,u){var c,h,l,f,d,p,g,v={},m={}
if(t)return c=n("div").style,function(){void 0!==c.transition?(h="transition",l="transitionend",f=!0):void 0!==c.webkitTransition?(h="webkitTransition",l="webkitTransitionEnd",f=!0):f=!1}(),h&&(d=h+"Duration",p=h+"Property",g=h+"TimingFunction"),function(t,n,c,h,f,y){setTimeout(function(){var b,w,E,_
_=function(){w&&E&&y()},b=t.node.namespaceURI+t.node.tagName,t.node.style[p]=h.map(a).map(u).join(","),t.node.style[g]=u(c.easing||"linear"),t.node.style[d]=c.duration/1e3+"s",f=function(e){var n
n=h.indexOf(r(s(e.propertyName))),-1!==n&&h.splice(n,1),h.length||(t.root.fire(t.name+":end"),t.node.removeEventListener(l,f,!1),E=!0,_())},t.node.addEventListener(l,f,!1),setTimeout(function(){for(var s,u,d,p,g=h.length,y=[];g--;)p=h[g],s=b+p,v[s]?t.node.style[a(p)]=n[p]:u=t.getStyle(p),void 0===v[s]&&(t.node.style[a(p)]=n[p],v[s]=t.getStyle(p)!=n[p],m[s]=!v[s]),m[s]&&(d=h.indexOf(p),-1===d?e("Something very strange happened with transitions. If you see this message, please let @RactiveJS know. Thanks!"):h.splice(d,1),t.node.style[a(p)]=u,y.push({name:a(p),interpolator:i(u,n[p])}))
y.length?new o({root:t.root,duration:c.duration,easing:r(c.easing),step:function(e){var n,r
for(r=y.length;r--;)n=y[r],t.node.style[n.name]=n.interpolator(e)},complete:function(){w=!0,_()}}):w=!0,h.length||(t.node.removeEventListener(l,f,!1),E=!0,_())},0)},c.delay||0)}}(u,Z,s,Xn,ne,Zn,Jn,tr,er),rr=function(t,e,n,r,i,o){var a
if(e)return a=window.getComputedStyle||t.getComputedStyle,function(t,e,a,s){var u,c=this
"string"==typeof t?(u={},u[t]=e):(u=t,s=a,a=e),a||(n('The "'+c.name+'" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340'),a=c,s=c.complete)
var h=new r(function(t){var e,n,r,s,h,l,f,d
if(!a.duration)return c.setStyle(u),void t()
for(e=Object.keys(u),n=[],r=window.getComputedStyle(c.node),h={},f=e.length;f--;)d=e[f],s=r[i(d)],"0px"===s&&(s=0),s!=u[d]&&(n.push(d),c.node.style[i(d)]=s)
return n.length?void o(c,u,a,n,l,t):void t()})
return s&&(n("t.animateStyle returns a Promise as of 0.4.0. Transition authors should do t.animateStyle(...).then(callback)"),h.then(s)),h}}(r,u,Z,g,Jn,nr),ir=function(t,e){var n
for(n in e)!e.hasOwnProperty(n)||n in t||(t[n]=e[n])
return t},or=function(t){return function(e,n){return"number"==typeof e?e={duration:e}:"string"==typeof e?e="slow"===e?{duration:600}:"fast"===e?{duration:200}:{duration:400}:e||(e={}),t(e,n)}}(ir),ar=function(){this.originalStyle?this.node.setAttribute("style",this.originalStyle):(this.node.getAttribute("style"),this.node.removeAttribute("style"))},sr=function(t,e,n,r,i,o,a,s){var u
return u=function(n,r,i,o){var a,s,u,c=this
if(this.root=r,this.node=i.node,this.isIntro=o,this.originalStyle=this.node.getAttribute("style"),c.complete=function(t){!t&&c.isIntro&&c.resetStyle(),c.node._ractive.transition=null,c._manager.remove(c)},a=n.n||n,"string"!=typeof a&&(s=new e({descriptor:a,root:this.root,owner:i}),a=s.toString(),s.teardown()),this.name=a,n.a?this.params=n.a:n.d&&(s=new e({descriptor:n.d,root:this.root,owner:i}),this.params=s.toArgsList(),s.teardown()),this._fn=r.transitions[a],!this._fn){if(u='Missing "'+a+'" transition. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#transitions',r.debug)throw new Error(u)
return void t(u)}},u.prototype={init:n,getStyle:r,setStyle:i,animateStyle:o,processParams:a,resetStyle:s},u}(Z,Mn,Gn,Yn,Qn,rr,or,ar),ur=function(t,e){return function(n,r,i,o){var a,s,u
!r.transitionsEnabled||r._parent&&!r._parent.transitionsEnabled||(a=new e(n,r,i,o),a._fn&&(s=a.node,(u=s._ractive.transition)&&u.complete(),s._ractive.transition=a,t.addTransition(a)))}}(L,sr),cr=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g,v){function m(t){do if("select"===t.lcName)return t
while(t=t.parent)}return function(y,b,w){var E,_,x,k,S,O,T,A,N,L,C,R
if(y.type=e.ELEMENT,E=y.parentFragment=b.parentFragment,_=E.pNode,x=y.descriptor=b.descriptor,y.parent=b.pElement,y.root=L=E.root,y.index=b.index,y.lcName=x.e.toLowerCase(),y.eventListeners=[],y.customEventListeners=[],y.cssDetachQueue=[],_&&(k=y.namespace=u(x,_),S=k!==n.html?v(x.e):x.e,y.node=a(S,k),L.css&&_===L.el&&y.node.setAttribute("data-rvcguid",L.constructor._guid||L._guid),i(y.node,"_ractive",{value:{proxy:y,keypath:s(E),index:E.indexRefs,events:r(null),root:L}})),O=h(y,x.a),x.f){if(y.node&&y.node.getAttribute("contenteditable")&&y.node.innerHTML){if(R="A pre-populated contenteditable element should not have children",L.debug)throw new Error(R)
o(R)}l(y,y.node,x,w)}w&&x.v&&d(y,x.v),w&&(L.twoway&&(y.bind(),y.node.getAttribute("contenteditable")&&y.node._ractive.binding&&y.node._ractive.binding.update()),O.name&&!O.name.twoway&&O.name.update(),"IMG"===y.node.tagName&&((T=y.attributes.width)||(A=y.attributes.height))&&y.node.addEventListener("load",N=function(){T&&(y.node.width=T.value),A&&(y.node.height=A.value),y.node.removeEventListener("load",N,!1)},!1),w.appendChild(y.node),x.o&&f(x.o,L,y),x.t1&&g(x.t1,L,y,!0),"OPTION"===y.node.tagName&&("SELECT"===_.tagName&&(C=_._ractive.binding)&&C.deferUpdate(),O.value||c(y,"value",x.f),y.node._ractive.value==_._ractive.value&&(y.node.selected=!0)),y.node.autofocus&&t.focus(y.node)),"option"===y.lcName&&(y.select=m(y.parent)),p(y)}}(L,F,a,Ie,c,Z,s,S,fn,Bn,Dn,qn,Kn,Hn,$n,ur,dn),hr=function(t,e){function n(t){var e,n,r,i,o
for(i=t.liveQueries.length;i--;)if(e=t.liveQueries[i],n=e.selector,e._remove(t.node),t.matchingStaticNodes&&(r=t.matchingStaticNodes[n]))for(o=r.length;o--;)e.remove(r[o])}return function(r){var i,o,a
for(r&&(this.willDetach=!0,t.detachWhenReady(this)),this.fragment&&this.fragment.teardown(!1);this.attributes.length;)this.attributes.pop().teardown()
if(this.node){for(i in this.node._ractive.events)this.node._ractive.events[i].teardown();(o=this.node._ractive.binding)&&(o.teardown(),a=this.root._twowayBindings[o.attr.keypath],a.splice(a.indexOf(o),1))}this.decorator&&this.decorator.teardown(),this.descriptor.t2&&e(this.descriptor.t2,this.root,this,!1),this.liveQueries&&n(this)}}(L,ur),lr=function(t){return function(e,n,r,i){var o,a,s,u,c,h,l,f,d
for(o=this.attributes.length;o--;)this.attributes[o].reassign(e,n,r,i)
if(a=this.node._ractive){t(a,"keypath",r,i),void 0!=e&&(a.index[e]=n)
for(s in a.events)for(u=a.events[s].proxies,o=u.length;o--;)c=u[o],"object"==typeof c.n&&c.a.reassign(e,n,r,i),c.d&&c.d.reassign(e,n,r,i);(h=a.binding)&&h.keypath.substr(0,r.length)===r&&(l=a.root._twowayBindings[h.keypath],l.splice(l.indexOf(h),1),h.keypath=h.keypath.replace(r,i),l=a.root._twowayBindings[h.keypath]||(a.root._twowayBindings[h.keypath]=[]),l.push(h))}if(this.fragment&&this.fragment.reassign(e,n,r,i),f=this.liveQueries)for(d=this.root,o=f.length;o--;)f[o]._makeDirty()}}(De),fr="area base br col command doctype embed hr img input keygen link meta param source track wbr".split(" "),dr=function(t,e){function n(t){var n,r,i,o,a
if(n=t.attributes.value.value,r=t.select.attributes.value,i=r.interpolator){if(o=t.root.get(i.keypath||i.ref),o==n)return!0
if(t.select.attributes.multiple&&e(o))for(a=o.length;a--;)if(o[a]==n)return!0}}function r(t){var e,n,r,i
return e=t.attributes,n=e.type,r=e.value,i=e.name,n&&"radio"===n.value&&r&&i.interpolator&&r.value===i.interpolator.value?!0:void 0}return function(){var e,i,o,a
for(e="<"+(this.descriptor.y?"!doctype":this.descriptor.e),o=this.attributes.length,i=0;o>i;i+=1)(a=this.attributes[i].toString())&&(e+=" "+a)
return"option"===this.lcName&&n(this)&&(e+=" selected"),"input"===this.lcName&&r(this)&&(e+=" checked"),e+=">",this.html?e+=this.html:this.fragment&&(e+=this.fragment.toString()),-1===t.indexOf(this.descriptor.e)&&(e+="</"+this.descriptor.e+">"),this.stringifying=!1,e}}(fr,R),pr=function(t){return function(e){var n
return t(this.node,e)?this.node:this.html&&(n=this.node.querySelector(e))?n:this.fragment&&this.fragment.find?this.fragment.find(e):void 0}}(se),gr=function(t){return function(e,n){var r,i
n._test(this,!0)&&n.live&&(this.liveQueries||(this.liveQueries=[])).push(n),this.html&&(r=t(this,e),n.push.apply(n,r),n.live&&!i&&(this.liveQueries||(this.liveQueries=[])).push(n)),this.fragment&&this.fragment.findAll(e,n)}}(Wn),vr=function(t){return this.fragment?this.fragment.findComponent(t):void 0},mr=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e)},yr=function(){var t=this.attributes
if(this.node&&(this.binding&&(this.binding.teardown(),this.binding=null),!(this.node.getAttribute("contenteditable")&&t.value&&t.value.bind())))switch(this.descriptor.e){case"select":case"textarea":return void(t.value&&t.value.bind())
case"input":if("radio"===this.node.type||"checkbox"===this.node.type){if(t.name&&t.name.bind())return
if(t.checked&&t.checked.bind())return}if(t.value&&t.value.bind())return}},br=function(t,e,n,r,i,o,a,s,u,c,h){var l=function(t,e){n(this,t,e)}
return l.prototype={detach:function(){var n
if(this.node)return this.node.parentNode&&this.node.parentNode.removeChild(this.node),this.node
if(this.cssDetachQueue.length){for(t.start();n===this.cssDetachQueue.pop();)e.remove(n)
t.end()}},teardown:r,reassign:i,firstNode:function(){return this.node},findNextNode:function(){return null},bubble:function(){},toString:o,find:a,findAll:s,findComponent:u,findAllComponents:c,bind:h},l}(L,_,cr,hr,lr,dr,pr,gr,vr,mr,yr),wr={missingParser:"Missing Ractive.parse - cannot parse template. Either preparse or use the version that includes the parser"},Er={},_r=function(t){var e,n,r
for(r="";t.length;){if(e=t.indexOf("<!--"),n=t.indexOf("-->"),-1===e&&-1===n){r+=t
break}if(-1!==e&&-1===n)throw"Illegal HTML - expected closing comment sequence ('-->')"
if(-1!==n&&-1===e||e>n)throw"Illegal HTML - unexpected closing comment sequence ('-->')"
r+=t.substr(0,e),t=t.substring(n+3)}return r},xr=function(t){return function(e){var n,r,i,o,a,s
for(a=/^\s*\r?\n/,s=/\r?\n\s*$/,n=2;n<e.length;n+=1)r=e[n],i=e[n-1],o=e[n-2],r.type===t.TEXT&&i.type===t.MUSTACHE&&i.mustacheType!==t.PARTIAL&&o.type===t.TEXT&&s.test(o.value)&&a.test(r.value)&&(i.mustacheType!==t.INTERPOLATOR&&i.mustacheType!==t.TRIPLE&&(o.value=o.value.replace(s,"\n")),r.value=r.value.replace(a,""),""===r.value&&e.splice(n--,1))
return e}}(F),kr=function(t){return function(e){var n,r,i,o
for(n=0;n<e.length;n+=1)r=e[n],i=e[n-1],o=e[n+1],(r.mustacheType===t.COMMENT||r.mustacheType===t.DELIMCHANGE)&&(e.splice(n,1),i&&o&&i.type===t.TEXT&&o.type===t.TEXT&&(i.value+=o.value,e.splice(n,1)),n-=1)
return e}}(F),Sr=function(t){var e=t(/^[^\s=]+/)
return function(t){var n,r,i
return t.getStringMatch("=")?(n=t.pos,t.allowWhitespace(),(r=e(t))?(t.allowWhitespace(),(i=e(t))?(t.allowWhitespace(),t.getStringMatch("=")?[r,i]:(t.pos=n,null)):(t.pos=n,null)):(t.pos=n,null)):null}}(xn),Or=function(t){var e={"#":t.SECTION,"^":t.INVERTED,"/":t.CLOSING,">":t.PARTIAL,"!":t.COMMENT,"&":t.TRIPLE}
return function(t){var n=e[t.str.charAt(t.pos)]
return n?(t.pos+=1,n):null}}(F),Tr=function(t,e,n){function r(e){for(var n=[];e.t===t.MEMBER&&e.r.t===t.REFINEMENT;)n.unshift(e.r),e=e.x
return e.t!==t.REFERENCE?null:{r:e.n,m:n}}var i=e(/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/),o=/^[0-9][1-9]*$/
return function(e,a){var s,u,c,h,l,f,d,p,g
if(s=e.pos,u={type:a?t.TRIPLE:t.MUSTACHE},!(a||((h=e.getExpression())&&(u.mustacheType=t.INTERPOLATOR,e.allowWhitespace(),e.getStringMatch(e.delimiters[1])?e.pos-=e.delimiters[1].length:(e.pos=s,h=null)),h||(c=n(e),c===t.TRIPLE?u={type:t.TRIPLE}:u.mustacheType=c||t.INTERPOLATOR,c!==t.COMMENT&&c!==t.CLOSING||(f=e.remaining(),d=f.indexOf(e.delimiters[1]),-1===d)))))return u.ref=f.substr(0,d),e.pos+=d,u
if(!h&&(e.allowWhitespace(),h=e.getExpression(),f=e.remaining(),p=a?e.tripleDelimiters[1]:e.delimiters[1],f.substr(0,p.length)!==p&&":"!==f.charAt(0)&&(e.pos=s,f=e.remaining(),d=f.indexOf(e.delimiters[1]),-1!==d)))return u.ref=f.substr(0,d).trim(),e.pos+=d,u
for(;h.t===t.BRACKETED&&h.x;)h=h.x
return h.t===t.REFERENCE?u.ref=h.n:h.t===t.NUMBER_LITERAL&&o.test(h.v)?u.ref=h.v:(g=r(h))?u.keypathExpression=g:u.expression=h,l=i(e),null!==l&&(u.indexRef=l),u}}(F,xn,Or),Ar=function(t,e,n){function r(r,i){var o,a,s=r.pos
return a=i?r.tripleDelimiters:r.delimiters,r.getStringMatch(a[0])?(o=e(r))?r.getStringMatch(a[1])?(r[i?"tripleDelimiters":"delimiters"]=o,{type:t.MUSTACHE,mustacheType:t.DELIMCHANGE}):(r.pos=s,null):(r.allowWhitespace(),o=n(r,i),null===o?(r.pos=s,null):(r.allowWhitespace(),r.getStringMatch(a[1])?o:(r.pos=s,null))):null}return function(){var t=this.tripleDelimiters[0].length>this.delimiters[0].length
return r(this,t)||r(this,!t)}}(F,Sr,Tr),Nr=function(t){return function(){var e,n,r
if(!this.getStringMatch("<!--"))return null
if(n=this.remaining(),r=n.indexOf("-->"),-1===r)throw new Error('Unexpected end of input (expected "-->" to close comment)')
return e=n.substr(0,r),this.pos+=r+3,{type:t.COMMENT,content:e}}}(F),Lr=function(t,e){var n,r,i
for(n=e.length;n--;){if(r=t.indexOf(e[n]),!r)return 0;-1!==r&&(!i||i>r)&&(i=r)}return i||-1},Cr=function(t,e,n){var r,i,o,a,s,u,c,h,l,f,d,p,g
return r=function(){return i(this)||o(this)},i=function(e){var n,r,i,o
return n=e.pos,e.inside?null:e.getStringMatch("<")?(r={type:t.TAG},e.getStringMatch("!")&&(r.doctype=!0),r.name=a(e),r.name?(i=s(e),i&&(r.attrs=i),e.allowWhitespace(),e.getStringMatch("/")&&(r.selfClosing=!0),e.getStringMatch(">")?(o=r.name.toLowerCase(),("script"===o||"style"===o)&&(e.inside=o),r):(e.pos=n,null)):(e.pos=n,null)):null},o=function(e){var n,r,i
if(n=e.pos,i=function(t){throw new Error("Unexpected character "+e.remaining().charAt(0)+" (expected "+t+")")},!e.getStringMatch("<"))return null
if(r={type:t.TAG,closing:!0},e.getStringMatch("/")||i('"/"'),r.name=a(e),r.name||i("tag name"),e.getStringMatch(">")||i('">"'),e.inside){if(r.name.toLowerCase()!==e.inside)return e.pos=n,null
e.inside=null}return r},a=e(/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/),s=function(t){var e,n,r
if(e=t.pos,!t.getStringMatch(" ")&&!t.getStringMatch("\n"))return null
if(t.allowWhitespace(),r=u(t),!r)return t.pos=e,null
for(n=[];null!==r;)n.push(r),t.allowWhitespace(),r=u(t)
return n},u=function(t){var e,n,r
return(n=c(t))?(e={name:n},r=h(t),r&&(e.value=r),e):null},c=e(/^[^\s"'>\/=]+/),h=function(t){var e,n
return e=t.pos,t.allowWhitespace(),t.getStringMatch("=")?(t.allowWhitespace(),n=g(t,"'")||g(t,'"')||l(t),null===n?(t.pos=e,null):n):(t.pos=e,null)},d=e(/^[^\s"'=<>`]+/),f=function(e){var n,r,i
return n=e.pos,(r=d(e))?(-1!==(i=r.indexOf(e.delimiters[0]))&&(r=r.substr(0,i),e.pos=n+r.length),{type:t.TEXT,value:r}):null},l=function(t){var e,n
for(e=[],n=t.getMustache()||f(t);null!==n;)e.push(n),n=t.getMustache()||f(t)
return e.length?e:null},g=function(t,e){var n,r,i
if(n=t.pos,!t.getStringMatch(e))return null
for(r=[],i=t.getMustache()||p(t,e);null!==i;)r.push(i),i=t.getMustache()||p(t,e)
return t.getStringMatch(e)?r:(t.pos=n,null)},p=function(e,r){var i,o,a
if(i=e.pos,a=e.remaining(),o=n(a,[r,e.delimiters[0],e.delimiters[1]]),-1===o)throw new Error("Quoted attribute value must have a closing quote")
return o?(e.pos+=o,{type:t.TEXT,value:a.substr(0,o)}):null},r}(F,xn,Lr),Rr=function(t,e){return function(){var n,r,i
return r=this.remaining(),i=this.inside?"</"+this.inside:"<",(n=this.inside&&!this.interpolate[this.inside]?r.indexOf(i):e(r,[i,this.delimiters[0],this.tripleDelimiters[0]]))?(-1===n&&(n=r.length),this.pos+=n,{type:t.TEXT,value:r.substr(0,n)}):null}}(F,Lr),jr=function(t){return function(e){var n=e.remaining()
return"true"===n.substr(0,4)?(e.pos+=4,{t:t.BOOLEAN_LITERAL,v:"true"}):"false"===n.substr(0,5)?(e.pos+=5,{t:t.BOOLEAN_LITERAL,v:"false"}):null}}(F),Ir=function(t,e){return function(n){var r,i,o
return r=n.pos,n.allowWhitespace(),i=e(n),null===i?(n.pos=r,null):(n.allowWhitespace(),n.getStringMatch(":")?(n.allowWhitespace(),o=n.getExpression(),null===o?(n.pos=r,null):{t:t.KEY_VALUE_PAIR,k:i,v:o}):(n.pos=r,null))}}(F,Ln),Pr=function(t){return function e(n){var r,i,o,a
return r=n.pos,o=t(n),null===o?null:(i=[o],n.getStringMatch(",")?(a=e(n),a?i.concat(a):(n.pos=r,null)):i)}}(Ir),Mr=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.getStringMatch("{")?(i=e(n),n.allowWhitespace(),n.getStringMatch("}")?{t:t.OBJECT_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(F,Pr),Fr=function go(t){var e,n,r,i
if(e=t.pos,t.allowWhitespace(),r=t.getExpression(),null===r)return null
if(n=[r],t.allowWhitespace(),t.getStringMatch(",")){if(i=go(t),null===i)return t.pos=e,null
n=n.concat(i)}return n},Br=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.getStringMatch("[")?(i=e(n),n.getStringMatch("]")?{t:t.ARRAY_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(F,Fr),Dr=function(t,e,n,r,i){return function(o){var a=t(o)||e(o)||n(o)||r(o)||i(o)
return a}}(An,jr,Tn,Mr,Br),Ur=function(t,e,n){var r,i,o,a
return r=e(/^\.[a-zA-Z_$0-9]+/),i=function(t){var e=o(t)
return e?"."+e:null},o=e(/^\[(0|[1-9][0-9]*)\]/),a=/^(?:Array|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null)$/,function(e){var o,s,u,c,h,l,f
for(o=e.pos,s="";e.getStringMatch("../");)s+="../"
if(s||(c=e.getStringMatch(".")||""),u=n(e)||"",!s&&!c&&a.test(u))return{t:t.GLOBAL,v:u}
if("this"!==u||s||c||(u=".",o+=3),h=(s||c)+u,!h)return null
for(;l=r(e)||i(e);)h+=l
return e.getStringMatch("(")&&(f=h.lastIndexOf("."),-1!==f?(h=h.substr(0,f),e.pos=o+h.length):e.pos-=1),{t:t.REFERENCE,n:h}}}(F,xn,Nn),Wr=function(t){return function(e){var n,r
return n=e.pos,e.getStringMatch("(")?(e.allowWhitespace(),(r=e.getExpression())?(e.allowWhitespace(),e.getStringMatch(")")?{t:t.BRACKETED,x:r}:(e.pos=n,null)):(e.pos=n,null)):null}}(F),qr=function(t,e,n){return function(r){return t(r)||e(r)||n(r)}}(Dr,Ur,Wr),Vr=function(t,e){return function(n){var r,i,o
if(r=n.pos,n.allowWhitespace(),n.getStringMatch(".")){if(n.allowWhitespace(),i=e(n))return{t:t.REFINEMENT,n:i}
n.expected("a property name")}return n.getStringMatch("[")?(n.allowWhitespace(),o=n.getExpression(),o||n.expected("an expression"),n.allowWhitespace(),n.getStringMatch("]")||n.expected('"]"'),{t:t.REFINEMENT,x:o}):null}}(F,Nn),Kr=function(t,e,n,r){return function(i){var o,a,s,u
if(a=e(i),!a)return null
for(;a;)if(o=i.pos,s=r(i))a={t:t.MEMBER,x:a,r:s}
else{if(!i.getStringMatch("("))break
if(i.allowWhitespace(),u=n(i),i.allowWhitespace(),!i.getStringMatch(")")){i.pos=o
break}a={t:t.INVOCATION,x:a},u&&(a.o=u)}return a}}(F,qr,Fr,Vr),zr=function(t,e){var n,r
return r=function(e,n){return function(r){var i,o
return r.getStringMatch(e)?(i=r.pos,r.allowWhitespace(),o=r.getExpression(),o||r.expected("an expression"),{s:e,o:o,t:t.PREFIX_OPERATOR}):n(r)}},function(){var t,i,o,a,s
for(a="! ~ + - typeof".split(" "),s=e,t=0,i=a.length;i>t;t+=1)o=r(a[t],s),s=o
n=s}(),n}(F,Kr),Hr=function(t,e){var n,r
return r=function(e,n){return function(r){var i,o,a
if(o=n(r),!o)return null
for(;;){if(i=r.pos,r.allowWhitespace(),!r.getStringMatch(e))return r.pos=i,o
if("in"===e&&/[a-zA-Z_$0-9]/.test(r.remaining().charAt(0)))return r.pos=i,o
if(r.allowWhitespace(),a=n(r),!a)return r.pos=i,o
o={t:t.INFIX_OPERATOR,s:e,o:[o,a]}}}},function(){var t,i,o,a,s
for(a="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" "),s=e,t=0,i=a.length;i>t;t+=1)o=r(a[t],s),s=o
n=s}(),n}(F,zr),$r=function(t,e){return function(n){var r,i,o,a
return(i=e(n))?(r=n.pos,n.allowWhitespace(),n.getStringMatch("?")?(n.allowWhitespace(),(o=n.getExpression())?(n.allowWhitespace(),n.getStringMatch(":")?(n.allowWhitespace(),a=n.getExpression(),a?{t:t.CONDITIONAL,o:[i,o,a]}:(n.pos=r,i)):(n.pos=r,i)):(n.pos=r,i)):(n.pos=r,i)):null}}(F,Hr),Gr=function(t){return function(){return t(this)}}($r),Jr=function(t,e,n,r,i,o,a){var s
return s=function(t,e){var n
for(this.str=t,this.pos=0,this.delimiters=e.delimiters,this.tripleDelimiters=e.tripleDelimiters,this.interpolate=e.interpolate,this.tokens=[];this.pos<this.str.length;)n=this.getToken(),null===n&&this.remaining()&&this.fail(),this.tokens.push(n)},s.prototype={getToken:function(){var t=this.getMustache()||this.getComment()||this.getTag()||this.getText()
return t},getMustache:t,getComment:e,getTag:n,getText:r,getExpression:i,allowWhitespace:o,getStringMatch:a,remaining:function(){return this.str.substring(this.pos)},fail:function(){var t,e
throw t=this.str.substr(0,this.pos).substr(-20),20===t.length&&(t="..."+t),e=this.remaining().substr(0,20),20===e.length&&(e+="..."),new Error("Could not parse template: "+(t?t+"<- ":"")+"failed at character "+this.pos+" ->"+e)},expected:function(t){var e=this.remaining().substr(0,40)
throw 40===e.length&&(e+="..."),new Error('Tokenizer failed: unexpected string "'+e+'" (expected '+t+")")}},s}(Ar,Nr,Cr,Rr,Gr,_n,En),Yr=function(t,e,n,r,i){return function(o,a){var s,u
return a=a||{},a.stripComments!==!1&&(o=e(o)),s=new i(o,{delimiters:a.delimiters||t.defaults.delimiters,tripleDelimiters:a.tripleDelimiters||t.defaults.tripleDelimiters,interpolate:{script:a.interpolateScripts!==!1?!0:!1,style:a.interpolateStyles!==!1?!0:!1}}),u=s.tokens,n(u),r(u),u}}(i,_r,xr,kr,Jr),Qr=function(t){var e,n,r,i,o,a,s,u,c
return e=function(t,e){this.text=e?t.value:t.value.replace(c," ")},e.prototype={type:t.TEXT,toJSON:function(){return this.decoded||(this.decoded=u(this.text))},toString:function(){return this.text}},n={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},r=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],i=new RegExp("&("+Object.keys(n).join("|")+");?","g"),o=/&#x([0-9]+);?/g,a=/&#([0-9]+);?/g,s=function(t){return t?10===t?32:128>t?t:159>=t?r[t-128]:55296>t?t:57343>=t?65533:65535>=t?t:65533:65533},u=function(t){var e
return e=t.replace(i,function(t,e){return n[e]?String.fromCharCode(n[e]):t}),e=e.replace(o,function(t,e){return String.fromCharCode(s(parseInt(e,16)))}),e=e.replace(a,function(t,e){return String.fromCharCode(s(e))})},c=/\s+/g,e}(F),Xr=function(t,e){return function(n,r){return n.type===t.TEXT?(this.pos+=1,new e(n,r)):null}}(F,Qr),Zr=function(t){var e
return e=function(t){this.content=t.content},e.prototype={toJSON:function(){return{t:t.COMMENT,f:this.content}},toString:function(){return"<!--"+this.content+"-->"}},e}(F),ti=function(t,e){return function(n){return n.type===t.COMMENT?(this.pos+=1,new e(n,this.preserveWhitespace)):null}}(F,Zr),ei=function(t,e){function n(t){return JSON.stringify(String(t))}function r(n,i){var o,a
if(n.t===t.REFERENCE&&-1===i.indexOf(n.n)&&i.unshift(n.n),a=n.o||n.m)if(e(a))r(a,i)
else for(o=a.length;o--;)r(a[o],i)
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
return r||n||(i=t(e),i===!1)?o=e.map(function(t){return t.toJSON(n)}):i}}(ii),ai=function(t,e,n,r,i){function o(t,n){var r=t.ref,i=e(n.ref.trim())
if(r&&i&&(t.indexRef&&(r+=":"+t.indexRef),r.substr(0,i.length)!==i))throw new Error("Could not parse template: Illegal closing section {{/"+i+"}}. Expected {{/"+t.ref+"}}.")}var a=function(e,n){var a
for(this.ref=e.ref,this.indexRef=e.indexRef,this.inverted=e.mustacheType===t.INVERTED,e.keypathExpression&&(this.keypathExpr=new r(e.keypathExpression)),e.expression&&(this.expr=new i(e.expression)),n.pos+=1,this.items=[],a=n.next();a;){if(a.mustacheType===t.CLOSING){o(this,a),n.pos+=1
break}this.items.push(n.getStub()),a=n.next()}}
return a.prototype={toJSON:function(e){var r
return this.json?this.json:(r={t:t.SECTION},this.ref&&(r.r=this.ref),this.indexRef&&(r.i=this.indexRef),this.inverted&&(r.n=!0),this.expr&&(r.x=this.expr.toJSON()),this.keypathExpr&&(r.kx=this.keypathExpr.toJSON()),this.items.length&&(r.f=n(this.items,e)),this.json=r,r)},toString:function(){return!1}},a}(F,v,oi,ni,ei),si=function(t,e,n){return function(r){return r.type===t.MUSTACHE||r.type===t.TRIPLE?r.mustacheType===t.SECTION||r.mustacheType===t.INVERTED?new n(r,this):new e(r,this):void 0}}(F,ri,ai),ui={li:["li"],dt:["dt","dd"],dd:["dt","dd"],p:"address article aside blockquote dir div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr menu nav ol p pre section table ul".split(" "),rt:["rt","rp"],rp:["rp","rt"],optgroup:["optgroup"],option:["option","optgroup"],thead:["tbody","tfoot"],tbody:["tbody","tfoot"],tr:["tr"],td:["td","th"],th:["td","th"]},ci=function(t){function e(n){var r,i
if("object"!=typeof n)return n
if(t(n))return n.map(e)
r={}
for(i in n)n.hasOwnProperty(i)&&(r[i]=e(n[i]))
return r}return function(t){var n,r,i,o,a,s
for(i={},n=[],r=[],a=t.length,o=0;a>o;o+=1)if(s=t[o],"intro"===s.name){if(i.intro)throw new Error("An element can only have one intro transition")
i.intro=s}else if("outro"===s.name){if(i.outro)throw new Error("An element can only have one outro transition")
i.outro=s}else if("intro-outro"===s.name){if(i.intro||i.outro)throw new Error("An element can only have one intro and one outro transition")
i.intro=s,i.outro=e(s)}else"proxy-"===s.name.substr(0,6)?(s.name=s.name.substring(6),r.push(s)):"on-"===s.name.substr(0,3)?(s.name=s.name.substring(3),r.push(s)):"decorator"===s.name?i.decorator=s:n.push(s)
return i.attrs=n,i.proxies=r,i}}(R),hi=function(t,e){return function(n){var r,i,o,a,s,u,c,h
for(s=function(){throw new Error("Illegal directive")},n.name&&n.value||s(),r={directiveType:n.name},i=n.value,u=[],c=[];i.length;)if(o=i.shift(),o.type===t.TEXT){if(a=o.value.indexOf(":"),-1!==a){a&&u.push({type:t.TEXT,value:o.value.substr(0,a)}),o.value.length>a+1&&(c[0]={type:t.TEXT,value:o.value.substring(a+1)})
break}u.push(o)}else u.push(o)
return c=c.concat(i),r.name=1===u.length&&u[0].type===t.TEXT?u[0].value:u,c.length&&(1===c.length&&c[0].type===t.TEXT?(h=e("["+c[0].value+"]"),r.args=h?h.value:c[0].value):r.dynamicArgs=c),r}}(F,Cn),li=function(t,e){var n
return n=function(t,e){var n
for(this.tokens=t||[],this.pos=0,this.options=e,this.result=[];n=this.getStub();)this.result.push(n)},n.prototype={getStub:function(){var t=this.next()
return t?this.getText(t)||this.getMustache(t):null},getText:t,getMustache:e,next:function(){return this.tokens[this.pos]}},n}(Xr,si),fi=function(t,e,n){var r
return r=function(e){var n=new t(e)
this.stubs=n.result},r.prototype={toJSON:function(t){var e
return this["json_"+t]?this["json_"+t]:e=this["json_"+t]=n(this.stubs,t)},toString:function(){return void 0!==this.str?this.str:(this.str=e(this.stubs),this.str)}},r}(li,ii,oi),di=function(t){return function(e){var n,r
if("string"==typeof e.name){if(!e.args&&!e.dynamicArgs)return e.name
r=e.name}else r=new t(e.name).toJSON()
return n={n:r},e.args?(n.a=e.args,n):(e.dynamicArgs&&(n.d=new t(e.dynamicArgs).toJSON()),n)}}(fi),pi=function(t,e,n){return function(r){var i,o,a,s,u,c,h
if(this["json_"+r])return this["json_"+r]
if(i={t:t.ELEMENT,e:this.tag},this.doctype&&(i.y=1),this.attributes&&this.attributes.length)for(i.a={},c=this.attributes.length,u=0;c>u;u+=1){if(h=this.attributes[u],o=h.name,i.a[o])throw new Error("You cannot have multiple attributes with the same name")
a=null===h.value?null:h.value.toJSON(r),i.a[o]=a}if(this.items&&this.items.length&&(i.f=e(this.items,r)),this.proxies&&this.proxies.length)for(i.v={},c=this.proxies.length,u=0;c>u;u+=1)s=this.proxies[u],i.v[s.directiveType]=n(s)
return this.intro&&(i.t1=n(this.intro)),this.outro&&(i.t2=n(this.outro)),this.decorator&&(i.o=n(this.decorator)),this["json_"+r]=i,i}}(F,oi,di),gi=function(t,e){var n
return n="a abbr acronym address applet area b base basefont bdo big blockquote body br button caption center cite code col colgroup dd del dfn dir div dl dt em fieldset font form frame frameset h1 h2 h3 h4 h5 h6 head hr html i iframe img input ins isindex kbd label legend li link map menu meta noframes noscript object ol p param pre q s samp script select small span strike strong style sub sup textarea title tt u ul var article aside audio bdi canvas command data datagrid datalist details embed eventsource figcaption figure footer header hgroup keygen mark meter nav output progress ruby rp rt section source summary time track video wbr".split(" "),function(){var r,i,o,a,s,u,c,h
if(void 0!==this.str)return this.str
if(-1===n.indexOf(this.tag.toLowerCase()))return this.str=!1
if(this.proxies||this.intro||this.outro||this.decorator)return this.str=!1
if(c=t(this.items),c===!1)return this.str=!1
if(h=-1!==e.indexOf(this.tag.toLowerCase()),r="<"+this.tag,this.attributes)for(i=0,o=this.attributes.length;o>i;i+=1){if(s=this.attributes[i].name,-1!==s.indexOf(":"))return this.str=!1
if("id"===s||"intro"===s||"outro"===s)return this.str=!1
if(a=" "+s,null!==this.attributes[i].value){if(u=this.attributes[i].value.toString(),u===!1)return this.str=!1
""!==u&&(a+="=",a+=/[\s"'=<>`]/.test(u)?'"'+u.replace(/"/g,"&quot;")+'"':u)}r+=a}return this.selfClosing&&!h?(r+="/>",this.str=r):(r+=">",h?this.str=r:(r+=c,r+="</"+this.tag+">",this.str=r))}}(ii,fr),vi=function(t,e,n,r,i,o,a,s,u){var c,h,l,f,d,p=/^\s+/,g=/\s+$/
return c=function(a,s,c){var h,l,f,v,m,y,b
if(s.pos+=1,y=function(t){return{name:t.name,value:t.value?new u(t.value):null}},this.tag=a.name,b=a.name.toLowerCase(),"rv-"===b.substr(0,3)&&(n('The "rv-" prefix for components has been deprecated. Support will be removed in a future version'),this.tag=this.tag.substring(3)),c=c||"pre"===b||"style"===b||"script"===b,a.attrs&&(f=i(a.attrs),l=f.attrs,v=f.proxies,s.options.sanitize&&s.options.sanitize.eventAttributes&&(l=l.filter(d)),l.length&&(this.attributes=l.map(y)),v.length&&(this.proxies=v.map(o)),f.intro&&(this.intro=o(f.intro)),f.outro&&(this.outro=o(f.outro)),f.decorator&&(this.decorator=o(f.decorator))),a.doctype&&(this.doctype=!0),a.selfClosing&&(this.selfClosing=!0),-1!==e.indexOf(b)&&(this.isVoid=!0),!this.selfClosing&&!this.isVoid){for(this.siblings=r[b],this.items=[],h=s.next();h&&h.mustacheType!==t.CLOSING;){if(h.type===t.TAG){if(h.closing){h.name.toLowerCase()===b&&(s.pos+=1)
break}if(this.siblings&&-1!==this.siblings.indexOf(h.name.toLowerCase()))break}this.items.push(s.getStub(c)),h=s.next()}c||(m=this.items[0],m&&m.type===t.TEXT&&(m.text=m.text.replace(p,""),m.text||this.items.shift()),m=this.items[this.items.length-1],m&&m.type===t.TEXT&&(m.text=m.text.replace(g,""),m.text||this.items.pop()))}},c.prototype={toJSON:a,toString:s},h="a abbr acronym address applet area b base basefont bdo big blockquote body br button caption center cite code col colgroup dd del dfn dir div dl dt em fieldset font form frame frameset h1 h2 h3 h4 h5 h6 head hr html i iframe img input ins isindex kbd label legend li link map menu meta noframes noscript object ol p param pre q s samp script select small span strike strong style sub sup textarea title tt u ul var article aside audio bdi canvas command data datagrid datalist details embed eventsource figcaption figure footer header hgroup keygen mark meter nav output progress ruby rp rt section source summary time track video wbr".split(" "),l="li dd rt rp optgroup option tbody tfoot tr td th".split(" "),f=/^on[a-zA-Z]/,d=function(t){var e=!f.test(t.name)
return e},c}(F,fr,Z,ui,ci,hi,pi,gi,fi),mi=function(t){return function(e){return this.options.sanitize&&this.options.sanitize.elements&&-1!==this.options.sanitize.elements.indexOf(e.name.toLowerCase())?null:new t(e,this,this.preserveWhitespace)}}(vi),yi=function(t,e,n,r,i){var o
return o=function(t,e){var n,r
for(this.tokens=t||[],this.pos=0,this.options=e,this.preserveWhitespace=e.preserveWhitespace,r=[];n=this.getStub();)r.push(n)
this.result=i(r,e.noStringify,!0)},o.prototype={getStub:function(t){var e=this.next()
return e?this.getText(e,this.preserveWhitespace||t)||this.getComment(e)||this.getMustache(e)||this.getElement(e):null},getText:t,getComment:e,getMustache:n,getElement:r,next:function(){return this.tokens[this.pos]}},o}(Xr,ti,si,mi,oi),bi=function(t,e,n){var r,i,o,a,s
return i=/^\s*$/,o=/<!--\s*\{\{\s*>\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}\}\s*-->/,a=/<!--\s*\{\{\s*\/\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}\}\s*-->/,r=function(r,a){var u,c,h
return a=a||{},o.test(r)?s(r,a):(a.sanitize===!0&&(a.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),u=t(r,a),a.preserveWhitespace||(h=u[0],h&&h.type===e.TEXT&&i.test(h.value)&&u.shift(),h=u[u.length-1],h&&h.type===e.TEXT&&i.test(h.value)&&u.pop()),c=new n(u,a).result,"string"==typeof c?[c]:c)},s=function(t,e){var n,i,s,u,c,h
for(s={},n="",i=t;c=o.exec(i);){if(u=c[1],n+=i.substr(0,c.index),i=i.substring(c.index+c[0].length),h=a.exec(i),!h||h[1]!==u)throw new Error("Inline partials must have a closing delimiter, and cannot be nested")
s[u]=r(i.substr(0,h.index),e),i=i.substring(h.index+h[0].length)}return{main:r(n,e),partials:s}},r}(Yr,F,yi),wi=function(){function t(t,e){var r=n.exec(e)[0]
return null===t||r.length<t.length?r:t}var e=/^\s*$/,n=/^\s*/
return function(n){var r,i,o,a
return r=n.split("\n"),i=r[0],void 0!==i&&e.test(i)&&r.shift(),o=r[r.length-1],void 0!==o&&e.test(o)&&r.pop(),a=r.reduce(t,null),a&&(n=r.map(function(t){return t.replace(a,"")}).join("\n")),n}}(),Ei=function(t,e,n,r,i,o,a){var s,u,c,h
return s=function(r,s){var l,f,d
if(f=c(r,s))return f
if(e&&(l=document.getElementById(s),l&&"SCRIPT"===l.tagName)){if(!o)throw new Error(t.missingParser)
u(o(a(l.text),r.parseOptions),s,i)}if(f=i[s],!f){if(d='Could not find descriptor for partial "'+s+'"',r.debug)throw new Error(d)
return n(d),[]}return h(f)},c=function(e,n){var r
if(e.partials[n]){if("string"==typeof e.partials[n]){if(!o)throw new Error(t.missingParser)
r=o(e.partials[n],e.parseOptions),u(r,n,e.partials)}return h(e.partials[n])}},u=function(t,e,n){var i
if(r(t)){n[e]=t.main
for(i in t.partials)t.partials.hasOwnProperty(i)&&(n[i]=t.partials[i])}else n[e]=t},h=function(t){return 1===t.length&&"string"==typeof t[0]?t[0]:t},s}(wr,u,Z,te,Er,bi,wi),_i=function(t,e){var n
return e?n=t.split("\n").map(function(t,n){return n?e+t:t}).join("\n"):t},xi=function(t,e,n,r){var i,o
return r.push(function(){o=r.DomFragment}),i=function(n,r){var i,a=this.parentFragment=n.parentFragment
if(this.type=t.PARTIAL,this.name=n.descriptor.r,this.index=n.index,!n.descriptor.r)throw new Error("Partials must have a static reference (no expressions). This may change in a future version of Ractive.")
i=e(a.root,n.descriptor.r),this.fragment=new o({descriptor:i,root:a.root,pNode:a.pNode,owner:this}),r&&r.appendChild(this.fragment.docFrag)},i.prototype={firstNode:function(){return this.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},detach:function(){return this.fragment.detach()},reassign:function(t,e,n,r){return this.fragment.reassign(t,e,n,r)},teardown:function(t){this.fragment.teardown(t)},toString:function(){var e,r,i,o
return e=this.fragment.toString(),r=this.parentFragment.items[this.index-1],r&&r.type===t.TEXT?(i=r.descriptor.split("\n").pop(),(o=/^\s+$/.exec(i))?n(e,o[0]):e):e},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)}},i}(F,Ei,_i,w),ki=function(t,e){var n=function(t,n,r){this.parentFragment=t.parentFragment,this.component=t,this.key=n,this.fragment=new e({descriptor:r,root:t.root,owner:this}),this.selfUpdating=this.fragment.isSimple(),this.value=this.fragment.getValue()}
return n.prototype={bubble:function(){this.selfUpdating?this.update():!this.deferred&&this.ready&&(t.addAttribute(this),this.deferred=!0)},update:function(){var t=this.fragment.getValue()
this.component.instance.set(this.key,t),this.value=t},teardown:function(){this.fragment.teardown()}},n}(L,Mn),Si=function(t,e,n,r,i){function o(o,a,s,u){var c,h,l,f,d,p
return l=o.root,f=o.parentFragment,"string"==typeof s?(h=e(s),h?h.value:s):null===s?!0:1===s.length&&s[0].t===t.INTERPOLATOR&&s[0].r?f.indexRefs&&void 0!==f.indexRefs[p=s[0].r]?(o.indexRefBindings[p]=a,f.indexRefs[p]):(d=n(l,s[0].r,f)||s[0].r,u.push({childKeypath:a,parentKeypath:d}),r(l,d)):(c=new i(o,a,s),o.complexParameters.push(c),c.value)}return function(t,e,n,r){var i,a,s
i={},t.complexParameters=[]
for(a in n)n.hasOwnProperty(a)&&(s=o(t,a,n[a],r),(void 0!==s||void 0===e[a])&&(i[a]=s))
return i}}(F,Cn,O,X,ki),Oi=function(){function t(t,e){var n,r,i
if(n=t.adapt.length?t.adapt.map(function(e){return"object"==typeof e?e:t.adaptors[e]||e}):[],r=e.length)for(i=0;r>i;i+=1)-1===n.indexOf(e[i])&&n.push(e[i])
return n}return function(e,n,r,i,o){var a,s,u,c,h
return s=e.parentFragment,c=e.root,u={content:o||[]},h=t(c,n.defaults.adapt,n.adaptors),a=new n({el:s.pNode,append:!0,data:r,partials:u,magic:c.magic||n.defaults.magic,modifyArrays:c.modifyArrays,_parent:c,_component:e,adapt:h}),i&&(a.insert(i),a.fragment.pNode=a.el=s.pNode),a}}(),Ti=function(t,e,n){return function(r,i){i.forEach(function(i){var o,a
t(r,r.root,i.parentKeypath,i.childKeypath),o=e(r.instance,i.childKeypath),a=e(r.root,i.parentKeypath),void 0!==o&&void 0===a&&n(r.root,i.parentKeypath,o)})}}(J,X,U),Ai=function(t){function e(e,r,i,o){if("string"!=typeof o){if(r.debug)throw new Error(n)
return void t(n)}e.on(i,function(){var t=Array.prototype.slice.call(arguments)
t.unshift(o),r.fire.apply(r,t)})}var n="Components currently only support simple events - you cannot include arguments. Sorry!"
return function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t.instance,t.root,r,n[r])}}(Z),Ni=function(t){var e,n
for(e=t.root;e;)(n=e._liveComponentQueries[t.name])&&n.push(t.instance),e=e._parent},Li=function(t,e,n,r,i,o,a){return function(s,u,c){var h,l,f,d,p
if(h=s.parentFragment=u.parentFragment,l=h.root,s.root=l,s.type=t.COMPONENT,s.name=u.descriptor.e,s.index=u.index,s.indexRefBindings={},s.bindings=[],f=l.components[u.descriptor.e],!f)throw new Error('Component "'+u.descriptor.e+'" not found')
p=[],d=n(s,f.data||{},u.descriptor.a,p),r(s,f,d,c,u.descriptor.f),i(s,p),o(s,u.descriptor.v),(u.descriptor.t1||u.descriptor.t2||u.descriptor.o)&&e('The "intro", "outro" and "decorator" directives have no effect on components'),a(s)}}(F,Z,Si,Oi,Ti,Ai,Ni),Ci=function(t,e){function n(t){var e,n
e=t.root
do(n=e._liveComponentQueries[t.name])&&n._remove(t)
while(e=e._parent)}var r=function(e,n){t(this,e,n)}
return r.prototype={firstNode:function(){return this.instance.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},detach:function(){return this.instance.fragment.detach()},teardown:function(t){for(;this.complexParameters.length;)this.complexParameters.pop().teardown()
for(;this.bindings.length;)this.bindings.pop().teardown()
n(this),this.shouldDestroy=t,this.instance.teardown()},reassign:function(t,n,r,i){var o,a,s=this.instance,u=s._parent
this.bindings.forEach(function(o){var a
o.root===u&&(o.keypath===t&&s.set(o.otherKeypath,n),(a=e(o.keypath,r,i))&&o.reassign(a))}),(o=this.indexRefBindings[t])&&s.set(o,n),(a=this.root._liveComponentQueries[this.name])&&a._makeDirty()},toString:function(){return this.instance.fragment.toString()},find:function(t){return this.instance.fragment.find(t)},findAll:function(t,e){return this.instance.fragment.findAll(t,e)},findComponent:function(t){return t&&t!==this.name?this.instance.fragment?this.instance.fragment.findComponent(t):null:this.instance},findAllComponents:function(t,e){e._test(this,!0),this.instance.fragment&&this.instance.fragment.findAllComponents(t,e)}},r}(Li,Be),Ri=function(t,e){var n=function(e,n){this.type=t.COMMENT,this.descriptor=e.descriptor,n&&(this.node=document.createComment(e.descriptor.f),n.appendChild(this.node))}
return n.prototype={detach:e,teardown:function(t){t&&this.detach()},firstNode:function(){return this.node},toString:function(){return"<!--"+this.descriptor.f+"-->"}},n}(F,Ve),ji=function(t,e,n,r,i,o,a,s,u,c,h,l,f){var d=function(t){t.pNode&&(this.docFrag=document.createDocumentFragment()),"string"==typeof t.descriptor?(this.html=t.descriptor,this.docFrag&&(this.nodes=r(this.html,t.pNode.tagName,t.pNode.namespaceURI,this.docFrag))):n.init(this,t)}
return d.prototype={reassign:n.reassign,detach:function(){var t,e
if(this.docFrag){if(this.nodes)for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e])
else if(this.items)for(t=this.items.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.items[e].detach())
return this.docFrag}},createItem:function(e){if("string"==typeof e.descriptor)return new i(e,this.docFrag)
switch(e.descriptor.t){case t.INTERPOLATOR:return new o(e,this.docFrag)
case t.SECTION:return new a(e,this.docFrag)
case t.TRIPLE:return new s(e,this.docFrag)
case t.ELEMENT:return this.root.components[e.descriptor.e]?new h(e,this.docFrag):new u(e,this.docFrag)
case t.PARTIAL:return new c(e,this.docFrag)
case t.COMMENT:return new l(e,this.docFrag)
default:throw new Error("Something very strange happened. Please file an issue at https://github.com/RactiveJS/Ractive/issues. Thanks!")}},teardown:function(t){var e
if(this.nodes&&t)for(;e=this.nodes.pop();)e.parentNode.removeChild(e)
else if(this.items)for(;this.items.length;)this.items.pop().teardown(t)
this.nodes=this.items=this.docFrag=null},firstNode:function(){return this.items&&this.items[0]?this.items[0].firstNode():this.nodes?this.nodes[0]||null:null},findNextNode:function(t){var e=t.index
return this.items[e+1]?this.items[e+1].firstNode():this.owner===this.root?this.owner.component?this.owner.component.findNextNode():null:this.owner.findNextNode(this)},toString:function(){var t,e,n,r
if(this.html)return this.html
if(t="",!this.items)return t
for(n=this.items.length,e=0;n>e;e+=1)r=this.items[e],t+=r.toString()
return t},find:function(t){var n,r,i,o,a
if(this.nodes){for(r=this.nodes.length,n=0;r>n;n+=1)if(o=this.nodes[n],1===o.nodeType){if(e(o,t))return o
if(a=o.querySelector(t))return a}return null}if(this.items){for(r=this.items.length,n=0;r>n;n+=1)if(i=this.items[n],i.find&&(a=i.find(t)))return a
return null}},findAll:function(t,n){var r,i,o,a,s,u,c
if(this.nodes){for(i=this.nodes.length,r=0;i>r;r+=1)if(a=this.nodes[r],1===a.nodeType&&(e(a,t)&&n.push(a),s=a.querySelectorAll(t)))for(u=s.length,c=0;u>c;c+=1)n.push(s[c])}else if(this.items)for(i=this.items.length,r=0;i>r;r+=1)o=this.items[r],o.findAll&&o.findAll(t,n)
return n},findComponent:function(t){var e,n,r,i
if(this.items){for(e=this.items.length,n=0;e>n;n+=1)if(r=this.items[n],r.findComponent&&(i=r.findComponent(t)))return i
return null}},findAllComponents:function(t,e){var n,r,i
if(this.items)for(r=this.items.length,n=0;r>n;n+=1)i=this.items[n],i.findAllComponents&&i.findAllComponents(t,e)
return e}},f.DomFragment=d,d}(F,se,We,qe,Ke,rn,hn,ln,br,xi,Ci,Ri,w),Ii=function(t,e,n){function r(t){for(var e;e=t._childInitQueue.pop();)e.instance.init&&e.instance.init(e.options),r(e.instance)}return function(i,o){if(this._rendering=!0,t.start(this,o),!this._initing)throw new Error("You cannot call ractive.render() directly!")
this.constructor.css&&e.add(this.constructor),this.fragment=new n({descriptor:this.template,root:this,owner:this,pNode:i}),i&&i.appendChild(this.fragment.docFrag),this._parent&&this._parent._rendering||r(this),delete this._rendering,t.end()}}(L,_,ji),Pi=function(t){return function(){return t("renderHTML() has been deprecated and will be removed in a future version. Please use toHTML() instead"),this.toHTML()}}(Z),Mi=function(t,e,n,r){return function(i,o){var a,s,u
if("function"==typeof i?(o=i,i={}):i=i||{},"object"!=typeof i)throw new Error("The reset method takes either no arguments, or an object containing new data")
return a=new t(function(t){s=t}),o&&a.then(o),e.start(this,s),(u=this._wrapped[""])&&u.reset?u.reset(i)===!1&&(this.data=i):this.data=i,n(this,""),r(this,""),e.end(),this.fire("reset",i),a}}(g,L,B,A),Fi=function(t,e,n,r,i){return function(o,a,s){var u,c,h
if(c=new r(function(t){h=t}),t.start(this,h),e(o)){u=o,s=a
for(o in u)u.hasOwnProperty(o)&&(a=u[o],o=n(o),i(this,o,a))}else o=n(o),i(this,o,a)
return t.end(),s&&c.then(s.bind(this)),c}}(L,te,v,g,U),Bi=function(t){return function(e,n){return t(this,e,void 0===n?-1:-n)}}(f),Di=function(t,e,n,r,i){return function(o){var a,s,u,c,h,l,f,d
if(this.fire("teardown"),c=!this.component||this.component.shouldDestroy,this.constructor.css)if(c)h=o,o=function(){h&&h.call(this),e.remove(this.constructor)}
else{l=this.component.parentFragment
do l.owner.type===t.ELEMENT&&l.owner.willDetach&&(f=l.owner)
while(!f&&(l=l.parent))
if(!f)throw new Error("A component is being torn down but doesn't have a nearest detaching element... this shouldn't happen!")
f.cssDetachQueue.push(this.constructor)}for(s=new r(function(t){u=t}),n.start(this,u),this.fragment.teardown(c);this._animations[0];)this._animations[0].stop()
for(a in this._cache)i(this,a)
for(;d=this._unresolvedImplicitDependencies.pop();)d.teardown()
return n.end(),o&&s.then(o.bind(this)),s}}(F,_,L,g,B),Ui=function(){return this.fragment.toString()},Wi=function(t,e){var n
{if("string"==typeof t)return n=this.get(t),this.set(t,!n,e)
if(this.debug)throw new Error("Bad arguments")}},qi=function(t,e,n,r){return function(i,o){var a,s
return"function"==typeof i?(o=i,i=""):i=i||"",a=new e(function(t){s=t}),t.start(this,s),n(this,i),r(this,i),t.end(),this.fire("update",i),o&&a.then(o.bind(this)),a}}(L,g,B,A),Vi=function(t,e,n){function r(t,i,o,a,s){var u,c,h,l,f,d
if(u=t._twowayBindings[i])for(h=u.length;h--;)l=u[h],(!l.radioName||l.node.checked)&&(l.checkboxName?l.changed()&&a[i]!==!0&&(a[i]=!0,a.push(i)):(f=l.attr.value,d=l.value(),e(f,d)||n(f,d)||(o[i]=d)))
if(s&&(c=t._depsMap[i]))for(h=c.length;h--;)r(t,c[h],o,a,s)}return function(e,n){var i,o,a
if("string"!=typeof e&&(e="",n=!0),r(this,e,i={},o=[],n),a=o.length)for(;a--;)e=o[a],i[e]=t(this,e)
this.set(i)}}(x,yn,p),Ki=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g,v,m,y,b,w,E,_,x){return{add:t,animate:e,detach:n,find:r,findAll:i,findAllComponents:o,findComponent:a,fire:s,get:u,insert:c,merge:h,observe:l,off:f,on:d,render:p,renderHTML:g,reset:v,set:m,subtract:y,teardown:b,toHTML:w,toggle:E,update:_,updateModel:x}}(d,ie,oe,ae,ve,me,ye,be,Ee,xe,Oe,Ce,Re,je,Ii,Pi,Mi,Fi,Bi,Di,Ui,Wi,qi,Vi),zi={},Hi={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},$i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e,n
return e=16*Math.random()|0,n="x"==t?e:3&e|8,n.toString(16)})},Gi=function(t){for(var e,n,r=Array.prototype.slice.call(arguments,1);n=r.shift();)for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e])
return t},Ji=["adaptors","components","decorators","easing","events","interpolators","partials","transitions","data"],Yi=function(){function t(t){return t.trim?t.trim():t.replace(/^\s+/,"").replace(/\s+$/,"")}function e(t){return t.str}var n=/(?:^|\})?\s*([^\{\}]+)\s*\{/g,r=/\/\*.*?\*\//g,i=/((?:(?:\[[^\]+]\])|(?:[^\s\+\>\~:]))+)((?::[^\s\+\>\~]+)?\s*[\s\+\>\~]?)\s*/g
return function(o,a){var s,u
return u=function(t){var n,r,o,s,u,c,h,l,f=[]
for(n=[];r=i.exec(t);)n.push({str:r[0],base:r[1],modifiers:r[2]})
for(s='[data-rvcguid="'+a+'"]',u=n.map(e),l=n.length;l--;)h=u.slice(),o=n[l],h[l]=o.base+s+o.modifiers||"",c=u.slice(),c[l]=s+" "+c[l],f.push(h.join(" "),c.join(" "))
return f.join(", ")},s=o.replace(r,"").replace(n,function(e,n){var r,i
return r=n.split(",").map(t),i=r.map(u).join(", ")+" ",e.replace(n,i)})}}(),Qi=function(t,e,n,r){return function(i,o){t.forEach(function(t){o[t]&&(i[t]=e(o[t]))}),n(i,"defaults",{value:e(o.defaults)}),o.css&&n(i,"css",{value:o.defaults.noCssTransform?o.css:r(o.css,i._guid)})}}(Ji,Ie,c,Yi),Xi=function(t,e){return/_super/.test(t)?function(){var n,r=this._super
return this._super=e,n=t.apply(this,arguments),this._super=r,n}:t},Zi=function(t,e){var n
for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t},to=function(t,e,n,r,i,o){var a={}
return e.concat(t.keys).forEach(function(t){a[t]=!0}),function(s,u){var c,h
e.forEach(function(t){var e=u[t]
e&&(s[t]?i(s[t],e):s[t]=e)}),t.keys.forEach(function(t){var e=u[t]
void 0!==e&&(s.defaults[t]="function"==typeof e&&"function"==typeof s[t]?r(e,s[t]):u[t])})
for(c in u)!a[c]&&u.hasOwnProperty(c)&&(h=u[c],s.prototype[c]="function"==typeof h&&"function"==typeof s.prototype[c]?r(h,s.prototype[c]):h)
u.css&&n(s,"css",{value:s.defaults.noCssTransform?u.css:o(u.css,s._guid)})}}(i,Ji,c,Xi,Zi,Yi),eo=function(t,e){return function(n,r){t(n.defaults.template)&&(n.partials||(n.partials={}),e(n.partials,n.defaults.template.partials),r.partials&&e(n.partials,r.partials),n.defaults.template=n.defaults.template.main)}}(te,Zi),no=function(t,e,n){return function(r){var i
if("string"==typeof r.defaults.template){if(!n)throw new Error(t.missingParser)
if("#"===r.defaults.template.charAt(0)&&e){if(i=document.getElementById(r.defaults.template.substring(1)),!i||"SCRIPT"!==i.tagName)throw new Error("Could not find template element ("+r.defaults.template+")")
r.defaults.template=n(i.innerHTML,r)}else r.defaults.template=n(r.defaults.template,r.defaults)}}}(wr,u,bi),ro=function(t,e){return function(n){var r
if(n.partials)for(r in n.partials)if(n.partials.hasOwnProperty(r)&&"string"==typeof n.partials[r]){if(!e)throw new Error(t.missingParser)
n.partials[r]=e(n.partials[r],n)}}}(wr,bi),io=function(){function t(t){var n="var __ractive=this;return("+t.replace(e,function(t,e){return'__ractive.get("'+e+'")'})+")"
return new Function(n)}var e=/\$\{([^\}]+)\}/g
return function(e){return"function"==typeof e?{get:e}:"string"==typeof e?{get:t(e)}:("object"==typeof e&&"string"==typeof e.get&&(e={get:t(e.get),set:e.set}),e)}}(),oo=function(t,e,n){var r=function(t,n){this.root=t.ractive,this.keypath=n,this.priority=0,this.computation=t,e(this)}
return r.prototype={update:function(){var e
e=this.root.get(this.keypath),t(e,this.value)||this.computation.bubble()},teardown:function(){n(this)}},r}(p,$,G),ao=function(t,e,n,r){function i(t,e,n){var i,o,a
for(i=e.length;i--;)o=e[i],n[o.keypath]||(e.splice(i,1),e[o.keypath]=null,o.teardown())
for(i=n.length;i--;)a=n[i],e[a]||(o=new r(t,a),e.push(e[a]=o))}var o=function(t,e,n){this.ractive=t,this.key=e,this.getter=n.get,this.setter=n.set,this.watchers=[],this.update()}
return o.prototype={set:function(t){if(this.setting)return void(this.value=t)
if(!this.setter)throw new Error("Computed properties without setters are read-only in the current version")
this.setter.call(this.ractive,t)},update:function(){var e,r,o,a
e=this.ractive,r=e._captured,r||(e._captured=[])
try{o=this.getter.call(e)}catch(s){e.debug&&t('Failed to compute "'+this.key+'": '+s.message||s),a=!0}i(this,this.watchers,e._captured),e._captured=r,a||(this.setting=!0,this.value=o,n(e,this.key,o),this.setting=!1),this.deferred=!1},bubble:function(){this.watchers.length<=1?this.update():this.deferred||(e.addComputation(this),this.deferred=!0)}},o}(Z,L,U,oo),so=function(t,e){return function(n,r){var i,o
for(i in r)o=t(r[i]),n._computations[i]=new e(n,i,o)}}(io,ao),uo=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g,v){var m=["adapt","modifyArrays","magic","twoway","lazy","debug","isolated"]
return function(y,b){var w,E,_,x,k,S,O
if(l(b.adaptors)&&(i("The `adaptors` option, to indicate which adaptors should be used with a given Ractive instance, has been deprecated in favour of `adapt`. See [TODO] for more information"),b.adapt=b.adaptors,delete b.adaptors),w=y.constructor.defaults,n.keys.forEach(function(t){void 0===b[t]&&(b[t]=w[t])}),m.forEach(function(t){y[t]=b[t]}),"string"==typeof y.adapt&&(y.adapt=[y.adapt]),y.magic&&!p)throw new Error("Getters and setters (magic mode) are not supported in this browser")
if(u(y,{_initing:{value:!0,writable:!0},_guid:{value:f()},_subs:{value:o(null),configurable:!0},_cache:{value:{}},_cacheMap:{value:o(null)},_deps:{value:[]},_depsMap:{value:o(null)},_patternObservers:{value:[]},_evaluators:{value:o(null)},_computations:{value:o(null)},_twowayBindings:{value:{}},_animations:{value:[]},nodes:{value:{}},_wrapped:{value:o(null)},_liveQueries:{value:[]},_liveComponentQueries:{value:[]},_childInitQueue:{value:[]},_changes:{value:[]},_unresolvedImplicitDependencies:{value:[]}}),b._parent&&b._component&&(u(y,{_parent:{value:b._parent},component:{value:b._component}}),b._component.instance=y),b.el&&(y.el=c(b.el),!y.el&&y.debug))throw new Error("Could not find container element")
if(b.eventDefinitions&&(i("ractive.eventDefinitions has been deprecated in favour of ractive.events. Support will be removed in future versions"),b.events=b.eventDefinitions),r.forEach(function(t){y.constructor[t]?y[t]=a(o(y.constructor[t]),b[t]):b[t]&&(y[t]=b[t])}),y.data||(y.data={}),O=w.computed?a(o(w.computed),b.computed):b.computed,O&&v(y,O),E=b.template,"string"==typeof E){if(!g)throw new Error(e.missingParser)
if("#"===E.charAt(0)&&t){if(_=document.getElementById(E.substring(1)),!_)throw new Error("Could not find template element ("+E+")")
x=g(_.innerHTML,b)}else x=g(E,b)}else x=E
h(x)&&(s(y.partials,x.partials),x=x.main),x&&1===x.length&&"string"==typeof x[0]&&(x=x[0]),y.template=x,a(y.partials,b.partials),y.parseOptions={preserveWhitespace:b.preserveWhitespace,sanitize:b.sanitize,stripComments:b.stripComments},y.transitionsEnabled=b.noIntro?!1:b.transitionsEnabled,t&&!y.el&&(y.el=document.createDocumentFragment()),y.el&&!b.append&&(y.el.innerHTML=""),k=new d(function(t){S=t}),y.render(y.el,S),b.complete&&k.then(b.complete.bind(y)),y.transitionsEnabled=b.transitionsEnabled,y._initing=!1}}(u,wr,i,Ji,Z,Ie,Gi,ir,h,_e,te,R,$i,g,K,bi,so),co=function(t,e,n){return function(r,i,o){t.keys.forEach(function(t){var n=o[t],r=i.defaults[t]
"function"==typeof n&&"function"==typeof r&&(o[t]=e(n,r))}),r.beforeInit&&r.beforeInit(o),n(r,o),o._parent&&o._parent._rendering?o._parent._childInitQueue.push({instance:r,options:o}):r.init&&r.init(o)}}(i,Xi,uo),ho=function(t,e,n,r,i,o,a,s,u,c,h){var l
return h.push(function(){l=h.Ractive}),function(h){var f,d,p,g=this
if(h.prototype instanceof l&&(h=r({},h,h.prototype,h.defaults)),f=function(t){c(this,f,t||{})},f.prototype=t(g.prototype),f.prototype.constructor=f,e(f,{extend:{value:g.extend},_guid:{value:n()}}),i(f,g),o(f,h),f.adaptors&&(p=f.defaults.adapt.length))for(;p--;)d=f.defaults.adapt[p],"string"==typeof d&&(f.defaults.adapt[p]=f.adaptors[d]||d)
return h.template&&(s(f),a(f,h),u(f)),f}}(Ie,h,$i,Gi,Qi,to,eo,no,ro,co,w),lo=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d){var p=function(t){f(this,t)}
return p.prototype=r,n(p,{partials:{value:i},adaptors:{value:o},easing:{value:s},transitions:{value:{}},events:{value:{}},components:{value:a},decorators:{value:{}},interpolators:{value:u},defaults:{value:t.defaults},svg:{value:e},VERSION:{value:"0.4.0"}}),p.eventDefinitions=p.events,p.prototype.constructor=p,p.Promise=c,p.extend=h,p.parse=l,d.Ractive=p,p}(i,o,h,Ki,Er,I,zi,Hi,ee,g,ho,bi,uo,w),fo=function(t,e){for(var n="function";e.length;)e.pop()()
if(typeof Date.now!==n||typeof String.prototype.trim!==n||typeof Object.keys!==n||typeof Array.prototype.indexOf!==n||typeof Array.prototype.forEach!==n||typeof Array.prototype.map!==n||typeof Array.prototype.filter!==n||"undefined"!=typeof window&&typeof window.addEventListener!==n)throw new Error("It looks like you're attempting to use Ractive.js in an older browser. You'll need to use one of the 'legacy builds' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.")
return"undefined"!=typeof window&&window.Node&&!window.Node.prototype.contains&&window.HTMLElement&&window.HTMLElement.prototype.contains&&(window.Node.prototype.contains=window.HTMLElement.prototype.contains),t}(lo,w,r)
"undefined"!=typeof e&&e.exports?e.exports=fo:"function"==typeof define&&define.amd&&define(function(){return fo}),t.Ractive=fo,fo.noConflict=function(){return t.Ractive=n,fo}}("undefined"!=typeof window?window:this)},{}],115:[function(t,e){e.exports=function(t,e){for(var n=0,r=e.indexOf(t);-1!==r;)n++,r=e.indexOf(t,r+1)
return n}},{}],116:[function(t,e){function n(){return Object.create(new s)}function r(t,e){var n=Object.create(t),r=0
return e.forEach(function(t){var e,i,o=t.split("=")
o.length>1?(e=o[0],i=o[1]):(r++,e=r,i=o[0]),n[e]=i}),n}function i(t){var e=t.data
return e||(e=t.ractive?t.ractive.get():{}),t.templateElements=[],t.html=t.html.replace(/::([^:]+)::/gm,function(i,s,u,c){var h=a("<code",c.substr(0,u)),l=a("</code",c.substr(0,u))
if(h!==l)return i
var f=n(),d=s.split("|")
return f.postName=d.shift(0),f.elementId=o.generateId(f.postName),f.data=r(e,d),t.templateElements.push(f),o.generatePostDiv(f.elementId)}),t}var o=t("./templateToolbox"),a=t("./numberOfOccurrances"),s=t("events").EventEmitter
e.exports=i},{"./numberOfOccurrances":115,"./templateToolbox":117,events:5}],117:[function(t,e){function n(t){return t.metadata.markdown!==!1?h.makeHtml(t.content):t.content}function r(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8
return n.toString(16)})}function i(t){return"noddity_post_"+t+"_"+r()}function o(t){var e=l.exec(t)
return null!==e?e[1]:void 0}function a(t){return l.test(t)}function s(t){return'<span class="noddity-template" id="'+t+'"></span>'}function u(t,e){var n=Object.create(e),r=0
return t.forEach(function(t){var e,i,o=t.split("=")
o.length>1?(e=o[0],i=o[1]):(r++,e=r,i=o[0]),n[e]=i}),n}var c=t("pagedown").Converter,h=new c,l=/noddity_post_(.+)_[\da-z]{12}4[\da-z]{19}/
e.exports={generateId:i,getPostName:o,generatePostDiv:s,isAPostDiv:a,getTemplateDataObject:u,htmlify:n}},{pagedown:125}],118:[function(t,e){e.exports=function(t){var e={}
return t.on("post changed",function(t,n){e[t]&&e[t].forEach(function(t){t.emit("post changed",n)})}),function(t){"undefined"==typeof e[t.postName]&&(e[t.postName]=[]),e[t.postName].push(t),t.ractive.on("teardown",function(){e[t.postName]=e[t.postName].filter(function(e){return e!==t})})}}},{}],119:[function(t,e){var n=t("levelup"),r=t("localstorage-down"),i=function(t){return new r(t)}
e.exports={clearCache:function(){var t=n("noddity-content",{db:i})
t.createKeyStream().on("data",function(e){t.del(e)})}}},{levelup:50,"localstorage-down":74}],120:[function(t){var e=t("noddity-butler"),n=t("levelup"),r=t("noddity-linkifier"),i=t("localstorage-down"),o=t("./routing"),a=t("./mainViewModel"),s=t("level-sublevel"),u=noddityConfig,c=function(t){return new i(t)},h=s(n("noddity-content",{db:c})),l=u.title.replace(/[^\w]+/g,""),f=u.debug?{refreshEvery:3e4}:void 0,d=new e(u.noddityRoot,h.sublevel(l),f),p=new r(u.pathPrefix+u.pagePathPrefix),g=new a(d,p),v=o()
v.on("current",g.setCurrent),u.debug&&(window.debug=t("./debug"))},{"./debug":119,"./mainViewModel":121,"./routing":122,"level-sublevel":34,levelup:50,"localstorage-down":74,"noddity-butler":85,"noddity-linkifier":111}],121:[function(t,e){function n(){}var r=t("ractive"),i=noddityConfig,o=t("noddity-renderer")
e.exports=function(t,e){function a(t){console.log(t)}function s(){t.getPosts(function(t,e){t?a(t):g.set("postList",e.reverse().filter(function(t){return"string"==typeof t.metadata.title}).map(function(t){return{title:t.metadata.title,filename:t.filename}}))})}function u(e){t.getPost(e,function(t,n){t?(d.set("html",t.message),f.set("page",null),e!==i.errorPage&&(window.location=window.location.origin+window.location.pathname+i.pathPrefix+i.pagePathPrefix+i.errorPage)):(f.set("page",n.metadata.title),l?l(n):l=h.populateRootRactive(n,d),g.get("postList")||s())})}function c(t,e){function n(n){return n.filename===t&&n.title!==e.metadata.title}var r=g.get("postList")
r&&r.some(n)&&s()}var h=new o(t,e.linkify),l=null,f=new r({el:"title",template:"{{title}}{{#page}} | {{page}}{{/page}}",data:{title:i.title}}),d=new r({el:"main",template:"#template-main",data:Object.create(i)}),p=i.sidebar?"{{{html}}}":"#template-menu",g=new r({el:"sidebar",template:p,data:Object.create(i)})
return i.sidebar&&t.getPost(i.sidebar,function(t,e){t?g.set("html",t.message):h.populateRootRactive(e,g)}),e.on("link",function(e){t.getPost(e,n)}),t.on("post changed",c),t.on("index changed",s),{setCurrent:u}}},{"noddity-renderer":112,ractive:126}],122:[function(t,e){var n=noddityConfig,r=t("events").EventEmitter
e.exports=function(){var t=new r,e=Satnav({}).navigate({path:"!/"+n.pagePathPrefix+"{name}",directions:function(e){t.emit("current",e.name)}}).navigate({path:"!/",directions:function(){t.emit("current","index.md")}}).navigate({path:"",directions:function(){document.location=document.location+"#!/"}}).change(function(){window.scrollTo(0,0)}).otherwise("!/"+n.pagePathPrefix+"404.md")
return setTimeout(e.go.bind(e),0),t}},{events:5}],123:[function(t,e,n){var r
r="object"==typeof n&&"function"==typeof t?n:{},function(){function t(t){return t}function e(){return!1}function n(){}function i(){}n.prototype={chain:function(e,n){var r=this[e]
if(!r)throw new Error("unknown hook "+e)
this[e]=r===t?n:function(){var t=Array.prototype.slice.call(arguments,0)
return t[0]=r.apply(null,t),n.apply(null,t)}},set:function(t,e){if(!this[t])throw new Error("unknown hook "+t)
this[t]=e},addNoop:function(e){this[e]=t},addFalse:function(t){this[t]=e}},r.HookCollection=n,i.prototype={set:function(t,e){this["s_"+t]=e},get:function(t){return this["s_"+t]}},r.Converter=function(){function t(t){return t=t.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(t,e,n,r,i,o){return e=e.toLowerCase(),I.set(e,x(n)),i?r:(o&&P.set(e,o.replace(/"/g,"&quot;")),"")})}function e(t){return t=t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,r),t=t.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,r),t=t.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r),t=t.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,r),t=t.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r)}function r(t,e){var n=e
return n=n.replace(/^\n+/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(M.push(n)-1)+"K\n\n"}function o(t,n){t=j.preBlockGamut(t,B),t=d(t)
var r="<hr />\n"
return t=t.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,r),t=t.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,r),t=t.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,r),t=p(t),t=v(t),t=E(t),t=j.postBlockGamut(t,B),t=e(t),t=_(t,n)}function a(t){return t=j.preSpanGamut(t),t=y(t),t=s(t),t=k(t),t=h(t),t=u(t),t=O(t),t=t.replace(/~P/g,"://"),t=x(t),t=w(t),t=t.replace(/  +\n/g," <br>\n"),t=j.postSpanGamut(t)}function s(t){var e=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi
return t=t.replace(e,function(t){var e=t.replace(/(.)<\/?code>(?=.)/g,"$1`")
return e=C(e,"!"==t.charAt(1)?"\\`*_/":"\\`*_")})}function u(t){return t=t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,c),t=t.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,c),t=t.replace(/(\[([^\[\]]+)\])()()()()()/g,c)}function c(t,e,n,r,i,o,a,s){void 0==s&&(s="")
var u=e,c=n.replace(/:\/\//g,"~P"),h=r.toLowerCase(),f=i,d=s
if(""==f)if(""==h&&(h=c.toLowerCase().replace(/ ?\n/g," ")),f="#"+h,void 0!=I.get(h))f=I.get(h),void 0!=P.get(h)&&(d=P.get(h))
else{if(!(u.search(/\(\s*\)$/m)>-1))return u
f=""}f=L(f),f=C(f,"*_")
var p='<a href="'+f+'"'
return""!=d&&(d=l(d),d=C(d,"*_"),p+=' title="'+d+'"'),p+=">"+c+"</a>"}function h(t){return t=t.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,f),t=t.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,f)}function l(t){return t.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function f(t,e,n,r,i,o,a,s){var u=e,c=n,h=r.toLowerCase(),f=i,d=s
if(d||(d=""),""==f){if(""==h&&(h=c.toLowerCase().replace(/ ?\n/g," ")),f="#"+h,void 0==I.get(h))return u
f=I.get(h),void 0!=P.get(h)&&(d=P.get(h))}c=C(l(c),"*_[]()"),f=C(f,"*_")
var p='<img src="'+f+'" alt="'+c+'"'
return d=l(d),d=C(d,"*_"),p+=' title="'+d+'"',p+=" />"}function d(t){return t=t.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(t,e){return"<h1>"+a(e)+"</h1>\n\n"}),t=t.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(t,e){return"<h2>"+a(e)+"</h2>\n\n"}),t=t.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(t,e,n){var r=e.length
return"<h"+r+">"+a(n)+"</h"+r+">\n\n"})}function p(t){t+="~0"
var e=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm
return F?t=t.replace(e,function(t,e,n){var r=e,i=n.search(/[*+-]/g)>-1?"ul":"ol",o=g(r,i)
return o=o.replace(/\s+$/,""),o="<"+i+">"+o+"</"+i+">\n"}):(e=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,t=t.replace(e,function(t,e,n,r){var i=e,o=n,a=r.search(/[*+-]/g)>-1?"ul":"ol",s=g(o,a)
return s=i+"<"+a+">\n"+s+"</"+a+">\n"})),t=t.replace(/~0/,"")}function g(t,e){F++,t=t.replace(/\n{2,}$/,"\n"),t+="~0"
var n=D[e],r=new RegExp("(^[ \\t]*)("+n+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+n+")[ \\t]+))","gm"),i=!1
return t=t.replace(r,function(t,e,n,r){var s=r,u=/\n\n$/.test(s),c=u||s.search(/\n{2,}/)>-1
return c||i?s=o(A(s),!0):(s=p(A(s)),s=s.replace(/\n$/,""),s=a(s)),i=u,"<li>"+s+"</li>\n"}),t=t.replace(/~0/g,""),F--,t}function v(t){return t+="~0",t=t.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(t,e,n){var r=e,i=n
return r=b(A(r)),r=N(r),r=r.replace(/^\n+/g,""),r=r.replace(/\n+$/g,""),r="<pre><code>"+r+"\n</code></pre>","\n\n"+r+"\n\n"+i}),t=t.replace(/~0/,"")}function m(t){return t=t.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(M.push(t)-1)+"K\n\n"}function y(t){return t=t.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(t,e,n,r){var i=r
return i=i.replace(/^([ \t]*)/g,""),i=i.replace(/[ \t]*$/g,""),i=b(i),i=i.replace(/:\/\//g,"~P"),e+"<code>"+i+"</code>"})}function b(t){return t=t.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t=C(t,"*_{}[]\\",!1)}function w(t){return t=t.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),t=t.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")}function E(t){return t=t.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(t,e){var n=e
return n=n.replace(/^[ \t]*>[ \t]?/gm,"~0"),n=n.replace(/~0/g,""),n=n.replace(/^[ \t]+$/gm,""),n=o(n),n=n.replace(/(^|\n)/g,"$1  "),n=n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(t,e){var n=e
return n=n.replace(/^  /gm,"~0"),n=n.replace(/~0/g,"")}),m("<blockquote>\n"+n+"\n</blockquote>")})}function _(t,e){t=t.replace(/^\n+/g,""),t=t.replace(/\n+$/g,"")
for(var n=t.split(/\n{2,}/g),r=[],i=/~K(\d+)K/,o=n.length,s=0;o>s;s++){var u=n[s]
i.test(u)?r.push(u):/\S/.test(u)&&(u=a(u),u=u.replace(/^([ \t]*)/g,"<p>"),u+="</p>",r.push(u))}if(!e){o=r.length
for(var s=0;o>s;s++)for(var c=!0;c;)c=!1,r[s]=r[s].replace(/~K(\d+)K/g,function(t,e){return c=!0,M[e]})}return r.join("\n\n")}function x(t){return t=t.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),t=t.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;")}function k(t){return t=t.replace(/\\(\\)/g,R),t=t.replace(/\\([`*_{}\[\]()>#+-.!])/g,R)}function S(t,e,n,r){if(e)return t
if(")"!==r.charAt(r.length-1))return"<"+n+r+">"
for(var i=r.match(/[()]/g),o=0,a=0;a<i.length;a++)"("===i[a]?0>=o?o=1:o++:o--
var s=""
if(0>o){var u=new RegExp("\\){1,"+-o+"}$")
r=r.replace(u,function(t){return s=t,""})}return"<"+n+r+">"+s}function O(t){t=t.replace(/(="|<)?\b(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\])])(?=$|\W)/gi,S)
var e=function(t,e){return'<a href="'+e+'">'+j.plainLinkText(e)+"</a>"}
return t=t.replace(/<((https?|ftp):[^'">\s]+)>/gi,e)}function T(t){return t=t.replace(/~E(\d+)E/g,function(t,e){var n=parseInt(e)
return String.fromCharCode(n)})}function A(t){return t=t.replace(/^(\t|[ ]{1,4})/gm,"~0"),t=t.replace(/~0/g,"")}function N(t){if(!/\t/.test(t))return t
var e,n=["    ","   ","  "," "],r=0
return t.replace(/[\n\t]/g,function(t,i){return"\n"===t?(r=i+1,t):(e=(i-r)%4,r=i+1,n[e])})}function L(t){if(!t)return""
var e=t.length
return t.replace(U,function(n,r){return"~D"==n?"%24":":"!=n||r!=e-1&&!/[0-9\/]/.test(t.charAt(r+1))?"%"+n.charCodeAt(0).toString(16):":"})}function C(t,e,n){var r="(["+e.replace(/([\[\]\\])/g,"\\$1")+"])"
n&&(r="\\\\"+r)
var i=new RegExp(r,"g")
return t=t.replace(i,R)}function R(t,e){var n=e.charCodeAt(0)
return"~E"+n+"E"}var j=this.hooks=new n
j.addNoop("plainLinkText"),j.addNoop("preConversion"),j.addNoop("postNormalization"),j.addNoop("preBlockGamut"),j.addNoop("postBlockGamut"),j.addNoop("preSpanGamut"),j.addNoop("postSpanGamut"),j.addNoop("postConversion")
var I,P,M,F
this.makeHtml=function(n){if(I)throw new Error("Recursive call to converter.makeHtml")
return I=new i,P=new i,M=[],F=0,n=j.preConversion(n),n=n.replace(/~/g,"~T"),n=n.replace(/\$/g,"~D"),n=n.replace(/\r\n/g,"\n"),n=n.replace(/\r/g,"\n"),n="\n\n"+n+"\n\n",n=N(n),n=n.replace(/^[ \t]+$/gm,""),n=j.postNormalization(n),n=e(n),n=t(n),n=o(n),n=T(n),n=n.replace(/~D/g,"$$"),n=n.replace(/~T/g,"~"),n=j.postConversion(n),M=P=I=null,n}
var B=function(t){return o(t)},D={ol:"\\d+[.]",ul:"[*+-]"},U=/(?:["'*()[\]:]|~D)/g}}()},{}],124:[function(t,e,n){!function(){function e(t){return t.replace(/<[^>]*>?/gi,r)}function r(t){return t.match(s)||t.match(u)||t.match(c)?t:""}function i(t){if(""==t)return""
var e=/<\/?\w+[^>]*(\s|$|>)/g,n=t.toLowerCase().match(e),r=(n||[]).length
if(0==r)return t
for(var i,o,a,s="<p><img><br><li><hr>",u=[],c=[],h=!1,l=0;r>l;l++)if(i=n[l].replace(/<\/?(\w+).*/,"$1"),!(u[l]||s.search("<"+i+">")>-1)){if(o=n[l],a=-1,!/^<\//.test(o))for(var f=l+1;r>f;f++)if(!u[f]&&n[f]=="</"+i+">"){a=f
break}-1==a?h=c[l]=!0:u[a]=!0}if(!h)return t
var l=0
return t=t.replace(e,function(t){var e=c[l]?"":t
return l++,e})}var o,a
"object"==typeof n&&"function"==typeof t?(o=n,a=t("./Markdown.Converter").Converter):(o=window.Markdown,a=o.Converter),o.getSanitizingConverter=function(){var t=new a
return t.hooks.chain("postConversion",e),t.hooks.chain("postConversion",i),t}
var s=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,u=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,c=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i}()},{"./Markdown.Converter":123}],125:[function(t,e,n){n.Converter=t("./Markdown.Converter").Converter,n.getSanitizingConverter=t("./Markdown.Sanitizer").getSanitizingConverter},{"./Markdown.Converter":123,"./Markdown.Sanitizer":124}],126:[function(t,e){!function(t){"use strict"
var n=t.Ractive,r=function(){var t={el:void 0,append:!1,template:{v:1,t:[]},"yield":null,preserveWhitespace:!1,sanitize:!1,stripComments:!0,data:{},computed:{},magic:!1,modifyArrays:!0,adapt:[],isolated:!1,twoway:!0,lazy:!1,noIntro:!1,transitionsEnabled:!0,complete:void 0,noCssTransform:!1,debug:!1}
return t}(),i={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},o=[],a=Object.prototype.hasOwnProperty,s=function(){var t=Object.prototype.toString
return function(e){return"[object Array]"===t.call(e)}}(),u=function(){var t=Object.prototype.toString
return function(e){return e&&"[object Object]"===t.call(e)}}(),c=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},h=function(t,e,n,r,i){var o,a,s
return t.push(function(){a=t.interpolate}),s=/^([+-]?[0-9]+\.?(?:[0-9]+)?)(px|em|ex|%|in|cm|mm|pt|pc)$/,o={number:function(t,e){var n
return i(t)&&i(e)?(t=+t,e=+e,n=e-t,n?function(e){return t+e*n}:function(){return t}):null},array:function(t,e){var r,i,o,s
if(!n(t)||!n(e))return null
for(r=[],i=[],s=o=Math.min(t.length,e.length);s--;)i[s]=a(t[s],e[s])
for(s=o;s<t.length;s+=1)r[s]=t[s]
for(s=o;s<e.length;s+=1)r[s]=e[s]
return function(t){for(var e=o;e--;)r[e]=i[e](t)
return r}},object:function(t,n){var i,o,s,u,c
if(!r(t)||!r(n))return null
i=[],u={},s={}
for(c in t)e.call(t,c)&&(e.call(n,c)?(i.push(c),s[c]=a(t[c],n[c])):u[c]=t[c])
for(c in n)e.call(n,c)&&!e.call(t,c)&&(u[c]=n[c])
return o=i.length,function(t){for(var e,n=o;n--;)e=i[n],u[e]=s[e](t)
return u}}}}(o,a,s,u,c),l=function(){var t
return t="undefined"==typeof document?!1:document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}(),f=function(){function t(t){var e,r,i,o,a,s=""
if(!n[t]){for(i=[];s.length<t;)s+=1
for(e=parseInt(s,2),o=function(t){return"1"===t},a=0;e>=a;a+=1){for(r=a.toString(2);r.length<t;)r="0"+r
i[a]=Array.prototype.map.call(r,o)}n[t]=i}return n[t]}var e,n={}
return e=function(e){var r,i,o,a,s,u
for(r=e.split("."),(i=n[r.length])||(i=t(r.length)),s=[],o=function(t,e){return t?"*":r[e]},a=i.length;a--;)u=i[a].map(o).join("."),s.hasOwnProperty(u)||(s.push(u),s[u]=!0)
return s}}(),d=function(t){function e(r,i,o,a){var s=arguments[4]
void 0===s&&(s=!1)
var u,c,h=!0
for(c=i.length;c>=0;c--)u=r._subs[i[c]],u&&(h=n(r,u,o,a)&&h)
if(r._parent&&h){if(s&&r.component){var l=r.component.name+"."+i[i.length-1]
i=t(l),o&&(o.component=r)}e(r._parent,i,o,a)}}function n(t,e,n,r){var i=null,o=!1
n&&(r=[n].concat(r))
for(var a=0,s=e.length;s>a;a+=1)e[a].apply(t,r)===!1&&(o=!0)
return n&&o&&(i=n.original)&&(i.preventDefault&&i.preventDefault(),i.stopPropagation&&i.stopPropagation()),!o}var r
return r=function(n,r){var i=arguments[2]
if(void 0===i&&(i={}),r){var o=t(r)
e(n,o,i.event,i.args,!0)}}}(f),p=function(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)},g=function(){function t(t){setTimeout(t,0)}function e(t,e){return function(){for(var n;n=t.shift();)n(e)}}function n(t,e,r,o){var a
if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise")
if(e instanceof i)e.then(r,o)
else if(!e||"object"!=typeof e&&"function"!=typeof e)r(e)
else{try{a=e.then}catch(s){return void o(s)}if("function"==typeof a){var u,c,h
c=function(e){u||(u=!0,n(t,e,r,o))},h=function(t){u||(u=!0,o(t))}
try{a.call(e,c,h)}catch(s){if(!u)return o(s),void(u=!0)}}else r(e)}}var r,i,o={},a={},s={}
return"function"==typeof g?i=g:(i=function(r){var u,c,h,l,f,d,p=[],g=[],v=o
h=function(n){return function(r){v===o&&(u=r,v=n,c=e(v===a?p:g,u),t(c))}},l=h(a),f=h(s)
try{r(l,f)}catch(m){f(m)}return d={then:function(e,r){var a=new i(function(i,s){var u=function(t,e,r){e.push("function"==typeof t?function(e){var r
try{r=t(e),n(a,r,i,s)}catch(o){s(o)}}:r)}
u(e,p,i),u(r,g,s),v!==o&&t(c)})
return a}},d["catch"]=function(t){return this.then(null,t)},d},i.all=function(t){return new i(function(e,n){var r,i,o,a=[]
if(!t.length)return void e(a)
for(o=function(i){t[i].then(function(t){a[i]=t,--r||e(a)},n)},r=i=t.length;i--;)o(i)})},i.resolve=function(t){return new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})}),r=i}(),v=function(){var t=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g
return function(e){return(e||"").replace(t,".$1")}}(),m=function(t){do if(void 0!==t.context)return t.context
while(t=t.parent)
return""},y=function(t,e){return null===t&&null===e?!0:"object"==typeof t||"object"==typeof e?!1:t===e},b=function(t,e,n){var r
t.push(function(){return r=t.runloop})
var i=function(t,e,n,r,i){this.root=t,this.keypath=e,this.priority=i,this.otherInstance=n,this.otherKeypath=r,this.bind(),this.value=this.root.viewmodel.get(this.keypath)}
return i.prototype={setValue:function(t){var i=this
return this.updating||this.counterpart&&this.counterpart.updating?void(this.value=t):void(e(t)&&t._ractive&&t._ractive.setting||n(t,this.value)||(this.updating=!0,r.addViewmodel(this.otherInstance.viewmodel),this.otherInstance.viewmodel.set(this.otherKeypath,t),this.value=t,r.scheduleTask(function(){return i.updating=!1})))},bind:function(){this.root.viewmodel.register(this.keypath,this)},rebind:function(t){this.unbind(),this.keypath=t,this.counterpart.otherKeypath=t,this.bind()},unbind:function(){this.root.viewmodel.unregister(this.keypath,this)}},function(t,e,n,r){var o,a,s,u,c,h
o=n+"="+r,s=t.bindings,s[o]||(a=t.instance,u=t.parentFragment.priority,c=new i(e,n,a,r,u),s.push(c),a.twoway&&(h=new i(a,r,e,n,1),s.push(h),c.counterpart=h,h.counterpart=c),s[o]=c)}}(o,s,y),w=function(t,e,n){function r(t,e){var n
if("."===e)return t
if(n=t?t.split("."):[],"../"===e.substr(0,3)){for(;"../"===e.substr(0,3);){if(!n.length)throw new Error(o)
n.pop(),e=e.substring(3)}return n.push(e),n.join(".")}return t?t+e.replace(/^\.\//,"."):e.replace(/^\.\/?/,"")}var i,o,a
return o='Could not resolve reference - too many "../" prefixes',a={evaluateWrapped:!0},i=function s(i,o,u){var c,h,l,f,d,p,g,v,m,y
if(o=t(o),"~/"===o.substr(0,2))return o.substring(2)
if("."===o.charAt(0))return r(e(u),o)
h=o.split(".")[0]
do if(c=u.context,c&&(p=!0,d=i.viewmodel.get(c,a),d&&("object"==typeof d||"function"==typeof d)&&h in d))return c+"."+o
while(u=u.parent)
if(h in i.data||h in i.viewmodel.computations)return o
if(i._parent&&!i.isolated){if(u=i.component.parentFragment,u.indexRefs&&void 0!==(l=u.indexRefs[o]))return i.component.indexRefBindings[o]=o,void i.viewmodel.set(o,l,!0)
if(f=s(i._parent,o,u)){for(g=f.split("."),v=o.split(".");g.length>1&&v.length>1&&g[g.length-1]===v[v.length-1];)g.pop(),v.pop()
return m=g.join("."),y=v.join("."),i.viewmodel.set(y,i._parent.viewmodel.get(m),!0),n(i.component,i._parent,m,y),o}}return p?void 0!==i.viewmodel.get(o)?o:void 0:o}}(v,m,b),E=function(t){function e(t){t.detach()}function n(t){t.detachNodes()}function r(t){!t.ready||t.outros.length||t.outroChildren||(t.outrosComplete||(t.parent?t.parent.decrementOutros(t):t.detachNodes(),t.outrosComplete=!0),t.intros.length||t.totalChildren||("function"==typeof t.callback&&t.callback(),t.parent&&t.parent.decrementTotal()))}var i=function(t,e){this.callback=t,this.parent=e,this.intros=[],this.outros=[],this.children=[],this.totalChildren=this.outroChildren=0,this.detachQueue=[],this.outrosComplete=!1,e&&e.addChild(this)}
return i.prototype={addChild:function(t){this.children.push(t),this.totalChildren+=1,this.outroChildren+=1},decrementOutros:function(){this.outroChildren-=1,r(this)},decrementTotal:function(){this.totalChildren-=1,r(this)},add:function(t){var e=t.isIntro?this.intros:this.outros
e.push(t)},remove:function(e){var n=e.isIntro?this.intros:this.outros
t(n,e),r(this)},init:function(){this.ready=!0,r(this)},detachNodes:function(){this.detachQueue.forEach(e),this.children.forEach(n)}},i}(p),_=function(t,e,n,r,i,o){function a(){var t,n,r
for(t=0;t<h.viewmodels.length;t+=1)n=h.viewmodels[t],r=n.applyChanges(),r&&e(n.ractive,"change",{args:[r]})
for(h.viewmodels.length=0,s(),t=0;t<h.views.length;t+=1)h.views[t].update()
for(h.views.length=0,t=0;t<h.tasks.length;t+=1)h.tasks[t]()
return h.tasks.length=0,h.viewmodels.length?a():void 0}function s(){var t,e,n,r
for(t=f.length;t--;)e=f[t],e.keypath&&f.splice(t,1),(n=i(e.root,e.ref,e.parentFragment))&&((r||(r=[])).push({item:e,keypath:n}),f.splice(t,1))
r&&r.forEach(u)}function u(t){t.item.resolve(t.keypath)}var c,h,l,f=[]
return l={start:function(t,e){var n,i
return e&&(n=new r(function(t){return i=t})),h={previousBatch:h,transitionManager:new o(i,h&&h.transitionManager),views:[],tasks:[],viewmodels:[]},t&&h.viewmodels.push(t.viewmodel),n},end:function(){a(),h.transitionManager.init(),h=h.previousBatch},addViewmodel:function(t){h?-1===h.viewmodels.indexOf(t)&&h.viewmodels.push(t):t.applyChanges()},registerTransition:function(t){t._manager=h.transitionManager,h.transitionManager.add(t)},addView:function(t){h.views.push(t)},addUnresolved:function(t){f.push(t)},removeUnresolved:function(t){n(f,t)},detachWhenReady:function(t){h.transitionManager.detachQueue.push(t)},scheduleTask:function(t){h?h.tasks.push(t):t()}},t.runloop=l,c=l}(o,d,p,g,w,E),x=function(){var t=/^\s*[0-9]+\s*$/
return function(e){return t.test(e)?[]:{}}}(),k=function(t,e,n){function r(e,n,r){function i(e){var r,i
e.value=n,e.updating||(i=e.ractive,r=e.keypath,e.updating=!0,t.start(i),i.viewmodel.mark(r),t.end(),e.updating=!1)}var o,a,s,u,c,h
if(o=e.obj,a=e.prop,r&&!r.configurable){if("length"===a)return
throw new Error('Cannot use magic mode with property "'+a+'" - object is not configurable')}r&&(s=r.get,u=r.set),c=s||function(){return n},h=function(t){u&&u(t),n=s?s():t,h._ractiveWrappers.forEach(i)},h._ractiveWrappers=[e],Object.defineProperty(o,a,{get:c,set:h,enumerable:!0,configurable:!0})}var i,o,a
try{Object.defineProperty({},"test",{value:0}),o={filter:function(t,e,r){var i,o,a,s,u
return e?(i=e.split("."),o=i.pop(),a=i.join("."),(s=r.viewmodel.wrapped[a])&&!s.magic?!1:(u=r.get(a),n(u)&&/^[0-9]+$/.test(o)?!1:u&&("object"==typeof u||"function"==typeof u))):!1},wrap:function(t,e,n){return new a(t,e,n)}},a=function(t,e,n){var i,o,a,s
return this.magic=!0,this.ractive=t,this.keypath=n,this.value=e,i=n.split("."),this.prop=i.pop(),o=i.join("."),this.obj=o?t.get(o):t.data,a=this.originalDescriptor=Object.getOwnPropertyDescriptor(this.obj,this.prop),a&&a.set&&(s=a.set._ractiveWrappers)?void(-1===s.indexOf(this)&&s.push(this)):void r(this,e,a)},a.prototype={get:function(){return this.value},reset:function(e){this.updating||(this.updating=!0,this.obj[this.prop]=e,t.addViewmodel(this.ractive.viewmodel),this.ractive.viewmodel.mark(this.keypath),this.updating=!1)},set:function(t,n){this.updating||(this.obj[this.prop]||(this.updating=!0,this.obj[this.prop]=e(t),this.updating=!1),this.obj[this.prop][t]=n)},teardown:function(){var t,e,n,r,i
return this.updating?!1:(t=Object.getOwnPropertyDescriptor(this.obj,this.prop),e=t&&t.set,void(e&&(r=e._ractiveWrappers,i=r.indexOf(this),-1!==i&&r.splice(i,1),r.length||(n=this.obj[this.prop],Object.defineProperty(this.obj,this.prop,this.originalDescriptor||{writable:!0,enumerable:!0,configurable:!0}),this.obj[this.prop]=n))))}}}catch(s){o=!1}return i=o}(_,x,s),S=function(t){return!!t}(k),O={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},T=function(t,e){var n
return n=t?function(t,n){return n&&n!==e.html?document.createElementNS(n,t):document.createElement(t)}:function(t,n){if(n&&n!==e.html)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information"
return document.createElement(t)}}(l,O),A=function(){var t="object"==typeof document
return t}(),N=function(t){var e
try{Object.defineProperty({},"test",{value:0}),t&&Object.defineProperty(document.createElement("div"),"test",{value:0}),e=Object.defineProperty}catch(n){e=function(t,e,n){t[e]=n.value}}return e}(A),L=function(t,e,n){var r
try{try{Object.defineProperties({},{test:{value:0}})}catch(i){throw i}n&&Object.defineProperties(t("div"),{test:{value:0}}),r=Object.defineProperties}catch(i){r=function(t,n){var r
for(r in n)n.hasOwnProperty(r)&&e(t,r,n[r])}}return r}(T,N,A),C=function(t){return function(e,n,r){var i
if("string"!=typeof n||!t(r))throw new Error("Bad arguments")
if(i=+e.get(n)||0,!t(i))throw new Error("Cannot add to a non-numeric value")
return e.set(n,i+r)}}(c),R=function(t){return function(e,n){return t(this,e,void 0===n?1:+n)}}(C),j=function(t){var e=/^\.+/
return function(n){return t(n).replace(e,"")}}(v),I=["o","ms","moz","webkit"],P=function(t){var e
return"undefined"==typeof window?e=null:(!function(t,e,n){var r,i
if(!n.requestAnimationFrame){for(r=0;r<t.length&&!n.requestAnimationFrame;++r)n.requestAnimationFrame=n[t[r]+"RequestAnimationFrame"]
n.requestAnimationFrame||(i=n.setTimeout,n.requestAnimationFrame=function(t){var n,r,o
return n=Date.now(),r=Math.max(0,16-(n-e)),o=i(function(){t(n+r)},r),e=n+r,o})}}(t,0,window),e=window.requestAnimationFrame),e}(I),M=function(){var t
return t="undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()}}(),F=function(t,e,n){var r=[],i={tick:function(){var o,a,s
for(s=e(),n.start(),o=0;o<r.length;o+=1)a=r[o],a.tick(s)||r.splice(o--,1)
n.end(),r.length?t(i.tick):i.running=!1},add:function(e){r.push(e),i.running||(i.running=!0,t(i.tick))},abort:function(t,e){for(var n,i=r.length;i--;)n=r[i],n.root===e&&n.keypath===t&&n.stop()}}
return i}(P,M,_),B=function(){var t,e={}
return t="undefined"!=typeof console&&"function"==typeof console.warn&&"function"==typeof console.warn.apply?function(t,n){if(!n){if(e[t])return
e[t]=!0}console.warn(t)}:function(){}}(),D=function(){function t(t){return t.trim?t.trim():t.replace(/^\s+/,"").replace(/\s+$/,"")}function e(t){return t.str}var n,r=/(?:^|\})?\s*([^\{\}]+)\s*\{/g,i=/\/\*.*?\*\//g,o=/((?:(?:\[[^\]+]\])|(?:[^\s\+\>\~:]))+)((?::[^\s\+\>\~]+)?\s*[\s\+\>\~]?)\s*/g,a=/^@media/,s=/\[data-rvcguid="[a-z0-9-]+"]/g
return n=function(n,u){var c,h
return h=function(t){var n,r,i,a,s,c,h,l,f=[]
for(n=[];r=o.exec(t);)n.push({str:r[0],base:r[1],modifiers:r[2]})
for(a='[data-rvcguid="'+u+'"]',s=n.map(e),l=n.length;l--;)h=s.slice(),i=n[l],h[l]=i.base+a+i.modifiers||"",c=s.slice(),c[l]=a+" "+c[l],f.push(h.join(" "),c.join(" "))
return f.join(", ")},c=s.test(n)?n.replace(s,'[data-rvcguid="'+u+'"]'):n.replace(i,"").replace(r,function(e,n){var r,i
return a.test(n)?e:(r=n.split(",").map(t),i=r.map(h).join(", ")+" ",e.replace(n,i))})}}(),U=function(t){function e(t,e,r){var i,o=e.constructor._guid;(i=n(r.css,r,o)||n(t.css,t,o))&&(e.constructor.css=i)}function n(e,n,r){return e?n.noCssTransform?e:t(e,r):void 0}var r={name:"css",extend:e,init:function(){}}
return r}(D),W=function(){function t(t,e){return"function"==typeof e&&/_super/.test(t)}var e
return e=function(e,n,r){return r||t(e,n)?function(){var t,r="_super"in this,i=this._super
return this._super=n,t=e.apply(this,arguments),r&&(this._super=i),t}:e}}(),q=function(t){function e(t,e,n){var r=n.data||{},i=o(t.prototype.data)
return a(i,r)}function n(t,n,r){n.data=e(t,n,r)}function r(t,n,r){var i=r.data,o=e(t,n,r)
return"function"==typeof o&&(o=o.call(n,i)||i),n.data=o||{}}function i(t){var e=this.init(t.constructor,t,t)
return e?(t.data=e,!0):void 0}function o(t){if("function"!=typeof t||!Object.keys(t).length)return t
var e={}
return s(t,e),a(t,e)}function a(t,e){return"function"==typeof e?h(e,t):"function"==typeof t?c(e,t):u(e,t)}function s(t,e,n){for(var r in t)n&&r in e||(e[r]=t[r])}function u(t,e){return t=t||{},e?(s(e,t,!0),t):t}function c(t,e){return function(n){var r
if(t){r=[]
for(var i in t)n&&i in n||r.push(i)}return n=e.call(this,n)||n,r&&r.length&&(n=n||{},r.forEach(function(e){n[e]=t[e]})),n}}function h(e,n){var r
return r="function"!=typeof n?function(t){u(t,n)}:function(e){return n=t(n,function(){},!0),n.call(this,e)||e},t(e,r)}var l,f={name:"data",extend:n,init:r,reset:i}
return l=f}(W),V={missingParser:"Missing Ractive.parse - cannot parse template. Either preparse or use the version that includes the parser",mergeComparisonFail:"Merge operation: comparison failed. Falling back to identity checking",noComponentEventArguments:"Components currently only support simple events - you cannot include arguments. Sorry!",noTemplateForPartial:'Could not find template for partial "{name}"',noNestedPartials:"Partials ({{>{name}}}) cannot contain nested inline partials",evaluationError:'Error evaluating "{uniqueString}": {err}',badArguments:"Bad arguments \"{arguments}\". I'm not allowed to argue unless you've paid.",failedComputation:'Failed to compute "{key}": {err}',missingPlugin:'Missing "{name}" {plugin} plugin. You may need to download a {plugin} via http://docs.ractivejs.org/latest/plugins#{plugin}s',badRadioInputBinding:"A radio input can have two-way binding on its name attribute, or its checked attribute - not both",noRegistryFunctionReturn:'A function was specified for "{name}" {registry}, but no {registry} was returned',defaultElSpecified:"The <{name}/> component has a default `el` property; it has been disregarded",noElementProxyEventWildcards:'Only component proxy-events may contain "*" wildcards, <{element} on-{event}/> is not valid.'},K={TEXT:1,INTERPOLATOR:2,TRIPLE:3,SECTION:4,INVERTED:5,CLOSING:6,ELEMENT:7,PARTIAL:8,COMMENT:9,DELIMCHANGE:10,MUSTACHE:11,TAG:12,ATTRIBUTE:13,CLOSING_TAG:14,COMPONENT:15,NUMBER_LITERAL:20,STRING_LITERAL:21,ARRAY_LITERAL:22,OBJECT_LITERAL:23,BOOLEAN_LITERAL:24,GLOBAL:26,KEY_VALUE_PAIR:27,REFERENCE:30,REFINEMENT:31,MEMBER:32,PREFIX_OPERATOR:33,BRACKETED:34,CONDITIONAL:35,INFIX_OPERATOR:36,INVOCATION:40,SECTION_IF:50,SECTION_UNLESS:51,SECTION_EACH:52,SECTION_WITH:53},z=function(){var t
try{Object.create(null),t=Object.create}catch(e){t=function(){var t=function(){}
return function(e,n){var r
return null===e?{}:(t.prototype=e,r=new t,n&&Object.defineProperties(r,n),r)}}()}return t}(),H={expectedExpression:"Expected a JavaScript expression",expectedParen:"Expected closing paren"},$=function(t){var e=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/
return function(n){var r
return(r=n.matchPattern(e))?{t:t.NUMBER_LITERAL,v:r}:null}}(K),G=function(t){return function(e){var n=e.remaining()
return"true"===n.substr(0,4)?(e.pos+=4,{t:t.BOOLEAN_LITERAL,v:"true"}):"false"===n.substr(0,5)?(e.pos+=5,{t:t.BOOLEAN_LITERAL,v:"false"}):null}}(K),J=function(){var t,e,n
return t=/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/,e=/^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/,n=/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/,function(r){return function(i){var o,a,s,u
for(o=i.pos,a='"',s=!1;!s;)u=i.matchPattern(t)||i.matchPattern(e)||i.matchString(r),u?a+='"'===u?'\\"':"\\'"===u?"'":u:(u=i.matchPattern(n),u?a+="\\u"+("000"+u.charCodeAt(1).toString(16)).slice(-4):s=!0)
return a+='"',JSON.parse(a)}}}(),Y=function(t){return t('"')}(J),Q=function(t){return t("'")}(J),X=function(t,e,n){return function(r){var i,o
return i=r.pos,r.matchString('"')?(o=n(r),r.matchString('"')?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):r.matchString("'")?(o=e(r),r.matchString("'")?{t:t.STRING_LITERAL,v:o}:(r.pos=i,null)):null}}(K,Y,Q),Z={name:/^[a-zA-Z_$][a-zA-Z_$0-9]*/},te=function(t,e,n){var r=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/
return function(i){var o
return(o=t(i))?r.test(o.v)?o.v:'"'+o.v.replace(/"/g,'\\"')+'"':(o=e(i))?o.v:(o=i.matchPattern(n.name))?o:void 0}}(X,$,Z),ee=function(t,e){return function(n){var r,i,o
return r=n.pos,n.allowWhitespace(),i=e(n),null===i?(n.pos=r,null):(n.allowWhitespace(),n.matchString(":")?(n.allowWhitespace(),o=n.readExpression(),null===o?(n.pos=r,null):{t:t.KEY_VALUE_PAIR,k:i,v:o}):(n.pos=r,null))}}(K,te),ne=function(t){return function e(n){var r,i,o,a
return r=n.pos,o=t(n),null===o?null:(i=[o],n.matchString(",")?(a=e(n),a?i.concat(a):(n.pos=r,null)):i)}}(ee),re=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.matchString("{")?(i=e(n),n.allowWhitespace(),n.matchString("}")?{t:t.OBJECT_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(K,ne),ie=function(t){return function e(n){function r(t){o.push(t)}var i,o,a,s
return i=n.pos,n.allowWhitespace(),a=n.readExpression(),null===a?null:(o=[a],n.allowWhitespace(),n.matchString(",")&&(s=e(n),null===s&&n.error(t.expectedExpression),s.forEach(r)),o)}}(H),oe=function(t,e){return function(n){var r,i
return r=n.pos,n.allowWhitespace(),n.matchString("[")?(i=e(n),n.matchString("]")?{t:t.ARRAY_LITERAL,m:i}:(n.pos=r,null)):(n.pos=r,null)}}(K,ie),ae=function(t,e,n,r,i){return function(o){var a=t(o)||e(o)||n(o)||r(o)||i(o)
return a}}($,G,X,re,oe),se=function(t,e){var n,r,i,o,a
return n=/^\.[a-zA-Z_$0-9]+/,i=function(t){var e=t.matchPattern(r)
return e?"."+e:null},r=/^\[(0|[1-9][0-9]*)\]/,o=/^(?:Array|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null)$/,a=/^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/,function(r){var s,u,c,h,l,f,d
if(s=r.pos,r.matchString("~/"))u="~/"
else for(u="";r.matchString("../");)u+="../"
if(u||(h=r.matchString(".")||""),c=r.matchPattern(/^@(?:index|key)/)||r.matchPattern(e.name)||"",a.test(c))return r.pos=s,null
if(!u&&!h&&o.test(c))return{t:t.GLOBAL,v:c}
if(l=(u||h)+c,!l)return null
for(;f=r.matchPattern(n)||i(r);)l+=f
return r.matchString("(")&&(d=l.lastIndexOf("."),-1!==d?(l=l.substr(0,d),r.pos=s+l.length):r.pos-=1),{t:t.REFERENCE,n:l.replace(/^this\./,"./").replace(/^this$/,".")}}}(K,Z),ue=function(t,e){return function(n){var r,i
return r=n.pos,n.matchString("(")?(n.allowWhitespace(),i=n.readExpression(),i||n.error(e.expectedExpression),n.allowWhitespace(),n.matchString(")")||n.error(e.expectedParen),{t:t.BRACKETED,x:i}):null}}(K,H),ce=function(t,e,n){return function(r){return t(r)||e(r)||n(r)}}(ae,se,ue),he=function(t,e,n){return function(r){var i,o,a
if(i=r.pos,r.allowWhitespace(),r.matchString(".")){if(r.allowWhitespace(),o=r.matchPattern(n.name))return{t:t.REFINEMENT,n:o}
r.error("Expected a property name")}return r.matchString("[")?(r.allowWhitespace(),a=r.readExpression(),a||r.error(e.expectedExpression),r.allowWhitespace(),r.matchString("]")||r.error("Expected ']'"),{t:t.REFINEMENT,x:a}):null}}(K,H,Z),le=function(t,e,n,r,i){return function(o){var a,s,u,c
if(s=e(o),!s)return null
for(;s;)if(a=o.pos,u=r(o))s={t:t.MEMBER,x:s,r:u}
else{if(!o.matchString("("))break
o.allowWhitespace(),c=n(o),o.allowWhitespace(),o.matchString(")")||o.error(i.expectedParen),s={t:t.INVOCATION,x:s},c&&(s.o=c)}return s}}(K,ce,ie,he,H),fe=function(t,e,n){var r,i
return i=function(n,r){return function(i){var o
return(o=r(i))?o:i.matchString(n)?(i.allowWhitespace(),o=i.readExpression(),o||i.error(e.expectedExpression),{s:n,o:o,t:t.PREFIX_OPERATOR}):null}},function(){var t,e,o,a,s
for(a="! ~ + - typeof".split(" "),s=n,t=0,e=a.length;e>t;t+=1)o=i(a[t],s),s=o
r=s}(),r}(K,H,le),de=function(t,e){var n,r
return r=function(e,n){return function(r){var i,o,a
if(o=n(r),!o)return null
for(;;){if(i=r.pos,r.allowWhitespace(),!r.matchString(e))return r.pos=i,o
if("in"===e&&/[a-zA-Z_$0-9]/.test(r.remaining().charAt(0)))return r.pos=i,o
if(r.allowWhitespace(),a=n(r),!a)return r.pos=i,o
o={t:t.INFIX_OPERATOR,s:e,o:[o,a]}}}},function(){var t,i,o,a,s
for(a="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" "),s=e,t=0,i=a.length;i>t;t+=1)o=r(a[t],s),s=o
n=s}(),n}(K,fe),pe=function(t,e,n){return function(r){var i,o,a,s
return(o=e(r))?(i=r.pos,r.allowWhitespace(),r.matchString("?")?(r.allowWhitespace(),a=r.readExpression(),a||r.error(n.expectedExpression),r.allowWhitespace(),r.matchString(":")||r.error('Expected ":"'),r.allowWhitespace(),s=r.readExpression(),s||r.error(n.expectedExpression),{t:t.CONDITIONAL,o:[o,a,s]}):(r.pos=i,o)):null}}(K,de,H),ge=function(t,e){function n(t){return JSON.stringify(String(t))}function r(n,i){var o,a
if(n.t===t.REFERENCE&&-1===i.indexOf(n.n)&&i.unshift(n.n),a=n.o||n.m)if(e(a))r(a,i)
else for(o=a.length;o--;)r(a[o],i)
n.x&&r(n.x,i),n.r&&r(n.r,i),n.v&&r(n.v,i)}function i(e,r,o){var a=function(t){return i(e,t,o)}
switch(r.t){case t.BOOLEAN_LITERAL:case t.GLOBAL:case t.NUMBER_LITERAL:return r.v
case t.STRING_LITERAL:return n(r.v)
case t.ARRAY_LITERAL:return"["+(r.m?r.m.map(a).join(","):"")+"]"
case t.OBJECT_LITERAL:return"{"+(r.m?r.m.map(a).join(","):"")+"}"
case t.KEY_VALUE_PAIR:return r.k+":"+i(e,r.v,o)
case t.PREFIX_OPERATOR:return("typeof"===r.s?"typeof ":r.s)+i(e,r.o,o)
case t.INFIX_OPERATOR:return i(e,r.o[0],o)+("in"===r.s.substr(0,2)?" "+r.s+" ":r.s)+i(e,r.o[1],o)
case t.INVOCATION:return i(e,r.x,o)+"("+(r.o?r.o.map(a).join(","):"")+")"
case t.BRACKETED:return"("+i(e,r.x,o)+")"
case t.MEMBER:return i(e,r.x,o)+i(e,r.r,o)
case t.REFINEMENT:return r.n?"."+r.n:"["+i(e,r.x,o)+"]"
case t.CONDITIONAL:return i(e,r.o[0],o)+"?"+i(e,r.o[1],o)+":"+i(e,r.o[2],o)
case t.REFERENCE:return"_"+o.indexOf(r.n)
default:e.error("Expected legal JavaScript")}}var o
return o=function(t){var e,n=[]
return r(t,n),e={r:n,s:i(this,t,n)}}}(K,u),ve=function(t,e,n,r,i){var o,a,s=/^\s+/
return a=function(t){this.name="ParseError",this.message=t
try{throw new Error(t)}catch(e){this.stack=e.stack}},a.prototype=Error.prototype,o=function(t,e){var n,r,i=0
for(this.str=t,this.options=e||{},this.pos=0,this.lines=this.str.split("\n"),this.lineEnds=this.lines.map(function(t){var e=i+t.length+1
return i=e,e},0),this.init&&this.init(t,e),n=[];this.pos<this.str.length&&(r=this.read());)n.push(r)
this.leftover=this.remaining(),this.result=this.postProcess?this.postProcess(n,e):n},o.prototype={read:function(t){var e,n,r,i
for(t||(t=this.converters),e=this.pos,r=t.length,n=0;r>n;n+=1)if(this.pos=e,i=t[n](this))return i
return null},readExpression:function(){return r(this)},flattenExpression:i,getLinePos:function(t){for(var e,n=0,r=0;t>=this.lineEnds[n];)r=this.lineEnds[n],n+=1
return e=t-r,[n+1,e+1]},error:function(t){var e,n,r,i,o,s
throw e=this.getLinePos(this.pos),n=e[0],r=e[1],i=this.lines[e[0]-1],o=i+"\n"+new Array(e[1]).join(" ")+"^----",s=new a(t+" at line "+n+" character "+r+":\n"+o),s.line=e[0],s.character=e[1],s.shortMessage=t,s},matchString:function(t){return this.str.substr(this.pos,t.length)===t?(this.pos+=t.length,t):void 0},matchPattern:function(t){var e
return(e=t.exec(this.remaining()))?(this.pos+=e[0].length,e[1]||e[0]):void 0},allowWhitespace:function(){this.matchPattern(s)},remaining:function(){return this.str.substring(this.pos)},nextChar:function(){return this.str.charAt(this.pos)}},o.extend=function(t){var r,i,a=this
r=function(t,e){o.call(this,t,e)},r.prototype=e(a.prototype)
for(i in t)n.call(t,i)&&(r.prototype[i]=t[i])
return r.extend=o.extend,r},t.Parser=o,o}(o,z,a,pe,ge),me=function(){var t=/^[^\s=]+/,e=/^\s+/
return function(n){var r,i,o
return n.matchString("=")?(r=n.pos,n.allowWhitespace(),(i=n.matchPattern(t))?n.matchPattern(e)?(o=n.matchPattern(t))?(n.allowWhitespace(),n.matchString("=")?[i,o]:(n.pos=r,null)):(n.pos=r,null):null:(n.pos=r,null)):null}}(),ye=[{delimiters:"delimiters",isTriple:!1,isStatic:!1},{delimiters:"tripleDelimiters",isTriple:!0,isStatic:!1},{delimiters:"staticDelimiters",isTriple:!1,isStatic:!0},{delimiters:"staticTripleDelimiters",isTriple:!0,isStatic:!0}],be=function(t){var e={"#":t.SECTION,"^":t.INVERTED,"/":t.CLOSING,">":t.PARTIAL,"!":t.COMMENT,"&":t.TRIPLE}
return function(t){var n=e[t.str.charAt(t.pos)]
return n?(t.pos+=1,n):null}}(K),we=function(t){return{"if":t.SECTION_IF,unless:t.SECTION_UNLESS,"with":t.SECTION_WITH,each:t.SECTION_EACH}}(K),Ee=null,_e=function(t,e,n){function r(e,n,r){var o
if(n){for(;n.t===t.BRACKETED&&n.x;)n=n.x
return n.t===t.REFERENCE?r.r=n.n:n.t===t.NUMBER_LITERAL&&u.test(n.v)?r.r=n.v:(o=i(e,n))?r.rx=o:r.x=e.flattenExpression(n),r}}function i(e,n){for(var r,i=[];n.t===t.MEMBER&&n.r.t===t.REFINEMENT;)r=n.r,i.unshift(r.x?r.x.t===t.REFERENCE?r.x:e.flattenExpression(r.x):r.n),n=n.x
return n.t!==t.REFERENCE?null:{r:n.n,m:i}}var o,a,s=/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,u=/^[0-9][1-9]*$/,c=new RegExp("^("+Object.keys(n).join("|")+")\\b")
return a=/^[a-zA-Z$_0-9]+(?:(\.[a-zA-Z$_0-9]+)|(\[[a-zA-Z$_0-9]+\]))*$/,o=function(n,i){var o,u,h,l,f,d,p,g,v,m
if(o=n.pos,h={},m=n[i.delimiters],i.isStatic&&(h.s=!0),i.isTriple)h.t=t.TRIPLE
else{if("!"===n.remaining()[0]){try{d=n.readExpression(),n.allowWhitespace(),n.remaining().indexOf(m[1])?d=null:h.t=t.INTERPOLATOR}catch(y){}if(!d)return v=n.remaining().indexOf(m[1]),~v?n.pos+=v:n.error("Expected closing delimiter ('"+m[1]+"')"),{t:t.COMMENT}}if(!d)if(l=e(n),h.t=l||t.INTERPOLATOR,l===t.SECTION)(f=n.matchPattern(c))&&(h.n=f),n.allowWhitespace()
else if((l===t.COMMENT||l===t.CLOSING)&&(g=n.remaining(),v=g.indexOf(m[1]),-1!==v))return h.r=g.substr(0,v).split(" ")[0],n.pos+=v,h}if(!d){n.allowWhitespace(),d=n.readExpression()
var b
if(h.t===t.PARTIAL&&d&&(b=n.readExpression())&&(h={contextPartialExpression:d},d=b),g=n.remaining(),g.substr(0,m[1].length)!==m[1]&&":"!==g.charAt(0)){if(u=n.pos,n.pos=o,g=n.remaining(),v=g.indexOf(m[1]),-1!==v)return h.r=g.substr(0,v).trim(),a.test(h.r)||n.error("Expected a legal Mustache reference"),n.pos+=v,h
n.pos=u}}return r(n,d,h),h.contextPartialExpression&&(h.contextPartialExpression=[r(n,h.contextPartialExpression,{t:t.PARTIAL})]),(p=n.matchPattern(s))&&(h.i=p),h}}(K,be,we,Ee),xe=function(t,e,n,r,i){function o(t){var e
return t.interpolate[t.inside]===!1?null:(e=n.slice().sort(function(e,n){return t[n.delimiters][0].length-t[e.delimiters][0].length}),function r(n){return n?a(t,n)||r(e.shift()):null}(e.shift()))}function a(n,o){var a,u,c,l,d,p,g,v,m
if(a=n.pos,c=n[o.delimiters],!n.matchString(c[0]))return null
if(u=e(n))return n.matchString(c[1])?(n[o.delimiters]=u,f):null
if(n.allowWhitespace(),u=r(n,o),null===u)return n.pos=a,null
if(n.allowWhitespace(),n.matchString(c[1])||n.error("Expected closing delimiter '"+c[1]+"' after reference"),u.t===t.COMMENT&&(u.exclude=!0),u.t===t.CLOSING&&(n.sectionDepth-=1,n.sectionDepth<0&&(n.pos=a,n.error("Attempted to close a section that wasn't open"))),u.contextPartialExpression)u.f=u.contextPartialExpression,u.t=t.SECTION,u.n="with",delete u.contextPartialExpression
else if(h(u)){for(n.sectionDepth+=1,l=[],g=l,d=u.n;v=n.read();){if(v.t===t.CLOSING){d&&v.r!==d&&n.error("Expected {{/"+d+"}}")
break}if(v.t===t.INTERPOLATOR&&"else"===v.r)switch(u.n){case"unless":n.error("{{else}} not allowed in {{#unless}}")
break
case"with":n.error("{{else}} not allowed in {{#with}}")
break
default:g=p=[]
continue}g.push(v)}l.length&&(u.f=l,!u.i&&"each"===u.n&&(m=s(u.f))&&(u.i=m)),p&&p.length&&(u.l=p)}return n.includeLinePositions&&(u.p=n.getLinePos(a)),u.n?u.n=i[u.n]:u.t===t.INVERTED&&(u.t=t.SECTION,u.n=t.SECTION_UNLESS),u}function s(e){var n,r,i,o
if(e)for(n=e.length;n--;){if(r=e[n],r.t===t.ELEMENT){if(i=s(r.o&&r.o.d)||s(r.t0&&r.t0.d)||s(r.t1&&r.t1.d)||s(r.t2&&r.t2.d)||s(r.f))return i
for(o in r.v)if(r.v.hasOwnProperty(o)&&r.v[o].d&&(i=s(r.v[o].d)))return i
for(o in r.a)if(r.a.hasOwnProperty(o)&&(i=s(r.a[o])))return i}if(r.t===t.INTERPOLATOR||r.t===t.TRIPLE||r.t===t.SECTION){if(r.r&&d.test(r.r))return r.r
if(r.x&&(i=u(r.x)))return i
if(r.rx&&(i=c(r.rx)))return i}}}function u(t){var e
for(e=t.r.length;e--;)if(d.test(t.r[e]))return t.r[e]}function c(e){var n,r,i
for(n=e.m.length;n--;){if(i=e.m[n],i.r&&(r=u(i)))return r
if(i.t===t.REFERENCE&&d.test(i.n))return i.n}}function h(e){return e.t===t.SECTION||e.t===t.INVERTED}var l,f={t:t.DELIMCHANGE,exclude:!0},d=/^@(?:index|key)$/
return l=o}(K,me,ye,_e,we),ke=function(t){var e="<!--",n="-->"
return function(r){var i,o,a,s,u
return i=r.pos,r.matchString(e)?(a=r.remaining(),s=a.indexOf(n),-1===s&&r.error("Illegal HTML - expected closing comment sequence ('-->')"),o=a.substr(0,s),r.pos+=s+3,u={t:t.COMMENT,c:o},r.includeLinePositions&&(u.p=r.getLinePos(i)),u):null}}(K),Se=function(){var t=/^(?:area|base|br|col|command|doctype|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i
return t}(),Oe=function(t,e){var n,r,i
for(n=e.length;n--;){if(r=t.indexOf(e[n]),!r)return 0;-1!==r&&(!i||i>r)&&(i=r)}return i||-1},Te=function(t){return function(e){var n,r,i,o
return r=e.remaining(),o=e.inside?"</"+e.inside:"<",e.inside&&!e.interpolate[e.inside]?n=r.indexOf(o):(i=[o,e.delimiters[0],e.tripleDelimiters[0],e.staticDelimiters[0],e.staticTripleDelimiters[0]],e.inAttribute===!0?i.push('"',"'","=",">","`"):e.inAttribute&&i.push(e.inAttribute),n=t(r,i)),n?(-1===n&&(n=r.length),e.pos+=n,r.substr(0,n)):null}}(Oe),Ae=function(t){var e=/^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/
return function(n){var r
return n.matchString("</")?(r=n.matchPattern(e))?{t:t.CLOSING_TAG,e:r}:(n.pos-=2,void n.error("Illegal closing tag")):null}}(K),Ne=function(){function t(t){return t?10===t?32:128>t?t:159>=t?r[t-128]:55296>t?t:57343>=t?65533:65535>=t?t:65533:65533}var e,n,r,i
return n={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},r=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],i=new RegExp("&(#?(?:x[\\w\\d]+|\\d+|"+Object.keys(n).join("|")+"));?","g"),e=function(e){return e.replace(i,function(e,r){var i
return i="#"!==r[0]?n[r]:"x"===r[1]?parseInt(r.substring(2),16):parseInt(r.substring(1),10),i?String.fromCharCode(t(i)):e})}}(Ee),Le=function(t,e,n){function r(t){var e,n,r
return t.allowWhitespace(),(n=t.matchPattern(h))?(e={name:n},r=i(t),r&&(e.value=r),e):null}function i(t){var e,r,i,o
return e=t.pos,t.allowWhitespace(),t.matchString("=")?(t.allowWhitespace(),r=t.pos,i=t.sectionDepth,o=s(t,"'")||s(t,'"')||a(t),t.sectionDepth!==i&&(t.pos=r,t.error("An attribute value must contain as many opening section tags as closing section tags")),null===o?(t.pos=e,null):o.length?1===o.length&&"string"==typeof o[0]?n(o[0]):o:null):(t.pos=e,null)}function o(e){var n,r,i,o,a
return n=e.pos,(r=e.matchPattern(l))?(i=r,o=[e.delimiters[0],e.tripleDelimiters[0],e.staticDelimiters[0],e.staticTripleDelimiters[0]],-1!==(a=t(i,o))&&(r=r.substr(0,a),e.pos=n+r.length),r):null}function a(t){var n,r
for(t.inAttribute=!0,n=[],r=e(t)||o(t);null!==r;)n.push(r),r=e(t)||o(t)
return n.length?(t.inAttribute=!1,n):null}function s(t,n){var r,i,o
if(r=t.pos,!t.matchString(n))return null
for(t.inAttribute=n,i=[],o=e(t)||u(t,n);null!==o;)i.push(o),o=e(t)||u(t,n)
return t.matchString(n)?(t.inAttribute=!1,i):(t.pos=r,null)}function u(e,n){var r,i,o,a
return r=e.pos,o=e.remaining(),a=[n,e.delimiters[0],e.tripleDelimiters[0],e.staticDelimiters[0],e.staticTripleDelimiters[0]],i=t(o,a),-1===i&&e.error("Quoted attribute value must have a closing quote"),i?(e.pos+=i,o.substr(0,i)):null}var c,h=/^[^\s"'>\/=]+/,l=/^[^\s"'=<>`]+/
return c=r}(Oe,xe,Ne),Ce=function(t,e,n){function r(t){var e,r,i
return t.allowWhitespace(),(e=n(t))?(i={key:e},t.allowWhitespace(),t.matchString(":")?(t.allowWhitespace(),(r=t.read())?(i.value=r.v,i):null):null):null}var i,o,a,s,u,c,h
return o={"true":!0,"false":!1,undefined:void 0,"null":null},a=new RegExp("^(?:"+Object.keys(o).join("|")+")"),s=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,u=/\$\{([^\}]+)\}/g,c=/^\$\{([^\}]+)\}/,h=/^\s*$/,i=t.extend({init:function(t,e){this.values=e.values,this.allowWhitespace()},postProcess:function(t){return 1===t.length&&h.test(this.leftover)?{value:t[0].v}:null},converters:[function(t){var e
return t.values?(e=t.matchPattern(c),e&&t.values.hasOwnProperty(e)?{v:t.values[e]}:void 0):null},function(t){var e
return(e=t.matchPattern(a))?{v:o[e]}:void 0},function(t){var e
return(e=t.matchPattern(s))?{v:+e}:void 0},function(t){var n,r=e(t)
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
return n.result}}(ve,X,te),Re=function(t,e,n,r){var i,o=/^([a-zA-Z_$][a-zA-Z_$0-9]*)\(/
return i=t.extend({converters:[e]}),function(t){var e,a,s,u,c,h,l,f,d
if("string"==typeof t){if(a=o.exec(t))return e={m:a[1]},u="["+t.slice(e.m.length+1,-1)+"]",s=new i(u),e.a=n(s.result[0]),e
if(-1===t.indexOf(":"))return t.trim()
t=[t]}for(e={},l=[],f=[];t.length;)if(c=t.shift(),"string"==typeof c){if(h=c.indexOf(":"),-1!==h){h&&l.push(c.substr(0,h)),c.length>h+1&&(f[0]=c.substring(h+1))
break}l.push(c)}else l.push(c)
return f=f.concat(t),f.length||"string"!=typeof l?(e={n:1===l.length&&"string"==typeof l[0]?l[0]:l},1===f.length&&"string"==typeof f[0]?(d=r("["+f[0]+"]"),e.a=d?d.value:f[0].trim()):e.d=f):e=l,e}}(ve,pe,ge,Ce),je=function(t,e,n,r,i,o,a,s){function u(n){var r,i,o,u,h,f,w,E,_,x,k
if(r=n.pos,n.inside)return null
if(!n.matchString("<"))return null
if("/"===n.nextChar())return null
if(i={t:t.ELEMENT},n.includeLinePositions&&(i.p=n.getLinePos(r)),n.matchString("!")&&(i.y=1),i.e=n.matchPattern(d),!i.e)return null
for(p.test(n.nextChar())||n.error("Illegal tag name"),f=function(t,e){var r=e.n||e
m.test(r)&&(n.pos-=r.length,n.error("Cannot use reserved event names (change, reset, teardown, update)")),i.v[t]=e};w=a(n);)(u=y[w.name])?i[u]=s(w.value):(h=v.exec(w.name))?(i.v||(i.v={}),E=s(w.value),f(h[1],E)):n.sanitizeEventAttributes&&g.test(w.name)||(i.a||(i.a={}),i.a[w.name]=w.value||0)
if(n.allowWhitespace(),n.matchString("/")&&(_=!0),!n.matchString(">"))return null
if(o=i.e.toLowerCase(),!_&&!e.test(i.e)){for(("script"===o||"style"===o)&&(n.inside=o),x=[];c(o,n.remaining())&&(k=n.read(l))&&k.t!==t.CLOSING&&k.t!==t.CLOSING_TAG;)x.push(k)
x.length&&(i.f=x)}return n.inside=null,n.sanitizeElements&&-1!==n.sanitizeElements.indexOf(o)?b:i}function c(t,e){var n,r
return n=/^<([a-zA-Z][a-zA-Z0-9]*)/.exec(e),r=f[t],n&&r?!~r.indexOf(n[1].toLowerCase()):!0}var h,l,f,d=/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/,p=/^[\s\n\/>]/,g=/^on/,v=/^on-([a-zA-Z\\*\\.$_][a-zA-Z\\*\\.$_0-9\-]+)$/,m=/^(?:change|reset|teardown|update)$/,y={"intro-outro":"t0",intro:"t1",outro:"t2",decorator:"o"},b={exclude:!0}
return l=[n,r,u,i,o],f={li:["li"],dt:["dt","dd"],dd:["dt","dd"],p:"address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(" "),rt:["rt","rp"],rp:["rt","rp"],optgroup:["optgroup"],option:["option","optgroup"],thead:["tbody","tfoot"],tbody:["tbody","tfoot"],tfoot:["tbody"],tr:["tr","tbody"],td:["td","th","tr"],th:["td","th","tr"]},h=u}(K,Se,xe,ke,Te,Ae,Le,Re),Ie=function(){var t=/^[ \t\f\r\n]+/,e=/[ \t\f\r\n]+$/
return function(n,r,i){var o
r&&(o=n[0],"string"==typeof o&&(o=o.replace(t,""),o?n[0]=o:n.shift())),i&&(o=n[n.length-1],"string"==typeof o&&(o=o.replace(e,""),o?n[n.length-1]=o:n.pop()))}}(),Pe=function(t){function e(t){return"string"==typeof t}function n(e){return e.t===t.COMMENT||e.t===t.DELIMCHANGE}function r(e){return(e.t===t.SECTION||e.t===t.INVERTED)&&e.f}var i,o=/^\s*\r?\n/,a=/\r?\n\s*$/
return i=function(t){var i,s,u,c,h
for(i=1;i<t.length;i+=1)s=t[i],u=t[i-1],c=t[i-2],e(s)&&n(u)&&e(c)&&a.test(c)&&o.test(s)&&(t[i-2]=c.replace(a,"\n"),t[i]=s.replace(o,"")),r(s)&&e(u)&&a.test(u)&&e(s.f[0])&&o.test(s.f[0])&&(t[i-1]=u.replace(a,"\n"),s.f[0]=s.f[0].replace(o,"")),e(s)&&r(u)&&(h=u.f[u.f.length-1],e(h)&&a.test(h)&&o.test(s)&&(u.f[u.f.length-1]=h.replace(a,"\n"),t[i]=s.replace(o,"")))
return t}}(K),Me=function(){var t=/[-/\\^$*+?.()|[\]{}]/g
return function(e){return e.replace(t,"\\$&")}}(),Fe=function(t,e,n,r,i,o,a,s,u){function c(e,n,r,i,o,u){var h,l,f,d,y,b,w,E,_
for(s(e),h=e.length;h--;)l=e[h],l.exclude?e.splice(h,1):n&&l.t===t.COMMENT&&e.splice(h,1)
for(a(e,i,o),h=e.length;h--;)if(l=e[h],l.f&&(y=r||l.t===t.ELEMENT&&g.test(l.e),y||(f=e[h-1],d=e[h+1],(!f||"string"==typeof f&&m.test(f))&&(b=!0),(!d||"string"==typeof d&&v.test(d))&&(w=!0)),c(l.f,n,y,b,w,u)),l.l&&(c(l.l,n,r,b,w,u),u&&(E={t:4,n:t.SECTION_UNLESS,f:l.l},l.r&&(E.r=l.r),l.x&&(E.x=l.x),l.rx&&(E.rx=l.rx),e.splice(h+1,0,E),delete l.l)),l.a)for(_ in l.a)l.a.hasOwnProperty(_)&&"string"!=typeof l.a[_]&&c(l.a[_],n,r,b,w,u)
for(h=e.length;h--;)"string"==typeof e[h]&&("string"==typeof e[h+1]&&(e[h]=e[h]+e[h+1],e.splice(h+1,1)),r||(e[h]=e[h].replace(p," ")),""===e[h]&&e.splice(h,1))}function h(t){var e=arguments[1]
void 0===e&&(e=t),e.delimiters=t.delimiters||["{{","}}"],e.tripleDelimiters=t.tripleDelimiters||["{{{","}}}"],e.staticDelimiters=t.staticDelimiters||["[[","]]"],e.staticTripleDelimiters=t.staticTripleDelimiters||["[[[","]]]"]}var l,f,d,p=/[ \t\f\r\n]+/g,g=/^(?:pre|script|style|textarea)$/i,v=/^\s+/,m=/\s+$/
return f=e.extend({init:function(t,e){h(e,this),this.sectionDepth=0,this.interpolate={script:!e.interpolate||e.interpolate.script!==!1,style:!e.interpolate||e.interpolate.style!==!1},e.sanitize===!0&&(e.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),this.sanitizeElements=e.sanitize&&e.sanitize.elements,this.sanitizeEventAttributes=e.sanitize&&e.sanitize.eventAttributes,this.includeLinePositions=e.includeLinePositions},postProcess:function(t,e){return this.sectionDepth>0&&this.error("A section was left open"),c(t,e.stripComments!==!1,e.preserveWhitespace,!e.preserveWhitespace,!e.preserveWhitespace,e.rewriteElse!==!1),t},converters:[n,r,i,o]}),d=function(t){var e=arguments[1]
void 0===e&&(e={})
var n,r,i,o,a,s,c,l
if(h(e),c=new RegExp("<!--\\s*"+u(e.delimiters[0])+"\\s*>\\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\\s*"+u(e.delimiters[1])+"\\s*-->"),l=new RegExp("<!--\\s*"+u(e.delimiters[0])+"\\s*\\/\\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\\s*"+u(e.delimiters[1])+"\\s*-->"),n={v:1},c.test(t)){for(r=t,t="";a=c.exec(r);){if(o=a[1],t+=r.substr(0,a.index),r=r.substring(a.index+a[0].length),s=l.exec(r),!s||s[1]!==o)throw new Error('Inline partials must have a closing delimiter, and cannot be nested. Expected closing for "'+o+'", but '+(s?'instead found "'+s[1]+'"':" no closing found"));(i||(i={}))[o]=new f(r.substr(0,s.index),e).result,r=r.substring(s.index+s[0].length)}t+=r,n.p=i}return n.t=new f(t,e).result,n},l=d}(K,ve,xe,ke,je,Te,Ie,Pe,Me),Be=function(){return function(t,e){var n=t.map(e)
return t.forEach(function(t,e){n[t]=n[e]}),n}}(Ee),De=function(t){var e,n
return e=["preserveWhitespace","sanitize","stripComments","delimiters","tripleDelimiters","interpolate"],n=t(e,function(t){return t})}(Be),Ue=function(t,e,n,r,i){function o(t){var e=r(l)
return e.parse=function(e,n){return a(e,n||t)},e}function a(e,r){if(!n)throw new Error(t.missingParser)
return n(e,r||this.options)}function s(t,n){var r
if(!e){if(n&&n.noThrow)return
throw new Error("Cannot retrieve template #"+t+" as Ractive is not running in a browser.")}if(u(t)&&(t=t.substring(1)),!(r=document.getElementById(t))){if(n&&n.noThrow)return
throw new Error("Could not find template element with id #"+t)}if("SCRIPT"!==r.tagName.toUpperCase()){if(n&&n.noThrow)return
throw new Error("Template element with id #"+t+", must be a <script> element")}return r.innerHTML}function u(t){return"#"===t.charAt(0)}function c(t){return!("string"==typeof t)}function h(t){return t.defaults&&(t=t.defaults),i.reduce(function(e,n){return e[n]=t[n],e},{})}var l={parse:a,fromId:s,isHashedId:u,isParsed:c,getParseOptions:h,createHelper:o}
return l}(V,A,Fe,z,De),We=function(t,e){function n(t){var e,n=t._config.template
if(n&&n.fn)return e=r(t,n.fn),e!==n.result?(n.result=e,e=i(e,t)):void 0}function r(e,n){var r=t.createHelper(t.getParseOptions(e))
return n.call(e,e.data,r)}function i(n,r){if("string"==typeof n)"#"===n[0]&&(n=t.fromId(n)),n=e(n,t.getParseOptions(r))
else if(1!==n.v)throw new Error("Mismatched template version! Please ensure you are using the latest version of Ractive.js in your build process as well as in your app")
return n}function o(t,e,n){if(e)for(var r in e)(n||!t.hasOwnProperty(r))&&(t[r]=e[r])}var a={name:"template",extend:function(t,e,n){var r
"template"in n&&(r=n.template,e.template="function"==typeof r?r:i(r,e))},init:function(t,e,n){var a,s
a="template"in n?n.template:t.prototype.template,"function"==typeof a&&(s=a,a=r(e,s),e._config.template={fn:s,result:a}),a=i(a,e),e.template=a.t,a.p&&o(e.partials,a.p)},reset:function(t){var e,r=n(t)
return r?(e=i(r,t),t.template=e.t,o(t.partials,e.p,!0),!0):void 0}}
return a}(Ue,Fe),qe=function(t){function e(t,e){this.name=t,this.useDefaults=e}function n(t,e){var r,i
return(r=e(t))?r:!t.isolated&&(i=t._parent)?n(i,e):void 0}return e.prototype={constructor:e,extend:function(t,e,n){this.configure(this.useDefaults?t.defaults:t,this.useDefaults?e:e.constructor,n)},init:function(t,e,n){this.configure(this.useDefaults?t.defaults:t,e,n)},configure:function(e,n,r){var i,o=this.name,a=r[o]
i=t(e[o])
for(var s in a)i[s]=a[s]
n[o]=i},reset:function(t){var e=t[this.name],n=!1
return Object.keys(e).forEach(function(t){var r=e[t]
r._fn&&(r._fn.isOwner?e[t]=r._fn:delete e[t],n=!0)}),n},findOwner:function(t,e){return t[this.name].hasOwnProperty(e)?t:this.findConstructor(t.constructor,e)},findConstructor:function(t,e){return t?t[this.name].hasOwnProperty(e)?t:this.findConstructor(t._parent,e):void 0},find:function(t,e){var r=this
return n(t,function(t){return t[r.name][e]})},findInstance:function(t,e){var r=this
return n(t,function(t){return t[r.name][e]?t:void 0})}},e}(z,Ee),Ve=function(t,e){var n=["adaptors","components","computed","decorators","easing","events","interpolators","partials","transitions"],r=t(n,function(t){return new e(t,"computed"===t)})
return r}(Be,qe),Ke=function(){},ze=function(t){function e(e,n){var r
if(n in e){var i=e[n]
r="function"==typeof i?i:function(){return i}}else r=t
return r}var n
return n=function(t,n,r){if(!/_super/.test(r))return r
var i=function(){var t,o=e(i._parent,n),a="_super"in this,s=this._super
return this._super=o,t=r.apply(this,arguments),a?this._super=s:delete this._super,t}
return i._parent=t,i._method=r,i}}(Ke),He=function(t,e){function n(e,n,i){if(n in e){if(i in e)throw new Error(r(n,i,!0))
t(r(n,i)),e[i]=e[n]}}function r(t,e,n){return"options."+t+" has been deprecated in favour of options."+e+"."+(n?" You cannot specify both options, please use options."+e+".":"")}function i(t){n(t,"eventDefinitions","events")}function o(t){e(t.adaptors)&&n(t,"adaptors","adapt")}return function(t){i(t),o(t)}}(B,s),$e=function(t,e,n,r,i,o,a,s){function u(t,e,n,r,i){h[e][t](n,r,i)}function c(t,e,r,i){s(i),u(t,"data",e,r,i),f.parseOptions.forEach(function(t){t in i&&(r[t]=i[t])})
for(var o in i)if(o in n&&!(o in f.parseOptions)&&!(o in h)){var c=i[o]
r[o]="function"==typeof c?a(e.prototype,o,c):c}f.registries.forEach(function(n){n[t](e,r,i)}),u(t,"template",e,r,i),u(t,"css",e,r,i)}var h,l,f
h={data:e,template:r,css:t},l=Object.keys(n).filter(function(t){return!o[t]&&!h[t]&&!i[t]}),f=[].concat(h.data,i,l,o,h.template,h.css)
for(var d in h)f[d]=h[d]
return f.keys=Object.keys(n).concat(o.map(function(t){return t.name})).concat(["css"]),f.parseOptions=i,f.registries=o,f.extend=function(t,e,n){c("extend",t,e,n)},f.init=function(t,e,n){c("init",t,e,n),e._config&&(e._config.options=n)},f.reset=function(t){return f.filter(function(e){return e.reset&&e.reset(t)}).map(function(t){return t.name})},f}(U,q,r,We,De,Ve,ze,He),Ge=function(t,e,n,r){function i(t){return function(){return t}}var o,a=function(t,o,a,s){if(t===o)return i(o)
if(s){var u=r.registries.interpolators.find(a,s)
if(u)return u(t,o)||i(o)
e('Missing "'+s+'" interpolator. You may need to download a plugin from [TODO]')}return n.number(t,o)||n.array(t,o)||n.object(t,o)||i(o)}
return t.interpolate=a,o=a}(o,B,h,$e),Je=function(t,e,n){var r=function(t){var e
this.startTime=Date.now()
for(e in t)t.hasOwnProperty(e)&&(this[e]=t[e])
this.interpolator=n(this.from,this.to,this.root,this.interpolator),this.running=!0,this.tick()}
return r.prototype={tick:function(){var n,r,i,o,a,s
return s=this.keypath,this.running?(o=Date.now(),n=o-this.startTime,n>=this.duration?(null!==s&&(e.start(this.root),this.root.viewmodel.set(s,this.to),e.end()),this.step&&this.step(1,this.to),this.complete(this.to),a=this.root._animations.indexOf(this),-1===a&&t("Animation was not found"),this.root._animations.splice(a,1),this.running=!1,!1):(r=this.easing?this.easing(n/this.duration):n/this.duration,null!==s&&(i=this.interpolator(r),e.start(this.root),this.root.viewmodel.set(s,i),e.end()),this.step&&this.step(r,i),!0)):!1},stop:function(){var e
this.running=!1,e=this.root._animations.indexOf(this),-1===e&&t("Animation was not found"),this.root._animations.splice(e,1)}},r}(B,_,Ge),Ye=function(t,e,n,r,i){function o(e,o,a,s){var c,h,l,f
return o&&(o=n(o)),null!==o&&(f=e.viewmodel.get(o)),r.abort(o,e),t(f,a)?(s.complete&&s.complete(s.to),u):(s.easing&&(c="function"==typeof s.easing?s.easing:e.easing[s.easing],"function"!=typeof c&&(c=null)),h=void 0===s.duration?400:s.duration,l=new i({keypath:o,from:f,to:a,root:e,duration:h,easing:c,interpolator:s.interpolator,step:s.step,complete:s.complete}),r.add(l),e._animations.push(l),l)}var a,s=function(){},u={stop:s}
return a=function(t,n,r){var i,a,u,c,h,l,f,d,p,g,v,m,y,b
if(i=new e(function(t){a=t}),"object"==typeof t){r=n||{},l=r.easing,f=r.duration,h=[],d=r.step,p=r.complete,(d||p)&&(v={},r.step=null,r.complete=null,g=function(t){return function(e,n){v[t]=n}})
for(u in t)t.hasOwnProperty(u)&&((d||p)&&(m=g(u),r={easing:l,duration:f},d&&(r.step=m)),r.complete=p?m:s,h.push(o(this,u,t[u],r)))
return b={easing:l,duration:f},d&&(b.step=function(t){d(t,v)}),p&&i.then(function(t){p(t,v)}),b.complete=a,y=o(this,null,null,b),h.push(y),i.stop=function(){for(var t;t=h.pop();)t.stop()
y&&y.stop()},i}return r=r||{},r.complete&&i.then(r.complete),r.complete=a,c=o(this,t,n,r),i.stop=function(){c.stop()},i}}(y,g,j,F,Je),Qe=function(t){return function(){return this.detached?this.detached:(this.el&&t(this.el.__ractive_instances__,this),this.detached=this.fragment.detach(),this.detached)}}(p),Xe=function(t){return this.el?this.fragment.find(t):null},Ze=function(t,e,n){var r,i,o,a,s,u,c,h
if(t){for(i=n("div"),o=["matches","matchesSelector"],h=function(t){return function(e,n){return e[t](n)}},u=o.length;u--&&!r;)if(a=o[u],i[a])r=h(a)
else for(c=e.length;c--;)if(s=e[u]+a.substr(0,1).toUpperCase()+a.substring(1),i[s]){r=h(s)
break}r||(r=function(t,e){var n,r,o
for(r=t.parentNode,r||(i.innerHTML="",r=i,t=t.cloneNode(),i.appendChild(t)),n=r.querySelectorAll(e),o=n.length;o--;)if(n[o]===t)return!0
return!1})}else r=null
return r}(A,I,T),tn=function(t){return function(e,n){var r=this._isComponentQuery?!this.selector||e.name===this.selector:t(e.node,this.selector)
return r?(this.push(e.node||e.instance),n||this._makeDirty(),!0):void 0}}(Ze),en=function(){var t,e,n
t=this._root[this._isComponentQuery?"liveComponentQueries":"liveQueries"],e=this.selector,n=t.indexOf(e),-1!==n&&(t.splice(n,1),t[e]=null)},nn=function(){function t(t){var e
return(e=t.parentFragment)?e.owner:t.component&&(e=t.component.parentFragment)?e.owner:void 0}function e(e){var n,r
for(n=[e],r=t(e);r;)n.push(r),r=t(r)
return n}var n
return n=function(t,n){var r,i,o,a,s,u,c,h,l,f
for(r=e(t.component||t._ractive.proxy),i=e(n.component||n._ractive.proxy),o=r[r.length-1],a=i[i.length-1];o&&o===a;)r.pop(),i.pop(),s=o,o=r[r.length-1],a=i[i.length-1]
if(o=o.component||o,a=a.component||a,l=o.parentFragment,f=a.parentFragment,l===f)return u=l.items.indexOf(o),c=f.items.indexOf(a),u-c||r.length-i.length
if(h=s.fragments)return u=h.indexOf(l),c=h.indexOf(f),u-c||r.length-i.length
throw new Error("An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!")}}(),rn=function(t){return function(e,n){var r
return e.compareDocumentPosition?(r=e.compareDocumentPosition(n),2&r?1:-1):t(e,n)}}(nn),on=function(t,e){return function(){this.sort(this._isComponentQuery?e:t),this._dirty=!1}}(rn,nn),an=function(t){return function(){var e=this
this._dirty||(this._dirty=!0,t.scheduleTask(function(){e._sort()}))}}(_),sn=function(t){var e=this.indexOf(this._isComponentQuery?t.instance:t);-1!==e&&this.splice(e,1)},un=function(t,e,n,r,i,o){return function(a,s,u,c){var h=[]
return t(h,{selector:{value:s},live:{value:u},_isComponentQuery:{value:c},_test:{value:e}}),u?(t(h,{cancel:{value:n},_root:{value:a},_sort:{value:r},_makeDirty:{value:i},_remove:{value:o},_dirty:{value:!1,writable:!0}}),h):h}}(L,tn,en,on,an,sn),cn=function(t){return function(e,n){var r,i
return this.el?(n=n||{},r=this._liveQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!1),i.live&&(r.push(e),r["_"+e]=i),this.fragment.findAll(e,i),i)):[]}}(un),hn=function(t){return function(e,n){var r,i
return n=n||{},r=this._liveComponentQueries,(i=r[e])?n&&n.live?i:i.slice():(i=t(this,e,!!n.live,!0),i.live&&(r.push(e),r["_"+e]=i),this.fragment.findAllComponents(e,i),i)}}(un),ln=function(t){return this.fragment.findComponent(t)},fn=function(t){return function(e){var n={args:Array.prototype.slice.call(arguments,1)}
t(this,e,n)}}(d),dn=function(t){var e={capture:!0}
return function(n){return n=t(n),this.viewmodel.get(n,e)}}(j),pn=function(t){var e
if(t&&"boolean"!=typeof t)return"undefined"!=typeof window&&document&&t?t.nodeType?t:"string"==typeof t&&(e=document.getElementById(t),!e&&document.querySelector&&(e=document.querySelector(t)),e&&e.nodeType)?e:t[0]&&t[0].nodeType?t[0]:null:null},gn=function(t){return function(e,n){if(!this.rendered)throw new Error("The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.")
if(e=t(e),n=t(n)||null,!e)throw new Error("You must specify a valid target to insert into")
e.insertBefore(this.detach(),n),this.el=e,(e.__ractive_instances__||(e.__ractive_instances__=[])).push(this),this.detached=null}}(pn),vn=function(t,e,n){return function(r,i,o){var a,s
return r=n(r),a=this.viewmodel.get(r),e(a)&&e(i)?(s=t.start(this,!0),this.viewmodel.merge(r,a,i,o),t.end(),o&&o.complete&&s.then(o.complete),s):this.set(r,i,o&&o.complete)}}(_,s,j),mn=function(t,e){var n=function(t,e,n,r){this.root=t,this.keypath=e,this.callback=n,this.defer=r.defer,this.priority=0,this.context=r&&r.context?r.context:t}
return n.prototype={init:function(t){this.value=this.root.viewmodel.get(this.keypath),t!==!1?this.update():this.oldValue=this.value},setValue:function(n){var r=this
e(n,this.value)||(this.value=n,this.defer&&this.ready?t.scheduleTask(function(){return r.update()}):this.update())},update:function(){this.updating||(this.updating=!0,this.callback.call(this.context,this.value,this.oldValue,this.keypath),this.oldValue=this.value,this.updating=!1)}},n}(_,y),yn=function(t){return function(e,n){function r(n,r){var i,o,a
i=e.viewmodel.wrapped[r]?e.viewmodel.wrapped[r].get():e.get(r)
for(o in i)!i.hasOwnProperty(o)||"_ractive"===o&&t(i)||(a=r?r+"."+o:o,n.push(a))
return n}function i(t){return function(e){return e?e+"."+t:t}}var o,a,s
for(o=n.split("."),s=[""];a=o.shift();)"*"===a?s=s.reduce(r,[]):""===s[0]?s[0]=a:s=s.map(i(a))
return s}}(s),bn=function(t){return function(e,n){var r,i
return r=t(e,n),i={},r.forEach(function(t){i[t]=e.get(t)}),i}}(yn),wn=function(t,e,n){var r,i=/\*/,o=Array.prototype.slice
return r=function(t,e,n,r){this.root=t,this.callback=n,this.defer=r.defer,this.keypath=e,this.regex=new RegExp("^"+e.replace(/\./g,"\\.").replace(/\*/g,"([^\\.]+)")+"$"),this.values={},this.defer&&(this.proxies=[]),this.priority="pattern",this.context=r&&r.context?r.context:t},r.prototype={init:function(t){var e,r
if(e=n(this.root,this.keypath),t!==!1)for(r in e)e.hasOwnProperty(r)&&this.update(r)
else this.values=e},update:function(e){var r,o=this
if(i.test(e)){r=n(this.root,e)
for(e in r)r.hasOwnProperty(e)&&this.update(e)}else if(!this.root.viewmodel.implicitChanges[e])return this.defer&&this.ready?void t.scheduleTask(function(){return o.getProxy(e).update()}):void this.reallyUpdate(e)},reallyUpdate:function(t){var n,r,i
return n=this.root.viewmodel.get(t),this.updating?void(this.values[t]=n):(this.updating=!0,e(n,this.values[t])&&this.ready||(r=o.call(this.regex.exec(t),1),i=[n,this.values[t],t].concat(r),this.callback.apply(this.context,i),this.values[t]=n),void(this.updating=!1))},getProxy:function(t){var e=this
return this.proxies[t]||(this.proxies[t]={update:function(){e.reallyUpdate(t)}}),this.proxies[t]}},r}(_,y,bn),En=function(t,e,n){var r=/\*/,i={}
return function(o,a,s,u){var c,h,l
return a=t(a),u=u||i,r.test(a)?(c=new n(o,a,s,u),o.viewmodel.patternObservers.push(c),h=!0):c=new e(o,a,s,u),o.viewmodel.register(a,c,h?"patternObservers":"observers"),c.init(u.init),c.ready=!0,{cancel:function(){var t
l||(h?(t=o.viewmodel.patternObservers.indexOf(c),o.viewmodel.patternObservers.splice(t,1),o.viewmodel.unregister(a,c,"patternObservers")):o.viewmodel.unregister(a,c,"observers"),l=!0)}}}}(j,mn,wn),_n=function(t,e){return function(n,r,i){var o,a,s,u
if(t(n)){i=r,a=n,o=[]
for(n in a)a.hasOwnProperty(n)&&(r=a[n],o.push(this.observe(n,r,i)))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}if("function"==typeof n)return i=r,r=n,n="",e(this,n,r,i)
if(s=n.split(" "),1===s.length)return e(this,n,r,i)
for(o=[],u=s.length;u--;)n=s[u],n&&o.push(e(this,n,r,i))
return{cancel:function(){for(;o.length;)o.pop().cancel()}}}}(u,En),xn=function(t){return t.trim()},kn=function(t){return""!==t},Sn=function(t,e){return function(n,r){var i,o=this
if(n)i=n.split(" ").map(t).filter(e),i.forEach(function(t){var e,n;(e=o._subs[t])&&(r?(n=e.indexOf(r),-1!==n&&e.splice(n,1)):o._subs[t]=[])})
else for(n in this._subs)delete this._subs[n]
return this}}(xn,kn),On=function(t,e){return function(n,r){var i,o,a,s=this,u=this
if("object"==typeof n){i=[]
for(o in n)n.hasOwnProperty(o)&&i.push(this.on(o,n[o]))
return{cancel:function(){for(var t;t=i.pop();)t.cancel()}}}return a=n.split(" ").map(t).filter(e),a.forEach(function(t){(s._subs[t]||(s._subs[t]=[])).push(r)}),{cancel:function(){u.off(n,r)}}}}(xn,kn),Tn=function(t,e,n){switch(e){case"splice":return n
case"sort":case"reverse":return null
case"pop":return t.length?[-1]:null
case"push":return[t.length,0].concat(n)
case"shift":return[0,1]
case"unshift":return[0,0].concat(n)}},An=function(t,e){var n,r,i,o,a,s
return e?(n=+(e[0]<0?t.length+e[0]:e[0]),0>n?n=0:n>t.length&&(n=t.length),o=Math.max(0,e.length-2),a=void 0!==e[1]?e[1]:t.length-n,a=Math.min(a,t.length-n),s=o-a,i=t.length+s,r=s?Math.max(t.length,i):n+o,{rangeStart:n,rangeEnd:r,balance:s,added:o,removed:a}):null},Nn=function(t,e,n,r){var i=Array.prototype
return function(o){return function(a){var s,u,c,h,l,f=Array.prototype.slice,d=f.call(arguments,1)
if(s=this.get(a),!t(s))throw new Error("Called ractive."+o+"('"+a+"'), but '"+a+"' does not refer to an array")
return u=n(s,o,d),c=r(s,u),l=c?i.splice.apply(s,u):i[o].apply(s,d),h=e.start(this,!0),c?this.viewmodel.splice(a,c):this.viewmodel.mark(a),e.end(),("splice"===o||"pop"===o||"shift"===o)&&(h=h.then(function(){return l})),h}}}(s,_,Tn,An),Ln=function(t){return t("pop")}(Nn),Cn=function(t){return t("push")}(Nn),Rn=function(t,e,n){var r,i,o,a,s,u,c,h="/* Ractive.js component styles */\n",l={},f=[]
return e?(t.push(function(){o=t.runloop}),a=document.createElement("style"),a.type="text/css",s=document.getElementsByTagName("head")[0],c=!1,u=a.styleSheet,i=function(){var t
f.length?(t=h+f.join(" "),u?u.cssText=t:a.innerHTML=t,c||(s.appendChild(a),c=!0)):c&&(s.removeChild(a),c=!1)},r={add:function(t){t.css&&(l[t._guid]||(l[t._guid]=0,f.push(t.css),o.scheduleTask(i)),l[t._guid]+=1)},remove:function(t){t.css&&(l[t._guid]-=1,l[t._guid]||(n(f,t.css),o.scheduleTask(i)))}}):r=null,r}(o,A,p),jn=function(t,e,n){function r(t){var e=i(t)
for(t.init&&t.init(t._config.options);e.length;)r(e.shift())
a[t._guid]=null}function i(t){return a[t._guid]||(a[t._guid]=[])}var o,a={},s={}
return o=function(o,a){var u,c,h,l=this
if(s[this._guid]=!0,h=this.transitionsEnabled,this.noIntro&&(this.transitionsEnabled=!1),u=t.start(this,!0),this.rendered)throw new Error("You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first")
return o=n(o)||this.el,a=n(a)||this.anchor,this.el=o,this.anchor=a,this.constructor.css&&e.add(this.constructor),o&&((c=o.__ractive_instances__)?c.push(this):o.__ractive_instances__=[this],a?o.insertBefore(this.fragment.render(),a):o.appendChild(this.fragment.render())),this._hasInited||(this._hasInited=!0,this._parent&&s[this._parent._guid]?i(this._parent).push(this):r(this)),s[this._guid]=!1,t.end(),this.rendered=!0,this.transitionsEnabled=h,this.complete&&u.then(function(){return l.complete()}),u}}(_,Rn,pn),In=function(){this.dirtyValue=this.dirtyArgs=!0,this.bound&&"function"==typeof this.owner.bubble&&this.owner.bubble()},Pn=function(){var t
return 1===this.items.length?this.items[0].detach():(t=document.createDocumentFragment(),this.items.forEach(function(e){t.appendChild(e.detach())}),t)},Mn=function(t){var e,n,r,i
if(this.items){for(n=this.items.length,e=0;n>e;e+=1)if(r=this.items[e],r.find&&(i=r.find(t)))return i
return null}},Fn=function(t,e){var n,r,i
if(this.items)for(r=this.items.length,n=0;r>n;n+=1)i=this.items[n],i.findAll&&i.findAll(t,e)
return e},Bn=function(t,e){var n,r,i
if(this.items)for(r=this.items.length,n=0;r>n;n+=1)i=this.items[n],i.findAllComponents&&i.findAllComponents(t,e)
return e},Dn=function(t){var e,n,r,i
if(this.items){for(e=this.items.length,n=0;e>n;n+=1)if(r=this.items[n],r.findComponent&&(i=r.findComponent(t)))return i
return null}},Un=function(t){var e,n=t.index
return e=this.items[n+1]?this.items[n+1].firstNode():this.owner===this.root?this.owner.component?this.owner.component.findNextNode():null:this.owner.findNextNode(this)},Wn=function(){return this.items&&this.items[0]?this.items[0].firstNode():null},qn=function(){var t=this
do if(t.pElement)return t.pElement.node
while(t=t.parent)
return this.root.detached||this.root.el},Vn=function(t){function e(t,n,r,i){return i=i||0,t.map(function(t){var o,a,s
return t.text?t.text:t.fragments?t.fragments.map(function(t){return e(t.items,n,r,i)}).join(""):(o=r+"-"+i++,s=(a=t.root.viewmodel.wrapped[t.keypath])?a.value:t.getValue(),n[o]=s,"${"+o+"}")}).join("")}var n,r={}
return n=function(){var n=arguments[0]
void 0===n&&(n=r)
var i,o,a,s,u,c,h
return i=n.args,u=i?"argsList":"value",c=i?"dirtyArgs":"dirtyValue",this[c]&&(a=e(this.items,o={},this.root._guid),s=t(i?"["+a+"]":a,o),h=s?s.value:i?[this.toString()]:this.toString(),this[u]=h,this[c]=!1),this[u]}}(Ce),Kn=function(){var t=/</g,e=/>/g
return function(n){return n.replace(t,"&lt;").replace(e,"&gt;")}}(),zn=function(t){return t&&t.parentNode&&t.parentNode.removeChild(t),t},Hn=function(t){return function(){return t(this.node)}}(zn),$n=function(t,e,n,r){var i=function(e){this.type=t.TEXT,this.text=e.template}
return i.prototype={detach:n,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createTextNode(r(this.text))),this.node},toString:function(t){return t?e(this.text):this.text},unrender:function(t){return t?this.detach():void 0}},i}(K,Kn,Hn,Ne),Gn=function(t){return function(){this.keypath?this.root.viewmodel.unregister(this.keypath,this):t.removeUnresolved(this),this.resolver&&this.resolver.unbind()}}(_),Jn=function(){return this.value},Yn=function(t){var e=function(e,n,r,i){this.root=e,this.ref=n,this.parentFragment=r,this.resolve=i,t.addUnresolved(this)}
return e.prototype={unbind:function(){t.removeUnresolved(this)}},e}(_),Qn=function(t,e){return t&&e&&t.substr(0,e.length+1)===e+"."},Xn=function(t){return function(e,n,r){return e===n?void 0!==r?r:null:t(e,n)?null===r?r:e.replace(n+".",r+"."):void 0}}(Qn),Zn=function(t,e){function n(t){var n=e[t.message]||t.message||""
return r(n,t.args)}function r(t,e){return t.replace(/{([^{}]*)}/g,function(t,n){return e[n]})}var i={warn:function(t,e){(t.debug||e)&&this.logger(n(t),t.allowDuplicates)},error:function(t){this.errorOnly(t),t.debug||this.warn(t,!0)},errorOnly:function(t){t.debug&&this.critical(t)},critical:function(t){var e=t.err||new Error(n(t))
this.thrower(e)},logger:t,thrower:function(t){throw t}}
return i}(B,V),tr=function(){var t={}
return function(e,n){var r,i
if(t[e])return t[e]
for(i=[];n--;)i[n]="_"+n
return r=new Function(i.join(","),"return("+e+")"),t[e]=r,r}}(),er=function(t,e,n){var r,i
for(r=e.length;r--;)i=e[r],-1===n.indexOf(i)&&t.viewmodel.unregister(i,t,"computed")
for(r=n.length;r--;)i=n[r],-1===e.indexOf(i)&&t.viewmodel.register(i,t,"computed")
t.dependencies=n.slice()},nr=function(t,e,n,r,i){function o(t,e){var r,i,o
if(t._noWrap)return t
if(i="__ractive_"+e._guid,r=t[i])return r
if(/this/.test(t.toString())){n(t,i,{value:c.call(t,e)})
for(o in t)t.hasOwnProperty(o)&&(t[i][o]=t[o])
return t[i]}return n(t,"__ractive_nowrap",{value:t}),t.__ractive_nowrap}function a(t){return"function"==typeof t?t():t}var s,u,c=Function.prototype.bind
return u=function(t,e,n,i,a,s){var u=this,c=t.viewmodel
u.root=t,u.viewmodel=c,u.uniqueString=n,u.keypath=e,u.priority=s,u.fn=r(i,a.length),u.explicitDependencies=[],u.dependencies=[],u.argumentGetters=a.map(function(e){var n,r
return e?e.indexRef?r=e.value:(n=e.keypath,u.explicitDependencies.push(n),c.register(n,u,"computed"),function(){var e=c.get(n)
return"function"==typeof e?o(e,t):e}):void 0})},u.prototype={wake:function(){this.awake=!0},sleep:function(){this.awake=!1},getValue:function(){var e,n,r
if(e=this.argumentGetters.map(a),!this.updating){this.updating=!0,this.viewmodel.capture()
try{n=this.fn.apply(null,e)}catch(o){this.root.debug&&t.warn({debug:this.root.debug,message:"evaluationError",args:{uniqueString:this.uniqueString,err:o.message||o}}),n=void 0}return r=this.viewmodel.release(),i(this,this.dependencies,r),this.updating=!1,n}},update:function(){var t=this.getValue()
return e(t,this.value)||(this.value=t,this.root.viewmodel.mark(this.keypath)),this},teardown:function(){var t=this
this.explicitDependencies.concat(this.dependencies).forEach(function(e){return t.viewmodel.unregister(e,t,"computed")}),this.root.viewmodel.evaluators[this.keypath]=null}},s=u}(Zn,y,N,tr,er,Ee),rr=function(t,e,n,r,i){function o(t,e){return t.replace(/_([0-9]+)/g,function(t,n){var r=e[n]
return r?r.indexRef?r.value:r.keypath:"undefined"})}function a(t){return"${"+t.replace(/[\.\[\]]/g,"-")+"}"}var s,u=function(r,i,o,a){var s,u,c,h=this
return s=r.root,this.root=s,this.callback=a,this.owner=r,this.str=o.s,this.args=c=[],this.unresolved=[],this.pending=0,u=i.indexRefs,o.r&&o.r.length?(o.r.forEach(function(r,o){var a,l,f
return u&&void 0!==(a=u[r])?void(c[o]={indexRef:r,value:a}):(l=e(s,r,i))?void(c[o]={keypath:l}):"."===r?void(c[o]={"":""}):(c[o]=null,h.pending+=1,f=new n(s,r,i,function(e){h.resolve(o,e),t(h.unresolved,f)}),void h.unresolved.push(f))}),this.ready=!0,void this.bubble()):(this.resolved=this.ready=!0,void this.bubble())}
return u.prototype={bubble:function(){this.ready&&(this.uniqueString=o(this.str,this.args),this.keypath=a(this.uniqueString),this.createEvaluator(),this.callback(this.keypath))},unbind:function(){for(var t;t=this.unresolved.pop();)t.unbind()},resolve:function(t,e){this.args[t]={keypath:e},this.bubble(),this.resolved=!--this.pending},createEvaluator:function(){var t=this.root.viewmodel.evaluators[this.keypath]
t||(t=new r(this.root,this.keypath,this.uniqueString,this.str,this.args,this.owner.priority),this.root.viewmodel.evaluators[this.keypath]=t),t.update()},rebind:function(t,e,n,r){var o
this.args.forEach(function(a){var s
a&&(a.keypath&&(s=i(a.keypath,n,r))?(a.keypath=s,o=!0):a.indexRef&&a.indexRef===t&&(a.value=e,o=!0))}),o&&this.bubble()}},s=u}(p,w,Yn,nr,Xn),ir=function(t,e,n,r,i){var o=function(r,o,a){var s,u,c,h,l,f=this
f.resolver=o,f.root=o.root,f.viewmodel=o.root.viewmodel,"string"==typeof r?f.value=r:r.t===t.REFERENCE?(s=f.ref=r.n,(u=a.indexRefs)&&void 0!==(c=u[s])?(f.indexRef=s,f.value=c):(h=o.root,(l=e(h,s,a))?f.resolve(l):f.unresolved=new n(h,s,a,function(t){f.unresolved=null,f.resolve(t)}))):new i(o,a,r,function(t){f.resolve(t)})}
return o.prototype={resolve:function(t){this.keypath=t,this.value=this.viewmodel.get(t),this.bind(),this.resolver.bubble()},bind:function(){this.viewmodel.register(this.keypath,this)},rebind:function(t,e,n,i){var o
if(t&&this.indexRef===t){if(e!==this.value)return this.value=e,!0}else if(this.keypath&&(o=r(this.keypath,n,i)))return this.unbind(),this.keypath=o,this.value=this.root.viewmodel.get(o),this.bind(),!0},setValue:function(t){this.value=t,this.resolver.bubble()},unbind:function(){this.keypath&&this.root.viewmodel.unregister(this.keypath,this),this.unresolved&&this.unresolved.unbind()},forceResolution:function(){this.unresolved&&(this.unresolved.unbind(),this.unresolved=null,this.keypath=this.ref,this.value=this.viewmodel.get(this.ref),this.bind())}},o}(K,w,Yn,Xn,rr),or=function(t,e,n){function r(t){return t.value}function i(t){return void 0!=t}function o(t){t.unbind()}var a=function(r,i,o){var a,s,u,c,h=this,l=this
c=r.parentFragment,l.root=a=r.root,l.mustache=r,l.priority=r.priority,l.ref=s=i.r,l.callback=o,l.unresolved=[],(u=t(a,s,c))?l.base=u:l.baseResolver=new e(a,s,c,function(t){l.base=t,l.baseResolver=null,l.bubble()}),l.members=i.m.map(function(t){return new n(t,h,c)}),l.ready=!0,l.bubble()}
return a.prototype={getKeypath:function(){var t=this.members.map(r)
return!t.every(i)||this.baseResolver?null:this.base+"."+t.join(".")},bubble:function(){this.ready&&!this.baseResolver&&this.callback(this.getKeypath())},unbind:function(){this.members.forEach(o)},rebind:function(t,e,n,r){var i
this.members.forEach(function(o){o.rebind(t,e,n,r)&&(i=!0)}),i&&this.bubble()},forceResolution:function(){this.baseResolver&&(this.base=this.ref,this.baseResolver.unbind(),this.baseResolver=null),this.members.forEach(function(t){return t.forceResolution()}),this.bubble()}},a}(w,Yn,ir),ar=function(t,e,n,r,i){return function(o,a){function s(t){var e=o.keypath
t!==e&&(o.resolve(t),void 0!==e&&o.fragments&&o.fragments.forEach(function(n){n.rebind(null,null,e,t)}))}var u,c,h,l,f,d
if(f=a.parentFragment,d=a.template,o.root=f.root,o.parentFragment=f,o.pElement=f.pElement,o.template=a.template,o.index=a.index||0,o.priority=f.priority,o.isStatic=a.template.s,o.type=a.template.t,u=d.r){if(h=f.indexRefs,h&&void 0!==(l=h[u]))return o.indexRef=u,void o.setValue(l)
c=n(o.root,u,o.parentFragment),void 0!==c?o.resolve(c):(o.ref=u,e.addUnresolved(o))}a.template.x&&(o.resolver=new i(o,f,a.template.x,s)),a.template.rx&&(o.resolver=new r(o,a.template.rx,s)),o.template.n!==t.SECTION_UNLESS||o.hasOwnProperty("value")||o.setValue(void 0)}}(K,_,w,or,rr),sr=function(t){var e,n,r
void 0!=this.keypath&&(this.root.viewmodel.unregister(this.keypath,this),e=!0),this.keypath=t,void 0!=t&&(n=this.root.viewmodel.get(t),this.root.viewmodel.register(t,this)),this.setValue(n),e&&(r=this.twowayBinding)&&r.rebound()},ur=function(t){return function(e,n,r,i){var o
this.fragments&&this.fragments.forEach(function(t){return t.rebind(e,n,r,i)}),this.resolver&&this.resolver.rebind(e,n,r,i),void 0!==this.keypath?(o=t(this.keypath,r,i),void 0!==o&&this.resolve(o)):void 0!==e&&this.indexRef===e&&this.setValue(n)}}(Xn),cr=function(t,e,n,r){return{getValue:t,init:e,resolve:n,rebind:r}}(Jn,ar,sr,ur),hr=function(t,e,n,r,i,o,a,s){var u=function(e){this.type=t.INTERPOLATOR,a.init(this,e)}
return u.prototype={update:function(){this.node.data=void 0==this.value?"":this.value},resolve:a.resolve,rebind:a.rebind,detach:s,unbind:o,render:function(){return this.node||(this.node=document.createTextNode(void 0!=this.value?this.value:"")),this.node},unrender:function(t){t&&r(this.node)},getValue:a.getValue,setValue:function(t){var n;(n=this.root.viewmodel.wrapped[this.keypath])&&(t=n.get()),i(t,this.value)||(this.value=t,this.parentFragment.bubble(),this.node&&e.addView(this))},firstNode:function(){return this.node},toString:function(t){var e=void 0!=this.value?""+this.value:""
return t?n(e):e}},u}(K,_,Kn,zn,y,Gn,cr,Hn),lr=function(){this.parentFragment.bubble()},fr=function(){var t
return 1===this.fragments.length?this.fragments[0].detach():(t=document.createDocumentFragment(),this.fragments.forEach(function(e){t.appendChild(e.detach())}),t)},dr=function(t){var e,n,r
for(n=this.fragments.length,e=0;n>e;e+=1)if(r=this.fragments[e].find(t))return r
return null},pr=function(t,e){var n,r
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAll(t,e)},gr=function(t,e){var n,r
for(r=this.fragments.length,n=0;r>n;n+=1)this.fragments[n].findAllComponents(t,e)},vr=function(t){var e,n,r
for(n=this.fragments.length,e=0;n>e;e+=1)if(r=this.fragments[e].findComponent(t))return r
return null},mr=function(t){return this.fragments[t.index+1]?this.fragments[t.index+1].firstNode():this.parentFragment.findNextNode(this)},yr=function(){var t,e,n
if(t=this.fragments.length)for(e=0;t>e;e+=1)if(n=this.fragments[e].firstNode())return n
return this.parentFragment.findNextNode(this)},br=function(t,e){var n
return e.push(function(){n=e.Fragment}),function(e){var n,r,i,o,a,s,u,c,h=this
if(!this.unbound){if(n=this.parentFragment,a=[],e.forEach(function(t,e){var n,i,o,s
return t===e?void(a[t]=h.fragments[e]):(n=h.fragments[e],void 0===r&&(r=e),-1===t?(h.fragmentsToUnrender.push(n),void n.unbind()):(i=t-e,o=h.keypath+"."+e,s=h.keypath+"."+t,n.rebind(h.template.i,t,o,s),void(a[t]=n)))}),o=this.root.get(this.keypath).length,void 0===r){if(this.length===o)return
r=this.length}for(this.length=this.fragments.length=o,t.addView(this),s={template:this.template.f,root:this.root,owner:this},this.template.i&&(s.indexRef=this.template.i),i=r;o>i;i+=1)(u=a[i])?this.docFrag.appendChild(u.detach(!1)):this.fragmentsToCreate.push(i),this.fragments[i]=u
c=n.findNextNode(this),this.parentFragment.getNode().insertBefore(this.docFrag,c)}}}(_,o),wr=function(){var t
return t=this.docFrag=document.createDocumentFragment(),this.update(),this.rendered=!0,t},Er=function(t,e,n,r,i){function o(r,i){var o={template:r.template.f,root:r.root,pElement:r.parentFragment.pElement,owner:r}
if(r.subtype)switch(r.subtype){case t.SECTION_IF:return c(r,i,!1,o)
case t.SECTION_UNLESS:return c(r,i,!0,o)
case t.SECTION_WITH:return u(r,o)
case t.SECTION_EACH:if(n(i))return s(r,i,o)}return r.ordered=!!e(i),r.ordered?a(r,i,o):n(i)||"function"==typeof i?r.template.i?s(r,i,o):u(r,o):c(r,i,!1,o)}function a(t,e,n){var r,i,o
if(i=e.length,i===t.length)return!1
if(i<t.length)t.fragmentsToUnrender=t.fragments.splice(i,t.length-i),t.fragmentsToUnrender.forEach(h)
else if(i>t.length)for(r=t.length;i>r;r+=1)n.context=t.keypath+"."+r,n.index=r,t.template.i&&(n.indexRef=t.template.i),o=new d(n),t.fragmentsToRender.push(t.fragments[r]=o)
return t.length=i,!0}function s(t,e,n){var r,i,o,a,s
for(o=t.hasKey||(t.hasKey={}),i=t.fragments.length;i--;)a=t.fragments[i],a.index in e||(s=!0,a.unbind(),t.fragmentsToUnrender.push(a),t.fragments.splice(i,1),o[a.index]=!1)
for(r in e)o[r]||(s=!0,n.context=t.keypath+"."+r,n.index=r,t.template.i&&(n.indexRef=t.template.i),a=new d(n),t.fragmentsToRender.push(a),t.fragments.push(a),o[r]=!0)
return t.length=t.fragments.length,s}function u(t,e){var n
return t.length?void 0:(e.context=t.keypath,e.index=0,n=new d(e),t.fragmentsToRender.push(t.fragments[0]=n),t.length=1,!0)}function c(t,n,r,i){var o,a,s
if(a=e(n)&&0===n.length,o=r?a||!n:n&&!a){if(!t.length)return i.index=0,s=new d(i),t.fragmentsToRender.push(t.fragments[0]=s),t.length=1,!0
if(t.length>1)return t.fragmentsToUnrender=t.fragments.splice(1),t.fragmentsToUnrender.forEach(h),!0}else if(t.length)return t.fragmentsToUnrender=t.fragments.splice(0,t.fragments.length).filter(l),t.fragmentsToUnrender.forEach(h),t.length=t.fragmentsToRender.length=0,!0}function h(t){t.unbind()}function l(t){return t.rendered}var f,d
return i.push(function(){d=i.Fragment}),f=function(t){var e,n,i=this
this.updating||(this.updating=!0,(e=this.root.viewmodel.wrapped[this.keypath])&&(t=e.get()),this.fragmentsToCreate.length?(n={template:this.template.f,root:this.root,pElement:this.pElement,owner:this,indexRef:this.template.i},this.fragmentsToCreate.forEach(function(t){var e
n.context=i.keypath+"."+t,n.index=t,e=new d(n),i.fragmentsToRender.push(i.fragments[t]=e)}),this.fragmentsToCreate.length=0):o(this,t)&&(this.bubble(),this.rendered&&r.addView(this)),this.value=t,this.updating=!1)}}(K,s,u,_,o),_r=function(t,e){function n(t){t.unbind()}function r(t,e){var n,r=[]
for(n=t;e>n;n+=1)r.push(n)
return r}function i(t,e,n,r){var i,o,a,s,u
for(a=t.template.i,i=e;n>i;i+=1)o=t.fragments[i],s=t.keypath+"."+(i-r),u=t.keypath+"."+i,o.index=i,o.rebind(a,i,s,u)}var o,a
return e.push(function(){a=e.Fragment}),o=function(e){var o,a,s,u,c,h=this
if(!this.unbound&&(o=e.balance)){if(t.addView(h),a=e.rangeStart,h.length+=o,0>o)return h.fragmentsToUnrender=h.fragments.splice(a,-o),h.fragmentsToUnrender.forEach(n),void i(h,a,h.length,o)
s=a+e.removed,u=a+e.added,c=[s,0],c.length+=o,h.fragments.splice.apply(h.fragments,c),i(h,u,h.length,o),h.fragmentsToCreate=r(s,u)}}}(_,o),xr=function(t){var e,n,r
for(e="",n=0,r=this.length,n=0;r>n;n+=1)e+=this.fragments[n].toString(t)
return e},kr=function(t){function e(t){t.unbind()}var n
return n=function(){this.fragments.forEach(e),t.call(this),this.length=0,this.unbound=!0}}(Gn),Sr=function(){function t(t){t.unrender(!0)}function e(t){t.unrender(!1)}var n
return n=function(n){this.fragments.forEach(n?t:e)}}(),Or=function(){for(var t,e,n,r,i;t=this.fragmentsToUnrender.pop();)t.unrender(!0)
if(this.fragmentsToRender.length){for(this.rendered&&(i=this.parentFragment.getNode());t=this.fragmentsToRender.shift();)e=t.render(),this.docFrag.appendChild(e),this.rendered&&this.ordered&&(n=this.fragments[t.index+1],n&&n.rendered&&i.insertBefore(this.docFrag,n.firstNode()||null))
this.rendered&&this.docFrag.childNodes.length&&(r=this.parentFragment.findNextNode(this),i.insertBefore(this.docFrag,r))}},Tr=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g,v,m){var y=function(n){this.type=t.SECTION,this.subtype=n.template.n,this.inverted=this.subtype===t.SECTION_UNLESS,this.pElement=n.pElement,this.fragments=[],this.fragmentsToCreate=[],this.fragmentsToRender=[],this.fragmentsToUnrender=[],this.length=0,e.init(this,n)}
return y.prototype={bubble:n,detach:r,find:i,findAll:o,findAllComponents:a,findComponent:s,findNextNode:u,firstNode:c,getValue:e.getValue,merge:h,rebind:e.rebind,render:l,resolve:e.resolve,setValue:f,splice:d,toString:p,unbind:g,unrender:v,update:m},y}(K,cr,lr,fr,dr,pr,gr,vr,mr,yr,br,wr,Er,_r,xr,kr,Sr,Or),Ar=function(){var t,e
if(this.docFrag){for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e])
return this.docFrag}},Nr=function(t){return function(e){var n,r,i,o
for(r=this.nodes.length,n=0;r>n;n+=1)if(i=this.nodes[n],1===i.nodeType){if(t(i,e))return i
if(o=i.querySelector(e))return o}return null}}(Ze),Lr=function(t){return function(e,n){var r,i,o,a,s,u
for(i=this.nodes.length,r=0;i>r;r+=1)if(o=this.nodes[r],1===o.nodeType&&(t(o,e)&&n.push(o),a=o.querySelectorAll(e)))for(s=a.length,u=0;s>u;u+=1)n.push(a[u])}}(Ze),Cr=function(){return this.rendered&&this.nodes[0]?this.nodes[0]:this.parentFragment.findNextNode(this)},Rr=function(t,e){function n(t){return a[t]||(a[t]=e(t))}var r,i,o,a={}
try{e("table").innerHTML="foo"}catch(s){i=!0,o={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}return r=function(e,r,a){var s,u,c,h,l,f=[]
if(null!=e&&""!==e){for(i&&(u=o[r.tagName])?(s=n("DIV"),s.innerHTML=u[0]+e+u[1],s=s.querySelector(".x"),"SELECT"===s.tagName&&(c=s.options[s.selectedIndex])):r.namespaceURI===t.svg?(s=n("DIV"),s.innerHTML='<svg class="x">'+e+"</svg>",s=s.querySelector(".x")):(s=n(r.tagName),s.innerHTML=e);h=s.firstChild;)f.push(h),a.appendChild(h)
if(i&&"SELECT"===r.tagName)for(l=f.length;l--;)f[l]!==c&&(f[l].selected=!1)}return f}}(O,T),jr=function(t){for(var e=[],n=t.length;n--;)e[n]=t[n]
return e},Ir=function(t){function e(t){return t.selected}var n
return n=function(n){var r,i,o
n&&"select"===n.name&&n.binding&&(r=t(n.node.options).filter(e),n.getAttribute("multiple")?o=r.map(function(t){return t.value}):(i=r[0])&&(o=i.value),void 0!==o&&n.binding.setValue(o),n.bubble())}}(jr),Pr=function(t,e){return function(){if(this.rendered)throw new Error("Attempted to render an item that was already rendered")
return this.docFrag=document.createDocumentFragment(),this.nodes=t(this.value,this.parentFragment.getNode(),this.docFrag),e(this.pElement),this.rendered=!0,this.docFrag}}(Rr,Ir),Mr=function(t){return function(e){var n;(n=this.root.viewmodel.wrapped[this.keypath])&&(e=n.get()),e!==this.value&&(this.value=e,this.parentFragment.bubble(),this.rendered&&t.addView(this))}}(_),Fr=function(t){return function(){return void 0!=this.value?t(""+this.value):""}}(Ne),Br=function(t){return function(e){this.rendered&&e&&(this.nodes.forEach(t),this.rendered=!1)}}(zn),Dr=function(t,e){return function(){var n,r
if(this.rendered){for(;this.nodes&&this.nodes.length;)n=this.nodes.pop(),n.parentNode.removeChild(n)
r=this.parentFragment.getNode(),this.nodes=t(this.value,r,this.docFrag),r.insertBefore(this.docFrag,this.parentFragment.findNextNode(this)),e(this.pElement)}}}(Rr,Ir),Ur=function(t,e,n,r,i,o,a,s,u,c,h,l){var f=function(n){this.type=t.TRIPLE,e.init(this,n)}
return f.prototype={detach:n,find:r,findAll:i,firstNode:o,getValue:e.getValue,rebind:e.rebind,render:a,resolve:e.resolve,setValue:s,toString:u,unbind:l,unrender:c,update:h},f}(K,cr,Ar,Nr,Lr,Cr,Pr,Mr,Fr,Br,Dr,Gn),Wr=function(){this.parentFragment.bubble()},qr=function(){var t,e=this.node
return e?((t=e.parentNode)&&t.removeChild(e),e):void 0},Vr=function(t){return function(e){return t(this.node,e)?this.node:this.fragment&&this.fragment.find?this.fragment.find(e):void 0}}(Ze),Kr=function(t,e){e._test(this,!0)&&e.live&&(this.liveQueries||(this.liveQueries=[])).push(e),this.fragment&&this.fragment.findAll(t,e)},zr=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e)},Hr=function(t){return this.fragment?this.fragment.findComponent(t):void 0},$r=function(){return null},Gr=function(){return this.node},Jr=function(t){return this.attributes&&this.attributes[t]?this.attributes[t].value:void 0},Yr=function(){var t,e,n,r
return t="altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath vkern".split(" "),e="attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" "),n=function(t){for(var e={},n=t.length;n--;)e[t[n].toLowerCase()]=t[n]
return e},r=n(t.concat(e)),function(t){var e=t.toLowerCase()
return r[e]||e}}(),Qr=function(t){return function(){var e=this.fragment.getValue()
e!==this.value&&("id"===this.name&&this.value&&delete this.root.nodes[this.value],this.value=e,"value"===this.name&&this.node&&(this.node._ractive.value=e),this.rendered&&t.addView(this))}}(_),Xr=function(){var t=/^(allowFullscreen|async|autofocus|autoplay|checked|compact|controls|declare|default|defaultChecked|defaultMuted|defaultSelected|defer|disabled|draggable|enabled|formNoValidate|hidden|indeterminate|inert|isMap|itemScope|loop|multiple|muted|noHref|noResize|noShade|noValidate|noWrap|open|pauseOnExit|readOnly|required|reversed|scoped|seamless|selected|sortable|translate|trueSpeed|typeMustMatch|visible)$/i
return t}(),Zr=function(t,e){return function(n,r){var i,o
if(i=r.indexOf(":"),-1===i||(o=r.substr(0,i),"xmlns"===o))n.name=n.element.namespace!==t.html?e(r):r
else if(r=r.substring(i+1),n.name=e(r),n.namespace=t[o.toLowerCase()],!n.namespace)throw'Unknown namespace ("'+o+'")'}}(O,Yr),ti=function(t){return function(e){var n=e.fragment.items
if(1===n.length)return n[0].type===t.INTERPOLATOR?n[0]:void 0}}(K),ei=function(t,e){var n={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"}
return function(r,i){var o
!r.pNode||r.namespace||i.pNode.namespaceURI&&i.pNode.namespaceURI!==t.html||(o=n[r.name]||r.name,void 0!==i.pNode[o]&&(r.propertyName=o),(e.test(o)||"value"===o)&&(r.useProperty=!0))}}(O,Xr),ni=function(t,e,n,r,i,o){var a
return o.push(function(){a=o.Fragment}),function(o){return this.type=t.ATTRIBUTE,this.element=o.element,this.root=o.root,n(this,o.name),o.value&&"string"!=typeof o.value?(this.parentFragment=this.element.parentFragment,this.fragment=new a({template:o.value,root:this.root,owner:this}),this.value=this.fragment.getValue(),this.interpolator=r(this),this.isBindable=!!this.interpolator&&!this.interpolator.isStatic,i(this,o),void(this.ready=!0)):void(this.value=e.test(this.name)?!0:o.value||"")}}(K,Xr,Zr,ti,ei,o),ri=function(t,e,n,r){this.fragment&&this.fragment.rebind(t,e,n,r)},ii=function(t,e){var n={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"}
return function(r){var i
this.node=r,r.namespaceURI&&r.namespaceURI!==t.html||(i=n[this.name]||this.name,void 0!==r[i]&&(this.propertyName=i),(e.test(i)||"value"===i)&&(this.useProperty=!0),"value"===i&&(this.useProperty=!0,r._ractive.value=this.value)),this.rendered=!0,this.update()}}(O,Xr),oi=function(t){function e(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var n
return n=function(){var n=(o=this).name,r=o.value,i=o.interpolator,o=o.fragment
if(("value"!==n||"select"!==this.element.name&&"textarea"!==this.element.name)&&("value"!==n||void 0===this.element.getAttribute("contenteditable")))return"name"===n&&"input"===this.element.name&&i?"name={{"+(i.keypath||i.ref)+"}}":t.test(n)?r?n:"":(o&&(r=o.toString()),r?n+'="'+e(r)+'"':n)}}(Xr),ai=function(){this.fragment&&this.fragment.unbind()},si=function(){var t,e,n,r,i=this.value
if(!this.locked)for(this.node._ractive.value=i,t=this.node.options,r=t.length;r--;)if(e=t[r],n=e._ractive?e._ractive.value:e.value,n==i){e.selected=!0
break}},ui=function(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]==e)return!0
return!1},ci=function(t,e){return function(){var n,r,i,o,a=this.value
for(e(a)||(a=[a]),n=this.node.options,r=n.length;r--;)i=n[r],o=i._ractive?i._ractive.value:i.value,i.selected=t(a,o)}}(ui,s),hi=function(){var t=(e=this).node,e=e.value
t.checked=e==t._ractive.value},li=function(t){return function(){var e,n,r,i,o=this.node
if(e=o.checked,o.value=this.element.getAttribute("value"),o.checked=this.element.getAttribute("value")===this.element.getAttribute("name"),e&&!o.checked&&this.element.binding&&(r=this.element.binding.siblings,i=r.length)){for(;i--;){if(n=r[i],!n.element.node)return
if(n.element.node.checked)return t.addViewmodel(n.root.viewmodel),n.handleChange()}t.addViewmodel(n.root.viewmodel),this.root.viewmodel.set(n.keypath,void 0)}}}(_),fi=function(t){return function(){var e,n
e=this.node,n=this.value,e.checked=t(n)?-1!==n.indexOf(e._ractive.value):n==e._ractive.value}}(s),di=function(){var t,e
t=this.node,e=this.value,void 0===e&&(e=""),t.className=e},pi=function(){var t,e
t=this.node,e=this.value,void 0!==e&&(this.root.nodes[e]=void 0),this.root.nodes[e]=t,t.id=e},gi=function(){var t,e
t=this.node,e=this.value,void 0===e&&(e=""),t.style.setAttribute("cssText",e)},vi=function(){var t=this.value
void 0===t&&(t=""),this.locked||(this.node.innerHTML=t)},mi=function(){var t=(e=this).node,e=e.value
t._ractive.value=e,this.locked||(t.value=void 0==e?"":e)},yi=function(){this.locked||(this.node[this.propertyName]=this.value)},bi=function(t){return function(){var e=(o=this).node,n=o.namespace,r=o.name,i=o.value,o=o.fragment
n?e.setAttributeNS(n,r,(o||i).toString()):t.test(r)?i?e.setAttribute(r,""):e.removeAttribute(r):e.setAttribute(r,(o||i).toString())}}(Xr),wi=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d){return function(){var p,g,v=(y=this).name,m=y.element,y=y.node
"id"===v?g=u:"value"===v?"select"===m.name&&"value"===v?g=m.getAttribute("multiple")?r:n:"textarea"===m.name?g=l:null!=m.getAttribute("contenteditable")?g=h:"input"===m.name&&(p=m.getAttribute("type"),g="file"===p?e:"radio"===p&&m.binding&&"name"===m.binding.name?o:l):this.twoway&&"name"===v?"radio"===y.type?g=i:"checkbox"===y.type&&(g=a):"style"===v&&y.style.setAttribute?g=c:"class"!==v||y.namespaceURI&&y.namespaceURI!==t.html?this.useProperty&&(g=f):g=s,g||(g=d),this.update=g,this.update()}}(O,Ke,si,ci,hi,li,fi,di,pi,gi,vi,mi,yi,bi),Ei=function(t,e,n,r,i,o,a){var s=function(t){this.init(t)}
return s.prototype={bubble:t,init:e,rebind:n,render:r,toString:i,unbind:o,update:a},s}(Qr,ni,ri,ii,oi,ai,wi),_i=function(t){return function(e,n){var r,i,o=[]
for(r in n)n.hasOwnProperty(r)&&(i=new t({element:e,name:r,value:n[r],root:e.root}),o.push(o[r]=i))
return o}}(Ei),xi=function(t){for(var e,n,r=Array.prototype.slice,i=r.call(arguments,1);n=i.shift();)for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e])
return t},ki=function(t,e,n,r,i){var o=function(t){var n,r,i
return this.element=t,this.root=t.root,this.attribute=t.attributes[this.name||"value"],n=this.attribute.interpolator,n.twowayBinding=this,n.keypath&&"${"===n.keypath.substr?(e("Two-way binding does not work with expressions: "+n.keypath),!1):(n.keypath||(n.ref&&n.resolve(n.ref),n.resolver&&n.resolver.forceResolution()),this.keypath=r=n.keypath,void(void 0===this.root.viewmodel.get(r)&&this.getInitialValue&&(i=this.getInitialValue(),void 0!==i&&this.root.viewmodel.set(r,i))))}
return o.prototype={handleChange:function(){var e=this
t.start(this.root),this.attribute.locked=!0,this.root.viewmodel.set(this.keypath,this.getValue()),t.scheduleTask(function(){return e.attribute.locked=!1}),t.end()},rebound:function(){var t,e,n
e=this.keypath,n=this.attribute.interpolator.keypath,e!==n&&(i(this.root._twowayBindings[e],this),this.keypath=n,t=this.root._twowayBindings[n]||(this.root._twowayBindings[n]=[]),t.push(this))},unbind:function(){}},o.extend=function(t){var e,i=this
return e=function(t){o.call(this,t),this.init&&this.init()},e.prototype=n(i.prototype),r(e.prototype,t),e.extend=o.extend,e},o}(_,B,z,xi,p),Si=function(){this._ractive.binding.handleChange()},Oi=function(t,e){var n=t.extend({getInitialValue:function(){return this.element.fragment?this.element.fragment.toString():""},render:function(){var t=this.element.node
t.addEventListener("change",e,!1),this.root.lazy||(t.addEventListener("input",e,!1),t.attachEvent&&t.addEventListener("keyup",e,!1))},unrender:function(){var t=this.element.node
t.removeEventListener("change",e,!1),t.removeEventListener("input",e,!1),t.removeEventListener("keyup",e,!1)},getValue:function(){return this.element.node.innerHTML}})
return n}(ki,Si),Ti=function(){var t={}
return function(e,n,r){var i=e+n+r
return t[i]||(t[i]=[])}}(),Ai=function(t,e,n,r,i){var o=n.extend({name:"checked",init:function(){this.siblings=r(this.root._guid,"radio",this.element.getAttribute("name")),this.siblings.push(this)},render:function(){var t=this.element.node
t.addEventListener("change",i,!1),t.attachEvent&&t.addEventListener("click",i,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",i,!1),t.removeEventListener("click",i,!1)},handleChange:function(){t.start(this.root),this.siblings.forEach(function(t){t.root.viewmodel.set(t.keypath,t.getValue())}),t.end()},getValue:function(){return this.element.node.checked},unbind:function(){e(this.siblings,this)}})
return o}(_,p,ki,Ti,Si),Ni=function(t,e,n,r){var i=e.extend({name:"name",init:function(){this.siblings=r(this.root._guid,"radioname",this.keypath),this.siblings.push(this),this.radioName=!0,this.attribute.twoway=!0},getInitialValue:function(){return this.element.getAttribute("checked")?this.element.getAttribute("value"):void 0},render:function(){var t=this.element.node
t.name="{{"+this.keypath+"}}",t.checked=this.root.viewmodel.get(this.keypath)==this.element.getAttribute("value"),t.addEventListener("change",n,!1),t.attachEvent&&t.addEventListener("click",n,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",n,!1),t.removeEventListener("click",n,!1)},getValue:function(){var t=this.element.node
return t._ractive?t._ractive.value:t.value},handleChange:function(){this.element.node.checked&&e.prototype.handleChange.call(this)},rebound:function(t,n,r,i){var o
e.prototype.rebound.call(this,t,n,r,i),(o=this.element.node)&&(o.name="{{"+this.keypath+"}}")},unbind:function(){t(this.siblings,this)}})
return i}(p,ki,Si,Ti),Li=function(t,e,n,r,i){function o(t){return t.isChecked}function a(t){return t.element.getAttribute("value")}var s=n.extend({name:"name",getInitialValue:function(){return this.noInitialValue=!0,[]},init:function(){var e,n,i
this.checkboxName=!0,this.siblings=r(this.root._guid,"checkboxes",this.keypath),this.siblings.push(this),this.noInitialValue&&(this.siblings.noInitialValue=!0),i=this.siblings.noInitialValue,e=this.root.viewmodel.get(this.keypath),n=this.element.getAttribute("value"),i?(this.isChecked=this.element.getAttribute("checked"),this.isChecked&&e.push(n)):this.isChecked=t(e)?-1!==e.indexOf(n):e===n},unbind:function(){e(this.siblings,this)},render:function(){var t=this.element.node
t.name="{{"+this.keypath+"}}",t.checked=this.isChecked,t.addEventListener("change",i,!1),t.attachEvent&&t.addEventListener("click",i,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",i,!1),t.removeEventListener("click",i,!1)},changed:function(){var t=!!this.isChecked
return this.isChecked=this.element.node.checked,this.isChecked===t},handleChange:function(){this.isChecked=this.element.node.checked,n.prototype.handleChange.call(this)},getValue:function(){return this.siblings.filter(o).map(a)}})
return s}(s,p,ki,Ti,Si),Ci=function(t,e){var n=t.extend({name:"checked",render:function(){var t=this.element.node
t.addEventListener("change",e,!1),t.attachEvent&&t.addEventListener("click",e,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",e,!1),t.removeEventListener("click",e,!1)},getValue:function(){return this.element.node.checked}})
return n}(ki,Si),Ri=function(t,e,n){var r=e.extend({getInitialValue:function(){var t,e,n,r,i=this.element.options
if(void 0===this.element.getAttribute("value")&&(e=t=i.length,t)){for(;e--;)if(i[e].getAttribute("selected")){n=i[e].getAttribute("value"),r=!0
break}if(!r)for(;++e<t;)if(!i[e].getAttribute("disabled")){n=i[e].getAttribute("value")
break}return void 0!==n&&(this.element.attributes.value.value=n),n}},render:function(){this.element.node.addEventListener("change",n,!1)},unrender:function(){this.element.node.removeEventListener("change",n,!1)},setValue:function(e){t.addViewmodel(this.root.viewmodel),this.root.viewmodel.set(this.keypath,e)},getValue:function(){var t,e,n,r,i
for(t=this.element.node.options,n=t.length,e=0;n>e;e+=1)if(r=t[e],t[e].selected)return i=r._ractive?r._ractive.value:r.value},forceUpdate:function(){var e=this,n=this.getValue()
void 0!==n&&(this.attribute.locked=!0,t.addViewmodel(this.root.viewmodel),t.scheduleTask(function(){return e.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,n))}})
return r}(_,ki,Si),ji=function(t){return function(e,n){var r
if(!t(e)||!t(n))return!1
if(e.length!==n.length)return!1
for(r=e.length;r--;)if(e[r]!==n[r])return!1
return!0}}(s),Ii=function(t,e,n,r){var i=n.extend({getInitialValue:function(){return this.element.options.filter(function(t){return t.getAttribute("selected")}).map(function(t){return t.getAttribute("value")})},render:function(){var t
this.element.node.addEventListener("change",r,!1),t=this.root.viewmodel.get(this.keypath),void 0===t&&this.handleChange()},unrender:function(){this.element.node.removeEventListener("change",r,!1)},setValue:function(){throw new Error("TODO not implemented yet")},getValue:function(){var t,e,n,r,i,o
for(t=[],e=this.element.node.options,r=e.length,n=0;r>n;n+=1)i=e[n],i.selected&&(o=i._ractive?i._ractive.value:i.value,t.push(o))
return t},handleChange:function(){var t,r,i
return t=this.attribute,r=t.value,i=this.getValue(),void 0!==r&&e(i,r)||n.prototype.handleChange.call(this),this},forceUpdate:function(){var e=this,n=this.getValue()
void 0!==n&&(this.attribute.locked=!0,t.addViewmodel(this.root.viewmodel),t.scheduleTask(function(){return e.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,n))},updateModel:function(){void 0!==this.attribute.value&&this.attribute.value.length||this.root.viewmodel.set(this.keypath,this.initialValue)}})
return i}(_,ji,Ri,Si),Pi=function(t,e){var n=t.extend({render:function(){this.element.node.addEventListener("change",e,!1)},unrender:function(){this.element.node.removeEventListener("change",e,!1)},getValue:function(){return this.element.node.files}})
return n}(ki,Si),Mi=function(t,e){function n(){var t
e.call(this),t=this._ractive.root.viewmodel.get(this._ractive.binding.keypath,o),this.value=void 0==t?"":t}var r,i,o
return o={evaluateWrapped:!0},i=t.extend({getInitialValue:function(){return""},getValue:function(){return this.element.node.value},render:function(){var t=this.element.node
t.addEventListener("change",e,!1),this.root.lazy||(t.addEventListener("input",e,!1),t.attachEvent&&t.addEventListener("keyup",e,!1)),t.addEventListener("blur",n,!1)},unrender:function(){var t=this.element.node
t.removeEventListener("change",e,!1),t.removeEventListener("input",e,!1),t.removeEventListener("keyup",e,!1),t.removeEventListener("blur",n,!1)}}),r=i}(ki,Si),Fi=function(t){return t.extend({getInitialValue:function(){return void 0},getValue:function(){var t=parseFloat(this.element.node.value)
return isNaN(t)?void 0:t}})}(Mi),Bi=function(t,e,n,r,i,o,a,s,u,c,h){function l(t){return t&&t.isBindable}var f
return f=function(f){var d,p,g,v,m=f.attributes
return f.binding&&(f.binding.teardown(),f.binding=null),f.getAttribute("contenteditable")&&l(m.value)?p=e:"input"===f.name?(d=f.getAttribute("type"),"radio"===d||"checkbox"===d?(g=l(m.name),v=l(m.checked),g&&v&&t.error({message:"badRadioInputBinding"}),g?p="radio"===d?r:i:v&&(p="radio"===d?n:o)):"file"===d&&l(m.value)?p=u:l(m.value)&&(p="number"===d||"range"===d?c:h)):"select"===f.name&&l(m.value)?p=f.getAttribute("multiple")?s:a:"textarea"===f.name&&l(m.value)&&(p=h),p?new p(f):void 0}}(Zn,Oi,Ai,Ni,Li,Ci,Ri,Ii,Pi,Fi,Mi),Di=function(){var t=this.getAction()
t&&!this.hasListener?this.listen():!t&&this.hasListener&&this.unrender()},Ui=function(t){return function(e){t(this.root,this.getAction(),{event:e})}}(d),Wi=function(){return this.action.toString().trim()},qi=function(t,e,n,r,i,o,a){function s(t){var e,n,r
if(e=this.root,"function"!=typeof e[this.method])throw new Error('Attempted to call a non-existent method ("'+this.method+'")')
n=this.args.map(function(n){var r,i,o
if(!n)return void 0
if(n.indexRef)return n.value
if(n.eventObject){if(r=t,i=n.refinements.length)for(o=0;i>o;o+=1)r=r[n.refinements[o]]}else r=e.get(n.keypath)
return r}),r=this.fn.apply(null,n),e[this.method].apply(e,r)}function u(t){o(this.root,this.getAction(),{event:t,args:this.params})}function c(t){var e=this.dynamicParams.getValue(f)
"string"==typeof e&&(e=e.substr(1,e.length-2)),o(this.root,this.getAction(),{event:t,args:e})}var h,l,f={args:!0},d=/^event(?:\.(.+))?/
return i.push(function(){l=i.Fragment}),h=function(i,o,h){var f,p,g,v,m,y=this
y.element=i,y.root=i.root,y.name=o,-1!==o.indexOf("*")&&(a.error({debug:this.root.debug,message:"noElementProxyEventWildcards",args:{element:i.tagName,event:o}}),this.invalid=!0),h.m?(y.method=h.m,y.args=p=[],y.unresolved=[],y.refs=h.a.r,y.fn=e(h.a.s,y.refs.length),m=i.parentFragment,g=m.indexRefs,v=y.root,h.a.r.forEach(function(e,i){var o,a,s,u
return g&&void 0!==(o=g[e])?void(p[i]={indexRef:e,value:o}):(s=d.exec(e))?void(p[i]={eventObject:!0,refinements:s[1]?s[1].split("."):[]}):(a=n(v,e,m))?void(p[i]={keypath:a}):(p[i]=null,u=new r(v,e,m,function(e){y.resolve(i,e),t(y.unresolved,u)}),void y.unresolved.push(u))}),this.fire=s):(f=h.n||h,"string"!=typeof f&&(f=new l({template:f,root:this.root,owner:this})),this.action=f,h.d?(this.dynamicParams=new l({template:h.d,root:this.root,owner:this.element}),this.fire=c):h.a&&(this.params=h.a,this.fire=u))}}(p,tr,w,Yn,o,d,Zn),Vi=function(t){var e,n
e=this._ractive,n=e.events[t.type],n.fire({node:this,original:t,index:e.index,keypath:e.keypath,context:e.root.get(e.keypath)})},Ki=function(t,e,n){function r(t){return o[t]||(o[t]=function(e){var n=e.node._ractive
e.index=n.index,e.keypath=n.keypath,e.context=n.root.get(n.keypath),n.events[t].fire(e)}),o[t]}var i,o={}
return i=function(){var i,o=this.name
this.invalid||((i=t.registries.events.find(this.root,o))?this.custom=i(this.node,r(o)):("on"+o in this.node||window&&"on"+o in window||n.error({debug:this.root.debug,message:"missingPlugin",args:{plugin:"event",name:o}}),this.node.addEventListener(o,e,!1)),this.hasListener=!0)}}($e,Vi,Zn),zi=function(t){return function(e,n,r,i){return this.method?void this.args.forEach(function(o){o.indexRef&&o.indexRef===e&&(o.value=n),o.keypath&&(i=t(o.keypath,r,i))&&(o.keypath=i)}):("string"!=typeof this.action&&this.action.rebind(e,n,r,i),void(this.dynamicParams&&this.dynamicParams.rebind(e,n,r,i)))}}(Xn),Hi=function(){this.node=this.element.node,this.node._ractive.events[this.name]=this,(this.method||this.getAction())&&this.listen()},$i=function(t,e){this.args[t]={keypath:e}},Gi=function(){function t(t){t.teardown()}var e
return e=function(){return this.method?void this.unresolved.forEach(t):("string"!=typeof this.action&&this.action.unbind(),void(this.dynamicParams&&this.dynamicParams.unbind()))}}(),Ji=function(t){return function(){this.custom?this.custom.teardown():this.node.removeEventListener(this.name,t,!1),this.hasListener=!1}}(Vi),Yi=function(t,e,n,r,i,o,a,s,u,c){var h=function(t,e,n){this.init(t,e,n)}
return h.prototype={bubble:t,fire:e,getAction:n,init:r,listen:i,rebind:o,render:a,resolve:s,unbind:u,unrender:c},h}(Di,Ui,Wi,qi,Ki,zi,Hi,$i,Gi,Ji),Qi=function(t){return function(e,n){var r,i,o,a,s=[]
for(i in n)if(n.hasOwnProperty(i))for(o=i.split("-"),r=o.length;r--;)a=new t(e,o[r],n[i]),s.push(a)
return s}}(Yi),Xi=function(t,e,n){var r,i,o
return e.push(function(){r=e.Fragment}),i={args:!0},o=function(e,o){var a,s,u,c=this
c.element=e,c.root=a=e.root,s=o.n||o,"string"!=typeof s&&(u=new r({template:s,root:a,owner:e}),s=u.toString(),u.unbind()),o.a?c.params=o.a:o.d&&(c.fragment=new r({template:o.d,root:a,owner:e}),c.params=c.fragment.getValue(i),c.fragment.bubble=function(){this.dirtyArgs=this.dirtyValue=!0,c.params=this.getValue(i),c.ready&&c.update()}),c.fn=n.registries.decorators.find(a,s),c.fn||t.error({debug:a.debug,message:"missingPlugin",args:{plugin:"decorator",name:s}})},o.prototype={init:function(){var t,e,n,r=this
if(t=r.element.node,r.params?(n=[t].concat(r.params),e=r.fn.apply(r.root,n)):e=r.fn.call(r.root,t),!e||!e.teardown)throw new Error("Decorator definition must return an object with a teardown method")
r.actual=e,r.ready=!0},update:function(){this.actual.update?this.actual.update.apply(this.root,this.params):(this.actual.teardown(!0),this.init())},rebind:function(t,e,n,r){this.fragment&&this.fragment.rebind(t,e,n,r)},teardown:function(t){this.actual.teardown(),!t&&this.fragment&&this.fragment.unbind()}},o}(Zn,o,$e),Zi=function(t){function e(t,e){for(var n=t.length;n--;)if(t[n]==e)return!0}var n
return n=function(n){var r,i,o,a,s
r=n.node,r&&(a=t(r.options),i=n.getAttribute("value"),o=n.getAttribute("multiple"),void 0!==i?(a.forEach(function(t){var n,r
n=t._ractive?t._ractive.value:t.value,r=o?e(i,n):i==n,r&&(s=!0),t.selected=r}),s||(a[0]&&(a[0].selected=!0),n.binding&&n.binding.forceUpdate())):n.binding&&n.binding.forceUpdate())}}(jr),to=function(t,e){return function(){var n=this
this.dirty||(this.dirty=!0,t.scheduleTask(function(){e(n),n.dirty=!1})),this.parentFragment.bubble()}}(_,Zi),eo=function(t){do if("select"===t.name)return t
while(t=t.parent)},no=function(t){return function(e,n){e.select=t(e.parent),e.select&&(e.select.options.push(e),n.a||(n.a={}),n.a.value||n.a.hasOwnProperty("disabled")||(n.a.value=n.f),"selected"in n.a&&void 0!==e.select.getAttribute("value")&&delete n.a.selected)}}(eo),ro=function(t,e,n,r,i,o,a,s,u){var c
return u.push(function(){c=u.Fragment}),function(u){var h,l,f,d,p
this.type=t.ELEMENT,h=this.parentFragment=u.parentFragment,l=this.template=u.template,this.parent=u.pElement||h.pElement,this.root=f=h.root,this.index=u.index,this.name=e(l.e),"option"===this.name&&s(this,l),"select"===this.name&&(this.options=[],this.bubble=a),this.attributes=n(this,l.a),l.f&&(this.fragment=new c({template:l.f,root:f,owner:this,pElement:this})),f.twoway&&(d=r(this,l.a))&&(this.binding=d,p=this.root._twowayBindings[d.keypath]||(this.root._twowayBindings[d.keypath]=[]),p.push(d)),l.v&&(this.eventHandlers=i(this,l.v)),l.o&&(this.decorator=new o(this,l.o)),this.intro=l.t0||l.t1,this.outro=l.t0||l.t2}}(K,Yr,_i,Bi,Qi,Xi,to,no,o),io=function(t){return function(e,n){return e===n||t(e,n)}}(Qn),oo=function(t,e){return function(n,r,i,o){var a=n[r]
a&&!t(a,o)&&t(a,i)&&(n[r]=e(a,i,o))}}(io,Xn),ao=function(t){return function(e,n,r,i){function o(t){t.rebind(e,n,r,i)}var a,s,u,c
if(this.attributes&&this.attributes.forEach(o),this.eventHandlers&&this.eventHandlers.forEach(o),this.decorator&&o(this.decorator),this.fragment&&o(this.fragment),u=this.liveQueries)for(c=this.root,a=u.length;a--;)u[a]._makeDirty()
this.node&&(s=this.node._ractive)&&(t(s,"keypath",r,i),void 0!=e&&(s.index[e]=n))}}(oo),so=function(t){var e;(t.attributes.width||t.attributes.height)&&t.node.addEventListener("load",e=function(){var n=t.getAttribute("width"),r=t.getAttribute("height")
void 0!==n&&t.node.setAttribute("width",n),void 0!==r&&t.node.setAttribute("height",r),t.node.removeEventListener("load",e,!1)},!1)},uo=function(t,e,n){var r,i={}
return n.push(function(){r=n.Fragment}),function(n,o,a){var s,u,c,h=this
return h.element=n,h.root=s=n.root,h.isIntro=a,u=o.n||o,"string"!=typeof u&&(c=new r({template:u,root:s,owner:n}),u=c.toString(),c.unbind()),h.name=u,o.a?h.params=o.a:o.d&&(c=new r({template:o.d,root:s,owner:n}),h.params=c.getValue(i),c.unbind()),h._fn=e.registries.transitions.find(s,u),h._fn?void 0:void t.error({debug:s.debug,message:"missingPlugin",args:{plugin:"transition",name:u}})}}(Zn,$e,o),co=function(t){return t.replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()})},ho=function(t,e,n,r){var i,o,a
return t?(o={},a=n("div").style,i=function(t){var n,i,s
if(t=r(t),!o[t])if(void 0!==a[t])o[t]=t
else for(s=t.charAt(0).toUpperCase()+t.substring(1),n=e.length;n--;)if(i=e[n],void 0!==a[i+s]){o[t]=i+s
break}return o[t]}):i=null,i}(A,I,T,co),lo=function(t,e,n,r){var i,o
return e?(o=window.getComputedStyle||t.getComputedStyle,i=function(t){var e,i,a,s,u
if(e=o(this.node),"string"==typeof t)return u=e[r(t)],"0px"===u&&(u=0),u
if(!n(t))throw new Error("Transition$getStyle must be passed a string, or an array of strings representing CSS properties")
for(i={},a=t.length;a--;)s=t[a],u=e[r(s)],"0px"===u&&(u=0),i[s]=u
return i}):i=null,i}(Ee,A,s,ho),fo=function(t){return function(e,n){var r
if("string"==typeof e)this.node.style[t(e)]=n
else for(r in e)e.hasOwnProperty(r)&&(this.node.style[t(r)]=e[r])
return this}}(ho),po=function(t,e,n){function r(t){return t}var i,o=function(i){var o
this.duration=i.duration,this.step=i.step,this.complete=i.complete,"string"==typeof i.easing?(o=i.root.easing[i.easing],o||(t('Missing easing function ("'+i.easing+'"). You may need to download a plugin from [TODO]'),o=r)):o="function"==typeof i.easing?i.easing:r,this.easing=o,this.start=e(),this.end=this.start+this.duration,this.running=!0,n.add(this)}
return o.prototype={tick:function(t){var e,n
return this.running?t>this.end?(this.step&&this.step(1),this.complete&&this.complete(1),!1):(e=t-this.start,n=this.easing(e/this.duration),this.step&&this.step(n),!0):!1},stop:function(){this.abort&&this.abort(),this.running=!1}},i=o}(B,M,F),go=function(t){var e=new RegExp("^-(?:"+t.join("|")+")-")
return function(t){return t.replace(e,"")}}(I),vo=function(t){var e=new RegExp("^(?:"+t.join("|")+")([A-Z])")
return function(t){var n
return t?(e.test(t)&&(t="-"+t),n=t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})):""}}(I),mo=function(t,e,n,r,i,o,a,s,u){var c,h,l,f,d,p,g,v,m={},y={}
return t?(h=n("div").style,function(){void 0!==h.transition?(l="transition",f="transitionend",d=!0):void 0!==h.webkitTransition?(l="webkitTransition",f="webkitTransitionEnd",d=!0):d=!1}(),l&&(p=l+"Duration",g=l+"Property",v=l+"TimingFunction"),c=function(t,n,c,h,l){setTimeout(function(){var b,w,E,_,x
_=function(){w&&E&&(t.root.fire(t.name+":end",t.node,t.isIntro),l())},b=(t.node.namespaceURI||"")+t.node.tagName,t.node.style[g]=h.map(a).map(u).join(","),t.node.style[v]=u(c.easing||"linear"),t.node.style[p]=c.duration/1e3+"s",x=function(e){var n
n=h.indexOf(r(s(e.propertyName))),-1!==n&&h.splice(n,1),h.length||(t.node.removeEventListener(f,x,!1),E=!0,_())},t.node.addEventListener(f,x,!1),setTimeout(function(){for(var s,u,l,p,g,v=h.length,k=[];v--;)p=h[v],s=b+p,d&&!y[s]&&(t.node.style[a(p)]=n[p],m[s]||(u=t.getStyle(p),m[s]=t.getStyle(p)!=n[p],y[s]=!m[s],y[s]&&(t.node.style[a(p)]=u))),(!d||y[s])&&(void 0===u&&(u=t.getStyle(p)),l=h.indexOf(p),-1===l?e("Something very strange happened with transitions. If you see this message, please let @RactiveJS know. Thanks!"):h.splice(l,1),g=/[^\d]*$/.exec(n[p])[0],k.push({name:a(p),interpolator:i(parseFloat(u),parseFloat(n[p])),suffix:g}))
k.length?new o({root:t.root,duration:c.duration,easing:r(c.easing||""),step:function(e){var n,r
for(r=k.length;r--;)n=k[r],t.node.style[n.name]=n.interpolator(e)+n.suffix},complete:function(){w=!0,_()}}):w=!0,h.length||(t.node.removeEventListener(f,x,!1),E=!0,_())},0)},c.delay||0)}):c=null,c}(A,B,T,co,Ge,po,ho,go,vo),yo=function(t){function e(){u.hidden=document[i]}function n(){u.hidden=!0}function r(){u.hidden=!1}var i,o,a,s,u
if("undefined"!=typeof document){if(i="hidden",u={},i in document)a=""
else for(s=t.length;s--;)o=t[s],i=o+"Hidden",i in document&&(a=o)
void 0!==a?(document.addEventListener(a+"visibilitychange",e),e()):("onfocusout"in document?(document.addEventListener("focusout",n),document.addEventListener("focusin",r)):(window.addEventListener("pagehide",n),window.addEventListener("blur",n),window.addEventListener("pageshow",r),window.addEventListener("focus",r)),u.hidden=!1)}return u}(I),bo=function(t,e,n,r,i,o,a){var s,u,c
return e?(u=window.getComputedStyle||t.getComputedStyle,s=function(t,e,s,h){var l,f=this
if(a.hidden)return this.setStyle(t,e),c||(c=r.resolve())
"string"==typeof t?(l={},l[t]=e):(l=t,h=s,s=e),s||(n('The "'+f.name+'" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340'),s=f,h=f.complete)
var d=new r(function(t){var e,n,r,a,c,h,d
if(!s.duration)return f.setStyle(l),void t()
for(e=Object.keys(l),n=[],r=u(f.node),c={},h=e.length;h--;)d=e[h],a=r[i(d)],"0px"===a&&(a=0),a!=l[d]&&(n.push(d),f.node.style[i(d)]=a)
return n.length?void o(f,l,s,n,t):void t()})
return h&&(n("t.animateStyle returns a Promise as of 0.4.0. Transition authors should do t.animateStyle(...).then(callback)"),d.then(h)),d}):s=null,s}(Ee,A,B,g,ho,mo,yo),wo=function(t,e){var n
for(n in e)!e.hasOwnProperty(n)||n in t||(t[n]=e[n])
return t},Eo=function(t){return function(e,n){return"number"==typeof e?e={duration:e}:"string"==typeof e?e="slow"===e?{duration:600}:"fast"===e?{duration:200}:{duration:400}:e||(e={}),t(e,n)}}(wo),_o=function(){function t(t,e){e?t.setAttribute("style",e):(t.getAttribute("style"),t.removeAttribute("style"))}var e
return e=function(){var e,n,r=this
return e=r.node=r.element.node,n=e.getAttribute("style"),r.complete=function(i){!i&&r.isIntro&&t(e,n),e._ractive.transition=null,r._manager.remove(r)},r._fn?void r._fn.apply(r.root,[r].concat(r.params)):void r.complete()}}(),xo=function(t,e,n,r,i,o,a){var s,u
return a.push(function(){s=a.Fragment}),u=function(t,e,n){this.init(t,e,n)},u.prototype={init:t,start:o,getStyle:e,setStyle:n,animateStyle:r,processParams:i},u}(uo,lo,fo,bo,Eo,_o,o),ko=function(t,e,n,r,i,o,a,s,u,c,h){function l(e){var n,r,i
return n=(r=e.getAttribute("xmlns"))?r:"svg"===e.name?t.svg:(i=e.parent)?"foreignObject"===i.name?t.html:i.node.namespaceURI:e.root.el.namespaceURI}function f(t){var n,r,i
if(t.select&&(r=t.select.getAttribute("value"),void 0!==r))if(n=t.getAttribute("value"),t.select.node.multiple&&e(r)){for(i=r.length;i--;)if(n==r[i]){t.node.selected=!0
break}}else t.node.selected=n==r}function d(t){var e,n,r,i,o
e=t.root
do for(n=e._liveQueries,r=n.length;r--;)i=n[r],o=n["_"+i],o._test(t)&&(t.liveQueries||(t.liveQueries=[])).push(o)
while(e=e._parent)}var p,g,v
return g=function(){var t=this.node,e=this.fragment.toString(!1)
if(t.styleSheet)t.styleSheet.cssText=e
else{for(;t.hasChildNodes();)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(e))}},v=function(){this.node.type&&"text/javascript"!==this.node.type||n("Script tag was updated. This does not cause the code to be re-evaluated!"),this.node.text=this.fragment.toString(!1)},p=function(){var t,e,n=this,p=this.root
if(t=l(this),e=this.node=i(this.name,t),p.constructor.css&&this.parentFragment.getNode()===p.el&&this.node.setAttribute("data-rvcguid",p.constructor._guid),o(this.node,"_ractive",{value:{proxy:this,keypath:u(this.parentFragment),index:this.parentFragment.indexRefs,events:r(null),root:p}}),this.attributes.forEach(function(t){return t.render(e)}),this.fragment&&("script"===this.name?(this.bubble=v,this.node.text=this.fragment.toString(!1),this.fragment.unrender=a):"style"===this.name?(this.bubble=g,this.bubble(),this.fragment.unrender=a):this.binding&&this.getAttribute("contenteditable")?this.fragment.unrender=a:this.node.appendChild(this.fragment.render())),this.eventHandlers&&this.eventHandlers.forEach(function(t){return t.render()}),this.binding&&(this.binding.render(),this.node._ractive.binding=this.binding),"img"===this.name&&c(this),this.decorator&&this.decorator.fn&&s.scheduleTask(function(){n.decorator.init()}),p.transitionsEnabled&&this.intro){var m=new h(this,this.intro,!0)
s.registerTransition(m),s.scheduleTask(function(){return m.start()})}return"option"===this.name&&f(this),this.node.autofocus&&s.scheduleTask(function(){return n.node.focus()}),d(this),this.node}}(O,s,B,z,T,N,Ke,_,m,so,xo),So=function(t,e,n){function r(t){var n,r,i
if(n=t.getAttribute("value"),void 0===n||!t.select)return!1
if(r=t.select.getAttribute("value"),r==n)return!0
if(t.select.getAttribute("multiple")&&e(r))for(i=r.length;i--;)if(r[i]==n)return!0}function i(t){var e,n,r,i
return e=t.attributes,n=e.type,r=e.value,i=e.name,n&&"radio"===n.value&&r&&i.interpolator&&r.value===i.interpolator.value?!0:void 0}function o(t){var e=t.toString()
return e?" "+e:""}var a
return a=function(){var e,a
return e="<"+(this.template.y?"!DOCTYPE":this.template.e),e+=this.attributes.map(o).join(""),"option"===this.name&&r(this)&&(e+=" selected"),"input"===this.name&&i(this)&&(e+=" checked"),e+=">","textarea"===this.name&&void 0!==this.getAttribute("value")?e+=n(this.getAttribute("value")):void 0!==this.getAttribute("contenteditable")&&(e+=this.getAttribute("value")),this.fragment&&(a="script"!==this.name&&"style"!==this.name,e+=this.fragment.toString(a)),t.test(this.template.e)||(e+="</"+this.template.e+">"),e}}(Se,s,Kn),Oo=function(t){return function(e){e.select&&t(e.select.options,e)}}(p),To=function(t){function e(t){t.unbind()}var n
return n=function(){this.fragment&&this.fragment.unbind(),this.binding&&this.binding.unbind(),this.eventHandlers&&this.eventHandlers.forEach(e),"option"===this.name&&t(this),this.attributes.forEach(e)}}(Oo),Ao=function(t,e){function n(t){var e,n,r
for(r=t.liveQueries.length;r--;)e=t.liveQueries[r],n=e.selector,e._remove(t.node)}var r
return r=function(r){var i,o
if("option"===this.name?this.detach():r&&t.detachWhenReady(this),this.fragment&&this.fragment.unrender(!1),(i=this.binding)&&(this.binding.unrender(),this.node._ractive.binding=null,o=this.root._twowayBindings[i.keypath],o.splice(o.indexOf(i),1)),this.eventHandlers&&this.eventHandlers.forEach(function(t){return t.unrender()}),this.decorator&&this.decorator.teardown(),this.root.transitionsEnabled&&this.outro){var a=new e(this,this.outro,!1)
t.registerTransition(a),t.scheduleTask(function(){return a.start()})}this.liveQueries&&n(this),this.node.id&&delete this.root.nodes[this.node.id]}}(_,xo),No=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p){var g=function(t){this.init(t)}
return g.prototype={bubble:t,detach:e,find:n,findAll:r,findAllComponents:i,findComponent:o,findNextNode:a,firstNode:s,getAttribute:u,init:c,rebind:h,render:l,toString:f,unbind:d,unrender:p},g}(Wr,qr,Vr,Kr,zr,Hr,$r,Gr,Jr,ro,ao,ko,So,To,Ao),Lo=function(){function t(t,e){var n=r.exec(e)[0]
return null===t||n.length<t.length?n:t}var e,n=/^\s*$/,r=/^\s*/
return e=function(e){var r,i,o,a
return r=e.split("\n"),i=r[0],void 0!==i&&n.test(i)&&r.shift(),o=r[r.length-1],void 0!==o&&n.test(o)&&r.pop(),a=r.reduce(t,null),a&&(e=r.map(function(t){return t.replace(a,"")}).join("\n")),e}}(),Co=function(t,e,n,r){function i(r,i){var o=e.registries.partials,a=o.findInstance(r,i)
if(a){var s,u=a.partials[i]
if("function"==typeof u&&(s=u.bind(a),s.isOwner=a.partials.hasOwnProperty(i),u=s(a.data,n)),!u)return void t.warn({debug:r.debug,message:"noRegistryFunctionReturn",args:{registry:"partial",name:i}})
if(!n.isParsed(u)){var c=n.parse(u,n.getParseOptions(a))
c.p&&t.warn({debug:r.debug,message:"noNestedPartials",args:{rname:i}})
var h=s?a:o.findOwner(a,i)
h.partials[i]=u=c.t}return s&&(u._fn=s),u.v?u.t:u}}var o
return o=function(e,o){var a
if(a=i(e,o))return a
if(a=n.fromId(o,{noThrow:!0})){a=r(a)
var s=n.parse(a,n.getParseOptions(e))
return e.partials[o]=s.t}return t.error({debug:e.debug,message:"noTemplateForPartial",args:{name:o}}),[]}}(Zn,$e,Ue,Lo),Ro=function(t,e){var n
return e?n=t.split("\n").map(function(t,n){return n?e+t:t}).join("\n"):t},jo=function(t,e,n,r,i,o,a,s){var u,c
return r.push(function(){c=r.Fragment}),u=function(e){var n=this.parentFragment=e.parentFragment
this.type=t.PARTIAL,this.name=e.template.r,this.index=e.index,this.root=n.root,o.init(this,e),this.update()},u.prototype={bubble:function(){this.parentFragment.bubble()},firstNode:function(){return this.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},detach:function(){return this.fragment.detach()},render:function(){return this.update(),this.rendered=!0,this.fragment.render()},unrender:function(t){this.rendered&&(this.fragment.unrender(t),this.rendered=!1)},rebind:function(t,e,n,r){return this.fragment.rebind(t,e,n,r)},unbind:function(){this.fragment&&this.fragment.unbind()},toString:function(e){var r,i,o,a
return r=this.fragment.toString(e),i=this.parentFragment.items[this.index-1],i&&i.type===t.TEXT?(o=i.text.split("\n").pop(),(a=/^\s+$/.exec(o))?n(r,a[0]):r):r},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)},getValue:function(){return this.fragment.getValue()},resolve:o.resolve,setValue:function(t){this.value!==t&&(this.fragment&&this.rendered&&this.fragment.unrender(!0),this.fragment=null,this.value=t,this.rendered?i.addView(this):(this.update(),this.bubble()))},update:function(){var t,n,r,i
this.fragment||(t=this.name&&(a.registries.partials.findInstance(this.root,this.name)||s.fromId(this.name,{noThrow:!0}))?e(this.root,this.name):this.value?e(this.root,this.value):[],this.fragment=new c({template:t,root:this.root,owner:this,pElement:this.parentFragment.pElement}),this.rendered&&(r=this.parentFragment.getNode(),n=this.fragment.render(),i=this.parentFragment.findNextNode(this),r.insertBefore(n,i)))}},u}(K,Co,Ro,o,_,cr,$e,Ue),Io=function(t,e,n){var r
return n.push(function(){r=n.Ractive}),function i(n,r){var o,a=t.registries.components.findInstance(n,r)
if(a&&(o=a.components[r],!o._parent)){var s=o.bind(a)
if(s.isOwner=a.components.hasOwnProperty(r),o=s(a.data),!o)return void e.warn({debug:n.debug,message:"noRegistryFunctionReturn",args:{registry:"component",name:r}})
"string"==typeof o&&(o=i(n,o)),o._fn=s,a.components[r]=o}return o}}($e,Zn,o),Po=function(){return this.instance.fragment.detach()},Mo=function(t){return this.instance.fragment.find(t)},Fo=function(t,e){return this.instance.fragment.findAll(t,e)},Bo=function(t,e){e._test(this,!0),this.instance.fragment&&this.instance.fragment.findAllComponents(t,e)},Do=function(t){return t&&t!==this.name?this.instance.fragment?this.instance.fragment.findComponent(t):null:this.instance},Uo=function(){return this.parentFragment.findNextNode(this)},Wo=function(){return this.rendered?this.instance.fragment.firstNode():null},qo=function(t,e){var n,r
return e.push(function(){n=e.Fragment}),r=function(t,e,r){this.parentFragment=t.parentFragment,this.component=t,this.key=e,this.fragment=new n({template:r,root:t.root,owner:this}),this.value=this.fragment.getValue()},r.prototype={bubble:function(){this.dirty||(this.dirty=!0,t.addView(this))},update:function(){var e=this.fragment.getValue()
this.component.instance.viewmodel.set(this.key,e),t.addViewmodel(this.component.instance.viewmodel),this.value=e,this.dirty=!1},rebind:function(t,e,n,r){this.fragment.rebind(t,e,n,r)},unbind:function(){this.fragment.unbind()}},r}(_,o),Vo=function(t,e){var n=function(n,r,i,o){var a=this
this.root=n.root,this.parentFragment=n.parentFragment,this.ready=!1,this.hash=null,this.resolver=new t(this,i,function(t){a.binding||(a.binding=n.bindings[a.hash])?(n.bindings[a.hash]=null,a.binding.rebind(t),a.hash=t+"="+r,n.bindings[a.hash]):a.ready?e(n,n.root,t,r):o.push({childKeypath:r,parentKeypath:t}),a.value=n.root.viewmodel.get(t)})}
return n.prototype={rebind:function(t,e,n,r){this.resolver.rebind(t,e,n,r)},unbind:function(){this.resolver.unbind()}},n}(or,b),Ko=function(t,e,n,r,i){function o(o,a,s,u){var c,h,l,f,d,p
if(l=o.root,f=o.parentFragment,"string"==typeof s)return h=e(s),h?h.value:s
if(null===s)return!0
if(1===s.length&&s[0].t===t.INTERPOLATOR){if(s[0].r)return f.indexRefs&&void 0!==f.indexRefs[p=s[0].r]?(o.indexRefBindings[p]=a,f.indexRefs[p]):(d=n(l,s[0].r,f)||s[0].r,u.push({childKeypath:a,parentKeypath:d}),l.viewmodel.get(d))
if(s[0].rx)return c=new i(o,a,s[0].rx,u),o.complexParameters.push(c),c.ready=!0,c.value}return c=new r(o,a,s),o.complexParameters.push(c),c.value}var a
return a=function(t,e,n,r){var i,a,s={}
t.complexParameters=[]
for(i in n)n.hasOwnProperty(i)&&(a=o(t,i,n[i],r),(void 0!==a||void 0===e[i])&&(s[i]=a))
return s}}(K,Ce,w,qo,Vo),zo=function(t){return function(e,n,r,i){var o,a,s,u
return a=e.parentFragment,u=e.root,s={content:i||[]},n.defaults.el&&t.warn({debug:u.debug,message:"defaultElSpecified",args:{name:e.name}}),o=new n({el:null,append:!0,data:r,partials:s,magic:u.magic||n.defaults.magic,modifyArrays:u.modifyArrays,_parent:u,_component:e,adapt:u.adapt,"yield":{template:i,instance:u}})}}(Zn),Ho=function(t){return function(e,n){n.forEach(function(n){var r,i
t(e,e.root,n.parentKeypath,n.childKeypath),r=e.instance.viewmodel.get(n.childKeypath),i=e.root.viewmodel.get(n.parentKeypath),void 0!==r&&void 0===i&&e.root.viewmodel.set(n.parentKeypath,r)})}}(b),$o=function(t,e,n){function r(t,r,i,o){"string"!=typeof o&&n.error({debug:r.debug,message:"noComponentEventArguments"}),t.on(i,function(){var t,n
return arguments.length&&arguments[0].node&&(t=Array.prototype.shift.call(arguments)),n=Array.prototype.slice.call(arguments),e(r,o,{event:t,args:n}),!1})}var i,o
return t.push(function(){o=t.Fragment}),i=function(t,e){var n
for(n in e)e.hasOwnProperty(n)&&r(t.instance,t.root,n,e[n])}}(o,d,Zn),Go=function(t){var e,n
for(e=t.root;e;)(n=e._liveComponentQueries["_"+t.name])&&n.push(t.instance),e=e._parent},Jo=function(t,e,n,r,i,o,a){return function(s,u){var c,h,l,f
if(c=this.parentFragment=s.parentFragment,h=c.root,this.root=h,this.type=t.COMPONENT,this.name=s.template.e,this.index=s.index,this.indexRefBindings={},this.bindings=[],this.yielder=null,!u)throw new Error('Component "'+this.name+'" not found')
f=[],l=n(this,u.defaults.data||{},s.template.a,f),r(this,u,l,s.template.f),i(this,f),o(this,s.template.v),(s.template.t1||s.template.t2||s.template.o)&&e('The "intro", "outro" and "decorator" directives have no effect on components'),a(this)}}(K,B,Ko,zo,Ho,$o,Go),Yo=function(t,e){return function(n,r,i,o){function a(t){t.rebind(n,r,i,o)}var s,u,c=this.instance,h=c._parent
this.bindings.forEach(function(t){var n
t.root===h&&(n=e(t.keypath,i,o))&&t.rebind(n)}),this.complexParameters.forEach(a),this.yielder&&a(this.yielder),(s=this.indexRefBindings[n])&&(t.addViewmodel(c.viewmodel),c.viewmodel.set(s,r)),(u=this.root._liveComponentQueries["_"+this.name])&&u._makeDirty()}}(_,Xn),Qo=function(){var t=this.instance
return t.render(this.parentFragment.getNode()),this.rendered=!0,t.fragment.detach()},Xo=function(){return this.instance.fragment.toString()},Zo=function(){function t(t){t.unbind()}function e(t){var e,n
e=t.root
do(n=e._liveComponentQueries["_"+t.name])&&n._remove(t)
while(e=e._parent)}var n
return n=function(){this.complexParameters.forEach(t),this.bindings.forEach(t),e(this),this.instance.fragment.unbind()}}(),ta=function(t){return function(e){t(this.instance,"teardown"),this.shouldDestroy=e,this.instance.unrender()}}(d),ea=function(t,e,n,r,i,o,a,s,u,c,h,l,f){var d=function(t,e){this.init(t,e)}
return d.prototype={detach:t,find:e,findAll:n,findAllComponents:r,findComponent:i,findNextNode:o,firstNode:a,init:s,rebind:u,render:c,toString:h,unbind:l,unrender:f},d}(Po,Mo,Fo,Bo,Do,Uo,Wo,Jo,Yo,Qo,Xo,Zo,ta),na=function(t,e){var n=function(e){this.type=t.COMMENT,this.value=e.template.c}
return n.prototype={detach:e,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createComment(this.value)),this.node},toString:function(){return"<!--"+this.value+"-->"},unrender:function(t){t&&this.node.parentNode.removeChild(this.node)}},n}(K,Hn),ra=function(t){var e
t.push(function(){e=t.Fragment})
var n=function(t){var n,r
if(n=t.parentFragment.root,this.component=r=n.component,this.surrogateParent=t.parentFragment,this.parentFragment=r.parentFragment,r.yielder)throw new Error("A component template can only have one {{yield}} declaration at a time")
this.fragment=new e({owner:this,root:n.yield.instance,template:n.yield.template}),r.yielder=this}
return n.prototype={detach:function(){return this.fragment.detach()},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)},findNextNode:function(){return this.surrogateParent.findNextNode(this)},firstNode:function(){return this.fragment.firstNode()},getValue:function(t){return this.fragment.getValue(t)},render:function(){return this.fragment.render()},unbind:function(){this.fragment.unbind()},unrender:function(t){this.fragment.unrender(t),this.component.yielder=void 0},rebind:function(t,e,n,r){this.fragment.rebind(t,e,n,r)},toString:function(){return this.fragment.toString()}},n}(o),ia=function(t,e,n,r,i,o,a,s,u,c,h){return function(l){if("string"==typeof l.template)return new e(l)
switch(l.template.t){case t.INTERPOLATOR:return"yield"===l.template.r?new h(l):new n(l)
case t.SECTION:return new r(l)
case t.TRIPLE:return new i(l)
case t.ELEMENT:var f
return(f=s(l.parentFragment.root,l.template.e))?new u(l,f):new o(l)
case t.PARTIAL:return new a(l)
case t.COMMENT:return new c(l)
default:throw new Error("Something very strange happened. Please file an issue at https://github.com/ractivejs/ractive/issues. Thanks!")}}}(K,$n,hr,Tr,Ur,No,jo,Io,ea,na,ra),oa=function(t,e,n){return function(r){var i,o,a,s=this
if(this.owner=r.owner,i=this.parent=this.owner.parentFragment,this.root=r.root,this.pElement=r.pElement,this.context=r.context,this.owner.type===t.SECTION&&(this.index=r.index),i&&(o=i.indexRefs)){this.indexRefs=e(null)
for(a in o)this.indexRefs[a]=o[a]}this.priority=i?i.priority+1:1,r.indexRef&&(this.indexRefs||(this.indexRefs={}),this.indexRefs[r.indexRef]=r.index),"string"==typeof r.template?r.template=[r.template]:r.template||(r.template=[]),this.items=r.template.map(function(t,e){return n({parentFragment:s,pElement:r.pElement,template:t,index:e})}),this.value=this.argsList=null,this.dirtyArgs=this.dirtyValue=!0,this.bound=!0}}(K,z,ia),aa=function(t){return function(e,n,r,i){t(this,"context",r,i),this.indexRefs&&void 0!==this.indexRefs[e]&&(this.indexRefs[e]=n),this.items.forEach(function(t){t.rebind&&t.rebind(e,n,r,i)})}}(oo),sa=function(){var t
return 1===this.items.length?t=this.items[0].render():(t=document.createDocumentFragment(),this.items.forEach(function(e){t.appendChild(e.render())})),this.rendered=!0,t},ua=function(t){return this.items?this.items.map(function(e){return e.toString(t)}).join(""):""},ca=function(){function t(t){t.unbind&&t.unbind()}var e
return e=function(){this.bound&&(this.items.forEach(t),this.bound=!1)}}(),ha=function(t){if(!this.rendered)throw new Error("Attempted to unrender a fragment that was not rendered")
this.items.forEach(function(e){return e.unrender(t)}),this.rendered=!1},la=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g,v){var m=function(t){this.init(t)}
return m.prototype={bubble:t,detach:e,find:n,findAll:r,findAllComponents:i,findComponent:o,findNextNode:a,firstNode:s,getNode:u,getValue:c,init:h,rebind:l,render:f,toString:d,unbind:p,unrender:g},v.Fragment=m,m}(In,Pn,Mn,Fn,Bn,Dn,Un,Wn,qn,Vn,oa,aa,sa,ua,ca,ha,o),fa=function(t,e,n,r){var i=["template","partials","components","decorators","events"]
return function(o,a){var s,u,c,h,l
if("function"!=typeof o||a?o=o||{}:(a=o,o={}),"object"!=typeof o)throw new Error("The reset method takes either no arguments, or an object containing new data")
for((u=this.viewmodel.wrapped[""])&&u.reset?u.reset(o)===!1&&(this.data=o):this.data=o,c=r.reset(this),h=c.length;h--;)if(i.indexOf(c[h])>-1){l=!0
break}if(l){var f
this.viewmodel.mark(""),(f=this.component)&&(f.shouldDestroy=!0),this.unrender(),f&&(f.shouldDestroy=!1),this.fragment.template!==this.template&&(this.fragment.unbind(),this.fragment=new n({template:this.template,root:this,owner:this})),s=this.render(this.el,this.anchor)}else s=e.start(this,!0),this.viewmodel.mark(""),e.end()
return t(this,"reset",{args:[o]}),a&&s.then(a),s}}(d,_,la,$e),da=function(t,e){return function(n){var r,i
t.template.init(null,this,{template:n}),r=this.transitionsEnabled,this.transitionsEnabled=!1,(i=this.component)&&(i.shouldDestroy=!0),this.unrender(),i&&(i.shouldDestroy=!1),this.fragment.unbind(),this.fragment=new e({template:this.template,root:this,owner:this}),this.render(this.el,this.anchor),this.transitionsEnabled=r}}($e,la),pa=function(t){return t("reverse")}(Nn),ga=function(t,e,n,r){var i=/\*/
return function(o,a,s){var u,c,h=this
if(c=t.start(this,!0),e(o)){u=o,s=a
for(o in u)u.hasOwnProperty(o)&&(a=u[o],o=n(o),this.viewmodel.set(o,a))}else o=n(o),i.test(o)?r(this,o).forEach(function(t){h.viewmodel.set(t,a)}):this.viewmodel.set(o,a)
return t.end(),s&&c.then(s.bind(this)),c}}(_,u,j,yn),va=function(t){return t("shift")}(Nn),ma=function(t){return t("sort")}(Nn),ya=function(t){return t("splice")}(Nn),ba=function(t){return function(e,n){return t(this,e,void 0===n?-1:-n)}}(C),wa=function(t,e,n){return function(r){var i
return t(this,"teardown"),this.fragment.unbind(),this.viewmodel.teardown(),this.rendered&&this.el.__ractive_instances__&&e(this.el.__ractive_instances__,this),this.shouldDestroy=!0,i=this.rendered?this.unrender():n.resolve(),r&&i.then(r.bind(this)),i}}(d,p,g),Ea=function(t){return function(e,n){var r
return"string"!=typeof e&&t.errorOnly({debug:this.debug,messsage:"badArguments",arg:{arguments:e}}),r=this.get(e),this.set(e,!r,n)}}(Zn),_a=function(){return this.fragment.toString(!0)},xa=function(t,e,n,r,i){return function(){var o,a,s=this
if(!this.rendered)return r.warn({debug:this.debug,message:"ractive.unrender() was called on a Ractive instance that was not rendered"}),i.resolve()
for(o=e.start(this,!0),a=!this.component||this.component.shouldDestroy||this.shouldDestroy,this.constructor.css&&o.then(function(){n.remove(s.constructor)});this._animations[0];)this._animations[0].stop()
return this.fragment.unrender(a),this.rendered=!1,t(this.el.__ractive_instances__,this),e.end(),o}}(p,_,Rn,Zn,g),ka=function(t){return t("unshift")}(Nn),Sa=function(t,e){return function(n,r){var i
return"function"==typeof n?(r=n,n=""):n=n||"",i=e.start(this,!0),this.viewmodel.mark(n),e.end(),t(this,"update",{args:[n]}),r&&i.then(r.bind(this)),i}}(d,_),Oa=function(t,e){function n(r,i,o,a){var s,u,c,h,l,f,d=[]
if(s=r._twowayBindings[i],s&&(c=s.length))for(;c--;)h=s[c],(!h.radioName||h.element.node.checked)&&(h.checkboxName?d[h.keypath]||h.changed()||(d.push(h.keypath),d[h.keypath]=h):(l=h.attribute.value,f=h.getValue(),t(l,f)||e(l,f)||(o[i]=f)))
if(d.length&&d.forEach(function(e){var n,r,i
n=d[e],r=n.attribute.value,i=n.getValue(),t(r,i)||(o[e]=i)}),a&&(u=r.viewmodel.depsMap["default"][i]))for(c=u.length;c--;)n(r,u[c],o,a)}var r
return r=function(t,e){var r
return"string"!=typeof t&&(t="",e=!0),n(this,t,r={},e),this.set(r)}}(ji,y),Ta=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g,v,m,y,b,w,E,_,x,k,S,O,T,A,N,L,C){return{add:t,animate:e,detach:n,find:r,findAll:i,findAllComponents:o,findComponent:a,fire:s,get:u,insert:c,merge:h,observe:l,off:f,on:d,pop:p,push:g,render:v,reset:m,resetTemplate:y,reverse:b,set:w,shift:E,sort:_,splice:x,subtract:k,teardown:S,toggle:O,toHTML:T,unrender:A,unshift:N,update:L,updateModel:C}}(R,Ye,Qe,Xe,cn,hn,ln,fn,dn,gn,vn,_n,Sn,On,Ln,Cn,jn,fa,da,pa,ga,va,ma,ya,ba,wa,Ea,_a,xa,ka,Sa,Oa),Aa=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e,n
return e=16*Math.random()|0,n="x"==t?e:3&e|8,n.toString(16)})},Na=function(){var t=0
return function(){return"r-"+t++}}(),La=function(t,e,n,r){var i=t.root,o=t.keypath
return"sort"===n||"reverse"===n?void i.viewmodel.set(o,e):void(r&&i.viewmodel.splice(o,r))},Ca=function(t,e,n,r,i){var o,a,s,u=[],c=["pop","push","reverse","shift","sort","splice","unshift"]
return c.forEach(function(o){var a=function(){var e,a,s,u,c
for(e=n(this,o,Array.prototype.slice.call(arguments)),a=r(this,e),s=Array.prototype[o].apply(this,arguments),this._ractive.setting=!0,c=this._ractive.wrappers.length;c--;)u=this._ractive.wrappers[c],t.start(u.root),i(u,this,o,a),t.end()
return this._ractive.setting=!1,s}
e(u,o,{value:a})}),o={},o.__proto__?(a=function(t){t.__proto__=u},s=function(t){t.__proto__=Array.prototype}):(a=function(t){var n,r
for(n=c.length;n--;)r=c[n],e(t,r,{value:u[r],configurable:!0})},s=function(t){var e
for(e=c.length;e--;)delete t[c[e]]}),a.unpatch=s,a}(_,N,Tn,An,La),Ra=function(t,e,n){var r,i,o
return r={filter:function(t){return e(t)&&(!t._ractive||!t._ractive.setting)},wrap:function(t,e,n){return new i(t,e,n)}},i=function(e,r,i){this.root=e,this.value=r,this.keypath=i,r._ractive||(t(r,"_ractive",{value:{wrappers:[],instances:[],setting:!1},configurable:!0}),n(r)),r._ractive.instances[e._guid]||(r._ractive.instances[e._guid]=0,r._ractive.instances.push(e)),r._ractive.instances[e._guid]+=1,r._ractive.wrappers.push(this)},i.prototype={get:function(){return this.value},teardown:function(){var t,e,r,i,a
if(t=this.value,e=t._ractive,r=e.wrappers,i=e.instances,e.setting)return!1
if(a=r.indexOf(this),-1===a)throw new Error(o)
if(r.splice(a,1),r.length){if(i[this.root._guid]-=1,!i[this.root._guid]){if(a=i.indexOf(this.root),-1===a)throw new Error(o)
i.splice(a,1)}}else delete t._ractive,n.unpatch(this.value)}},o="Something went wrong in a rather interesting way",r}(N,s,Ca),ja=function(t,e){var n,r
return t&&(n={filter:function(n,r,i){return t.filter(n,r,i)&&e.filter(n)},wrap:function(t,e,n){return new r(t,e,n)}},r=function(n,r,i){this.value=r,this.magic=!0,this.magicWrapper=t.wrap(n,r,i),this.arrayWrapper=e.wrap(n,r,i)},r.prototype={get:function(){return this.value},teardown:function(){this.arrayWrapper.teardown(),this.magicWrapper.teardown()},reset:function(t){return this.magicWrapper.reset(t)}}),n}(k,Ra),Ia=function(t,e,n,r){function i(t,e){var n,r={}
if(!e)return t
e+="."
for(n in t)t.hasOwnProperty(n)&&(r[e+n]=t[n])
return r}function o(t){var e
return s[t]||(e=t?t+".":"",s[t]=function(n,r){var o
return"string"==typeof n?(o={},o[e+n]=r,o):"object"==typeof n?e?i(n,t):n:void 0}),s[t]}var a,s={}
return a=function(i,a){var s,u,c,h,l=this.ractive
for(s=l.adapt.length,u=0;s>u;u+=1){if(c=l.adapt[u],"string"==typeof c){var f=t.registries.adaptors.find(l,c)
if(!f)throw new Error('Missing adaptor "'+c+'"')
c=l.adapt[u]=f}if(c.filter(a,i,l))return h=this.wrapped[i]=c.wrap(l,a,i,o(i)),h.value=a,a}return l.magic?r.filter(a,i,l)?this.wrapped[i]=r.wrap(l,a,i):n.filter(a,i,l)&&(this.wrapped[i]=n.wrap(l,a,i)):l.modifyArrays&&e.filter(a,i,l)&&(this.wrapped[i]=e.wrap(l,a,i)),a}}($e,Ra,k,ja),Pa=function(t){var e,n,r,i,o=[""]
for(e=t.length;e--;)for(n=t[e],r=n.split(".");r.length>1;)r.pop(),i=r.join("."),-1===o.indexOf(i)&&o.push(i)
return o},Ma=function(){function t(t){var e,r,i,o,a,s=""
if(!n[t]){for(i=[];s.length<t;)s+=1
for(e=parseInt(s,2),o=function(t){return"1"===t},a=0;e>=a;a+=1){for(r=a.toString(2);r.length<t;)r="0"+r
i[a]=Array.prototype.map.call(r,o)}n[t]=i}return n[t]}var e,n={}
return e=function(e){var n,r,i,o
return n=e.split("."),r=t(n.length),i=function(t,e){return t?"*":n[e]},o=r.map(function(t){return t.map(i).join(".")})}}(),Fa=function(t){function e(e,i,o){var a
r(e,i),o||(a=t(i),a.forEach(function(t){n(e,t,i)}))}function n(t,e,i){var a,s,u
a=t.depsMap.patternObservers,s=a[e],s&&s.forEach(function(e){var a=o.exec(e)[0]
u=i?i+"."+a:a,r(t,u),n(t,e,u)})}function r(t,e){t.patternObservers.forEach(function(t){t.regex.test(e)&&t.update(e)})}var i,o=/[^\.]+$/
return i=e}(Ma),Ba=function(t,e){function n(t){t.update()}function r(t,e,n){var r,i;(r=o(t,e,n))&&(i=t.get(e),r.forEach(function(t){return t.setValue(i)}))}function i(t,e,n){function r(t){t.forEach(i),t.forEach(a)}function i(e){var r=o(t,e,n)
r&&u.push({keypath:e,deps:r})}function a(e){var i;(i=t.depsMap[n][e])&&r(i)}function s(e){var n=t.get(e.keypath)
e.deps.forEach(function(t){return t.setValue(n)})}var u=[]
r(e),u.forEach(s)}function o(t,e,n){var r=t.deps[n]
return r?r[e]:null}function a(t,e){e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)})}var s,u=["observers","default"]
return s=function(){var o,s,c,h,l,f=this,d=this,p=[],g={}
if(this.changes.length){h=function(t){var e;(e=d.deps.computed[t])&&a(c,e)},l=function(t){var e
h(t),(e=d.depsMap.computed[t])&&e.forEach(l)}
do o=this.changes,a(p,o),this.changes=[],c=[],s=t(o),s.forEach(h),o.forEach(l),c.forEach(n)
while(this.changes.length)
return s=t(p),this.patternObservers.length&&(s.forEach(function(t){return e(f,t,!0)}),p.forEach(function(t){return e(f,t)})),u.forEach(function(t){f.deps[t]&&(s.forEach(function(e){return r(f,e,t)}),i(f,p,t))}),p.forEach(function(t){g[t]=f.get(t)}),this.implicitChanges={},g}}}(Pa,Fa),Da=function(){this.capturing=!0,this.captured=[]},Ua=function(t,e){var n,r,i
if(e||(r=this.wrapped[t])&&r.teardown()!==!1&&(this.wrapped[t]=null),(i=this.computations[t])&&i.compute(),this.cache[t]=void 0,n=this.cacheMap[t])for(;n.length;)this.clearCache(n.pop())},Wa={FAILED_LOOKUP:!0},qa=function(t,e){var n={},r=function(t,r){this.viewmodel=t,this.root=t.ractive,this.ref=r,this.parentFragment=n,t.unresolvedImplicitDependencies[r]=!0,t.unresolvedImplicitDependencies.push(this),e.addUnresolved(this)}
return r.prototype={resolve:function(){this.viewmodel.mark(this.ref),this.viewmodel.unresolvedImplicitDependencies[this.ref]=!1,t(this.viewmodel.unresolvedImplicitDependencies,this)},teardown:function(){e.removeUnresolved(this)}},r}(p,_),Va=function(t,e){function n(e,n){var r,i,o,a,s,u,c
return r=n.split("."),i=r.pop(),o=r.join("."),a=e.get(o),(c=e.wrapped[o])&&(a=c.get()),null!==a&&void 0!==a?((s=e.cacheMap[o])?-1===s.indexOf(n)&&s.push(n):e.cacheMap[o]=[n],"object"!=typeof a||i in a?(u=a[i],e.adapt(n,u,!1),e.cache[n]=u,u):e.cache[n]=t):void 0}var r,i={}
return r=function(r){var o=arguments[1]
void 0===o&&(o=i)
var a,s,u,c,h=this.ractive,l=this.cache
return void 0===l[r]?((s=this.computations[r])?a=s.value:(u=this.wrapped[r])?a=u.value:r?a=(c=this.evaluators[r])?c.value:n(this,r):(this.adapt("",h.data),a=h.data),l[r]=a):a=l[r],o.evaluateWrapped&&(u=this.wrapped[r])&&(a=u.get()),o.capture&&this.capturing&&-1===this.captured.indexOf(r)&&(this.captured.push(r),a===t&&this.unresolvedImplicitDependencies[r]!==!0&&new e(this,r)),a===t?void 0:a}}(Wa,qa),Ka=function(t,e){e&&(this.implicitChanges[t]=!0),-1===this.changes.indexOf(t)&&(this.changes.push(t),this.clearCache(t))},za=function(t,e){var n,r,i,o
return n={},r=0,i=t.map(function(t,i){var a,s,u
s=r,u=e.length
do{if(a=e.indexOf(t,s),-1===a)return o=!0,-1
s=a+1}while(n[a]&&u>s)
return a===r&&(r+=1),a!==i&&(o=!0),n[a]=!0,a}),i.unchanged=!o,i},Ha=function(t,e,n){function r(e){return"function"==typeof e.merge&&(!e.subtype||e.subtype===t.SECTION_EACH)}function i(t){return JSON.stringify(t)}function o(t){if(t===!0)return i
if("string"==typeof t)return s[t]||(s[t]=function(e){return e[t]}),s[t]
if("function"==typeof t)return t
throw new Error("The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)")}var a,s={}
return a=function(t,i,a,s){var u,c,h,l,f,d=this
if(this.mark(t),s&&s.compare){h=o(s.compare)
try{u=i.map(h),c=a.map(h)}catch(p){if(this.debug)throw p
e("Merge operation: comparison failed. Falling back to identity checking"),u=i,c=a}}else u=i,c=a
l=n(u,c),l.forEach(function(e,n){-1===e&&d.mark(t+"."+n)}),this.set(t,a,!0),(f=this.deps["default"][t])&&f.filter(r).forEach(function(t){return t.merge(l)}),i.length!==a.length&&this.mark(t+".length",!0)}}(K,B,za),$a=function(){function t(t,e,n){var r,i,o,a
for(r=e.split(".");r.length;)r.pop(),i=r.join("."),o=t.depsMap[n]||(t.depsMap[n]={}),a=o[i]||(o[i]=[]),void 0===a[e]&&(a[e]=0,a.push(e)),a[e]+=1,e=i}var e
return e=function(e,n){var r=arguments[2]
void 0===r&&(r="default")
var i,o,a
n.isStatic||(i=this.deps[r]||(this.deps[r]={}),o=i[e]||(i[e]=[]),o.push(n),e&&((a=this.evaluators[e])&&(a.dependants||a.wake(),a.dependants+=1),t(this,e,r)))}}(),Ga=function(){return this.capturing=!1,this.captured},Ja=function(t,e){return function(n,r,i){var o,a,s,u,c,h,l,f
c=this.computations[n],c&&!c.setting&&(c.set(r),r=c.get()),t(this.cache[n],r)||(h=this.wrapped[n],l=this.evaluators[n],h&&h.reset&&(f=h.reset(r)!==!1,f&&(r=h.get())),l&&(l.value=r),c||l||f||(o=n.split("."),a=o.pop(),s=o.join("."),h=this.wrapped[s],h&&h.set?h.set(a,r):(u=h?h.get():this.get(s),u||(u=e(a),this.set(s,u,!0)),u[a]=r)),i?this.clearCache(n):this.mark(n))}}(y,x),Ya=function(t){function e(e){return e.type===t.SECTION&&(!e.subtype||e.subtype===t.SECTION_EACH)&&e.rendered}var n
return n=function(t,n){var r,i,o=this
for(r=n.rangeStart;r<n.rangeEnd;r+=1)o.mark(t+"."+r)
n.balance&&o.mark(t+".length",!0),(i=o.deps["default"][t])&&i.filter(e).forEach(function(t){return t.splice(n)})}}(K),Qa=function(){var t,e=this
for(Object.keys(this.cache).forEach(function(t){return e.clearCache(t)});t=this.unresolvedImplicitDependencies.pop();)t.teardown()},Xa=function(){function t(t,e,n){var r,i,o,a
for(r=e.split(".");r.length;)r.pop(),i=r.join("."),o=t.depsMap[n],a=o[i],a[e]-=1,a[e]||(a.splice(a.indexOf(e),1),a[e]=void 0),e=i}var e
return e=function(e,n){var r=arguments[2]
void 0===r&&(r="default")
var i,o,a
if(!n.isStatic){if(i=this.deps[r][e],o=i.indexOf(n),-1===o)throw new Error("Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks")
i.splice(o,1),e&&((a=this.evaluators[e])&&(a.dependants-=1,a.dependants||a.sleep()),t(this,e,r))}}}(),Za=function(){function t(t){var e="var __ractive=this;return("+t.replace(n,function(t,e){return'__ractive.get("'+e+'")'})+")"
return new Function(e)}var e,n=/\$\{([^\}]+)\}/g
return e=function(e){return"function"==typeof e?{get:e}:"string"==typeof e?{get:t(e)}:("object"==typeof e&&"string"==typeof e.get&&(e={get:t(e.get),set:e.set}),e)}}(),ts=function(t,e,n){var r=function(t,e,n){var r
this.ractive=t,this.viewmodel=t.viewmodel,this.key=e,this.getter=n.get,this.setter=n.set,this.dependencies=[],(r=t.viewmodel.get(e))&&this.set(r),this.update()}
return r.prototype={get:function(){return this.compute(),this.value},set:function(t){if(this.setting)return void(this.value=t)
if(!this.setter)throw new Error("Computed properties without setters are read-only. (This may change in a future version of Ractive!)")
this.setter.call(this.ractive,t)},compute:function(){var e,r,i
e=this.ractive,e.viewmodel.capture()
try{this.value=this.getter.call(e)}catch(o){t.warn({debug:e.debug,message:"failedComputation",args:{key:this.key,err:o.message||o}}),r=!0}return i=e.viewmodel.release(),n(this,this.dependencies,i),r?!1:!0},update:function(){var t=this.value
this.compute()&&!e(this.value,t)&&this.ractive.viewmodel.mark(this.key)}},r}(Zn,y,er),es=function(t,e){return function(n,r){var i,o
for(i in r)o=t(r[i]),n.viewmodel.computations[i]=new e(n,i,o)}}(Za,ts),ns=function(){function t(t){return"string"==typeof t&&(t=[t]),t}var e={lookup:function(t,e){var n,r=t.adapt
if(!r||!r.length)return r
if(e&&Object.keys(e).length&&(n=r.length))for(;n--;){var i=r[n]
"string"==typeof i&&(r[n]=e[i]||i)}return r},combine:function(e,n){return e=t(e),n=t(n),e&&e.length?n&&n.length?(e.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),n):e.slice():n}}
return e}(),rs=function(t,e,n,r,i,o,a,s,u,c,h,l,f,d,p,g){var v
try{Object.defineProperty({},"test",{value:0})}catch(m){v=!0}var y=function(e){this.ractive=e,y.extend(e.constructor,e),this.cache={},this.cacheMap=t(null),this.deps={computed:{},"default":{}},this.depsMap={computed:{},"default":{}},this.patternObservers=[],this.wrapped=t(null),this.evaluators=t(null),this.computations=t(null),this.captured=null,this.unresolvedImplicitDependencies=[],this.changes=[],this.implicitChanges={}}
return y.extend=function(t,e){if(e.magic&&v)throw new Error("Getters and setters (magic mode) are not supported in this browser")
e.adapt=g.combine(t.prototype.adapt,e.adapt)||[],e.adapt=g.lookup(e,e.adaptors)},y.prototype={adapt:e,applyChanges:n,capture:r,clearCache:i,get:o,mark:a,merge:s,register:u,release:c,set:h,splice:l,teardown:f,unregister:d,compute:function(){p(this.ractive,this.ractive.computed)}},y}(z,Ia,Ba,Da,Ua,Va,Ka,Ha,$a,Ga,Ja,Ya,Qa,Xa,es,ns),is=function(t,e,n,r,i,o){function a(t){var e
if(e=n(t.el)){if(e&&!t.append){if(e.__ractive_instances__)try{e.__ractive_instances__.splice(0,e.__ractive_instances__.length).forEach(function(t){return t.teardown()})}catch(r){}e.innerHTML=""}t.render(e,t.append)}}function s(t,n){t._guid=r(),t._subs=e(null),t._config={},t._twowayBindings=e(null),t._animations=[],t.nodes={},t._liveQueries=[],t._liveComponentQueries=[],n._parent&&n._component&&(t._parent=n._parent,t.component=n._component,n._component.instance=t)}var u
return u=function(e){var n=arguments[1]
void 0===n&&(n={}),s(e,n),t.init(e.constructor,e,n),e.viewmodel=new i(e),e.viewmodel.compute(),e.template&&(e.fragment=new o({template:e.template,root:e,owner:e})),a(e)}}($e,z,pn,Na,rs,la),os=function(t){return function(e,n,r){e.beforeInit&&e.beforeInit(r),t(e,r)}}(is),as=function(t,e,n,r){function i(e,n,r){for(var i in r)if(!(i in c)&&r.hasOwnProperty(i)){var o=r[i]
"function"==typeof o&&(o=t(e,i,o)),n[i]=o}}function o(t){if(!(t.prototype instanceof u))return t
for(var n={};t;)l.forEach(function(e){a(e.useDefaults?t.prototype:t,n,e.name)}),Object.keys(t.prototype).forEach(function(r){if("computed"!==r){var i=t.prototype[r]
if(r in n){if("function"==typeof n[r]&&"function"==typeof i&&n[r]._method){var o,a=i._method
a&&(i=i._method),o=e(n[r]._method,i),a&&(o._method=o),n[r]=o}}else n[r]=i._method?i._method:i}}),t=t._parent!==u?t._parent:!1
return n}function a(t,e,n){var r,i=Object.keys(t[n])
i.length&&((r=e[n])||(r=e[n]={}),i.filter(function(t){return!(t in r)}).forEach(function(e){return r[e]=t[n][e]}))}var s,u,c={_parent:!0,_component:!0},h={toPrototype:i,toOptions:o},l=n.registries
return n.keys.forEach(function(t){return c[t]=!0}),r.push(function(){u=r.Ractive}),s=h}(ze,W,$e,o),ss=function(t,e,n,r,i,o,a){return function s(){var u=arguments[0]
void 0===u&&(u={})
var c,h,l,f=this
return u=a.toOptions(u),c=function(t){i(this,c,t)},h=t(f.prototype),h.constructor=c,l={_guid:{value:n()},defaults:{value:h},extend:{value:s,writable:!0,configurable:!0},_parent:{value:f}},e(c,l),r.extend(f,h,u),o.extend(f,h),a.toPrototype(f.prototype,h,u),c.prototype=h,c}}(z,L,Aa,$e,os,rs,as),us=function(t,e,n,r,i,o,a,s,u,c,h,l,f){var d,p
for(d=function(t){l(this,t)},p={extend:{value:c},parse:{value:h},Promise:{value:s},svg:{value:r},magic:{value:i},VERSION:{value:"0.5.8"},adaptors:{writable:!0,value:{}},components:{writable:!0,value:{}},decorators:{writable:!0,value:{}},easing:{writable:!0,value:e},events:{writable:!0,value:{}},interpolators:{writable:!0,value:n},partials:{writable:!0,value:{}},transitions:{writable:!0,value:{}}},o(d,p),d.prototype=u(a,t),d.prototype.constructor=d,d.defaults=d.prototype,f.Ractive=d;f.length;)f.pop()()
var g="function"
if(typeof Date.now!==g||typeof String.prototype.trim!==g||typeof Object.keys!==g||typeof Array.prototype.indexOf!==g||typeof Array.prototype.forEach!==g||typeof Array.prototype.map!==g||typeof Array.prototype.filter!==g||"undefined"!=typeof window&&typeof window.addEventListener!==g)throw new Error("It looks like you're attempting to use Ractive.js in an older browser. You'll need to use one of the 'legacy builds' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.")
return d}(r,i,h,l,S,L,Ta,g,xi,ss,Fe,is,o)
"undefined"!=typeof e&&e.exports?e.exports=us:"function"==typeof define&&define.amd&&define(function(){return us}),t.Ractive=us,us.noConflict=function(){return t.Ractive=n,us}}("undefined"!=typeof window?window:this)},{}]},{},[120])
