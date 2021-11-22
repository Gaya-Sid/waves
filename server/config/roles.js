const AccessControl = require("accesscontrol");

let grantsObject = {
  admin: {
    register: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"]
    }
  },
  user: {
    register: {
      "read:any": ["*"]
    }
  }
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
