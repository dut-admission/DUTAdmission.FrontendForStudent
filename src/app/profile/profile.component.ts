import {Component, OnInit} from '@angular/core';
import {NgbDateCustomParserFormatter} from '../_core/dateformat';
import {NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateCustomAdapter} from '../_core/date-adapter';
import {Achievement, FamilyMember, HighSchoolResult, StudentInfo} from '../_entities/student-profile';
import {SharedService} from '../_services/shared.service';
import {StudentProfileService} from '../_services/student-profile.service';
import {Password} from '../_entities/password';
import {ProfileLibrary} from '../_entities/profile-library';
import {DeleteObject} from '../_entities/delete-object';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [{provide: NgbDateAdapter, useClass: NgbDateCustomAdapter},
        {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}]
})

export class ProfileComponent implements OnInit {
    studentInfo: StudentInfo;
    library: ProfileLibrary;
    newMember: FamilyMember;
    newLearningResult: HighSchoolResult;
    newAchievement: Achievement;
    password: Password;
    focus2: boolean;
    date: Date = new Date();
    model: any = {};
    canPrintDocument = false;

    constructor(private profileService: StudentProfileService,
                private sharedService: SharedService,
                private router: Router) {
        this.sharedService.emitChange(true);
        this.newMember = new FamilyMember(null);
        this.newAchievement = new Achievement(null);
        this.newLearningResult = new HighSchoolResult(null);
        this.password = new Password();
    }

    ngOnInit() {
        this.profileService.getProfileLibrary().subscribe(
            value => {
                this.library = value;
            },
            error => {
                this.sharedService.notifyError(error['error']);
            }
        );
        this.profileService.getStudentProfile().subscribe(
            value => {
                this.sharedService.emitChange(false);
                this.studentInfo = value;
            },
            error => {
                this.sharedService.emitChange(false);
                this.sharedService.notifyError(error['error']);
            }
        );
    }

    SaveProfile() {
        this.sharedService.emitChange(true);
        this.profileService.saveProfile(this.studentInfo).subscribe(
            value => {
                this.sharedService.emitChange(false);
                this.sharedService.notifySuccess('Cập nhật thông tin thành công.');
                this.router.navigate(['admission/tuition']);
                this.studentInfo = value;
                this.canPrintDocument = true;
            },
            error => {
                this.sharedService.emitChange(false);
                this.sharedService.notifyError(error.toString());
            }
        );
    }

    saveFamilyMember() {
        this.sharedService.emitChange(true);
        if (this.newMember.id === 0) {
            this.profileService.addNewFamilyMemeber(this.newMember).subscribe(
                value => {
                    this.sharedService.emitChange(false);
                    this.sharedService.dismissAll();
                    this.sharedService.notifySuccess('Thêm thông tin thành viên thành công.');
                    this.studentInfo.familyMembers.push(value);
                },
                error => {
                    this.sharedService.emitChange(false);
                    if (error.status === 400) {
                        this.sharedService.notifyError('Vui lòng nhập đầy đủ thông tin các trường.');
                    } else {
                        this.sharedService.notifyError('Hệ thống có vấn đề. Vui lòng thử lại sau.');
                    }
                }
            );
        } else {
            this.profileService.editFamilyMemeber(this.newMember).subscribe(
                value => {
                    this.sharedService.emitChange(false);
                    this.sharedService.dismissAll();
                    this.sharedService.notifySuccess('Chỉnh sửa thông tin thành viên thành công.');
                    const index = this.studentInfo.familyMembers.findIndex(member => member.id === this.newMember.id);
                    this.studentInfo.familyMembers[index] = new FamilyMember(value);
                },
                error => {
                    this.sharedService.emitChange(false);
                    if (error.status === 400) {
                        this.sharedService.notifyError('Vui lòng nhập đầy đủ thông tin các trường.');
                    } else {
                        this.sharedService.notifyError('Hệ thống có vấn đề. Vui lòng thử lại sau.');
                    }
                }
            );
        }
    }

    saveLearningResult() {
        this.sharedService.emitChange(true);
        this.profileService.saveLearningResult(this.newLearningResult).subscribe(
            value => {
                this.sharedService.emitChange(false);
                this.sharedService.dismissAll();
                this.sharedService.notifySuccess('Lưu thông tin học lực thành công.');
                if (this.newLearningResult.id === 0) {
                    this.studentInfo.highSchoolResults.push(value);
                } else {
                    const index = this.studentInfo.highSchoolResults.findIndex(member => member.id === this.newLearningResult.id);
                    this.studentInfo.highSchoolResults[index] = value;
                }
            },
            error => {
                this.sharedService.emitChange(false);
                this.sharedService.notifyError('error');
            }
        );
    }

