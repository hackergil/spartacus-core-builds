/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
import { getProductsState } from './feature.selector';
/** @type {?} */
export var getProductState = createSelector(getProductsState, function (state) { return state.details; });
/** @type {?} */
export var getSelectedProductsFactory = function (codes) {
    return createSelector(getProductState, function (details) {
        return codes
            .map(function (code) {
            return details.entities[code] ? details.entities[code].value : undefined;
        })
            .filter(function (product) { return product !== undefined; });
    });
};
/** @type {?} */
export var getSelectedProductStateFactory = function (code) {
    return createSelector(getProductState, function (details) { return entityStateSelector(details, code); });
};
/** @type {?} */
export var getSelectedProductFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderValueSelector(productState); });
};
/** @type {?} */
export var getSelectedProductLoadingFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderLoadingSelector(productState); });
};
/** @type {?} */
export var getSelectedProductSuccessFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderSuccessSelector(productState); });
};
/** @type {?} */
export var getSelectedProductErrorFactory = function (code) {
    return createSelector(getSelectedProductStateFactory(code), function (productState) { return loaderErrorSelector(productState); });
};
/** @type {?} */
export var getAllProductCodes = createSelector(getProductState, function (details) {
    return Object.keys(details.entities);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDcEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdEQsTUFBTSxLQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixnQkFBZ0IsRUFDaEIsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQ3hDOztBQUVELE1BQU0sS0FBTywwQkFBMEIsR0FBRyxVQUN4QyxLQUFlO0lBRWYsT0FBTyxjQUFjLENBQ25CLGVBQWUsRUFDZixVQUFDLE9BQW1DO1FBQ2xDLE9BQU8sS0FBSzthQUNULEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQWpFLENBQWlFLENBQ2xFO2FBQ0EsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxLQUFLLFNBQVMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sOEJBQThCLEdBQUcsVUFDNUMsSUFBWTtJQUVaLE9BQU8sY0FBYyxDQUNuQixlQUFlLEVBQ2YsVUFBQSxPQUFPLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQWxDLENBQWtDLENBQzlDLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxVQUN2QyxJQUFZO0lBRVosT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQyxFQUNwQyxVQUFBLFlBQVksSUFBSSxPQUFBLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUFqQyxDQUFpQyxDQUNsRCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0NBQWdDLEdBQUcsVUFDOUMsSUFBWTtJQUVaLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsRUFDcEMsVUFBQSxZQUFZLElBQUksT0FBQSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsRUFBbkMsQ0FBbUMsQ0FDcEQsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLGdDQUFnQyxHQUFHLFVBQzlDLElBQVk7SUFFWixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDLEVBQ3BDLFVBQUEsWUFBWSxJQUFJLE9BQUEscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQW5DLENBQW1DLENBQ3BELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyw4QkFBOEIsR0FBRyxVQUM1QyxJQUFZO0lBRVosT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksQ0FBQyxFQUNwQyxVQUFBLFlBQVksSUFBSSxPQUFBLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUFqQyxDQUFpQyxDQUNsRCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsZUFBZSxFQUNmLFVBQUEsT0FBTztJQUNMLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFByb2R1Y3RzU3RhdGUsIFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IEVudGl0eUxvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IGVudGl0eVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJFcnJvclNlbGVjdG9yLFxuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG4gIGxvYWRlclN1Y2Nlc3NTZWxlY3RvcixcbiAgbG9hZGVyVmFsdWVTZWxlY3RvclxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5cbmltcG9ydCB7IGdldFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1N0YXRlLFxuICAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLmRldGFpbHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RzRmFjdG9yeSA9IChcbiAgY29kZXM6IHN0cmluZ1tdXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3RbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFN0YXRlLFxuICAgIChkZXRhaWxzOiBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PikgPT4ge1xuICAgICAgcmV0dXJuIGNvZGVzXG4gICAgICAgIC5tYXAoY29kZSA9PlxuICAgICAgICAgIGRldGFpbHMuZW50aXRpZXNbY29kZV0gPyBkZXRhaWxzLmVudGl0aWVzW2NvZGVdLnZhbHVlIDogdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIExvYWRlclN0YXRlPFByb2R1Y3Q+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0U3RhdGUsXG4gICAgZGV0YWlscyA9PiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGRldGFpbHMsIGNvZGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3Q+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlKSxcbiAgICBwcm9kdWN0U3RhdGUgPT4gbG9hZGVyVmFsdWVTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IGxvYWRlckxvYWRpbmdTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3VjY2Vzc0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSksXG4gICAgcHJvZHVjdFN0YXRlID0+IGxvYWRlclN1Y2Nlc3NTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0RXJyb3JGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUpLFxuICAgIHByb2R1Y3RTdGF0ZSA9PiBsb2FkZXJFcnJvclNlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0Q29kZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIHN0cmluZ1tdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RTdGF0ZSxcbiAgZGV0YWlscyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRldGFpbHMuZW50aXRpZXMpO1xuICB9XG4pO1xuIl19