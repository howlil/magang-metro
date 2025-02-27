var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const server = require("./routes/index");
const multer = require("multer");
const cors = require("cors");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/fotoTim", express.static("public/images/tim"));
app.use("/fotoGaleri", express.static("public/images/galeri"));
app.use("/fotoPostingan", express.static("public/images/postingan"));
app.use("/filePortofolio", express.static("public/portofolio"));
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);


app.use("/", server.admin);
app.use("/", server.dashboard);
app.use("/", server.postingan);
app.use("/", server.kategori);
app.use("/", server.galeri);
app.use("/", server.tim);
app.use("/", server.posisi);
app.use("/", server.landingPage);
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  } else {
    next(err);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
