"use server";

// Diese Action nimmt Formulardaten serverseitig an.
export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const message = String(formData.get("message") ?? "");

  return { ok: true, info: `Von ${name}: ${message}` };
}
