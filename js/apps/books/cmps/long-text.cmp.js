
export default {
    props: ['txt'],
    template: `
        <span>{{shortTxt}}...</span>
    `,
    computed: {
        shortTxt() {
            return this.txt.substr(0, 100);
        }
    }
}