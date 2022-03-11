/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// AdminLTE App
__webpack_require__(/*! ./admin/adminlte */ "./resources/js/admin/adminlte.js"); // AdminLTE dashboard demo (This is only for demo purposes)


__webpack_require__(/*! ./admin/pages/dashboard */ "./resources/js/admin/pages/dashboard.js");

__webpack_require__(/*! ./admin/pages/dashboard2 */ "./resources/js/admin/pages/dashboard2.js");

__webpack_require__(/*! ./admin/pages/dashboard3 */ "./resources/js/admin/pages/dashboard3.js"); // AdminLTE for demo purposes


__webpack_require__(/*! ./admin/demo */ "./resources/js/admin/demo.js"); // Persian Data Picker js


__webpack_require__(/*! ./admin/persian-date.min */ "./resources/js/admin/persian-date.min.js");

/***/ }),

/***/ "./resources/js/admin/adminlte.js":
/*!****************************************!*\
  !*** ./resources/js/admin/adminlte.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
 * AdminLTE v3.0.0-alpha.2 (https://adminlte.io)
 * Copyright 2014-2018 Abdullah Almsaeed <abdullah@almsaeedstudio.com>
 * Licensed under MIT (https://github.com/almasaeed2010/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
  ( false ? undefined : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  'use strict';

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */


  var ControlSidebar = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'ControlSidebar';
    var DATA_KEY = 'lte.control.sidebar';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      CONTROL_SIDEBAR: '.control-sidebar',
      DATA_TOGGLE: '[data-widget="control-sidebar"]',
      MAIN_HEADER: '.main-header'
    };
    var ClassName = {
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open',
      CONTROL_SIDEBAR_SLIDE: 'control-sidebar-slide-open'
    };
    var Default = {
      slide: true
      /**
       * Class Definition
       * ====================================================
       */

    };

    var ControlSidebar = function () {
      function ControlSidebar(element, config) {
        classCallCheck(this, ControlSidebar);
        this._element = element;
        this._config = this._getConfig(config);
      } // Public


      ControlSidebar.prototype.show = function show() {
        // Show the control sidebar
        if (this._config.slide) {
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_SLIDE);
        } else {
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }
      };

      ControlSidebar.prototype.collapse = function collapse() {
        // Collapse the control sidebar
        if (this._config.slide) {
          $('body').addClass(ClassName.CONTROL_SIDEBAR_SLIDE);
        } else {
          $('body').addClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }
      };

      ControlSidebar.prototype.toggle = function toggle() {
        this._setMargin();

        var shouldOpen = $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE);

        if (shouldOpen) {
          // Open the control sidebar
          this.show();
        } else {
          // Close the control sidebar
          this.collapse();
        }
      }; // Private


      ControlSidebar.prototype._getConfig = function _getConfig(config) {
        return $.extend({}, Default, config);
      };

      ControlSidebar.prototype._setMargin = function _setMargin() {
        $(Selector.CONTROL_SIDEBAR).css({
          top: $(Selector.MAIN_HEADER).outerHeight()
        });
      }; // Static


      ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new ControlSidebar(this, $(this).data());
            $(this).data(DATA_KEY, data);
          }

          if (data[operation] === 'undefined') {
            throw new Error(operation + ' is not a function');
          }

          data[operation]();
        });
      };

      return ControlSidebar;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      ControlSidebar._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = ControlSidebar._jQueryInterface;
    $.fn[NAME].Constructor = ControlSidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ControlSidebar._jQueryInterface;
    };

    return ControlSidebar;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */


  var Layout = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Layout';
    var DATA_KEY = 'lte.layouts';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      SIDEBAR: '.main-sidebar',
      HEADER: '.main-header',
      CONTENT: '.content-wrapper',
      CONTENT_HEADER: '.content-header',
      WRAPPER: '.wrapper',
      CONTROL_SIDEBAR: '.control-sidebar',
      LAYOUT_FIXED: '.layouts-fixed',
      FOOTER: '.main-footer'
    };
    var ClassName = {
      HOLD: 'hold-transition',
      SIDEBAR: 'main-sidebar',
      LAYOUT_FIXED: 'layouts-fixed'
      /**
       * Class Definition
       * ====================================================
       */

    };

    var Layout = function () {
      function Layout(element) {
        classCallCheck(this, Layout);
        this._element = element;

        this._init();
      } // Public


      Layout.prototype.fixLayoutHeight = function fixLayoutHeight() {
        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight(),
          sidebar: $(Selector.SIDEBAR).height()
        };

        var max = this._max(heights);

        $(Selector.CONTENT).css('min-height', max - heights.header);
        $(Selector.SIDEBAR).css('min-height', max - heights.header);
      }; // Private


      Layout.prototype._init = function _init() {
        var _this = this; // Enable transitions


        $('body').removeClass(ClassName.HOLD); // Activate layouts height watcher

        this.fixLayoutHeight();
        $(Selector.SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview collapsed.lte.pushmenu expanded.lte.pushmenu', function () {
          _this.fixLayoutHeight();
        });
        $(window).resize(function () {
          _this.fixLayoutHeight();
        });
        $('body, html').css('height', 'auto');
      };

      Layout.prototype._max = function _max(numbers) {
        // Calculate the maximum number in a list
        var max = 0;
        Object.keys(numbers).forEach(function (key) {
          if (numbers[key] > max) {
            max = numbers[key];
          }
        });
        return max;
      }; // Static


      Layout._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Layout(this);
            $(this).data(DATA_KEY, data);
          }

          if (operation) {
            data[operation]();
          }
        });
      };

      return Layout;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      Layout._jQueryInterface.call($('body'));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Layout._jQueryInterface;
    $.fn[NAME].Constructor = Layout;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Layout._jQueryInterface;
    };

    return Layout;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */


  var PushMenu = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'PushMenu';
    var DATA_KEY = 'lte.pushmenu';
    var EVENT_KEY = '.' + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: 'collapsed' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY
    };
    var Default = {
      screenCollapseSize: 768
    };
    var Selector = {
      TOGGLE_BUTTON: '[data-widget="pushmenu"]',
      SIDEBAR_MINI: '.sidebar-mini',
      SIDEBAR_COLLAPSED: '.sidebar-collapse',
      BODY: 'body',
      OVERLAY: '#sidebar-overlay',
      WRAPPER: '.wrapper'
    };
    var ClassName = {
      SIDEBAR_OPEN: 'sidebar-open',
      COLLAPSED: 'sidebar-collapse',
      OPEN: 'sidebar-open',
      SIDEBAR_MINI: 'sidebar-mini'
      /**
       * Class Definition
       * ====================================================
       */

    };

    var PushMenu = function () {
      function PushMenu(element, options) {
        classCallCheck(this, PushMenu);
        this._element = element;
        this._options = $.extend({}, Default, options);

        if (!$(Selector.OVERLAY).length) {
          this._addOverlay();
        }
      } // Public


      PushMenu.prototype.show = function show() {
        $(Selector.BODY).addClass(ClassName.OPEN).removeClass(ClassName.COLLAPSED);
        var shownEvent = $.Event(Event.SHOWN);
        $(this._element).trigger(shownEvent);
      };

      PushMenu.prototype.collapse = function collapse() {
        $(Selector.BODY).removeClass(ClassName.OPEN).addClass(ClassName.COLLAPSED);
        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      PushMenu.prototype.toggle = function toggle() {
        var isShown = void 0;

        if ($(window).width() >= this._options.screenCollapseSize) {
          isShown = !$(Selector.BODY).hasClass(ClassName.COLLAPSED);
        } else {
          isShown = $(Selector.BODY).hasClass(ClassName.OPEN);
        }

        if (isShown) {
          this.collapse();
        } else {
          this.show();
        }
      }; // Private


      PushMenu.prototype._addOverlay = function _addOverlay() {
        var _this = this;

        var overlay = $('<div />', {
          id: 'sidebar-overlay'
        });
        overlay.on('click', function () {
          _this.collapse();
        });
        $(Selector.WRAPPER).append(overlay);
      }; // Static


      PushMenu._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new PushMenu(this);
            $(this).data(DATA_KEY, data);
          }

          if (operation) {
            data[operation]();
          }
        });
      };

      return PushMenu;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.TOGGLE_BUTTON, function (event) {
      event.preventDefault();
      var button = event.currentTarget;

      if ($(button).data('widget') !== 'pushmenu') {
        button = $(button).closest(Selector.TOGGLE_BUTTON);
      }

      PushMenu._jQueryInterface.call($(button), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = PushMenu._jQueryInterface;
    $.fn[NAME].Constructor = PushMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return PushMenu._jQueryInterface;
    };

    return PushMenu;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */


  var Treeview = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Treeview';
    var DATA_KEY = 'lte.treeview';
    var EVENT_KEY = '.' + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      SELECTED: 'selected' + EVENT_KEY,
      EXPANDED: 'expanded' + EVENT_KEY,
      COLLAPSED: 'collapsed' + EVENT_KEY,
      LOAD_DATA_API: 'load' + EVENT_KEY
    };
    var Selector = {
      LI: '.nav-item',
      LINK: '.nav-link',
      TREEVIEW_MENU: '.nav-treeview',
      OPEN: '.menu-open',
      DATA_WIDGET: '[data-widget="treeview"]'
    };
    var ClassName = {
      LI: 'nav-item',
      LINK: 'nav-link',
      TREEVIEW_MENU: 'nav-treeview',
      OPEN: 'menu-open'
    };
    var Default = {
      trigger: Selector.DATA_WIDGET + ' ' + Selector.LINK,
      animationSpeed: 300,
      accordion: true
      /**
       * Class Definition
       * ====================================================
       */

    };

    var Treeview = function () {
      function Treeview(element, config) {
        classCallCheck(this, Treeview);
        this._config = config;
        this._element = element;
      } // Public


      Treeview.prototype.init = function init() {
        this._setupListeners();
      };

      Treeview.prototype.expand = function expand(treeviewMenu, parentLi) {
        var _this = this;

        var expandedEvent = $.Event(Event.EXPANDED);

        if (this._config.accordion) {
          var openMenuLi = parentLi.siblings(Selector.OPEN).first();
          var openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first();
          this.collapse(openTreeview, openMenuLi);
        }

        treeviewMenu.slideDown(this._config.animationSpeed, function () {
          parentLi.addClass(ClassName.OPEN);
          $(_this._element).trigger(expandedEvent);
        });
      };

      Treeview.prototype.collapse = function collapse(treeviewMenu, parentLi) {
        var _this2 = this;

        var collapsedEvent = $.Event(Event.COLLAPSED);
        treeviewMenu.slideUp(this._config.animationSpeed, function () {
          parentLi.removeClass(ClassName.OPEN);
          $(_this2._element).trigger(collapsedEvent);
          treeviewMenu.find(Selector.OPEN + ' > ' + Selector.TREEVIEW_MENU).slideUp();
          treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN);
        });
      };

      Treeview.prototype.toggle = function toggle(event) {
        var $relativeTarget = $(event.currentTarget);
        var treeviewMenu = $relativeTarget.next();

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
          return;
        }

        event.preventDefault();
        var parentLi = $relativeTarget.parents(Selector.LI).first();
        var isOpen = parentLi.hasClass(ClassName.OPEN);

        if (isOpen) {
          this.collapse($(treeviewMenu), parentLi);
        } else {
          this.expand($(treeviewMenu), parentLi);
        }
      }; // Private


      Treeview.prototype._setupListeners = function _setupListeners() {
        var _this3 = this;

        $(document).on('click', this._config.trigger, function (event) {
          _this3.toggle(event);
        });
      }; // Static


      Treeview._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Treeview($(this), _config);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return Treeview;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_WIDGET).each(function () {
        Treeview._jQueryInterface.call($(this), 'init');
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Treeview._jQueryInterface;
    $.fn[NAME].Constructor = Treeview;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Treeview._jQueryInterface;
    };

    return Treeview;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Widget.js
   * License MIT
   * --------------------------------------------
   */


  var Widget = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Widget';
    var DATA_KEY = 'lte.widget';
    var EVENT_KEY = '.' + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      EXPANDED: 'expanded' + EVENT_KEY,
      COLLAPSED: 'collapsed' + EVENT_KEY,
      REMOVED: 'removed' + EVENT_KEY
    };
    var Selector = {
      DATA_REMOVE: '[data-widget="remove"]',
      DATA_COLLAPSE: '[data-widget="collapse"]',
      CARD: '.card',
      CARD_HEADER: '.card-header',
      CARD_BODY: '.card-body',
      CARD_FOOTER: '.card-footer',
      COLLAPSED: '.collapsed-card'
    };
    var ClassName = {
      COLLAPSED: 'collapsed-card'
    };
    var Default = {
      animationSpeed: 'normal',
      collapseTrigger: Selector.DATA_COLLAPSE,
      removeTrigger: Selector.DATA_REMOVE
    };

    var Widget = function () {
      function Widget(element, settings) {
        classCallCheck(this, Widget);
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();
        this._settings = $.extend({}, Default, settings);
      }

      Widget.prototype.collapse = function collapse() {
        var _this = this;

        this._parent.children(Selector.CARD_BODY + ', ' + Selector.CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
          _this._parent.addClass(ClassName.COLLAPSED);
        });

        var collapsed = $.Event(Event.COLLAPSED);

        this._element.trigger(collapsed, this._parent);
      };

      Widget.prototype.expand = function expand() {
        var _this2 = this;

        this._parent.children(Selector.CARD_BODY + ', ' + Selector.CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
          _this2._parent.removeClass(ClassName.COLLAPSED);
        });

        var expanded = $.Event(Event.EXPANDED);

        this._element.trigger(expanded, this._parent);
      };

      Widget.prototype.remove = function remove() {
        this._parent.slideUp();

        var removed = $.Event(Event.REMOVED);

        this._element.trigger(removed, this._parent);
      };

      Widget.prototype.toggle = function toggle() {
        if (this._parent.hasClass(ClassName.COLLAPSED)) {
          this.expand();
          return;
        }

        this.collapse();
      }; // Private


      Widget.prototype._init = function _init(card) {
        var _this3 = this;

        this._parent = card;
        $(this).find(this._settings.collapseTrigger).click(function () {
          _this3.toggle();
        });
        $(this).find(this._settings.removeTrigger).click(function () {
          _this3.remove();
        });
      }; // Static


      Widget._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Widget($(this), data);
            $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
          }

          if (typeof config === 'string' && config.match(/remove|toggle/)) {
            data[config]();
          } else if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
            data._init($(this));
          }
        });
      };

      return Widget;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_COLLAPSE, function (event) {
      if (event) {
        event.preventDefault();
      }

      Widget._jQueryInterface.call($(this), 'toggle');
    });
    $(document).on('click', Selector.DATA_REMOVE, function (event) {
      if (event) {
        event.preventDefault();
      }

      Widget._jQueryInterface.call($(this), 'remove');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Widget._jQueryInterface;
    $.fn[NAME].Constructor = Widget;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Widget._jQueryInterface;
    };

    return Widget;
  }(jQuery);

  exports.ControlSidebar = ControlSidebar;
  exports.Layout = Layout;
  exports.PushMenu = PushMenu;
  exports.Treeview = Treeview;
  exports.Widget = Widget;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./resources/js/admin/demo.js":
