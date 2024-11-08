export const singlePersonFetch = async (name) => {
  try {
    let res = await fetch(
      `https://api.the-finals-leaderboard.com/v1/leaderboard/s4worldtour/crossplay?name=${name}`
    );
    return res.json();
  } catch (err) {
    console.log("Failed to fetch data");
    return err;
  }
};
