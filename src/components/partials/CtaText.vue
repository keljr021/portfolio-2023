<script>
export default {
    name: 'ctaText',
    emits: [
        'scrollTo'
    ],
    methods: {
        scrollTo(input) {
            this.$emit('scrollTo', input)
        }
    }
}
</script>

<template>
    <div class="cta-text">
        <p>
            I'm interested in 
            <b>UI/UX design</b>, 
            <b>front-end development</b>, and 
            <b>logo design</b>. From writing notes to rough drafting ideas, my passion is to bring concepts to life.
        </p>
        <p>Feel free to browse or <router-link class="cta-link" :to="{ name: 'contact'}">drop a note</router-link> to chat more!</p>
    </div>
</template>

<style lang="scss" scoped>
.cta-text p {
    font-size: 20px;
    font-weight: 300;
    line-height: 2.25;
    padding: 10px 0;
    opacity: 0.9;

    .cta-link {
        cursor: pointer;
        padding: 0 2px;
        font-weight: normal;
        color: #18184d;
        text-decoration: underline;
        opacity: 1;
    }
}
</style>
