/* =========================================================
   Brand contact config — EDIT THESE TWO LINES
   ========================================================= */
const BRAND = {
  name: "Swamishrayy Creations",
  tagline: "Where Threads Become Art",
  instagramHandle: "_swamishrayy_.creation_",      // without the @
  telegramUsername: "swamishrayycreations",         // without the @, your Telegram username
};

function instagramLink(){
  return `https://instagram.com/${BRAND.instagramHandle}`;
}
function telegramLink(message){
  const base = `https://t.me/${BRAND.telegramUsername}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
