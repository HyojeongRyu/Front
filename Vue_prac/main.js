var app = new Vue({
    el: '#app',
    //element를 마운트 한다.
    data: {
        message: 'hello!'
    }

})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }

})
app3.seen=false;

var app4 = new Vue({
    el: '#app4',
    data: {
        todos:[
            {text: 'Java learnig'},
            {text: 'Vue learnig'},
            {text: 'making special'}
        ]
    }
})
app4.todos.push({text:'4th'})

var app5=new Vue({
    el:'#app5',
    data:{
        message:'hello! vue.js!'
    },
    methods: {
        reverseMessage:function(){
            this.message=this.message.split('').reverse().join('')
        }
    }
})

var app6=new Vue({
    el: '#app6',
    data:{
        message: 'v-model'
    }
})

//컴포넌트란 미리 정의된 뷰 인스턴스, 즉 사용자 지정 엘리먼트라고 할 수 있다.
//문법은 Vue.component(tagName, options)
//결국 부모 인스턴스가 큰 데이터를 가지고 있으면
    //자식들은 그 데이터를 상속받아서
    //html로 어떻게 표현할지 사용자지정 태그를 만들 수 있게 됨

// child component
Vue.component('shopping_list',{
    props:['content'],
    template: '<li>{{content.text}}</li>'
    // html을 작성한다?
})

Vue.component('shopping_list2',{
    props:['content2'],
    template: '<li>{{content2.text}}</li>'
    // html을 작성한다?
})

// parent scop
var app7= new Vue({
    el:'#app_comp1',
    data:{
        groceryList:[
            {id: 0, text: 'Vege'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else'}
        ]
    }
    //data 자리에 components:{} 식으로 넣어서 로컬컴포넌트로 선언할 수 있다.
    //그러면 상위템플릿에서만 사용 가능하겠지?
})