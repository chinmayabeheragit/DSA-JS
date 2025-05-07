const saveProd = async (productData, session) => {
    try {
      const product = new productManagementModel(productData);
      await product.save({ session });  // Pass session correctly as an object
      return product;
    } catch (error) {
      throw error;
    }
  };
  