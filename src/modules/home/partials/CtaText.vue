<script setup>
import CtaMenu from './CtaMenu.vue'

const emit = defineEmits(['scrollTo']);

function scrollTo(input) {
  emit('scrollTo', input);
}
</script>

<template>
    <div class="cta-text">
        <p>
           I'm a IT Professional with a decade of expereience designing and building user-centered digital experiences through UX design and front-end development.
        </p>
        <p>
            My goal is to bring client ideas to life.
        </p>
        <p>
            <CtaMenu />
        </p>
    </div>
</template>

<style lang="scss" scoped>
.cta-text p {
    font-size: 20px;
    font-weight: 300;
    line-height: 2.25;
    padding: 20px 0;
    opacity: 0.9;

    .cta-link {
        cursor: pointer;
        padding: 0 2px;
        font-weight: normal;
        color: #d9d9d9;
        text-decoration: underline;
        opacity: 1;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #b9e9e1;
        }
    }
}
</style>
