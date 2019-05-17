/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { LOGOUT } from '../../../auth/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { USER_ADDRESSES, USER_CONSENTS, USER_ORDERS, USER_PAYMENT_METHODS, } from '../user-state';
import * as fromBillingCountriesReducer from './billing-countries.reducer';
import * as fromDeliveryCountries from './delivery-countries.reducer';
import * as fromOrderDetailsReducer from './order-details.reducer';
import * as fromPaymentReducer from './payment-methods.reducer';
import * as fromRegionsReducer from './regions.reducer';
import * as fromResetPasswordReducer from './reset-password.reducer';
import * as fromTitlesReducer from './titles.reducer';
import * as fromAddressesReducer from './user-addresses.reducer';
import * as fromUserConsentsReducer from './user-consents.reducer';
import * as fromUserDetailsReducer from './user-details.reducer';
import * as fromUserOrdersReducer from './user-orders.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        account: combineReducers({
            details: fromUserDetailsReducer.reducer,
        }),
        addresses: loaderReducer(USER_ADDRESSES, fromAddressesReducer.reducer),
        billingCountries: fromBillingCountriesReducer.reducer,
        consents: loaderReducer(USER_CONSENTS, fromUserConsentsReducer.reducer),
        payments: loaderReducer(USER_PAYMENT_METHODS, fromPaymentReducer.reducer),
        orders: loaderReducer(USER_ORDERS, fromUserOrdersReducer.reducer),
        order: fromOrderDetailsReducer.reducer,
        countries: fromDeliveryCountries.reducer,
        titles: fromTitlesReducer.reducer,
        regions: fromRegionsReducer.reducer,
        resetPassword: fromResetPasswordReducer.reducer,
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('UserReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearUserState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearUserState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBR0wsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFFTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxvQkFBb0IsR0FDckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLDJCQUEyQixNQUFNLDZCQUE2QixDQUFDO0FBQzNFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEtBQUssdUJBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxLQUFLLGtCQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEtBQUssd0JBQXdCLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEtBQUssdUJBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxLQUFLLHNCQUFzQixNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUvRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUN2QixPQUFPLEVBQUUsc0JBQXNCLENBQUMsT0FBTztTQUN4QyxDQUFDO1FBQ0YsU0FBUyxFQUFFLGFBQWEsQ0FDdEIsY0FBYyxFQUNkLG9CQUFvQixDQUFDLE9BQU8sQ0FDN0I7UUFDRCxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxPQUFPO1FBQ3JELFFBQVEsRUFBRSxhQUFhLENBQ3JCLGFBQWEsRUFDYix1QkFBdUIsQ0FBQyxPQUFPLENBQ2hDO1FBQ0QsUUFBUSxFQUFFLGFBQWEsQ0FDckIsb0JBQW9CLEVBQ3BCLGtCQUFrQixDQUFDLE9BQU8sQ0FDM0I7UUFDRCxNQUFNLEVBQUUsYUFBYSxDQUNuQixXQUFXLEVBQ1gscUJBQXFCLENBQUMsT0FBTyxDQUM5QjtRQUNELEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO1FBQ3RDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxPQUFPO1FBQ3hDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO1FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1FBQ25DLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxPQUFPO0tBQ2hELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUE4QixjQUFjLENBQUM7O0FBRW5FLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBMkI7SUFFM0IsT0FBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBMT0dPVVQgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlTGlzdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2FkZGl0aW9uYWwtb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIFVzZXJTdGF0ZSxcbiAgVVNFUl9BRERSRVNTRVMsXG4gIFVTRVJfQ09OU0VOVFMsXG4gIFVTRVJfT1JERVJTLFxuICBVU0VSX1BBWU1FTlRfTUVUSE9EUyxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQmlsbGluZ0NvdW50cmllc1JlZHVjZXIgZnJvbSAnLi9iaWxsaW5nLWNvdW50cmllcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21EZWxpdmVyeUNvdW50cmllcyBmcm9tICcuL2RlbGl2ZXJ5LWNvdW50cmllcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21PcmRlckRldGFpbHNSZWR1Y2VyIGZyb20gJy4vb3JkZXItZGV0YWlscy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21QYXltZW50UmVkdWNlciBmcm9tICcuL3BheW1lbnQtbWV0aG9kcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21SZWdpb25zUmVkdWNlciBmcm9tICcuL3JlZ2lvbnMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUmVzZXRQYXNzd29yZFJlZHVjZXIgZnJvbSAnLi9yZXNldC1wYXNzd29yZC5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21UaXRsZXNSZWR1Y2VyIGZyb20gJy4vdGl0bGVzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbUFkZHJlc3Nlc1JlZHVjZXIgZnJvbSAnLi91c2VyLWFkZHJlc3Nlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyQ29uc2VudHNSZWR1Y2VyIGZyb20gJy4vdXNlci1jb25zZW50cy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyRGV0YWlsc1JlZHVjZXIgZnJvbSAnLi91c2VyLWRldGFpbHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlck9yZGVyc1JlZHVjZXIgZnJvbSAnLi91c2VyLW9yZGVycy5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8VXNlclN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgYWNjb3VudDogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIGRldGFpbHM6IGZyb21Vc2VyRGV0YWlsc1JlZHVjZXIucmVkdWNlcixcbiAgICB9KSxcbiAgICBhZGRyZXNzZXM6IGxvYWRlclJlZHVjZXI8QWRkcmVzc1tdPihcbiAgICAgIFVTRVJfQUREUkVTU0VTLFxuICAgICAgZnJvbUFkZHJlc3Nlc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgYmlsbGluZ0NvdW50cmllczogZnJvbUJpbGxpbmdDb3VudHJpZXNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgY29uc2VudHM6IGxvYWRlclJlZHVjZXI8Q29uc2VudFRlbXBsYXRlTGlzdD4oXG4gICAgICBVU0VSX0NPTlNFTlRTLFxuICAgICAgZnJvbVVzZXJDb25zZW50c1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgcGF5bWVudHM6IGxvYWRlclJlZHVjZXI8UGF5bWVudERldGFpbHNbXT4oXG4gICAgICBVU0VSX1BBWU1FTlRfTUVUSE9EUyxcbiAgICAgIGZyb21QYXltZW50UmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBvcmRlcnM6IGxvYWRlclJlZHVjZXI8T3JkZXJIaXN0b3J5TGlzdD4oXG4gICAgICBVU0VSX09SREVSUyxcbiAgICAgIGZyb21Vc2VyT3JkZXJzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBvcmRlcjogZnJvbU9yZGVyRGV0YWlsc1JlZHVjZXIucmVkdWNlcixcbiAgICBjb3VudHJpZXM6IGZyb21EZWxpdmVyeUNvdW50cmllcy5yZWR1Y2VyLFxuICAgIHRpdGxlczogZnJvbVRpdGxlc1JlZHVjZXIucmVkdWNlcixcbiAgICByZWdpb25zOiBmcm9tUmVnaW9uc1JlZHVjZXIucmVkdWNlcixcbiAgICByZXNldFBhc3N3b3JkOiBmcm9tUmVzZXRQYXNzd29yZFJlZHVjZXIucmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8VXNlclN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFVzZXJTdGF0ZT4+KCdVc2VyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJVc2VyU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PlxuKTogQWN0aW9uUmVkdWNlcjxhbnk+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IExPR09VVCkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhclVzZXJTdGF0ZV07XG4iXX0=