/*!************************************!*\
  !*** ./resources/js/admin/demo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict';

  var $sidebar = $('.control-sidebar');
  var $container = $('<div />', {
    "class": 'p-3'
  });
  $sidebar.append($container);
  var navbar_dark_skins = ['bg-primary', 'bg-info', 'bg-success', 'bg-danger'];
  var navbar_light_skins = ['bg-warning', 'bg-white', 'bg-gray-light'];
  $container.append('<h5>تنظیمات قالب</h5><hr class="mb-2"/>' + '<h6>رنگ‌های نوار ناوبری</h6>');
  var $navbar_variants = $('<div />', {
    'class': 'd-flex'
  });
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins);
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color');
    console.log('Adding ' + color);
    var $main_header = $('.main-header');
    $main_header.removeClass('navbar-dark').removeClass('navbar-light');
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color);
    });

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark');
      console.log('AND navbar-dark');
    } else {
      console.log('AND navbar-light');
      $main_header.addClass('navbar-light');
    }

    $main_header.addClass(color);
  });
  $navbar_variants.append($navbar_variants_colors);
  $container.append($navbar_variants);
  var $checkbox_container = $('<div />', {
    'class': 'mb-4'
  });
  var $navbar_border = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom');
    } else {
      $('.main-header').removeClass('border-bottom');
    }
  });
  $checkbox_container.append($navbar_border);
  $checkbox_container.append('<span>مرز نوار ناوبری</span>');
  $container.append($checkbox_container);
  var sidebar_colors = ['bg-primary', 'bg-warning', 'bg-info', 'bg-danger', 'bg-success'];
  var sidebar_skins = ['sidebar-dark-primary', 'sidebar-dark-warning', 'sidebar-dark-info', 'sidebar-dark-danger', 'sidebar-dark-success', 'sidebar-light-primary', 'sidebar-light-warning', 'sidebar-light-info', 'sidebar-light-danger', 'sidebar-light-success'];
  $container.append('<h6>نوار تیره</h6>');
  var $sidebar_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  $container.append('<h6>نوار روشن</h6>');
  var $sidebar_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  var logo_skins = navbar_all_colors;
  $container.append('<h6>رنگ برند لوگو</h6>');
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($logo_variants);
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('پاک کردن').on('click', function () {
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
  });
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color');
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
    $logo.addClass(color);
  }).append($clear_btn));

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    });
    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (_typeof(color) === 'object' ? color.join(' ') : color) + ' elevation-2'
      });
      $block.append($color);
      $color.data('color', color);
      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      });
      $color.hover(function () {
        $(this).css({
          opacity: 1
        }).removeClass('elevation-2').addClass('elevation-4');
      }, function () {
        $(this).css({
          opacity: 0.8
        }).removeClass('elevation-4').addClass('elevation-2');
      });

      if (callback) {
        $color.on('click', callback);
      }
    });
    return $block;
  }

  $('[data-widget="chat-pane-toggle"]').click(function () {
    $(this).closest('.card').toggleClass('direct-chat-contacts-open');
  });
  $('[data-toggle="tooltip"]').tooltip();

  function ConvertNumberToPersion() {
    var persian = {
      0: '۰',
      1: '۱',
      2: '۲',
      3: '۳',
      4: '۴',
      5: '۵',
      6: '۶',
      7: '۷',
      8: '۸',
      9: '۹'
    };

    function traverse(el) {
      if (el.nodeType == 3) {
        var list = el.data.match(/[0-9]/g);

        if (list != null && list.length != 0) {
          for (var i = 0; i < list.length; i++) {
            el.data = el.data.replace(list[i], persian[list[i]]);
          }
        }
      }

      for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i]);
      }
    }

    traverse(document.body);
  }

  ConvertNumberToPersion();
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/pages/dashboard.js":
/*!***********************************************!*\
  !*** ./resources/js/admin/pages/dashboard.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
$(function () {
  'use strict'; // Make the dashboard widgets sortable Using jquery UI

  $('.connectedSortable').sortable({
    placeholder: 'sort-highlight',
    connectWith: '.connectedSortable',
    handle: '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move'); // jQuery UI sortable for the todo list

  $('.todo-list').sortable({
    placeholder: 'sort-highlight',
    handle: '.handle',
    forcePlaceholderSize: true,
    zIndex: 999999
  }); // bootstrap WYSIHTML5 - text editor

  $('.textarea').wysihtml5();
  $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });
  /* jQueryKnob */

  $('.knob').knob(); // jvectormap data

  var visitorsData = {
    'US': 398,
    //USA
    'SA': 400,
    //Saudi Arabia
    'CA': 1000,
    //Canada
    'DE': 500,
    //Germany
    'FR': 760,
    //France
    'CN': 300,
    //China
    'AU': 700,
    //Australia
    'BR': 600,
    //Brazil
    'IN': 800,
    //India
    'GB': 320,
    //Great Britain
    'RU': 3000 //Russia

  }; // World map by jvectormap

  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: 'rgba(255, 255, 255, 0.7)',
        'fill-opacity': 1,
        stroke: 'rgba(0,0,0,.2)',
        'stroke-width': 1,
        'stroke-opacity': 1
      }
    },
    series: {
      regions: [{
        values: visitorsData,
        scale: ['#ffffff', '#0154ad'],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function onRegionLabelShow(e, el, code) {
      if (typeof visitorsData[code] != 'undefined') el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  }); // Sparkline charts

  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height: '50',
    width: '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height: '50',
    width: '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height: '50',
    width: '80'
  }); // The Calender

  $('#calendar').datepicker(); // SLIMSCROLL FOR CHAT WIDGET

  $('#chat-box').slimScroll({
    height: '250px'
  });
  /* Morris.js Charts */
  // Sales chart

  var area = new Morris.Area({
    element: 'revenue-chart',
    resize: true,
    data: [{
      y: '2011 Q1',
      item1: 2666,
      item2: 2666
    }, {
      y: '2011 Q2',
      item1: 2778,
      item2: 2294
    }, {
      y: '2011 Q3',
      item1: 4912,
      item2: 1969
    }, {
      y: '2011 Q4',
      item1: 3767,
      item2: 3597
    }, {
      y: '2012 Q1',
      item1: 6810,
      item2: 1914
    }, {
      y: '2012 Q2',
      item1: 5670,
      item2: 4293
    }, {
      y: '2012 Q3',
      item1: 4820,
      item2: 3795
    }, {
      y: '2012 Q4',
      item1: 15073,
      item2: 5967
    }, {
      y: '2013 Q1',
      item1: 10687,
      item2: 4460
    }, {
      y: '2013 Q2',
      item1: 8432,
      item2: 5713
    }],
    xkey: 'y',
    ykeys: ['item1', 'item2'],
    labels: ['Item 1', 'Item 2'],
    lineColors: ['#495057', '#007cff'],
    hideHover: 'auto'
  });
  var line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: [{
      y: '2011 Q1',
      item1: 2666
    }, {
      y: '2011 Q2',
      item1: 2778
    }, {
      y: '2011 Q3',
      item1: 4912
    }, {
      y: '2011 Q4',
      item1: 3767
    }, {
      y: '2012 Q1',
      item1: 6810
    }, {
      y: '2012 Q2',
      item1: 5670
    }, {
      y: '2012 Q3',
      item1: 4820
    }, {
      y: '2012 Q4',
      item1: 15073
    }, {
      y: '2013 Q1',
      item1: 10687
    }, {
      y: '2013 Q2',
      item1: 8432
    }],
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['Item 1'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: '#fff',
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ['#efefef'],
    gridLineColor: '#efefef',
    gridTextFamily: 'Open Sans',
    gridTextSize: 10
  }); // Donut Chart

  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ['#007bff', '#dc3545', '#28a745'],
    data: [{
      label: 'Download Sales',
      value: 12
    }, {
      label: 'In-Store Sales',
      value: 30
    }, {
      label: 'Mail-Order Sales',
      value: 20
    }],
    hideHover: 'auto'
  }); // Fix for charts under tabs

  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });
});

