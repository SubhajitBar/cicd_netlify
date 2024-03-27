import { JsonData } from "../model/data.js";
// import AllData from "../jsondata.json" assert {type: "json"};
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const addJsonData = catchAsyncError(async (req, res, next) => {

//     let data = await JsonData.find();
//     if (data.length !== 0) return next(new ErrorHandler("Data Already Exist", 400));

//     data = await JsonData.create(AllData);

//     res.status(201).json({
//         success: true,
//         message: " Data Inserted Successfully"
//     })

});


export const getAllData = catchAsyncError(async (req, res, next) => {
    const data = await JsonData.find();
    if (data.length === 0) return next(new ErrorHandler("Data not found", 404));

    res.status(200).json({
        success: true,
        message: `${data.length} records found`,
        data
    });
});
export const get10Data = catchAsyncError(async (req, res, next) => {
    const data = await JsonData.find().limit(10);
    if (data.length === 0) return next(new ErrorHandler("Data not found", 404));

    res.status(200).json({
        success: true,
        message: `${data.length} records found`,
        data
    });
});

export const deleteAllData = catchAsyncError(async (req, res, next) => {
    const data = await JsonData.find();
    if (data.length === 0) return next(new ErrorHandler("Data not found", 404));

    await JsonData.deleteMany()

    res.status(200).json({
        success: true,
        message: `All data deleted successfuly`,
    });
});