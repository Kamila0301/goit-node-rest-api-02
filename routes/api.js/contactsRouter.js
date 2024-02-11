const express = require("express");

const ctrl = require("../../controllers/contactsControllers");

const { validateBody } = require("../../middlewares");

const contactsSchemas = require("../../schemes/contactsSchemas");

const contactsRouter = express.Router();

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
