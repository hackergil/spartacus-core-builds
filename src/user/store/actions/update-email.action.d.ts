import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction } from '../../../state';
export declare const UPDATE_EMAIL = "[User] Update Email";
export declare const UPDATE_EMAIL_ERROR = "[User] Update Email Error";
export declare const UPDATE_EMAIL_SUCCESS = "[User] Update Email Success";
export declare const RESET_EMAIL = "[User] Reset Email";
export declare class UpdateEmailAction extends EntityLoadAction {
    payload: {
        uid: string;
        password: string;
        newUid: string;
    };
    readonly type = "[User] Update Email";
    constructor(payload: {
        uid: string;
        password: string;
        newUid: string;
    });
}
export declare class UpdateEmailSuccessAction extends EntitySuccessAction {
    newUid: string;
    readonly type = "[User] Update Email Success";
    constructor(newUid: string);
}
export declare class UpdateEmailErrorAction extends EntityFailAction {
    payload: any;
    readonly type = "[User] Update Email Error";
    constructor(payload: any);
}
export declare class ResetUpdateEmailAction extends EntityResetAction {
    readonly type = "[User] Reset Email";
    constructor();
}
export declare type EmailActions = UpdateEmailAction | UpdateEmailSuccessAction | UpdateEmailErrorAction | ResetUpdateEmailAction;
