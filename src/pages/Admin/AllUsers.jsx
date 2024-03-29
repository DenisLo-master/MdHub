import React, { useState, useEffect } from 'react'
import { UserPlaceholder } from '../../assets'
import dayjs from "dayjs"
import { FaSpinner, FaTimes } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'

const AllUsers = () => {
  const [deleteDocId, setDeleteDocId] = useState("")
  const [users, setUsers] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem("jwtToken")
  const navigate = useNavigate()

  const deleteUser = async (userId) => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      if (response.status === 200) {
        toast.success("The user has been deleted", {
          id: "user deleted"
        })
        setShowDeleteModal(false)
        setUsers(users.filter(user => user._id !== userId))
      } else {
        toast.error("Failed to delete the user", {
          id: "user deletion failed"
        })
        setShowDeleteModal(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch(`https://mdhub-server.onrender.com/api/v1/users/get_users_payment_info`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllUsers()
  }, [])

  return (
    <section className="flex-1">
      <div className="flex flex-col lg:flex-row gap-x-10 px-4 text-dark">
        <article className="w-full bg-[#F9F9F9] p-8 rounded-lg font-body">
          <h2 className="pb-6 text-xl">All users</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Date joined</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={`{item#${index}}`}
                    className={`${index !== users.length ? "border-b border-gray-200 relative" : ""
                      }`}
                  >
                    <td onClick={() => navigate(`/admin/user_info/${user._id}`)} className=" cursor-pointer py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={UserPlaceholder}
                            alt={`${user?.firstName} ${user?.lastName}`}
                          />
                        </div>
                        <span>{`${user.firstName} ${user.lastName}`}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {dayjs(user.createdAt).format('MMMM D, YYYY')}
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap flex items-center gap-x-2">
                      <article className={`${user.latestPayment.amount ? "bg-[#48D667]" : "bg-red-700"} rounded-full w-4 h-4`} />
                      <p className="w-full max-w-[90px]">
                        {user.latestPayment.amount ?
                          "Payment up to date " :
                          "Payment not found"
                        }
                      </p>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div
                        onClick={() => {
                          setShowDeleteModal(true)
                          setDeleteDocId(user._id)
                        }}
                        className="absolute z-10 right-0 top-3 cursor-pointer"
                      >
                        <FaTimes />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
      <Modal
        key="delete modal"
        title="Delete User"
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
      >
        <section section className="p-6 font-body" >
          <div className="w-full">
            <p>Confirm Delete? </p>
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
                {isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Delete"}
              </button>
            </div>
          </div>
        </section >
      </Modal>
    </section>
  )
}

export default AllUsers