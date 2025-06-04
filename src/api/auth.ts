import axios from "axios";
import * as cheerio from "cheerio";

export async function login(nonce: string): Promise<string> {
  const response = await axios.post(
    "https://challenge.sunvoy.com/login",
    {
      nonce: nonce,
      username: "demo@example.org",
      password: "test",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "JSESSIONID=55e298eb-35ca-45fc-8ddc-07514bd84685; _csrf_token=5462a873af8191d9bbcc4eaa4fb0d21d30ffb8a6e7501d46edf639db19ba470f; analytics_id=analytics_6673a6c60516c2df9f4736be966f9bf3; device_id=device_53c6b208b0cdb3888a982e4d; feature_flags=eyJuZXdEYXNoYm9hcmQiOnRydWUsImJldGFGZWF0dXJlcyI6ZmFsc2UsImFkdmFuY2VkU2V0dGluZ3MiOnRydWUsImV4cGVyaW1lbnRhbFVJIjpmYWxzZX0%3D; session_fingerprint=50221fecd04c6135e1e204488ee544769bddb55375836aed73db7e28e2a6cbfc; tracking_consent=accepted; user_preferences=eyJ0aGVtZSI6ImxpZ2h0IiwibGFuZ3VhZ2UiOiJlbiIsInRpbWV6b25lIjoiVVRDIiwibm90aWZpY2F0aW9ucyI6dHJ1ZX0%3D",
      },
    }
  );

  return response.config.headers["Cookie"];
}

export async function loginHtml(): Promise<string> {
  const response = await axios.get("https://challenge.sunvoy.com");
  const html = response.data;

  const $ = cheerio.load(html);
  const nonce = $('input[name="nonce"]').val();

  if (!nonce || typeof nonce !== "string") {
    throw new Error("Nonce not found in login page.");
  }

  return nonce;
}
