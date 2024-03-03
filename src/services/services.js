import { db,auth } from "../firebase";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import {collection,getDocs,where,query,addDoc,doc,orderBy,getFirestore,getDoc, onSnapshot, Firestore, setDoc} from 'firebase/firestore'


const services ={

    auten:()=>{

        return new Promise((resolve,reject)=>{

            let user = localStorage.getItem('user')

            user = JSON.parse(user)||{}

            if(user!==null){

                if(user.uid.length>0){

                    const docRef = doc(db,'customers',user.id)

                    getDoc(docRef).then((res)=>{


                        if(res.exists()){
                            resolve(true)
                        }else{
 
                            reject(false)

                        }

                    }).catch((err)=>{
                        reject(err)
                    })

                }else{

                    reject(false)

                }

            }else{

                reject(false)

            }

        })

    },

    autentication:()=>{

        return new Promise((resolve,reject)=>{

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth,googleProvider).then((res)=>{
            
            const user = res.user

            const q = query(collection(db,'customers'),where('uid','==',user.uid))

            getDocs(q).then((res)=>{

                if(res.docs.length===0){

                    addDoc(collection(db,'customers'),{
                        uid:user.uid,
                        name:user.displayName,
                        authProvider:'local',
                        email:user.email
                    }).then((res)=>{

                        localStorage.setItem('user',JSON.stringify({
                            uid:user.uid,
                            name:user.displayName,
                            authProvider:'local',
                            email:user.email,
                            id:res.id
                        }))

                        resolve(true)
                        
                    })

                }else{

                    res.docs.forEach((i)=>{

                        let allData=i.data()

                         allData.id=i.id

                        localStorage.setItem('user',JSON.stringify(allData))

                    })

                    resolve(true)

                }

            })

        }).catch((err)=>reject(err))

    })

    },

    getSingelData:(colc,id)=>{

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


    addData:(colc,data)=>{

        return new Promise((resolve,reject)=>{

              addDoc(collection(db,colc),data).then((res)=>{

                resolve(true)

              }).catch((err)=>{

                reject(false)

              })

        })

    },

    gerData:(colc,activeField,field,id)=>{

        return new Promise((resolve,reject)=>{

            let q

             if(id){

                if(colc==='addresses'||colc==='orders'){

                    if(colc==='addresses'){

                        q=query(collection(db,colc),where(field,'==',id))

                    }else{

                        q=query(collection(db,colc),where(field,'==',id),orderBy('date'))

                    }

                    

                }else{

                    q=query(collection(db,colc),where(field,'==',id),where(activeField,'==',true))

                }

             }else{

                if(colc==='sellers'){

                    q=query(collection(db,colc))

                }else q = query(collection(db,colc),where(activeField,'==',true))

                

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

        if(cart=== null){
            return 
        }

        cart = JSON.parse(cart) || []

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

    },

    getCart:()=>{

        let cart = localStorage.getItem('cart')

        cart = JSON.parse(cart)||[]

        return cart

    },

    inFvrt :id=>{

        let fvrt = localStorage.getItem('faverote')

        fvrt = JSON.parse(fvrt) || []

        if(fvrt.length===0){

            return false

        }  

        return fvrt.includes(id)

    },
    
    addFvrt:(id,inFvrt)=>{

        

        let fvrt = localStorage.getItem('faverote')

        fvrt = JSON.parse(fvrt) || []

        if(inFvrt){

             fvrt = fvrt.filter(i=>{
                return i!==id
            })

        }else{

            fvrt.push(id)

        }

        localStorage.setItem('faverote',JSON.stringify(fvrt))

    }

}

export default services