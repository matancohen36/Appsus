// import { noteService } from '../../services/note-service.js'
// export default {
//     name: 'noteMap',
//     props: ['note'],
//     template: `
//             <section class="map-container" id="map">
//                 <p>{{note.info.Map}}</p>

//             </section>
//         `,
//     data() {
//         return {
//             map: '',
//             type: 'noteMap',
//             isPinned: true,
//             info: {
//                 txt: 'Fullstack Me Baby!'
//             }
//         };
//     },
//     methods: {
//         initMap(lat = 32.0749831, lng = 34.9120554) {
//             return noteService.connectGoogleApi()
//                 .then(() => {
//                     this.map = new google.maps.Map(document.querySelector('#map'), { center: { lat, lng }, zoom: 15 })
//                 })
//         }
//     },
//     created() {
//         this.initMap();
//     }
// }