import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteVideo',
    props: ['note'],
    template: `
        <section >
                    <h1>{{note.info.title}}</h1>
            <iframe :src="videoUrl"></iframe>
        </section>
    `
    ,
    data() {
        return {
        };
    },
    methods: {
      
    },
    computed: {
        videoUrl() {
            return this.note.info.url.replace('watch?v=', 'embed/');
        }
    }
}





