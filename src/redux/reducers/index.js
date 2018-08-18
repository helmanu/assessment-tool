import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './UserReducer';
import LocationReducer from './LocationReducer';
import LoadingReducer from './LoadingReducer';
import DbUserReducer from './DbUserReducer';
import DbEducationReducer from './DbEducationReducer';
import DbExperienceReducer from './DbExperienceReducer';
import DbSkillsReducer from './DbSkillsReducer';
import DbAssignmentsReducer from './DbAssignmentsReducer';
import DbProjectsReducer from './DbProjectsReducer';
import DbAllowedUsersReducer from './DbAllowedUsersReducer';

export default combineReducers({
	 form: formReducer,
	 user: UserReducer,
	 loading: LoadingReducer,
	 dbUsers: DbUserReducer,
	 dbAllowedUsers: DbAllowedUsersReducer,
	 location: LocationReducer,
	 dbEducation: DbEducationReducer,
	 dbExperience: DbExperienceReducer,
	 dbSkills: DbSkillsReducer,
	 dbProjects: DbProjectsReducer,
	 dbAssignments: DbAssignmentsReducer,
  });
