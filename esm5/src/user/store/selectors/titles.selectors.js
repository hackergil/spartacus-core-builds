/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
/** @type {?} */
export var getTitlesState = createSelector(getUserState, function (state) { return state.titles; });
/** @type {?} */
export var getTitlesEntites = createSelector(getTitlesState, function (state) { return state.entities; });
/** @type {?} */
export var getAllTitles = createSelector(getTitlesEntites, function (entites) { return Object.keys(entites).map(function (code) { return entites[code]; }); });
/** @type {?} */
export var titleSelectorFactory = function (code) {
    return createSelector(getTitlesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[code] : null); });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy90aXRsZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRWxELE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxDQUNuQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIsY0FBYyxFQUNkLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUN2Qzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUdyQixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixVQUFBLE9BQU8sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsQ0FBQyxFQUEvQyxDQUErQyxDQUMzRDs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsVUFDbEMsSUFBWTtJQUVaLE9BQUEsY0FBYyxDQUNaLGdCQUFnQixFQUNoQixVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUE1RCxDQUE0RCxDQUN6RTtBQUhELENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgVXNlclN0YXRlLFxuICBUaXRsZXNTdGF0ZSxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVFbnRpdGllc1xufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFRpdGxlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS50aXRsZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRUaXRsZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBUaXRsZUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFRpdGxlc1N0YXRlLFxuICAoc3RhdGU6IFRpdGxlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRpdGxlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVGl0bGVbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRUaXRsZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChjb2RlID0+IGVudGl0ZXNbY29kZV0pXG4pO1xuXG5leHBvcnQgY29uc3QgdGl0bGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhVc2VyLCBUaXRsZT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0VGl0bGVzRW50aXRlcyxcbiAgICBlbnRpdGllcyA9PiAoT2JqZWN0LmtleXMoZW50aXRpZXMpLmxlbmd0aCAhPT0gMCA/IGVudGl0aWVzW2NvZGVdIDogbnVsbClcbiAgKTtcbiJdfQ==