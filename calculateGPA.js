"use strict";

class Student {
  constructor(firstName, lastName, birthYear, registeredCourses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.registeredCourses = registeredCourses;
    this.age = this.calcAge();
    this.fullName = this.getFullName();
    // this.scoreSheet = this.generateRandomScores();
    this.scoreSheet = this.inputExamScores();
    this.points = this.getCoursePoint(this.scoreSheet);
    this.courseUnits = this.getCourseUnit(this.registeredCourses);
    this.GPA = this.calcGPA(this.points, this.courseUnits);
  }

  calcAge() {
    return 2023 - this.birthYear;
  }
  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  generateRandomScores() {
    let scores = [];
    for (let i = 0; i < registeredCourses.length; i++) {
      scores.push(Math.trunc(Math.random() * 100 + 1));
    }
    return scores;
  }

  inputExamScores() {
    let scores = [];
    for (let i = 0; i < this.registeredCourses.length; i++) {
      const score = userInput(
        `Please enter your score for ${registeredCourses[i]}: `
      );

      scores.push(score);
    }
    return scores;
  }
  getCoursePoint(scores) {
    let scorePoints = [];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] >= 70) {
        scorePoints[i] = 5;
      } else if (scores[i] >= 60) {
        scorePoints[i] = 4;
      } else if (scores[i] >= 50) {
        scorePoints[i] = 3;
      } else if (scores[i] >= 45) {
        scorePoints[i] = 2;
      } else if (scores[i] >= 40) {
        scorePoints[i] = 1;
      } else {
        scorePoints[i] = 0;
      }
    }
    return scorePoints;
  }

  getCourseUnit(course) {
    let courseUnit = [];
    for (let i = 0; i < course.length; i++) {
      courseUnit[i] = courseUnits[course[i]];
    }
    return courseUnit;
  }

  calcGPA(coursePoints, courseUnits) {
    let totalPoints = 0;
    let totalUnits = 0;
    for (let i = 0; i < courseUnits.length; i++) {
      totalPoints += coursePoints[i] * courseUnits[i];
      totalUnits += courseUnits[i];
    }

    return (totalPoints / totalUnits).toFixed(1);
  }
}

const courseUnits = {
  MTH101: 5,
  PHY101: 4,
  CHM101: 4,
  CHM103: 1,
  PHY107: 1,
  CSC101: 2,
  SER001: 1,
  TPD101: 1,
};

const userInput = require("prompt-sync")({ sigint: true }); //Come-back to this....I don't understand YET!!
let firstName = userInput("Please enter your First name: ");
let lastName = userInput("Please enter your Surname: ");
let birthYear = userInput("Please enter your birth year: ");
let courseList = userInput("Please input registered courses: ");

courseList = courseList.toUpperCase().replaceAll(",", " ").trim().split(" ");
let registeredCourses = [];

for (let i = 0; i < courseList.length; i++) {
  if (courseList[i] !== "") {
    registeredCourses.push(courseList[i]);
  }
}

let philip = new Student(firstName, lastName, birthYear, registeredCourses);
console.log(`GPA: ${philip.GPA}`);
