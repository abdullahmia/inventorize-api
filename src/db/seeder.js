import database from "../db/dbConnect.js";
import { Permission } from "../models/permission.model.js";

const { sequelize } = database;

async function seedPermissions() {
  try {
    const tables = ["permissions", "roles", "users"];

    // create 4 permissions for each table
    const permissions = tables.map((table) => {
      return [
        {
          name: `create-${table}`,
          description: `create ${table}`,
        },
        {
          name: `view-${table}`,
          description: `read ${table}`,
        },
        {
          name: `update-${table}`,
          description: `update ${table}`,
        },
        {
          name: `delete-${table}`,
          description: `delete ${table}`,
        },
      ];
    });

    const permissionList = permissions.flat();
    await Permission.bulkCreate(permissionList);

    console.log("Permissions seeded successfully");
  } catch (error) {
    console.error("Error seeding permissions:", error);
  }
}

seedPermissions();
