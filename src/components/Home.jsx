import Card from "./Card";
import { format } from "date-fns";

function Home() {
  let today = new Date();
  const formattedDate = format(today, "MMMM do yyyy");
  return (
    <>
      <p className="text-3xl text-center pt-16 font-semibold">
        {formattedDate}
      </p>
      <Card></Card>
    </>
  );
}
export default Home;
