import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';
import { Translatable, TranslatableParams } from './translatable';
export declare class TranslatePipe implements PipeTransform, OnDestroy {
    private service;
    private cd;
    private lastKey;
    private lastOptions;
    private translatedValue;
    private sub;
    constructor(service: TranslationService, cd: ChangeDetectorRef);
    transform(input: Translatable | string, options?: TranslatableParams): string;
    private translate;
    private markForCheck;
    ngOnDestroy(): void;
}
