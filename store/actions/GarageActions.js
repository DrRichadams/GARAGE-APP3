export const CHANGE_JOB_NAME = "CHANGE_JOB_NAME";

export const changeJobName = (id) => {
    console.log("Action working")
    return { type: CHANGE_JOB_NAME, jobId: id }
}