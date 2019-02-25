/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthErrorInterceptor } from './auth-error.interceptor';
import { ClientTokenInterceptor } from './client-token.interceptor';
import { UserTokenInterceptor } from './user-token.interceptor';
/** @type {?} */
export var interceptors = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sS0FBTyxZQUFZLEdBQWU7SUFDdEM7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEF1dGhFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENsaWVudFRva2VuSW50ZXJjZXB0b3IgfSBmcm9tICcuL2NsaWVudC10b2tlbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBVc2VyVG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vdXNlci10b2tlbi5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBpbnRlcmNlcHRvcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogQ2xpZW50VG9rZW5JbnRlcmNlcHRvcixcbiAgICBtdWx0aTogdHJ1ZVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6IFVzZXJUb2tlbkludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogQXV0aEVycm9ySW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWVcbiAgfVxuXTtcbiJdfQ==