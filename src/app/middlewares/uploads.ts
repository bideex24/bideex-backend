/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';
import * as ftp from 'basic-ftp';
const uploadDir = path.join(__dirname, 'uploads');
fs.ensureDirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });

// FTP Upload Function
export async function uploadToFTP(
  localFilePath: string,
  remoteFileName: string,
) {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Enable FTP logs

  try {
    await client.access({
      host: 'ftp.marketsprices.com',
      user: 'public@bmw.bideex.com',
      password: 'bideex@25',
      secure: false, // Change to true if using FTPS
    });

    console.log('✅ Connected to FTP');

    // Upload file to "public_html/uploads" folder
    await client.ensureDir('public/uploads');
    await client.uploadFrom(localFilePath, `uploads/${remoteFileName}`);

    console.log('🎉 File uploaded successfully!');

    // Delete file from local storage after upload
    fs.unlinkSync(localFilePath);

    return `https://bmw.bideex.com/public/uploads/${remoteFileName}`;
  } catch (error) {
    console.error('❌ FTP Upload failed:', error);
    return null;
  } finally {
    client.close();
  }
}
