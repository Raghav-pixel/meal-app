import "./Sweet.css";
import Input from "../../Input";

const Sweet = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Sweet</h2>

        <Input
          handleChange={handleChange}
          value="black"
          title="Fruit Desserts"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Chocolate"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Cakes and Quick Breads"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Cookies and Bars"
          name="test3"
        />
        
        <Input
          handleChange={handleChange}
          value="red"
          title="Pies and Tarts"
          name="test3"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Ice Cream and Popsicles"
          name="test3"
        />
      </div>
    </>
  );
};

export default Sweet;