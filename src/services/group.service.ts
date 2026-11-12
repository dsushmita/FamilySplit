import { API_BASE_URL } from "./api";

export interface Group {
  id: string;
  name: string;
  createdAt: string;
  createdById: string;
  _count?: {
    members: number;
  };
}

//get or retrieve groups belonging to the logged in user
export const fetchGroups = async (token: string): Promise<Group[]> => {
  const response = await fetch("", {
    headers: { Authorization: `Bearer ${token}` },
  }); //this line check does the header have authorization token
  if (!response.ok) {
    throw new Error("Failed to fetch groups");
  }
  const data = await response.json(); //if it has authorization token it keep that response
  return data.groups; //and it saves that group too
};

// Create a group using the authenticated user's JWT.
export const createGroup = async (
  name: string,
  token: string,
): Promise<Group> => {
  const response = await fetch(`${API_BASE_URL}/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, //it send the jwt so that middleware of backend can identify the users.
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error("Failed to create group");
  }
  const data = await response.json();
  return data.group;
};
