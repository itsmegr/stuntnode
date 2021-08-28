import { StudentDAO } from "../DAO/DAO.student"
import { StudentInterface } from "../Interfaces/Interfaces.all"
const insertStudentData = async (studentData : StudentInterface) =>{
    return new Promise<boolean>(async (resolve, reject) => {
        try {
            await new StudentDAO().insertOne(studentData);
            resolve(true);
        } catch (err) {
            reject(err);
        }
    })
}
const getAllStudents = async () =>{
    return new Promise<any>(async (resolve, reject) => {
        try {
            let dbres = await new StudentDAO().findAll();
            resolve(dbres);
        } catch (err) {
            reject(err);
        }
    })
}
const _noOfStudentsQuery1 = [
    {
        $match: {
          class: "science",
          society: {
            $elemMatch: {
              $eq: "theatre",
            },
          },
        },
    },
    {
        $count: "number_of_students"
    }
];
const _studentQuery2 = [
    {
        $match: {
          year: { $gt: 15 },
          class: { $in :["arts", "science"] },
          society: {
            $elemMatch: {
              $eq: "swimming",
            },
          },
        },
    }
];
const q1Result = async () =>{
    return new Promise<any>(async (resolve, reject) => {
        try {
            let dbres = await new StudentDAO().performAggregation(_noOfStudentsQuery1);
            resolve(dbres);
        } catch (err) {
            reject(err);
        }
    })
}
const q2Result = async () =>{
    return new Promise<any>(async (resolve, reject) => {
        try {
            let dbres = await new StudentDAO().performAggregation(_studentQuery2);
            resolve(dbres);
        } catch (err) {
            reject(err);
        }
    })
}
export { insertStudentData, getAllStudents,q1Result, q2Result };
