import { ROUTER_NAVIGATION, ROUTER_ERROR, ROUTER_CANCEL, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, PRIMARY_OUTLET, RouterModule, DefaultUrlSerializer, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, UrlSerializer } from '@angular/router';
import { __decorate, __metadata, __assign, __values, __spread, __extends, __read, __awaiter, __generator } from 'tslib';
import { Observable, of, throwError, Subscription, combineLatest } from 'rxjs';
import { tap, map, retry, filter, switchMap, take, catchError, mergeMap, exhaustMap, groupBy, withLatestFrom, takeWhile } from 'rxjs/operators';
import { CommonModule, Location, DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HTTP_INTERCEPTORS, HttpParams, HttpClientModule } from '@angular/common/http';
import { createSelector, createFeatureSelector, select, Store, StoreModule, META_REDUCERS } from '@ngrx/store';
import { Effect, Actions, ofType, EffectsModule } from '@ngrx/effects';
import { InjectionToken, NgModule, Injectable, Injector, Inject, Optional, PLATFORM_ID, Pipe, APP_INITIALIZER, defineInjectable, inject, INJECTOR, ComponentFactoryResolver } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOADER_LOAD_ACTION = '[LOADER] LOAD';
/** @type {?} */
var LOADER_FAIL_ACTION = '[LOADER] FAIL';
/** @type {?} */
var LOADER_SUCCESS_ACTION = '[LOADER] SUCCESS';
/** @type {?} */
var LOADER_RESET_ACTION = '[LOADER] RESET';
/**
 * @param {?} entityType
 * @return {?}
 */
function loadMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            load: true
        }
    };
}
/**
 * @param {?} entityType
 * @param {?=} error
 * @return {?}
 */
function failMeta(entityType, error) {
    return {
        entityType: entityType,
        loader: {
            error: error ? error : true
        }
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
function successMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            success: true
        }
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
function resetMeta(entityType) {
    return {
        entityType: entityType,
        loader: {}
    };
}
var LoaderLoadAction = /** @class */ (function () {
    function LoaderLoadAction(entityType) {
        this.type = LOADER_LOAD_ACTION;
        this.meta = loadMeta(entityType);
    }
    return LoaderLoadAction;
}());
var LoaderFailAction = /** @class */ (function () {
    function LoaderFailAction(entityType, error) {
        this.type = LOADER_FAIL_ACTION;
        this.meta = failMeta(entityType, error);
    }
    return LoaderFailAction;
}());
var LoaderSuccessAction = /** @class */ (function () {
    function LoaderSuccessAction(entityType) {
        this.type = LOADER_SUCCESS_ACTION;
        this.meta = successMeta(entityType);
    }
    return LoaderSuccessAction;
}());
var LoaderResetAction = /** @class */ (function () {
    function LoaderResetAction(entityType) {
        this.type = LOADER_RESET_ACTION;
        this.meta = resetMeta(entityType);
    }
    return LoaderResetAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CART_FEATURE = 'cart';
/** @type {?} */
var CART_DATA = '[Cart] Cart Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CREATE_CART = '[Cart] Create Cart';
/** @type {?} */
var CREATE_CART_FAIL = '[Cart] Create Cart Fail';
/** @type {?} */
var CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
/** @type {?} */
var LOAD_CART = '[Cart] Load Cart';
/** @type {?} */
var LOAD_CART_FAIL = '[Cart] Load Cart Fail';
/** @type {?} */
var LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
/** @type {?} */
var MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
var CreateCart = /** @class */ (function (_super) {
    __extends(CreateCart, _super);
    function CreateCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART;
        return _this;
    }
    return CreateCart;
}(LoaderLoadAction));
var CreateCartFail = /** @class */ (function (_super) {
    __extends(CreateCartFail, _super);
    function CreateCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_FAIL;
        return _this;
    }
    return CreateCartFail;
}(LoaderFailAction));
var CreateCartSuccess = /** @class */ (function (_super) {
    __extends(CreateCartSuccess, _super);
    function CreateCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_SUCCESS;
        return _this;
    }
    return CreateCartSuccess;
}(LoaderSuccessAction));
var LoadCart = /** @class */ (function (_super) {
    __extends(LoadCart, _super);
    function LoadCart(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CART;
        return _this;
    }
    return LoadCart;
}(LoaderLoadAction));
var LoadCartFail = /** @class */ (function (_super) {
    __extends(LoadCartFail, _super);
    function LoadCartFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_FAIL;
        return _this;
    }
    return LoadCartFail;
}(LoaderFailAction));
var LoadCartSuccess = /** @class */ (function (_super) {
    __extends(LoadCartSuccess, _super);
    function LoadCartSuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_SUCCESS;
        return _this;
    }
    return LoadCartSuccess;
}(LoaderSuccessAction));
var MergeCart = /** @class */ (function () {
    function MergeCart(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
    return MergeCart;
}());
var MergeCartSuccess = /** @class */ (function () {
    function MergeCartSuccess() {
        this.type = MERGE_CART_SUCCESS;
    }
    return MergeCartSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
var ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
var ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
var REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
var REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
var REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
var UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
var UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
var UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
var AddEntry = /** @class */ (function (_super) {
    __extends(AddEntry, _super);
    function AddEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_ENTRY;
        return _this;
    }
    return AddEntry;
}(LoaderLoadAction));
var AddEntrySuccess = /** @class */ (function (_super) {
    __extends(AddEntrySuccess, _super);
    function AddEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_ENTRY_SUCCESS;
        return _this;
    }
    return AddEntrySuccess;
}(LoaderSuccessAction));
var AddEntryFail = /** @class */ (function (_super) {
    __extends(AddEntryFail, _super);
    function AddEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = ADD_ENTRY_FAIL;
        return _this;
    }
    return AddEntryFail;
}(LoaderFailAction));
var RemoveEntry = /** @class */ (function (_super) {
    __extends(RemoveEntry, _super);
    function RemoveEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = REMOVE_ENTRY;
        return _this;
    }
    return RemoveEntry;
}(LoaderLoadAction));
var RemoveEntrySuccess = /** @class */ (function (_super) {
    __extends(RemoveEntrySuccess, _super);
    function RemoveEntrySuccess() {
        var _this = _super.call(this, CART_DATA) || this;
        _this.type = REMOVE_ENTRY_SUCCESS;
        return _this;
    }
    return RemoveEntrySuccess;
}(LoaderSuccessAction));
var RemoveEntryFail = /** @class */ (function (_super) {
    __extends(RemoveEntryFail, _super);
    function RemoveEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_ENTRY_FAIL;
        return _this;
    }
    return RemoveEntryFail;
}(LoaderFailAction));
var UpdateEntry = /** @class */ (function (_super) {
    __extends(UpdateEntry, _super);
    function UpdateEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = UPDATE_ENTRY;
        return _this;
    }
    return UpdateEntry;
}(LoaderLoadAction));
var UpdateEntrySuccess = /** @class */ (function (_super) {
    __extends(UpdateEntrySuccess, _super);
    function UpdateEntrySuccess() {
        var _this = _super.call(this, CART_DATA) || this;
        _this.type = UPDATE_ENTRY_SUCCESS;
        return _this;
    }
    return UpdateEntrySuccess;
}(LoaderSuccessAction));
var UpdateEntryFail = /** @class */ (function (_super) {
    __extends(UpdateEntryFail, _super);
    function UpdateEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_ENTRY_FAIL;
        return _this;
    }
    return UpdateEntryFail;
}(LoaderFailAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderValueSelector(state) {
    return state.value;
}
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderLoadingSelector(state) {
    return state.loading;
}
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderErrorSelector(state) {
    return state.error;
}
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderSuccessSelector(state) {
    return state.success;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getCartContentSelector = function (state) { return state.content; };
/** @type {?} */
var getRefreshSelector = function (state) { return state.refresh; };
/** @type {?} */
var getEntriesSelector = function (state) { return state.entries; };
/** @type {?} */
var getCartMergeCompleteSelector = function (state) {
    return state.cartMergeComplete;
};
/** @type {?} */
var getCartsState = createFeatureSelector(CART_FEATURE);
/** @type {?} */
var getActiveCartState = createSelector(getCartsState, function (cartsState) { return cartsState.active; });
/** @type {?} */
var getCartState = createSelector(getActiveCartState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
var getRefresh = createSelector(getCartState, getRefreshSelector);
/** @type {?} */
var getLoaded = createSelector(getActiveCartState, function (state) {
    return loaderSuccessSelector(state) &&
        !loaderLoadingSelector(state) &&
        !loaderValueSelector(state).refresh;
});
/** @type {?} */
var getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
var getEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
var getEntrySelectorFactory = function (productCode) {
    return createSelector(getEntriesMap, function (entries) {
        if (entries) {
            return entries[productCode];
        }
    });
};
/** @type {?} */
var getEntries = createSelector(getEntriesMap, function (entities) {
    return Object.keys(entities).map(function (code) { return entities[code]; });
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ServerConfig = /** @class */ (function () {
    function ServerConfig() {
    }
    return ServerConfig;
}());
/** @type {?} */
var defaultServerConfig = {
    server: {
        occPrefix: '/rest/v2/'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * @param {?=} target
 * @param {...?} sources
 * @return {?}
 */
function deepMerge(target) {
    if (target === void 0) { target = {}; }
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var _a, _b;
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    var source = sources.shift() || {};
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                }
                deepMerge(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return deepMerge.apply(void 0, __spread([target], sources));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function serverConfigValidator(config) {
    if (config.server.baseUrl === undefined) {
        return 'Please configure server.baseUrl before using storefront library!';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
/**
 * @param {?} configValidator
 * @return {?}
 */
function provideConfigValidator(configValidator) {
    return {
        provide: ConfigValidatorToken,
        useValue: configValidator,
        multi: true
    };
}
/**
 * @param {?} config
 * @param {?} configValidators
 * @return {?}
 */
function validateConfig(config, configValidators) {
    var e_1, _a;
    try {
        for (var configValidators_1 = __values(configValidators), configValidators_1_1 = configValidators_1.next(); !configValidators_1_1.done; configValidators_1_1 = configValidators_1.next()) {
            var validate = configValidators_1_1.value;
            /** @type {?} */
            var warning = validate(config);
            if (warning) {
                console.warn(warning);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configValidators_1_1 && !configValidators_1_1.done && (_a = configValidators_1.return)) _a.call(configValidators_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Config = new InjectionToken('Configuration');
/** @type {?} */
var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * @param {?=} config
 * @return {?}
 */
function provideConfig(config) {
    if (config === void 0) { config = {}; }
    return { provide: ConfigChunk, useValue: config, multi: true };
}
/**
 * @param {?} configFactory
 * @param {?=} deps
 * @return {?}
 */
function provideConfigFactory(configFactory, deps) {
    return {
        provide: ConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps
    };
}
/**
 * @param {?} configChunks
 * @param {?} configValidators
 * @return {?}
 */
function configurationFactory(configChunks, configValidators) {
    /** @type {?} */
    var config = deepMerge.apply(void 0, __spread([{}], configChunks));
    if (!config.production) {
        validateConfig(config, configValidators);
    }
    return config;
}
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ConfigModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)]
        };
    };
    /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    ConfigModule.withConfigFactory = /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    function (configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)]
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    ConfigModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ConfigModule,
            providers: [
                { provide: ServerConfig, useExisting: Config },
                provideConfig(defaultServerConfig),
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [ConfigChunk, ConfigValidatorToken]
                },
                provideConfigValidator(serverConfigValidator)
            ]
        };
    };
    ConfigModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: []
                },] }
    ];
    return ConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var PriceType = {
    BUY: 'BUY',
    FROM: 'FROM',
};
/** @enum {string} */
var ImageType = {
    PRIMARY: 'PRIMARY',
    GALLERY: 'GALLERY',
};
/** @enum {string} */
var Fields = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields1 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields2 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields3 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields4 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields5 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields6 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var PageType = {
    CONTENT_PAGE: 'ContentPage',
    PRODUCT_PAGE: 'ProductPage',
    CATEGORY_PAGE: 'CategoryPage',
    CATALOG_PAGE: 'CatalogPage',
};
/** @enum {string} */
var Fields7 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields8 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields9 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields10 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields11 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields12 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields13 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields14 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields15 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields16 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var SortEnum = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields17 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields18 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields19 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields20 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields21 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields22 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields23 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields24 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields25 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields26 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields27 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields28 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields29 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields30 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields31 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields32 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields33 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields34 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields35 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields36 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields37 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields38 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields39 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields40 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields41 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields42 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields43 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields44 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields45 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields46 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields47 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields48 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields49 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields50 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields51 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields52 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields53 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields54 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields55 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields56 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields57 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields58 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields59 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields60 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Fields61 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
var Type = {
    All: 'all',
    Product: 'product',
    Order: 'order',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GO = '[Router] Go';
/** @type {?} */
var GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
var BACK = '[Router] Back';
/** @type {?} */
var FORWARD = '[Router] Forward';
/** @type {?} */
var SAVE_REDIRECT_URL = '[Router] Save Redirect Url';
/** @type {?} */
var CLEAR_REDIRECT_URL = '[Router] Clear Redirect Url';
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return Go;
}());
var GoByUrl = /** @class */ (function () {
    function GoByUrl(payload) {
        this.payload = payload;
        this.type = GO_BY_URL;
    }
    return GoByUrl;
}());
var Back = /** @class */ (function () {
    function Back() {
        this.type = BACK;
    }
    return Back;
}());
var Forward = /** @class */ (function () {
    function Forward() {
        this.type = FORWARD;
    }
    return Forward;
}());
var SaveRedirectUrl = /** @class */ (function () {
    function SaveRedirectUrl(payload) {
        this.payload = payload;
        this.type = SAVE_REDIRECT_URL;
    }
    return SaveRedirectUrl;
}());
var ClearRedirectUrl = /** @class */ (function () {
    function ClearRedirectUrl() {
        this.type = CLEAR_REDIRECT_URL;
    }
    return ClearRedirectUrl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ROUTING_FEATURE = 'router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    redirectUrl: '',
    navigationId: 0,
    state: {
        url: '',
        queryParams: {},
        params: {},
        context: {
            id: ''
        },
        cmsRequired: false
    }
};
/**
 * @return {?}
 */
function getReducers() {
    return {
        router: reducer
    };
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SAVE_REDIRECT_URL: {
            return __assign({}, state, { redirectUrl: action.payload });
        }
        case CLEAR_REDIRECT_URL: {
            return __assign({}, state, { redirectUrl: '' });
        }
        case ROUTER_NAVIGATION:
        case ROUTER_ERROR:
        case ROUTER_CANCEL: {
            /** @type {?} */
            var currentUrl = action.payload.routerState
                ? action.payload.routerState.url
                : '';
            /** @type {?} */
            var contextId = action.payload.routerState
                ? action.payload.routerState.context.id
                : '';
            /** @type {?} */
            var redirectUrl = void 0;
            if (contextId === 'login' ||
                contextId === 'register' ||
                currentUrl === state.redirectUrl) {
                redirectUrl = state.redirectUrl;
            }
            else {
                redirectUrl = '';
            }
            return {
                redirectUrl: redirectUrl,
                state: action.payload.routerState,
                navigationId: action.payload.event.id
            };
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
var reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/** @type {?} */
var getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
var getRouterState = createSelector(getRouterFeatureState, function (state) { return state[ROUTING_FEATURE]; });
/** @type {?} */
var getRedirectUrl = createSelector(getRouterState, function (state) { return state.redirectUrl; });
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
var  /* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    CustomSerializer.prototype.serialize = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        /** @type {?} */
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        /** @type {?} */
        var cmsRequired = false;
        if (state.routeConfig &&
            state.routeConfig.canActivate &&
            state.routeConfig.canActivate.find(function (x) { return x && x.guardName === 'CmsPageGuards'; })) {
            cmsRequired = true;
        }
        /** @type {?} */
        var context;
        if (params['productCode']) {
            context = { id: params['productCode'], type: PageType.PRODUCT_PAGE };
        }
        else if (params['categoryCode']) {
            context = { id: params['categoryCode'], type: PageType.CATEGORY_PAGE };
        }
        else if (params['brandCode']) {
            context = { id: params['brandCode'], type: PageType.CATEGORY_PAGE };
        }
        else if (params['query']) {
            context = { id: 'search', type: PageType.CONTENT_PAGE };
        }
        else if (state.data.pageLabel !== undefined) {
            context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
        }
        else if (state.url.length > 0) {
            context = {
                id: state.url[state.url.length - 1].path,
                type: PageType.CONTENT_PAGE
            };
        }
        else {
            context = {
                id: 'homepage',
                type: PageType.CONTENT_PAGE
            };
        }
        return { url: url, queryParams: queryParams, params: params, context: context, cmsRequired: cmsRequired };
    };
    return CustomSerializer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(GO), map(function (action) { return action.payload; }), tap(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(GO_BY_URL), map(function (action) { return action.payload; }), tap(function (url) {
            _this.router.navigateByUrl(url);
        }));
        this.navigateBack$ = this.actions$.pipe(ofType(BACK), tap(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.pipe(ofType(FORWARD), tap(function () { return _this.location.forward(); }));
    }
    RouterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: Location }
    ]; };
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateBuUrl$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    return RouterEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects = [RouterEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ConfigurableRoutesConfig = /** @class */ (function () {
    function ConfigurableRoutesConfig() {
    }
    return ConfigurableRoutesConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENDPOINT_ROUTES_CONFIG = 'routes-config';
var RoutesConfigLoader = /** @class */ (function () {
    function RoutesConfigLoader(http, serverConfig, configurableRoutesConfig) {
        this.http = http;
        this.serverConfig = serverConfig;
        this.configurableRoutesConfig = configurableRoutesConfig;
    }
    Object.defineProperty(RoutesConfigLoader.prototype, "routesConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._routesConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoutesConfigLoader.prototype, "endpoint", {
        get: /**
         * @return {?}
         */
        function () {
            return ((this.serverConfig.server.baseUrl || '') + '/' + ENDPOINT_ROUTES_CONFIG);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RoutesConfigLoader.prototype.load = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var shouldFetch, fetchedRoutesConfig, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shouldFetch = this.configurableRoutesConfig.routesConfig.fetch;
                        if (!shouldFetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetch(this.endpoint)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        fetchedRoutesConfig = _a;
                        this._routesConfig = this.extendStaticWith(fetchedRoutesConfig);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    RoutesConfigLoader.prototype.fetch = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http
            .get(url)
            .pipe(retry(2))
            .toPromise()
            .catch(function () {
            throw new Error("Could not get routes configuration from url " + url + "!");
        });
    };
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    RoutesConfigLoader.prototype.extendStaticWith = /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    function (routesConfig) {
        /** @type {?} */
        var mergedRoutesConfig = deepMerge({}, this.configurableRoutesConfig.routesConfig, routesConfig);
        return this.extendLanguagesTranslationsWithDefault(mergedRoutesConfig);
    };
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    RoutesConfigLoader.prototype.extendLanguagesTranslationsWithDefault = /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    function (routesConfig) {
        /** @type {?} */
        var defaultTranslations = routesConfig.translations.default;
        Object.keys(routesConfig.translations).forEach(function (languageCode) {
            /** @type {?} */
            var languageTranslations = routesConfig.translations[languageCode];
            routesConfig.translations[languageCode] = deepMerge({}, defaultTranslations, languageTranslations);
        });
        return routesConfig;
    };
    RoutesConfigLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RoutesConfigLoader.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ServerConfig },
        { type: ConfigurableRoutesConfig }
    ]; };
    return RoutesConfigLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(config, injector, routesConfigLoader) {
        this.config = config;
        this.injector = injector;
        this.routesConfigLoader = routesConfigLoader;
        this.currentLanguageCode = 'en'; // TODO: hardcoded! should be removed when more languages are supported by localized routes
        this.initCalled = false; // guard not to call init() more than once
    }
    Object.defineProperty(ConfigurableRoutesService.prototype, "currentRoutesTranslations", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.allRoutesTranslations[this.currentLanguageCode]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     */
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    ConfigurableRoutesService.prototype.init = 
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initCalled) return [3 /*break*/, 2];
                        this.initCalled = true;
                        return [4 /*yield*/, this.routesConfigLoader.load()];
                    case 1:
                        _a.sent();
                        this.allRoutesTranslations = this.routesConfigLoader.routesConfig.translations;
                        this.translateRouterConfig();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRouterConfig = /**
     * @private
     * @return {?}
     */
    function () {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var translatedRoutes = this.translateRoutes(router.config, this.currentRoutesTranslations);
        translatedRoutes = this.moveWildcardRouteToEnd(translatedRoutes);
        router.resetConfig(translatedRoutes);
    };
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     */
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     * @private
     * @param {?} routes
     * @return {?}
     */
    ConfigurableRoutesService.prototype.moveWildcardRouteToEnd = /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     * @private
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        /** @type {?} */
        var firstWildcardRoute = routes.find(function (route) { return route.path === '**'; });
        return firstWildcardRoute
            ? routes.filter(function (route) { return route.path !== '**'; }).concat(firstWildcardRoute)
            : routes;
    };
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     */
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getNestedRoutesTranslations = /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    function (nestedRouteNames, routesTranslations) {
        if (routesTranslations === void 0) { routesTranslations = this.currentRoutesTranslations; }
        return this.getNestedRoutesTranslationsRecursive(nestedRouteNames, routesTranslations, []);
    };
    /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getNestedRoutesTranslationsRecursive = /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    function (nestedRoutesNames, routesTranslations, accResult) {
        if (!nestedRoutesNames.length) {
            return accResult;
        }
        var _a = __read(nestedRoutesNames), routeName = _a[0], remainingRouteNames = _a.slice(1);
        /** @type {?} */
        var translation = this.getRouteTranslation(routeName, routesTranslations);
        if (!translation) {
            return null;
        }
        if (remainingRouteNames.length) {
            /** @type {?} */
            var childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (!childrenTranslations) {
                this.warn("No children routes translations were configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
                return null;
            }
            return this.getNestedRoutesTranslationsRecursive(remainingRouteNames, childrenTranslations, accResult.concat(translation));
        }
        return accResult.concat(translation);
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getChildrenRoutesTranslations = /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routeName, routesTranslations) {
        /** @type {?} */
        var routeTranslation = this.getRouteTranslation(routeName, routesTranslations);
        return routeTranslation && routeTranslation.children;
    };
    /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoutes = /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routes, routesTranslations) {
        var _this = this;
        /** @type {?} */
        var result = [];
        routes.forEach(function (route) {
            /** @type {?} */
            var translatedRouteAliases = _this.translateRoute(route, routesTranslations);
            if (route.children && route.children.length) {
                /** @type {?} */
                var translatedChildrenRoutes_1 = _this.translateChildrenRoutes(route, routesTranslations);
                translatedRouteAliases.forEach(function (translatedRouteAlias) {
                    translatedRouteAlias.children = translatedChildrenRoutes_1;
                });
            }
            result.push.apply(result, __spread(translatedRouteAliases));
        });
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateChildrenRoutes = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            /** @type {?} */
            var routeName = this.getConfigurable(route, 'cxPath');
            /** @type {?} */
            var childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (childrenTranslations === undefined) {
                this.warn("Could not translate children routes of route '" + routeName + "'", route, "due to undefined 'children' key for '" + routeName + "' route in routes translations", routesTranslations);
                return [];
            }
            // null switches off the children routes:
            if (childrenTranslations === null) {
                return [];
            }
            return this.translateRoutes(route.children, childrenTranslations);
        }
        return null;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoute = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            // we assume that 'path' and 'redirectTo' cannot be both configured for one route
            if (this.isConfigurable(route, 'cxRedirectTo')) {
                this.warn("A path should not have set both \"cxPath\" and \"cxRedirectTo\" properties! Route: '" + route);
            }
            return this.translateRoutePath(route, routesTranslations);
        }
        if (this.isConfigurable(route, 'cxRedirectTo')) {
            return this.translateRouteRedirectTo(route, routesTranslations);
        }
        return [route]; // if nothing is configurable, just pass the original route
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    ConfigurableRoutesService.prototype.isConfigurable = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    function (route, key) {
        return !!this.getConfigurable(route, key);
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getConfigurable = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    function (route, key) {
        return route.data && route.data[key];
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoutePath = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        return this.getTranslatedPaths(route, 'cxPath', routesTranslations).map(function (translatedPath) {
            return __assign({}, route, { path: translatedPath });
        });
    };
    /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRouteRedirectTo = /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    function (route, translations) {
        /** @type {?} */
        var translatedPaths = this.getTranslatedPaths(route, 'cxRedirectTo', translations);
        return translatedPaths.length
            ? [__assign({}, route, { redirectTo: translatedPaths[0] })] // take the first path from list by convention
            : [];
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getRouteTranslation = /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routeName, routesTranslations) {
        /** @type {?} */
        var result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn("No route translation was configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
        }
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getTranslatedPaths = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, key, routesTranslations) {
        /** @type {?} */
        var routeName = this.getConfigurable(route, key);
        /** @type {?} */
        var translation = this.getRouteTranslation(routeName, routesTranslations);
        if (translation === undefined) {
            this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined key '" + routeName + "' in routes translations", routesTranslations);
            return [];
        }
        if (translation && translation.paths === undefined) {
            this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined 'paths' key for '" + routeName + "' route in routes translations", routesTranslations);
            return [];
        }
        // translation or translation.paths can be null - which means switching off the route
        return (translation && translation.paths) || [];
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    ConfigurableRoutesService.prototype.warn = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.production) {
            console.warn.apply(console, __spread(args));
        }
    };
    ConfigurableRoutesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigurableRoutesService.ctorParameters = function () { return [
        { type: ServerConfig },
        { type: Injector },
        { type: RoutesConfigLoader }
    ]; };
    return ConfigurableRoutesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlParsingService = /** @class */ (function () {
    function UrlParsingService(router) {
        this.router = router;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    UrlParsingService.prototype.getPrimarySegments = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    };
    /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    UrlParsingService.prototype._getPrimarySegmentsFromUrlTree = /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        /** @type {?} */
        var segments = tree.segments.map(function (s) { return s.path; });
        /** @type {?} */
        var childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    };
    UrlParsingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UrlParsingService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return UrlParsingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isParam = function (segment) { return segment.startsWith(':'); };
/** @type {?} */
var getParamName = function (segment) { return segment.slice(1); };
/** @type {?} */
var removeLeadingSlash = function (path) {
    return path.startsWith('/') ? path.slice(1) : path;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouteRecognizerService = /** @class */ (function () {
    function RouteRecognizerService(routesConfigLoader, urlParser) {
        this.routesConfigLoader = routesConfigLoader;
        this.urlParser = urlParser;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    RouteRecognizerService.prototype.recognizeByDefaultUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        url = removeLeadingSlash(url); // url will be compared with paths translations which do not have leading slash
        // url will be compared with paths translations which do not have leading slash
        /** @type {?} */
        var routesTranslations = this.defaultRoutesTranslations;
        /** @type {?} */
        var urlSegments = this.urlParser.getPrimarySegments(url);
        /** @type {?} */
        var recognizedNestedRoutes = this.getNestedRoutesRecursive(urlSegments, routesTranslations, []);
        return recognizedNestedRoutes;
    };
    /**
     * @private
     * @param {?} remainingUrlSegments
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    RouteRecognizerService.prototype.getNestedRoutesRecursive = /**
     * @private
     * @param {?} remainingUrlSegments
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    function (remainingUrlSegments, routesTranslations, accResult) {
        if (!routesTranslations) {
            return remainingUrlSegments.length ? null : accResult;
        }
        /** @type {?} */
        var routeNames = Object.keys(routesTranslations);
        /** @type {?} */
        var routeNamesLength = routeNames.length;
        for (var i = 0; i < routeNamesLength; i++) {
            /** @type {?} */
            var routeName = routeNames[i];
            /** @type {?} */
            var routeTranslation = routesTranslations && routesTranslations[routeName];
            /** @type {?} */
            var paths = routeTranslation.paths || [];
            /** @type {?} */
            var pathsLength = paths.length;
            for (var j = 0; j < pathsLength; j++) {
                /** @type {?} */
                var path = paths[j];
                /** @type {?} */
                var pathSegments = this.urlParser.getPrimarySegments(path);
                /** @type {?} */
                var params = this.extractParamsIfPathMatchesUrlPrefix(remainingUrlSegments, pathSegments);
                // if some path is matching, try to recognize remaining segments
                if (params) {
                    /** @type {?} */
                    var result = this.getNestedRoutesRecursive(remainingUrlSegments.slice(pathSegments.length), routeTranslation.children, accResult.concat({ name: routeName, params: params }));
                    // if remaining segments were successfuly matched, return result. otherwise continue loop for other paths and routes
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return remainingUrlSegments.length ? null : accResult;
    };
    /**
     * @private
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    RouteRecognizerService.prototype.extractParamsIfPathMatchesUrlPrefix = /**
     * @private
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    function (urlSegments, pathSegments) {
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var pathSegmentsLength = pathSegments.length;
        /** @type {?} */
        var urlSegmentsLength = urlSegments.length;
        if (urlSegmentsLength < pathSegmentsLength) {
            return null;
        }
        for (var i = 0; i < pathSegmentsLength; i++) {
            /** @type {?} */
            var pathSegment = pathSegments[i];
            /** @type {?} */
            var urlSegment = urlSegments[i];
            if (isParam(pathSegment)) {
                /** @type {?} */
                var paramName = getParamName(pathSegment);
                params[paramName] = urlSegment;
            }
            else {
                if (pathSegment !== urlSegment) {
                    return null;
                }
            }
        }
        return params;
    };
    Object.defineProperty(RouteRecognizerService.prototype, "defaultRoutesTranslations", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.routesConfigLoader.routesConfig.translations
                .default));
        },
        enumerable: true,
        configurable: true
    });
    RouteRecognizerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouteRecognizerService.ctorParameters = function () { return [
        { type: RoutesConfigLoader },
        { type: UrlParsingService }
    ]; };
    return RouteRecognizerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlTranslationService = /** @class */ (function () {
    function UrlTranslationService(configurableRoutesService, routeRecognizer, urlParser, config) {
        this.configurableRoutesService = configurableRoutesService;
        this.routeRecognizer = routeRecognizer;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    UrlTranslationService.prototype.translate = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        // if options are invalid, return the root url
        if (!this.validateOptions(options)) {
            return this.ROOT_URL;
        }
        if (typeof options.url === 'string') {
            /** @type {?} */
            var recognizedRoute = this.routeRecognizer.recognizeByDefaultUrl(options.url);
            return recognizedRoute ? this.generateUrl(recognizedRoute) : options.url;
        }
        return this.generateUrl(options.route);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    UrlTranslationService.prototype.validateOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options || typeof options !== 'object') {
            this.warn("Incorrect options for translating url. Options have to be an object. Options: ", options);
            return false;
        }
        /** @type {?} */
        var urlDefined = Boolean(options.url) || options.url === '';
        /** @type {?} */
        var routeDefined = Boolean(options.route);
        if (!urlDefined && !routeDefined) {
            this.warn("Incorrect options for translating url. Options must have 'url' string or 'route' array property. Options: ", options);
            return false;
        }
        if (urlDefined && routeDefined) {
            this.warn("Incorrect options for translating url. Options cannot have both 'url' and 'route' property. Options: ", options);
            return false;
        }
        if (urlDefined) {
            return this.validateOptionsUrl(options.url);
        }
        if (routeDefined) {
            return this.validateOptionsRoute(options.route);
        }
        return true;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    UrlTranslationService.prototype.validateOptionsUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (typeof url !== 'string') {
            this.warn("Incorrect options for translating url.", "'url' property should be a string. Url: ", url);
            return false;
        }
        return true;
    };
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.validateOptionsRoute = /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        if (!Array.isArray(nestedRoutes)) {
            this.warn("Incorrect options for translating url.", "'route' property should be an array. Route: ", nestedRoutes);
            return false;
        }
        /** @type {?} */
        var length = nestedRoutes.length;
        if (!length) {
            this.warn("Incorrect options for translating url.", "'route' array should not be empty. Route: ", nestedRoutes);
            return false;
        }
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var nestedRoute = nestedRoutes[i];
            if (typeof nestedRoute !== 'string' && !nestedRoute.name) {
                this.warn("Incorrect options for translating url.", "'route' array can contain only elements which are string or object with 'name' property. Route: ", nestedRoutes);
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.generateUrl = /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        /** @type {?} */
        var standarizedNestedRoutes = this.standarizeNestedRoutes(nestedRoutes);
        // if no routes given, return root url
        if (!standarizedNestedRoutes.length) {
            return this.ROOT_URL;
        }
        var _a = this.splitRoutesNamesAndParams(standarizedNestedRoutes), nestedRoutesNames = _a.nestedRoutesNames, nestedRoutesParams = _a.nestedRoutesParams;
        /** @type {?} */
        var nestedRoutesTranslations = this.configurableRoutesService.getNestedRoutesTranslations(nestedRoutesNames);
        // if no routes translations were configured, return root url:
        if (!nestedRoutesTranslations) {
            return this.ROOT_URL;
        }
        var _b = __read(nestedRoutesTranslations.slice(-1), 1), leafNestedRouteTranslation = _b[0];
        // if leaf route was disabled in config (set to null), return root url:
        if (!leafNestedRouteTranslation.paths) {
            return this.ROOT_URL;
        }
        // find first path for every nested route that can satisfy it's parameters with given parameters
        /** @type {?} */
        var nestedRoutesPaths = this.findPathsWithFillableParams(nestedRoutesTranslations, nestedRoutesParams);
        // if not every nested route had configured path that can be satisfied with given params, return root url
        if (!nestedRoutesPaths) {
            return this.ROOT_URL;
        }
        /** @type {?} */
        var result = this.provideParamsValues(nestedRoutesPaths, nestedRoutesParams, nestedRoutesTranslations.map(function (routTranslation) { return routTranslation.paramsMapping; }));
        result.unshift(''); // ensure absolute path ( leading '' in path array is equvalent to leading '/' in string)
        return result;
    };
    /**
     * Converts all elements to objects
     */
    /**
     * Converts all elements to objects
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.standarizeNestedRoutes = /**
     * Converts all elements to objects
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        return (nestedRoutes || []).map(function (route) {
            return typeof route === 'string'
                ? { name: route, params: {} }
                : { name: route.name, params: route.params || {} };
        });
    };
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.splitRoutesNamesAndParams = /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        return (nestedRoutes || []).reduce(function (_a, route) {
            var nestedRoutesNames = _a.nestedRoutesNames, nestedRoutesParams = _a.nestedRoutesParams;
            return ({
                nestedRoutesNames: __spread(nestedRoutesNames, [route.name]),
                nestedRoutesParams: __spread(nestedRoutesParams, [route.params])
            });
        }, { nestedRoutesNames: [], nestedRoutesParams: [] });
    };
    /**
     * @private
     * @param {?} nestedRoutesPaths
     * @param {?} nestedRoutesParams
     * @param {?} nestedRoutesParamsMappings
     * @return {?}
     */
    UrlTranslationService.prototype.provideParamsValues = /**
     * @private
     * @param {?} nestedRoutesPaths
     * @param {?} nestedRoutesParams
     * @param {?} nestedRoutesParamsMappings
     * @return {?}
     */
    function (nestedRoutesPaths, nestedRoutesParams, nestedRoutesParamsMappings) {
        /** @type {?} */
        var length = nestedRoutesPaths.length;
        /** @type {?} */
        var result = [];
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var path = nestedRoutesPaths[i];
            /** @type {?} */
            var paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            var paramsMapping = nestedRoutesParamsMappings[i];
            /** @type {?} */
            var pathSegments = this.provideParamsValuesForSingleRoute(path, paramsObject, paramsMapping);
            result.push.apply(result, __spread(pathSegments));
        }
        return result;
    };
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlTranslationService.prototype.provideParamsValuesForSingleRoute = /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    function (path, params, paramsMapping) {
        var _this = this;
        return this.urlParser.getPrimarySegments(path).map(function (segment) {
            if (isParam(segment)) {
                /** @type {?} */
                var paramName = getParamName(segment);
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    };
    /**
     * @private
     * @param {?} nestedRoutesTranslations
     * @param {?} nestedRoutesParams
     * @return {?}
     */
    UrlTranslationService.prototype.findPathsWithFillableParams = /**
     * @private
     * @param {?} nestedRoutesTranslations
     * @param {?} nestedRoutesParams
     * @return {?}
     */
    function (nestedRoutesTranslations, nestedRoutesParams) {
        /** @type {?} */
        var length = nestedRoutesTranslations.length;
        /** @type {?} */
        var result = [];
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var routeTranslation = nestedRoutesTranslations[i];
            /** @type {?} */
            var paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            var path = this.findPartialPathWithFillableParams(routeTranslation.paths, paramsObject, routeTranslation.paramsMapping);
            if (path === undefined || path === null) {
                this.warn("No configured path matches all its params to given object. ", "Route translation: ", routeTranslation, "(in nested routes translations list", nestedRoutesTranslations, "). Params object: ", paramsObject, "(in params objects list", nestedRoutesParams, ")");
                return null;
            }
            result.push(path);
        }
        return result;
    };
    // find first path that can fill all its params with values from given object
    // find first path that can fill all its params with values from given object
    /**
     * @private
     * @param {?} paths
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlTranslationService.prototype.findPartialPathWithFillableParams = 
    // find first path that can fill all its params with values from given object
    /**
     * @private
     * @param {?} paths
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    function (paths, params, paramsMapping) {
        var _this = this;
        return paths.find(function (path) {
            return _this.getParams(path).every(function (paramName) {
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName] !== undefined;
            });
        });
    };
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    UrlTranslationService.prototype.getParams = /**
     * @private
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    };
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlTranslationService.prototype.getMappedParamName = /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    function (paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    UrlTranslationService.prototype.warn = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.production) {
            console.warn.apply(console, __spread(args));
        }
    };
    UrlTranslationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UrlTranslationService.ctorParameters = function () { return [
        { type: ConfigurableRoutesService },
        { type: RouteRecognizerService },
        { type: UrlParsingService },
        { type: ServerConfig }
    ]; };
    return UrlTranslationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WindowRef = /** @class */ (function () {
    function WindowRef(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof window !== 'undefined' ? window : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "sessionStorage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "localStorage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ WindowRef.ngInjectableDef = defineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(inject(DOCUMENT)); }, token: WindowRef, providedIn: "root" });
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoutingService = /** @class */ (function () {
    function RoutingService(store, winRef, urlTranslator) {
        this.store = store;
        this.winRef = winRef;
        this.urlTranslator = urlTranslator;
    }
    /**
     * Get the current router state
     */
    /**
     * Get the current router state
     * @return {?}
     */
    RoutingService.prototype.getRouterState = /**
     * Get the current router state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getRouterState));
    };
    /**
     * Navigation with a new state into history
     * @param pathOrTranslateUrlOptions: Path or options to translate url
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    /**
     * Navigation with a new state into history
     * @param {?} pathOrTranslateUrlOptions
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.go = /**
     * Navigation with a new state into history
     * @param {?} pathOrTranslateUrlOptions
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    function (pathOrTranslateUrlOptions, query, extras) {
        /** @type {?} */
        var path;
        if (Array.isArray(pathOrTranslateUrlOptions)) {
            path = pathOrTranslateUrlOptions;
        }
        else {
            /** @type {?} */
            var translateUrlOptions = pathOrTranslateUrlOptions;
            /** @type {?} */
            var translatedPath = this.urlTranslator.translate(translateUrlOptions);
            path = Array.isArray(translatedPath) ? translatedPath : [translatedPath];
        }
        return this.navigate(path, query, extras);
    };
    /**
     * Navigation using URL
     * @param url
     */
    /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    RoutingService.prototype.goByUrl = /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.store.dispatch(new GoByUrl(url));
    };
    /**
     * Navigating back
     */
    /**
     * Navigating back
     * @return {?}
     */
    RoutingService.prototype.back = /**
     * Navigating back
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isLastPageInApp = this.winRef.document.referrer.indexOf(this.winRef.nativeWindow.location.origin) > -1;
        if (isLastPageInApp) {
            this.store.dispatch(new Back());
            return;
        }
        this.go(['/']);
        return;
    };
    /**
     * Navigating forward
     */
    /**
     * Navigating forward
     * @return {?}
     */
    RoutingService.prototype.forward = /**
     * Navigating forward
     * @return {?}
     */
    function () {
        this.store.dispatch(new Forward());
    };
    /**
     * Get the redirect url from store
     */
    /**
     * Get the redirect url from store
     * @return {?}
     */
    RoutingService.prototype.getRedirectUrl = /**
     * Get the redirect url from store
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getRedirectUrl));
    };
    /**
     * Remove the redirect url from store
     */
    /**
     * Remove the redirect url from store
     * @return {?}
     */
    RoutingService.prototype.clearRedirectUrl = /**
     * Remove the redirect url from store
     * @return {?}
     */
    function () {
        this.store.dispatch(new ClearRedirectUrl());
    };
    /**
     * Put redirct url into store
     * @param url: redirect url
     */
    /**
     * Put redirct url into store
     * @param {?} url
     * @return {?}
     */
    RoutingService.prototype.saveRedirectUrl = /**
     * Put redirct url into store
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.store.dispatch(new SaveRedirectUrl(url));
    };
    /**
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    /**
     * Navigation with a new state into history
     * @private
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.navigate = /**
     * Navigation with a new state into history
     * @private
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    function (path, query, extras) {
        this.store.dispatch(new Go({
            path: path,
            query: query,
            extras: extras
        }));
    };
    RoutingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RoutingService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: UrlTranslationService }
    ]; };
    /** @nocollapse */ RoutingService.ngInjectableDef = defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(inject(Store), inject(WindowRef), inject(UrlTranslationService)); }, token: RoutingService, providedIn: "root" });
    return RoutingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultStorefrontRoutesTranslations = {
    default: {
        home: { paths: ['', 'cx-preview'] },
        cart: { paths: ['cart'] },
        search: { paths: ['search/:query'] },
        login: { paths: ['login'] },
        register: { paths: ['register'] },
        resetPassword: { paths: ['reset-new-password/:token'] },
        forgotPassword: { paths: ['reset-password'] },
        checkout: { paths: ['checkout'] },
        orderConfirmation: { paths: ['order-confirmation'] },
        product: {
            paths: ['product/:productCode'],
            paramsMapping: { productCode: 'code' }
        },
        category: {
            paths: ['category/:categoryCode'],
            paramsMapping: { categoryCode: 'code' }
        },
        brand: { paths: ['Brands/:brandName/c/:brandCode'] },
        storeFinder: {
            paths: ['store-finder'],
            children: {
                searchResults: { paths: ['find-stores'] },
                allStores: { paths: ['view-all-stores'] },
                listStores: {
                    paths: ['country/:country/region/:region', 'country/:country']
                },
                storeDescription: {
                    paths: ['country/:country/region/:region/:store']
                }
            }
        },
        termsAndConditions: { paths: ['terms-and-conditions'] },
        contact: { paths: ['contact'] },
        help: { paths: ['faq'] },
        sale: { paths: ['sale'] },
        orders: { paths: ['my-account/orders'] },
        orderDetails: {
            paths: ['my-account/orders/:orderCode'],
            paramsMapping: { orderCode: 'code' }
        },
        addressBook: { paths: ['my-account/address-book'] },
        paymentManagement: { paths: ['my-account/payment-details'] },
        pageNotFound: { paths: ['**'] }
    },
    en: (/** @type {?} */ ({}))
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultConfigurableRoutesConfig = {
    routesConfig: {
        translations: defaultStorefrontRoutesTranslations,
        fetch: false
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} service
 * @return {?}
 */
function initConfigurableRoutes(service) {
    /** @type {?} */
    var result = function () { return service.init(); };
    return result;
}
var ConfigurableRoutesModule = /** @class */ (function () {
    function ConfigurableRoutesModule() {
    }
    ConfigurableRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig(defaultConfigurableRoutesConfig)
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        ConfigurableRoutesService,
                        RoutesConfigLoader,
                        UrlTranslationService,
                        RouteRecognizerService,
                        UrlParsingService,
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initConfigurableRoutes,
                            deps: [ConfigurableRoutesService],
                            multi: true
                        },
                        { provide: ConfigurableRoutesConfig, useExisting: Config }
                    ]
                },] }
    ];
    return ConfigurableRoutesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigurableRoutesModule,
                        RouterModule.forRoot([], {
                            scrollPositionRestoration: 'enabled',
                            anchorScrolling: 'enabled'
                        }),
                        StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                        EffectsModule.forFeature(effects),
                        StoreRouterConnectingModule.forRoot({
                            stateKey: ROUTING_FEATURE // name of reducer key
                        })
                    ],
                    providers: [
                        RoutingService,
                        reducerProvider,
                        {
                            provide: RouterStateSerializer,
                            useClass: CustomSerializer
                        }
                    ]
                },] }
    ];
    return RoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
