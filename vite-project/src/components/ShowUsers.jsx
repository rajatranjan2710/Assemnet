import React, { useEffect, useState } from "react";
import { useUserStore } from "../store/user.store";
import toast from "react-hot-toast";

const ShowUsers = () => {
  const { users, fetchUsers, updateUser, deleteUser } = useUserStore(); // Access Zustand functions

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, [users]);

  // Handle editing of a specific field
  const handleEdit = (index, field, value) => {
    setEditIndex(index);
    setEditData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Handle saving the updated data
  const handleUpdate = async (index) => {
    const userId = users[index]._id;
    try {
      await updateUser(userId, editData);
      // Call the updateUser function from Zustand
      toast.success("User updated successfully!");
      setEditIndex(null);
      setEditData({});
    } catch (error) {
      toast.error("Failed to update user!");
    }
  };

  // Handle deleting a user
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Call the deleteUser function from Zustand
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user!");
    }
  };

  return (
    <section className="show-users">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editData.name || user.name}
                    onChange={(e) => handleEdit(index, "name", e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editData.email || user.email}
                    onChange={(e) => handleEdit(index, "email", e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="date"
                    value={editData.dob || user.dob}
                    onChange={(e) => handleEdit(index, "dob", e.target.value)}
                  />
                ) : (
                  user.dob.split("T")[0]
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button onClick={() => handleUpdate(index)}>Update</button>
                ) : (
                  <>
                    <button onClick={() => setEditIndex(index)}>Edit</button>
                    <button onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ShowUsers;
