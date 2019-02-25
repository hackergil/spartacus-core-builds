/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
/** @type {?} */
export var getOrderState = createSelector(getUserState, function (state) { return state.order; });
/** @type {?} */
export var getOrderDetails = createSelector(getOrderState, function (state) { return state.order; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvb3JkZXItZGV0YWlscy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLGFBQWEsR0FHdEIsY0FBYyxDQUNoQixZQUFZLEVBQ1osVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQ2xDOztBQUVELE1BQU0sS0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsYUFBYSxFQUNiLFVBQUMsS0FBd0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPcmRlckRldGFpbHNTdGF0ZSwgVXNlclN0YXRlLCBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRPcmRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBPcmRlckRldGFpbHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5vcmRlclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyRGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgT3JkZXJcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0T3JkZXJTdGF0ZSxcbiAgKHN0YXRlOiBPcmRlckRldGFpbHNTdGF0ZSkgPT4gc3RhdGUub3JkZXJcbik7XG4iXX0=