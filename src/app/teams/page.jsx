// 'use client'
// import { setUser } from "@/redux/slice/userSlice"
//  import axios from "axios"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"

// export default function Teams() {
//     const dispatch = useDispatch()
//     const dataUser = useSelector((state) => state.user.user)
//     console.log(dataUser)
//     const onFetchData = async () => {
//         try {
//             const res = await axios.get('https://randomuser.me/api?results=6')
//             const response = res.data.results
//             dispatch(setUser(response))
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         onFetchData()
//     }, [])

//     return (
//         <>


//         </>
//     )
// }

const fetchData = async () => {
    try {
        let res = await fetch('https://randomuser.me/api?results=6',
            {
                cache: 'force-cache',
                next: {
                    revalidate: 5
                }
            }
        )
        res = await res.json()
        return res.results
    } catch (error) {
        console.log(error)

    }

}
export default async function Teams() {
    const dataUser = await fetchData()
    
console.log(dataUser)
    return (
        <>
           {
                dataUser.map((item, index) => {
                    return (
                        <div>{item.gender}</div>
                    )
                })
            } 
        </>
    )
}