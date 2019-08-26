import {Component, OnInit} from '@angular/core';
import {Tuition} from '../_entities/tuition';
import {SharedService} from '../_services/shared.service';
import {StudentProfileService} from '../_services/student-profile.service';
import {StudentInfo} from '../_entities/student-profile';

@Component({
    selector: 'app-tuition',
    templateUrl: './tuition.component.html',
    styleUrls: ['./tuition.component.scss']
})
export class TuitionComponent implements OnInit {
    tuition: Tuition;
    studentInfo: StudentInfo;

    constructor(private studentProfileService: StudentProfileService,
                private sharedService: SharedService,
    ) {
        this.tuition = new Tuition();
    }

    ngOnInit() {
        // this.sharedService.emitChange(true);
        this.studentProfileService.getTuitions().subscribe(
            value => {
                this.sharedService.emitChange(false);
                this.tuition = value;
            },
            error => {
                this.sharedService.emitChange(false);
                this.sharedService.notifyError(error);
            }
        );
        this.studentProfileService.getStudentProfile().subscribe(
            value => {
                this.studentInfo = value;
            },
            error => {
                this.sharedService.notifyError(error['error']);
            }
        );
    }
}
