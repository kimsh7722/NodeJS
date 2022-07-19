
const express = require('express') // 기능 가져와서
// 웹 애플리케이션 프레임워크 
const app = express() // express객체 생성
const PORT = process.env.PROT || 1500;
// 서버 포트를 4000번을 내가 정함
// 기존의 well known 포트를 피해가면된다.


// 처리
// express서버가 get방식 요청을 받아들인다
app.get('/' ,     (req,res)=>{  // req : request, res : response
//     요청     화살표 함수(arrow function)
    res.send('Hollo super grend')
})
// express서버가 get방식 요청을 받아들인다.

app.get('/name',(req,res)=>{ 
        res.send('Hello SungHoon')
})

//       /  경로 값 / 아무거나입력해도 로그로 출력
app.get('/api/person1/:name',(req,res)=>{ 
    // http://localhost:4000/api/person1/hoon&31[:name]
    //       request(요청) parameters(인수,인자) name
    console.log(req.params.name)
    const name=req.params.name
    res.send('요청 Person1 : '+name)
})

app.get('/api/person2/:name&:age',(req,res)=>{ 
    // http://localhost:4000/api/person2/hoon&31[:name$:age]
    console.log(req.params) // 요청을 한것 전부 보여라
    console.log(req.params.name) // name 요청
    console.log(req.params.age) // age 요청
    res.send('요청 Person2')
})

app.get('/api/person3/:title&:director&:runing',(req,res)=>{ 
    console.log(req.params) // 요청을 한것 전부 보여라
    const movietitle = req.params.title
    const direct = req.params.director
    const time = req.params.runing
    res.send('영화 제목 : '+movietitle+'<br>'
            +'영화 감독 : '+direct+'<br>'
            +'영화 시간 : '+time)
})

// 사칙연산
app.get('/api/add/:num1&:num2',(req,res)=>{ 
    console.log(req.params) // 요청을 한것 전부 보여라
    const num1 = parseInt(req.params.num1) // 문자 -> 정수 변환
    const num2 = parseInt(req.params.num2)
    const plus = num1+num2
    const minus = num1-num2
    const multiplied = num1*num2
    const divided1 = num1/num2
    const divided2 = num1%num2
    res.send(
    num1+'+'+num2+'='+plus+'<br>'
    +num1+'-'+num2+'='+minus+'<br>'
    +num1+'X'+num2+'='+multiplied+'<br>'
    +num1+'※'+num2+'='+divided1+'<br>'
    +num1+'%'+num2+'='+divided2+'<br>')
})

app.listen(PORT,()=>{
    // ''랑 ``랑 다르다 ``위치는 키보드 상당 숫자패털 0번째위치 물결표시
    console.log(`Server on: http://localhost:${PORT}`)
    // template string
    
})