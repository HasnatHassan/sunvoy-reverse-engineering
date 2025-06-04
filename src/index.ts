import { login, loginHtml } from "./api/auth";

async function main() {
  try {
    const nonce = await loginHtml();
    const cookie = await login(nonce);
    console.log(cookie);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();
