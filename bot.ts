import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import User from "./db/postgres";
dotenv.config();

const bot: Telegraf = new Telegraf(process.env.TOKEN as string);

bot.use(async (ctx, next) => {
  let user_id = ctx.message?.from.id;

  let user = User.findOne({ where: { user_id } });
  if (!user) {
    await User.create({
      user_id,
    });
  }

  next();
});

bot.command("start", async (ctx) => {
  ctx.reply(
    "Assalomu alaykum bu bot orqali You Tube dan videolarni yuklab olishingiz mumkin\nMenga you tube link yuboring"
  );
});

bot.on("text", async (ctx) => {
    
});

bot.launch();
