"user server";

async function migration() {
  return fetch("/api/migrate", {
    method: "POST",
    headers: {
      Authorization: process.env.ROLA_ADMIN_KEY as string,
    },
    body: JSON.stringify({}),
  });
}

export { migration };
