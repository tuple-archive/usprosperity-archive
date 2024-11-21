(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [754],
  {
    8804: function (e, r, t) {
      e.exports = t(91175);
    },
    91175: function (e) {
      e.exports = function (e) {
        return e && e.length ? e[0] : void 0;
      };
    },
    31024: function (e, r, t) {
      'use strict';
      t(67294);
      var n = t(53290),
        o = t(48860),
        i = t(30381),
        c = t.n(i),
        a = t(8804),
        s = t.n(a),
        u = t(84272),
        l = t(41664),
        p = t(57294),
        f = t(58804),
        d = t(37947),
        h = t(85893);
      var g = f.ZP.a.withConfig({
          displayName: 'Article__ArticleWrapper',
          componentId: 'sc-gunusp-0',
        })([
          '@supports (display:flex){display:flex;flex-direction:column;flex-grow:1;min-height:100%;}',
        ]),
        b = f.ZP.div.withConfig({
          displayName: 'Article__ArticleText',
          componentId: 'sc-gunusp-1',
        })(
          [
            '',
            ';@supports (display:flex){display:flex;flex-direction:column;flex-grow:1;}',
          ],
          (0, d.ZP)({
            backgroundColor: 'white',
            padding: 7,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
          })
        );
      r.Z = function (e) {
        var r = e.title,
          t = e.slug,
          i = e.postDate,
          a = e.articleCategory,
          f = e.metaImage,
          d = e.metaDescription,
          j = s()(a);
        return (0, h.jsx)(h.Fragment, {
          children: (0, h.jsx)(l.default, {
            href: '/articles/article/[slug]',
            as: '/articles/article/'.concat(t),
            passHref: !0,
            children: (0, h.jsxs)(g, {
              children: [
                (0, h.jsx)(u.Z, {
                  asset: (0, p.Z)(f),
                  variant: 'imageWidescreenVariant',
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  backgroundColor: 'purple030',
                }),
                (0, h.jsxs)(b, {
                  children: [
                    (0, h.jsx)(o.Z, { variant: 'heading', children: r }),
                    (0, h.jsx)(o.Z, {
                      marginBottom: 10,
                      color: 'purple070',
                      flexGrow: 1,
                      children: d,
                    }),
                    (0, h.jsxs)(n.Z, {
                      display: 'flex',
                      color: 'purple070',
                      children: [
                        (0, h.jsx)(o.Z, {
                          fontSize: 1,
                          children: c()(i).format('LL'),
                        }),
                        (0, h.jsx)(o.Z, {
                          variant: 'eyebrow',
                          fontSize: 1,
                          marginLeft: 'auto',
                          children:
                            null === j || void 0 === j ? void 0 : j.title,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    91785: function (e, r, t) {
      'use strict';
      var n = t(67294),
        o = t(25770),
        i = t(97023),
        c = t(85893);
      function a(e) {
        var r = e.children;
        return (0, c.jsx)(o.Z, {
          rowGap: [3, 5, 6],
          children: n.Children.map(r, function (e, r) {
            return (0, c.jsx)(i.Z, { width: [1, 0.5, 1 / 3], children: e }, r);
          }),
        });
      }
      (a.defaultProps = {}), (r.Z = a);
    },
    58676: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(53290)),
        c = t(22328),
        a = t(85893),
        s = ['children'];
      function u(e, r) {
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
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? u(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
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
        var r = e.children,
          t = (0, o.Z)(e, s);
        return (0, a.jsx)(
          i.Z,
          l(
            l({ backgroundColor: 'purple020', paddingY: [10, 10, 13] }, t),
            {},
            { children: (0, a.jsx)(c.Z, { children: r }) }
          )
        );
      };
    },
    40694: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = t(67294),
        c = t(48860),
        a = t(53290),
        s = t(58804),
        u = t(75980),
        l = t(85893),
        p = ['children'];
      function f(e, r) {
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
      function d(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var h = (0, i.forwardRef)(function (e, r) {
        var t = e.children,
          n = (0, o.Z)(e, p);
        return (0,
        l.jsx)(g, d(d({ ref: r }, n), {}, { children: (0, l.jsx)(c.Z, { variant: 'eyebrow', children: t }) }));
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
        (0, u.bU)({
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
    76310: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(73396)),
        i = t(53290),
        c = t(40694),
        a = t(85893);
      function s(e, r) {
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
            ? s(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function l(e) {
        var r = e.createURL,
          t = e.refine,
          n = e.page;
        return {
          href: r(n),
          onClick: function (e) {
            e.preventDefault(), t(n);
          },
        };
      }
      var p = (0, o.Z)(function (e) {
        var r = e.currentRefinement,
          t = e.nbPages,
          n = (e.createURL, r - 1),
          o = n >= 1,
          s = r + 1,
          p = s <= t;
        return (0,
        a.jsx)(a.Fragment, { children: (o || p) && (0, a.jsxs)(i.Z, { display: 'flex', children: [o && (0, a.jsx)(c.Z, u(u({}, l(u({ page: n }, e))), {}, { children: 'Previous' })), p && (0, a.jsx)(c.Z, u(u({}, l(u({ page: s }, e))), {}, { marginLeft: 'auto', children: 'Next' }))] }) });
      });
      (p.defaultProps = {}), (r.Z = p);
    },
    91504: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(74575)),
        c = t(53290),
        a = t(37947),
        s = t(58804),
        u = t(44315),
        l = (0, s.ZP)(c.Z).withConfig({
          displayName: 'BaseButton',
          componentId: 'sc-vejhed-0',
        })([
          'border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;border-radius:inherit;color:inherit;font:inherit;text-align:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;&::-moz-focus-inner{border:0;padding:0;}',
        ]);
      l.defaultProps = { as: 'button' };
      var p = l,
        f = t(11029),
        d = t(85893),
        h = ['currentRefinement', 'isSearchStalled', 'refine', 'inputProps'];
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
      function b(e) {
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
      var j = (0, i.Z)(function (e) {
          var r = e.currentRefinement,
            t = e.isSearchStalled,
            n = e.refine,
            i = e.inputProps,
            a = (0, o.Z)(e, h);
          return (0, d.jsx)(
            c.Z,
            b(
              b({}, a),
              {},
              {
                children: (0, d.jsxs)('form', {
                  noValidate: !0,
                  action: '',
                  role: 'search',
                  children: [
                    (0, d.jsxs)(c.Z, {
                      position: 'relative',
                      children: [
                        (0, d.jsx)(
                          O,
                          b(
                            {
                              as: 'input',
                              type: 'search',
                              placeholder: 'Search here\u2026',
                              value: r,
                              onChange: function (e) {
                                return n(e.currentTarget.value);
                              },
                            },
                            i
                          )
                        ),
                        r &&
                          (0, d.jsx)(v, {
                            children: (0, d.jsxs)(p, {
                              as: 'button',
                              color: 'purple070',
                              onClick: function () {
                                return n('');
                              },
                              children: [
                                (0, d.jsx)(f.Z, { children: 'Reset' }),
                                (0, d.jsx)(u.Z, { color: 'purple050' }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    t
                      ? (0, d.jsx)(c.Z, {
                          marginBottom: 4,
                          children: 'Loading\u2026',
                        })
                      : '',
                  ],
                }),
              }
            )
          );
        }),
        O = (0, s.ZP)(c.Z).withConfig({
          displayName: 'CustomSearchBox__SearchInput',
          componentId: 'sc-j8a6tu-0',
        })(
          [
            "width:100%;color:inherit;font-family:inherit;font-size:inherit;background-color:transparent;border:0;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Cg stroke='%23D1D0DC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath clip-rule='evenodd' d='M8.50001 16C12.6421 16 16 12.6421 16 8.50001 16 4.35787 12.6421 1 8.50001 1 4.35787 1 1 4.35787 1 8.50001 1 12.6421 4.35787 16 8.50001 16z'/%3E%3Cpath d='M21.0004 21l-6.8305-6.8304'/%3E%3C/g%3E%3C/svg%3E\");background-position:left center;background-size:1.375rem;background-repeat:no-repeat;padding:1.875rem 1.875rem 1.875rem 2.625rem;appearance:none;",
            " &:focus{outline:none;background-image:url(\"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Cg stroke='%23A6A6BD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath clip-rule='evenodd' d='M8.50001 16C12.6421 16 16 12.6421 16 8.50001 16 4.35787 12.6421 1 8.50001 1 4.35787 1 1 4.35787 1 8.50001 1 12.6421 4.35787 16 8.50001 16z'/%3E%3Cpath d='M21.0004 21l-6.8305-6.8304'/%3E%3C/g%3E%3C/svg%3E\");}",
          ],
          (0, a.ZP)({ fontWeight: 'medium' })
        );
      j.defaultProps = {};
      var v = (0, s.ZP)(c.Z).withConfig({
        displayName: 'CustomSearchBox___StyledBox',
        componentId: 'sc-j8a6tu-1',
      })({
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
      });
    },
    72421: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = (t(67294), t(53290)),
        i = t(85893);
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
      r.Z = function (e) {
        return (0, i.jsx)(
          o.Z,
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? c(Object(t), !0).forEach(function (r) {
                    (0, n.Z)(e, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : c(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    );
                  });
            }
            return e;
          })({ height: '1px', backgroundColor: 'purple020' }, e)
        );
      };
    },
    84272: function (e, r, t) {
      'use strict';
      var n = t(92809),
        o = t(10219),
        i = (t(67294), t(53290)),
        c = t(25675),
        a = t(85893),
        s = ['asset', 'variant', 'className', 'priority', 'quality', 'wrap'];
      function u(e, r) {
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
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? u(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
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
      function f(e) {
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
          u = (e.className, e.priority),
          d = e.quality,
          h = void 0 === d ? 100 : d,
          g = e.wrap,
          b = void 0 === g || g,
          j = (0, o.Z)(e, s);
        if (!t) return null;
        var O = t.title,
          v = t.width,
          y = t.height,
          m = t.focalPoint,
          w = void 0 === m ? [0.5, 0.5] : m,
          P = t.mimeType,
          x = null !== (r = p[n]) && void 0 !== r ? r : y / v,
          Z = t.url.replace(
            'legatuminstitute-uspiwebsite.s3',
            'legatuminstitute-uspiwebsite-2.s3'
          ),
          S = 'image/svg+xml' === P || 'image/svg' === P;
        S && (b = !1);
        var k = S
            ? { width: v, height: y, unoptimized: !0 }
            : { layout: 'fill', objectFit: 'cover' },
          C = (0, a.jsx)(
            c.default,
            l(
              l(
                {
                  src: Z,
                  alt: O,
                  objectPosition: w
                    .map(function (e) {
                      return ''.concat(100 * e, '%');
                    })
                    .join(' '),
                  priority: u,
                  quality: h,
                },
                k
              ),
              {},
              { loader: f }
            )
          );
        return b
          ? (0, a.jsx)(
              i.Z,
              l(
                l(
                  {
                    position: 'relative',
                    paddingBottom: ''.concat(100 * x, '%'),
                    overflow: 'hidden',
                  },
                  j
                ),
                {},
                { children: C }
              )
            )
          : C;
      };
    },
    64655: function (e, r, t) {
      'use strict';
      t(67294);
      var n = t(25770),
        o = t(97023),
        i = t(48860),
        c = t(68608),
        a = t(22328),
        s = t(85893);
      function u(e) {
        var r = e.introHeading,
          t = e.introSubheading,
          u = e.introText;
        return (0, s.jsx)(a.Z, {
          marginTop: [0, 8],
          children: (0, s.jsxs)(n.Z, {
            children: [
              (0, s.jsxs)(o.Z, {
                width: [1, 0.5],
                children: [
                  (0, s.jsx)(i.Z, { variant: 'largeHeading', children: r }),
                  t &&
                    (0, s.jsx)(i.Z, {
                      variant: 'eyebrow',
                      color: 'purple070',
                      children: t,
                    }),
                ],
              }),
              (0, s.jsx)(o.Z, {
                width: [1, 0.5],
                marginTop: [8, 0],
                children: u && (0, s.jsx)(c.Z, { rawHtml: u }),
              }),
            ],
          }),
        });
      }
      (u.defaultProps = {}), (r.Z = u);
    },
    17483: function (e, r, t) {
      'use strict';
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var n = t(11163),
        o = t(67294);
      function i(e) {
        var r = e.initialSearchState,
          t = e.getRouteFromState,
          i = (0, n.useRouter)(),
          c = (0, o.useState)(r),
          a = c[0],
          s = c[1];
        return (
          (0, o.useEffect)(
            function () {
              var e = t(a),
                r = e.href,
                n = e.as;
              n && i.asPath !== n && i.push(r, n, { shallow: !0 });
            },
            [a]
          ),
          { searchState: a, setSearchState: s }
        );
      }
    },
    91247: function (e, r, t) {
      'use strict';
      t.d(r, {
        Jw: function () {
          return a;
        },
        s1: function () {
          return s;
        },
      });
      var n = t(24955),
        o = t.n(n),
        i = t(34155),
        c = '1I9B6FFYTV',
        a =
          (o()(c, i.env.ALGOLIA_ADMIN_API_KEY),
          o()(c, '64c36ae3bd45f7a63c2e6939c05156f6'));
      function s(e) {
        return ''.concat('production', '_').concat(e);
      }
    },
    57294: function (e, r, t) {
      'use strict';
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var n = t(1469),
        o = t.n(n),
        i = t(8804),
        c = t.n(i);
      function a(e) {
        return o()(e) ? c()(e) : e;
      }
    },
    79630: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          __N_SSG: function () {
            return c;
          },
        });
      t(67294);
      var n = t(22328),
        o = t(48860),
        i = t(85893);
      var c = !0;
      r.default = function () {
        return (0, i.jsxs)(n.Z, {
          paddingY: [7, 10, 13],
          children: [
            (0, i.jsx)(o.Z, {
              as: 'h1',
              variant: 'largeHeading',
              children: '404',
            }),
            (0, i.jsx)(o.Z, {
              as: 'h1',
              variant: 'heading',
              color: 'purple070',
              children: 'Page not found',
            }),
          ],
        });
      };
    },
    84754: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          __N_SSG: function () {
            return R;
          },
          default: function () {
            return B;
          },
        });
      var n = t(92809),
        o = (t(67294), t(80516)),
        i = t(2002),
        c = t(68810),
        a = t(22328),
        s = t(91785),
        u = t(31024),
        l = t(91247),
        p = (t(91504), t(76310)),
        f = t(58676),
        d = t(97023),
        h = t(25770),
        g = t(85893);
      function b(e, r) {
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
            ? b(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var O = { indexName: (0, l.s1)('articles'), searchClient: l.Jw };
      function v(e) {
        return (0, g.jsxs)(
          o.Z,
          j(
            j(j({}, O), e),
            {},
            {
              children: [
                (0, g.jsx)(i.Z, { hitsPerPage: 12 }),
                (0, g.jsx)(f.Z, {
                  children: (0, g.jsxs)(h.Z, {
                    rowGap: [5, 5, 8],
                    children: [
                      (0, g.jsx)(d.Z, { children: (0, g.jsx)(y, {}) }),
                      (0, g.jsx)(d.Z, { children: (0, g.jsx)(p.Z, {}) }),
                    ],
                  }),
                }),
              ],
            }
          )
        );
      }
      var y = (0, c.Z)(function (e) {
        var r = e.hits;
        return (0, g.jsx)(s.Z, {
          children: r.map(function (e) {
            var r = e.data.entry;
            return (0, g.jsx)(u.Z, j({}, r), r.id);
          }),
        });
      });
      v.defaultProps = {};
      var m = v,
        w = t(17483),
        P = t(64655),
        x = t(53290),
        Z = t(72421),
        S = t(41609),
        k = t.n(S),
        C = t(79630);
      function D(e, r) {
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
      function E(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? D(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function _(e) {
        var r = e.page;
        return {
          href: 1 === r ? '/articles' : '/articles/[page]',
          as: 1 === r ? '/articles' : '/articles/'.concat(r),
        };
      }
      var R = !0,
        B = function (e) {
          var r = e.entry,
            t = e.searchState,
            n = e.resultsState,
            o = (0, w.Z)({ initialSearchState: t, getRouteFromState: _ }),
            i = o.searchState,
            c = o.setSearchState;
          return k()(r)
            ? (0, g.jsx)(C.default, {})
            : (0, g.jsxs)(x.Z, {
                paddingTop: 8,
                children: [
                  (0, g.jsx)(P.Z, E({}, r)),
                  (0, g.jsx)(a.Z, {
                    marginTop: 8,
                    children: (0, g.jsx)(Z.Z, {}),
                  }),
                  (0, g.jsx)(m, {
                    createURL: function (e) {
                      return _(e).as;
                    },
                    onSearchStateChange: c,
                    resultsState: n,
                    searchState: i,
                  }),
                ],
              });
        };
    },
  },
]);
