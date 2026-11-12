import { API_BASE_URL } from "./api";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterData) => {
  //it receive userdata in object {name:sus, email"susmitadhital7gmail.com", password: "123456"}
  //and that is function get three paramter name email and password from register handlesubmit one
  // then it call api using fetch function that accept two paramater one is url and second is optional object that has method headers body
  //with method headers and body , it check these thing, if it have then it put thjaat on response and save thata data
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }
  return data;
};
