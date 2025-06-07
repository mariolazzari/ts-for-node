import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Contact = mongoose.model("Contact", ContactSchema);

type Controller = (req: Request, res: Response) => Promise<void>;

export const addNewContact: Controller = async (req, res) => {
  const newContact = new Contact(req.body);

  try {
    const contact = await newContact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getContacts: Controller = async (_req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getContactWithID: Controller = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateContact: Controller = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteContact: Controller = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.contactId);
    res.json(contact);
  } catch (error) {
    res.status(500).json(error);
  }
};
