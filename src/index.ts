import { login, loginHtml, fetchToken } from "./api/auth";
import { fetchCurrentUser, fetchUsers } from "./api/user";
import fs from "fs/promises";
import path from "path";

const USERS_JSON_PATH = path.resolve(__dirname, "../users.json");
async function main() {
  try {
    const nonce = await loginHtml();
    const cookie = await login(nonce);
    const users = await fetchUsers(cookie);
    const tokenData = await fetchToken(cookie);

    const currentUser = await fetchCurrentUser(tokenData);
    const result = {
      users,
      currentUser,
    };

    await fs.writeFile(
      USERS_JSON_PATH,
      JSON.stringify(result, null, 2),
      "utf-8"
    );
    console.log("Successfully wrote users and current user to users.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
