import { useEffect, useState } from "react";

function RandomDogImage() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search", {
      headers: { "x-api-key": import.meta.env.DOG_API_KEY! },
    })
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data[0].url);
      });
  }, []);

  return (
    
    <div>
      <h1>Random Dog Image</h1>
      {dogImage ?
      <div className="overflow-hidden rounded-md">
        <Image
          src={album.cover}
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      : <p>Loading...</p>}
    </div>
  );
}

export default RandomDogImage;
