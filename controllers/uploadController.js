const User = require("../models/User");
const cloudinary = require("../config/cloudinary");
const { Readable } = require("stream");
const fs = require("fs");

// Helper function to upload buffer to Cloudinary
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "profile_images",
      use_filename: true,
      unique_filename: true,
    });

    // Delete the local file after successful upload
    fs.unlinkSync(file.path);

    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};

// @desc    Upload profile image
// @route   POST /api/auth/upload-image
// @access  Private
const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If user already has an image, delete it from Cloudinary
    if (user.profileImage && user.profileImage.publicId) {
      try {
        await cloudinary.uploader.destroy(user.profileImage.publicId);
      } catch (deleteError) {
        console.error("Error deleting old image:", deleteError);
      }
    }

    // Upload new image to Cloudinary
    const result = await uploadToCloudinary(req.file);

    // Update user with new image details
    user.profileImage = {
      publicId: result.public_id,
      url: result.secure_url,
      thumbnailUrl: result.eager[0].secure_url, // Use the pre-generated thumbnail
    };

    await user.save();

    res.json({
      message: "Profile image uploaded successfully",
      profileImage: user.profileImage,
    });
  } catch (error) {
    console.error("Error in uploadProfileImage:", error);
    res.status(500).json({
      message: "Error uploading image",
      error: error.message,
    });
  }
};

module.exports = { uploadProfileImage };
