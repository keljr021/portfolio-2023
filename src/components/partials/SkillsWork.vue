<script>
export default {
    name: 'SkillsWork',
    props: {
        title: String,
        location: String,
        date: String,
        desc: Array
    }
}
</script>

<template>
    <div class="skills-body py-3">
        <div class="skills-body-work">
            <div>{{ title }}</div>
            <div>{{ location }}</div>
            <div>{{ date }}</div>
            <div>
                <ul>
                    <li v-for="item in desc">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>