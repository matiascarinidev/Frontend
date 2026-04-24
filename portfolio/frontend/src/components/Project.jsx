import { useState, useEffect } from "react";

function Project({ deployLink }) {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${encodeURIComponent(deployLink)}`)
      .then((res) => res.json())
      .then((data) => setMetadata(data.data));
  }, [deployLink]);

  if (!metadata) {
    return (
      <div className="border rounded-lg p-4 animate-pulse">
        Loading preview...
      </div>
    );
  }

  return (
    <li className="mb-4">
      <a
        href={deployLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex px-4 max-w-[50%] border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all items-center"
      >
        {metadata?.image?.url && (
          <img
            src={metadata.image.url}
            alt={metadata.title || "Project screenshot"}
            className="w-40 h-40 object-fit rounded-[50%] p-4"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold">
            {metadata.title || deployLink}
          </h3>
          <p className="text-sm">
            {metadata.description || "No description available"}
          </p>
          <p className="text-blue-500  text-sm font-semibold">
            Visit Project →
          </p>
        </div>
      </a>
    </li>
  );
}

export default Project;
