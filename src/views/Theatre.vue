<template>
    <div class="parent">
        <div class="grid" style="padding-bottom: 20px">
            <div class="image-container" v-for="event in events" v-bind:key="event">
                <router-link :to="'/theatre/'+parse_link(event.event)">
                    <div class="zoom-container">
                        <!--suppress HtmlUnknownTarget -->
                        <img :src="event.thumbnail" alt="Event" style="width:100%; height: 200px;">
                        <div class="content">
                            <h1 style="align-self: flex-end">{{event.event}}</h1>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import theatre from '../json/theatre.json'

    export default {
        name: "Theatre",
        data() {
            return {
                events: theatre.events
            }
        },
        methods: {
            parse_link: function (name) {
                name = name.replace(/ /g, '_').toLowerCase()
                return name
            }
        }
    }
</script>

<style scoped>
    .image-container {
        position: relative;
        max-width: 400px; /* Maximum width */
        margin: 0 auto; /* Center it */
    }

    .image-container .content {
        position: absolute; /* Position the background text */
        bottom: 0; /* At the bottom. Use top:0 to append it to the top */
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.25); /* Black background with 0.3 opacity */
        color: #f1f1f1; /* Grey text */
        width: 100%; /* Full width */
        display: grid;
        height: 100%;
        padding: 20px; /* Some padding */
    }

    .zoom-container {
        transition: transform .2s;
    }

    .zoom-container:hover {
        transform: scale(1.21);
        background: rgba(0, 0, 0, 0); /* Black background with 0.3 opacity */
    }

    h1 {
        font-size: 30px;
        font-family: "Goudy Old Style Bold", serif;
    }

    .grid {
        max-width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1rem;
        margin: auto;
    }
</style>