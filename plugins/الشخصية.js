let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'حط اسم', m)
	
  let personalidad = `
✯≼══━━﹂تحليل الشخصيه﹁━━══≽✯
*🏮║الاسم║《 ${text} 》*
*🏮║اخلاق الجيده║《 ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])} 》*
*🏮║الاخلاق السيئه║《 ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])} 》*
*🏮║توع الشخصيه║《 ${pickRandom(['طيب القلب','متكبر','بخيل','كريم','متواضع','خجول','جبان','فضولي','محبوب','كريم', 'ذكي'])} 》*
*🏮║دائماء║《 ${pickRandom(['متوتر','سيء','مشتت','مزعج','نمام','بيقرا كتب','خروجات','بيتفرج ع الانمي','فاتح واتس','بيكدب','سيمب','ماسك الفون'])} 》*
*🏮║الذكاء║《 ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])} 》*
*🏮║الشجاعه║《 ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])} 》*
*🏮║الجُبن║《 ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])} 》*
*🏮║الشهره║《 ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])} 》*
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidad *<nombre>*']
handler.tags = ['fun']
handler.command = /^شخصية|الشخصيه|الشخصية|شخصيه/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
                                }
