
var HEADER_BURGER_SELECTOR = "#js-header-burger", HEADER_MENU_SELECTOR = "#js-header-menu",
    HEADER_BURGER_OPEN_CLASS = "header__burger_open", HEADER_MENU_OPEN_CLASS = "header__menu_open",
    BODY_NO_SCROLL_CLASS = "no-scroll";

function initHeader() {
    var e = document.querySelector(HEADER_BURGER_SELECTOR), t = document.querySelector(HEADER_MENU_SELECTOR);
    e.addEventListener("click", function () {
        e.classList.contains(HEADER_BURGER_OPEN_CLASS) ? (e.classList.remove(HEADER_BURGER_OPEN_CLASS), t.classList.remove(HEADER_MENU_OPEN_CLASS)) : (e.classList.add(HEADER_BURGER_OPEN_CLASS), t.classList.add(HEADER_MENU_OPEN_CLASS))
    })
}

var HERO_VIDEO_SELECTOR = ".js-hero-video", HERO_VIDEO_SCROLL_BUTTON_SELECTOR = ".js-hero-video-scroll",
    HEADER = ".header", HERO_VIDEO_PLAY_SELECTOR = ".js-hero-video-play",
    HERO_VIDEO_PLAY_HIDDEN_CLASS = "hero-video__play_hidden";

function initHeroVideo() {
    var e = document.querySelector(HERO_VIDEO_SCROLL_BUTTON_SELECTOR),
        t = document.querySelector(HERO_VIDEO_PLAY_SELECTOR), o = document.querySelector(HEADER),
        n = document.querySelector(HERO_VIDEO_SELECTOR);
    e && e.addEventListener("click", function () {
        (new SmoothScroll).animateScroll(document.querySelector(this.dataset.href), 0, {
            speed: 500,
            updateURL: !1,
            offset: o.offsetHeight
        })
    }), t && t.addEventListener("click", function () {
        setTimeout(function () {
            n.play(), t.classList.add(HERO_VIDEO_PLAY_HIDDEN_CLASS)
        }, 100)
    }), initLazyload(HERO_VIDEO_SELECTOR, function (e) {
        e.play(), e.addEventListener("play", function () {
            t && t.classList.add(HERO_VIDEO_PLAY_HIDDEN_CLASS)
        })
    })
}

var POPUP_SELECTOR = ".js-popup", POPUP_LINK_SELECTOR = ".js-popup-link", POPUP_CLOSE_SELECTOR = ".js-popup-close",
    POPUP_OPEN_CLASS = "popup_show", BODY_NO_SCROLL_CLASS = "no-scroll";

function initPopups() {
    var e = Array.prototype.slice.call(document.querySelectorAll(POPUP_LINK_SELECTOR)),
        t = Array.prototype.slice.call(document.querySelectorAll(POPUP_CLOSE_SELECTOR));

    function o(e) {
        var t = this.getAttribute("href"), t = document.querySelector(t);
        void 0 !== t && (t.classList.add(POPUP_OPEN_CLASS), document.body.classList.add(BODY_NO_SCROLL_CLASS)), e.preventDefault()
    }

    function n(e) {
        this.closest(POPUP_SELECTOR).classList.remove(POPUP_OPEN_CLASS), document.body.classList.remove(BODY_NO_SCROLL_CLASS)
    }

    e.forEach(function (e) {
        e.onclick = o
    }), t.forEach(function (e) {
        e.onclick = n
    })
}

var HEADER_SELECTOR = "#js-header", PAGE_NAV_WRAP_SELECTOR = "#js-page-nav-wrap",
    PAGE_NAV_IN_SELECTOR = "#js-page-nav-in", PAGE_NAV_SELECT_SELECTOR = "#js-page-nav-select",
    PAGE_NAV_ITEM_SELECTOR = "#js-page-nav-in li a", PAGE_NAV_FIXED_CLASS = "page-nav__in_fixed",
    PAGE_NAV_SELECT_OPEN_CLASS = "page-nav__title_open", PAGE_NAV_ITEM_ACTIVE_CLASS = "page-nav__link_active",
    BREAKPOINT = "(min-width: 1025px)";

