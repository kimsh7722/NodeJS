// 세팅
// const : 상수이자 바꿀수없는 수말한다
const express = require('express') // 기능 가져와서
// 웹 애플리케이션 프레임워크 
const app = express() // express객체 생성
const PORT = process.env.PROT || 2200;
// 서버 포트를 4000번을 내가 정함
// 기존의 well known 포트를 피해가면된다.


movie_list=[ // Json 배열
    {id:1,title:'perl harbor'},
    {id:2,title:'lord of the rings'},
    {id:3,title:'top gun'}
]

// 모든 영화 로그창 표시
app.get('/movies',(req,res)=>{
    for(var i=0; i < movie_list.length; i++) {
        console.log('id : '+movie_list[i].id)
        console.log('title : '+movie_list[i].title)
    }
    res.send('Movie List')
})

// 영화중 하나를 검색[R]
app.get('/movies/:id',(req,res)=>{
    const id = req.params.id
    const title = req.params.title
    for(var i=0; i < movie_list.length; i++){

        if(id == movie_list[i].id) {
            // console.log('id : '+movie_list[i].id)
            // console.log('title : '+movie_list[i].title)
            res.send(
                '영화 순위는 '+id+' 이고'+"<br>"+
                '영화 이름은 '+movie_list[i].title+' 입니다'+"<br>")
        }
    }
})

// 배열에서 영화 추가[C]
app.get('/post/movies:id&:title',(req,res)=>{
    // http://localhost:4000/post/movies(주소)1(id)&trenspomal(title)
    // push와 concat사용하여 완성하라
    const id = req.params.id
    const title = req.params.title
    var movie_obj = {id:id,title:title}

    /* 
    push를 사용햇을 경우
    push는 "밀다,밀러붙이다" movie_list안에서 movie_obj를 추가시켜라
    */
    // movie_list.push(movie_obj) // push 했을 경우

    /*
        concat 사용 햇을 경우
        추가된 데이터를 리턴되기 때문에, 왼쪽에서 받아야된다.
    */
    movie_list=movie_list.concat(movie_obj)

    // JSON 데이터 가져온다
    for(var i=0; i < movie_list.length; i++) {
        console.log('id : '+movie_list[i].id)
        console.log('title : '+movie_list[i].title)
    }
    res.send('영화 : '+title+'<br>'+'위치 : '+id+'<br>'+'추가 하였습니다')
})


// 배열안의 영화 수정[U]
app.get('/put/movies/:id&:title',(req,res)=>{
    const id = req.params.id
    const title = req.params.title
    // 특정 id의 제목을 title로 변경
    // 힌트 for-if, movie_list
    for(var i=0 ; i < movie_list.length; i++)  {
        if(id == movie_list[i].id) {
            movie_list[i].title=title
        }
    }
    for(var i=0 ; i < movie_list.length; i++)  {
        console.log('id : '+movie_list[i].id)
        console.log('title : '+movie_list[i].title)
    }
    res.send("영화 : "+title+"를<br>"+id+"의 위치에<br>"+"변경되었습니다")
})

// 영화 삭제 [D]
app.get('/delete/movies/:id',(req,res)=>{
    /*
        splice, filter메서드
        배열의 특정 원소 삭제
    */
    const id = req.params.id
    movie_list.splice(id-1, 1);

    for(var i=0; i < movie_list.length; i++) {
        console.log('id : '+movie_list[i].id)
        console.log('title : '+movie_list[i].title)
    }
})



app.listen(PORT,()=>{
    // ''랑 ``랑 다르다 ``위치는 키보드 상당 숫자패털 0번째위치 물결표시
    console.log(`Server on: http://localhost:${PORT}`)
    // template string
    
})