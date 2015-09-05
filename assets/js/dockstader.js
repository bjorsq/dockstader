!function(a, b, c, d) {
    "use strict";
    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), 
        a;
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--; ) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />');
    };
    f([ "foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace" ]), 
    a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body);
    });
    var g = function(b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0], !e) return d;
                } else e = d;
                return a(e.querySelectorAll(b));
            }
            return a(c.querySelectorAll(b));
        }
        return a(b, d);
    }, h = function(a) {
        var b = [];
        return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), 
        b.push(this.name), b.join("-");
    }, i = function(a) {
        for (var b = a.split("-"), c = b.length, d = []; c--; ) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
        return d.reverse().join("-");
    }, j = function(b, c) {
        var d = this, e = function() {
            var e = g(this), f = !e.data(d.attr_name(!0) + "-init");
            e.data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(e))), 
            f && d.events(this);
        };
        return g(this.scope).is("[" + this.attr_name() + "]") ? e.call(this.scope) : g("[" + this.attr_name() + "]", this.scope).each(e), 
        "string" == typeof b ? this[b].call(this, c) : void 0;
    }, k = function(a, b) {
        function c() {
            b(a[0]);
        }
        function d() {
            if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                b += "random=" + new Date().getTime(), this.attr("src", a + b);
            }
        }
        return a.attr("src") ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c();
    };
    b.matchMedia || (b.matchMedia = function() {
        var a = b.styleMedia || b.media;
        if (!a) {
            var d = c.createElement("style"), e = c.getElementsByTagName("script")[0], f = null;
            d.type = "text/css", d.id = "matchmediajs-test", e.parentNode.insertBefore(d, e), 
            f = "getComputedStyle" in b && b.getComputedStyle(d, null) || d.currentStyle, a = {
                matchMedium: function(a) {
                    var b = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                    return d.styleSheet ? d.styleSheet.cssText = b : d.textContent = b, "1px" === f.width;
                }
            };
        }
        return function(b) {
            return {
                matches: a.matchMedium(b || "all"),
                media: b || "all"
            };
        };
    }()), function(a) {
        function c() {
            d && (g(c), i && a.fx.tick());
        }
        for (var d, e = 0, f = [ "webkit", "moz" ], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof a.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], 
        h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
        g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (a.fx.timer = function(b) {
            b() && a.timers.push(b) && !d && (d = !0, c());
        }, a.fx.stop = function() {
            d = !1;
        })) : (b.requestAnimationFrame = function(a) {
            var c = new Date().getTime(), d = Math.max(0, 16 - (c - e)), f = b.setTimeout(function() {
                a(c + d);
            }, d);
            return e = c + d, f;
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
    }(a), b.Foundation = {
        name: "Foundation",
        version: "5.5.2",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "small-only": g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "medium-only": g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "large-only": g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "xlarge-only": g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function(a, c, d, e, f) {
            var h = [ a, d, e, f ], i = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, 
            this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, h)); else for (var j in this.libs) i.push(this.init_lib(j, c));
            return g(b).load(function() {
                g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider");
            }), a;
        },
        init_lib: function(b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), 
            this.libs[b].init.apply(this.libs[b], [ this.scope, c[b] ])) : (c = c instanceof Array ? c : new Array(c), 
            this.libs[b].init.apply(this.libs[b], c))) : function() {};
        },
        patch: function(a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, 
            a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S;
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length; d--; ) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]]);
        },
        set_namespace: function() {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b;
        },
        libs: {},
        utils: {
            S: g,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e), c = null;
                    }, b));
                };
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this, g = arguments, h = function() {
                        d = null, c || (e = a.apply(f, g));
                    }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
                };
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0;
                }
                function e(b) {
                    return "string" == typeof b ? a.trim(b) : b;
                }
                c = c || "options";
                var f, g, h, i = {}, j = function(a) {
                    var b = Foundation.global.namespace;
                    return b.length > 0 ? a.data(b + "-" + c) : a.data(c);
                }, k = j(b);
                if ("object" == typeof k) return k;
                for (h = (k || ":").split(";"), f = h.length; f--; ) g = h[f].split(":"), g = [ g[0], g.slice(1).join(":") ], 
                /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (-1 === g[1].indexOf(".") ? g[1] = parseInt(g[1], 10) : g[1] = parseFloat(g[1])), 
                2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                return i;
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), 
                Foundation.media_queries[b] = e(a("." + c).css("font-family")));
            },
            add_custom_rule: function(a, b) {
                if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }", Foundation.stylesheet.cssRules.length);
                }
            },
            image_loaded: function(a, b) {
                function c(a) {
                    for (var b = a.length, c = b - 1; c >= 0; c--) if (a.attr("height") === d) return !1;
                    return !0;
                }
                var e = this, f = a.length;
                (0 === f || c(a)) && b(a), a.each(function() {
                    k(e.S(this), function() {
                        f -= 1, 0 === f && b(a);
                    });
                });
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [ this.name || "F", (+new Date()).toString(36) ].join("-"), 
                this.prefix + (this.fidx++).toString(36);
            },
            match: function(a) {
                return b.matchMedia(a).matches;
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small);
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium);
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large);
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge);
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge);
            },
            is_small_only: function() {
                return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up());
            },
            is_medium_only: function() {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [ this ].concat(a)), this;
        });
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.2",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(b) {
            var c = this, d = this.S;
            c.create(this.S(b)), d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function(b) {
                var e = d(this).closest("[" + c.attr_name() + "]"), f = c.attr_name() + "=" + e.attr(c.attr_name()), g = e.data(c.attr_name(!0) + "-init") || c.settings, h = d("#" + this.href.split("#")[1]), i = a("> dd, > li", e), j = i.children("." + g.content_class), k = j.filter("." + g.active_class);
                return b.preventDefault(), e.attr(c.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class + ", [" + f + "] li > ." + g.content_class), 
                i = i.add("[" + f + "] dd, [" + f + "] li")), g.toggleable && h.is(k) ? (h.parent("dd, li").toggleClass(g.active_class, !1), 
                h.toggleClass(g.active_class, !1), d(this).attr("aria-expanded", function(a, b) {
                    return "true" === b ? "false" : "true";
                }), g.callback(h), h.triggerHandler("toggled", [ e ]), void e.triggerHandler("toggled", [ h ])) : (g.multi_expand || (j.removeClass(g.active_class), 
                i.removeClass(g.active_class), i.children("a").attr("aria-expanded", "false")), 
                h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [ e ]), 
                e.triggerHandler("toggled", [ h ]), void d(this).attr("aria-expanded", "true"));
            });
        },
        create: function(b) {
            var c = this, d = b, e = a("> .accordion-navigation", d), f = d.data(c.attr_name(!0) + "-init") || c.settings;
            e.children("a").attr("aria-expanded", "false"), e.has("." + f.content_class + "." + f.active_class).children("a").attr("aria-expanded", "true"), 
            f.multi_expand && b.attr("aria-multiselectable", "true");
        },
        off: function() {},
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.5.2",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(a, b, c) {
            var d = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                d.assemble(d.S("li", this));
            });
        },
        events: function(d) {
            var e = this, f = e.S, g = a(".scroll-container");
            g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                var b = b || f(this), c = c || b, d = b.next("li"), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"), h = f(a.target);
                a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), 
                c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, 
                h = f("img", c)), e.open(h, b, c), e.update_paddles(c);
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                e.nav(a, "next");
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                e.nav(a, "prev");
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this);
            }), a(c).on("keydown.fndtn.clearing", function(a) {
                e.keydown(a);
            }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                e.resize();
            }), this.swipe_events(d);
        },
        swipe_events: function(a) {
            var b = this, c = b.S;
            c(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                a.touches || (a = a.originalEvent);
                var b = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: new Date().getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                c(this).data("swipe-transition", b), a.stopPropagation();
            }).on("touchmove.fndtn.clearing", ".visible-img", function(a) {
                if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                    var d = c(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = a.touches[0].pageX - d.start_page_x, 
                    Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(a.touches[0].pageY - d.start_page_y))), 
                    !d.is_scrolling && !d.active) {
                        a.preventDefault();
                        var e = d.delta_x < 0 ? "next" : "prev";
                        d.active = !0, b.nav(a, e);
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                c(this).data("swipe-transition", {}), a.stopPropagation();
            });
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = c.detach(), e = "";
                if (null != d[0]) {
                    e = d[0].outerHTML;
                    var f = this.S("#foundationClearingHolder"), g = c.data(this.attr_name(!0) + "-init"), h = {
                        grid: '<div class="carousel">' + e + "</div>",
                        viewing: g.templates.viewing
                    }, i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>", j = this.settings.touch_label;
                    Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove();
                }
            }
        },
        open: function(b, d, e) {
            function f() {
                setTimeout(function() {
                    this.image_loaded(m, function() {
                        1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this);
                    }.bind(this));
                }.bind(this), 100);
            }
            function g(b) {
                var c = a(b);
                c.css("visibility", "visible"), c.trigger("imageVisible"), i.css("overflow", "hidden"), 
                j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                    e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible");
                }), l.trigger("opened.fndtn.clearing");
            }
            var h = this, i = a(c.body), j = e.closest(".clearing-assembled"), k = h.S("div", j).first(), l = h.S(".visible-img", k), m = h.S("img", l).not(b), n = h.S(".clearing-touch-label", k), o = !1, p = {};
            a("body").on("touchmove", function(a) {
                a.preventDefault();
            }), m.error(function() {
                o = !0;
            }), this.locked() || (l.trigger("open.fndtn.clearing"), p = this.load(b), p.interchange ? m.attr("data-interchange", p.interchange).foundation("interchange", "reflow") : m.attr("src", p.src).attr("data-interchange", ""), 
            m.css("visibility", "hidden"), f.call(this));
        },
        close: function(b, d) {
            b.preventDefault();
            var e, f, g = function(a) {
                return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout");
            }(a(d)), h = a(c.body);
            return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), 
            f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), 
            e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), 
            a("body").off("touchmove"), !1;
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0;
        },
        keydown: function(b) {
            var c = a(".clearing-blackout ul[" + this.attr_name() + "]"), d = this.rtl ? 37 : 39, e = this.rtl ? 39 : 37, f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click.fndtn.clearing");
        },
        nav: function(b, c) {
            var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c);
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img"), c = a(".clearing-touch-label", ".clearing-blackout");
            b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"));
        },
        fix_height: function(a) {
            var b = a.parent().children(), c = this;
            return b.each(function() {
                var a = c.S(this), b = a.find("img");
                a.height() > b.outerHeight() && a.addClass("fix-height");
            }).closest("ul").width(100 * b.length + "%"), this;
        },
        update_paddles: function(a) {
            a = a.closest("li");
            var b = a.closest(".carousel").siblings(".visible-img");
            a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), 
            a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled");
        },
        center_and_label: function(a, b) {
            return !this.rtl && b.length > 0 ? b.css({
                marginLeft: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
            }) : b.css({
                marginRight: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                left: "auto",
                right: "50%"
            }), this;
        },
        load: function(a) {
            var b, c, d;
            return "A" === a[0].nodeName ? (b = a.attr("href"), c = a.data("clearing-interchange")) : (d = a.closest("a"), 
            b = d.attr("href"), c = d.data("clearing-interchange")), this.preload(a), {
                src: b ? b : a.attr("src"),
                interchange: b ? c : a.data("clearing-interchange")
            };
        },
        preload: function(a) {
            this.img(a.closest("li").next(), "next").img(a.closest("li").prev(), "prev");
        },
        img: function(b, c) {
            if (b.length) {
                var d, e, f, g = a(".clearing-preload-" + c), h = this.S("a", b);
                h.length ? (d = h.attr("href"), e = h.data("clearing-interchange")) : (f = this.S("img", b), 
                d = f.attr("src"), e = f.data("clearing-interchange")), e ? g.attr("data-interchange", e) : (g.attr("src", d), 
                g.attr("data-interchange", ""));
            }
            return this;
        },
        caption: function(a, b) {
            var c = b.attr("data-caption");
            return c ? a.html(c).show() : a.text("").hide(), this;
        },
        go: function(a, b) {
            var c = this.S(".visible", a), d = c[b]();
            this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), 
            d.length && this.S("img", d).trigger("click.fndtn.clearing", [ c, d ]).trigger("change.fndtn.clearing");
        },
        shift: function(a, b, c) {
            var d, e = b.parent(), f = this.settings.prev_index || b.index(), g = this.direction(e, a, b), h = this.rtl ? "right" : "left", i = parseInt(e.css("left"), 10), j = b.outerWidth(), k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, 
            this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, 
            e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, 
            e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, 
            e.animate(k, 300, this.unlock())), c();
        },
        direction: function(a, b, c) {
            var d, e = this.S("li", a), f = e.outerWidth() + e.outerWidth() / 4, g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1, h = e.index(c);
            return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", 
            this.settings.prev_index = h, d;
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b - 1; c--) if (c === a) return !0;
            return !1;
        },
        lock: function() {
            this.settings.locked = !0;
        },
        unlock: function() {
            this.settings.locked = !1;
        },
        locked: function() {
            return this.settings.locked;
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing");
        },
        reflow: function() {
            this.init();
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.2",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle"), a.extend(!0, this.settings, c, d), this.bindings(c, d);
        },
        events: function(d) {
            var e = this, f = e.S;
            f(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var c = f(this).data(e.attr_name(!0) + "-init") || e.settings;
                (!c.is_hover || Modernizr.touch) && (b.preventDefault(), f(this).parent("[data-reveal-id]").length && b.stopPropagation(), 
                e.toggle(a(this)));
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c, d = f(this);
                clearTimeout(e.timeout), d.data(e.data_attr()) ? (b = f("#" + d.data(e.data_attr())), 
                c = d) : (b = d, c = f("[" + e.attr_name() + '="' + b.attr("id") + '"]'));
                var g = c.data(e.attr_name(!0) + "-init") || e.settings;
                f(a.currentTarget).data(e.data_attr()) && g.is_hover && e.closeall.call(e), g.is_hover && e.open.apply(e, [ b, c ]);
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c = f(this);
                if (c.data(e.data_attr())) b = c.data(e.data_attr(!0) + "-init") || e.settings; else var d = f("[" + e.attr_name() + '="' + f(this).attr("id") + '"]'), b = d.data(e.attr_name(!0) + "-init") || e.settings;
                e.timeout = setTimeout(function() {
                    c.data(e.data_attr()) ? b.is_hover && e.close.call(e, f("#" + c.data(e.data_attr()))) : b.is_hover && e.close.call(e, c);
                }.bind(this), b.hover_timeout);
            }).on("click.fndtn.dropdown", function(b) {
                var d = f(b.target).closest("[" + e.attr_name() + "-content]"), g = d.find("a");
                return g.length > 0 && "false" !== d.attr("aria-autoclose") && e.close.call(e, f("[" + e.attr_name() + "-content]")), 
                b.target !== c && !a.contains(c.documentElement, b.target) || f(b.target).closest("[" + e.attr_name() + "]").length > 0 ? void 0 : !f(b.target).data("revealId") && d.length > 0 && (f(b.target).is("[" + e.attr_name() + "-content]") || a.contains(d.first()[0], b.target)) ? void b.stopPropagation() : void e.close.call(e, f("[" + e.attr_name() + "-content]"));
            }).on("opened.fndtn.dropdown", "[" + e.attr_name() + "-content]", function() {
                e.settings.opened.call(this);
            }).on("closed.fndtn.dropdown", "[" + e.attr_name() + "-content]", function() {
                e.settings.closed.call(this);
            }), f(b).off(".dropdown").on("resize.fndtn.dropdown", e.throttle(function() {
                e.resize.call(e);
            }, 50)), this.resize();
        },
        close: function(b) {
            var c = this;
            b.each(function(d) {
                var e = a("[" + c.attr_name() + "=" + b[d].id + "]") || a("aria-controls=" + b[d].id + "]");
                e.attr("aria-expanded", "false"), c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"), 
                c.S(this).trigger("closed.fndtn.dropdown", [ b ]));
            }), b.removeClass("f-open-" + this.attr_name(!0));
        },
        closeall: function() {
            var b = this;
            a.each(b.S(".f-open-" + this.attr_name(!0)), function() {
                b.close.call(b, b.S(this));
            });
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), 
            a.data("target", b.get(0)).trigger("opened.fndtn.dropdown", [ a, b ]), a.attr("aria-hidden", "false"), 
            b.attr("aria-expanded", "true"), a.focus(), a.addClass("f-open-" + this.attr_name(!0));
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name;
        },
        toggle: function(a) {
            if (!a.hasClass(this.settings.disabled_class)) {
                var b = this.S("#" + a.data(this.data_attr()));
                0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), 
                b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a));
            }
        },
        resize: function() {
            var b = this.S("[" + this.attr_name() + "-content].open"), c = a(b.data("target"));
            b.length && c.length && this.css(b, c);
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8), d = b.data(this.attr_name(!0) + "-init") || this.settings, e = a.parent().css("overflow-y") || a.parent().css("overflow");
            if (this.clear_idx(), this.small()) {
                var f = this.dirs.bottom.call(a, b, d);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: f.top
                }), a.css(Foundation.rtl ? "right" : "left", c);
            } else if ("visible" !== e) {
                var g = b[0].offsetTop + b[0].offsetHeight;
                a.attr("style", "").css({
                    position: "absolute",
                    top: g
                }), a.css(Foundation.rtl ? "right" : "left", c);
            } else this.style(a, b, d);
            return a;
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e);
        },
        dirs: {
            _base: function(a) {
                var d = this.offsetParent(), e = d.offset(), f = a.offset();
                f.top -= e.top, f.left -= e.left, f.missRight = !1, f.missTop = !1, f.missLeft = !1, 
                f.leftRightFlag = !1;
                var g;
                g = c.getElementsByClassName("row")[0] ? c.getElementsByClassName("row")[0].clientWidth : b.innerWidth;
                var h = (b.innerWidth - g) / 2, i = g;
                return this.hasClass("mega") || (a.offset().top <= this.outerHeight() && (f.missTop = !0, 
                i = b.innerWidth - h, f.leftRightFlag = !0), a.offset().left + this.outerWidth() > a.offset().left + h && a.offset().left - h > this.outerWidth() && (f.missRight = !0, 
                f.missLeft = !1), a.offset().left - this.outerWidth() <= 0 && (f.missLeft = !0, 
                f.missRight = !1)), f;
            },
            top: function(a, b) {
                var c = Foundation.libs.dropdown, d = c.dirs._base.call(this, a);
                return this.addClass("drop-top"), 1 == d.missTop && (d.top = d.top + a.outerHeight() + this.outerHeight(), 
                this.removeClass("drop-top")), 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), 
                (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), 
                Foundation.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top - this.outerHeight()
                } : {
                    left: d.left,
                    top: d.top - this.outerHeight()
                };
            },
            bottom: function(a, b) {
                var c = Foundation.libs.dropdown, d = c.dirs._base.call(this, a);
                return 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), 
                (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), 
                c.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top + a.outerHeight()
                } : {
                    left: d.left,
                    top: d.top + a.outerHeight()
                };
            },
            left: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-left"), 1 == c.missLeft && (c.left = c.left + this.outerWidth(), 
                c.top = c.top + a.outerHeight(), this.removeClass("drop-left")), {
                    left: c.left - this.outerWidth(),
                    top: c.top
                };
            },
            right: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a);
                this.addClass("drop-right"), 1 == c.missRight ? (c.left = c.left - this.outerWidth(), 
                c.top = c.top + a.outerHeight(), this.removeClass("drop-right")) : c.triggeredRight = !0;
                var d = Foundation.libs.dropdown;
                return (a.outerWidth() < this.outerWidth() || d.small() || this.hasClass(b.mega_menu)) && d.adjust_pip(this, a, b, c), 
                {
                    left: c.left + a.outerWidth(),
                    top: c.top
                };
            }
        },
        adjust_pip: function(a, b, c, d) {
            var e = Foundation.stylesheet, f = 8;
            a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8), 
            this.rule_idx = e.cssRules.length;
            var g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;";
            1 == d.missRight && (f = a.outerWidth() - 23, g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", 
            i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;"), 1 == d.triggeredRight && (g = ".f-dropdown.open:before", 
            h = ".f-dropdown.open:after", i = "left:-12px;", j = "left:-14px;"), e.insertRule ? (e.insertRule([ g, "{", i, "}" ].join(" "), this.rule_idx), 
            e.insertRule([ h, "{", j, "}" ].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx), 
            e.addRule(h, j, this.rule_idx + 1));
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), 
            delete this.rule_idx);
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), 
            this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.2",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c);
        },
        events: function() {
            var b = this, c = b.S, d = b.settings;
            b.set_expedition_position(), c(b.scope).off(".magellan").on("click.fndtn.magellan", "[" + b.add_namespace("data-magellan-arrival") + "] a[href*=#]", function(c) {
                var d = this.hostname === location.hostname || !this.hostname, e = b.filterPathname(location.pathname) === b.filterPathname(this.pathname), f = this.hash.replace(/(:|\.|\/)/g, "\\$1"), g = this;
                if (d && e && f) {
                    c.preventDefault();
                    var h = a(this).closest("[" + b.attr_name() + "]"), i = h.data("magellan-expedition-init"), j = this.hash.split("#").join(""), k = a('a[name="' + j + '"]');
                    0 === k.length && (k = a("#" + j));
                    var l = k.offset().top - i.destination_threshold + 1;
                    i.offset_by_height && (l -= h.outerHeight()), a("html, body").stop().animate({
                        scrollTop: l
                    }, i.duration, i.easing, function() {
                        history.pushState ? history.pushState(null, null, g.pathname + "#" + j) : location.hash = g.pathname + "#" + j;
                    });
                }
            }).on("scroll.fndtn.magellan", b.throttle(this.check_for_arrivals.bind(this), d.throttle_delay));
        },
        check_for_arrivals: function() {
            var a = this;
            a.update_arrivals(), a.update_expedition_positions();
        },
        set_expedition_position: function() {
            var b = this;
            a("[" + this.attr_name() + "=fixed]", b.scope).each(function(c, d) {
                var e, f, g = a(this), h = g.data("magellan-expedition-init"), i = g.attr("styles");
                g.attr("style", ""), e = g.offset().top + h.threshold, f = parseInt(g.data("magellan-fixed-top")), 
                isNaN(f) || (b.settings.fixed_top = f), g.data(b.data_attr("magellan-top-offset"), e), 
                g.attr("style", i);
            });
        },
        update_expedition_positions: function() {
            var c = this, d = a(b).scrollTop();
            a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
                var b = a(this), e = b.data("magellan-expedition-init"), f = b.attr("style"), g = b.data("magellan-top-offset");
                if (d + c.settings.fixed_top >= g) {
                    var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), 
                    b.before(h)), b.css({
                        position: "fixed",
                        top: e.fixed_top
                    }).addClass("fixed");
                } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), 
                b.attr("style", f).css("position", "").css("top", "").removeClass("fixed");
            });
        },
        update_arrivals: function() {
            var c = this, d = a(b).scrollTop();
            a("[" + this.attr_name() + "]", c.scope).each(function() {
                var b = a(this), e = b.data(c.attr_name(!0) + "-init"), f = c.offsets(b, d), g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"), h = !1;
                f.each(function(a, d) {
                    if (d.viewport_offset >= d.top_offset) {
                        var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
                        return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), 
                        h = !0, !0;
                    }
                }), h || g.removeClass(e.active_class);
            });
        },
        offsets: function(b, c) {
            var d = this, e = b.data(d.attr_name(!0) + "-init"), f = c;
            return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function(c, g) {
                var h = a(this).data(d.data_attr("magellan-arrival")), i = a("[" + d.add_namespace("data-magellan-destination") + "=" + h + "]");
                if (i.length > 0) {
                    var j = i.offset().top - e.destination_threshold;
                    return e.offset_by_height && (j -= b.outerHeight()), j = Math.floor(j), {
                        destination: i,
                        arrival: a(this),
                        top_offset: j,
                        viewport_offset: f
                    };
                }
            }).sort(function(a, b) {
                return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0;
            });
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(b).off(".magellan");
        },
        filterPathname: function(a) {
            return a = a || "", a.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
        },
        reflow: function() {
            var b = this;
            a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove();
        }
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.2",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(a, c, d) {
            var e = this, f = this.S;
            f("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                e.default_tab_hashes.push(this.hash);
            }), e.entry_location = b.location.href, this.bindings(c, d), this.handle_location_hash_change();
        },
        events: function() {
            var a = this, c = this.S, d = function(b, d) {
                var e = c(d).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                (!e.is_hover || Modernizr.touch) && (b.preventDefault(), b.stopPropagation(), a.toggle_active_tab(c(d).parent()));
            };
            c(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
                var b = this, c = a.keyCode || a.which;
                9 == c && (a.preventDefault(), d(a, b));
            }).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(a) {
                var b = this;
                d(a, b);
            }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(b) {
                var d = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                d.is_hover && a.toggle_active_tab(c(this).parent());
            }), c(b).on("hashchange.fndtn.tab", function(b) {
                b.preventDefault(), a.handle_location_hash_change();
            });
        },
        handle_location_hash_change: function() {
            var b = this, c = this.S;
            c("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = c(this).data(b.attr_name(!0) + "-init");
                if (e.deep_linking) {
                    var f;
                    if (f = e.scroll_to_content ? b.scope.location.hash : b.scope.location.hash.replace("fndtn-", ""), 
                    "" != f) {
                        var g = c(f);
                        if (g.hasClass("content") && g.parent().hasClass("tabs-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent()); else {
                            var h = g.closest(".content").attr("id");
                            h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f);
                        }
                    } else for (var i = 0; i < b.default_tab_hashes.length; i++) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent());
                }
            });
        },
        toggle_active_tab: function(e, f) {
            var g = this, h = g.S, i = e.closest("[" + this.attr_name() + "]"), j = e.find("a"), k = e.children("a").first(), l = "#" + k.attr("href").split("#")[1], m = h(l), n = e.siblings(), o = i.data(this.attr_name(!0) + "-init"), p = function(b) {
                var d, e = a(this), f = a(this).parents("li").prev().children('[role="tab"]'), g = a(this).parents("li").next().children('[role="tab"]');
                switch (b.keyCode) {
                  case 37:
                    d = f;
                    break;

                  case 39:
                    d = g;
                    break;

                  default:
                    d = !1;
                }
                d.length && (e.attr({
                    tabindex: "-1",
                    "aria-selected": null
                }), d.attr({
                    tabindex: "0",
                    "aria-selected": !0
                }).focus()), a('[role="tabpanel"]').attr("aria-hidden", "true"), a("#" + a(c.activeElement).attr("href").substring(1)).attr("aria-hidden", null);
            }, q = function(a) {
                var c = b.location.href === g.entry_location, d = o.scroll_to_content ? g.default_tab_hashes[0] : c ? b.location.hash : "fndtn-" + g.default_tab_hashes[0].replace("#", "");
                c && a === d || (b.location.hash = a);
            };
            k.data("tab-content") && (l = "#" + k.data("tab-content").split("#")[1], m = h(l)), 
            o.deep_linking && (o.scroll_to_content ? (q(f || l), f == d || f == l ? e.parent()[0].scrollIntoView() : h(l)[0].scrollIntoView()) : q(f != d ? "fndtn-" + f.replace("#", "") : "fndtn-" + l.replace("#", ""))), 
            e.addClass(o.active_class).triggerHandler("opened"), j.attr({
                "aria-selected": "true",
                tabindex: 0
            }), n.removeClass(o.active_class), n.find("a").attr({
                "aria-selected": "false",
                tabindex: -1
            }), m.siblings().removeClass(o.active_class).attr({
                "aria-hidden": "true",
                tabindex: -1
            }), m.addClass(o.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), 
            o.callback(e), m.triggerHandler("toggled", [ m ]), i.triggerHandler("toggled", [ e ]), 
            j.off("keydown").on("keydown", p);
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a;
        },
        off: function() {},
        reflow: function() {}
    };
}(jQuery, window, window.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.2",
        settings: {
            index: 0,
            start_offset: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all",
            dropdown_autoclose: !0
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var b = a(this), c = b.data(e.attr_name(!0) + "-init");
                e.S("section, .top-bar-section", this);
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, 
                e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), 
                c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), 
                e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), 
                d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed");
            });
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class), e = matchMedia(Foundation.media_queries.small).matches, f = matchMedia(Foundation.media_queries.medium).matches, g = matchMedia(Foundation.media_queries.large).matches;
            return d && "all" === c.sticky_on ? !0 : d && this.small() && -1 !== c.sticky_on.indexOf("small") && e && !f && !g ? !0 : d && this.medium() && -1 !== c.sticky_on.indexOf("medium") && e && f && !g ? !0 : d && this.large() && -1 !== c.sticky_on.indexOf("large") && e && f && g ? !0 : !1;
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"), g = e.S("section, .top-bar-section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), 
            f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), 
            d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), 
            d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), 
            d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), 
            d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), 
            d.parent().removeClass("expanded"), e.update_sticky_positioning())));
        },
        timer: null,
        events: function(c) {
            var d = this, e = this.S;
            e(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), d.toggle(this);
            }).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function(b) {
                var c = a(this).closest("li"), e = c.closest("[" + d.attr_name() + "]"), f = e.data(d.attr_name(!0) + "-init");
                if (f.dropdown_autoclose && f.is_hover) {
                    var g = a(this).closest(".hover");
                    g.removeClass("hover");
                }
                !d.breakpoint() || c.hasClass("back") || c.hasClass("has-dropdown") || d.toggle();
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var c = e(this), f = e(b.target), g = c.closest("[" + d.attr_name() + "]"), h = g.data(d.attr_name(!0) + "-init");
                return f.data("revealId") ? void d.toggle() : void (d.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), 
                c.hasClass("hover") ? (c.removeClass("hover").find("li").removeClass("hover"), c.parents("li.hover").removeClass("hover")) : (c.addClass("hover"), 
                a(c).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())));
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (d.breakpoint()) {
                    a.preventDefault();
                    var b = e(this), c = b.closest("[" + d.attr_name() + "]"), f = c.find("section, .top-bar-section"), g = (b.next(".dropdown").outerHeight(), 
                    b.closest("li"));
                    c.data("index", c.data("index") + 1), g.addClass("moved"), d.rtl ? (f.css({
                        right: -(100 * c.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * c.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * c.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * c.data("index") + "%"
                    })), c.css("height", b.siblings("ul").outerHeight(!0) + c.data("height"));
                }
            }), e(b).off(".topbar").on("resize.fndtn.topbar", d.throttle(function() {
                d.resize.call(d);
            }, 50)).trigger("resize.fndtn.topbar").load(function() {
                e(this).trigger("resize.fndtn.topbar");
            }), e("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = e(a.target).closest("li").closest("li.hover");
                b.length > 0 || e("[" + d.attr_name() + "] li.hover").removeClass("hover");
            }), e(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
                var b = e(this), c = b.closest("[" + d.attr_name() + "]"), f = c.find("section, .top-bar-section"), g = (c.data(d.attr_name(!0) + "-init"), 
                b.closest("li.moved")), h = g.parent();
                c.data("index", c.data("index") - 1), d.rtl ? (f.css({
                    right: -(100 * c.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * c.data("index") + "%"
                })) : (f.css({
                    left: -(100 * c.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * c.data("index") + "%"
                })), 0 === c.data("index") ? c.css("height", "") : c.css("height", h.outerHeight(!0) + c.data("height")), 
                setTimeout(function() {
                    g.removeClass("moved");
                }, 300);
            }), e(this.scope).find(".dropdown a").focus(function() {
                a(this).parents(".has-dropdown").addClass("hover");
            }).blur(function() {
                a(this).parents(".has-dropdown").removeClass("hover");
            });
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this), e = d.data(a.attr_name(!0) + "-init"), f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d);
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, 
                a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), 
                f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)));
            });
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches;
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        assemble: function(b) {
            var c = this, d = b.data(this.attr_name(!0) + "-init"), e = c.S("section, .top-bar-section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this), f = e.siblings(".dropdown"), g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), 
                1 == d.custom_back_text ? a("h5>a", b).html(d.back_text) : a("h5>a", b).html("&laquo; " + e.html()), 
                f.prepend(b));
            }), e.appendTo(b), this.sticky(), this.assembled(b);
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }));
        },
        height: function(b) {
            var c = 0, d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0);
            }), c;
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning();
            });
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class, c = this.S(b), d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), 
                d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), 
                d.S("body").removeClass("f-topbar-fixed")));
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar");
        },
        reflow: function() {}
    };
}(jQuery, window, window.document);