OccConfig = /** @class */ (function (_super) {
    __extends(OccConfig, _super);
    function OccConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OccConfig;
}(ServerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
AuthConfig = /** @class */ (function (_super) {
    __extends(AuthConfig, _super);
    function AuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthConfig;
}(OccConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultAuthConfig = {
    authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AUTH_FEATURE = 'auth';
/** @type {?} */
var CLIENT_TOKEN_DATA = '[Auth] Client Token Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_CLIENT_TOKEN = '[Token] Create Client Token';
/** @type {?} */
var LOAD_CLIENT_TOKEN_FAIL = '[Token] Create Client Token Fail';
/** @type {?} */
var LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Create Client Token Success';
var LoadClientToken = /** @class */ (function (_super) {
    __extends(LoadClientToken, _super);
    function LoadClientToken() {
        var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
        _this.type = LOAD_CLIENT_TOKEN;
        return _this;
    }
    return LoadClientToken;
}(LoaderLoadAction));
var LoadClientTokenFail = /** @class */ (function (_super) {
    __extends(LoadClientTokenFail, _super);
    function LoadClientTokenFail(payload) {
        var _this = _super.call(this, CLIENT_TOKEN_DATA, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CLIENT_TOKEN_FAIL;
        return _this;
    }
    return LoadClientTokenFail;
}(LoaderFailAction));
var LoadClientTokenSuccess = /** @class */ (function (_super) {
    __extends(LoadClientTokenSuccess, _super);
    function LoadClientTokenSuccess(payload) {
        var _this = _super.call(this, CLIENT_TOKEN_DATA) || this;
        _this.payload = payload;
        _this.type = LOAD_CLIENT_TOKEN_SUCCESS;
        return _this;
    }
    return LoadClientTokenSuccess;
}(LoaderSuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOGIN = '[Auth] Login';
/** @type {?} */
var LOGOUT = '[Auth] Logout';
var Login = /** @class */ (function () {
    function Login() {
        this.type = LOGIN;
    }
    return Login;
}());
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_USER_TOKEN = '[Auth] Load User Token';
/** @type {?} */
var LOAD_USER_TOKEN_FAIL = '[Auth] Load User Token Fail';
/** @type {?} */
var LOAD_USER_TOKEN_SUCCESS = '[Auth] Load User Token Success';
/** @type {?} */
var REFRESH_USER_TOKEN = '[Auth] Refresh User Token';
/** @type {?} */
var REFRESH_USER_TOKEN_FAIL = '[Auth] Refresh User Token Fail';
/** @type {?} */
var REFRESH_USER_TOKEN_SUCCESS = '[Auth] Refresh User Token Success';
var LoadUserToken = /** @class */ (function () {
    function LoadUserToken(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN;
    }
    return LoadUserToken;
}());
var LoadUserTokenFail = /** @class */ (function () {
    function LoadUserTokenFail(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_FAIL;
    }
    return LoadUserTokenFail;
}());
var LoadUserTokenSuccess = /** @class */ (function () {
    function LoadUserTokenSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_SUCCESS;
    }
    return LoadUserTokenSuccess;
}());
var RefreshUserToken = /** @class */ (function () {
    function RefreshUserToken(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN;
    }
    return RefreshUserToken;
}());
var RefreshUserTokenSuccess = /** @class */ (function () {
    function RefreshUserTokenSuccess(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_SUCCESS;
    }
    return RefreshUserTokenSuccess;
}());
var RefreshUserTokenFail = /** @class */ (function () {
    function RefreshUserTokenFail(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_FAIL;
    }
    return RefreshUserTokenFail;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAuthState = createFeatureSelector(AUTH_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getClientTokenState = createSelector(getAuthState, function (state) { return state.clientToken; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getUserTokenSelector = function (state) { return state.token; };
/** @type {?} */
var getUserTokenState = createSelector(getAuthState, function (state) { return state.userToken; });
/** @type {?} */
var getUserToken = createSelector(getUserTokenState, getUserTokenSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function () {
    function AuthService(store) {
        this.store = store;
    }
    /**
     * Loads a new user token
     * @param userId
     * @param password
     */
    /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.authorize = /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    function (userId, password) {
        this.store.dispatch(new LoadUserToken({
            userId: userId,
            password: password
        }));
    };
    /**
     * Returns the user's token
     */
    /**
     * Returns the user's token
     * @return {?}
     */
    AuthService.prototype.getUserToken = /**
     * Returns the user's token
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getUserToken));
    };
    /**
     * Refreshes the user token
     * @param token a user token to refresh
     */
    /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    AuthService.prototype.refreshUserToken = /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    function (token) {
        this.store.dispatch(new RefreshUserToken({
            userId: token.userId,
            refreshToken: token.refresh_token
        }));
    };
    /**
     * Store the provided token
     */
    /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    AuthService.prototype.authorizeWithToken = /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    function (token) {
        this.store.dispatch(new LoadUserTokenSuccess(token));
    };
    /**
     * Login
     */
    /**
     * Login
     * @return {?}
     */
    AuthService.prototype.login = /**
     * Login
     * @return {?}
     */
    function () {
        this.store.dispatch(new Login());
    };
    /**
     * Logout
     */
    /**
     * Logout
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * Logout
     * @return {?}
     */
    function () {
        this.store.dispatch(new Logout());
    };
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     */
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    AuthService.prototype.getClientToken = /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(getClientTokenState), filter(function (state) {
            if (_this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    _this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        }), map(function (state) { return state.value; }));
    };
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     */
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    AuthService.prototype.refreshClientToken = /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter(function (state) {
            return _this.isClientTokenLoaded(state);
        }), map(function (state) { return state.value; }));
    };
    /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    AuthService.prototype.isClientTokenLoaded = /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return (state.success || state.error) && !state.loading;
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(Store)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClientErrorHandlingService = /** @class */ (function () {
    function ClientErrorHandlingService(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ClientErrorHandlingService.prototype.handleExpiredClientToken = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return this.authService.refreshClientToken().pipe(take(1), switchMap(function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        }));
    };
    /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    ClientErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    function (request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token
            }
        });
        return request;
    };
    ClientErrorHandlingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    return ClientErrorHandlingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserErrorHandlingService = /** @class */ (function () {
    function UserErrorHandlingService(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredUserToken = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return this.handleExpiredToken().pipe(switchMap(function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        }));
    };
    /**
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredRefreshToken = /**
     * @return {?}
     */
    function () {
        // Logout user
        this.authService.logout();
    };
    /**
     * @private
     * @return {?}
     */
    UserErrorHandlingService.prototype.handleExpiredToken = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var oldToken;
        return this.authService.getUserToken().pipe(tap(function (token) {
            if (token.access_token && token.refresh_token && !oldToken) {
                _this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                _this.routingService.go({ route: ['login'] });
            }
            oldToken = oldToken || token;
        }), filter(function (token) { return oldToken.access_token !== token.access_token; }), take(1));
    };
    /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    UserErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    function (request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token
            }
        });
        return request;
    };
    UserErrorHandlingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService }
    ]; };
    return UserErrorHandlingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USE_CLIENT_TOKEN = 'cx-use-client-token';
var InterceptorUtil = /** @class */ (function () {
    function InterceptorUtil() {
    }
    /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    InterceptorUtil.createHeader = /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    function (headerName, interceptorParam, headers) {
        if (headers) {
            return headers.append(headerName, JSON.stringify(interceptorParam));
        }
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
        return headers;
    };
    /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    InterceptorUtil.removeHeader = /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    function (headerName, request) {
        /** @type {?} */
        var updatedHeaders = request.headers.delete(headerName);
        return request.clone({ headers: updatedHeaders });
    };
    /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    InterceptorUtil.getInterceptorParam = /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    function (headerName, headers) {
        /** @type {?} */
        var rawValue = headers.get(headerName);
        if (rawValue) {
            return JSON.parse(rawValue);
        }
        return undefined;
    };
    return InterceptorUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var AuthErrorInterceptor = /** @class */ (function () {
    function AuthErrorInterceptor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    AuthErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError(function (errResponse) {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (_this.isExpiredToken(errResponse)) {
                                return _this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
                        }
                        else {
                            if (_this.isExpiredToken(errResponse)) {
                                return _this.userErrorHandlingService.handleExpiredUserToken(request, next);
                            }
                            else if (
                            // Refresh expired token
                            // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                            errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                                errResponse.error.error === 'invalid_token') {
                                _this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                _this.authService.logout();
                            }
                        }
                        break;
                }
            }
            return throwError(errResponse);
        }));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    AuthErrorInterceptor.prototype.isClientTokenRequest = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    };
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    AuthErrorInterceptor.prototype.isExpiredToken = /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    };
    AuthErrorInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthErrorInterceptor.ctorParameters = function () { return [
        { type: UserErrorHandlingService },
        { type: ClientErrorHandlingService },
        { type: AuthService }
    ]; };
    return AuthErrorInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClientTokenInterceptor = /** @class */ (function () {
    function ClientTokenInterceptor(config, authService) {
        this.config = config;
        this.authService = authService;
        this.baseReqString = (this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ClientTokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return this.getClientToken(request).pipe(take(1), switchMap(function (token) {
            if (token && request.url.indexOf(_this.baseReqString) > -1) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token
                    }
                });
            }
            return next.handle(request);
        }));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    ClientTokenInterceptor.prototype.getClientToken = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    };
    ClientTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenInterceptor.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: AuthService }
    ]; };
    return ClientTokenInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserTokenInterceptor = /** @class */ (function () {
    function UserTokenInterceptor(config, authService) {
        var _this = this;
        this.config = config;
        this.authService = authService;
        this.baseReqString = (this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite;
        this.authService.getUserToken().subscribe(function (token) {
            _this.userToken = token;
        });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    UserTokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (this.userToken &&
            request.url.indexOf(this.baseReqString) > -1 &&
            !request.headers.get('Authorization')) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.userToken.token_type + " " + this.userToken.access_token
                }
            });
        }
        return next.handle(request);
    };
    UserTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenInterceptor.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: AuthService }
    ]; };
    return UserTokenInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ClientTokenInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UserTokenInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthErrorInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var OAUTH_ENDPOINT$1 = '/authorizationserver/oauth/token';
var ClientAuthenticationTokenService = /** @class */ (function () {
    function ClientAuthenticationTokenService(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @return {?}
     */
    ClientAuthenticationTokenService.prototype.loadClientAuthenticationToken = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.getOAuthEndpoint();
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @return {?}
     */
    ClientAuthenticationTokenService.prototype.getOAuthEndpoint = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.config.server.baseUrl || '') + OAUTH_ENDPOINT$1;
    };
    ClientAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientAuthenticationTokenService.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: HttpClient }
    ]; };
    return ClientAuthenticationTokenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var OAUTH_ENDPOINT$2 = '/authorizationserver/oauth/token';
var UserAuthenticationTokenService = /** @class */ (function () {
    function UserAuthenticationTokenService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.loadToken = /**
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    function (userId, password) {
        /** @type {?} */
        var url = this.getOAuthEndpoint();
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', userId)
            .set('password', password);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} refreshToken
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.refreshToken = /**
     * @param {?} refreshToken
     * @return {?}
     */
    function (refreshToken) {
        /** @type {?} */
        var url = this.getOAuthEndpoint();
        /** @type {?} */
        var params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, params, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @protected
     * @return {?}
     */
    UserAuthenticationTokenService.prototype.getOAuthEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return (this.config.server.baseUrl || '') + OAUTH_ENDPOINT$2;
    };
    UserAuthenticationTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAuthenticationTokenService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AuthConfig }
    ]; };
    return UserAuthenticationTokenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [
    ClientAuthenticationTokenService,
    ClientErrorHandlingService,
    UserAuthenticationTokenService,
    UserErrorHandlingService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialLoaderState = {
    loading: false,
    error: false,
    success: false,
    value: undefined
};
/**
 * Higher order reducer that adds generic loading flag to chunk of the state
 *
 * Utilizes "loader" meta field of actions to set specific flags for specific
 * action (LOAD, SUCCESS, FAIL, RESET)
 * @template T
 * @param {?} loadActionType
 * @param {?=} reducer
 * @return {?}
 */
function loaderReducer(loadActionType, reducer) {
    return function (state, action) {
        if (state === void 0) { state = initialLoaderState; }
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === loadActionType) {
            /** @type {?} */
            var entity = action.meta.loader;
            if (entity.load) {
                return __assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return __assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return __assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return __assign({}, initialLoaderState, { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            /** @type {?} */
            var newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return __assign({}, state, { value: newValue });
            }
        }
        return state;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$1 = {
    token: (/** @type {?} */ ({}))
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case LOAD_USER_TOKEN:
        case REFRESH_USER_TOKEN: {
            return __assign({}, state);
        }
        case LOAD_USER_TOKEN_SUCCESS:
        case REFRESH_USER_TOKEN_SUCCESS: {
            /** @type {?} */
            var token = action.payload;
            return __assign({}, state, { token: token });
        }
        case LOAD_USER_TOKEN_FAIL:
        case REFRESH_USER_TOKEN_FAIL: {
            return __assign({}, state);
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$1() {
    return {
        userToken: reducer$1,
        clientToken: loaderReducer(CLIENT_TOKEN_DATA)
    };
}
/** @type {?} */
var reducerToken$1 = new InjectionToken('AuthReducers');
/** @type {?} */
var reducerProvider$1 = {
    provide: reducerToken$1,
    useFactory: getReducers$1
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearAuthState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = __assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    };
}
/** @type {?} */
var metaReducers = [clearAuthState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserTokenEffects = /** @class */ (function () {
    function UserTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN), map(function (action) { return action.payload; }), mergeMap(function (_a) {
            var userId = _a.userId, password = _a.password;
            return _this.userTokenService.loadToken(userId, password).pipe(map(function (token) {
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new LoadUserTokenSuccess(token);
            }), catchError(function (error) { return of(new LoadUserTokenFail(error)); }));
        }));
        this.refreshUserToken$ = this.actions$.pipe(ofType(REFRESH_USER_TOKEN), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, refreshToken = _a.refreshToken;
            return _this.userTokenService.refreshToken(refreshToken).pipe(map(function (token) {
                token.userId = userId;
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new RefreshUserTokenSuccess(token);
            }, catchError(function (error) { return of(new RefreshUserTokenFail(error)); })));
        }));
    }
    UserTokenEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAuthenticationTokenService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "loadUserToken$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserTokenEffects.prototype, "refreshUserToken$", void 0);
    return UserTokenEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClientTokenEffect = /** @class */ (function () {
    function ClientTokenEffect(actions$, clientAuthenticationTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(LOAD_CLIENT_TOKEN), exhaustMap(function () {
            return _this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map(function (token) {
                return new LoadClientTokenSuccess(token);
            }), catchError(function (error) { return of(new LoadClientTokenFail(error)); }));
        }));
    }
    ClientTokenEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: ClientAuthenticationTokenService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ClientTokenEffect.prototype, "loadClientToken$", void 0);
    return ClientTokenEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$1 = [UserTokenEffects, ClientTokenEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var StorageSyncType = {
    NO_STORAGE: 'NO_STORAGE',
    LOCAL_STORAGE: 'LOCAL_STORAGE',
    SESSION_STORAGE: 'SESSION_STORAGE',
};
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StateConfig = /** @class */ (function () {
    function StateConfig() {
    }
    return StateConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} winRef
 * @return {?}
 */
function storageConfig(config, winRef) {
    /** @type {?} */
    var storage;
    switch (config.state.storageSync.type) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
    }
    return {
        keys: config.state.storageSync.keys,
        rehydrate: true,
        storage: storage ? storage : winRef.sessionStorage
    };
}
/**
 * @param {?} winRef
 * @param {?=} config
 * @return {?}
 */
function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        config.state.storageSync.type === StorageSyncType.NO_STORAGE ||
        !config.state.storageSync.keys) {
        return undefined;
    }
    /** @type {?} */
    var storage = storageConfig(config, winRef);
    return function (reducer) {
        return localStorageSync(storage)(reducer);
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var META_REDUCER = new InjectionToken('metaReducer');
/**
 * @param {?} metaReducers
 * @return {?}
 */
function metaReducersFactory(metaReducers) {
    return (metaReducers || []).filter(Boolean);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} keys
 * @return {?}
 */
function getStateSlice(state, keys) {
    return Object.keys(keys).reduce(function (acc, key) {
        /** @type {?} */
        var keyValue = keys[key];
        if (state.hasOwnProperty(key)) {
            if (typeof keyValue === 'object') {
                acc[key] = getStateSlice(state[key], keyValue);
            }
            else if (keyValue) {
                acc[key] = state[key];
            }
        }
        return acc;
    }, {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var INIT_ACTION = '@ngrx/store/init';
/** @type {?} */
var CX_KEY = makeStateKey('cx-state');
/**
 * @param {?} platformId
 * @param {?=} transferState
 * @param {?=} config
 * @return {?}
 */
function getTransferStateReducer(platformId, transferState, config) {
    if (transferState &&
        config &&
        config.state &&
        config.state.ssrTransfer &&
        config.state.ssrTransfer.keys) {
        if (isPlatformBrowser(platformId)) {
            return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
        else if (isPlatformServer(platformId)) {
            return getServerTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
    }
    return undefined;
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
function getServerTransferStateReducer(transferState, keys) {
    return function (reducer) {
        return function (state, action) {
            /** @type {?} */
            var newState = reducer(state, action);
            if (newState) {
                transferState.set(CX_KEY, getStateSlice(newState, keys));
            }
            return newState;
        };
    };
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
function getBrowserTransferStateReducer(transferState, keys) {
    return function (reducer) {
        return function (state, action) {
            if (action.type === INIT_ACTION && transferState.hasKey(CX_KEY)) {
                /** @type {?} */
                var transferedState = getStateSlice(transferState.get(CX_KEY, {}), keys);
                state = deepMerge({}, state, transferedState);
            }
            return reducer(state, action);
        };
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var stateMetaReducers = [
    {
        provide: META_REDUCER,
        useFactory: getStorageSyncReducer,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true
    },
    {
        provide: META_REDUCER,
        useFactory: getTransferStateReducer,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config]
        ],
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultStateConfig = {
    state: {
        storageSync: {
            type: StorageSyncType.SESSION_STORAGE
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = metaReducersFactory;
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forRoot({}),
                        EffectsModule.forRoot([]),
                        ConfigModule.withConfig(defaultStateConfig)
                    ],
                    providers: __spread(stateMetaReducers, [
                        {
                            provide: META_REDUCERS,
                            useFactory: ɵ0,
                            deps: [[new Optional(), META_REDUCER]]
                        }
                    ])
                },] }
    ];
    return StateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function authStoreConfigFactory() {
    var _a;
    // if we want to reuse AUTH_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: {
            storageSync: {
                keys: [(_a = {}, _a[AUTH_FEATURE] = ['userToken', 'clientToken'], _a)]
            }
        }
    };
    return config;
}
var AuthStoreModule = /** @class */ (function () {
    function AuthStoreModule() {
    }
    AuthStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StateModule,
                        StoreModule.forFeature(AUTH_FEATURE, reducerToken$1, { metaReducers: metaReducers }),
                        EffectsModule.forFeature(effects$1),
                        ConfigModule.withConfigFactory(authStoreConfigFactory)
                    ],
                    providers: [reducerProvider$1]
                },] }
    ];
    return AuthStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    /**
     * @return {?}
     */
    AuthModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AuthModule,
            providers: __spread(interceptors)
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        RoutingModule,
                        AuthStoreModule,
                        ConfigModule.withConfig(defaultAuthConfig)
                    ],
                    providers: __spread(services, [{ provide: AuthConfig, useExisting: Config }])
                },] }
    ];
    return AuthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(routingService, authService) {
        this.routingService = routingService;
        this.authService = authService;
    }
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    function (_route, state) {
        var _this = this;
        return this.authService.getUserToken().pipe(map(function (token) {
            if (!token.access_token) {
                _this.routingService.go({ route: ['login'] });
                _this.routingService.saveRedirectUrl(state.url);
            }
            return !!token.access_token;
        }));
    };
    AuthGuard.GUARD_NAME = 'AuthGuard';
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(RoutingService), inject(AuthService)); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(routingService, authService) {
        this.routingService = routingService;
        this.authService = authService;
    }
    /**
     * @return {?}
     */
    NotAuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.authService.getUserToken().pipe(map(function (token) {
            if (token.access_token) {
                _this.routingService.go({ route: ['home'] });
            }
            return !token.access_token;
        }));
    };
    NotAuthGuard.GUARD_NAME = 'NotAuthGuard';
    NotAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NotAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService }
    ]; };
    /** @nocollapse */ NotAuthGuard.ngInjectableDef = defineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(inject(RoutingService), inject(AuthService)); }, token: NotAuthGuard, providedIn: "root" });
    return NotAuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ANONYMOUS_USERID = 'anonymous';