    saveAchievement() {
        this.sharedService.emitChange(true);
        if (this.newAchievement.id === 0) {
            this.profileService.addNewAchievement(this.newAchievement).subscribe(
                value => {
                    this.sharedService.emitChange(false);
                    this.sharedService.dismissAll();
                    this.sharedService.notifySuccess('Thêm thông tin năng khiếu và thành tựu thành công.');
                    this.studentInfo.achievements.push(value);
                },
                error => {
                    this.sharedService.emitChange(false);
                    if (error.status === 400) {
                        this.sharedService.notifyError('Vui lòng nhập đầy đủ thông tin các trường.');
                    } else {
                        this.sharedService.notifyError('Hệ thống có vấn đề. Vui lòng thử lại sau.');
                    }
                }
            );
        } else {
            this.profileService.editAchievement(this.newAchievement).subscribe(
                value => {
                    this.sharedService.emitChange(false);
                    this.sharedService.dismissAll();
                    this.sharedService.notifySuccess('Chỉnh sửa thông tin năng khiếu và thành tựu thành công.');
                    const index = this.studentInfo.achievements.findIndex(achievement => achievement.id === this.newAchievement.id);
                    this.studentInfo.achievements[index] = new Achievement(value);
                },
                error => {
                    this.sharedService.emitChange(false);
                    if (error.status === 400) {
                        this.sharedService.notifyError('Vui lòng nhập đầy đủ thông tin các trường.');
                    } else {
                        this.sharedService.notifyError('Hệ thống có vấn đề. Vui lòng thử lại sau.');
                    }
                }
            );
        }

    }

    openModalForNewMember(content, member) {
        if (member) {
            this.newMember = new FamilyMember(member);
        } else {
            this.newMember = new FamilyMember(null);
        }
        this.sharedService.openFormModal(content, 'lg');
    }

    openModalForNewResult(content, result) {
        if (result) {
            this.newLearningResult = new HighSchoolResult(result);
        } else {
            this.newLearningResult = new HighSchoolResult(null);
        }
        this.sharedService.openFormModal(content, 'sm');
    }

    openModalForNewAchievement(content, achievement) {
        if (achievement) {
            this.newAchievement = achievement;
            console.log(achievement);
        } else {
            this.newAchievement = new Achievement();
        }
        this.sharedService.openFormModal(content, 'sm');
    }

    changePassword() {
        if (this.password.new_password !== this.password.renew_password) {
            this.sharedService.notifyError('Nhập lại mật khẩu không trùng khớp.');
        } else {
            this.profileService.changePassword(this.password).subscribe(
                value => {
                    this.sharedService.notifySuccess('Đổi mật khẩu thành công.');
                    this.sharedService.dismissAll();
                },
                error => {
                    this.sharedService.notifyError('Mật khẩu cũ không chính xác.');
                }
            );
        }
    }

    openModalChangePassword(content) {
        this.password = new Password();
        this.sharedService.openFormModal(content, 'sm');
    }

    deleteFamilyMember(id: number) {
        this.profileService.deleteFamilyMemeber(id).subscribe(
            value => {
                this.studentInfo.familyMembers = this.studentInfo.familyMembers.filter(x => x.id !== id);
                this.sharedService.notifySuccess('Đã xóa thành công.');
            },
            error => {
                this.sharedService.notifyError('Xóa ko thành công.');
            }
        );
    }

    deleteHighSchoolResult(id: number) {
        const object = new DeleteObject(id, 2);
        this.profileService.deleteObject(object).subscribe(
            value => {
                this.studentInfo.highSchoolResults = this.studentInfo.highSchoolResults.filter(x => x.id !== id);
                this.sharedService.notifySuccess('Đã xóa thành công.');
            },
            error => {
                this.sharedService.notifyError('Xóa ko thành công.');
            }
        );
    }

    deleteAchievement(id: number) {
        this.profileService.deleteAchievement(id).subscribe(
            value => {
                this.studentInfo.achievements = this.studentInfo.achievements.filter(x => x.id !== id);
                this.sharedService.notifySuccess('Đã xóa thành công.');
            },
            error => {
                this.sharedService.notifyError('Xóa ko thành công.');
            }
        );
    }

    onDateSelection($event: UIEvent) {


    }

    getNationalityName(id: number): string {
        return this.library.nationalityList.find(x => x.id === id).name;
    }

    getEthnicName(id: number): string {
        return this.library.ethnicList.find(x => x.id === id).name;
    }

    getReligionName(id: number): string {
        return this.library.religionList.find(x => x.id === id).name;
    }

    OnSubmitStudentForm(studentInfoForm: NgForm) {
        if (studentInfoForm.form.valid) {
            this.SaveProfile();
        } else {
            this.sharedService.notifyError('Vui lòng nhập đầy đủ thông tin cho tất cả các trường.');
        }
    }

    OnPrintDocument() {
        this.canPrintDocument = false;
    }
}
