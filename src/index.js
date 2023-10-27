import { addBook, deleteBook, findBook } from "./book.js";

console.log();

const args = process.argv.slice(2);

parseArgs();

async function parseArgs() {
    try {
        switch (args[0]) {
            case "search":
                if (args.length < 2) throw new Error("책 제목 인자를 입력해주세요. ex.) search [키워드]");
                await findBook(args[1]);
                break;
            case "add":
                if (args.length < 5) throw new Error("인자가 부족합니다. ex.) add [번호] [제목] [출판사] [가격]");
                const data = {
                    bookid: args[1],
                    bookname: args[2],
                    publisher: args[3],
                    price: args[4],
                };
                await addBook(data);
                break;
            case "delete":
                if (args.length < 2) throw new Error("책 제목 인자를 입력해주세요. ex.) delete [제목]");
                await deleteBook(args[1]);
                break;
        }
    } catch (error) {
        if (error.message) console.log(error.message);
    } finally {
        process.exit();
    }
}
