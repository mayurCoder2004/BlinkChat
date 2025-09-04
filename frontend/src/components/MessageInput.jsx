import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file?.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full border-t border-base-300 bg-base-100/70">
      {/* Image Preview */}
      {imagePreview && (
        <div className="mb-3 flex items-center gap-3">
          <div className="relative group">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-xl border border-base-300 shadow-md transition-transform group-hover:scale-105"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-base-300
              flex items-center justify-center shadow hover:bg-error hover:text-error-content transition-colors"
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* Input Bar */}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-2 bg-base-200 rounded-full px-3 py-2 shadow-sm"
      >
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder:text-base-content/60"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        {/* Image Upload Button */}
        <button
          type="button"
          className={`hidden sm:flex p-2 rounded-full transition-colors ${
            imagePreview
              ? "text-emerald-500 hover:bg-emerald-100/20"
              : "text-base-content/50 hover:bg-base-300/50"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <Image size={20} />
        </button>

        {/* Send Button */}
        <button
          type="submit"
          className={`p-2 rounded-full transition-colors ${
            text.trim() || imagePreview
              ? "bg-primary text-primary-content hover:bg-primary/90 shadow"
              : "bg-base-300 text-base-content/40 cursor-not-allowed opacity-60"
          }`}
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
