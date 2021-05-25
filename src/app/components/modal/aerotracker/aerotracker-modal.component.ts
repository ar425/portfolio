import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'portfolio-aerotracker-modal',
    templateUrl: './aerotracker-modal.component.html'
})

export class AerotrackerModalComponent {

    @Input()
    tab: number = 0;

    isCollapsed: boolean = true;

    constructor(
        public activeModal: NgbActiveModal,
    ){}


    setTab(tab: number) {
        this.isCollapsed = true;
        this.tab = tab;

        let route = '/aerotracker-modal/';
        let name = 'AeroTracker - ';

        switch(tab) {

            case 0:
                route = `${route}overview`;
                name = `${route}Overview`;
                break;

            case 1:
                route = `${route}target-audience`;
                name = `${route}Target-Audience`;
                break;

            case 2:
                route = `${route}aims&objectives`;
                name = `${route}Aims&Objectives`;
                break;

            case 3:
                route = `${route}my-role`;
                name = `${route}My-Role`;
                break;

            case 4:
                route = `${route}technologies`;
                name = `${route}Technologies`;
                break;

        }

    }   
}