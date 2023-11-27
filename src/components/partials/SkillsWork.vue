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
    <div class="skills-body-work py-6">
        <div class="skills-body-work-title">{{ title }}</div>
        <div class="skills-body-work-location">{{ location }}</div>
        <div class="skills-body-work-date">{{ date }}</div>
        <div class="skills-body-work-desc">
            <ul>
                <li v-for="item in desc">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skills-body-work-title {
    font-weight: 500;
}

.skills-body-work-date {
    font-style: italic;
    opacity: 0.5;
}

.skills-body-work-desc {
    ul {
        margin-left: 20px;
    }
}
</style>