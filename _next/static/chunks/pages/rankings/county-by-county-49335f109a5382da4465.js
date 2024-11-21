(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [906],
  {
    8804: function (e, t, r) {
      e.exports = r(91175);
    },
    91175: function (e) {
      e.exports = function (e) {
        return e && e.length ? e[0] : void 0;
      };
    },
    91785: function (e, t, r) {
      'use strict';
      var n = r(67294),
        i = r(25770),
        o = r(97023),
        c = r(85893);
      function a(e) {
        var t = e.children;
        return (0, c.jsx)(i.Z, {
          rowGap: [3, 5, 6],
          children: n.Children.map(t, function (e, t) {
            return (0, c.jsx)(o.Z, { width: [1, 0.5, 1 / 3], children: e }, t);
          }),
        });
      }
      (a.defaultProps = {}), (t.Z = a);
    },
    58676: function (e, t, r) {
      'use strict';
      var n = r(92809),
        i = r(10219),
        o = (r(67294), r(53290)),
        c = r(22328),
        a = r(85893),
        s = ['children'];
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.children,
          r = (0, i.Z)(e, s);
        return (0, a.jsx)(
          o.Z,
          l(
            l({ backgroundColor: 'purple020', paddingY: [10, 10, 13] }, r),
            {},
            { children: (0, a.jsx)(c.Z, { children: t }) }
          )
        );
      };
    },
    84272: function (e, t, r) {
      'use strict';
      var n = r(92809),
        i = r(10219),
        o = (r(67294), r(53290)),
        c = r(25675),
        a = r(85893),
        s = ['asset', 'variant', 'className', 'priority', 'quality', 'wrap'];
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var p = {
        imageDownloadVariant: 4 / 3,
        imageSquareVariant: 1,
        imageWidescreenVariant: 9 / 16,
      };
      function f(e) {
        var t = e.src;
        e.width, e.quality;
        return t.replace(
          'https://usprosperity.vercel.app/_s3/',
          'https://usprosperity.vercel.app/_s3/'
        );
      }
      t.Z = function (e) {
        var t,
          r = e.asset,
          n = e.variant,
          u = (e.className, e.priority),
          d = e.quality,
          g = void 0 === d ? 100 : d,
          j = e.wrap,
          O = void 0 === j || j,
          b = (0, i.Z)(e, s);
        if (!r) return null;
        var h = r.title,
          y = r.width,
          v = r.height,
          w = r.focalPoint,
          m = void 0 === w ? [0.5, 0.5] : w,
          P = r.mimeType,
          x = null !== (t = p[n]) && void 0 !== t ? t : v / y,
          Z = r.url.replace(
            'legatuminstitute-uspiwebsite.s3',
            'legatuminstitute-uspiwebsite-2.s3'
          ),
          D = 'image/svg+xml' === P || 'image/svg' === P;
        D && (O = !1);
        var S = D
            ? { width: y, height: v, unoptimized: !0 }
            : { layout: 'fill', objectFit: 'cover' },
          k = (0, a.jsx)(
            c.default,
            l(
              l(
                {
                  src: Z,
                  alt: h,
                  objectPosition: m
                    .map(function (e) {
                      return ''.concat(100 * e, '%');
                    })
                    .join(' '),
                  priority: u,
                  quality: g,
                },
                S
              ),
              {},
              { loader: f }
            )
          );
        return O
          ? (0, a.jsx)(
              o.Z,
              l(
                l(
                  {
                    position: 'relative',
                    paddingBottom: ''.concat(100 * x, '%'),
                    overflow: 'hidden',
                  },
                  b
                ),
                {},
                { children: k }
              )
            )
          : k;
      };
    },
    64655: function (e, t, r) {
      'use strict';
      r(67294);
      var n = r(25770),
        i = r(97023),
        o = r(48860),
        c = r(68608),
        a = r(22328),
        s = r(85893);
      function u(e) {
        var t = e.introHeading,
          r = e.introSubheading,
          u = e.introText;
        return (0, s.jsx)(a.Z, {
          marginTop: [0, 8],
          children: (0, s.jsxs)(n.Z, {
            children: [
              (0, s.jsxs)(i.Z, {
                width: [1, 0.5],
                children: [
                  (0, s.jsx)(o.Z, { variant: 'largeHeading', children: t }),
                  r &&
                    (0, s.jsx)(o.Z, {
                      variant: 'eyebrow',
                      color: 'purple070',
                      children: r,
                    }),
                ],
              }),
              (0, s.jsx)(i.Z, {
                width: [1, 0.5],
                marginTop: [8, 0],
                children: u && (0, s.jsx)(c.Z, { rawHtml: u }),
              }),
            ],
          }),
        });
      }
      (u.defaultProps = {}), (t.Z = u);
    },
    60222: function (e, t, r) {
      'use strict';
      var n = r(92809),
        i = (r(67294), r(64381)),
        o = r(85893);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        return (0, o.jsx)(
          i.Z,
          a(
            a({ width: '0.375em', height: '0.625rem' }, e),
            {},
            {
              children: (0, o.jsx)('svg', {
                viewBox: '0 0 6 10',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, o.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d:
                    'M.292893.292893c.390524-.3905241 1.023687-.3905241 1.414217 0l4 3.999997c.39052.39053.39052 1.02369 0 1.41422l-4 4c-.39053.39049-1.023693.39049-1.414217 0-.3905241-.39053-.3905241-1.02369 0-1.41422L3.58579 5 .292893 1.70711c-.3905241-.39053-.3905241-1.023693 0-1.414217z',
                  fill: 'currentColor',
                }),
              }),
            }
          )
        );
      };
    },
    37676: function (e, t, r) {
      'use strict';
      var n = r(92809),
        i = r(10219),
        o = (r(67294), r(48860)),
        c = r(41664),
        a = r(8880),
        s = r(84272),
        u = r(60222),
        l = r(53290),
        p = r(58804),
        f = r(57294),
        d = r(85893),
        g = [
          'href',
          'as',
          'actionText',
          'title',
          'regionSlogan',
          'metaImage',
          'metaDescription',
          'setOpen',
        ];
      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var b = (0, p.ZP)(s.Z).withConfig({
          displayName: 'StateMapPageLink__StyledOptimisedImage',
          componentId: 'sc-89jtuc-0',
        })(['']),
        h = (0, p.ZP)(a.Z).withConfig({
          displayName: 'StateMapPageLink__StateMapPageLinkAnchor',
          componentId: 'sc-89jtuc-1',
        })(
          [
            '@supports (display:flex){display:flex;flex-direction:column;flex-grow:1;min-height:100%;}',
            '{transform:scale(0.95);transition:transform 640ms cubic-bezier(0.46,0.03,0.52,0.96);}&:hover ',
            '{transform:scale(1);}',
          ],
          b,
          b
        );
      t.Z = function (e) {
        var t = e.href,
          r = e.as,
          n = e.actionText,
          a = e.title,
          s = e.regionSlogan,
          p = e.metaImage,
          j = (e.metaDescription, e.setOpen),
          y = (0, i.Z)(e, g);
        return (0, d.jsx)(c.default, {
          href: t,
          as: r,
          passHref: !0,
          children: (0, d.jsxs)(
            h,
            O(
              O(
                {
                  onClick: function () {
                    return j && j(!1);
                  },
                },
                y
              ),
              {},
              {
                children: [
                  (0, d.jsxs)(l.Z, {
                    flexGrow: 1,
                    children: [
                      (0, d.jsx)(o.Z, { variant: 'heading', children: a }),
                      s &&
                        (0, d.jsx)(o.Z, {
                          variant: 'eyebrow',
                          color: 'purple070',
                          children: s,
                        }),
                      (0, d.jsx)(l.Z, {
                        marginY: 7,
                        children: (0, d.jsx)(b, {
                          asset: (0, f.Z)(p),
                          variant: 'imageStandardVariant',
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(l.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'medium',
                    children: [
                      (0, d.jsx)(o.Z, { marginRight: 2, children: n }),
                      (0, d.jsx)(u.Z, {}),
                    ],
                  }),
                ],
              }
            )
          ),
        });
      };
    },
    57294: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(1469),
        i = r.n(n),
        o = r(8804),
        c = r.n(o);
      function a(e) {
        return i()(e) ? c()(e) : e;
      }
    },
    7278: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return g;
          },
        });
      var n = r(92809),
        i = (r(67294), r(53290)),
        o = r(64655),
        c = r(58676),
        a = r(91785),
        s = r(35161),
        u = r.n(s),
        l = r(37676),
        p = r(85893);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var g = !0;
      t.default = function (e) {
        var t = e.entry,
          r = e.countyPages;
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(i.Z, {
              paddingY: 8,
              children: (0, p.jsx)(o.Z, d({}, t)),
            }),
            (0, p.jsx)(c.Z, {
              children: (0, p.jsx)(a.Z, {
                children: u()(r, function (e, t) {
                  var r = e.slug;
                  return (0,
                  p.jsx)(l.Z, d({ display: 'block', backgroundColor: 'white', padding: 7, borderRadius: 2, href: '/rankings/county-by-county/[slug]', as: '/rankings/county-by-county/'.concat(r), actionText: 'Explore rankings' }, e), t);
                }),
              }),
            }),
          ],
        });
      };
    },
    61615: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/rankings/county-by-county',
        function () {
          return r(7278);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return (t = 61615), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
