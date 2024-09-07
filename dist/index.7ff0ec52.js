// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"99Mf2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9f84b2077ff0ec52";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dUn2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _iconSunSvg = require("../images/icon-sun.svg");
var _iconSunSvgDefault = parcelHelpers.interopDefault(_iconSunSvg);
var _iconMoonSvg = require("../images/icon-moon.svg");
var _iconMoonSvgDefault = parcelHelpers.interopDefault(_iconMoonSvg);
class Todo {
    #todoLists = JSON.parse(localStorage.getItem("Todos")) || [];
    #index = parseInt(localStorage.getItem("TodosIndex")) || 0;
    #currentState;
    #currentStatusFilter = "all";
    #currentCategoryFilter = "all";
    constructor(){
        this.form = document.querySelector("form");
        this.todoInput = document.querySelector(".todoInput");
        this.todoContainer = document.querySelector(".todo--section");
        this.categoryInput = document.querySelector(".todoCategory"); // For selecting categories
        this.allBtn = document.querySelector(".all");
        this.activeBtn = document.querySelector(".active");
        this.completedBtn = document.querySelector(".completed");
        this.navBtns = document.querySelectorAll(".nav");
        this.bgToggle = document.querySelector(".bgToggle");
        this.itemsCounter = document.querySelector(".itemsCounter");
        this.clearCompleted = document.querySelector(".clearCompleted");
        this.categoryFilter = document.querySelector(".categoryFilter"); // Category filter dropdown
        this.form.addEventListener("submit", this._addTodoItem.bind(this));
        this.todoContainer.addEventListener("click", this._toggleMenuBtns.bind(this));
        this.todoContainer.addEventListener("click", this._changeStatus.bind(this));
        this.todoContainer.addEventListener("click", this._deleteTodo.bind(this));
        this.allBtn.addEventListener("click", ()=>this._filterTodosByStatus("all"));
        this.activeBtn.addEventListener("click", ()=>this._filterTodosByStatus("active"));
        this.completedBtn.addEventListener("click", ()=>this._filterTodosByStatus("completed"));
        this.categoryFilter.addEventListener("change", this._filterByCategory.bind(this));
        this.navBtns.forEach((nav)=>nav.addEventListener("click", this._toggleActiveNav.bind(this)));
        this.bgToggle.addEventListener("click", this._toggleBackgroundColor.bind(this));
        this.clearCompleted.addEventListener("click", this._clearCompletedTodo.bind(this));
        this._renderTodoItem();
        this._countTodo();
    }
    _clearCompletedTodo() {
        this.#todoLists = this.#todoLists.filter((allTodo)=>!allTodo.isCompleted);
        localStorage.setItem("Todos", JSON.stringify(this.#todoLists));
        this._renderTodoItem();
        this._countTodo();
    }
    _countTodo() {
        this.itemsCounter.textContent = this.#todoLists.length ? `${this.#todoLists.length} items remaining` : "You haven't added any todo";
    }
    _filterByCategory() {
        this.#currentCategoryFilter = this.categoryFilter.value; // Update the current category filter
        this._renderTodoItem(); // Re-render todos based on the category
    }
    _filterTodosByStatus(status) {
        this.#currentStatusFilter = status; // Update the current status filter
        this._renderTodoItem(); // Re-render todos based on the status
    }
    _renderTodoItem() {
        let filteredTodos = [];
        // First filter by category
        if (this.#currentCategoryFilter === "all") filteredTodos = this.#todoLists;
        else filteredTodos = this.#todoLists.filter((todo)=>todo.category === this.#currentCategoryFilter);
        // Then filter by status (all, active, completed)
        if (this.#currentStatusFilter === "active") filteredTodos = filteredTodos.filter((todo)=>todo.isActive && !todo.isCompleted);
        else if (this.#currentStatusFilter === "completed") filteredTodos = filteredTodos.filter((todo)=>todo.isCompleted);
        let html = "";
        filteredTodos.forEach((todo)=>{
            html += `
        <div class="todo--container relative flex cursor-pointer items-center justify-between border-b border-veryDarkGrayishBlue bg-veryLightGray px-5 py-4 dark:border-veryLightGrayishBlue dark:bg-veryDarkDesaturatedBlue" draggable="true">
          <div class="todo-content flex items-center">
            <input type="checkbox" class="mr-3 exclude-me cursor-pointer" id="${todo.id}" ${todo.isCompleted ? "checked" : ""}/>
            <p class="text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">${todo.todo}</p>
            <p class="text-xs text-gray-500 ml-4">${todo.dateTime}</p>
            <p class="text-xs text-gray-500 ml-4">${todo.category}</p>
          </div>

          <i class="fa-solid exclude-me fa-ellipsis fa-lg cursor-pointer text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>

          <div class="status-menu absolute right-0 top-8 hidden h-[100px] w-[120px] flex-col justify-center gap-[0.5rem] rounded-lg bg-veryLightGray px-2 z-10 dark:bg-veryDarkGrayishBlue">
            <div class="exclude-me status-option flex cursor-pointer items-center justify-around" data-status="done" id="${todo.id}">
              <i class="fa-solid fa-check text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>
              <p class="exclude-me text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">Done</p>
            </div>
            <div class="exclude-me status-option flex cursor-pointer items-center justify-around" data-status="in-progress" id="${todo.id}">
              <i class="fa-solid fa-spinner text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>
              <p class="exclude-me text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">In Progress</p>
            </div>
            <div class="exclude-me delete-container flex cursor-pointer items-center justify-around border-t border-veryDarkGrayishBlue pt-2" id="${todo.id}">
              <i class="exclude-me fa-solid fa-trash text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>
              <p class="exclude-me text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">Delete</p>
            </div>
          </div>
        </div>`;
        });
        this.todoContainer.innerHTML = html || `<div class="relative flex cursor-pointer items-center justify-between bg-veryLightGray px-5 py-4 dark:bg-veryDarkDesaturatedBlue text-veryDarkGrayishBlue dark:text-lightGrayishBlue text-sm">There are no todos at this time!</div>`;
    }
    _toggleMenuBtns(e) {
        let elipsis = e.target.closest(".fa-ellipsis");
        if (!elipsis) return;
        // Toggle the visibility of the status menu
        const statusMenu = elipsis.nextElementSibling;
        statusMenu.classList.toggle("hidden");
        statusMenu.classList.toggle("flex");
    }
    _changeStatus(e) {
        let statusBtn = e.target.closest(".status-option");
        if (!statusBtn) return;
        const todoIndex = this.#todoLists.findIndex((todo)=>todo.id === parseInt(statusBtn.id));
        if (statusBtn.dataset.status === "done") {
            this.#todoLists[todoIndex].isCompleted = true;
            this.#todoLists[todoIndex].isActive = false;
        } else if (statusBtn.dataset.status === "in-progress") {
            this.#todoLists[todoIndex].isCompleted = false;
            this.#todoLists[todoIndex].isActive = true;
        }
        localStorage.setItem("Todos", JSON.stringify(this.#todoLists));
        this._renderTodoItem();
        this._countTodo();
    }
    _deleteTodo(e) {
        let delBtn = e.target.closest(".delete-container");
        if (!delBtn) return;
        const todoIndex = this.#todoLists.findIndex((todo)=>todo.id === parseInt(delBtn.id));
        this.#todoLists.splice(todoIndex, 1);
        localStorage.setItem("Todos", JSON.stringify(this.#todoLists));
        this._renderTodoItem();
        this._countTodo();
    }
    _addTodoItem(e) {
        e.preventDefault();
        this.#currentState = this.#todoLists.every((todoItem)=>!todoItem.isEditing);
        if (this.todoInput.value) {
            const currentDateTime = new Date().toLocaleString(); // Get current date and time
            const category = this.categoryInput.value; // Get the selected category
            if (this.#currentState) {
                ++this.#index;
                localStorage.setItem("TodosIndex", this.#index);
                let storage = {
                    id: this.#index,
                    todo: this.todoInput.value.trim(),
                    isActive: true,
                    isCompleted: false,
                    isEditing: false,
                    dateTime: currentDateTime,
                    category: category
                };
                this.#todoLists.push(storage);
            } else {
                let editedIndex = this.#todoLists.findIndex((todoItem)=>todoItem.isEditing);
                this.#todoLists[editedIndex].todo = this.todoInput.value;
                this.#todoLists[editedIndex].isEditing = false;
                this.#todoLists[editedIndex].dateTime = currentDateTime;
                this.#todoLists[editedIndex].category = category;
            }
        }
        localStorage.setItem("Todos", JSON.stringify(this.#todoLists));
        this.todoInput.value = "";
        this._renderTodoItem();
        this._countTodo();
    }
    _toggleActiveNav(e) {
        this.navBtns.forEach((nav)=>nav.classList.remove("nav-active"));
        e.target.classList.add("nav-active");
    }
    _toggleBackgroundColor() {
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark")) {
            this.bgToggle.src = (0, _iconSunSvgDefault.default);
            this.bgToggle.alt = "icon sun";
        } else {
            this.bgToggle.src = (0, _iconMoonSvgDefault.default);
            this.bgToggle.alt = "icon moon";
        }
    }
}
const todo = new Todo();

},{"../images/icon-sun.svg":"dXOZj","../images/icon-moon.svg":"3Lcyu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXOZj":[function(require,module,exports) {
module.exports = require("84ec40e219ec0d1").getBundleURL("dH6Y1") + "icon-sun.2e69e59d.svg" + "?" + Date.now();

},{"84ec40e219ec0d1":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3Lcyu":[function(require,module,exports) {
module.exports = require("d4c8efbbfa307be6").getBundleURL("dH6Y1") + "icon-moon.29939b81.svg" + "?" + Date.now();

},{"d4c8efbbfa307be6":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["99Mf2","dUn2x"], "dUn2x", "parcelRequire546b")

//# sourceMappingURL=index.7ff0ec52.js.map
