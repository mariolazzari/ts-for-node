"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.getContactWithID = exports.getContacts = exports.addNewContact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose_1.default.model("Contact", crmModel_1.ContactSchema);
const addNewContact = async (req, res) => {
    const newContact = new Contact(req.body);
    try {
        const contact = await newContact.save();
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.addNewContact = addNewContact;
const getContacts = async (_req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getContacts = getContacts;
const getContactWithID = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getContactWithID = getContactWithID;
const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.contactId, req.body, { new: true });
        res.json(contact);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.updateContact = updateContact;
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.contactId);
        res.json(contact);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.deleteContact = deleteContact;
