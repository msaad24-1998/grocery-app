import { db } from "../firebase";
import {collection,getDocs,where,query,addDoc,doc,getFirestore,getDoc, onSnapshot, Firestore, setDoc} from 'firebase/firestore'


const services ={

    gerData:(colc,id)=>{

        return new Promise((resolve,reject)=>{

             if(id){



             }else{

                const q = query(collection(db,colc))

                getDocs(q).then((res)=>{

                    const data = []

                    res.forEach((i)=>{

                        let allData = i.data()

                        allData.id=i.id;

                        data.push(allData)

                    })

                    resolve(data)

                }).catch((err)=>{

                    reject(err)

                })

             }

        })

    }

}

export default services