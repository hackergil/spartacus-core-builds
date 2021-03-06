import { MemoizedSelector } from '@ngrx/store';
import { RegionsState, StateWithUser } from '../user-state';
import { Region } from '../../../model/address.model';
export declare const getRegionsState: MemoizedSelector<StateWithUser, RegionsState>;
export declare const getAllRegions: MemoizedSelector<StateWithUser, Region[]>;
