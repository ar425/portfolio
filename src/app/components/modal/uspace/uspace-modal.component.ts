import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'portfolio-uspace-modal',
    templateUrl: './uspace-modal.component.html'
})

export class UspaceModalComponent {

    constructor(
        public activeModal: NgbActiveModal,
    ){}
}