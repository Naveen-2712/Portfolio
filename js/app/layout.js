(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[177], {
    3024: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 4627)),
            Promise.resolve().then(n.t.bind(n, 7675, 23)),
            Promise.resolve().then(n.t.bind(n, 9324, 23))
    }
    ,
    4627: (e, t, n) => {
        "use strict";
        n.d(t, {
            ThemeProvider: () => s
        });
        var r = n(5155);
        n(2115);
        var a = n(7113);
        function s(e) {
            let { children: t, ...n } = e;
            return (0,
                r.jsx)(a.N, {
                    ...n,
                    children: t
                })
        }
    }
    ,
    9324: () => { }
    ,
    7675: e => {
        e.exports = {
            style: {
                fontFamily: "'Mona Sans', 'Mona Sans Fallback'",
                fontStyle: "normal"
            },
            className: "__className_852510",
            variable: "__variable_852510"
        }
    }
    ,
    7113: (e, t, n) => {
        "use strict";
        n.d(t, {
            D: () => c,
            N: () => d
        });
        var r = n(2115)
            , a = (e, t, n, r, a, s, o, l) => {
                let i = document.documentElement
                    , m = ["light", "dark"];
                function c(t) {
                    (Array.isArray(e) ? e : [e]).forEach(e => {
                        let n = "class" === e
                            , r = n && s ? a.map(e => s[e] || e) : a;
                        n ? (i.classList.remove(...r),
                            i.classList.add(s && s[t] ? s[t] : t)) : i.setAttribute(e, t)
                    }
                    ),
                        l && m.includes(t) && (i.style.colorScheme = t)
                }
                if (r)
                    c(r);
                else
                    try {
                        let e = localStorage.getItem(t) || n
                            , r = o && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                        c(r)
                    } catch (e) { }
            }
            , s = ["light", "dark"]
            , o = "(prefers-color-scheme: dark)"
            , l = "undefined" == typeof window
            , i = r.createContext(void 0)
            , m = {
                setTheme: e => { }
                ,
                themes: []
            }
            , c = () => {
                var e;
                return null != (e = r.useContext(i)) ? e : m
            }
            , d = e => r.useContext(i) ? r.createElement(r.Fragment, null, e.children) : r.createElement(h, {
                ...e
            })
            , u = ["light", "dark"]
            , h = e => {
                let { forcedTheme: t, disableTransitionOnChange: n = !1, enableSystem: a = !0, enableColorScheme: l = !0, storageKey: m = "theme", themes: c = u, defaultTheme: d = a ? "system" : "light", attribute: h = "data-theme", value: v, children: g, nonce: w, scriptProps: S } = e
                    , [E, k] = r.useState(() => f(m, d))
                    , [C, T] = r.useState(() => "system" === E ? p() : E)
                    , _ = v ? Object.values(v) : c
                    , L = r.useCallback(e => {
                        let t = e;
                        if (!t)
                            return;
                        "system" === e && a && (t = p());
                        let r = v ? v[t] : t
                            , o = n ? b(w) : null
                            , i = document.documentElement
                            , m = e => {
                                "class" === e ? (i.classList.remove(..._),
                                    r && i.classList.add(r)) : e.startsWith("data-") && (r ? i.setAttribute(e, r) : i.removeAttribute(e))
                            }
                            ;
                        if (Array.isArray(h) ? h.forEach(m) : m(h),
                            l) {
                            let e = s.includes(d) ? d : null
                                , n = s.includes(t) ? t : e;
                            i.style.colorScheme = n
                        }
                        null == o || o()
                    }
                        , [w])
                    , N = r.useCallback(e => {
                        let t = "function" == typeof e ? e(E) : e;
                        k(t);
                        try {
                            localStorage.setItem(m, t)
                        } catch (e) { }
                    }
                        , [E])
                    , A = r.useCallback(e => {
                        T(p(e)),
                            "system" === E && a && !t && L("system")
                    }
                        , [E, t]);
                r.useEffect(() => {
                    let e = window.matchMedia(o);
                    return e.addListener(A),
                        A(e),
                        () => e.removeListener(A)
                }
                    , [A]),
                    r.useEffect(() => {
                        let e = e => {
                            e.key === m && (e.newValue ? k(e.newValue) : N(d))
                        }
                            ;
                        return window.addEventListener("storage", e),
                            () => window.removeEventListener("storage", e)
                    }
                        , [N]),
                    r.useEffect(() => {
                        L(null != t ? t : E)
                    }
                        , [t, E]);
                let P = r.useMemo(() => ({
                    theme: E,
                    setTheme: N,
                    forcedTheme: t,
                    resolvedTheme: "system" === E ? C : E,
                    themes: a ? [...c, "system"] : c,
                    systemTheme: a ? C : void 0
                }), [E, N, t, C, a, c]);
                return r.createElement(i.Provider, {
                    value: P
                }, r.createElement(y, {
                    forcedTheme: t,
                    storageKey: m,
                    attribute: h,
                    enableSystem: a,
                    enableColorScheme: l,
                    defaultTheme: d,
                    value: v,
                    themes: c,
                    nonce: w,
                    scriptProps: S
                }), g)
            }
            , y = r.memo(e => {
                let { forcedTheme: t, storageKey: n, attribute: s, enableSystem: o, enableColorScheme: l, defaultTheme: i, value: m, themes: c, nonce: d, scriptProps: u } = e
                    , h = JSON.stringify([s, n, i, t, c, m, o, l]).slice(1, -1);
                return r.createElement("script", {
                    ...u,
                    suppressHydrationWarning: !0,
                    nonce: "undefined" == typeof window ? d : "",
                    dangerouslySetInnerHTML: {
                        __html: "(".concat(a.toString(), ")(").concat(h, ")")
                    }
                })
            }
            )
            , f = (e, t) => {
                let n;
                if (!l) {
                    try {
                        n = localStorage.getItem(e) || void 0
                    } catch (e) { }
                    return n || t
                }
            }
            , b = e => {
                let t = document.createElement("style");
                return e && t.setAttribute("nonce", e),
                    t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
                    document.head.appendChild(t),
                    () => {
                        window.getComputedStyle(document.body),
                            setTimeout(() => {
                                document.head.removeChild(t)
                            }
                                , 1)
                    }
            }
            , p = e => (e || (e = window.matchMedia(o)),
                e.matches ? "dark" : "light")
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [402, 441, 517, 358], () => t(3024)),
        _N_E = e.O()
}
]);
