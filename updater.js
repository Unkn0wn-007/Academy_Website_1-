/*
    INSTRUCTIONS:
    1.  EDIT THE LIST BELOW: Add, remove, or change the players in the `fidePlayers` list.
        - `name`: The player's full name.
        - `rating`: The player's FIDE rating.

    2.  SAVE this file.

    3.  RUN THIS SCRIPT: Open a terminal or command prompt, navigate to the folder where this file is saved,
        and run the command: node updater.js

    4.  COPY THE OUTPUT: The script will print the new HTML code to your terminal. Copy the entire block of code.

    5.  PASTE INTO index.html: Open your `index.html` file, find the div with the id `fide-players-section`,
        and completely replace its contents with the code you copied.
*/

// STEP 1: EDIT THIS LIST OF PLAYERS
const fidePlayers = [
    { name: 'Vikram Rao', rating: 1875 },
    { name: 'Sneha Gupta', rating: 1740 },
    { name: 'Aditya Verma', rating: 1710 },
    { name: 'Naina Patel', rating: 1685 },
    { name: 'Karan Desai', rating: 1650 },
    { name: 'Isha Reddy', rating: 1620 },
];

// ==================================================================================
// DO NOT EDIT BELOW THIS LINE
// ==================================================================================

function generateFidePlayersHTML(players) {
    const header = '<h3 class="text-3xl font-semibold font-serif text-center mb-8">Latest FIDE Rated Players</h3>';

    const playersGrid = players.map(player => `
                        <div class="bg-[#1F2937] rounded-lg p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform">
                            <h4 class="text-xl font-bold">${player.name}</h4>
                            <p class="text-2xl font-bold text-gray-300 mt-2">${player.rating}</p>
                        </div>`).join('');

    const fullHTML = `
                <!-- Latest FIDE Rated Players -->
                <div id="fide-players-section" class="mt-16">
                    ${header}
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        ${playersGrid}
                    </div>
                </div>`;

    return fullHTML;
}

const newHtmlContent = generateFidePlayersHTML(fidePlayers);

console.log("\n================== COPY THE CODE BELOW ==================\n");
console.log(newHtmlContent);
console.log("\n==================      END OF CODE      ==================");

