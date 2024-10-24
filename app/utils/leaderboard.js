import axios from "axios";

export const leaderBoard = async () => {
  try {
    var response = await axios.get(
      "https://api.the-finals-leaderboard.com/v1/leaderboard/s4worldtour/crossplay?name=FMZ"
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
