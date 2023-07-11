// game.js
// Game code and initialization
// ...

const gameContainerHTML = `
  <div class="b-panel">
    Score:
    <span id="g-score">0</span>
    <div class="b-panel_right">
      Change color:
      <label><input onclick="ChangeGameColor(1)" type="radio" name="color" />Red</label>
      <label><input onclick="ChangeGameColor(0)" type="radio" checked="checked" name="color" />Green</label>
      <label><input onclick="ChangeGameColor(2)" type="radio" name="color" />Blue</label>
    </div>
    <canvas id="g-game"></canvas>
    <div id="g-endgame" class="b-msgbox">
      <div id="g-leaderboard"></div>
      <button class="b-button" onclick="SaveScore(game.score,this)">Save score</button>
      <button class="b-button" onclick="(function(){window.location.href = window.location.pathname})()">New game</button>
    </div>
  </div>
`;

export { gameContainerHTML as default };
