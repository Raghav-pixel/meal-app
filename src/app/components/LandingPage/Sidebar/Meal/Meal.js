import "./Meal.css";
import Input from "../../../Input";

const Meal = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Meal</h2>

        <Input
          handleChange={handleChange}
          value="breakfast"
          title="Breakfast"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="dessert"
          title="Dessert"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="main course"
          title="Dinner"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="marinade"
          title="Holidays"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="snack"
          title="Snacks and Appetizers"
          name="test1"
        />
        
      </div>
    </>
  );
};

export default Meal;