var CartDataService = /** @class */ (function () {
    function CartDataService() {
        this._userId = ANONYMOUS_USERID;
        this._getDetails = false;
    }
    Object.defineProperty(CartDataService.prototype, "hasCart", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "userId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._userId;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._userId = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cart", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cart;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._cart = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "getDetails", {
        get: /**
         * @return {?}
         */
        function () {
            return this._getDetails;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._getDetails = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartDataService.prototype, "cartId", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.hasCart) {
                return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
            }
        },
        enumerable: true,
        configurable: true
    });
    CartDataService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartDataService.ctorParameters = function () { return []; };
    return CartDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartService = /** @class */ (function () {
    function CartService(store, cartData, authService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.init();
    }
    /**
     * @return {?}
     */
    CartService.prototype.getActive = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getCartContent));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getEntries));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getCartMergeComplete = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getCartMergeComplete));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getLoaded = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getLoaded));
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.init = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.pipe(select(getCartContent)).subscribe(function (cart) {
            _this.cartData.cart = cart;
            if (_this.callback) {
                _this.callback();
                _this.callback = null;
            }
        });
        this.authService
            .getUserToken()
            .pipe(filter(function (userToken) { return _this.cartData.userId !== userToken.userId; }))
            .subscribe(function (userToken) {
            _this.setUserId(userToken);
            _this.loadOrMerge();
        });
        this.refresh();
    };
    /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    CartService.prototype.setUserId = /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    function (userToken) {
        if (Object.keys(userToken).length !== 0) {
            this.cartData.userId = userToken.userId;
        }
        else {
            this.cartData.userId = ANONYMOUS_USERID;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.loadOrMerge = /**
     * @protected
     * @return {?}
     */
    function () {
        this.cartData.getDetails = true;
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            if (!this.isCreated(this.cartData.cart)) {
                this.store.dispatch(new LoadCart({
                    userId: this.cartData.userId,
                    cartId: 'current'
                }));
            }
            else {
                this.store.dispatch(new MergeCart({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cart.guid
                }));
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.refresh = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.pipe(select(getRefresh)).subscribe(function (refresh) {
            if (refresh) {
                _this.store.dispatch(new LoadCart({
                    userId: _this.cartData.userId,
                    cartId: _this.cartData.cartId,
                    details: true
                }));
            }
        });
    };
    /**
     * @return {?}
     */
    CartService.prototype.loadDetails = /**
     * @return {?}
     */
    function () {
        this.cartData.getDetails = true;
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            this.store.dispatch(new LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
                details: true
            }));
        }
        else if (this.cartData.cartId) {
            this.store.dispatch(new LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                details: true
            }));
        }
    };
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.addEntry = /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (productCode, quantity) {
        if (!this.isCreated(this.cartData.cart)) {
            this.store.dispatch(new CreateCart({ userId: this.cartData.userId }));
            this.callback = function () {
                this.store.dispatch(new AddEntry({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    productCode: productCode,
                    quantity: quantity
                }));
            };
        }
        else {
            this.store.dispatch(new AddEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                productCode: productCode,
                quantity: quantity
            }));
        }
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CartService.prototype.removeEntry = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.store.dispatch(new RemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber
        }));
    };
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.updateEntry = /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (entryNumber, quantity) {
        if (+quantity > 0) {
            this.store.dispatch(new UpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity
            }));
        }
        else {
            this.store.dispatch(new RemoveEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber
            }));
        }
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    CartService.prototype.getEntry = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(getEntrySelectorFactory(productCode)));
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isCreated = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !!Object.keys(cart).length;
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isEmpty = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !cart.totalItems;
    };
    CartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService },
        { type: AuthService }
    ]; };
    return CartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services$1 = [CartService, CartDataService];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEncoder = /** @class */ (function () {
    function CustomEncoder() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    CustomEncoder.prototype.encodeKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return encodeURIComponent(key);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CustomEncoder.prototype.encodeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return encodeURIComponent(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CustomEncoder.prototype.decodeKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return decodeURIComponent(key);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CustomEncoder.prototype.decodeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return decodeURIComponent(value);
    };
    return CustomEncoder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// for mini cart
/** @type {?} */
var BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
var DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,totalTax(formattedValue),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue)';
var OccCartService = /** @class */ (function () {
    function OccCartService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCartService.prototype.getCartEndpoint = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var cartEndpoint = 'users/' + userId + '/carts/';
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            cartEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    OccCartService.prototype.loadAllCarts = /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    function (userId, details) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var params = details
            ? new HttpParams({
                fromString: 'fields=carts(' + DETAILS_PARAMS + ',saveTime)'
            })
            : new HttpParams({
                fromString: 'fields=carts(' + BASIC_PARAMS + ',saveTime)'
            });
        return this.http
            .get(url, { params: params })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    OccCartService.prototype.loadCart = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    function (userId, cartId, details) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        var params = details
            ? new HttpParams({
                fromString: 'fields=' + DETAILS_PARAMS
            })
            : new HttpParams({
                fromString: 'fields=' + BASIC_PARAMS
            });
        if (cartId === 'current') {
            return this.loadAllCarts(userId, details).pipe(map(function (cartsData) {
                if (cartsData && cartsData.carts) {
                    /** @type {?} */
                    var activeCart = cartsData.carts.find(function (cart) {
                        return cart['saveTime'] === undefined;
                    });
                    return activeCart;
                }
                else {
                    return null;
                }
            }));
        }
        else {
            return this.http
                .get(url, { params: params })
                .pipe(catchError(function (error) { return throwError(error); }));
        }
    };
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    OccCartService.prototype.createCart = /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    function (userId, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var toAdd = JSON.stringify({});
        /** @type {?} */
        var queryString = 'fields=' + BASIC_PARAMS;
        if (oldCartId) {
            queryString = queryString + '&oldCartId=' + oldCartId;
        }
        if (toMergeCartGuid) {
            queryString = queryString + '&toMergeCartGuid=' + toMergeCartGuid;
        }
        /** @type {?} */
        var params = new HttpParams({
            fromString: queryString
        });
        return this.http
            .post(url, toAdd, { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    OccCartService.prototype.addEntry = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    function (userId, cartId, productCode, quantity) {
        if (quantity === void 0) { quantity = 1; }
        /** @type {?} */
        var toAdd = JSON.stringify({});
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, toAdd, { headers: headers, params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    OccCartService.prototype.updateEntry = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    function (userId, cartId, entryNumber, qty, pickupStore) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        var queryString = 'qty=' + qty;
        if (pickupStore) {
            queryString = queryString + '&pickupStore=' + pickupStore;
        }
        /** @type {?} */
        var params = new HttpParams({
            fromString: queryString
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .patch(url, {}, { headers: headers, params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    OccCartService.prototype.removeEntry = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    function (userId, cartId, entryNumber) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    OccCartService.prototype.createAddressOnCart = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (userId, cartId, address) {
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    OccCartService.prototype.setDeliveryAddress = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, cartId, addressId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
            params: { addressId: addressId }
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    OccCartService.prototype.setDeliveryMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    function (userId, cartId, deliveryModeId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
            params: { deliveryModeId: deliveryModeId }
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartService.prototype.getDeliveryMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartService.prototype.getSupportedDeliveryModes = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartService.prototype.getPaymentProviderSubInfo = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl')
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    OccCartService.prototype.createSubWithPaymentProvider = /**
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    function (postUrl, parameters) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html'
        });
        /** @type {?} */
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        });
        return this.http.post(postUrl, httpParams, {
            headers: headers,
            responseType: 'text'
        });
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    OccCartService.prototype.createPaymentDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    function (userId, cartId, parameters) {
        /** @type {?} */
        var httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(function (key) {
            httpParams = httpParams.append(key, parameters[key]);
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    OccCartService.prototype.setPaymentDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    function (userId, cartId, paymentDetailsId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId }
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccCartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccCartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultOccConfig = {
    site: {
        baseSite: 'electronics',
        language: 'en',
        currency: 'USD'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccModule = /** @class */ (function () {
    function OccModule() {
    }
    OccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ConfigModule.withConfig(defaultOccConfig)],
                    providers: [{ provide: OccConfig, useExisting: Config }]
                },] }
    ];
    return OccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartOccModule = /** @class */ (function () {
    function CartOccModule() {
    }
    CartOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, OccModule],
                    providers: [OccCartService]
                },] }
    ];
    return CartOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$2 = {
    content: {},
    entries: {},
    refresh: false,
    cartMergeComplete: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$2(state, action) {
    if (state === void 0) { state = initialState$2; }
    switch (action.type) {
        case MERGE_CART: {
            return __assign({}, state, { cartMergeComplete: false });
        }
        case MERGE_CART_SUCCESS: {
            return __assign({}, state, { cartMergeComplete: true });
        }
        case LOAD_CART_SUCCESS:
        case CREATE_CART_SUCCESS: {
            /** @type {?} */
            var content = __assign({}, action.payload);
            /** @type {?} */
            var entries = {};
            if (content.entries) {
                entries = content.entries.reduce(function (entryMap, entry) {
                    var _a;
                    return __assign({}, entryMap, (_a = {}, _a[entry.product.code] = state.entries[entry.product.code]
                        ? __assign({}, state.entries[entry.product.code], entry) : entry, _a));
                }, __assign({}, entries));
                delete content['entries'];
            }
            return __assign({}, state, { content: content,
                entries: entries, refresh: false });
        }
        case REMOVE_ENTRY_SUCCESS:
        case UPDATE_ENTRY_SUCCESS:
        case ADD_ENTRY_SUCCESS: {
            return __assign({}, state, { refresh: true });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$2() {
    return {
        active: loaderReducer(CART_DATA, reducer$2)
    };
}
/** @type {?} */
var reducerToken$2 = new InjectionToken('CartReducers');
/** @type {?} */
var reducerProvider$2 = {
    provide: reducerToken$2,
    useFactory: getReducers$2
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCartState(reducer$$1) {
    return function (state, action) {
        if (action.type === '[Auth] Logout' ||
            action.type === '[Checkout] Place Order Success') {
            state = undefined;
        }
        return reducer$$1(state, action);
    };
}
/** @type {?} */
var metaReducers$1 = [clearCartState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENDPOINT_PRODUCT = 'products';
var OccProductService = /** @class */ (function () {
    function OccProductService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    OccProductService.prototype.getProductEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            ENDPOINT_PRODUCT);
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    OccProductService.prototype.loadProduct = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews'
        });
        return this.http
            .get(this.getProductEndpoint() + ("/" + productCode), { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    OccProductService.prototype.loadProductReviews = /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    function (productCode, maxCount) {
        /** @type {?} */
        var url = this.getProductEndpoint() + ("/" + productCode + "/reviews");
        if (maxCount && maxCount > 0) {
            url += "?maxCount=" + maxCount;
        }
        return this.http
            .get(url)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    OccProductService.prototype.postProductReview = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
        /** @type {?} */
        var url = this.getProductEndpoint() + ("/" + productCode + "/reviews");
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        /** @type {?} */
        var body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http
            .post(url, body.toString(), { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccProductService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENDPOINT_PRODUCT$1 = 'products';
/** @type {?} */
var DEFAULT_SEARCH_CONFIG = {
    pageSize: 20
};
var OccProductSearchService = /** @class */ (function () {
    function OccProductSearchService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    OccProductSearchService.prototype.getProductEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            ENDPOINT_PRODUCT$1);
    };
    /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    OccProductSearchService.prototype.query = /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    function (fullQuery, searchConfig) {
        if (searchConfig === void 0) { searchConfig = DEFAULT_SEARCH_CONFIG; }
        /** @type {?} */
        var params = new HttpParams({
            fromString: '&fields=' +
                'products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),' +
                'facets,' +
                'breadcrumbs,' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)'
        });
        params = params.set('query', fullQuery);
        if (searchConfig.pageSize) {
            params = params.set('pageSize', searchConfig.pageSize.toString());
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', searchConfig.currentPage.toString());
        }
        if (searchConfig.sortCode) {
            params = params.set('sort', searchConfig.sortCode);
        }
        return this.http
            .get(this.getProductEndpoint() + '/search', { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductSearchService.prototype.queryProductSuggestions = /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    function (term, pageSize) {
        if (pageSize === void 0) { pageSize = 3; }
        return this.http
            .get(this.getProductEndpoint() + '/suggestions', {
            params: new HttpParams()
                .set('term', term)
                .set('max', pageSize.toString())
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccProductSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductSearchService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccProductSearchService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductOccModule = /** @class */ (function () {
    function ProductOccModule() {
    }
    ProductOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, OccModule],
                    providers: [OccProductService, OccProductSearchService]
                },] }
    ];
    return ProductOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRODUCT_FEATURE = 'product';
/** @type {?} */
var PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENDPOINT_COUNTRIES = 'countries';
/** @type {?} */
var ENDPOINT_TITLES = 'titles';
/** @type {?} */
var ENDPOINT_CARD_TYPES = 'cardtypes';
/** @type {?} */
var ENDPOINT_REGIONS = 'regions';
/** @type {?} */
var COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
/** @type {?} */
var COUNTRIES_TYPE_BILLING = 'BILLING';
var OccMiscsService = /** @class */ (function () {
    function OccMiscsService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} endpoint
     * @return {?}
     */
    OccMiscsService.prototype.getEndpoint = /**
     * @protected
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            endpoint);
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING)
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING)
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_TITLES))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadCardTypes = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccMiscsService.prototype.loadRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.http
            .get(this.getEndpoint(this.buildRegionsUrl(countryIsoCode)))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccMiscsService.prototype.buildRegionsUrl = /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return ENDPOINT_COUNTRIES + "/" + countryIsoCode + "/" + ENDPOINT_REGIONS;
    };
    OccMiscsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccMiscsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccMiscsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductImageConverterService = /** @class */ (function () {
    function ProductImageConverterService(config) {
        this.config = config;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    ProductImageConverterService.prototype.convertList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_1, _a;
        if (!list) {
            return;
        }
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var product = list_1_1.value;
                this.convertProduct(product);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductImageConverterService.prototype.convertProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (product.images) {
            product.images = this.populate(product.images);
        }
    };
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    ProductImageConverterService.prototype.populate = /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var e_2, _a;
        /** @type {?} */
        var images = {};
        if (source) {
            try {
                for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                    var image = source_1_1.value;
                    /** @type {?} */
                    var isList = image.hasOwnProperty('galleryIndex');
                    if (!images.hasOwnProperty(image.imageType)) {
                        images[image.imageType] = isList ? [] : {};
                    }
                    /** @type {?} */
                    var imageContainer = void 0;
                    if (isList && !images[image.imageType][image.galleryIndex]) {
                        images[image.imageType][image.galleryIndex] = {};
                    }
                    if (isList) {
                        imageContainer = images[image.imageType][image.galleryIndex];
                    }
                    else {
                        imageContainer = images[image.imageType];
                    }
                    // set full image URL path
                    image.url = (this.config.server.baseUrl || '') + image.url;
                    imageContainer[image.format] = image;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return images;
    };
    ProductImageConverterService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductImageConverterService.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    return ProductImageConverterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductReferenceConverterService = /** @class */ (function () {
    function ProductReferenceConverterService() {
    }
    /**
     * @param {?} product
     * @return {?}
     */
    ProductReferenceConverterService.prototype.convertProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (product.productReferences) {
            product.productReferences = this.populate(product.productReferences);
        }
    };
    /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     * @protected
     * @param {?} source
     * @return {?}
     */
    ProductReferenceConverterService.prototype.populate = /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     * @protected
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var e_1, _a;
        /** @type {?} */
        var references = {};
        if (source) {
            try {
                for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                    var reference = source_1_1.value;
                    if (!references.hasOwnProperty(reference.referenceType)) {
                        references[reference.referenceType] = [];
                    }
                    references[reference.referenceType].push(reference);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return references;
    };
    ProductReferenceConverterService.decorators = [
        { type: Injectable }
    ];
    return ProductReferenceConverterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductConverterModule = /** @class */ (function () {
    function ProductConverterModule() {
    }
    ProductConverterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [ProductImageConverterService, ProductReferenceConverterService]
                },] }
    ];
    return ProductConverterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
var SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
var SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
var GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
var GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
var GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
var CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
var SearchProducts = /** @class */ (function () {
    function SearchProducts(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
    return SearchProducts;
}());
var SearchProductsFail = /** @class */ (function () {
    function SearchProductsFail(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
    return SearchProductsFail;
}());
var SearchProductsSuccess = /** @class */ (function () {
    function SearchProductsSuccess(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
    return SearchProductsSuccess;
}());
var GetProductSuggestions = /** @class */ (function () {
    function GetProductSuggestions(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
    return GetProductSuggestions;
}());
var GetProductSuggestionsSuccess = /** @class */ (function () {
    function GetProductSuggestionsSuccess(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
    return GetProductSuggestionsSuccess;
}());
var GetProductSuggestionsFail = /** @class */ (function () {
    function GetProductSuggestionsFail(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
    return GetProductSuggestionsFail;
}());
var CleanProductSearchState = /** @class */ (function () {
    function CleanProductSearchState() {
        this.type = CLEAN_PRODUCT_SEARCH;
    }
    return CleanProductSearchState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
/** @type {?} */
var ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
/**
 * @param {?} type
 * @param {?} id
 * @return {?}
 */
function entityMeta(type, id) {
    return {
        entityType: type,
        entityId: id
    };
}
/**
 * @param {?} type
 * @param {?} id
 * @return {?}
 */
function entityRemoveMeta(type, id) {
    return {
        entityId: id,
        entityType: type,
        entityRemove: true
    };
}
/**
 * @param {?} type
 * @return {?}
 */
function entityRemoveAllMeta(type) {
    return {
        entityId: null,
        entityType: type,
        entityRemove: true
    };
}
var EntityRemoveAction = /** @class */ (function () {
    function EntityRemoveAction(entityType, id) {
        this.type = ENTITY_REMOVE_ACTION;
        this.meta = entityRemoveMeta(entityType, id);
    }
    return EntityRemoveAction;
}());
var EntityRemoveAllAction = /** @class */ (function () {
    function EntityRemoveAllAction(entityType) {
        this.type = ENTITY_REMOVE_ALL_ACTION;
        this.meta = entityRemoveAllMeta(entityType);
    }
    return EntityRemoveAllAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
/** @type {?} */
var ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
/** @type {?} */
var ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
/** @type {?} */
var ENTITY_RESET_ACTION = '[ENTITY] RESET';
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entityLoadMeta(entityType, id) {
    return __assign({}, loadMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @param {?=} error
 * @return {?}
 */
function entityFailMeta(entityType, id, error) {
    return __assign({}, failMeta(entityType, error), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entitySuccessMeta(entityType, id) {
    return __assign({}, successMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entityResetMeta(entityType, id) {
    return __assign({}, resetMeta(entityType), entityMeta(entityType, id));
}
var EntityLoadAction = /** @class */ (function () {
    function EntityLoadAction(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
    return EntityLoadAction;
}());
var EntityFailAction = /** @class */ (function () {
    function EntityFailAction(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
    return EntityFailAction;
}());
var EntitySuccessAction = /** @class */ (function () {
    function EntitySuccessAction(entityType, id) {
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
    return EntitySuccessAction;
}());
var EntityResetAction = /** @class */ (function () {
    function EntityResetAction(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
    return EntityResetAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
var LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
var LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
var LoadProduct = /** @class */ (function (_super) {
    __extends(LoadProduct, _super);
    function LoadProduct(payload) {
        var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT;
        return _this;
    }
    return LoadProduct;
}(EntityLoadAction));
var LoadProductFail = /** @class */ (function (_super) {
    __extends(LoadProductFail, _super);
    function LoadProductFail(productCode, payload) {
        var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, productCode, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_FAIL;
        return _this;
    }
    return LoadProductFail;
}(EntityFailAction));
var LoadProductSuccess = /** @class */ (function (_super) {
    __extends(LoadProductSuccess, _super);
    function LoadProductSuccess(payload) {
        var _this = _super.call(this, PRODUCT_DETAIL_ENTITY, payload.code) || this;
        _this.payload = payload;
        _this.type = LOAD_PRODUCT_SUCCESS;
        return _this;
    }
    return LoadProductSuccess;
}(EntitySuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
/** @type {?} */
var LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
/** @type {?} */
var LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
/** @type {?} */
var POST_PRODUCT_REVIEW = '[Product] Post Product Review';
/** @type {?} */
var POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
/** @type {?} */
var POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
var LoadProductReviews = /** @class */ (function () {
    function LoadProductReviews(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
    return LoadProductReviews;
}());
var LoadProductReviewsFail = /** @class */ (function () {
    function LoadProductReviewsFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
    return LoadProductReviewsFail;
}());
var LoadProductReviewsSuccess = /** @class */ (function () {
    function LoadProductReviewsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
    return LoadProductReviewsSuccess;
}());
var PostProductReview = /** @class */ (function () {
    function PostProductReview(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
    return PostProductReview;
}());
var PostProductReviewFail = /** @class */ (function () {
    function PostProductReviewFail(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
    return PostProductReviewFail;
}());
var PostProductReviewSuccess = /** @class */ (function () {
    function PostProductReviewSuccess(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
    return PostProductReviewSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductsState = createFeatureSelector(PRODUCT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityStateSelector(state, id) {
    return state.entities[id] || {};
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityValueSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.value;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityLoadingSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.loading;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityErrorSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.error;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entitySuccessSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.success;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductState = createSelector(getProductsState, function (state) { return state.details; });
/** @type {?} */
var getSelectedProductsFactory = function (codes) {
    return createSelector(getProductState, function (details) {
        return codes
            .map(function (code) {
            return details.entities[code] ? details.entities[code].value : undefined;
        })
            .filter(function (product) { return product !== undefined; });
    });
};
/** @type {?} */
var getSelectedProductStateFactory = function (code) {
    return createSelector(getProductState, function (details) { return entityStateSelector(details, code); });
};
/** @type {?} */
var getSelectedProductFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderValueSelector(productState); });
};
/** @type {?} */
var getSelectedProductLoadingFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderLoadingSelector(productState); });
};
/** @type {?} */
var getSelectedProductSuccessFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderSuccessSelector(productState); });
};
/** @type {?} */
var getSelectedProductErrorFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderErrorSelector(productState); });
};
/** @type {?} */
var getAllProductCodes = createSelector(getProductState, function (details) {
    return Object.keys(details.entities);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$3 = {
    results: {},
    suggestions: [],
    auxResults: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$3(state, action) {
    if (state === void 0) { state = initialState$3; }
    switch (action.type) {
        case SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            var results = action.payload;
            /** @type {?} */
            var res = action.auxiliary ? { auxResults: results } : { results: results };
            return __assign({}, state, res);
        }
        case GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            var suggestions = action.payload;
            return __assign({}, state, { suggestions: suggestions });
        }
        case CLEAN_PRODUCT_SEARCH: {
            return initialState$3;
        }
    }
    return state;
}
/** @type {?} */
var getSearchResults = function (state) { return state.results; };
/** @type {?} */
var getAuxSearchResults = function (state) { return state.auxResults; };
/** @type {?} */
var getProductSuggestions = function (state) { return state.suggestions; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductsSearchState = createSelector(getProductsState, function (state) { return state.search; });
/** @type {?} */
var getSearchResults$1 = createSelector(getProductsSearchState, getSearchResults);
/** @type {?} */
var getAuxSearchResults$1 = createSelector(getProductsSearchState, getAuxSearchResults);
/** @type {?} */
var getProductSuggestions$1 = createSelector(getProductsSearchState, getProductSuggestions);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getProductReviewsState = createSelector(getProductsState, function (state) { return state.reviews; });
/** @type {?} */
var getSelectedProductReviewsFactory = function (productCode) {
    return createSelector(getProductReviewsState, function (reviewData) {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$4 = {
    productCode: '',
    list: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$4(state, action) {
    if (state === void 0) { state = initialState$4; }
    switch (action.type) {
        case LOAD_PRODUCT_REVIEWS_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return __assign({}, state, { productCode: productCode,
                list: list });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_LANGUAGES = '[Site-context] Load Languages';
/** @type {?} */
var LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
/** @type {?} */
var LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
/** @type {?} */
var SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
/** @type {?} */
var LANGUAGE_CHANGE = '[Site-context] Language Change';
var LoadLanguages = /** @class */ (function () {
    function LoadLanguages() {
        this.type = LOAD_LANGUAGES;
    }
    return LoadLanguages;
}());
var LoadLanguagesFail = /** @class */ (function () {
    function LoadLanguagesFail(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
    return LoadLanguagesFail;
}());
var LoadLanguagesSuccess = /** @class */ (function () {
    function LoadLanguagesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
    return LoadLanguagesSuccess;
}());
var SetActiveLanguage = /** @class */ (function () {
    function SetActiveLanguage(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
    return SetActiveLanguage;
}());
var LanguageChange = /** @class */ (function () {
    function LanguageChange() {
        this.type = LANGUAGE_CHANGE;
    }
    return LanguageChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$5 = {
    entities: null,
    activeLanguage: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$5(state, action) {
    if (state === void 0) { state = initialState$5; }
    switch (action.type) {
        case LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            var languages = action.payload;
            /** @type {?} */
            var entities = languages.reduce(function (langEntities, language) {
                var _a;
                return __assign({}, langEntities, (_a = {}, _a[language.isocode] = language, _a));
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            var isocode = action.payload;
            return __assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_CURRENCIES = '[Site-context] Load Currencies';
/** @type {?} */
var LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
/** @type {?} */
var LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
/** @type {?} */
var SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
/** @type {?} */
var CURRENCY_CHANGE = '[Site-context] Currency Change';
var LoadCurrencies = /** @class */ (function () {
    function LoadCurrencies() {
        this.type = LOAD_CURRENCIES;
    }
    return LoadCurrencies;
}());
var LoadCurrenciesFail = /** @class */ (function () {
    function LoadCurrenciesFail(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_FAIL;
    }
    return LoadCurrenciesFail;
}());
var LoadCurrenciesSuccess = /** @class */ (function () {
    function LoadCurrenciesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_SUCCESS;
    }
    return LoadCurrenciesSuccess;
}());
var SetActiveCurrency = /** @class */ (function () {
    function SetActiveCurrency(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CURRENCY;
    }
    return SetActiveCurrency;
}());
var CurrencyChange = /** @class */ (function () {
    function CurrencyChange() {
        this.type = CURRENCY_CHANGE;
    }
    return CurrencyChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$6 = {
    entities: null,
    activeCurrency: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$6(state, action) {
    if (state === void 0) { state = initialState$6; }
    switch (action.type) {
        case LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            var currencies = action.payload;
            /** @type {?} */
            var entities = currencies.reduce(function (currEntities, currency) {
                var _a;
                return __assign({}, currEntities, (_a = {}, _a[currency.isocode] = currency, _a));
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            var isocode = action.payload;
            return __assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$3() {
    return {
        languages: reducer$5,
        currencies: reducer$6
    };
}
/** @type {?} */
var reducerToken$3 = new InjectionToken('SiteContextReducers');
/** @type {?} */
var reducerProvider$3 = {
    provide: reducerToken$3,
    useFactory: getReducers$3
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccSiteService = /** @class */ (function () {
    function OccSiteService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    OccSiteService.prototype.getBaseEndPoint = /**
     * @protected
     * @return {?}
     */
    function () {
        if (!this.config || !this.config.server) {
            return '';
        }
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite);
    };
    /**
     * @return {?}
     */
    OccSiteService.prototype.loadLanguages = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getBaseEndPoint() + '/languages')
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccSiteService.prototype.loadCurrencies = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getBaseEndPoint() + '/currencies')
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccSiteService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OccSiteService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    /** @nocollapse */ OccSiteService.ngInjectableDef = defineInjectable({ factory: function OccSiteService_Factory() { return new OccSiteService(inject(HttpClient), inject(OccConfig)); }, token: OccSiteService, providedIn: "root" });
    return OccSiteService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LanguagesEffects = /** @class */ (function () {
    function LanguagesEffects(actions$, occSiteService, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.occSiteService = occSiteService;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(LOAD_LANGUAGES), exhaustMap(function () {
            return _this.occSiteService.loadLanguages().pipe(map(function (data) { return new LoadLanguagesSuccess(data.languages); }), catchError(function (error) { return of(new LoadLanguagesFail(error)); }));
        }));
        this.activateLanguage$ = this.actions$.pipe(ofType(SET_ACTIVE_LANGUAGE), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), map(function () { return new LanguageChange(); }));
    }
    LanguagesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguagesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccSiteService },
        { type: WindowRef }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "loadLanguages$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "activateLanguage$", void 0);
    return LanguagesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CurrenciesEffects = /** @class */ (function () {
    function CurrenciesEffects(actions$, occSiteService, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.occSiteService = occSiteService;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(LOAD_CURRENCIES), exhaustMap(function () {
            return _this.occSiteService.loadCurrencies().pipe(map(function (data) { return new LoadCurrenciesSuccess(data.currencies); }), catchError(function (error) { return of(new LoadCurrenciesFail(error)); }));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(SET_ACTIVE_CURRENCY), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(function () { return new CurrencyChange(); }));
    }
    CurrenciesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrenciesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccSiteService },
        { type: WindowRef }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CurrenciesEffects.prototype, "activateCurrency$", void 0);
    return CurrenciesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$2 = [LanguagesEffects, CurrenciesEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SITE_CONTEXT_FEATURE = 'siteContext';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getSiteContextState = createFeatureSelector(SITE_CONTEXT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var activeLanguageSelector = function (state) { return state.activeLanguage; };
/** @type {?} */
var languagesEntitiesSelector = function (state) { return state.entities; };
/** @type {?} */
var getLanguagesState = createSelector(getSiteContextState, function (state) { return state.languages; });
/** @type {?} */
var getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
/** @type {?} */
var getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
/** @type {?} */
var getAllLanguages = createSelector(getLanguagesEntities, function (entities) {
    return entities
        ? Object.keys(entities).map(function (isocode) { return entities[isocode]; })
        : null;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var currenciesEntitiesSelector = function (state) { return state.entities; };
/** @type {?} */
var activeCurrencySelector = function (state) { return state.activeCurrency; };
/** @type {?} */
var getCurrenciesState = createSelector(getSiteContextState, function (state) { return state.currencies; });
/** @type {?} */
var getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
/** @type {?} */
var getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
/** @type {?} */
var getAllCurrencies = createSelector(getCurrenciesEntities, function (entities) {
    return entities
        ? Object.keys(entities).map(function (isocode) { return entities[isocode]; })
        : null;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
var LanguageService = /** @class */ (function () {
    function LanguageService(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     */
    /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    LanguageService.prototype.getAll = /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(getAllLanguages), tap(function (languages) {
            if (!languages) {
                _this.store.dispatch(new LoadLanguages());
            }
        }), filter(Boolean));
    };
    /**
     * Represents the isocode of the active language.
     */
    /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    LanguageService.prototype.getActive = /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    function () {
        return this.store
            .pipe(select(getActiveLanguage))
            .pipe(filter(Boolean));
    };
    /**
     * Sets the active language.
     */
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    LanguageService.prototype.setActive = /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    function (isocode) {
        var _this = this;
        return this.store
            .pipe(select(getActiveLanguage), take(1))
            .subscribe(function (activeLanguage) {
            if (activeLanguage !== isocode) {
                _this.store.dispatch(new SetActiveLanguage(isocode));
            }
        });
    };
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     */
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @param {?} defaultLanguage
     * @return {?}
     */
    LanguageService.prototype.initialize = /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @param {?} defaultLanguage
     * @return {?}
     */
    function (defaultLanguage) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
            this.setActive(this.sessionStorage.getItem('language'));
        }
        else {
            this.setActive(defaultLanguage);
        }
    };
    LanguageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
    return LanguageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
var CurrencyService = /** @class */ (function () {
    function CurrencyService(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the currencies supported by the current store.
     */
    /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    CurrencyService.prototype.getAll = /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(getAllCurrencies), tap(function (currencies) {
            if (!currencies) {
                _this.store.dispatch(new LoadCurrencies());
            }
        }), filter(Boolean));
    };
    /**
     * Represents the isocode of the active currency.
     */
    /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    CurrencyService.prototype.getActive = /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    function () {
        return this.store
            .pipe(select(getActiveCurrency))
            .pipe(filter(Boolean));
    };
    /**
     * Sets the active language.
     */
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    CurrencyService.prototype.setActive = /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    function (isocode) {
        var _this = this;
        return this.store
            .pipe(select(getActiveCurrency), take(1))
            .subscribe(function (activeCurrency) {
            if (activeCurrency !== isocode) {
                _this.store.dispatch(new SetActiveCurrency(isocode));
            }
        });
    };
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     */
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @param {?} defaultCurrency
     * @return {?}
     */
    CurrencyService.prototype.initialize = /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @param {?} defaultCurrency
     * @return {?}
     */
    function (defaultCurrency) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('currency')) {
            this.setActive(this.sessionStorage.getItem('currency'));
        }
        else {
            this.setActive(defaultCurrency);
        }
    };
    CurrencyService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrencyService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
    return CurrencyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextOccModule = /** @class */ (function () {
    function SiteContextOccModule() {
    }
    SiteContextOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [OccModule, CommonModule, HttpClientModule],
                    providers: [OccModule, OccSiteService]
                },] }
    ];
    return SiteContextOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function siteContextStoreConfigFactory() {
    var _a;
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: { ssrTransfer: { keys: (_a = {}, _a[SITE_CONTEXT_FEATURE] = true, _a) } }
    };
    return config;
}
var SiteContextStoreModule = /** @class */ (function () {
    function SiteContextStoreModule() {
    }
    SiteContextStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$3),
                        EffectsModule.forFeature(effects$2),
                        ConfigModule.withConfigFactory(siteContextStoreConfigFactory)
                    ],
                    providers: [reducerProvider$3]
                },] }
    ];
    return SiteContextStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 * @template T
 * @param {?} entityType
 * @param {?} reducer
 * @return {?}
 */
function entityReducer(entityType, reducer) {
    return function (state, action) {
        if (state === void 0) { state = initialEntityState; }
        /** @type {?} */
        var ids;
        /** @type {?} */
        var partitionPayload = false;
        if (action.meta &&
            action.meta.entityType === entityType &&
            action.meta.entityId !== undefined) {
            ids = [].concat(action.meta.entityId);
            // remove selected entities
            if (action.meta.entityRemove) {
                if (action.meta.entityId === null) {
                    return initialEntityState;
                }
                else {
                    /** @type {?} */
                    var removed_1 = false;
                    /** @type {?} */
                    var newEntities = Object.keys(state.entities).reduce(function (acc, cur) {
                        if (ids.indexOf(cur) > -1) {
                            removed_1 = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed_1 ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        var entityUpdates = {};
        for (var i = 0; i < ids.length; i++) {
            /** @type {?} */
            var id = ids[i];
            /** @type {?} */
            var subAction = partitionPayload
                ? __assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            var newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return __assign({}, state, { entities: __assign({}, state.entities, entityUpdates) });
        }
        return state;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entitySelector(state, id) {
    return state.entities[id] || undefined;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderLoad(entityType) {
    return filter(function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            action.meta.loader.load;
    });
}
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderFail(entityType) {
    return filter(function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            action.meta.loader.error;
    });
}
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderSuccess(entityType) {
    return filter(function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            !action.meta.loader.load &&
            !action.meta.loader.error;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Higher order reducer that wraps LoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic loading flags
 * @template T
 * @param {?} entityType
 * @param {?=} reducer
 * @return {?}
 */
function entityLoaderReducer(entityType, reducer) {
    return entityReducer(entityType, loaderReducer(entityType, reducer));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ContextServiceMap = /** @class */ (function () {
    function ContextServiceMap() {
    }
    return ContextServiceMap;
}());
/** @type {?} */
var LANGUAGE_CONTEXT_ID = 'LANGUAGE';
/** @type {?} */
var CURRENCY_CONTEXT_ID = 'CURRENCY';
/**
 * @return {?}
 */
function serviceMapFactory() {
    var _a;
    return _a = {},
        _a[LANGUAGE_CONTEXT_ID] = LanguageService,
        _a[CURRENCY_CONTEXT_ID] = CurrencyService,
        _a;
}
/** @type {?} */
var contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultSiteContextConfigFactory() {
    var _a;
    return {
        siteContext: {
            parameters: (_a = {},
                _a[LANGUAGE_CONTEXT_ID] = {
                    persistence: 'route',
                    defaultValue: 'en',
                    values: ['en', 'de', 'ja', 'zh']
                },
                _a[CURRENCY_CONTEXT_ID] = {
                    persistence: 'route',
                    defaultValue: 'USD',
                    values: ['USD', 'JPY']
                },
                _a),
            urlEncodingParameters: [LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID]
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SiteContextConfig = /** @class */ (function () {
    function SiteContextConfig() {
    }
    return SiteContextConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} langService
 * @param {?} currService
 * @return {?}
 */
function inititializeContext(config, langService, currService) {
    return function () {
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
    };
}
/** @type {?} */
var contextServiceProviders = [
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: inititializeContext,
        deps: [OccConfig, LanguageService, CurrencyService],
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextParamsService = /** @class */ (function () {
    function SiteContextParamsService(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @param {?=} persistence
     * @return {?}
     */
    SiteContextParamsService.prototype.getContextParameters = /**
     * @param {?=} persistence
     * @return {?}
     */
    function (persistence) {
        /** @type {?} */
        var contextConfig = this.config.siteContext.parameters;
        if (contextConfig) {
            /** @type {?} */
            var params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter(function (key) { return contextConfig[key].persistence === persistence; });
            }
            else {
                return params;
            }
        }
        return [];
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getParamValues = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].values
            : undefined;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getParamDefaultValue = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].defaultValue
            : undefined;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getSiteContextService = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getValue = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /** @type {?} */
        var value;
        /** @type {?} */
        var service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe(function (val) { return (value = val); })
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    };
    /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    SiteContextParamsService.prototype.setValue = /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) {
        /** @type {?} */
        var service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    };
    SiteContextParamsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextParamsService.ctorParameters = function () { return [
        { type: SiteContextConfig },
        { type: Injector },
        { type: ContextServiceMap }
    ]; };
    return SiteContextParamsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextUrlSerializer = /** @class */ (function (_super) {
    __extends(SiteContextUrlSerializer, _super);
    function SiteContextUrlSerializer(siteContextParams, config) {
        var _this = _super.call(this) || this;
        _this.siteContextParams = siteContextParams;
        _this.config = config;
        _this.urlEncodingParameters =
            _this.config.siteContext.urlEncodingParameters || [];
        return _this;
    }
    Object.defineProperty(SiteContextUrlSerializer.prototype, "hasContextInRoutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.urlEncodingParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.parse = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.hasContextInRoutes) {
            /** @type {?} */
            var urlWithParams = this.urlExtractContextParameters(url);
            /** @type {?} */
            var parsed = (/** @type {?} */ (_super.prototype.parse.call(this, urlWithParams.url)));
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return _super.prototype.parse.call(this, url);
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlExtractContextParameters = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var segments = url.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var paramId = 0;
        /** @type {?} */
        var segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            /** @type {?} */
            var paramName = this.urlEncodingParameters[paramId];
            /** @type {?} */
            var paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.indexOf(segments[segmentId]) > -1) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/');
        return { url: url, params: params };
    };
    /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlTreeIncludeContextParameters = /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    function (urlTree, params) {
        urlTree.siteContext = params;
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.serialize = /**
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        /** @type {?} */
        var params = this.urlTreeExtractContextParameters(tree);
        /** @type {?} */
        var url = _super.prototype.serialize.call(this, tree);
        /** @type {?} */
        var serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    };
    /**
     * @param {?} urlTree
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlTreeExtractContextParameters = /**
     * @param {?} urlTree
     * @return {?}
     */
    function (urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    };
    /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlIncludeContextParameters = /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    function (url, params) {
        var _this = this;
        /** @type {?} */
        var contextRoutePart = this.urlEncodingParameters
            .map(function (param) {
            return params[param]
                ? params[param]
                : _this.siteContextParams.getValue(param);
        })
            .join('/');
        return contextRoutePart + url;
    };
    SiteContextUrlSerializer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextUrlSerializer.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextConfig }
    ]; };
    return SiteContextUrlSerializer;
}(DefaultUrlSerializer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextRoutesHandler = /** @class */ (function () {
    function SiteContextRoutesHandler(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
        this.contextValues = {};
        this.isNavigating = false;
    }
    /**
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.init = /**
     * @return {?}
     */
    function () {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        /** @type {?} */
        var routingParams = this.siteContextParams.getContextParameters('route');
        if (routingParams.length) {
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.subscribeChanges = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        params.forEach(function (param) {
            /** @type {?} */
            var service = _this.siteContextParams.getSiteContextService(param);
            if (service) {
                _this.subscription.add(service.getActive().subscribe(function (value) {
                    if (!_this.isNavigating &&
                        _this.contextValues[param] &&
                        _this.contextValues[param] !== value) {
                        /** @type {?} */
                        var parsed = _this.router.parseUrl(_this.router.url);
                        /** @type {?} */
                        var serialized = _this.router.serializeUrl(parsed);
                        _this.location.replaceState(serialized);
                    }
                    _this.contextValues[param] = value;
                }));
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.subscribeRouting = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.router.events
            .pipe(filter(function (event) {
            return event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationError ||
                event instanceof NavigationCancel;
        }))
            .subscribe(function (event) {
            _this.isNavigating = event instanceof NavigationStart;
            if (_this.isNavigating) {
                _this.setContextParamsFromRoute(event.url);
            }
        }));
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.setContextParamsFromRoute = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        var params = this.serializer.urlExtractContextParameters(url).params;
        Object.keys(params).forEach(function (param) {
            return _this.siteContextParams.setValue(param, params[param]);
        });
    };
    /**
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    SiteContextRoutesHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SiteContextRoutesHandler.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextUrlSerializer },
        { type: Injector }
    ]; };
    /** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = defineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(inject(SiteContextParamsService), inject(SiteContextUrlSerializer), inject(INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
    return SiteContextRoutesHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} siteContextRoutesHandler
 * @return {?}
 */
function initSiteContextRoutesHandler(siteContextRoutesHandler) {
    return function () {
        siteContextRoutesHandler.init();
    };
}
/** @type {?} */
var siteContextParamsProviders = [
    SiteContextParamsService,
    SiteContextUrlSerializer,
    { provide: UrlSerializer, useExisting: SiteContextUrlSerializer },
    {
        provide: APP_INITIALIZER,
        useFactory: initSiteContextRoutesHandler,
        deps: [SiteContextRoutesHandler],
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextInterceptor = /** @class */ (function () {
    function SiteContextInterceptor(languageService, currencyService, config) {
        var _this = this;
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.config = config;
        this.activeLang = this.config.site.language;
        this.activeCurr = this.config.site.currency;
        this.baseReqString =
            (this.config.server.baseUrl || '') +
                this.config.server.occPrefix +
                this.config.site.baseSite;
        this.languageService
            .getActive()
            .subscribe(function (data) { return (_this.activeLang = data); });
        this.currencyService
            .getActive()
            .subscribe(function (data) { return (_this.activeCurr = data); });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    SiteContextInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (request.url.indexOf(this.baseReqString) > -1) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr
                }
            });
        }
        return next.handle(request);
    };
    SiteContextInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextInterceptor.ctorParameters = function () { return [
        { type: LanguageService },
        { type: CurrencyService },
        { type: OccConfig }
    ]; };
    return SiteContextInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors$1 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SiteContextInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var SiteContextModule = /** @class */ (function () {
    function SiteContextModule() {
    }
    /**
     * @return {?}
     */
    SiteContextModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SiteContextModule,
            providers: __spread(interceptors$1)
        };
    };
    SiteContextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                        StateModule,
                        SiteContextOccModule,
                        SiteContextStoreModule
                    ],
                    providers: __spread([
                        contextServiceMapProvider
                    ], contextServiceProviders, siteContextParamsProviders, [
                        { provide: SiteContextConfig, useExisting: Config }
                    ])
                },] }
    ];
    return SiteContextModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$4() {
    return {
        search: reducer$3,
        details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: reducer$4
    };
}
/** @type {?} */
var reducerToken$4 = new InjectionToken('ProductReducers');
/** @type {?} */
var reducerProvider$4 = {
    provide: reducerToken$4,
    useFactory: getReducers$4
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearProductsState(reducer) {
    return function (state, action) {
        if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
var metaReducers$2 = [clearProductsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductsSearchEffects = /** @class */ (function () {
    function ProductsSearchEffects(actions$, occProductSearchService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductSearchService = occProductSearchService;
        this.productImageConverter = productImageConverter;
        this.searchProducts$ = this.actions$.pipe(ofType(SEARCH_PRODUCTS), switchMap(function (action) {
            return _this.occProductSearchService
                .query(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(function (data) {
                _this.productImageConverter.convertList(data.products);
                return new SearchProductsSuccess(data, action.auxiliary);
            }), catchError(function (error) {
                return of(new SearchProductsFail(error, action.auxiliary));
            }));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(GET_PRODUCT_SUGGESTIONS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occProductSearchService
                .queryProductSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(function (data) {
                if (data.suggestions === undefined) {
                    return new GetProductSuggestionsSuccess([]);
                }
                return new GetProductSuggestionsSuccess(data.suggestions);
            }), catchError(function (error) {
                return of(new GetProductSuggestionsFail(error));
            }));
        }));
    }
    ProductsSearchEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductsSearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccProductSearchService },
        { type: ProductImageConverterService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "searchProducts$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
    return ProductsSearchEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductEffects = /** @class */ (function () {
    function ProductEffects(actions$, occProductService, productImageConverter, productReferenceConverterService) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.productImageConverter = productImageConverter;
        this.productReferenceConverterService = productReferenceConverterService;
        this.loadProduct$ = this.actions$.pipe(ofType(LOAD_PRODUCT), map(function (action) { return action.payload; }), groupBy(function (productCode) { return productCode; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (productCode) {
                return _this.occProductService.loadProduct(productCode).pipe(map(function (product) {
                    _this.productImageConverter.convertProduct(product);
                    _this.productReferenceConverterService.convertProduct(product);
                    return new LoadProductSuccess(product);
                }), catchError(function (error) {
                    return of(new LoadProductFail(productCode, error));
                }));
            }));
        }));
    }
    ProductEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccProductService },
        { type: ProductImageConverterService },
        { type: ProductReferenceConverterService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductEffects.prototype, "loadProduct$", void 0);
    return ProductEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductReviewsEffects = /** @class */ (function () {
    function ProductReviewsEffects(actions$, occProductService) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.loadProductReviews$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REVIEWS), map(function (action) { return action.payload; }), mergeMap(function (productCode) {
            return _this.occProductService.loadProductReviews(productCode).pipe(map(function (data) {
                return new LoadProductReviewsSuccess({
                    productCode: productCode,
                    list: data.reviews
                });
            }), catchError(function (_error) {
                return of(new LoadProductReviewsFail((/** @type {?} */ ({
                    message: productCode
                }))));
            }));
        }));
        this.postProductReview = this.actions$.pipe(ofType(POST_PRODUCT_REVIEW), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occProductService
                .postProductReview(payload.productCode, payload.review)
                .pipe(map(function (reviewResponse) {
                return new PostProductReviewSuccess(reviewResponse);
            }), catchError(function (_error) {
                return of(new PostProductReviewFail(payload.productCode));
            }));
        }));
    }
    ProductReviewsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccProductService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "postProductReview", void 0);
    return ProductReviewsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$3 = [
    ProductsSearchEffects,
    ProductEffects,
    ProductReviewsEffects
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductService = /** @class */ (function () {
    function ProductService(store) {
        this.store = store;
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     */
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @param {?=} forceReload
     * @return {?}
     */
    ProductService.prototype.get = /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @param {?=} forceReload
     * @return {?}
     */
    function (productCode, forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        return this.store.pipe(select(getSelectedProductStateFactory(productCode)), tap(function (productState) {
            /** @type {?} */
            var attemptedLoad = productState.loading || productState.success || productState.error;
            if (!attemptedLoad || forceReload) {
                _this.store.dispatch(new LoadProduct(productCode));
            }
        }), map(function (productState) { return productState.value; }));
    };
    /**
     * Returns boolean observable for product's loading state
     */
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.isLoading = /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(getSelectedProductLoadingFactory(productCode)));
    };
    /**
     * Returns boolean observable for product's load success state
     */
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.isSuccess = /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(getSelectedProductSuccessFactory(productCode)));
    };
    /**
     * Returns boolean observable for product's load error state
     */
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.hasError = /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(getSelectedProductErrorFactory(productCode)));
    };
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @return {?}
     */
    ProductService.prototype.reload = /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        this.store.dispatch(new LoadProduct(productCode));
    };
    ProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductSearchService = /** @class */ (function () {
    function ProductSearchService(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchService.prototype.search = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        /** @type {?} */
        var urlTree = this.router.createUrlTree([], {
            queryParams: __assign({}, searchConfig, { query: query }),
            preserveFragment: false
        });
        this.router.navigateByUrl(urlTree);
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig
        }));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getSearchResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getSearchResults$1));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.clearSearchResults = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CleanProductSearchState());
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getAuxSearchResults = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAuxSearchResults$1), filter(function (results) { return Object.keys(results).length > 0; }));
    };
    /**
     * @return {?}
     */
    ProductSearchService.prototype.getSearchSuggestions = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getProductSuggestions$1));
    };
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchService.prototype.searchAuxiliary = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig
        }, true));
    };
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchService.prototype.getSuggestions = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        this.store.dispatch(new GetProductSuggestions({
            term: query,
            searchConfig: searchConfig
        }));
    };
    ProductSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductSearchService.ctorParameters = function () { return [
        { type: Store },
        { type: Router }
    ]; };
    return ProductSearchService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductReviewService = /** @class */ (function () {
    function ProductReviewService(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    ProductReviewService.prototype.getByProductCode = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        var _this = this;
        /** @type {?} */
        var selector = getSelectedProductReviewsFactory(productCode);
        return this.store.pipe(select(selector), tap(function (reviews) {
            if (reviews === undefined && productCode !== undefined) {
                _this.store.dispatch(new LoadProductReviews(productCode));
            }
        }));
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    ProductReviewService.prototype.add = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
        this.store.dispatch(new PostProductReview({
            productCode: productCode,
            review: review
        }));
    };
    ProductReviewService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProductReviewService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function productStoreConfigFactory() {
    var _a;
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: { ssrTransfer: { keys: (_a = {}, _a[PRODUCT_FEATURE] = true, _a) } }
    };
    return config;
}
var ProductStoreModule = /** @class */ (function () {
    function ProductStoreModule() {
    }
    ProductStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ProductOccModule,
                        ProductConverterModule,
                        StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$4, { metaReducers: metaReducers$2 }),
                        EffectsModule.forFeature(effects$3),
                        ConfigModule.withConfigFactory(productStoreConfigFactory)
                    ],
                    providers: [reducerProvider$4]
                },] }
    ];
    return ProductStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_PAGEDATA = '[Cms] Load PageData';
/** @type {?} */
var LOAD_PAGEDATA_FAIL = '[Cms] Load PageData Fail';
/** @type {?} */
var LOAD_PAGEDATA_SUCCESS = '[Cms] Load PageData Success';
/** @type {?} */
var REFRESH_LATEST_PAGE = '[Cms] Refresh latest page';
/** @type {?} */
var UPDATE_LATEST_PAGE_KEY = '[Cms] Update latest page key';
/** @type {?} */
var CLEAN_PAGE_STATE = '[Cms] Clean Page State;';
var LoadPageData = /** @class */ (function () {
    function LoadPageData(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA;
    }
    return LoadPageData;
}());
var LoadPageDataFail = /** @class */ (function () {
    function LoadPageDataFail(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_FAIL;
    }
    return LoadPageDataFail;
}());
var LoadPageDataSuccess = /** @class */ (function () {
    function LoadPageDataSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_SUCCESS;
    }
    return LoadPageDataSuccess;
}());
var RefreshLatestPage = /** @class */ (function () {
    function RefreshLatestPage() {
        this.type = REFRESH_LATEST_PAGE;
    }
    return RefreshLatestPage;
}());
var UpdateLatestPageKey = /** @class */ (function () {
    function UpdateLatestPageKey(payload) {
        this.payload = payload;
        this.type = UPDATE_LATEST_PAGE_KEY;
    }
    return UpdateLatestPageKey;
}());
var CleanPageState = /** @class */ (function () {
    function CleanPageState() {
        this.type = CLEAN_PAGE_STATE;
    }
    return CleanPageState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$7 = {
    entities: {},
    count: 0,
    latestPageKey: ''
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$7(state, action) {
    if (state === void 0) { state = initialState$7; }
    var e_1, _a, _b, _c;
    switch (action.type) {
        case UPDATE_LATEST_PAGE_KEY: {
            /** @type {?} */
            var pageKey = action.payload;
            return __assign({}, state, { latestPageKey: pageKey });
        }
        case LOAD_PAGEDATA_SUCCESS: {
            /** @type {?} */
            var page = action.payload;
            /** @type {?} */
            var existPage = state.entities[page.key];
            if (existPage != null) {
                /** @type {?} */
                var samePage = true;
                try {
                    for (var _d = __values(Object.keys(page.value.slots)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var position = _e.value;
                        if (page.value.slots[position].components.length !==
                            existPage.slots[position].components.length) {
                            samePage = false;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (samePage) {
                    page = __assign({}, page, { value: __assign({}, page.value, { seen: __spread(page.value.seen, existPage.seen) }) });
                }
            }
            /** @type {?} */
            var entities = __assign({}, state.entities, (_b = {}, _b[page.key] = page.value, _b));
            return __assign({}, state, { entities: entities, count: state.count + 1, latestPageKey: page.key });
        }
        case REFRESH_LATEST_PAGE: {
            /** @type {?} */
            var entities = __assign({}, state.entities, (_c = {}, _c[state.latestPageKey] = null, _c));
            return __assign({}, state, { entities: entities });
        }
        case CLEAN_PAGE_STATE: {
            return initialState$7;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CMS_FEATURE = 'cms';
/** @type {?} */
var NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
/** @type {?} */
var COMPONENT_ENTITY = '[Cms[ Component Entity';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
var LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
var LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
var LoadNavigationItems = /** @class */ (function (_super) {
    __extends(LoadNavigationItems, _super);
    function LoadNavigationItems(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS;
        return _this;
    }
    return LoadNavigationItems;
}(EntityLoadAction));
var LoadNavigationItemsFail = /** @class */ (function (_super) {
    __extends(LoadNavigationItemsFail, _super);
    function LoadNavigationItemsFail(nodeId, payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, nodeId, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS_FAIL;
        return _this;
    }
    return LoadNavigationItemsFail;
}(EntityFailAction));
var LoadNavigationItemsSuccess = /** @class */ (function (_super) {
    __extends(LoadNavigationItemsSuccess, _super);
    function LoadNavigationItemsSuccess(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
        return _this;
    }
    return LoadNavigationItemsSuccess;
}(EntitySuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$8 = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$8(state, action) {
    if (state === void 0) { state = initialState$8; }
    switch (action.type) {
        case LOAD_NAVIGATION_ITEMS_SUCCESS: {
            if (action.payload.components) {
                /** @type {?} */
                var components = action.payload.components;
                /** @type {?} */
                var newItem = components.reduce(function (compItems, component) {
                    var _a;
                    return __assign({}, compItems, (_a = {}, _a[component.uid + "_AbstractCMSComponent"] = component, _a));
                }, __assign({}));
                return __assign({}, state, newItem);
            }
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$5() {
    return {
        page: reducer$7,
        component: entityLoaderReducer(COMPONENT_ENTITY),
        navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$8)
    };
}
/** @type {?} */
var reducerToken$5 = new InjectionToken('CmsReducers');
/** @type {?} */
var reducerProvider$5 = {
    provide: reducerToken$5,
    useFactory: getReducers$5
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCmsState(reducer) {
    return function (state, action) {
        if (action.type === '[Site-context] Language Change' ||
            action.type === '[Auth] Logout' ||
            action.type === '[Auth] Login') {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
var metaReducers$3 = [clearCmsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_COMPONENT = '[Cms] Load Component';
/** @type {?} */
var LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
var LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
var GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
var LoadComponent = /** @class */ (function (_super) {
    __extends(LoadComponent, _super);
    function LoadComponent(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT;
        return _this;
    }
    return LoadComponent;
}(EntityLoadAction));
var LoadComponentFail = /** @class */ (function (_super) {
    __extends(LoadComponentFail, _super);
    function LoadComponentFail(uid, payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT_FAIL;
        return _this;
    }
    return LoadComponentFail;
}(EntityFailAction));
/**
 * @template T
 */
var  /**
 * @template T
 */
LoadComponentSuccess = /** @class */ (function (_super) {
    __extends(LoadComponentSuccess, _super);
    function LoadComponentSuccess(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT_SUCCESS;
        return _this;
    }
    return LoadComponentSuccess;
}(EntitySuccessAction));
/**
 * @template T
 */
var  /**
 * @template T
 */
GetComponentFromPage = /** @class */ (function (_super) {
    __extends(GetComponentFromPage, _super);
    function GetComponentFromPage(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.map(function (cmp) { return cmp.uid; })) || this;
        _this.payload = payload;
        _this.type = GET_COMPONENET_FROM_PAGE;
        return _this;
    }
    return GetComponentFromPage;
}(EntitySuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CmsConfig = /** @class */ (function (_super) {
    __extends(CmsConfig, _super);
    function CmsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CmsConfig;
}(OccConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OccCmsService = /** @class */ (function () {
    function OccCmsService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    OccCmsService.prototype.getBaseEndPoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/cms');
    };
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsService.prototype.loadPageData = /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
        /** @type {?} */
        var httpStringParams = 'pageType=' + pageContext.type;
        if (pageContext.type === PageType.CONTENT_PAGE) {
            httpStringParams = httpStringParams + '&pageLabelOrId=' + pageContext.id;
        }
        else {
            httpStringParams = httpStringParams + '&code=' + pageContext.id;
        }
        if (fields !== undefined) {
            httpStringParams = httpStringParams + '&fields=' + fields;
        }
        return this.http
            .get(this.getBaseEndPoint() + "/pages", {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams
            })
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsService.prototype.loadComponent = /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (id, pageContext, fields) {
        return this.http
            .get(this.getBaseEndPoint() + ("/components/" + id), {
            headers: this.headers,
            params: new HttpParams({
                fromString: this.getRequestParams(pageContext, fields)
            })
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsService.prototype.loadListComponents = /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (idList, pageContext, fields, currentPage, pageSize, sort) {
        /** @type {?} */
        var requestParams = this.getRequestParams(pageContext, fields);
        if (currentPage !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'currentPage=' + currentPage)
                : (requestParams = requestParams + '&currentPage=' + currentPage);
        }
        if (pageSize !== undefined) {
            requestParams = requestParams + '&pageSize=' + pageSize;
        }
        if (sort !== undefined) {
            requestParams = requestParams + '&sort=' + sort;
        }
        return this.http
            .post(this.getBaseEndPoint() + "/components", idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams
            })
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsService.prototype.getRequestParams = /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
        /** @type {?} */
        var requestParams = '';
        switch (pageContext.type) {
            case PageType.PRODUCT_PAGE: {
                requestParams = 'productCode=' + pageContext.id;
                break;
            }
            case PageType.CATEGORY_PAGE: {
                requestParams = 'categoryCode=' + pageContext.id;
                break;
            }
            case PageType.CATALOG_PAGE: {
                requestParams = 'catalogCode=' + pageContext.id;
                break;
            }
        }
        if (fields !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'fields=' + fields)
                : (requestParams = requestParams + '&fields=' + fields);
        }
        return requestParams;
    };
    Object.defineProperty(OccCmsService.prototype, "baseUrl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.server.baseUrl || '';
        },
        enumerable: true,
        configurable: true
    });
    OccCmsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CmsConfig }
    ]; };
    return OccCmsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DefaultPageService = /** @class */ (function () {
    function DefaultPageService(config) {
        this.config = config;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    DefaultPageService.prototype.getDefaultPageIdsBytype = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.config.defaultPageIdForType[type];
    };
    DefaultPageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DefaultPageService.ctorParameters = function () { return [
        { type: CmsConfig }
    ]; };
    return DefaultPageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageContext = /** @class */ (function () {
    function PageContext(id, type) {
        this.id = id;
        this.type = type;
        if (this.type == null) {
            this.type = PageType.CONTENT_PAGE;
        }
    }
    return PageContext;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TranslateUrlPipe = /** @class */ (function () {
    function TranslateUrlPipe(urlTranslator) {
        this.urlTranslator = urlTranslator;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    TranslateUrlPipe.prototype.transform = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.urlTranslator.translate(options);
    };
    TranslateUrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cxTranslateUrl'
                },] }
    ];
    /** @nocollapse */
    TranslateUrlPipe.ctorParameters = function () { return [
        { type: UrlTranslationService }
    ]; };
    return TranslateUrlPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UrlTranslationModule = /** @class */ (function () {
    function UrlTranslationModule() {
    }
    UrlTranslationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TranslateUrlPipe],
                    exports: [TranslateUrlPipe]
                },] }
    ];
    return UrlTranslationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, occCmsService, defaultPageService, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.defaultPageService = defaultPageService;
        this.routingService = routingService;
        this.loadPage$ = this.actions$.pipe(ofType(LOAD_PAGEDATA, REFRESH_LATEST_PAGE, '[Site-context] Language Change', '[Auth] Logout', '[Auth] Login'), map(function (action) { return action.payload; }), switchMap(function (pageContext) {
            if (pageContext === undefined) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState && routerState.state; }), filter(function (routerState) { return routerState.state.cmsRequired; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (context) {
                    return _this.occCmsService.loadPageData(context).pipe(mergeMap(function (data) {
                        return [
                            new LoadPageDataSuccess(_this.getPageData(data, context)),
                            new GetComponentFromPage(_this.getComponents(data))
                        ];
                    }), catchError(function (error) { return of(new LoadPageDataFail(error)); }));
                }));
            }
            else {
                return _this.occCmsService.loadPageData(pageContext).pipe(mergeMap(function (data) {
                    return [
                        new LoadPageDataSuccess(_this.getPageData(data, pageContext)),
                        new GetComponentFromPage(_this.getComponents(data))
                    ];
                }), catchError(function (error) { return of(new LoadPageDataFail(error)); }));
            }
        }));
    }
    /**
     * @private
     * @param {?} res
     * @param {?} pageContext
     * @return {?}
     */
    PageEffects.prototype.getPageData = /**
     * @private
     * @param {?} res
     * @param {?} pageContext
     * @return {?}
     */
    function (res, pageContext) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var page = {
            loadTime: Date.now(),
            uuid: res.uuid,
            name: res.name,
            type: res.typeCode,
            title: res.title,
            catalogUuid: this.getCatalogUuid(res),
            pageId: res.uid,
            template: res.template,
            seen: new Array(),
            slots: {}
        };
        page.seen.push(pageContext.id);
        try {
            for (var _c = __values(res.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                page.slots[slot.position] = (/** @type {?} */ ({
                    uid: slot.slotId,
                    uuid: slot.slotUuid,
                    catalogUuid: this.getCatalogUuid(slot),
                    components: []
                }));
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    try {
                        for (var _e = __values(slot.components.component), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            page.slots[slot.position].components.push({
                                uid: component.uid,
                                uuid: component.uuid,
                                catalogUuid: this.getCatalogUuid(component),
                                typeCode: component.typeCode
                            });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { key: this.getPageKey(pageContext, page), value: page };
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} page
     * @return {?}
     */
    PageEffects.prototype.getPageKey = /**
     * @private
     * @param {?} pageContext
     * @param {?} page
     * @return {?}
     */
    function (pageContext, page) {
        switch (pageContext.type) {
            case PageType.CATEGORY_PAGE:
            case PageType.CATALOG_PAGE:
            case PageType.PRODUCT_PAGE: {
                /** @type {?} */
                var defaultPageIds = this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds.indexOf(page.pageId) > -1) {
                    return page.pageId + '_' + pageContext.type;
                }
                else {
                    return pageContext.id + '_' + pageContext.type;
                }
            }
            case PageType.CONTENT_PAGE: {
                return page.pageId + '_' + pageContext.type;
            }
        }
    };
    /**
     * @private
     * @param {?} cmsItem
     * @return {?}
     */
    PageEffects.prototype.getCatalogUuid = /**
     * @private
     * @param {?} cmsItem
     * @return {?}
     */
    function (cmsItem) {
        if (cmsItem.properties && cmsItem.properties.smartedit) {
            /** @type {?} */
            var smartEditProp = cmsItem.properties.smartedit;
            if (smartEditProp.catalogVersionUuid) {
                return smartEditProp.catalogVersionUuid;
            }
            else if (smartEditProp.classes) {
                /** @type {?} */
                var catalogUuid_1;
                /** @type {?} */
                var seClass = smartEditProp.classes.split(' ');
                seClass.forEach(function (item) {
                    if (item.indexOf('smartedit-catalog-version-uuid') > -1) {
                        catalogUuid_1 = item.substr('smartedit-catalog-version-uuid-'.length);
                    }
                });
                return catalogUuid_1;
            }
        }
    };
    /**
     * @private
     * @param {?} pageData
     * @return {?}
     */
    PageEffects.prototype.getComponents = /**
     * @private
     * @param {?} pageData
     * @return {?}
     */
    function (pageData) {
        var e_3, _a, e_4, _b;
        /** @type {?} */
        var components = [];
        if (pageData) {
            try {
                for (var _c = __values(pageData.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var slot = _d.value;
                    if (slot.components.component &&
                        Array.isArray(slot.components.component)) {
                        try {
                            for (var _e = __values((/** @type {?} */ (slot.components.component))), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var component = _f.value;
                                // we dont put smartedit properties into store
                                if (component.properties) {
                                    component.properties = undefined;
                                }
                                components.push(component);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return components;
    };
    PageEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCmsService },
        { type: DefaultPageService },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], PageEffects.prototype, "loadPage$", void 0);
    return PageEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, occCmsService, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(LOAD_COMPONENT), map(function (action) { return action.payload; }), switchMap(function (uid) {
            return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                return _this.occCmsService.loadComponent(uid, pageContext).pipe(map(function (data) { return new LoadComponentSuccess(data); }), catchError(function (error) {
                    return of(new LoadComponentFail(uid, error));
                }));
            }));
        }));
    }
    ComponentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCmsService },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ComponentEffects.prototype, "loadComponent$", void 0);
    return ComponentEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavigationEntryItemEffects = /** @class */ (function () {
    function NavigationEntryItemEffects(actions$, occCmsService, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(LOAD_NAVIGATION_ITEMS), map(function (action) { return action.payload; }), map(function (payload) {
            return {
                ids: _this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId
            };
        }), mergeMap(function (data) {
            if (data.ids.componentIds.idList.length > 0) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    // download all items in one request
                    return _this.occCmsService
                        .loadListComponents(data.ids.componentIds, pageContext, 'DEFAULT', 0, data.ids.componentIds.idList.length)
                        .pipe(map(function (res) {
                        return new LoadNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: res.component
                        });
                    }), catchError(function (error) {
                        return of(new LoadNavigationItemsFail(data.nodeId, error));
                    }));
                }));
            }
            else if (data.ids.pageIds.idList.length > 0) ;
            else if (data.ids.mediaIds.idList.length > 0) ;
            else {
                return of(new LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    NavigationEntryItemEffects.prototype.getIdListByItemType = 
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    function (itemList) {
        /** @type {?} */
        var pageIds = { idList: [] };
        /** @type {?} */
        var componentIds = { idList: [] };
        /** @type {?} */
        var mediaIds = { idList: [] };
        itemList.forEach(function (item) {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.idList.push(item.id);
            }
        });
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    };
    NavigationEntryItemEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NavigationEntryItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCmsService },
        { type: RoutingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
    return NavigationEntryItemEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$4 = [
    PageEffects,
    ComponentEffects,
    NavigationEntryItemEffects
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getCmsState = createFeatureSelector(CMS_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getPageEntitiesSelector = function (state) { return state.entities; };
/** @type {?} */
var getPageCount = function (state) { return state.count; };
/** @type {?} */
var getLatestPageKeySelector = function (state) {
    return state.latestPageKey;
};
/** @type {?} */
var getPageState = createSelector(getCmsState, function (state) { return state.page; });
/** @type {?} */
var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
var getLatestPageKey = createSelector(getPageState, getLatestPageKeySelector);
/** @type {?} */
var getLatestPage = createSelector(getPageEntities, getLatestPageKey, function (entities, key) {
    return entities[key];
});
/** @type {?} */
var currentSlotSelectorFactory = function (position) {
    return createSelector(getLatestPage, function (entity) {
        if (entity) {
            return entity.slots[position];
        }
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getComponentEntitiesSelector = function (state) {
    return Object.keys(state.entities).reduce(function (acc, cur) {
        acc[cur] = state.entities[cur].value;
        return acc;
    }, {});
};
/** @type {?} */
var getComponentState = createSelector(getCmsState, function (state) { return state.component; });
/** @type {?} */
var getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
/** @type {?} */
var componentStateSelectorFactory = function (uid) {
    return createSelector(getComponentState, function (entities) { return entityStateSelector(entities, uid); });
};
/** @type {?} */
var componentSelectorFactory = function (uid) {
    return createSelector(componentStateSelectorFactory(uid), function (state) { return loaderValueSelector(state); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getNavigationEntryItemState = createSelector(getCmsState, function (state) { return state.navigation; });
/** @type {?} */
var getSelectedNavigationEntryItemState = function (nodeId) {
    return createSelector(getNavigationEntryItemState, function (nodes) { return entityStateSelector(nodes, nodeId); });
};
/** @type {?} */
var itemsSelectorFactory = function (nodeId) {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), function (itemState) { return loaderValueSelector(itemState); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsService = /** @class */ (function () {
    function CmsService(store, defaultPageService) {
        this.store = store;
        this.defaultPageService = defaultPageService;
        this._launchInSmartEdit = false;
    }
    Object.defineProperty(CmsService.prototype, "launchInSmartEdit", {
        /**
         * Set _launchInSmartEdit value
         */
        set: /**
         * Set _launchInSmartEdit value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._launchInSmartEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the app launched in smart edit
     */
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    CmsService.prototype.isLaunchInSmartEdit = /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    function () {
        return this._launchInSmartEdit;
    };
    /**
     * Get current CMS page data
     */
    /**
     * Get current CMS page data
     * @return {?}
     */
    CmsService.prototype.getCurrentPage = /**
     * Get current CMS page data
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getLatestPage));
    };
    /**
     * Get CMS component data by uid
     * @param uid : CMS componet uid
     */
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    CmsService.prototype.getComponentData = /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    function (uid) {
        var _this = this;
        return this.store.pipe(select(componentStateSelectorFactory(uid)), withLatestFrom(this.getCurrentPage()), tap(function (_a) {
            var _b = __read(_a, 2), componentState = _b[0], currentPage = _b[1];
            /** @type {?} */
            var attemptedLoad = componentState.loading ||
                componentState.success ||
                componentState.error;
            if (!attemptedLoad && currentPage) {
                _this.store.dispatch(new LoadComponent(uid));
            }
        }), map(function (_a) {
            var _b = __read(_a, 1), productState = _b[0];
            return productState.value;
        }), filter(Boolean));
    };
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    CmsService.prototype.getContentSlot = /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    function (position) {
        return this.store.pipe(select(currentSlotSelectorFactory(position)), filter(Boolean));
    };
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    CmsService.prototype.getNavigationEntryItems = /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    function (navigationNodeUid) {
        return this.store.pipe(select(itemsSelectorFactory(navigationNodeUid)));
    };
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    CmsService.prototype.loadNavigationItems = /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    function (rootUid, itemList) {
        this.store.dispatch(new LoadNavigationItems({
            nodeId: rootUid,
            items: itemList
        }));
    };
    /**
     * Refresh the content of the latest cms page
     */
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    CmsService.prototype.refreshLatestPage = /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    function () {
        this.store.dispatch(new RefreshLatestPage());
    };
    /**
     * Refresh cms component's content
     * @param uid : component uid
     */
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    CmsService.prototype.refreshComponent = /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    function (uid) {
        this.store.dispatch(new LoadComponent(uid));
    };
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @return {?}
     */
    CmsService.prototype.hasPage = /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        var _this = this;
        /** @type {?} */
        var tryTimes = 0;
        return this.store.pipe(select(getPageEntities), map(function (entities) {
            /** @type {?} */
            var key = pageContext.id + '_' + pageContext.type;
            /** @type {?} */
            var found = !!entities[key];
            if (!found) {
                /** @type {?} */
                var defaultPageIds = _this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds) {
                    for (var i = 0, len = defaultPageIds.length; i < len; i++) {
                        key = defaultPageIds[i] + '_' + pageContext.type;
                        found =
                            entities[key] &&
                                entities[key].seen.indexOf(pageContext.id) > -1;
                        if (found) {
                            break;
                        }
                    }
                }
            }
            // found page directly from store
            if (found && tryTimes === 0) {
                _this.store.dispatch(new UpdateLatestPageKey(key));
            }
            return found;
        }), tap(function (found) {
            // if not found, load this cms page
            if (!found) {
                tryTimes = tryTimes + 1;
                _this.store.dispatch(new LoadPageData(pageContext));
            }
        }), filter(function (found) { return found || tryTimes === 3; }), take(1));
    };
    CmsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CmsService.ctorParameters = function () { return [
        { type: Store },
        { type: DefaultPageService }
    ]; };
    /** @nocollapse */ CmsService.ngInjectableDef = defineInjectable({ factory: function CmsService_Factory() { return new CmsService(inject(Store), inject(DefaultPageService)); }, token: CmsService, providedIn: "root" });
    return CmsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
PageTitleResolver = /** @class */ (function () {
    function PageTitleResolver() {
    }
    /**
     * @param {?} page
     * @return {?}
     */
    PageTitleResolver.prototype.getScore = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    };
    return PageTitleResolver;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageTitleService = /** @class */ (function () {
    function PageTitleService(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    PageTitleService.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            /** @type {?} */
            var pageTitleResolver = _this.getResolver(page);
            if (pageTitleResolver) {
                return pageTitleResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of('');
            }
        }));
    };
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    PageTitleService.prototype.getResolver = /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var matchingResolvers = this.resolvers.filter(function (resolver) { return resolver.getScore(page) > 0; });
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    };
    PageTitleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageTitleService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [PageTitleResolver,] }] },
        { type: CmsService }
    ]; };
    /** @nocollapse */ PageTitleService.ngInjectableDef = defineInjectable({ factory: function PageTitleService_Factory() { return new PageTitleService(inject(PageTitleResolver), inject(CmsService)); }, token: PageTitleService, providedIn: "root" });
    return PageTitleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentMapperService = /** @class */ (function () {
    function ComponentMapperService(componentFactoryResolver, config, document, platform) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        this.document = document;
        this.platform = platform;
        this.missingComponents = [];
        this.loadedWebComponents = {};
    }
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @param typeCode the component type
     */
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    ComponentMapperService.prototype.getType = /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (this.missingComponents.indexOf(typeCode) === -1) {
                this.missingComponents.push(typeCode);
                console.warn('No component implementation found for the CMS component type', typeCode, '.\n', 'Make sure you implement a component and register it in the mapper.');
            }
        }
        return componentConfig ? componentConfig.selector : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getFactoryEntryByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var alias = this.getType(typeCode);
        if (!alias) {
            return;
        }
        /** @type {?} */
        var factoryEntries = Array.from(this.componentFactoryResolver['_factories'].entries());
        return factoryEntries.find(function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return value.selector === alias;
        });
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getComponentTypeByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[0] : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getComponentFactoryByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[1] : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.isWebComponent = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        return (this.getType(typeCode) || '').includes('#');
    };
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    ComponentMapperService.prototype.initWebComponent = /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    function (componentType, renderer) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = __read(_this.getType(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            /** @type {?} */
            var script = _this.loadedWebComponents[path];
            if (!script) {
                script = renderer.createElement('script');
                _this.loadedWebComponents[path] = script;
                script.setAttribute('src', path);
                renderer.appendChild(_this.document.body, script);
                if (isPlatformBrowser(_this.platform)) {
                    script.onload = function () {
                        script.onload = null;
                    };
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                var chainedOnload_1 = script.onload;
                script.onload = function () {
                    chainedOnload_1();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    };
    ComponentMapperService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return ComponentMapperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsOccModule = /** @class */ (function () {
    function CmsOccModule() {
    }
    CmsOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [OccCmsService, ComponentMapperService, DefaultPageService]
                },] }
    ];
    return CmsOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function cmsStoreConfigFactory() {
    var _a;
    // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: { ssrTransfer: { keys: (_a = {}, _a[CMS_FEATURE] = true, _a) } }
    };
    return config;
}
var CmsStoreModule = /** @class */ (function () {
    function CmsStoreModule() {
    }
    CmsStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        CmsOccModule,
                        StateModule,
                        StoreModule.forFeature(CMS_FEATURE, reducerToken$5, { metaReducers: metaReducers$3 }),
                        EffectsModule.forFeature(effects$4),
                        ConfigModule.withConfigFactory(cmsStoreConfigFactory)
                    ],
                    providers: [reducerProvider$5]
                },] }
    ];
    return CmsStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentPageTitleResolver = /** @class */ (function (_super) {
    __extends(ContentPageTitleResolver, _super);
    function ContentPageTitleResolver(cms) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.pageType = PageType.CONTENT_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    ContentPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        return this.cms.getCurrentPage().pipe(filter(Boolean), map(function (page) { return page.title; }));
    };
    ContentPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ContentPageTitleResolver.ctorParameters = function () { return [
        { type: CmsService }
    ]; };
    /** @nocollapse */ ContentPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function ContentPageTitleResolver_Factory() { return new ContentPageTitleResolver(inject(CmsService)); }, token: ContentPageTitleResolver, providedIn: "root" });
    return ContentPageTitleResolver;
}(PageTitleResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsPageTitleModule = /** @class */ (function () {
    function CmsPageTitleModule() {
    }
    CmsPageTitleModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        {
                            provide: PageTitleResolver,
                            useExisting: ContentPageTitleResolver,
                            multi: true
                        }
                    ]
                },] }
    ];
    return CmsPageTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CmsOccModule, CmsStoreModule, CmsPageTitleModule],
                    providers: [CmsService]
                },] }
    ];
    return CmsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductPageTitleResolver = /** @class */ (function (_super) {
    __extends(ProductPageTitleResolver, _super);
    function ProductPageTitleResolver(routingService, productService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productService = productService;
        _this.pageType = PageType.PRODUCT_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    ProductPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(Boolean), switchMap(function (code) {
            return _this.productService.get(code).pipe(filter(Boolean), map(function (p) { return p.name; }));
        }));
    };
    ProductPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ProductPageTitleResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    /** @nocollapse */ ProductPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function ProductPageTitleResolver_Factory() { return new ProductPageTitleResolver(inject(RoutingService), inject(ProductService)); }, token: ProductPageTitleResolver, providedIn: "root" });
    return ProductPageTitleResolver;
}(PageTitleResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchPageTitleResolver = /** @class */ (function (_super) {
    __extends(SearchPageTitleResolver, _super);
    function SearchPageTitleResolver(routingService, productSearchService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    SearchPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return combineLatest(this.productSearchService.getSearchResults().pipe(filter(function (data) { return !!(data && data.pagination); }), map(function (results) { return results.pagination.totalResults; })), this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['query']; }), filter(Boolean))).pipe(map(function (_a) {
            var _b = __read(_a, 2), t = _b[0], q = _b[1];
            return _this.getSearchResultTitle(t, q);
        }));
    };
    /**
     * @protected
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    SearchPageTitleResolver.prototype.getSearchResultTitle = /**
     * @protected
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    function (total, part) {
        return total + " results for \"" + part + "\"";
    };
    SearchPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SearchPageTitleResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService }
    ]; };
    /** @nocollapse */ SearchPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function SearchPageTitleResolver_Factory() { return new SearchPageTitleResolver(inject(RoutingService), inject(ProductSearchService)); }, token: SearchPageTitleResolver, providedIn: "root" });
    return SearchPageTitleResolver;
}(PageTitleResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryPageTitleResolver = /** @class */ (function (_super) {
    __extends(CategoryPageTitleResolver, _super);
    function CategoryPageTitleResolver(routingService, productSearchService, cms) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.cms = cms;
        _this.pageType = PageType.CATEGORY_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    CategoryPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (_this.hasProductListComponent(page)) {
                return _this.productSearchService.getSearchResults().pipe(map(function (data) {
                    if (data.breadcrumbs && data.breadcrumbs.length > 0) {
                        return data.pagination.totalResults + " results for " + data.breadcrumbs[0].facetValueName;
                    }
                }));
            }
            else {
                return of(page.title || page.name);
            }
        }));
    };
    /**
     * @protected
     * @param {?} page
     * @return {?}
     */
    CategoryPageTitleResolver.prototype.hasProductListComponent = /**
     * @protected
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // ProductListComponent
        return !!Object.keys(page.slots).find(function (key) {
            return !!page.slots[key].components.find(function (comp) { return comp.typeCode === 'CMSProductListComponent'; });
        });
    };
    CategoryPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CategoryPageTitleResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: CmsService }
    ]; };
    /** @nocollapse */ CategoryPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function CategoryPageTitleResolver_Factory() { return new CategoryPageTitleResolver(inject(RoutingService), inject(ProductSearchService), inject(CmsService)); }, token: CategoryPageTitleResolver, providedIn: "root" });
    return CategoryPageTitleResolver;
}(PageTitleResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var pageTitleResolvers = [
    {
        provide: PageTitleResolver,
        useExisting: ProductPageTitleResolver,
        multi: true
    },
    {
        provide: PageTitleResolver,
        useExisting: CategoryPageTitleResolver,
        multi: true
    },
    {
        provide: PageTitleResolver,
        useExisting: SearchPageTitleResolver,
        multi: true
    }
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ProductOccModule, ProductStoreModule, CmsModule],
                    providers: __spread([
                        ProductService,
                        ProductSearchService,
                        ProductReviewService
                    ], pageTitleResolvers)
                },] }
    ];
    return ProductModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, productImageConverter, occCartService, cartData) {
        var _this = this;
        this.actions$ = actions$;
        this.productImageConverter = productImageConverter;
        this.occCartService = occCartService;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            /** @type {?} */
            var loadCartParams = {
                userId: (payload && payload.userId) || _this.cartData.userId,
                cartId: (payload && payload.cartId) || _this.cartData.cartId,
                details: payload && payload.details !== undefined
                    ? payload.details
                    : _this.cartData.getDetails
            };
            if (_this.isMissingData(loadCartParams)) {
                return of(new LoadCartFail({}));
            }
            return _this.occCartService
                .loadCart(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map(function (cart) {
                var e_1, _a;
                if (cart && cart.entries) {
                    try {
                        for (var _b = __values(cart.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var entry = _c.value;
                            _this.productImageConverter.convertProduct(entry.product);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return new LoadCartSuccess(cart);
            }), catchError(function (error) { return of(new LoadCartFail(error)); }));
        }));
        this.createCart$ = this.actions$.pipe(ofType(CREATE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .createCart(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap(function (cart) {
                var e_2, _a;
                if (cart.entries) {
                    try {
                        for (var _b = __values(cart.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var entry = _c.value;
                            _this.productImageConverter.convertProduct(entry.product);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                if (payload.toMergeCartGuid) {
                    return [
                        new CreateCartSuccess(cart),
                        new MergeCartSuccess()
                    ];
                }
                return [new CreateCartSuccess(cart)];
            }), catchError(function (error) { return of(new CreateCartFail(error)); }));
        }));
        this.mergeCart$ = this.actions$.pipe(ofType(MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService.loadCart(payload.userId, 'current').pipe(map(function (currentCart) {
                return new CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined
                });
            }));
        }));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    CartEffects.prototype.isMissingData = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    };
    CartEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductImageConverterService },
        { type: OccCartService },
        { type: CartDataService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEffects.prototype, "loadCart$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEffects.prototype, "createCart$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEffects.prototype, "mergeCart$", void 0);
    return CartEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartEntryEffects = /** @class */ (function () {
    function CartEntryEffects(actions$, cartService) {
        var _this = this;
        this.actions$ = actions$;
        this.cartService = cartService;
        this.addEntry$ = this.actions$.pipe(ofType(ADD_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartService
                .addEntry(payload.userId, payload.cartId, payload.productCode, payload.quantity)
                .pipe(map(function (entry) { return new AddEntrySuccess(entry); }), catchError(function (error) { return of(new AddEntryFail(error)); }));
        }));
        this.removeEntry$ = this.actions$.pipe(ofType(REMOVE_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartService
                .removeEntry(payload.userId, payload.cartId, payload.entry)
                .pipe(map(function () {
                return new RemoveEntrySuccess();
            }), catchError(function (error) { return of(new RemoveEntryFail(error)); }));
        }));
        this.updateEntry$ = this.actions$.pipe(ofType(UPDATE_ENTRY), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartService
                .updateEntry(payload.userId, payload.cartId, payload.entry, payload.qty)
                .pipe(map(function () {
                return new UpdateEntrySuccess();
            }), catchError(function (error) { return of(new UpdateEntryFail(error)); }));
        }));
    }
    CartEntryEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartEntryEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCartService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "addEntry$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "removeEntry$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CartEntryEffects.prototype, "updateEntry$", void 0);
    return CartEntryEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$5 = [CartEffects, CartEntryEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartStoreModule = /** @class */ (function () {
    function CartStoreModule() {
    }
    CartStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        CartOccModule,
                        StoreModule.forFeature(CART_FEATURE, reducerToken$2, { metaReducers: metaReducers$1 }),
                        EffectsModule.forFeature(effects$5)
                    ],
                    providers: [reducerProvider$2]
                },] }
    ];
    return CartStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CartOccModule, CartStoreModule],
                    providers: [CartDataService, CartService]
                },] }
    ];
    return CartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SERVER_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
var SERVER_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
function serverConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    var baseUrl = getMetaTagContent(SERVER_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== SERVER_BASE_URL_META_TAG_PLACEHOLDER
        ? { server: { baseUrl: baseUrl } }
        : {};
}
/**
 * @param {?} name
 * @param {?} meta
 * @return {?}
 */
function getMetaTagContent(name, meta) {
    /** @type {?} */
    var metaTag = meta.getTag("name=\"" + name + "\"");
    return metaTag && metaTag.content;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKOUT_FEATURE = 'checkout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
/** @type {?} */
var ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
/** @type {?} */
var ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
/** @type {?} */
var SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
/** @type {?} */
var SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
/** @type {?} */
var SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
/** @type {?} */
var LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
/** @type {?} */
var LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
/** @type {?} */
var LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
/** @type {?} */
var CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
/** @type {?} */
var SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
/** @type {?} */
var SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
/** @type {?} */
var SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
/** @type {?} */
var CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
/** @type {?} */
var CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
/** @type {?} */
var CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
/** @type {?} */
var SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
/** @type {?} */
var SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
/** @type {?} */
var SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
/** @type {?} */
var PLACE_ORDER = '[Checkout] Place Order';
/** @type {?} */
var PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
/** @type {?} */
var PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
/** @type {?} */
var CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
/** @type {?} */
var CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
var AddDeliveryAddress = /** @class */ (function () {
    function AddDeliveryAddress(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
    return AddDeliveryAddress;
}());
var AddDeliveryAddressFail = /** @class */ (function () {
    function AddDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
    return AddDeliveryAddressFail;
}());
var AddDeliveryAddressSuccess = /** @class */ (function () {
    function AddDeliveryAddressSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
    return AddDeliveryAddressSuccess;
}());
var SetDeliveryAddress = /** @class */ (function () {
    function SetDeliveryAddress(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
    return SetDeliveryAddress;
}());
var SetDeliveryAddressFail = /** @class */ (function () {
    function SetDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
    return SetDeliveryAddressFail;
}());
var SetDeliveryAddressSuccess = /** @class */ (function () {
    function SetDeliveryAddressSuccess(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
    return SetDeliveryAddressSuccess;
}());
var LoadSupportedDeliveryModes = /** @class */ (function () {
    function LoadSupportedDeliveryModes(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
    return LoadSupportedDeliveryModes;
}());
var LoadSupportedDeliveryModesFail = /** @class */ (function () {
    function LoadSupportedDeliveryModesFail(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
    return LoadSupportedDeliveryModesFail;
}());
var LoadSupportedDeliveryModesSuccess = /** @class */ (function () {
    function LoadSupportedDeliveryModesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
    return LoadSupportedDeliveryModesSuccess;
}());
var SetDeliveryMode = /** @class */ (function () {
    function SetDeliveryMode(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
    return SetDeliveryMode;
}());
var SetDeliveryModeFail = /** @class */ (function () {
    function SetDeliveryModeFail(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
    return SetDeliveryModeFail;
}());
var SetDeliveryModeSuccess = /** @class */ (function () {
    function SetDeliveryModeSuccess(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
    return SetDeliveryModeSuccess;
}());
var CreatePaymentDetails = /** @class */ (function () {
    function CreatePaymentDetails(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
    return CreatePaymentDetails;
}());
var CreatePaymentDetailsFail = /** @class */ (function () {
    function CreatePaymentDetailsFail(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
    return CreatePaymentDetailsFail;
}());
var CreatePaymentDetailsSuccess = /** @class */ (function () {
    function CreatePaymentDetailsSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
    return CreatePaymentDetailsSuccess;
}());
var SetPaymentDetails = /** @class */ (function () {
    function SetPaymentDetails(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
    return SetPaymentDetails;
}());
var SetPaymentDetailsFail = /** @class */ (function () {
    function SetPaymentDetailsFail(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
    return SetPaymentDetailsFail;
}());
var SetPaymentDetailsSuccess = /** @class */ (function () {
    function SetPaymentDetailsSuccess(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
    return SetPaymentDetailsSuccess;
}());
var PlaceOrder = /** @class */ (function () {
    function PlaceOrder(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
    return PlaceOrder;
}());
var PlaceOrderFail = /** @class */ (function () {
    function PlaceOrderFail(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
    return PlaceOrderFail;
}());
var PlaceOrderSuccess = /** @class */ (function () {
    function PlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
    return PlaceOrderSuccess;
}());
var ClearSupportedDeliveryModes = /** @class */ (function () {
    function ClearSupportedDeliveryModes() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
    return ClearSupportedDeliveryModes;
}());
var ClearCheckoutStep = /** @class */ (function () {
    function ClearCheckoutStep(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
    return ClearCheckoutStep;
}());
var ClearCheckoutData = /** @class */ (function () {
    function ClearCheckoutData() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
    return ClearCheckoutData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_CARD_TYPES = '[Checkout] Load Card Types';
/** @type {?} */
var LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
/** @type {?} */
var LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
var LoadCardTypes = /** @class */ (function () {
    function LoadCardTypes() {
        this.type = LOAD_CARD_TYPES;
    }
    return LoadCardTypes;
}());
var LoadCardTypesFail = /** @class */ (function () {
    function LoadCardTypesFail(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_FAIL;
    }
    return LoadCardTypesFail;
}());
var LoadCardTypesSuccess = /** @class */ (function () {
    function LoadCardTypesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_SUCCESS;
    }
    return LoadCardTypesSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VERIFY_ADDRESS = '[Checkout] Verify Address';
/** @type {?} */
var VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
/** @type {?} */
var VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
/** @type {?} */
var CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
var VerifyAddress = /** @class */ (function () {
    function VerifyAddress(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
    return VerifyAddress;
}());
var VerifyAddressFail = /** @class */ (function () {
    function VerifyAddressFail(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
    return VerifyAddressFail;
}());
var VerifyAddressSuccess = /** @class */ (function () {
    function VerifyAddressSuccess(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_SUCCESS;
    }
    return VerifyAddressSuccess;
}());
var ClearAddressVerificationResults = /** @class */ (function () {
    function ClearAddressVerificationResults() {
        this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    }
    return ClearAddressVerificationResults;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
var CheckoutClearMiscsData = /** @class */ (function () {
    function CheckoutClearMiscsData() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
    return CheckoutClearMiscsData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$9 = {
    address: {},
    deliveryMode: {
        supported: {},
        selected: ''
    },
    paymentDetails: {},
    orderDetails: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$9(state, action) {
    if (state === void 0) { state = initialState$9; }
    switch (action.type) {
        case ADD_DELIVERY_ADDRESS_SUCCESS:
        case SET_DELIVERY_ADDRESS_SUCCESS: {
            /** @type {?} */
            var address = action.payload;
            return __assign({}, state, { address: address });
        }
        case LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            /** @type {?} */
            var supportedModes = action.payload.deliveryModes;
            if (!supportedModes) {
                return state;
            }
            /** @type {?} */
            var supported = supportedModes.reduce(function (modes, mode) {
                var _a;
                return __assign({}, modes, (_a = {}, _a[mode.code] = mode, _a));
            }, __assign({}, state.deliveryMode.supported));
            return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { supported: supported }) });
        }
        case SET_DELIVERY_MODE_SUCCESS: {
            /** @type {?} */
            var selected = action.payload;
            return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { selected: selected }) });
        }
        case CREATE_PAYMENT_DETAILS_SUCCESS:
        case SET_PAYMENT_DETAILS_SUCCESS: {
            return __assign({}, state, { paymentDetails: action.payload });
        }
        case CREATE_PAYMENT_DETAILS_FAIL: {
            /** @type {?} */
            var paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return __assign({}, state, { paymentDetails: paymentDetails });
            }
            return state;
        }
        case PLACE_ORDER_SUCCESS: {
            /** @type {?} */
            var orderDetails = action.payload;
            return __assign({}, state, { orderDetails: orderDetails });
        }
        case CLEAR_CHECKOUT_DATA: {
            return initialState$9;
        }
        case CLEAR_CHECKOUT_STEP: {
            /** @type {?} */
            var stepNumber = action.payload;
            switch (stepNumber) {
                case 1: {
                    return __assign({}, state, { address: {} });
                }
                case 2: {
                    return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { supported: {}, selected: '' }) });
                }
                case 3: {
                    return __assign({}, state, { paymentDetails: {} });
                }
            }
            return state;
        }
        case CLEAR_SUPPORTED_DELIVERY_MODES:
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return __assign({}, state, { deliveryMode: __assign({}, state.deliveryMode, { supported: {} }) });
        }
    }
    return state;
}
/** @type {?} */
var getDeliveryAddress = function (state) { return state.address; };
/** @type {?} */
var getDeliveryMode = function (state) {
    return state.deliveryMode;
};
/** @type {?} */
var getPaymentDetails = function (state) {
    return state.paymentDetails;
};
/** @type {?} */
var getOrderDetails = function (state) {
    return state.orderDetails;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$a = {
    results: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$a(state, action) {
    if (state === void 0) { state = initialState$a; }
    switch (action.type) {
        case VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            var results = action.payload;
            return __assign({}, state, { results: results });
        }
        case VERIFY_ADDRESS_FAIL: {
            return __assign({}, state, { results: 'FAIL' });
        }
        case CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return __assign({}, state, { results: {} });
        }
    }
    return state;
}
/** @type {?} */
var getAddressVerificationResults = function (state) { return state.results; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$b = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$b(state, action) {
    if (state === void 0) { state = initialState$b; }
    switch (action.type) {
        case LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            var cardTypes = action.payload;
            /** @type {?} */
            var entities = cardTypes.reduce(function (cardTypesEntities, name) {
                var _a;
                return __assign({}, cardTypesEntities, (_a = {}, _a[name.code] = name, _a));
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState$b;
        }
    }
    return state;
}
/** @type {?} */
var getCardTypesEntites = function (state) { return state.entities; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$6() {
    return {
        steps: reducer$9,
        cardTypes: reducer$b,
        addressVerification: reducer$a
    };
}
/** @type {?} */
var reducerToken$6 = new InjectionToken('CheckoutReducers');
/** @type {?} */
var reducerProvider$6 = {
    provide: reducerToken$6,
    useFactory: getReducers$6
};
/** @type {?} */
var getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCheckoutState(reducer) {
    return function (state, action) {
        switch (action.type) {
            case LANGUAGE_CHANGE: {
                action = new CheckoutClearMiscsData();
                break;
            }
            case CURRENCY_CHANGE: {
                action = new ClearSupportedDeliveryModes();
                break;
            }
            case LOGOUT: {
                action = new ClearCheckoutData();
                break;
            }
        }
        return reducer(state, action);
    };
}
/** @type {?} */
var metaReducers$4 = [clearCheckoutState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getCheckoutStepsState = createSelector(getCheckoutState, function (state) { return state.steps; });
/** @type {?} */
var getDeliveryAddress$1 = createSelector(getCheckoutStepsState, getDeliveryAddress);
/** @type {?} */
var getDeliveryMode$1 = createSelector(getCheckoutStepsState, getDeliveryMode);
/** @type {?} */
var getSupportedDeliveryModes = createSelector(getDeliveryMode$1, function (deliveryMode) {
    return Object.keys(deliveryMode.supported).map(function (code) { return deliveryMode.supported[code]; });
});
/** @type {?} */
var getSelectedCode = createSelector(getDeliveryMode$1, function (deliveryMode) {
    return deliveryMode.selected;
});
/** @type {?} */
var getSelectedDeliveryMode = createSelector(getDeliveryMode$1, function (deliveryMode) {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
});
/** @type {?} */
var getPaymentDetails$1 = createSelector(getCheckoutStepsState, getPaymentDetails);
/** @type {?} */
var getCheckoutOrderDetails = createSelector(getCheckoutStepsState, getOrderDetails);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getCardTypesState = createSelector(getCheckoutState, function (state) { return state.cardTypes; });
/** @type {?} */
var getCardTypesEntites$1 = createSelector(getCardTypesState, getCardTypesEntites);
/** @type {?} */
var getAllCardTypes = createSelector(getCardTypesEntites$1, function (entites) {
    return Object.keys(entites).map(function (code) { return entites[code]; });
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAddressVerificationResultsState = createSelector(getCheckoutState, function (state) { return state.addressVerification; });
/** @type {?} */
var getAddressVerificationResults$1 = createSelector(getAddressVerificationResultsState, getAddressVerificationResults);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GLOBAL_MESSAGE_FEATURE = 'global-message';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ADD_MESSAGE = '[Global-message] Add a Message';
/** @type {?} */
var REMOVE_MESSAGE = '[Global-message] Remove a Message';
/** @type {?} */
var REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
var AddMessage = /** @class */ (function () {
    function AddMessage(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
    return AddMessage;
}());
var RemoveMessage = /** @class */ (function () {
    function RemoveMessage(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
    return RemoveMessage;
}());
var RemoveMessagesByType = /** @class */ (function () {
    function RemoveMessagesByType(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
    return RemoveMessagesByType;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getGlobalMessageState = createFeatureSelector(GLOBAL_MESSAGE_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getGlobalMessageEntities = createSelector(getGlobalMessageState, function (state) { return state.entities; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$c = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$c(state, action) {
    if (state === void 0) { state = initialState$c; }
    var _a, _b, _c, _d;
    switch (action.type) {
        case ADD_MESSAGE: {
            /** @type {?} */
            var message = action.payload;
            if (state.entities[message.type] === undefined) {
                return __assign({}, state, { entities: __assign({}, state.entities, (_a = {}, _a[message.type] = [message.text], _a)) });
            }
            else {
                /** @type {?} */
                var msgs = state.entities[message.type];
                if (msgs.indexOf(message.text) === -1) {
                    return __assign({}, state, { entities: __assign({}, state.entities, (_b = {}, _b[message.type] = __spread(msgs, [message.text]), _b)) });
                }
            }
            return state;
        }
        case REMOVE_MESSAGE: {
            /** @type {?} */
            var msgType = action.payload.type;
            /** @type {?} */
            var msgIndex = action.payload.index;
            if (Object.keys(state.entities).length === 0 ||
                !state.entities[msgType]) {
                return state;
            }
            /** @type {?} */
            var messages = __spread(state.entities[msgType]);
            messages.splice(msgIndex, 1);
            return __assign({}, state, { entities: __assign({}, state.entities, (_c = {}, _c[msgType] = messages, _c)) });
        }
        case REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            var entities = __assign({}, state.entities, (_d = {}, _d[action.payload] = [], _d));
            return __assign({}, state, { entities: entities });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$7() {
    return reducer$c;
}
/** @type {?} */
var reducerToken$7 = new InjectionToken('GlobalMessageReducers');
/** @type {?} */
var reducerProvider$7 = {
    provide: reducerToken$7,
    useFactory: getReducers$7
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalMessageStoreModule = /** @class */ (function () {
    function GlobalMessageStoreModule() {
    }
    GlobalMessageStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StateModule,
                        StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$7)
                    ],
                    providers: [reducerProvider$7]
                },] }
    ];
    return GlobalMessageStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalMessageService = /** @class */ (function () {
    function GlobalMessageService(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     */
    /**
     * Get all global messages
     * @return {?}
     */
    GlobalMessageService.prototype.get = /**
     * Get all global messages
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getGlobalMessageEntities), filter(function (data) { return data !== undefined; }));
    };
    /**
     * Add one message into store
     * @param message: GlobalMessage object
     */
    /**
     * Add one message into store
     * @param {?} message
     * @return {?}
     */
    GlobalMessageService.prototype.add = /**
     * Add one message into store
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.store.dispatch(new AddMessage(message));
    };
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    GlobalMessageService.prototype.remove = /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    function (type, index) {
        if (index !== undefined) {
            this.store.dispatch(new RemoveMessage({
                type: type,
                index: index
            }));
        }
        else {
            this.store.dispatch(new RemoveMessagesByType(type));
        }
    };
    GlobalMessageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalMessageService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GlobalMessageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GlobalMessageType = {
    MSG_TYPE_CONFIRMATION: '[GlobalMessage] Confirmation',
    MSG_TYPE_ERROR: '[GlobalMessage] Error',
    MSG_TYPE_INFO: '[GlobalMessage] Information',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var OAUTH_ENDPOINT$3 = '/authorizationserver/oauth/token';
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    HttpErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (errResponse) {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT$3) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'password') {
                                _this.globalMessageService.add({
                                    type: GlobalMessageType.MSG_TYPE_ERROR,
                                    text: _this.getErrorMessage(errResponse) +
                                        '. Please login again.'
                                });
                                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
                            }
                        }
                        else {
                            _this.globalMessageService.add({
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                                text: _this.getErrorMessage(errResponse)
                            });
                        }
                        break;
                    case 403: // Forbidden
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'You are not authorized to perform this action.'
                        });
                        break;
                    case 404: // Not Found
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The requested resource could not be found'
                        });
                        break;
                    case 409: // Already Exists
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'Already exists'
                        });
                        break;
                    case 502: // Bad Gateway
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'A server error occurred. Please try again later.'
                        });
                        break;
                    case 504: // Gateway Timeout
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The server did not responded, please try again later.'
                        });
                        break;
                    default:
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: _this.getErrorMessage(errResponse)
                        });
                }
            }
            else {
                _this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'An unknown error occured'
                });
            }
            return throwError(errResponse);
        }));
    };
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    HttpErrorInterceptor.prototype.getErrorMessage = /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        /** @type {?} */
        var errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg;
    };
    HttpErrorInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    return HttpErrorInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors$2 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalMessageModule = /** @class */ (function () {
    function GlobalMessageModule() {
    }
    /**
     * @return {?}
     */
    GlobalMessageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GlobalMessageModule,
            providers: __spread(interceptors$2)
        };
    };
    GlobalMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [GlobalMessageStoreModule],
                    providers: [GlobalMessageService]
                },] }
    ];
    return GlobalMessageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_ENDPOINT = 'users/';
/** @type {?} */
var ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
/** @type {?} */
var ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
var PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
var OccUserService = /** @class */ (function () {
    // some extending from baseservice is not working here...
    function OccUserService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserService.prototype.loadUser = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId;
        return this.http
            .get(url)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    OccUserService.prototype.verifyAddress = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserService.prototype.loadUserAddresses = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    OccUserService.prototype.addUserAddress = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    OccUserService.prototype.updateUserAddress = /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (userId, addressId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .patch(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    OccUserService.prototype.deleteUserAddress = /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, addressId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserService.prototype.loadUserPaymentMethods = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "?saved=true";
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserService.prototype.deleteUserPaymentMethod = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "/" + paymentMethodID;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserService.prototype.setDefaultUserPaymentMethod = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "/" + paymentMethodID;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} user
     * @return {?}
     */
    OccUserService.prototype.registerUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var url = this.getUserEndpoint();
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, user, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @protected
     * @return {?}
     */
    OccUserService.prototype.getUserEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            USER_ENDPOINT);
    };
    OccUserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccUserService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
var FULL_PARAMS = 'fields=FULL';
var OccOrderService = /** @class */ (function () {
    function OccOrderService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccOrderService.prototype.getOrderEndpoint = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var orderEndpoint = '/users/' + userId + '/orders';
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            orderEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccOrderService.prototype.placeOrder = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getOrderEndpoint(userId);
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, {}, { headers: headers, params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    OccOrderService.prototype.getOrders = /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        /** @type {?} */
        var url = this.getOrderEndpoint(userId);
        /** @type {?} */
        var params = new HttpParams();
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        if (sort) {
            params = params.set('sort', sort);
        }
        return this.http
            .get(url, { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    OccOrderService.prototype.getOrder = /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    function (userId, orderCode) {
        /** @type {?} */
        var url = this.getOrderEndpoint(userId);
        /** @type {?} */
        var orderUrl = url + '/' + orderCode;
        /** @type {?} */
        var params = new HttpParams({
            fromString: FULL_PARAMS
        });
        return this.http
            .get(orderUrl, {
            params: params
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccOrderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccOrderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccOrderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserOccModule = /** @class */ (function () {
    function UserOccModule() {
    }
    UserOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, OccModule],
                    providers: [OccUserService, OccOrderService]
                },] }
    ];
    return UserOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_USER_DETAILS = '[User] Load User Details';
/** @type {?} */
var LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
/** @type {?} */
var LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
var LoadUserDetails = /** @class */ (function () {
    function LoadUserDetails(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
    return LoadUserDetails;
}());
var LoadUserDetailsFail = /** @class */ (function () {
    function LoadUserDetailsFail(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
    return LoadUserDetailsFail;
}());
var LoadUserDetailsSuccess = /** @class */ (function () {
    function LoadUserDetailsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
    return LoadUserDetailsSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var USER_FEATURE = 'user';
/** @type {?} */
var USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
var USER_ORDERS = '[User] User Orders';
/** @type {?} */
var USER_ADDRESSES = '[User] User Addresses';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_USER_ADDRESSES = '[User] Load User Addresses';
/** @type {?} */
var LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
/** @type {?} */
var LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
/** @type {?} */
var ADD_USER_ADDRESS = '[User] Add User Address';
/** @type {?} */
var ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
/** @type {?} */
var ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
/** @type {?} */
var UPDATE_USER_ADDRESS = '[User] Update User Address';
/** @type {?} */
var UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
/** @type {?} */
var UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
/** @type {?} */
var DELETE_USER_ADDRESS = '[User] Delete User Address';
/** @type {?} */
var DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
/** @type {?} */
var DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
var LoadUserAddresses = /** @class */ (function (_super) {
    __extends(LoadUserAddresses, _super);
    function LoadUserAddresses(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES;
        return _this;
    }
    return LoadUserAddresses;
}(LoaderLoadAction));
var LoadUserAddressesFail = /** @class */ (function (_super) {
    __extends(LoadUserAddressesFail, _super);
    function LoadUserAddressesFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES_FAIL;
        return _this;
    }
    return LoadUserAddressesFail;
}(LoaderFailAction));
var LoadUserAddressesSuccess = /** @class */ (function (_super) {
    __extends(LoadUserAddressesSuccess, _super);
    function LoadUserAddressesSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ADDRESSES_SUCCESS;
        return _this;
    }
    return LoadUserAddressesSuccess;
}(LoaderSuccessAction));
// Adding address actions
var  
// Adding address actions
AddUserAddress = /** @class */ (function (_super) {
    __extends(AddUserAddress, _super);
    function AddUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS;
        return _this;
    }
    return AddUserAddress;
}(LoaderLoadAction));
var AddUserAddressFail = /** @class */ (function (_super) {
    __extends(AddUserAddressFail, _super);
    function AddUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS_FAIL;
        return _this;
    }
    return AddUserAddressFail;
}(LoaderFailAction));
var AddUserAddressSuccess = /** @class */ (function (_super) {
    __extends(AddUserAddressSuccess, _super);
    function AddUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = ADD_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return AddUserAddressSuccess;
}(LoaderSuccessAction));
// Updating address actions
var  
// Updating address actions
UpdateUserAddress = /** @class */ (function (_super) {
    __extends(UpdateUserAddress, _super);
    function UpdateUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS;
        return _this;
    }
    return UpdateUserAddress;
}(LoaderLoadAction));
var UpdateUserAddressFail = /** @class */ (function (_super) {
    __extends(UpdateUserAddressFail, _super);
    function UpdateUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS_FAIL;
        return _this;
    }
    return UpdateUserAddressFail;
}(LoaderFailAction));
var UpdateUserAddressSuccess = /** @class */ (function (_super) {
    __extends(UpdateUserAddressSuccess, _super);
    function UpdateUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = UPDATE_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return UpdateUserAddressSuccess;
}(LoaderSuccessAction));
// Deleting address actions
var  
// Deleting address actions
DeleteUserAddress = /** @class */ (function (_super) {
    __extends(DeleteUserAddress, _super);
    function DeleteUserAddress(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS;
        return _this;
    }
    return DeleteUserAddress;
}(LoaderLoadAction));
var DeleteUserAddressFail = /** @class */ (function (_super) {
    __extends(DeleteUserAddressFail, _super);
    function DeleteUserAddressFail(payload) {
        var _this = _super.call(this, USER_ADDRESSES, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS_FAIL;
        return _this;
    }
    return DeleteUserAddressFail;
}(LoaderFailAction));
var DeleteUserAddressSuccess = /** @class */ (function (_super) {
    __extends(DeleteUserAddressSuccess, _super);
    function DeleteUserAddressSuccess(payload) {
        var _this = _super.call(this, USER_ADDRESSES) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_ADDRESS_SUCCESS;
        return _this;
    }
    return DeleteUserAddressSuccess;
}(LoaderSuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
/** @type {?} */
var LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
/** @type {?} */
var LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
/** @type {?} */
var SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
/** @type {?} */
var SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
/** @type {?} */
var SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
/** @type {?} */
var DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
/** @type {?} */
var DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
/** @type {?} */
var DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
var LoadUserPaymentMethods = /** @class */ (function (_super) {
    __extends(LoadUserPaymentMethods, _super);
    function LoadUserPaymentMethods(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_PAYMENT_METHODS;
        return _this;
    }
    return LoadUserPaymentMethods;
}(LoaderLoadAction));
var LoadUserPaymentMethodsFail = /** @class */ (function (_super) {
    __extends(LoadUserPaymentMethodsFail, _super);
    function LoadUserPaymentMethodsFail(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
        return _this;
    }
    return LoadUserPaymentMethodsFail;
}(LoaderFailAction));
var LoadUserPaymentMethodsSuccess = /** @class */ (function (_super) {
    __extends(LoadUserPaymentMethodsSuccess, _super);
    function LoadUserPaymentMethodsSuccess(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
        return _this;
    }
    return LoadUserPaymentMethodsSuccess;
}(LoaderSuccessAction));
var SetDefaultUserPaymentMethod = /** @class */ (function (_super) {
    __extends(SetDefaultUserPaymentMethod, _super);
    function SetDefaultUserPaymentMethod(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
        return _this;
    }
    return SetDefaultUserPaymentMethod;
}(LoaderLoadAction));
var SetDefaultUserPaymentMethodFail = /** @class */ (function (_super) {
    __extends(SetDefaultUserPaymentMethodFail, _super);
    function SetDefaultUserPaymentMethodFail(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
        _this.payload = payload;
        _this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
        return _this;
    }
    return SetDefaultUserPaymentMethodFail;
}(LoaderFailAction));
var SetDefaultUserPaymentMethodSuccess = /** @class */ (function (_super) {
    __extends(SetDefaultUserPaymentMethodSuccess, _super);
    function SetDefaultUserPaymentMethodSuccess(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
        return _this;
    }
    return SetDefaultUserPaymentMethodSuccess;
}(LoaderSuccessAction));
var DeleteUserPaymentMethod = /** @class */ (function (_super) {
    __extends(DeleteUserPaymentMethod, _super);
    function DeleteUserPaymentMethod(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_PAYMENT_METHOD;
        return _this;
    }
    return DeleteUserPaymentMethod;
}(LoaderLoadAction));
var DeleteUserPaymentMethodFail = /** @class */ (function (_super) {
    __extends(DeleteUserPaymentMethodFail, _super);
    function DeleteUserPaymentMethodFail(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS, payload) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
        return _this;
    }
    return DeleteUserPaymentMethodFail;
}(LoaderFailAction));
var DeleteUserPaymentMethodSuccess = /** @class */ (function (_super) {
    __extends(DeleteUserPaymentMethodSuccess, _super);
    function DeleteUserPaymentMethodSuccess(payload) {
        var _this = _super.call(this, USER_PAYMENT_METHODS) || this;
        _this.payload = payload;
        _this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
        return _this;
    }
    return DeleteUserPaymentMethodSuccess;
}(LoaderSuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var REGISTER_USER = '[User] Register User';
/** @type {?} */
var REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
var REGISTER_USER_SUCCESS = '[User] Register User Success';
var RegisterUser = /** @class */ (function () {
    function RegisterUser(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
    return RegisterUser;
}());
var RegisterUserFail = /** @class */ (function () {
    function RegisterUserFail(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
    return RegisterUserFail;
}());
var RegisterUserSuccess = /** @class */ (function () {
    function RegisterUserSuccess() {
        this.type = REGISTER_USER_SUCCESS;
    }
    return RegisterUserSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
var LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
var LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
var CLEAR_USER_ORDERS = '[User] Clear User Orders';
var LoadUserOrders = /** @class */ (function (_super) {
    __extends(LoadUserOrders, _super);
    function LoadUserOrders(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS;
        return _this;
    }
    return LoadUserOrders;
}(LoaderLoadAction));
var LoadUserOrdersFail = /** @class */ (function (_super) {
    __extends(LoadUserOrdersFail, _super);
    function LoadUserOrdersFail(payload) {
        var _this = _super.call(this, USER_ORDERS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_FAIL;
        return _this;
    }
    return LoadUserOrdersFail;
}(LoaderFailAction));
var LoadUserOrdersSuccess = /** @class */ (function (_super) {
    __extends(LoadUserOrdersSuccess, _super);
    function LoadUserOrdersSuccess(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_SUCCESS;
        return _this;
    }
    return LoadUserOrdersSuccess;
}(LoaderSuccessAction));
var ClearUserOrders = /** @class */ (function () {
    function ClearUserOrders() {
        this.type = CLEAR_USER_ORDERS;
    }
    return ClearUserOrders;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_TITLES = '[User] Load Tiltes';
/** @type {?} */
var LOAD_TITLES_FAIL = '[User] Load Titles Fail';
/** @type {?} */
var LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
var LoadTitles = /** @class */ (function () {
    function LoadTitles() {
        this.type = LOAD_TITLES;
    }
    return LoadTitles;
}());
var LoadTitlesFail = /** @class */ (function () {
    function LoadTitlesFail(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_FAIL;
    }
    return LoadTitlesFail;
}());
var LoadTitlesSuccess = /** @class */ (function () {
    function LoadTitlesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_SUCCESS;
    }
    return LoadTitlesSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
/** @type {?} */
var LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
/** @type {?} */
var LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
var LoadDeliveryCountries = /** @class */ (function () {
    function LoadDeliveryCountries() {
        this.type = LOAD_DELIVERY_COUNTRIES;
    }
    return LoadDeliveryCountries;
}());
var LoadDeliveryCountriesFail = /** @class */ (function () {
    function LoadDeliveryCountriesFail(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
    return LoadDeliveryCountriesFail;
}());
var LoadDeliveryCountriesSuccess = /** @class */ (function () {
    function LoadDeliveryCountriesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
    return LoadDeliveryCountriesSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
var LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
var LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
var LoadRegions = /** @class */ (function () {
    function LoadRegions(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
    return LoadRegions;
}());
var LoadRegionsFail = /** @class */ (function () {
    function LoadRegionsFail(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
    return LoadRegionsFail;
}());
var LoadRegionsSuccess = /** @class */ (function () {
    function LoadRegionsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
    return LoadRegionsSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_ORDER_DETAILS = '[User] Load Order Details';
/** @type {?} */
var LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
/** @type {?} */
var LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
/** @type {?} */
var CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
var LoadOrderDetails = /** @class */ (function () {
    function LoadOrderDetails(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
    return LoadOrderDetails;
}());
var LoadOrderDetailsFail = /** @class */ (function () {
    function LoadOrderDetailsFail(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
    return LoadOrderDetailsFail;
}());
var LoadOrderDetailsSuccess = /** @class */ (function () {
    function LoadOrderDetailsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
    return LoadOrderDetailsSuccess;
}());
var ClearOrderDetails = /** @class */ (function () {
    function ClearOrderDetails() {
        this.type = CLEAR_ORDER_DETAILS;
    }
    return ClearOrderDetails;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
/** @type {?} */
var LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
/** @type {?} */
var LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
var LoadBillingCountries = /** @class */ (function () {
    function LoadBillingCountries() {
        this.type = LOAD_BILLING_COUNTRIES;
    }
    return LoadBillingCountries;
}());
var LoadBillingCountriesFail = /** @class */ (function () {
    function LoadBillingCountriesFail(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_FAIL;
    }
    return LoadBillingCountriesFail;
}());
var LoadBillingCountriesSuccess = /** @class */ (function () {
    function LoadBillingCountriesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
    }
    return LoadBillingCountriesSuccess;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CLEAR_MISCS_DATA = '[User] Clear User Misc Data';
var ClearMiscsData = /** @class */ (function () {
    function ClearMiscsData() {
        this.type = CLEAR_MISCS_DATA;
    }
    return ClearMiscsData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserDetailsEffects = /** @class */ (function () {
    function UserDetailsEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserDetails$ = this.actions$.pipe(ofType(LOAD_USER_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (userId) {
            return _this.occUserService.loadUser(userId).pipe(map(function (user) {
                return new LoadUserDetailsSuccess(user);
            }), catchError(function (error) {
                return of(new LoadUserDetailsFail(error));
            }));
        }));
    }
    UserDetailsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserDetailsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserDetailsEffects.prototype, "loadUserDetails$", void 0);
    return UserDetailsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserAddressesEffects = /** @class */ (function () {
    function UserAddressesEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(LOAD_USER_ADDRESSES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occUserService.loadUserAddresses(payload).pipe(map(function (addressesList) {
                return new LoadUserAddressesSuccess(addressesList.addresses);
            }), catchError(function (error) {
                return of(new LoadUserAddressesFail(error));
            }));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occUserService
                .addUserAddress(payload.userId, payload.address)
                .pipe(map(function (data) {
                return new AddUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new AddUserAddressFail(error));
            }));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occUserService
                .updateUserAddress(payload.userId, payload.addressId, payload.address)
                .pipe(map(function (data) {
                return new UpdateUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new UpdateUserAddressFail(error));
            }));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occUserService
                .deleteUserAddress(payload.userId, payload.addressId)
                .pipe(map(function (data) {
                return new DeleteUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new DeleteUserAddressFail(error));
            }));
        }));
    }
    UserAddressesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAddressesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "addUserAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);
    return UserAddressesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserPaymentMethodsEffects = /** @class */ (function () {
    function UserPaymentMethodsEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(LOAD_USER_PAYMENT_METHODS), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.occUserService.loadUserPaymentMethods(payload).pipe(map(function (paymentsList) {
                return new LoadUserPaymentMethodsSuccess(paymentsList.payments);
            }), catchError(function (error) {
                return of(new LoadUserPaymentMethodsFail(error));
            }));
        }));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(SET_DEFAULT_USER_PAYMENT_METHOD), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.occUserService
                .setDefaultUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap(function (data) {
                return [
                    new SetDefaultUserPaymentMethodSuccess(data),
                    new LoadUserPaymentMethods(payload.userId)
                ];
            }), catchError(function (error) {
                return of(new SetDefaultUserPaymentMethodFail(error));
            }));
        }));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(DELETE_USER_PAYMENT_METHOD), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.occUserService
                .deleteUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap(function (data) {
                return [
                    new DeleteUserPaymentMethodSuccess(data),
                    new LoadUserPaymentMethods(payload.userId)
                ];
            }), catchError(function (error) {
                return of(new DeleteUserPaymentMethodFail(error));
            }));
        }));
    }
    UserPaymentMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserPaymentMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
    return UserPaymentMethodsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserRegisterEffects = /** @class */ (function () {
    function UserRegisterEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.registerUser$ = this.actions$.pipe(ofType(REGISTER_USER), map(function (action) { return action.payload; }), mergeMap(function (user) {
            return _this.userService.registerUser(user).pipe(switchMap(function (_result) { return [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password
                }),
                new RegisterUserSuccess()
            ]; }), catchError(function (error) { return of(new RegisterUserFail(error)); }));
        }));
    }
    UserRegisterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserRegisterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserRegisterEffects.prototype, "registerUser$", void 0);
    return UserRegisterEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserOrdersEffect = /** @class */ (function () {
    function UserOrdersEffect(actions$, occOrderService) {
        var _this = this;
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.loadUserOrders$ = this.actions$.pipe(ofType(LOAD_USER_ORDERS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occOrderService
                .getOrders(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map(function (orders) {
                return new LoadUserOrdersSuccess(orders);
            }), catchError(function (error) {
                return of(new LoadUserOrdersFail(error));
            }));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, CLEAR_USER_ORDERS), map(function () {
            return new LoaderResetAction(USER_ORDERS);
        }));
    }
    UserOrdersEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserOrdersEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccOrderService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], UserOrdersEffect.prototype, "resetUserOrders$", void 0);
    return UserOrdersEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, occMiscsService) {
        var _this = this;
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadTitles$ = this.actions$.pipe(ofType(LOAD_TITLES), switchMap(function () {
            return _this.occMiscsService.loadTitles().pipe(map(function (data) { return new LoadTitlesSuccess(data.titles); }), catchError(function (error) { return of(new LoadTitlesFail(error)); }));
        }));
    }
    TitlesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TitlesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccMiscsService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], TitlesEffects.prototype, "loadTitles$", void 0);
    return TitlesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeliveryCountriesEffects = /** @class */ (function () {
    function DeliveryCountriesEffects(actions$, occMiscsService) {
        var _this = this;
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(LOAD_DELIVERY_COUNTRIES), switchMap(function () {
            return _this.occMiscsService.loadDeliveryCountries().pipe(map(function (data) { return new LoadDeliveryCountriesSuccess(data.countries); }), catchError(function (error) { return of(new LoadDeliveryCountriesFail(error)); }));
        }));
    }
    DeliveryCountriesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DeliveryCountriesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccMiscsService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);
    return DeliveryCountriesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RegionsEffects = /** @class */ (function () {
    function RegionsEffects(actions$, occMiscsService) {
        var _this = this;
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadRegions$ = this.actions$.pipe(ofType(LOAD_REGIONS), map(function (action) {
            return action.payload;
        }), switchMap(function (countryCode) {
            return _this.occMiscsService.loadRegions(countryCode).pipe(map(function (data) { return new LoadRegionsSuccess(data.regions); }), catchError(function (error) { return of(new LoadRegionsFail(error)); }));
        }));
    }
    RegionsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RegionsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccMiscsService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], RegionsEffects.prototype, "loadRegions$", void 0);
    return RegionsEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, occOrderService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occOrderService
                .getOrder(payload.userId, payload.orderCode)
                .pipe(map(function (order) {
                if (order.consignments) {
                    order.consignments.forEach(function (element) {
                        element.entries.forEach(function (entry) {
                            _this.productImageConverter.convertProduct(entry.orderEntry.product);
                        });
                    });
                }
                if (order.unconsignedEntries) {
                    order.unconsignedEntries.forEach(function (entry) {
                        _this.productImageConverter.convertProduct(entry.product);
                    });
                }
                return new LoadOrderDetailsSuccess(order);
            }), catchError(function (error) {
                return of(new LoadOrderDetailsFail(error));
            }));
        }));
    }
    OrderDetailsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccOrderService },
        { type: ProductImageConverterService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
    return OrderDetailsEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BillingCountriesEffect = /** @class */ (function () {
    function BillingCountriesEffect(actions$, occMiscsService) {
        var _this = this;
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(LOAD_BILLING_COUNTRIES), switchMap(function () {
            return _this.occMiscsService.loadBillingCountries().pipe(map(function (data) { return new LoadBillingCountriesSuccess(data.countries); }), catchError(function (error) { return of(new LoadBillingCountriesFail(error)); }));
        }));
    }
    BillingCountriesEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BillingCountriesEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccMiscsService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);
    return BillingCountriesEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$6 = [
    DeliveryCountriesEffects,
    RegionsEffects,
    TitlesEffects,
    UserDetailsEffects,
    UserAddressesEffects,
    UserPaymentMethodsEffects,
    UserRegisterEffects,
    UserOrdersEffect,
    OrderDetailsEffect,
    BillingCountriesEffect
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$d = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$d(state, action) {
    if (state === void 0) { state = initialState$d; }
    switch (action.type) {
        case LOAD_BILLING_COUNTRIES_SUCCESS: {
            /** @type {?} */
            var billingCountries = action.payload;
            /** @type {?} */
            var entities = billingCountries.reduce(function (countryEntities, name) {
                var _a;
                return __assign({}, countryEntities, (_a = {}, _a[name.isocode] = name, _a));
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$d;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$e = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$e(state, action) {
    if (state === void 0) { state = initialState$e; }
    switch (action.type) {
        case LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            var deliveryCountries = action.payload;
            /** @type {?} */
            var entities = deliveryCountries.reduce(function (countryEntities, country) {
                var _a;
                return __assign({}, countryEntities, (_a = {}, _a[country.isocode] = country, _a));
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$e;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$f = {
    order: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$f(state, action) {
    if (state === void 0) { state = initialState$f; }
    switch (action.type) {
        case LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            var order = action.payload;
            return __assign({}, state, { order: order });
        }
        case CLEAR_ORDER_DETAILS: {
            return initialState$f;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$g = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$g(state, action) {
    if (state === void 0) { state = initialState$g; }
    switch (action.type) {
        case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
            return action.payload ? action.payload : state;
        }
        case LOAD_USER_PAYMENT_METHODS_FAIL: {
            return initialState$g;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$h = {
    entities: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$h(state, action) {
    if (state === void 0) { state = initialState$h; }
    switch (action.type) {
        case LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            var entities = action.payload;
            if (entities) {
                return __assign({}, state, { entities: entities });
            }
            return initialState$h;
        }
        case LOAD_REGIONS: {
            return __assign({}, state);
        }
        case CLEAR_MISCS_DATA: {
            return __assign({}, initialState$h);
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$i = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$i(state, action) {
    if (state === void 0) { state = initialState$i; }
    switch (action.type) {
        case LOAD_TITLES_SUCCESS: {
            /** @type {?} */
            var titles = action.payload;
            /** @type {?} */
            var entities = titles.reduce(function (titleEntities, name) {
                var _a;
                return __assign({}, titleEntities, (_a = {}, _a[name.code] = name, _a));
            }, __assign({}, state.entities));
            return __assign({}, state, { entities: entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$i;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$j = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$j(state, action) {
    if (state === void 0) { state = initialState$j; }
    switch (action.type) {
        case LOAD_USER_ADDRESSES_FAIL: {
            return initialState$j;
        }
        case LOAD_USER_ADDRESSES_SUCCESS: {
            return action.payload ? action.payload : state;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$k = {
    details: (/** @type {?} */ ({}))
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$k(state, action) {
    if (state === void 0) { state = initialState$k; }
    switch (action.type) {
        case LOAD_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            var details = action.payload;
            return __assign({}, state, { details: details });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$l = {
    orders: [],
    pagination: {},
    sorts: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$l(state, action) {
    if (state === void 0) { state = initialState$l; }
    switch (action.type) {
        case LOAD_USER_ORDERS_SUCCESS: {
            return action.payload ? action.payload : initialState$l;
        }
        case LOAD_USER_ORDERS_FAIL: {
            return initialState$l;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$8() {
    return {
        account: reducer$k,
        addresses: loaderReducer(USER_ADDRESSES, reducer$j),
        billingCountries: reducer$d,
        payments: loaderReducer(USER_PAYMENT_METHODS, reducer$g),
        orders: loaderReducer(USER_ORDERS, reducer$l),
        order: reducer$f,
        countries: reducer$e,
        titles: reducer$i,
        regions: reducer$h
    };
}
/** @type {?} */
var reducerToken$8 = new InjectionToken('UserReducers');
/** @type {?} */
var reducerProvider$8 = {
    provide: reducerToken$8,
    useFactory: getReducers$8
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearUserState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
var metaReducers$5 = [clearUserState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getUserState = createFeatureSelector(USER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getDetailsState = createSelector(getUserState, function (state) { return state.account; });
/** @type {?} */
var getDetails = createSelector(getDetailsState, function (state) { return state.details; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAddressesLoaderState = createSelector(getUserState, function (state) { return state.addresses; });
/** @type {?} */
var getAddresses = createSelector(getAddressesLoaderState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getAddressesLoading = createSelector(getAddressesLoaderState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getPaymentMethodsState = createSelector(getUserState, function (state) { return state.payments; });
/** @type {?} */
var getPaymentMethods = createSelector(getPaymentMethodsState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getPaymentMethodsLoading = createSelector(getPaymentMethodsState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getOrdersState = createSelector(getUserState, function (state) { return state.orders; });
/** @type {?} */
var getOrdersLoaded = createSelector(getOrdersState, function (state) { return loaderSuccessSelector(state); });
/** @type {?} */
var getOrders = createSelector(getOrdersState, function (state) { return loaderValueSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getTitlesState = createSelector(getUserState, function (state) { return state.titles; });
/** @type {?} */
var getTitlesEntites = createSelector(getTitlesState, function (state) { return state.entities; });
/** @type {?} */
var getAllTitles = createSelector(getTitlesEntites, function (entites) { return Object.keys(entites).map(function (code) { return entites[code]; }); });
/** @type {?} */
var titleSelectorFactory = function (code) {
    return createSelector(getTitlesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[code] : null); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getDeliveryCountriesState = createSelector(getUserState, function (state) { return state.countries; });
/** @type {?} */
var getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, function (state) { return state.entities; });
/** @type {?} */
var getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });
/** @type {?} */
var countrySelectorFactory = function (isocode) {
    return createSelector(getDeliveryCountriesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[isocode] : null); });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getRegionsState = createSelector(getUserState, function (state) { return state.regions; });
/** @type {?} */
var getAllRegions = createSelector(getRegionsState, function (state) { return state.entities; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getOrderState = createSelector(getUserState, function (state) { return state.order; });
/** @type {?} */
var getOrderDetails$1 = createSelector(getOrderState, function (state) { return state.order; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getBillingCountriesState = createSelector(getUserState, function (state) { return state.billingCountries; });
/** @type {?} */
var getBillingCountriesEntites = createSelector(getBillingCountriesState, function (state) { return state.entities; });
/** @type {?} */
var getAllBillingCountries = createSelector(getBillingCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService(store) {
        this.store = store;
    }
    /**
     * Returns a user
     */
    /**
     * Returns a user
     * @return {?}
     */
    UserService.prototype.get = /**
     * Returns a user
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getDetails));
    };
    /**
     * Loads the user's details
     */
    /**
     * Loads the user's details
     * @param {?} userId
     * @return {?}
     */
    UserService.prototype.load = /**
     * Loads the user's details
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new LoadUserDetails(userId));
    };
    /**
     * Register a new user
     *
     * @param submitFormData as UserRegisterFormData
     */
    /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    UserService.prototype.register = /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    function (userRegisterFormData) {
        this.store.dispatch(new RegisterUser(userRegisterFormData));
    };
    /**
     * Returns an order's detail
     */
    /**
     * Returns an order's detail
     * @return {?}
     */
    UserService.prototype.getOrderDetails = /**
     * Returns an order's detail
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getOrderDetails$1));
    };
    /**
     * Retrieves order's details
     *
     * @param userId a user's ID
     * @param orderCode an order code
     */
    /**
     * Retrieves order's details
     *
     * @param {?} userId a user's ID
     * @param {?} orderCode an order code
     * @return {?}
     */
    UserService.prototype.loadOrderDetails = /**
     * Retrieves order's details
     *
     * @param {?} userId a user's ID
     * @param {?} orderCode an order code
     * @return {?}
     */
    function (userId, orderCode) {
        this.store.dispatch(new LoadOrderDetails({
            userId: userId,
            orderCode: orderCode
        }));
    };
    /**
     * Clears order's details
     */
    /**
     * Clears order's details
     * @return {?}
     */
    UserService.prototype.clearOrderDetails = /**
     * Clears order's details
     * @return {?}
     */
    function () {
        this.store.dispatch(new ClearOrderDetails());
    };
    /**
     * Returns order history list
     */
    /**
     * Returns order history list
     * @param {?} userId
     * @param {?} pageSize
     * @return {?}
     */
    UserService.prototype.getOrderHistoryList = /**
     * Returns order history list
     * @param {?} userId
     * @param {?} pageSize
     * @return {?}
     */
    function (userId, pageSize) {
        var _this = this;
        return this.store.pipe(select(getOrdersState), tap(function (orderListState) {
            /** @type {?} */
            var attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad && !!userId) {
                _this.loadOrderList(userId, pageSize);
            }
        }), map(function (orderListState) { return orderListState.value; }));
    };
    /**
     * Returns a loaded flag for order history list
     */
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    UserService.prototype.getOrderHistoryListLoaded = /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getOrdersLoaded));
    };
    /**
     * Loads all user's payment methods.
     * @param userId a user ID
     */
    /**
     * Loads all user's payment methods.
     * @param {?} userId a user ID
     * @return {?}
     */
    UserService.prototype.loadPaymentMethods = /**
     * Loads all user's payment methods.
     * @param {?} userId a user ID
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new LoadUserPaymentMethods(userId));
    };
    /**
     * Returns all user's payment methods
     */
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    UserService.prototype.getPaymentMethods = /**
     * Returns all user's payment methods
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getPaymentMethods));
    };
    /**
     * Returns a loading flag for payment methods
     */
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    UserService.prototype.getPaymentMethodsLoading = /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getPaymentMethodsLoading));
    };
    /**
     * Sets the payment as a default one
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    /**
     * Sets the payment as a default one
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    UserService.prototype.setPaymentMethodAsDefault = /**
     * Sets the payment as a default one
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    function (userId, paymentMethodId) {
        this.store.dispatch(new SetDefaultUserPaymentMethod({
            userId: userId,
            paymentMethodId: paymentMethodId
        }));
    };
    /**
     * Deletes the payment method
     *
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    /**
     * Deletes the payment method
     *
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    UserService.prototype.deletePaymentMethod = /**
     * Deletes the payment method
     *
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    function (userId, paymentMethodId) {
        this.store.dispatch(new DeleteUserPaymentMethod({
            userId: userId,
            paymentMethodId: paymentMethodId
        }));
    };
    /**
     * Retrieves an order list
     * @param userId a user ID
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    /**
     * Retrieves an order list
     * @param {?} userId a user ID
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    UserService.prototype.loadOrderList = /**
     * Retrieves an order list
     * @param {?} userId a user ID
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    function (userId, pageSize, currentPage, sort) {
        this.store.dispatch(new LoadUserOrders({
            userId: userId,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort
        }));
    };
    /**
     * Retrieves user's addresses
     * @param userId a user ID
     */
    /**
     * Retrieves user's addresses
     * @param {?} userId a user ID
     * @return {?}
     */
    UserService.prototype.loadAddresses = /**
     * Retrieves user's addresses
     * @param {?} userId a user ID
     * @return {?}
     */
    function (userId) {
        this.store.dispatch(new LoadUserAddresses(userId));
    };
    /**
     * Adds user address
     * @param userId a user ID
     * @param address a user address
     */
    /**
     * Adds user address
     * @param {?} userId a user ID
     * @param {?} address a user address
     * @return {?}
     */
    UserService.prototype.addUserAddress = /**
     * Adds user address
     * @param {?} userId a user ID
     * @param {?} address a user address
     * @return {?}
     */
    function (userId, address) {
        this.store.dispatch(new AddUserAddress({
            userId: userId,
            address: address
        }));
    };
    /**
     * Sets user address as default
     * @param userId a user ID
     * @param addressId a user address ID
     */
    /**
     * Sets user address as default
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    UserService.prototype.setAddressAsDefault = /**
     * Sets user address as default
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    function (userId, addressId) {
        this.store.dispatch(new UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: { defaultAddress: true }
        }));
    };
    /**
     * Updates existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     * @param address a user address
     */
    /**
     * Updates existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    UserService.prototype.updateUserAddress = /**
     * Updates existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    function (userId, addressId, address) {
        this.store.dispatch(new UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: address
        }));
    };
    /**
     * Deletes existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     */
    /**
     * Deletes existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    UserService.prototype.deleteUserAddress = /**
     * Deletes existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    function (userId, addressId) {
        this.store.dispatch(new DeleteUserAddress({
            userId: userId,
            addressId: addressId
        }));
    };
    /**
     * Returns addresses
     */
    /**
     * Returns addresses
     * @return {?}
     */
    UserService.prototype.getAddresses = /**
     * Returns addresses
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAddresses));
    };
    /**
     * Returns a loading flag for addresses
     */
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    UserService.prototype.getAddressesLoading = /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAddressesLoading));
    };
    /**
     * Returns titles
     */
    /**
     * Returns titles
     * @return {?}
     */
    UserService.prototype.getTitles = /**
     * Returns titles
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAllTitles));
    };
    /**
     * Retrieves titles
     */
    /**
     * Retrieves titles
     * @return {?}
     */
    UserService.prototype.loadTitles = /**
     * Retrieves titles
     * @return {?}
     */
    function () {
        this.store.dispatch(new LoadTitles());
    };
    /**
     * Retrieves delivery countries
     */
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    UserService.prototype.loadDeliveryCountries = /**
     * Retrieves delivery countries
     * @return {?}
     */
    function () {
        this.store.dispatch(new LoadDeliveryCountries());
    };
    /**
     * Returns all delivery countries
     */
    /**
     * Returns all delivery countries
     * @return {?}
     */
    UserService.prototype.getDeliveryCountries = /**
     * Returns all delivery countries
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAllDeliveryCountries));
    };
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    UserService.prototype.getCountry = /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    function (isocode) {
        return this.store.pipe(select(countrySelectorFactory(isocode)));
    };
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserService.prototype.loadRegions = /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        this.store.dispatch(new LoadRegions(countryIsoCode));
    };
    /**
     * Returns all regions
     */
    /**
     * Returns all regions
     * @return {?}
     */
    UserService.prototype.getRegions = /**
     * Returns all regions
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAllRegions));
    };
    /**
     * Returns all billing countries
     */
    /**
     * Returns all billing countries
     * @return {?}
     */
    UserService.prototype.getAllBillingCountries = /**
     * Returns all billing countries
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getAllBillingCountries));
    };
    /**
     * Retrieves billing countries
     */
    /**
     * Retrieves billing countries
     * @return {?}
     */
    UserService.prototype.loadBillingCountries = /**
     * Retrieves billing countries
     * @return {?}
     */
    function () {
        return this.store.dispatch(new LoadBillingCountries());
    };
    /**
     * Cleaning order list
     */
    /**
     * Cleaning order list
     * @return {?}
     */
    UserService.prototype.clearOrderList = /**
     * Cleaning order list
     * @return {?}
     */
    function () {
        this.store.dispatch(new ClearUserOrders());
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return UserService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserStoreModule = /** @class */ (function () {
    function UserStoreModule() {
    }
    UserStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        StateModule,
                        StoreModule.forFeature(USER_FEATURE, reducerToken$8, { metaReducers: metaReducers$5 }),
                        EffectsModule.forFeature(effects$6),
                        RouterModule
                    ],
                    providers: [reducerProvider$8]
                },] }
    ];
    return UserStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [UserOccModule, UserStoreModule],
                    providers: [UserService]
                },] }
    ];
    return UserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, occCartService, occOrderService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occCartService = occCartService;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(ADD_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .createAddressOnCart(payload.userId, payload.cartId, payload.address)
                .pipe(mergeMap(function (address) {
                address['titleCode'] = payload.address.titleCode;
                return [
                    new LoadUserAddresses(payload.userId),
                    new SetDeliveryAddress({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        address: address
                    })
                ];
            }), catchError(function (error) { return of(new AddDeliveryAddressFail(error)); }));
        }));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(SET_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .setDeliveryAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(map(function () { return new SetDeliveryAddressSuccess(payload.address); }), catchError(function (error) { return of(new SetDeliveryAddressFail(error)); }));
        }));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(LOAD_SUPPORTED_DELIVERY_MODES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .getSupportedDeliveryModes(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                return new LoadSupportedDeliveryModesSuccess(data);
            }), catchError(function (error) {
                return of(new LoadSupportedDeliveryModesFail(error));
            }));
        }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(SET_DELIVERY_MODE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .setDeliveryMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(map(function () { return new SetDeliveryModeSuccess(payload.selectedModeId); }), catchError(function (error) { return of(new SetDeliveryModeFail(error)); }));
        }));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CREATE_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            // get information for creating a subscription directly with payment provider
            return _this.occCartService
                .getPaymentProviderSubInfo(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                /** @type {?} */
                var labelsMap = _this.convertToMap(data.mappingLabels.entry);
                return {
                    url: data.postUrl,
                    parameters: _this.getParamsForPaymentProvider(payload.paymentDetails, data.parameters.entry, labelsMap),
                    mappingLabels: labelsMap
                };
            }), mergeMap(function (sub) {
                // create a subscription directly with payment provider
                return _this.occCartService
                    .createSubWithPaymentProvider(sub.url, sub.parameters)
                    .pipe(map(function (response) { return _this.extractPaymentDetailsFromHtml(response); }), mergeMap(function (fromPaymentProvider) {
                    if (!fromPaymentProvider['hasError']) {
                        // consume response from payment provider and creates payment details
                        return _this.occCartService
                            .createPaymentDetails(payload.userId, payload.cartId, _this.getPaymentSopResponseParams(payload.paymentDetails, fromPaymentProvider, sub.mappingLabels))
                            .pipe(mergeMap(function (details) {
                            return [
                                new LoadUserPaymentMethods(payload.userId),
                                new CreatePaymentDetailsSuccess(details)
                            ];
                        }), catchError(function (error) {
                            return of(new CreatePaymentDetailsFail(error));
                        }));
                    }
                    else {
                        return of(new CreatePaymentDetailsFail(fromPaymentProvider));
                    }
                }));
            }));
        }));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(SET_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occCartService
                .setPaymentDetails(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(function () {
                return new SetPaymentDetailsSuccess(payload.paymentDetails);
            }), catchError(function (error) { return of(new SetPaymentDetailsFail(error)); }));
        }));
        this.placeOrder$ = this.actions$.pipe(ofType(PLACE_ORDER), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occOrderService
                .placeOrder(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                var e_1, _a;
                try {
                    for (var _b = __values((/** @type {?} */ (data.entries))), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var entry = _c.value;
                        _this.productImageConverter.convertProduct(entry.product);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return data;
            }), switchMap(function (data) { return [
                new PlaceOrderSuccess(data),
                new AddMessage({
                    text: 'Order placed successfully',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION
                })
            ]; }), catchError(function (error) { return of(new PlaceOrderFail(error)); }));
        }));
        if (typeof DOMParser !== 'undefined') {
            this.domparser = new DOMParser();
        }
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} fromPaymentProvider
     * @param {?} mappingLabels
     * @return {?}
     */
    CheckoutEffects.prototype.getPaymentSopResponseParams = /**
     * @private
     * @param {?} paymentDetails
     * @param {?} fromPaymentProvider
     * @param {?} mappingLabels
     * @return {?}
     */
    function (paymentDetails, fromPaymentProvider, mappingLabels) {
        /** @type {?} */
        var sopResponseParams = {};
        sopResponseParams['decision'] =
            fromPaymentProvider[mappingLabels['hybris_sop_decision']];
        sopResponseParams['amount'] =
            fromPaymentProvider[mappingLabels['hybris_sop_amount']];
        sopResponseParams['currency'] =
            fromPaymentProvider[mappingLabels['hybris_sop_currency']];
        sopResponseParams['billTo_country'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_country']];
        sopResponseParams['billTo_firstName'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_firstname']];
        sopResponseParams['billTo_lastName'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_lastname']];
        sopResponseParams['billTo_street1'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_street1']];
        sopResponseParams['billTo_city'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_city']];
        sopResponseParams['billTo_postalCode'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_postalcode']];
        sopResponseParams['card_cardType'] = paymentDetails.cardType.code;
        sopResponseParams['card_accountNumber'] =
            fromPaymentProvider[mappingLabels['hybris_sop_card_number']];
        sopResponseParams['card_expirationMonth'] = paymentDetails.expiryMonth;
        sopResponseParams['card_expirationYear'] = paymentDetails.expiryYear;
        sopResponseParams['card_nameOnCard'] = paymentDetails.accountHolderName;
        sopResponseParams['defaultPayment'] = paymentDetails.defaultPayment;
        sopResponseParams['savePaymentInfo'] = true;
        sopResponseParams['reasonCode'] =
            fromPaymentProvider[mappingLabels['hybris_sop_reason_code']];
        sopResponseParams['paySubscriptionCreateReply_subscriptionID'] =
            fromPaymentProvider[mappingLabels['hybris_sop_subscriptionID']];
        if (mappingLabels['hybris_sop_uses_public_signature'] === 'true') {
            sopResponseParams['paySubscriptionCreateReply_subscriptionIDPublicSignature'] = fromPaymentProvider[mappingLabels['hybris_sop_public_signature']];
        }
        return sopResponseParams;
    };
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    CheckoutEffects.prototype.getParamsForPaymentProvider = /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    function (paymentDetails, parameters, mappingLabels) {
        /** @type {?} */
        var params = this.convertToMap(parameters);
        params[mappingLabels['hybris_account_holder_name']] =
            paymentDetails.accountHolderName;
        params[mappingLabels['hybris_card_type']] = paymentDetails.cardType.code;
        params[mappingLabels['hybris_card_number']] = paymentDetails.cardNumber;
        if (mappingLabels['hybris_combined_expiry_date'] === 'true') {
            params[mappingLabels['hybris_card_expiry_date']] =
                paymentDetails.expiryMonth +
                    mappingLabels['hybris_separator_expiry_date'] +
                    paymentDetails.expiryYear;
        }
        else {
            params[mappingLabels['hybris_card_expiration_month']] =
                paymentDetails.expiryMonth;
            params[mappingLabels['hybris_card_expiration_year']] =
                paymentDetails.expiryYear;
        }
        params[mappingLabels['hybris_card_cvn']] = paymentDetails.cvn;
        // billing address
        params[mappingLabels['hybris_billTo_country']] =
            paymentDetails.billingAddress.country.isocode;
        params[mappingLabels['hybris_billTo_firstname']] =
            paymentDetails.billingAddress.firstName;
        params[mappingLabels['hybris_billTo_lastname']] =
            paymentDetails.billingAddress.lastName;
        params[mappingLabels['hybris_billTo_street1']] =
            paymentDetails.billingAddress.line1 +
                ' ' +
                paymentDetails.billingAddress.line2;
        params[mappingLabels['hybris_billTo_city']] =
            paymentDetails.billingAddress.town;
        params[mappingLabels['hybris_billTo_postalcode']] =
            paymentDetails.billingAddress.postalCode;
        return params;
    };
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    CheckoutEffects.prototype.extractPaymentDetailsFromHtml = /**
     * @private
     * @param {?} html
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var domdoc = this.domparser.parseFromString(html, 'text/xml');
        /** @type {?} */
        var responseForm = domdoc.getElementsByTagName('form')[0];
        /** @type {?} */
        var inputs = responseForm.getElementsByTagName('input');
        /** @type {?} */
        var values = {};
        for (var i = 0; inputs[i]; i++) {
            /** @type {?} */
            var input = inputs[i];
            if (input.getAttribute('name') !== '{}' &&
                input.getAttribute('value') !== '') {
                values[input.getAttribute('name')] = input.getAttribute('value');
            }
        }
        // rejected for some reason
        if (values['decision'] !== 'ACCEPT') {
            /** @type {?} */
            var reason_1 = { hasError: true };
            Object.keys(values).forEach(function (name) {
                if (name === 'reasonCode' || name.startsWith('InvalidField')) {
                    reason_1[name] = values[name];
                }
            });
            return reason_1;
        }
        return values;
    };
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    CheckoutEffects.prototype.convertToMap = /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    function (paramList) {
        return paramList.reduce(function (result, item) {
            /** @type {?} */
            var key = item.key;
            result[key] = item.value;
            return result;
        }, {});
    };
    CheckoutEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCartService },
        { type: OccOrderService },
        { type: ProductImageConverterService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CheckoutEffects.prototype, "placeOrder$", void 0);
    return CheckoutEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardTypesEffects = /** @class */ (function () {
    function CardTypesEffects(actions$, occMiscsService) {
        var _this = this;
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadCardTypes$ = this.actions$.pipe(ofType(LOAD_CARD_TYPES), switchMap(function () {
            return _this.occMiscsService.loadCardTypes().pipe(map(function (data) { return new LoadCardTypesSuccess(data.cardTypes); }), catchError(function (error) { return of(new LoadCardTypesFail(error)); }));
        }));
    }
    CardTypesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CardTypesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccMiscsService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], CardTypesEffects.prototype, "loadCardTypes$", void 0);
    return CardTypesEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddressVerificationEffect = /** @class */ (function () {
    function AddressVerificationEffect(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.verifyAddress$ = this.actions$.pipe(ofType(VERIFY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occUserService.verifyAddress(payload.userId, payload.address).pipe(map(function (data) {
                return new VerifyAddressSuccess(data);
            }), catchError(function (error) { return of(new VerifyAddressFail(error)); }));
        }));
    }
    AddressVerificationEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressVerificationEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
    return AddressVerificationEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$7 = [
    CheckoutEffects,
    AddressVerificationEffect,
    CardTypesEffects
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutService = /** @class */ (function () {
    function CheckoutService(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get supported delivery modes
     */
    /**
     * Get supported delivery modes
     * @return {?}
     */
    CheckoutService.prototype.getSupportedDeliveryModes = /**
     * Get supported delivery modes
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getSupportedDeliveryModes));
    };
    /**
     * Get selected delivery mode
     */
    /**
     * Get selected delivery mode
     * @return {?}
     */
    CheckoutService.prototype.getSelectedDeliveryMode = /**
     * Get selected delivery mode
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getSelectedDeliveryMode));
    };
    /**
     * Get selected delivery mode code
     */
    /**
     * Get selected delivery mode code
     * @return {?}
     */
    CheckoutService.prototype.getSelectedDeliveryModeCode = /**
     * Get selected delivery mode code
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getSelectedCode));
    };
    /**
     * Get card types
     */
    /**
     * Get card types
     * @return {?}
     */
    CheckoutService.prototype.getCardTypes = /**
     * Get card types
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getAllCardTypes));
    };
    /**
     * Get delivery address
     */
    /**
     * Get delivery address
     * @return {?}
     */
    CheckoutService.prototype.getDeliveryAddress = /**
     * Get delivery address
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getDeliveryAddress$1));
    };
    /**
     * Get address verification results
     */
    /**
     * Get address verification results
     * @return {?}
     */
    CheckoutService.prototype.getAddressVerificationResults = /**
     * Get address verification results
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getAddressVerificationResults$1), filter(function (results) { return Object.keys(results).length !== 0; }));
    };
    /**
     * Get payment details
     */
    /**
     * Get payment details
     * @return {?}
     */
    CheckoutService.prototype.getPaymentDetails = /**
     * Get payment details
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getPaymentDetails$1));
    };
    /**
     * Get order details
     */
    /**
     * Get order details
     * @return {?}
     */
    CheckoutService.prototype.getOrderDetails = /**
     * Get order details
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getCheckoutOrderDetails));
    };
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
     */
    /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    CheckoutService.prototype.createAndSetAddress = /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new AddDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                address: address
            }));
        }
    };
    /**
     * Load supported delivery modes
     */
    /**
     * Load supported delivery modes
     * @return {?}
     */
    CheckoutService.prototype.loadSupportedDeliveryModes = /**
     * Load supported delivery modes
     * @return {?}
     */
    function () {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new LoadSupportedDeliveryModes({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId
            }));
        }
    };
    /**
     * Set delivery mode
     * @param mode : The delivery mode to be set
     */
    /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    CheckoutService.prototype.setDeliveryMode = /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    function (mode) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetDeliveryMode({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                selectedModeId: mode
            }));
        }
    };
    /**
     * Load the supported card types
     */
    /**
     * Load the supported card types
     * @return {?}
     */
    CheckoutService.prototype.loadSupportedCardTypes = /**
     * Load the supported card types
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new LoadCardTypes());
    };
    /**
     * Create payment details using the given paymentDetails param
     * @param paymentDetails: the PaymentDetails to be created
     */
    /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    CheckoutService.prototype.createPaymentDetails = /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CreatePaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                paymentDetails: paymentDetails
            }));
        }
    };
    /**
     * Places an order
     */
    /**
     * Places an order
     * @return {?}
     */
    CheckoutService.prototype.placeOrder = /**
     * Places an order
     * @return {?}
     */
    function () {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId
            }));
        }
    };
    /**
     * Verifies the address
     * @param address : the address to be verified
     */
    /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    CheckoutService.prototype.verifyAddress = /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new VerifyAddress({
                userId: this.cartData.userId,
                address: address
            }));
        }
    };
    /**
     * Set delivery address
     * @param address : The address to be set
     */
    /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    CheckoutService.prototype.setDeliveryAddress = /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                address: address
            }));
        }
    };
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    CheckoutService.prototype.setPaymentDetails = /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    function (paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetPaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                paymentDetails: paymentDetails
            }));
        }
    };
    /**
     * Clear address verification results
     */
    /**
     * Clear address verification results
     * @return {?}
     */
    CheckoutService.prototype.clearAddressVerificationResults = /**
     * Clear address verification results
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new ClearAddressVerificationResults());
    };
    /**
     * Clear checkout data
     */
    /**
     * Clear checkout data
     * @return {?}
     */
    CheckoutService.prototype.clearCheckoutData = /**
     * Clear checkout data
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new ClearCheckoutData());
    };
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    CheckoutService.prototype.clearCheckoutStep = /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    function (stepNumber) {
        this.checkoutStore.dispatch(new ClearCheckoutStep(stepNumber));
    };
    /**
     * @private
     * @return {?}
     */
    CheckoutService.prototype.actionAllowed = /**
     * @private
     * @return {?}
     */
    function () {
        return this.cartData.userId !== ANONYMOUS_USERID;
    };
    CheckoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
    return CheckoutService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutStoreModule = /** @class */ (function () {
    function CheckoutStoreModule() {
    }
    CheckoutStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(CHECKOUT_FEATURE, reducerToken$6, { metaReducers: metaReducers$4 }),
                        EffectsModule.forFeature(effects$7)
                    ],
                    providers: [reducerProvider$6]
                },] }
    ];
    return CheckoutStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultCmsModuleConfig = {
    defaultPageIdForType: {
        ProductPage: ['productDetails'],
        CategoryPage: ['productList', 'productGrid', 'category']
    },
    cmsComponents: {
        CMSTabParagraphComponent: { selector: 'cx-paragraph' }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutPageTitleResolver = /** @class */ (function (_super) {
    __extends(CheckoutPageTitleResolver, _super);
    function CheckoutPageTitleResolver(routingService, cartService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.cartService = cartService;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    CheckoutPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        return this.cartService
            .getActive()
            .pipe(map(function (cart) { return "Checkout " + cart.totalItems + " items"; }));
    };
    CheckoutPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CheckoutPageTitleResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function CheckoutPageTitleResolver_Factory() { return new CheckoutPageTitleResolver(inject(RoutingService), inject(CartService)); }, token: CheckoutPageTitleResolver, providedIn: "root" });
    return CheckoutPageTitleResolver;
}(PageTitleResolver));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CheckoutStoreModule],
                    providers: [
                        CheckoutService,
                        {
                            provide: PageTitleResolver,
                            useExisting: CheckoutPageTitleResolver,
                            multi: true
                        }
                    ]
                },] }
    ];
    return CheckoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmartEditService = /** @class */ (function () {
    function SmartEditService(cmsService, routingService, winRef) {
        var _this = this;
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            var window_1 = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window_1.smartedit = window_1.smartedit || {};
            window_1.smartedit.renderComponent = function (componentId, componentType, parentId) {
                return _this.renderComponent(componentId, componentType, parentId);
            };
            // reprocess page
            window_1.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    Object.defineProperty(SmartEditService.prototype, "cmsTicketId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cmsTicketId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.getCmsTicket = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
            .pipe(takeWhile(function (_a) {
            var _b = __read(_a, 1), cmsPage = _b[0];
            return cmsPage === undefined;
        }))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), routerState = _b[1];
            if (routerState.state && !_this._cmsTicketId) {
                _this._cmsTicketId = routerState.state.queryParams['cmsTicketId'];
                if (_this._cmsTicketId) {
                    _this.cmsService.launchInSmartEdit = true;
                }
            }
        });
    };
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.addPageContract = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.cmsService.getCurrentPage().subscribe(function (cmsPage) {
            if (cmsPage && _this._cmsTicketId) {
                /** @type {?} */
                var previousContract_1 = [];
                Array.from(document.body.classList).forEach(function (attr) {
                    return previousContract_1.push(attr);
                });
                previousContract_1.forEach(function (attr) { return document.body.classList.remove(attr); });
                document.body.classList.add("smartedit-page-uid-" + cmsPage.pageId);
                document.body.classList.add("smartedit-page-uuid-" + cmsPage.uuid);
                document.body.classList.add("smartedit-catalog-version-uuid-" + cmsPage.catalogUuid);
            }
        });
    };
    /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    SmartEditService.prototype.renderComponent = /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    function (componentId, componentType, parentId) {
        if (componentId) {
            // without parentId, it is slot
            if (!parentId) {
                this.cmsService.refreshLatestPage();
            }
            else if (componentType) {
                this.cmsService.refreshComponent(componentId);
            }
        }
        return true;
    };
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.reprocessPage = /**
     * @protected
     * @return {?}
     */
    function () {
        // TODO: reprocess page API
    };
    SmartEditService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SmartEditService.ctorParameters = function () { return [
        { type: CmsService },
        { type: RoutingService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SmartEditService.ngInjectableDef = defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(inject(CmsService), inject(RoutingService), inject(WindowRef)); }, token: SmartEditService, providedIn: "root" });
    return SmartEditService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsTicketInterceptor = /** @class */ (function () {
    function CmsTicketInterceptor(service) {
        this.service = service;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    CmsTicketInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (request.url.indexOf('/cms/') > -1 && this.service.cmsTicketId) {
            request = request.clone({
                setParams: {
                    cmsTicketId: this.service.cmsTicketId
                }
            });
        }
        return next.handle(request);
    };
    CmsTicketInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CmsTicketInterceptor.ctorParameters = function () { return [
        { type: SmartEditService }
    ]; };
    return CmsTicketInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var interceptors$3 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CmsTicketInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmartEditModule = /** @class */ (function () {
    function SmartEditModule() {
    }
    /**
     * @return {?}
     */
    SmartEditModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SmartEditModule,
            providers: __spread(interceptors$3)
        };
    };
    SmartEditModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return SmartEditModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STORES_ENDPOINT = 'stores';
var OccStoreFinderService = /** @class */ (function () {
    function OccStoreFinderService(http, occModuleConfig) {
        this.http = http;
        this.occModuleConfig = occModuleConfig;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderService.prototype.findStores = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude);
    };
    /**
     * @return {?}
     */
    OccStoreFinderService.prototype.storesCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http
            .get(storeCountUrl)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    OccStoreFinderService.prototype.findStoreById = /**
     * @param {?} storeId
     * @return {?}
     */
    function (storeId) {
        /** @type {?} */
        var storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        var params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderService.prototype.callOccFindStores = /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        var url = this.getStoresEndpoint();
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=stores(name,displayName,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),' +
                'geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)'
        });
        if (longitudeLatitude) {
            params = params.set('longitude', String(longitudeLatitude.longitude));
            params = params.set('latitude', String(longitudeLatitude.latitude));
        }
        else {
            params = params.set('query', query);
        }
        if (searchConfig.pageSize) {
            params = params.set('pageSize', String(searchConfig.pageSize));
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', String(searchConfig.currentPage));
        }
        if (searchConfig.sort) {
            params = params.set('sort', searchConfig.sort);
        }
        return this.http.get(url, { params: params }).pipe(catchError(function (error) {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    };
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    OccStoreFinderService.prototype.getStoresEndpoint = /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var baseUrl = this.occModuleConfig.server.baseUrl +
            this.occModuleConfig.server.occPrefix +
            this.occModuleConfig.site.baseSite +
            '/' +
            STORES_ENDPOINT;
        return url ? baseUrl + '/' + url : baseUrl;
    };
    OccStoreFinderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccStoreFinderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccStoreFinderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderOccModule = /** @class */ (function () {
    function StoreFinderOccModule() {
    }
    StoreFinderOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, OccModule],
                    providers: [OccStoreFinderService]
                },] }
    ];
    return StoreFinderOccModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StoreFinderConfig = /** @class */ (function () {
    function StoreFinderConfig() {
    }
    return StoreFinderConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STORE_FINDER_FEATURE = 'stores';
/** @type {?} */
var STORE_FINDER_DATA = '[StoreFinder] Store Finder Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ON_HOLD = '[StoreFinder] On Hold';
/** @type {?} */
var FIND_STORES = '[StoreFinder] Find Stores';
/** @type {?} */
var FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
/** @type {?} */
var FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
/** @type {?} */
var FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
/** @type {?} */
var FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
/** @type {?} */
var FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
var OnHold = /** @class */ (function (_super) {
    __extends(OnHold, _super);
    function OnHold() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = ON_HOLD;
        return _this;
    }
    return OnHold;
}(LoaderLoadAction));
var FindStores = /** @class */ (function (_super) {
    __extends(FindStores, _super);
    function FindStores(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORES;
        return _this;
    }
    return FindStores;
}(LoaderLoadAction));
var FindStoresFail = /** @class */ (function (_super) {
    __extends(FindStoresFail, _super);
    function FindStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = FIND_STORES_FAIL;
        return _this;
    }
    return FindStoresFail;
}(LoaderFailAction));
var FindStoresSuccess = /** @class */ (function (_super) {
    __extends(FindStoresSuccess, _super);
    function FindStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORES_SUCCESS;
        return _this;
    }
    return FindStoresSuccess;
}(LoaderSuccessAction));
var FindStoreById = /** @class */ (function (_super) {
    __extends(FindStoreById, _super);
    function FindStoreById(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID;
        return _this;
    }
    return FindStoreById;
}(LoaderLoadAction));
var FindStoreByIdFail = /** @class */ (function (_super) {
    __extends(FindStoreByIdFail, _super);
    function FindStoreByIdFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID_FAIL;
        return _this;
    }
    return FindStoreByIdFail;
}(LoaderFailAction));
var FindStoreByIdSuccess = /** @class */ (function (_super) {
    __extends(FindStoreByIdSuccess, _super);
    function FindStoreByIdSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = FIND_STORE_BY_ID_SUCCESS;
        return _this;
    }
    return FindStoreByIdSuccess;
}(LoaderSuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VIEW_ALL_STORES = '[StoreFinder] View All Stores';
/** @type {?} */
var VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
/** @type {?} */
var VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
var ViewAllStores = /** @class */ (function (_super) {
    __extends(ViewAllStores, _super);
    function ViewAllStores() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = VIEW_ALL_STORES;
        return _this;
    }
    return ViewAllStores;
}(LoaderLoadAction));
var ViewAllStoresFail = /** @class */ (function (_super) {
    __extends(ViewAllStoresFail, _super);
    function ViewAllStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_FAIL;
        return _this;
    }
    return ViewAllStoresFail;
}(LoaderFailAction));
var ViewAllStoresSuccess = /** @class */ (function (_super) {
    __extends(ViewAllStoresSuccess, _super);
    function ViewAllStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_SUCCESS;
        return _this;
    }
    return ViewAllStoresSuccess;
}(LoaderSuccessAction));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getFindStoresState = createSelector(getStoreFinderState, function (storesState) { return storesState.findStores; });
/** @type {?} */
var getFindStoresEntities = createSelector(getFindStoresState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getStoresLoading = createSelector(getFindStoresState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getViewAllStoresState = createSelector(getStoreFinderState, function (storesState) { return storesState.viewAllStores; });
/** @type {?} */
var getViewAllStoresEntities = createSelector(getViewAllStoresState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
var getViewAllStoresLoading = createSelector(getViewAllStoresState, function (state) { return loaderLoadingSelector(state); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExternalJsFileLoader = /** @class */ (function () {
    function ExternalJsFileLoader(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param src URL for the script to be loaded
     * @param params additional parameters to be attached to the given URL
     * @param callback a function to be invoked after the script has been loaded
     */
    /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    ExternalJsFileLoader.prototype.load = /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    function (src, params, callback) {
        /** @type {?} */
        var script = this.document.createElement('script');
        script.type = 'text/javascript';
        if (params) {
            script.src = src + this.parseParams(params);
        }
        else {
            script.src = src;
        }
        script.async = true;
        script.defer = true;
        if (callback) {
            script.addEventListener('load', callback);
        }
        document.head.appendChild(script);
    };
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @param params object containing parameters
     */
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    ExternalJsFileLoader.prototype.parseParams = /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var keysArray = Object.keys(params);
        if (keysArray.length > 0) {
            result =
                '?' +
                    keysArray
                        .map(function (key) { return encodeURI(key) + '=' + encodeURI(params[key]); })
                        .join('&');
        }
        return result;
    };
    ExternalJsFileLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ExternalJsFileLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return ExternalJsFileLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreDataService = /** @class */ (function () {
    function StoreDataService() {
        this.weekDays = {
            0: 'Sun',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat'
        };
    }
    /**
     * Returns store latitude
     * @param location store location
     */
    /**
     * Returns store latitude
     * @param {?} location store location
     * @return {?}
     */
    StoreDataService.prototype.getStoreLatitude = /**
     * Returns store latitude
     * @param {?} location store location
     * @return {?}
     */
    function (location) {
        return location.geoPoint.latitude;
    };
    /**
     * Returns store longitude
     * @param location store location
     */
    /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    StoreDataService.prototype.getStoreLongitude = /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    function (location) {
        return location.geoPoint.longitude;
    };
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    StoreDataService.prototype.getStoreClosingTime = /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    function (location, date) {
        /** @type {?} */
        var requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        var result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            var closingHour = requestedDaySchedule.closingTime.formattedHour.split(':')[0];
            /** @type {?} */
            var closingMinute = requestedDaySchedule.closingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(closingHour);
            result.setMinutes(closingMinute);
        }
        return result;
    };
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    StoreDataService.prototype.getStoreOpeningTime = /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    function (location, date) {
        /** @type {?} */
        var requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        var result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            var openingHour = requestedDaySchedule.openingTime.formattedHour.split(':')[0];
            /** @type {?} */
            var openingMinutes = requestedDaySchedule.openingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(openingHour);
            result.setMinutes(openingMinutes);
        }
        return result;
    };
    /**
     * Returns information about store open status
     * @param location store location
     * @param date date to compare
     */
    /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    StoreDataService.prototype.isStoreOpen = /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    function (location, date) {
        /** @type {?} */
        var requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        var result = false;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            var openingDate = this.getStoreOpeningTime(location, date);
            /** @type {?} */
            var closingDate = this.getStoreClosingTime(location, date);
            result = date > openingDate && date < closingDate;
        }
        return result;
    };
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    /**
     * Extracts schedule from the given location for the given date
     * @private
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    StoreDataService.prototype.getSchedule = /**
     * Extracts schedule from the given location for the given date
     * @private
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    function (location, date) {
        /** @type {?} */
        var weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find(function (weekDayOpeningListItem) { return weekDayOpeningListItem.weekDay === weekday; });
    };
    StoreDataService.decorators = [
        { type: Injectable }
    ];
    return StoreDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleMapRendererService = /** @class */ (function () {
    function GoogleMapRendererService(config, externalJsFileLoader, storeDataService) {
        this.config = config;
        this.externalJsFileLoader = externalJsFileLoader;
        this.storeDataService = storeDataService;
        this.googleMap = null;
    }
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param mapElement HTML element inside of which the map will be displayed
     * @param locations array containign geo data to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    GoogleMapRendererService.prototype.renderMap = /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    function (mapElement, locations, selectMarkerHandler) {
        var _this = this;
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, function () {
                _this.drawMap(mapElement, locations, selectMarkerHandler);
            });
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    };
    /**
     * Centers the map to the given point
     * @param latitute latitude of the new center
     * @param longitude longitude of the new center
     */
    /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    GoogleMapRendererService.prototype.centerMap = /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    function (latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    };
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    GoogleMapRendererService.prototype.defineMapCenter = /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    function (locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    };
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    GoogleMapRendererService.prototype.initMap = /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    function (mapElement, mapCenter) {
        /** @type {?} */
        var mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    };
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    GoogleMapRendererService.prototype.createMarkers = /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    function (locations, selectMarkerHandler) {
        var _this = this;
        this.markers = [];
        locations.forEach(function (element, index) {
            /** @type {?} */
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(_this.storeDataService.getStoreLatitude(element), _this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + ''
            });
            _this.markers.push(marker);
            marker.setMap(_this.googleMap);
            marker.addListener('mouseover', function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            });
            marker.addListener('mouseout', function () {
                marker.setAnimation(null);
            });
            if (selectMarkerHandler) {
                marker.addListener('click', function () {
                    selectMarkerHandler(index);
                });
            }
        });
    };
    /**
     * Initialize and draw the map
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    GoogleMapRendererService.prototype.drawMap = /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    function (mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    };
    GoogleMapRendererService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleMapRendererService.ctorParameters = function () { return [
        { type: StoreFinderConfig },
        { type: ExternalJsFileLoader },
        { type: StoreDataService }
    ]; };
    return GoogleMapRendererService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FindStoresEffect = /** @class */ (function () {
    function FindStoresEffect(actions$, occStoreFinderService) {
        var _this = this;
        this.actions$ = actions$;
        this.occStoreFinderService = occStoreFinderService;
        this.findStores$ = this.actions$.pipe(ofType(FIND_STORES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occStoreFinderService
                .findStores(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
                .pipe(map(function (data) {
                data.geolocation = payload.longitudeLatitude;
                if (payload.countryIsoCode) {
                    data.stores = data.stores.filter(function (store) {
                        return store.address.country.isocode === payload.countryIsoCode;
                    });
                }
                return new FindStoresSuccess(data);
            }), catchError(function (error) { return of(new FindStoresFail(error)); }));
        }));
        this.findStoreById$ = this.actions$.pipe(ofType(FIND_STORE_BY_ID), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occStoreFinderService.findStoreById(payload.storeId).pipe(map(function (data) { return new FindStoreByIdSuccess(data); }), catchError(function (error) { return of(new FindStoreByIdFail(error)); }));
        }));
    }
    FindStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FindStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccStoreFinderService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FindStoresEffect.prototype, "findStores$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], FindStoresEffect.prototype, "findStoreById$", void 0);
    return FindStoresEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewAllStoresEffect = /** @class */ (function () {
    function ViewAllStoresEffect(actions$, occStoreFinderService) {
        var _this = this;
        this.actions$ = actions$;
        this.occStoreFinderService = occStoreFinderService;
        this.viewAllStores$ = this.actions$.pipe(ofType(VIEW_ALL_STORES), switchMap(function () {
            return _this.occStoreFinderService.storesCount().pipe(map(function (data) { return new ViewAllStoresSuccess(data); }), catchError(function (error) { return of(new ViewAllStoresFail(error)); }));
        }));
    }
    ViewAllStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewAllStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccStoreFinderService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
    return ViewAllStoresEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var effects$8 = [FindStoresEffect, ViewAllStoresEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$9() {
    return {
        findStores: loaderReducer(STORE_FINDER_DATA),
        viewAllStores: loaderReducer(STORE_FINDER_DATA)
    };
}
/** @type {?} */
var reducerToken$9 = new InjectionToken('StoreFinderReducers');
/** @type {?} */
var reducerProvider$9 = {
    provide: reducerToken$9,
    useFactory: getReducers$9
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderService = /** @class */ (function () {
    function StoreFinderService(store, winRef) {
        this.store = store;
        this.winRef = winRef;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     */
    /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    StoreFinderService.prototype.getStoresLoading = /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getStoresLoading));
    };
    /**
     * Returns observable for store's entities
     */
    /**
     * Returns observable for store's entities
     * @return {?}
     */
    StoreFinderService.prototype.getFindStoresEntities = /**
     * Returns observable for store's entities
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getFindStoresEntities));
    };
    /**
     * Returns boolean observable for view all store's loading state
     */
    /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    StoreFinderService.prototype.getViewAllStoresLoading = /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getViewAllStoresLoading));
    };
    /**
     * Returns observable for view all store's entities
     */
    /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    StoreFinderService.prototype.getViewAllStoresEntities = /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getViewAllStoresEntities));
    };
    /**
     * Store finding action functionality
     * @param queryText text query
     * @param longitudeLatitude longitude and latitude coordinates
     * @param searchConfig search configuration
     * @param countryIsoCode country ISO code
     */
    /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    StoreFinderService.prototype.findStoresAction = /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    function (queryText, longitudeLatitude, searchConfig, countryIsoCode) {
        this.store.dispatch(new FindStores({
            queryText: queryText,
            longitudeLatitude: longitudeLatitude,
            searchConfig: searchConfig,
            countryIsoCode: countryIsoCode
        }));
    };
    /**
     * View all stores
     */
    /**
     * View all stores
     * @return {?}
     */
    StoreFinderService.prototype.viewAllStores = /**
     * View all stores
     * @return {?}
     */
    function () {
        this.clearWatchGeolocation(new ViewAllStores());
    };
    /**
     * View all stores by id
     * @param storeId store id
     */
    /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    StoreFinderService.prototype.viewStoreById = /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    function (storeId) {
        this.clearWatchGeolocation(new FindStoreById({ storeId: storeId }));
    };
    /**
     * Find all stores
     * @param queryText text query
     * @param useMyLocation use current location
     */
    /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    StoreFinderService.prototype.findStores = /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    function (queryText, useMyLocation) {
        var _this = this;
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new OnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition(function (pos) {
                /** @type {?} */
                var longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude
                };
                _this.clearWatchGeolocation(new FindStores({ queryText: queryText, longitudeLatitude: longitudeLatitude }));
            });
        }
        else {
            this.clearWatchGeolocation(new FindStores({ queryText: queryText }));
        }
    };
    /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    StoreFinderService.prototype.clearWatchGeolocation = /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    function (callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    };
    StoreFinderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StoreFinderService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
    ]; };
    return StoreFinderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderStoreModule = /** @class */ (function () {
    function StoreFinderStoreModule() {
    }
    StoreFinderStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreFinderOccModule,
                        StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken$9),
                        EffectsModule.forFeature(effects$8)
                    ],
                    providers: [reducerProvider$9]
                },] }
    ];
    return StoreFinderStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultStoreFinderConfig = {
    googleMaps: {
        apiUrl: 'https://maps.googleapis.com/maps/api/js',
        apiKey: '',
        scale: 12,
        selectedMarkerScale: 16
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$3 = defaultStoreFinderConfig;
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
    }
    StoreFinderCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfig(defaultStoreFinderConfig),
                        StoreFinderStoreModule,
                        StoreFinderOccModule
                    ],
                    providers: [
                        StoreFinderService,
                        StoreDataService,
                        GoogleMapRendererService,
                        ExternalJsFileLoader,
                        { provide: StoreFinderConfig, useValue: ɵ0$3 }
                    ]
                },] }
    ];
    return StoreFinderCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CxApiModule = /** @class */ (function () {
    function CxApiModule() {
    }
    CxApiModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return CxApiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cms, routing, currency, language, product, productSearch, productReview, user) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.user = user;
    }
    CxApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CxApiService.ctorParameters = function () { return [
        { type: AuthService, decorators: [{ type: Optional }] },
        { type: CmsService, decorators: [{ type: Optional }] },
        { type: RoutingService, decorators: [{ type: Optional }] },
        { type: CurrencyService, decorators: [{ type: Optional }] },
        { type: LanguageService, decorators: [{ type: Optional }] },
        { type: ProductService, decorators: [{ type: Optional }] },
        { type: ProductSearchService, decorators: [{ type: Optional }] },
        { type: ProductReviewService, decorators: [{ type: Optional }] },
        { type: UserService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(inject(AuthService, 8), inject(CmsService, 8), inject(RoutingService, 8), inject(CurrencyService, 8), inject(LanguageService, 8), inject(ProductService, 8), inject(ProductSearchService, 8), inject(ProductReviewService, 8), inject(UserService, 8)); }, token: CxApiService, providedIn: "root" });
    return CxApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StripHtmlPipe = /** @class */ (function () {
    function StripHtmlPipe() {
    }
    /**
     * @param {?} product
     * @return {?}
     */
    StripHtmlPipe.prototype.transform = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var productClone = Object.assign({}, product);
        productClone.name = product.name.replace(/<[^>]*>/g, '');
        return productClone;
    };
    StripHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'stripHtml' },] }
    ];
    return StripHtmlPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StripHtmlModule = /** @class */ (function () {
    function StripHtmlModule() {
    }
    StripHtmlModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StripHtmlPipe],
                    exports: [StripHtmlPipe]
                },] }
    ];
    return StripHtmlModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [StripHtmlModule]
                },] }
    ];
    return PipeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule.decorators = [
        { type: NgModule, args: [{
                    imports: [PipeModule]
                },] }
    ];
    return UtilModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CREATE_CART, CREATE_CART_FAIL, CREATE_CART_SUCCESS, LOAD_CART, LOAD_CART_FAIL, LOAD_CART_SUCCESS, MERGE_CART, MERGE_CART_SUCCESS, CreateCart, CreateCartFail, CreateCartSuccess, LoadCart, LoadCartFail, LoadCartSuccess, MergeCart, MergeCartSuccess, ADD_ENTRY, ADD_ENTRY_SUCCESS, ADD_ENTRY_FAIL, REMOVE_ENTRY, REMOVE_ENTRY_SUCCESS, REMOVE_ENTRY_FAIL, UPDATE_ENTRY, UPDATE_ENTRY_SUCCESS, UPDATE_ENTRY_FAIL, AddEntry, AddEntrySuccess, AddEntryFail, RemoveEntry, RemoveEntrySuccess, RemoveEntryFail, UpdateEntry, UpdateEntrySuccess, UpdateEntryFail, getCartContentSelector, getRefreshSelector, getEntriesSelector, getCartMergeCompleteSelector, getCartsState, getActiveCartState, getCartState, getCartContent, getRefresh, getLoaded, getCartMergeComplete, getEntriesMap, getEntrySelectorFactory, getEntries, CART_FEATURE, CART_DATA, services$1 as services, CartService, ANONYMOUS_USERID, CartDataService, OccCartService, CartOccModule, CartModule, provideConfig, provideConfigFactory, configurationFactory, Config, ConfigChunk, ConfigModule, ServerConfig, defaultServerConfig, serverConfigFromMetaTagFactory, SERVER_BASE_URL_META_TAG_NAME, SERVER_BASE_URL_META_TAG_PLACEHOLDER, serverConfigValidator, provideConfigValidator, validateConfig, ConfigValidatorToken, StateModule, entityMeta, entityRemoveMeta, entityRemoveAllMeta, ENTITY_REMOVE_ACTION, ENTITY_REMOVE_ALL_ACTION, EntityRemoveAction, EntityRemoveAllAction, entityReducer, initialEntityState, entitySelector, loadMeta, failMeta, successMeta, resetMeta, LOADER_LOAD_ACTION, LOADER_FAIL_ACTION, LOADER_SUCCESS_ACTION, LOADER_RESET_ACTION, LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, loaderReducer, initialLoaderState, loaderValueSelector, loaderLoadingSelector, loaderErrorSelector, loaderSuccessSelector, ofLoaderLoad, ofLoaderFail, ofLoaderSuccess, entityLoadMeta, entityFailMeta, entitySuccessMeta, entityResetMeta, ENTITY_LOAD_ACTION, ENTITY_FAIL_ACTION, ENTITY_SUCCESS_ACTION, ENTITY_RESET_ACTION, EntityLoadAction, EntityFailAction, EntitySuccessAction, EntityResetAction, entityLoaderReducer, entityStateSelector, entityValueSelector, entityLoadingSelector, entityErrorSelector, entitySuccessSelector, getStateSlice, StorageSyncType, StateConfig, metaReducersFactory, META_REDUCER, OccProductService, OccProductSearchService, ProductOccModule, PRODUCT_FEATURE, PRODUCT_DETAIL_ENTITY, ProductImageConverterService, ProductReferenceConverterService, ProductConverterModule, SEARCH_PRODUCTS, SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_SUCCESS, GET_PRODUCT_SUGGESTIONS, GET_PRODUCT_SUGGESTIONS_SUCCESS, GET_PRODUCT_SUGGESTIONS_FAIL, CLEAN_PRODUCT_SEARCH, SearchProducts, SearchProductsFail, SearchProductsSuccess, GetProductSuggestions, GetProductSuggestionsSuccess, GetProductSuggestionsFail, CleanProductSearchState, LOAD_PRODUCT, LOAD_PRODUCT_FAIL, LOAD_PRODUCT_SUCCESS, LoadProduct, LoadProductFail, LoadProductSuccess, LOAD_PRODUCT_REVIEWS, LOAD_PRODUCT_REVIEWS_FAIL, LOAD_PRODUCT_REVIEWS_SUCCESS, POST_PRODUCT_REVIEW, POST_PRODUCT_REVIEW_FAIL, POST_PRODUCT_REVIEW_SUCCESS, LoadProductReviews, LoadProductReviewsFail, LoadProductReviewsSuccess, PostProductReview, PostProductReviewFail, PostProductReviewSuccess, getProductsState, getProductState, getSelectedProductsFactory, getSelectedProductStateFactory, getSelectedProductFactory, getSelectedProductLoadingFactory, getSelectedProductSuccessFactory, getSelectedProductErrorFactory, getAllProductCodes, getProductsSearchState, getSearchResults$1 as getSearchResults, getAuxSearchResults$1 as getAuxSearchResults, getProductSuggestions$1 as getProductSuggestions, getProductReviewsState, getSelectedProductReviewsFactory, ProductService, ProductSearchService, ProductReviewService, ProductModule, CategoryPageTitleResolver, ProductPageTitleResolver, SearchPageTitleResolver, LanguageService, CurrencyService, SiteContextModule, interceptors$1 as interceptors, OccSiteService, SiteContextOccModule, SiteContextInterceptor, SiteContextConfig, serviceMapFactory, ContextServiceMap, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, contextServiceMapProvider, inititializeContext, contextServiceProviders, initSiteContextRoutesHandler, siteContextParamsProviders, SITE_CONTEXT_FEATURE, LOAD_LANGUAGES, LOAD_LANGUAGES_FAIL, LOAD_LANGUAGES_SUCCESS, SET_ACTIVE_LANGUAGE, LANGUAGE_CHANGE, LoadLanguages, LoadLanguagesFail, LoadLanguagesSuccess, SetActiveLanguage, LanguageChange, LOAD_CURRENCIES, LOAD_CURRENCIES_FAIL, LOAD_CURRENCIES_SUCCESS, SET_ACTIVE_CURRENCY, CURRENCY_CHANGE, LoadCurrencies, LoadCurrenciesFail, LoadCurrenciesSuccess, SetActiveCurrency, CurrencyChange, getSiteContextState, getLanguagesState, getLanguagesEntities, getActiveLanguage, getAllLanguages, getCurrenciesState, getCurrenciesEntities, getActiveCurrency, getAllCurrencies, OccConfig, defaultOccConfig, OccModule, USE_CLIENT_TOKEN, InterceptorUtil, OccMiscsService, PriceType, ImageType, Fields, Fields1, Fields2, Fields3, Fields4, Fields5, Fields6, PageType, Fields7, Fields8, Fields9, Fields10, Fields11, Fields12, Fields13, Fields14, Fields15, Fields16, SortEnum, Fields17, Fields18, Fields19, Fields20, Fields21, Fields22, Fields23, Fields24, Fields25, Fields26, Fields27, Fields28, Fields29, Fields30, Fields31, Fields32, Fields33, Fields34, Fields35, Fields36, Fields37, Fields38, Fields39, Fields40, Fields41, Fields42, Fields43, Fields44, Fields45, Fields46, Fields47, Fields48, Fields49, Fields50, Fields51, Fields52, Fields53, Fields54, Fields55, Fields56, Fields57, Fields58, Fields59, Fields60, Fields61, Type, RoutingModule, RoutingService, PageContext, ConfigurableRoutesConfig, UrlTranslationModule, TranslateUrlPipe, ConfigurableRoutesService, initConfigurableRoutes, ConfigurableRoutesModule, RoutesConfigLoader, CHECKOUT_FEATURE, CHECKOUT_CLEAR_MISCS_DATA, CheckoutClearMiscsData, ADD_DELIVERY_ADDRESS, ADD_DELIVERY_ADDRESS_FAIL, ADD_DELIVERY_ADDRESS_SUCCESS, SET_DELIVERY_ADDRESS, SET_DELIVERY_ADDRESS_FAIL, SET_DELIVERY_ADDRESS_SUCCESS, LOAD_SUPPORTED_DELIVERY_MODES, LOAD_SUPPORTED_DELIVERY_MODES_FAIL, LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS, CLEAR_SUPPORTED_DELIVERY_MODES, SET_DELIVERY_MODE, SET_DELIVERY_MODE_FAIL, SET_DELIVERY_MODE_SUCCESS, CREATE_PAYMENT_DETAILS, CREATE_PAYMENT_DETAILS_FAIL, CREATE_PAYMENT_DETAILS_SUCCESS, SET_PAYMENT_DETAILS, SET_PAYMENT_DETAILS_FAIL, SET_PAYMENT_DETAILS_SUCCESS, PLACE_ORDER, PLACE_ORDER_FAIL, PLACE_ORDER_SUCCESS, CLEAR_CHECKOUT_STEP, CLEAR_CHECKOUT_DATA, AddDeliveryAddress, AddDeliveryAddressFail, AddDeliveryAddressSuccess, SetDeliveryAddress, SetDeliveryAddressFail, SetDeliveryAddressSuccess, LoadSupportedDeliveryModes, LoadSupportedDeliveryModesFail, LoadSupportedDeliveryModesSuccess, SetDeliveryMode, SetDeliveryModeFail, SetDeliveryModeSuccess, CreatePaymentDetails, CreatePaymentDetailsFail, CreatePaymentDetailsSuccess, SetPaymentDetails, SetPaymentDetailsFail, SetPaymentDetailsSuccess, PlaceOrder, PlaceOrderFail, PlaceOrderSuccess, ClearSupportedDeliveryModes, ClearCheckoutStep, ClearCheckoutData, LOAD_CARD_TYPES, LOAD_CARD_TYPES_FAIL, LOAD_CARD_TYPES_SUCCESS, LoadCardTypes, LoadCardTypesFail, LoadCardTypesSuccess, VERIFY_ADDRESS, VERIFY_ADDRESS_FAIL, VERIFY_ADDRESS_SUCCESS, CLEAR_ADDRESS_VERIFICATION_RESULTS, VerifyAddress, VerifyAddressFail, VerifyAddressSuccess, ClearAddressVerificationResults, getCheckoutStepsState, getDeliveryAddress$1 as getDeliveryAddress, getDeliveryMode$1 as getDeliveryMode, getSupportedDeliveryModes, getSelectedCode, getSelectedDeliveryMode, getPaymentDetails$1 as getPaymentDetails, getCheckoutOrderDetails, getCardTypesState, getCardTypesEntites$1 as getCardTypesEntites, getAllCardTypes, getAddressVerificationResultsState, getAddressVerificationResults$1 as getAddressVerificationResults, CheckoutService, CheckoutModule, CheckoutPageTitleResolver, OccUserService, OccOrderService, UserOccModule, CLEAR_MISCS_DATA, ClearMiscsData, LOAD_USER_DETAILS, LOAD_USER_DETAILS_FAIL, LOAD_USER_DETAILS_SUCCESS, LoadUserDetails, LoadUserDetailsFail, LoadUserDetailsSuccess, LOAD_USER_ADDRESSES, LOAD_USER_ADDRESSES_FAIL, LOAD_USER_ADDRESSES_SUCCESS, ADD_USER_ADDRESS, ADD_USER_ADDRESS_FAIL, ADD_USER_ADDRESS_SUCCESS, UPDATE_USER_ADDRESS, UPDATE_USER_ADDRESS_FAIL, UPDATE_USER_ADDRESS_SUCCESS, DELETE_USER_ADDRESS, DELETE_USER_ADDRESS_FAIL, DELETE_USER_ADDRESS_SUCCESS, LoadUserAddresses, LoadUserAddressesFail, LoadUserAddressesSuccess, AddUserAddress, AddUserAddressFail, AddUserAddressSuccess, UpdateUserAddress, UpdateUserAddressFail, UpdateUserAddressSuccess, DeleteUserAddress, DeleteUserAddressFail, DeleteUserAddressSuccess, LOAD_USER_PAYMENT_METHODS, LOAD_USER_PAYMENT_METHODS_FAIL, LOAD_USER_PAYMENT_METHODS_SUCCESS, SET_DEFAULT_USER_PAYMENT_METHOD, SET_DEFAULT_USER_PAYMENT_METHOD_FAIL, SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS, DELETE_USER_PAYMENT_METHOD, DELETE_USER_PAYMENT_METHOD_FAIL, DELETE_USER_PAYMENT_METHOD_SUCCESS, LoadUserPaymentMethods, LoadUserPaymentMethodsFail, LoadUserPaymentMethodsSuccess, SetDefaultUserPaymentMethod, SetDefaultUserPaymentMethodFail, SetDefaultUserPaymentMethodSuccess, DeleteUserPaymentMethod, DeleteUserPaymentMethodFail, DeleteUserPaymentMethodSuccess, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, RegisterUser, RegisterUserFail, RegisterUserSuccess, LOAD_USER_ORDERS, LOAD_USER_ORDERS_FAIL, LOAD_USER_ORDERS_SUCCESS, CLEAR_USER_ORDERS, LoadUserOrders, LoadUserOrdersFail, LoadUserOrdersSuccess, ClearUserOrders, LOAD_TITLES, LOAD_TITLES_FAIL, LOAD_TITLES_SUCCESS, LoadTitles, LoadTitlesFail, LoadTitlesSuccess, LOAD_DELIVERY_COUNTRIES, LOAD_DELIVERY_COUNTRIES_FAIL, LOAD_DELIVERY_COUNTRIES_SUCCESS, LoadDeliveryCountries, LoadDeliveryCountriesFail, LoadDeliveryCountriesSuccess, LOAD_REGIONS, LOAD_REGIONS_SUCCESS, LOAD_REGIONS_FAIL, LoadRegions, LoadRegionsFail, LoadRegionsSuccess, LOAD_ORDER_DETAILS, LOAD_ORDER_DETAILS_FAIL, LOAD_ORDER_DETAILS_SUCCESS, CLEAR_ORDER_DETAILS, LoadOrderDetails, LoadOrderDetailsFail, LoadOrderDetailsSuccess, ClearOrderDetails, LOAD_BILLING_COUNTRIES, LOAD_BILLING_COUNTRIES_FAIL, LOAD_BILLING_COUNTRIES_SUCCESS, LoadBillingCountries, LoadBillingCountriesFail, LoadBillingCountriesSuccess, effects$6 as effects, UserDetailsEffects, UserAddressesEffects, UserPaymentMethodsEffects, UserRegisterEffects, UserOrdersEffect, TitlesEffects, DeliveryCountriesEffects, RegionsEffects, OrderDetailsEffect, BillingCountriesEffect, getReducers$8 as getReducers, clearUserState, reducerToken$8 as reducerToken, reducerProvider$8 as reducerProvider, metaReducers$5 as metaReducers, getDetailsState, getDetails, getAddressesLoaderState, getAddresses, getAddressesLoading, getPaymentMethodsState, getPaymentMethods, getPaymentMethodsLoading, getOrdersState, getOrdersLoaded, getOrders, getTitlesState, getTitlesEntites, getAllTitles, titleSelectorFactory, getDeliveryCountriesState, getDeliveryCountriesEntites, getAllDeliveryCountries, countrySelectorFactory, getRegionsState, getAllRegions, getOrderState, getOrderDetails$1 as getOrderDetails, getUserState, getBillingCountriesState, getBillingCountriesEntites, getAllBillingCountries, USER_FEATURE, USER_PAYMENT_METHODS, USER_ORDERS, USER_ADDRESSES, UserService, UserModule, AuthModule, AuthConfig, AuthService, AuthGuard, NotAuthGuard, LOAD_USER_TOKEN, LOAD_USER_TOKEN_FAIL, LOAD_USER_TOKEN_SUCCESS, REFRESH_USER_TOKEN, REFRESH_USER_TOKEN_FAIL, REFRESH_USER_TOKEN_SUCCESS, LoadUserToken, LoadUserTokenFail, LoadUserTokenSuccess, RefreshUserToken, RefreshUserTokenSuccess, RefreshUserTokenFail, LOAD_CLIENT_TOKEN, LOAD_CLIENT_TOKEN_FAIL, LOAD_CLIENT_TOKEN_SUCCESS, LoadClientToken, LoadClientTokenFail, LoadClientTokenSuccess, LOGIN, LOGOUT, Login, Logout, getAuthState, getUserTokenSelector, getUserTokenState, getUserToken, getClientTokenState, AUTH_FEATURE, CLIENT_TOKEN_DATA, GLOBAL_MESSAGE_FEATURE, ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_MESSAGES_BY_TYPE, AddMessage, RemoveMessage, RemoveMessagesByType, getGlobalMessageState, getGlobalMessageEntities, GlobalMessageStoreModule, GlobalMessageService, GlobalMessageType, GlobalMessageModule, defaultCmsModuleConfig, JSP_INCLUDE_CMS_COMPONENT_TYPE, CmsConfig, OccCmsService, ComponentMapperService, DefaultPageService, CmsOccModule, CMS_FEATURE, NAVIGATION_DETAIL_ENTITY, COMPONENT_ENTITY, LOAD_PAGEDATA, LOAD_PAGEDATA_FAIL, LOAD_PAGEDATA_SUCCESS, REFRESH_LATEST_PAGE, UPDATE_LATEST_PAGE_KEY, CLEAN_PAGE_STATE, LoadPageData, LoadPageDataFail, LoadPageDataSuccess, RefreshLatestPage, UpdateLatestPageKey, CleanPageState, LOAD_COMPONENT, LOAD_COMPONENT_FAIL, LOAD_COMPONENT_SUCCESS, GET_COMPONENET_FROM_PAGE, LoadComponent, LoadComponentFail, LoadComponentSuccess, GetComponentFromPage, LOAD_NAVIGATION_ITEMS, LOAD_NAVIGATION_ITEMS_FAIL, LOAD_NAVIGATION_ITEMS_SUCCESS, LoadNavigationItems, LoadNavigationItemsFail, LoadNavigationItemsSuccess, getPageEntitiesSelector, getPageCount, getLatestPageKeySelector, getPageState, getPageEntities, getLatestPageKey, getLatestPage, currentSlotSelectorFactory, getComponentEntitiesSelector, getComponentState, getComponentEntities, componentStateSelectorFactory, componentSelectorFactory, getNavigationEntryItemState, getSelectedNavigationEntryItemState, itemsSelectorFactory, getCmsState, CmsService, PageTitleService, CmsModule, PageTitleResolver, ContentPageTitleResolver, CmsPageTitleModule, SmartEditModule, OccStoreFinderService, StoreFinderOccModule, StoreFinderConfig, ON_HOLD, FIND_STORES, FIND_STORES_FAIL, FIND_STORES_SUCCESS, FIND_STORE_BY_ID, FIND_STORE_BY_ID_FAIL, FIND_STORE_BY_ID_SUCCESS, OnHold, FindStores, FindStoresFail, FindStoresSuccess, FindStoreById, FindStoreByIdFail, FindStoreByIdSuccess, VIEW_ALL_STORES, VIEW_ALL_STORES_FAIL, VIEW_ALL_STORES_SUCCESS, ViewAllStores, ViewAllStoresFail, ViewAllStoresSuccess, getFindStoresState, getFindStoresEntities, getStoresLoading, getViewAllStoresState, getViewAllStoresEntities, getViewAllStoresLoading, STORE_FINDER_FEATURE, STORE_FINDER_DATA, ExternalJsFileLoader, GoogleMapRendererService, StoreFinderService, StoreDataService, StoreFinderCoreModule, WindowRef, CxApiModule, CxApiService, PipeModule, StripHtmlModule, UtilModule, defaultAuthConfig as ɵeq, AuthErrorInterceptor as ɵex, ClientTokenInterceptor as ɵev, interceptors as ɵeu, UserTokenInterceptor as ɵew, ClientAuthenticationTokenService as ɵeo, ClientErrorHandlingService as ɵes, services as ɵer, UserAuthenticationTokenService as ɵen, UserErrorHandlingService as ɵet, AuthStoreModule as ɵee, authStoreConfigFactory as ɵed, ClientTokenEffect as ɵem, effects$1 as ɵek, UserTokenEffects as ɵel, clearAuthState as ɵei, getReducers$1 as ɵef, metaReducers as ɵej, reducerProvider$1 as ɵeh, reducerToken$1 as ɵeg, reducer$1 as ɵep, CartStoreModule as ɵa, CartEntryEffects as ɵi, CartEffects as ɵh, effects$5 as ɵg, reducer$2 as ɵj, clearCartState as ɵe, getReducers$2 as ɵb, metaReducers$1 as ɵf, reducerProvider$2 as ɵd, reducerToken$2 as ɵc, CheckoutStoreModule as ɵdr, AddressVerificationEffect as ɵdq, CardTypesEffects as ɵdp, CheckoutEffects as ɵdo, effects$7 as ɵdn, getAddressVerificationResults as ɵdm, reducer$a as ɵdl, getCardTypesEntites as ɵdk, reducer$b as ɵdj, getDeliveryAddress as ɵdf, getDeliveryMode as ɵdg, getOrderDetails as ɵdi, getPaymentDetails as ɵdh, reducer$9 as ɵde, clearCheckoutState as ɵdc, getCheckoutState as ɵdb, getReducers$6 as ɵcy, metaReducers$4 as ɵdd, reducerProvider$6 as ɵda, reducerToken$6 as ɵcz, CmsStoreModule as ɵbj, cmsStoreConfigFactory as ɵbi, ComponentEffects as ɵbr, effects$4 as ɵbp, NavigationEntryItemEffects as ɵbs, PageEffects as ɵbq, clearCmsState as ɵbn, getReducers$5 as ɵbk, metaReducers$3 as ɵbo, reducerProvider$5 as ɵbm, reducerToken$5 as ɵbl, reducer$8 as ɵby, reducer$7 as ɵbx, ConfigModule as ɵfi, HttpErrorInterceptor as ɵfd, interceptors$2 as ɵfc, reducer$c as ɵfb, getReducers$7 as ɵey, reducerProvider$7 as ɵfa, reducerToken$7 as ɵez, PageType as ɵcx, effects$3 as ɵbb, ProductReviewsEffects as ɵbe, ProductsSearchEffects as ɵbc, ProductEffects as ɵbd, ProductStoreModule as ɵbg, productStoreConfigFactory as ɵbf, clearProductsState as ɵz, getReducers$4 as ɵw, metaReducers$2 as ɵba, reducerProvider$4 as ɵy, reducerToken$4 as ɵx, reducer$4 as ɵbh, getAuxSearchResults as ɵu, getProductSuggestions as ɵv, getSearchResults as ɵt, reducer$3 as ɵs, defaultConfigurableRoutesConfig as ɵcn, defaultStorefrontRoutesTranslations as ɵco, RouteRecognizerService as ɵbv, UrlParsingService as ɵbw, UrlTranslationService as ɵbu, ROUTING_FEATURE as ɵcp, effects as ɵcv, RouterEffects as ɵcw, CustomSerializer as ɵcu, getReducers as ɵcq, reducer as ɵcr, reducerProvider as ɵct, reducerToken as ɵcs, defaultSiteContextConfigFactory as ɵcf, SiteContextParamsService as ɵck, SiteContextRoutesHandler as ɵcm, SiteContextUrlSerializer as ɵcl, CurrenciesEffects as ɵce, effects$2 as ɵcc, LanguagesEffects as ɵcd, reducer$6 as ɵcj, getReducers$3 as ɵbz, reducerProvider$3 as ɵcb, reducerToken$3 as ɵca, reducer$5 as ɵci, SiteContextStoreModule as ɵch, siteContextStoreConfigFactory as ɵcg, CmsTicketInterceptor as ɵff, interceptors$3 as ɵfe, SmartEditService as ɵfg, defaultStateConfig as ɵk, stateMetaReducers as ɵl, getStorageSyncReducer as ɵm, getTransferStateReducer as ɵn, defaultStoreFinderConfig as ɵfj, FindStoresEffect as ɵfp, effects$8 as ɵfo, ViewAllStoresEffect as ɵfq, getReducers$9 as ɵfl, reducerProvider$9 as ɵfn, reducerToken$9 as ɵfm, getStoreFinderState as ɵfh, StoreFinderStoreModule as ɵfk, reducer$d as ɵdv, reducer$e as ɵdz, reducer$f as ɵdy, reducer$g as ɵdw, reducer$h as ɵeb, reducer$i as ɵea, reducer$j as ɵdu, reducer$k as ɵdt, reducer$l as ɵdx, UserStoreModule as ɵec, StripHtmlPipe as ɵfr };

//# sourceMappingURL=spartacus-core.js.map