import "./Sidebar.css";
import Season from "./Season/Season";
import Dietary from "./Dietary/Dietary";
import Meal from "./Meal/Meal";
import Sweet from "./Sweet/Sweet";

const Sidebar = ({ handleChangeSeason, handleChangeDietary, handleChangeMeal, handleChangeSweet }) => {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar-header">
          <h1>Filter Recipies</h1>
          <p>Check multiple boxes below to narrow recipe search results</p>
        </div>
        <Season handleChangeSeason={handleChangeSeason} />
        <Dietary handleChangeDietary={handleChangeDietary} />
        <Meal handleChangeMeal={handleChangeMeal} />
        <Sweet handleChangeSweet={handleChangeSweet} />
      </section>
    </>
  );
};

export default Sidebar;