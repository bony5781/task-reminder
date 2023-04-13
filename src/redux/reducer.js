import { SET_TASKS, SET_DAY, SET_MODAL_VISIBILITY, SET_SHOW_MODAL_VISIBILITY } from "./actions";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];

const initialState = {
    tasks: [
        {
            day: 'Monday',
            tasks: []
        },
        {
            day: 'Tuesday',
            tasks: []
        },
        {
            day: 'Wednesday',
            tasks: []
        },
        {
            day: 'Thursday',
            tasks: []
        },
        {
            day: 'Friday',
            tasks: []
        },
        {
            day: 'Saturday',
            tasks: []
        },
        {
            day: 'Sunday',
            tasks: []
        },
    ],
    taskID: 1,
    day: day,
    modalVisible: false,
    showModalVisible: false,
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        case SET_DAY:
            return { ...state, day: action.payload };
        case SET_MODAL_VISIBILITY:
            return { ...state, modalVisible: action.payload };
        case SET_SHOW_MODAL_VISIBILITY:
            return { ...state, showModalVisible: action.payload };
        default:
            return state;
    }
}

export default taskReducer;