function initPageNav() {
    var t, o, n = document.querySelector(HEADER_SELECTOR), a = document.querySelector(PAGE_NAV_WRAP_SELECTOR),
        i = document.querySelector(PAGE_NAV_IN_SELECTOR), s = document.querySelector(PAGE_NAV_SELECT_SELECTOR),
        r = Array.prototype.slice.call(document.querySelectorAll(PAGE_NAV_ITEM_SELECTOR)),
        e = window.matchMedia(SLIDER_BREAKPOINT);

    function E(e) {
        e.preventDefault(), s.classList.remove(PAGE_NAV_SELECT_OPEN_CLASS);
        e = document.querySelector(this.getAttribute("href"));
        e && t.animateScroll(e, 0, {speed: 500, speedAsDuration: !0, updateURL: !1, offset: a.offsetHeight})
    }

    function l() {
        var e = a.getBoundingClientRect().top;
        e <= 0 ? i.classList.add(PAGE_NAV_FIXED_CLASS) : i.classList.remove(PAGE_NAV_FIXED_CLASS), n.style.top = (e < n.offsetHeight ? e - n.offsetHeight : 0) + "px", s.classList.remove(PAGE_NAV_SELECT_OPEN_CLASS)
    }

    function c() {
        for (var e = -1, t = 0; t < o.length; t++) o[t].getBoundingClientRect().top < a.offsetHeight + 1 && (e = t);
        r.forEach(function (e) {
            e.classList.remove(PAGE_NAV_ITEM_ACTIVE_CLASS)
        }), -1 < e && r[e].classList.add(PAGE_NAV_ITEM_ACTIVE_CLASS)
    }

    a && (t = new SmoothScroll, o = new Array, r.forEach(function (e) {
        var t = document.querySelector(e.getAttribute("href"));
        t && o.push(t), e.onclick = E
    }), s.addEventListener("click", function () {
        s.classList.contains(PAGE_NAV_SELECT_OPEN_CLASS) ? s.classList.remove(PAGE_NAV_SELECT_OPEN_CLASS) : s.classList.add(PAGE_NAV_SELECT_OPEN_CLASS), e.matches && t.animateScroll(0, 0, {
            speed: 500,
            speedAsDuration: !0,
            updateURL: !1
        })
    }), window.addEventListener("resize", function (e) {
        l(), c()
    }), window.addEventListener("scroll", function (e) {
        l(), c()
    }), l(), c())
}

var MAP_SELECTOR = "#js-map", DEALERS_CITY_SELECT_SELECTOR = "#js-dealers-city-select",
    DEALERS_CITIES_LIST_SELECTOR = "#js-dealers-cities-list",
    DEALERS_CITY_SELECT_OPEN_CLASS = "dealers__select-title_open",
    DEALERS_CITY_SELECT_ITEM_CLASS = "dealers__select-item";

