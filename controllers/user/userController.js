const {
  approveAMaterial,
  materialNotApproved,
} = require("./services/regular_students/course_rep/materialApproval/materialApproval");
const {
  getStudents, getStudentsExceptSeeker,
} = require("./services/regular_students/normal/getStudents");
const {
  viewMaterialsPending,
  viewMaterialsPendingForACourse,
  viewMaterialsApproved,
  viewMaterialsApprovedForACourse,
} = require("./services/regular_students/normal/materialDisplay/materialDisplay");
const {
  materialUpload,
} = require("./services/regular_students/normal/materialUpload/materialUpload");
const {
  searchForStudents,
} = require("./services/regular_students/normal/searchFor/searchForStudents/searchForStudents");

/* General services begins */
// gets all students
exports.getStudents = getStudents;
// gets all students except seeker
exports.getStudentsExceptSeeker = getStudentsExceptSeeker;
// searches for students
exports.searchForStudents = searchForStudents;
/* General services ends */

/* Materials services begins */
// uploads pdf
exports.uploadMaterial = materialUpload;

// view pdfs
exports.approvedMaterials = viewMaterialsApproved;

// view pdfs awaiting approval
exports.pendingMaterials = viewMaterialsPending;

// approves the pdf file
exports.approveMaterial = approveAMaterial;

// disapproves the pdf file
exports.disapproveMaterial = materialNotApproved;

// view Materials for a course
exports.approvedMatsCourse = viewMaterialsApprovedForACourse;

// view Pending Materials for a course
exports.pendingMatsCourse = viewMaterialsPendingForACourse;
/* Materials services ends */

/* Messaging services begins */
/* Messaging services ends */

/* Profile services begins */
/* Profile services ends */

/* Post services begins */
/* Post services ends */

/* Election services begins */
/* Election services ends */
