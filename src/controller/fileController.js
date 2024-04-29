export let createFileController = async (req, res, next) => {
  // console.log(req.file);
  let link = `http://localhost:8000/${req.file.filename}`;
  res.status(201).json({
    success: true,
    message: "New File added successfully",
    result: link,
  });
};
export let createMultipleFilesController = async (req, res, next) => {
  // console.log(req.files); //multiple links

  let filesLink = req.files;
  let links = filesLink.map((value, index) => {
    return `http://localhost:8000/${value.filename}`;
  });

  res.status(201).json({
    success: true,
    message: "Multiple Files added successfully",
    result: links,
  });
};
