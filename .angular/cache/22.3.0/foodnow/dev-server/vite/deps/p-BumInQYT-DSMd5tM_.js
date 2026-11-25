import { d as n$1 } from "./p-vBBGetx6-CN5pXLrh.js";
import { x as v$1 } from "./p-CyKwPay6-YSDcboAv.js";
import { t as _asyncToGenerator } from "./asyncToGenerator-Byb5jPv1.js";
// node_modules/@ionic/core/components/p-BumInQYT.js
/*!
* (C) Ionic http://ionicframework.com - MIT License
*/
var r = "ion-content";
var e = ".ion-content-scroll-host";
var t = `${r}, ${e}`;
var n = (o) => "ION-CONTENT" === o.tagName;
var a = function() {
	var _ref = _asyncToGenerator(function* (s) {
		return n(s) ? (yield new Promise(((r) => n$1(s, r))), s.getScrollElement()) : s;
	});
	return function a(_x) {
		return _ref.apply(this, arguments);
	};
}();
var i = (o) => o.querySelector(".ion-content-scroll-host") || o.querySelector(t);
var l = (o) => o.closest(t);
var f = (o) => o.querySelector(e);
var u = (o) => {
	if (n(o)) return o.querySelector("ion-refresher");
	const s = o.closest(r);
	if (null === s) return null;
	const e = f(s);
	return null !== e && e.contains(o) ? s.querySelector("ion-refresher") : null;
};
var c = (o, s) => n(o) ? o.scrollToTop(s) : Promise.resolve(o.scrollTo({
	top: 0,
	left: 0,
	behavior: "smooth"
}));
var h = (o, s, r, e) => n(o) ? o.scrollByPoint(s, r, e) : Promise.resolve(o.scrollBy({
	top: r,
	left: s,
	behavior: e > 0 ? "smooth" : "auto"
}));
var m = (o) => v$1(o, r);
var p = (o) => {
	if (n(o)) {
		const s = o.scrollY;
		return o.scrollY = !1, s;
	}
	return o.style.setProperty("overflow", "hidden"), !0;
};
var v = (o, s) => {
	n(o) ? o.scrollY = s : o.style.removeProperty("overflow");
};
export { h as a, m as c, r as d, u as f, f as i, n as l, c as n, i as o, v as p, e as r, l as s, a as t, p as u };
