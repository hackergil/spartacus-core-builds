/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
/** @type {?} */
export var getBillingCountriesState = createSelector(getUserState, function (state) { return state.billingCountries; });
/** @type {?} */
export var getBillingCountriesEntites = createSelector(getBillingCountriesState, function (state) { return state.entities; });
/** @type {?} */
export var getAllBillingCountries = createSelector(getBillingCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL2JpbGxpbmctY291bnRyaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdsRCxNQUFNLEtBQU8sd0JBQXdCLEdBR2pDLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxnQkFBZ0IsRUFBdEIsQ0FBc0IsQ0FDN0M7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQixHQUduQyxjQUFjLENBQ2hCLHdCQUF3QixFQUN4QixVQUFDLEtBQTRCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FDakQ7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQixHQUcvQixjQUFjLENBQ2hCLDBCQUEwQixFQUMxQixVQUFBLE9BQU8sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFoQixDQUFnQixDQUFDLEVBQXJELENBQXFELENBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb2l6ZWRTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBVc2VyU3RhdGUsXG4gIEJpbGxpbmdDb3VudHJpZXNTdGF0ZSxcbiAgU3RhdGVXaXRoVXNlcixcbiAgQmlsbGluZ0NvdW50cnlFbnRpdGllc1xufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRCaWxsaW5nQ291bnRyaWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIEJpbGxpbmdDb3VudHJpZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5iaWxsaW5nQ291bnRyaWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QmlsbGluZ0NvdW50cmllc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIEJpbGxpbmdDb3VudHJ5RW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QmlsbGluZ0NvdW50cmllc1N0YXRlLFxuICAoc3RhdGU6IEJpbGxpbmdDb3VudHJpZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxCaWxsaW5nQ291bnRyaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBDb3VudHJ5W11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QmlsbGluZ0NvdW50cmllc0VudGl0ZXMsXG4gIGVudGl0ZXMgPT4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGlzb2NvZGUgPT4gZW50aXRlc1tpc29jb2RlXSlcbik7XG4iXX0=