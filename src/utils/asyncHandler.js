const asyncHandler = (fn) => (req, res, next) => {
    (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
};




export {asyncHandler}



// const asyncHandler = (fn) => (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//         })
//     }

// }