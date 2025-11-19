import {legacy_createStore as createStore} from 'redux';
import { toggleReducer } from './toggleReducer';

export const store = createStore(toggleReducer);

