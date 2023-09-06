import Input from "../../Input";
import "./Dietary.css";

const Dietary = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Dietary</h2>

        <Input
          handleChange={handleChange}
          value={50}
          title="Dairy Free"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="Egg Free"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="Gluten Free"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Healthy"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Quick and Easy"
          name="test2"
        />
      </div>
    </>
  );
};

export default Dietary;