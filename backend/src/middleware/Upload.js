const multer = require(`multer`);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniq = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniq + ".png");
  },
});

const uploadFilter = multer({
  limits: { fileSize: 10 * Math.pow(1024, 2 /* MBs*/) },
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("File format should be .png, .jpg and .jpeg!"));
    }
  },
});

const upload = multer({ storage, uploadFilter });

module.exports = upload;
