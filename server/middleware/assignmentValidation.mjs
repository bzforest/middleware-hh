

const assignmentValidation = (req, res, next) => {
  const { title, content, category, requirements, created_at, updated_at } =
    req.body;

  if (
    !title ||
    !content ||
    !category ||
    !requirements ||
    !created_at ||
    !updated_at
  ) {
    return res.status(400).json({
      message:
        "Please provide all required information: title, content, category, requirements, created_at, updated_at",
    });
  }

  if (typeof title !== "string" || title.length > 100) {
    return res.status(400).json({
      message: "Title must be a string and not exceed 100 characters",
    });
  }

  if (typeof content !== "string" || content.length > 1000) {
    return res.status(400).json({
      message: "Content must be a string and not exceed 1000 characters",
    });
  }

  if (typeof category !== "string" || category.length > 100) {
    return res.status(400).json({
      message: "Category must be a string and not exceed 100 characters",
    });
  }

  if (typeof requirements !== "string" || requirements.length > 100) {
    return res.status(400).json({
      message: "Requirements must be a string and not exceed 100 characters",
    });
  }

  next();
};

export default assignmentValidation