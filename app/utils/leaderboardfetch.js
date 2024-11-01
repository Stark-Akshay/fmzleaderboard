export const leaderBoardFetch = async () => {
  try {
    let res = await fetch(
      "https://api.the-finals-leaderboard.com/v1/leaderboard/s4worldtour/crossplay?name=FMZ"
    );
    return res.json();
  } catch (err) {
    console.log("Failed to fetch data");
    return err;
  }
};
