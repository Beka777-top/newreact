import { useState } from "react";
import "./Car.css";

function Kolesa() {
  const [values, setValues] = useState({});

  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetForm = () => {
    setValues({
      mark: "",
      model: "",
      year: "",
      color: "",
      milage: "",
      price: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCars((prevCars) => [...prevCars, values]);
    resetForm();
  };

  const isOldCar = (year) => year && Number(year) < 2010;

  const filteredCars = cars.filter((car) =>
    Object.values(car).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="kolesa-container">
      <div>
      <h1>Kolesa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="mark"
          value={values.mark}
          onChange={handleChange}
          placeholder="Mark"
        />
        <input
          type="text"
          name="model"
          value={values.model}
          onChange={handleChange}
          placeholder="Model"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            name="year"
            value={values.year}
            onChange={handleChange}
            placeholder="Year"
          />
          {isOldCar(values.year) && (
            <span style={{ marginLeft: "10px", color: "red" }}>Бұл ескі көлік</span>
          )}
        </div>
        <input
          type="text"
          name="color"
          value={values.color}
          onChange={handleChange}
          placeholder="Color"
        />
        <input
          type="text"
          name="milage"
          value={values.milage}
          onChange={handleChange}
          placeholder="Milage"
        />
        <input
          type="text"
          name="price"
          value={values.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Add Car</button>
      </form>

      <div>
        <h2>Search Cars</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by any field"
        />
      </div>

      <div className="car-list">
        <h2>Car List</h2>
        {filteredCars.map((car, index) => (
          <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <p>Mark: {car.mark}</p>
            <p>Model: {car.model}</p>
            <p>
              Year: {car.year} {isOldCar(car.year) && "(Бұл ескі көлік)"}
            </p>
            <p>Color: {car.color}</p>
            <p>Milage: {car.milage}</p>
            <p>Price: {car.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Kolesa;