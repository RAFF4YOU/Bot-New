import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let jarot = `*▸ —「 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘛𝘦𝘯𝘵𝘢𝘯𝘨 𝘉𝘰𝘵 」— ◂*

「𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘱𝘦𝘯𝘨𝘦𝘮𝘣𝘢𝘯𝘨𝘢𝘯 𝘉𝘰𝘵」

⫹⫺ 𝘉𝘰𝘵 𝘐𝘯𝘪 𝘱𝘳𝘰𝘴𝘦𝘴 𝘱𝘦𝘯𝘨𝘦𝘮𝘣𝘢𝘯𝘨𝘢𝘯
⫹⫺ 𝘒𝘢𝘭𝘰 𝘈𝘥𝘢 𝘠𝘢𝘯𝘨 𝘌𝘳𝘰𝘳 𝘓𝘢𝘱𝘰𝘳 𝘒𝘦 𝘰𝘸𝘯𝘦𝘳
⫹⫺ 𝘑𝘢𝘯𝘨𝘢𝘯 𝘓𝘶𝘱𝘢 𝘚𝘶𝘱𝘰𝘳𝘵 𝘉𝘰𝘵 𝘺𝘢 𝘒𝘢𝘬
⫹⫺ 𝘣𝘪𝘢𝘳 𝘴𝘦𝘮𝘢𝘯𝘨𝘢𝘵 𝘐𝘬𝘶𝘵𝘪 𝘴𝘰𝘴𝘪𝘢𝘭𝘮𝘦𝘥𝘪𝘢 𝘣𝘰𝘵

「𝘔𝘶𝘯𝘨𝘬𝘪𝘯 𝘔𝘢𝘶 𝘋𝘰𝘯𝘢𝘴𝘪」

⫹⫺ Via Pulsa : 6283823397743
⫹⫺ Via Dana : 6283823397743
⫹⫺ Via Gopay : 6283823397743
⫹⫺ Via Socibuzz :
⫹⫺ https://sociabuzz.com/raff4you/tribe

「 𝘐𝘬𝘶𝘵𝘪 𝘚𝘰𝘴𝘪𝘢𝘭 𝘮𝘦𝘥𝘪𝘢 𝘉𝘰𝘵」

⫹⫺ 𝘉𝘪𝘢𝘳 𝘛𝘪𝘥𝘢𝘬 𝘒𝘦𝘵𝘪𝘯𝘨𝘨𝘢𝘭𝘢𝘯 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘛𝘦𝘳𝘣𝘢𝘳𝘶!!
*❉ 𝘚𝘶𝘴𝘤𝘳𝘪𝘣𝘦 𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘉𝘰𝘵*
⫹⫺ https://youtube.com/channel/UC6KGmnw6-yG8vNx7mMJcukw
*❉ 𝘍𝘰𝘭𝘭𝘰𝘸 𝘐𝘯𝘴𝘵𝘢𝘴𝘨𝘳𝘢𝘮 𝘉𝘰𝘵*
⫹⫺ https://Instagram.com/raff4youreal_

「 𝘑𝘰𝘪𝘯 𝘎𝘳𝘰𝘶𝘱 𝘉𝘰𝘵 𝘒𝘢𝘬 」

*𝘎𝘳𝘰𝘶𝘱 oficial RAFFA BOTZ*
⫹⫺ https://chat.whatsapp.com/GLJ8l40brp3BcFodqch21J

*𝘎𝘳𝘰𝘶𝘱 JB RAFF4YOU*
⫹⫺ https://chat.whatsapp.com/Lj43c0jLvRx

`
conn.sendButtonDoc(m.chat, jarot, wm,'Makasih Yang Sudah Suport','You', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/raff4yourealr_",
    mediaType: "VIDEO",
    description: "https://Instagram.com/raff4youreal_", 
    title: 'RAFFA BOTZ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['rate']
handler.tags = ['main','info']
handler.command = /^(rate|info update terbaru bot)$/i
export default handler
