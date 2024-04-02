import { Icon } from "@iconify-icon/react/dist/iconify.js";

const AppCard = () => {
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="p-4 w-56 flex flex-col items-center justify-center not-content">
        <h6 className="mb-3">Baixe a aplicação</h6>
        <div className="flex items-center justify-center gap-5 align-items-center">
          <button
            type="button"
            className="rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <Icon icon="mdi:android" />
          </button>
          <button
            type="button"
            className="rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <Icon icon="mdi:linux" />
          </button>
          <button
            type="button"
            className="rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <Icon icon="mdi:windows" />
          </button>
          <button
            type="button"
            className="rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <Icon icon="mdi:apple" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
