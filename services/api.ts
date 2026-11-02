export async function checkBackend() {
  const response = await fetch("http://localhost:3001/api/health");

  const data = await response.json();

  return data.message;
}