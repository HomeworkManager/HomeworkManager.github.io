export default (query, variables) =>
  fetch("https://realm.mongodb.com/api/client/v2.0/app/application-0-eomix/graphql", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    sessionStorage.clear();
  });
