import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const feedbacks = await prisma.feedback.findMany({ orderBy: { id: "desc" } });
  res.render("index", { feedbacks });
});

app.post("/", async (req, res) => {
  const data = req.body;
  await prisma.feedback.create({ data: data });
  res.redirect("/");
});

app.listen(3000, () => {
  console.info(`server running on 3000`);
});
