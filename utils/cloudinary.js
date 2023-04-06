const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "mistoresv",
    });

    return result;
  } catch (error) {
    onsole.log(error);

    throw new Error("Error al cargar la imagen en cloudinary");
  }
}

async function deleteImage(publicId) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.log(error);

    throw new Error("Error al eliminar la imagen en cloudinary");
  }
}

async function updateImage(publicId) {
  try {
    const result = await cloudinary.uploader.upload(newImagePath, {
      public_id: publicId,
    });
    console.log(result);
    return result.secure_url;
  } catch (error) {
    onsole.log(error);

    throw new Error("Error al cargar la imagen en cloudinary");
  }
}

module.exports = { uploadImage, deleteImage };
