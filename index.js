const http=require('http')
const fs=require('fs/promises')
http.createServer(async (req, res) => {
    if(req.url==="/" || req.url==="/home"){
        res.writeHead(200,"okay",{"content-type": "text/html"})
        let html=await fs.readFile("./index.html","utf-8")
          res.end(html)
        }else if(req.url==="/css"){
    res.writeHead(200,"okay",{"content-type": "text/css"})
        let css=await fs.readFile("./style.css","utf-8")
          res.end(css)
}else if(req.url==="/image"){
    res.writeHead(200,"okay",{"content-type": "image/jpg"})
        let image=await fs.readFile("./media/MC3.jpg")
          res.end(image)
}else if(req.url==="/video"){
    res.writeHead(200,"okay",{"content-type": "video/mp4"})
    let video=await fs.readFile("./media/pexels-will-mendoza-17501328 (2160p).mp4")
      res.end(video)
}
else{
    res.writeHead(404,"error",{"content-type":"text/plain"})
    res.end("page not found")
}})
.listen(4500,(err)=>{
    if(err)
    console.log(err);
    console.log("the server is running on the port 4500.....");
    })
