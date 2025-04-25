const myappcreate = {

    data() {
        return {

            name: "celcia",
            age: 26,
            input_name: ""
        }

    }, methods: {

        cliclar(e) {


            e.preventDefault();
console.log(this.input_name);
            this.name = this.input_name;

        }

    }

}

Vue.createApp(myappcreate).mount("#app");