import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    res.json(newContact);
  } catch (error) {
    console.log("Error creating contact message", error);
    res.json(error.msg);
  }
};
