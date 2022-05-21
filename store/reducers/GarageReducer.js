import { ADD_JOB, ASSIGN_JOB } from "../actions/GarageActions"

const initState = {
    jobs: [  ],
    employees: [
        { id: 1, name: "Matthew", hasJob: false }, { id: 8, name: "Miles", hasJob: false },
        { id: 2, name: "John", hasJob: false }, { id: 9, name: "Mark", hasJob: false },
        { id: 3, name: "Thomas", hasJob: false }, { id: 10, name: "Herman", hasJob: false },
        { id: 4, name: "George", hasJob: false }, { id: 11, name: "Arom", hasJob: false },
        { id: 5, name: "Samson", hasJob: false }, { id: 12, name: "Denver", hasJob: false },
        { id: 6, name: "Tomothy", hasJob: false }, { id: 13, name: "Tommy", hasJob: false },
        { id: 7, name: "Sabastian", hasJob: false },
    ]
}

const GarageReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_JOB:
            // console.log("Reducer working", action)'
            return{
                ...state,
                jobs: [...state.jobs, { ...action.payload }]
            }
        case ASSIGN_JOB:
            // let tempEmployees = state.employees
            // cur_index = action.payload.employeeId -1
            // tempEmployees[cur_index].hasJob = true
            // console.log("We have assigned", state.employees)

            let tempEmployees = state.employees
            let tempJobs = state.jobs
            let emp_name = ""
            let emp_id
            tempEmployees.forEach(item => {
                if(item.id == action.payload.employeeId) {
                    // console.log("We have assigned", action.payload.employeeId)
                    item.hasJob = true
                    emp_name = item.name
                    emp_id = item.id
                    tempJobs.forEach(job => {
                        if(job.id == action.payload.jobId) {
                            job.isAssigned = true
                            job.employee.name = emp_name
                            job.employee.id = emp_id
                            return{
                                ...state,
                                employees: tempEmployees,
                                jobs: tempJobs
                            }
                        }
                    })
                    
                } else {
                    console.log("We have assigned again", action.payload.employeeId)
                }
            })
            
        default:
            return state
    }
}

export default GarageReducer