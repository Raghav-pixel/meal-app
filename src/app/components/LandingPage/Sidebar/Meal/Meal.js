import "./Meal.css";
import Input from "../../../Input";

const Meal = ({ handleChangeMeal }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Meal</h2>

        <Input
          handleChange={handleChangeMeal}
          value="breakfast"
          title="Breakfast"
          name="test1"
        />

        <Input
          handleChange={handleChangeMeal}
          value="dessert"
          title="Dessert"
          name="test1"
        />

        <Input
          handleChange={handleChangeMeal}
          value="main course"
          title="Dinner"
          name="test1"
        />

        <Input
          handleChange={handleChangeMeal}
          value="marinade"
          title="Holidays"
          name="test1"
        />

        <Input
          handleChange={handleChangeMeal}
          value="snack"
          title="Snacks and Appetizers"
          name="test1"
        />
        
      </div>
    </>
  );
};

export default Meal;