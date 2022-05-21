export const ADD_JOB = "ADD_JOB";
export const ASSIGN_JOB = "ASSIGN_JOB";

export const addJobAction = (job) => {
    // console.log("Action working", job)
    return { type: ADD_JOB, payload: job }
}

export const assignJobAction = ( jobId, employeeId ) => {
    return{ type: ASSIGN_JOB, payload: { jobId, employeeId } }
}