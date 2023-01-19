import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Alert, Button, Container, Form, Table } from "react-bootstrap";
import config from "../config";
import { useCustomization } from "../contexts/Customization";
import { validate } from "../helpers/validateSignup";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
  });

  const { material, tableColor, objects, objectColor } = useCustomization();

  console.log(tableColor);
  const [orderMessage, setOrderMessage] = useState("");

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFromData({
      ...formData,
      [name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(validate(formData, setErrors));
    if (!validate(formData, setErrors)) return;
    const orderData = {
      customer: {
        email: formData.email,
        name: formData.name,
        mobile: formData.mobile,
        deliveryAddress: {
          country: formData.country,
          city: formData.city,
        },
      },
      product: "Table",
      productConfig: {
        tableMaterial: material,
        tableColor: tableColor,
        objects: objects,
        objectColor: objectColor,
      },
    };

    axios.post(`${config.api.url}/order/create`, orderData).then((res) => {
      console.log(res);
      setOrderMessage(res.data.message);
      setFromData({
        name: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
      });
    });
  };

  return (
    <div>
      <Container>
        {orderMessage ? (
          <Alert variant="success" key="success">
            {orderMessage}
          </Alert>
        ) : null}

        <Table className="table__cart">
          <thead>
            <tr>
              <th colSpan={3} className="table__cart__col1">
                Selected product
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table:</td>
              <td>material - {material}</td>
              <td>color - {tableColor.name}</td>
            </tr>
            <tr>
              <td>{objects}:</td>
              <td>material - default</td>

              <td>color - {objectColor.name}</td>
            </tr>
          </tbody>
        </Table>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb__3">
            <Form.Label>Customer form</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          {<span className="span__Validate">{errors.email}</span>}

          <Form.Group className="mb__3">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
            />
          </Form.Group>
          {<span className="span__Validate">{errors.name}</span>}

          <Form.Group className="mb__3">
            <Form.Label></Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone"
              name="mobile"
              onChange={handleInputChange}
              value={formData.mobile}
            />
          </Form.Group>
          {<span className="span__Validate">{errors.mobile}</span>}

          <Form.Group className="mb__3">
            <h3 className="form__Address">Address</h3>
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              name="country"
              onChange={handleInputChange}
              value={formData.country}
            />
            {<span className="span__Validate">{errors.country}</span>}

            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="city"
              onChange={handleInputChange}
              value={formData.city}
            />
            {<span className="span__Validate">{errors.city}</span>}
          </Form.Group>

          <Button variant="primary" type="submit" className="btn__subbmit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ShoppingCart;
