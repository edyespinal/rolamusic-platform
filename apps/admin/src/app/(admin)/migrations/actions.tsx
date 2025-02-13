async function migration() {
  return fetch("/api/migrate", {
    method: "POST",
    headers: {
      Authorization: process.env.NEXT_PUBLIC_ADMIN_KEY as string,
    },
    body: JSON.stringify({}),
  });
}

export { migration };
