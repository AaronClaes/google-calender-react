import React from "react";

function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center align-items">
      <iframe
        title="loading-gif"
        src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
        width="180"
        height="180"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
    </div>
  );
}

export default Loading;
