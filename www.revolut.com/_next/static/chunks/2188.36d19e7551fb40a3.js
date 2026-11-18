"use strict";
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "dd2ef0c6-65f0-493c-9d2a-9c541d1e562e", e._sentryDebugIdIdentifier = "sentry-dbid-dd2ef0c6-65f0-493c-9d2a-9c541d1e562e")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2188], {
        23582: (e, r, t) => {
            t.d(r, {
                RR: () => u,
                hP: () => c,
                qe: () => a,
                sH: () => l
            });
            var s = t(23798),
                o = t(21462);
            let n = {
                    enabled: !1,
                    mode: void 0
                },
                i = (0, o.createContext)(n),
                d = (0, o.createContext)({
                    setViewportAnimation: () => void 0
                }),
                c = e => {
                    let {
                        children: r
                    } = e, [t, c] = (0, o.useState)(n), u = (0, o.useCallback)(e => {
                        c(r => r.enabled === e.enabled && r.mode === e.mode ? r : e)
                    }, []), a = (0, o.useMemo)(() => ({
                        setViewportAnimation: u
                    }), [u]);
                    return (0, s.jsx)(d.Provider, {
                        value: a,
                        children: (0, s.jsx)(i.Provider, {
                            value: t,
                            children: r
                        })
                    })
                },
                u = () => (0, o.useContext)(i),
                a = e => {
                    let {
                        enabled: r,
                        mode: t
                    } = e, {
                        setViewportAnimation: s
                    } = (0, o.useContext)(d);
                    (0, o.useLayoutEffect)(() => {
                        r && s({
                            enabled: !0,
                            mode: t
                        })
                    }, [r, t, s]), (0, o.useEffect)(() => {
                        if (r) return () => {
                            s({
                                enabled: !1,
                                mode: void 0
                            })
                        }
                    }, [r, s])
                },
                l = () => {
                    let {
                        enabled: e,
                        mode: r
                    } = u();
                    if (e && r) return {
                        "data-theme-viewport-animation": "true"
                    }
                }
        },
        92188: (e, r, t) => {
            t.r(r), t.d(r, {
                PhoneFormPopup: () => a,
                usePhoneFormSuccessMessage: () => u
            });
            var s = t(23798),
                o = t(13729),
                n = t(96023),
                i = t(23582),
                d = t(33514),
                c = t(40769);

            function u() {
                let e = (0, d.c)();
                return (0, c.Id)() ? {
                    successMessage: e("widget.getTheApp.deviceSuccessMessage")
                } : {
                    successMessage: e("widget.getTheApp.desktopSuccessMessage")
                }
            }
            let a = e => {
                let {
                    formState: r,
                    handlePopupExit: t
                } = e, {
                    errorTitle: c,
                    errorMessage: a
                } = function(e) {
                    let r = (0, d.c)(),
                        t = r("shared.error.generic");
                    switch (e) {
                        case "promo-code-error":
                            return {
                                errorTitle: r("widget.getTheAppPopup.promotionError"),
                                errorMessage: r("widget.getTheAppPopup.promotionErrorDescription")
                            };
                        case "country-not-supported":
                            return {
                                errorTitle: t,
                                errorMessage: r("widget.getTheApp.notSupportedCountry")
                            };
                        default:
                            return {
                                errorTitle: t,
                                errorMessage: r("widget.getTheApp.errorTryAgainLater")
                            }
                    }
                }("error" === r.status && r.event || void 0), {
                    successMessage: l
                } = u(), p = (0, i.sH)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(o.b, {
                        variant: "success-optional",
                        open: "success" === r.status,
                        onClose: t,
                        ...p,
                        children: l && (0, s.jsx)(o.b.Description, {
                            children: (0, s.jsx)(n.E, {
                                variant: "subtitle1",
                                use: "p",
                                textAlign: "center",
                                mt: "sp400",
                                color: "foreground",
                                children: l
                            })
                        })
                    }), (0, s.jsxs)(o.b, {
                        variant: "error",
                        open: "error" === r.status,
                        onClose: t,
                        ...p,
                        children: [(0, s.jsx)(o.b.Title, {
                            children: c
                        }), (0, s.jsx)(o.b.Description, {
                            children: (0, s.jsx)(n.E, {
                                variant: "subtitle1",
                                use: "p",
                                textAlign: "center",
                                mt: "sp400",
                                color: "foreground",
                                children: a
                            })
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=2188.36d19e7551fb40a3.js.map