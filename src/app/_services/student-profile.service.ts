import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Achievement, FamilyMember, HighSchoolResult, StudentInfo} from '../_entities/student-profile';
import {ProfileLibrary} from '../_entities/profile-library';
import {Password} from '../_entities/password';
import {DeleteObject} from '../_entities/delete-object';
import {API_URL} from '../_constants/api-url';
import {httpOptions} from '../_constants/http-option';
import {Tuition} from '../_entities/tuition';

@Injectable({
    providedIn: 'root'
})
export class StudentProfileService {

    constructor(private http: HttpClient) {
    }

    getStudentProfile(): Observable<StudentInfo> {
        return this.http.get<StudentInfo>(API_URL.STUDENT_PROFILE);
    }

    getTuitions(): Observable<Tuition> {
        return this.http.get<Tuition>(API_URL.TUITION_FOR_STUDENT);
    }

    getProfileLibrary(): Observable<ProfileLibrary> {
        return this.http.get<ProfileLibrary>(API_URL.PROFILE_LIBRARY);
    }

    addNewFamilyMemeber(newMember: FamilyMember): Observable<any> {
        return this.http.post<any>(API_URL.STUDENT_ADD_MEMBER, newMember, httpOptions);
    }

    editFamilyMemeber(newMember: FamilyMember): Observable<any> {
        return this.http.put<any>(API_URL.STUDENT_EDIT_MEMBER, newMember, httpOptions);
    }

    deleteFamilyMemeber(id: number): Observable<any> {
        return this.http.delete<any>(API_URL.STUDENT_DELETE_MEMBER + id);
    }


    saveLearningResult(newResult: HighSchoolResult): Observable<any> {
        return this.http.post<any>(API_URL.PROFILE_SAVE_RESULT, newResult, httpOptions);
    }

    saveAchievement(newAchievement: Achievement): Observable<any> {
        return this.http.post<any>(API_URL.PROFILE_SAVE_ACHIEVEMENT, newAchievement, httpOptions);
    }

    addNewAchievement(newAchievement: Achievement): Observable<any> {
        return this.http.post<any>(API_URL.STUDENT_ADD_ACHIEVEMENT, newAchievement, httpOptions);
    }

    editAchievement(newAchievement: Achievement): Observable<any> {
        console.log(newAchievement);
        return this.http.put<any>(API_URL.STUDENT_EDIT_ACHIEVEMENT, newAchievement, httpOptions);
    }

    deleteAchievement(id: number): Observable<any> {
        console.log(id);
        return this.http.delete<any>(API_URL.STUDENT_DELETE_ACHIEVEMENT + id);
    }

        saveProfile(profile: StudentInfo): Observable<any> {
        return this.http.put<any>(API_URL.PROFILE_SAVE_PROFILE, profile, httpOptions);
    }

    changePassword(password: Password): Observable<any> {
        return this.http.put<any>(API_URL.PROFILE_CHANGE_PASSWORD, password, httpOptions);
    }

    deleteObject(object: DeleteObject): Observable<any> {
        return this.http.post<any>(API_URL.PROFILE_DELETE_OBJECT, object, httpOptions);
    }
}
