/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/SettingsPage.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/SettingsPage.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);








var SettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SettingsPage, _ExtensionPage);

  function SettingsPage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ExtensionPage.call.apply(_ExtensionPage, [this].concat(args)) || this;
    _this.newEventData = flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().fathomEventsRepository.getServerEventData();
    _this.loadingEventData = false;
    return _this;
  }

  var _proto = SettingsPage.prototype;

  _proto.sections = function sections(vnode) {
    var sects = _ExtensionPage.prototype.sections.call(this, vnode);

    sects.setPriority('content', 100);
    sects.add('events', this.eventsSection(), 50);
    sects.setPriority('permissions', 10);
    return sects;
  };

  _proto.updateEventData = function updateEventData(id, _ref) {
    var enabled = _ref.enabled,
        eventId = _ref.eventId;

    if (!Object.keys(this.newEventData).includes(id)) {
      this.newEventData[id] = {
        enabled: false,
        eventId: ''
      };
    }

    if (enabled !== undefined) this.newEventData[id].enabled = enabled;
    if (eventId !== undefined) this.newEventData[id].eventId = eventId;
  };

  _proto.saveEventData = /*#__PURE__*/function () {
    var _saveEventData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.loadingEventData = true;
              m.redraw();
              _context.next = 4;
              return flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().fathomEventsRepository.saveServerEventData(this.newEventData);

            case 4:
              this.loadingEventData = false;
              m.redraw();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function saveEventData() {
      return _saveEventData.apply(this, arguments);
    }

    return saveEventData;
  }();

  _proto.eventsSection = function eventsSection() {
    var _this2 = this;

    return m("div", {
      className: "FathomSettings-events"
    }, m("div", {
      className: "ExtensionPage-permissions-header"
    }, m("div", {
      className: "container"
    }, m("h2", {
      className: "ExtensionTitle"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('blomstra-fathom-analytics.admin.events.heading')))), m("div", {
      className: "container"
    }, m("ul", {
      className: "FathomSettings-eventList"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().fathomEventsRepository.getAllEvents().map(function (event, i) {
      var _this2$newEventData$e, _this2$newEventData$e2, _this2$newEventData$e3, _this2$newEventData$e4;

      return m("li", {
        className: "FathomSettings-eventListItem"
      }, m("div", {
        className: "FathomSettings-eventListItem-name"
      }, event.name), m("div", {
        className: "FathomSettings-eventListItem-description"
      }, event.description), m("label", {
        htmlFor: "fathom-event-id-" + i,
        className: "sr-only"
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('blomstra-fathom-analytics.admin.settings.event_list.event_id')), m("input", {
        className: "FormControl FathomSettings-eventListItem-eventId",
        disabled: !((_this2$newEventData$e = _this2.newEventData[event.id]) != null && _this2$newEventData$e.enabled),
        type: "text",
        id: "fathom-event-id-" + i,
        placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('blomstra-fathom-analytics.admin.settings.event_list.event_id'),
        value: (_this2$newEventData$e2 = (_this2$newEventData$e3 = _this2.newEventData[event.id]) == null ? void 0 : _this2$newEventData$e3.eventId) != null ? _this2$newEventData$e2 : '',
        oninput: function oninput(e) {
          _this2.updateEventData(event.id, {
            eventId: e.target.value
          });
        }
      }), m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "FathomSettings-eventListItem-toggle",
        "aria-label": flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('blomstra-fathom-analytics.admin.settings.event_list.toggle_event_enabled'),
        checked: flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().fathomEventsRepository.isEventEnabled(event.id),
        state: (_this2$newEventData$e4 = _this2.newEventData[event.id]) == null ? void 0 : _this2$newEventData$e4.enabled,
        onchange: function onchange(e) {
          _this2.updateEventData(event.id, {
            enabled: e
          });
        }
      }));
    })), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "Button Button--primary FathomSettings-eventListSave",
      loading: this.loadingEventData,
      onclick: this.saveEventData.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('blomstra-fathom-analytics.admin.settings.event_list.save'))));
  };

  return SettingsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_4___default()));



/***/ }),

/***/ "./src/admin/components/index.ts":
/*!***************************************!*\
  !*** ./src/admin/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* reexport safe */ _SettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsPage */ "./src/admin/components/SettingsPage.tsx");


