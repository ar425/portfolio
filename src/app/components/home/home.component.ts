import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AerotrackerModalComponent } from '../modal/aerotracker/aerotracker-modal.component';
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
        this.modalService.open(UspaceModalComponent, { backdrop: 'static', centered: true, backdropClass: 'light-modal-backdrop', windowClass: 'dark-modal' });
    }

    openAeroTrackerModal(){
        this.modalService.open(AerotrackerModalComponent, { backdrop: 'static', centered: true, backdropClass: 'light-modal-backdrop', windowClass: 'dark-modal' });
    }
}