function initDealers() {
    var t, o, n, a, i, s, r, E, l = document.querySelector(DEALERS_CITY_SELECT_SELECTOR),
        c = document.querySelector(DEALERS_CITIES_LIST_SELECTOR);

    function _(e) {
        l.innerText = this.innerText, l.classList.remove(DEALERS_CITY_SELECT_OPEN_CLASS), S(this.innerText)
    }

    function L() {
        const e = {
            Android: function () {
                return navigator.userAgent.match(/Android/i)
            }, BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i)
            }, iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            }, Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i)
            }, Windows: function () {
                return navigator.userAgent.match(/IEMobile/i)
            }, any: function () {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        };
        (o = new ymaps.Map("js-map", {
            center: [55.751238, 37.625393],
            zoom: i,
            controls: ["zoomControl"],
            margin: [55, 22, 0, 22]
        }, {balloonPanelMaxMapArea: 0})).behaviors.disable("scrollZoom"), e.any() && (o.behaviors.disable("drag"), o.behaviors.enable("multiTouch")), n = new ymaps.Clusterer({
            clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="dealers__map-multi-pin">{{ properties.geoObjects.length }}</div>'),
            clusterIconShape: {type: "Rectangle", coordinates: [[-22, -22], [23, 23]]}
        }), s = ymaps.templateLayoutFactory.createClass('<div class="dealers__map-pin"></div>'), r = ymaps.templateLayoutFactory.createClass('<div class="dealers__map-pin dealers__map-pin_active"></div>'), E = ymaps.templateLayoutFactory.createClass('<div class="dealers__map-balloon"><button class="dealers__map-close"></button>$[[options.contentLayout]]</div>', {
            build: function () {
                this.constructor.superclass.build.call(this), this._element = this.getParentElement().querySelector(".dealers__map-balloon"), this.applyElementOffset(), this._element.querySelector(".dealers__map-close").addEventListener("click", this.onCloseClick.bind(this))
            }, clear: function () {
                this._element.querySelector(".dealers__map-close").removeEventListener("click", this.onCloseClick.bind(this)), this.constructor.superclass.clear.call(this)
            }, onSublayoutSizeChange: function () {
                E.superclass.onSublayoutSizeChange.apply(this, arguments), this._element && (this.applyElementOffset(), this.events.fire("shapechange"))
            }, applyElementOffset: function () {
                this._element.style.left = -this._element.offsetWidth / 2 + "px", this._element.style.top = -this._element.offsetHeight + "px"
            }, onCloseClick: function (e) {
                e.preventDefault(), this.events.fire("userclose")
            }, getShape: function () {
                return this._element ? new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[this._element.offsetLeft, this._element.offsetTop], [this._element.offsetLeft + this._element.offsetWidth, this._element.offsetTop + this._element.offsetHeight]])) : E.superclass.getShape.call(this)
            }
        }), S()
    }

    function S(t) {
        var e = dealers;
        t && "" !== t && (e = e.filter(function (e) {
            return e.city === t
        })), a = -1, o.geoObjects.remove(n), n.removeAll(), e.forEach(function (e, t) {
            var o = '<div class="dealers__map-title">' + e.name + '</div><div class="dealers__map-address">' + e.addr + "</div>" + (e.phone && "" != e.phone ? '<div class="dealers__map-phone"><a href="tel:' + e.phone + '">' + e.phone + "</a></div>" : ""),
                o = new ymaps.Placemark(e.coord, {hintContent: e.name, balloonContentBody: e.name}, {
                    iconLayout: s,
                    iconShape: {type: "Rectangle", coordinates: [[-23, -57], [22, 3]]},
                    balloonLayout: E,
                    balloonContentLayout: ymaps.templateLayoutFactory.createClass(o),
                    hideIconOnBalloonOpen: !1,
                    balloonOffset: [0, -74]
                });
            n.add(o), o.events.add("mouseenter", function (e) {
                e.get("target").options.set({iconLayout: r})
            }).add("mouseleave", function (e) {
                t != a && e.get("target").options.set({iconLayout: s})
            }).add("click", function (e) {
                e.get("target").options.set({iconLayout: r}), d(t)
            })
        }), o.geoObjects.add(n), o.setBounds(n.getBounds(), {
            useMapMargin: !0, callback: function (e) {
                1 == n.getLength() && o.setZoom(i)
            }
        }), e.length < 2 && (o.setZoom(i), d(0), n.getGeoObjects()[0].balloon.open())
    }

    function d(e) {
        if (a = e, n) {
            for (var t = n.getGeoObjects(), o = 0; o < t.length; o++) t[o].options.set({iconLayout: s});
            t[a].options.set({iconLayout: r})
        }
    }

    l && (t = [], dealers.forEach(function (e) {
        t.push(e.city)
    }), (t = t.filter(function (e, t, o) {
        return o.indexOf(e) === t
    }).sort()).forEach(function (e) {
        var t = document.createElement("li");
        t.classList.add(DEALERS_CITY_SELECT_ITEM_CLASS), t.innerText = e, c.appendChild(t)
    }), Array.prototype.slice.call(document.querySelectorAll(DEALERS_CITIES_LIST_SELECTOR + " li")).forEach(function (e) {
        e.onclick = _
    }), l.addEventListener("click", function () {
        l.classList.contains(DEALERS_CITY_SELECT_OPEN_CLASS) ? l.classList.remove(DEALERS_CITY_SELECT_OPEN_CLASS) : l.classList.add(DEALERS_CITY_SELECT_OPEN_CLASS)
    }), function e() {
        "undefined" != typeof ymaps ? ymaps.ready(L) : setTimeout(e, 500)
    }(), n = o = null, a = -1, i = 16)
}

