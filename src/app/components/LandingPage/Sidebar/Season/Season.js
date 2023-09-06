import "./Season.css";
import Input from "../../../Input";

function Season({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Season</h2>

      <div>
        <Input
          handleChange={handleChange}
          value="breakfast"
          title="Autumn"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="marinade"
          title="Spring"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="drink"
          title="Summer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="soup"
          title="Winter"
          name="test"
        />
      </div>
    </div>
  );
}

export default Season;