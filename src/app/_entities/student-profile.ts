export class StudentInfo {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
    sex: boolean;
    dateOfBirth: Date;
    placeOfBirth: string;
    nationalityId: number;
    religionId: number;
    ethnicId: number;
    identityNumber: string;
    dateOfIssue: Date;
    placeOfIssue: string;
    circumstanceTypeId: number;
    permanentResidence: string;
    address: string;
    phoneNumber: string;
    email: string;
    highSchoolName: string;
    isJoinYouthGroup: boolean;
    dateOfJoiningYouthGroup: Date;
    placeOfJoinYouthGroup: string;
    havingBooksOfYouthGroup: boolean;
    havingCardsOfYouthGroup: boolean;
    className: string;
    departmentName: string;
    programName: string;
    enrollmentAreaName: string;
    electionName: string;
    familyMembers: FamilyMember[];
    highSchoolResults: HighSchoolResult[];
    achievements: Achievement[];
}

export class HighSchoolResult {
    id: number;
    highSchoolYearId: number;
    highSchoolYear: number;
    conductTypeId: number;
    conductTypeName: string;
    learningAbilityId: number;
    learningAbilityName: string;
    gpaScore: number;

    constructor(highSchoolResult: HighSchoolResult) {
        this.id =                   highSchoolResult === null ? 0   : highSchoolResult.id;
        this.highSchoolYearId =     highSchoolResult === null ? 1   : highSchoolResult.highSchoolYearId;
        this.highSchoolYear =       highSchoolResult === null ? 0   : highSchoolResult.highSchoolYear;
        this.conductTypeId =        highSchoolResult === null ? 1   : highSchoolResult.conductTypeId;
        this.conductTypeName =      highSchoolResult === null ? ''  : highSchoolResult.conductTypeName;
        this.learningAbilityId =    highSchoolResult === null ? 1   : highSchoolResult.learningAbilityId;
        this.learningAbilityName =  highSchoolResult === null ? ''  : highSchoolResult.learningAbilityName;
        this.gpaScore =             highSchoolResult === null ? 0   : highSchoolResult.gpaScore;

    }
}

export class FamilyMember {
    id: number;
    firstName: string;
    lastName: string;
    relationId: number;
    relationName: string;
    yearOfBirth: number;
    careerTypeId: number;
    careerTypeName: string;
    ethnicId: number;
    ethnicName: string;
    religionId: number;
    religionName: string;
    nationalityId: number;
    nationalityName: string;
    phoneNumber: string;
    email: string;
    address: string;

    constructor(member: FamilyMember) {
        if (member === null) {
            this.id = 0;
            this.firstName = '';
            this.lastName = '';
            this.relationId = 1;
            this.relationName = '';
            this.yearOfBirth = 1970;
            this.careerTypeId = 1;
            this.careerTypeName = '';
            this.ethnicId = 1;
            this.ethnicName = '';
            this.religionId = 1;
            this.religionName = '';
            this.nationalityId = 1;
            this.nationalityName = '';
            this.phoneNumber = '';
            this.email = '';
            this.address = '';
        } else {
            this.id = member.id;
            this.firstName = member.firstName;
            this.lastName = member.lastName;
            this.relationId = member.relationId;
            this.relationName = member.relationName;
            this.yearOfBirth = member.yearOfBirth;
            this.careerTypeId = member.careerTypeId;
            this.careerTypeName = member.careerTypeName;
            this.ethnicId = member.ethnicId;
            this.ethnicName = member.ethnicName;
            this.religionId = member.religionId;
            this.religionName = member.religionName;
            this.nationalityId = member.nationalityId;
            this.nationalityName = member.nationalityName;
            this.phoneNumber = member.phoneNumber;
            this.email = member.email;
            this.address = member.address;
        }
    }
}

export class Achievement {
    id: number;
    achievementTypeId: number;
    achievementTypeName: string;
    achievementLevelId: number;
    achievementLevelName: string;
    achievementPrizeId: number;
    achievementPrizeName: string;
    description: string;

    constructor(achievement: Achievement = null) {
        if (achievement === null) {
            this.id = 0;
            this.achievementTypeId = 1;
            this.achievementTypeName = '';
            this.achievementLevelId = 1;
            this.achievementLevelName = '';
            this.achievementPrizeId = 1;
            this.achievementPrizeName = '';
            this.description = '';
        } else {
            this.id = achievement.id;
            this.achievementTypeId = achievement.achievementTypeId;
            this.achievementTypeName = achievement.achievementTypeName;
            this.achievementLevelId = achievement.achievementLevelId;
            this.achievementLevelName = achievement.achievementLevelName;
            this.achievementPrizeId = achievement.achievementPrizeId;
            this.achievementPrizeName = achievement.achievementPrizeName;
            this.description = achievement.description;
        }
    }
}
