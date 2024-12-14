// export const singlePersonFetchRanked = async (name) => {
//   try {
//     let res = await fetch(
//       `https://api.the-finals-leaderboard.com/v1/leaderboard/s4/crossplay?name=${name}`
//     );
//     return res.json();
//   } catch (err) {
//     console.log("Failed to fetch data");
//     return err;
//   }
// };

export async function singlePersonFetchRanked(slug, options = {}) {
  const res = await fetch(
    `https://api.the-finals-leaderboard.com/v1/leaderboard/s5/crossplay?name=${slug}`,
    options
  );
  const data = await res.json();
  return data;
}
