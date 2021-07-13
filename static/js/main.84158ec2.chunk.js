(this.webpackJsonpsmark = this.webpackJsonpsmark || []).push([
  [0],
  {
    37: function (t, e, a) {},
    47: function (t, e, a) {},
    48: function (t, e, a) {},
    51: function (t, e, a) {},
    52: function (t, e, a) {},
    57: function (t, e, a) {},
    58: function (t, e, a) {},
    59: function (t, e, a) {},
    73: function (t, e, a) {},
    75: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(0),
        l = a(14),
        c = a.n(l),
        r = (a(47), a(31)),
        s = a(6),
        o = (a(48), a(49), a(7)),
        i = a.n(o),
        u = a(12),
        d = a(8),
        j = (a(51), a(2)),
        b = (a(52), a(5)),
        p = function (t) {
          return { type: "AddUrl", payload: { url: t.url, title: t.title } };
        },
        O = a(1),
        f = function (t) {
          var e = t.name,
            a =
              (Object(b.c)(function (t) {
                return t.modify;
              }),
              {
                style:
                  Object(b.c)(function (t) {
                    return t.modify.playlistInFocus;
                  }) === e
                    ? { backgroundColor: "rgb(31,31,31)", width: "99%" }
                    : {},
              }),
            n = Object(b.b)();
          return Object(O.jsx)(
            "button",
            Object(j.a)(
              Object(j.a)({ className: "list-content-name" }, a),
              {},
              {
                onClick: function () {
                  return n({ type: "Focus", payload: e });
                },
                children: Object(O.jsx)("h5", { children: e }),
              }
            )
          );
        },
        y =
          (a(57),
          a(37),
          Object(n.forwardRef)(function (t, e) {
            var a = Object(n.useState)(!1),
              l = Object(d.a)(a, 2),
              r = l[0],
              s = l[1];
            Object(n.useImperativeHandle)(e, function () {
              return {
                hehe: function () {
                  return console.log("Modal Ref");
                },
                open: function () {
                  return o();
                },
                close: function () {
                  return i();
                },
              };
            });
            var o = function () {
                s(!0);
              },
              i = function () {
                s(!1);
              };
            return r
              ? c.a.createPortal(
                  Object(O.jsxs)("div", {
                    className: "modal-wrapper",
                    children: [
                      Object(O.jsx)("div", {
                        className: "modal-backdrop",
                        onClick: i,
                      }),
                      Object(O.jsx)("div", {
                        className: "modal-box",
                        children: t.children,
                      }),
                    ],
                  }),
                  document.getElementById("modal-root")
                )
              : null;
          })),
        h =
          (a(58),
          function (t) {
            var e = t.title,
              a = t.url,
              l = t.index,
              c = Object(n.useState)(e),
              r = Object(d.a)(c, 2),
              s = r[0],
              o = r[1],
              i = Object(n.useState)(a),
              u = Object(d.a)(i, 2),
              j = u[0],
              p = u[1];
            Object(n.useEffect)(
              function () {
                o(e), p(a);
              },
              [e, a]
            );
            var f = Object(n.useRef)(),
              h = Object(b.b)(),
              m = function () {
                var t;
                h({
                  type: "EditUrl",
                  payload: {
                    newTitle: (t = {
                      editTitle: s,
                      editUrl: j,
                      title: e,
                      url: a,
                    }).editTitle,
                    newUrl: t.editUrl,
                    oldUrl: t.url,
                    oldTitle: t.title,
                  },
                }),
                  f.current.close();
              },
              v = function (t) {
                13 === t.nativeEvent.keyCode && m();
              };
            return Object(O.jsxs)("div", {
              className: "main-div",
              children: [
                Object(O.jsx)("div", {
                  className: "url-tag",
                  children: Object(O.jsx)("a", {
                    href: a,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    className: "anchor-url",
                    children: e,
                  }),
                }),
                Object(O.jsx)("button", {
                  className: "edit-url",
                  onClick: function () {
                    f.current.open();
                  },
                  children: Object(O.jsx)("img", {
                    src: "./editblack.png",
                    alt: "e",
                    className: "edit-img",
                  }),
                }),
                Object(O.jsx)("button", {
                  className: "delete-url",
                  onClick: function () {
                    var t;
                    h({
                      type: "DeleteUrl",
                      payload: {
                        title: (t = { title: e, index: l }).title,
                        key: t.index,
                      },
                    });
                  },
                  children: Object(O.jsx)("img", {
                    src: "./close.png",
                    alt: "",
                    className: "close-img",
                  }),
                }),
                Object(O.jsxs)(y, {
                  ref: f,
                  children: [
                    Object(O.jsx)("h1", {
                      className: "modal-edit",
                      children: "Edit",
                    }),
                    Object(O.jsx)("input", {
                      className: "modal-url-input",
                      type: "text",
                      onKeyPress: v,
                      value: s,
                      onChange: function (t) {
                        return o(t.target.value);
                      },
                    }),
                    Object(O.jsx)("textarea", {
                      className: "modal-url-input",
                      rows: "4",
                      onKeyPress: v,
                      type: "text",
                      value: j,
                      onChange: function (t) {
                        return p(t.target.value);
                      },
                    }),
                    Object(O.jsx)("button", {
                      className: "modal-done-btn",
                      onClick: m,
                      children: "Done",
                    }),
                  ],
                }),
              ],
            });
          }),
        m =
          (a(59),
          Object(n.forwardRef)(function (t, e) {
            var a = Object(n.useState)(!1),
              l = Object(d.a)(a, 2),
              r = l[0],
              s = l[1];
            Object(n.useImperativeHandle)(e, function () {
              return {
                hehe: function () {
                  return console.log("Modal Ref");
                },
                open: function () {
                  return o();
                },
                close: function () {
                  return i();
                },
              };
            });
            var o = function () {
                s(!0);
              },
              i = function () {
                s(!1);
              };
            return r
              ? c.a.createPortal(
                  Object(O.jsxs)("div", {
                    className: "modal-wrapper-list",
                    children: [
                      Object(O.jsx)("div", {
                        className: "modal-backdrop-list",
                        onClick: i,
                      }),
                      Object(O.jsx)("div", {
                        className: "modal-box-list",
                        children: t.children,
                      }),
                    ],
                  }),
                  document.getElementById("modal-root")
                )
              : null;
          })),
        v = a(42),
        g = function () {
          var t = Object(b.c)(function (t) {
              return t.modify.playlistInFocus;
            }),
            e = Object(b.c)(function (t) {
              return t.modify.playlistContent;
            }),
            a = {};
          a[t] = e;
          var l = Object(b.b)(),
            c = Object(n.useState)(t),
            r = Object(d.a)(c, 2),
            s = r[0],
            o = r[1];
          Object(n.useEffect)(
            function () {
              o(t);
            },
            [t]
          );
          var j = Object(n.useRef)(),
            p = function () {
              console.log(s),
                l({ type: "EditPlaylist", payload: s }),
                j.current.close();
            };
          function f() {
            var t = document.getElementById("myPopup");
            t.classList.toggle("show"),
              setTimeout(function () {
                t.classList.toggle("show");
              }, 1e3);
          }
          return Object(O.jsxs)("div", {
            className: "share-search-urls-div",
            children: [
              Object(O.jsxs)("button", {
                className: "share-button popup",
                onClick: function () {
                  var t = "https://sudo-nick16.github.io/smark#/share/#".concat(
                      encodeURIComponent(JSON.stringify(a))
                    ),
                    e = ""
                      .concat(window.location.href, "share/#")
                      .concat(encodeURIComponent(JSON.stringify(a)));
                  console.log(t),
                    console.log(e),
                    Object(u.a)(
                      i.a.mark(function a() {
                        return i.a.wrap(function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (a.next = 2),
                                  Object(v.a)(t)
                                    .then(function (t) {
                                      console.log(t),
                                        navigator.clipboard.writeText(t),
                                        f();
                                    })
                                    .catch(function () {
                                      navigator.clipboard.writeText(e),
                                        alert(
                                          "Couldn't shorten url..long url will be pasted to your clipboard"
                                        ),
                                        f(),
                                        console.log(e);
                                    })
                                );
                              case 2:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                      })
                    )();
                },
                children: [
                  "Share",
                  Object(O.jsx)("span", {
                    className: "popuptext",
                    id: "myPopup",
                    children: "Share link copied!",
                  }),
                ],
              }),
              Object(O.jsx)("button", {
                className: "list-delete-button",
                onClick: function () {
                  "Home" === s
                    ? alert("Cannot delete Default Urllist")
                    : l({ type: "Delete" });
                },
                children: "Delete",
              }),
              Object(O.jsx)("button", {
                className: "list-edit-button",
                onClick: function () {
                  "Home" === s
                    ? alert("Cannot edit Default Urllist")
                    : j.current.open();
                },
                children: "Edit",
              }),
              Object(O.jsxs)(m, {
                ref: j,
                children: [
                  Object(O.jsx)("h2", {
                    className: "modal-edit",
                    children: "Edit",
                  }),
                  Object(O.jsx)("textarea", {
                    className: "modal-playlist-input",
                    onKeyPress: function (t) {
                      13 === t.nativeEvent.keyCode && p();
                    },
                    rows: "3",
                    autoFocus: !0,
                    value: s,
                    name: "playlist",
                    id: "",
                    onChange: function (t) {
                      return o(t.target.value);
                    },
                  }),
                  Object(O.jsx)("button", {
                    className: "modal-done-btn",
                    onClick: p,
                    children: "Done",
                  }),
                ],
              }),
              Object(O.jsx)("input", {
                type: "text",
                placeholder: "Search Urls",
                className: "search-urls-input",
                onChange: function (t) {
                  l({ type: "SearchUrl", payload: t.target.value });
                },
              }),
            ],
          });
        },
        x = function () {
          var t = Object(b.b)(),
            e = Object(n.useState)(""),
            a = Object(d.a)(e, 2),
            l = a[0],
            c = a[1],
            r = Object(n.useRef)(),
            s = function () {
              "" === l || "home" === l.toLowerCase()
                ? alert("Playlist name cannot be empty or same as 'Home'")
                : t(
                    (function (t, e) {
                      return {
                        type: "AddPlaylist",
                        payload: { details: t, searchUrllistRef: e },
                      };
                    })(l, r)
                  ),
                c("");
            };
          return Object(O.jsxs)("div", {
            className: "left-section-add-playlist-header",
            children: [
              Object(O.jsx)("input", {
                type: "text",
                ref: r,
                onKeyPress: function (t) {
                  13 === t.nativeEvent.keyCode && s();
                },
                placeholder: "Search or Add UrlList",
                onChange: function (e) {
                  c(e.target.value),
                    t({ type: "SearchPlaylist", payload: e.target.value });
                },
                className: "search-list",
              }),
              Object(O.jsx)("button", {
                className: "add-playlist-button",
                onClick: s,
                children: "Add",
              }),
            ],
          });
        },
        w = function () {
          var t = Object(b.c)(function (t) {
              return t.modify.urlListsToShow;
            }),
            e = Object(b.c)(function (t) {
              return t.modify.playlistContent;
            });
          Object(b.c)(function (t) {
            return t.modify.playlistInFocus;
          });
          return Object(O.jsx)("div", {
            children: Object(O.jsxs)("div", {
              className: "list-url-wrapper",
              children: [
                Object(O.jsxs)("div", {
                  className: "list-section-left",
                  children: [
                    Object(O.jsx)(x, {}),
                    Object(O.jsx)("div", {
                      className: "lists-below-header-section",
                      children: t.length
                        ? t.map(function (t, e) {
                            return Object(O.jsx)(f, { name: t }, e);
                          })
                        : Object(O.jsx)("div", {
                            className: "empty-list-show",
                            children:
                              "Not Found. Click on Add button to add instead.",
                          }),
                    }),
                  ],
                }),
                Object(O.jsxs)("div", {
                  className: "right-section-wrapper",
                  children: [
                    Object(O.jsx)(g, {}),
                    Object(O.jsx)("div", {
                      className: "urls-section-right",
                      children: e.length
                        ? e.map(function (t, e) {
                            return Object(O.jsx)(
                              h,
                              { title: t.title, url: t.url, index: e },
                              e
                            );
                          })
                        : Object(O.jsx)("div", {
                            className: "empty-list-show",
                            children: "Empty",
                          }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        S =
          (a(73),
          function (t) {
            var e = Object(b.b)(),
              a = Object(n.useState)(""),
              l = Object(d.a)(a, 2),
              c = l[0],
              r = l[1],
              s = Object(n.useRef)(),
              o = (function () {
                var t = Object(u.a)(
                  i.a.mark(function t() {
                    var a, n, l, s, o;
                    return i.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!c) {
                                t.next = 24;
                                break;
                              }
                              return (
                                (t.prev = 1),
                                console.log(c),
                                (a =
                                  "https://opengraph.io/api/1.1/site/" +
                                  encodeURIComponent(c) +
                                  "?app_id=b227291b-c986-46ce-b319-cbf0990756c0"),
                                (t.next = 6),
                                fetch(a)
                              );
                            case 6:
                              return (n = t.sent), (t.next = 9), n.json();
                            case 9:
                              if (((l = t.sent), (s = l.htmlInferred.title))) {
                                t.next = 13;
                                break;
                              }
                              throw "Title is" + typeof s;
                            case 13:
                              console.log(s), (t.next = 21);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(1)),
                                alert(
                                  "The Api couldn't find the title of provided URL, the entered URL would be saved as it is"
                                ),
                                (s = c),
                                console.log(s);
                            case 21:
                              (o = s.charAt(0).toUpperCase() + s.slice(1)),
                                e(p({ url: c, title: o })),
                                r("");
                            case 24:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 16]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })();
            return Object(O.jsxs)("div", {
              children: [
                Object(O.jsx)("div", {
                  className: "header",
                  children: Object(O.jsx)("div", {
                    className: "head",
                    onClick: function () {
                      return window.open(
                        "https://github.com/sudo-nick16/smark/"
                      );
                    },
                    children: "SMARK",
                  }),
                }),
                Object(O.jsx)(w, {}),
                Object(O.jsxs)("div", {
                  className: "footer",
                  children: [
                    Object(O.jsx)("div", { className: "empty-div-footer" }),
                    Object(O.jsx)("input", {
                      className: "url-input",
                      type: "text",
                      onKeyPress: function (t) {
                        13 === t.nativeEvent.keyCode && s.current.click();
                      },
                      value: c,
                      placeholder: "Enter URL",
                      onChange: function (t) {
                        return r(t.target.value);
                      },
                    }),
                    Object(O.jsx)("button", {
                      className: "add",
                      ref: s,
                      onClick: o,
                      children: "Add",
                    }),
                  ],
                }),
              ],
            });
          }),
        C = function (t) {
          var e = Object(b.b)();
          console.log("Share"),
          sessionStorage.setItem(t.location.pathname, t.location.hash);
          console.log(t);
          var a = t.location.hash;
          if (0 === a.length || "#" !== a[0])
            return Object(O.jsxs)("div", {
              children: [
                Object(O.jsx)("p", {
                  children: "No data shared...Redirecting to Home.",
                }),
                Object(O.jsx)(s.a, { to: "/" }),
              ],
            });
          var n = a.substring(1);
          return (
            (n = decodeURIComponent(n)),
            (n = JSON.parse(n)),
            console.log(n),
            e(
              (function (t) {
                return { type: "AddSharedPlaylist", payload: t };
              })(n)
            ),
            console.log("DISPATCHED"),
            Object(O.jsx)("div", { children: Object(O.jsx)(s.a, { to: "/" }) })
          );
        };
      var N = function () {
          return Object(O.jsx)(r.a, {
            children: Object(O.jsx)("div", {
              className: "App",
              children: Object(O.jsxs)(s.d, {
                children: [
                  Object(O.jsx)(s.b, { path: "/share", component: C }),
                  Object(O.jsx)(s.b, { exact: !0, path: "/", component: S }),
                ],
              }),
            }),
          });
        },
        L = a(3);
      console.log("RENDERED");
      var I = {};
      localStorage.getItem("Home") ||
        (localStorage.setItem("Home", JSON.stringify([])),
        localStorage.setItem("##SeLeCtEd#$", ""));
      for (var k = 0; k < localStorage.length; k++) {
        var E = localStorage.key(k);
        if ("##SeLeCtEd#$" !== E) {
          var U = localStorage.getItem(E);
          (U = JSON.parse(U)), (I[E] = U);
        }
      }
      var R = function (t) {
        return Object.keys(t)
          .sort(function (t, e) {
            return "Home" === t
              ? -1
              : "Home" === e || t.toLowerCase() > e.toLowerCase()
              ? 1
              : t.toLowerCase() < e.toLowerCase()
              ? -1
              : 0;
          })
          .reduce(function (e, a) {
            return (e[a] = t[a]), e;
          }, {});
      };
      I = Object(j.a)({}, R(I));
      var T = [];
      for (var P in I) P.hasOwnProperty && T.push(P);
      var F = {
          playlistInFocus: "Home",
          playlistContent: I.Home,
          playlists: I,
          urlLists: T,
          urlListsToShow: T,
        },
        H = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : F,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case "AddPlaylist":
              var a = e.payload.details;
              if (
                ((e.payload.searchUrllistRef.current.value = ""),
                t.urlLists.includes(a))
              ) {
                var n = window.confirm(
                  "Do you wanna empty the current URL list?"
                );
                if (!n) {
                  var l = Object(j.a)(
                    Object(j.a)({}, t),
                    {},
                    { urlListsToShow: Object(L.a)(t.urlLists) }
                  );
                  return l;
                }
                var c = Object(j.a)(
                  Object(j.a)({}, t),
                  {},
                  {
                    urlListsToShow: Object(L.a)(t.urlLists),
                    playlistInFocus: a,
                    playlistContent: [],
                  }
                );
                return (
                  (c.playlists[a] = []),
                  localStorage.setItem(a, JSON.stringify([])),
                  c
                );
              }
              localStorage.setItem(a, JSON.stringify([])), t.urlLists.push(a);
              var r = Object(L.a)(t.urlLists);
              r.sort(function (t, e) {
                return "Home" === t
                  ? -1
                  : "Home" === e || t.toLowerCase() > e.toLowerCase()
                  ? 1
                  : t.toLowerCase() < e.toLowerCase()
                  ? -1
                  : 0;
              });
              var s = Object(j.a)(
                Object(j.a)({}, t),
                {},
                {
                  urlListsToShow: Object(L.a)(r),
                  urlLists: Object(L.a)(r),
                  playlistInFocus: a,
                  playlistContent: [],
                }
              );
              return (
                (s.playlists[a] = []),
                (s.playlists = Object(j.a)({}, R(s.playlists))),
                s
              );
            case "Delete":
              var o = "".concat(t.playlistInFocus);
              if ("Home" === o) return t;
              var i = [];
              for (var u in t.urlLists)
                t.urlLists[u] !== o && i.push(t.urlLists[u]);
              localStorage.removeItem(o);
              var d = {},
                b = function () {
                  for (var e in t.playlists)
                    e.hasOwnProperty && e !== o && (d[e] = t.playlists[e]);
                };
              b();
              var p = Object(j.a)(
                Object(j.a)({}, t),
                {},
                {
                  urlLists: i,
                  urlListsToShow: i,
                  playlistInFocus: "Home",
                  playlistContent: t.playlists.Home,
                  playlists: d,
                }
              );
              return p;
            case "Focus":
              var O = "".concat(e.payload),
                f = Object(j.a)(
                  Object(j.a)({}, t),
                  {},
                  {
                    playlistInFocus: O,
                    playlistContent: Object(L.a)(t.playlists[O]),
                  }
                );
              return f;
            case "AddUrl":
              var y = e.payload.url,
                h = e.payload.title,
                m = t.playlistInFocus,
                v = [].concat(Object(L.a)(t.playlistContent), [
                  { title: h, url: y },
                ]),
                g = Object(j.a)(
                  Object(j.a)({}, t),
                  {},
                  { playlistContent: Object(L.a)(v) }
                );
              return (
                (g.playlists[m] = Object(L.a)(v)),
                localStorage.setItem(m, JSON.stringify(v)),
                g
              );
            case "DeleteUrl":
              var x = e.payload.title,
                w = String(e.payload.key),
                S = t.playlistInFocus,
                C = [],
                N = t.playlistContent;
              for (var I in t.playlistContent)
                (N[I].title === x && I === w) ||
                  (C = [].concat(Object(L.a)(C), [
                    { title: N[I].title, url: N[I].url },
                  ]));
              var k = Object(j.a)(
                Object(j.a)({}, t),
                {},
                { playlistContent: Object(L.a)(C) }
              );
              return (
                (k.playlists[S] = Object(L.a)(C)),
                localStorage.setItem(S, JSON.stringify(C)),
                k
              );
            case "AddSharedPlaylist":
              var E = e.payload,
                U = "",
                T = [];
              for (var P in E) (U = P), (T = Object(L.a)(E[P]));
              var H = Object(L.a)(t.urlLists),
                D = Object(L.a)(t.urlLists);
              H.includes(U)
                ? (T = [].concat(Object(L.a)(T), Object(L.a)(t.playlists[U])))
                : D.push(U),
                localStorage.setItem(U, JSON.stringify(T));
              var A = Object(j.a)(
                Object(j.a)({}, t),
                {},
                {
                  urlLists: Object(L.a)(D),
                  urlListsToShow: Object(L.a)(D),
                  playlistInFocus: U,
                  playlistContent: Object(L.a)(T),
                }
              );
              return (A.playlists[U] = T), A;
            case "SearchUrl":
              var J,
                _ = e.payload,
                K = t.playlists[t.playlistInFocus];
              J =
                _.length > 0
                  ? K.filter(function (t) {
                      var e = new RegExp("".concat(_), "gi");
                      return t.title.match(e);
                    })
                  : K;
              var B = Object(j.a)(
                Object(j.a)({}, t),
                {},
                { playlistContent: J }
              );
              return B;
            case "SearchPlaylist":
              var X,
                M = e.payload,
                V = t.urlLists;
              X =
                M.length > 0
                  ? V.filter(function (t) {
                      var e = new RegExp("".concat(M), "gi");
                      return t.match(e);
                    })
                  : V;
              var $ = Object(j.a)(
                Object(j.a)({}, t),
                {},
                { urlListsToShow: X }
              );
              return $;
            case "EditPlaylist":
              var q = e.payload,
                z = t.playlistInFocus;
              if ("Home" === z) return t;
              localStorage.removeItem(z),
                localStorage.setItem(q, JSON.stringify(t.playlistContent));
              var G = Object(L.a)(t.urlLists);
              for (var Q in G) G[Q] === z && (G[Q] = q);
              var W = Object(L.a)(t.urlListsToShow);
              for (var Y in W) W[Y] === z && (W[Y] = q);
              var Z = {},
                tt = function () {
                  for (var e in t.playlists)
                    e.hasOwnProperty && e !== z && (Z[e] = t.playlists[e]);
                };
              tt(), (Z[q] = Object(L.a)(t.playlistContent));
              var et = Object(j.a)(
                Object(j.a)({}, t),
                {},
                {
                  urlLists: Object(L.a)(G),
                  urlListsToShow: Object(L.a)(W),
                  playlists: Object(j.a)({}, Z),
                  playlistInFocus: q,
                }
              );
              return et;
            case "EditUrl":
              var at = e.payload,
                nt = at.newTitle,
                lt = at.newUrl,
                ct = at.oldUrl,
                rt = at.oldTitle,
                st = Object(L.a)(t.playlistContent);
              for (var ot in st)
                st[ot].title === rt &&
                  st[ot].url === ct &&
                  ((st[ot].title = nt), (st[ot].url = lt));
              var it = Object(j.a)({}, t.playlists),
                ut = t.playlistInFocus;
              it[ut] = st;
              var dt = Object(j.a)(
                Object(j.a)({}, t),
                {},
                {
                  playlists: Object(j.a)({}, it),
                  playlistContent: Object(L.a)(st),
                }
              );
              return (
                localStorage.setItem(t.playlistInFocus, JSON.stringify(st)), dt
              );
            default:
              return t;
          }
        },
        D = a(25),
        A = Object(D.a)({ modify: H }),
        J = Object(D.b)(
          A,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        );
      c.a.render(
        Object(O.jsx)(b.a, { store: J, children: Object(O.jsx)(N, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[75, 1, 2]],
]);
