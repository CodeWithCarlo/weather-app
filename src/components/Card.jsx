import { useState } from "react";

function Card() {
  const [cityData, setCityData] = useState(null);

  const [city, setCity] = useState("");

  const toCelsius = (tK) => {
    let tC = tK - 273.15;
    let Tfinal = (Math.round(tC * 100) / 100).toFixed(0);
    return Tfinal;
  };
  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e8ea7b19def091bf9bfb97d4e55ab3b`;

  const fetchCityData = () => {
    fetch(url1)
      .then((response) => response.json())
      .then((json) => setCityData(json))
      .then(console.log(cityData))

      .catch((error) => console.error(error));
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCityData();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12">
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            className="text-white px-4 py-2 text-xl rounded-lg"
            type="text"
            placeholder="City name"
            value={city}
            onChange={handleInputChange}
          ></input>
          <button type="submit" className="mx-4">
            Search
          </button>
        </form>

        {cityData ? (
          <div className="flex flex-col p-12 rounded-xl items-center sfondo w-96 md:w-auto ">
            <div className="flex justify-center items-center  ">
              <p className="md:text-5xl text-4xl mb-4 font-bold me-4">
                {" "}
                {cityData.name}, {cityData.sys.country}
              </p>
            </div>
            <hr className="w-full mt-2"></hr>

            <div className="flex justify-around items-center mt-6">
              <p className="text-8xl me-2">{toCelsius(cityData.main.temp)}°C</p>
              {/* <p className="text-3xl ms-6">{cityData.weather[0].main}</p> */}
            </div>

            <div className="flex justify-around w-full mt-6">
              <div className="flex flex-col">
                <div className="flex items-center my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-4 fill-white me-2"
                  >
                    <path d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z" />
                  </svg>

                  <p className="text-3xl">
                    MAX: {toCelsius(cityData.main.temp_max)}°C
                  </p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-4 fill-white me-2"
                  >
                    <path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z" />
                  </svg>

                  <p className="text-3xl">
                    min: {toCelsius(cityData.main.temp_min)}°C
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center my-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-white w-6 me-2"
                  >
                    <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
                  </svg>

                  <p className="text-2xl">
                    {new Date(cityData.sys.sunrise * 1000)
                      .toLocaleTimeString("en-IN")
                      .slice(0, 4)}
                    am
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="me-2 fill-white w-6"
                  >
                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>
                  <p className="text-2xl">
                    {" "}
                    {new Date(cityData.sys.sunset * 1000)
                      .toLocaleTimeString("en-IN")
                      .slice(0, 4)}
                    pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
export default Card;
