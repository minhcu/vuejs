<template>
    <div class="contact">
        <h2 class="title">{{title}}</h2>
        <p class="descript">{{descript}}</p>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data: () => {
        return {
            title: "What is Lorem Ipsum?",
            descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    }
}
</script>

<style lang="scss">
.contact {
    max-width: 600px;
    width: 100%;
    margin: auto;
    text-align: justify;
    padding: 20px 50px;
    border: 1px solid #42b983;
}
</style>