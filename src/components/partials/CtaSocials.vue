<script>
import linkedinUrl from './../../assets/linkedin.png'
import githubUrl from './../../assets/github.png'


export default {
    name: 'ctaSocials',
    data () {
      return {
        socialArray: [
            {
                type: 'icon',
                src: 'mdi-email',
                link: 'mailto:kmjr07@yahoo.com',
                alt: 'Email kmjr07@yahoo.com'
            },
            {
                type: 'icon',
                src: 'mdi-email',
                link: 'mailto:keljr021@gmail.com',
                alt: 'Email keljr021@gmail.com'
            },
            {
                type: 'img',
                src: linkedinUrl,
                link: 'https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/',
                alt: 'LinkedIn https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/'

            },
            {
                type: 'img',
                src: githubUrl,
                link: 'https://github.com/keljr021',
                alt: 'GitHub https://github.com/keljr021'

            }
        ]
      };
    }
}
</script>

<template>
    <div class="cta-socials">
        <span class="cta-socials-item" v-for="item in socialArray">
            <v-tooltip location="top" :text="item.alt">
                <template v-slot:activator="{ props }">
                    <v-icon v-if="item.type === 'icon'" :icon="item.src" variant="text" @click="window.open(item.link, '_blank');" v-bind="props" />
                    <a v-else :href="item.link" target="_blank" v-bind="props"><img :src="item.src" :alt="item.alt" /></a>
                </template>
                <span>{{ item.alt }}</span>
            </v-tooltip>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.cta-socials {
    padding-right: 85px;
}

.cta-socials-item {
    font-size: 16px;
    opacity: 0.8;
    padding: 0 25px;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    img {
        height: 16px;
    }
}
</style>
