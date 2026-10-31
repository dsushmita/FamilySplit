import { useState, type FormEvent } from "react";

function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!groupName.trim()) {
      setError("Group name is required.");
      return;
    }

    setError("");

    console.log("New group:", groupName);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">

        <h1 className="mb-6 text-2xl font-bold">
          Create New Group
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <label
            htmlFor="groupName"
            className="mb-2 block text-sm font-medium"
          >
            Group Name
          </label>

          <input
            id="groupName"
            type="text"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
            placeholder="e.g. Family Expenses"
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          {error && (
            <p className="mt-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;