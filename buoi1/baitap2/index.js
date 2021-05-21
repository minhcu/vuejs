const service = new Vue ({
    el: '#services',
    data: {
        arr: [
            {
                name: 'Web development',
                price: 300,
                active: false,
            },
            {
                name: 'Design',
                price: 400,
                active: false,
            },
            {
                name: 'Integration',
                price: 250,
                active: false,
            },
            {
                name: 'Training',
                price: 220,
                active: false,
            },
        ],
        checkout : []
    },
    methods: {
        addItem(item) {
            const num = this.arr.findIndex(i => i.name === item.name);
            const count = service.checkout.findIndex(i => i.name === service.arr[num].name);
            if (count < 0) {
                service.arr[num].active = true;
                service.checkout.push(service.arr[num]);
            }
            else {
                service.arr[num].active = false;
                service.checkout.splice(count,1);
            }
            let result = 0;
            service.checkout.forEach(ele => {result += ele.price})
            document.getElementById("total").innerHTML = '$' + result;
        },
    }
});