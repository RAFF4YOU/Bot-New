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
let jarot = `*โธ โใ ๐๐ฏ๐ง๐ฐ๐ณ๐ฎ๐ข๐ด๐ช ๐๐ฆ๐ฏ๐ต๐ข๐ฏ๐จ ๐๐ฐ๐ต ใโ โ*

ใ๐๐ฏ๐ง๐ฐ๐ณ๐ฎ๐ข๐ด๐ช ๐ฑ๐ฆ๐ฏ๐จ๐ฆ๐ฎ๐ฃ๐ข๐ฏ๐จ๐ข๐ฏ ๐๐ฐ๐ตใ

โซนโซบ ๐๐ฐ๐ต ๐๐ฏ๐ช ๐ฑ๐ณ๐ฐ๐ด๐ฆ๐ด ๐ฑ๐ฆ๐ฏ๐จ๐ฆ๐ฎ๐ฃ๐ข๐ฏ๐จ๐ข๐ฏ
โซนโซบ ๐๐ข๐ญ๐ฐ ๐๐ฅ๐ข ๐ ๐ข๐ฏ๐จ ๐๐ณ๐ฐ๐ณ ๐๐ข๐ฑ๐ฐ๐ณ ๐๐ฆ ๐ฐ๐ธ๐ฏ๐ฆ๐ณ
โซนโซบ ๐๐ข๐ฏ๐จ๐ข๐ฏ ๐๐ถ๐ฑ๐ข ๐๐ถ๐ฑ๐ฐ๐ณ๐ต ๐๐ฐ๐ต ๐บ๐ข ๐๐ข๐ฌ
โซนโซบ ๐ฃ๐ช๐ข๐ณ ๐ด๐ฆ๐ฎ๐ข๐ฏ๐จ๐ข๐ต ๐๐ฌ๐ถ๐ต๐ช ๐ด๐ฐ๐ด๐ช๐ข๐ญ๐ฎ๐ฆ๐ฅ๐ช๐ข ๐ฃ๐ฐ๐ต

ใ๐๐ถ๐ฏ๐จ๐ฌ๐ช๐ฏ ๐๐ข๐ถ ๐๐ฐ๐ฏ๐ข๐ด๐ชใ

โซนโซบ Via Pulsa : 6283823397743
โซนโซบ Via Dana : 6283823397743
โซนโซบ Via Gopay : 6283823397743
โซนโซบ Via Socibuzz :
โซนโซบ https://sociabuzz.com/raff4you/tribe

ใ ๐๐ฌ๐ถ๐ต๐ช ๐๐ฐ๐ด๐ช๐ข๐ญ ๐ฎ๐ฆ๐ฅ๐ช๐ข ๐๐ฐ๐ตใ

โซนโซบ ๐๐ช๐ข๐ณ ๐๐ช๐ฅ๐ข๐ฌ ๐๐ฆ๐ต๐ช๐ฏ๐จ๐จ๐ข๐ญ๐ข๐ฏ ๐๐ฏ๐ง๐ฐ๐ณ๐ฎ๐ข๐ด๐ช ๐๐ฆ๐ณ๐ฃ๐ข๐ณ๐ถ!!
*โ ๐๐ถ๐ด๐ค๐ณ๐ช๐ฃ๐ฆ ๐ ๐ฐ๐ถ๐ต๐ถ๐ฃ๐ฆ ๐๐ฐ๐ต*
โซนโซบ https://youtube.com/channel/UC6KGmnw6-yG8vNx7mMJcukw
*โ ๐๐ฐ๐ญ๐ญ๐ฐ๐ธ ๐๐ฏ๐ด๐ต๐ข๐ด๐จ๐ณ๐ข๐ฎ ๐๐ฐ๐ต*
โซนโซบ https://Instagram.com/raff4youreal_

ใ ๐๐ฐ๐ช๐ฏ ๐๐ณ๐ฐ๐ถ๐ฑ ๐๐ฐ๐ต ๐๐ข๐ฌ ใ

*๐๐ณ๐ฐ๐ถ๐ฑ oficial RAFFA BOTZ*
โซนโซบ https://chat.whatsapp.com/GLJ8l40brp3BcFodqch21J

*๐๐ณ๐ฐ๐ถ๐ฑ JB RAFF4YOU*
โซนโซบ https://chat.whatsapp.com/Lj43c0jLvRx

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
