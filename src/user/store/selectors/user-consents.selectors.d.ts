import { MemoizedSelector } from '@ngrx/store';
import { ConsentTemplateList } from '../../../occ/occ-models/additional-occ.models';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { StateWithUser } from '../user-state';
export declare const getConsentsState: MemoizedSelector<StateWithUser, LoaderState<ConsentTemplateList>>;
export declare const getConsentsValue: MemoizedSelector<StateWithUser, ConsentTemplateList>;
export declare const getConsentsLoading: MemoizedSelector<StateWithUser, boolean>;
export declare const getConsentsSuccess: MemoizedSelector<StateWithUser, boolean>;
export declare const getConsentsError: MemoizedSelector<StateWithUser, boolean>;
