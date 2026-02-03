export const validateForm = (req, res, next) => {

    if (!req.body.title) {
        return res.status(400).json({
            message: "title is required"
        })
    }

    if (!req.body.content) {
        return res.status(400).json({
            message: "content is required"
        })
    }

    if (req.body.content.length < 500 || req.body.content.length > 1000) {
        return res.status(400).json ({
            message : "Content must be between 500 and 1000 characters"
        })
    }

    if (!req.body.category) {
        return res.status(400).json({
            message: "category is required"
        })
    }

    const categoryList = ["Math" , "English" , "Biology"]
    const hasCategoryList = categoryList.includes(req.body.category)

    if (!hasCategoryList) {
        return res.status(400).json ({
            message : "Invalid category. Allowed: 'Math' 'English' 'Biology'"
        })
    }

    if (!req.body.email) {
        return res.status(400).json({
            message: "email is required"
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(req.body.email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }


    next();
}