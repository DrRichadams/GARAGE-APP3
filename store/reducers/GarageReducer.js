import { CHANGE_JOB_NAME } from "../actions/GarageActions"

const initState = {
    jobs: [  ],
    employees: []
}

const GarageReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_JOB_NAME:
            console.log("Reducer working")
        default:
            return state
    }
}

export default GarageReducer