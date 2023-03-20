import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'
import dayjs from 'dayjs'
import { TiTick } from 'react-icons/ti'


const GetUserInfoAdmin = () => {
  const [user, setUser] = useState([])
  const { id } = useParams()
  const loginCodeRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem("jwtToken")
  const [editLoginCode, setEditLoginCode] = useState(false)
  const [codeValue, setCodeValue] = useState("")

  const updateCode = async (e) => {
    e.preventDefault()
    setEditLoginCode(false)
    setLoading(true)
    try {
      const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/updateCode/${user._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ codeValue })
      })
      await response.json()
      setLoading(false)
      toast.success("The code has been updated", { id: "update user code" })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json()
      console.log(data)
      setUser(data.userInfo)
      setCodeValue(data.userInfo.loginCode)
    }
    getUser()
  }, [])

  return (
    <section className="py-8 px-4 w-full">
      <h2 className="text-4xl">{`${user.firstName} ${user.lastName}`}</h2>
      <div className="w-full font-body max-w-xl grid grid-cols-1 py-5 lg:grid-cols-2 gap-4">
        <article>
          <h2 className="font-semibold">Email:</h2>
          <p>{user.email}</p>
        </article>
        <article>
          <h2 className="font-semibold">Phone:</h2>
          <p>{user.phone}</p>
        </article>
        <article>
          <h2 className="font-semibold">Address:</h2>
          <p>{`${user.address}, ${user.city}, ${user.region}, ${user.country}`}</p>
        </article>
        <article>
          <h2 className="font-semibold">Login Code:</h2>
          <div>
            {
              editLoginCode ? (
                <form onSubmit={updateCode} className="flex gap-x-1 items-center relative">
                  <input
                    ref={loginCodeRef}
                    onChange={({ target }) => setCodeValue(target.value)}
                    value={codeValue}
                    className="w-[130px] pl-2 rounded bg-slate-200 outline-none"
                    type="text"
                    autoFocus
                  />
                  <div className="flex gap-x-1 text-lg">
                    <button type="submit">
                      <TiTick className="cursor-pointer" />
                    </button>
                    <div className="cursor-pointer" onClick={() => setEditLoginCode(false)}>
                      {loading ? <FaSpinner className="animate-spin mr-2" /> : <AiOutlineClose />}
                    </div>
                  </div>
                </form>
              )
                :
                (
                  <div className="flex items-center gap-x-1">
                    <p className="w-[130px] pl-2">{user.loginCode}</p>
                    <div className="cursor-pointer" onClick={() => {
                      setEditLoginCode(true)
                      loginCodeRef.current.focus()
                    }}>
                      {loading ? <FaSpinner className="animate-spin mr-2" /> : <BsPencilSquare />}
                    </div>
                  </div>
                )
            }
          </div>
        </article>
        <article>
          <h2 className="font-semibold">Date Joined:</h2>
          <p>{dayjs(user.createdAt).format('MMMM D, YYYY')}</p>
        </article>
        <article>
          <h2 className="font-semibold">Last Logged In:</h2>
          <p>{dayjs(user.lastLoggedIn).format('dddd, MMMM D, YYYY h:mm A') || "Date not found"}</p>
        </article>
        <article>
          <h2 className="font-semibold">Account Type:</h2>
          <p className="capitalize">{`${user.accountType} ${user.paymentMode}`}</p>
        </article>
      </div>
    </section>
  )
}

export default GetUserInfoAdmin