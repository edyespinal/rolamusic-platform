async function migration() {
  await fetch("/api/migrate", {
    method: "POST",
    body: JSON.stringify({}),
  });
}

export { migration };