var DUAL_FRAME_WRAPPER_SELECTOR = ".js-dual-frame-wrapper", DUAL_FRAME_SLIDER_SELECTOR = ".js-dual-frame-slider",
    DUAL_FRAME_SLIDER_PAGINATION_SELECTOR = ".js-dual-frame-slider-pagination",
    DUAL_FRAME_ACCORDION_SELECTOR = ".js-accordion", DUAL_FRAME_ACCORDION_ITEM_SELECTOR = ".js-accordion-item",
    DUAL_FRAME_ACCORDION_TITLE_SELECTOR = ".js-accordion-title",
    DUAL_FRAME_ACCORDION_BODY_SELECTOR = ".js-accordion-body",
    DUAL_FRAME_ACCORDION_CONTENT_SELECTOR = ".js-accordion-content",
    DUAL_FRAME_IMAGES_SELECTOR = ".js-dual-frame-images", DUAL_FRAME_IMAGE_SELECTOR = ".js-dual-frame-image",
    DUAL_FRAME_IMAGES_SLIDER_SELECTOR = ".js-dual-frame-images-slider",
    DUAL_FRAME_ACCORDION_TITLE_OPEN_CLASS = "dual-frame__accordion-title_open",
    DUAL_FRAME_IMAGE_SHOW_CLASS = "dual-frame__img_show", SLIDER_BREAKPOINT = "(min-width: 1025px)";

function initDualFrame() {
    var e = Array.prototype.slice.call(document.querySelectorAll(DUAL_FRAME_WRAPPER_SELECTOR)),
        c = window.matchMedia(SLIDER_BREAKPOINT);
    e && e.forEach(function (e) {
        function t(e) {
            var t = this.closest(DUAL_FRAME_ACCORDION_ITEM_SELECTOR);
            this.classList.contains(DUAL_FRAME_ACCORDION_TITLE_OPEN_CLASS) ? o(t, !1, !0) : a.forEach(function (e) {
                o(e, t === e, !1)
            })
        }

        function o(e, t, o) {
            var n = e.querySelector(DUAL_FRAME_ACCORDION_TITLE_SELECTOR),
                a = e.querySelector(DUAL_FRAME_ACCORDION_BODY_SELECTOR),
                i = e.querySelector(DUAL_FRAME_ACCORDION_CONTENT_SELECTOR), e = s.indexOf(n), e = r[e];
            t ? (n.classList.add(DUAL_FRAME_ACCORDION_TITLE_OPEN_CLASS), a.style.height = i.offsetHeight + "px", e.classList.add(DUAL_FRAME_IMAGE_SHOW_CLASS)) : (n.classList.remove(DUAL_FRAME_ACCORDION_TITLE_OPEN_CLASS), a.removeAttribute("style"), o || e.classList.remove(DUAL_FRAME_IMAGE_SHOW_CLASS))
        }

        var n, a, s, i, r, E, l;
        e = (n = e).querySelector(DUAL_FRAME_ACCORDION_SELECTOR), E = n.querySelector(DUAL_FRAME_SLIDER_SELECTOR), l = n.querySelector(DUAL_FRAME_IMAGES_SLIDER_SELECTOR), e && E && l && (a = Array.prototype.slice.call(e.querySelectorAll(DUAL_FRAME_ACCORDION_ITEM_SELECTOR)), s = Array.prototype.slice.call(e.querySelectorAll(DUAL_FRAME_ACCORDION_TITLE_SELECTOR)), i = Array.prototype.slice.call(e.querySelectorAll(DUAL_FRAME_ACCORDION_BODY_SELECTOR)), r = Array.prototype.slice.call(n.querySelectorAll(DUAL_FRAME_IMAGE_SELECTOR)), s.forEach(function (e) {
            e.onclick = t
        }), c.addEventListener("change", function () {
            c.matches || (s.forEach(function (e) {
                e.classList.remove(DUAL_FRAME_ACCORDION_TITLE_OPEN_CLASS)
            }), i.forEach(function (e) {
                e.removeAttribute("style")
            }), r.forEach(function (e) {
                e.classList.remove(DUAL_FRAME_IMAGE_SHOW_CLASS)
            }), r[0].classList.add(DUAL_FRAME_IMAGE_SHOW_CLASS))
        }), function () {
            var e, t;

            function o() {
                c.matches ? (void 0 !== e && e.destroy(!0, !0), void 0 !== t && t.destroy(!0, !0)) : (e = new Swiper(E, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: !1,
                    speed: 1e3,
                    spaceBetween: 40,
                    pagination: {
                        el: E.querySelector(DUAL_FRAME_SLIDER_PAGINATION_SELECTOR),
                        type: "bullets",
                        clickable: !0
                    }
                }), t = new Swiper(l, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: !1,
                    speed: 1e3,
                    spaceBetween: 40
                }), (e.controller.control = t).controller.control = e)
            }

            c.addEventListener("change", o), o()
        }())
    })
}

