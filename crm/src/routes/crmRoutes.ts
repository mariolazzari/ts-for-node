import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app: any) => {
  app
    .route("/contact")
    .get((req: Request, _res: Response, next: any) => {
      // middleware
      console.log(`Request from: ${req.url}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // get specific contact
    .get(getContactWithID)
    // put request
    .put(updateContact)
    // delete request
    .delete(deleteContact);
};

export default routes;
