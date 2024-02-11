const express = require("express");

const ctrl = require("../../controllers/contactsControllers");

const contactsRouter = express.Router();
const { validateBody } = require("../../middlewares");
const contactsSchemas = require("../../schemes/contactsSchemas");

contactsRouter.get("/", ctrl.listContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.removeContact);

contactsRouter.post(
  "/",
  validateBody(contactsSchemas.addSchema),
  ctrl.addContact
);

contactsRouter.put(
  "/:id",
  validateBody(contactsSchemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
