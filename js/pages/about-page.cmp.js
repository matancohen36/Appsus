
export default {
    name: 'aboutPage',
    template: `
    <section class="about-page flex column space-evenly">
        <div class="about-info flex">
            <div class="team-member">
                <img class="me-img" src="assets/inbar.jpg" alt="">
                <h4>Inbar Tamir</h4>
                <p>Fullstack Developer</p>
            </div>
            <div class="me-txt">
                <p>A little about myself... I took a Fullstack Programming course in
                Coding Academy, very passionate about coding and designing web pages, love learning new languages and
                broadening my knowledge.</p>
            </div>
        </div>
        <div class="about-info flex">
            <div class="team-member">
                <img class="me-img" src="assets/matan.jpg" alt="">
                <h4>Matan Cohen</h4>
                <p>Fullstack Developer</p>
            </div>
            <div class="me-txt">
                <p>Hey My Name Is Matan Im 22 Years old , i Am Taking a Coding Course in Coding Academy.</p>
            </div>
        </div>
    </section>
    `,
    methods: {
    },
    mounted() {
    },
    created() {
    },
    components: {
    }
}