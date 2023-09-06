import Input from "../../../Input";
import "./Dietary.css";

const Dietary = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Dietary</h2>

        <Input
          handleChange={handleChange}
          value="side dish"
          title="Dairy Free"
          name="test2"
        />

        {/* <Input
          handleChange={handleChange}
          value="appetizer"
          title="Egg Free"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="snack"
          title="Gluten Free"
          name="test2"
        /> */}

        <Input
          handleChange={handleChange}
          value="salad"
          title="Healthy"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="fingerfood"
          title="Quick and Easy"
          name="test2"
        />
      </div>
    </>
  );
};

export default Dietary;