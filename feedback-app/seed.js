import { PrismaClient } from "@prisma/client";

async function seed() {
  const data = [];
  let i = 0;
  while (i < 10) {
    data.push({
      name: `Jhon Doe ${i}`,
      email: `jhondoe${i}@mail.com`,
      message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores amet doloribus voluptates numquam, quisquam ex ut commodi consectetur maxime inventore natus, dicta provident assumenda magnam! Explicabo praesentium nostrum eveniet voluptatum fugiat eum at quasi, porro illum aperiam, animi cumque doloribus quae nihil possimus qui iusto perferendis! Minus quasi recusandae quisquam vero. Aliquid suscipit aut a quibusdam ea! Fugit eum illo sint quas placeat ullam facere, odio, quisquam error et nihil! Qui nulla, dolorum corporis perspiciatis fugiat impedit animi reiciendis quia dignissimos obcaecati nostrum, quas magni mollitia accusantium, nam tempora. Labore delectus perspiciatis soluta laboriosam quibusdam veritatis culpa minus error corporis?`,
    });
    i++;
  }
  await new PrismaClient().feedback.createMany({ data });
}

seed();
