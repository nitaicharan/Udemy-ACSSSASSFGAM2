(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --color-primary: #eb2f64;\n  --color-primary-light: #FF3366;\n  --color-primary-dark: #BA265D;\n  --color-grey-light-1: #faf9f9;\n  --color-grey-light-2: #f4f2f2;\n  --color-grey-light-3: #f0eeee;\n  --color-grey-light-4: #ccc;\n  --color-grey-dark-1: #333;\n  --color-grey-dark-2: #777;\n  --color-grey-dark-3: #999;\n  --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);\n  --shadow-light: 0 2rem 6rem rgba(0,0,0,.06);\n  --line: 1px solid var(--color-grey-light-2);\n}\n* {\n  margin: 0;\n  padding: 0;\n}\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 1.6;\n  color: var(--color-grey-dark-2);\n  background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21qZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0yL3NyYy9zdHlsZXMuc2NzcyIsIi9ob21lL21qZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0yL3NyYy9hc3NldHMvc2Fzcy9fYmFzZS5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUVBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUVBLHlDQUFBO0VBQ0EsMkNBQUE7RUFFQSwyQ0FBQTtBQ0ZKO0FES0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FES0E7OztFQUdJLG1CQUFBO0FDRko7QURLQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtBO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5R0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcImFzc2V0cy9zYXNzL2Jhc2VcIjtcbiIsIjpyb290IHtcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNlYjJmNjQ7XG4gICAgLS1jb2xvci1wcmltYXJ5LWxpZ2h0OiAjRkYzMzY2O1xuICAgIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjQkEyNjVEO1xuXG4gICAgLS1jb2xvci1ncmV5LWxpZ2h0LTE6ICNmYWY5Zjk7XG4gICAgLS1jb2xvci1ncmV5LWxpZ2h0LTI6ICNmNGYyZjI7XG4gICAgLS1jb2xvci1ncmV5LWxpZ2h0LTM6ICNmMGVlZWU7XG4gICAgLS1jb2xvci1ncmV5LWxpZ2h0LTQ6ICNjY2M7XG5cbiAgICAtLWNvbG9yLWdyZXktZGFyay0xOiAjMzMzO1xuICAgIC0tY29sb3ItZ3JleS1kYXJrLTI6ICM3Nzc7XG4gICAgLS1jb2xvci1ncmV5LWRhcmstMzogIzk5OTtcblxuICAgIC0tc2hhZG93LWRhcms6IDAgMnJlbSA2cmVtIHJnYmEoMCwwLDAsLjMpO1xuICAgIC0tc2hhZG93LWxpZ2h0OiAwIDJyZW0gNnJlbSByZ2JhKDAsMCwwLC4wNik7XG5cbiAgICAtLWxpbmU6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LTIpO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuKlxuLDo6YmVmb3JlXG4sOjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktZGFyay0yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KSwgdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuOnJvb3Qge1xuICAtLWNvbG9yLXByaW1hcnk6ICNlYjJmNjQ7XG4gIC0tY29sb3ItcHJpbWFyeS1saWdodDogI0ZGMzM2NjtcbiAgLS1jb2xvci1wcmltYXJ5LWRhcms6ICNCQTI2NUQ7XG4gIC0tY29sb3ItZ3JleS1saWdodC0xOiAjZmFmOWY5O1xuICAtLWNvbG9yLWdyZXktbGlnaHQtMjogI2Y0ZjJmMjtcbiAgLS1jb2xvci1ncmV5LWxpZ2h0LTM6ICNmMGVlZWU7XG4gIC0tY29sb3ItZ3JleS1saWdodC00OiAjY2NjO1xuICAtLWNvbG9yLWdyZXktZGFyay0xOiAjMzMzO1xuICAtLWNvbG9yLWdyZXktZGFyay0yOiAjNzc3O1xuICAtLWNvbG9yLWdyZXktZGFyay0zOiAjOTk5O1xuICAtLXNoYWRvdy1kYXJrOiAwIDJyZW0gNnJlbSByZ2JhKDAsMCwwLC4zKTtcbiAgLS1zaGFkb3ctbGlnaHQ6IDAgMnJlbSA2cmVtIHJnYmEoMCwwLDAsLjA2KTtcbiAgLS1saW5lOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JleS1saWdodC0yKTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWRhcmstMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpLCB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.scss": 
        /*!*************************!*\
          !*** ./src/styles.scss ***!
          \*************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!*******************************!*\
          !*** multi ./src/styles.scss ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/mjdan/Git/Udemy-ACSSSASSFGAM2/src/styles.scss */ "./src/styles.scss");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map