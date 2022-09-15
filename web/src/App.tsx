import "./styles/main.css";
import logo from "./assets/logo.svg";
import GameBanner from "./components/GameBanner";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

import CreateAdModal from "./components/CreateAdModal";

import CreateAdBanner from "./components/CreateAdBanner";
import axios from "axios";

interface GamesProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

const App = () => {
  const [games, setGames] = useState<GamesProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/games").then((res) => setGames(res.data));
  }, []);

  return (
    <main className="max-w-[1300px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo NLW eSports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-gradient bg-clip-text">duo</span>{" "}
        esta aqui
      </h1>

      <section className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </section>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </main>
  );
};

export default App;
