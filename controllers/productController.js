const Product = require("../models/Product");
const Invoice = require("../models/Invoice");
const puppeteer = require("puppeteer");

exports.addProducts = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body.products);
    const totalAmount = products.reduce((acc, product) => {
      return acc + product.qty * product.rate * (1 + product.gst / 100);
    }, 0);

    const invoice = new Invoice({
      user: req.user.id,
      products: products.map((p) => p._id),
      totalAmount,
    });
    await invoice.save();

    // Generate PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent("<h1>Invoice</h1>");
    const pdf = await page.pdf();

    await browser.close();

    res.status(201).send({ message: "Invoice created", pdf });
  } catch (error) {
    res.status(400).json({ error: "Adding products failed" });
  }
};
