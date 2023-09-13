export default function WinnerMessage() {
  return (
    <div className="winner-message">
      <img id="winner" src="/assets/other/winner.png" alt="winnner-icon" />
      <h1>CONGRATULATIONS!</h1>

      <form>
        <p>Total</p>

        <label htmlFor="work-time">Work:</label>
        <input type="time" min="00:00" max="24:00" name="work-time" />

        <label htmlFor="rest-time">Rest:</label>
        <input type="time" min="00:00" max="24:00" name="rest-time" />

        <label htmlFor="pause-time">Pause:</label>
        <input type="time" min="00:00" max="24:00" name="pause-time" />
      </form>
    </div>
  );
}
