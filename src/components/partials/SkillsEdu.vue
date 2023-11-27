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
        <div class="skills-body-edu">
            <div class="skills-body-edu-title">{{ title }}</div>
            <div class="skills-body-edu-location">{{ location }}</div>
            <div class="skills-body-edu-date">{{ date }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skills-body-edu-title {
    font-weight: 500;
}

.skills-body-edu-date {
    font-style: italic;
    opacity: 0.5;
}
</style>