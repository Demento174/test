!function (e, t) {
    "function" == typeof define && define.amd ? define([], function () {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function () {
    function h(e, t, i) {
        if (i) {
            var a = document.createDocumentFragment(), s = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
            s && t.setAttribute("viewBox", s);
            for (var n = i.cloneNode(!0); n.childNodes.length;) a.appendChild(n.firstChild);
            e.appendChild(a)
        }
    }

    return function (e) {
        var o = Object(e), e = window.top !== window.self,
            l = "polyfill" in o ? o.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && e,
            d = {}, u = window.requestAnimationFrame || setTimeout, c = document.getElementsByTagName("use"), p = 0;
        l && function e() {
            for (var t = 0; t < c.length;) {
                var i, a, s = c[t], n = s.parentNode, r = function () {
                    for (var e = n; "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode);) ;
                    return e
                }();
                r ? (!(i = s.getAttribute("xlink:href") || s.getAttribute("href")) && o.attributeName && (i = s.getAttribute(o.attributeName)), l && (!o.validate || o.validate(i, r, s) ? (n.removeChild(s), s = (a = i.split("#")).shift(), i = a.join("#"), s.length ? ((a = d[s]) || ((a = d[s] = new XMLHttpRequest).open("GET", s), a.send(), a._embeds = []), a._embeds.push({
                    parent: n,
                    svg: r,
                    id: i
                }), function (a) {
                    a.onreadystatechange = function () {
                        var i;
                        4 === a.readyState && ((i = a._cachedDocument) || ((i = a._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = a.responseText, a._cachedTarget = {}), a._embeds.splice(0).map(function (e) {
                            var t = (t = a._cachedTarget[e.id]) || (a._cachedTarget[e.id] = i.getElementById(e.id));
                            h(e.parent, e.svg, t)
                        }))
                    }, a.onreadystatechange()
                }(a)) : h(n, r, document.getElementById(i))) : (++t, ++p))) : ++t
            }
            (!c.length || 0 < c.length - p) && u(e, 67)
        }()
    }
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).LazyLoad = t()
}(this, function () {
    "use strict";

    function t() {
        return (t = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i, a = arguments[t];
                for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
            }
            return e
        }).apply(this, arguments)
    }

    function r(e) {
        return t({}, $, e)
    }

    function s(e, t) {
        var i, a = "LazyLoad::Initialized", t = new e(t);
        try {
            i = new CustomEvent(a, {detail: {instance: t}})
        } catch (e) {
            (i = document.createEvent("CustomEvent")).initCustomEvent(a, !1, !1, {instance: t})
        }
        window.dispatchEvent(i)
    }

    function o(e) {
        return G(e, R)
    }

    function n(e) {
        return Y(e, null)
    }

    function d(e) {
        return o(e) === H
    }

    function l(e, t) {
        I ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function u(e) {
        return e.llTempImage
    }

    function c(e, t) {
        e && (e.toLoadCount = t)
    }

    function i(e, t) {
        e.removeAttribute(t)
    }

    function a(e) {
        var t;
        ee(e) || ((t = {}).src = e.getAttribute("src"), t.srcset = e.getAttribute("srcset"), t.sizes = e.getAttribute("sizes"), e.llOriginalAttrs = t)
    }

    function p(e) {
        var t;
        ee(e) && (t = e.llOriginalAttrs, Z(e, "src", t.src), Z(e, "srcset", t.srcset), Z(e, "sizes", t.sizes))
    }

    function h(e, t) {
        Z(e, "sizes", G(e, t.data_sizes)), Z(e, "srcset", G(e, t.data_srcset)), Z(e, "src", G(e, t.data_src))
    }

    function f(e) {
        i(e, "src"), i(e, "srcset"), i(e, "sizes")
    }

    function m(e, t) {
        (e = e.parentNode) && "PICTURE" === e.tagName && J(e).forEach(t)
    }

    function v(e, t, i) {
        W(e, t.class_applied), Y(e, N), t.unobserve_completed && K(e, t), j(t.callback_applied, e, i)
    }

    function g(e, t) {
        !t || 0 < t.loadingCount || 0 < t.toLoadCount || j(e.callback_finish, t)
    }

    function b(e, t, i) {
        e.addEventListener(t, i), e.llEvLisnrs[t] = i
    }

    function y(e) {
        return !!e.llEvLisnrs
    }

    function w(e) {
        if (y(e)) {
            var t, i, a = e.llEvLisnrs;
            for (t in a) {
                var s = a[t];
                i = t, e.removeEventListener(i, s)
            }
            delete e.llEvLisnrs
        }
    }

    function x(e, t, i) {
        var a;
        delete e.llTempImage, Q(i, -1), (a = i) && --a.toLoadCount, l(e, t.class_loading), t.unobserve_completed && K(e, i)
    }

    function E(e, t, i) {
        var a, s, n;
        -1 < re.indexOf(e.tagName) ? (oe(a = e, s = t, n = i), se(a, s), ne(a, s, n)) : (t = t, i = i, U(e = e), oe(e, t, i), ie(e, t, i), ae(e, t, i))
    }

    function T(e, t, i, a) {
        var s;
        i.cancel_on_exit && (o(e) !== A || "IMG" === e.tagName && (w(e), m(s = e, function (e) {
            f(e)
        }), f(s), m(s = e, function (e) {
            p(e)
        }), p(s), l(e, i.class_loading), Q(a, -1), n(e), j(i.callback_cancel, e, t, a)))
    }

    function S(e, t, i, a) {
        var s, n, r = 0 <= q.indexOf(o(e));
        Y(e, "entered"), W(e, i.class_entered), l(e, i.class_exited), s = e, n = a, i.unobserve_entered && K(s, n), j(i.callback_enter, e, t, a), r || E(e, i, a)
    }

    function C(e, a, s) {
        e.forEach(function (e) {
            var t, i;
            -1 !== le.indexOf(e.tagName) && (t = a, i = s, (e = e).setAttribute("loading", "lazy"), oe(e, t, i), se(e, t), Y(e, H))
        }), c(s, 0)
    }

    function M(e) {
        return e.container.querySelectorAll(e.elements_selector)
    }

    function k(e) {
        return o(e) === V
    }

    function z(e, t) {
        return t = e || M(t), pe(t).filter(F)
    }

    function e(e, t) {
        var i, a, s, n, e = r(e);
        this._settings = e, this.loadingCount = 0, i = e, a = this, P && !de(i) && (a._observer = new IntersectionObserver(function (e) {
            ce(e, i, a)
        }, ue(i))), s = e, n = this, _ && window.addEventListener("online", function () {
            he(s, n)
        }), this.update(t)
    }

    var _ = "undefined" != typeof window,
        L = _ && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        P = _ && "IntersectionObserver" in window, I = _ && "classList" in document.createElement("p"),
        D = _ && 1 < window.devicePixelRatio, $ = {
            elements_selector: ".lazy",
            container: L || _ ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1
        }, A = "loading", O = "loaded", N = "applied", V = "error", H = "native", B = "data-", R = "ll-status",
        G = function (e, t) {
            return e.getAttribute(B + t)
        }, X = function (e, t, i) {
            t = B + t;
            null !== i ? e.setAttribute(t, i) : e.removeAttribute(t)
        }, Y = function (e, t) {
            return X(e, R, t)
        }, F = function (e) {
            return null === o(e)
        }, q = [A, O, N, V], j = function (e, t, i, a) {
            e && (void 0 === a ? void 0 === i ? e(t) : e(t, i) : e(t, i, a))
        }, W = function (e, t) {
            I ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
        }, U = function (e) {
            e.llTempImage = document.createElement("IMG")
        }, K = function (e, t) {
            !t || (t = t._observer) && t.unobserve(e)
        }, Q = function (e, t) {
            e && (e.loadingCount += t)
        }, J = function (e) {
            for (var t, i = [], a = 0; t = e.children[a]; a += 1) "SOURCE" === t.tagName && i.push(t);
            return i
        }, Z = function (e, t, i) {
            i && e.setAttribute(t, i)
        }, ee = function (e) {
            return !!e.llOriginalAttrs
        }, te = {
            IMG: function (e, t) {
                m(e, function (e) {
                    a(e), h(e, t)
                }), a(e), h(e, t)
            }, IFRAME: function (e, t) {
                Z(e, "src", G(e, t.data_src))
            }, VIDEO: function (e, t) {
                var i;
                i = function (e) {
                    Z(e, "src", G(e, t.data_src))
                }, J(e).forEach(i), Z(e, "poster", G(e, t.data_poster)), Z(e, "src", G(e, t.data_src)), e.load()
            }
        }, ie = function (e, t, i) {
            var a = G(e, t.data_bg), s = G(e, t.data_bg_hidpi), a = D && s ? s : a;
            a && (e.style.backgroundImage = 'url("'.concat(a, '")'), u(e).setAttribute("src", a), ne(e, t, i))
        }, ae = function (e, t, i) {
            var a = G(e, t.data_bg_multi), s = G(e, t.data_bg_multi_hidpi), a = D && s ? s : a;
            a && (e.style.backgroundImage = a, v(e, t, i))
        }, se = function (e, t) {
            var i = te[e.tagName];
            i && i(e, t)
        }, ne = function (e, t, i) {
            Q(i, 1), W(e, t.class_loading), Y(e, A), j(t.callback_loading, e, i)
        }, re = ["IMG", "IFRAME", "VIDEO"], oe = function (n, r, o) {
            var l = u(n) || n;
            y(l) || function (e, t, i) {
                y(e) || (e.llEvLisnrs = {});
                var a = "VIDEO" === e.tagName ? "loadeddata" : "load";
                b(e, a, t), b(e, "error", i)
            }(l, function (e) {
                var t, i, a, s;
                i = r, a = o, s = d(t = n), x(t, i, a), W(t, i.class_loaded), Y(t, O), j(i.callback_loaded, t, a), s || g(i, a), w(l)
            }, function (e) {
                var t, i, a, s;
                i = r, a = o, s = d(t = n), x(t, i, a), W(t, i.class_error), Y(t, V), j(i.callback_error, t, a), s || g(i, a), w(l)
            })
        }, le = ["IMG", "IFRAME", "VIDEO"], de = function (e) {
            return e.use_native && "loading" in HTMLImageElement.prototype
        }, ue = function (e) {
            return {root: e.container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px"}
        }, ce = function (e, s, n) {
            e.forEach(function (e) {
                return (a = e).isIntersecting || 0 < a.intersectionRatio ? S(e.target, e, s, n) : (t = e.target, i = e, a = s, e = n, void (F(t) || (W(t, a.class_exited), T(t, i, a, e), j(a.callback_exit, t, i, e))));
                var t, i, a
            })
        }, pe = function (e) {
            return Array.prototype.slice.call(e)
        }, he = function (t, e) {
            var i;
            (i = M(t), pe(i).filter(k)).forEach(function (e) {
                l(e, t.class_error), n(e)
            }), e.update()
        };
    return e.prototype = {
        update: function (e) {
            var t, i = this._settings, a = z(e, i);
            c(this, a.length), !L && P ? de(i) ? C(a, i, this) : (e = this._observer, i = a, e.disconnect(), t = e, i.forEach(function (e) {
                t.observe(e)
            })) : this.loadAll(a)
        }, destroy: function () {
            this._observer && this._observer.disconnect(), M(this._settings).forEach(function (e) {
                delete e.llOriginalAttrs
            }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
        }, loadAll: function (e) {
            var t = this, i = this._settings;
            z(e, i).forEach(function (e) {
                K(e, t), E(e, i, t)
            })
        }
    }, e.load = function (e, t) {
        t = r(t);
        E(e, t)
    }, e.resetStatus = function (e) {
        n(e)
    }, _ && function (e, t) {
        if (t) if (t.length) for (var i, a = 0; i = t[a]; a += 1) s(e, i); else s(e, t)
    }(e, window.lazyLoadOptions), e
}), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
    var t, i = (this.document || this.ownerDocument).querySelectorAll(e), a = this;
    do {
        for (t = i.length; 0 <= --t && i.item(t) !== a;) ;
    } while (t < 0 && (a = a.parentElement));
    return a
}), function () {
    function e(e, t) {
        t = t || {bubbles: !1, cancelable: !1, detail: void 0};
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
    }

    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
}(), function () {
    for (var n = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {
        var i = (new Date).getTime(), a = Math.max(0, 16 - (i - n)), s = window.setTimeout(function () {
            e(i + a)
        }, a);
        return n = i + a, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
}(), function (e, t) {
    "function" == typeof define && define.amd ? define([], function () {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (w) {
    "use strict";

    function x() {
        var i = {};
        return Array.prototype.forEach.call(arguments, function (e) {
            for (var t in e) {
                if (!e.hasOwnProperty(t)) return;
                i[t] = e[t]
            }
        }), i
    }

    function r(e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (var t, i = String(e), a = i.length, s = -1, n = "", r = i.charCodeAt(0); ++s < a;) {
            if (0 === (t = i.charCodeAt(s))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            1 <= t && t <= 31 || 127 == t || 0 === s && 48 <= t && t <= 57 || 1 === s && 48 <= t && t <= 57 && 45 === r ? n += "\\" + t.toString(16) + " " : n += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? i.charAt(s) : "\\" + i.charAt(s)
        }
        return "#" + n
    }

    function E(e, t, i) {
        0 === e && document.body.focus(), i || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), w.scrollTo(0, t))
    }

    function T(e, t, i, a) {
        t.emitEvents && "function" == typeof w.CustomEvent && (a = new CustomEvent(e, {
            bubbles: !0,
            detail: {anchor: i, toggle: a}
        }), document.dispatchEvent(a))
    }

    var S = {
        ignore: "[data-scroll-ignore]",
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        speedAsDuration: !1,
        durationMax: null,
        durationMin: null,
        clip: !0,
        offset: 0,
        easing: "easeInOutCubic",
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0
    }, C = function (e) {
        return parseInt(w.getComputedStyle(e).height, 10)
    }, M = function () {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    };
    return function (a, e) {
        var g, s, i, b, y = {
            cancelScroll: function (e) {
                cancelAnimationFrame(b), b = null, e || T("scrollCancel", g)
            }
        };
        y.animateScroll = function (a, s, e) {
            y.cancelScroll();
            var n, r, o, l, d, u, c, p, h, f, m = x(g || S, e || {}),
                v = "[object Number]" === Object.prototype.toString.call(a), t = v || !a.tagName ? null : a;
            (v || t) && (n = w.pageYOffset, m.header && !i && (i = document.querySelector(m.header)), e = (e = i) ? C(e) + e.offsetTop : 0, r = v ? a : function (e, t, i, a) {
                var s = 0;
                if (e.offsetParent) for (; s += e.offsetTop, e = e.offsetParent;) ;
                return s = Math.max(s - t - i, 0), s = a ? Math.min(s, M() - w.innerHeight) : s
            }(t, e, parseInt("function" == typeof m.offset ? m.offset(a, s) : m.offset, 10), m.clip), o = r - n, l = M(), d = 0, u = function (e, t) {
                e = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
                return t.durationMax && e > t.durationMax ? t.durationMax : t.durationMin && e < t.durationMin ? t.durationMin : parseInt(e, 10)
            }(o, m), h = function (e, t) {
                var i = w.pageYOffset;
                if (e == t || i == t || (n < t && w.innerHeight + i) >= l) return y.cancelScroll(!0), E(a, t, v), T("scrollStop", m, a, s), !(b = c = null)
            }, f = function (e) {
                var t, i, a;
                d += e - (c = c || e), p = n + o * (i = p = 1 < (p = 0 === u ? 0 : d / u) ? 1 : p, "easeInQuad" === (t = m).easing && (a = i * i), "easeOutQuad" === t.easing && (a = i * (2 - i)), "easeInOutQuad" === t.easing && (a = i < .5 ? 2 * i * i : (4 - 2 * i) * i - 1), "easeInCubic" === t.easing && (a = i * i * i), "easeOutCubic" === t.easing && (a = --i * i * i + 1), "easeInOutCubic" === t.easing && (a = i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1), "easeInQuart" === t.easing && (a = i * i * i * i), "easeOutQuart" === t.easing && (a = 1 - --i * i * i * i), "easeInOutQuart" === t.easing && (a = i < .5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i), "easeInQuint" === t.easing && (a = i * i * i * i * i), "easeOutQuint" === t.easing && (a = 1 + --i * i * i * i * i), "easeInOutQuint" === t.easing && (a = i < .5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i), (a = t.customEasing ? t.customEasing(i) : a) || i), w.scrollTo(0, Math.floor(p)), h(p, r) || (b = w.requestAnimationFrame(f), c = e)
            }, 0 === w.pageYOffset && w.scrollTo(0, 0), t = a, e = m, v || history.pushState && e.updateURL && history.pushState({
                smoothScroll: JSON.stringify(e),
                anchor: t.id
            }, document.title, t === document.documentElement ? "#top" : "#" + t.id), "matchMedia" in w && w.matchMedia("(prefers-reduced-motion)").matches ? E(a, Math.floor(r), !1) : (T("scrollStart", m, a, s), y.cancelScroll(!0), w.requestAnimationFrame(f)))
        };

        function t(e) {
            if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (s = e.target.closest(a)) && "a" === s.tagName.toLowerCase() && !e.target.closest(g.ignore) && s.hostname === w.location.hostname && s.pathname === w.location.pathname && /#/.test(s.href)) {
                var t, i;
                try {
                    i = r(decodeURIComponent(s.hash))
                } catch (e) {
                    i = r(s.hash)
                }
                if ("#" === i) {
                    if (!g.topOnEmptyHash) return;
                    t = document.documentElement
                } else t = document.querySelector(i);
                (t = t || "#top" !== i ? t : document.documentElement) && (e.preventDefault(), i = g, history.replaceState && i.updateURL && !history.state && (e = (e = w.location.hash) || "", history.replaceState({
                    smoothScroll: JSON.stringify(i),
                    anchor: e || w.pageYOffset
                }, document.title, e || w.location.href)), y.animateScroll(t, s))
            }
        }

        function n(e) {
            var t;
            null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(g) && ("string" == typeof (t = history.state.anchor) && t && !(t = document.querySelector(r(history.state.anchor))) || y.animateScroll(t, null, {updateURL: !1}))
        }

        y.destroy = function () {
            g && (document.removeEventListener("click", t, !1), w.removeEventListener("popstate", n, !1), y.cancelScroll(), b = i = s = g = null)
        };
        return function () {
            if (!("querySelector" in document && "addEventListener" in w && "requestAnimationFrame" in w && "closest" in w.Element.prototype)) throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            y.destroy(), g = x(S, e || {}), i = g.header ? document.querySelector(g.header) : null, document.addEventListener("click", t, !1), g.updateURL && g.popstate && w.addEventListener("popstate", n, !1)
        }(), y
    }
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";

    function l(e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    }

    var e = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, c = e, t = "undefined" == typeof window ? {
        document: c,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, u = t;

    function T(e, t) {
        var i = [], a = 0;
        if (e && !t && e instanceof l) return e;
        if (e) if ("string" == typeof e) {
            var s, n, r = e.trim();
            if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                var o = "div";
                for (0 === r.indexOf("<li") && (o = "ul"), 0 === r.indexOf("<tr") && (o = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"), 0 === r.indexOf("<tbody") && (o = "table"), 0 === r.indexOf("<option") && (o = "select"), (n = c.createElement(o)).innerHTML = r, a = 0; a < n.childNodes.length; a += 1) i.push(n.childNodes[a])
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || c).querySelectorAll(e.trim()) : [c.getElementById(e.trim().split("#")[1])], a = 0; a < s.length; a += 1) s[a] && i.push(s[a])
        } else if (e.nodeType || e === u || e === c) i.push(e); else if (0 < e.length && e[0].nodeType) for (a = 0; a < e.length; a += 1) i.push(e[a]);
        return new l(i)
    }

    function n(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    T.fn = l.prototype, T.Class = l, T.Dom7 = l;
    "resize scroll".split(" ");
    var i = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var a = 0; a < this.length; a += 1) void 0 !== this[a].classList && this[a].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var a = 0; a < this.length; a += 1) void 0 !== this[a].classList && this[a].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var a = 0; a < this.length; a += 1) void 0 !== this[a].classList && this[a].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var a = 0; a < this.length; a += 1) if (2 === i.length) this[a].setAttribute(e, t); else for (var s in e) this[a][s] = e[s], this[a].setAttribute(s, e[s]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var a = 0; a < this.length; a += 1) (i = this[a]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var s = i.getAttribute("data-" + e);
                return s ? s : void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i = e[0], n = e[1], r = e[2], a = e[3];

            function s(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.unshift(e), T(t).is(n)) r.apply(t, i); else for (var a = T(t).parents(), s = 0; s < a.length; s += 1) T(a[s]).is(n) && r.apply(a[s], i)
                }
            }

            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.unshift(e), r.apply(this, t)
            }

            "function" == typeof e[1] && (i = e[0], r = e[1], a = e[2], n = void 0), a = a || !1;
            for (var l, d = i.split(" "), u = 0; u < this.length; u += 1) {
                var c = this[u];
                if (n) for (l = 0; l < d.length; l += 1) c.dom7LiveListeners || (c.dom7LiveListeners = []), c.dom7LiveListeners.push({
                    type: i,
                    listener: r,
                    proxyListener: s
                }), c.addEventListener(d[l], s, a); else for (l = 0; l < d.length; l += 1) c.dom7Listeners || (c.dom7Listeners = []), c.dom7Listeners.push({
                    type: i,
                    listener: r,
                    proxyListener: o
                }), c.addEventListener(d[l], o, a)
            }
            return this
        }, off: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i = e[0], a = e[1], s = e[2], n = e[3];
            "function" == typeof e[1] && (i = e[0], s = e[1], n = e[2], a = void 0), n = n || !1;
            for (var r = i.split(" "), o = 0; o < r.length; o += 1) for (var l = 0; l < this.length; l += 1) {
                var d = this[l];
                if (a) {
                    if (d.dom7LiveListeners) for (var u = 0; u < d.dom7LiveListeners.length; u += 1) s ? d.dom7LiveListeners[u].listener === s && d.removeEventListener(r[o], d.dom7LiveListeners[u].proxyListener, n) : d.dom7LiveListeners[u].type === r[o] && d.removeEventListener(r[o], d.dom7LiveListeners[u].proxyListener, n)
                } else if (d.dom7Listeners) for (var c = 0; c < d.dom7Listeners.length; c += 1) s ? d.dom7Listeners[c].listener === s && d.removeEventListener(r[o], d.dom7Listeners[c].proxyListener, n) : d.dom7Listeners[c].type === r[o] && d.removeEventListener(r[o], d.dom7Listeners[c].proxyListener, n)
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), a = e[1], s = 0; s < i.length; s += 1) for (var n = 0; n < this.length; n += 1) {
                var r = void 0;
                try {
                    r = new u.CustomEvent(i[s], {detail: a, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (r = c.createEvent("Event")).initEvent(i[s], !0, !0), r.detail = a
                }
                this[n].dom7EventData = e.filter(function (e, t) {
                    return 0 < t
                }), this[n].dispatchEvent(r), this[n].dom7EventData = [], delete this[n].dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            var i, a = ["webkitTransitionEnd", "transitionend"], s = this;

            function n(e) {
                if (e.target === this) for (t.call(this, e), i = 0; i < a.length; i += 1) s.off(a[i], n)
            }

            if (t) for (i = 0; i < a.length; i += 1) s.on(a[i], n);
            return this
        }, outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (0 < this.length) {
                var e = this[0], t = e.getBoundingClientRect(), i = c.body, a = e.clientTop || i.clientTop || 0,
                    s = e.clientLeft || i.clientLeft || 0, i = e === u ? u.scrollY : e.scrollTop,
                    e = e === u ? u.scrollX : e.scrollLeft;
                return {top: t.top + i - a, left: t.left + e - s}
            }
            return null
        }, css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var a in e) this[i].style[a] = e[a];
                    return this
                }
                if (this[0]) return u.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, i, a = this[0];
            if (!a || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (a.matches) return a.matches(e);
                if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                if (a.msMatchesSelector) return a.msMatchesSelector(e);
                for (t = T(e), i = 0; i < t.length; i += 1) if (t[i] === a) return !0;
                return !1
            }
            if (e === c) return a === c;
            if (e === u) return a === u;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === a) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t = this.length;
            return t - 1 < e ? new l([]) : e < 0 ? (t = t + e) < 0 ? new l([]) : new l([this[t]]) : new l([this[e]])
        }, append: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = 0; i < e.length; i += 1) for (var a = e[i], s = 0; s < this.length; s += 1) if ("string" == typeof a) {
                var n = c.createElement("div");
                for (n.innerHTML = a; n.firstChild;) this[s].appendChild(n.firstChild)
            } else if (a instanceof l) for (var r = 0; r < a.length; r += 1) this[s].appendChild(a[r]); else this[s].appendChild(a);
            return this
        }, prepend: function (e) {
            for (var t, i = this, a = 0; a < this.length; a += 1) if ("string" == typeof e) {
                var s = c.createElement("div");
                for (s.innerHTML = e, t = s.childNodes.length - 1; 0 <= t; --t) i[a].insertBefore(s.childNodes[t], i[a].childNodes[0])
            } else if (e instanceof l) for (t = 0; t < e.length; t += 1) i[a].insertBefore(e[t], i[a].childNodes[0]); else i[a].insertBefore(e, i[a].childNodes[0]);
            return this
        }, next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        }, nextAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new l([]);
            for (; i.nextElementSibling;) {
                var a = i.nextElementSibling;
                (!e || T(a).is(e)) && t.push(a), i = a
            }
            return new l(t)
        }, prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && T(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        }, prevAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new l([]);
            for (; i.previousElementSibling;) {
                var a = i.previousElementSibling;
                (!e || T(a).is(e)) && t.push(a), i = a
            }
            return new l(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null === this[i].parentNode || e && !T(this[i].parentNode).is(e) || t.push(this[i].parentNode);
            return T(n(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var a = this[i].parentNode; a;) e && !T(a).is(e) || t.push(a), a = a.parentNode;
            return T(n(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : t.is(e) ? t : t.parents(e).eq(0)
        }, find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var a = this[i].querySelectorAll(e), s = 0; s < a.length; s += 1) t.push(a[s]);
            return new l(t)
        }, children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var a = this[i].childNodes, s = 0; s < a.length; s += 1) e ? 1 === a[s].nodeType && T(a[s]).is(e) && t.push(a[s]) : 1 === a[s].nodeType && t.push(a[s]);
            return new l(n(t))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = 0; i < e.length; i += 1) for (var a = T(e[i]), s = 0; s < a.length; s += 1) this[this.length] = a[s], this.length += 1;
            return this
        }, styles: function () {
            return this[0] ? u.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(i).forEach(function (e) {
        T.fn[e] = i[e]
    });
    var a, D = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var i, a, s;
            void 0 === t && (t = "x");
            e = u.getComputedStyle(e, null);
            return u.WebKitCSSMatrix ? (6 < (a = e.transform || e.webkitTransform).split(",").length && (a = a.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), s = new u.WebKitCSSMatrix("none" === a ? "" : a)) : i = (s = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (a = u.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), (a = "y" === t ? u.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5]) : a) || 0
        }, parseUrlQuery: function (e) {
            var t, i, a, s, n = {}, e = e || u.location.href;
            if ("string" == typeof e && e.length) for (s = (i = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; t < s; t += 1) a = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), a = 1; a < e.length; a += 1) {
                var s = e[a];
                if (null != s) for (var n = Object.keys(Object(s)), r = 0, o = n.length; r < o; r += 1) {
                    var l = n[r], d = Object.getOwnPropertyDescriptor(s, l);
                    void 0 !== d && d.enumerable && (D.isObject(i[l]) && D.isObject(s[l]) ? D.extend(i[l], s[l]) : !D.isObject(i[l]) && D.isObject(s[l]) ? (i[l] = {}, D.extend(i[l], s[l])) : i[l] = s[l])
                }
            }
            return i
        }
    }, $ = (a = c.createElement("div"), {
        touch: u.Modernizr && !0 === u.Modernizr.touch || !!("ontouchstart" in u || u.DocumentTouch && c instanceof u.DocumentTouch),
        pointerEvents: !(!u.navigator.pointerEnabled && !u.PointerEvent),
        prefixedPointerEvents: !!u.navigator.msPointerEnabled,
        transition: "transition" in (p = a.style) || "webkitTransition" in p || "MozTransition" in p,
        transforms3d: u.Modernizr && !0 === u.Modernizr.csstransforms3d || ("webkitPerspective" in (p = a.style) || "MozPerspective" in p || "OPerspective" in p || "MsPerspective" in p || "perspective" in p),
        flexbox: function () {
            for (var e = a.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in u || "WebkitMutationObserver" in u,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                u.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in u
    }), s = function (e) {
        var t = this;
        t.params = e = void 0 === e ? {} : e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, r = {components: {configurable: !0}};
    s.prototype.on = function (e, t) {
        var i = this;
        return "function" != typeof t || e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
        }), i
    }, s.prototype.once = function (a, s) {
        var n = this;
        return "function" != typeof s ? n : n.on(a, function e() {
            for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
            s.apply(n, t), n.off(a, e)
        })
    }, s.prototype.off = function (e, a) {
        var s = this;
        return e.split(" ").forEach(function (i) {
            void 0 === a ? s.eventsListeners[i] = [] : s.eventsListeners[i].forEach(function (e, t) {
                e === a && s.eventsListeners[i].splice(t, 1)
            })
        }), s
    }, s.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, a, s = this;
        if (!s.eventsListeners) return s;
        var n = "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], a = e.slice(1, e.length), s) : (i = e[0].events, a = e[0].data, e[0].context || s);
        return (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
            var t;
            s.eventsListeners[e] && (t = [], s.eventsListeners[e].forEach(function (e) {
                t.push(e)
            }), t.forEach(function (e) {
                e.apply(n, a)
            }))
        }), s
    }, s.prototype.useModulesParams = function (t) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function (e) {
            e = i.modules[e];
            e.params && D.extend(t, e.params)
        })
    }, s.prototype.useModules = function (t) {
        void 0 === t && (t = {});
        var a = this;
        a.modules && Object.keys(a.modules).forEach(function (e) {
            var i = a.modules[e], e = t[e] || {};
            i.instance && Object.keys(i.instance).forEach(function (e) {
                var t = i.instance[e];
                a[e] = "function" == typeof t ? t.bind(a) : t
            }), i.on && a.on && Object.keys(i.on).forEach(function (e) {
                a.on(e, i.on[e])
            }), i.create && i.create.bind(a)(e)
        })
    }, r.components.set = function (e) {
        this.use && this.use(e)
    }, s.installModule = function (t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        var a = this;
        a.prototype.modules || (a.prototype.modules = {});
        var s = t.name || Object.keys(a.prototype.modules).length + "_" + D.now();
        return (a.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
            a.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            a[e] = t.static[e]
        }), t.install && t.install.apply(a, e), a
    }, s.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var a = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return a.installModule(e)
        }), a) : a.installModule.apply(a, [e].concat(t))
    }, Object.defineProperties(s, r);

    function o() {
        var e, t, i = this, a = i.params, s = i.el;
        s && 0 === s.offsetWidth || (a.breakpoints && i.setBreakpoint(), e = i.allowSlideNext, t = i.allowSlidePrev, i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), a.freeMode ? (s = Math.min(Math.max(i.translate, i.maxTranslate()), i.minTranslate()), i.setTranslate(s), i.updateActiveIndex(), i.updateSlidesClasses(), a.autoHeight && i.updateAutoHeight()) : (i.updateSlidesClasses(), ("auto" === a.slidesPerView || 1 < a.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)), i.allowSlidePrev = t, i.allowSlideNext = e)
    }

    var d, p, h = {
        updateSize: function () {
            var e = this, t = e.$el, i = void 0 !== e.params.width ? e.params.width : t[0].clientWidth,
                a = void 0 !== e.params.height ? e.params.height : t[0].clientHeight;
            0 === i && e.isHorizontal() || 0 === a && e.isVertical() || (i = i - parseInt(t.css("padding-left"), 10) - parseInt(t.css("padding-right"), 10), a = a - parseInt(t.css("padding-top"), 10) - parseInt(t.css("padding-bottom"), 10), D.extend(e, {
                width: i,
                height: a,
                size: e.isHorizontal() ? i : a
            }))
        }, updateSlides: function () {
            var e = this, t = e.params, i = e.$wrapperEl, a = e.size, s = e.rtl, n = e.wrongRTL,
                r = i.children("." + e.params.slideClass),
                o = (e.virtual && t.virtual.enabled ? e.virtual.slides : r).length, l = [], d = [], u = [],
                c = t.slidesOffsetBefore;
            "function" == typeof c && (c = t.slidesOffsetBefore.call(e));
            var p = t.slidesOffsetAfter;
            "function" == typeof p && (p = t.slidesOffsetAfter.call(e));
            var h, f = o, m = e.snapGrid.length, v = e.snapGrid.length, g = t.spaceBetween, b = -c, y = 0, w = 0;
            if (void 0 !== a) {
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * a), e.virtualSize = -g, s ? r.css({
                    marginLeft: "",
                    marginTop: ""
                }) : r.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (h = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (h = Math.max(h, t.slidesPerView * t.slidesPerColumn)));
                for (var x = t.slidesPerColumn, E = h / x, T = E - (t.slidesPerColumn * E - o), S = 0; S < o; S += 1) {
                    var C, M, k, z = 0, _ = r.eq(S);
                    1 < t.slidesPerColumn && (k = M = C = void 0, "column" === t.slidesPerColumnFill ? (k = S - (M = Math.floor(S / x)) * x, (T < M || M === T && k === x - 1) && x <= (k += 1) && (k = 0, M += 1), _.css({
                        "-webkit-box-ordinal-group": C = M + k * h / x,
                        "-moz-box-ordinal-group": C,
                        "-ms-flex-order": C,
                        "-webkit-order": C,
                        order: C
                    })) : M = S - (k = Math.floor(S / E)) * E, _.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== k && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", M).attr("data-swiper-row", k)), "none" !== _.css("display") && ("auto" === t.slidesPerView ? (z = e.isHorizontal() ? _.outerWidth(!0) : _.outerHeight(!0), t.roundLengths && (z = Math.floor(z))) : (z = (a - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (z = Math.floor(z)), r[S] && (e.isHorizontal() ? r[S].style.width = z + "px" : r[S].style.height = z + "px")), r[S] && (r[S].swiperSlideSize = z), u.push(z), t.centeredSlides ? (b = b + z / 2 + y / 2 + g, 0 === y && 0 !== S && (b = b - a / 2 - g), 0 === S && (b = b - a / 2 - g), Math.abs(b) < .001 && (b = 0), w % t.slidesPerGroup == 0 && l.push(b), d.push(b)) : (w % t.slidesPerGroup == 0 && l.push(b), d.push(b), b = b + z + g), e.virtualSize += z + g, y = z, w += 1)
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + p, s && n && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: e.virtualSize + t.spaceBetween + "px"}), $.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (z + t.spaceBetween) * h, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    for (var L = [], P = 0; P < l.length; P += 1) l[P] < e.virtualSize + l[0] && L.push(l[P]);
                    l = L
                }
                if (!t.centeredSlides) {
                    L = [];
                    for (var I = 0; I < l.length; I += 1) l[I] <= e.virtualSize - a && L.push(l[I]);
                    l = L, 1 < Math.floor(e.virtualSize - a) - Math.floor(l[l.length - 1]) && l.push(e.virtualSize - a)
                }
                0 === l.length && (l = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? r.css({marginLeft: g + "px"}) : r.css({marginRight: g + "px"}) : r.css({marginBottom: g + "px"})), D.extend(e, {
                    slides: r,
                    snapGrid: l,
                    slidesGrid: d,
                    slidesSizesGrid: u
                }), o !== f && e.emit("slidesLengthChange"), l.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), d.length !== v && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }, updateAutoHeight: function () {
            var e, t, i = this, a = [], s = 0;
            if ("auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView) for (e = 0; e < Math.ceil(i.params.slidesPerView); e += 1) {
                var n = i.activeIndex + e;
                if (n > i.slides.length) break;
                a.push(i.slides.eq(n)[0])
            } else a.push(i.slides.eq(i.activeIndex)[0]);
            for (e = 0; e < a.length; e += 1) void 0 !== a[e] && (s = s < (t = a[e].offsetHeight) ? t : s);
            s && i.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this, i = t.params, a = t.slides, s = t.rtl;
            if (0 !== a.length) {
                void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                var n = s ? e : -e;
                a.removeClass(i.slideVisibleClass);
                for (var r = 0; r < a.length; r += 1) {
                    var o, l, d = a[r],
                        u = (n + (i.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + i.spaceBetween);
                    i.watchSlidesVisibility && (l = (o = -(n - d.swiperSlideOffset)) + t.slidesSizesGrid[r], (0 <= o && o < t.size || 0 < l && l <= t.size || o <= 0 && l >= t.size) && a.eq(r).addClass(i.slideVisibleClass)), d.progress = s ? -u : u
                }
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this, i = t.params, a = t.maxTranslate() - t.minTranslate(), s = t.progress, n = t.isBeginning,
                r = n, o = l = t.isEnd, l = 0 == a ? n = !(s = 0) : (n = (s = (e - t.minTranslate()) / a) <= 0, 1 <= s);
            D.extend(t, {
                progress: s,
                isBeginning: n,
                isEnd: l
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), n && !r && t.emit("reachBeginning toEdge"), l && !o && t.emit("reachEnd toEdge"), (r && !n || o && !l) && t.emit("fromEdge"), t.emit("progress", s)
        }, updateSlidesClasses: function () {
            var e = this, t = e.slides, i = e.params, a = e.$wrapperEl, s = e.activeIndex, n = e.realIndex,
                r = e.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (s = r ? e.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass), i.loop && (s.hasClass(i.slideDuplicateClass) ? a.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]') : a.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]')).addClass(i.slideDuplicateActiveClass);
            n = s.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === n.length && (n = t.eq(0)).addClass(i.slideNextClass);
            s = s.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === s.length && (s = t.eq(-1)).addClass(i.slidePrevClass), i.loop && ((n.hasClass(i.slideDuplicateClass) ? a.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]') : a.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]')).addClass(i.slideDuplicateNextClass), (s.hasClass(i.slideDuplicateClass) ? a.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]') : a.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')).addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t = this, i = t.rtl ? t.translate : -t.translate, a = t.slidesGrid, s = t.snapGrid, n = t.params,
                r = t.activeIndex, o = t.realIndex, l = t.snapIndex, d = e;
            if (void 0 === d) {
                for (var u = 0; u < a.length; u += 1) void 0 !== a[u + 1] ? i >= a[u] && i < a[u + 1] - (a[u + 1] - a[u]) / 2 ? d = u : i >= a[u] && i < a[u + 1] && (d = u + 1) : i >= a[u] && (d = u);
                n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            (n = 0 <= s.indexOf(i) ? s.indexOf(i) : Math.floor(d / n.slidesPerGroup)) >= s.length && (n = s.length - 1), d !== r ? (s = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10), D.extend(t, {
                snapIndex: n,
                realIndex: s,
                previousIndex: r,
                activeIndex: d
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== s && t.emit("realIndexChange"), t.emit("slideChange")) : n !== l && (t.snapIndex = n, t.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this, i = t.params, a = T(e.target).closest("." + i.slideClass)[0], s = !1;
            if (a) for (var n = 0; n < t.slides.length; n += 1) t.slides[n] === a && (s = !0);
            if (!a || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(T(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = T(a).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    }, f = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtl, a = this.translate, s = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -a : a;
            e = D.getTranslate(s[0], e);
            return (e = i ? -e : e) || 0
        }, setTranslate: function (e, t) {
            var i = this, a = i.rtl, s = i.params, n = i.$wrapperEl, r = i.progress, o = 0, l = 0;
            i.isHorizontal() ? o = a ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || ($.transforms3d ? n.transform("translate3d(" + o + "px, " + l + "px, 0px)") : n.transform("translate(" + o + "px, " + l + "px)")), i.translate = i.isHorizontal() ? o : l;
            l = i.maxTranslate() - i.minTranslate();
            (0 == l ? 0 : (e - i.minTranslate()) / l) !== r && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    }, m = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this, a = i.activeIndex, s = i.params, n = i.previousIndex;
            s.autoHeight && i.updateAutoHeight();
            t = t || (n < a ? "next" : a < n ? "prev" : "reset");
            i.emit("transitionStart"), e && a !== n && ("reset" !== t ? (i.emit("slideChangeTransitionStart"), "next" === t ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")) : i.emit("slideResetTransitionStart"))
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this, a = i.activeIndex, s = i.previousIndex;
            i.animating = !1, i.setTransition(0);
            t = t || (s < a ? "next" : a < s ? "prev" : "reset");
            i.emit("transitionEnd"), e && a !== s && ("reset" !== t ? (i.emit("slideChangeTransitionEnd"), "next" === t ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")) : i.emit("slideResetTransitionEnd"))
        }
    }, v = {
        slideTo: function (e, t, i, a) {
            void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var s = this, n = e = void 0 === e ? 0 : e;
            n < 0 && (n = 0);
            var r = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, u = s.activeIndex, c = s.rtl,
                p = s.$wrapperEl;
            if (s.animating && r.preventIntercationOnTransition) return !1;
            e = Math.floor(n / r.slidesPerGroup);
            e >= o.length && (e = o.length - 1), (u || r.initialSlide || 0) === (d || 0) && i && s.emit("beforeSlideChangeStart");
            var h, f = -o[e];
            if (s.updateProgress(f), r.normalizeSlideIndex) for (var m = 0; m < l.length; m += 1) -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (n = m);
            if (s.initialized && n !== u) {
                if (!s.allowSlideNext && f < s.translate && f < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (u || 0) !== n) return !1
            }
            return h = u < n ? "next" : n < u ? "prev" : "reset", c && -f === s.translate || !c && f === s.translate ? (s.updateActiveIndex(n), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== r.effect && s.setTranslate(f), "reset" !== h && (s.transitionStart(i, h), s.transitionEnd(i, h)), !1) : (0 !== t && $.transition ? (s.setTransition(t), s.setTranslate(f), s.updateActiveIndex(n), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, a), s.transitionStart(i, h), s.animating || (s.animating = !0, p.transitionEnd(function () {
                s && !s.destroyed && s.transitionEnd(i, h)
            }))) : (s.setTransition(0), s.setTranslate(f), s.updateActiveIndex(n), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, a), s.transitionStart(i, h), s.transitionEnd(i, h)), !0)
        }, slideToLoop: function (e, t, i, a) {
            void 0 === t && (t = this.params.speed);
            e = void 0 === e ? 0 : e;
            return this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, i = void 0 === i ? !0 : i, a)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var a = this, s = a.params, n = a.animating;
            return s.loop ? !n && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, a.slideTo(a.activeIndex + s.slidesPerGroup, e, t, i)) : a.slideTo(a.activeIndex + s.slidesPerGroup, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var a = this, s = a.params, n = a.animating;
            return s.loop ? !n && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, a.slideTo(a.activeIndex - 1, e, t, i)) : a.slideTo(a.activeIndex - 1, e, t, i)
        }, slideReset: function (e, t, i) {
            void 0 === e && (e = this.params.speed);
            return this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, a = t.$wrapperEl,
                s = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
            i.loop ? t.animating || (e = parseInt(T(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), D.nextTick(function () {
                t.slideTo(n)
            })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), D.nextTick(function () {
                t.slideTo(n)
            })) : t.slideTo(n)) : t.slideTo(n)
        }
    }, g = {
        loopCreate: function () {
            var a = this, e = a.params, t = a.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var i = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (i !== e.slidesPerGroup) {
                    for (var n = 0; n < i; n += 1) {
                        var r = T(c.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(r)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), a.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), a.loopedSlides += e.loopAdditionalSlides, a.loopedSlides > s.length && (a.loopedSlides = s.length);
            var o = [], l = [];
            s.each(function (e, t) {
                var i = T(t);
                e < a.loopedSlides && l.push(t), e < s.length && e >= s.length - a.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(T(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var u = o.length - 1; 0 <= u; --u) t.prepend(T(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
        }, loopFix: function () {
            var e = this, t = e.params, i = e.activeIndex, a = e.slides, s = e.loopedSlides, n = e.allowSlidePrev,
                r = e.allowSlideNext, o = e.snapGrid, l = e.rtl;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            var d, o = -o[i] - e.getTranslate();
            i < s ? (d = a.length - 3 * s + i, e.slideTo(d += s, 0, !1, !0) && 0 != o && e.setTranslate((l ? -e.translate : e.translate) - o)) : ("auto" === t.slidesPerView && 2 * s <= i || i > a.length - 2 * t.slidesPerView) && (d = -a.length + i + s, e.slideTo(d += s, 0, !1, !0) && 0 != o && e.setTranslate((l ? -e.translate : e.translate) - o)), e.allowSlidePrev = n, e.allowSlideNext = r
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    }, b = {
        setGrabCursor: function (e) {
            var t;
            !$.touch && this.params.simulateTouch && ((t = this.el).style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab")
        }, unsetGrabCursor: function () {
            $.touch || (this.el.style.cursor = "")
        }
    }, y = {
        appendSlide: function (e) {
            var t = this, i = t.$wrapperEl, a = t.params;
            if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && i.append(e[s]); else i.append(e);
            a.loop && t.loopCreate(), a.observer && $.observer || t.update()
        }, prependSlide: function (e) {
            var t = this, i = t.params, a = t.$wrapperEl, s = t.activeIndex;
            i.loop && t.loopDestroy();
            var n = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && a.prepend(e[r]);
                n = s + e.length
            } else a.prepend(e);
            i.loop && t.loopCreate(), i.observer && $.observer || t.update(), t.slideTo(n, 0, !1)
        }, removeSlide: function (e) {
            var t = this, i = t.params, a = t.$wrapperEl, s = t.activeIndex;
            i.loop && (t.loopDestroy(), t.slides = a.children("." + i.slideClass));
            var n, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) n = e[o], t.slides[n] && t.slides.eq(n).remove(), n < r && --r;
                r = Math.max(r, 0)
            } else t.slides[n = e] && t.slides.eq(n).remove(), n < r && --r, r = Math.max(r, 0);
            i.loop && t.loopCreate(), i.observer && $.observer || t.update(), i.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, w = (E = u.navigator.userAgent, x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        windows: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        cordova: u.cordova || u.phonegap,
        phonegap: u.cordova || u.phonegap
    }, d = E.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), e = E.match(/(Android);?[\s\/]+([\d.]+)?/), t = E.match(/(iPad).*OS\s([\d_]+)/), p = E.match(/(iPod)(.*OS\s([\d_]+))?/), r = !t && E.match(/(iPhone\sOS|iOS)\s([\d_]+)/), d && (x.os = "windows", x.osVersion = d[2], x.windows = !0), e && !d && (x.os = "android", x.osVersion = e[2], x.android = !0, x.androidChrome = 0 <= E.toLowerCase().indexOf("chrome")), (t || r || p) && (x.os = "ios", x.ios = !0), r && !p && (x.osVersion = r[2].replace(/_/g, "."), x.iphone = !0), t && (x.osVersion = t[2].replace(/_/g, "."), x.ipad = !0), p && (x.osVersion = p[3] ? p[3].replace(/_/g, ".") : null, x.iphone = !0), x.ios && x.osVersion && 0 <= E.indexOf("Version/") && "10" === x.osVersion.split(".")[0] && (x.osVersion = E.toLowerCase().split("version/")[1].split(" ")[0]), x.desktop = !(x.os || x.android || x.webView), x.webView = (r || t || p) && E.match(/.*AppleWebKit(?!.*Safari)/i), x.os && "ios" === x.os && (t = x.osVersion.split("."), E = c.querySelector('meta[name="viewport"]'), x.minimalUi = !x.webView && (p || r) && (7 == +t[0] ? 1 <= +t[1] : 7 < +t[0]) && E && 0 <= E.getAttribute("content").indexOf("minimal-ui")), x.pixelRatio = u.devicePixelRatio || 1, x);
    var x, t = {
        attachEvents: function () {
            var e = this, t = e.params, i = e.touchEvents, a = e.el, s = e.wrapperEl;
            e.onTouchStart = function (e) {
                var t, i, a = this, s = a.touchEventsData, n = a.params, r = a.touches;
                a.animating && n.preventIntercationOnTransition || ((t = e).originalEvent && (t = t.originalEvent), s.isTouchEvent = "touchstart" === t.type, !s.isTouchEvent && "which" in t && 3 === t.which || s.isTouched && s.isMoved || (n.noSwiping && T(t.target).closest(n.noSwipingSelector || "." + n.noSwipingClass)[0] ? a.allowClick = !0 : n.swipeHandler && !T(t).closest(n.swipeHandler)[0] || (r.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, r.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY, i = r.currentX, e = r.currentY, w.ios && !w.cordova && n.iOSEdgeSwipeDetection && i <= n.iOSEdgeSwipeThreshold && i >= u.screen.width - n.iOSEdgeSwipeThreshold || (D.extend(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), r.startX = i, r.startY = e, s.touchStartTime = D.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, 0 < n.threshold && (s.allowThresholdMove = !1), "touchstart" !== t.type && (n = !0, T(t.target).is(s.formElements) && (n = !1), c.activeElement && T(c.activeElement).is(s.formElements) && c.activeElement !== t.target && c.activeElement.blur(), n && a.allowTouchMove && t.preventDefault()), a.emit("touchStart", t)))))
            }.bind(e), e.onTouchMove = function (e) {
                var t = this, i = t.touchEventsData, a = t.params, s = t.touches, n = t.rtl, r = e;
                if (r.originalEvent && (r = r.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== r.type) {
                        var o = ("touchmove" === r.type ? r.targetTouches[0] : r).pageX,
                            l = ("touchmove" === r.type ? r.targetTouches[0] : r).pageY;
                        if (r.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void (i.isTouched && (D.extend(s, {
                            startX: o,
                            startY: l,
                            currentX: o,
                            currentY: l
                        }), i.touchStartTime = D.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (t.isVertical()) {
                            if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                        } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                        if (i.isTouchEvent && c.activeElement && r.target === c.activeElement && T(r.target).is(i.formElements)) return i.isMoved = !0, void (t.allowClick = !1);
                        if (i.allowTouchCallbacks && t.emit("touchMove", r), !(r.targetTouches && 1 < r.targetTouches.length)) {
                            s.currentX = o, s.currentY = l;
                            e = s.currentX - s.startX, o = s.currentY - s.startY;
                            if (void 0 === i.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : 25 <= e * e + o * o && (l = 180 * Math.atan2(Math.abs(o), Math.abs(e)) / Math.PI, i.isScrolling = t.isHorizontal() ? l > a.touchAngle : 90 - l > a.touchAngle)), i.isScrolling && t.emit("touchMoveOpposite", r), "undefined" == typeof startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                                t.allowClick = !1, r.preventDefault(), a.touchMoveStopPropagation && !a.nested && r.stopPropagation(), i.isMoved || (a.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", r)), t.emit("sliderMove", r), i.isMoved = !0;
                                e = t.isHorizontal() ? e : o;
                                s.diff = e, e *= a.touchRatio, t.swipeDirection = 0 < (e = n ? -e : e) ? "prev" : "next", i.currentTranslate = e + i.startTranslate;
                                o = !0, n = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (n = 0), 0 < e && i.currentTranslate > t.minTranslate() ? (o = !1, a.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + e, n))) : e < 0 && i.currentTranslate < t.maxTranslate() && (o = !1, a.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - e, n))), o && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 0 < a.threshold) {
                                    if (!(Math.abs(e) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: D.now()
                                })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", r)
            }.bind(e), e.onTouchEnd = function (e) {
                var t = this, i = t.touchEventsData, a = t.params, s = t.touches, n = t.rtl, r = t.$wrapperEl,
                    o = t.slidesGrid, l = t.snapGrid, d = e;
                if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && a.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                a.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var u, c = D.now(), e = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), e < 300 && 300 < c - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = D.nextTick(function () {
                    t && !t.destroyed && t.emit("click", d)
                }, 300)), e < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = D.now(), D.nextTick(function () {
                    t.destroyed || (t.allowClick = !0)
                }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = a.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate, a.freeMode) if (u < -t.minTranslate()) t.slideTo(t.activeIndex); else if (u > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1); else {
                    if (a.freeModeMomentum) {
                        1 < i.velocities.length ? (v = i.velocities.pop(), h = i.velocities.pop(), p = v.position - h.position, h = v.time - h.time, t.velocity = p / h, t.velocity /= 2, Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0), (150 < h || 300 < D.now() - v.time) && (t.velocity = 0)) : t.velocity = 0, t.velocity *= a.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var p = 1e3 * a.freeModeMomentumRatio, h = t.velocity * p, f = t.translate + h;
                        n && (f = -f);
                        var m, v = !1, h = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
                        if (f < t.maxTranslate()) a.freeModeMomentumBounce ? (f + t.maxTranslate() < -h && (f = t.maxTranslate() - h), m = t.maxTranslate(), i.allowMomentumBounce = v = !0) : f = t.maxTranslate(); else if (f > t.minTranslate()) a.freeModeMomentumBounce ? (f - t.minTranslate() > h && (f = t.minTranslate() + h), m = t.minTranslate(), i.allowMomentumBounce = v = !0) : f = t.minTranslate(); else if (a.freeModeSticky) {
                            for (var g, b = 0; b < l.length; b += 1) if (l[b] > -f) {
                                g = b;
                                break
                            }
                            f = -(f = Math.abs(l[g] - f) < Math.abs(l[g - 1] - f) || "next" === t.swipeDirection ? l[g] : l[g - 1])
                        }
                        if (0 !== t.velocity) p = n ? Math.abs((-f - t.translate) / t.velocity) : Math.abs((f - t.translate) / t.velocity); else if (a.freeModeSticky) return void t.slideReset();
                        a.freeModeMomentumBounce && v ? (t.updateProgress(m), t.setTransition(p), t.setTranslate(f), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function () {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(a.speed), t.setTranslate(m), r.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(f), t.setTransition(p), t.setTranslate(f), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(f), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    (!a.freeModeMomentum || e >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var y = 0, w = t.slidesSizesGrid[0], x = 0; x < o.length; x += a.slidesPerGroup) void 0 !== o[x + a.slidesPerGroup] ? u >= o[x] && u < o[x + a.slidesPerGroup] && (w = o[(y = x) + a.slidesPerGroup] - o[x]) : u >= o[x] && (y = x, w = o[o.length - 1] - o[o.length - 2]);
                    p = (u - o[y]) / w;
                    e > a.longSwipesMs ? a.longSwipes ? ("next" === t.swipeDirection && (p >= a.longSwipesRatio ? t.slideTo(y + a.slidesPerGroup) : t.slideTo(y)), "prev" === t.swipeDirection && (p > 1 - a.longSwipesRatio ? t.slideTo(y + a.slidesPerGroup) : t.slideTo(y))) : t.slideTo(t.activeIndex) : a.shortSwipes ? ("next" === t.swipeDirection && t.slideTo(y + a.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(y)) : t.slideTo(t.activeIndex)
                }
            }.bind(e), e.onClick = function (e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var n = "container" === t.touchEventsTarget ? a : s, a = !!t.nested;
            $.touch || !$.pointerEvents && !$.prefixedPointerEvents ? ($.touch && (s = !("touchstart" !== i.start || !$.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
            }, n.addEventListener(i.start, e.onTouchStart, s), n.addEventListener(i.move, e.onTouchMove, $.passiveListener ? {
                passive: !1,
                capture: a
            } : a), n.addEventListener(i.end, e.onTouchEnd, s)), (t.simulateTouch && !w.ios && !w.android || t.simulateTouch && !$.touch && w.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1), c.addEventListener("mousemove", e.onTouchMove, a), c.addEventListener("mouseup", e.onTouchEnd, !1))) : (n.addEventListener(i.start, e.onTouchStart, !1), c.addEventListener(i.move, e.onTouchMove, a), c.addEventListener(i.end, e.onTouchEnd, !1)), (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", o)
        }, detachEvents: function () {
            var e = this, t = e.params, i = e.touchEvents, a = e.el, s = e.wrapperEl,
                n = "container" === t.touchEventsTarget ? a : s, a = !!t.nested;
            $.touch || !$.pointerEvents && !$.prefixedPointerEvents ? ($.touch && (s = !("onTouchStart" !== i.start || !$.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
            }, n.removeEventListener(i.start, e.onTouchStart, s), n.removeEventListener(i.move, e.onTouchMove, a), n.removeEventListener(i.end, e.onTouchEnd, s)), (t.simulateTouch && !w.ios && !w.android || t.simulateTouch && !$.touch && w.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1), c.removeEventListener("mousemove", e.onTouchMove, a), c.removeEventListener("mouseup", e.onTouchEnd, !1))) : (n.removeEventListener(i.start, e.onTouchStart, !1), c.removeEventListener(i.move, e.onTouchMove, a), c.removeEventListener(i.end, e.onTouchEnd, !1)), (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", o)
        }
    }, E = {
        setBreakpoint: function () {
            var e = this, t = e.activeIndex, i = e.loopedSlides;
            void 0 === i && (i = 0);
            var a, s = e.params, n = s.breakpoints;
            !n || 0 === Object.keys(n).length || (a = e.getBreakpoint(n)) && e.currentBreakpoint !== a && (n = a in n ? n[a] : e.originalParams, s = s.loop && n.slidesPerView !== s.slidesPerView, D.extend(e.params, n), D.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
            }), e.currentBreakpoint = a, s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", n))
        }, getBreakpoint: function (e) {
            if (e) {
                var t = !1, i = [];
                Object.keys(e).forEach(function (e) {
                    i.push(e)
                }), i.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var a = 0; a < i.length; a += 1) {
                    var s = i[a];
                    s >= u.innerWidth && !t && (t = s)
                }
                return t || "max"
            }
        }
    }, S = {
        isIE: !!u.navigator.userAgent.match(/Trident/g) || !!u.navigator.userAgent.match(/MSIE/g),
        isSafari: 0 <= (x = u.navigator.userAgent.toLowerCase()).indexOf("safari") && x.indexOf("chrome") < 0 && x.indexOf("android") < 0,
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(u.navigator.userAgent)
    };
    var C = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, M = {
            update: h,
            translate: f,
            transition: m,
            slide: v,
            loop: g,
            grabCursor: b,
            manipulation: y,
            events: t,
            breakpoints: E,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this, t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowTouchMove = !e.isLocked, t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames, i = this.params, e = this.rtl, a = this.$el, s = [];
                    s.push(i.direction), i.freeMode && s.push("free-mode"), $.flexbox || s.push("no-flexbox"), i.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < i.slidesPerColumn && s.push("multirow"), w.android && s.push("android"), w.ios && s.push("ios"), S.isIE && ($.pointerEvents || $.prefixedPointerEvents) && s.push("wp8-" + i.direction), s.forEach(function (e) {
                        t.push(i.containerModifierClass + e)
                    }), a.addClass(t.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, i, a, s, n) {
                    function r() {
                        n && n()
                    }

                    (!e.complete || !s) && t ? ((s = new u.Image).onload = r, s.onerror = r, a && (s.sizes = a), i && (s.srcset = i), t && (s.src = t)) : r()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var a = e.imagesToLoad[i];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, k = {}, z = function (l) {
            function d() {
                for (var e, i, t = [], a = arguments.length; a--;) t[a] = arguments[a];
                i = (i = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : (e = t[0], t[1])) || {}, i = D.extend({}, i), e && !i.el && (i.el = e), l.call(this, i), Object.keys(M).forEach(function (t) {
                    Object.keys(M[t]).forEach(function (e) {
                        d.prototype[e] || (d.prototype[e] = M[t][e])
                    })
                });
                var s = this;
                void 0 === s.modules && (s.modules = {}), Object.keys(s.modules).forEach(function (e) {
                    var t = s.modules[e];
                    t.params && (e = Object.keys(t.params)[0], "object" == typeof (t = t.params[e]) && e in i && "enabled" in t && (!0 === i[e] && (i[e] = {enabled: !0}), "object" != typeof i[e] || "enabled" in i[e] || (i[e].enabled = !0), i[e] || (i[e] = {enabled: !1})))
                });
                var n = D.extend({}, C);
                s.useModulesParams(n), s.params = D.extend({}, n, k, i), s.originalParams = D.extend({}, s.params), s.passedParams = D.extend({}, i);
                var r = (s.$ = T)(s.params.el);
                if (e = r[0]) {
                    if (1 < r.length) {
                        var o = [];
                        return r.each(function (e, t) {
                            t = D.extend({}, i, {el: t});
                            o.push(new d(t))
                        }), o
                    }
                    e.swiper = s, r.data("swiper", s);
                    n = r.children("." + s.params.wrapperClass);
                    return D.extend(s, {
                        $el: r,
                        el: e,
                        $wrapperEl: n,
                        wrapperEl: n[0],
                        classNames: [],
                        slides: T(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === s.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === s.params.direction
                        },
                        rtl: "horizontal" === s.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                        wrongRTL: "-webkit-box" === n.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: (r = ["touchstart", "touchmove", "touchend"], n = ["mousedown", "mousemove", "mouseup"], $.pointerEvents ? n = ["pointerdown", "pointermove", "pointerup"] : $.prefixedPointerEvents && (n = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), s.touchEventsTouch = {
                            start: r[0],
                            move: r[1],
                            end: r[2]
                        }, s.touchEventsDesktop = {
                            start: n[0],
                            move: n[1],
                            end: n[2]
                        }, $.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: D.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.useModules(), s.params.init && s.init(), s
                }
            }

            l && (d.__proto__ = l);
            var e = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return ((d.prototype = Object.create(l && l.prototype)).constructor = d).prototype.slidesPerViewDynamic = function () {
                var e = this, t = e.params, i = e.slides, a = e.slidesGrid, s = e.size, n = e.activeIndex, r = 1;
                if (t.centeredSlides) {
                    for (var o, l = i[n].swiperSlideSize, d = n + 1; d < i.length; d += 1) i[d] && !o && (r += 1, s < (l += i[d].swiperSlideSize) && (o = !0));
                    for (var u = n - 1; 0 <= u; --u) i[u] && !o && (r += 1, s < (l += i[u].swiperSlideSize) && (o = !0))
                } else for (var c = n + 1; c < i.length; c += 1) a[c] - a[n] < s && (r += 1);
                return r
            }, d.prototype.update = function () {
                var t = this;

                function e() {
                    var e = t.rtl ? -1 * t.translate : t.translate,
                        e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                t && !t.destroyed && (t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update"))
            }, d.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, d.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, a = i.params, s = i.$el, n = i.$wrapperEl, r = i.slides;
                i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), a.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), n.removeAttr("style"), r && r.length && r.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), D.deleteProps(i)), i.destroyed = !0
            }, d.extendDefaults = function (e) {
                D.extend(k, e)
            }, e.extendedDefaults.get = function () {
                return k
            }, e.defaults.get = function () {
                return C
            }, e.Class.get = function () {
                return l
            }, e.$.get = function () {
                return T
            }, Object.defineProperties(d, e), d
        }(s), v = {name: "device", proto: {device: w}, static: {device: w}},
        g = {name: "support", proto: {support: $}, static: {support: $}},
        b = {name: "browser", proto: {browser: S}, static: {browser: S}}, y = {
            name: "resize", create: function () {
                var e = this;
                D.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    u.addEventListener("resize", this.resize.resizeHandler), u.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    u.removeEventListener("resize", this.resize.resizeHandler), u.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, _ = {
            func: u.MutationObserver || u.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, a = new _.func(function (e) {
                    e.forEach(function (e) {
                        i.emit("observerUpdate", e)
                    })
                });
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(a)
            }, init: function () {
                var e = this;
                if ($.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], {childList: !1}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, t = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                D.extend(this, {
                    observer: {
                        init: _.init.bind(this),
                        attach: _.attach.bind(this),
                        destroy: _.destroy.bind(this),
                        observers: []
                    }
                })
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, L = {
            update: function (e) {
                var t = this, i = t.params, a = i.slidesPerView, s = i.slidesPerGroup, n = i.centeredSlides, r = t.virtual,
                    o = r.from, l = r.to, d = r.slides, u = r.slidesGrid, c = r.renderSlide, p = r.offset;
                t.updateActiveIndex();
                var i = t.activeIndex || 0, r = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top",
                    s = n ? (m = Math.floor(a / 2) + s, Math.floor(a / 2) + s) : (m = a + (s - 1), s),
                    h = Math.max((i || 0) - s, 0), f = Math.min((i || 0) + m, d.length - 1),
                    m = (t.slidesGrid[h] || 0) - (t.slidesGrid[0] || 0);

                function v() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (D.extend(t.virtual, {
                    from: h,
                    to: f,
                    offset: m,
                    slidesGrid: t.slidesGrid
                }), o === h && l === f && !e) return t.slidesGrid !== u && m !== p && t.slides.css(r, m + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: m,
                    from: h,
                    to: f,
                    slides: function () {
                        for (var e = [], t = h; t <= f; t += 1) e.push(d[t]);
                        return e
                    }()
                }), void v();
                var g = [], b = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var y = o; y <= l; y += 1) (y < h || f < y) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + y + '"]').remove();
                for (var w = 0; w < d.length; w += 1) h <= w && w <= f && (void 0 === l || e ? b.push(w) : (l < w && b.push(w), w < o && g.push(w)));
                b.forEach(function (e) {
                    t.$wrapperEl.append(c(d[e], e))
                }), g.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(c(d[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(r, m + "px"), v()
            }, renderSlide: function (e, t) {
                var i = this, a = i.params.virtual;
                if (a.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                e = a.renderSlide ? T(a.renderSlide.call(i, e, t)) : T('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t), a.cache && (i.virtual.cache[t] = e), e
            }, appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t, i, a = this;
                a.virtual.slides.unshift(e), a.params.virtual.cache && (t = a.virtual.cache, i = {}, Object.keys(t).forEach(function (e) {
                    i[e + 1] = t[e]
                }), a.virtual.cache = i), a.virtual.update(!0), a.slideNext(0)
            }
        }, E = {
            name: "virtual",
            params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
            create: function () {
                var e = this;
                D.extend(e, {
                    virtual: {
                        update: L.update.bind(e),
                        appendSlide: L.appendSlide.bind(e),
                        prependSlide: L.prependSlide.bind(e),
                        renderSlide: L.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e, t = this;
                    t.params.virtual.enabled && (t.classNames.push(t.params.containerModifierClass + "virtual"), D.extend(t.params, e = {watchSlidesProgress: !0}), D.extend(t.originalParams, e), t.virtual.update())
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, P = {
            handle: function (e) {
                var t = this, i = e, a = (i = i.originalEvent ? i.originalEvent : i).keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === a || t.isVertical() && 40 === a)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === a || t.isVertical() && 38 === a)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || c.activeElement && c.activeElement.nodeName && ("input" === c.activeElement.nodeName.toLowerCase() || "textarea" === c.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
                        var s = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = u.innerWidth, r = u.innerHeight, e = t.$el.offset();
                        t.rtl && (e.left -= t.$el[0].scrollLeft);
                        for (var o = [[e.left, e.top], [e.left + t.width, e.top], [e.left, e.top + t.height], [e.left + t.width, e.top + t.height]], l = 0; l < o.length; l += 1) {
                            var d = o[l];
                            0 <= d[0] && d[0] <= n && 0 <= d[1] && d[1] <= r && (s = !0)
                        }
                        if (!s) return
                    }
                    t.isHorizontal() ? (37 !== a && 39 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === a && !t.rtl || 37 === a && t.rtl) && t.slideNext(), (37 === a && !t.rtl || 39 === a && t.rtl) && t.slidePrev()) : (38 !== a && 40 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === a && t.slideNext(), 38 === a && t.slidePrev()), t.emit("keyPress", a)
                }
            }, enable: function () {
                this.keyboard.enabled || (T(c).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (T(c).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, s = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                D.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: P.enable.bind(this),
                        disable: P.disable.bind(this),
                        handle: P.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var I, A, O, N = {
        lastScrollTime: D.now(),
        event: -1 < u.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((O = (A = "onwheel") in c) || ((I = c.createElement("div")).setAttribute(A, "return;"), O = "function" == typeof I[A]), (O = !O && c.implementation && c.implementation.hasFeature && !0 !== c.implementation.hasFeature("", "") ? c.implementation.hasFeature("Events.wheel", "3.0") : O) ? "wheel" : "mousewheel"),
        normalize: function (e) {
            var t = 0, i = 0, a = 0, s = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), a = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), ((a = "deltaX" in e ? e.deltaX : a) || s) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, s *= 40) : (a *= 800, s *= 800)), {
                spinX: t = a && !t ? a < 1 ? -1 : 1 : t,
                spinY: i = s && !i ? s < 1 ? -1 : 1 : i,
                pixelX: a,
                pixelY: s
            }
        },
        handle: function (e) {
            var t = e, i = this, a = i.params.mousewheel;
            t.originalEvent && (t = t.originalEvent);
            var s = 0, n = i.rtl ? -1 : 1, r = N.normalize(t);
            if (a.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                s = r.pixelX * n
            } else {
                if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                s = r.pixelY
            } else s = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
            if (0 === s) return !0;
            if (a.invert && (s = -s), i.params.freeMode) {
                e = i.getTranslate() + s * a.sensitivity, n = i.isBeginning, r = i.isEnd;
                if ((e = e >= i.minTranslate() ? i.minTranslate() : e) <= i.maxTranslate() && (e = i.maxTranslate()), i.setTransition(0), i.setTranslate(e), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!n && i.isBeginning || !r && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = D.nextTick(function () {
                    i.slideReset()
                }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), e === i.minTranslate() || e === i.maxTranslate()) return !0
            } else {
                if (60 < D.now() - i.mousewheel.lastScrollTime) if (s < 0) if (i.isEnd && !i.params.loop || i.animating) {
                    if (a.releaseOnEdges) return !0
                } else i.slideNext(), i.emit("scroll", t); else if (i.isBeginning && !i.params.loop || i.animating) {
                    if (a.releaseOnEdges) return !0
                } else i.slidePrev(), i.emit("scroll", t);
                i.mousewheel.lastScrollTime = (new u.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable: function () {
            var e = this;
            if (!N.event) return !1;
            if (e.mousewheel.enabled) return !1;
            var t = e.$el;
            return (t = "container" !== e.params.mousewheel.eventsTarged ? T(e.params.mousewheel.eventsTarged) : t).on(N.event, e.mousewheel.handle), e.mousewheel.enabled = !0
        },
        disable: function () {
            var e = this;
            if (!N.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            var t = e.$el;
            return (t = "container" !== e.params.mousewheel.eventsTarged ? T(e.params.mousewheel.eventsTarged) : t).off(N.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
        }
    }, V = {
        update: function () {
            var e, t, i = this, a = i.params.navigation;
            i.params.loop || (e = (t = i.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (i.isBeginning ? t.addClass(a.disabledClass) : t.removeClass(a.disabledClass), t[i.params.watchOverflow && i.isLocked ? "addClass" : "removeClass"](a.lockClass)), e && 0 < e.length && (i.isEnd ? e.addClass(a.disabledClass) : e.removeClass(a.disabledClass), e[i.params.watchOverflow && i.isLocked ? "addClass" : "removeClass"](a.lockClass)))
        }, init: function () {
            var e, t, i = this, a = i.params.navigation;
            (a.nextEl || a.prevEl) && (a.nextEl && (e = T(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && 1 < e.length && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = T(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && 1 < t.length && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && 0 < e.length && e.on("click", function (e) {
                e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
            }), t && 0 < t.length && t.on("click", function (e) {
                e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
            }), D.extend(i.navigation, {$nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0]}))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, e = e.$prevEl;
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), e && e.length && (e.off("click"), e.removeClass(this.params.navigation.disabledClass))
        }
    }, H = {
        update: function () {
            var e = this, t = e.rtl, a = e.params.pagination;
            if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var s, i = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length, n = e.pagination.$el,
                    r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (s -= i - 2 * e.loopedSlides), r - 1 < s && (s -= r), s < 0 && "bullets" !== e.params.paginationType && (s = r + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, u, c, p = e.pagination.bullets;
                    if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), 1 < a.dynamicMainBullets && void 0 !== e.previousIndex && (s > e.previousIndex && e.pagination.dynamicBulletIndex < a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex += 1 : s < e.previousIndex && 0 < e.pagination.dynamicBulletIndex && --e.pagination.dynamicBulletIndex), o = s - e.pagination.dynamicBulletIndex, d = ((l = o + (a.dynamicMainBullets - 1)) + o) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), 1 < n.length) p.each(function (e, t) {
                        var i = T(t), t = i.index();
                        t === s && i.addClass(a.bulletActiveClass), a.dynamicBullets && (o <= t && t <= l && i.addClass(a.bulletActiveClass + "-main"), t === o && i.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), t === l && i.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
                    }); else if (p.eq(s).addClass(a.bulletActiveClass), a.dynamicBullets) {
                        for (var h = p.eq(o), i = p.eq(l), f = o; f <= l; f += 1) p.eq(f).addClass(a.bulletActiveClass + "-main");
                        h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), i.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
                    }
                    a.dynamicBullets && (c = Math.min(p.length, a.dynamicMainBullets + 4), u = (e.pagination.bulletSize * c - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize, c = t ? "right" : "left", p.css(e.isHorizontal() ? c : "top", u + "px"))
                }
                "fraction" === a.type && (n.find("." + a.currentClass).text(s + 1), n.find("." + a.totalClass).text(r)), "progressbar" === a.type && (c = t = (s + 1) / r, u = 1, e.isHorizontal() || (u = t, c = 1), n.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + c + ") scaleY(" + u + ")").transition(e.params.speed)), "custom" === a.type && a.renderCustom ? (n.html(a.renderCustom(e, s + 1, r)), e.emit("paginationRender", e, n[0])) : e.emit("paginationUpdate", e, n[0]), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length, a = e.pagination.$el,
                    s = "";
                if ("bullets" === t.type) {
                    for (var n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < n; r += 1) t.renderBullet ? s += t.renderBullet.call(e, r, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    a.html(s), e.pagination.bullets = a.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', a.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', a.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var e, t = this, i = t.params.pagination;
            !i.el || 0 !== (e = T(i.el)).length && (t.params.uniqueNavElements && "string" == typeof i.el && 1 < e.length && 1 === t.$el.find(i.el).length && (e = t.$el.find(i.el)), "bullets" === i.type && i.clickable && e.addClass(i.clickableClass), e.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (e.addClass("" + i.modifierClass + i.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), i.clickable && e.on("click", "." + i.bulletClass, function (e) {
                e.preventDefault();
                e = T(this).index() * t.params.slidesPerGroup;
                t.params.loop && (e += t.loopedSlides), t.slideTo(e)
            }), D.extend(t.pagination, {$el: e, el: e[0]}))
        }, destroy: function () {
            var e, t = this, i = t.params.pagination;
            i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length && ((e = t.pagination.$el).removeClass(i.hiddenClass), e.removeClass(i.modifierClass + i.type), t.pagination.bullets && t.pagination.bullets.removeClass(i.bulletActiveClass), i.clickable && e.off("click", "." + i.bulletClass))
        }
    }, B = {
        setTranslate: function () {
            var e, t, i, a, s, n, r, o, l = this;
            l.params.scrollbar.el && l.scrollbar.el && (r = l.scrollbar, e = l.rtl, o = l.progress, t = r.dragSize, i = r.trackSize, a = r.$dragEl, s = r.$el, n = l.params.scrollbar, o = (i - (r = t)) * o, e && l.isHorizontal() ? 0 < (o = -o) ? (r = t - o, o = 0) : i < -o + t && (r = i + o) : o < 0 ? (r = t + o, o = 0) : i < o + t && (r = i - o), l.isHorizontal() ? ($.transforms3d ? a.transform("translate3d(" + o + "px, 0, 0)") : a.transform("translateX(" + o + "px)"), a[0].style.width = r + "px") : ($.transforms3d ? a.transform("translate3d(0px, " + o + "px, 0)") : a.transform("translateY(" + o + "px)"), a[0].style.height = r + "px"), n.hide && (clearTimeout(l.scrollbar.timeout), s[0].style.opacity = 1, l.scrollbar.timeout = setTimeout(function () {
                s[0].style.opacity = 0, s.transition(400)
            }, 1e3)))
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            var e, t, i, a, s, n, r, o = this;
            o.params.scrollbar.el && o.scrollbar.el && (t = (e = o.scrollbar).$dragEl, i = e.$el, t[0].style.width = "", t[0].style.height = "", a = o.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = (s = o.size / o.virtualSize) * (a / o.size), r = "auto" === o.params.scrollbar.dragSize ? a * s : parseInt(o.params.scrollbar.dragSize, 10), o.isHorizontal() ? t[0].style.width = r + "px" : t[0].style.height = r + "px", i[0].style.display = 1 <= s ? "none" : "", o.params.scrollbarHide && (i[0].style.opacity = 0), D.extend(e, {
                trackSize: a,
                divider: s,
                moveDivider: n,
                dragSize: r
            }), e.$el[o.params.watchOverflow && o.isLocked ? "addClass" : "removeClass"](o.params.scrollbar.lockClass))
        }, setDragPosition: function (e) {
            var t = this, i = t.scrollbar, a = i.$el, s = i.dragSize, i = i.trackSize,
                e = t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                s = (e - a.offset()[t.isHorizontal() ? "left" : "top"] - s / 2) / (i - s);
            s = Math.max(Math.min(s, 1), 0), t.rtl && (s = 1 - s);
            s = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * s;
            t.updateProgress(s), t.setTranslate(s), t.updateActiveIndex(), t.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this, i = t.params.scrollbar, a = t.scrollbar, s = t.$wrapperEl, n = a.$el, r = a.$dragEl;
            t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), a.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), n.transition(0), i.hide && n.css("opacity", 1), t.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, a = t.$el, s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), a.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this, i = t.params.scrollbar, a = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = D.nextTick(function () {
                a.css("opacity", 0), a.transition(400)
            }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideReset())
        }, enableDraggable: function () {
            var e, t, i, a, s, n, r = this;
            r.params.scrollbar.el && (n = r.scrollbar, e = r.touchEvents, t = r.touchEventsDesktop, i = r.params, a = n.$el[0], s = !(!$.passiveListener || !i.passiveListener) && {
                passive: !1,
                capture: !1
            }, n = !(!$.passiveListener || !i.passiveListener) && {
                passive: !0,
                capture: !1
            }, $.touch || !$.pointerEvents && !$.prefixedPointerEvents ? ($.touch && (a.addEventListener(e.start, r.scrollbar.onDragStart, s), a.addEventListener(e.move, r.scrollbar.onDragMove, s), a.addEventListener(e.end, r.scrollbar.onDragEnd, n)), (i.simulateTouch && !w.ios && !w.android || i.simulateTouch && !$.touch && w.ios) && (a.addEventListener("mousedown", r.scrollbar.onDragStart, s), c.addEventListener("mousemove", r.scrollbar.onDragMove, s), c.addEventListener("mouseup", r.scrollbar.onDragEnd, n))) : (a.addEventListener(t.start, r.scrollbar.onDragStart, s), c.addEventListener(t.move, r.scrollbar.onDragMove, s), c.addEventListener(t.end, r.scrollbar.onDragEnd, n)))
        }, disableDraggable: function () {
            var e, t, i, a, s, n, r = this;
            r.params.scrollbar.el && (n = r.scrollbar, e = r.touchEvents, t = r.touchEventsDesktop, i = r.params, a = n.$el[0], s = !(!$.passiveListener || !i.passiveListener) && {
                passive: !1,
                capture: !1
            }, n = !(!$.passiveListener || !i.passiveListener) && {
                passive: !0,
                capture: !1
            }, $.touch || !$.pointerEvents && !$.prefixedPointerEvents ? ($.touch && (a.removeEventListener(e.start, r.scrollbar.onDragStart, s), a.removeEventListener(e.move, r.scrollbar.onDragMove, s), a.removeEventListener(e.end, r.scrollbar.onDragEnd, n)), (i.simulateTouch && !w.ios && !w.android || i.simulateTouch && !$.touch && w.ios) && (a.removeEventListener("mousedown", r.scrollbar.onDragStart, s), c.removeEventListener("mousemove", r.scrollbar.onDragMove, s), c.removeEventListener("mouseup", r.scrollbar.onDragEnd, n))) : (a.removeEventListener(t.start, r.scrollbar.onDragStart, s), c.removeEventListener(t.move, r.scrollbar.onDragMove, s), c.removeEventListener(t.end, r.scrollbar.onDragEnd, n)))
        }, init: function () {
            var e, t, i, a, s = this;
            s.params.scrollbar.el && (e = s.scrollbar, a = s.$el, i = T((t = s.params.scrollbar).el), 0 === (a = (i = s.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === a.find(t.el).length ? a.find(t.el) : i).find("." + s.params.scrollbar.dragClass)).length && (a = T('<div class="' + s.params.scrollbar.dragClass + '"></div>'), i.append(a)), D.extend(e, {
                $el: i,
                el: i[0],
                $dragEl: a,
                dragEl: a[0]
            }), t.draggable && e.enableDraggable())
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, R = {
        setTransform: function (e, t) {
            var i = this.rtl, a = T(e), s = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0",
                r = a.attr("data-swiper-parallax-x"), o = a.attr("data-swiper-parallax-y"),
                e = a.attr("data-swiper-parallax-scale"), i = a.attr("data-swiper-parallax-opacity");
            r || o ? (r = r || "0", o = o || "0") : this.isHorizontal() ? (r = n, o = "0") : (o = n, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * s + "%" : r * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != i && (i = i - (i - 1) * (1 - Math.abs(t)), a[0].style.opacity = i), null == e ? a.transform("translate3d(" + r + ", " + o + ", 0px)") : (t = e - (e - 1) * (1 - Math.abs(t)), a.transform("translate3d(" + r + ", " + o + ", 0px) scale(" + t + ")"))
        }, setTranslate: function () {
            var a = this, e = a.$el, t = a.slides, s = a.progress, n = a.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                a.parallax.setTransform(t, s)
            }), t.each(function (e, t) {
                var i = t.progress;
                1 < a.params.slidesPerGroup && "auto" !== a.params.slidesPerView && (i += Math.ceil(e / 2) - s * (n.length - 1)), i = Math.min(Math.max(i, -1), 1), T(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    a.parallax.setTransform(t, i)
                })
            })
        }, setTransition: function (a) {
            void 0 === a && (a = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                var i = T(t), t = parseInt(i.attr("data-swiper-parallax-duration"), 10) || a;
                0 === a && (t = 0), i.transition(t)
            })
        }
    }, G = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX,
                e = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(a - t, 2) + Math.pow(e - i, 2))
        }, onGestureStart: function (e) {
            var t = this, i = t.params.zoom, a = t.zoom, s = a.gesture;
            if (a.fakeGestureTouched = !1, a.fakeGestureMoved = !1, !$.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                a.fakeGestureTouched = !0, s.scaleStart = G.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = T(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (!$.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, a.scaleMove = G.getDistanceBetweenTouches(e)
            }
            a.$imageEl && 0 !== a.$imageEl.length && ($.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = a.scaleMove / a.scaleStart * i.currentScale, i.scale > a.maxRatio && (i.scale = a.maxRatio - 1 + Math.pow(i.scale - a.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (!$.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            a.$imageEl && 0 !== a.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, a.maxRatio), t.minRatio), a.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (a.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, t = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (t.isTouched || (w.android && e.preventDefault(), t.isTouched = !0, t.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX, t.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY))
        }, onTouchMove: function (e) {
            var t = this, i = t.zoom, a = i.gesture, s = i.image, n = i.velocity;
            if (a.$imageEl && 0 !== a.$imageEl.length && (t.allowClick = !1, s.isTouched && a.$slideEl)) {
                s.isMoved || (s.width = a.$imageEl[0].offsetWidth, s.height = a.$imageEl[0].offsetHeight, s.startX = D.getTranslate(a.$imageWrapEl[0], "x") || 0, s.startY = D.getTranslate(a.$imageWrapEl[0], "y") || 0, a.slideWidth = a.$slideEl[0].offsetWidth, a.slideHeight = a.$slideEl[0].offsetHeight, a.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX), t.rtl && (s.startY = -s.startY));
                var r = s.width * i.scale, o = s.height * i.scale;
                if (!(r < a.slideWidth && o < a.slideHeight)) {
                    if (s.minX = Math.min(a.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(a.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, s.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !s.isMoved && !i.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), a.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, a = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var s = 300, n = 300, r = a.x * s, o = i.currentX + r, r = a.y * n, r = i.currentY + r;
                0 !== a.x && (s = Math.abs((o - i.currentX) / a.x)), 0 !== a.y && (n = Math.abs((r - i.currentY) / a.y));
                n = Math.max(s, n);
                i.currentX = o, i.currentY = r;
                r = i.width * e.scale, e = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - r / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - e / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(n).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, a, s = this, n = s.zoom, r = s.params.zoom, o = n.gesture, l = n.image;
            o.$slideEl || (o.$slideEl = s.clickedSlide ? T(s.clickedSlide) : s.slides.eq(s.activeIndex), o.$imageEl = o.$slideEl.find("img, svg, canvas"), o.$imageWrapEl = o.$imageEl.parent("." + r.containerClass)), o.$imageEl && 0 !== o.$imageEl.length && (o.$slideEl.addClass("" + r.zoomedSlideClass), l = void 0 === l.touchesStart.x && e ? (a = ("touchend" === e.type ? e.changedTouches[0] : e).pageX, ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : (a = l.touchesStart.x, l.touchesStart.y), n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, n.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, e ? (r = o.$slideEl[0].offsetWidth, e = o.$slideEl[0].offsetHeight, t = o.$slideEl.offset().left + r / 2 - a, i = o.$slideEl.offset().top + e / 2 - l, a = o.$imageEl[0].offsetWidth, l = o.$imageEl[0].offsetHeight, a = a * n.scale, l = l * n.scale, a = Math.min(r / 2 - a / 2, 0), e = Math.min(e / 2 - l / 2, 0), (l = -a) < (t = (t = t * n.scale) < a ? a : t) && (t = l), (l = -e) < (i = (i = i * n.scale) < e ? e : i) && (i = l)) : i = t = 0, o.$imageWrapEl.transition(300).transform("translate3d(" + t + "px, " + i + "px,0)"), o.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
        }, out: function () {
            var e = this, t = e.zoom, i = e.params.zoom, a = t.gesture;
            a.$slideEl || (a.$slideEl = e.clickedSlide ? T(e.clickedSlide) : e.slides.eq(e.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)), a.$imageEl && 0 !== a.$imageEl.length && (t.scale = 1, t.currentScale = 1, a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), a.$slideEl.removeClass("" + i.zoomedSlideClass), a.$slideEl = void 0)
        }, enable: function () {
            var e, t = this, i = t.zoom;
            i.enabled || (i.enabled = !0, e = !("touchstart" !== t.touchEvents.start || !$.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            }, $.gestures ? (t.$wrapperEl.on("gesturestart", ".swiper-slide", i.onGestureStart, e), t.$wrapperEl.on("gesturechange", ".swiper-slide", i.onGestureChange, e), t.$wrapperEl.on("gestureend", ".swiper-slide", i.onGestureEnd, e)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, ".swiper-slide", i.onGestureStart, e), t.$wrapperEl.on(t.touchEvents.move, ".swiper-slide", i.onGestureChange, e), t.$wrapperEl.on(t.touchEvents.end, ".swiper-slide", i.onGestureEnd, e)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, i.onTouchMove))
        }, disable: function () {
            var e, t = this, i = t.zoom;
            i.enabled && (t.zoom.enabled = !1, e = !("touchstart" !== t.touchEvents.start || !$.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            }, $.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", i.onGestureStart, e), t.$wrapperEl.off("gesturechange", ".swiper-slide", i.onGestureChange, e), t.$wrapperEl.off("gestureend", ".swiper-slide", i.onGestureEnd, e)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", i.onGestureStart, e), t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", i.onGestureChange, e), t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", i.onGestureEnd, e)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, i.onTouchMove))
        }
    }, X = {
        loadInSlide: function (e, o) {
            void 0 === o && (o = !0);
            var l, d = this, u = d.params.lazy;
            void 0 !== e && 0 !== d.slides.length && (e = (l = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e)).find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")"), 0 !== (e = l.hasClass(u.elementClass) && !l.hasClass(u.loadedClass) && !l.hasClass(u.loadingClass) ? e.add(l[0]) : e).length && e.each(function (e, t) {
                var i = T(t);
                i.addClass(u.loadingClass);
                var a = i.attr("data-background"), s = i.attr("data-src"), n = i.attr("data-srcset"),
                    r = i.attr("data-sizes");
                d.loadImage(i[0], s || a, n, r, !1, function () {
                    var e, t;
                    null == d || !d || d && !d.params || d.destroyed || (a ? (i.css("background-image", 'url("' + a + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), r && (i.attr("sizes", r), i.removeAttr("data-sizes")), s && (i.attr("src", s), i.removeAttr("data-src"))), i.addClass(u.loadedClass).removeClass(u.loadingClass), l.find("." + u.preloaderClass).remove(), d.params.loop && o && (t = l.attr("data-swiper-slide-index"), l.hasClass(d.params.slideDuplicateClass) ? (e = d.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + d.params.slideDuplicateClass + ")"), d.lazy.loadInSlide(e.index(), !1)) : (t = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'), d.lazy.loadInSlide(t.index(), !1))), d.emit("lazyImageReady", l[0], i[0]))
                }), d.emit("lazyImageLoad", l[0], i[0])
            }))
        }, load: function () {
            var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex,
                n = i.virtual && a.virtual.enabled, r = a.lazy, o = a.slidesPerView;

            function l(e) {
                if (n) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1
                } else if (s[e]) return 1
            }

            function d(e) {
                return n ? T(e).attr("data-swiper-slide-index") : T(e).index()
            }

            if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
                t = n ? T(t).attr("data-swiper-slide-index") : T(t).index();
                i.lazy.loadInSlide(t)
            }); else if (1 < o) for (var u = e; u < e + o; u += 1) l(u) && i.lazy.loadInSlide(u); else i.lazy.loadInSlide(e);
            if (r.loadPrevNext) if (1 < o || r.loadPrevNextAmount && 1 < r.loadPrevNextAmount) {
                for (var c = r.loadPrevNextAmount, r = o, p = Math.min(e + r + Math.max(c, r), s.length), c = Math.max(e - Math.max(r, c), 0), h = e + o; h < p; h += 1) l(h) && i.lazy.loadInSlide(h);
                for (var f = c; f < e; f += 1) l(f) && i.lazy.loadInSlide(f)
            } else {
                c = t.children("." + a.slideNextClass);
                0 < c.length && i.lazy.loadInSlide(d(c));
                c = t.children("." + a.slidePrevClass);
                0 < c.length && i.lazy.loadInSlide(d(c))
            }
        }
    }, Y = {
        LinearSpline: function (e, t) {
            var i, a, s, n, r, o = function (e, t) {
                for (a = -1, i = e.length; 1 < i - a;) e[s = i + a >> 1] <= t ? a = s : i = s;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (r = o(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new Y.LinearSpline(t.slidesGrid, e.slidesGrid) : new Y.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, a, s = this, n = s.controller.control;

            function r(e) {
                var t = e.rtl && "horizontal" === e.params.direction ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), a = -s.controller.spline.interpolate(-t)), a && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), a = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(n)) for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof z && r(n[o]); else n instanceof z && t !== n && r(n)
        }, setTransition: function (t, e) {
            var i, a = this, s = a.controller.control;

            function n(e) {
                e.setTransition(t, a), 0 !== t && (e.transitionStart(), e.$wrapperEl.transitionEnd(function () {
                    s && (e.params.loop && "slide" === a.params.controller.by && e.loopFix(), e.transitionEnd())
                }))
            }

            if (Array.isArray(s)) for (i = 0; i < s.length; i += 1) s[i] !== e && s[i] instanceof z && n(s[i]); else s instanceof z && e !== s && n(s)
        }
    }, F = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this, i = t.params.a11y;
            13 === e.keyCode && (e = T(e.target), t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && e.is("." + t.params.pagination.bulletClass) && e[0].click())
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            var e, t, i = this;
            i.params.loop || (e = (t = i.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (i.isBeginning ? i.a11y.disableEl(t) : i.a11y.enableEl(t)), e && 0 < e.length && (i.isEnd ? i.a11y.disableEl(e) : i.a11y.enableEl(e)))
        }, updatePagination: function () {
            var i = this, a = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
                t = T(t);
                i.a11y.makeElFocusable(t), i.a11y.addElRole(t, "button"), i.a11y.addElLabel(t, a.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
            })
        }, init: function () {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, i, a = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, a.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, a.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }, destroy: function () {
            var e, t, i = this;
            i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
        }
    }, q = {
        init: function () {
            var e = this;
            if (e.params.history) {
                if (!u.history || !u.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0, t.paths = q.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || u.addEventListener("popstate", e.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || u.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = q.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = u.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            this.history.initialized && this.params.history.enabled && (t = this.slides.eq(t), t = q.slugify(t.attr("data-history")), u.location.pathname.includes(e) || (t = e + "/" + t), (e = u.history.state) && e.value === t || (this.params.history.replaceState ? u.history.replaceState({value: t}, null, t) : u.history.pushState({value: t}, null, t)))
        }, slugify: function (e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            var a = this;
            if (t) for (var s = 0, n = a.slides.length; s < n; s += 1) {
                var r = a.slides.eq(s);
                q.slugify(r.attr("data-history")) !== t || r.hasClass(a.params.slideDuplicateClass) || (r = r.index(), a.slideTo(r, e, i))
            } else a.slideTo(0, e, i)
        }
    }, j = {
        onHashCange: function () {
            var e = this, t = c.location.hash.replace("#", "");
            t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
        }, setHash: function () {
            var e = this;
            e.hashNavigation.initialized && e.params.hashNavigation.enabled && (e.params.hashNavigation.replaceState && u.history && u.history.replaceState ? u.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "") : (e = (e = e.slides.eq(e.activeIndex)).attr("data-hash") || e.attr("data-history"), c.location.hash = e || ""))
        }, init: function () {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = c.location.hash.replace("#", "");
                if (t) for (var i = 0, a = e.slides.length; i < a; i += 1) {
                    var s = e.slides.eq(i);
                    (s.attr("data-hash") || s.attr("data-history")) !== t || s.hasClass(e.params.slideDuplicateClass) || (s = s.index(), e.slideTo(s, 0, e.params.runCallbacksOnInit, !0))
                }
                e.params.hashNavigation.watchState && T(u).on("hashchange", e.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && T(u).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, W = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = D.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, i)
        }, start: function () {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
        }, stop: function () {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
                t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    }, U = {
        setTranslate: function () {
            for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                var a = e.slides.eq(i), s = -a[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var n = 0;
                e.isHorizontal() || (n = s, s = 0);
                var r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                a.css({opacity: r}).transform("translate3d(" + s + "px, " + n + "px, 0px)")
            }
        }, setTransition: function (e) {
            var i, a = this, t = a.slides, s = a.$wrapperEl;
            t.transition(e), a.params.virtualTranslate && 0 !== e && (i = !1, t.transitionEnd(function () {
                if (!i && a && !a.destroyed) {
                    i = !0, a.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                }
            }))
        }
    }, K = {
        setTranslate: function () {
            var e, t = this, i = t.$el, a = t.$wrapperEl, s = t.slides, n = t.width, r = t.height, o = t.rtl,
                l = t.size, d = t.params.cubeEffect, u = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled,
                p = 0;
            d.shadow && (u ? (0 === (e = a.find(".swiper-cube-shadow")).length && (e = T('<div class="swiper-cube-shadow"></div>'), a.append(e)), e.css({height: n + "px"})) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = T('<div class="swiper-cube-shadow"></div>'), i.append(e)));
            for (var h, f = 0; f < s.length; f += 1) {
                var m = s.eq(f), v = f, g = 90 * (v = c ? parseInt(m.attr("data-swiper-slide-index"), 10) : v),
                    b = Math.floor(g / 360);
                o && (g = -g, b = Math.floor(-g / 360));
                var y = Math.max(Math.min(m[0].progress, 1), -1), w = 0, x = 0, E = 0;
                v % 4 == 0 ? (w = 4 * -b * l, E = 0) : (v - 1) % 4 == 0 ? (w = 0, E = 4 * -b * l) : (v - 2) % 4 == 0 ? (w = l + 4 * b * l, E = l) : (v - 3) % 4 == 0 && (w = -l, E = 3 * l + 4 * l * b), o && (w = -w), u || (x = w, w = 0), y <= 1 && -1 < y && (p = o ? 90 * -v - 90 * y : 90 * v + 90 * y), m.transform("rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + E + "px)"), d.slideShadows && (x = u ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"), E = u ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom"), 0 === x.length && (x = T('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), m.append(x)), 0 === E.length && (E = T('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), m.append(E)), x.length && (x[0].style.opacity = Math.max(-y, 0)), E.length && (E[0].style.opacity = Math.max(y, 0)))
            }
            a.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow && (u ? e.transform("translate3d(0px, " + (n / 2 + d.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")") : (h = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90), i = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2), n = d.shadowScale, h = d.shadowScale / i, i = d.shadowOffset, e.transform("scale3d(" + n + ", 1, " + h + ") translate3d(0px, " + (r / 2 + i) + "px, " + -r / 2 / h + "px) rotateX(-90deg)"))), a.transform("translate3d(0px,0," + (S.isSafari || S.isUiWebView ? -l / 2 : 0) + "px) rotateX(" + (t.isHorizontal() ? 0 : p) + "deg) rotateY(" + (t.isHorizontal() ? -p : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, Q = {
        setTranslate: function () {
            for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                var a, s, n = t.eq(i), r = n[0].progress,
                    o = -180 * (r = e.params.flipEffect.limitRotation ? Math.max(Math.min(n[0].progress, 1), -1) : r),
                    l = 0, d = -n[0].swiperSlideOffset, u = 0;
                e.isHorizontal() ? e.rtl && (o = -o) : (u = d, l = -o, o = d = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows && (a = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), s = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"), 0 === a.length && (a = T('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), n.append(a)), 0 === s.length && (s = T('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(s)), a.length && (a[0].style.opacity = Math.max(-r, 0)), s.length && (s[0].style.opacity = Math.max(r, 0))), n.transform("translate3d(" + d + "px, " + u + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
            }
        }, setTransition: function (e) {
            var i, a = this, t = a.slides, s = a.activeIndex, n = a.$wrapperEl;
            t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e && (i = !1, t.eq(s).transitionEnd(function () {
                if (!i && a && !a.destroyed) {
                    i = !0, a.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) n.trigger(e[t])
                }
            }))
        }
    }, J = {
        setTranslate: function () {
            for (var e = this, t = e.width, i = e.height, a = e.slides, s = e.$wrapperEl, n = e.slidesSizesGrid, r = e.params.coverflowEffect, o = e.isHorizontal(), e = e.translate, l = o ? t / 2 - e : i / 2 - e, d = o ? r.rotate : -r.rotate, u = r.depth, c = 0, p = a.length; c < p; c += 1) {
                var h = a.eq(c), f = n[c], m = (l - h[0].swiperSlideOffset - f / 2) / f * r.modifier, v = o ? d * m : 0,
                    g = o ? 0 : d * m, b = -u * Math.abs(m), y = o ? 0 : r.stretch * m, f = o ? r.stretch * m : 0;
                Math.abs(f) < .001 && (f = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), h.transform("translate3d(" + f + "px," + y + "px," + b + "px)  rotateX(" + g + "deg) rotateY(" + v + "deg)"), h[0].style.zIndex = 1 - Math.abs(Math.round(m)), r.slideShadows && (g = o ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"), v = o ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom"), 0 === g.length && (g = T('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), h.append(g)), 0 === v.length && (v = T('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), h.append(v)), g.length && (g[0].style.opacity = 0 < m ? m : 0), v.length && (v[0].style.opacity = 0 < -m ? -m : 0))
            }
            ($.pointerEvents || $.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = l + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, s = [v, g, b, y, t, E, s, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            D.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: N.enable.bind(this),
                    disable: N.disable.bind(this),
                    handle: N.handle.bind(this),
                    lastScrollTime: D.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            D.extend(this, {
                navigation: {
                    init: V.init.bind(this),
                    update: V.update.bind(this),
                    destroy: V.destroy.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t = this.navigation, i = t.$nextEl, t = t.$prevEl;
                !this.params.navigation.hideOnClick || T(e.target).is(t) || T(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), t && t.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            var e = this;
            D.extend(e, {
                pagination: {
                    init: H.init.bind(e),
                    render: H.render.bind(e),
                    update: H.update.bind(e),
                    destroy: H.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !T(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            var e = this;
            D.extend(e, {
                scrollbar: {
                    init: B.init.bind(e),
                    destroy: B.destroy.bind(e),
                    updateSize: B.updateSize.bind(e),
                    setTranslate: B.setTranslate.bind(e),
                    setTransition: B.setTransition.bind(e),
                    enableDraggable: B.enableDraggable.bind(e),
                    disableDraggable: B.disableDraggable.bind(e),
                    setDragPosition: B.setDragPosition.bind(e),
                    onDragStart: B.onDragStart.bind(e),
                    onDragMove: B.onDragMove.bind(e),
                    onDragEnd: B.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            D.extend(this, {
                parallax: {
                    setTransform: R.setTransform.bind(this),
                    setTranslate: R.setTranslate.bind(this),
                    setTransition: R.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var t = this, i = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                i[e] = G[e].bind(t)
            }), D.extend(t, {zoom: i})
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            D.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: X.load.bind(this),
                    loadInSlide: X.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                var e = this;
                e.params.lazy.enabled && (!e.params.lazy.loadOnTransitionStart && (e.params.lazy.loadOnTransitionStart || e.lazy.initialImageLoaded) || e.lazy.load())
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            var e = this;
            D.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: Y.getInterpolateFunction.bind(e),
                    setTranslate: Y.setTranslate.bind(e),
                    setTransition: Y.setTransition.bind(e)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !1,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var t = this;
            D.extend(t, {a11y: {liveRegion: T('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(F).forEach(function (e) {
                t.a11y[e] = F[e].bind(t)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            var e = this;
            D.extend(e, {
                history: {
                    init: q.init.bind(e),
                    setHistory: q.setHistory.bind(e),
                    setHistoryPopState: q.setHistoryPopState.bind(e),
                    scrollToSlide: q.scrollToSlide.bind(e),
                    destroy: q.destroy.bind(e)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            var e = this;
            D.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: j.init.bind(e),
                    destroy: j.destroy.bind(e),
                    setHash: j.setHash.bind(e),
                    onHashCange: j.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            var e = this;
            D.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: W.run.bind(e),
                    start: W.start.bind(e),
                    stop: W.stop.bind(e),
                    pause: W.pause.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            D.extend(this, {
                fadeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e, t = this;
                "fade" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "fade"), D.extend(t.params, e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                }), D.extend(t.originalParams, e))
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            D.extend(this, {
                cubeEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e, t = this;
                "cube" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d"), D.extend(t.params, e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                }), D.extend(t.originalParams, e))
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            D.extend(this, {
                flipEffect: {
                    setTranslate: Q.setTranslate.bind(this),
                    setTransition: Q.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e, t = this;
                "flip" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d"), D.extend(t.params, e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                }), D.extend(t.originalParams, e))
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            D.extend(this, {
                coverflowEffect: {
                    setTranslate: J.setTranslate.bind(this),
                    setTransition: J.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }];
    return void 0 === z.use && (z.use = z.Class.use, z.installModule = z.Class.installModule), z.use(s), z
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Instafeed = t()
}(this, function () {
    "use strict";

    function a(e, t) {
        if (!e) throw new Error(t)
    }

    function e(e) {
        a(!e || "object" == typeof e, "options must be an object, got " + e + " (" + typeof e + ")");
        var t = {
            accessToken: null,
            accessTokenTimeout: 1e4,
            after: null,
            apiTimeout: 1e4,
            apiLimit: null,
            before: null,
            debug: !1,
            error: null,
            filter: null,
            limit: null,
            mock: !1,
            render: null,
            sort: null,
            success: null,
            target: "instafeed",
            template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
            templateBoundaries: ["{{", "}}"],
            transform: null
        };
        if (e) for (var i in t) void 0 !== e[i] && (t[i] = e[i]);
        a("string" == typeof t.target || "object" == typeof t.target, "target must be a string or DOM node, got " + t.target + " (" + typeof t.target + ")"), a("string" == typeof t.accessToken || "function" == typeof t.accessToken, "accessToken must be a string or function, got " + t.accessToken + " (" + typeof t.accessToken + ")"), a("number" == typeof t.accessTokenTimeout, "accessTokenTimeout must be a number, got " + t.accessTokenTimeout + " (" + typeof t.accessTokenTimeout + ")"), a("number" == typeof t.apiTimeout, "apiTimeout must be a number, got " + t.apiTimeout + " (" + typeof t.apiTimeout + ")"), a("boolean" == typeof t.debug, "debug must be true or false, got " + t.debug + " (" + typeof t.debug + ")"), a("boolean" == typeof t.mock, "mock must be true or false, got " + t.mock + " (" + typeof t.mock + ")"), a("object" == typeof t.templateBoundaries && 2 === t.templateBoundaries.length && "string" == typeof t.templateBoundaries[0] && "string" == typeof t.templateBoundaries[1], "templateBoundaries must be an array of 2 strings, got " + t.templateBoundaries + " (" + typeof t.templateBoundaries + ")"), a(!t.template || "string" == typeof t.template, "template must null or string, got " + t.template + " (" + typeof t.template + ")"), a(!t.error || "function" == typeof t.error, "error must be null or function, got " + t.error + " (" + typeof t.error + ")"), a(!t.before || "function" == typeof t.before, "before must be null or function, got " + t.before + " (" + typeof t.before + ")"), a(!t.after || "function" == typeof t.after, "after must be null or function, got " + t.after + " (" + typeof t.after + ")"), a(!t.success || "function" == typeof t.success, "success must be null or function, got " + t.success + " (" + typeof t.success + ")"), a(!t.filter || "function" == typeof t.filter, "filter must be null or function, got " + t.filter + " (" + typeof t.filter + ")"), a(!t.transform || "function" == typeof t.transform, "transform must be null or function, got " + t.transform + " (" + typeof t.transform + ")"), a(!t.sort || "function" == typeof t.sort, "sort must be null or function, got " + t.sort + " (" + typeof t.sort + ")"), a(!t.render || "function" == typeof t.render, "render must be null or function, got " + t.render + " (" + typeof t.render + ")"), a(!t.limit || "number" == typeof t.limit, "limit must be null or number, got " + t.limit + " (" + typeof t.limit + ")"), a(!t.apiLimit || "number" == typeof t.apiLimit, "apiLimit must null or number, got " + t.apiLimit + " (" + typeof t.apiLimit + ")"), this._state = {
            running: !1,
            node: null,
            token: null,
            paging: null,
            pool: []
        }, this._options = t
    }

    return e.prototype.run = function () {
        var i = this;
        return this._debug("run", "options", this._options), this._debug("run", "state", this._state), this._state.running ? (this._debug("run", "already running, skipping"), !1) : (this._start(), this._debug("run", "getting dom node"), "string" == typeof this._options.target ? this._state.node = document.getElementById(this._options.target) : this._state.node = this._options.target, this._state.node ? (this._debug("run", "got dom node", this._state.node), this._debug("run", "getting access token"), this._getAccessToken(function (e, t) {
            return e ? (i._debug("onTokenReceived", "error", e), void i._fail(new Error("error getting access token: " + e.message))) : (i._debug("onTokenReceived", "got token", t), i._state.token = t, void i._showNext(function (e) {
                return e ? (i._debug("onNextShown", "error", e), void i._fail(e)) : void i._finish()
            }))
        }), !0) : (this._fail(new Error("no element found with ID " + this._options.target)), !1))
    }, e.prototype.hasNext = function () {
        var e = this._state.paging, t = this._state.pool;
        return this._debug("hasNext", "paging", e), this._debug("hasNext", "pool", t.length, t), 0 < t.length || e && "string" == typeof e.next
    }, e.prototype.next = function () {
        var t = this;
        return t.hasNext() ? t._state.running ? (t._debug("next", "already running, skipping"), !1) : (t._start(), void t._showNext(function (e) {
            return e ? (t._debug("onNextShown", "error", e), void t._fail(e)) : void t._finish()
        })) : (t._debug("next", "hasNext is false, skipping"), !1)
    }, e.prototype._showNext = function (s) {
        var n = this, e = null, t = null, i = "number" == typeof this._options.limit;
        if (n._debug("showNext", "pool", n._state.pool.length, n._state.pool), 0 < n._state.pool.length) {
            if (t = i ? n._state.pool.splice(0, n._options.limit) : n._state.pool.splice(0), n._debug("showNext", "items from pool", t.length, t), n._debug("showNext", "updated pool", n._state.pool.length, n._state.pool), n._options.mock) n._debug("showNext", "mock enabled, skipping render"); else try {
                n._renderData(t)
            } catch (e) {
                return void s(e)
            }
            s(null)
        } else n._state.paging && "string" == typeof n._state.paging.next ? e = n._state.paging.next : (e = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" + n._state.token, n._options.apiLimit || "number" != typeof n._options.limit ? "number" == typeof n._options.apiLimit && (n._debug("showNext", "apiLimit set, overriding limit", n._options.apiLimit, n._options.limit), e = e + "&limit=" + n._options.apiLimit) : (n._debug("showNext", "no apiLimit set, falling back to limit", n._options.apiLimit, n._options.limit), e = e + "&limit=" + n._options.limit)), n._debug("showNext", "making request", e), n._makeApiRequest(e, function (e, t) {
            var i = null;
            if (e) return n._debug("onResponseReceived", "error", e), void s(new Error("api request error: " + e.message));
            n._debug("onResponseReceived", "data", t), n._success(t), n._debug("onResponseReceived", "setting paging", t.paging), n._state.paging = t.paging;
            try {
                if (i = n._processData(t), n._debug("onResponseReceived", "processed data", i), i.unused && 0 < i.unused.length) {
                    n._debug("onResponseReceived", "saving unused to pool", i.unused.length, i.unused);
                    for (var a = 0; a < i.unused.length; a++) n._state.pool.push(i.unused[a])
                }
            } catch (e) {
                return void s(e)
            }
            if (n._options.mock) n._debug("onResponseReceived", "mock enabled, skipping append"); else try {
                n._renderData(i.items)
            } catch (e) {
                return void s(e)
            }
            s(null)
        })
    }, e.prototype._processData = function (e) {
        var t, i, a = "function" == typeof this._options.transform, s = "function" == typeof this._options.filter,
            n = "function" == typeof this._options.sort, r = "number" == typeof this._options.limit, o = [], l = null,
            d = null, u = null;
        if (this._debug("processData", "hasFilter", s, "hasTransform", a, "hasSort", n, "hasLimit", r), "object" != typeof e || "object" != typeof e.data || e.data.length <= 0) return null;
        for (var c = 0; c < e.data.length; c++) {
            if (i = this._getItemData(e.data[c]), a) try {
                l = this._options.transform(i), this._debug("processData", "transformed item", i, l)
            } catch (e) {
                throw this._debug("processData", "error calling transform", e), new Error("error in transform: " + e.message)
            } else l = i;
            if (s) {
                try {
                    d = this._options.filter(l), this._debug("processData", "filter item result", l, d)
                } catch (e) {
                    throw this._debug("processData", "error calling filter", e), new Error("error in filter: " + e.message)
                }
                d && o.push(l)
            } else o.push(l)
        }
        if (n) try {
            o.sort(this._options.sort)
        } catch (e) {
            throw this._debug("processData", "error calling sort", e), new Error("error in sort: " + e.message)
        }
        return r && (t = o.length - this._options.limit, this._debug("processData", "checking limit", o.length, this._options.limit, t), 0 < t && (u = o.slice(o.length - t), this._debug("processData", "unusedItems", u.length, u), o.splice(o.length - t, t))), {
            items: o,
            unused: u
        }
    }, e.prototype._extractTags = function (e) {
        var t, i = /#([^\s]+)/gi, a = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i, s = [];
        if ("string" == typeof e) for (; null !== (t = i.exec(e));) !1 === a.test(t[1]) && s.push(t[1]);
        return s
    }, e.prototype._getItemData = function (e) {
        var t = null, i = null;
        switch (e.media_type) {
            case"IMAGE":
                t = "image", i = e.media_url;
                break;
            case"VIDEO":
                t = "video", i = e.thumbnail_url;
                break;
            case"CAROUSEL_ALBUM":
                t = "album", i = e.media_url
        }
        return {
            caption: e.caption,
            tags: this._extractTags(e.caption),
            id: e.id,
            image: i,
            link: e.permalink,
            model: e,
            timestamp: e.timestamp,
            type: t,
            username: e.username
        }
    }, e.prototype._renderData = function (e) {
        var t, i = "string" == typeof this._options.template, a = "function" == typeof this._options.render, s = null,
            n = null, r = "";
        if (this._debug("renderData", "hasTemplate", i, "hasRender", a), !("object" != typeof e || e.length <= 0)) {
            for (var o = 0; o < e.length; o++) {
                if (t = e[o], a) try {
                    s = this._options.render(t, this._options), this._debug("renderData", "custom render result", t, s)
                } catch (e) {
                    throw this._debug("renderData", "error calling render", e), new Error("error in render: " + e.message)
                } else i && (s = this._basicRender(t));
                s ? r += s : this._debug("renderData", "render item did not return any content", t)
            }
            for (this._debug("renderData", "html content", r), (n = document.createElement("div")).innerHTML = r, this._debug("renderData", "container", n, n.childNodes.length, n.childNodes); 0 < n.childNodes.length;) this._debug("renderData", "appending child", n.childNodes[0]), this._state.node.appendChild(n.childNodes[0])
        }
    }, e.prototype._basicRender = function (e) {
        for (var t, i, a = new RegExp(this._options.templateBoundaries[0] + "([\\s\\w.]+)" + this._options.templateBoundaries[1], "gm"), s = this._options.template, n = "", r = 0, o = null; null !== (t = a.exec(s));) i = t[1], n += s.slice(r, t.index), (o = this._valueForKeyPath(i, e)) && (n += o.toString()), r = a.lastIndex;
        return r < s.length && (n += s.slice(r, s.length)), n
    }, e.prototype._valueForKeyPath = function (e, t) {
        for (var i, a = /([\w]+)/gm, s = t; null !== (i = a.exec(e));) {
            if ("object" != typeof s) return null;
            s = s[i[1]]
        }
        return s
    }, e.prototype._fail = function (e) {
        !this._runHook("error", e) && console && "function" == typeof console.error && console.error(e), this._state.running = !1
    }, e.prototype._start = function () {
        this._state.running = !0, this._runHook("before")
    }, e.prototype._finish = function () {
        this._runHook("after"), this._state.running = !1
    }, e.prototype._success = function (e) {
        this._runHook("success", e), this._state.running = !1
    }, e.prototype._makeApiRequest = function (e, i) {
        function a(e, t) {
            s || (s = !0, i(e, t))
        }

        var s = !1, n = this, r = null;
        (r = new XMLHttpRequest).ontimeout = function () {
            a(new Error("api request timed out"))
        }, r.onerror = function () {
            a(new Error("api connection error"))
        }, r.onload = function (e) {
            var t = r.getResponseHeader("Content-Type"), i = null;
            if (n._debug("apiRequestOnLoad", "loaded", e), n._debug("apiRequestOnLoad", "response status", r.status), n._debug("apiRequestOnLoad", "response content type", t), 0 <= t.indexOf("application/json")) try {
                i = JSON.parse(r.responseText)
            } catch (e) {
                return n._debug("apiRequestOnLoad", "json parsing error", e, r.responseText), void a(new Error("error parsing response json"))
            }
            200 === r.status ? a(null, i) : i && i.error ? a(new Error(i.error.code + " " + i.error.message)) : a(new Error("status code " + r.status))
        }, r.open("GET", e, !0), r.timeout = this._options.apiTimeout, r.send()
    }, e.prototype._getAccessToken = function (i) {
        function a(e, t) {
            s || (s = !0, clearTimeout(r), i(e, t))
        }

        var s = !1, n = this, r = null;
        if ("function" == typeof this._options.accessToken) {
            this._debug("getAccessToken", "calling accessToken as function"), r = setTimeout(function () {
                n._debug("getAccessToken", "timeout check", s), a(new Error("accessToken timed out"), null)
            }, this._options.accessTokenTimeout);
            try {
                this._options.accessToken(function (e, t) {
                    n._debug("getAccessToken", "received accessToken callback", s, e, t), a(e, t)
                })
            } catch (e) {
                this._debug("getAccessToken", "error invoking the accessToken as function", e), a(e, null)
            }
        } else this._debug("getAccessToken", "treating accessToken as static", typeof this._options.accessToken), a(null, this._options.accessToken)
    }, e.prototype._debug = function () {
        var e = null;
        this._options.debug && console && "function" == typeof console.log && ((e = [].slice.call(arguments))[0] = "[Instafeed] [" + e[0] + "]", console.log.apply(null, e))
    }, e.prototype._runHook = function (t, e) {
        var i = !1;
        if ("function" == typeof this._options[t]) try {
            this._options[t](e), i = !0
        } catch (e) {
            this._debug("runHook", "error calling hook", t, e)
        }
        return i
    }, e
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).countUp = {})
}(this, function (e) {
    "use strict";
    var a = function () {
        return (a = Object.assign || function (e) {
            for (var t, i = 1, a = arguments.length; i < a; i++) for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }).apply(this, arguments)
    }, t = (i.prototype.determineDirectionAndSmartEasing = function () {
        var e = this.finalEndVal || this.endVal;
        this.countDown = this.startVal > e;
        var t = e - this.startVal;
        Math.abs(t) > this.options.smartEasingThreshold ? (this.finalEndVal = e, t = this.countDown ? 1 : -1, this.endVal = e + t * this.options.smartEasingAmount, this.duration = this.duration / 2) : (this.endVal = e, this.finalEndVal = null), this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
    }, i.prototype.start = function (e) {
        this.error || (this.callback = e, 0 < this.duration ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
    }, i.prototype.pauseResume = function () {
        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
    }, i.prototype.reset = function () {
        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
    }, i.prototype.update = function (e) {
        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
    }, i.prototype.printValue = function (e) {
        e = this.formattingFn(e);
        "INPUT" === this.el.tagName ? this.el.value = e : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e
    }, i.prototype.ensureNumber = function (e) {
        return "number" == typeof e && !isNaN(e)
    }, i.prototype.validateValue = function (e) {
        var t = Number(e);
        return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: " + e, null)
    }, i.prototype.resetDuration = function () {
        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
    }, i);

    function i(e, t, i) {
        var r = this;
        this.target = e, this.endVal = t, this.options = i, this.version = "2.0.8", this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: ""
        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function (e) {
            r.startTime || (r.startTime = e);
            e -= r.startTime;
            r.remaining = r.duration - e, r.useEasing ? r.countDown ? r.frameVal = r.startVal - r.easingFn(e, 0, r.startVal - r.endVal, r.duration) : r.frameVal = r.easingFn(e, r.startVal, r.endVal - r.startVal, r.duration) : r.countDown ? r.frameVal = r.startVal - (r.startVal - r.endVal) * (e / r.duration) : r.frameVal = r.startVal + (r.endVal - r.startVal) * (e / r.duration), r.countDown ? r.frameVal = r.frameVal < r.endVal ? r.endVal : r.frameVal : r.frameVal = r.frameVal > r.endVal ? r.endVal : r.frameVal, r.frameVal = Number(r.frameVal.toFixed(r.options.decimalPlaces)), r.printValue(r.frameVal), e < r.duration ? r.rAF = requestAnimationFrame(r.count) : null !== r.finalEndVal ? r.update(r.finalEndVal) : r.callback && r.callback()
        }, this.formatNumber = function (e) {
            var t = e < 0 ? "-" : "", e = Math.abs(e).toFixed(r.options.decimalPlaces), e = (e += "").split("."),
                i = e[0], e = 1 < e.length ? r.options.decimal + e[1] : "";
            if (r.options.useGrouping) {
                for (var a = "", s = 0, n = i.length; s < n; ++s) 0 !== s && s % 3 == 0 && (a = r.options.separator + a), a = i[n - s - 1] + a;
                i = a
            }
            return r.options.numerals && r.options.numerals.length && (i = i.replace(/[0-9]/g, function (e) {
                return r.options.numerals[+e]
            }), e = e.replace(/[0-9]/g, function (e) {
                return r.options.numerals[+e]
            })), t + r.options.prefix + i + e + r.options.suffix
        }, this.easeOutExpo = function (e, t, i, a) {
            return i * (1 - Math.pow(2, -10 * e / a)) * 1024 / 1023 + t
        }, this.options = a(a({}, this.defaults), i), this.formattingFn = this.options.formattingFn || this.formatNumber, this.easingFn = this.options.easingFn || this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
    }

    e.CountUp = t, Object.defineProperty(e, "__esModule", {value: !0})
});