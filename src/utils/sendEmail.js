import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      "https://sintheta-mail.vercel.app/send-email",
      {
        body: data,
      },
      {
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9,en-IN;q=0.8",
          "Content-Type": "application/json; charset=utf-8",
          Origin: "https://sintheta.in",
          Priority: "u=1, i",
          Referer: "https://sintheta.in/",
          // "Sec-CH-UA":
          //   '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          // "Sec-CH-UA-Mobile": "?0",
          // "Sec-CH-UA-Platform": '"Windows"',
          // "Sec-Fetch-Dest": "empty",
          // "Sec-Fetch-Mode": "cors",
          // "Sec-Fetch-Site": "cross-site",
          // "User-Agent":
          //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
        },
      },
    );
    console.log("Response:", response.data);
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};
