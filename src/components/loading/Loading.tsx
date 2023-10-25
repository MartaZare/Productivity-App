import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <section className="loading-wrapper">
      <Oval
        height={150}
        width={150}
        color="#7efffa"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1a1b2b"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <h2>Loading...</h2>
    </section>
  );
}

export default Loading;
