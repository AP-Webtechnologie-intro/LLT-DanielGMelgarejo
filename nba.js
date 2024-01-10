const apiKey = "https://replay.sportsdata.io/api/v3/nba/pbp/json/playbyplay/19760?key=ecc515f244e4411b9f2c0ffdbdd415e5dd415e5"; // Vervang dit door je daadwerkelijke API-sleutel

    fetch("https://replay.sportsdata.io/api/v3/nfl/pbp/json/playbyplaydelta/2023reg/2/all?key=" + apiKey)
      .then(function (response) { return response.json(); })
      .then(function (json) {
        console.log(json);

        let html = '<div class="accordion accordion-flush" id="accordionExample">';

        for (let game of json) {
          const homeTeam = game.homeTeam.teamId;
          const awayTeam = game.awayTeam.teamId;

          html += `
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse${game.gameId}" 
                  aria-expanded="false"
                  aria-controls="collapse${game.gameId}">
                  ${homeTeam} vs ${awayTeam}
                </button>
              </h2>

              <div id="collapse${game.gameId}" 
                class="accordion-collapse collapse" 
                aria-labelledby="headingOne" 
                data-bs-parent="#accordionExample">

                <div class="accordion-body">
                  <span class="h6 mt-2">Home Team:</span> ${homeTeam}<br>
                  <span class="h6 mt-2">Away Team:</span> ${awayTeam}<br>
                  <span class="h6 mt-2">Date:</span> ${game.startTime}<br>
                  <span class="h6 mt-2">Status:</span> ${game.status}<br>
                  <!-- Voeg meer velden toe op basis van je behoeften -->
                </div>
              </div>
            </div>`;
        }

        html += '</div>';
        document.getElementById("nbadaniel").innerHTML = html;
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
