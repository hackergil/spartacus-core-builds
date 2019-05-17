/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
/** @type {?} */
export const getRegionsState = createSelector(getUserState, (state) => state.regions);
/** @type {?} */
export const getAllRegions = createSelector(getRegionsState, (state) => state.entities);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvcmVnaW9ucy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHbEQsTUFBTSxPQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixZQUFZLEVBQ1osQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUNwQzs7QUFFRCxNQUFNLE9BQU8sYUFBYSxHQUd0QixjQUFjLENBQ2hCLGVBQWUsRUFDZixDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb2l6ZWRTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFVzZXJTdGF0ZSwgUmVnaW9uc1N0YXRlLCBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb25zU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFJlZ2lvbnNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5yZWdpb25zXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVnaW9uczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgUmVnaW9uW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVnaW9uc1N0YXRlLFxuICAoc3RhdGU6IFJlZ2lvbnNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG4iXX0=