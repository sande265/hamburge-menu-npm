"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/styles.css");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HamburgerMenu = props => {
  let {
    children,
    options,
    callback,
    history
  } = props;
  /**
   * Options Array Structure
   * options: [
   *     {
   *          name: "" | String, Required
   *          icon: "" | String, Optional
   *          callback: () => {} | Function, Optional
   *      }
   *      or 
   *      For predefined values, "view", "delete", "edit"
   * ],
   * Callback is directly assotiated with Delete Option,
   * History is only accessible when parent props are passed to the component as {...props} or {...this.props}
   * children are the items enclosed in the component & require no additional params.
   **/

  (0, _react.useEffect)(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (options && !Array.isArray(options)) return /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger",
    title: "Invalid Type option, Required array"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-alert-fill text-danger fs-6"
  }));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: " dropstart tableActions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "p-0 btn btn-outline-primary",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-more-2-fill"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu m-0 p-0",
    style: {
      minWidth: 200
    }
  }, children, options && options.map((item, idx) => {
    switch (typeof item === 'string' ? item : item === null || item === void 0 ? void 0 : item.name) {
      case 'view':
        return /*#__PURE__*/_react.default.createElement("li", {
          key: idx,
          className: "pointer-cursor"
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: true,
          className: "dropdown-item",
          title: "View",
          onClick: () => history.push(item.url ? item.url : '/')
        }, /*#__PURE__*/_react.default.createElement("i", {
          className: "ri-eye-fill me-2 fixRemixPosition"
        }), " View"));

      case 'edit':
        return /*#__PURE__*/_react.default.createElement("li", {
          key: idx,
          className: "pointer-cursor"
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: true,
          className: "dropdown-item",
          title: "Edit",
          onClick: () => history.push(item.url ? item.url : '/')
        }, /*#__PURE__*/_react.default.createElement("i", {
          className: "ri-pencil-fill me-2 fixRemixPosition"
        }), " Edit"));

      case 'delete':
        return /*#__PURE__*/_react.default.createElement("li", {
          key: idx,
          className: "pointer-cursor"
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: true,
          className: "dropdown-item",
          title: "Delete",
          onClick: callback
        }, /*#__PURE__*/_react.default.createElement("i", {
          className: "ri-delete-bin-6-fill me-2 fixRemixPosition"
        }), " Delete"));

      case typeof item === 'object' ? item.name : '':
        return /*#__PURE__*/_react.default.createElement("li", {
          key: idx,
          className: "pointer-cursor"
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: true,
          className: "dropdown-item",
          title: item === null || item === void 0 ? void 0 : item.name,
          onClick: item === null || item === void 0 ? void 0 : item.callback
        }, /*#__PURE__*/_react.default.createElement("i", {
          className: "".concat(item === null || item === void 0 ? void 0 : item.icon, " me-2 fixRemixPosition")
        }), " ", item === null || item === void 0 ? void 0 : item.name));

      default:
        return null;
    }
  })));
};

HamburgerMenu.propTypes = {
  children: _propTypes.default.any.isRequired,
  options: _propTypes.default.array,
  url: _propTypes.default.string.isRequired,
  callback: _propTypes.default.func.isRequired
};
var _default = HamburgerMenu;
exports.default = _default;