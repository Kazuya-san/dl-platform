import { getLeaderboard } from "@/actions/getToken";
import { cmgApi } from "@/apiHandler/fetcherBase";
import {
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const LeaderBoard = async () => {
  // const { leaderBoard } = await getLeaderboard();
  const data = await cmgApi.get("/api/core/leaderboards", {
    order_by: "exp",
    period: "all_time",
    limit: 100,
  });

  // if (!leaderBoard) {
  //   throw Error("No Leaderboard found or UnAuthorized");
  // }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          LeaderBoard
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="py-2 px-4 border-b dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Name
              </th>
              <th className="py-2 px-4 border-b dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Rank
              </th>

              <th className="py-2 px-4 border-b dark:border-gray-600 text-gray-900 dark:text-gray-100">
                XP
              </th>
              <th className="py-2 px-4 border-b dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Social
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry: any, index: number) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-700"
                    : "bg-white dark:bg-gray-800"
                }
              >
                <td className="py-2 px-4 border-b dark:border-gray-600 text-center text-gray-900 dark:text-gray-100 flex items-center justify-center">
                  <a href={entry.profileUrl} target="_blank">
                    <div className="flex items-center gap-2 w-[100px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={entry.avatarUrl}
                        alt={entry.name}
                        className="rounded-full w-14 h-14"
                      />
                      <p className="text-left">{entry.name}</p>
                    </div>
                  </a>
                </td>
                <td className="py-2 px-4 border-b dark:border-gray-600 text-center text-gray-900 dark:text-gray-100">
                  {entry.rank}
                </td>
                <td className="py-2 px-4 border-b dark:border-gray-600 text-center text-gray-900 dark:text-gray-100">
                  {entry.exp}
                </td>
                <td className="py-2 px-4 border-b dark:border-gray-600 text-center text-gray-900 dark:text-gray-100">
                  <div className="flex justify-center items-center gap-2">
                    {Object.keys(entry.social_accounts).filter(
                      (val) => entry.social_accounts[val].length > 0
                    ).length === 0 && <p>No Socials</p>}
                    {Object.keys(entry.social_accounts).map(
                      (social: any, index: number) => {
                        if (entry.social_accounts[social])
                          return (
                            <a
                              key={index}
                              href={entry.social_accounts[social]}
                              target="_blank"
                              className="text-blue-500 dark:text-blue-400"
                            >
                              {social.split("_").at(0) === "facebook" ? (
                                <FaFacebook size={20} />
                              ) : social.split("_").at(0) === "twitter" ? (
                                <FaTwitter size={20} />
                              ) : social.split("_").at(0) === "twitch" ? (
                                <FaTwitch size={20} />
                              ) : social.split("_").at(0) === "instagram" ? (
                                <FaInstagram size={20} />
                              ) : social.split("_").at(0) === "youtube" ? (
                                <FaYoutube size={20} />
                              ) : (
                                <FaFacebook size={20} />
                              )}
                            </a>
                          );
                      }
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
