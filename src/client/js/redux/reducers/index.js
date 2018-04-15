import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import mediaAccounts from './social_media_reducer';
import about from './about_reducer';
import contact from './contact_reducer';
import projectManagement from './project_management_reducer';
import gallery from './gallery_reducer';
import financing from './financing_reducer';
import pages from './pages_reducer';
import faq from './faq_reducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers.
 * There is a reducer for each piece of your state.
 * */

const allReducers = combineReducers({
    mediaAccounts,
    about,
    contact,
    projectManagement,
    gallery,
    financing,
    faq,
    pages
});

export default allReducers;