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
          <div className="flex flex-col p-12 rounded-xl mt-6 items-center sfondo w-96 md:w-auto ">
            <div className="flex justify-center items-center  ">
              <p className="md:text-5xl text-4xl mb-4 font-semibold me-4">
                {" "}
                {cityData.name}, {cityData.sys.country}
              </p>
            </div>
            <hr className="w-full mt-2"></hr>

            <div className="flex justify-around items-center mt-6">
              <p className="md:text-8xl text-7xl me-2">
                {toCelsius(cityData.main.temp)}°C
              </p>
            </div>
            <div className="flex items-center mt-6">
              <p className="md:text-3xl text-2xl me-4 ">
                {cityData.weather[0].main}
              </p>
              {cityData.weather[0].main === "Clouds" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-8 fill-white "
                >
                  <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                </svg>
              ) : cityData.weather[0].main === "Clear" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 fill-white "
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              ) : cityData.weather[0].main === "Rain" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 fill-white "
                >
                  <path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="w-8 fill-white "
                >
                  <path d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.1-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
                </svg>
              )}
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex">
                <p className="md:text-2xl text-xl me-6">
                  Tmin: {toCelsius(cityData.main.temp_min)}°C
                </p>
                <p className="md:text-2xl text-xl">
                  TMAX: {toCelsius(cityData.main.temp_max)}°C
                </p>
              </div>
              <div className="flex mt-6">
                <div className="flex items-center me-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-white md:w-6 w-4 me-2"
                  >
                    <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
                  </svg>

                  <p className="md:text-2xl text-xl">
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
                    className="me-2 fill-white md:w-6 w-4"
                  >
                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>
                  <p className="md:text-2xl text-xl">
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
