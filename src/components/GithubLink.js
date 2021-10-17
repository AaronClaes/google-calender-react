import React from "react";

function GithubLink() {
  return (
    <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Follow me on twitter"
          href="https://github.com/AaronClaes"
          target="_blank"
          rel="noreferrer"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            alt="github logo"
            className="object-cover object-center w-full h-full rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          />
        </a>
      </div>
    </div>
  );
}

export default GithubLink;
