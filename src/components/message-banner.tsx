import { Markdown } from "./markdown";


const MessageBannerType = {
  error: "border-l-red-700 text-red-700 bg-red-200",
  success: "border-l-green-800 text-green-800 bg-green-200"
};

const MessageBanner = ({ title, message, type = "error" }: { title: string; message: string; type?: keyof typeof MessageBannerType }) => {
  return (
    <div
      className={`flex flex-col border-l-4 px-4 py-2 my-2 gap-2 ${MessageBannerType[type]}`}
    >
      <h2 className="font-bold">{title}</h2>
      <Markdown>{message}</Markdown>
    </div>
  );
};

export default MessageBanner;
