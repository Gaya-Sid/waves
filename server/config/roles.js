const AccessControl = require("accesscontrol");

const allRights = {
  "create:any": ["*"],
  "read:any": ["*"],
  "update:any": ["*"],
  "delete:any": ["*"]
};

let grantsObject = {
  admin: {
    profile: allRights
  },
  user: {
    profile: {
      "read:own": ["*", "!_id", "!password"],
      "update:own": ["*", "!_id", "!password"]
    }
  }
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
