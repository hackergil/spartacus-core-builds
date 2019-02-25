/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import * as fromLanguages from './languages.reducer';
import * as fromCurrencies from './currencies.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        languages: fromLanguages.reducer,
        currencies: fromCurrencies.reducer
    };
}
/** @type {?} */
export const reducerToken = new InjectionToken('SiteContextReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sS0FBSyxhQUFhLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxLQUFLLGNBQWMsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd2RCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsU0FBUyxFQUFFLGFBQWEsQ0FBQyxPQUFPO1FBQ2hDLFVBQVUsRUFBRSxjQUFjLENBQUMsT0FBTztLQUNuQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FDcEIscUJBQXFCLENBQ3RCOztBQUVELE1BQU0sT0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCAqIGFzIGZyb21MYW5ndWFnZXMgZnJvbSAnLi9sYW5ndWFnZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQ3VycmVuY2llcyBmcm9tICcuL2N1cnJlbmNpZXMucmVkdWNlcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxTaXRlQ29udGV4dFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgbGFuZ3VhZ2VzOiBmcm9tTGFuZ3VhZ2VzLnJlZHVjZXIsXG4gICAgY3VycmVuY2llczogZnJvbUN1cnJlbmNpZXMucmVkdWNlclxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxTaXRlQ29udGV4dFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFNpdGVDb250ZXh0U3RhdGU+PihcbiAgJ1NpdGVDb250ZXh0UmVkdWNlcnMnXG4pO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vyc1xufTtcbiJdfQ==