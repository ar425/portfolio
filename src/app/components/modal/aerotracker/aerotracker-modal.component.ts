import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'portfolio-aerotracker-modal',
    templateUrl: './aerotracker-modal.component.html'
})

export class AerotrackerModalComponent {

    constructor(
        public activeModal: NgbActiveModal,
    ){}
}