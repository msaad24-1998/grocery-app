import { db } from "../firebase";
import {collection,getDocs,where,query,addDoc,doc,getFirestore,getDoc, onSnapshot, Firestore, setDoc} from 'firebase/firestore'


const services ={

    getSingelData:(colc,id)=>{

        console.log(colc,id);
        return new Promise((resolve,reject)=>{

            const docRef=doc(db,colc,id)

            getDoc(docRef).then((res)=>{

                let allData=res.data()

                allData.id=res.id

                resolve(allData)

            }).catch((err)=>{
                reject(err)
            })

        })

    },

    gerData:(colc,field,id)=>{

        console.log(field,id);

        return new Promise((resolve,reject)=>{

            let q

             if(id){

                q=query(collection(db,colc),where(field,'==',id))

             }else{

                 q = query(collection(db,colc))

             }

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

        })

    },

    addToCart:(id)=>{

        const obj={
            id:id,
            qty:1
        }

        let cart = localStorage.getItem('cart')

        cart = JSON.parse(cart)

        cart.push(obj)

        localStorage.setItem('cart',JSON.stringify(cart))

    },

    cart:(id)=>{

        let cart = localStorage.getItem('cart')

        cart = JSON.parse(cart)

        const index =cart.findIndex((i)=>{
            return i.id===id
        })

        if(index===-1){

            return -1

        }else{

            return cart[index]

        }

    },

    incdec:(id,inc)=>{


        let cart = localStorage.getItem('cart')

        cart = JSON.parse(cart)

        const index =cart.findIndex((i)=>{
            return i.id===id
        })

        if(inc){

            cart[index].qty=cart[index].qty+1;

            localStorage.setItem('cart',JSON.stringify(cart))


        }else{

            if(cart[index].qty===1){

              const rem= cart.filter((i)=>{

                return i.id!==id

               })

               localStorage.setItem('cart',JSON.stringify(rem))

            }else{

                cart[index].qty=cart[index].qty-1

                localStorage.setItem('cart',JSON.stringify(cart))

            }

        }

    }

}

export default services