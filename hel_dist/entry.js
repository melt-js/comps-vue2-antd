(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-vue2-antd"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

  /*
  |--------------------------------------------------------------------------
  |
  | 对应 package.json/appGroupName
  |
  |--------------------------------------------------------------------------
  */

  const LIB_NAME = 'comps-vue2-antd';

  /** 轻量代理与类型入口；宿主预加载实现后再动态导入业务模块。 */
  /**
   * 将提供给用户的lib暴露出去（同时也暴露了类型）
   */
  var dtlib = helLibProxy.exposeLib(LIB_NAME);
  var App = dtlib.App;
  var HelloWorld = dtlib.HelloWorld;
  var TierRanking = dtlib.TierRanking;
  var DfBreadcrumb = dtlib.DfBreadcrumb;
  var DfBreadcrumbItem = dtlib.DfBreadcrumbItem;
  var DfEmpty = dtlib.DfEmpty;
  var DfPageTitle = dtlib.DfPageTitle;
  var DfPageHandle = dtlib.DfPageHandle;
  var DfPageHandleItem = dtlib.DfPageHandleItem;
  var DfFiltersPopover = dtlib.DfFiltersPopover;
  var DfFiltersPopoverItem = dtlib.DfFiltersPopoverItem;
  var DfMorePopover = dtlib.DfMorePopover;
  var DfMorePopoverItem = dtlib.DfMorePopoverItem;
  var DfNavigation = dtlib.DfNavigation;
  var DfResizable = dtlib.DfResizable;
  var DfTransferModal = dtlib.DfTransferModal;
  var DfLargeSelect = dtlib.DfLargeSelect;
  var DfInputLimit = dtlib.DfInputLimit;
  var DfFullLoading = dtlib.DfFullLoading;
  var install = dtlib.install;
  var rules = dtlib.rules;
  var validate = dtlib.validate;
  var utils = dtlib.utils;
  var directives = dtlib.directives;

  exports.App = App;
  exports.DfBreadcrumb = DfBreadcrumb;
  exports.DfBreadcrumbItem = DfBreadcrumbItem;
  exports.DfEmpty = DfEmpty;
  exports.DfFiltersPopover = DfFiltersPopover;
  exports.DfFiltersPopoverItem = DfFiltersPopoverItem;
  exports.DfFullLoading = DfFullLoading;
  exports.DfInputLimit = DfInputLimit;
  exports.DfLargeSelect = DfLargeSelect;
  exports.DfMorePopover = DfMorePopover;
  exports.DfMorePopoverItem = DfMorePopoverItem;
  exports.DfNavigation = DfNavigation;
  exports.DfPageHandle = DfPageHandle;
  exports.DfPageHandleItem = DfPageHandleItem;
  exports.DfPageTitle = DfPageTitle;
  exports.DfResizable = DfResizable;
  exports.DfTransferModal = DfTransferModal;
  exports.HelloWorld = HelloWorld;
  exports.TierRanking = TierRanking;
  exports["default"] = dtlib;
  exports.directives = directives;
  exports.dtlib = dtlib;
  exports.install = install;
  exports.rules = rules;
  exports.utils = utils;
  exports.validate = validate;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
