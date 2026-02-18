// Obfuscated API configuration — NOT fully secure without a backend
const _k = [
  "7ae6855b", "b9a26a6c", "a2855897", "d2ac2401",
  "fd8a4d8a", "a678aba4", "aac481e7", "1c9bc7d2"
];
const _c = "689da489216ae571a0151b62";
const _b = "https://app.chatasbot.com";
const _to = "923090230074";

function _getKey(): string {
  return _k.join("");
}

interface SendMessagePayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}

export async function sendFormNotification(payload: SendMessagePayload): Promise<boolean> {
  const formattedMessage = [
    `🔔 *New ${payload.source || "Contact"} Form Submission*`,
    ``,
    `👤 *Name:* ${payload.name}`,
    `📧 *Email:* ${payload.email}`,
    payload.phone ? `📞 *Phone:* ${payload.phone}` : null,
    ``,
    `💬 *Message:*`,
    payload.message,
    ``,
    `📅 *Date:* ${new Date().toLocaleString("en-GB", { timeZone: "Asia/Karachi" })}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch(`${_b}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: _getKey(),
      },
      body: JSON.stringify({
        clientId: _c,
        to: _to,
        message: formattedMessage,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Message send failed:", error);
    return false;
  }
}

// Simple math captcha generator
export function generateCaptcha(): { question: string; answer: number } {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
}
