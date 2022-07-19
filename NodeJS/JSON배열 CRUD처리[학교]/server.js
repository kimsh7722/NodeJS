const express = require('express')
const app = express()
const PORT = process.env.PROT || 3500;

// JSON 배열 생성
student_list=[
    {ID:1025,Marjo:'전자',Name:'강인찬'},
    {ID:1215,Marjo:'멀티',Name:'상윤호'},
    {ID:1535,Marjo:'전기',Name:'레이딕'}
]

/*
    용어 정리
    req[Request] : 요청 하는 자
    res[Response] : 요청을 응답하는 자
    params[Paramater] : 매개변수를 가져오는 자
*/
// 읽기[Read]
app.get('/Read/all',(req,res)=>{
    const id=req.params.ID
    const jo=req.params.Marjo
    const name=req.params.Name
    for(var i=0; i < student_list.length; i++){
        console.log('ID : '+student_list[i].ID+' | '+
        '전공 : '+student_list[i].Marjo+' | '+
        '이름 : '+student_list[i].Name+' | ')
    }
    res.send('현재 입학할려는 학생들입니다'+'<br>'+
    'ID : '+id+'<br>'+
    '전공 : '+jo+'<br>'+
    '이름 : '+name+'<br>'
    )
})

// 생성[Create]
app.get('/create/student:ID&:Marjo&:Name',(req,res)=>{
    const id = req.params.ID
    // 해성 : 매개 변수 ID를 용청하라
    const ma = req.params.Marjo
    const na = req.params.Name

    // ID,Marjo,Name를 담을 매개변수
    var shcol = {ID:id,Marjo:ma,Name:na}

    // Push 사용
    student_list.push(shcol)

    // concat 사용
    // student_list=student_list.concat(shcol)

    // JSON 데이터 가져오기
    for(var i=0; i < student_list.length; i++){
        console.log('ID : '+student_list[i].ID+' | '+
        '전공 : '+student_list[i].Marjo+' | '+
        '이름 : '+student_list[i].Name+' | ')
    }

    res.send('현재 입학하려는 학생'+'<br>'
    +'등록번호 : '+id+'<br>'
    +'전   공 : '+ma+'<br>'
    +'이   름 : '+na+'<br>'+'추가하였습니다'
    )
})

// 갱신[Update]
app.get('/Update/student:ID&:Marjo&:Name',(req,res)=>{
    res.send()
})

// 삭제[Delete]
app.get('/Delete/student:ID&:Marjo&:Name',(req,res)=>{
    res.send()
})

// 사이트 출력
app.listen(PORT,()=>{
    // 사이트 이름 정하기
    console.log(`Server on : http://localhost:${PORT}`)
})