import "./Season.css";
import Input from "../../../Input";

function Season({ handleChangeSeason }) {
  return (
    <div>
      <h2 className="sidebar-title">Season</h2>

      <div>
        <Input
          handleChange={handleChangeSeason}
          value="breakfast"
          title="Autumn"
          name="test"
        />
        <Input
          handleChange={handleChangeSeason}
          value="marinade"
          title="Spring"
          name="test"
        />
        <Input
          handleChange={handleChangeSeason}
          value="drink"
          title="Summer"
          name="test"
        />
        <Input
          handleChange={handleChangeSeason}
          value="soup"
          title="Winter"
          name="test"
        />
      </div>
    </div>
  );
}

export default Season;