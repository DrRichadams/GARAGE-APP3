export const ADD_JOB = "ADD_JOB";
export const ASSIGN_JOB = "ASSIGN_JOB";
export const TICK_JOB_TASK = "TICK_JOB_TASK";
export const SAVE_REPORT = "SAVE_REPORT";

export const addJobAction = (job) => {
    // console.log("Action working", job)
    return { type: ADD_JOB, payload: job }
}

export const assignJobAction = ( jobId, employeeId ) => {
    return{ type: ASSIGN_JOB, payload: { jobId, employeeId } }
}

export const tickJobTask = ( jobId, taskId ) => {
    return{ type: TICK_JOB_TASK, payload: { jobId, taskId } }
}

export const saveReport = ( jobId, report ) => {
    return{ type: SAVE_REPORT, payload: { jobId, report } }
}