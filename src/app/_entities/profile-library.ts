export class NationalityList {
  id: number;
  name: string;
}

export class ReligionList {
  id: number;
  name: string;
}

export class EthnicList {
  id: number;
  name: string;
}

export class ProgramList {
  id: number;
  name: string;
  fees: number;
}

export class FacultyList {
  id: number;
  name: string;
}

export class Faculty {
  id: number;
  name: string;
}

export class DepartmentList {
  id: number;
  name: string;
  faculty: Faculty;
}

export class ElectionTypeList {
  id: number;
  name: string;
}

export class EnrollmentAreaList {
  id: number;
  name: string;
  bonusing_point: number;
}

export class CircumstanceTypeList {
  id: number;
  name: string;
}

export class HightSchoolYearList {
  id: number;
  year: number;
}

export class ConductTypeList {
  id: number;
  level: string;
}

export class LearningAbilityList {
  id: number;
  level: string;
  starting_point: number;
  ending_point: number;
}

export class CareerTypeList {
  id: number;
  name: string;
}

export class RelationTypeList {
  id: number;
  name: string;
}

export class TalentTypeList {
  id: number;
  name: string;
}

export class AchievementPrizeList {
  id: number;
  name: string;
}

export class AchievementLevelList {
  id: number;
  name: string;
}

export class AchievementTypeList {
  id: number;
  name: string;
}

export class SubjectList {
  id: number;
  name: string;
}

export class PositionTypeList {
  id: number;
  name: string;
}

export class ProfileLibrary {
  nationalityList: NationalityList[];
  religionList: ReligionList[];
  ethnicList: EthnicList[];
  programList: ProgramList[];
  facultyList: FacultyList[];
  departmentList: DepartmentList[];
  electionTypeList: ElectionTypeList[];
  enrollmentAreaList: EnrollmentAreaList[];
  circumstanceTypeList: CircumstanceTypeList[];
  hightSchoolYearList: HightSchoolYearList[];
  conductTypeList: ConductTypeList[];
  learningAbilityList: LearningAbilityList[];
  careerTypeList: CareerTypeList[];
  relationTypeList: RelationTypeList[];
  talentTypeList: TalentTypeList[];
  documentTypeList: any[];
  insuranceDurationList: any[];
  insuranceTypeList: any[];
  achievementPrizeList: AchievementPrizeList[];
  achievementLevelList: AchievementLevelList[];
  achievementTypeList: AchievementTypeList[];
  subjectList: SubjectList[];
  positionTypeList: PositionTypeList[];
}
