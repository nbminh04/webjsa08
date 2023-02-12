const todo_input = document.querySelector(".todo_input")
const btn_add = document.querySelector(".btn_add")


let todolist = [
    {
        todo: 'Học HTML,CSS',
        status: true
    },
    {
        todo: 'Học JS',
        status: false
    },
    {
        todo: 'Học Python',
        status: false
    },
    {
        todo: 'Đi chơi',
        status: true
    },
]



for(var i in todolist){
    createItem(todolist, i)
}

btn_add.addEventListener("click", function(e){
    e.preventDefault()
    let newtoto = {
        todo: todo_input.value,
        status: false
    }
    todolist.push(newtoto)
    createItem(todolist,todolist.length-1)

    console.log(todolist);
})

function createItem(list, i){

    const todo = document.querySelector(".todo")

    let li = document.createElement("li")
    li.classList.add("item")
    li.textContent = list[i].todo;
    if(list[i].status == true){
        li.classList.add("completed")
    }

    let btn_del = document.createElement("button")
    btn_del.classList.add("btn_del")
    btn_del.textContent = "Delete"

    todo.appendChild(li)
    li.appendChild(btn_del)

    li.addEventListener("click", function(){
        if(list[i].status == true){
            list[i].status = false;
        }else{
            list[i].status = true;
        }
        li.classList.toggle("completed")
    })

    li.addEventListener("dblclick", function(){
        let edttodo = prompt("Nhập ghi chú",list[i].todo)
        list[i].todo = edttodo
        li.textContent = list[i].todo

        let btn_del = document.createElement("button")
        btn_del.classList.add("btn_del")
        btn_del.textContent = "Delete"
        li.appendChild(btn_del)
    })

    btn_del.addEventListener("click", ()=>{
        list.splice(i, 1)
        btn_del.parentElement.remove()

        console.log(todolist);

    })


}