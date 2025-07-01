const multer = require("multer");
const path = require("path");

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    // Allow only images
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only .jpeg, .jpg and .png format allowed!"), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  },
}).single("image");

// Wrapper function to handle multer errors
const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      console.error("Multer error:", err);
      return res.status(400).json({
        message: "File upload error",
        error: err.message,
      });
    } else if (err) {
      console.error("Unknown upload error:", err);
      return res.status(400).json({
        message: "File upload error",
        error: err.message,
      });
    }
    // Everything went fine
    next();
  });
};

module.exports = uploadMiddleware;
