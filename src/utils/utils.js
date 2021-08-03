/* eslint-disable consistent-return */

exports.requiresBook = (body) => {
  const inputs = ["motif", "date"];
  const key = [];
  inputs.forEach((element) => {
    if (body[element] === undefined) {
      key.push(element);
    }
  });
  return key;
};

// inscription

exports.dataType = (body) => {
  const inputsString = ["role", "username", "email", "password"];

  const key = [];
  inputsString.forEach((element) => {
    const type = typeof body[element];
    if (type !== "string") {
      key.push(element);
    }
  });
  return key;
};

exports.requiresInputs = (body) => {
  const inputs = ["role", "username", "email", "password"];
  const key = [];
  inputs.forEach((element) => {
    if (body[element] === undefined) {
      key.push(element);
    }
  });
  return key;
};
