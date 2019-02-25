import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromOrderDetailsAction from '../actions/order-details.action';
import { OccOrderService } from '../../occ/index';
import { ProductImageConverterService } from '../../../product/store/converters/index';
export declare class OrderDetailsEffect {
    private actions$;
    private occOrderService;
    private productImageConverter;
    loadOrderDetails$: Observable<fromOrderDetailsAction.OrderDetailsAction>;
    constructor(actions$: Actions, occOrderService: OccOrderService, productImageConverter: ProductImageConverterService);
}