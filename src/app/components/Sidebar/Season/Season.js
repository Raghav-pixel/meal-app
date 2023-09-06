import "./Season.css";
import Input from "../../Input";

function Season({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Season</h2>

      <div>
        <Input
          handleChange={handleChange}
          value="autumn"
          title="Autumn"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="spring"
          title="Spring"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="summer"
          title="Summer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="winter"
          title="Winter"
          name="test"
        />
      </div>
    </div>
  );
}

export default Season;