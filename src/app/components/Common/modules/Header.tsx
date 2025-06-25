import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <div className="relative w-full h-fit flex flex-col">
      <header className="bg-red-900 text-yellow-200 text-center py-2 text-sm">
        <div className="uppercase tracking-wide flex flex-row items-center justify-center w-full h-fit gap-2 flex-wrap">
          {[
            { enlace: "Privacy And Autonomy", title: "Privacy & Autonomy" },
            { title: "Roots" },
            {
              enlace: "Manifestos And Dead Ends",
              title: "Manifestos & Dead Ends",
            },
            { title: "Transmissions" },
            { title: "Myth vs Reality" },
            { title: "CC0 in Practice" },
          ].map((el, i) => (
            <div
              key={i}
              onClick={() =>
                router.push(
                  `/${(el?.enlace ?? el?.title)
                    ?.toLowerCase()
                    ?.replaceAll(" ", "-")}`
                )
              }
              className="relative cursor-pointer hover:underline w-fit h-fit flex flex-row gap-2"
            >
              <div>{el?.title}</div>
              {i !== 5 && <div>|</div>}
            </div>
          ))}
        </div>
      </header>
      <div
        className="bg-black border-t border-b border-red-700 py-3 text-center text-3xl font-bold cursor-pointer flex-wrap"
        onClick={() => router.push("/")}
      >
        <span className="text-red-600 font-wood">CC0</span>
        <span className="text-orange-300 font-wood">Web3.com</span>
        <button className="ml-4 bg-red-800 text-yellow-300 px-2 py-1 text-xs">
          ON-CHAIN!
        </button>
      </div>
      <nav className="bg-black text-yellow-300 text-sm flex justify-center py-2 space-x-4 border-b border-red-700 flex-wrap">
        {[
          { title: "ARTE" },
          { enlace: "video", title: "VÍDEO" },
          { title: "NOTICIAS" },
          { title: "CADENAS FALSAS" },
          { title: "RUGPULLS" },
        ].map((el, i) => (
          <span
            key={i}
            onClick={() =>
              router.push(
                `/${(el?.enlace ?? el?.title)
                  ?.toLowerCase()
                  ?.replaceAll(" ", "-")}`
              )
            }
            className="hover:underline cursor-pointer"
          >
            {el?.title}
          </span>
        ))}
      </nav>
    </div>
  );
}

export default Header;
