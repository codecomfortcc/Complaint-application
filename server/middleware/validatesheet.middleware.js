import joi from 'joi'

export function validateSheet(req, res, next) {
  const data = req.body;
  data.date = new Date()
  
  if (!data) {
    return res.status(400).send("No data provided.");
  }
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().required().max(10).min(10),
    date: joi.date().required(),
    address: joi.string().required(),
    city: joi.string().required(),
    state: joi.string().required(),
    pinCode: joi.string().required().min(6).max(6),
    comment: joi.string().required(),
  });
  const { error } = schema.validate(data);
  if (error) {
    console.log(error.details[0].message)
    return res.status(400).send(error.details[0].message);
  }
  next();
}



