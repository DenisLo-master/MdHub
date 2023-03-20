import React, { useEffect, useState, useRef } from 'react'
import { UserPlaceholder } from '../../assets'
import dayjs from "dayjs"
import Modal from '../../components/Modal'
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineEnter, AiOutlineClose } from 'react-icons/ai'
import toast from "react-hot-toast"

const Dashboard = () => {
  const [usersThisWeek, setUsersThisWeek] = useState([])
  const [deletedUsersThisWeek, setDeletedUsersThisWeek] = useState([])
  const [editLoginCode, setEditLoginCode] = useState(false)
  const codeRef = useRef(null)
  const [totalRevenue, setTotalRevenue] = useState("")
  const [numberOfSubscriptions, setNumberOfSubscriptions] = useState("")
  const [codeValue, setCodeValue] = useState("")
  const [showUserModal, setShowUserModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const token = localStorage.getItem("jwtToken")

  const updateCode = async (e) => {
    e.preventDefault()
    setEditLoginCode(false)
    try {
      const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/updateCode/${selectedUser._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ codeValue })
      })
      await response.json()
      toast.success("The code has been updated", { id: "update user code" })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/get_user_info`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const data = await response.json()
        setUsersThisWeek(data.data.usersThisWeek)
        setDeletedUsersThisWeek(data.data.deletedUsers)
        setTotalRevenue(data.data.totalRevenue)
        setNumberOfSubscriptions(data.data.numberOfSubscriptions)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])


  return (
    <section className="pt-4 lg:pt-0">
      <div className="flex flex-col lg:flex-row gap-x-10 px-4 text-dark gap-y-4">
        <article className="flex flex-col gap-y-10">
          <div className="w-full max-w-[416px] bg-[#F9F9F9] shadow-cardService rounded-lg">
            <h2 className="pb-6 text-xl pl-6 pt-6">New users this week</h2>
            <table className="w-full font-body">
              <thead>
                <tr className="uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Date joined</th>
                </tr>
              </thead>
              <tbody>
                {usersThisWeek.map((user, index) => (
                  <tr
                    onClick={() => {
                      setSelectedUser(user)
                      setCodeValue(user.loginCode)
                      setShowUserModal(true)
                    }}
                    key={`{item#${index}}`}
                    className={`cursor-pointer ${index !== usersThisWeek.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="hidden lg:block w-10 h-10 rounded-full"
                            src={UserPlaceholder}
                            alt={`${user.firstName} ${user.lastName}`}
                          />
                        </div>
                        <span>{`${user.firstName} ${user.lastName}`}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {dayjs(user.createdAt).format('MMMM D, YYYY')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-cardService w-full lg:w-[416px] space-y-6">
            <h3 className="text-xl">
              Number of total subscriptions:
            </h3>
            <h2 className="text-primary text-3xl">
              {numberOfSubscriptions}
            </h2>
          </div>
        </article>

        <article className="flex flex-col gap-y-10">
          <div className="w-full max-w-[416px] bg-[#F9F9F9] shadow-cardService rounded-lg">
            <h2 className="pb-6 text-xl pl-6 pt-6">Deactivated Accounts</h2>
            <table className="w-full font-body">
              <thead>
                <tr className="uppercase text-sm leading-normal"
                >
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Date Deactivated</th>
                </tr>
              </thead>
              <tbody>
                {deletedUsersThisWeek.map((user, index) => (
                  <tr
                    onClick={() => {
                      setSelectedUser(user)
                      setShowUserModal(true)
                    }}
                    key={user._id}
                    className={`cursor-pointer ${index !== deletedUsersThisWeek.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="hidden lg:block w-10 h-10 rounded-full"
                            src={UserPlaceholder}
                            alt={`${user.firstName} ${user.lastName}`}
                          />
                        </div>
                        <span>{`${user.firstName} ${user.lastName}`}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {dayjs(user.createdAt).format('MMMM D, YYYY')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-cardService w-full lg:w-[416px] space-y-6">
            <h3 className="text-xl">
              Total revenue this month:
            </h3>
            <h2 className="text-primary text-3xl">
              ${totalRevenue}
            </h2>
          </div>
        </article>
      </div>
      <Modal
        key="show user info"
        title="User Information"
        showModal={showUserModal}
        setShowModal={setShowUserModal}
      >
        <section section className="p-6 font-body" >
          <div className="w-full">
            <article className="flex gap-x-5">
              <div className="flex flex-col items-center gap-y-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={UserPlaceholder}
                  alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
                />
                <span className="text-center">{`${selectedUser.firstName} ${selectedUser.lastName}`}</span>
              </div>
              <div>
                <article className='flex justify-around flex-wrap gap-5'>
                  <div>
                    <strong>Name: </strong>
                    <p>{`${selectedUser.firstName} ${selectedUser.lastName}`}</p>
                  </div>
                  <div>
                    <strong>Email: </strong>
                    <p>{selectedUser.email}</p>
                  </div>
                  <div>
                    <strong>Phone: </strong>
                    <p>{selectedUser.phone}</p>
                  </div>
                  <div className="w-[160px]">
                    <strong>Login Code: </strong>
                    <div>
                      {
                        editLoginCode ? (
                          <form onSubmit={updateCode} className="flex gap-x-1 items-center relative">
                            <input
                              ref={codeRef}
                              onChange={({ target }) => setCodeValue(target.value)}
                              value={codeValue}
                              className="w-[130px] bg-slate-200 outline-none"
                              type="text"
                              autoFocus
                            />
                            <button className="absolute right-10 top-1" type="submit">
                              <AiOutlineEnter className="cursor-pointer" />
                            </button>
                            <div className="cursor-pointer" onClick={() => setEditLoginCode(false)}>
                              <AiOutlineClose />
                            </div>
                          </form>
                        )
                          :
                          (
                            <div className="flex items-center gap-x-1">
                              <p className="w-[130px]">{selectedUser.loginCode}</p>
                              <div className="cursor-pointer" onClick={() => {
                                setEditLoginCode(true)
                                codeRef.current.focus()
                              }}>
                                <BsPencilSquare />
                              </div>
                            </div>
                          )
                      }
                    </div>
                  </div>
                  <div>
                    <strong>Address: </strong>
                    <p>
                      {`
                        ${selectedUser.postalCode} 
                        ${selectedUser.address}, 
                        ${selectedUser.city}, 
                        ${selectedUser.region},
                        ${selectedUser.country},
                      `}
                    </p>
                  </div>
                </article>
              </div>
            </article>
            <div className="w-full flex gap-x-3 flex-row-reverse">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-400 text-white rounded-lg px-8 py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteUser(deleteDocId)}
                className="bg-red-700 text-white rounded-lg px-8 py-2"
              >
                Delete
              </button>
            </div>
          </div>
        </section >
      </Modal>
    </section>
  )
}

export default Dashboard