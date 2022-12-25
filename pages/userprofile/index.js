import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button";

export default function UserProfile() {
  const { currentUser, updateDisplayName } = useAuth();
  const [isDisplayNameEditing, setIsDisplayNameEditing] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser.displayName);
  const [displayNameError, setDisplayNameError] = useState(null);
  const onDisplayNameUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDisplayName(displayName);
      setIsDisplayNameEditing(false);
    } catch (err) {
      setDisplayNameError("Error Updating Details, Please Try Again");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">User Profile</h1>
      <div className="mt-5 text-center">
        <div> Email : {currentUser.email}</div>
        {!isDisplayNameEditing && (
          <div> Display Name : {currentUser.displayName}</div>
        )}
        {isDisplayNameEditing && (
          <form className="flex flex-col mt-8 gap-1 w-full max-w-[40ch]">
            {" "}
            <label
              htmlFor="displayName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
              className="w-full rounded-md border border-[#8492a8] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0067a0] focus:shadow-md"
            />
            <div className="mt-4">
              <Button onClick={onDisplayNameUpdate}>
                <i class="fa-solid fa-check mr-3"></i> Update
              </Button>
            </div>
          </form>
        )}
      </div>
      {!isDisplayNameEditing && (
        <div className="mt-4">
          <button onClick={() => setIsDisplayNameEditing(true)}>
            Update Display Name
          </button>
        </div>
      )}
    </div>
  );
}
