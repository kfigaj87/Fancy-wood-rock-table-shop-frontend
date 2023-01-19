export const validate = (formData, setErrors) => {
  let validatationErrors = {
    email: false,
    name: false,
    mobile: false,
    deliveryAddress: {
      country: false,
      city: false,
    },
  };

  if (formData.email.trim().length < 4) {
    validatationErrors.email = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        email: "Email field cannot be empty",
      };
    });
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
  ) {
    validatationErrors.email = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        email: "Email field mustn't contain whitespace characters!",
      };
    });
  } else {
    validatationErrors.email = false;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        email: "",
      };
    });
  }

  if (formData.name.trim().length < 3) {
    validatationErrors.name = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        name: "Name field cannot be empty",
      };
    });
  } else {
    validatationErrors.name = false;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        name: "",
      };
    });
  }

  if (formData.mobile.trim().length === 0) {
    validatationErrors.mobile = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        mobile: "Phone field cannot be empty",
      };
    });
  } else if (
    !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.mobile.trim())
  ) {
    validatationErrors.mobile = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        mobile: "Wrong mobile phone number format",
      };
    });
  } else {
    validatationErrors.mobile = false;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        mobile: "",
      };
    });
  }

  if (formData.country.trim().length === 0) {
    validatationErrors.deliveryAddress.country = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        country: "Country field cannot be empty",
      };
    });
  } else {
    validatationErrors.country = false;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        country: "",
      };
    });
  }

  if (formData.city.trim().length === 0) {
    validatationErrors.deliveryAddress.city = true;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        city: "City field cannot be empty",
      };
    });
  } else {
    validatationErrors.deliveryAddress.city = false;
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        city: "",
      };
    });
  }

  return (
    !validatationErrors.email &&
    !validatationErrors.name &&
    !validatationErrors.mobile &&
    !validatationErrors.deliveryAddress.country &&
    !validatationErrors.deliveryAddress.city
  );
};
