const api = require("./api.js");
const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.listen(5000);

server.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await api.get(`/items/${id}`);

    return res.send({
      item: [
        {
          id: data.id,
          price: data.price,
          title: data.title,
          pictures: data.pictures,
          sold_quantity: data.sold_quantity,
          shipping: data.shipping,
          descriptions: data.descriptions,
        },
      ],
    });
  } catch (error) {
    res.send({ error: error.mensaje });
  }
});

server.get("/items/:id/description", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await api.get(`/items/${id}/description`);

    return res.send({
      descripcion: [
        {
          text: data.text,
          plain_text: data.plain_text,
        },
      ],
    });
  } catch (error) {
    res.send({ error: error.mensaje });
  }
});
