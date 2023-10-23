type WinnerMessageProps = {
  setPlayMode: (arg: boolean) => void;
};

export default function WinnerMessage(props: WinnerMessageProps) {
  const { setPlayMode } = props;

  function handleClick() {
    setPlayMode(false);
  }

  return (
    <section className="winner-message">
      <img id="winner" src="/assets/other/winner.png" alt="winnner-icon" />
      <h1>CONGRATULATIONS!</h1>

      <div className="btn-wrapper">
        <button onClick={handleClick}>Home</button>
      </div>
    </section>
  );
}
