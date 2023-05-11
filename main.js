const jokeButton = document.getElementById("btn");
const jokeText = document.getElementById("txt");

jokeButton.addEventListener("click", async () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();
    jokeText.innerHTML = data.setup + " " + data.punchline;
  } catch (error) {
    console.error(error);
    jokeText.innerHTML = "Failed to fetch joke. Please try again later.";
  }
});
