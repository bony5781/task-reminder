export const SET_TASKS = 'SET_TASKS';
export const SET_DAY = 'SET_DAY'
export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY'
export const SET_SHOW_MODAL_VISIBILITY = 'SET_SHOW_MODAL_VISIBILITY'

export const setTasks = tasks => dispatch => {
    dispatch({
        type: SET_TASKS,
        payload: tasks,
    })
}

export const setDay = day => dispatch => {
    dispatch({
        type: SET_DAY,
        payload: day,
    })
}


export const setModalVisibility = modalVisible => dispatch => {
    dispatch({
        type: SET_MODAL_VISIBILITY,
        payload: modalVisible,
    })
}

export const setShowModalVisibility = showModalVisible => dispatch => {
    dispatch({
        type: SET_SHOW_MODAL_VISIBILITY,
        payload: showModalVisible,
    })
}