/***/ }),

/***/ "./resources/js/admin/pages/dashboard2.js":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/dashboard2.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  'use strict';
  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */
  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------
  // Get context with jQuery - using jQuery's .get() method.

  var salesChartCanvas = $('#salesChart').get(0).getContext('2d'); // This will get the first returned node in the jQuery collection.

  var salesChart = new Chart(salesChartCanvas);
  var salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Electronics',
      fillColor: '#dee2e6',
      strokeColor: '#ced4da',
      pointColor: '#ced4da',
      pointStrokeColor: '#c1c7d1',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgb(220,220,220)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }, {
      label: 'Digital Goods',
      fillColor: 'rgba(0, 123, 255, 0.9)',
      strokeColor: 'rgba(0, 123, 255, 1)',
      pointColor: '#3b8bba',
      pointStrokeColor: 'rgba(0, 123, 255, 1)',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(0, 123, 255, 1)',
      data: [28, 48, 40, 19, 86, 27, 90]
    }]
  };
  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    //String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%=datasets[i].label%></li><%}%></ul>',
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true
  }; //Create the line chart

  salesChart.Line(salesChartData, salesChartOptions); //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------
  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.

  var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
  var pieChart = new Chart(pieChartCanvas);
  var PieData = [{
    value: 700,
    color: '#dc3545',
    highlight: '#dc3545',
    label: 'Chrome'
  }, {
    value: 500,
    color: '#28a745',
    highlight: '#28a745',
    label: 'IE'
  }, {
    value: 400,
    color: '#ffc107',
    highlight: '#ffc107',
    label: 'FireFox'
  }, {
    value: 600,
    color: '#17a2b8',
    highlight: '#17a2b8',
    label: 'Safari'
  }, {
    value: 300,
    color: '#007bff',
    highlight: '#007bff',
    label: 'Opera'
  }, {
    value: 100,
    color: '#6c757d',
    highlight: '#6c757d',
    label: 'Navigator'
  }];
  var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: '#fff',
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50,
    // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: 'easeOutBounce',
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
    //String - A tooltip template
    tooltipTemplate: '<%=value %> <%=label%> users'
  }; //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.

  pieChart.Doughnut(PieData, pieOptions); //-----------------
  //- END PIE CHART -
  //-----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */

  $('#world-map-markers').vectorMap({
    map: 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: 'rgba(210, 214, 222, 1)',
        'fill-opacity': 1,
        stroke: 'none',
        'stroke-width': 0,
        'stroke-opacity': 1
      },
      hover: {
        'fill-opacity': 0.7,
        cursor: 'pointer'
      },
      selected: {
        fill: 'yellow'
      },
      selectedHover: {}
    },
    markerStyle: {
      initial: {
        fill: '#00a65a',
        stroke: '#111'
      }
    },
    markers: [{
      latLng: [41.90, 12.45],
      name: 'Vatican City'
    }, {
      latLng: [43.73, 7.41],
      name: 'Monaco'
    }, {
      latLng: [-0.52, 166.93],
      name: 'Nauru'
    }, {
      latLng: [-8.51, 179.21],
      name: 'Tuvalu'
    }, {
      latLng: [43.93, 12.46],
      name: 'San Marino'
    }, {
      latLng: [47.14, 9.52],
      name: 'Liechtenstein'
    }, {
      latLng: [7.11, 171.06],
      name: 'Marshall Islands'
    }, {
      latLng: [17.3, -62.73],
      name: 'Saint Kitts and Nevis'
    }, {
      latLng: [3.2, 73.22],
      name: 'Maldives'
    }, {
      latLng: [35.88, 14.5],
      name: 'Malta'
    }, {
      latLng: [12.05, -61.75],
      name: 'Grenada'
    }, {
      latLng: [13.16, -61.23],
      name: 'Saint Vincent and the Grenadines'
    }, {
      latLng: [13.16, -59.55],
      name: 'Barbados'
    }, {
      latLng: [17.11, -61.85],
      name: 'Antigua and Barbuda'
    }, {
      latLng: [-4.61, 55.45],
      name: 'Seychelles'
    }, {
      latLng: [7.35, 134.46],
      name: 'Palau'
    }, {
      latLng: [42.5, 1.51],
      name: 'Andorra'
    }, {
      latLng: [14.01, -60.98],
      name: 'Saint Lucia'
    }, {
      latLng: [6.91, 158.18],
      name: 'Federated States of Micronesia'
    }, {
      latLng: [1.3, 103.8],
      name: 'Singapore'
    }, {
      latLng: [1.46, 173.03],
      name: 'Kiribati'
    }, {
      latLng: [-21.13, -175.2],
      name: 'Tonga'
    }, {
      latLng: [15.3, -61.38],
      name: 'Dominica'
    }, {
      latLng: [-20.2, 57.5],
      name: 'Mauritius'
    }, {
      latLng: [26.02, 50.55],
      name: 'Bahrain'
    }, {
      latLng: [0.33, 6.73],
      name: 'São Tomé and Príncipe'
    }]
  });
  /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */
  //-----------------
  //- SPARKLINE BAR -
  //-----------------

  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'bar',
      height: $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  }); //-----------------
  //- SPARKLINE PIE -
  //-----------------

  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'pie',
      height: $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  }); //------------------
  //- SPARKLINE LINE -
  //------------------

  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'line',
      height: $this.data('height') ? $this.data('height') : '90',
      width: '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
});

/***/ }),

