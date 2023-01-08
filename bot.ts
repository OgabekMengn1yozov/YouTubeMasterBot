import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

const bot: Telegraf = new Telegraf(process.env.TOKEN as string);

bot.command("start", async (ctx) => {
    ctx.reply("Salom")
});

bot.on("text", async (ctx) => {});

bot.launch();
