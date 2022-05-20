export const ADD_JOB = "ADD_JOB";

export const addJobAction = (job) => {
    // console.log("Action working", job)
    return { type: ADD_JOB, payload: job }
}