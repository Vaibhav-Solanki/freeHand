const git = require("simple-git");
const db = require("./robot.json");
const commitOnDate = async ({ path, date, name }) => {
  try {
    await git().add([path]).commit(name, { "--date": date });
  } catch (error) {
    console.log(error);
  }
};
commitOnDate(db[0]);
// db.forEach(commitOnDate);
// console.log(db.length);

// const commitThis = async (curent) => {
//   try {
//     await fs.readdir(curent, (err, files) => {
//       if (err) return [];
//       else {
//         files.forEach((file) => {
//           if (path.extname(file) != "") {
//             let rand = generateRandom();
//             let Date = moment().subtract(rand, "days").format();
//             console.log({
//               name: file,
//               path: path.join(curent, file),
//               date: Date,
//             });
//           } else {
//             if (file != ".git" && file != "node_modules")
//               commitThis(path.join(curent, file));
//           }
//         });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// commitThis(__dirname);

// function generateRandom() {
//   let min = 0,
//     max = 190;
//   let difference = max - min;
//   let rand = Math.random();
//   rand = Math.floor(rand * difference);
//   rand = rand + min;
//   return rand;
// }
// const moment = require("moment");
// const fs = require("fs");
// const jsonfile = require("jsonfile");
// const path = require("path");
