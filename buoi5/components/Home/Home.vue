<template>
  <div class="todo">
      <h2>Todo</h2>
      <div class="input-container">
            <input v-model="input" class="input" type="text" placeholder="Add Your Todo-thing" required>
            <input class="submit" type="submit" value="+" v-on:click="addTodo">
        </div>
        <div class="list-item" >
            <div class="item" v-for="item in list" :key="item" v-bind:class="{active: item.done}">
                <p class="item-text">
                    {{ item.name }}
                </p>
                <div class="btn">
                    <div class="done-btn" v-on:click="itemIsDone(item)">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="delete-btn" v-on:click="removeItem(item)">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => {
    return {
      input: '',
      list: [],
      isActive: false,
    }
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
}
</script>

<style lang="scss">

.todo {
  background-color: white;
  width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #42b983;
  h2 {
  text-align: center;
  font-size: 30px;
  }
  .input-container {
    text-align: center;
    .input {
    border: solid 1px #f0f0f0;
    outline: none;
    }
    .submit {
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    background-color: #8e49e9;
    outline: none;
    box-shadow: none;
    }
  }
  .item {
    margin: 10px 30px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.438);
    padding: 10px;
}
.item-text {
    line-height: 30px;
    padding: 10px 20px;
}
.btn {
    width: 105px;
    display: flex;
    justify-content: space-between;
}
.delete-btn,
.done-btn {
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.delete-btn {
    background-color: #e74d3d;
}
.done-btn {
    background-color: #32af3d;
}
.active {
    opacity: 0.5;
    box-shadow: none;
}
p {
  margin: 0;
}
}

</style>