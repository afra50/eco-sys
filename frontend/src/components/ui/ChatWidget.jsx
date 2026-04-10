import { useState } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../../styles/components/ui/chatwidget.scss";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chat-widget">
      {/* OKNO CZATU */}
      <div
        className={`chat-widget__window ${isOpen ? "chat-widget__window--open" : ""}`}
      >
        <div className="chat-widget__header">
          <span className="chat-widget__title">Doradca ECO-SYS</span>
          <button
            className="chat-widget__close"
            onClick={toggleChat}
            aria-label="Zamknij czat"
          >
            <FaTimes />
          </button>
        </div>

        <div className="chat-widget__body">
          {/* Przykładowa wiadomość startowa */}
          <div className="chat-widget__message chat-widget__message--bot">
            Dzień dobry! Szukasz informacji o pompach ciepła, czy może
            interesuje Cię fotowoltaika? W czym mogę pomóc?
          </div>
        </div>

        <div className="chat-widget__input-area">
          <input
            type="text"
            placeholder="Napisz wiadomość..."
            disabled // Na razie zablokowane
          />
          <button className="chat-widget__send" disabled>
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* PŁYWAJĄCY PRZYCISK (Kółeczko) */}
      <button
        className={`chat-widget__button ${isOpen ? "chat-widget__button--hidden" : ""}`}
        onClick={toggleChat}
        aria-label="Otwórz czat"
      >
        <FaCommentDots />
      </button>
    </div>
  );
};

export default ChatWidget;
