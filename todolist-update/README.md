# todolist-update
## todo-item
1. 维护自身的编辑状态 data: isEdited editingTitle
2. 更新备忘内容,勾选已完成,都自行更新备忘状态 props: title, completed
3. 删除当前备忘,通知父组件进行删除 $emit update:title
