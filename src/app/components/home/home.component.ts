import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AerotrackerModalComponent } from '../modal/aerotracker/aerotracker-modal.component';
import { PortfolioModalComponent } from '../modal/portfolio/portfolio-modal.component';
import { UspaceModalComponent } from "../modal/uspace/uspace-modal.component";


@Component({
    selector: 'portfolio-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor (
        private modalService: NgbModal,
    ) {}

    ngOnInit(){}

    openUspaceModal(){
        this.modalService.open(UspaceModalComponent, { size: 'xl', backdrop: 'static', centered: true, backdropClass: 'light-modal-backdrop', windowClass: 'dark-modal' });
    }

    openAeroTrackerModal(){
        this.modalService.open(AerotrackerModalComponent, { size: 'xl', backdrop: 'static', centered: true, backdropClass: 'light-modal-backdrop', windowClass: 'dark-modal' });
    }

    openPortfolioModal(){
        this.modalService.open(PortfolioModalComponent, { size: 'xl', backdrop: 'static', centered: true, backdropClass: 'light-modal-backdrop', windowClass: 'dark-modal' });
    }
}