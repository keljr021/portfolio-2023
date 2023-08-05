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
            My focus is 
            <span class="cta-link" @click="scrollTo('ui')">UI/UX design</span>, 
            <span class="cta-link" @click="scrollTo('dev')">front-end development</span>, and 
            <span class="cta-link" @click="scrollTo('logos')">logo design</span>. From writing notes to rough drafting ideas, my passion is to bring concepts to life.
        </p>
        <p>Feel free to browse or <span class="cta-link" @click="scrollTo('contact')">drop a note</span> to chat more!</p>
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
        
        &:hover {
            color: #18184d;
            text-decoration: underline;
            opacity: 1;
        }
    }
}
</style>
