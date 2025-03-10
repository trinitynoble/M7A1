import { useState } from "react";
import "./App.css";
import LandingSection from "./header";

const App = () => {
  const [bibleVerse, setBibleVerse] = useState(null); // State to store the fetched Bible verse
  const [showPopup, setShowPopup] = useState(false); 

  const fetchBibleVerse = async () => {
    const url = '/data/web/random';  //specifies that the verse is random and which version to use
    try {
      const response = await fetch(url);
      const result = await response.json(); 
      console.log(result);
      if (result.random_verse) {
        //this is where the verse is generated
        const { book, chapter, verse, text } = result.random_verse;
        const formattedVerse = `${book} ${chapter}:${verse} - ${text}`;
        setBibleVerse(formattedVerse); 
      } else {
        setBibleVerse('No verse found. Try again.');
      }
      setShowPopup(true);  // Show the popup with the verse
    } catch (error) {
      console.error('Error fetching Bible verse:', error);
      setBibleVerse('Failed to fetch verse. Try again.');
      setShowPopup(true); 
    }
  };

  return (
    <>
      <div>
        <LandingSection fetchBibleVerse={fetchBibleVerse} />
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className="bible-verse">📖 {bibleVerse}</p>
            <button className="close-button" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
