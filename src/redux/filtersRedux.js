/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeSearchDuration = (payload, value) => {
  console.log('test', payload, value);
  return {
    payload,
    value,
    type: CHANGE_DURATION,
  };
};

export const addTags = payload => {
  return { payload, type: ADD_TAGS };
};
export const removeTags = payload => {
  return { payload, type: REMOVE_TAGS };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      // TODO - handle other action types
    case CHANGE_DURATION:
      if (action.payload == 'from') {
        return {
          ...statePart,
          duration: { from: action.value, to: statePart.duration.to },
        };
      } else {
        return {
          ...statePart,
          duration: { from: statePart.duration.from, to: action.value },
        };
      }
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags.slice(0, action.payload)],
      };
    default:
      return statePart;
  }
}
