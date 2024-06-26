import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useEffect, useState } from "react";

interface Asset {
  name: string;
  browser_download_url: string;
}

export default function Download() {
  const [data, setData] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/tesourofieis/tesourofieis/releases/latest",
        );
        const jsonData = await response.json();
        setData(jsonData.assets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    userAgent.includes("android") || userAgent.includes("iphone");

  return (
    <>
      {!isMobile && data.length > 0 && (
        <div className="mb-10">
          <h6>Instalar</h6>
          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/tesourofieis/tesourofieis/releases/latest">
              <button
                type="button"
                title="Aplicação para computador"
                className="rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border border-sepia-500 hover:bg-sepia-500"
              >
                <Icon icon="mdi:laptop" />
              </button>
            </a>
            |
            <a href="https://play.google.com/store/apps/details?id=com.tesourofieis.app">
              <button
                type="button"
                title="Aplicação para Android"
                className="rounded-full shadow-md w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border border-zinc-500 hover:bg-zinc-500"
              >
                <Icon icon="mdi:android" />
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
