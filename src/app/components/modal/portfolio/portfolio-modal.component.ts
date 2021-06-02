import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'portfolio-portfolio-modal',
    templateUrl: './portfolio-modal.component.html'
})

export class PortfolioModalComponent {

    @Input()
    tab: number = 0;

    isCollapsed: boolean = true;

    constructor(
        public activeModal: NgbActiveModal,
    ){}

    setTab(tab: number) {
        this.isCollapsed = true;
        this.tab = tab;

        let route = '/portfolio-modal/';

        switch(tab) {

            case 0:
                route = `${route}overview`;
                break;
            case 1:
                route = `${route}aims&objectives`;
                break;

            case 2:
                route = `${route}technologies`;
                break;

        }

    }   
}