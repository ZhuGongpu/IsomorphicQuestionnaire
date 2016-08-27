import {fromJS} from 'immutable';
import {INCREASE} from "./actions";

export default(state = fromJS({value: 0}), action) => {
    switch (action.type) {
        case INCREASE:
            return state.set('value', state.get('value') + action.stride);
        default:
            return state;
    }
}
