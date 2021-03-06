import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalMessageType } from '../models/global-message.model';
import { GlobalMessageEntities, StateWithGlobalMessage } from '../store/index';
import { Translatable } from '../../i18n/translatable';
export declare class GlobalMessageService {
    private store;
    constructor(store: Store<StateWithGlobalMessage>);
    /**
     * Get all global messages
     */
    get(): Observable<GlobalMessageEntities>;
    /**
     * Add one message into store
     * @param text: string | Translatable
     * @param type: GlobalMessageType object
     */
    add(text: string | Translatable, type: GlobalMessageType): void;
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    remove(type: GlobalMessageType, index?: number): void;
}
