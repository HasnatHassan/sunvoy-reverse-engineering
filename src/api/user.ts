import qs from "qs";
import axios from "axios";

export async function fetchUsers(cookie: string) {
  const res = await axios.post("https://challenge.sunvoy.com/api/users", null, {
    headers: { Cookie: cookie },
  });
  return res.data;
}

export async function fetchCurrentUser(tokenData: any) {
  const res = await axios.post(
    "https://api.challenge.sunvoy.com/api/settings",
    qs.stringify(tokenData), // converts the object to URL-encoded form
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return res.data;
}
