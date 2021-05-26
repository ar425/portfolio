import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'portfolio-uspace-modal',
    templateUrl: './uspace-modal.component.html'
})

export class UspaceModalComponent {

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

        switch(tab) {

            case 0:
                route = `${route}overview`;
                break;

            case 1:
                route = `${route}target-audience`;
                break;

            case 2:
                route = `${route}aims&objectives`;
                break;

            case 3:
                route = `${route}my-role`;
                break;

            case 4:
                route = `${route}technologies`;
                break;

        }

    }   
}