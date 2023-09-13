import { destinations } from "../../utils/data";
import D_card from "../D_card";

const HomePage = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {destinations.map(destinations => (
        <D_card 
          key={destinations.id}
          name={destinations.name}
          description={destinations.description}
          cost={destinations.travelCost}
          imgUrl={destinations.imgUrl}
          details={destinations.details}
        />
      ))}
    </div>
  );
};

export default HomePage;