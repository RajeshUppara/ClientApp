import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './service/app.interceptor';
import { CommonModule } from '@angular/common';
import { ApexService } from "./service/apex.service";
import { AppService } from "./service/app.service";

import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';

import { 
    MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
    MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
    MatTooltipModule, MatSnackBarModule,MatTreeModule
} from '@angular/material';
//import { MatTreeModule } from '@angular/material/tree';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BetterHighlightDirective } from './directives/better-highlight.directive';


@NgModule({
    imports: [
        CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
        MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
        MatTooltipModule, MatSnackBarModule, MatTreeModule
    ],
    declarations: [ 
        FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, BetterHighlightDirective
    ],
    exports: [
        CommonModule,FormsModule, ReactiveFormsModule, FlexLayoutModule, 
        FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe,
        MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
        MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
        MatTooltipModule, MatSnackBarModule, MatTreeModule
    
    ]

 })
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApexService,
                AppService,
                { 
                    provide: HTTP_INTERCEPTORS, 
                    useClass: AppInterceptor, 
                    multi: true 
                } 
            ],
        };
    }
}