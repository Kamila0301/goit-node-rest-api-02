const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const contactsSchemas = require("../../schemes/contacts");

const contactRouter = express.Router();

contactRouter.get("/", ctrl.listContacts);

contactRouter.get("/:id", ctrl.getContactById);

contactRouter.delete("/:id", ctrl.removeContact);

contactRouter.post(
  "/",
  validateBody(contactsSchemas.addSchema),
  ctrl.addContact
);

contactRouter.put(
  "/:id",
  validateBody(contactsSchemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
