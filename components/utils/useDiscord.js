import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const clientid = "NEARLEND_DAO_CLIENT_ID";
const clientsecret = "NEARLEND_DAO_SECRET";
const discordKey = "discord-supports";
const discordDomain = "https://discord.com/";

export const useDiscord = () => {
  const router = useRouter();

  const isRun = useRef(true);

  const [discordUsername, setDiscordUsername] = useState(null);

  useEffect(() => {
    const checkingDiscord = localStorage.getItem(discordKey);
    if (checkingDiscord) {
      setDiscordUsername(JSON.parse(checkingDiscord));
    }
  }, []);

  const discordConnect = async () => {
    const id = localStorage.getItem(discordKey);
    if (!id) {
      window.location.href = `https://discordapp.com/oauth2/authorize?client_id=${clientid}&scope=identify+guilds&response_type=code&callback_uri=http://localhost:2022`;
    } else {
      localStorage.removeItem(discordKey);
      setDiscordUsername("");
    }
  };

  useEffect(() => {
    const code = router.query.code;
    if (code && isRun.current) {
      const params = new URLSearchParams();
      params.append("client_id", clientid);
      params.append("client_secret", clientsecret);
      params.append("code", code);
      params.append("grant_type", "authorization_code");
      !!params &&
        axios
          .post(`${discordDomain}api/v10/oauth2/token`, params)
          .then((response) => {
            const data = response.data;
            if (response.status === 200) {
              const access_token = data.access_token;
              axios
                .get(`${discordDomain}api/users/@me`, {
                  headers: {
                    Authorization: "Bearer " + access_token,
                  },
                })
                .then(({ data, status }) => {
                  if (status === 200) {
                    const { username, discriminator, id } = data;
                    const discordName = `${username}#${discriminator}`;
                    setDiscordUsername({ discordName, discordId: id });
                    localStorage.setItem(
                      discordKey,
                      JSON.stringify({ discordName, discordId: id })
                    );
                    isRun.current = false;
                  }
                })
                .catch((err) => console.log({ err }));
            }
          })
          .catch((err) => console.log({ err }));
    }
  }, [router, discordUsername, isRun]);

  return [discordUsername, discordConnect];
};
