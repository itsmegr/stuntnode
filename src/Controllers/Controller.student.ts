import RouteHandler from "./RouteHandlerType";
import { StudentInterface } from "../Interfaces/Interfaces.all";
import { getAllStudents, insertStudentData, q1Result, q2Result } from "../Services/Services.student";
import { StudentDAO } from "../DAO/DAO.student";

/*
controller for the post request coming to '/translate'
calls the main function in service(model), get the response/error
and send back to user
*/
const postCreate : RouteHandler = async (req, res, next) => {
  try {
    const studentData : StudentInterface = req.body;
    await insertStudentData(studentData);
    res.json({
      status : 201,
      msg : "data inserted succesfully"
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getStudents: RouteHandler = async (req, res, next) => {
  try {
    let allstds  = await getAllStudents();
    res.json({
      status : 200,
      students : allstds,
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getQ1: RouteHandler = async (req, res, next) => {
  try {
    let q1Res  = await q1Result();
    res.json({
      status : 200,
      numberOfStudent : q1Res,
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getQ2: RouteHandler = async (req, res, next) => {
  try {
    let q2Res  = await q2Result();
    res.json({
      status : 200,
      students : q2Res,
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export { postCreate, getStudents,getQ1, getQ2 }
