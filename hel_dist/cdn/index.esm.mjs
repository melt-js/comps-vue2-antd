import { exposeLib } from 'hel-lib-proxy';

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
var dtlib = exposeLib(LIB_NAME);
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

export { App, DfBreadcrumb, DfBreadcrumbItem, DfEmpty, DfFiltersPopover, DfFiltersPopoverItem, DfFullLoading, DfInputLimit, DfLargeSelect, DfMorePopover, DfMorePopoverItem, DfNavigation, DfPageHandle, DfPageHandleItem, DfPageTitle, DfResizable, DfTransferModal, HelloWorld, TierRanking, dtlib as default, directives, dtlib, install, rules, utils, validate };
