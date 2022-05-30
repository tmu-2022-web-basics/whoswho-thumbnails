const fs = require('fs');

const srcdir = '../';

fs.readdir(srcdir, (err, files) => {
  if (err) {
    throw err;
  }

  const students = files.filter(d => d.match(/^2/));

  for (const student of students) {
    const thumbnail = `${srcdir}${student}/images/thumbnail.png`;
    if (checkFileExistsSync(thumbnail)) {
      fs.copyFileSync(thumbnail, `./${student}.png`);
    }
  }

  // console.log(thumbnails);
});

function checkFileExistsSync(filepath) {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
  } catch (e) {
    flag = false;
  }
  return flag;
}
