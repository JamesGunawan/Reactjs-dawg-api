import { useState, useEffect } from "react";

const LikedPictures = () => {
    const [likedPictures, setLikedPictures] = useState([]);

    useEffect(() => {
        const pictures = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("likedDawg")) {
                let imageUrl = localStorage.getItem(key);

                // Trim unnecessary quotes so instead of displaying the source as src=""{link}"" it trims the quote so it can actually display the pic as src="{link}"
                imageUrl = imageUrl.replace(/^"|"$/g, "");

                pictures.push({ id: key, url: imageUrl });
            }
        }

        // Sort by counter (extracting number from key, e.g., "likedDawg1" -> 1)
        pictures.sort((a, b) => {
            const numA = parseInt(a.id.replace("likedDawg", ""), 10);
            const numB = parseInt(b.id.replace("likedDawg", ""), 10);
            return numA - numB;
        });

        setLikedPictures(pictures);
    }, []);

    return (
        <div>
            <h2>Liked Pictures</h2>
            <div>
                {likedPictures.map((pic) => (
                    <img key={pic.id} src={pic.url} alt="Liked Dawg" className="liked-pics"/>
                ))}
            </div>
        </div>
    );
};

export default LikedPictures;
