import { environment } from '../../environments/environment';

export const API_URL = {
    LOGIN: environment.API_URI + '/login',
    FORGET_PASSWORD : environment.API_URI + '/forget-password',
    STUDENT_PROFILE : environment.API_URI + '/public/profile',
    PROFILE_LIBRARY : environment.API_URI + '/public/profile-library',
    TUITION_FOR_STUDENT : environment.API_URI + '/public/tuition-infor',
    PROFILE_SAVE_RESULT : environment.API_URI + '/public/update-profile/high-school-result',
    PROFILE_SAVE_ACHIEVEMENT : environment.API_URI + '/public/update-profile/achievement',
    PROFILE_SAVE_PROFILE : environment.API_URI + '/public/update-profile',
    PROFILE_CHANGE_PASSWORD : environment.API_URI + '/public/student-profile/password',
    PROFILE_DELETE_OBJECT : environment.API_URI + '/public/update-profile/deletion',

    STUDENT_ADD_MEMBER : environment.API_URI + '/public/add-family-member',
    STUDENT_EDIT_MEMBER : environment.API_URI + '/public/update-family-member',
    STUDENT_DELETE_MEMBER : environment.API_URI + '/public/delete-family-member/',

    STUDENT_ADD_ACHIEVEMENT : environment.API_URI + '/public/add-achievement',
    STUDENT_EDIT_ACHIEVEMENT : environment.API_URI + '/public/update-achievement',
    STUDENT_DELETE_ACHIEVEMENT : environment.API_URI + '/public/delete-achievement/',

    EDUCATION_PROGRAM : environment.API_URI + '/admin/tuition/libraries',
};

export const enum API_URL2 {
    LOGIN = 'http://103.95.197.121:7777/api/login',
    FORGET_PASSWORD = 'http://103.95.197.121:7777/api/forget-password',
    STUDENT_PROFILE = 'http://103.95.197.121:7777/api/public/profile',
    PROFILE_LIBRARY = 'http://103.95.197.121:7777/api/public/profile-library',
    TUITION_FOR_STUDENT = 'http://103.95.197.121:7777/api/public/tuition-infor',
    PROFILE_SAVE_RESULT = 'http://103.95.197.121:7777/api/public/update-profile/high-school-result',
    PROFILE_SAVE_ACHIEVEMENT = 'http://103.95.197.121:7777/api/public/update-profile/achievement',
    PROFILE_SAVE_PROFILE = 'http://103.95.197.121:7777/api/public/update-profile',
    PROFILE_CHANGE_PASSWORD = 'http://103.95.197.121:7777/api/public/student-profile/password',
    PROFILE_DELETE_OBJECT = 'http://103.95.197.121:7777/api/public/update-profile/deletion',

    STUDENT_ADD_MEMBER = 'http://103.95.197.121:7777/api/public/add-family-member',
    STUDENT_EDIT_MEMBER = 'http://103.95.197.121:7777/api/public/update-family-member',
    STUDENT_DELETE_MEMBER = 'http://103.95.197.121:7777/api/public/delete-family-member/',

    STUDENT_ADD_ACHIEVEMENT = 'http://103.95.197.121:7777/api/public/add-achievement',
    STUDENT_EDIT_ACHIEVEMENT = 'http://103.95.197.121:7777/api/public/update-achievement',
    STUDENT_DELETE_ACHIEVEMENT = 'http://103.95.197.121:7777/api/public/delete-achievement/',

    EDUCATION_PROGRAM = 'http://103.95.197.121:7777/api/admin/tuition/libraries',

    DOCUMENT_TYPE_LIST = 'http://103.95.197.121:7777/api/admin/document-type',
    DOCUMENT_TYPE_ADD = 'http://103.95.197.121:7777/api/admin/add-document-type',
    DOCUMENT_TYPE_EDIT = 'http://103.95.197.121:7777/api/admin/document-type/',
    DOCUMENT_TYPE_DELETE = 'http://103.95.197.121:7777/api/admin/document-type/delete/',

    TUITION_TYPE_LIST = 'http://103.95.197.121:7777/api/admin/tuition-type',
    TUITION_TYPE_ADD = 'http://103.95.197.121:7777/api/admin/add-tuition-type',
    TUITION_TYPE_EDIT = 'http://103.95.197.121:7777/api/admin/tuition-type/',
    TUITION_TYPE_DELETE = 'http://103.95.197.121:7777/api/admin/tuition-type/delete/',

    TUITION_LIST = 'http://103.95.197.121:7777/api/admin/tuition-list',

    STUDENT_MANEGEMENT_LIST = 'http://103.95.197.121:7777/api/admin/student',
    STUDENT_MANEGEMENT_UPDATE = 'http://103.95.197.121:7777/api/admin/update-student',
    STUDENT_MANEGEMENT_DELETE = 'http://103.95.197.121:7777/api/admin/delete-student',

    ACCOUNT_GROUP_MANEGEMENT_LIST = 'http://103.95.197.121:7777/api/admin/account-group',
    ACCOUNT_GROUP_MANEGEMENT_ADD = 'http://103.95.197.121:7777/api/admin/group-account/add',
    ACCOUNT_GROUP_MANEGEMENT_EDIT = 'http://103.95.197.121:7777/api/admin/account-group',
    ACCOUNT_GROUP_MANEGEMENT_DELETE = 'http://103.95.197.121:7777/api/admin/account-group/delete/',

    CONTACT_MANEGEMENT_LIST = 'http://103.95.197.121:7777/api/admin/contact-messager',
    STATUS_CONTACT_MANEGEMENT_LIST = 'http://103.95.197.121:7777/api/admin/contact/status-list',

    CONTACT_MANEGEMENT_SEND = 'http://103.95.197.121:7777/api/admin/contact-messager/',
    SETTING_SYSTEM = 'http://103.95.197.121:7777/api/public/university-info',

    EMPLOYEE_PROFILE = 'http://103.95.197.121:7777/api/admin/employee-profile',
    EMPLOYEE_UPDATE_PROFILE = 'http://103.95.197.121:7777/api/admin/employee-profile/update',

    DOCUMENT_LIST = 'http://103.95.197.121:7777/api/admin/document',
}
