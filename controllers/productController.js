import Product from "../models/product.js";

// GET ALL PRODUCTS DATA
const allProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    if (!allProducts) {
      return res.status(404).send({
        status: false,
        message: "Products not found, something issue",
      });
    }
    return res.status(200).send({
      status: true,
      message: "Total products data",
      totalProducts: allProducts.length,
      data:allProducts
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: false,
      message: "Error in get all products API",
      error,
    });
  }
};

// CREATING NEW PRODUCT
const createProduct = async (req, res) => {
  try {
    const { productName, productColor, productStock, productRating } = req.body;
    const newProduct = await Product.create({
      productName,
      productColor,
      productStock,
      productRating,
    });
    if (!newProduct) {
      return res.status(404).send({
        status: false,
        message: "Product not create, something issue",
      });
    }
    return res.status(200).send({
      status: true,
      message: "New Product created successfully!!",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: false,
      mesasge: "Error in create product API ",
      error,
    });
  }
};

export { allProducts, createProduct };
