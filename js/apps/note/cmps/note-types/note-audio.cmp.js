
export default {
    name: 'noteAudio',
    props: ['note'],
    template: `
    <section>
        <h1>{{note.info.txt}}</h1>
        <audio controls>
            <source :src="note.info.src" type="audio/mpeg">
        </audio>
        </section>
    `
    ,
    data() {
        return {
            type: 'noteAudio',
            isPinned: true,
            info: {
                src: '../../assets/mp3/song.mp3',
                txt: 'We will Rock You'
            }
        };
    }

}




