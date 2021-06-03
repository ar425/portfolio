import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import * as Hammer from 'hammerjs';

import { HomeComponent } from './home/home.component';
import { AerotrackerModalComponent } from './modal/aerotracker/aerotracker-modal.component';
import { PortfolioModalComponent } from './modal/portfolio/portfolio-modal.component'
import { UspaceModalComponent } from './modal/uspace/uspace-modal.component';

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
};
}

@NgModule({
    declarations: [
        HomeComponent,
        AerotrackerModalComponent,
        UspaceModalComponent,
        PortfolioModalComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        HammerModule,
        FontAwesomeModule
    ],
    exports: [
        HomeComponent,
        AerotrackerModalComponent,
        UspaceModalComponent,
        PortfolioModalComponent
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig,
          },
    ]
  })
  export class HomeModule { }