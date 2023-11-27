<script>
export default {
    name: 'SkillsEdu',
    props: {
        title: String,
        location: String,
        date: String
    }
}
</script>

<template>
    <div class="skills-body py-3">
        <div class="skills-body-work">
            <div>{{ title }}</div>
            <div>{{ location }}</div>
            <div>{{ date }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>