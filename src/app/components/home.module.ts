import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import * as Hammer from 'hammerjs';

import { HomeComponent } from './home.component';

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
};
}

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        HammerModule,
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig,
          },
    ]
  })
  export class HomeModule { }