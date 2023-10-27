import Knex from "knex";
import config from "./knexfile.js";

const knex = Knex(config);

export async function findBook(name) {
    const books = await knex("Book").where("bookname", "like", `%${name}%`);
    if (!books) throw new Error("해당하는 책이 없습니다.");
    console.log(books);
}

export async function addBook(data) {
    const result = await knex("Book").insert(data);
    console.log(result);
}

export async function deleteBook(name) {
    const result = await knex("Book").delete("bookname", name);
    console.log(result);
}
