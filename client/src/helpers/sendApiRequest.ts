type Method = "GET" | "POST" | "PUT" | "DELETE";

function returnCorrectRequest(
  method: Method,
  data: unknown,
): RequestInit {
  let request: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (method !== "GET") {
    request = {
      ...request,
      body: JSON.stringify(data),
    };
  }
  return request;
}
export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {}
): Promise<T> {
  const response = await fetch(`${url}`, returnCorrectRequest(method, data));
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}