/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* reexport module object */ _components__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/admin/components/SettingsPage.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/admin/components/index.ts");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('blomstra/fathom-analytics', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('blomstra-fathom-analytics').registerSetting({
    setting: 'blomstra-fathom-analytics.site_id',
    type: 'text',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('blomstra-fathom-analytics.admin.settings.site_id_label'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('blomstra-fathom-analytics.admin.settings.site_id_help')
  }).registerPage(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
});



/***/ }),

/***/ "./src/common/DefaultEvents/OpenLogInModal.ts":
/*!****************************************************!*\
  !*** ./src/common/DefaultEvents/OpenLogInModal.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Log in modal opened',
  description: 'Triggered when the log in modal is opened',
  id: 'log-in-modal-opened',
  code: function code(e) {
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'oninit', function () {
      e.track();
    });
  }
});

/***/ }),

/***/ "./src/common/DefaultEvents/OpenSignUpModal.ts":
/*!*****************************************************!*\
  !*** ./src/common/DefaultEvents/OpenSignUpModal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Sign up modal opened',
  description: 'Triggered when the sign up modal is opened',
  id: 'sign-up-modal-opened',
  code: function code(e) {
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'oninit', function () {
      e.track();
    });
  }
});

/***/ }),

/***/ "./src/common/DefaultEvents/ViewTagsPage.ts":
/*!**************************************************!*\
  !*** ./src/common/DefaultEvents/ViewTagsPage.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventHelpers_PageViewEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventHelpers/PageViewEvent */ "./src/common/EventHelpers/PageViewEvent.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_EventHelpers_PageViewEvent__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'View tags page',
  description: 'Triggered when a user views the Tags index page.',
  id: 'view-tags-page',
  flarumRouteName: 'tags',
  requiresExtensions: ['flarum-tags']
}));

/***/ }),

/***/ "./src/common/DefaultEvents/index.ts":
/*!*******************************************!*\
  !*** ./src/common/DefaultEvents/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenLogInModal": () => (/* reexport safe */ _OpenLogInModal__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "OpenSignUpModal": () => (/* reexport safe */ _OpenSignUpModal__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ViewTagsPage": () => (/* reexport safe */ _ViewTagsPage__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _OpenLogInModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenLogInModal */ "./src/common/DefaultEvents/OpenLogInModal.ts");
/* harmony import */ var _OpenSignUpModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenSignUpModal */ "./src/common/DefaultEvents/OpenSignUpModal.ts");
/* harmony import */ var _ViewTagsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewTagsPage */ "./src/common/DefaultEvents/ViewTagsPage.ts");




/***/ }),

/***/ "./src/common/EventHelpers/PageViewEvent.ts":
/*!**************************************************!*\
  !*** ./src/common/EventHelpers/PageViewEvent.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageViewEvent)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Helper to generate an event that triggers when a page is viewed.
 */
function PageViewEvent(_ref) {
  var name = _ref.name,
      description = _ref.description,
      id = _ref.id,
      requiresExtensions = _ref.requiresExtensions,
      flarumRouteName = _ref.flarumRouteName;
  return {
    name: name,
    description: description,
    id: id,
    requiresExtensions: requiresExtensions,
    code: function code(e) {
      if (!Object.keys((flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().routes)).includes(flarumRouteName)) {
        console.warn("[Fathom Analytics] The route name passed to event " + id + " (" + flarumRouteName + ") is not present in Flarum. Does this route use an extension not provided in the requiresExtensions array?");
        return;
      }

      (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'oncreate', function () {
        var routeName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().current.get('routeName');
        if (routeName === flarumRouteName) e.track();
      });
    }
  };
}

/***/ }),

/***/ "./src/common/EventHelpers/index.ts":
/*!******************************************!*\
  !*** ./src/common/EventHelpers/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageViewEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageViewEvent */ "./src/common/EventHelpers/PageViewEvent.ts");


/***/ }),

/***/ "./src/common/EventsRepository.ts":
/*!****************************************!*\
  !*** ./src/common/EventsRepository.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsRepository": () => (/* binding */ EventsRepository)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DefaultEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultEvents */ "./src/common/DefaultEvents/index.ts");





