/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}              //study time that student able to spend to study per week
    ) {
      let studyTimeNeeded = 1300;     //800 + 500 hours needed
      if(knowsProgramming) {
        studyTimeNeeded = 800;        //knows basics then 1300 - 500
      }
      
      //Calculate weeks needed to finish course: studyTime / Time that student can spent per week
      return Math.ceil(studyTimeNeeded / config[focus]);
  };
  