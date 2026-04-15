function addtodo(){
    let x = document.getElementById('id').value

    let node = document.createElement('div')
    node.className="list-group-item list-group-item-primary text-center mb-2";

    let textnode = document.createTextNode(x)
    node.appendChild(textnode)

    document.getElementById('result').appendChild(node)

    document.getElementById('id').value=""


    let b = document.createElement('button')
    b.className="btn btn-danger"
    b.textContent="delete_todo"
    b.onclick=deletetodo
    b.style="float:right;"
    node.appendChild(b)


    let e = document.createElement('button')
    e.className="btn btn-warning"
    e.textContent="edit_todo"
    e.onclick=edittodo
    e.style="float:right;"
    node.appendChild(e)

}

function clear_todo(){
    document.getElementById('result').innerHTML=""
}

function deletetodo(){
    this.parentElement.remove()
}

function edittodo(){
    let newdiv = document.createElement('div')
    newdiv.className ="container text-center mt-3"

    let y = document.createElement('input')
    y.className ="form-control mb-2"
    y.setAttribute("type","text")
    newdiv.appendChild(y)

    let b =document.createElement('button')
    b.className ="btn btn-success"
    b.textContent="update"
    b.onclick=edittext
    newdiv.appendChild(b)

    let c =document.createElement('button')
    c.className ="btn btn-danger"
    c.textContent="close"
    c.onclick=closeedit
    newdiv.appendChild(c)

    this.parentElement.appendChild(newdiv)

}

function edittext(){
   let d = this.parentElement.firstChild.value
   let textnode1=document.createTextNode(d)
   this.parentElement.parentElement.replaceChild(textnode1,this.parentElement.parentElement.firstChild)
   this.parentElement.remove()

}

function closeedit(){
    this.parentElement.remove()
}