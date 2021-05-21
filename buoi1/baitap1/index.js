const nav = new Vue({
    el: '#nav',
    data: {
        arr: [
            {
                text: 'home',
                active: false
            },
            {
                text: 'project',
                active: false
            },
            {
                text: 'services',
                active: false
            },
            {
                text: 'contact',
                active: false
            },
        ],
    },
    methods: {
        active(item) {
            const num = this.arr.findIndex(i => i.text === item.text);
            this.arr.forEach(ele => {
                ele.active = false;
            })
            this.arr[num].active = true;
            let testItem = document.getElementById("test");
            testItem.innerHTML = this.arr[num].text;

        },
      }
})
