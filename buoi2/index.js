const todo = new Vue ({
    el: "#todo",
    data: {
        input: '',
        list: [],
        isActive: false,
    },
    methods: {
        addTodo() {
            const duplicateCheck = this.list.findIndex(i => i.name === this.input);
            if ((this.input !== '') && !(duplicateCheck > -1)) {
                this.list.push(
                    {
                        name: this.input,
                        done: false
                    }
                );
            }
            console.log(duplicateCheck)
        },
        removeItem(item) {
            const deleteItemIndex = this.list.findIndex(i => i === item);
            this.list.splice(deleteItemIndex,1);
        },
        itemIsDone(item) {
            const itemDone = this.list.findIndex(i => i === item);
            this.list[itemDone].done = !this.list[itemDone].done;
        }
    },
})