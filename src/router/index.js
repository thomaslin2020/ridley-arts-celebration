import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/art_exhibition',
        name: 'IBArtExhibition',
        component: () => import('../views/Art Exhibition.vue')
    },
    {
        path: '/art_exhibition/:name',
        name: 'IBArtExhibitionArtists',
        component: () => import('../views/Artists.vue')
    },
    {
        path: '/art_video',
        name: 'IBArtVideo',
        component: () => import('../views/ArtVideo.vue')
    },
    {
        path: '/film',
        name: 'Film',
        component: () => import('../views/Film.vue')
    },
    {
        path: '/art_gallery',
        name: 'ArtGallery',
        component: () => import('../views/VisualArt.vue')
    },

    {
        path: '/art_gallery/:grade',
        name: 'ArtGalleryGrade',
        component: () => import('../views/VisualArtGrade.vue')
    },
    {
        path: '/media',
        name: 'MediaArt',
        component: () => import('../views/MediaArt.vue')
    },
    {
        path: '/award_video',
        name: 'ArtsAwardsVideo',
        component: () => import('../views/Arts Awards.vue')
    },
    {
        path: '/award_list',
        name: 'ArtsAwardsList',
        component: () => import('../views/Award List.vue')
    },
    {
        path: '/music',
        name: 'MusicGallery',
        component: () => import('../views/Music.vue')
    },
    {
        path: '/music/:event',
        name: 'MusicEvents',
        component: () => import('../views/MusicEvents.vue')
    },
    {
        path: '/theatre',
        name: 'TheatreGallery',
        component: () => import('../views/Theatre.vue')
    },
    {
        path: '/theatre/:event',
        name: 'TheatreEvents',
        component: () => import('../views/TheatreEvents.vue')
    },
    {
        path: '/theatre_ib2',
        name: 'IB2Theatre',
        component: () => import('../views/IB2 Theatre.vue')
    },
    {
        path:'/design_tech',
        name:'DesignTech',
        component: () => import('../views/Design.vue')
    },
    {
        path:'/design_tech/:grade',
        name:'DesignTechGrade',
        component: () => import('../views/Designs.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