var EventsRepository = /*#__PURE__*/function () {
  function EventsRepository() {
    var _this = this;

    this.events = {};
    Object.values(_DefaultEvents__WEBPACK_IMPORTED_MODULE_4__).forEach(function (event) {
      return _this.registerEvent(event);
    });
  }

  var _proto = EventsRepository.prototype;

  _proto.getAllEvents = function getAllEvents() {
    return Object.values(this.events);
  };

  _proto.registerEvent = function registerEvent(event) {
    this.events[event.id] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event, {
      fathomEventId: '',
      track: function track() {
        if (!this.fathomEventId) return;
        window.fathom.trackGoal(this.fathomEventId, 0);
      }
    });
  };

  _proto.getEnabledEvents = function getEnabledEvents() {
    var eventIds = new Set(this.getEnabledEventIDs());
    return this.getAllEvents().filter(function (event) {
      return eventIds.has(event.id);
    });
  };

  _proto.isEventEnabled = function isEventEnabled(eventId) {
    return this.getEnabledEventIDs().includes(eventId);
  };

  _proto.getServerEventData = function getServerEventData() {
    var _this2 = this;

    var val = flarum_common_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blomstra-fathom-analytics.enabled_events') || {};

    if (typeof val !== 'object' || Array.isArray(val)) {
      val = {};
    }

    val = Object.fromEntries(Object.entries(val).filter(function (_ref) {
      var id = _ref[0];
      return id in _this2.events;
    })); // deep clone

    return JSON.parse(JSON.stringify(val));
  };

  _proto.propogateServerEventData = function propogateServerEventData() {
    var eventData = this.getServerEventData();
    this.getAllEvents().forEach(function (event) {
      var _ref2 = eventData[event.id] || {
        enabled: false,
        eventId: ''
      },
          enabled = _ref2.enabled,
          eventId = _ref2.eventId;

      event.fathomEventId = eventId;
    });
  };

  _proto.saveServerEventData = /*#__PURE__*/function () {
    var _saveServerEventData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(eventData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return flarum_common_app__WEBPACK_IMPORTED_MODULE_3___default().request({
                method: 'POST',
                url: flarum_common_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('apiUrl') + '/settings',
                body: {
                  'blomstra-fathom-analytics.enabled_events': JSON.stringify(eventData)
                }
              });

            case 2:
              (flarum_common_app__WEBPACK_IMPORTED_MODULE_3___default().forum.data.attributes["blomstra-fathom-analytics.enabled_events"]) = eventData;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function saveServerEventData(_x) {
      return _saveServerEventData.apply(this, arguments);
    }

    return saveServerEventData;
  }();

  _proto.getEnabledEventIDs = function getEnabledEventIDs() {
    return Object.entries(this.getServerEventData()).filter(function (_ref3) {
      var enabled = _ref3[1].enabled;
      return enabled;
    }).map(function (_ref4) {
      var eventId = _ref4[0];
      return eventId;
    });
  };

  return EventsRepository;
}();

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultEvents": () => (/* reexport module object */ _DefaultEvents__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "EventHelpers": () => (/* reexport module object */ _EventHelpers__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "EventsRepository": () => (/* reexport safe */ _EventsRepository__WEBPACK_IMPORTED_MODULE_1__.EventsRepository)
/* harmony export */ });
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventsRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventsRepository */ "./src/common/EventsRepository.ts");
/* harmony import */ var _DefaultEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultEvents */ "./src/common/DefaultEvents/index.ts");
/* harmony import */ var _EventHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventHelpers */ "./src/common/EventHelpers/index.ts");

 // Remove old canonical links - https://github.com/flarum/framework/issues/3648

var oldPushState = window.history.pushState;

window.history.pushState = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  oldPushState.call.apply(oldPushState, [this].concat(args));
  document.head.querySelectorAll('link[rel="canonical"]').forEach(function (link) {
    link.remove();
  });
  document.head.querySelectorAll('link[rel="next"], link[rel="prev"]').forEach(function (link) {
    link.remove();
  });
}; // ------------------------------------------------------------------------


flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('blomstra/fathom-analytics/common', function () {
  window.app.fathomEventsRepository = new _EventsRepository__WEBPACK_IMPORTED_MODULE_1__.EventsRepository();
});






/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.
var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();

module.exports = runtime; // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultEvents": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.DefaultEvents),
/* harmony export */   "EventHelpers": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.EventHelpers),
/* harmony export */   "EventsRepository": () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.EventsRepository)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map