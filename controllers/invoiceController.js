const Invoice = require("../models/Invoice");

exports.viewQuotations = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.id }).populate(
      "products"
    );
    res.status(200).json(invoices);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch invoices" });
  }
};
