import Crawler from 'crawler'

let c = new Crawler({
     // 最大并发数默认为10
     maxConnections : 1,
    callback: function(error, res, done) {
        if(error) {
            console.log(error)
        } else {
            // console.log(`内容：${res.body}`)
            let $ = res.$
            let books = []
            $('div.up .l.bd ul li').each(function () {
                console.log($(this).html())
                let info = {
                // link: $(this).find('a').eq(0).attr('href'),
                // name: $(this).find('a').eq(1).text(),
                text: $(this).html()
                }
                books.push(info)
            })
            let content = JSON.stringify(books)
            console.log(`抓取内容：${content}`)
        }
        done()
    }
})
c.queue('https://www.exiaoshuo.com')
// c.queue('https://m.biquge5200.cc/')
// // 将多个URL加入请求队列
// c.queue(['http://www.google.com/','http://www.yahoo.com']);

// // 对单个URL使用特定的处理参数并指定单独的回调函数
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

// 将一段HTML代码加入请求队列，即不通过抓取，直接交由回调函数处理（可用于单元测试）
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);