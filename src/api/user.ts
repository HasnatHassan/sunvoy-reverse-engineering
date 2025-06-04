import axios from "axios";

export async function fetchUsers(cookie: string) {
  const res = await axios.post("https://challenge.sunvoy.com/api/users", null, {
    headers: { Cookie: cookie },
  });
  return res.data;
}
