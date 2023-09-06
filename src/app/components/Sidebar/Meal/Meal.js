import "./Meal.css";
import Input from "../../Input";

const Meal = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Meal</h2>

        <Input
          handleChange={handleChange}
          value="black"
          title="Breakfast"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Dessert"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Dinner"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Holidays"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Snacks and Appetizers"
          name="test1"
        />
        
      </div>
    </>
  );
};

export default Meal;