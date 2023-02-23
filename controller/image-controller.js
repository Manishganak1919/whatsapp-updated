import grid from "gridfs-stream";
import mongoose from "mongoose";
const url = "http://localhost:8000";

let gfs,gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'fs'
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('fs')
});
export const uploadFile = async (request, response) => {
  if (!request.file) return response.status(404).json("File not found");

  const imageUrl = `${url}/file/${request.file.filename}`
  console.log("image url is ",imageUrl)
   return response.status(200).json(imageUrl);
};

export const getImage = async (req, res) => {
  try {   
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readStream = gridFsBucket.openDownloadStream(file._id);
      readStream.pipe(res);
  } catch (error) {
      res.status(500).json({ msg: error.message });
  }
}
