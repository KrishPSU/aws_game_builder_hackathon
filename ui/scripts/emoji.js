// easy emoji dictionary
const emojiDictionary1 = {
    flash: "📸", light: "💡", honey: "🍯 ", bee: "🐝", sun: "☀️ ",
     glasses: "👓 ", blue: "🟦 ", berry : "🫐 ", taco: "🌮 ", bell: "🔔 ",
     honey: " 🍯", moon: "🌙 ", camera: "📷", graph: " 💹", pizza: "🍕 ",
     hut:"🛖 ", sword: "🗡️ ", fish: "🐟 ", eye: "👁️ ", phone: "📱 " }

    // flower: " ", heart: " ", star: " ", book: " ", 
     // pairs
   //  "📸💡": "flashlight", "💡📸": "flashlight"



// medium emoji dictionary 
const emojiDictionary2 = {

        star: "⭐", eyes: "👁️👁️", lamp: "💡", sun: "☀️", bee: "🐝",
        ear: "👂", socks: "🧦", Santa: "🎅", hat: "🎩", shell: "🐚",
        fish: "🐟", book: "📖", worm: "🐛", sea: "🌊", bat: "🦇",
        fox: "🦊", fire: "🔥", tree: "🌳"
    };


// hard
const emojiDictionary3 = { 
    stars: "✨",  rose: "🌹", brain: "🧠", bread: "🍞",
    crystalBall: "🔮",wheel: "⚙️", hazard: "⚠️",
    pin: "📌", fire: "🔥", water: "💧", smoke: "💨",
    snow: "❄️", lightning: "⚡", bird: "🐦", sick: "🤒",
    pointUp: "☝️", spin: "🔄", pointDown: "👇", teacher: "👩‍🏫",
    notebook: "📓", pet: "🐕", magicHat: "🎩", stars: "✨"
    
}

// still neeed to parse thru each "specific" word?

// chat gptss'

function checkWord(word, dictionaries, lives) {
    let found = false;

    // Iterate through all dictionaries
    for (const dict of dictionaries) {
        if (word in dict) {
            found = true;
            break;
        }
    }

    // If not found, reduce a life
    if (!found) {
        lives--;
    }

    return { found, lives };
}

// Example Usage
let lives = 3; // Starting lives
const wordToFind = "brain"; // Word to check

const result = checkWord(wordToFind, [emojiDictionary1, emojiDictionary2, emojiDictionary3], lives);
console.log(result); // { found: true, lives: 3 }


