import { getMongoClient } from "./DAO.mongoInit";
import { StudentInterface } from "../Interfaces/Interfaces.all";

interface IstudentDAO {
    insertOne : (studentData : StudentInterface) => Promise<any>,
    findAll : () => Promise<any>,
    updateSociety : (newSocieties : string[]) => Promise<any>,
    performAggregation  : (pipeline: any) => Promise<any>
}



class StudentDAO implements IstudentDAO {
    insertOne(studentData : StudentInterface) : Promise<any> {
        return new Promise<any> ( async (resolve, reject)=>{
            try {
                const db = getMongoClient().db("stdDB");
                const dbres = await db.collection("students").insertOne(studentData);
                console.log(dbres);
                resolve(true);
            } catch (err) {
                reject(err);
            }
        })
    }
    findAll() : Promise<any> {
        return new Promise<any> ( async (resolve, reject)=>{
            try {
                const db = getMongoClient().db("stdDB");
                const dbres = await db.collection("students").find( { } ).toArray();
                resolve(dbres);
            } catch (err) {
                reject(err);
            }
        })
    }
    updateSociety(newSocieties : string[]) : Promise<any> {
        return new Promise<any> ( async (resolve, reject)=>{
            try {
                
            } catch (err) {
                reject(err);
            }
        })
    }
    performAggregation(pipeline: any) : Promise<any> {
        return new Promise<any> ( async (resolve, reject)=>{
            try {
                const db = getMongoClient().db("stdDB");
                const dbres = db.collection("students").aggregate(pipeline).toArray();
                resolve(dbres);
            } catch (err) {
                reject(err);
            }
        })
    }
}

export { StudentDAO };