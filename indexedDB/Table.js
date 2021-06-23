class ImgTable {
  constructor(element) {
    this.table = element,
    this.caption = "我是图片信息表",
    this.index = true,
    this.column = [
      { label: "序号", field: "id" },
      { label: "名称", field: "name" },
      { label: "图片", field: "path" }
    ],
    this.list = []
    this.buildCaption()
    this.buildTableColumn()
  }
  buildCaption() {
    let captionEl = this.table.createCaption();
    captionEl.className = 'table-caption'
    captionEl.innerHTML = this.caption
  }

  buildTableColumn() {
    let columnHTML = '';
    for (let th of this.column) {
      columnHTML += `<th data-th=${th}>${th.label}</th>`;
    }
    this.table.innerHTML += `<tr>${columnHTML}</tr>`;
  }

  buildTableList() {
    if (!this.list.length) return

    const rowLength = this.table.rows.length
    for (let i=rowLength - 1; i > 0; i--) {
      this.table.deleteRow(i)
    }

    for (let row of this.list) {
      let rowEl = this.table.insertRow();
      for(let col of this.column) {
        let cell = rowEl.insertCell()
        if (col.field === 'path') {
          cell.innerHTML = `<img class="cell-img" src="${row[col.field]}">`
        } else cell.innerHTML = row[col.field]
      }
    }
  }
}

class TableStudent {
  constructor(element) {
    this.table = element,
    this.caption = "我是学生信息表",
    this.index = true,
    this.column = [
      { label: "序号", field: "id" },
      { label: "姓名", field: "name" },
      { label: "年领", field: "age" },
      { label: "性别", field: "sex" }
    ],
    this.list = []

    this.buildCaption()
    this.buildTableColumn()
  }

  buildCaption() {
    let captionEl = this.table.createCaption();
    captionEl.className = 'table-caption'
    captionEl.innerHTML = `
      ${this.caption}
      <button type="button" class="btn btn-success btn-sm fr add-student">添加同学</button>
    `;
  }

  buildTableColumn() {
    let columnHTML = '';
    for (let th of this.column) {
      columnHTML += `<th data-th=${th}>${th.label}</th>`;
    }
    this.table.innerHTML += `<tr>${columnHTML}<th>操作</th></tr>`;
  }

  buildTableList() {
    if (!this.list.length) return

    const rowLength = this.table.rows.length
    for (let i=rowLength - 1; i > 0; i--) {
      this.table.deleteRow(i)
    }

    for (let row of this.list) {
      let rowEl = this.table.insertRow();
      for(let col of this.column) {
        let cell = rowEl.insertCell()
        if (col.field === 'path') {
          cell.innerHTML = `<img class="cell-img" src="${row[col.field]}">`
        } else cell.innerHTML = row[col.field]
      }
      // 添加操作栏
      let cell = rowEl.insertCell()
      cell.innerHTML = `
        <button type="button" class="btn btn-primary btn-xs edit" data-id=${row.id}>编辑</button>
        <button type="button" class="btn btn-danger btn-xs delete" data-id=${row.id}>删除</button>
      `
    }
  }
}

// export {
//   ImgTable,
//   TableStudent
// }