/***/ "./resources/js/admin/pages/dashboard3.js":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/dashboard3.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  'use strict';

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  };
  var mode = 'index';
  var intersect = true;
  var $salesChart = $('#sales-chart');
  var salesChart = new Chart($salesChart, {
    type: 'bar',
    data: {
      labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
      }, {
        backgroundColor: '#ced4da',
        borderColor: '#ced4da',
        data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            // Include a dollar sign in the ticks
            callback: function callback(value, index, values) {
              if (value >= 1000) {
                value /= 1000;
                value += 'k';
              }

              return '$' + value;
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  });
  var $visitorsChart = $('#visitors-chart');
  var visitorsChart = new Chart($visitorsChart, {
    data: {
      labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
      datasets: [{
        type: 'line',
        data: [100, 120, 170, 167, 180, 177, 160],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'

      }, {
        type: 'line',
        data: [60, 80, 70, 67, 80, 77, 100],
        backgroundColor: 'tansparent',
        borderColor: '#ced4da',
        pointBorderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        fill: false // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'

      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  });
});

/***/ }),

/***/ "./resources/js/admin/persian-date.min.js":
/*!************************************************!*\
  !*** ./resources/js/admin/persian-date.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 *
 * persian-date -  1.0.5
 * Reza Babakhani <babakhani.reza@gmail.com>
 * http://babakhani.github.io/PersianWebToolkit/docs/persian-date/
 * Under WTFPL license
 *
 *
 */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function t(i) {
      if (a[i]) return a[i].exports;
      var r = a[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }

    var a = {};
    return t.m = e, t.c = a, t.i = function (e) {
      return e;
    }, t.d = function (e, a, i) {
      t.o(e, a) || Object.defineProperty(e, a, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, t.n = function (e) {
      var a = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return t.d(a, "a", a), a;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 8);
  }([function (e, t, a) {
    "use strict";

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var r = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
      };
    }(),
        n = a(4).durationUnit,
        s = function () {
      function e() {
        i(this, e);
      }

      return r(e, [{
        key: "toPersianDigit",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return e.toString().replace(/\d+/g, function (e) {
            var a = [],
                i = [],
                r = void 0,
                n = void 0;

            for (r = 0; r < e.length; r += 1) {
              a.push(e.charCodeAt(r));
            }

            for (n = 0; n < a.length; n += 1) {
              i.push(String.fromCharCode(a[n] + (t && t === !0 ? 1584 : 1728)));
            }

            return i.join("");
          });
        }
      }, {
        key: "leftZeroFill",
        value: function value(e, t) {
          for (var a = e + ""; a.length < t;) {
            a = "0" + a;
          }

          return a;
        }
      }, {
        key: "normalizeDuration",
        value: function value() {
          var e = void 0,
              t = void 0;
          return "string" == typeof arguments[0] ? (e = arguments[0], t = arguments[1]) : (t = arguments[0], e = arguments[1]), n.year.indexOf(e) > -1 ? e = "year" : n.month.indexOf(e) > -1 ? e = "month" : n.day.indexOf(e) > -1 ? e = "day" : n.hour.indexOf(e) > -1 ? e = "hour" : n.minute.indexOf(e) > -1 ? e = "minute" : n.second.indexOf(e) > -1 ? e = "second" : n.millisecond.indexOf(e) > -1 && (e = "millisecond"), {
            unit: e,
            value: t
          };
        }
      }, {
        key: "absRound",
        value: function value(e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e);
        }
      }, {
        key: "absFloor",
        value: function value(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }
      }]), e;
    }();

    e.exports = s;
  }, function (e, t, a) {
    "use strict";

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var r = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
      };
    }(),
        n = a(10),
        s = a(2),
        o = a(0),
        h = a(5),
        u = new o().toPersianDigit,
        d = new o().leftZeroFill,
        l = new o().normalizeDuration,
        c = a(7),
        y = a(6),
        f = function () {
      function t(e) {
        return i(this, t), this.calendarType = t.calendarType, this.localType = t.localType, this.leapYearMode = t.leapYearMode, this.algorithms = new s(this), this.version = "1.0.5", this._utcMode = !1, "fa" !== this.localType ? this.formatPersian = !1 : this.formatPersian = "_default", this.setup(e), this.ON = this.algorithms.ON, this;
      }

      return r(t, [{
        key: "setup",
        value: function value(e) {
          if (n.isDate(e)) this._gDateToCalculators(e);else if (n.isArray(e)) this.algorithmsCalc([e[0], e[1] ? e[1] : 1, e[2] ? e[2] : 1, e[3], e[4], e[5], e[6] ? e[6] : 0]);else if (n.isNumber(e)) {
            var a = new Date(e);

            this._gDateToCalculators(a);
          } else if (e instanceof t) this.algorithmsCalc([e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]);else if (e && "/Date(" === e.substring(0, 6)) {
            var i = new Date(parseInt(e.substr(6)));

            this._gDateToCalculators(i);
          } else {
            var r = new Date();

            this._gDateToCalculators(r);
          }
        }
      }, {
        key: "_getSyncedClass",
        value: function value(e) {
          return new (t.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode))(e);
        }
      }, {
        key: "_gDateToCalculators",
        value: function value(e) {
          this.algorithms.calcGregorian([e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]);
        }
      }, {
        key: "rangeName",
        value: function value() {
          var e = this.calendarType;
          return "fa" === this.localType ? "persian" === e ? c.persian : c.gregorian : "persian" === e ? y.persian : y.gregorian;
        }
      }, {
        key: "toLeapYearMode",
        value: function value(e) {
          return this.leapYearMode = e, "astronomical" === e && "persian" == this.calendarType ? this.leapYearMode = "astronomical" : "algorithmic" === e && "persian" == this.calendarType && (this.leapYearMode = "algorithmic"), this.algorithms.updateFromGregorian(), this;
        }
      }, {
        key: "toCalendar",
        value: function value(e) {
          return this.calendarType = e, this.algorithms.updateFromGregorian(), this;
        }
      }, {
        key: "toLocale",
        value: function value(e) {
          return this.localType = e, "fa" !== this.localType ? this.formatPersian = !1 : this.formatPersian = "_default", this;
        }
      }, {
        key: "_locale",
        value: function value() {
          var e = this.calendarType;
          return "fa" === this.localType ? "persian" === e ? c.persian : c.gregorian : "persian" === e ? y.persian : y.gregorian;
        }
      }, {
        key: "_weekName",
        value: function value(e) {
          return this._locale().weekdays[e - 1];
        }
      }, {
        key: "_weekNameShort",
        value: function value(e) {
          return this._locale().weekdaysShort[e - 1];
        }
      }, {
        key: "_weekNameMin",
        value: function value(e) {
          return this._locale().weekdaysMin[e - 1];
        }
      }, {
        key: "_dayName",
        value: function value(e) {
          return this._locale().persianDaysName[e - 1];
        }
      }, {
        key: "_monthName",
        value: function value(e) {
          return this._locale().months[e - 1];
        }
      }, {
        key: "_monthNameShort",
        value: function value(e) {
          return this._locale().monthsShort[e - 1];
        }
      }, {
        key: "isPersianDate",
        value: function value(e) {
          return e instanceof t;
        }
      }, {
        key: "clone",
        value: function value() {
          return this._getSyncedClass(this.ON.gDate);
        }
      }, {
        key: "algorithmsCalc",
        value: function value(e) {
          return this.isPersianDate(e) && (e = [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]), "persian" === this.calendarType && "algorithmic" == this.leapYearMode ? this.algorithms.calcPersian(e) : "persian" === this.calendarType && "astronomical" == this.leapYearMode ? this.algorithms.calcPersiana(e) : "gregorian" === this.calendarType ? (e[1] = e[1] - 1, this.algorithms.calcGregorian(e)) : void 0;
        }
      }, {
        key: "calendar",
        value: function value() {
          var e = void 0;
          return "persian" == this.calendarType ? "astronomical" == this.leapYearMode ? e = "persianAstro" : "algorithmic" == this.leapYearMode && (e = "persianAlgo") : e = "gregorian", this.ON[e];
        }
      }, {
        key: "duration",
        value: function value(e, t) {
          return new h(e, t);
        }
      }, {
        key: "isDuration",
        value: function value(e) {
          return e instanceof h;
        }
      }, {
        key: "years",
        value: function value(e) {
          return this.year(e);
        }
      }, {
        key: "year",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([e, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]), this) : this.calendar().year;
        }
      }, {
        key: "month",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([this.year(), e, this.date()]), this) : this.calendar().month + 1;
        }
      }, {
        key: "days",
        value: function value() {
          return this.day();
        }
      }, {
        key: "day",
        value: function value() {
          return this.calendar().weekday;
        }
      }, {
        key: "dates",
        value: function value(e) {
          return this.date(e);
        }
      }, {
        key: "date",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), e]), this) : this.calendar().day;
        }
      }, {
        key: "hour",
        value: function value(e) {
          return this.hours(e);
        }
      }, {
        key: "hours",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), e]), this) : this.ON.gDate.getHours();
        }
      }, {
        key: "minute",
        value: function value(e) {
          return this.minutes(e);
        }
      }, {
        key: "minutes",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), e]), this) : this.ON.gDate.getMinutes();
        }
      }, {
        key: "second",
        value: function value(e) {
          return this.seconds(e);
        }
      }, {
        key: "seconds",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), e]), this) : this.ON.gDate.getSeconds();
        }
      }, {
        key: "millisecond",
        value: function value(e) {
          return this.milliseconds(e);
        }
      }, {
        key: "milliseconds",
        value: function value(e) {
          return e || 0 === e ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), e]), this) : this.ON.gregorian.millisecond;
        }
      }, {
        key: "unix",
        value: function value(e) {
          var t = void 0;
          if (e) return this._getSyncedClass(1e3 * e);
          var a = this.ON.gDate.valueOf().toString();
          return t = a.substring(0, a.length - 3), parseInt(t);
        }
      }, {
        key: "valueOf",
        value: function value() {
          return this.ON.gDate.valueOf();
        }
      }, {
        key: "getFirstWeekDayOfMonth",
        value: function value(e, t) {
          return this._getSyncedClass([e, t, 1]).day();
        }
      }, {
        key: "diff",
        value: function value(e, t, a) {
          var i = this,
              r = e,
              n = i.ON.gDate - r.toDate() - 0,
              s = i.year() - r.year(),
              o = i.month() - r.month(),
              h = (i.date() - r.date()) * -1,
              u = void 0;
          return u = "months" === t || "month" === t ? 12 * s + o + h / 30 : "years" === t || "year" === t ? s + (o + h / 30) / 12 : "seconds" === t || "second" === t ? n / 1e3 : "minutes" === t || "minute" === t ? n / 6e4 : "hours" === t || "hour" === t ? n / 36e5 : "days" === t || "day" === t ? n / 864e5 : "weeks" === t || "week" === t ? n / 6048e5 : n, u < 0 && (u *= -1), a ? u : Math.round(u);
        }
      }, {
        key: "startOf",
        value: function value(e) {
          var a = t.toCalendar(this.calendarType).toLocale(this.localType);

          switch (e) {
            case "years":
            case "year":
              return new a([this.year(), 1, 1]);

            case "months":
            case "month":
              return new a([this.year(), this.month(), 1]);

            case "days":
            case "day":
              return new a([this.year(), this.month(), this.date(), 0, 0, 0]);

            case "hours":
            case "hour":
              return new a([this.year(), this.month(), this.date(), this.hours(), 0, 0]);

            case "minutes":
            case "minute":
              return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);

            case "seconds":
            case "second":
              return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);

            case "weeks":
            case "week":
              return new a([this.year(), this.month(), this.date() - (this.calendar().weekday - 1)]);

            default:
              return this.clone();
          }
        }
      }, {
        key: "endOf",
        value: function value(e) {
          var a = t.toCalendar(this.calendarType).toLocale(this.localType);

          switch (e) {
            case "years":
            case "year":
              var i = this.isLeapYear() ? 30 : 29;
              return new a([this.year(), 12, i, 23, 59, 59]);

            case "months":
            case "month":
              var r = this.daysInMonth(this.year(), this.month());
              return new a([this.year(), this.month(), r, 23, 59, 59]);

            case "days":
            case "day":
              return new a([this.year(), this.month(), this.date(), 23, 59, 59]);

            case "hours":
            case "hour":
              return new a([this.year(), this.month(), this.date(), this.hours(), 59, 59]);

            case "minutes":
            case "minute":
              return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);

            case "seconds":
            case "second":
              return new a([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);

            case "weeks":
            case "week":
              var n = this.calendar().weekday;
              return new a([this.year(), this.month(), this.date() + (7 - n)]);

            default:
              return this.clone();
          }
        }
      }, {
        key: "sod",
        value: function value() {
          return this.startOf("day");
        }
      }, {
        key: "eod",
        value: function value() {
          return this.endOf("day");
        }
      }, {
        key: "zone",
        value: function value(e) {
          return e || 0 === e ? (this.ON.zone = e, this) : this.ON.zone;
        }
      }, {
        key: "local",
        value: function value() {
          var e = void 0;

          if (this._utcMode) {
            var a = new Date(this.toDate()).getTimezoneOffset(),
                i = 60 * a * 1e3;
            e = a < 0 ? this.valueOf() - i : this.valueOf() + i, this.toCalendar(t.calendarType);
            var r = new Date(e);
            return this._gDateToCalculators(r), this._utcMode = !1, this.zone(a), this;
          }

          return this;
        }
      }, {
        key: "utc",
        value: function value(e) {
          var t = void 0;
          if (e) return this._getSyncedClass(e).utc();
          if (this._utcMode) return this;
          var a = 60 * this.zone() * 1e3;
          t = this.zone() < 0 ? this.valueOf() + a : this.valueOf() - a;

          var i = new Date(t),
              r = this._getSyncedClass(i);

          return this.algorithmsCalc(r), this._utcMode = !0, this.zone(0), this;
        }
      }, {
        key: "isUtc",
        value: function value() {
          return this._utcMode;
        }
      }, {
        key: "isDST",
        value: function value() {
          var e = this.month(),
              t = this.date();
          return 1 == e && t > 1 || 6 == e && t < 31 || e < 6 && e >= 2;
        }
      }, {
        key: "isLeapYear",
        value: function value(e) {
          return void 0 === e && (e = this.year()), "persian" == this.calendarType && "algorithmic" === this.leapYearMode ? this.algorithms.leap_persian(e) : "persian" == this.calendarType && "astronomical" === this.leapYearMode ? this.algorithms.leap_persiana(e) : "gregorian" == this.calendarType ? this.algorithms.leap_gregorian(e) : void 0;
        }
      }, {
        key: "daysInMonth",
        value: function value(e, t) {
          var a = e || this.year(),
              i = t || this.month();
          return "persian" === this.calendarType ? i < 1 || i > 12 ? 0 : i < 7 ? 31 : i < 12 ? 30 : this.isLeapYear(a) ? 30 : 29 : "gregorian" === this.calendarType ? new Date(a, i, 0).getDate() : void 0;
        }
      }, {
        key: "toDate",
        value: function value() {
          return this.ON.gDate;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
        }
      }, {
        key: "formatNumber",
        value: function value() {
          var t = void 0,
              a = this;
          return "_default" === this.formatPersian ? t = void 0 !== e && void 0 !== e.exports ? a.formatPersian !== !1 : window.formatPersian !== !1 : this.formatPersian === !0 ? t = !0 : this.formatPersian === !1 ? t = !1 : Error('Invalid Config "formatPersian" !!'), t;
        }
      }, {
        key: "format",
        value: function value(e) {
          function t(e) {
            switch (e) {
              case "a":
                return n ? r.hour >= 12 ? "ب ظ" : "ق ظ" : r.hour >= 12 ? "PM" : "AM";

              case "H":
                return s(r.hour);

              case "HH":
                return s(d(r.hour, 2));

              case "h":
                return s(r.hour % 12);

              case "hh":
                return s(d(r.hour % 12, 2));

              case "m":
              case "mm":
                return s(d(r.minute, 2));

              case "s":
                return s(r.second);

              case "ss":
                return s(d(r.second, 2));

              case "D":
                return s(d(r.date));

              case "DD":
                return s(d(r.date, 2));

              case "DDD":
                var t = a.startOf("year");
                return s(d(a.diff(t, "days"), 3));

              case "DDDD":
                var i = a.startOf("year");
                return s(d(a.diff(i, "days"), 3));

              case "d":
                return s(a.calendar().weekday);

              case "ddd":
                return a._weekNameShort(a.calendar().weekday);

              case "dddd":
                return a._weekName(a.calendar().weekday);

              case "ddddd":
                return a._dayName(a.calendar().day);

              case "dddddd":
                return a._weekNameMin(a.calendar().weekday);

              case "w":
                var o = a.startOf("year"),
                    h = parseInt(a.diff(o, "days") / 7) + 1;
                return s(h);

              case "ww":
                var u = a.startOf("year"),
                    l = d(parseInt(a.diff(u, "days") / 7) + 1, 2);
                return s(l);

              case "M":
                return s(r.month);

              case "MM":
                return s(d(r.month, 2));

              case "MMM":
                return a._monthNameShort(r.month);

              case "MMMM":
                return a._monthName(r.month);

              case "YY":
                var c = r.year.toString().split("");
                return s(c[2] + c[3]);

              case "YYYY":
                return s(r.year);

              case "Z":
                var y = "+",
                    f = Math.round(r.timezone / 60),
                    v = r.timezone % 60;
                v < 0 && (v *= -1), f < 0 && (y = "-", f *= -1);
                var m = y + d(f, 2) + ":" + d(v, 2);
                return s(m);

              case "ZZ":
                var p = "+",
                    g = Math.round(r.timezone / 60),
                    _ = r.timezone % 60;

                _ < 0 && (_ *= -1), g < 0 && (p = "-", g *= -1);
                var M = p + d(g, 2) + "" + d(_, 2);
                return s(M);

              case "X":
                return a.unix();

              case "LT":
                return a.format("H:m a");

              case "L":
                return a.format("YYYY/MM/DD");

              case "l":
                return a.format("YYYY/M/D");

              case "LL":
                return a.format("MMMM DD YYYY");

              case "ll":
                return a.format("MMM DD YYYY");

              case "LLL":
                return a.format("MMMM YYYY DD   H:m  a");

              case "lll":
                return a.format("MMM YYYY DD   H:m  a");

              case "LLLL":
                return a.format("dddd D MMMM YYYY  H:m  a");

              case "llll":
                return a.format("ddd D MMM YYYY  H:m  a");
            }
          }

          var a = this,
              i = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g,
              r = {
            year: a.year(),
            month: a.month(),
            hour: a.hours(),
            minute: a.minutes(),
            second: a.seconds(),
            date: a.date(),
            timezone: a.zone(),
            unix: a.unix()
          },
              n = a.formatNumber(),
              s = function s(e) {
            return n ? u(e) : e;
          };

          return e ? e.replace(i, t) : "YYYY-MM-DD HH:mm:ss a".replace(i, t);
        }
      }, {
        key: "add",
        value: function value(e, t) {
          var a = new h(e, t)._data,
              i = l(e, t).unit;

          if (t = l(e, t).value, "year" === i || "month" === i) {
            if (a.years > 0) {
              var r = this.year() + a.years;
              this.year(r);
            }

            if (a.months > 0) {
              var n = this.date(),
                  s = this.month() + a.months,
                  o = this.daysInMonth(this.year(), s);
              n >= o && (n = o), this.date(n), this.month(s);
            }
          }

          if ("day" === i) {
            var u = this.hour(),
                d = this.valueOf() + 24 * t * 60 * 60 * 1e3;
            return this.unix(d / 1e3).hour(u);
          }

          if ("hour" === i) {
            var c = this.valueOf() + 60 * t * 60 * 1e3;
            return this.unix(c / 1e3);
          }

          if ("minute" === i) {
            var y = this.valueOf() + 60 * t * 1e3;
            return this.unix(y / 1e3);
          }

          if ("second" === i) {
            var f = this.valueOf() + 1e3 * t;
            return this.unix(f / 1e3);
          }

          if ("millisecond" === i) {
            var v = this.valueOf() + t;
            return this.unix(v / 1e3);
          }

          return this._getSyncedClass(this.valueOf());
        }
      }, {
        key: "subtract",
        value: function value(e, t) {
          var a = new h(e, t)._data,
              i = l(e, t).unit;

          if (t = l(e, t).value, "year" === i || "month" === i) {
            if (a.years > 0) {
              var r = this.year() - a.years;
              this.year(r);
            }

            if (a.months > 0) {
              var n = this.date(),
                  s = this.month() - a.months;
              this.month(s);
              var o = this.daysInMonth(this.year(), this.month());
              n > o && (n = o), this.date(n);
            }
          }

          if ("day" === i) {
            var u = this.hour(),
                d = this.valueOf() - 24 * t * 60 * 60 * 1e3;
            return this.unix(d / 1e3).hour(u);
          }

          if ("hour" === i) {
            var c = this.valueOf() - 60 * t * 60 * 1e3;
            return this.unix(c / 1e3);
          }

          if ("minute" === i) {
            var y = this.valueOf() - 60 * t * 1e3;
            return this.unix(y / 1e3);
          }

          if ("second" === i) {
            var f = this.valueOf() - 1e3 * t;
            return this.unix(f / 1e3);
          }

          if ("millisecond" === i) {
            var v = this.valueOf() - t;
            return this.unix(v / 1e3);
          }

          return this._getSyncedClass(this.valueOf());
        }
      }, {
        key: "isSameDay",
        value: function value(e) {
          return this && e && this.date() == e.date() && this.year() == e.year() && this.month() == e.month();
        }
      }, {
        key: "isSameMonth",
        value: function value(e) {
          return this && e && this.year() == this.year() && this.month() == e.month();
        }
      }], [{
        key: "rangeName",
        value: function value() {
          var e = t,
              a = e.calendarType;
          return "fa" === e.localType ? "persian" === a ? c.persian : c.gregorian : "persian" === a ? y.persian : y.gregorian;
        }
      }, {
        key: "toLeapYearMode",
        value: function value(e) {
          var a = t;
          return a.leapYearMode = e, a;
        }
      }, {
        key: "toCalendar",
        value: function value(e) {
          var a = t;
          return a.calendarType = e, a;
        }
      }, {
        key: "toLocale",
        value: function value(e) {
          var a = t;
          return a.localType = e, "fa" !== a.localType ? a.formatPersian = !1 : a.formatPersian = "_default", a;
        }
      }, {
        key: "isPersianDate",
        value: function value(e) {
          return e instanceof t;
        }
      }, {
        key: "duration",
        value: function value(e, t) {
          return new h(e, t);
        }
      }, {
        key: "isDuration",
        value: function value(e) {
          return e instanceof h;
        }
      }, {
        key: "unix",
        value: function value(e) {
          return e ? new t(1e3 * e) : new t().unix();
        }
      }, {
        key: "getFirstWeekDayOfMonth",
        value: function value(e, a) {
          return new t([e, a, 1]).day();
        }
      }, {
        key: "utc",
        value: function value(e) {
          return e ? new t(e).utc() : new t().utc();
        }
      }, {
        key: "isSameDay",
        value: function value(e, t) {
          return e && t && e.date() == t.date() && e.year() == t.year() && e.month() == t.month();
        }
      }, {
        key: "isSameMonth",
        value: function value(e, t) {
          return e && t && e.year() == t.year() && e.month() == t.month();
        }
      }]), t;
    }();

    e.exports = f;
  }, function (e, t, a) {
    "use strict";

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var r = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
      };
    }(),
        n = a(3),
        s = a(9),
        o = function () {
      function e(t) {
        i(this, e), this.parent = t, this.ASTRO = new n(), this.ON = new s(), this.J0000 = 1721424.5, this.J1970 = 2440587.5, this.JMJD = 2400000.5, this.NormLeap = [!1, !0], this.GREGORIAN_EPOCH = 1721425.5, this.PERSIAN_EPOCH = 1948320.5;
      }

      return r(e, [{
        key: "leap_gregorian",
        value: function value(e) {
          return e % 4 == 0 && !(e % 100 == 0 && e % 400 != 0);
        }
      }, {
        key: "gregorian_to_jd",
        value: function value(e, t, a) {
          return this.GREGORIAN_EPOCH - 1 + 365 * (e - 1) + Math.floor((e - 1) / 4) + -Math.floor((e - 1) / 100) + Math.floor((e - 1) / 400) + Math.floor((367 * t - 362) / 12 + (t <= 2 ? 0 : this.leap_gregorian(e) ? -1 : -2) + a);
        }
      }, {
        key: "jd_to_gregorian",
        value: function value(e) {
          var t = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0,
              o = void 0,
              h = void 0,
              u = void 0,
              d = void 0,
              l = void 0,
              c = void 0,
              y = void 0,
              f = void 0;
          return t = Math.floor(e - .5) + .5, a = t - this.GREGORIAN_EPOCH, i = Math.floor(a / 146097), r = this.ASTRO.mod(a, 146097), n = Math.floor(r / 36524), s = this.ASTRO.mod(r, 36524), o = Math.floor(s / 1461), h = this.ASTRO.mod(s, 1461), u = Math.floor(h / 365), d = 400 * i + 100 * n + 4 * o + u, 4 !== n && 4 !== u && d++, l = t - this.gregorian_to_jd(d, 1, 1), c = t < this.gregorian_to_jd(d, 3, 1) ? 0 : this.leap_gregorian(d) ? 1 : 2, y = Math.floor((12 * (l + c) + 373) / 367), f = t - this.gregorian_to_jd(d, y, 1) + 1, [d, y, f];
        }
      }, {
        key: "tehran_equinox",
        value: function value(e) {
          var t = void 0,
              a = void 0,
              i = void 0,
              r = void 0;
          return t = this.ASTRO.equinox(e, 0), a = t - this.ASTRO.deltat(e) / 86400, i = a + this.ASTRO.equationOfTime(t), r = 52.5 / 360, i + r;
        }
      }, {
        key: "tehran_equinox_jd",
        value: function value(e) {
          var t = void 0;
          return t = this.tehran_equinox(e), Math.floor(t);
        }
      }, {
        key: "persiana_year",
        value: function value(e) {
          var t = this.jd_to_gregorian(e)[0] - 2,
              a = void 0,
              i = void 0,
              r = void 0;

          for (a = this.tehran_equinox_jd(t); a > e;) {
            t--, a = this.tehran_equinox_jd(t);
          }

          for (i = a - 1; !(a <= e && e < i);) {
            a = i, t++, i = this.tehran_equinox_jd(t);
          }

          return r = Math.round((a - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1, [r, a];
        }
      }, {
        key: "jd_to_persiana",
        value: function value(e) {
          var t = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0;
          return e = Math.floor(e) + .5, r = this.persiana_year(e), t = r[0], n = r[1], i = Math.floor((e - n) / 30) + 1, s = Math.floor(e) - this.persiana_to_jd(t, 1, 1) + 1, a = s <= 186 ? Math.ceil(s / 31) : Math.ceil((s - 6) / 30), i = Math.floor(e) - this.persiana_to_jd(t, a, 1) + 1, [t, a, i];
        }
      }, {
        key: "persiana_to_jd",
        value: function value(e, t, a) {
          var i = void 0,
              r = void 0,
              n = void 0;

          for (n = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (e - 1 - 1), i = [e - 1, 0]; i[0] < e;) {
            i = this.persiana_year(n), n = i[1] + (this.ASTRO.TropicalYear + 2);
          }

          return r = i[1], r + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + (a - 1);
        }
      }, {
        key: "leap_persiana",
        value: function value(e) {
          return this.persiana_to_jd(e + 1, 1, 1) - this.persiana_to_jd(e, 1, 1) > 365;
        }
      }, {
        key: "leap_persian",
        value: function value(e) {
          return 682 * ((e - (e > 0 ? 474 : 473)) % 2820 + 474 + 38) % 2816 < 682;
        }
      }, {
        key: "persian_to_jd",
        value: function value(e, t, a) {
          var i = void 0,
              r = void 0;
          return i = e - (e >= 0 ? 474 : 473), r = 474 + this.ASTRO.mod(i, 2820), a + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + Math.floor((682 * r - 110) / 2816) + 365 * (r - 1) + 1029983 * Math.floor(i / 2820) + (this.PERSIAN_EPOCH - 1);
        }
      }, {
        key: "jd_to_persian",
        value: function value(e) {
          var t = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0,
              o = void 0,
              h = void 0,
              u = void 0,
              d = void 0;
          return e = Math.floor(e) + .5, r = e - this.persian_to_jd(475, 1, 1), n = Math.floor(r / 1029983), s = this.ASTRO.mod(r, 1029983), 1029982 === s ? o = 2820 : (h = Math.floor(s / 366), u = this.ASTRO.mod(s, 366), o = Math.floor((2134 * h + 2816 * u + 2815) / 1028522) + h + 1), t = o + 2820 * n + 474, t <= 0 && t--, d = e - this.persian_to_jd(t, 1, 1) + 1, a = d <= 186 ? Math.ceil(d / 31) : Math.ceil((d - 6) / 30), i = e - this.persian_to_jd(t, a, 1) + 1, [t, a, i];
        }
      }, {
        key: "gWeekDayToPersian",
        value: function value(e) {
          return e + 2 === 8 ? 1 : e + 2 === 7 ? 7 : e + 2;
        }
      }, {
        key: "updateFromGregorian",
        value: function value() {
          var e = void 0,
              t = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0,
              o = void 0,
              h = void 0,
              u = void 0;
          t = this.ON.gregorian.year, a = this.ON.gregorian.month, i = this.ON.gregorian.day, r = 0, n = 0, s = 0, this.ON.gDate = new Date(t, a, i, this.ON.gregorian.hour, this.ON.gregorian.minute, this.ON.gregorian.second, this.ON.gregorian.millisecond), this.parent._utcMode === !1 && (this.ON.zone = this.ON.gDate.getTimezoneOffset()), this.ON.gregorian.year = this.ON.gDate.getFullYear(), this.ON.gregorian.month = this.ON.gDate.getMonth(), this.ON.gregorian.day = this.ON.gDate.getDate(), e = this.gregorian_to_jd(t, a + 1, i) + Math.floor(s + 60 * (n + 60 * r) + .5) / 86400, this.ON.julianday = e, this.ON.modifiedjulianday = e - this.JMJD, o = this.ASTRO.jwday(e), this.ON.gregorian.weekday = o + 1, this.ON.gregorian.leap = this.NormLeap[this.leap_gregorian(t) ? 1 : 0], o = this.ASTRO.jwday(e), "persian" == this.parent.calendarType && "algorithmic" == this.parent.leapYearMode && (u = this.jd_to_persian(e), this.ON.persian.year = u[0], this.ON.persian.month = u[1] - 1, this.ON.persian.day = u[2], this.ON.persian.weekday = this.gWeekDayToPersian(o), this.ON.persian.leap = this.NormLeap[this.leap_persian(u[0]) ? 1 : 0]), "persian" == this.parent.calendarType && "astronomical" == this.parent.leapYearMode && (u = this.jd_to_persiana(e), this.ON.persianAstro.year = u[0], this.ON.persianAstro.month = u[1] - 1, this.ON.persianAstro.day = u[2], this.ON.persianAstro.weekday = this.gWeekDayToPersian(o), this.ON.persianAstro.leap = this.NormLeap[this.leap_persiana(u[0]) ? 1 : 0]), null !== this.ON.gregserial.day && (this.ON.gregserial.day = e - this.J0000), h = 864e5 * (e - this.J1970), this.ON.unixtime = Math.round(h / 1e3);
        }
      }, {
        key: "calcGregorian",
        value: function value(e) {
          (e[0] || 0 === e[0]) && (this.ON.gregorian.year = e[0]), (e[1] || 0 === e[1]) && (this.ON.gregorian.month = e[1]), (e[2] || 0 === e[2]) && (this.ON.gregorian.day = e[2]), (e[3] || 0 === e[3]) && (this.ON.gregorian.hour = e[3]), (e[4] || 0 === e[4]) && (this.ON.gregorian.minute = e[4]), (e[5] || 0 === e[5]) && (this.ON.gregorian.second = e[5]), (e[6] || 0 === e[6]) && (this.ON.gregorian.millisecond = e[6]), this.updateFromGregorian();
        }
      }, {
        key: "calcJulian",
        value: function value() {
          var e = void 0,
              t = void 0;
          e = this.ON.julianday, t = this.jd_to_gregorian(e), this.ON.gregorian.year = t[0], this.ON.gregorian.month = t[1] - 1, this.ON.gregorian.day = t[2], this.updateFromGregorian();
        }
      }, {
        key: "setJulian",
        value: function value(e) {
          this.ON.julianday = e, this.calcJulian();
        }
      }, {
        key: "calcPersian",
        value: function value(e) {
          e[0] && (this.ON.persian.year = e[0]), e[1] && (this.ON.persian.month = e[1]), e[2] && (this.ON.persian.day = e[2]), e[3] && (this.ON.gregorian.hour = e[3]), e[4] && (this.ON.gregorian.minute = e[4]), e[5] && (this.ON.gregorian.second = e[5]), e[6] && (this.ON.gregorian.millisecond = e[6]), this.setJulian(this.persian_to_jd(this.ON.persian.year, this.ON.persian.month, this.ON.persian.day));
        }
      }, {
        key: "calcPersiana",
        value: function value(e) {
          e[0] && (this.ON.persianAstro.year = e[0]), e[1] && (this.ON.persianAstro.month = e[1]), e[2] && (this.ON.persianAstro.day = e[2]), e[3] && (this.ON.gregorian.hour = e[3]), e[4] && (this.ON.gregorian.minute = e[4]), e[5] && (this.ON.gregorian.second = e[5]), e[6] && (this.ON.gregorian.millisecond = e[6]), this.setJulian(this.persiana_to_jd(this.ON.persianAstro.year, this.ON.persianAstro.month, this.ON.persianAstro.day + .5));
        }
      }]), e;
    }();

    e.exports = o;
  }, function (e, t, a) {
    "use strict";

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var r = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
      };
    }(),
        n = function () {
      function e() {
        i(this, e), this.J2000 = 2451545, this.JulianCentury = 36525, this.JulianMillennium = 10 * this.JulianCentury, this.TropicalYear = 365.24219878, this.oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45], this.nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2], this.nutArgCoeff = [-171996, -1742, 92095, 89, -13187, -16, 5736, -31, -2274, -2, 977, -5, 2062, 2, -895, 5, 1426, -34, 54, -1, 712, 1, -7, 0, -517, 12, 224, -6, -386, -4, 200, 0, -301, 0, 129, -1, 217, -5, -95, 3, -158, 0, 0, 0, 129, 1, -70, 0, 123, 0, -53, 0, 63, 0, 0, 0, 63, 1, -33, 0, -59, 0, 26, 0, -58, -1, 32, 0, -51, 0, 27, 0, 48, 0, 0, 0, 46, 0, -24, 0, -38, 0, 16, 0, -31, 0, 13, 0, 29, 0, 0, 0, 29, 0, -12, 0, 26, 0, 0, 0, -22, 0, 0, 0, 21, 0, -10, 0, 17, -1, 0, 0, 16, 0, -8, 0, -16, 1, 7, 0, -15, 0, 9, 0, -13, 0, 7, 0, -12, 0, 6, 0, 11, 0, 0, 0, -10, 0, 5, 0, -8, 0, 3, 0, 7, 0, -3, 0, -7, 0, 0, 0, -7, 0, 3, 0, -7, 0, 3, 0, 6, 0, 0, 0, 6, 0, -3, 0, 6, 0, -3, 0, -6, 0, 3, 0, -6, 0, 3, 0, 5, 0, 0, 0, -5, 0, 3, 0, -5, 0, 3, 0, -5, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0], this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6], this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074], this.JDE0tab1000 = [new Array(1721139.29189, 365242.1374, .06134, .00111, -71e-5), new Array(1721233.25401, 365241.72562, -.05323, .00907, 25e-5), new Array(1721325.70455, 365242.49558, -.11677, -.00297, 74e-5), new Array(1721414.39987, 365242.88257, -.00769, -.00933, -6e-5)], this.JDE0tab2000 = [new Array(2451623.80984, 365242.37404, .05169, -.00411, -57e-5), new Array(2451716.56767, 365241.62603, .00325, .00888, -3e-4), new Array(2451810.21715, 365242.01767, -.11575, .00337, 78e-5), new Array(2451900.05952, 365242.74049, -.06223, -.00823, 32e-5)];
      }

      return r(e, [{
        key: "dtr",
        value: function value(e) {
          return e * Math.PI / 180;
        }
      }, {
        key: "rtd",
        value: function value(e) {
          return 180 * e / Math.PI;
        }
      }, {
        key: "fixangle",
        value: function value(e) {
          return e - 360 * Math.floor(e / 360);
        }
      }, {
        key: "fixangr",
        value: function value(e) {
          return e - 2 * Math.PI * Math.floor(e / (2 * Math.PI));
        }
      }, {
        key: "dsin",
        value: function value(e) {
          return Math.sin(this.dtr(e));
        }
      }, {
        key: "dcos",
        value: function value(e) {
          return Math.cos(this.dtr(e));
        }
      }, {
        key: "mod",
        value: function value(e, t) {
          return e - t * Math.floor(e / t);
        }
      }, {
        key: "jwday",
        value: function value(e) {
          return this.mod(Math.floor(e + 1.5), 7);
        }
      }, {
        key: "obliqeq",
        value: function value(e) {
          var t, a, i, r;
          if (i = a = (e - this.J2000) / (100 * this.JulianCentury), t = 23.43929111111111, Math.abs(a) < 1) for (r = 0; r < 10; r++) {
            t += this.oterms[r] / 3600 * i, i *= a;
          }
          return t;
        }
      }, {
        key: "nutation",
        value: function value(e) {
          var t,
              a,
              i,
              r,
              n,
              s,
              o,
              h,
              u = (e - 2451545) / 36525,
              d = [],
              l = 0,
              c = 0;

          for (s = u * (n = u * u), d[0] = this.dtr(297.850363 + 445267.11148 * u - .0019142 * n + s / 189474), d[1] = this.dtr(357.52772 + 35999.05034 * u - 1603e-7 * n - s / 3e5), d[2] = this.dtr(134.96298 + 477198.867398 * u + .0086972 * n + s / 56250), d[3] = this.dtr(93.27191 + 483202.017538 * u - .0036825 * n + s / 327270), d[4] = this.dtr(125.04452 - 1934.136261 * u + .0020708 * n + s / 45e4), i = 0; i < 5; i++) {
            d[i] = this.fixangr(d[i]);
          }

          for (o = u / 10, i = 0; i < 63; i++) {
            for (h = 0, r = 0; r < 5; r++) {
              0 !== this.nutArgMult[5 * i + r] && (h += this.nutArgMult[5 * i + r] * d[r]);
            }

            l += (this.nutArgCoeff[4 * i + 0] + this.nutArgCoeff[4 * i + 1] * o) * Math.sin(h), c += (this.nutArgCoeff[4 * i + 2] + this.nutArgCoeff[4 * i + 3] * o) * Math.cos(h);
          }

          return t = l / 36e6, a = c / 36e6, [t, a];
        }
      }, {
        key: "deltat",
        value: function value(e) {
          var t, a, i, r;
          return e >= 1620 && e <= 2e3 ? (i = Math.floor((e - 1620) / 2), a = (e - 1620) / 2 - i, t = this.deltaTtab[i] + (this.deltaTtab[i + 1] - this.deltaTtab[i]) * a) : (r = (e - 2e3) / 100, e < 948 ? t = 2177 + 497 * r + 44.1 * r * r : (t = 102 + 102 * r + 25.3 * r * r, e > 2e3 && e < 2100 && (t += .37 * (e - 2100)))), t;
        }
      }, {
        key: "equinox",
        value: function value(e, t) {
          var a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0,
              o = void 0,
              h = void 0,
              u = void 0,
              d = void 0;

          for (e < 1e3 ? (s = this.JDE0tab1000, d = e / 1e3) : (s = this.JDE0tab2000, d = (e - 2e3) / 1e3), n = s[t][0] + s[t][1] * d + s[t][2] * d * d + s[t][3] * d * d * d + s[t][4] * d * d * d * d, h = (n - 2451545) / 36525, u = 35999.373 * h - 2.47, a = 1 + .0334 * this.dcos(u) + 7e-4 * this.dcos(2 * u), o = 0, i = r = 0; i < 24; i++) {
            o += this.EquinoxpTerms[r] * this.dcos(this.EquinoxpTerms[r + 1] + this.EquinoxpTerms[r + 2] * h), r += 3;
          }

          return n + 1e-5 * o / a;
        }
      }, {
        key: "sunpos",
        value: function value(e) {
          var t = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0,
              o = void 0,
              h = void 0,
              u = void 0,
              d = void 0,
              l = void 0,
              c = void 0,
              y = void 0,
              f = void 0,
              v = void 0,
              m = void 0,
              p = void 0;
          return t = (e - this.J2000) / this.JulianCentury, a = t * t, i = 280.46646 + 36000.76983 * t + 3032e-7 * a, i = this.fixangle(i), r = 357.52911 + 35999.05029 * t + -1537e-7 * a, r = this.fixangle(r), n = .016708634 + -42037e-9 * t + -1.267e-7 * a, s = (1.914602 + -.004817 * t + -14e-6 * a) * this.dsin(r) + (.019993 - 101e-6 * t) * this.dsin(2 * r) + 289e-6 * this.dsin(3 * r), o = i + s, h = r + s, u = 1.000001018 * (1 - n * n) / (1 + n * this.dcos(h)), d = 125.04 - 1934.136 * t, l = o + -.00569 + -.00478 * this.dsin(d), y = this.obliqeq(e), c = y + .00256 * this.dcos(d), f = this.rtd(Math.atan2(this.dcos(y) * this.dsin(o), this.dcos(o))), f = this.fixangle(f), v = this.rtd(Math.asin(this.dsin(y) * this.dsin(o))), m = this.rtd(Math.atan2(this.dcos(c) * this.dsin(l), this.dcos(l))), m = this.fixangle(m), p = this.rtd(Math.asin(this.dsin(c) * this.dsin(l))), [i, r, n, s, o, h, u, l, f, v, m, p];
        }
      }, {
        key: "equationOfTime",
        value: function value(e) {
          var t = void 0,
              a = void 0,
              i = void 0,
              r = void 0,
              n = void 0,
              s = void 0;
          return s = (e - this.J2000) / this.JulianMillennium, n = 280.4664567 + 360007.6982779 * s + .03032028 * s * s + s * s * s / 49931 + -(s * s * s * s) / 15300 + -(s * s * s * s * s) / 2e6, n = this.fixangle(n), t = this.sunpos(e)[10], a = this.nutation(e)[0], r = this.obliqeq(e) + this.nutation(e)[1], i = n + -.0057183 + -t + a * this.dcos(r), i -= 20 * Math.floor(i / 20), i /= 1440;
        }
      }]), e;
    }();

    e.exports = n;
  }, function (e, t, a) {
    "use strict";

    e.exports = {
      durationUnit: {
        year: ["y", "years", "year"],
        month: ["M", "months", "month"],
        day: ["d", "days", "day"],
        hour: ["h", "hours", "hour"],
        minute: ["m", "minutes", "minute"],
        second: ["s", "second", "seconds"],
        millisecond: ["ms", "milliseconds", "millisecond"],
        week: ["w", "", "weeks", "week"]
      }
    };
  }, function (e, t, a) {
    "use strict";

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var r = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      return function (t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
      };
    }(),
        n = a(0),
        s = new n().normalizeDuration,
        o = new n().absRound,
        h = new n().absFloor,
        u = function () {
      function e(t, a) {
        i(this, e);
        var r = {},
            n = this._data = {},
            u = 0,
            d = s(t, a);
        r[d.unit] = d.value, u = r.milliseconds || r.millisecond || r.ms || 0;
        var l = r.years || r.year || r.y || 0,
            c = r.months || r.month || r.M || 0,
            y = r.weeks || r.w || r.week || 0,
            f = r.days || r.d || r.day || 0,
            v = r.hours || r.hour || r.h || 0,
            m = r.minutes || r.minute || r.m || 0,
            p = r.seconds || r.second || r.s || 0;
        return this._milliseconds = u + 1e3 * p + 6e4 * m + 36e5 * v, this._days = f + 7 * y, this._months = c + 12 * l, n.milliseconds = u % 1e3, p += h(u / 1e3), n.seconds = p % 60, m += o(p / 60), n.minutes = m % 60, v += o(m / 60), n.hours = v % 24, f += o(v / 24), f += 7 * y, n.days = f % 30, c += o(f / 30), n.months = c % 12, l += o(c / 12), n.years = l, this;
      }

      return r(e, [{
        key: "valueOf",
        value: function value() {
          return this._milliseconds + 864e5 * this._days + 2592e6 * this._months;
        }
      }]), e;
    }();

    e.exports = u;
  }, function (e, t, a) {
    "use strict";

    e.exports = {
      gregorian: {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
      },
      persian: {
        months: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
        monthsShort: ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf"],
        weekdays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        persianDaysName: ["Urmazd", "Bahman", "Ordibehesht", "Shahrivar", "Sepandarmaz", "Khurdad", "Amordad", "Dey-be-azar", "Azar", "Aban", "Khorshid", "Mah", "Tir", "Gush", "Dey-be-mehr", "Mehr", "Sorush", "Rashn", "Farvardin", "Bahram", "Ram", "Bad", "Dey-be-din", "Din", "Ord", "Ashtad", "Asman", "Zamyad", "Mantre-sepand", "Anaram", "Ziadi"]
      }
    };
  }, function (e, t, a) {
    "use strict";

    e.exports = {
      gregorian: {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_")
      },
      persian: {
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthsShort: ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف"],
        weekdays: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج‌شنبه", "جمعه"],
        weekdaysShort: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
        weekdaysMin: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
        persianDaysName: ["اورمزد", "بهمن", "اوردیبهشت", "شهریور", "سپندارمذ", "خورداد", "امرداد", "دی به آذز", "آذز", "آبان", "خورشید", "ماه", "تیر", "گوش", "دی به مهر", "مهر", "سروش", "رشن", "فروردین", "بهرام", "رام", "باد", "دی به دین", "دین", "ارد", "اشتاد", "آسمان", "زامیاد", "مانتره سپند", "انارام", "زیادی"]
      }
    };
  }, function (e, t, a) {
    "use strict";

    var i = a(1);
    i.calendarType = "persian", i.leapYearMode = "astronomical", i.localType = "fa", e.exports = i;
  }, function (e, t, a) {
    "use strict";

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var r = function e() {
      i(this, e), this.gDate = null, this.modifiedjulianday = 0, this.julianday = 0, this.gregserial = {
        day: 0
      }, this.zone = 0, this.gregorian = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        weekday: 0,
        unix: 0,
        leap: 0
      }, this.juliancalendar = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
      }, this.islamic = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
      }, this.persianAlgo = this.persian = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
      }, this.persianAstro = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
      }, this.isoweek = {
        year: 0,
        week: 0,
        day: 0
      }, this.isoday = {
        year: 0,
        day: 0
      };
    };

    e.exports = r;
  }, function (e, t, a) {
    "use strict";

    e.exports = {
      isArray: function isArray(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
      isNumber: function isNumber(e) {
        return "number" == typeof e;
      },
      isDate: function isDate(e) {
        return e instanceof Date;
      }
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\roocket\LaravelPro\resources\js\admin.js */"./resources/js/admin.js");


/***/ })

/******/ });
