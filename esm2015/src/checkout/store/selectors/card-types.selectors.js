/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import * as fromReducer from './../reducers/card-types.reducer';
import { getCheckoutState } from './checkout.selectors';
/** @type {?} */
export const getCardTypesState = createSelector(getCheckoutState, (state) => state.cardTypes);
/** @type {?} */
export const getCardTypesEntites = createSelector(getCardTypesState, fromReducer.getCardTypesEntites);
/** @type {?} */
export const getAllCardTypes = createSelector(getCardTypesEntites, entites => {
    return Object.keys(entites).map(code => entites[code]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvc2VsZWN0b3JzL2NhcmQtdHlwZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEtBQUssV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUd4RCxNQUFNLE9BQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsZ0JBQWdCLEVBQ2hCLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDMUM7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGlCQUFpQixFQUNqQixXQUFXLENBQUMsbUJBQW1CLENBQ2hDOztBQUVELE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLE9BQU8sQ0FBQyxFQUFFO0lBQ1IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbW9pemVkU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQge1xuICBDaGVja291dFN0YXRlLFxuICBDYXJkVHlwZXNTdGF0ZSxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG59IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21SZWR1Y2VyIGZyb20gJy4vLi4vcmVkdWNlcnMvY2FyZC10eXBlcy5yZWR1Y2VyJztcbmltcG9ydCB7IGdldENoZWNrb3V0U3RhdGUgfSBmcm9tICcuL2NoZWNrb3V0LnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFR5cGVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDYXJkVHlwZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0YXRlLFxuICAoc3RhdGU6IENoZWNrb3V0U3RhdGUpID0+IHN0YXRlLmNhcmRUeXBlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICB7IFtjb2RlOiBzdHJpbmddOiBDYXJkVHlwZSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENhcmRUeXBlc1N0YXRlLFxuICBmcm9tUmVkdWNlci5nZXRDYXJkVHlwZXNFbnRpdGVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2FyZFR5cGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgQ2FyZFR5cGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDYXJkVHlwZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGNvZGUgPT4gZW50aXRlc1tjb2RlXSk7XG4gIH1cbik7XG4iXX0=