var GALLERY_SLIDER_SELECTOR = "#js-gallery-slider",
    GALLERY_SLIDER_PAGINATION_SELECTOR = "#js-gallery-slider-pagination",
    GALLERY_POPUP_LINK_SELECTOR = ".js-gallery-popup-link", GALLERY_POPUP_SELECTOR = "#js-gallery-popup",
    GALLERY_POPUP_SLIDER_SELECTOR = "#js-gallery-popup-slider",
    GALLERY_POPUP_SLIDER_PAGINATION_SELECTOR = "#js-gallery-popup-slider-pagination",
    GALLERY_POPUP_SLIDER_PREV_SELECTOR = "#js-gallery-popup-slider-prev",
    GALLERY_POPUP_SLIDER_NEXT_SELECTOR = "#js-gallery-popup-slider-next", GALLERY_POPUP_OPEN_CLASS = "popup_show",
    SLIDER_BREAKPOINT = "(min-width: 1025px)";

function initGallery() {
    var e, t, o = window.matchMedia(SLIDER_BREAKPOINT), n = document.querySelector(GALLERY_SLIDER_SELECTOR),
        a = document.querySelector(GALLERY_POPUP_SLIDER_SELECTOR),
        i = Array.prototype.slice.call(document.querySelectorAll(GALLERY_POPUP_LINK_SELECTOR)),
        s = document.querySelector(GALLERY_POPUP_SELECTOR);

    function r() {
        o.matches ? void 0 !== e && e.destroy(!0, !0) : e = new Swiper(n, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: !1,
            speed: 1e3,
            spaceBetween: 0,
            pagination: {el: n.querySelector(GALLERY_SLIDER_PAGINATION_SELECTOR), type: "bullets", clickable: !0}
        })
    }

    function E(e) {
        e.preventDefault(), o.matches && (s.classList.add(GALLERY_POPUP_OPEN_CLASS), t.slideTo(+this.dataset.index, 0))
    }

    n && a && s && (o.addEventListener("change", r), r(), t = new Swiper(a, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: !1,
        speed: 1e3,
        spaceBetween: 0,
        pagination: {el: a.querySelector(GALLERY_POPUP_SLIDER_PAGINATION_SELECTOR), type: "bullets", clickable: !0},
        navigation: {
            nextEl: a.querySelector(GALLERY_POPUP_SLIDER_NEXT_SELECTOR),
            prevEl: a.querySelector(GALLERY_POPUP_SLIDER_PREV_SELECTOR)
        }
    }), i.forEach(function (e) {
        e.onclick = E
    }))
}

var NEWS_SLIDER_SELECTOR = "#js-news-slider", SLIDER_BREAKPOINT = "(min-width: 1025px)";

