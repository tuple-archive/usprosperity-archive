'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9],
  {
    74388: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return S;
        },
      });
      var n = t(92809),
        i = (t(67294), t(48860)),
        o = t(53290),
        c = (t(41664), t(22328)),
        a = t(97023),
        s = t(25770),
        l = t(68608),
        u = t(84272),
        p = t(58804),
        d = t(75980),
        f = (t(8880), t(1469), t(57294)),
        h = t(10219),
        g = t(72912),
        j = t(40694),
        O = t(85893),
        b = ['typeHandle', 'text', 'entry', 'externalUrl'];
      function v(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function y(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? v(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var m = function (e) {
        e.typeHandle;
        var r = e.text,
          t = e.entry,
          n = e.externalUrl,
          i = (0, h.Z)(e, b);
        if (t) {
          var o = (0, f.Z)(t).uri;
          return (0, O.jsx)(g.Z, {
            href: '/'.concat(o),
            children: (0, O.jsx)(
              j.Z,
              y(y({ as: 'div' }, i), {}, { children: r })
            ),
          });
        }
        return (0, O.jsx)(g.Z, {
          href: n,
          target: '_blank',
          children: (0, O.jsx)(
            j.Z,
            y(y({ as: 'div' }, i), {}, { children: r })
          ),
        });
      };
      function x(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function w(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? x(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var Z = (0, p.ZP)(o.Z).withConfig({
          displayName: 'Banner__BannerWrapper',
          componentId: 'sc-41tkuv-0',
        })(
          (0, d.bU)({
            variants: {
              oldGloryBlue: {
                color: 'purple010',
                backgroundColor: 'purple100',
              },
              white: { backgroundColor: 'white' },
            },
          })
        ),
        P = function (e) {
          var r = e.bannerHeading,
            t = e.bannerText,
            n = e.bannerButton,
            p = e.bannerTheme,
            d = e.bannerImage;
          return (0, O.jsx)(Z, {
            variant: p,
            textAlign: ['center', 'center', 'left'],
            position: 'relative',
            paddingY: [5, 8, 10],
            children: (0, O.jsx)(c.Z, {
              children: (0, O.jsxs)(s.Z, {
                rowGap: 0,
                children: [
                  (0, O.jsx)(a.Z, {
                    width: [1, 1, 0.5],
                    display: 'flex',
                    alignItems: 'center',
                    children: (0, O.jsx)(s.Z, {
                      justifyContent: ['start', 'center', 'start'],
                      children: (0, O.jsx)(a.Z, {
                        width: [1, 8 / 12, 5 / 6],
                        children: (0, O.jsxs)(o.Z, {
                          paddingY: [8, 8, 10],
                          children: [
                            (0, O.jsx)(i.Z, {
                              variant: 'title',
                              marginBottom: 4,
                              children: r,
                            }),
                            (0, O.jsx)(l.Z, { rawHtml: t }),
                            (0, O.jsx)(
                              m,
                              w(
                                w({}, (0, f.Z)(n)),
                                {},
                                {
                                  marginTop: 7,
                                  variant: 'white' === p ? 'purple' : 'white',
                                }
                              )
                            ),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, O.jsx)(a.Z, {
                    width: [1, 1, 0.5],
                    display: 'flex',
                    alignItems: 'center',
                    children: (0, O.jsx)(o.Z, {
                      width: '100%',
                      children: (0, O.jsx)(u.Z, {
                        asset: (0, f.Z)(d),
                        variant: 'imageStandardVariant',
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      function k(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function D(e) {
        var r = e.banners;
        return (0, O.jsx)(O.Fragment, {
          children: [].concat(r).map(function (e) {
            return (0, O.jsx)(
              P,
              (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? k(Object(t), !0).forEach(function (r) {
                        (0, n.Z)(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : k(Object(t)).forEach(function (r) {
                        Object.defineProperty(
                          e,
                          r,
                          Object.getOwnPropertyDescriptor(t, r)
                        );
                      });
                }
                return e;
              })({}, e),
              e.id
            );
          }),
        });
      }
      D.defaultProps = {};
      var S = D;
    },
    40694: function (e, r, t) {
      var n = t(92809),
        i = t(10219),
        o = t(67294),
        c = t(48860),
        a = t(53290),
        s = t(58804),
        l = t(75980),
        u = t(85893),
        p = ['children'];
      function d(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? d(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var h = (0, o.forwardRef)(function (e, r) {
        var t = e.children,
          n = (0, i.Z)(e, p);
        return (0,
        u.jsx)(g, f(f({ ref: r }, n), {}, { children: (0, u.jsx)(c.Z, { variant: 'eyebrow', children: t }) }));
      });
      h.defaultProps = {
        as: 'a',
        display: 'inline-block',
        paddingY: 4,
        paddingX: 6,
        borderRadius: 1,
        variant: 'purple',
      };
      var g = (0, s.ZP)(a.Z).withConfig({
        displayName: 'Button__Wrapper',
        componentId: 'sc-opf8cr-0',
      })(
        ['', ''],
        (0, l.bU)({
          variants: {
            purple: {
              color: 'purple010',
              backgroundColor: 'purple100',
              '&:hover': { backgroundColor: 'purple090' },
            },
            white: {
              color: 'purple100',
              backgroundColor: 'purple010',
              '&:hover': { backgroundColor: 'purple020' },
            },
            muted: {
              backgroundColor: 'purple020',
              '&:hover': { backgroundColor: 'purple030' },
            },
          },
        })
      );
      r.Z = h;
    },
    40984: function (e, r, t) {
      var n = t(92809),
        i = (t(67294), t(53290)),
        o = t(85893);
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function s(e) {
        return (0, o.jsx)(
          i.Z,
          a(
            a({ width: '1.375rem', height: '1.375rem' }, e),
            {},
            {
              children: (0, o.jsxs)('svg', {
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 22 22',
                children: [
                  (0, o.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M6.29289 10.2929c.39053-.39053 1.02369-.39053 1.41422 0L11 13.5858l3.2929-3.2929c.3905-.39053 1.0237-.39053 1.4142 0 .3905.3905.3905 1.0237 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0l-4.00001-4c-.39052-.3905-.39052-1.0237 0-1.4142z',
                    fill: 'currentColor',
                  }),
                  (0, o.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M11 2c-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9zM0 11C0 4.92487 4.92487 0 11 0c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11-6.07513 0-11-4.9249-11-11z',
                    fill: 'currentColor',
                  }),
                  (0, o.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M11 6c.5523 0 1 .44772 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.55228.4477-1 1-1z',
                    fill: 'currentColor',
                  }),
                ],
              }),
            }
          )
        );
      }
      (s.defaultProps = {}), (r.Z = s);
    },
    89358: function (e, r, t) {
      t(67294);
      var n = t(58804).ZP.span.withConfig({
        displayName: 'NoWrap',
        componentId: 'sc-14ydv6x-0',
      })(['white-space:nowrap;']);
      r.Z = n;
    },
    84272: function (e, r, t) {
      var n = t(92809),
        i = t(10219),
        o = (t(67294), t(53290)),
        c = t(25675),
        a = t(85893),
        s = ['asset', 'variant', 'className', 'priority', 'quality', 'wrap'];
      function l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
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
      function d(e) {
        var r = e.src;
        e.width, e.quality;
        return r.replace(
          '/_s3/',
          '/_s3/'
        );
      }
      r.Z = function (e) {
        var r,
          t = e.asset,
          n = e.variant,
          l = (e.className, e.priority),
          f = e.quality,
          h = void 0 === f ? 100 : f,
          g = e.wrap,
          j = void 0 === g || g,
          O = (0, i.Z)(e, s);
        if (!t) return null;
        var b = t.title,
          v = t.width,
          y = t.height,
          m = t.focalPoint,
          x = void 0 === m ? [0.5, 0.5] : m,
          w = t.mimeType,
          Z = null !== (r = p[n]) && void 0 !== r ? r : y / v,
          P = t.url.replace(
            'legatuminstitute-uspiwebsite.s3',
            'legatuminstitute-uspiwebsite-2.s3'
          ),
          k = 'image/svg+xml' === w || 'image/svg' === w;
        k && (j = !1);
        var D = k
            ? { width: v, height: y, unoptimized: !0 }
            : { layout: 'fill', objectFit: 'cover' },
          S = (0, a.jsx)(
            c.default,
            u(
              u(
                {
                  src: P,
                  alt: b,
                  objectPosition: x
                    .map(function (e) {
                      return ''.concat(100 * e, '%');
                    })
                    .join(' '),
                  priority: l,
                  quality: h,
                },
                D
              ),
              {},
              { loader: d }
            )
          );
        return j
          ? (0, a.jsx)(
              o.Z,
              u(
                u(
                  {
                    position: 'relative',
                    paddingBottom: ''.concat(100 * Z, '%'),
                    overflow: 'hidden',
                  },
                  O
                ),
                {},
                { children: S }
              )
            )
          : S;
      };
    },
    60222: function (e, r, t) {
      var n = t(92809),
        i = (t(67294), t(64381)),
        o = t(85893);
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      r.Z = function (e) {
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
    37676: function (e, r, t) {
      var n = t(92809),
        i = t(10219),
        o = (t(67294), t(48860)),
        c = t(41664),
        a = t(8880),
        s = t(84272),
        l = t(60222),
        u = t(53290),
        p = t(58804),
        d = t(57294),
        f = t(85893),
        h = [
          'href',
          'as',
          'actionText',
          'title',
          'regionSlogan',
          'metaImage',
          'metaDescription',
          'setOpen',
        ];
      function g(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function j(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? g(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var O = (0, p.ZP)(s.Z).withConfig({
          displayName: 'StateMapPageLink__StyledOptimisedImage',
          componentId: 'sc-89jtuc-0',
        })(['']),
        b = (0, p.ZP)(a.Z).withConfig({
          displayName: 'StateMapPageLink__StateMapPageLinkAnchor',
          componentId: 'sc-89jtuc-1',
        })(
          [
            '@supports (display:flex){display:flex;flex-direction:column;flex-grow:1;min-height:100%;}',
            '{transform:scale(0.95);transition:transform 640ms cubic-bezier(0.46,0.03,0.52,0.96);}&:hover ',
            '{transform:scale(1);}',
          ],
          O,
          O
        );
      r.Z = function (e) {
        var r = e.href,
          t = e.as,
          n = e.actionText,
          a = e.title,
          s = e.regionSlogan,
          p = e.metaImage,
          g = (e.metaDescription, e.setOpen),
          v = (0, i.Z)(e, h);
        return (0, f.jsx)(c.default, {
          href: r,
          as: t,
          passHref: !0,
          children: (0, f.jsxs)(
            b,
            j(
              j(
                {
                  onClick: function () {
                    return g && g(!1);
                  },
                },
                v
              ),
              {},
              {
                children: [
                  (0, f.jsxs)(u.Z, {
                    flexGrow: 1,
                    children: [
                      (0, f.jsx)(o.Z, { variant: 'heading', children: a }),
                      s &&
                        (0, f.jsx)(o.Z, {
                          variant: 'eyebrow',
                          color: 'purple070',
                          children: s,
                        }),
                      (0, f.jsx)(u.Z, {
                        marginY: 7,
                        children: (0, f.jsx)(O, {
                          asset: (0, d.Z)(p),
                          variant: 'imageStandardVariant',
                        }),
                      }),
                    ],
                  }),
                  (0, f.jsxs)(u.Z, {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'medium',
                    children: [
                      (0, f.jsx)(o.Z, { marginRight: 2, children: n }),
                      (0, f.jsx)(l.Z, {}),
                    ],
                  }),
                ],
              }
            )
          ),
        });
      };
    },
    79968: function (e, r, t) {
      t.d(r, {
        S: function () {
          return i;
        },
        v: function () {
          return o;
        },
      });
      var n = {
          AL: 'Alabama',
          AK: 'Alaska',
          AS: 'American Samoa',
          AZ: 'Arizona',
          AR: 'Arkansas',
          CA: 'California',
          CO: 'Colorado',
          CT: 'Connecticut',
          DE: 'Delaware',
          DC: 'District Of Columbia',
          FM: 'Federated States Of Micronesia',
          FL: 'Florida',
          GA: 'Georgia',
          GU: 'Guam',
          HI: 'Hawaii',
          ID: 'Idaho',
          IL: 'Illinois',
          IN: 'Indiana',
          IA: 'Iowa',
          KS: 'Kansas',
          KY: 'Kentucky',
          LA: 'Louisiana',
          ME: 'Maine',
          MH: 'Marshall Islands',
          MD: 'Maryland',
          MA: 'Massachusetts',
          MI: 'Michigan',
          MN: 'Minnesota',
          MS: 'Mississippi',
          MO: 'Missouri',
          MT: 'Montana',
          NE: 'Nebraska',
          NV: 'Nevada',
          NH: 'New Hampshire',
          NJ: 'New Jersey',
          NM: 'New Mexico',
          NY: 'New York',
          NC: 'North Carolina',
          ND: 'North Dakota',
          MP: 'Northern Mariana Islands',
          OH: 'Ohio',
          OK: 'Oklahoma',
          OR: 'Oregon',
          PW: 'Palau',
          PA: 'Pennsylvania',
          PR: 'Puerto Rico',
          RI: 'Rhode Island',
          SC: 'South Carolina',
          SD: 'South Dakota',
          TN: 'Tennessee',
          TX: 'Texas',
          UT: 'Utah',
          VT: 'Vermont',
          VI: 'Virgin Islands',
          VA: 'Virginia',
          WA: 'Washington',
          WV: 'West Virginia',
          WI: 'Wisconsin',
          WY: 'Wyoming',
        },
        i = function (e) {
          return e.title;
        },
        o = function (e) {
          var r = e.filename
            .replace(/\.(.+)$/, '')
            .replace(/([a-z\d])-([a-z\d])/gi, '$1 $2')
            .replace(/_/g, ' ')
            .replace(/\s+/g, ' ');
          return (
            Object.values(n).forEach(function (e) {
              r = r.replace('-'.concat(e), ' - '.concat(e));
            }),
            (r = r.replace(/De Soto/g, 'DeSoto'))
          );
        };
    },
    57294: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var n = t(1469),
        i = t.n(n),
        o = t(8804),
        c = t.n(o);
      function a(e) {
        return i()(e) ? c()(e) : e;
      }
    },
    57009: function (e, r, t) {
      t.r(r),
        t.d(r, {
          __N_SSG: function () {
            return Je;
          },
          default: function () {
            return rr;
          },
          getStaticMapProps: function () {
            return Qe;
          },
        });
      var n = t(30266),
        i = t(92809),
        o = t(80318),
        c = t(809),
        a = t.n(c),
        s = t(27361),
        l = t.n(s),
        u = t(24350),
        p = t.n(u),
        d = t(41664),
        f = t(11163),
        h = t(83300),
        g = t.n(h),
        j = t(67294),
        O = t(19302),
        b = t(71780),
        v = t(48860),
        y = t(53290),
        m = t(80601),
        x = t(8880),
        w = t(58804),
        Z = t(28670),
        P = t.n(Z),
        k = t(10219),
        D = t(64381),
        S = t(85893),
        C = ['circleFill'];
      function M(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function R(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? M(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function E(e) {
        var r = e.circleFill,
          t = (0, k.Z)(e, C);
        return (0, S.jsx)(
          D.Z,
          R(
            R({ width: '1.125rem', height: '1.125rem' }, t),
            {},
            {
              children: (0, S.jsxs)('svg', {
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 18 18',
                children: [
                  (0, S.jsx)('path', {
                    d:
                      'M17 9c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8z',
                    fill: '#fff',
                  }),
                  (0, S.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d:
                      'M18 9c0 4.9706-4.0294 9-9 9-4.97056 0-9-4.0294-9-9 0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9zm-9 8c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8z',
                    fill: '#000',
                    fillOpacity: '.1',
                  }),
                  (0, S.jsx)('circle', { cx: '9', cy: '9', r: '4', fill: r }),
                ],
              }),
            }
          )
        );
      }
      E.defaultProps = { circleFill: 'currentColor' };
      var A = E;
      function I(e) {
        var r = e.accessor,
          t = e.active,
          n = e.setAccessor,
          i = (e.setOpen, (0, m.R$)(r)),
          o = (0, j.useMemo)(
            function () {
              return P()(i).brighten(0.17);
            },
            [r]
          ),
          c = (0, j.useMemo)(
            function () {
              return P()(i).darken(2);
            },
            [r]
          );
        return (0, S.jsxs)(T, {
          href: '#',
          display: 'flex',
          alignItems: 'center',
          paddingY: 4,
          paddingX: 5,
          fontSize: 1,
          fontWeight: 'medium',
          borderRadius: 2,
          backgroundColor: (0, m.R$)(r),
          hoverBackgroundColor: o,
          onClick: function (e) {
            e.preventDefault(), n(r);
          },
          marginBottom: 3,
          children: [
            r,
            (0, S.jsx)(A, { marginLeft: 'auto', circleFill: t ? c : 'white' }),
          ],
        });
      }
      var T = (0, w.ZP)(x.Z).withConfig({
          displayName: 'AccessorsDrawerContent__AccessorOptionAnchor',
          componentId: 'sc-1iunkz8-0',
        })(['&:hover{background-color:', ';}'], function (e) {
          return e.hoverBackgroundColor;
        }),
        N = function (e) {
          var r = e.setOpen,
            t = e.accessorOptions,
            n = e.currentAccessor,
            i = e.setAccessor;
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(b.Z, {
                setOpen: r,
                children: (0, S.jsx)(v.Z, {
                  variant: 'heading',
                  children: 'Select View',
                }),
              }),
              (0, S.jsx)(y.Z, {
                padding: 8,
                children: t.map(function (e) {
                  return (0,
                  S.jsx)(I, { accessor: e, active: e === n, setAccessor: i }, e);
                }),
              }),
            ],
          });
        },
        B = t(74388),
        z = t(22328),
        L = t(75396),
        _ = t(25770),
        H = t(97023),
        W = t(71710),
        F = t(15653),
        V = t(1845),
        Y = t(31736),
        G = t(13861),
        K = t(74765),
        U = t(30725);
      function X(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function $(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? X(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var q = function (e) {
        return (0, S.jsx)(
          D.Z,
          $(
            $({ width: '1.875rem', height: '1.875rem' }, e),
            {},
            {
              children: (0, S.jsxs)('svg', {
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 30 30',
                children: [
                  (0, S.jsx)('path', {
                    d:
                      'M15 30c8.2843 0 15-6.7157 15-15 0-8.28427-6.7157-15-15-15C6.71573 0 0 6.71573 0 15c0 8.2843 6.71573 15 15 15z',
                    fill: U.Z.colors.purple020,
                  }),
                  (0, S.jsx)('path', {
                    d:
                      'M16 11c0-.5523-.4477-1-1-1s-1 .4477-1 1v3h-3c-.5523 0-1 .4477-1 1s.4477 1 1 1h3v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3h3c.5523 0 1-.4477 1-1s-.4477-1-1-1h-3v-3z',
                    fill: U.Z.colors.purple100,
                  }),
                ],
              }),
            }
          )
        );
      };
      function J(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Q(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? J(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var ee = function (e) {
          return (0, S.jsx)(
            D.Z,
            Q(
              Q({ width: '1.875rem', height: '1.875rem' }, e),
              {},
              {
                children: (0, S.jsxs)('svg', {
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 30 30',
                  children: [
                    (0, S.jsx)('path', {
                      d:
                        'M15 30c8.2843 0 15-6.7157 15-15 0-8.28427-6.7157-15-15-15C6.71573 0 0 6.71573 0 15c0 8.2843 6.71573 15 15 15z',
                      fill: U.Z.colors.purple020,
                    }),
                    (0, S.jsx)('path', {
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      d:
                        'M10 15c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1z',
                      fill: U.Z.colors.purple100,
                    }),
                  ],
                }),
              }
            )
          );
        },
        re = t(11029);
      function te(e) {
        var r = e.svgRef,
          t = e.tooltipContent,
          n = e.onMouseOverSvg,
          i = e.onMouseOutSvg,
          o = e.svgContents,
          c = e.onClickSvg,
          a = (0, j.useState)({}),
          s = a[0],
          l = a[1],
          u = function (e) {
            var r = e.nativeEvent,
              t = r.clientX,
              n = r.clientY;
            c && s.clientX - t < 8 && s.clientY - n < 8 && c(e);
          };
        return (0, S.jsxs)(y.Z, {
          position: 'relative',
          onMouseDown: function (e) {
            var r = e.nativeEvent,
              t = r.clientX,
              n = r.clientY;
            l({ clientX: t, clientY: n });
          },
          children: [
            (0, S.jsx)(K.d, {
              style: { width: '100%' },
              wheel: { wheelEnabled: !1 },
              children: function (e) {
                var t = e.zoomIn,
                  c = e.zoomOut;
                return (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsx)(K.U, {
                      style: { minWidth: '100%' },
                      children: (0, S.jsx)(ne, {
                        ref: r,
                        dangerouslySetInnerHTML: { __html: o },
                        onMouseOver: n,
                        onMouseOut: i,
                        onClick: u,
                      }),
                    }),
                    (0, S.jsxs)(y.Z, {
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      children: [
                        (0, S.jsxs)(x.Z, {
                          display: 'block',
                          href: '#',
                          onClick: function (e) {
                            e.preventDefault(), t(e);
                          },
                          children: [
                            (0, S.jsx)(q, {}),
                            (0, S.jsx)(re.Z, { children: 'Zoom In' }),
                          ],
                        }),
                        (0, S.jsxs)(x.Z, {
                          display: 'block',
                          href: '#',
                          marginTop: 2,
                          onClick: function (e) {
                            e.preventDefault(), c(e);
                          },
                          children: [
                            (0, S.jsx)(ee, {}),
                            (0, S.jsx)(re.Z, { children: 'Zoom Out' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              },
            }),
            (0, S.jsx)(Y.ZP, {
              content: t,
              visible: !!t,
              followCursor: !0,
              touch: !1,
              plugins: [G.Cv],
            }),
          ],
        });
      }
      te.defaultProps = {};
      var ne = (0, w.ZP)(y.Z).withConfig({
          displayName: 'InteractiveMap__MapSvgContainer',
          componentId: 'sc-12xb92j-0',
        })([
          'svg{display:block;max-width:100% !important;pointer-events:none;}',
        ]),
        ie = te,
        oe = ['color', 'children'];
      function ce(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function ae(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ce(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ce(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function se(e) {
        var r = e.color,
          t = e.children,
          n = (0, k.Z)(e, oe);
        return (0, S.jsxs)(
          y.Z,
          ae(
            ae({ display: 'flex', alignItems: 'center' }, n),
            {},
            {
              children: [
                (0, S.jsx)(y.Z, {
                  width: '0.75rem',
                  height: '0.75rem',
                  marginRight: 1,
                  borderRadius: '50%',
                  backgroundColor: r,
                }),
                t,
              ],
            }
          )
        );
      }
      var le = function (e) {
          var r = e.heading,
            t = e.values;
          return (0, S.jsxs)(y.Z, {
            display: 'flex',
            fontSize: 1,
            fontWeight: 'medium',
            children: [
              r && (0, S.jsx)('div', { children: r }),
              (0, S.jsx)(se, { color: 'rank1', marginLeft: 6, children: t[0] }),
              (0, S.jsx)(se, { color: 'rank2', marginLeft: 6, children: t[1] }),
              (0, S.jsx)(se, { color: 'rank3', marginLeft: 6, children: t[2] }),
              (0, S.jsx)(se, { color: 'rank4', marginLeft: 6, children: t[3] }),
              (0, S.jsx)(se, { color: 'rank5', marginLeft: 6, children: t[4] }),
            ],
          });
        },
        ue = t(68608);
      var pe = function (e) {
          var r = e.introHeading,
            t = e.introSubheading,
            n = e.introText;
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(v.Z, { variant: 'heading', children: r }),
              t &&
                (0, S.jsx)(v.Z, {
                  variant: 'heading',
                  color: 'purple070',
                  children: t,
                }),
              n && (0, S.jsx)(ue.Z, { rawHtml: n, marginTop: 4 }),
            ],
          });
        },
        de = t(83789),
        fe = t(56755),
        he = t.n(fe),
        ge = t(8804),
        je = t.n(ge),
        Oe = t(10928),
        be = t.n(Oe),
        ve = t(79968),
        ye = t(57294),
        me = t(72421),
        xe = t(40984),
        we = t(89358),
        Ze = t(48610),
        Pe = t(35161),
        ke = t.n(Pe),
        De = ['data', 'region', 'accessor', 'avgTitle'];
      function Se(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Ce(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Se(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Se(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function Me(e) {
        var r = e.data,
          t = e.region,
          n = e.accessor,
          i = e.avgTitle,
          o = void 0 === i ? 'U.S. Avg.' : i,
          c = (0, k.Z)(e, De),
          a = (0, j.useMemo)(
            function () {
              var e = t.regionId,
                i = r.keys,
                o = r.averageScores,
                c = r.regionScores;
              return ke()(i, function (r, t) {
                return {
                  label: r,
                  region: l()(c, [e, n, t]),
                  average: l()(o, [n, t]),
                };
              });
            },
            [r, t, n]
          );
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(y.Z, {
              display: 'flex',
              fontSize: 1,
              fontWeight: 'medium',
              marginBottom: 1,
              children: (0, S.jsxs)(y.Z, {
                display: 'flex',
                marginLeft: 'auto',
                children: [
                  (0, S.jsx)(se, { color: '#5D5BB1', children: t.regionTitle }),
                  (0, S.jsx)(se, {
                    color: '#B22234',
                    marginLeft: 4,
                    children: (0, S.jsx)(y.Z, {
                      as: 'span',
                      sx: { whiteSpace: 'nowrap' },
                      children: o,
                    }),
                  }),
                ],
              }),
            }),
            (0, S.jsxs)(
              y.Z,
              Ce(
                Ce(
                  {
                    position: 'relative',
                    fontSize: '0.75rem',
                    fontWeight: 'medium',
                  },
                  c
                ),
                {},
                {
                  children: [
                    (0, S.jsx)(y.Z, {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      children: (0, S.jsx)(Ze.h2, {
                        children: (0, S.jsxs)(Ze.wW, {
                          data: a,
                          children: [
                            (0, S.jsx)(Ze.x1, {
                              type: 'linear',
                              dataKey: 'region',
                              stroke: '#5D5BB1',
                              strokeWidth: 2,
                              dot: !1,
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              isAnimationActive: !1,
                            }),
                            (0, S.jsx)(Ze.x1, {
                              type: 'linear',
                              dataKey: 'average',
                              stroke: '#B22234',
                              strokeWidth: 2,
                              strokeDasharray: '5 5',
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              dot: !1,
                              isAnimationActive: !1,
                            }),
                            (0, S.jsx)(Ze.Kc, {
                              dataKey: 'label',
                              stroke: 'transparent',
                              tickMargin: 16,
                              interval: 'preserveStartEnd',
                              tick: { fill: U.Z.colors.purple070 },
                            }),
                            (0, S.jsx)(Ze.B2, {
                              stroke: 'transparent',
                              tickMargin: 16,
                              interval: 'preserveStartEnd',
                              tick: (0, S.jsx)(Re, {}),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, S.jsx)(y.Z, { paddingTop: '75%', bcColor: 'red' }),
                  ],
                }
              )
            ),
          ],
        });
      }
      function Re(e) {
        var r = e.y,
          t = e.payload;
        return (0, S.jsx)('g', {
          transform: 'translate('.concat(0, ',', r + 2, ')'),
          children: (0, S.jsx)('text', {
            x: 0,
            y: 0,
            textAnchor: 'start',
            fill: U.Z.colors.purple070,
            children: t.value,
          }),
        });
      }
      Me.defaultProps = {};
      var Ee = Me,
        Ae = t(37676),
        Ie = t(94752),
        Te = t(14366),
        Ne = t(64649);
      function Be(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function ze(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Be(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Be(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var Le = function (e) {
        var r = e.accessor;
        return ''.concat(r, ' Ranking');
      };
      function _e(e) {
        var r = e.data,
          t = e.region,
          n = e.accessor,
          i = e.setOpen,
          o = e.getAssetTitle,
          c = void 0 === o ? ve.S : o,
          a = e.getTableTitle,
          s = void 0 === a ? Le : a,
          u = e.chartAvgTitle;
        if (!t) return '';
        var p = t.regionId,
          d = t.regionTitle,
          f = t.regionSlogan,
          h = t.reportDownload,
          g = t.relatedMapPage,
          j = (0, m.FR)(n),
          O = (0, ye.Z)(g);
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsxs)(b.Z, {
              setOpen: i,
              children: [
                (0, S.jsx)(v.Z, { variant: 'heading', children: d }),
                f &&
                  (0, S.jsx)(v.Z, {
                    variant: 'eyebrow',
                    color: 'purple070',
                    display: ['none', 'block'],
                    children: f,
                  }),
              ],
            }),
            [].concat(h).map(function (e, r) {
              return (0,
              S.jsxs)(S.Fragment, { children: [(0, S.jsx)(x.Z, { href: e.url, target: '_blank', children: (0, S.jsxs)(y.Z, { display: 'flex', alignItems: 'center', paddingX: 8, paddingY: 5, fontSize: 1, fontWeight: 'medium', color: 'purple100', backgroundColor: 'purple010', children: [(0, S.jsxs)(y.Z, { marginRight: 'auto', children: [c(e), e.kind && (0, S.jsxs)(y.Z, { as: 'span', display: ['none', null, 'inline'], children: [' ', '(', e.kind.toUpperCase(), ')'] })] }), e.size && (0, S.jsx)(y.Z, { display: ['none', null, 'block'], marginRight: 4, children: (0, S.jsx)(we.Z, { children: he()(e.size) }) }), (0, S.jsx)(y.Z, { children: (0, S.jsx)(xe.Z, {}) })] }) }, r), (0, S.jsx)(me.Z, {})] });
            }),
            (0, S.jsxs)(y.Z, {
              padding: 8,
              children: [
                (0, S.jsxs)(y.Z, {
                  marginBottom: 6,
                  children: [
                    (0, S.jsx)(v.Z, {
                      variant: 'smallHeading',
                      display: [null, 'inline'],
                      children: n,
                    }),
                    ' ',
                    (0, S.jsx)(v.Z, {
                      variant: 'small',
                      color: 'purple060',
                      marginLeft: [null, 3],
                      display: [null, 'inline'],
                      children: '(10 year trend)',
                    }),
                  ],
                }),
                (0, S.jsx)(Ee, {
                  data: r,
                  region: t,
                  accessor: n,
                  avgTitle: u,
                }),
              ],
            }),
            (0, S.jsx)(me.Z, {}),
            (0, S.jsx)(y.Z, {
              paddingY: '2rem',
              children: (0, S.jsx)(Ne.Z, {
                children: (0, S.jsxs)(Ie.Z, {
                  children: [
                    (0, S.jsx)('thead', {
                      children: (0, S.jsxs)('tr', {
                        children: [
                          (0, S.jsx)(Te.Z, {
                            as: 'th',
                            variant: 'outsideHeader',
                            textAlign: 'left',
                            children: (0, S.jsx)(v.Z, {
                              variant: 'smallHeading',
                              children: s({ accessor: n }),
                            }),
                          }),
                          (0, S.jsx)(Te.Z, {
                            as: 'th',
                            variant: 'outsideHeader',
                            width: '6ch',
                            children: je()(l()(r, 'keys')),
                          }),
                          (0, S.jsx)(Te.Z, {
                            as: 'th',
                            variant: 'outsideHeader',
                            width: '6ch',
                            children: be()(l()(r, 'keys')),
                          }),
                        ],
                      }),
                    }),
                    (0, S.jsx)('tbody', {
                      children: [n].concat((0, de.Z)(j)).map(function (e) {
                        return (0,
                        S.jsxs)('tr', { children: [(0, S.jsx)(Te.Z, { variant: 'columnHeader', backgroundColor: (0, m.R$)(e), children: e }), (0, S.jsx)(Te.Z, { backgroundColor: (0, m.R$)(e), children: je()(l()(r, ['regionTableRanks', p, e], ['\u2013'])) }), (0, S.jsx)(Te.Z, { backgroundColor: (0, m.R$)(e), children: be()(l()(r, ['regionTableRanks', p, e], ['\u2013'])) })] }, e);
                      }),
                    }),
                  ],
                }),
              }),
            }),
            O &&
              (0, S.jsxs)(S.Fragment, {
                children: [
                  (0, S.jsx)(me.Z, {}),
                  (0, S.jsx)(y.Z, {
                    padding: 8,
                    children: (0, S.jsx)(
                      Ae.Z,
                      ze(
                        {
                          href: '/maps/county-by-county/[slug]',
                          as: '/maps/county-by-county/'.concat(O.slug),
                          actionText: 'Explore map',
                          setOpen: i,
                        },
                        O
                      )
                    ),
                  }),
                ],
              }),
          ],
        });
      }
      _e.defaultProps = {};
      var He = _e,
        We = t(60222),
        Fe = t(60235),
        Ve = t(32330);
      var Ye = t(84486),
        Ge = t.n(Ye),
        Ke = t(73929);
      function Ue(e) {
        var r = e.mapData,
          t = e.regions,
          n = e.initialAccessor,
          i = (0, j.useState)(n),
          o = i[0],
          c = i[1],
          a = function (e, r) {
            return l()(e, ['regionMapRanks', r, o]);
          },
          s = function (e, r) {
            return be()(a(e, r));
          },
          u = (function (e) {
            var r = e.mapData,
              t = (0, j.useMemo)(function () {
                return [
                  U.Z.colors.rank1,
                  U.Z.colors.rank2,
                  U.Z.colors.rank3,
                  U.Z.colors.rank4,
                  U.Z.colors.rank5,
                ];
              }, []);
            return {
              getRankColor: (0, j.useCallback)(
                function (e) {
                  return l()(t, [e - 1], U.Z.colors.purple030);
                },
                [r]
              ),
            };
          })({ mapData: r }).getRankColor,
          p = (0, j.useRef)(null);
        (0, j.useEffect)(
          function () {
            p.current &&
              t &&
              Ge()(t, function (e) {
                var t = e.regionId,
                  n = p.current.querySelector('#'.concat(t));
                if (n) {
                  var i = u(s(r, t));
                  n.setAttribute('fill', i),
                    (n.style.fill = i),
                    (n.style.cursor = 'pointer'),
                    (n.style.pointerEvents = 'auto');
                }
              });
          },
          [p.current, t]
        );
        var d = (0, j.useState)(null),
          f = d[0],
          h = d[1];
        return {
          accessor: o,
          data: r,
          getRank: s,
          getRankColor: u,
          getRankings: a,
          onMouseOutSvg: function () {
            return h(null);
          },
          onMouseOverSvg: function (e) {
            var n = e.target.id,
              i = e.target.parentNode.id,
              c = l()(t, n, l()(t, i));
            if (c) {
              var a = c.regionId,
                s = c.regionTitle;
              h(
                (0, S.jsxs)(Ke.Z, {
                  textAlign: 'center',
                  fontWeight: 'medium',
                  children: [
                    s,
                    (0, S.jsx)('br', {}),
                    'Rank: ',
                    be()(l()(r, ['regionTableRanks', a, o])),
                  ],
                })
              );
            }
          },
          setAccessor: c,
          setTooltipContent: h,
          svgRef: p,
          tooltipContent: f,
          regions: t,
        };
      }
      function Xe(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function $e(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Xe(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Xe(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var qe = [
        'Overall Prosperity',
        'Inclusive Societies',
        'Safety and Security',
        'Personal Freedom',
        'Governance',
        'Social Capital',
        'Open Economies',
        'Business Environment',
        'Infrastructure',
        'Economic Quality',
        'Empowered People',
        'Living Conditions',
        'Health',
        'Education',
        'Natural Environment',
      ];
      var Je = !0;
      function Qe(e) {
        return er.apply(this, arguments);
      }
      function er() {
        return (er = (0, n.Z)(
          a().mark(function e(r) {
            var t,
              n,
              i,
              o,
              c,
              s,
              u,
              p,
              d = arguments;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = d.length > 1 && void 0 !== d[1] ? d[1] : {}),
                      (n = r.entry),
                      (i = l()(n, ['mapData', 0, 'url'])),
                      (e.next = 5),
                      g()(i)
                    );
                  case 5:
                    return (o = e.sent), (e.next = 8), o.json();
                  case 8:
                    return (
                      (c = e.sent),
                      (s = l()(n, ['mapGraphic', 0, 'url'])),
                      (e.next = 12),
                      g()(s)
                    );
                  case 12:
                    return (u = e.sent), (e.next = 15), u.text();
                  case 15:
                    return (
                      (p = e.sent),
                      e.abrupt('return', {
                        props: $e(
                          $e({}, r),
                          {},
                          { mapData: c, mapGraphicContents: p, mapOptions: t }
                        ),
                      })
                    );
                  case 17:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var rr = function (e) {
        var r = e.entry,
          t = e.mapHowTo,
          n = e.mapGraphicContents,
          i = e.mapData,
          c = e.mapOptions,
          a = (0, f.useRouter)(),
          s = a.asPath.match(/^\/maps\/county-by-county/),
          u = r.pageBanners,
          h = c.chartAvgTitle,
          g = void 0 === h ? 'State Avg.' : h,
          b = p()(l()(r, 'mapRegions'), 'regionId'),
          m = Ue({ mapData: i, regions: b, initialAccessor: qe[0] }),
          w = m.accessor,
          Z = m.setAccessor,
          P = (0, j.useState)(!1),
          k = P[0],
          D = P[1],
          C = (0, j.useState)(!1),
          M = C[0],
          R = C[1],
          E = (0, j.useState)(null),
          A = E[0],
          I = E[1],
          T = (0, j.useState)(null),
          Y = T[0],
          G = T[1],
          K = (0, O.Z)(function (e) {
            D(e);
          }, 300),
          U = (0, o.Z)(K, 1)[0];
        (0, Ve.Z)(
          function () {
            return U(!1);
          },
          [w]
        );
        var X = a.asPath.includes('county-by-county')
          ? function () {
              return (0, S.jsxs)(S.Fragment, {
                children: ['County rankings within\xa0', r.title],
              });
            }
          : function (e) {
              var r = e.accessor;
              return ''.concat(r, ' Ranking');
            };
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsxs)(z.Z, {
              marginY: 8,
              children: [
                s &&
                  (0, S.jsx)(y.Z, {
                    display: ['none', null, 'block'],
                    marginBottom: 8,
                    children: (0, S.jsxs)(v.Z, {
                      variant: 'eyebrow',
                      children: [
                        (0, S.jsx)(d.default, {
                          href: '/maps/county-by-county',
                          as: '/maps/county-by-county',
                          passHref: !0,
                          children: (0, S.jsx)(x.Z, {
                            color: 'purple090',
                            children: 'County by County Maps',
                          }),
                        }),
                        (0, S.jsx)(We.Z, {
                          display: 'inline-block',
                          color: 'purple040',
                          marginX: 4,
                        }),
                        (0, S.jsx)(y.Z, {
                          as: 'span',
                          color: 'purple060',
                          children: r.title,
                        }),
                      ],
                    }),
                  }),
                (0, S.jsx)(y.Z, {
                  display: [null, null, 'none'],
                  marginBottom: 8,
                  children: (0, S.jsx)(pe, $e({}, r)),
                }),
                (0, S.jsxs)(y.Z, {
                  display: [null, 'flex'],
                  alignItems: 'center',
                  marginBottom: 8,
                  children: [
                    (0, S.jsx)(y.Z, {
                      children: (0, S.jsxs)(V.Z, {
                        href: '#',
                        onClick: function (e) {
                          e.preventDefault(), R(!0);
                        },
                        children: [
                          (0, S.jsx)(F.Z, { marginRight: 1 }),
                          t.howToHeading,
                        ],
                      }),
                    }),
                    (0, S.jsx)(y.Z, {
                      marginTop: [4, 0],
                      marginLeft: [null, 4],
                      children: (0, S.jsxs)(V.Z, {
                        href: '#',
                        variant: 'muted',
                        onClick: function (e) {
                          e.preventDefault(), D(!0);
                        },
                        children: [
                          (0, S.jsx)(v.Z, {
                            color: 'purple070',
                            marginRight: 1,
                            children: 'View',
                          }),
                          (0, S.jsx)(Fe.Z, { children: w }),
                        ],
                      }),
                    }),
                    (0, S.jsxs)(y.Z, {
                      display: ['none', null, 'block'],
                      marginLeft: 'auto',
                      children: [
                        s &&
                          (0, S.jsx)(le, {
                            heading: 'County Index Quintile',
                            values: ['1st', '2nd', '3rd', '4th', '5th'],
                          }),
                        !s &&
                          (0, S.jsx)(le, {
                            values: [
                              '1 \u2013 10',
                              '11 \u2013 20',
                              '21 \u2013 30',
                              '31 \u2013 40',
                              '41 \u2013 51',
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, S.jsxs)(_.Z, {
                  display: 'flex',
                  children: [
                    (0, S.jsx)(H.Z, {
                      width: [1, null, 0.25],
                      display: 'flex',
                      flexDirection: 'column',
                      children: (0, S.jsx)(y.Z, {
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1,
                        children: (0, S.jsx)(y.Z, {
                          display: ['none', null, 'block'],
                          children: (0, S.jsx)(pe, $e({}, r)),
                        }),
                      }),
                    }),
                    (0, S.jsx)(H.Z, {
                      width: [1, null, 0.75],
                      marginLeft: 'auto',
                      children: (0, S.jsx)(
                        ie,
                        $e(
                          {
                            svgContents: n,
                            onClickSvg: function (e) {
                              e.preventDefault();
                              var r = e.target.id,
                                t = e.target.parentNode.id,
                                n = l()(b, r, l()(b, t));
                              n && (I(n), G(!0));
                            },
                          },
                          m
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, S.jsx)(B.Z, { banners: u }),
            (0, S.jsx)(L.Z, {
              setOpen: R,
              open: M,
              children: (0, S.jsx)(W.Z, $e($e({}, t), {}, { setOpen: R })),
            }),
            (0, S.jsx)(L.Z, {
              setOpen: D,
              open: k,
              children: (0, S.jsx)(N, {
                currentAccessor: w,
                setOpen: D,
                accessorOptions: qe,
                setAccessor: Z,
              }),
            }),
            (0, S.jsx)(L.Z, {
              setOpen: G,
              open: Y,
              children: (0, S.jsx)(He, {
                setOpen: G,
                region: A,
                data: i,
                accessor: w,
                getAssetTitle: ve.v,
                getTableTitle: X,
                chartAvgTitle: g,
              }),
            }),
          ],
        });
      };
    },
  },
]);
