export async function fetchWishes() {
  try {
    const response = await fetch("http://localhost:3000/wishes", {
      method: "GET",
    });

    let result = await response.json();
    return result;
  } catch (err) {
    console.error(
      "Wish fetching has failed, the server is not accessible!",
      err
    );
  }
}
export async function createWish(description, name, link, category) {
  try {
    await fetch("http://localhost:3000/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name,
        description: description,
        link: link,
        category: category,
      }),
    });
  } catch (err) {
    console.error("Add wish has failed!", err);
  }
}
export async function deleteWish(id) {
  try {
    await fetch(`http://localhost:3000/wishes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Wish remove has failed!", err);
  }
}
