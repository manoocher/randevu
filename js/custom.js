/* Jquery.ui.min.js */ ! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function(e) {
    function t(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function i() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function a(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.on("mouseout", i, function() { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, s) }

    function s() { e.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) }

    function n(t, i) { e.extend(t, i); for (var a in i) null == i[a] && (t[a] = i[a]); return t }
    e.ui = e.ui || {}, e.ui.version = "1.12.1";
    var r = 0,
        o = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var a, s, n;
            for (n = 0; null != (s = i[n]); n++) try {
                (a = e._data(s, "events")) && a.remove && e(s).triggerHandler("remove")
            } catch (e) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, a) {
        var s, n, r, o = {},
            c = t.split(".")[0],
            l = c + "-" + (t = t.split(".")[1]);
        return a || (a = i, i = e.Widget), e.isArray(a) && (a = e.extend.apply(null, [{}].concat(a))), e.expr[":"][l.toLowerCase()] = function(t) { return !!e.data(t, l) }, e[c] = e[c] || {}, s = e[c][t], n = e[c][t] = function(e, t) { return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new n(e, t) }, e.extend(n, s, { version: a.version, _proto: e.extend({}, a), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(a, function(t, a) {
            return e.isFunction(a) ? void(o[t] = function() {
                function e() { return i.prototype[t].apply(this, arguments) }

                function s(e) { return i.prototype[t].apply(this, e) }
                return function() {
                    var t, i = this._super,
                        n = this._superApply;
                    return this._super = e, this._superApply = s, t = a.apply(this, arguments), this._super = i, this._superApply = n, t
                }
            }()) : void(o[t] = a)
        }), n.prototype = e.widget.extend(r, { widgetEventPrefix: s ? r.widgetEventPrefix || t : t }, o, { constructor: n, namespace: c, widgetName: t, widgetFullName: l }), s ? (e.each(s._childConstructors, function(t, i) {
            var a = i.prototype;
            e.widget(a.namespace + "." + a.widgetName, n, i._proto)
        }), delete s._childConstructors) : i._childConstructors.push(n), e.widget.bridge(t, n), n
    }, e.widget.extend = function(t) {
        for (var i, a, s = o.call(arguments, 1), n = 0, r = s.length; r > n; n++)
            for (i in s[n]) a = s[n][i], s[n].hasOwnProperty(i) && void 0 !== a && (t[i] = e.isPlainObject(a) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], a) : e.widget.extend({}, a) : a);
        return t
    }, e.widget.bridge = function(t, i) {
        var a = i.prototype.widgetFullName || t;
        e.fn[t] = function(s) {
            var n = "string" == typeof s,
                r = o.call(arguments, 1),
                c = this;
            return n ? this.length || "instance" !== s ? this.each(function() { var i, n = e.data(this, a); return "instance" === s ? (c = n, !1) : n ? e.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, r), i !== n && void 0 !== i ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'") }) : c = void 0 : (r.length && (s = e.widget.extend.apply(null, [s].concat(r))), this.each(function() {
                var t = e.data(this, a);
                t ? (t.option(s || {}), t._init && t._init()) : e.data(this, a, new i(s, this))
            })), c
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() },
        _getCreateOptions: function() { return {} },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            var t = this;
            this._destroy(), e.each(this.classesElementLookup, function(e, i) { t._removeClass(i, e) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: e.noop,
        widget: function() { return this.element },
        option: function(t, i) {
            var a, s, n, r = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (r = {}, a = t.split("."), t = a.shift(), a.length) {
                    for (s = r[t] = e.widget.extend({}, this.options[t]), n = 0; a.length - 1 > n; n++) s[a[n]] = s[a[n]] || {}, s = s[a[n]];
                    if (t = a.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                    s[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    r[t] = i
                }
            return this._setOptions(r), this
        },
        _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this },
        _setOption: function(e, t) { return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this },
        _setOptionClasses: function(t) { var i, a, s; for (i in t) s = this.classesElementLookup[i], t[i] !== this.options.classes[i] && s && s.length && (a = e(s.get()), this._removeClass(s, i), a.addClass(this._classes({ element: a, keys: i, classes: t, add: !0 }))) },
        _setOptionDisabled: function(e) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) },
        enable: function() { return this._setOptions({ disabled: !1 }) },
        disable: function() { return this._setOptions({ disabled: !0 }) },
        _classes: function(t) {
            function i(i, n) { var r, o; for (o = 0; i.length > o; o++) r = s.classesElementLookup[i[o]] || e(), r = e(t.add ? e.unique(r.get().concat(t.element.get())) : r.not(t.element).get()), s.classesElementLookup[i[o]] = r, a.push(i[o]), n && t.classes[i[o]] && a.push(t.classes[i[o]]) }
            var a = [],
                s = this;
            return t = e.extend({ element: this.element, classes: this.options.classes || {} }, t), this._on(t.element, { remove: "_untrackClassesElement" }), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), a.join(" ")
        },
        _untrackClassesElement: function(t) {
            var i = this;
            e.each(i.classesElementLookup, function(a, s) {-1 !== e.inArray(t.target, s) && (i.classesElementLookup[a] = e(s.not(t.target).get())) })
        },
        _removeClass: function(e, t, i) { return this._toggleClass(e, t, i, !1) },
        _addClass: function(e, t, i) { return this._toggleClass(e, t, i, !0) },
        _toggleClass: function(e, t, i, a) {
            a = "boolean" == typeof a ? a : i;
            var s = "string" == typeof e || null === e,
                n = { extra: s ? t : i, keys: s ? e : t, element: s ? this.element : e, add: a };
            return n.element.toggleClass(this._classes(n), a), this
        },
        _on: function(t, i, a) {
            var s, n = this;
            "boolean" != typeof t && (a = i, i = t, t = !1), a ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (a = i, i = this.element, s = this.widget()), e.each(a, function(a, r) {
                function o() { return t || !0 !== n.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? n[r] : r).apply(n, arguments) : void 0 }
                "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
                var c = a.match(/^([\w:-]*)\s*(.*)$/),
                    l = c[1] + n.eventNamespace,
                    h = c[2];
                h ? s.on(l, h, o) : i.on(l, o)
            })
        },
        _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) },
        _delay: function(e, t) {
            function i() { return ("string" == typeof e ? a[e] : e).apply(a, arguments) }
            var a = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { this._addClass(e(t.currentTarget), null, "ui-state-hover") }, mouseleave: function(t) { this._removeClass(e(t.currentTarget), null, "ui-state-hover") } }) },
        _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { this._addClass(e(t.currentTarget), null, "ui-state-focus") }, focusout: function(t) { this._removeClass(e(t.currentTarget), null, "ui-state-focus") } }) },
        _trigger: function(t, i, a) {
            var s, n, r = this.options[t];
            if (a = a || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent)
                for (s in n) s in i || (i[s] = n[s]);
            return this.element.trigger(i, a), !(e.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(a)) || i.isDefaultPrevented())
        }
    }, e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) { e.Widget.prototype["_" + t] = function(a, s, n) { "string" == typeof s && (s = { effect: s }); var r, o = s ? !0 === s || "number" == typeof s ? i : s.effect || i : t; "number" == typeof(s = s || {}) && (s = { duration: s }), r = !e.isEmptyObject(s), s.complete = n, s.delay && a.delay(s.delay), r && e.effects && e.effects.effect[o] ? a[t](s) : o !== t && a[o] ? a[o](s.duration, s.easing, n) : a.queue(function(i) { e(this)[t](), n && n.call(a[0]), i() }) } }), e.widget, "1.7" === e.fn.jquery.substring(0, 3) && (e.each(["Width", "Height"], function(t, i) {
        function a(t, i, a, n) { return e.each(s, function() { i -= parseFloat(e.css(t, "padding" + this)) || 0, a && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            n = i.toLowerCase(),
            r = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
        e.fn["inner" + i] = function(t) { return void 0 === t ? r["inner" + i].call(this) : this.each(function() { e(this).css(n, a(this, t) + "px") }) }, e.fn["outer" + i] = function(t, s) { return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function() { e(this).css(n, a(this, t, !0, s) + "px") }) }
    }), e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, e.fn.extend({ uniqueId: function() { var e = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++e) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) } }), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = !1;
    e(document).on("mouseup", function() { c = !1 }), e.widget("ui.mouse", {
        version: "1.12.1",
        options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) { return t._mouseDown(e) }).on("click." + this.widgetName, function(i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(t) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    a = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return !(a && !s && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), c = !0, !0))
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, c = !1, t.preventDefault() },
        _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), e.widget("ui.selectable", e.ui.mouse, {
        version: "1.12.1",
        options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
        _create: function() {
            var t = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                t.elementPos = e(t.element[0]).offset(), t.selectees = e(t.options.filter, t.element[0]), t._addClass(t.selectees, "ui-selectee"), t.selectees.each(function() {
                    var i = e(this),
                        a = i.offset(),
                        s = { left: a.left - t.elementPos.left, top: a.top - t.elementPos.top };
                    e.data(this, "selectable-item", { element: this, $element: i, left: s.left, top: s.top, right: s.left + i.outerWidth(), bottom: s.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") })
                })
            }, this.refresh(), this._mouseInit(), this.helper = e("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
        _mouseStart: function(t) {
            var i = this,
                a = this.options;
            this.opos = [t.pageX, t.pageY], this.elementPos = e(this.element[0]).offset(), this.options.disabled || (this.selectees = e(a.filter, this.element[0]), this._trigger("start", t), e(a.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), a.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var a = e.data(this, "selectable-item");
                a.startselected = !0, t.metaKey || t.ctrlKey || (i._removeClass(a.$element, "ui-selected"), a.selected = !1, i._addClass(a.$element, "ui-unselecting"), a.unselecting = !0, i._trigger("unselecting", t, { unselecting: a.element }))
            }), e(t.target).parents().addBack().each(function() { var a, s = e.data(this, "selectable-item"); return s ? (a = !t.metaKey && !t.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, a ? "ui-unselecting" : "ui-selected")._addClass(s.$element, a ? "ui-selecting" : "ui-unselecting"), s.unselecting = !a, s.selecting = a, s.selected = a, a ? i._trigger("selecting", t, { selecting: s.element }) : i._trigger("unselecting", t, { unselecting: s.element }), !1) : void 0 }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, a = this,
                    s = this.options,
                    n = this.opos[0],
                    r = this.opos[1],
                    o = t.pageX,
                    c = t.pageY;
                return n > o && (i = o, o = n, n = i), r > c && (i = c, c = r, r = i), this.helper.css({ left: n, top: r, width: o - n, height: c - r }), this.selectees.each(function() {
                    var i = e.data(this, "selectable-item"),
                        l = !1,
                        h = {};
                    i && i.element !== a.element[0] && (h.left = i.left + a.elementPos.left, h.right = i.right + a.elementPos.left, h.top = i.top + a.elementPos.top, h.bottom = i.bottom + a.elementPos.top, "touch" === s.tolerance ? l = !(h.left > o || n > h.right || h.top > c || r > h.bottom) : "fit" === s.tolerance && (l = h.left > n && o > h.right && h.top > r && c > h.bottom), l ? (i.selected && (a._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (a._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (a._addClass(i.$element, "ui-selecting"), i.selecting = !0, a._trigger("selecting", t, { selecting: i.element }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (a._removeClass(i.$element, "ui-selecting"), i.selecting = !1, a._addClass(i.$element, "ui-selected"), i.selected = !0) : (a._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (a._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), a._trigger("unselecting", t, { unselecting: i.element }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (a._removeClass(i.$element, "ui-selected"), i.selected = !1, a._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, a._trigger("unselecting", t, { unselecting: i.element })))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var a = e.data(this, "selectable-item");
                i._removeClass(a.$element, "ui-unselecting"), a.unselecting = !1, a.startselected = !1, i._trigger("unselected", t, { unselected: a.element })
            }), e(".ui-selecting", this.element[0]).each(function() {
                var a = e.data(this, "selectable-item");
                i._removeClass(a.$element, "ui-selecting")._addClass(a.$element, "ui-selected"), a.selecting = !1, a.selected = !0, a.startselected = !0, i._trigger("selected", t, { selected: a.element })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.widget("ui.accordion", {
        version: "1.12.1",
        options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
        hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
        showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : e() } },
        _createIcons: function() {
            var t, i, a = this.options.icons;
            a && (t = e("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + a.header), t.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, a.header)._addClass(i, null, a.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() },
        _destroy: function() {
            var e;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function(e, t) { return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || !1 !== this.options.active || this._activate(0), void("icons" === e && (this._destroyIcons(), t && this._createIcons()))) },
        _setOptionDisabled: function(e) { this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e) },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode,
                    a = this.headers.length,
                    s = this.headers.index(t.target),
                    n = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        n = this.headers[(s + 1) % a];
                        break;
                    case i.LEFT:
                    case i.UP:
                        n = this.headers[(s - 1 + a) % a];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        n = this.headers[0];
                        break;
                    case i.END:
                        n = this.headers[a - 1]
                }
                n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), e(n).trigger("focus"), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) { t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().trigger("focus") },
        refresh: function() {
            var t = this.options;
            this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = e()) : !1 === t.active ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var e = this.headers,
                t = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
        },
        _refresh: function() {
            var t, i = this.options,
                a = i.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var t = e(this),
                    i = t.uniqueId().attr("id"),
                    a = t.next(),
                    s = a.uniqueId().attr("id");
                t.attr("aria-controls", s), a.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === a ? (t = s.height(), this.element.siblings(":visible").each(function() {
                var i = e(this),
                    a = i.css("position");
                "absolute" !== a && "fixed" !== a && (t -= i.outerHeight(!0))
            }), this.headers.each(function() { t -= e(this).outerHeight(!0) }), this.headers.next().each(function() { e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === a && (t = 0, this.headers.next().each(function() {
                var i = e(this).is(":visible");
                i || e(this).show(), t = Math.max(t, e(this).css("height", "").height()), i || e(this).hide()
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }))
        },
        _findActive: function(t) { return "number" == typeof t ? this.headers.eq(t) : e() },
        _setupEvents: function(t) {
            var i = { keydown: "_keydown" };
            t && e.each(t.split(" "), function(e, t) { i[t] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i, a, s = this.options,
                n = this.active,
                r = e(t.currentTarget),
                o = r[0] === n[0],
                c = o && s.collapsible,
                l = c ? e() : r.next(),
                h = { oldHeader: n, oldPanel: n.next(), newHeader: c ? e() : r, newPanel: l };
            t.preventDefault(), o && !s.collapsible || !1 === this._trigger("beforeActivate", t, h) || (s.active = !c && this.headers.index(r), this.active = o ? e() : r, this._toggle(h), this._removeClass(n, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = n.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), o || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (a = r.children(".ui-accordion-header-icon"), this._removeClass(a, null, s.icons.header)._addClass(a, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var i = t.newPanel,
                a = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({ "aria-hidden": "true" }), a.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && a.length ? a.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(e(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _animate: function(e, t, i) {
            var a, s, n, r = this,
                o = 0,
                c = e.css("box-sizing"),
                l = e.length && (!t.length || e.index() < t.index()),
                h = this.options.animate || {},
                d = l && h.down || h,
                u = function() { r._toggleComplete(i) };
            return "number" == typeof d && (n = d), "string" == typeof d && (s = d), s = s || d.easing || h.easing, n = n || d.duration || h.duration, t.length ? e.length ? (a = e.show().outerHeight(), t.animate(this.hideProps, { duration: n, easing: s, step: function(e, t) { t.now = Math.round(e) } }), void e.hide().animate(this.showProps, { duration: n, easing: s, complete: u, step: function(e, i) { i.now = Math.round(e), "height" !== i.prop ? "content-box" === c && (o += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(a - t.outerHeight() - o), o = 0) } })) : t.animate(this.hideProps, n, s, u) : e.animate(this.showProps, n, s, u)
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel,
                i = t.prev();
            this._removeClass(t, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    }), e.extend(e.ui, { datepicker: { version: "1.12.1" } });
    var l;
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(e) { return n(this._defaults, e || {}), this },
        _attachDatepicker: function(t, i) {
            var a, s, n;
            s = "div" === (a = t.nodeName.toLowerCase()) || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (n = this._newInst(e(t), s)).settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
        },
        _newInst: function(t, i) { return { id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(t, i) {
            var a = e(t);
            i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var a, s, n, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (a = this._get(i, "showOn")) || "both" === a) && t.on("focus", this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: n, alt: s, title: s }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({ src: n, alt: s, title: s }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, a, s, n = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) { for (i = 0, a = 0, s = 0; e.length > s; s++) e[s].length > i && (i = e[s].length, a = s); return a }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var a = e(t);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, a, s, r) { var o, c, l, h, d, u = this._dialogInst; return u || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), u = this._dialogInst = this._newInst(this._dialogInput, !1), u.settings = {}, e.data(this._dialogInput[0], "datepicker", u)), n(u.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + h, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", u), this },
        _destroyDatepicker: function(t) {
            var i, a = e(t),
                s = e.data(t, "datepicker");
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty(), l === s && (l = null))
        },
        _enableDatepicker: function(t) {
            var i, a, s = e(t),
                n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && ((a = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }))
        },
        _disableDatepicker: function(t) {
            var i, a, s = e(t),
                n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && ((a = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) { try { return e.data(t, "datepicker") } catch (e) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(t, i, a) { var s, r, o, c, l = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = a), void(l && (this._curInst === l && this._hideDatepicker(), r = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), c = this._getMinMaxDate(l, "max"), n(l.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== c && void 0 !== s.dateFormat && void 0 === s.maxDate && (l.settings.maxDate = this._formatDate(l, c)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, r), this._updateAlternate(l), this._updateDatepicker(l)))) },
        _changeDatepicker: function(e, t, i) { this._optionDatepicker(e, t, i) },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null },
        _doKeyDown: function(t) {
            var i, a, s, n = e.datepicker._getInst(t.target),
                r = !0,
                o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return (s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv))[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) { var i, a, s = e.datepicker._getInst(t.target); return e.datepicker._get(s, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")), a = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > a || !i || i.indexOf(a) > -1) : void 0 },
        _doKeyUp: function(t) {
            var i = e.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try { e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)) && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i)) } catch (e) {}
            return !0
        },
        _showDatepicker: function(i) {
            if ("input" !== (i = i.target || i).nodeName.toLowerCase() && (i = e("input", i.parentNode)[0]), !e.datepicker._isDisabledDatepicker(i) && e.datepicker._lastInput !== i) {
                var a, s, r, o, c, l, h;
                a = e.datepicker._getInst(i), e.datepicker._curInst && e.datepicker._curInst !== a && (e.datepicker._curInst.dpDiv.stop(!0, !0), a && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), !1 !== (r = (s = e.datepicker._get(a, "beforeShow")) ? s.apply(i, [i, a]) : {}) && (n(a.settings, r), a.lastVal = null, e.datepicker._lastInput = i, e.datepicker._setDateFromField(a), e.datepicker._inDialog && (i.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(i), e.datepicker._pos[1] += i.offsetHeight), o = !1, e(i).parents().each(function() { return !(o |= "fixed" === e(this).css("position")) }), c = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, a.dpDiv.empty(), a.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(a), c = e.datepicker._checkOffset(a, c, o), a.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: c.left + "px", top: c.top + "px" }), a.inline || (l = e.datepicker._get(a, "showAnim"), h = e.datepicker._get(a, "duration"), a.dpDiv.css("z-index", t(e(i)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? a.dpDiv.show(l, e.datepicker._get(a, "showOptions"), h) : a.dpDiv[l || "show"](l ? h : null), e.datepicker._shouldFocusInput(a) && a.input.trigger("focus"), e.datepicker._curInst = a))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, l = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, a = this._getNumberOfMonths(t),
                n = a[1],
                r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && s.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (i = t.yearshtml, setTimeout(function() { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") },
        _checkOffset: function(t, i, a) {
            var s = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                c = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > c && c > s ? Math.abs(i.left + s - c) : 0), i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + o) : 0), i
        },
        _findPos: function(t) { for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] },
        _hideDatepicker: function(t) { var i, a, s, n, r = this._curInst;!r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), a = this._get(r, "duration"), s = function() { e.datepicker._tidyDialog(r) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), a, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, (n = this._get(r, "onClose")) && n.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(e) { e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    a = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, a) {
            var s = e(t),
                n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
        },
        _gotoToday: function(t) {
            var i, a = e(t),
                s = this._getInst(a[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
        },
        _selectMonthYear: function(t, i, a) {
            var s = e(t),
                n = this._getInst(s[0]);
            n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function(t, i, a, s) {
            var n, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var a, s = e(t),
                n = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), (a = this._get(n, "onSelect")) ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, a, s, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).val(s))
        },
        noWeekends: function(e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] },
        iso8601Week: function(e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 },
        parseDate: function(t, i, a) {
            if (null == t || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var s, n, r, o, c = 0,
                l = (a ? a.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
                u = (a ? a.dayNames : null) || this._defaults.dayNames,
                p = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (a ? a.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                _ = -1,
                v = -1,
                b = !1,
                y = function(e) { var i = t.length > s + 1 && t.charAt(s + 1) === e; return i && s++, i },
                k = function(e) {
                    var t = y(e),
                        a = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        s = "y" === e ? a : 1,
                        n = RegExp("^\\d{" + s + "," + a + "}"),
                        r = i.substring(c).match(n);
                    if (!r) throw "Missing number at position " + c;
                    return c += r[0].length, parseInt(r[0], 10)
                },
                D = function(t, a, s) {
                    var n = -1,
                        r = e.map(y(t) ? s : a, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) { return -(e[1].length - t[1].length) });
                    if (e.each(r, function(e, t) { var a = t[1]; return i.substr(c, a.length).toLowerCase() === a.toLowerCase() ? (n = t[0], c += a.length, !1) : void 0 }), -1 !== n) return n + 1;
                    throw "Unknown name at position " + c
                },
                w = function() {
                    if (i.charAt(c) !== t.charAt(s)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (s = 0; t.length > s; s++)
                if (b) "'" !== t.charAt(s) || y("'") ? w() : b = !1;
                else switch (t.charAt(s)) {
                    case "d":
                        _ = k("d");
                        break;
                    case "D":
                        D("D", d, u);
                        break;
                    case "o":
                        v = k("o");
                        break;
                    case "m":
                        m = k("m");
                        break;
                    case "M":
                        m = D("M", p, f);
                        break;
                    case "y":
                        g = k("y");
                        break;
                    case "@":
                        g = (o = new Date(k("@"))).getFullYear(), m = o.getMonth() + 1, _ = o.getDate();
                        break;
                    case "!":
                        g = (o = new Date((k("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = o.getMonth() + 1, _ = o.getDate();
                        break;
                    case "'":
                        y("'") ? w() : b = !0;
                        break;
                    default:
                        w()
                }
            if (i.length > c && (r = i.substr(c), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= g ? 0 : -100)), v > -1)
                for (m = 1, _ = v; !((n = this._getDaysInMonth(g, m - 1)) >= _);) m++, _ -= n;
            if ((o = this._daylightSavingAdjust(new Date(g, m - 1, _))).getFullYear() !== g || o.getMonth() + 1 !== m || o.getDate() !== _) throw "Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                c = function(t) { var i = e.length > a + 1 && e.charAt(a + 1) === t; return i && a++, i },
                l = function(e, t, i) {
                    var a = "" + t;
                    if (c(e))
                        for (; i > a.length;) a = "0" + a;
                    return a
                },
                h = function(e, t, i, a) { return c(e) ? a[t] : i[t] },
                d = "",
                u = !1;
            if (t)
                for (a = 0; e.length > a; a++)
                    if (u) "'" !== e.charAt(a) || c("'") ? d += e.charAt(a) : u = !1;
                    else switch (e.charAt(a)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += h("D", t.getDay(), s, n);
                            break;
                        case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += h("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            d += c("y") ? t.getFullYear() : (10 > t.getFullYear() % 100 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            c("'") ? d += "'" : u = !0;
                            break;
                        default:
                            d += e.charAt(a)
                    }
            return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                a = !1,
                s = function(i) { var a = e.length > t + 1 && e.charAt(t + 1) === i; return a && t++, a };
            for (t = 0; e.length > t; t++)
                if (a) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : a = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, t) { return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t] },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    a = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    n = s,
                    r = this._getFormatConfig(e);
                try { n = this.parseDate(i, a, r) || s } catch (e) { a = t ? "" : a }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) },
        _determineDate: function(t, i, a) {
            var s = null == i || "" === i ? a : "string" == typeof i ? function(i) {
                try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (e) {}
                for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = a.getFullYear(), n = a.getMonth(), r = a.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = o.exec(i); c;) {
                    switch (c[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(c[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(c[1], 10);
                            break;
                        case "m":
                        case "M":
                            n += parseInt(c[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(s, n));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(c[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(s, n))
                    }
                    c = o.exec(i)
                }
                return new Date(s, n, r)
            }(i) : "number" == typeof i ? isNaN(i) ? a : function(e) { var t = new Date; return t.setDate(t.getDate() + e), t }(i) : new Date(i.getTime());
            return (s = s && "Invalid Date" == "" + s ? a : s) && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null },
        _setDate: function(e, t, i) {
            var a = !t,
                s = e.selectedMonth,
                n = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
        },
        _getDate: function(e) { return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)) },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                a = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = { prev: function() { e.datepicker._adjustDate(a, -i, "M") }, next: function() { e.datepicker._adjustDate(a, +i, "M") }, hide: function() { e.datepicker._hideDatepicker() }, today: function() { e.datepicker._gotoToday(a) }, selectDay: function() { return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return e.datepicker._selectMonthYear(a, this, "M"), !1 }, selectYear: function() { return e.datepicker._selectMonthYear(a, this, "Y"), !1 } };
                e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, a, s, n, r, o, c, l, h, d, u, p, f, g, m, _, v, b, y, k, D, w, x, C, M, I, T, S, N, A, F, E, P, Y, H, O, W, K, j = new Date,
                L = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
                R = this._get(e, "isRTL"),
                q = this._get(e, "showButtonPanel"),
                B = this._get(e, "hideIfNoPrevNext"),
                U = this._get(e, "navigationAsDateFormat"),
                $ = this._getNumberOfMonths(e),
                z = this._get(e, "showCurrentAtPos"),
                G = this._get(e, "stepMonths"),
                V = 1 !== $[0] || 1 !== $[1],
                X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                J = this._getMinMaxDate(e, "min"),
                Q = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - z,
                ee = e.drawYear;
            if (0 > Z && (Z += 12, ee--), Q)
                for (t = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - $[0] * $[1] + 1, Q.getDate())), t = J && J > t ? J : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) 0 > --Z && (Z = 11, ee--);
            for (e.drawMonth = Z, e.drawYear = ee, i = this._get(e, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Z - G, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee, Z + G, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? X : L, r = U ? this.formatDate(r, o, this._getFormatConfig(e)) : r, c = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? c : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (R ? "" : c) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, d = this._get(e, "showWeek"), u = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), y = "", D = 0; $[0] > D; D++) {
                for (w = "", this.maxRows = 4, x = 0; $[1] > x; x++) {
                    if (C = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), M = " ui-corner-all", I = "", V) {
                        if (I += "<div class='ui-datepicker-group", $[1] > 1) switch (x) {
                            case 0:
                                I += " ui-datepicker-group-first", M = " ui-corner-" + (R ? "right" : "left");
                                break;
                            case $[1] - 1:
                                I += " ui-datepicker-group-last", M = " ui-corner-" + (R ? "left" : "right");
                                break;
                            default:
                                I += " ui-datepicker-group-middle", M = ""
                        }
                        I += "'>"
                    }
                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + M + "'>" + (/all|left/.test(M) && 0 === D ? R ? n : a : "") + (/all|right/.test(M) && 0 === D ? R ? a : n : "") + this._generateMonthYearHeader(e, Z, ee, J, Q, D > 0 || x > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", k = 0; 7 > k; k++) S = (k + h) % 7, T += "<th scope='col'" + ((k + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[S] + "'>" + p[S] + "</span></th>";
                    for (I += T + "</tr></thead><tbody>", N = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, N)), A = (this._getFirstDayOfMonth(ee, Z) - h + 7) % 7, F = Math.ceil((A + N) / 7), E = V && this.maxRows > F ? this.maxRows : F, this.maxRows = E, P = this._daylightSavingAdjust(new Date(ee, Z, 1 - A)), Y = 0; E > Y; Y++) {
                        for (I += "<tr>", H = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "", k = 0; 7 > k; k++) O = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], W = P.getMonth() !== Z, K = W && !v || !O[0] || J && J > P || Q && P > Q, H += "<td class='" + ((k + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (P.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (K ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !_ ? "" : " " + O[1] + (P.getTime() === X.getTime() ? " " + this._currentClass : "") + (P.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !_ || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (K ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (W && !_ ? "&#xa0;" : K ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === L.getTime() ? " ui-state-highlight" : "") + (P.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                        I += H + "</tr>"
                    }++Z > 11 && (Z = 0, ee++), w += I += "</tbody></table>" + (V ? "</div>" + ($[0] > 0 && x === $[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += w
            }
            return y += l, e._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(e, t, i, a, s, n, r, o) {
            var c, l, h, d, u, p, f, g, m = this._get(e, "changeMonth"),
                _ = this._get(e, "changeYear"),
                v = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (n || !m) y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (c = a && a.getFullYear() === i, l = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!c || h >= a.getMonth()) && (!l || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!n && m && _ ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", n || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), f = (p = function(e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? u : t })(d[0]), g = Math.max(f, p(d[1] || "")), f = a ? Math.max(f, a.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), v && (b += (!n && m && _ ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var a = e.selectedYear + ("Y" === i ? t : 0),
                s = e.selectedMonth + ("M" === i ? t : 0),
                n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                s = i && i > t ? i : t;
            return a && s > a ? a : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t },
        _getMinMaxDate: function(e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) },
        _getDaysInMonth: function(e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() },
        _getFirstDayOfMonth: function(e, t) { return new Date(e, t, 1).getDay() },
        _canAdjustMonth: function(e, t, i, a) {
            var s = this._getNumberOfMonths(e),
                n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function(e, t) {
            var i, a, s = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                c = this._get(e, "yearRange");
            return c && (i = c.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } },
        _formatDate: function(e, t, i, a) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e)) }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1", e.datepicker, e.ui.escapeSelector = function() { var e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function(t) { return t.replace(e, "\\$1") } }(), e.ui.safeActiveElement = function(e) { var t; try { t = e.activeElement } catch (i) { t = e.body } return t || (t = e.body), t.nodeName || (t = e.body), t }, e.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var e = /#.*$/;
            return function(t) {
                var i, a;
                i = t.href.replace(e, ""), a = location.href.replace(e, "");
                try { i = decodeURIComponent(i) } catch (e) {}
                try { a = decodeURIComponent(a) } catch (e) {}
                return t.hash.length > 1 && i === a
            }
        }(),
        _create: function() {
            var t = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) { return t.tabs.index(e) }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                i = this.options.collapsible,
                a = location.hash.substring(1);
            return null === t && (a && this.tabs.each(function(i, s) { return e(s).attr("aria-controls") === a ? (t = i, !1) : void 0 }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = !!this.tabs.length && 0)), !1 !== t && -1 === (t = this.tabs.index(this.tabs.eq(t))) && (t = !i && 0), !i && !1 === t && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() } },
        _tabKeydown: function(t) {
            var i = e(e.ui.safeActiveElement(this.document[0])).closest("li"),
                a = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        a++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        s = !1, a--;
                        break;
                    case e.ui.keyCode.END:
                        a = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        a = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(a);
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(a !== this.options.active && a);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), a = this._focusNextTab(a, s), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(a).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", a) }, this.delay))
            }
        },
        _panelKeydown: function(t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus")) },
        _handlePageNav: function(t) { return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(t, i) { for (var a = this.tabs.length - 1; - 1 !== e.inArray(function() { return t > a && (t = 0), 0 > t && (t = a), t }(), this.options.disabled);) t = i ? t + 1 : t - 1; return t },
        _focusNextTab: function(e, t) { return e = this._findNextTab(e, t), this.tabs.eq(e).trigger("focus"), e },
        _setOption: function(e, t) { return "active" === e ? void this._activate(t) : (this._super(e, t), "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t), t || !1 !== this.options.active || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t))) },
        _sanitizeSelector: function(e) { return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) { return i.index(e) }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var t = this,
                i = this.tabs,
                a = this.anchors,
                s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) { e(this).is(".ui-state-disabled") && t.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { e(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return e("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = e(), this.anchors.each(function(i, a) {
                var s, n, r, o = e(a).uniqueId().attr("id"),
                    c = e(a).closest("li"),
                    l = c.attr("aria-controls");
                t._isLocal(a) ? (s = a.hash, r = s.substring(1), n = t.element.find(t._sanitizeSelector(s))) : (r = c.attr("aria-controls") || e({}).uniqueId()[0].id, s = "#" + r, (n = t.element.find(s)).length || (n = t._createPanel(r)).insertAfter(t.panels[i - 1] || t.tablist), n.attr("aria-live", "polite")), n.length && (t.panels = t.panels.add(n)), l && c.data("ui-tabs-aria-controls", l), c.attr({ "aria-controls": r, "aria-labelledby": o }), n.attr("aria-labelledby", o)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(a.not(this.anchors)), this._off(s.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) },
        _createPanel: function(t) { return e("<div>").attr("id", t).data("ui-tabs-destroy", !0) },
        _setOptionDisabled: function(t) {
            var i, a, s;
            for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), s = 0; a = this.tabs[s]; s++) i = e(a), !0 === t || -1 !== e.inArray(s, t) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function(t) {
            var i = {};
            t && e.each(t.split(" "), function(e, t) { i[t] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(e) { e.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, a = this.element.parent();
            "fill" === t ? (i = a.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    a = t.css("position");
                "absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= e(this).outerHeight(!0) }), this.panels.each(function() { e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() { i = Math.max(i, e(this).height("").height()) }).height(i))
        },
        _eventHandler: function(t) {
            var i = this.options,
                a = this.active,
                s = e(t.currentTarget).closest("li"),
                n = s[0] === a[0],
                r = n && i.collapsible,
                o = r ? e() : this._getPanelForTab(s),
                c = a.length ? this._getPanelForTab(a) : e(),
                l = { oldTab: a, oldPanel: c, newTab: r ? e() : s, newPanel: o };
            t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !i.collapsible || !1 === this._trigger("beforeActivate", t, l) || (i.active = !r && this.tabs.index(s), this.active = n ? e() : s, this.xhr && this.xhr.abort(), c.length || o.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(s), t), this._toggle(t, l))
        },
        _toggle: function(t, i) {
            function a() { n.running = !1, n._trigger("activate", t, i) }

            function s() { n._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && n.options.show ? n._show(r, n.options.show, a) : (r.show(), a()) }
            var n = this,
                r = i.newPanel,
                o = i.oldPanel;
            this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function() { n._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), s()), o.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), r.length && o.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(t) {
            var i, a = this._findActive(t);
            a[0] !== this.active[0] && (a.length || (a = this.active), i = a.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }))
        },
        _findActive: function(t) { return !1 === t ? e() : this.tabs.eq(t) },
        _getIndex: function(t) { return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))), t },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() {
                var t = e(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) { var i = this.options.disabled;!1 !== i && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function(e) { return e !== t ? e : null }) : e.map(this.tabs, function(e, i) { return i !== t ? i : null })), this._setOptionDisabled(i)) },
        disable: function(t) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === t) i = !0;
                else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                    i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var a = this,
                s = this.tabs.eq(t),
                n = s.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(s),
                o = { tab: s, panel: r },
                c = function(e, t) { "abort" === t && a.panels.stop(!1, !0), a._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), e === a.xhr && delete a.xhr };
            this._isLocal(n[0]) || (this.xhr = e.ajax(this._ajaxSettings(n, i, o)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(e, t, s) { setTimeout(function() { r.html(e), a._trigger("load", i, o), c(s, t) }, 1) }).fail(function(e, t) { setTimeout(function() { c(e, t) }, 1) })))
        },
        _ajaxSettings: function(t, i, a) { var s = this; return { url: t.attr("href").replace(/#.*$/, ""), beforeSend: function(t, n) { return s._trigger("beforeLoad", i, e.extend({ jqXHR: t, ajaxSettings: n }, a)) } } },
        _getPanelForTab: function(t) { var i = e(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), !1 !== e.uiBackCompat && e.widget("ui.tabs", e.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), e.ui.tabs;
    var h = "ui-effects-",
        d = "ui-effects-style",
        u = "ui-effects-animated",
        p = e;
    e.effects = { effect: {} },
        function(e, t) {
            function i(e, t, i) { var a = h[t.type] || {}; return null == e ? i || !t.def ? null : t.def : (e = a.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : a.mod ? (e + a.mod) % a.mod : 0 > e ? 0 : e > a.max ? a.max : e) }

            function a(i) {
                var a = c(),
                    s = a._rgba = [];
                return i = i.toLowerCase(), p(o, function(e, n) {
                    var r, o = n.re.exec(i),
                        c = o && n.parse(o),
                        h = n.space || "rgba";
                    return c ? (r = a[h](c), a[l[h].cache] = r[l[h].cache], s = a._rgba = r._rgba, !1) : t
                }), s.length ? ("0,0,0,0" === s.join() && e.extend(s, n.transparent), a) : n[i]
            }

            function s(e, t, i) { return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e }
            var n, r = /^([\-+])=\s*(\d+\.?\d*)/,
                o = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [e[1], e[2], e[3], e[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(e) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(e) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(e) { return [e[1], e[2] / 100, e[3] / 100, e[4]] } }],
                c = e.Color = function(t, i, a, s) { return new e.Color.fn.parse(t, i, a, s) },
                l = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                h = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                d = c.support = {},
                u = e("<p>")[0],
                p = e.each;
            u.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = u.style.backgroundColor.indexOf("rgba") > -1, p(l, function(e, t) { t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 } }), c.fn = e.extend(c.prototype, {
                parse: function(s, r, o, h) {
                    if (s === t) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = e(s).css(r), r = t);
                    var d = this,
                        u = e.type(s),
                        f = this._rgba = [];
                    return r !== t && (s = [s, r, o, h], u = "array"), "string" === u ? this.parse(a(s) || n._default) : "array" === u ? (p(l.rgba.props, function(e, t) { f[t.idx] = i(s[t.idx], t) }), this) : "object" === u ? (s instanceof c ? p(l, function(e, t) { s[t.cache] && (d[t.cache] = s[t.cache].slice()) }) : p(l, function(t, a) {
                        var n = a.cache;
                        p(a.props, function(e, t) {
                            if (!d[n] && a.to) {
                                if ("alpha" === e || null == s[e]) return;
                                d[n] = a.to(d._rgba)
                            }
                            d[n][t.idx] = i(s[e], t, !0)
                        }), d[n] && 0 > e.inArray(null, d[n].slice(0, 3)) && (d[n][3] = 1, a.from && (d._rgba = a.from(d[n])))
                    }), this) : t
                },
                is: function(e) {
                    var i = c(e),
                        a = !0,
                        s = this;
                    return p(l, function(e, n) { var r, o = i[n.cache]; return o && (r = s[n.cache] || n.to && n.to(s._rgba) || [], p(n.props, function(e, i) { return null != o[i.idx] ? a = o[i.idx] === r[i.idx] : t })), a }), a
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return p(l, function(i, a) { t[a.cache] && e.push(i) }), e.pop()
                },
                transition: function(e, t) {
                    var a = c(e),
                        s = a._space(),
                        n = l[s],
                        r = 0 === this.alpha() ? c("transparent") : this,
                        o = r[n.cache] || n.to(r._rgba),
                        d = o.slice();
                    return a = a[n.cache], p(n.props, function(e, s) {
                        var n = s.idx,
                            r = o[n],
                            c = a[n],
                            l = h[s.type] || {};
                        null !== c && (null === r ? d[n] = c : (l.mod && (c - r > l.mod / 2 ? r += l.mod : r - c > l.mod / 2 && (r -= l.mod)), d[n] = i((c - r) * t + r, s)))
                    }), this[s](d)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        a = i.pop(),
                        s = c(t)._rgba;
                    return c(e.map(i, function(e, t) { return (1 - a) * s[t] + a * e }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) { return null == e ? t > 2 ? 1 : 0 : e });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) { return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        a = i.pop();
                    return t && i.push(~~(255 * a)), "#" + e.map(i, function(e) { return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), c.fn.parse.prototype = c.fn, l.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, a = e[0] / 255,
                    s = e[1] / 255,
                    n = e[2] / 255,
                    r = e[3],
                    o = Math.max(a, s, n),
                    c = Math.min(a, s, n),
                    l = o - c,
                    h = o + c,
                    d = .5 * h;
                return t = c === o ? 0 : a === o ? 60 * (s - n) / l + 360 : s === o ? 60 * (n - a) / l + 120 : 60 * (a - s) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / h : l / (2 - h), [Math.round(t) % 360, i, d, null == r ? 1 : r]
            }, l.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    a = e[2],
                    n = e[3],
                    r = .5 >= a ? a * (1 + i) : a + i - a * i,
                    o = 2 * a - r;
                return [Math.round(255 * s(o, r, t + 1 / 3)), Math.round(255 * s(o, r, t)), Math.round(255 * s(o, r, t - 1 / 3)), n]
            }, p(l, function(a, s) {
                var n = s.props,
                    o = s.cache,
                    l = s.to,
                    h = s.from;
                c.fn[a] = function(a) {
                    if (l && !this[o] && (this[o] = l(this._rgba)), a === t) return this[o].slice();
                    var s, r = e.type(a),
                        d = "array" === r || "object" === r ? a : arguments,
                        u = this[o].slice();
                    return p(n, function(e, t) {
                        var a = d["object" === r ? e : t.idx];
                        null == a && (a = u[t.idx]), u[t.idx] = i(a, t)
                    }), h ? (s = c(h(u)), s[o] = u, s) : c(u)
                }, p(n, function(t, i) {
                    c.fn[t] || (c.fn[t] = function(s) {
                        var n, o = e.type(s),
                            c = "alpha" === t ? this._hsla ? "hsla" : "rgba" : a,
                            l = this[c](),
                            h = l[i.idx];
                        return "undefined" === o ? h : ("function" === o && (s = s.call(this, h), o = e.type(s)), null == s && i.empty ? this : ("string" === o && (n = r.exec(s)) && (s = h + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1)), l[i.idx] = s, this[c](l)))
                    })
                })
            }), c.hook = function(t) {
                var i = t.split(" ");
                p(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, s) {
                            var n, r, o = "";
                            if ("transparent" !== s && ("string" !== e.type(s) || (n = a(s)))) {
                                if (s = c(n || s), !d.rgba && 1 !== s._rgba[3]) {
                                    for (r = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === o || "transparent" === o) && r && r.style;) try { o = e.css(r, "backgroundColor"), r = r.parentNode } catch (e) {}
                                    s = s.blend(o && "transparent" !== o ? o : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try { t.style[i] = s } catch (e) {}
                        }
                    }, e.fx.step[i] = function(t) { t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos)) }
                })
            }, c.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), e.cssHooks.borderColor = { expand: function(e) { var t = {}; return p(["Top", "Right", "Bottom", "Left"], function(i, a) { t["border" + a + "Color"] = e }), t } }, n = e.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(p),
        function() {
            function t(t) {
                var i, a, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    n = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (a = s.length; a--;) i = s[a], "string" == typeof s[i] && (n[e.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (n[i] = s[i]);
                return n
            }

            function i(t, i) { var a, n, r = {}; for (a in i) n = i[a], t[a] !== n && (s[a] || (e.fx.step[a] || !isNaN(parseFloat(n))) && (r[a] = n)); return r }
            var a = ["add", "remove", "toggle"],
                s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (p.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e.effects.animateClass = function(s, n, r, o) {
                var c = e.speed(n, r, o);
                return this.queue(function() {
                    var n, r = e(this),
                        o = r.attr("class") || "",
                        l = c.children ? r.find("*").addBack() : r;
                    l = l.map(function() { return { el: e(this), start: t(this) } }), (n = function() { e.each(a, function(e, t) { s[t] && r[t + "Class"](s[t]) }) })(), l = l.map(function() { return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this }), r.attr("class", o), l = l.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            a = e.extend({}, c, { queue: !1, complete: function() { i.resolve(t) } });
                        return this.el.animate(this.diff, a), i.promise()
                    }), e.when.apply(e, l.get()).done(function() {
                        n(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) { t.css(e, "") })
                        }), c.complete.call(r[0])
                    })
                })
            }, e.fn.extend({ addClass: function(t) { return function(i, a, s, n) { return a ? e.effects.animateClass.call(this, { add: i }, a, s, n) : t.apply(this, arguments) } }(e.fn.addClass), removeClass: function(t) { return function(i, a, s, n) { return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: i }, a, s, n) : t.apply(this, arguments) } }(e.fn.removeClass), toggleClass: function(t) { return function(i, a, s, n, r) { return "boolean" == typeof a || void 0 === a ? s ? e.effects.animateClass.call(this, a ? { add: i } : { remove: i }, s, n, r) : t.apply(this, arguments) : e.effects.animateClass.call(this, { toggle: i }, a, s, n) } }(e.fn.toggleClass), switchClass: function(t, i, a, s, n) { return e.effects.animateClass.call(this, { add: i, remove: t }, a, s, n) } })
        }(),
        function() {
            function t(t, i, a, s) { return e.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), e.isFunction(i) && (s = i, a = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = a, a = i, i = {}), e.isFunction(a) && (s = a, a = null), i && e.extend(t, i), a = a || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof a ? a : a in e.fx.speeds ? e.fx.speeds[a] : e.fx.speeds._default, t.complete = s || i.complete, t }

            function i(t) { return !(t && "number" != typeof t && !e.fx.speeds[t]) || ("string" == typeof t && !e.effects.effect[t] || (!!e.isFunction(t) || "object" == typeof t && !t.effect)) }

            function a(e, t) {
                var i = t.outerWidth(),
                    a = t.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(e) || ["", 0, i, a, 0];
                return { top: parseFloat(s[1]) || 0, right: "auto" === s[2] ? i : parseFloat(s[2]), bottom: "auto" === s[3] ? a : parseFloat(s[3]), left: parseFloat(s[4]) || 0 }
            }
            e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = function(t) { return function(i) { return !!e(i).data(u) || t(i) } }(e.expr.filters.animated)), !1 !== e.uiBackCompat && e.extend(e.effects, {
                save: function(e, t) { for (var i = 0, a = t.length; a > i; i++) null !== t[i] && e.data(h + t[i], e[0].style[t[i]]) },
                restore: function(e, t) { for (var i, a = 0, s = t.length; s > a; a++) null !== t[a] && (i = e.data(h + t[a]), e.css(t[a], i)) },
                setMode: function(e, t) { return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), float: t.css("float") },
                        a = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        s = { width: t.width(), height: t.height() },
                        n = document.activeElement;
                    try { n.id } catch (e) { n = document.body }
                    return t.wrap(a), (t[0] === n || e.contains(t[0], n)) && e(n).trigger("focus"), a = t.parent(), "static" === t.css("position") ? (a.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function(e, a) { i[a] = t.css(a), isNaN(parseInt(i[a], 10)) && (i[a] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(s), a.css(i).show()
                },
                removeWrapper: function(t) { var i = document.activeElement; return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).trigger("focus")), t }
            }), e.extend(e.effects, {
                version: "1.12.1",
                define: function(t, i, a) { return a || (a = i, i = "effect"), e.effects.effect[t] = a, e.effects.effect[t].mode = i, a },
                scaledDimensions: function(e, t, i) {
                    if (0 === t) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var a = "horizontal" !== i ? (t || 100) / 100 : 1,
                        s = "vertical" !== i ? (t || 100) / 100 : 1;
                    return { height: e.height() * s, width: e.width() * a, outerHeight: e.outerHeight() * s, outerWidth: e.outerWidth() * a }
                },
                clipToBox: function(e) { return { width: e.clip.right - e.clip.left, height: e.clip.bottom - e.clip.top, left: e.clip.left, top: e.clip.top } },
                unshift: function(e, t, i) {
                    var a = e.queue();
                    t > 1 && a.splice.apply(a, [1, 0].concat(a.splice(t, i))), e.dequeue()
                },
                saveStyle: function(e) { e.data(d, e[0].style.cssText) },
                restoreStyle: function(e) { e[0].style.cssText = e.data(d) || "", e.removeData(d) },
                mode: function(e, t) { var i = e.is(":hidden"); return "toggle" === t && (t = i ? "show" : "hide"), (i ? "hide" === t : "show" === t) && (t = "none"), t },
                getBaseline: function(e, t) {
                    var i, a;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            a = 0;
                            break;
                        case "center":
                            a = .5;
                            break;
                        case "right":
                            a = 1;
                            break;
                        default:
                            a = e[1] / t.width
                    }
                    return { x: a, y: i }
                },
                createPlaceholder: function(t) {
                    var i, a = t.css("position"),
                        s = t.position();
                    return t.css({ marginTop: t.css("marginTop"), marginBottom: t.css("marginBottom"), marginLeft: t.css("marginLeft"), marginRight: t.css("marginRight") }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(a) && (a = "absolute", i = e("<" + t[0].nodeName + ">").insertAfter(t).css({ display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: t.css("marginTop"), marginBottom: t.css("marginBottom"), marginLeft: t.css("marginLeft"), marginRight: t.css("marginRight"), float: t.css("float") }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(h + "placeholder", i)), t.css({ position: a, left: s.left, top: s.top }), i
                },
                removePlaceholder: function(e) {
                    var t = h + "placeholder",
                        i = e.data(t);
                    i && (i.remove(), e.removeData(t))
                },
                cleanUp: function(t) { e.effects.restoreStyle(t), e.effects.removePlaceholder(t) },
                setTransition: function(t, i, a, s) {
                    return s = s || {}, e.each(i, function(e, i) {
                        var n = t.cssUnit(i);
                        n[0] > 0 && (s[i] = n[0] * a + n[1])
                    }), s
                }
            }), e.fn.extend({
                effect: function() {
                    function i(t) {
                        function i() { o.removeData(u), e.effects.cleanUp(o), "hide" === a.mode && o.hide(), r() }

                        function r() { e.isFunction(c) && c.call(o[0]), e.isFunction(t) && t() }
                        var o = e(this);
                        a.mode = h.shift(), !1 === e.uiBackCompat || n ? "none" === a.mode ? (o[l](), r()) : s.call(o[0], a, i) : (o.is(":hidden") ? "hide" === l : "show" === l) ? (o[l](), r()) : s.call(o[0], a, r)
                    }
                    var a = t.apply(this, arguments),
                        s = e.effects.effect[a.effect],
                        n = s.mode,
                        r = a.queue,
                        o = r || "fx",
                        c = a.complete,
                        l = a.mode,
                        h = [],
                        d = function(t) {
                            var i = e(this),
                                a = e.effects.mode(i, l) || n;
                            i.data(u, !0), h.push(a), n && ("show" === a || a === n && "hide" === a) && i.show(), n && "none" === a || e.effects.saveStyle(i), e.isFunction(t) && t()
                        };
                    return e.fx.off || !s ? l ? this[l](a.duration, c) : this.each(function() { c && c.call(this) }) : !1 === r ? this.each(d).each(i) : this.queue(o, d).queue(o, i)
                },
                show: function(e) { return function(a) { if (i(a)) return e.apply(this, arguments); var s = t.apply(this, arguments); return s.mode = "show", this.effect.call(this, s) } }(e.fn.show),
                hide: function(e) { return function(a) { if (i(a)) return e.apply(this, arguments); var s = t.apply(this, arguments); return s.mode = "hide", this.effect.call(this, s) } }(e.fn.hide),
                toggle: function(e) { return function(a) { if (i(a) || "boolean" == typeof a) return e.apply(this, arguments); var s = t.apply(this, arguments); return s.mode = "toggle", this.effect.call(this, s) } }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        a = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) { i.indexOf(t) > 0 && (a = [parseFloat(i), t]) }), a
                },
                cssClip: function(e) { return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : a(this.css("clip"), this) },
                transfer: function(t, i) {
                    var a = e(this),
                        s = e(t.to),
                        n = "fixed" === s.css("position"),
                        r = e("body"),
                        o = n ? r.scrollTop() : 0,
                        c = n ? r.scrollLeft() : 0,
                        l = s.offset(),
                        h = { top: l.top - o, left: l.left - c, height: s.innerHeight(), width: s.innerWidth() },
                        d = a.offset(),
                        u = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({ top: d.top - o, left: d.left - c, height: a.innerHeight(), width: a.innerWidth(), position: n ? "fixed" : "absolute" }).animate(h, t.duration, t.easing, function() { u.remove(), e.isFunction(i) && i() })
                }
            }), e.fx.step.clip = function(t) { t.clipInit || (t.start = e(t.elem).cssClip(), "string" == typeof t.end && (t.end = a(t.end, t.elem)), t.clipInit = !0), e(t.elem).cssClip({ top: t.pos * (t.end.top - t.start.top) + t.start.top, right: t.pos * (t.end.right - t.start.right) + t.start.right, bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom, left: t.pos * (t.end.left - t.start.left) + t.start.left }) }
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) { t[i] = function(t) { return Math.pow(t, e + 2) } }), e.extend(t, {
                Sine: function(e) { return 1 - Math.cos(e * Math.PI / 2) },
                Circ: function(e) { return 1 - Math.sqrt(1 - e * e) },
                Elastic: function(e) { return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15) },
                Back: function(e) { return e * e * (3 * e - 2) },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) { e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) { return 1 - i(1 - e) }, e.easing["easeInOut" + t] = function(e) { return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2 } })
        }();
    e.effects;
    e.effects.define("blind", "hide", function(t, i) {
        var a = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            s = e(this),
            n = t.direction || "up",
            r = s.cssClip(),
            o = { clip: e.extend({}, r) },
            c = e.effects.createPlaceholder(s);
        o.clip[a[n][0]] = o.clip[a[n][1]], "show" === t.mode && (s.cssClip(o.clip), c && c.css(e.effects.clipToBox(o)), o.clip = r), c && c.animate(e.effects.clipToBox(o), t.duration, t.easing), s.animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
    }), e.effects.define("bounce", function(t, i) {
        var a, s, n, r = e(this),
            o = t.mode,
            c = "hide" === o,
            l = "show" === o,
            h = t.direction || "up",
            d = t.distance,
            u = t.times || 5,
            p = 2 * u + (l || c ? 1 : 0),
            f = t.duration / p,
            g = t.easing,
            m = "up" === h || "down" === h ? "top" : "left",
            _ = "up" === h || "left" === h,
            v = 0,
            b = r.queue().length;
        for (e.effects.createPlaceholder(r), n = r.css(m), d || (d = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (s = { opacity: 1 }, s[m] = n, r.css("opacity", 0).css(m, _ ? 2 * -d : 2 * d).animate(s, f, g)), c && (d /= Math.pow(2, u - 1)), (s = {})[m] = n; u > v; v++) a = {}, a[m] = (_ ? "-=" : "+=") + d, r.animate(a, f, g).animate(s, f, g), d = c ? 2 * d : d / 2;
        c && (a = { opacity: 0 }, a[m] = (_ ? "-=" : "+=") + d, r.animate(a, f, g)), r.queue(i), e.effects.unshift(r, b, p + 1)
    }), e.effects.define("clip", "hide", function(t, i) {
        var a, s = {},
            n = e(this),
            r = t.direction || "vertical",
            o = "both" === r,
            c = o || "horizontal" === r,
            l = o || "vertical" === r;
        a = n.cssClip(), s.clip = { top: l ? (a.bottom - a.top) / 2 : a.top, right: c ? (a.right - a.left) / 2 : a.right, bottom: l ? (a.bottom - a.top) / 2 : a.bottom, left: c ? (a.right - a.left) / 2 : a.left }, e.effects.createPlaceholder(n), "show" === t.mode && (n.cssClip(s.clip), s.clip = a), n.animate(s, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
    }), e.effects.define("drop", "hide", function(t, i) {
        var a, s = e(this),
            n = "show" === t.mode,
            r = t.direction || "left",
            o = "up" === r || "down" === r ? "top" : "left",
            c = "up" === r || "left" === r ? "-=" : "+=",
            l = "+=" === c ? "-=" : "+=",
            h = { opacity: 0 };
        e.effects.createPlaceholder(s), a = t.distance || s["top" === o ? "outerHeight" : "outerWidth"](!0) / 2, h[o] = c + a, n && (s.css(h), h[o] = l + a, h.opacity = 1), s.animate(h, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
    }), e.effects.define("explode", "hide", function(t, i) {
        function a() { v.push(this), v.length === d * u && s() }

        function s() { p.css({ visibility: "visible" }), e(v).remove(), i() }
        var n, r, o, c, l, h, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            u = d,
            p = e(this),
            f = "show" === t.mode,
            g = p.show().css("visibility", "hidden").offset(),
            m = Math.ceil(p.outerWidth() / u),
            _ = Math.ceil(p.outerHeight() / d),
            v = [];
        for (n = 0; d > n; n++)
            for (c = g.top + n * _, h = n - (d - 1) / 2, r = 0; u > r; r++) o = g.left + r * m, l = r - (u - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -r * m, top: -n * _ }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: m, height: _, left: o + (f ? l * m : 0), top: c + (f ? h * _ : 0), opacity: f ? 0 : 1 }).animate({ left: o + (f ? 0 : l * m), top: c + (f ? 0 : h * _), opacity: f ? 1 : 0 }, t.duration || 500, t.easing, a)
    }), e.effects.define("fade", "toggle", function(t, i) {
        var a = "show" === t.mode;
        e(this).css("opacity", a ? 0 : 1).animate({ opacity: a ? 1 : 0 }, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
    }), e.effects.define("fold", "hide", function(t, i) {
        var a = e(this),
            s = t.mode,
            n = "show" === s,
            r = "hide" === s,
            o = t.size || 15,
            c = /([0-9]+)%/.exec(o),
            l = !!t.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            h = t.duration / 2,
            d = e.effects.createPlaceholder(a),
            u = a.cssClip(),
            p = { clip: e.extend({}, u) },
            f = { clip: e.extend({}, u) },
            g = [u[l[0]], u[l[1]]],
            m = a.queue().length;
        c && (o = parseInt(c[1], 10) / 100 * g[r ? 0 : 1]), p.clip[l[0]] = o, f.clip[l[0]] = o, f.clip[l[1]] = 0, n && (a.cssClip(f.clip), d && d.css(e.effects.clipToBox(f)), f.clip = u), a.queue(function(i) { d && d.animate(e.effects.clipToBox(p), h, t.easing).animate(e.effects.clipToBox(f), h, t.easing), i() }).animate(p, h, t.easing).animate(f, h, t.easing).queue(i), e.effects.unshift(a, m, 4)
    }), e.effects.define("highlight", "show", function(t, i) {
        var a = e(this),
            s = { backgroundColor: a.css("backgroundColor") };
        "hide" === t.mode && (s.opacity = 0), e.effects.saveStyle(a), a.css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(s, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
    }), e.effects.define("size", function(t, i) {
        var a, s, n, r = e(this),
            o = ["fontSize"],
            c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            h = t.mode,
            d = "effect" !== h,
            u = t.scale || "both",
            p = t.origin || ["middle", "center"],
            f = r.css("position"),
            g = r.position(),
            m = e.effects.scaledDimensions(r),
            _ = t.from || m,
            v = t.to || e.effects.scaledDimensions(r, 0);
        e.effects.createPlaceholder(r), "show" === h && (n = _, _ = v, v = n), s = { from: { y: _.height / m.height, x: _.width / m.width }, to: { y: v.height / m.height, x: v.width / m.width } }, ("box" === u || "both" === u) && (s.from.y !== s.to.y && (_ = e.effects.setTransition(r, c, s.from.y, _), v = e.effects.setTransition(r, c, s.to.y, v)), s.from.x !== s.to.x && (_ = e.effects.setTransition(r, l, s.from.x, _), v = e.effects.setTransition(r, l, s.to.x, v))), ("content" === u || "both" === u) && s.from.y !== s.to.y && (_ = e.effects.setTransition(r, o, s.from.y, _), v = e.effects.setTransition(r, o, s.to.y, v)), p && (a = e.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * a.y + g.top, _.left = (m.outerWidth - _.outerWidth) * a.x + g.left, v.top = (m.outerHeight - v.outerHeight) * a.y + g.top, v.left = (m.outerWidth - v.outerWidth) * a.x + g.left), r.css(_), ("content" === u || "both" === u) && (c = c.concat(["marginTop", "marginBottom"]).concat(o), l = l.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
            var i = e(this),
                a = e.effects.scaledDimensions(i),
                n = { height: a.height * s.from.y, width: a.width * s.from.x, outerHeight: a.outerHeight * s.from.y, outerWidth: a.outerWidth * s.from.x },
                r = { height: a.height * s.to.y, width: a.width * s.to.x, outerHeight: a.height * s.to.y, outerWidth: a.width * s.to.x };
            s.from.y !== s.to.y && (n = e.effects.setTransition(i, c, s.from.y, n), r = e.effects.setTransition(i, c, s.to.y, r)), s.from.x !== s.to.x && (n = e.effects.setTransition(i, l, s.from.x, n), r = e.effects.setTransition(i, l, s.to.x, r)), d && e.effects.saveStyle(i), i.css(n), i.animate(r, t.duration, t.easing, function() { d && e.effects.restoreStyle(i) })
        })), r.animate(v, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = r.offset();
                0 === v.opacity && r.css("opacity", _.opacity), d || (r.css("position", "static" === f ? "relative" : f).offset(t), e.effects.saveStyle(r)), i()
            }
        })
    }), e.effects.define("scale", function(t, i) {
        var a = e(this),
            s = t.mode,
            n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
            r = e.extend(!0, { from: e.effects.scaledDimensions(a), to: e.effects.scaledDimensions(a, n, t.direction || "both"), origin: t.origin || ["middle", "center"] }, t);
        t.fade && (r.from.opacity = 1, r.to.opacity = 0), e.effects.effect.size.call(this, r, i)
    }), e.effects.define("puff", "hide", function(t, i) {
        var a = e.extend(!0, {}, t, { fade: !0, percent: parseInt(t.percent, 10) || 150 });
        e.effects.effect.scale.call(this, a, i)
    }), e.effects.define("pulsate", "show", function(t, i) {
        var a = e(this),
            s = t.mode,
            n = "show" === s,
            r = "hide" === s,
            o = n || r,
            c = 2 * (t.times || 5) + (o ? 1 : 0),
            l = t.duration / c,
            h = 0,
            d = 1,
            u = a.queue().length;
        for ((n || !a.is(":visible")) && (a.css("opacity", 0).show(), h = 1); c > d; d++) a.animate({ opacity: h }, l, t.easing), h = 1 - h;
        a.animate({ opacity: h }, l, t.easing), a.queue(i), e.effects.unshift(a, u, c + 1)
    }), e.effects.define("shake", function(t, i) {
        var a = 1,
            s = e(this),
            n = t.direction || "left",
            r = t.distance || 20,
            o = t.times || 3,
            c = 2 * o + 1,
            l = Math.round(t.duration / c),
            h = "up" === n || "down" === n ? "top" : "left",
            d = "up" === n || "left" === n,
            u = {},
            p = {},
            f = {},
            g = s.queue().length;
        for (e.effects.createPlaceholder(s), u[h] = (d ? "-=" : "+=") + r, p[h] = (d ? "+=" : "-=") + 2 * r, f[h] = (d ? "-=" : "+=") + 2 * r, s.animate(u, l, t.easing); o > a; a++) s.animate(p, l, t.easing).animate(f, l, t.easing);
        s.animate(p, l, t.easing).animate(u, l / 2, t.easing).queue(i), e.effects.unshift(s, g, c + 1)
    }), e.effects.define("slide", "show", function(t, i) {
        var a, s, n = e(this),
            r = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            o = t.mode,
            c = t.direction || "left",
            l = "up" === c || "down" === c ? "top" : "left",
            h = "up" === c || "left" === c,
            d = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0),
            u = {};
        e.effects.createPlaceholder(n), a = n.cssClip(), s = n.position()[l], u[l] = (h ? -1 : 1) * d + s, u.clip = n.cssClip(), u.clip[r[c][1]] = u.clip[r[c][0]], "show" === o && (n.cssClip(u.clip), n.css(l, u[l]), u.clip = a, u[l] = s), n.animate(u, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
    });
    !1 !== e.uiBackCompat && e.effects.define("transfer", function(t, i) { e(this).transfer(t, i) })
});
/* Jquery.ui.block.js */
! function() {
    "use strict";

    function e(e) {
        function o(o, i) {
            var s, h, k = o == window,
                v = i && void 0 !== i.message ? i.message : void 0;
            if (!(i = e.extend({}, e.blockUI.defaults, i || {})).ignoreIfBlocked || !e(o).data("blockUI.isBlocked")) {
                if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), v = void 0 === v ? i.message : v, k && b && t(window, { fadeOut: 0 }), v && "string" != typeof v && (v.parentNode || v.jquery)) {
                    var y = v.jquery ? v[0] : v,
                        m = {};
                    e(o).data("blockUI.history", m), m.el = y, m.parent = y.parentNode, m.display = y.style.display, m.position = y.style.position, m.parent && m.parent.removeChild(y)
                }
                e(o).data("blockUI.onUnblock", i.onUnblock);
                var g, I, w, U, x = i.baseZ;
                g = e(r || i.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(i.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && k ? (U = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', i.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : i.theme ? (U = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', i.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), v && (i.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), i.theme || I.css(i.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || i.forceIframe) && g.css("opacity", 0);
                var C = [g, I, w],
                    S = e(k ? "body" : o);
                e.each(C, function() { this.appendTo(S) }), i.theme && i.draggable && e.fn.draggable && w.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : o).length > 0);
                if (u || O) {
                    if (k && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(o, "borderTopWidth"),
                        T = d(o, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function(e, o) {
                        var t = o[0].style;
                        if (t.position = "absolute", e < 2) k ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && t.setExpression("left", B), M && t.setExpression("top", M);
                        else if (i.centerY) k && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0;
                        else if (!i.centerY && k) {
                            var n = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (i.css && i.css.top ? parseInt(i.css.top, 10) : 0) + ') + "px"';
                            t.setExpression("top", n)
                        }
                    })
                }
                if (v && (i.theme ? w.find(".ui-widget-content").append(v) : w.append(v), (v.jquery || v.nodeType) && e(v).show()), (r || i.forceIframe) && i.showOverlay && g.show(), i.fadeIn) {
                    var j = i.onBlock ? i.onBlock : c,
                        H = i.showOverlay && !v ? j : c,
                        z = v ? j : c;
                    i.showOverlay && I._fadeIn(i.fadeIn, H), v && w._fadeIn(i.fadeIn, z)
                } else i.showOverlay && I.show(), v && w.show(), i.onBlock && i.onBlock.bind(w)();
                if (n(1, o, i), k ? (b = w[0], p = e(i.focusableElements, b), i.focusInput && setTimeout(l, 20)) : a(w[0], i.centerX, i.centerY), i.timeout) {
                    var W = setTimeout(function() { k ? e.unblockUI(i) : e(o).unblock(i) }, i.timeout);
                    e(o).data("blockUI.timeout", W)
                }
            }
        }

        function t(o, t) {
            var s, l = o == window,
                a = e(o),
                d = a.data("blockUI.history"),
                c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), t = e.extend({}, e.blockUI.defaults, t || {}), n(0, o, t), null === t.onUnblock && (t.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), t.cursorReset && (r.length > 1 && (r[1].style.cursor = t.cursorReset), r.length > 2 && (r[2].style.cursor = t.cursorReset)), l && (b = p = null), t.fadeOut ? (s = r.length, r.stop().fadeOut(t.fadeOut, function() { 0 == --s && i(r, d, t, o) })) : i(r, d, t, o)
        }

        function i(o, t, i, n) {
            var s = e(n);
            if (!s.data("blockUI.isBlocked")) {
                o.each(function(e, o) { this.parentNode && this.parentNode.removeChild(this) }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.el.style.cursor = "default", t.parent && t.parent.appendChild(t.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(n, i);
                var l = e(document.body),
                    a = l.width(),
                    d = l[0].style.width;
                l.width(a - 1).width(a), l[0].style.width = d
            }
        }

        function n(o, t, i) {
            var n = t == window,
                l = e(t);
            if ((o || (!n || b) && (n || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", o), n && i.bindEvents && (!o || i.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                o ? e(document).bind(a, i, s) : e(document).unbind(a, s)
            }
        }

        function s(o) {
            if ("keydown" === o.type && o.keyCode && 9 == o.keyCode && b && o.data.constrainTabKey) {
                var t = p,
                    i = !o.shiftKey && o.target === t[t.length - 1],
                    n = o.shiftKey && o.target === t[0];
                if (i || n) return setTimeout(function() { l(n) }, 10), !1
            }
            var s = o.data,
                a = e(o.target);
            return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(o), a.parents("div." + s.blockMsgClass).length > 0 || 0 === a.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (p) {
                var o = p[!0 === e ? p.length - 1 : 0];
                o && o.focus()
            }
        }

        function a(e, o, t) {
            var i = e.parentNode,
                n = e.style,
                s = (i.offsetWidth - e.offsetWidth) / 2 - d(i, "borderLeftWidth"),
                l = (i.offsetHeight - e.offsetHeight) / 2 - d(i, "borderTopWidth");
            o && (n.left = s > 0 ? s + "px" : "0"), t && (n.top = l > 0 ? l + "px" : "0")
        }

        function d(o, t) { return parseInt(e.css(o, t), 10) || 0 }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function() {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) { o(window, e) }, e.unblockUI = function(e) { t(window, e) }, e.growlUI = function(o, t, i, n) {
            var s = e('<div class="growlUI"></div>');
            o && s.append("<h1>" + o + "</h1>"), t && s.append("<h2>" + t + "</h2>"), void 0 === i && (i = 3e3);
            var l = function(o) { o = o || {}, e.blockUI({ message: s, fadeIn: void 0 !== o.fadeIn ? o.fadeIn : 700, fadeOut: void 0 !== o.fadeOut ? o.fadeOut : 1e3, timeout: void 0 !== o.timeout ? o.timeout : i, centerY: !1, showOverlay: !1, onUnblock: n, css: e.blockUI.defaults.growlCSS }) };
            l();
            s.css("opacity");
            s.mouseover(function() {
                l({ fadeIn: 0, timeout: 3e4 });
                var o = e(".blockMsg");
                o.stop(), o.fadeTo(300, 1)
            }).mouseout(function() { e(".blockMsg").fadeOut(1e3) })
        }, e.fn.block = function(t) {
            if (this[0] === window) return e.blockUI(t), this;
            var i = e.extend({}, e.blockUI.defaults, t || {});
            return this.each(function() {
                var o = e(this);
                i.ignoreIfBlocked && o.data("blockUI.isBlocked") || o.unblock({ fadeOut: 0 })
            }), this.each(function() { "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, t) })
        }, e.fn.unblock = function(o) { return this[0] === window ? (e.unblockUI(o), this) : this.each(function() { t(this, o) }) }, e.blockUI.version = 2.7, e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 };
        var b = null,
            p = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
/* CustomScrollbar.min.js */
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery) }(function(e) {
    function t(t) {
        var r = t || window.event,
            l = s.call(arguments, 1),
            c = 0,
            u = 0,
            h = 0,
            f = 0,
            m = 0,
            p = 0;
        if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, c = h), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
            if (1 === r.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                c *= g, h *= g, u *= g
            } else if (2 === r.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                c *= v, h *= v, u *= v
            }
            if (f = Math.max(Math.abs(h), Math.abs(u)), (!i || i > f) && (i = f, n(r, f) && (i /= 40)), n(r, f) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / i), u = Math[u >= 1 ? "floor" : "ceil"](u / i), h = Math[h >= 1 ? "floor" : "ceil"](h / i), d.settings.normalizeOffset && this.getBoundingClientRect) {
                var x = this.getBoundingClientRect();
                m = t.clientX - x.left, p = t.clientY - x.top
            }
            return t.deltaX = u, t.deltaY = h, t.deltaFactor = i, t.offsetX = m, t.offsetY = p, t.deltaMode = 0, l.unshift(t, c, u, h), a && clearTimeout(a), a = setTimeout(o, 200), (e.event.dispatch || e.event.handle).apply(this, l)
        }
    }

    function o() { i = null }

    function n(e, t) { return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0 }
    var a, i, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        l = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        s = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var c = r.length; c;) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
    var d = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var o = l.length; o;) this.addEventListener(l[--o], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var o = l.length; o;) this.removeEventListener(l[--o], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var o = e(t),
                n = o["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(o.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) { return e(t).height() },
        settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
    };
    e.fn.extend({ mousewheel: function(e) { return e ? this.bind("mousewheel", e) : this.trigger("mousewheel") }, unmousewheel: function(e) { return this.unbind("mousewheel", e) } })
}),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery) }(function(e) {
    function t(t) {
        var r = t || window.event,
            l = s.call(arguments, 1),
            c = 0,
            u = 0,
            h = 0,
            f = 0,
            m = 0,
            p = 0;
        if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, c = h), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
            if (1 === r.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                c *= g, h *= g, u *= g
            } else if (2 === r.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                c *= v, h *= v, u *= v
            }
            if (f = Math.max(Math.abs(h), Math.abs(u)), (!i || i > f) && (i = f, n(r, f) && (i /= 40)), n(r, f) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / i), u = Math[u >= 1 ? "floor" : "ceil"](u / i), h = Math[h >= 1 ? "floor" : "ceil"](h / i), d.settings.normalizeOffset && this.getBoundingClientRect) {
                var x = this.getBoundingClientRect();
                m = t.clientX - x.left, p = t.clientY - x.top
            }
            return t.deltaX = u, t.deltaY = h, t.deltaFactor = i, t.offsetX = m, t.offsetY = p, t.deltaMode = 0, l.unshift(t, c, u, h), a && clearTimeout(a), a = setTimeout(o, 200), (e.event.dispatch || e.event.handle).apply(this, l)
        }
    }

    function o() { i = null }

    function n(e, t) { return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0 }
    var a, i, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        l = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        s = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var c = r.length; c;) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
    var d = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var o = l.length; o;) this.addEventListener(l[--o], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var o = l.length; o;) this.removeEventListener(l[--o], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var o = e(t),
                n = o["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(o.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) { return e(t).height() },
        settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
    };
    e.fn.extend({ mousewheel: function(e) { return e ? this.bind("mousewheel", e) : this.trigger("mousewheel") }, unmousewheel: function(e) { return this.unbind("mousewheel", e) } })
}),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document) }(function(e) {
    ! function(t) {
        var o = "function" == typeof define && define.amd,
            n = "undefined" != typeof module && module.exports,
            a = "https:" == document.location.protocol ? "https:" : "http:";
        o || (n ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + a + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
            function() {
                var t, o = "mCustomScrollbar",
                    n = "mCS",
                    a = ".mCustomScrollbar",
                    i = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 950, autoDraggerLength: !0, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, documentTouchScroll: !0, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 } },
                    r = 0,
                    l = {},
                    s = window.attachEvent && !window.addEventListener ? 1 : 0,
                    c = !1,
                    d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                    u = {
                        init: function(t) {
                            var t = e.extend(!0, {}, i, t),
                                o = h.call(this);
                            if (t.live) {
                                var s = t.liveSelector || this.selector || a,
                                    c = e(s);
                                if ("off" === t.live) return void m(s);
                                l[s] = setTimeout(function() { c.mCustomScrollbar(t), "once" === t.live && c.length && m(s) }, 500)
                            } else m(s);
                            return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), f(t), e(o).each(function() {
                                var o = e(this);
                                if (!o.data(n)) {
                                    o.data(n, { idx: ++r, opt: t, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: !1, tweenRunning: !1, sequential: {}, langDir: o.css("direction"), cbOffsets: null, trigger: null, poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } } });
                                    var a = o.data(n),
                                        i = a.opt,
                                        l = o.data("mcs-axis"),
                                        s = o.data("mcs-scrollbar-position"),
                                        c = o.data("mcs-theme");
                                    l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, f(i)), v.call(this), a && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + a.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                                }
                            })
                        },
                        update: function(t, o) {
                            var a = t || h.call(this);
                            return e(a).each(function() {
                                var t = e(this);
                                if (t.data(n)) {
                                    var a = t.data(n),
                                        i = a.opt,
                                        r = e("#mCSB_" + a.idx + "_container"),
                                        l = e("#mCSB_" + a.idx),
                                        s = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                                    if (!r.length) return;
                                    a.tweenRunning && Q(t), o && a && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), w.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), a.overflowed = y.call(this), k.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                                    var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                                    "x" !== i.axis && (a.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (Z(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), a.contentReset.y = null) : (B.call(this), "y" === i.axis ? M.call(this) : "yx" === i.axis && a.overflowed[1] && Z(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))), "y" !== i.axis && (a.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (Z(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), a.contentReset.x = null) : (B.call(this), "x" === i.axis ? M.call(this) : "yx" === i.axis && a.overflowed[0] && Z(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))), o && a && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this)
                                }
                            })
                        },
                        scrollTo: function(t, o) {
                            if (void 0 !== t && null != t) {
                                var a = h.call(this);
                                return e(a).each(function() {
                                    var a = e(this);
                                    if (a.data(n)) {
                                        var i = a.data(n),
                                            r = i.opt,
                                            l = { trigger: "external", scrollInertia: r.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                                            s = e.extend(!0, {}, l, o),
                                            c = F.call(this, t),
                                            d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                        c[0] = q.call(this, c[0], "y"), c[1] = q.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ae() ? 0 : d, setTimeout(function() { null !== c[0] && void 0 !== c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", Z(a, c[0].toString(), s)), null !== c[1] && void 0 !== c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", Z(a, c[1].toString(), s)) }, s.timeout)
                                    }
                                })
                            }
                        },
                        stop: function() {
                            var t = h.call(this);
                            return e(t).each(function() {
                                var t = e(this);
                                t.data(n) && Q(t)
                            })
                        },
                        disable: function(t) {
                            var o = h.call(this);
                            return e(o).each(function() {
                                var o = e(this);
                                o.data(n) && (o.data(n), N.call(this, "remove"), M.call(this), t && B.call(this), k.call(this, !0), o.addClass(d[3]))
                            })
                        },
                        destroy: function() {
                            var t = h.call(this);
                            return e(t).each(function() {
                                var a = e(this);
                                if (a.data(n)) {
                                    var i = a.data(n),
                                        r = i.opt,
                                        l = e("#mCSB_" + i.idx),
                                        s = e("#mCSB_" + i.idx + "_container"),
                                        c = e(".mCSB_" + i.idx + "_scrollbar");
                                    r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), M.call(this), B.call(this), a.removeData(n), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), a.removeClass(o + " _" + n + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                                }
                            })
                        }
                    },
                    h = function() { return "object" != typeof e(this) || e(this).length < 1 ? a : this },
                    f = function(t) {
                        var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                            n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                            a = ["minimal", "minimal-dark"],
                            i = ["minimal", "minimal-dark"],
                            r = ["minimal", "minimal-dark"];
                        t.autoDraggerLength = !(e.inArray(t.theme, o) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, n) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, a) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
                    },
                    m = function(e) { l[e] && (clearTimeout(l[e]), $(l, e)) },
                    p = function(e) { return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y" },
                    g = function(e) { return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless" },
                    v = function() {
                        var t = e(this),
                            a = t.data(n),
                            i = a.opt,
                            r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                            l = ["<div id='mCSB_" + a.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + a.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + a.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + a.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                            s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                            c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                            u = "yx" === i.axis ? "<div id='mCSB_" + a.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                            h = i.autoHideScrollbar ? " " + d[6] : "",
                            f = "x" !== i.axis && "rtl" === a.langDir ? " " + d[7] : "";
                        i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === a.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + n + "_" + a.idx + h + f).wrapInner("<div id='mCSB_" + a.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + a.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + a.langDir + "' /></div>");
                        var m = e("#mCSB_" + a.idx),
                            p = e("#mCSB_" + a.idx + "_container");
                        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), _.call(this);
                        var g = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
                        g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
                    },
                    x = function(t) {
                        var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() { return e(this).outerWidth(!0) }).get())],
                            n = t.parent().width();
                        return o[0] > n ? o[0] : o[1] > n ? o[1] : "100%"
                    },
                    w = function() {
                        var t = e(this).data(n),
                            o = t.opt,
                            a = e("#mCSB_" + t.idx + "_container");
                        if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                            a.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });
                            var i = Math.ceil(a[0].scrollWidth);
                            3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && i > a.parent().width() ? a.css({ width: i, "min-width": "100%", "overflow-x": "inherit" }) : a.css({ "overflow-x": "inherit", position: "absolute" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(a[0].getBoundingClientRect().right + .4) - Math.floor(a[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" }).unwrap()
                        }
                    },
                    _ = function() {
                        var t = e(this).data(n),
                            o = t.opt,
                            a = e(".mCSB_" + t.idx + "_scrollbar:first"),
                            i = oe(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                            r = ["<a href='#' class='" + d[13] + "' " + i + " />", "<a href='#' class='" + d[14] + "' " + i + " />", "<a href='#' class='" + d[15] + "' " + i + " />", "<a href='#' class='" + d[16] + "' " + i + " />"],
                            l = ["x" === o.axis ? r[2] : r[0], "x" === o.axis ? r[3] : r[1], r[2], r[3]];
                        o.scrollButtons.enable && a.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                    },
                    S = function() {
                        var t = e(this).data(n),
                            o = e("#mCSB_" + t.idx),
                            a = e("#mCSB_" + t.idx + "_container"),
                            i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                            r = [o.height() / a.outerHeight(!1), o.width() / a.outerWidth(!1)],
                            l = [parseInt(i[0].css("min-height")), Math.round(r[0] * i[0].parent().height()), parseInt(i[1].css("min-width")), Math.round(r[1] * i[1].parent().width())],
                            c = s && l[1] < l[0] ? l[0] : l[1],
                            d = s && l[3] < l[2] ? l[2] : l[3];
                        i[0].css({ height: c, "max-height": i[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": l[0] + "px" }), i[1].css({ width: d, "max-width": i[1].parent().width() - 10 })
                    },
                    b = function() {
                        var t = e(this).data(n),
                            o = e("#mCSB_" + t.idx),
                            a = e("#mCSB_" + t.idx + "_container"),
                            i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                            r = [a.outerHeight(!1) - o.height(), a.outerWidth(!1) - o.width()],
                            l = [r[0] / (i[0].parent().height() - i[0].height()), r[1] / (i[1].parent().width() - i[1].width())];
                        t.scrollRatio = { y: l[0], x: l[1] }
                    },
                    C = function(e, t, o) {
                        var n = o ? d[0] + "_expanded" : "",
                            a = e.closest(".mCSB_scrollTools");
                        "active" === t ? (e.toggleClass(d[0] + " " + n), a.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), a.removeClass(d[1])) : (e.addClass(d[0]), a.addClass(d[1])))
                    },
                    y = function() {
                        var t = e(this).data(n),
                            o = e("#mCSB_" + t.idx),
                            a = e("#mCSB_" + t.idx + "_container"),
                            i = null == t.overflowed ? a.height() : a.outerHeight(!1),
                            r = null == t.overflowed ? a.width() : a.outerWidth(!1),
                            l = a[0].scrollHeight,
                            s = a[0].scrollWidth;
                        return l > i && (i = l), s > r && (r = s), [i > o.height(), r > o.width()]
                    },
                    B = function() {
                        var t = e(this),
                            o = t.data(n),
                            a = o.opt,
                            i = e("#mCSB_" + o.idx),
                            r = e("#mCSB_" + o.idx + "_container"),
                            l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                        if (Q(t), ("x" !== a.axis && !o.overflowed[0] || "y" === a.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), Z(t, "_resetY")), "y" !== a.axis && !o.overflowed[1] || "x" === a.axis && o.overflowed[1]) { var s = dx = 0; "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), Z(t, "_resetX") }
                    },
                    T = function() {
                        function t() { r = setTimeout(function() { e.event.special.mousewheel ? (clearTimeout(r), L.call(o[0])) : t() }, 100) }
                        var o = e(this),
                            a = o.data(n),
                            i = a.opt;
                        if (!a.bindEvents) {
                            if (O.call(this), i.contentTouchScroll && I.call(this), E.call(this), i.mouseWheel.enable) {
                                var r;
                                t()
                            }
                            H.call(this), X.call(this), i.advanced.autoScrollOnFocus && P.call(this), i.scrollButtons.enable && Y.call(this), i.keyboard.enable && j.call(this), a.bindEvents = !0
                        }
                    },
                    M = function() {
                        var t = e(this),
                            o = t.data(n),
                            a = o.opt,
                            i = n + "_" + o.idx,
                            r = ".mCSB_" + o.idx + "_scrollbar",
                            l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                            s = e("#mCSB_" + o.idx + "_container");
                        a.advanced.releaseDraggableSelectors && l.add(e(a.advanced.releaseDraggableSelectors)), a.advanced.extraDraggableSelectors && l.add(e(a.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() { e(this).unbind("." + i) }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1)
                    },
                    k = function(t) {
                        var o = e(this),
                            a = o.data(n),
                            i = a.opt,
                            r = e("#mCSB_" + a.idx + "_container_wrapper"),
                            l = r.length ? r : e("#mCSB_" + a.idx + "_container"),
                            s = [e("#mCSB_" + a.idx + "_scrollbar_vertical"), e("#mCSB_" + a.idx + "_scrollbar_horizontal")],
                            c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                        "x" !== i.axis && (a.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (a.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), a.overflowed[0] || a.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
                    },
                    D = function(t) {
                        var o = t.type,
                            n = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                            a = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                        switch (o) {
                            case "pointerdown":
                            case "MSPointerDown":
                            case "pointermove":
                            case "MSPointerMove":
                            case "pointerup":
                            case "MSPointerUp":
                                return n ? [t.originalEvent.pageY - n[0] + a[0], t.originalEvent.pageX - n[1] + a[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                            case "touchstart":
                            case "touchmove":
                            case "touchend":
                                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                                    r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                            default:
                                return n ? [t.pageY - n[0] + a[0], t.pageX - n[1] + a[1], !1] : [t.pageY, t.pageX, !1]
                        }
                    },
                    O = function() {
                        function t(e, t, n, a) {
                            if (f[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === h[1]) var i = "x",
                                s = (o[0].offsetLeft - t + a) * l.scrollRatio.x;
                            else var i = "y",
                                s = (o[0].offsetTop - e + n) * l.scrollRatio.y;
                            Z(r, s.toString(), { dir: i, drag: !0 })
                        }
                        var o, a, i, r = e(this),
                            l = r.data(n),
                            d = l.opt,
                            u = n + "_" + l.idx,
                            h = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                            f = e("#mCSB_" + l.idx + "_container"),
                            m = e("#" + h[0] + ",#" + h[1]),
                            p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                            g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                        m.bind("contextmenu." + u, function(e) { e.preventDefault() }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                            if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                                c = !0, s && (document.onselectstart = function() { return !1 }), W.call(f, !1), Q(r);
                                var n = (o = e(this)).offset(),
                                    l = D(t)[0] - n.top,
                                    u = D(t)[1] - n.left,
                                    h = o.height() + n.top,
                                    m = o.width() + n.left;
                                h > l && l > 0 && m > u && u > 0 && (a = l, i = u), C(o, "active", d.autoExpandScrollbar)
                            }
                        }).bind("touchmove." + u, function(e) {
                            e.stopImmediatePropagation(), e.preventDefault();
                            var n = o.offset(),
                                r = D(e)[0] - n.top,
                                l = D(e)[1] - n.left;
                            t(a, i, r, l)
                        }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                            if (o) {
                                var n = o.offset(),
                                    r = D(e)[0] - n.top,
                                    l = D(e)[1] - n.left;
                                if (a === r && i === l) return;
                                t(a, i, r, l)
                            }
                        }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() { o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), W.call(f, !0) })
                    },
                    I = function() {
                        function o(e) {
                            if (!te(e) || c || D(e)[2]) t = 0;
                            else {
                                t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                                var o = O.offset();
                                u = D(e)[0] - o.top, h = D(e)[1] - o.left, z = [D(e)[0], D(e)[1]]
                            }
                        }

                        function a(e) {
                            if (te(e) && !c && !D(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                                g = J();
                                var t = k.offset(),
                                    o = D(e)[0] - t.top,
                                    n = D(e)[1] - t.left,
                                    a = "mcsLinearOut";
                                if (E.push(o), L.push(n), z[2] = Math.abs(D(e)[0] - z[0]), z[3] = Math.abs(D(e)[1] - z[1]), B.overflowed[0]) var i = I[0].parent().height() - I[0].height(),
                                    r = u - o > 0 && o - u > -i * B.scrollRatio.y && (2 * z[3] < z[2] || "yx" === T.axis);
                                if (B.overflowed[1]) var l = I[1].parent().width() - I[1].width(),
                                    f = h - n > 0 && n - h > -l * B.scrollRatio.x && (2 * z[2] < z[3] || "yx" === T.axis);
                                r || f ? (X || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), X && e.preventDefault(), _ = "yx" === T.axis ? [u - o, h - n] : "x" === T.axis ? [null, h - n] : [u - o, null], O[0].idleTimer = 250, B.overflowed[0] && s(_[0], R, a, "y", "all", !0), B.overflowed[1] && s(_[1], R, a, "x", W, !0)
                            }
                        }

                        function i(e) {
                            if (!te(e) || c || D(e)[2]) t = 0;
                            else {
                                t = 1, e.stopImmediatePropagation(), Q(y), p = J();
                                var o = k.offset();
                                f = D(e)[0] - o.top, m = D(e)[1] - o.left, E = [], L = []
                            }
                        }

                        function r(e) {
                            if (te(e) && !c && !D(e)[2]) {
                                d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = J();
                                var t = k.offset(),
                                    o = D(e)[0] - t.top,
                                    n = D(e)[1] - t.left;
                                if (!(v - g > 30)) {
                                    var a = "mcsEaseOut",
                                        i = 2.5 > (w = 1e3 / (v - p)),
                                        r = i ? [E[E.length - 2], L[L.length - 2]] : [0, 0];
                                    x = i ? [o - r[0], n - r[1]] : [o - f, n - m];
                                    var u = [Math.abs(x[0]), Math.abs(x[1])];
                                    w = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [w, w];
                                    var h = [Math.abs(O[0].offsetTop) - x[0] * l(u[0] / w[0], w[0]), Math.abs(O[0].offsetLeft) - x[1] * l(u[1] / w[1], w[1])];
                                    _ = "yx" === T.axis ? [h[0], h[1]] : "x" === T.axis ? [null, h[1]] : [h[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                                    var y = parseInt(T.contentTouchScroll) || 0;
                                    _[0] = u[0] > y ? _[0] : 0, _[1] = u[1] > y ? _[1] : 0, B.overflowed[0] && s(_[0], S[0], a, "y", W, !1), B.overflowed[1] && s(_[1], S[1], a, "x", W, !1)
                                }
                            }
                        }

                        function l(e, t) { var o = [1.5 * t, 2 * t, t / 1.5, t / 2]; return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3] }

                        function s(e, t, o, n, a, i) { e && Z(y, e.toString(), { dur: t, scrollEasing: o, dir: n, overwrite: a, drag: i }) }
                        var d, u, h, f, m, p, g, v, x, w, _, S, b, C, y = e(this),
                            B = y.data(n),
                            T = B.opt,
                            M = n + "_" + B.idx,
                            k = e("#mCSB_" + B.idx),
                            O = e("#mCSB_" + B.idx + "_container"),
                            I = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                            E = [],
                            L = [],
                            R = 0,
                            W = "yx" === T.axis ? "none" : "all",
                            z = [],
                            H = O.find("iframe"),
                            P = ["touchstart." + M + " pointerdown." + M + " MSPointerDown." + M, "touchmove." + M + " pointermove." + M + " MSPointerMove." + M, "touchend." + M + " pointerup." + M + " MSPointerUp." + M],
                            X = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                        O.bind(P[0], function(e) { o(e) }).bind(P[1], function(e) { a(e) }), k.bind(P[0], function(e) { i(e) }).bind(P[2], function(e) { r(e) }), H.length && H.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(P[0], function(e) { o(e), i(e) }).bind(P[1], function(e) { a(e) }).bind(P[2], function(e) { r(e) }) }) })
                    },
                    E = function() {
                        function o() { return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0 }

                        function a(e, t, o) { d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, U(r, e, t, "mcsLinearOut", o ? 60 : null) }
                        var i, r = e(this),
                            l = r.data(n),
                            s = l.opt,
                            d = l.sequential,
                            u = n + "_" + l.idx,
                            h = e("#mCSB_" + l.idx + "_container"),
                            f = h.parent();
                        h.bind("mousedown." + u, function() { t || i || (i = 1, c = !0) }).add(document).bind("mousemove." + u, function(e) {
                            if (!t && i && o()) {
                                var n = h.offset(),
                                    r = D(e)[0] - n.top + h[0].offsetTop,
                                    c = D(e)[1] - n.left + h[0].offsetLeft;
                                r > 0 && r < f.height() && c > 0 && c < f.width() ? d.step && a("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? a("on", 38) : r > f.height() && a("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? a("on", 37) : c > f.width() && a("on", 39)))
                            }
                        }).bind("mouseup." + u + " dragend." + u, function() { t || (i && (i = 0, a("off", null)), c = !1) })
                    },
                    L = function() {
                        function t(t, n) {
                            if (Q(o), !z(o, t.target)) {
                                var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                                    d = i.scrollInertia;
                                if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                                    h = [Math.round(r * a.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                                    f = "auto" !== i.mouseWheel.scrollAmount ? h[1] : h[0] >= l.width() ? .9 * l.width() : h[0],
                                    m = Math.abs(e("#mCSB_" + a.idx + "_container")[0].offsetLeft),
                                    p = c[1][0].offsetLeft,
                                    g = c[1].parent().width() - c[1].width(),
                                    v = "y" === i.mouseWheel.axis ? t.deltaY || n : t.deltaX;
                                else var u = "y",
                                    h = [Math.round(r * a.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                                    f = "auto" !== i.mouseWheel.scrollAmount ? h[1] : h[0] >= l.height() ? .9 * l.height() : h[0],
                                    m = Math.abs(e("#mCSB_" + a.idx + "_container")[0].offsetTop),
                                    p = c[0][0].offsetTop,
                                    g = c[0].parent().height() - c[0].height(),
                                    v = t.deltaY || n;
                                "y" === u && !a.overflowed[0] || "x" === u && !a.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (f = t.deltaFactor, d = 17), Z(o, (m - v * f).toString(), { dir: u, dur: d }))
                            }
                        }
                        if (e(this).data(n)) {
                            var o = e(this),
                                a = o.data(n),
                                i = a.opt,
                                r = n + "_" + a.idx,
                                l = e("#mCSB_" + a.idx),
                                c = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")],
                                d = e("#mCSB_" + a.idx + "_container").find("iframe");
                            d.length && d.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) { t(e, o) }) }) }), l.bind("mousewheel." + r, function(e, o) { t(e, o) })
                        }
                    },
                    R = new Object,
                    A = function(t) {
                        var o = !1,
                            n = !1,
                            a = null;
                        if (void 0 === t ? n = "#empty" : void 0 !== e(t).attr("id") && (n = e(t).attr("id")), !1 !== n && void 0 !== R[n]) return R[n];
                        if (t) {
                            try { a = (i = t.contentDocument || t.contentWindow.document).body.innerHTML } catch (e) {}
                            o = null !== a
                        } else {
                            try {
                                var i = top.document;
                                a = i.body.innerHTML
                            } catch (e) {}
                            o = null !== a
                        }
                        return !1 !== n && (R[n] = o), o
                    },
                    W = function(e) {
                        var t = this.find("iframe");
                        if (t.length) {
                            var o = e ? "auto" : "none";
                            t.css("pointer-events", o)
                        }
                    },
                    z = function(t, o) {
                        var a = o.nodeName.toLowerCase(),
                            i = t.data(n).opt.mouseWheel.disableOver,
                            r = ["select", "textarea"];
                        return e.inArray(a, i) > -1 && !(e.inArray(a, r) > -1 && !e(o).is(":focus"))
                    },
                    H = function() {
                        var t, o = e(this),
                            a = o.data(n),
                            i = n + "_" + a.idx,
                            r = e("#mCSB_" + a.idx + "_container"),
                            l = r.parent();
                        e(".mCSB_" + a.idx + "_scrollbar ." + d[12]).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) { c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1) }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() { c = !1 }).bind("click." + i, function(n) {
                            if (t && (t = 0, e(n.target).hasClass(d[12]) || e(n.target).hasClass("mCSB_draggerRail"))) {
                                Q(o);
                                var i = e(this),
                                    s = i.find(".mCSB_dragger");
                                if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!a.overflowed[1]) return;
                                    var c = "x",
                                        u = n.pageX > s.offset().left ? -1 : 1,
                                        h = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                                } else {
                                    if (!a.overflowed[0]) return;
                                    var c = "y",
                                        u = n.pageY > s.offset().top ? -1 : 1,
                                        h = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                                }
                                Z(o, h.toString(), { dir: c, scrollEasing: "mcsEaseInOut" })
                            }
                        })
                    },
                    P = function() {
                        var t = e(this),
                            o = t.data(n),
                            a = o.opt,
                            i = n + "_" + o.idx,
                            r = e("#mCSB_" + o.idx + "_container"),
                            l = r.parent();
                        r.bind("focusin." + i, function() {
                            var o = e(document.activeElement),
                                n = r.find(".mCustomScrollBox").length;
                            o.is(a.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = n ? 17 * n : 0, t[0]._focusTimeout = setTimeout(function() {
                                var e = [ne(o)[0], ne(o)[1]],
                                    n = [r[0].offsetTop, r[0].offsetLeft],
                                    i = [n[0] + e[0] >= 0 && n[0] + e[0] < l.height() - o.outerHeight(!1), n[1] + e[1] >= 0 && n[0] + e[1] < l.width() - o.outerWidth(!1)],
                                    s = "yx" !== a.axis || i[0] || i[1] ? "all" : "none";
                                "x" === a.axis || i[0] || Z(t, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: s, dur: 0 }), "y" === a.axis || i[1] || Z(t, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: s, dur: 0 })
                            }, t[0]._focusTimer))
                        })
                    },
                    X = function() {
                        var t = e(this).data(n),
                            o = n + "_" + t.idx,
                            a = e("#mCSB_" + t.idx + "_container").parent();
                        a.bind("scroll." + o, function() { 0 === a.scrollTop() && 0 === a.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden") })
                    },
                    Y = function() {
                        var t = e(this),
                            o = t.data(n),
                            a = o.opt,
                            i = o.sequential,
                            r = n + "_" + o.idx,
                            l = ".mCSB_" + o.idx + "_scrollbar";
                        e(l + ">a").bind("contextmenu." + r, function(e) { e.preventDefault() }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(n) {
                            function r(e, o) { i.scrollAmount = a.scrollButtons.scrollAmount, U(t, e, o) }
                            if (n.preventDefault(), ee(n)) {
                                var l = e(this).attr("class");
                                switch (i.type = a.scrollButtons.scrollType, n.type) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === i.type) return;
                                        c = !0, o.tweenRunning = !1, r("on", l);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === i.type) return;
                                        c = !1, i.dir && r("off", l);
                                        break;
                                    case "click":
                                        if ("stepped" !== i.type || o.tweenRunning) return;
                                        r("on", l)
                                }
                            }
                        })
                    },
                    j = function() {
                        function t(t) {
                            function n(e, t) { r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && a.tweenRunning || U(o, e, t) }
                            switch (t.type) {
                                case "blur":
                                    a.tweenRunning && r.dir && n("off", null);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var l = t.keyCode ? t.keyCode : t.which,
                                        s = "on";
                                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) { if ((38 === l || 40 === l) && !a.overflowed[0] || (37 === l || 39 === l) && !a.overflowed[1]) return; "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), n(s, l)) } else if (33 === l || 34 === l) {
                                        if ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                            Q(o);
                                            var h = 34 === l ? -1 : 1;
                                            if ("x" === i.axis || "yx" === i.axis && a.overflowed[1] && !a.overflowed[0]) var f = "x",
                                                m = Math.abs(c[0].offsetLeft) - h * (.9 * d.width());
                                            else var f = "y",
                                                m = Math.abs(c[0].offsetTop) - h * (.9 * d.height());
                                            Z(o, m.toString(), { dir: f, scrollEasing: "mcsEaseInOut" })
                                        }
                                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                        if ("x" === i.axis || "yx" === i.axis && a.overflowed[1] && !a.overflowed[0]) var f = "x",
                                            m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                        else var f = "y",
                                            m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                        Z(o, m.toString(), { dir: f, scrollEasing: "mcsEaseInOut" })
                                    }
                            }
                        }
                        var o = e(this),
                            a = o.data(n),
                            i = a.opt,
                            r = a.sequential,
                            l = n + "_" + a.idx,
                            s = e("#mCSB_" + a.idx),
                            c = e("#mCSB_" + a.idx + "_container"),
                            d = c.parent(),
                            u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                            h = c.find("iframe"),
                            f = ["blur." + l + " keydown." + l + " keyup." + l];
                        h.length && h.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], function(e) { t(e) }) }) }), s.attr("tabindex", "0").bind(f[0], function(e) { t(e) })
                    },
                    U = function(t, o, a, i, r) {
                        function l(e) {
                            c.snapAmount && (u.scrollAmount = c.snapAmount instanceof Array ? "x" === u.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                            var o = "stepped" !== u.type,
                                n = r || (e ? o ? m / 1.5 : p : 1e3 / 60),
                                a = e ? o ? 7.5 : 40 : 2.5,
                                d = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                                f = [s.scrollRatio.y > 10 ? 10 : s.scrollRatio.y, s.scrollRatio.x > 10 ? 10 : s.scrollRatio.x],
                                g = "x" === u.dir[0] ? d[1] + u.dir[1] * (f[1] * a) : d[0] + u.dir[1] * (f[0] * a),
                                v = "x" === u.dir[0] ? d[1] + u.dir[1] * parseInt(u.scrollAmount) : d[0] + u.dir[1] * parseInt(u.scrollAmount),
                                x = "auto" !== u.scrollAmount ? v : g,
                                w = i || (e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                                _ = !!e;
                            return e && 17 > n && (x = "x" === u.dir[0] ? d[1] : d[0]), Z(t, x.toString(), { dir: u.dir[0], scrollEasing: w, dur: n, onComplete: _ }), e ? void(u.dir = !1) : (clearTimeout(u.step), void(u.step = setTimeout(function() { l() }, n)))
                        }
                        var s = t.data(n),
                            c = s.opt,
                            u = s.sequential,
                            h = e("#mCSB_" + s.idx + "_container"),
                            f = "stepped" === u.type,
                            m = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                            p = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                        switch (o) {
                            case "on":
                                if (u.dir = [a === d[16] || a === d[15] || 39 === a || 37 === a ? "x" : "y", a === d[13] || a === d[15] || 38 === a || 37 === a ? -1 : 1], Q(t), oe(a) && "stepped" === u.type) return;
                                l(f);
                                break;
                            case "off":
                                (function() { clearTimeout(u.step), $(u, "step"), Q(t) })(), (f || s.tweenRunning && u.dir) && l(!0)
                        }
                    },
                    F = function(t) {
                        var o = e(this).data(n).opt,
                            a = [];
                        return "function" == typeof t && (t = t()), t instanceof Array ? a = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (a[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, a[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof a[0] && (a[0] = a[0]()), "function" == typeof a[1] && (a[1] = a[1]()), a
                    },
                    q = function(t, o) {
                        if (null != t && void 0 !== t) {
                            var a = e(this),
                                i = a.data(n),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx + "_container"),
                                s = l.parent(),
                                c = typeof t;
                            o || (o = "x" === r.axis ? "x" : "y");
                            var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                                h = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                                f = "x" === o ? "left" : "top";
                            switch (c) {
                                case "function":
                                    return t();
                                case "object":
                                    if (!(p = t.jquery ? t : e(t)).length) return;
                                    return "x" === o ? ne(p)[1] : ne(p)[0];
                                case "string":
                                case "number":
                                    if (oe(t)) return Math.abs(t);
                                    if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                                    if (-1 !== t.indexOf("-=")) return Math.abs(h - parseInt(t.split("-=")[1]));
                                    if (-1 !== t.indexOf("+=")) { var m = h + parseInt(t.split("+=")[1]); return m >= 0 ? 0 : Math.abs(m) }
                                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                    if ("top" === t || "left" === t) return 0;
                                    if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                                    if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                                    if ("first" === t || "last" === t) { var p = l.find(":" + t); return "x" === o ? ne(p)[1] : ne(p)[0] }
                                    return e(t).length ? "x" === o ? ne(e(t))[1] : ne(e(t))[0] : (l.css(f, t), void u.update.call(null, a[0]))
                            }
                        }
                    },
                    N = function(t) {
                        function o() { return clearTimeout(h[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(h[0].autoUpdate = setTimeout(function() { return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + h[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = h.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void h.find("img").each(function() { a(this) })) }, c.advanced.autoUpdateTimeout)) }

                        function a(t) {
                            function o() { this.onload = null, e(t).addClass(d[2]), r(2) }
                            if (e(t).hasClass(d[2])) r();
                            else {
                                var n = new Image;
                                n.onload = function(e, t) { return function() { return t.apply(e, arguments) } }(n, o), n.src = t.src
                            }
                        }

                        function i() {
                            !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                            var e = 0,
                                t = h.find(c.advanced.updateOnSelectorChange);
                            return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() { e += this.offsetHeight + this.offsetWidth }), e
                        }

                        function r(e) { clearTimeout(h[0].autoUpdate), u.update.call(null, l[0], e) }
                        var l = e(this),
                            s = l.data(n),
                            c = s.opt,
                            h = e("#mCSB_" + s.idx + "_container");
                        return t ? (clearTimeout(h[0].autoUpdate), void $(h[0], "autoUpdate")) : void o()
                    },
                    V = function(e, t, o) { return Math.round(e / t) * t - o },
                    Q = function(t) {
                        var o = t.data(n);
                        e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal").each(function() { K.call(this) })
                    },
                    Z = function(t, o, a) {
                        function i(e) { return s && c.callbacks[e] && "function" == typeof c.callbacks[e] }

                        function r() { return [c.callbacks.alwaysTriggerOffsets || _ >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= _] }

                        function l() {
                            var e = [f[0].offsetTop, f[0].offsetLeft],
                                o = [x[0].offsetTop, x[0].offsetLeft],
                                n = [f.outerHeight(!1), f.outerWidth(!1)],
                                i = [h.height(), h.width()];
                            t[0].mcs = { content: f, top: e[0], left: e[1], draggerTop: o[0], draggerLeft: o[1], topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - i[0])), leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - i[1])), direction: a.dir }
                        }
                        var s = t.data(n),
                            c = s.opt,
                            d = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: c.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                            u = [(a = e.extend(d, a)).dur, a.drag ? 0 : a.dur],
                            h = e("#mCSB_" + s.idx),
                            f = e("#mCSB_" + s.idx + "_container"),
                            m = f.parent(),
                            p = c.callbacks.onTotalScrollOffset ? F.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                            g = c.callbacks.onTotalScrollBackOffset ? F.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                        if (s.trigger = a.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                            if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
                                var v = c.snapAmount instanceof Array ? "x" === a.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                                o = V(o, v, c.snapOffset)
                            }
                            switch (a.dir) {
                                case "x":
                                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                        w = "left",
                                        _ = f[0].offsetLeft,
                                        S = [h.width() - f.outerWidth(!1), x.parent().width() - x.width()],
                                        b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                        y = p[1],
                                        B = g[1],
                                        T = y > 0 ? y / s.scrollRatio.x : 0,
                                        M = B > 0 ? B / s.scrollRatio.x : 0;
                                    break;
                                case "y":
                                    var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                        w = "top",
                                        _ = f[0].offsetTop,
                                        S = [h.height() - f.outerHeight(!1), x.parent().height() - x.height()],
                                        b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                        y = p[0],
                                        B = g[0],
                                        T = y > 0 ? y / s.scrollRatio.y : 0,
                                        M = B > 0 ? B / s.scrollRatio.y : 0
                            }
                            b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(f[0].onCompleteTimeout), G(x[0], w, Math.round(b[1]), u[1], a.scrollEasing), !s.tweenRunning && (0 === _ && b[0] >= 0 || _ === S[0] && b[0] <= S[0]) || G(f[0], w, Math.round(b[0]), u[0], a.scrollEasing, a.overwrite, {
                                onStart: function() { a.callbacks && a.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r()) },
                                onUpdate: function() { a.callbacks && a.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0])) },
                                onComplete: function() {
                                    if (a.callbacks && a.onComplete) {
                                        "yx" === c.axis && clearTimeout(f[0].onCompleteTimeout);
                                        var e = f[0].idleTimer || 0;
                                        f[0].onCompleteTimeout = setTimeout(function() { i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= M && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, f[0].idleTimer = 0, C(x, "hide") }, e)
                                    }
                                }
                            })
                        }
                    },
                    G = function(e, t, o, n, a, i, r) {
                        function l() { w.stop || (g || h.call(), g = J() - p, s(), g >= w.time && (w.time = g > w.time ? g + d - (g - w.time) : g + d - 1, w.time < g + 1 && (w.time = g + 1)), w.time < n ? w.id = u(l) : m.call()) }

                        function s() { n > 0 ? (w.currVal = c(w.time, v, _, n, a), x[t] = Math.round(w.currVal) + "px") : x[t] = o + "px", f.call() }

                        function c(e, t, o, n, a) {
                            switch (a) {
                                case "linear":
                                case "mcsLinear":
                                    return o * e / n + t;
                                case "mcsLinearOut":
                                    return e /= n, e--, o * Math.sqrt(1 - e * e) + t;
                                case "easeInOutSmooth":
                                    return e /= n / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                                case "easeInOutStrong":
                                    return e /= n / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);
                                case "easeInOut":
                                case "mcsEaseInOut":
                                    return e /= n / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                                case "easeOutSmooth":
                                    return e /= n, e--, -o * (e * e * e * e - 1) + t;
                                case "easeOutStrong":
                                    return o * (1 - Math.pow(2, -10 * e / n)) + t;
                                case "easeOut":
                                case "mcsEaseOut":
                                default:
                                    var i = (e /= n) * e,
                                        r = i * e;
                                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                            }
                        }
                        e._mTween || (e._mTween = { top: {}, left: {} });
                        var d, u, h = (r = r || {}).onStart || function() {},
                            f = r.onUpdate || function() {},
                            m = r.onComplete || function() {},
                            p = J(),
                            g = 0,
                            v = e.offsetTop,
                            x = e.style,
                            w = e._mTween[t];
                        "left" === t && (v = e.offsetLeft);
                        var _ = o - v;
                        w.stop = 0, "none" !== i && function() { null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null) }(),
                            function() { d = 1e3 / 60, w.time = g + d, u = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) { return s(), setTimeout(e, .01) }, w.id = u(l) }()
                    },
                    J = function() { return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime() },
                    K = function() {
                        var e = this;
                        e._mTween || (e._mTween = { top: {}, left: {} });
                        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                            var n = t[o];
                            e._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id), e._mTween[n].id = null, e._mTween[n].stop = 1)
                        }
                    },
                    $ = function(e, t) { try { delete e[t] } catch (o) { e[t] = null } },
                    ee = function(e) { return !(e.which && 1 !== e.which) },
                    te = function(e) { var t = e.originalEvent.pointerType; return !(t && "touch" !== t && 2 !== t) },
                    oe = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
                    ne = function(e) { var t = e.parents(".mCSB_container"); return [e.offset().top - t.offset().top, e.offset().left - t.offset().left] },
                    ae = function() {
                        var e = function() {
                            var e = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var t = 0; t < e.length; t++)
                                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                            return null
                        }();
                        return !!e && document[e]
                    };
                e.fn[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() {
                    e(a)[o](), e.extend(e.expr[":"], {
                        mcsInView: e.expr[":"].mcsInView || function(t) {
                            var o, n, a = e(t),
                                i = a.parents(".mCSB_container");
                            if (i.length) return o = i.parent(), (n = [i[0].offsetTop, i[0].offsetLeft])[0] + ne(a)[0] >= 0 && n[0] + ne(a)[0] < o.height() - a.outerHeight(!1) && n[1] + ne(a)[1] >= 0 && n[1] + ne(a)[1] < o.width() - a.outerWidth(!1)
                        },
                        mcsInSight: e.expr[":"].mcsInSight || function(t, o, n) {
                            var a, i, r, l, s = e(t),
                                c = s.parents(".mCSB_container"),
                                d = "exact" === n[3] ? [
                                    [1, 0],
                                    [1, 0]
                                ] : [
                                    [.9, .1],
                                    [.6, .4]
                                ];
                            if (c.length) return a = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ne(s)[0], c[0].offsetLeft + ne(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [a[0] < i[0] ? d[0] : d[1], a[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + a[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + a[1] - i[1] * l[1][1] >= 0
                        },
                        mcsOverflow: e.expr[":"].mcsOverflow || function(t) { var o = e(t).data(n); if (o) return o.overflowed[0] || o.overflowed[1] }
                    })
                })
            }()
    }()
});
/* FormValidate.min.js */
! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) { i.settings.submitHandler && (i.submitButton = e.target), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0) }), this.on("submit.validate", function(e) {
                    function s() { var s, r; return !i.settings.submitHandler || (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), void 0 !== r && r) }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, i, s;
            return t(this[0]).is("form") ? e = this.validate().form() : (s = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
                (e = i.element(this) && e) || (s = s.concat(i.errorList))
            }), i.errorList = s), e
        },
        rules: function(e, i) {
            var s, r, n, a, o, l, h = this[0];
            if (null != h && null != h.form) {
                if (e) switch (s = t.data(h.form, "validator").settings, r = s.rules, n = t.validator.staticRules(h), e) {
                    case "add":
                        t.extend(n, t.validator.normalizeRule(i)), delete n.messages, r[h.name] = n, i.messages && (s.messages[h.name] = t.extend(s.messages[h.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, t.each(i.split(/\s/), function(e, i) { l[i] = n[i], delete n[i], "required" === i && t(h).removeAttr("aria-required") }), l) : (delete r[h.name], n)
                }
                return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h)).required && (o = a.required, delete a.required, a = t.extend({ required: o }, a), t(h).attr("aria-required", "true")), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, { remote: o })), a
            }
        }
    }), t.extend(t.expr.pseudos || t.expr[":"], { blank: function(e) { return !t.trim("" + t(e).val()) }, filled: function(e) { var i = t(e).val(); return null !== i && !!t.trim("" + i) }, unchecked: function(e) { return !t(e).prop("checked") } }), t.validator = function(e, i) { this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init() }, t.validator.format = function(e, i) { return 1 === arguments.length ? function() { var i = t.makeArray(arguments); return i.unshift(e), t.validator.format.apply(this, i) } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) { e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() { return i }) }), e) }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) { this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t))) },
            onfocusout: function(t) { this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t) },
            onkeyup: function(e, i) {
                var s = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, s) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(t) { t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode) },
            highlight: function(e, i, s) { "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s) },
            unhighlight: function(e, i, s) { "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s) }
        },
        setDefaults: function(e) { t.extend(t.validator.defaults, e) },
        messages: { required: "Bu alan gereklidir.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Lütfen geçerli bir numara girin.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}."), step: t.validator.format("Please enter a multiple of {0}.") },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]);
                    var i = t.data(this.form, "validator"),
                        s = "on" + e.type.replace(/^validate/, ""),
                        r = i.settings;
                    r[s] && !t(this).is(r.ignore) && r[s].call(i, this, e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, s = this.groups = {};
                t.each(this.settings.groups, function(e, i) { "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) { s[i] = e }) }), i = this.settings.rules, t.each(i, function(e, s) { i[e] = t.validator.normalizeRule(s) }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() { return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
            checkForm: function() { this.prepareForm(); for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]); return this.valid() },
            element: function(e) {
                var i, s, r = this.clean(e),
                    n = this.validationTargetFor(r),
                    a = this,
                    o = !0;
                return void 0 === n ? delete this.invalid[r.name] : (this.prepareElement(n), this.currentElements = t(n), (s = this.groups[n.name]) && t.each(this.groups, function(t, e) { e === s && t !== n.name && (r = a.validationTargetFor(a.clean(a.findByName(t)))) && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o) }), i = !1 !== this.check(n), o = o && i, this.invalid[n.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), o
            },
            showErrors: function(e) {
                if (e) {
                    var i = this;
                    t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) { return { message: t, element: i.findByName(e)[0] } }), this.successList = t.grep(this.successList, function(t) { return !(t.name in e) })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() { return this.objectLength(this.invalid) },
            objectLength: function(t) { var e, i = 0; for (e in t) t[e] && i++; return i },
            hideErrors: function() { this.hideThese(this.toHide) },
            hideThese: function(t) { t.not(this.containers).text(""), this.addWrapper(t).hide() },
            valid: function() { return 0 === this.size() },
            size: function() { return this.errorList.length },
            focusInvalid: function() { if (this.settings.focusInvalid) try { t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (t) {} },
            findLastActive: function() { var e = this.lastActive; return e && 1 === t.grep(this.errorList, function(t) { return t.element.name === e.name }).length && e },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { var s = this.name || t(this).attr("name"); return !s && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]), !(s in i || !e.objectLength(t(this).rules()) || (i[s] = !0, 0)) })
            },
            clean: function(e) { return t(e)[0] },
            errors: function() { var e = this.settings.errorClass.split(" ").join("."); return t(this.settings.errorElement + "." + e, this.errorContext) },
            resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]) },
            reset: function() { this.resetInternals(), this.currentElements = t([]) },
            prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
            prepareElement: function(t) { this.reset(), this.toHide = this.errorsFor(t) },
            elementValue: function(e) {
                var i, s, r = t(e),
                    n = e.type;
                return "radio" === n || "checkbox" === n ? this.findByName(e.name).filter(":checked").val() : "number" === n && void 0 !== e.validity ? e.validity.badInput ? "NaN" : r.val() : (i = e.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === n ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/"), s >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\"), s >= 0 ? i.substr(s + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s, r, n = t(e).rules(),
                    a = t.map(n, function(t, e) { return e }).length,
                    o = !1,
                    l = this.elementValue(e);
                if ("function" == typeof n.normalizer) {
                    if ("string" != typeof(l = n.normalizer.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                    delete n.normalizer
                }
                for (s in n) { r = { method: s, parameters: n[s] }; try { if ("dependency-mismatch" === (i = t.validator.methods[s].call(this, l, e, r.parameters)) && 1 === a) { o = !0; continue } if (o = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e))); if (!i) return this.formatAndAdd(e, r), !1 } catch (t) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), t } }
                if (!o) return this.objectLength(n) && this.successList.push(e), !0
            },
            customDataMessage: function(e, i) { return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg") },
            customMessage: function(t, e) { var i = this.settings.messages[t]; return i && (i.constructor === String ? i : i[e]) },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, i) {
                "string" == typeof i && (i = { method: i });
                var s = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), s
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({ message: i, element: t, method: e.method }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(t) { return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() { return this.currentElements.not(this.invalidElements()) },
            invalidElements: function() { return t(this.errorList).map(function() { return this.element }) },
            showLabel: function(e, i) {
                var s, r, n, a, o = this.errorsFor(e),
                    l = this.idOrName(e),
                    h = t(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), s = o, this.settings.wrapper && (s = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, t(e)) : s.insertAfter(e), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (n = o.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(n) + "\\b")) || (h += " " + n) : h = n, t(e).attr("aria-describedby", h), (r = this.groups[e.name]) && (a = this, t.each(a.groups, function(e, i) { i === r && t("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id")) })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(e) {
                var i = this.escapeCssMeta(this.idOrName(e)),
                    s = t(e).attr("aria-describedby"),
                    r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return s && (r = r + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function(t) { return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1") },
            idOrName: function(t) { return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name) },
            validationTargetFor: function(e) { return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0] },
            checkable: function(t) { return /radio|checkbox/i.test(t.type) },
            findByName: function(e) { return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']") },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) { return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e) },
            dependTypes: { boolean: function(t) { return t }, string: function(e, i) { return !!t(e, i.form).length }, function: function(t, e) { return t(e) } },
            optional: function(e) { var i = this.elementValue(e); return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch" },
            startRequest: function(e) { this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0) },
            stopRequest: function(e, i) {--this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
            previousValue: function(e, i) { return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, { method: i }) }) },
            destroy: function() { this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur") }
        },
        classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
        addClassRules: function(e, i) { e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e) },
        classRules: function(e) {
            var i = {},
                s = t(e).attr("class");
            return s && t.each(s.split(" "), function() { this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]) }), i
        },
        normalizeAttributeRule: function(t, e, i, s) { /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0) },
        attributeRules: function(e) {
            var i, s, r = {},
                n = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? ("" === (s = e.getAttribute(i)) && (s = !0), s = !!s) : s = n.attr(i), this.normalizeAttributeRule(r, a, i, s);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(e) {
            var i, s, r = {},
                n = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) s = n.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, i, s);
            return r
        },
        staticRules: function(e) {
            var i = {},
                s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(s, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var n = !0;
                        switch (typeof r.depends) {
                            case "string":
                                n = !!t(r.depends, i.form).length;
                                break;
                            case "function":
                                n = r.depends.call(i, i)
                        }
                        n ? e[s] = void 0 === r.param || r.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[s])
                    }
                } else delete e[s]
            }), t.each(e, function(s, r) { e[s] = t.isFunction(r) && "normalizer" !== s ? r(i) : r }), t.each(["minlength", "maxlength"], function() { e[this] && (e[this] = Number(e[this])) }), t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() { i[this] = !0 }), e = i
            }
            return e
        },
        addMethod: function(e, i, s) { t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e)) },
        methods: {
            required: function(e, i, s) { if (!this.depend(s, i)) return "dependency-mismatch"; if ("select" === i.nodeName.toLowerCase()) { var r = t(i).val(); return r && r.length > 0 } return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0 },
            email: function(t, e) { return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) },
            url: function(t, e) { return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t) },
            date: function(t, e) { return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString()) },
            dateISO: function(t, e) { return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t) },
            number: function(t, e) { return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t) },
            digits: function(t, e) { return this.optional(e) || /^\d+$/.test(t) },
            minlength: function(e, i, s) { var r = t.isArray(e) ? e.length : this.getLength(e, i); return this.optional(i) || r >= s },
            maxlength: function(e, i, s) { var r = t.isArray(e) ? e.length : this.getLength(e, i); return this.optional(i) || r <= s },
            rangelength: function(e, i, s) { var r = t.isArray(e) ? e.length : this.getLength(e, i); return this.optional(i) || r >= s[0] && r <= s[1] },
            min: function(t, e, i) { return this.optional(e) || t >= i },
            max: function(t, e, i) { return this.optional(e) || t <= i },
            range: function(t, e, i) { return this.optional(e) || t >= i[0] && t <= i[1] },
            step: function(e, i, s) {
                var r, n = t(i).attr("type"),
                    a = "Step attribute on input type " + n + " is not supported.",
                    o = ["text", "number", "range"],
                    l = new RegExp("\\b" + n + "\\b"),
                    h = function(t) { var e = ("" + t).match(/(?:\.(\d+))?$/); return e && e[1] ? e[1].length : 0 },
                    u = function(t) { return Math.round(t * Math.pow(10, r)) },
                    d = !0;
                if (n && !l.test(o.join())) throw new Error(a);
                return r = h(s), (h(e) > r || u(e) % u(s) != 0) && (d = !1), this.optional(i) || d
            },
            equalTo: function(e, i, s) { var r = t(s); return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { t(i).valid() }), e === r.val() },
            remote: function(e, i, s, r) {
                if (this.optional(i)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var n, a, o, l = this.previousValue(i, r);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, s = "string" == typeof s && { url: s } || s, o = t.param(t.extend({ data: e }, s.data)), l.old === o ? l.valid : (l.old = o, n = this, this.startRequest(i), a = {}, a[i.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    context: n.currentForm,
                    success: function(t) {
                        var s, a, o, h = !0 === t || "true" === t;
                        n.settings.messages[i.name][r] = l.originalMessage, h ? (o = n.formSubmitted, n.resetInternals(), n.toHide = n.errorsFor(i), n.formSubmitted = o, n.successList.push(i), n.invalid[i.name] = !1, n.showErrors()) : (s = {}, a = t || n.defaultMessage(i, { method: r, parameters: e }), s[i.name] = l.message = a, n.invalid[i.name] = !0, n.showErrors(s)), l.valid = h, n.stopRequest(i, h)
                    }
                }, s)), "pending")
            }
        }
    });
    var e, i = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, s) { var r = t.port; "abort" === t.mode && (i[r] && i[r].abort(), i[r] = s) }) : (e = t.ajax, t.ajax = function(s) {
        var r = ("mode" in s ? s : t.ajaxSettings).mode,
            n = ("port" in s ? s : t.ajaxSettings).port;
        return "abort" === r ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    }), t
});
/* AdditionalMethod.min.js */
! function(t) { "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    return function() {
        function e(t) { return t.replace(/<.[^<>]*?>/g, " ").replace(/Â |Â /gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-â€œâ€â€™]*/g, "") }
        t.validator.addMethod("maxWords", function(t, a, d) { return this.optional(a) || e(t).match(/\b\w+\b/g).length <= d }, t.validator.format("Please enter {0} words or less.")), t.validator.addMethod("minWords", function(t, a, d) { return this.optional(a) || e(t).match(/\b\w+\b/g).length >= d }, t.validator.format("Please enter at least {0} words.")), t.validator.addMethod("rangeWords", function(t, a, d) {
            var i = e(t),
                n = /\b\w+\b/g;
            return this.optional(a) || i.match(n).length >= d[0] && i.match(n).length <= d[1]
        }, t.validator.format("Please enter between {0} and {1} words."))
    }(), t.validator.addMethod("accept", function(e, a, d) {
        var i, n, r = "string" == typeof d ? d.replace(/\s/g, "") : "image/*",
            o = this.optional(a);
        if (o) return o;
        if ("file" === t(a).attr("type") && (r = r.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"), a.files && a.files.length))
            for (n = new RegExp(".?(" + r + ")$", "i"), i = 0; i < a.files.length; i++)
                if (!a.files[i].type.match(n)) return !1;
        return !0
    }, t.validator.format("Please enter a value with a valid mimetype.")), t.validator.addMethod("alphanumeric", function(t, e) { return this.optional(e) || /^\w+$/i.test(t) }, "Letters, numbers, and underscores only please"), t.validator.addMethod("bankaccountNL", function(t, e) {
        if (this.optional(e)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t)) return !1;
        var a, d, i, n = t.replace(/ /g, ""),
            r = 0,
            o = n.length;
        for (a = 0; a < o; a++) d = o - a, i = n.substring(a, a + 1), r += d * i;
        return r % 11 == 0
    }, "Please specify a valid bank account number"), t.validator.addMethod("bankorgiroaccountNL", function(e, a) { return this.optional(a) || t.validator.methods.bankaccountNL.call(this, e, a) || t.validator.methods.giroaccountNL.call(this, e, a) }, "Please specify a valid bank or giro account number"), t.validator.addMethod("bic", function(t, e) { return this.optional(e) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(t.toUpperCase()) }, "Please specify a valid BIC code"), t.validator.addMethod("cifES", function(t) {
        "use strict";
        var e, a, d, i, n = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
            r = t.substring(0, 1),
            o = t.substring(1, 8),
            s = t.substring(8, 9),
            l = 0,
            u = 0,
            c = 0;
        if (9 !== t.length || !n.test(t)) return !1;
        for (e = 0; e < o.length; e++) a = parseInt(o[e], 10),
            function(t) { return t % 2 == 0 }(e) ? (a *= 2, c += a < 10 ? a : a - 9) : u += a;
        return l = u + c, d = (10 - l.toString().substr(-1)).toString(), d = parseInt(d, 10) > 9 ? "0" : d, i = "JABCDEFGHI".substr(d, 1).toString(), r.match(/[ABEH]/) ? s === d : r.match(/[KPQS]/) ? s === i : s === d || s === i
    }, "Please specify a valid CIF number."), t.validator.addMethod("cpfBR", function(t) { if (11 !== (t = t.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length) return !1; var e, a, d, i, n = 0; if (e = parseInt(t.substring(9, 10), 10), a = parseInt(t.substring(10, 11), 10), d = function(t, e) { var a = 10 * t % 11; return 10 !== a && 11 !== a || (a = 0), a === e }, "" === t || "00000000000" === t || "11111111111" === t || "22222222222" === t || "33333333333" === t || "44444444444" === t || "55555555555" === t || "66666666666" === t || "77777777777" === t || "88888888888" === t || "99999999999" === t) return !1; for (i = 1; i <= 9; i++) n += parseInt(t.substring(i - 1, i), 10) * (11 - i); if (d(n, e)) { for (n = 0, i = 1; i <= 10; i++) n += parseInt(t.substring(i - 1, i), 10) * (12 - i); return d(n, a) } return !1 }, "Please specify a valid CPF number"), t.validator.addMethod("creditcard", function(t, e) {
        if (this.optional(e)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(t)) return !1;
        var a, d, i = 0,
            n = 0,
            r = !1;
        if ((t = t.replace(/\D/g, "")).length < 13 || t.length > 19) return !1;
        for (a = t.length - 1; a >= 0; a--) d = t.charAt(a), n = parseInt(d, 10), r && (n *= 2) > 9 && (n -= 9), i += n, r = !r;
        return i % 10 == 0
    }, "Please enter a valid credit card number."), t.validator.addMethod("creditcardtypes", function(t, e, a) {
        if (/[^0-9\-]+/.test(t)) return !1;
        t = t.replace(/\D/g, "");
        var d = 0;
        return a.mastercard && (d |= 1), a.visa && (d |= 2), a.amex && (d |= 4), a.dinersclub && (d |= 8), a.enroute && (d |= 16), a.discover && (d |= 32), a.jcb && (d |= 64), a.unknown && (d |= 128), a.all && (d = 255), 1 & d && /^(5[12345])/.test(t) ? 16 === t.length : 2 & d && /^(4)/.test(t) ? 16 === t.length : 4 & d && /^(3[47])/.test(t) ? 15 === t.length : 8 & d && /^(3(0[012345]|[68]))/.test(t) ? 14 === t.length : 16 & d && /^(2(014|149))/.test(t) ? 15 === t.length : 32 & d && /^(6011)/.test(t) ? 16 === t.length : 64 & d && /^(3)/.test(t) ? 16 === t.length : 64 & d && /^(2131|1800)/.test(t) ? 15 === t.length : !!(128 & d)
    }, "Please enter a valid credit card number."), t.validator.addMethod("currency", function(t, e, a) {
        var d, i = "string" == typeof a,
            n = i ? a : a[0],
            r = !!i || a[1];
        return n = n.replace(/,/g, ""), n = r ? n + "]" : n + "]?", d = "^[" + n + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(e) || d.test(t)
    }, "Please specify a valid currency"), t.validator.addMethod("dateFA", function(t, e) { return this.optional(e) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(t) }, t.validator.messages.date), t.validator.addMethod("dateITA", function(t, e) { var a, d, i, n, r, o = !1; return /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t) ? (a = t.split("/"), d = parseInt(a[0], 10), i = parseInt(a[1], 10), n = parseInt(a[2], 10), r = new Date(Date.UTC(n, i - 1, d, 12, 0, 0, 0)), o = r.getUTCFullYear() === n && r.getUTCMonth() === i - 1 && r.getUTCDate() === d) : o = !1, this.optional(e) || o }, t.validator.messages.date), t.validator.addMethod("dateNL", function(t, e) { return this.optional(e) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t) }, t.validator.messages.date), t.validator.addMethod("extension", function(t, e, a) { return a = "string" == typeof a ? a.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(e) || t.match(new RegExp("\\.(" + a + ")$", "i")) }, t.validator.format("Please enter a value with a valid extension.")), t.validator.addMethod("giroaccountNL", function(t, e) { return this.optional(e) || /^[0-9]{1,7}$/.test(t) }, "Please specify a valid giro account number"), t.validator.addMethod("iban", function(t, e) {
        if (this.optional(e)) return !0;
        var a, d, i, n, r, o, s, l, u = t.replace(/ /g, "").toUpperCase(),
            c = "",
            h = !0,
            f = "",
            p = "";
        if (u.length < 5) return !1;
        if (a = u.substring(0, 2), o = { AL: "\\d{8}[\\dA-Z]{16}", AD: "\\d{8}[\\dA-Z]{12}", AT: "\\d{16}", AZ: "[\\dA-Z]{4}\\d{20}", BE: "\\d{12}", BH: "[A-Z]{4}[\\dA-Z]{14}", BA: "\\d{16}", BR: "\\d{23}[A-Z][\\dA-Z]", BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}", CR: "\\d{17}", HR: "\\d{17}", CY: "\\d{8}[\\dA-Z]{16}", CZ: "\\d{20}", DK: "\\d{14}", DO: "[A-Z]{4}\\d{20}", EE: "\\d{16}", FO: "\\d{14}", FI: "\\d{14}", FR: "\\d{10}[\\dA-Z]{11}\\d{2}", GE: "[\\dA-Z]{2}\\d{16}", DE: "\\d{18}", GI: "[A-Z]{4}[\\dA-Z]{15}", GR: "\\d{7}[\\dA-Z]{16}", GL: "\\d{14}", GT: "[\\dA-Z]{4}[\\dA-Z]{20}", HU: "\\d{24}", IS: "\\d{22}", IE: "[\\dA-Z]{4}\\d{14}", IL: "\\d{19}", IT: "[A-Z]\\d{10}[\\dA-Z]{12}", KZ: "\\d{3}[\\dA-Z]{13}", KW: "[A-Z]{4}[\\dA-Z]{22}", LV: "[A-Z]{4}[\\dA-Z]{13}", LB: "\\d{4}[\\dA-Z]{20}", LI: "\\d{5}[\\dA-Z]{12}", LT: "\\d{16}", LU: "\\d{3}[\\dA-Z]{13}", MK: "\\d{3}[\\dA-Z]{10}\\d{2}", MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}", MR: "\\d{23}", MU: "[A-Z]{4}\\d{19}[A-Z]{3}", MC: "\\d{10}[\\dA-Z]{11}\\d{2}", MD: "[\\dA-Z]{2}\\d{18}", ME: "\\d{18}", NL: "[A-Z]{4}\\d{10}", NO: "\\d{11}", PK: "[\\dA-Z]{4}\\d{16}", PS: "[\\dA-Z]{4}\\d{21}", PL: "\\d{24}", PT: "\\d{21}", RO: "[A-Z]{4}[\\dA-Z]{16}", SM: "[A-Z]\\d{10}[\\dA-Z]{12}", SA: "\\d{2}[\\dA-Z]{18}", RS: "\\d{18}", SK: "\\d{20}", SI: "\\d{15}", ES: "\\d{20}", SE: "\\d{20}", CH: "\\d{5}[\\dA-Z]{12}", TN: "\\d{20}", TR: "\\d{5}[\\dA-Z]{17}", AE: "\\d{3}\\d{16}", GB: "[A-Z]{4}\\d{14}", VG: "[\\dA-Z]{4}\\d{16}" }, void 0 !== (r = o[a]) && !new RegExp("^[A-Z]{2}\\d{2}" + r + "$", "").test(u)) return !1;
        for (d = u.substring(4, u.length) + u.substring(0, 4), s = 0; s < d.length; s++) "0" !== (i = d.charAt(s)) && (h = !1), h || (c += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i));
        for (l = 0; l < c.length; l++) n = c.charAt(l), p = "" + f + n, f = p % 97;
        return 1 === f
    }, "Please specify a valid IBAN"), t.validator.addMethod("integer", function(t, e) { return this.optional(e) || /^-?\d+$/.test(t) }, "A positive or negative non-decimal number please"), t.validator.addMethod("ipv4", function(t, e) { return this.optional(e) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t) }, "Please enter a valid IP v4 address."), t.validator.addMethod("ipv6", function(t, e) { return this.optional(e) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t) }, "Please enter a valid IP v6 address."), t.validator.addMethod("lettersonly", function(t, e) { return this.optional(e) || /^\s*[a-zA-Z,ç,Ç,ğ,Ä,ı,İ,Ã¶,Ã–,ş,Ş,ü,Ãœ,\s]+\s*$/i.test(t) }, "Letters only please"), t.validator.addMethod("letterswithbasicpunc", function(t, e) { return this.optional(e) || /^[a-z\-.,()'"\s]+$/i.test(t) }, "Letters or punctuation only please"), t.validator.addMethod("mobileNL", function(t, e) { return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t) }, "Please specify a valid mobile number"), t.validator.addMethod("mobileUK", function(t, e) { return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/) }, "Please specify a valid mobile number"), t.validator.addMethod("nieES", function(t) {
        "use strict";
        var e, a = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),
            d = t.substr(t.length - 1).toUpperCase();
        return !((t = t.toString().toUpperCase()).length > 10 || t.length < 9 || !a.test(t)) && (t = t.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2"), e = 9 === t.length ? t.substr(0, 8) : t.substr(0, 9), "TRWAGMYFPDXBNJZSQVHLCKET".charAt(parseInt(e, 10) % 23) === d)
    }, "Please specify a valid NIE number."), t.validator.addMethod("nifES", function(t) { "use strict"; return !!(t = t.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(t) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.substring(8, 0) % 23) === t.charAt(8) : !!/^[KLM]{1}/.test(t) && t[8] === String.fromCharCode(64)) }, "Please specify a valid NIF number."), t.validator.addMethod("notEqualTo", function(e, a, d) { return this.optional(a) || !t.validator.methods.equalTo.call(this, e, a, d) }, "Please enter a different value, values must not be the same."), t.validator.addMethod("nowhitespace", function(t, e) { return this.optional(e) || /^\S+$/i.test(t) }, "No white space please"), t.validator.addMethod("pattern", function(t, e, a) { return !!this.optional(e) || ("string" == typeof a && (a = new RegExp("^(?:" + a + ")$")), a.test(t)) }, "Invalid format."), t.validator.addMethod("phoneNL", function(t, e) { return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t) }, "Please specify a valid phone number."), t.validator.addMethod("phonesUK", function(t, e) { return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/) }, "Please specify a valid uk phone number"), t.validator.addMethod("phoneUK", function(t, e) { return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/) }, "Please specify a valid phone number"), t.validator.addMethod("phoneUS", function(t, e) { return t = t.replace(/\s+/g, ""), this.optional(e) || t.length > 9 && t.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/) }, "Please specify a valid phone number"), t.validator.addMethod("postalcodeBR", function(t, e) { return this.optional(e) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(t) }, "Informe um CEP vÃ¡lido."), t.validator.addMethod("postalCodeCA", function(t, e) { return this.optional(e) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(t) }, "Please specify a valid postal code"), t.validator.addMethod("postalcodeIT", function(t, e) { return this.optional(e) || /^\d{5}$/.test(t) }, "Please specify a valid postal code"), t.validator.addMethod("postalcodeNL", function(t, e) { return this.optional(e) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t) }, "Please specify a valid postal code"), t.validator.addMethod("postcodeUK", function(t, e) { return this.optional(e) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t) }, "Please specify a valid UK postcode"), t.validator.addMethod("require_from_group", function(e, a, d) {
        var i = t(d[1], a.form),
            n = i.eq(0),
            r = n.data("valid_req_grp") ? n.data("valid_req_grp") : t.extend({}, this),
            o = i.filter(function() { return r.elementValue(this) }).length >= d[0];
        return n.data("valid_req_grp", r), t(a).data("being_validated") || (i.data("being_validated", !0), i.each(function() { r.element(this) }), i.data("being_validated", !1)), o
    }, t.validator.format("Please fill at least {0} of these fields.")), t.validator.addMethod("skip_or_fill_minimum", function(e, a, d) {
        var i = t(d[1], a.form),
            n = i.eq(0),
            r = n.data("valid_skip") ? n.data("valid_skip") : t.extend({}, this),
            o = i.filter(function() { return r.elementValue(this) }).length,
            s = 0 === o || o >= d[0];
        return n.data("valid_skip", r), t(a).data("being_validated") || (i.data("being_validated", !0), i.each(function() { r.element(this) }), i.data("being_validated", !1)), s
    }, t.validator.format("Please either skip these fields or fill at least {0} of them.")), t.validator.addMethod("stateUS", function(t, e, a) {
        var d, i = void 0 === a,
            n = !i && void 0 !== a.caseSensitive && a.caseSensitive,
            r = !i && void 0 !== a.includeTerritories && a.includeTerritories,
            o = !i && void 0 !== a.includeMilitary && a.includeMilitary;
        return d = r || o ? r && o ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : r ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = n ? new RegExp(d) : new RegExp(d, "i"), this.optional(e) || d.test(t)
    }, "Please specify a valid state"), t.validator.addMethod("strippedminlength", function(e, a, d) { return t(e).text().length >= d }, t.validator.format("Please enter at least {0} characters")), t.validator.addMethod("time", function(t, e) { return this.optional(e) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(t) }, "Please enter a valid time, between 00:00 and 23:59"), t.validator.addMethod("time12h", function(t, e) { return this.optional(e) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t) }, "Please enter a valid time in 12-hour am/pm format"), t.validator.addMethod("url2", function(t, e) { return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t) }, t.validator.messages.url), t.validator.addMethod("vinUS", function(t) {
        if (17 !== t.length) return !1;
        var e, a, d, i, n, r, o = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            s = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            l = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            u = 0;
        for (e = 0; e < 17; e++) {
            if (i = l[e], d = t.slice(e, e + 1), 8 === e && (r = d), isNaN(d)) {
                for (a = 0; a < o.length; a++)
                    if (d.toUpperCase() === o[a]) { d = s[a], d *= i, isNaN(r) && 8 === a && (r = o[a]); break }
            } else d *= i;
            u += d
        }
        return 10 === (n = u % 11) && (n = "X"), n === r
    }, "The specified vehicle identification number (VIN) is invalid."), t.validator.addMethod("zipcodeUS", function(t, e) { return this.optional(e) || /^\d{5}(-\d{4})?$/.test(t) }, "The specified US ZIP Code is invalid"), t.validator.addMethod("ziprange", function(t, e) { return this.optional(e) || /^90[2-5]\d\{2\}-\d{4}$/.test(t) }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"), t
});
/* TCNo Add Method */
! function(t) {
    function e(t) { var e = even = total = 0; if (/^[1-9][0-9]{10}$/.test(t += "")) { for (var n = 0; n < 10; n++) total += +t[n], n < 9 && (n % 2 ? e += +t[n] : even += +t[n]); return (7 * even - e) % 10 == t[9] && total % 10 == t[10] } return !1 }
    t.jQuery && t.jQuery.validator && t.jQuery.validator.addMethod("TCIdentity", e), t.TCIdentity = e
}(window, document);
/* Datepicker.js */
jQuery(function(a) { a.datepicker.regional.tr = { closeText: "Kapat", prevText: "Geri", nextText: "İleri", currentText: "Bugün", monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"], dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"], weekHeader: "Hf", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, a.datepicker.setDefaults(a.datepicker.regional.tr) });
(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        $('#appointment-button').magnificPopup({
            callbacks: {
                open: function() {
                    $('body').addClass('no-scroll');
                },
                close: function() {
                    console.clear();

                    $('body').removeClass('no-scroll');

                    $("#appointmentTabOne .appointment-menu ul li a").removeClass("active");
                    $("#appointmentTabOne .appointment-menu ul li").removeClass("allowed");
                    $("#appointmentTabOne .appointment-menu ul li:nth-child(1) a").addClass("active");
                    $("#appointmentTabOne .appointment-body").removeClass("show active");
                    $("#content1").addClass("show active");
                    $("#datepicker").datepicker('setDate', null);
                    $("#date-list").html("");
                    $("#appointmentForm").trigger("reset");

                    $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                    $("#appointmentTabTwo .appointment-menu ul li").removeClass("allowed");
                    $("#appointmentTabTwo .appointment-menu ul li:nth-child(1) a").addClass("active");
                    $("#appointmentTabTwo .appointment-body").removeClass("show active");
                    $("#content5").addClass("show active");
                    $("#datepicker2").datepicker('setDate', null);
                    $("#date-list2").html("");
                    $("#appointmentForm2").trigger("reset");
                }
            }
        });
        $('.appointmentBtn').magnificPopup({
            callbacks: {
                open: function() {
                    $('body').addClass('no-scroll');
                },
                close: function() {
                    console.clear();

                    $('body').removeClass('no-scroll');

                    $("#appointmentTabOne .appointment-menu ul li a").removeClass("active");
                    $("#appointmentTabOne .appointment-menu ul li").removeClass("allowed");
                    $("#appointmentTabOne .appointment-menu ul li:nth-child(1) a").addClass("active");
                    $("#appointmentTabOne .appointment-body").removeClass("show active");
                    $("#content1").addClass("show active");
                    $("#datepicker").datepicker('setDate', null);
                    $("#date-list").html("");
                    $("#appointmentForm").trigger("reset");

                    $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                    $("#appointmentTabTwo .appointment-menu ul li").removeClass("allowed");
                    $("#appointmentTabTwo .appointment-menu ul li:nth-child(1) a").addClass("active");
                    $("#appointmentTabTwo .appointment-body").removeClass("show active");
                    $("#content5").addClass("show active");
                    $("#datepicker2").datepicker('setDate', null);
                    $("#date-list2").html("");
                    $("#appointmentForm2").trigger("reset");
                }
            }
        });

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "1100"
        });

        // Search Popup JS
        $('.search-close-btn').on('click', function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.search-close-btn').removeClass('active');
        });
        $('.search-btn').on('click', function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.search-close-btn').addClass('active');
        });

        // Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        // Home Slides
        $('.home-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: 3000,
            smartSpeed: 750,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='flaticon-left-chevron'></i>",
                "<i class='flaticon-right-chevron'></i>"
            ],
        });
        $(".home-slides").on("translate.owl.carousel", function() {
            $(".main-banner-content span").removeClass("animated fadeInDown").css("opacity", "0");
            $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content .btn-box").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function() {
            $(".main-banner-content span").addClass("animated fadeInDown").css("opacity", "1");
            $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content .btn-box").addClass("animated fadeInUp").css("opacity", "1");
        });

        // Video Popup JS
        $('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Nice Select JS
        $('.nice-select').niceSelect();

        // Odometer JS
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

        $('.news-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });

        $('.department-detail-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 750,
            autoHeight: true,
            items: 1
        });

        $('.departments-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 750,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>",
            ],
        });

        // Doctor Slides
        $('.doctor-slides').owlCarousel({
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: 3000,
            margin: 30,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });

        // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function() {
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });

        // Feedback Carousel
        var $imagesSlider = $(".feedback-slides .client-feedback>div"),
            $thumbnailsSlider = $(".client-thumbnails>div");
        // Images Options
        $imagesSlider.slick({
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            asNavFor: ".client-thumbnails>div",
            prevArrow: '.client-feedback .prev-arrow',
            nextArrow: '.client-feedback .next-arrow'
        });
        // Thumbnails Options
        $thumbnailsSlider.slick({
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            asNavFor: ".feedback-slides .client-feedback>div",
            prevArrow: '.client-thumbnails .prev-arrow',
            nextArrow: '.client-thumbnails .next-arrow',
        });
        var $caption = $('.feedback-slides .caption');
        var captionText = $('.client-feedback .slick-current img').attr('alt');
        updateCaption(captionText);
        $imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $caption.addClass('hide');
        });
        $imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            captionText = $('.client-feedback .slick-current img').attr('alt');
            updateCaption(captionText);
        });

        function updateCaption(text) {
            // If empty, add a no breaking space
            if (text === '') {
                text = '&nbsp;';
            }
            $caption.html(text);
            $caption.removeClass('hide');
        }

        // Tabs
        (function($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function(g) {
                var tab = $(this).closest('.tab'),
                    index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Input Plus & Minus Number JS
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find('.plus-btn'),
                btnDown = spinner.find('.minus-btn'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });

        // Go to Top
        $(function() {
            // Scroll Event
            $(window).on('scroll', function() {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" }, 500);
            });
        });

        $(".alert[data-auto-dismiss]").each(function(a, t) {
            var s = $(t),
                e = s.data("auto-dismiss") || 5e3;
            setTimeout(function() { s.alert("close") }, e)
        });

        function ActivePageLink() {
            $('.fovia-nav .navbar .navbar-nav .nav-item a').each(function() {
                this.href == window.location.href && $(this).addClass('active')
            }), $('.widget-area .widget_categories ul li a').each(function() {
                this.href == window.location.href && $(this).parent().addClass('active')
            }), $('.career-list li a').each(function() {
                this.href == window.location.href && $(this).parent().addClass('active')
            })
        }
        ActivePageLink();

        $('#searchHome').jplist({
            itemsBox: '.list',
            itemPath: '.list-item',
            panelPath: '.jplist-panel'
        });

        $('.type-it').typeIt({
            strings: ['Size Nasıl Yardımcı Olabiliriz?', 'Doktor Ara', 'Bölüm Ara', 'Haber ya da Makale Ara'],
            breakLines: false,
            loop: true,
            loopDelay: 2000
        });

        $('.type-it-phones').typeIt({
            strings: ['Alo Medar Gebze : 444 78 48', 'Alo Medar Gölcük : 444 99 41', 'Alo Medar Sakarya : 444 74 22'],
            breakLines: false,
            loop: true,
            loopDelay: 2000
        });

        $('.type-it-mail').typeIt({
            strings: ['<b>Gebze :</b> gebze@medarhastanesi.com.tr', '<b>Gölcük :</b> golcuk@medarhastanesi.com.tr', '<b>Sakarya :</b> sakarya@medarhastanesi.com.tr'],
            breakLines: false,
            loop: true,
            loopDelay: 2000
        });

        $('.search-wrapper form .inner-form .input-field input').focusin(
            function() {
                $(this).parent().addClass('focused');
            }).focusout(
            function() {
                $(this).parent().removeClass('focused');
            });

        var DoktorKodu = 0;
        var SelectedId = 0;

        function Appointment() {
            $(function() {
                var selectedtime;
                $.ajax({
                    type: "GET",
                    url: '/randevu/bolumler',
                    dataType: 'json',
                    success: function(data) {
                        if (data) {
                            $.each(data, function(i, val) {
                                $('#department-list').append('<li class="ui-widget-content" data-id="' + val.BOLUM + '">' + val.BOLUM_ADI + '</li>');
                            });
                        } else {
                            alert('Servisten Bolumler Gelmedi..');
                        }
                    },
                });

                $("#department-list").selectable({
                    stop: function() {
                        $(".ui-selected", this).each(function() {
                            $('#blockdiv').block({
                                message: '<h4>Lütfen Bekleyiniz</h4>'
                            });

                            $('#doctor-list').empty();
                            $.ajax({
                                type: "GET",
                                url: '/randevu/doktorlar',
                                data: { id: $(this).data("id") },
                                dataType: 'json',
                                success: function(data) {
                                    $.each(data, function(i, val) {
                                        $('#doctor-list').append('<li class="ui-widget-content" data-id="' + val.DR_KODU + '">' + val.ADI_SOYADI + '</li>');
                                    });
                                    $('#blockdiv').unblock();
                                },
                            });
                            $("#appointmentTabOne .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabOne .appointment-menu ul li:nth-child(1)").addClass("allowed");
                            $("#appointmentTabOne .appointment-menu ul li:nth-child(2) a").addClass("active");
                            $("#appointmentTabOne .appointment-body").removeClass("show active");
                            $("#content2").addClass("show active");
                        });
                    }
                });

                $("#doctor-list").selectable({
                    stop: function() {
                        $(".ui-selected", this).each(function() {
                            //var index2 = $( "#doctor-list li.ui-selected" ).text();
                            $('#date-list').empty();
                            DoktorKodu = $(this).data("id");
                            $("#appointmentTabOne .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabOne .appointment-menu ul li:nth-child(2)").addClass("allowed");
                            $("#appointmentTabOne .appointment-menu ul li:nth-child(3) a").addClass("active");
                            $("#appointmentTabOne .appointment-body").removeClass("show active");
                            $("#content3").addClass("show active");
                        });
                    }
                });

                $("#date-list").selectable({
                    stop: function() {
                        $(".ui-selected", this).each(function() {

                            $('#result-list').empty();

                            SelectedId = $(this).data("id");
                            console.log(SelectedId);

                            $("#appointmentTabOne .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabOne .appointment-menu ul li:nth-child(3)").addClass("allowed");
                            $("#appointmentTabOne .appointment-menu ul li:nth-child(4) a").addClass("active");
                            $("#appointmentTabOne .appointment-body").removeClass("show active");
                            $("#content4").addClass("show active");
                        });
                    }
                });

                $.datepicker.setDefaults($.datepicker.regional["tr"]);
                var sonucDate = "";

                $("#datepicker").datepicker({
                    showOtherMonths: false,
                    selectOtherMonths: false,
                    minDate: 0,
                    beforeShow: function() {
                        setTimeout(function() {
                            $('.ui-datepicker').css('z-index', 9999);
                        }, 0);
                    },
                    onSelect: function(dateText) {
                        //alert("Selected date: " + dateText + "; input's current value: " + this.value);
                        sonucDate = dateText;
                        dateText = dateText.split('.');
                        var text = dateText[1] + '/' + dateText[0] + '/' + dateText[2];
                        $('#date-list').empty();
                        $('#blockdiv').block({
                            message: '<h4>Lütfen Bekleyiniz</h4>'
                        });
                        $.ajax({
                            type: "GET",
                            url: '/randevu/saatler',
                            data: { id: DoktorKodu, date: text },
                            dataType: 'json',
                            success: function(data) {
                                if (data) {
                                    $('#date-list').selectable("enable");
                                    $.each(data, function(i, val) {
                                        $('#date-list').append('<li class="ui-widget-content" data-id="' + val.SIRA_NO + '">' + val.SAAT + '</li>');
                                    });
                                } else {
                                    $('#date-list').append('<div class="contact-form ptb0"><div class="alert alert-danger">Lütfen farklı bir tarih seçiniz.</div></div>');
                                    $('#date-list').selectable("disable");
                                }
                                $('#blockdiv').unblock();
                            },
                        });
                    }
                });

                $("#appointment-back").each(function() {
                    $(this).click(function() {
                        $('#blockdiv').unblock();
                        $('.appointment-wrapper .inner-content .appointment-content .appointment-menu ul > .active').prev('li').find('a').trigger('click');
                        var link = $(this).attr("href");
                        if (link === "#content1") {
                            $(".appointment-menu ul li a").removeClass("active");
                            $(".appointment-menu ul li:nth-child(1) a").addClass("active");
                        }
                        if (link === "#content2") {
                            $(".appointment-menu ul li a").removeClass("active");
                            $(".appointment-menu ul li:nth-child(2) a").addClass("active");
                        }
                        if (link === "#content3") {
                            $(".appointment-menu ul li a").removeClass("active");
                            $(".appointment-menu ul li:nth-child(3) a").addClass("active");
                        }
                    });
                });

                $("#appointmentForm").validate({
                    rules: {
                        adiniz: {
                            lettersonly: true
                        },
                        soyadiniz: {
                            lettersonly: true
                        },
                        tckimlik: {
                            required: true,
                            minlength: 11,
                            maxlength: 11,
                            TCIdentity: true
                        },
                        ceptel: {
                            required: true,
                            minlength: 11,
                            maxlength: 11
                        }
                    },
                    messages: {
                        "adiniz": {
                            lettersonly: "Lütfen yalnızca harf giriniz."
                        },
                        "soyadiniz": {
                            lettersonly: "Lütfen yalnızca harf giriniz."
                        },
                        "tckimlik": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz.",
                            TCIdentity: "Lütfen geçerli bir T.C Kimlik No giriniz"
                        },
                        "ceptel": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz."
                        }
                    },
                    errorPlacement: function(label, element) {
                        if (element.attr("name") === "ceptel") {
                            element.parent().append(label);
                        } else {
                            label.insertAfter(element);
                        }
                    },
                    submitHandler: function(frm) {
                        $.ajax({
                            type: $("#appointmentForm").attr('method'),
                            url: $("#appointmentForm").attr('action'),
                            data: $("#appointmentForm").serialize() + '&id=' + SelectedId,
                            success: function(rtrn) {
                                var val = JSON.parse(rtrn);
                                var bolum = $("#department-list li.ui-selected").text();
                                var doktor = $("#doctor-list li.ui-selected").text();
                                var saat = $("#date-list li.ui-selected").text();
                                $("#popup-wrapper").removeClass("hidden");
                                $('#appointment-number').append(SelectedId);
                                $('#bolum').append(bolum);
                                $('#doktor').append(doktor);
                                $('#tarih').append(sonucDate);
                                $('#saat').append(saat);

                                $("#appointmentForm").trigger('reset');
                                /*if(val.KAYIT_VAR_MI === false || val.RANDEVU_ALINDI_MI === true)
                                {

                                    var bolum = $( "#department-list li.ui-selected" ).text();
                                    var doktor = $( "#doctor-list li.ui-selected" ).text();
                                    var saat = $( "#date-list li.ui-selected" ).text();
                                    $("#popup-wrapper").removeClass("hidden");
                                    $('#appointment-number').append(SelectedId);
                                    $('#bolum').append(bolum);
                                    $('#doktor').append(doktor);
                                    $('#tarih').append(sonucDate);
                                    $('#saat').append(saat);

                                    $( "#appointmentForm" ).trigger('reset');
                                }
                                else
                                {
                                    alert('Randevu oluşturulamadı.');
                                }*/
                            }
                        });
                        return false; // required to block normal submit since you used ajax
                    }

                });

                $(".popup-wrapper .popup-container #popup-close").click(function() {
                    location.reload();
                });

                $("#appointmentCancel").validate({
                    rules: {
                        randevu_numarasi: {
                            required: true
                        },
                        tc_kimlik: {
                            required: true,
                            minlength: 11,
                            maxlength: 11
                        }
                    },
                    messages: {
                        "tc_kimlik": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz."
                        }
                    },
                    submitHandler: function(frm) {
                        $.ajax({
                            type: $("#appointmentCancel").attr('method'),
                            url: $("#appointmentCancel").attr('action'),
                            data: $("#appointmentCancel").serialize(),
                            success: function(rtrn) {
                                if (rtrn) {
                                    swal({ title: 'Sonuç', html: 'Randevu İptal Edildi', type: 'success' });
                                    $("#appointmentCancel").trigger('reset');
                                } else {
                                    alert('Hata');
                                }

                            }
                        });
                        return false; // required to block normal submit since you used ajax
                    }

                });
                $("#appointmentResult").validate({
                    rules: {
                        tc_kimlik2: {
                            required: true,
                            minlength: 11,
                            maxlength: 11
                        },
                        protokolno: {
                            required: true
                        }
                    },
                    messages: {
                        "tc_kimlik2": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz."
                        }
                    },
                    submitHandler: function(frm) {
                        $('#labsonuc').addClass('hidden');
                        $('#labsonucdetay').addClass('hidden');
                        $.ajax({
                            type: $("#appointmentResult").attr('method'),
                            url: $("#appointmentResult").attr('action'),
                            data: $("#appointmentResult").serialize(),
                            success: function(rtrn) {
                                $('#LabRadIstek').html('');
                                $('#LabRadIstekDetay').html('');
                                if (rtrn != "") {
                                    $('#labsonuc').removeClass('hidden');
                                    $.each(rtrn, function(i, item) {
                                        var d = new Date(item.ISTEK_TARIHI);
                                        var fd = d.toLocaleDateString() + ' ' + d.toTimeString().substring(0, d.toTimeString().indexOf("GMT"));

                                        $('#LabRadIstek').append('<tr><td class="hidden istekno">' + item.ISTEK_NO + '</td><td class="hidden labno">' + item.LAB + '</td><td>' + item.GRUP_ADI + '</td><td>' + fd + '</td><td><button class="form-link result"  type="button">Sonuç GÃ¶ster</button></td></tr>');
                                    });
                                } else {
                                    alert('Sonuç Bulunamadı');
                                }
                            }
                        });
                        return false;
                    }


                });

                var table = document.getElementById('LabRadIstek'),
                    selected = table.getElementsByClassName('selected');

                $(document).on('click', '.result', function() {
                    if (selected[0]) selected[0].className = '';

                    var $row = $(this).closest("tr"); // Find the row
                    $row.addClass('selected');

                    var value = $row.find(".istekno").text();
                    var lab = $row.find(".labno").text();

                    value = value || "No row Selected";
                    $.ajax({
                        type: 'GET',
                        url: 'laboratuaristekdetay?istekno=' + value,
                        success: function(rtrn) {
                            if (rtrn != "") {
                                $('#LabRadIstekDetay').html('');
                                $('#labsonucdetay').removeClass('hidden');
                                $.each(JSON.parse(rtrn), function(i, item) {
                                    if (lab > 1) {
                                        $('#referansth').hide();
                                        $('#LabRadIstekDetay').append('<tr><td>' + item.ISLEM_ADI + '</td><td>' + item.SONUC + '</td></tr>');
                                    } else {
                                        $('#referansth').show();
                                        $('#LabRadIstekDetay').append('<tr><td>' + item.ISLEM_ADI + '</td><td>' + item.SONUC + '</td><td>' + item.REFERANS_MIN + '-' + item.REFERANS_MAX + '</td></tr>');
                                    }
                                });

                                $('html, body').animate({
                                    scrollTop: $("#LabRadIstekDetay").offset().top - 150
                                }, 2000);

                            } else {
                                alert('Sonuç Bulunamadı');
                            }
                        }
                    });

                });

                var n1 = Math.round(Math.random() * 10 + 1);
                var n2 = Math.round(Math.random() * 10 + 1);
                $("#captcha").html(n1 + " + " + n2 + " = ?");
            });
        }

        Appointment();

        var DoktorKodu2 = 0;
        var SelectedId2 = 0;

        function Appointment2() {
            $(function() {
                var selectedtime2;
                $.ajax({
                    type: "GET",
                    url: '/randevu/bolumler2',
                    dataType: 'json',
                    success: function(data) {
                        if (data) {
                            $.each(data, function(i, val) {
                                $('#department-list2').append('<li class="ui-widget-content" data-id="' + val.BOLUM + '">' + val.BOLUM_ADI + '</li>');
                            });
                        } else {
                            alert('Servisten Bolumler Gelmedi..');
                        }
                    },
                });

                $("#department-list2").selectable({
                    stop: function() {
                        $(".ui-selected", this).each(function() {
                            $('#blockdiv2').block({
                                message: '<h4>Lütfen Bekleyiniz</h4>'
                            });

                            $('#doctor-list2').empty();
                            $.ajax({
                                type: "GET",
                                url: '/randevu/doktorlar2',
                                data: { id: $(this).data("id") },
                                dataType: 'json',
                                success: function(data) {
                                    $.each(data, function(i, val) {
                                        $('#doctor-list2').append('<li class="ui-widget-content" data-id="' + val.DR_KODU + '">' + val.ADI_SOYADI + '</li>');
                                    });
                                    $('#blockdiv2').unblock();
                                },
                            });
                            $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(1)").addClass("allowed");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(2) a").addClass("active");
                            $("#appointmentTabTwo .appointment-body").removeClass("show active");
                            $("#content6").addClass("show active");
                        });
                    }
                });

                $("#doctor-list2").selectable({
                    stop: function() {
                        $(".ui-selected", this).each(function() {
                            //var index2 = $( "#doctor-list2 li.ui-selected" ).text();
                            $('#date-list2').empty();
                            DoktorKodu2 = $(this).data("id");
                            //samet
                            $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(2)").addClass("allowed");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(3) a").addClass("active");
                            $("#appointmentTabTwo .appointment-body").removeClass("show active");
                            $("#content7").addClass("show active");
                        });
                    }
                });

                $("#date-list2").selectable({
                    stop: function() {
                        $(".ui-selected", this).each(function() {

                            $('#result-list2').empty();

                            SelectedId2 = $(this).data("id");
                            console.log(SelectedId2);

                            $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(3)").addClass("allowed");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(4) a").addClass("active");
                            $("#appointmentTabTwo .appointment-body").removeClass("show active");
                            $("#content8").addClass("show active");
                        });
                    }
                });

                $.datepicker.setDefaults($.datepicker.regional["tr"]);
                var sonucDate2 = "";

                $("#datepicker2").datepicker({
                    showOtherMonths: false,
                    selectOtherMonths: false,
                    minDate: 0,
                    beforeShow: function() {
                        setTimeout(function() {
                            $('.ui-datepicker').css('z-index', 9999);
                        }, 0);
                    },
                    onSelect: function(dateText2) {
                        //alert("Selected date: " + dateText2 + "; input's current value: " + this.value);
                        sonucDate2 = dateText2;
                        dateText2 = dateText2.split('.');
                        var text2 = dateText2[1] + '/' + dateText2[0] + '/' + dateText2[2];
                        $('#date-list2').empty();
                        $('#blockdiv2').block({
                            message: '<h4>Lütfen Bekleyiniz</h4>'
                        });
                        $.ajax({
                            type: "GET",
                            url: '/randevu/saatler2',
                            data: { id: DoktorKodu2, date: text2 },
                            dataType: 'json',
                            success: function(data) {
                                if (data) {
                                    $('#date-list2').selectable("enable");
                                    $.each(data, function(i, val) {
                                        $('#date-list2').append('<li class="ui-widget-content" data-id="' + val.SIRA_NO + '">' + val.SAAT + '</li>');
                                    });
                                } else {
                                    $('#date-list2').append('<div class="contact-form ptb0"><div class="alert alert-danger">Gün içindeki randevularınız için 444 74 22 numaralı çağrı merkezimiz ile iletişime geçebilirsiniz.</div></div>');
                                    $('#date-list2').selectable("disable");
                                }
                                $('#blockdiv2').unblock();
                            },
                        });
                    }
                });

                $("#appointment-back2").each(function() {
                    $(this).click(function() {
                        $('#blockdiv2').unblock();
                        $('.appointment-wrapper .inner-content .appointment-content .appointment-menu ul > .active').prev('li').find('a').trigger('click');
                        var link = $(this).attr("href");
                        if (link === "#content5") {
                            $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(1) a").addClass("active");
                        }
                        if (link === "#content6") {
                            $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(2) a").addClass("active");
                        }
                        if (link === "#content7") {
                            $("#appointmentTabTwo .appointment-menu ul li a").removeClass("active");
                            $("#appointmentTabTwo .appointment-menu ul li:nth-child(3) a").addClass("active");
                        }
                    });
                });

                $("#appointmentForm2").validate({
                    rules: {
                        adiniz2: {
                            lettersonly: true
                        },
                        soyadiniz2: {
                            lettersonly: true
                        },
                        tckimlik2: {
                            required: true,
                            minlength: 11,
                            maxlength: 11,
                            TCIdentity: true
                        },
                        ceptel2: {
                            required: true,
                            minlength: 11,
                            maxlength: 11
                        }
                    },
                    messages: {
                        "adiniz2": {
                            lettersonly: "Lütfen yalnızca harf giriniz."
                        },
                        "soyadiniz2": {
                            lettersonly: "Lütfen yalnızca harf giriniz."
                        },
                        "tckimlik2": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz.",
                            TCIdentity: "Lütfen geçerli bir T.C Kimlik No giriniz"
                        },
                        "ceptel2": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz."
                        }
                    },
                    errorPlacement: function(label, element) {
                        if (element.attr("name") === "ceptel2") {
                            element.parent().append(label);
                        } else {
                            label.insertAfter(element);
                        }
                    },
                    submitHandler: function(frm) {
                        $.ajax({
                            type: $("#appointmentForm2").attr('method'),
                            url: $("#appointmentForm2").attr('action'),
                            data: $("#appointmentForm2").serialize() + '&id=' + SelectedId2,
                            success: function(rtrn) {
                                var val = JSON.parse(rtrn);
                                var bolum2 = $("#department-list2 li.ui-selected").text();
                                var doktor2 = $("#doctor-list2 li.ui-selected").text();
                                var saat2 = $("#date-list2 li.ui-selected").text();
                                $("#popup-wrapper2").removeClass("hidden");
                                $('#appointment-number2').append(SelectedId2);
                                $('#bolum2').append(bolum2);
                                $('#doktor2').append(doktor2);
                                $('#tarih2').append(sonucDate2);
                                $('#saat2').append(saat2);

                                $("#appointmentForm2").trigger('reset');
                                /*if(val.KAYIT_VAR_MI === false || val.RANDEVU_ALINDI_MI === true)
                                {

                                    var bolum2= $( "#department-list2 li.ui-selected" ).text();
                                    var doktor2 = $( "#doctor-list2 li.ui-selected" ).text();
                                    var saat2 = $( "#date-list2 li.ui-selected" ).text();
                                    $("#popup-wrapper2").removeClass("hidden");
                                    $('#appointment-number2').append(SelectedId2);
                                    $('#bolum2').append(bolum2);
                                    $('#doktor2').append(doktor2);
                                    $('#tarih2').append(sonucDate2);
                                    $('#saat2').append(saat2);

                                    $( "#appointmentForm2" ).trigger('reset');
                                }
                                else
                                {
                                    alert('Randevu oluşturulamadı.');
                                }*/
                            }
                        });
                        return false; // required to block normal submit since you used ajax
                    }

                });

                $(".popup-wrapper.two .popup-container #popup-close2").click(function() {
                    location.reload();
                });

                $("#appointmentCancel2").validate({
                    rules: {
                        randevu_numarasi2: {
                            required: true
                        },
                        tc_kimlik3: {
                            required: true,
                            minlength: 11,
                            maxlength: 11
                        }
                    },
                    messages: {
                        "tc_kimlik3": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz."
                        }
                    },
                    submitHandler: function(frm) {
                        $.ajax({
                            type: $("#appointmentCancel2").attr('method'),
                            url: $("#appointmentCancel2").attr('action'),
                            data: $("#appointmentCancel2").serialize(),
                            success: function(rtrn) {
                                if (rtrn) {
                                    swal({ title: 'Sonuç', html: 'Randevu İptal Edildi', type: 'success' });
                                    $("#appointmentCancel2").trigger('reset');
                                } else {
                                    alert('Hata');
                                }

                            }
                        });
                        return false; // required to block normal submit since you used ajax
                    }

                });
                $("#appointmentResult2").validate({
                    rules: {
                        tc_kimlik4: {
                            required: true,
                            minlength: 11,
                            maxlength: 11
                        },
                        protokolno2: {
                            required: true
                        }
                    },
                    messages: {
                        "tc_kimlik4": {
                            required: "Bu alan gereklidir.",
                            minlength: "Lütfen en az 11 karakter giriniz.",
                            maxlength: "Lütfen en fazla 11 karakter giriniz."
                        }
                    },
                    submitHandler: function(frm) {
                        $('#labsonuc2').addClass('hidden');
                        $('#labsonucdetay2').addClass('hidden');
                        $.ajax({
                            type: $("#appointmentResult2").attr('method'),
                            url: $("#appointmentResult2").attr('action'),
                            data: $("#appointmentResult2").serialize(),
                            success: function(rtrn) {
                                $('#LabRadIstek2').html('');
                                $('#LabRadIstekDetay2').html('');
                                if (rtrn != "") {
                                    $('#labsonuc2').removeClass('hidden');
                                    $.each(rtrn, function(i, item) {
                                        var d = new Date(item.ISTEK_TARIHI);
                                        var fd = d.toLocaleDateString() + ' ' + d.toTimeString().substring(0, d.toTimeString().indexOf("GMT"));

                                        $('#LabRadIstek2').append('<tr><td class="hidden istekno">' + item.ISTEK_NO + '</td><td class="hidden labno">' + item.LAB + '</td><td>' + item.GRUP_ADI + '</td><td>' + fd + '</td><td><button class="form-link result"  type="button">Sonuç GÃ¶ster</button></td></tr>');
                                    });
                                } else {
                                    alert('Sonuç Bulunamadı');
                                }
                            }
                        });
                        return false;
                    }


                });

                var table = document.getElementById('LabRadIstek2'),
                    selected = table.getElementsByClassName('selected');

                $(document).on('click', '.result', function() {
                    if (selected[0]) selected[0].className = '';

                    var $row = $(this).closest("tr"); // Find the row
                    $row.addClass('selected');

                    var value = $row.find(".istekno.two").text();
                    var lab = $row.find(".labno.two").text();

                    value = value || "No row Selected";
                    $.ajax({
                        type: 'GET',
                        url: 'laboratuaristekdetay2?istekno=' + value,
                        success: function(rtrn) {
                            if (rtrn != "") {
                                $('#LabRadIstekDetay2').html('');
                                $('#labsonucdetay2').removeClass('hidden');
                                $.each(JSON.parse(rtrn), function(i, item) {
                                    if (lab > 1) {
                                        $('#referansth').hide();
                                        $('#LabRadIstekDetay2').append('<tr><td>' + item.ISLEM_ADI + '</td><td>' + item.SONUC + '</td></tr>');
                                    } else {
                                        $('#referansth').show();
                                        $('#LabRadIstekDetay2').append('<tr><td>' + item.ISLEM_ADI + '</td><td>' + item.SONUC + '</td><td>' + item.REFERANS_MIN + '-' + item.REFERANS_MAX + '</td></tr>');
                                    }
                                });

                                $('html, body').animate({
                                    scrollTop: $("#LabRadIstekDetay2").offset().top - 150
                                }, 2000);

                            } else {
                                alert('Sonuç Bulunamadı');
                            }
                        }
                    });

                });

                var n1 = Math.round(Math.random() * 10 + 1);
                var n2 = Math.round(Math.random() * 10 + 1);
                $("#captcha").html(n1 + " + " + n2 + " = ?");
            });
        }

        Appointment2();

        function CustomScrollbar() {
            $(".scroll-container").mCustomScrollbar({
                theme: "light-2",
                scrollButtons: {
                    enable: true
                },
                callbacks: {
                    onTotalScroll: function() { addContent(this); },
                    onTotalScrollOffset: 100,
                    alwaysTriggerOffsets: false
                }
            });
        }

        CustomScrollbar();
    });

    // WOW JS
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 20, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true, // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('preloader-deactivate');
    });

}(jQuery));