function initNews() {
    var e, t = window.matchMedia(SLIDER_BREAKPOINT), o = document.querySelector(NEWS_SLIDER_SELECTOR);

    function n() {
        t.matches ? void 0 !== e && e.destroy(!0, !0) : e = new Swiper(o, {
            slidesPerView: "auto",
            slidesPerGroup: 1,
            loop: !1,
            speed: 1e3,
            spaceBetween: 0
        })
    }

    o && (t.addEventListener("change", n), n())
}

var lazyload, INSTAFEED_SELECTOR = "#instafeed";

function initInstafeed() {
    var e = document.querySelector(INSTAFEED_SELECTOR);
    e && new Instafeed({
        accessToken: e.dataset.token,
        limit: +e.dataset.limit,
        template: '<a href="{{link}}" class="responsive-media" target="_blank"><img title="{{caption}}" src="{{image}}" data-object-fit="cover" /></a>'
    }).run()
}

function initLazyload(e, t) {
    lazyload = new LazyLoad({
        elements_selector: e, callback_loaded: function (e) {
            "function" == typeof t && t(e)
        }
    })
}

function loadPicture(e) {
    var t = Array.prototype.slice.call(e.querySelectorAll("picture source[data-srcset]")),
        e = Array.prototype.slice.call(e.querySelectorAll("img[data-src]"));
    t.forEach(function (e) {
        e.setAttribute("srcset", e.dataset.srcset)
    }), e.forEach(function (e) {
        e.setAttribute("src", e.dataset.src)
    })
}

function initObjectFitFallback() {
    "objectFit" in document.documentElement.style || Array.prototype.forEach.call(document.querySelectorAll("[data-object-fit]"), function (e) {
        !function (e) {
            var t = e.getAttribute("data-src") || e.getAttribute("src");
            {
                var o;
                t && "img" === e.tagName.toLowerCase() && (o = e.getAttribute("data-object-fit"), (e = e.parentElement).classList.contains("responsive-media") || (e = e.parentElement), o = "cover" === o ? "cover" : "contain", e.style.backgroundImage = "url(" + t + ")", e.classList.add("fit-img"), e.classList.add("fit-img--" + o))
            }
        }(e)
    })
}

var WORD_UP_SELECTOR = ".word-up";

function initWordUp() {
    var e = Array.prototype.slice.call(document.querySelectorAll(WORD_UP_SELECTOR));

    function t() {
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        setTimeout(function () {
            e.forEach(function (e) {
                t + 5 * document.documentElement.clientHeight / 6 >= offset(e).top && (e.style.opacity = 1, e.style.transform = "translateY(0) scale(1)")
            })
        }, 5)
    }

    t(), window.addEventListener("scroll", t)
}

function offset(e) {
    var t = 0, o = 0;
    if (e.offsetParent) for (; t += e.offsetTop, o += e.offsetLeft, e = e.offsetParent;) ;
    return {top: t, left: o}
}

var VALUE_COUNTER_SELECTOR = ".js-value-counter", VALUE_COUNTER_DONE_CLASS = "js-value-counter-done";

function initValueCounter() {
    var e = Array.prototype.slice.call(document.querySelectorAll(VALUE_COUNTER_SELECTOR));

    function t() {
        var n = document.body.scrollTop || document.documentElement.scrollTop;
        setTimeout(function () {
            e.forEach(function (e) {
                var t, o;
                e.classList.contains(VALUE_COUNTER_DONE_CLASS) || n + 5 * document.documentElement.clientHeight / 6 >= offset(e).top && (o = (t = e.dataset.value.replace(",", ".")).indexOf("."), new countUp.CountUp(e, +t, {
                    separator: "",
                    decimal: ",",
                    decimalPlaces: -1 === o ? 0 : t.length - o - 1
                }).start(), e.classList.add(VALUE_COUNTER_DONE_CLASS))
            })
        }, 100)
    }

    t(), window.addEventListener("scroll", t)
}

// svg4everybody();
 initWordUp(), document.addEventListener("DOMContentLoaded", function (e) {
    initObjectFitFallback(), initLazyload(".lazyload"), initHeader(), initHeroVideo(), initPopups(), initPageNav(), initDealers(), initDualFrame(), initGallery(), initNews(), initInstafeed(), initValueCounter()
});