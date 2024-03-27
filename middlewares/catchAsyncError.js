export const catchAsyncError = (passedfunction) => async (req, res, next) => {
    Promise.resolve(passedfunction(req, res, next)).catch(next);
}