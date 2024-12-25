/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import multer from 'multer';
import path from 'path';
const UPLOAD_DIR = path.resolve(__dirname, '../../../uploads');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('only image allowed!'));
  }
};

const upload = multer({
  storage,
  fileFilter,
});
export default upload;
